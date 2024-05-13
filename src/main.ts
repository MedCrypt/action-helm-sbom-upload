import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';

import * as core from '@actions/core';
import { unparse } from 'uuid-parse';

import { UUID } from './protobuf/heim_common_pb';
import { OrganizationProductVersion } from './protobuf/v1/external/heim_organization_product_pb';
import { ListOrganizations, OrganizationInfo } from './protobuf/v1/external/heim_organization_pb';
import {
  CreateOrganizationProduct,
  CreateOrganizationProductVersion,
  ListOrganizationProductVersions,
  ListOrganizationProducts,
  OrganizationProduct,
} from './protobuf/v1/external/heim_organization_product_pb';
import { SubmitSbom } from './protobuf/v1/external/heim_sbom_pb';

type TOrganizationMsg = ListOrganizations;

type TOrganizationProductMsg =
  | ListOrganizationProducts
  | ListOrganizationProductVersions
  | CreateOrganizationProduct
  | CreateOrganizationProductVersion
  | SubmitSbom;

type TWebApiMsg = TOrganizationMsg | TOrganizationProductMsg;

interface ApiCallInformation {
  baseUrl: string;
  clientId: string;
  clientSecret: string;
}

interface UploadSbomResult {
  statusMessages: string[];
}

export async function run(): Promise<void> {
  // all parameters are required, and all should be trimmed
  const inputOptions: core.InputOptions = {
    required: true,
    trimWhitespace: true,
  };
  let baseUrl: string = core.getInput('api-base-url', inputOptions);
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
  }
  const productName: string = core.getInput('product-name', inputOptions);
  const productVersionName: string = core.getInput('product-version-name', inputOptions);
  const clientId = core.getInput('client-id', inputOptions);
  const clientSecret = core.getInput('client-secret', inputOptions);
  const sbomFilePath = core.getInput('sbom-file-path', inputOptions);
  const shouldCreate = core.getBooleanInput('create-product-and-version-if-missing');
  const callInfo: ApiCallInformation = {
    baseUrl: baseUrl,
    clientId: clientId,
    clientSecret: clientSecret,
  };

  // read the file first in case things go wrong
  if (!existsSync(sbomFilePath)) {
    core.setFailed(`SBOM file does not exist at path ${sbomFilePath}`);
    return;
  }
  const fileName = basename(sbomFilePath);
  const fileReadResults = await readFile(sbomFilePath);

  core.info(`The SBOM file is ${fileReadResults.byteLength} bytes.`);

  const defaultOrg = await GetDefaultOrganization(callInfo);
  if (defaultOrg === undefined) {
    core.setFailed(`Unable to determine default organization`);
    return;
  }
  const orgUuid = defaultOrg.getOrg()?.getId();

  const allProducts = await ListAllProducts(orgUuid, callInfo);
  core.info(`Resolving product (${productName}) and version (${productVersionName})...`);
  const foundProducts = allProducts.filter((p) => p.getName().toLowerCase() === productName.toLowerCase());
  let foundOrCreatedProduct: OrganizationProduct | undefined = undefined;
  if (foundProducts.length === 0) {
    if (!shouldCreate) {
      core.setFailed(`Unable to locate product ${productName}, and create-product-and-version-if-missing is false.`);
      return;
    }
    core.info(`Creating product ${productName}...`);
    foundOrCreatedProduct = await CreateProduct(orgUuid, productName, callInfo);
  } else {
    core.info(`Found existing product ${productName}`);
    foundOrCreatedProduct = foundProducts[0];
  }

  const allVersions = await ListAllVersionsOfProduct(foundOrCreatedProduct.getId(), callInfo);
  const foundVersions = allVersions.filter(
    (v) => v.getRawVersionString().toLowerCase() === productVersionName.toLowerCase(),
  );
  let foundOrCreatedVersion: OrganizationProductVersion | undefined = undefined;
  if (foundVersions.length === 0) {
    if (!shouldCreate) {
      core.setFailed(
        `Unable to locate version ${productVersionName} of product ${productName}, and create-product-and-version-if-missing is false.`,
      );
      return;
    }
    core.info(`Creating version ${productVersionName} for product ${productName}...`);
    foundOrCreatedVersion = await CreateProductVersion(foundOrCreatedProduct.getId(), productVersionName, callInfo);
  } else {
    core.info(`Found existing version ${productVersionName}`);
    foundOrCreatedVersion = foundVersions[0];
  }

  core.info(`Uploading SBOM...`);
  // finally, upload the SBOM
  const sbomUploadResponse = await UploadSbom(foundOrCreatedVersion.getId(), fileName, fileReadResults, callInfo);
  core.info(`SBOM uploaded successfully.`);
  sbomUploadResponse.statusMessages.forEach((msg) => core.info(`Response Message: ${msg}`));
}

// overloaded function that lets TS enforce if an undefined cant be passed in, an undefined won't be returned
export function UuidBytesToString(uuidBytes: undefined): null;
export function UuidBytesToString(uuidBytes: Uint8Array | string): string;
export function UuidBytesToString(uuidBytes: Uint8Array | string | undefined): string | null;
export function UuidBytesToString(uuidBytes: Uint8Array | string | undefined): string | null {
  if (!uuidBytes) return null;
  return unparse(uuidBytes as Buffer);
}

export interface IDeserializer<T> {
  deserializeBinary(bytes: Uint8Array): T; // The method we care about
  [propName: string]: any; // this means it can have any other props of any other names/types
}

const GetDefaultOrganization = async (callInfo: ApiCallInformation): Promise<OrganizationInfo | undefined> => {
  const listOrganizations = new ListOrganizations();
  const request = new ListOrganizations.Request();
  listOrganizations.setRequest(request);
  const orgResponse = await DoWebApiPostRequest('listorganizations', listOrganizations, ListOrganizations, callInfo);
  const orgs = orgResponse.getResponse()?.getOrginfoList();
  if (orgs === undefined || orgs.length === 0) {
    return undefined;
  }
  return orgs[0];
};

const ListAllProducts = async (
  organizationUuid: UUID | undefined,
  callInfo: ApiCallInformation,
): Promise<OrganizationProduct[]> => {
  const listProducts = new ListOrganizationProducts();
  const request = new ListOrganizationProducts.Request();
  listProducts.setRequest(request);
  request.setOrganizationId(organizationUuid);

  const productResponse = await DoWebApiPostRequest(
    'listorganizationproducts',
    listProducts,
    ListOrganizationProducts,
    callInfo,
  );
  const productList = productResponse.getResponse()?.getOrganizationProductList();
  if (!productList) {
    throw new Error('Error getting product list');
  }
  return productList;
};

const CreateProduct = async (
  organizationUuid: UUID | undefined,
  productName: string,
  callInfo: ApiCallInformation,
): Promise<OrganizationProduct> => {
  const createProduct = new CreateOrganizationProduct();
  const request = new CreateOrganizationProduct.Request();
  createProduct.setRequest(request);
  request.setOrganizationId(organizationUuid);
  request.setName(productName);

  const productResponse = await DoWebApiPostRequest(
    'createorganizationproduct',
    createProduct,
    CreateOrganizationProduct,
    callInfo,
  );
  const createdProduct = productResponse.getResponse()?.getOrganizationProduct();
  if (!createdProduct) {
    throw new Error('Error creating product');
  }
  return createdProduct;
};

const ListAllVersionsOfProduct = async (
  productUuid: UUID | undefined,
  callInfo: ApiCallInformation,
): Promise<OrganizationProductVersion[]> => {
  const listVersions = new ListOrganizationProductVersions();
  const requestData = new ListOrganizationProductVersions.Request();
  listVersions.setRequest(requestData);
  requestData.setOrganizationProductId(productUuid);

  const productVersionResponse = await DoWebApiPostRequest(
    'listorganizationproductversions',
    listVersions,
    ListOrganizationProductVersions,
    callInfo,
  );
  const versionList = productVersionResponse.getResponse()?.getOrganizationProductVersionList();
  if (!versionList) {
    throw new Error('Error getting product version list');
  }
  return versionList;
};

const CreateProductVersion = async (
  productUuid: UUID | undefined,
  versionString: string,
  callInfo: ApiCallInformation,
): Promise<OrganizationProductVersion> => {
  core.info(`Creating version ${versionString} for product...`);
  const createVersion = new CreateOrganizationProductVersion();
  const requestData = new CreateOrganizationProductVersion.Request();
  createVersion.setRequest(requestData);
  requestData.setOrganizationProductId(productUuid);
  requestData.setRawVersionString(versionString);

  const productVersionResponse = await DoWebApiPostRequest(
    'createorganizationproductversion',
    createVersion,
    CreateOrganizationProductVersion,
    callInfo,
  );
  const productVersion = productVersionResponse.getResponse()?.getOrganizationProductVersion();
  if (!productVersion) {
    throw Error('Error creating product version');
  }
  return productVersion;
};

const UploadSbom = async (
  orgProdVersUuid: UUID | undefined,
  fileName: string,
  fileData: Uint8Array,
  callInfo: ApiCallInformation,
): Promise<UploadSbomResult> => {
  const submitSbom = new SubmitSbom();
  const requestData = new SubmitSbom.Request();
  submitSbom.setRequest(requestData);
  requestData.setOrganizationProductVersionId(orgProdVersUuid);
  requestData.setFileName(fileName);
  requestData.setFileContents(fileData);
  // TODO: consider SPDX support (setFileType, default is Cyclone)
  requestData.setFileType(0);

  const submitSbomResponse = await DoWebApiPostRequest('submitsbom', submitSbom, SubmitSbom, callInfo);
  const response: UploadSbomResult = {
    statusMessages: submitSbomResponse.getResponse()?.getMetadata()?.getStatusMessageList() ?? [],
  };
  return response;
};

const DoWebApiPostRequest = async <T extends TWebApiMsg>(
  endpointSuffix: string,
  webApiRequest: T,
  deserializer: IDeserializer<T>,
  callInfo: ApiCallInformation,
): Promise<T> => {
  const endpoint = callInfo.baseUrl + endpointSuffix;
  const reqBytes = webApiRequest.serializeBinary();
  const defaultOptions: RequestInit = {
    method: 'POST',
    credentials: 'include',
    body: reqBytes.buffer,
    headers: {
      client_id: callInfo.clientId,
      client_secret: callInfo.clientSecret,
      'Content-Type': 'application/x-protobuf',
    },
  };
  const requestPromise = fetch(endpoint, defaultOptions);
  const rawResponse = await requestPromise;
  // TODO: http status based error handling
  const body = await rawResponse.arrayBuffer();
  const response = deserializer.deserializeBinary(new Uint8Array(body));
  // TODO: handle bad metadata
  return response;
};

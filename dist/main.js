"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidBytesToString = exports.run = void 0;
const core = __importStar(require("@actions/core"));
const heim_organization_pb_1 = require("./protobuf/v1/external/heim_organization_pb");
const heim_organization_product_pb_1 = require("./protobuf/v1/external/heim_organization_product_pb");
const uuid_parse_1 = require("uuid-parse");
const promises_1 = require("node:fs/promises");
const heim_sbom_pb_1 = require("./protobuf/v1/external/heim_sbom_pb");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
async function run() {
    // all parameters are required, and all should be trimmed.
    const inputOptions = { required: true, trimWhitespace: true };
    console.log(`This is the version with protobuf stripped out.`);
    let baseUrl = core.getInput('api-base-url', inputOptions);
    if (!baseUrl.endsWith('/')) {
        baseUrl += '/';
    }
    const productName = core.getInput('product-name', inputOptions);
    const productVersionName = core.getInput('product-version-name', inputOptions);
    const clientId = core.getInput('client-id', inputOptions);
    const clientSecret = core.getInput('client-secret', inputOptions);
    const sbomFilePath = core.getInput('sbom-file-path', inputOptions);
    const shouldCreate = core.getBooleanInput('create-product-and-version-if-missing');
    const callInfo = {
        baseUrl: baseUrl,
        clientId: clientId,
        clientSecret: clientSecret
    };
    // read the file first in case things go wrong
    if (!(0, node_fs_1.existsSync)(sbomFilePath)) {
        core.setFailed(`SBOM file does not exist at path ${sbomFilePath}`);
        return;
    }
    const fileName = (0, node_path_1.basename)(sbomFilePath);
    const fileReadResults = await (0, promises_1.readFile)(sbomFilePath);
    console.log(`The SBOM file is ${fileReadResults.byteLength} bytes.`);
    const defaultOrg = await GetDefaultOrganization(callInfo);
    if (defaultOrg == undefined) {
        core.setFailed(`Unable to determine default organization`);
        return;
    }
    const orgUuid = defaultOrg.getOrg()?.getId();
    const allProducts = await ListAllProducts(orgUuid, callInfo);
    console.log(`Resolving product (${productName}) and version (${productVersionName})...`);
    const foundProducts = allProducts.filter((p) => p.getName().toLowerCase() == productName.toLowerCase());
    let foundOrCreatedProduct = undefined;
    if (foundProducts.length == 0) {
        if (!shouldCreate) {
            core.setFailed(`Unable to locate product ${productName}, and create-product-and-version-if-missing is false.`);
            return;
        }
        console.log(`Creating product ${productName}...`);
        foundOrCreatedProduct = await CreateProduct(orgUuid, productName, callInfo);
    }
    else {
        console.log(`Found existing product`);
        foundOrCreatedProduct = foundProducts[0];
    }
    const allVersions = await ListAllVersionsOfProduct(foundOrCreatedProduct.getId(), callInfo);
    const foundVersions = allVersions.filter((v) => v.getRawVersionString().toLowerCase() == productVersionName.toLowerCase());
    let foundOrCreatedVersion = undefined;
    if (foundVersions.length == 0) {
        if (!shouldCreate) {
            core.setFailed(`Unable to locate version ${productVersionName} of product ${productName}, and create-product-and-version-if-missing is false.`);
            return;
        }
        console.log(`Creating version ${productVersionName} for product ${productName}...`);
        foundOrCreatedVersion = await CreateProductVersion(foundOrCreatedProduct.getId(), productVersionName, callInfo);
    }
    else {
        console.log(`Found existing version`);
        foundOrCreatedVersion = foundVersions[0];
    }
    console.log(`Uploading SBOM...`);
    // finally, upload the SBOM
    const sbomUploadResponse = await UploadSbom(foundOrCreatedVersion.getId(), fileName, fileReadResults, callInfo);
    console.log(`SBOM uploaded successfully.`);
    sbomUploadResponse.statusMessages.forEach((msg) => console.log(`Response Message: ${msg}`));
}
exports.run = run;
function UuidBytesToString(uuidBytes) {
    if (!uuidBytes)
        return null;
    return (0, uuid_parse_1.unparse)(uuidBytes);
}
exports.UuidBytesToString = UuidBytesToString;
const GetDefaultOrganization = async (callInfo) => {
    const listOrganizations = new heim_organization_pb_1.ListOrganizations;
    const request = new heim_organization_pb_1.ListOrganizations.Request;
    listOrganizations.setRequest(request);
    const orgResponse = await DoWebApiPostRequest("listorganizations", listOrganizations, heim_organization_pb_1.ListOrganizations, callInfo);
    const orgs = orgResponse.getResponse()?.getOrginfoList();
    if (orgs == undefined || orgs.length == 0) {
        throw Error(`Unable to determine default organization out of ${orgs?.length} possible candidates`);
    }
    return orgs[0];
};
const ListAllProducts = async (organizationUuid, callInfo) => {
    console.log(`Listing all products for org ${UuidBytesToString(organizationUuid?.getUuid())}`);
    const listProducts = new heim_organization_product_pb_1.ListOrganizationProducts();
    const request = new heim_organization_product_pb_1.ListOrganizationProducts.Request();
    listProducts.setRequest(request);
    request.setOrganizationId(organizationUuid);
    const productResponse = await DoWebApiPostRequest("listorganizationproducts", listProducts, heim_organization_product_pb_1.ListOrganizationProducts, callInfo);
    const productList = productResponse.getResponse()?.getOrganizationProductList();
    if (!productList) {
        throw new Error('Error getting product list');
    }
    return productList;
};
const CreateProduct = async (organizationUuid, productName, callInfo) => {
    console.log(`Creating product ${productName}...`);
    const createProduct = new heim_organization_product_pb_1.CreateOrganizationProduct();
    const request = new heim_organization_product_pb_1.CreateOrganizationProduct.Request();
    createProduct.setRequest(request);
    request.setOrganizationId(organizationUuid);
    request.setName(productName);
    const productResponse = await DoWebApiPostRequest("createorganizationproduct", createProduct, heim_organization_product_pb_1.CreateOrganizationProduct, callInfo);
    const createdProduct = productResponse.getResponse()?.getOrganizationProduct();
    if (!createdProduct) {
        throw new Error('Error creating product');
    }
    return createdProduct;
};
const ListAllVersionsOfProduct = async (productUuid, callInfo) => {
    console.log(`Listing all versions for product ${UuidBytesToString(productUuid?.getUuid())}`);
    const listVersions = new heim_organization_product_pb_1.ListOrganizationProductVersions();
    const requestData = new heim_organization_product_pb_1.ListOrganizationProductVersions.Request();
    listVersions.setRequest(requestData);
    requestData.setOrganizationProductId(productUuid);
    const productVersionResponse = await DoWebApiPostRequest("listorganizationproductversions", listVersions, heim_organization_product_pb_1.ListOrganizationProductVersions, callInfo);
    const versionList = productVersionResponse.getResponse()?.getOrganizationProductVersionList();
    if (!versionList) {
        throw new Error('Error getting product version list');
    }
    console.log(`${versionList.length} versions found.`);
    return versionList;
};
const CreateProductVersion = async (productUuid, versionString, callInfo) => {
    console.log(`Creating version ${versionString} for product...`);
    const createVersion = new heim_organization_product_pb_1.CreateOrganizationProductVersion();
    const requestData = new heim_organization_product_pb_1.CreateOrganizationProductVersion.Request();
    createVersion.setRequest(requestData);
    requestData.setOrganizationProductId(productUuid);
    requestData.setRawVersionString(versionString);
    const productVersionResponse = await DoWebApiPostRequest("createorganizationproductversion", createVersion, heim_organization_product_pb_1.CreateOrganizationProductVersion, callInfo);
    const productVersion = productVersionResponse.getResponse()?.getOrganizationProductVersion();
    if (!productVersion) {
        throw Error('Error creating product version');
    }
    return productVersion;
};
const UploadSbom = async (orgProdVersUuid, fileName, fileData, callInfo) => {
    const submitSbom = new heim_sbom_pb_1.SubmitSbom();
    const requestData = new heim_sbom_pb_1.SubmitSbom.Request();
    submitSbom.setRequest(requestData);
    requestData.setOrganizationProductVersionId(orgProdVersUuid);
    requestData.setFileName(fileName);
    requestData.setFileContents(fileData);
    // TODO: consider SPDX support (setFileType, default is Cyclone)
    requestData.setFileType(0);
    console.log(`Name of SubmitSbom is ${heim_sbom_pb_1.SubmitSbom.name.toLowerCase()}`);
    const submitSbomResponse = await DoWebApiPostRequest("submitsbom", submitSbom, heim_sbom_pb_1.SubmitSbom, callInfo);
    const response = {
        statusMessages: submitSbomResponse.getResponse()?.getMetadata()?.getStatusMessageList() ?? []
    };
    return response;
};
const DoWebApiPostRequest = async (endpointSuffix, webApiRequest, deserializer, callInfo) => {
    const endpoint = callInfo.baseUrl + endpointSuffix;
    const reqBytes = webApiRequest.serializeBinary();
    const defaultOptions = {
        method: "POST",
        credentials: "include",
        body: reqBytes.buffer,
        headers: {
            "client_id": callInfo.clientId,
            "client_secret": callInfo.clientSecret,
            "Content-Type": "application/x-protobuf"
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
//# sourceMappingURL=main.js.map
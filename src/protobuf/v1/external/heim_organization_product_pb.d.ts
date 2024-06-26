// package: medcrypt.helm.api.v1.organizationproduct
// file: v1/external/heim_organization_product.proto

import * as jspb from "google-protobuf";
import * as heim_common_pb from "../../heim_common_pb";

export class OrganizationProduct extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): heim_common_pb.UUID | undefined;
  setId(value?: heim_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  getIsSbomView(): boolean;
  setIsSbomView(value: boolean): void;

  getIsSbomModify(): boolean;
  setIsSbomModify(value: boolean): void;

  getIsVulnView(): boolean;
  setIsVulnView(value: boolean): void;

  getIsVulnModify(): boolean;
  setIsVulnModify(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationProduct.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationProduct): OrganizationProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationProduct;
  static deserializeBinaryFromReader(message: OrganizationProduct, reader: jspb.BinaryReader): OrganizationProduct;
}

export namespace OrganizationProduct {
  export type AsObject = {
    id?: heim_common_pb.UUID.AsObject,
    name: string,
    isSbomView: boolean,
    isSbomModify: boolean,
    isVulnView: boolean,
    isVulnModify: boolean,
  }
}

export class ListOrganizationProducts extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListOrganizationProducts.Request | undefined;
  setRequest(value?: ListOrganizationProducts.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): ListOrganizationProducts.Response | undefined;
  setResponse(value?: ListOrganizationProducts.Response): void;

  getPayloadCase(): ListOrganizationProducts.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationProducts.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationProducts): ListOrganizationProducts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationProducts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationProducts;
  static deserializeBinaryFromReader(message: ListOrganizationProducts, reader: jspb.BinaryReader): ListOrganizationProducts;
}

export namespace ListOrganizationProducts {
  export type AsObject = {
    request?: ListOrganizationProducts.Request.AsObject,
    response?: ListOrganizationProducts.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.RequestMetadata | undefined;
    setMetadata(value?: heim_common_pb.RequestMetadata): void;

    hasOrganizationId(): boolean;
    clearOrganizationId(): void;
    getOrganizationId(): heim_common_pb.UUID | undefined;
    setOrganizationId(value?: heim_common_pb.UUID): void;

    getForSboms(): boolean;
    setForSboms(value: boolean): void;

    getForVulns(): boolean;
    setForVulns(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      metadata?: heim_common_pb.RequestMetadata.AsObject,
      organizationId?: heim_common_pb.UUID.AsObject,
      forSboms: boolean,
      forVulns: boolean,
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

    clearOrganizationProductList(): void;
    getOrganizationProductList(): Array<OrganizationProduct>;
    setOrganizationProductList(value: Array<OrganizationProduct>): void;
    addOrganizationProduct(value?: OrganizationProduct, index?: number): OrganizationProduct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      metadata?: heim_common_pb.ResponseMetadata.AsObject,
      organizationProductList: Array<OrganizationProduct.AsObject>,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export class CreateOrganizationProduct extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): CreateOrganizationProduct.Request | undefined;
  setRequest(value?: CreateOrganizationProduct.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): CreateOrganizationProduct.Response | undefined;
  setResponse(value?: CreateOrganizationProduct.Response): void;

  getPayloadCase(): CreateOrganizationProduct.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationProduct.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationProduct): CreateOrganizationProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationProduct;
  static deserializeBinaryFromReader(message: CreateOrganizationProduct, reader: jspb.BinaryReader): CreateOrganizationProduct;
}

export namespace CreateOrganizationProduct {
  export type AsObject = {
    request?: CreateOrganizationProduct.Request.AsObject,
    response?: CreateOrganizationProduct.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.RequestMetadata | undefined;
    setMetadata(value?: heim_common_pb.RequestMetadata): void;

    hasOrganizationId(): boolean;
    clearOrganizationId(): void;
    getOrganizationId(): heim_common_pb.UUID | undefined;
    setOrganizationId(value?: heim_common_pb.UUID): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      metadata?: heim_common_pb.RequestMetadata.AsObject,
      organizationId?: heim_common_pb.UUID.AsObject,
      name: string,
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

    hasOrganizationProduct(): boolean;
    clearOrganizationProduct(): void;
    getOrganizationProduct(): OrganizationProduct | undefined;
    setOrganizationProduct(value?: OrganizationProduct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      metadata?: heim_common_pb.ResponseMetadata.AsObject,
      organizationProduct?: OrganizationProduct.AsObject,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export class OrganizationProductVersion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): heim_common_pb.UUID | undefined;
  setId(value?: heim_common_pb.UUID): void;

  hasOrganizationProductId(): boolean;
  clearOrganizationProductId(): void;
  getOrganizationProductId(): heim_common_pb.UUID | undefined;
  setOrganizationProductId(value?: heim_common_pb.UUID): void;

  getRawVersionString(): string;
  setRawVersionString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationProductVersion.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationProductVersion): OrganizationProductVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationProductVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationProductVersion;
  static deserializeBinaryFromReader(message: OrganizationProductVersion, reader: jspb.BinaryReader): OrganizationProductVersion;
}

export namespace OrganizationProductVersion {
  export type AsObject = {
    id?: heim_common_pb.UUID.AsObject,
    organizationProductId?: heim_common_pb.UUID.AsObject,
    rawVersionString: string,
  }
}

export class ListOrganizationProductVersions extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListOrganizationProductVersions.Request | undefined;
  setRequest(value?: ListOrganizationProductVersions.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): ListOrganizationProductVersions.Response | undefined;
  setResponse(value?: ListOrganizationProductVersions.Response): void;

  getPayloadCase(): ListOrganizationProductVersions.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationProductVersions.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationProductVersions): ListOrganizationProductVersions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationProductVersions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationProductVersions;
  static deserializeBinaryFromReader(message: ListOrganizationProductVersions, reader: jspb.BinaryReader): ListOrganizationProductVersions;
}

export namespace ListOrganizationProductVersions {
  export type AsObject = {
    request?: ListOrganizationProductVersions.Request.AsObject,
    response?: ListOrganizationProductVersions.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.RequestMetadata | undefined;
    setMetadata(value?: heim_common_pb.RequestMetadata): void;

    hasOrganizationProductId(): boolean;
    clearOrganizationProductId(): void;
    getOrganizationProductId(): heim_common_pb.UUID | undefined;
    setOrganizationProductId(value?: heim_common_pb.UUID): void;

    getForSboms(): boolean;
    setForSboms(value: boolean): void;

    getForVulns(): boolean;
    setForVulns(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      metadata?: heim_common_pb.RequestMetadata.AsObject,
      organizationProductId?: heim_common_pb.UUID.AsObject,
      forSboms: boolean,
      forVulns: boolean,
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

    clearOrganizationProductVersionList(): void;
    getOrganizationProductVersionList(): Array<OrganizationProductVersion>;
    setOrganizationProductVersionList(value: Array<OrganizationProductVersion>): void;
    addOrganizationProductVersion(value?: OrganizationProductVersion, index?: number): OrganizationProductVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      metadata?: heim_common_pb.ResponseMetadata.AsObject,
      organizationProductVersionList: Array<OrganizationProductVersion.AsObject>,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export class CreateOrganizationProductVersion extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): CreateOrganizationProductVersion.Request | undefined;
  setRequest(value?: CreateOrganizationProductVersion.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): CreateOrganizationProductVersion.Response | undefined;
  setResponse(value?: CreateOrganizationProductVersion.Response): void;

  getPayloadCase(): CreateOrganizationProductVersion.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationProductVersion.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationProductVersion): CreateOrganizationProductVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationProductVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationProductVersion;
  static deserializeBinaryFromReader(message: CreateOrganizationProductVersion, reader: jspb.BinaryReader): CreateOrganizationProductVersion;
}

export namespace CreateOrganizationProductVersion {
  export type AsObject = {
    request?: CreateOrganizationProductVersion.Request.AsObject,
    response?: CreateOrganizationProductVersion.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.RequestMetadata | undefined;
    setMetadata(value?: heim_common_pb.RequestMetadata): void;

    hasOrganizationProductId(): boolean;
    clearOrganizationProductId(): void;
    getOrganizationProductId(): heim_common_pb.UUID | undefined;
    setOrganizationProductId(value?: heim_common_pb.UUID): void;

    getRawVersionString(): string;
    setRawVersionString(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      metadata?: heim_common_pb.RequestMetadata.AsObject,
      organizationProductId?: heim_common_pb.UUID.AsObject,
      rawVersionString: string,
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

    hasOrganizationProductVersion(): boolean;
    clearOrganizationProductVersion(): void;
    getOrganizationProductVersion(): OrganizationProductVersion | undefined;
    setOrganizationProductVersion(value?: OrganizationProductVersion): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      metadata?: heim_common_pb.ResponseMetadata.AsObject,
      organizationProductVersion?: OrganizationProductVersion.AsObject,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}


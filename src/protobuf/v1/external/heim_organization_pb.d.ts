// package: medcrypt.helm.api.v1.organization
// file: v1/external/heim_organization.proto

import * as jspb from "google-protobuf";
import * as heim_common_pb from "../../heim_common_pb";

export class Organization extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): heim_common_pb.UUID | undefined;
  setId(value?: heim_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  getEmailDomains(): string;
  setEmailDomains(value: string): void;

  getAuthConnections(): string;
  setAuthConnections(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id?: heim_common_pb.UUID.AsObject,
    name: string,
    emailDomains: string,
    authConnections: string,
  }
}

export class OrganizationInfo extends jspb.Message {
  hasOrg(): boolean;
  clearOrg(): void;
  getOrg(): Organization | undefined;
  setOrg(value?: Organization): void;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationInfo): OrganizationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationInfo;
  static deserializeBinaryFromReader(message: OrganizationInfo, reader: jspb.BinaryReader): OrganizationInfo;
}

export namespace OrganizationInfo {
  export type AsObject = {
    org?: Organization.AsObject,
    isAdmin: boolean,
  }
}

export class ListOrganizations extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListOrganizations.Request | undefined;
  setRequest(value?: ListOrganizations.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): ListOrganizations.Response | undefined;
  setResponse(value?: ListOrganizations.Response): void;

  getPayloadCase(): ListOrganizations.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizations.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizations): ListOrganizations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizations;
  static deserializeBinaryFromReader(message: ListOrganizations, reader: jspb.BinaryReader): ListOrganizations;
}

export namespace ListOrganizations {
  export type AsObject = {
    request?: ListOrganizations.Request.AsObject,
    response?: ListOrganizations.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.RequestMetadata | undefined;
    setMetadata(value?: heim_common_pb.RequestMetadata): void;

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
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

    clearOrginfoList(): void;
    getOrginfoList(): Array<OrganizationInfo>;
    setOrginfoList(value: Array<OrganizationInfo>): void;
    addOrginfo(value?: OrganizationInfo, index?: number): OrganizationInfo;

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
      orginfoList: Array<OrganizationInfo.AsObject>,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}


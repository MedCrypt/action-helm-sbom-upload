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


export class Workspace extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): heim_common_pb.UUID | undefined;
  setId(value?: heim_common_pb.UUID): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getCreatedDate(): number;
  setCreatedDate(value: number): void;

  getCreatedBy(): string;
  setCreatedBy(value: string): void;

  hasOrgId(): boolean;
  clearOrgId(): void;
  getOrgId(): heim_common_pb.UUID | undefined;
  setOrgId(value?: heim_common_pb.UUID): void;


  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Workspace.AsObject;
  static toObject(includeInstance: boolean, msg: Workspace): Workspace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Workspace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workspace;
  static deserializeBinaryFromReader(message: Workspace, reader: jspb.BinaryReader): Workspace;
}

export namespace Workspace {
  export type AsObject = {
    id?: heim_common_pb.UUID.AsObject,
    name: string,
    description: string,
    isDefault: boolean,
    isActive: boolean,
    createdDate: number,
    createdBy: string,
    orgId?: heim_common_pb.UUID.AsObject,
  }
}

export class WorkspaceInfo extends jspb.Message {
  hasWorkspace(): boolean;
  clearWorkspace(): void;
  getWorkspace(): Workspace | undefined;
  setWorkspace(value?: Workspace): void;

  getIsWsAdmin(): boolean;
  setIsWsAdmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspaceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspaceInfo): WorkspaceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkspaceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspaceInfo;
  static deserializeBinaryFromReader(message: WorkspaceInfo, reader: jspb.BinaryReader): WorkspaceInfo;
}

export namespace WorkspaceInfo {
  export type AsObject = {
    workspace?: Workspace.AsObject,
    isWsAdmin: boolean,
  }
}

export class ListWorkspacesForUser extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListWorkspacesForUser.Request | undefined;
  setRequest(value?: ListWorkspacesForUser.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): ListWorkspacesForUser.Response | undefined;
  setResponse(value?: ListWorkspacesForUser.Response): void;

  getPayloadCase(): ListWorkspacesForUser.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkspacesForUser.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkspacesForUser): ListWorkspacesForUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWorkspacesForUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkspacesForUser;
  static deserializeBinaryFromReader(message: ListWorkspacesForUser, reader: jspb.BinaryReader): ListWorkspacesForUser;
}

export namespace ListWorkspacesForUser {
  export type AsObject = {
    request?: ListWorkspacesForUser.Request.AsObject,
    response?: ListWorkspacesForUser.Response.AsObject,
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

    clearWorkspaceinfoList(): void;
    getWorkspaceinfoList(): Array<WorkspaceInfo>;
    setWorkspaceinfoList(value: Array<WorkspaceInfo>): void;
    addWorkspaceinfo(value?: WorkspaceInfo, index?: number): WorkspaceInfo;

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
      workspaceinfoList: Array<WorkspaceInfo.AsObject>,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}


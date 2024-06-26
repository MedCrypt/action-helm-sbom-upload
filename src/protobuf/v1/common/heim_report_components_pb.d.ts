// package: medcrypt.helm.web.reports
// file: v1/common/heim_report_components.proto

import * as jspb from "google-protobuf";
import * as heim_common_pb from "../../heim_common_pb";
import * as v1_common_heim_enums_pb from "../../v1/common/heim_enums_pb";

export class RequestReportDataFda extends jspb.Message {
  hasOrganizationProductVersionId(): boolean;
  clearOrganizationProductVersionId(): void;
  getOrganizationProductVersionId(): heim_common_pb.UUID | undefined;
  setOrganizationProductVersionId(value?: heim_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestReportDataFda.AsObject;
  static toObject(includeInstance: boolean, msg: RequestReportDataFda): RequestReportDataFda.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestReportDataFda, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestReportDataFda;
  static deserializeBinaryFromReader(message: RequestReportDataFda, reader: jspb.BinaryReader): RequestReportDataFda;
}

export namespace RequestReportDataFda {
  export type AsObject = {
    organizationProductVersionId?: heim_common_pb.UUID.AsObject,
  }
}

export class RequestReportDataCycloneDxVex extends jspb.Message {
  hasOrganizationProductVersionId(): boolean;
  clearOrganizationProductVersionId(): void;
  getOrganizationProductVersionId(): heim_common_pb.UUID | undefined;
  setOrganizationProductVersionId(value?: heim_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestReportDataCycloneDxVex.AsObject;
  static toObject(includeInstance: boolean, msg: RequestReportDataCycloneDxVex): RequestReportDataCycloneDxVex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestReportDataCycloneDxVex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestReportDataCycloneDxVex;
  static deserializeBinaryFromReader(message: RequestReportDataCycloneDxVex, reader: jspb.BinaryReader): RequestReportDataCycloneDxVex;
}

export namespace RequestReportDataCycloneDxVex {
  export type AsObject = {
    organizationProductVersionId?: heim_common_pb.UUID.AsObject,
  }
}

export class RequestReportRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): heim_common_pb.RequestMetadata | undefined;
  setMetadata(value?: heim_common_pb.RequestMetadata): void;

  hasReportRequestDataFda(): boolean;
  clearReportRequestDataFda(): void;
  getReportRequestDataFda(): RequestReportDataFda | undefined;
  setReportRequestDataFda(value?: RequestReportDataFda): void;

  hasReportRequestDataCycloneDxVex(): boolean;
  clearReportRequestDataCycloneDxVex(): void;
  getReportRequestDataCycloneDxVex(): RequestReportDataCycloneDxVex | undefined;
  setReportRequestDataCycloneDxVex(value?: RequestReportDataCycloneDxVex): void;

  getReportdataCase(): RequestReportRequest.ReportdataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestReportRequest): RequestReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestReportRequest;
  static deserializeBinaryFromReader(message: RequestReportRequest, reader: jspb.BinaryReader): RequestReportRequest;
}

export namespace RequestReportRequest {
  export type AsObject = {
    metadata?: heim_common_pb.RequestMetadata.AsObject,
    reportRequestDataFda?: RequestReportDataFda.AsObject,
    reportRequestDataCycloneDxVex?: RequestReportDataCycloneDxVex.AsObject,
  }

  export enum ReportdataCase {
    REPORTDATA_NOT_SET = 0,
    REPORT_REQUEST_DATA_FDA = 2,
    REPORT_REQUEST_DATA_CYCLONE_DX_VEX = 3,
  }
}

export class RequestReportResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): heim_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: heim_common_pb.ResponseMetadata): void;

  hasReportRequestId(): boolean;
  clearReportRequestId(): void;
  getReportRequestId(): heim_common_pb.UUID | undefined;
  setReportRequestId(value?: heim_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequestReportResponse): RequestReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestReportResponse;
  static deserializeBinaryFromReader(message: RequestReportResponse, reader: jspb.BinaryReader): RequestReportResponse;
}

export namespace RequestReportResponse {
  export type AsObject = {
    metadata?: heim_common_pb.ResponseMetadata.AsObject,
    reportRequestId?: heim_common_pb.UUID.AsObject,
  }
}

export class GetReportRequestStateRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): heim_common_pb.RequestMetadata | undefined;
  setMetadata(value?: heim_common_pb.RequestMetadata): void;

  hasReportRequestId(): boolean;
  clearReportRequestId(): void;
  getReportRequestId(): heim_common_pb.UUID | undefined;
  setReportRequestId(value?: heim_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportRequestStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportRequestStateRequest): GetReportRequestStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReportRequestStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportRequestStateRequest;
  static deserializeBinaryFromReader(message: GetReportRequestStateRequest, reader: jspb.BinaryReader): GetReportRequestStateRequest;
}

export namespace GetReportRequestStateRequest {
  export type AsObject = {
    metadata?: heim_common_pb.RequestMetadata.AsObject,
    reportRequestId?: heim_common_pb.UUID.AsObject,
  }
}

export class GetReportRequestStateResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): heim_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: heim_common_pb.ResponseMetadata): void;

  getReportRequestState(): v1_common_heim_enums_pb.ReportRequestStateMap[keyof v1_common_heim_enums_pb.ReportRequestStateMap];
  setReportRequestState(value: v1_common_heim_enums_pb.ReportRequestStateMap[keyof v1_common_heim_enums_pb.ReportRequestStateMap]): void;

  getUserMessage(): string;
  setUserMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportRequestStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportRequestStateResponse): GetReportRequestStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReportRequestStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportRequestStateResponse;
  static deserializeBinaryFromReader(message: GetReportRequestStateResponse, reader: jspb.BinaryReader): GetReportRequestStateResponse;
}

export namespace GetReportRequestStateResponse {
  export type AsObject = {
    metadata?: heim_common_pb.ResponseMetadata.AsObject,
    reportRequestState: v1_common_heim_enums_pb.ReportRequestStateMap[keyof v1_common_heim_enums_pb.ReportRequestStateMap],
    userMessage: string,
  }
}

export class GetReportFileRequest extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): heim_common_pb.RequestMetadata | undefined;
  setMetadata(value?: heim_common_pb.RequestMetadata): void;

  hasReportRequestId(): boolean;
  clearReportRequestId(): void;
  getReportRequestId(): heim_common_pb.UUID | undefined;
  setReportRequestId(value?: heim_common_pb.UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportFileRequest): GetReportFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReportFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportFileRequest;
  static deserializeBinaryFromReader(message: GetReportFileRequest, reader: jspb.BinaryReader): GetReportFileRequest;
}

export namespace GetReportFileRequest {
  export type AsObject = {
    metadata?: heim_common_pb.RequestMetadata.AsObject,
    reportRequestId?: heim_common_pb.UUID.AsObject,
  }
}


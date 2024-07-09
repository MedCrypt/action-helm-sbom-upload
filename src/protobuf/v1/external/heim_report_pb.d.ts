// package: medcrypt.helm.api.v1.report
// file: v1/external/heim_report.proto

import * as jspb from "google-protobuf";
import * as heim_common_pb from "../../heim_common_pb";
import * as v1_common_heim_report_components_pb from "../../v1/common/heim_report_components_pb";

export class RequestReport extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): v1_common_heim_report_components_pb.RequestReportRequest | undefined;
  setRequest(value?: v1_common_heim_report_components_pb.RequestReportRequest): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): v1_common_heim_report_components_pb.RequestReportResponse | undefined;
  setResponse(value?: v1_common_heim_report_components_pb.RequestReportResponse): void;

  getPayloadCase(): RequestReport.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestReport.AsObject;
  static toObject(includeInstance: boolean, msg: RequestReport): RequestReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestReport;
  static deserializeBinaryFromReader(message: RequestReport, reader: jspb.BinaryReader): RequestReport;
}

export namespace RequestReport {
  export type AsObject = {
    request?: v1_common_heim_report_components_pb.RequestReportRequest.AsObject,
    response?: v1_common_heim_report_components_pb.RequestReportResponse.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export class GetReportRequestState extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): v1_common_heim_report_components_pb.GetReportRequestStateRequest | undefined;
  setRequest(value?: v1_common_heim_report_components_pb.GetReportRequestStateRequest): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): v1_common_heim_report_components_pb.GetReportRequestStateResponse | undefined;
  setResponse(value?: v1_common_heim_report_components_pb.GetReportRequestStateResponse): void;

  getPayloadCase(): GetReportRequestState.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportRequestState.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportRequestState): GetReportRequestState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReportRequestState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportRequestState;
  static deserializeBinaryFromReader(message: GetReportRequestState, reader: jspb.BinaryReader): GetReportRequestState;
}

export namespace GetReportRequestState {
  export type AsObject = {
    request?: v1_common_heim_report_components_pb.GetReportRequestStateRequest.AsObject,
    response?: v1_common_heim_report_components_pb.GetReportRequestStateResponse.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export class GetReportFile extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): v1_common_heim_report_components_pb.GetReportFileRequest | undefined;
  setRequest(value?: v1_common_heim_report_components_pb.GetReportFileRequest): void;

  getPayloadCase(): GetReportFile.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportFile.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportFile): GetReportFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReportFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportFile;
  static deserializeBinaryFromReader(message: GetReportFile, reader: jspb.BinaryReader): GetReportFile;
}

export namespace GetReportFile {
  export type AsObject = {
    request?: v1_common_heim_report_components_pb.GetReportFileRequest.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
  }
}


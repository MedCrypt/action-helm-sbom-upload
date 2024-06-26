// package: medcrypt.heimdall.web.common
// file: heim_common.proto

import * as jspb from "google-protobuf";

export class UUID extends jspb.Message {
  getUuid(): Uint8Array | string;
  getUuid_asU8(): Uint8Array;
  getUuid_asB64(): string;
  setUuid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UUID.AsObject;
  static toObject(includeInstance: boolean, msg: UUID): UUID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UUID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UUID;
  static deserializeBinaryFromReader(message: UUID, reader: jspb.BinaryReader): UUID;
}

export namespace UUID {
  export type AsObject = {
    uuid: Uint8Array | string,
  }
}

export class RequestMetadata extends jspb.Message {
  hasRequestUuid(): boolean;
  clearRequestUuid(): void;
  getRequestUuid(): UUID | undefined;
  setRequestUuid(value?: UUID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RequestMetadata): RequestMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestMetadata;
  static deserializeBinaryFromReader(message: RequestMetadata, reader: jspb.BinaryReader): RequestMetadata;
}

export namespace RequestMetadata {
  export type AsObject = {
    requestUuid?: UUID.AsObject,
  }
}

export class ResponseMetadata extends jspb.Message {
  getStatus(): ResponseMetadataStatus.TypeMap[keyof ResponseMetadataStatus.TypeMap];
  setStatus(value: ResponseMetadataStatus.TypeMap[keyof ResponseMetadataStatus.TypeMap]): void;

  clearStatusMessageList(): void;
  getStatusMessageList(): Array<string>;
  setStatusMessageList(value: Array<string>): void;
  addStatusMessage(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseMetadata): ResponseMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseMetadata;
  static deserializeBinaryFromReader(message: ResponseMetadata, reader: jspb.BinaryReader): ResponseMetadata;
}

export namespace ResponseMetadata {
  export type AsObject = {
    status: ResponseMetadataStatus.TypeMap[keyof ResponseMetadataStatus.TypeMap],
    statusMessageList: Array<string>,
  }
}

export class ResponseMetadataStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseMetadataStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseMetadataStatus): ResponseMetadataStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseMetadataStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseMetadataStatus;
  static deserializeBinaryFromReader(message: ResponseMetadataStatus, reader: jspb.BinaryReader): ResponseMetadataStatus;
}

export namespace ResponseMetadataStatus {
  export type AsObject = {
  }

  export interface TypeMap {
    OK: 0;
    BAD_REQUEST: 1;
    FORBIDDEN: 2;
    NOT_FOUND: 3;
    INTERNAL_SERVER_ERROR: 4;
  }

  export const Type: TypeMap;
}

export class FileMetadata extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): UUID | undefined;
  setId(value?: UUID): void;

  getOriginalName(): string;
  setOriginalName(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FileMetadata): FileMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMetadata;
  static deserializeBinaryFromReader(message: FileMetadata, reader: jspb.BinaryReader): FileMetadata;
}

export namespace FileMetadata {
  export type AsObject = {
    id?: UUID.AsObject,
    originalName: string,
    createdAt: number,
  }
}

export class Page extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getItems(): number;
  setItems(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    page: number,
    items: number,
  }
}

export class DateRange extends jspb.Message {
  getStartTimestamp(): number;
  setStartTimestamp(value: number): void;

  getEndTimestamp(): number;
  setEndTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateRange.AsObject;
  static toObject(includeInstance: boolean, msg: DateRange): DateRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateRange;
  static deserializeBinaryFromReader(message: DateRange, reader: jspb.BinaryReader): DateRange;
}

export namespace DateRange {
  export type AsObject = {
    startTimestamp: number,
    endTimestamp: number,
  }
}

export class SbomEntryOrder extends jspb.Message {
  getColumn(): SbomEntryOrder.ColumnMap[keyof SbomEntryOrder.ColumnMap];
  setColumn(value: SbomEntryOrder.ColumnMap[keyof SbomEntryOrder.ColumnMap]): void;

  getIsDescending(): boolean;
  setIsDescending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SbomEntryOrder.AsObject;
  static toObject(includeInstance: boolean, msg: SbomEntryOrder): SbomEntryOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SbomEntryOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SbomEntryOrder;
  static deserializeBinaryFromReader(message: SbomEntryOrder, reader: jspb.BinaryReader): SbomEntryOrder;
}

export namespace SbomEntryOrder {
  export type AsObject = {
    column: SbomEntryOrder.ColumnMap[keyof SbomEntryOrder.ColumnMap],
    isDescending: boolean,
  }

  export interface ColumnMap {
    PRODUCT_NAME: 0;
    PRODUCT_VERSION_STRING: 1;
    VENDOR_NAME: 2;
    SBOM_ENTRY_STATE: 3;
    SBOM_ENTRY_REVIEW_STATUS: 4;
    SBOM_ENTRY_MATCH_TYPE: 5;
  }

  export const Column: ColumnMap;
}


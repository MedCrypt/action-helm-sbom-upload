// package: medcrypt.helm.api.v1.sbom
// file: v1/external/heim_sbom.proto

import * as jspb from "google-protobuf";
import * as heim_common_pb from "../../heim_common_pb";
import * as v1_common_heim_enums_pb from "../../v1/common/heim_enums_pb";

export class ProductMatchDataTypes extends jspb.Message {
  getNameMatch(): boolean;
  setNameMatch(value: boolean): void;

  getPurlMatch(): boolean;
  setPurlMatch(value: boolean): void;

  getCpeMatch(): boolean;
  setCpeMatch(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductMatchDataTypes.AsObject;
  static toObject(includeInstance: boolean, msg: ProductMatchDataTypes): ProductMatchDataTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductMatchDataTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductMatchDataTypes;
  static deserializeBinaryFromReader(message: ProductMatchDataTypes, reader: jspb.BinaryReader): ProductMatchDataTypes;
}

export namespace ProductMatchDataTypes {
  export type AsObject = {
    nameMatch: boolean,
    purlMatch: boolean,
    cpeMatch: boolean,
  }
}

export class SubmitSbom extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): SubmitSbom.Request | undefined;
  setRequest(value?: SubmitSbom.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): SubmitSbom.Response | undefined;
  setResponse(value?: SubmitSbom.Response): void;

  getPayloadCase(): SubmitSbom.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitSbom.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitSbom): SubmitSbom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitSbom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitSbom;
  static deserializeBinaryFromReader(message: SubmitSbom, reader: jspb.BinaryReader): SubmitSbom;
}

export namespace SubmitSbom {
  export type AsObject = {
    request?: SubmitSbom.Request.AsObject,
    response?: SubmitSbom.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.RequestMetadata | undefined;
    setMetadata(value?: heim_common_pb.RequestMetadata): void;

    hasOrganizationProductVersionId(): boolean;
    clearOrganizationProductVersionId(): void;
    getOrganizationProductVersionId(): heim_common_pb.UUID | undefined;
    setOrganizationProductVersionId(value?: heim_common_pb.UUID): void;

    getFileName(): string;
    setFileName(value: string): void;

    getFileContents(): Uint8Array | string;
    getFileContents_asU8(): Uint8Array;
    getFileContents_asB64(): string;
    setFileContents(value: Uint8Array | string): void;

    getFileType(): SbomFileTypeMap[keyof SbomFileTypeMap];
    setFileType(value: SbomFileTypeMap[keyof SbomFileTypeMap]): void;

    getS3FileName(): string;
    setS3FileName(value: string): void;

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
      organizationProductVersionId?: heim_common_pb.UUID.AsObject,
      fileName: string,
      fileContents: Uint8Array | string,
      fileType: SbomFileTypeMap[keyof SbomFileTypeMap],
      s3FileName: string,
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

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
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export class GetS3PreSignedUrl extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): GetS3PreSignedUrl.Request | undefined;
  setRequest(value?: GetS3PreSignedUrl.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): GetS3PreSignedUrl.Response | undefined;
  setResponse(value?: GetS3PreSignedUrl.Response): void;

  getPayloadCase(): GetS3PreSignedUrl.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetS3PreSignedUrl.AsObject;
  static toObject(includeInstance: boolean, msg: GetS3PreSignedUrl): GetS3PreSignedUrl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetS3PreSignedUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetS3PreSignedUrl;
  static deserializeBinaryFromReader(message: GetS3PreSignedUrl, reader: jspb.BinaryReader): GetS3PreSignedUrl;
}

export namespace GetS3PreSignedUrl {
  export type AsObject = {
    request?: GetS3PreSignedUrl.Request.AsObject,
    response?: GetS3PreSignedUrl.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.RequestMetadata | undefined;
    setMetadata(value?: heim_common_pb.RequestMetadata): void;

    getS3FileName(): string;
    setS3FileName(value: string): void;

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
      s3FileName: string,
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

    getS3PreSignedUrl(): string;
    setS3PreSignedUrl(value: string): void;

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
      s3PreSignedUrl: string,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export class SbomEntry extends jspb.Message {
  hasSbomEntryId(): boolean;
  clearSbomEntryId(): void;
  getSbomEntryId(): heim_common_pb.UUID | undefined;
  setSbomEntryId(value?: heim_common_pb.UUID): void;

  getSbomEntryName(): string;
  setSbomEntryName(value: string): void;

  getSbomEntryState(): SbomEntry.StateMap[keyof SbomEntry.StateMap];
  setSbomEntryState(value: SbomEntry.StateMap[keyof SbomEntry.StateMap]): void;

  hasVendorId(): boolean;
  clearVendorId(): void;
  getVendorId(): heim_common_pb.UUID | undefined;
  setVendorId(value?: heim_common_pb.UUID): void;

  getVendorDisplayName(): string;
  setVendorDisplayName(value: string): void;

  hasProductId(): boolean;
  clearProductId(): void;
  getProductId(): heim_common_pb.UUID | undefined;
  setProductId(value?: heim_common_pb.UUID): void;

  getProductDisplayName(): string;
  setProductDisplayName(value: string): void;

  getProductVersionString(): string;
  setProductVersionString(value: string): void;

  getRawProductVersionString(): string;
  setRawProductVersionString(value: string): void;

  getSbomVersionOverridden(): boolean;
  setSbomVersionOverridden(value: boolean): void;

  getSbomVersionCreatedBy(): string;
  setSbomVersionCreatedBy(value: string): void;

  hasDependencyId(): boolean;
  clearDependencyId(): void;
  getDependencyId(): heim_common_pb.UUID | undefined;
  setDependencyId(value?: heim_common_pb.UUID): void;

  getMatchType(): v1_common_heim_enums_pb.ProductMatchTypeMap[keyof v1_common_heim_enums_pb.ProductMatchTypeMap];
  setMatchType(value: v1_common_heim_enums_pb.ProductMatchTypeMap[keyof v1_common_heim_enums_pb.ProductMatchTypeMap]): void;

  getReviewStatus(): v1_common_heim_enums_pb.ReviewStatusMap[keyof v1_common_heim_enums_pb.ReviewStatusMap];
  setReviewStatus(value: v1_common_heim_enums_pb.ReviewStatusMap[keyof v1_common_heim_enums_pb.ReviewStatusMap]): void;

  getStatus(): SbomEntry.StatusMap[keyof SbomEntry.StatusMap];
  setStatus(value: SbomEntry.StatusMap[keyof SbomEntry.StatusMap]): void;

  getPurlSource(): SbomEntry.PurlSourceMap[keyof SbomEntry.PurlSourceMap];
  setPurlSource(value: SbomEntry.PurlSourceMap[keyof SbomEntry.PurlSourceMap]): void;

  hasMatchDataTypes(): boolean;
  clearMatchDataTypes(): void;
  getMatchDataTypes(): ProductMatchDataTypes | undefined;
  setMatchDataTypes(value?: ProductMatchDataTypes): void;

  getRawPurl(): string;
  setRawPurl(value: string): void;

  getRawCpe(): string;
  setRawCpe(value: string): void;

  getRawPart(): string;
  setRawPart(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SbomEntry.AsObject;
  static toObject(includeInstance: boolean, msg: SbomEntry): SbomEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SbomEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SbomEntry;
  static deserializeBinaryFromReader(message: SbomEntry, reader: jspb.BinaryReader): SbomEntry;
}

export namespace SbomEntry {
  export type AsObject = {
    sbomEntryId?: heim_common_pb.UUID.AsObject,
    sbomEntryName: string,
    sbomEntryState: SbomEntry.StateMap[keyof SbomEntry.StateMap],
    vendorId?: heim_common_pb.UUID.AsObject,
    vendorDisplayName: string,
    productId?: heim_common_pb.UUID.AsObject,
    productDisplayName: string,
    productVersionString: string,
    rawProductVersionString: string,
    sbomVersionOverridden: boolean,
    sbomVersionCreatedBy: string,
    dependencyId?: heim_common_pb.UUID.AsObject,
    matchType: v1_common_heim_enums_pb.ProductMatchTypeMap[keyof v1_common_heim_enums_pb.ProductMatchTypeMap],
    reviewStatus: v1_common_heim_enums_pb.ReviewStatusMap[keyof v1_common_heim_enums_pb.ReviewStatusMap],
    status: SbomEntry.StatusMap[keyof SbomEntry.StatusMap],
    purlSource: SbomEntry.PurlSourceMap[keyof SbomEntry.PurlSourceMap],
    matchDataTypes?: ProductMatchDataTypes.AsObject,
    rawPurl: string,
    rawCpe: string,
    rawPart: string,
  }

  export interface StateMap {
    NEW_SBOM_ENTRY: 0;
    SBOM_ENTRY_RESET: 1;
    VENDOR_MATCH_PRODUCT_ALIAS: 2;
    VENDOR_UNMATCHED_PRODUCT_ALIAS: 3;
    VENDOR_MATCH_ORG_ALIAS: 4;
    VENDOR_UNMATCHED_ORG_ALIAS: 5;
    VENDOR_MATCH_GLOBAL_ALIAS: 6;
    VENDOR_UNMATCHED_GLOBAL_ALIAS: 7;
    VENDOR_MATCH_UNIQUE_KEY: 8;
    VENDOR_UNMATCHED_UNIQUE_KEY: 9;
    VENDOR_HAVE_POSSIBLE_MATCHES_PRODUCT_ALIAS: 10;
    VENDOR_HAVE_POSSIBLE_MATCHES_ORG_ALIAS: 11;
    VENDOR_HAVE_POSSIBLE_MATCHES_GLOBAL_ALIAS: 12;
    VENDOR_HAVE_POSSIBLE_MATCHES_UNIQUE_KEY: 13;
    PRODUCT_WITH_VENDORS_MATCH_PRODUCT_ALIAS: 14;
    PRODUCT_WITH_VENDORS_UNMATCHED_PRODUCT_ALIAS: 15;
    PRODUCT_WITH_VENDORS_MATCH_ORG_ALIAS: 16;
    PRODUCT_WITH_VENDORS_UNMATCHED_ORG_ALIAS: 17;
    PRODUCT_WITH_VENDORS_MATCH_GLOBAL_ALIAS: 18;
    PRODUCT_WITH_VENDORS_UNMATCHED_GLOBAL_ALIAS: 19;
    PRODUCT_WITH_VENDORS_MATCH_UNIQUE_KEY: 20;
    PRODUCT_WITH_VENDORS_UNMATCHED_UNIQUE_KEY: 21;
    PRODUCT_WO_VENDORS_MATCH_PRODUCT_ALIAS: 22;
    PRODUCT_WO_VENDORS_UNMATCHED_PRODUCT_ALIAS: 23;
    PRODUCT_WO_VENDORS_MATCH_ORG_ALIAS: 24;
    PRODUCT_WO_VENDORS_UNMATCHED_ORG_ALIAS: 25;
    PRODUCT_WO_VENDORS_MATCH_GLOBAL_ALIAS: 26;
    PRODUCT_WO_VENDORS_UNMATCHED_GLOBAL_ALIAS: 27;
    PRODUCT_WO_VENDORS_MATCH_UNIQUE_KEY: 28;
    PRODUCT_WO_VENDORS_UNMATCHED_UNIQUE_KEY: 29;
    PRODUCT_POSSIBLE_MATCHES_WITH_VENDOR: 30;
    PRODUCT_POSSIBLE_MATCHES_WO_VENDOR: 31;
    ONE_PRODUCT_MATCH_WITH_VENDOR_MATCH: 32;
    ONE_PRODUCT_MATCH_WO_VENDOR_MATCH: 33;
    ONE_PRODUCT_MATCH_NO_VENDOR_PROVIDED: 34;
    USER_SELECTED_PRODUCT_MATCH: 35;
    RESCAN_REQUESTED: 36;
    PRODUCT_MATCHED: 37;
    NO_VERSION_PARSER_SET: 38;
    VERSION_REPARSE_REQUESTED: 39;
    HAS_PARSER: 40;
    VERSION_PARSE_ERROR: 41;
    VERSION_PARSED: 42;
    PRODUCT_VERSION_NOT_FOUND: 43;
    NEW_PRODUCT_VERSION_CREATED: 44;
    HAVE_PRODUCT_VERSION: 45;
    SBOM_ENTRY_LINKED_TO_PRODUCT_VERSION: 46;
    FAILED: 47;
    ONE_PRODUCT_MATCH_BY_USER: 48;
  }

  export const State: StateMap;

  export interface StatusMap {
    LIVE: 0;
    ARCHIVED: 1;
  }

  export const Status: StatusMap;

  export interface PurlSourceMap {
    NONE: 0;
    NUGET: 3;
    PYPI: 4;
    NPM: 5;
    CARGO: 6;
  }

  export const PurlSource: PurlSourceMap;
}

export class SbomEntryFilter extends jspb.Message {
  getSearchString(): string;
  setSearchString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SbomEntryFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SbomEntryFilter): SbomEntryFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SbomEntryFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SbomEntryFilter;
  static deserializeBinaryFromReader(message: SbomEntryFilter, reader: jspb.BinaryReader): SbomEntryFilter;
}

export namespace SbomEntryFilter {
  export type AsObject = {
    searchString: string,
  }
}

export class ListSbomEntries extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListSbomEntries.Request | undefined;
  setRequest(value?: ListSbomEntries.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): ListSbomEntries.Response | undefined;
  setResponse(value?: ListSbomEntries.Response): void;

  getPayloadCase(): ListSbomEntries.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSbomEntries.AsObject;
  static toObject(includeInstance: boolean, msg: ListSbomEntries): ListSbomEntries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSbomEntries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSbomEntries;
  static deserializeBinaryFromReader(message: ListSbomEntries, reader: jspb.BinaryReader): ListSbomEntries;
}

export namespace ListSbomEntries {
  export type AsObject = {
    request?: ListSbomEntries.Request.AsObject,
    response?: ListSbomEntries.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.RequestMetadata | undefined;
    setMetadata(value?: heim_common_pb.RequestMetadata): void;

    hasOrganizationProductVersionId(): boolean;
    clearOrganizationProductVersionId(): void;
    getOrganizationProductVersionId(): heim_common_pb.UUID | undefined;
    setOrganizationProductVersionId(value?: heim_common_pb.UUID): void;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): heim_common_pb.Page | undefined;
    setPage(value?: heim_common_pb.Page): void;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): SbomEntryFilter | undefined;
    setFilter(value?: SbomEntryFilter): void;

    clearOrderList(): void;
    getOrderList(): Array<heim_common_pb.SbomEntryOrder>;
    setOrderList(value: Array<heim_common_pb.SbomEntryOrder>): void;
    addOrder(value?: heim_common_pb.SbomEntryOrder, index?: number): heim_common_pb.SbomEntryOrder;

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
      organizationProductVersionId?: heim_common_pb.UUID.AsObject,
      page?: heim_common_pb.Page.AsObject,
      filter?: SbomEntryFilter.AsObject,
      orderList: Array<heim_common_pb.SbomEntryOrder.AsObject>,
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

    clearSbomEntryList(): void;
    getSbomEntryList(): Array<SbomEntry>;
    setSbomEntryList(value: Array<SbomEntry>): void;
    addSbomEntry(value?: SbomEntry, index?: number): SbomEntry;

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
      sbomEntryList: Array<SbomEntry.AsObject>,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export interface SbomFileTypeMap {
  CYCLONE_DX: 0;
  SPDX: 1;
}

export const SbomFileType: SbomFileTypeMap;


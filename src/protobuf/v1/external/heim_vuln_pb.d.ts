// package: medcrypt.helm.api.v1.vuln
// file: v1/external/heim_vuln.proto

import * as jspb from "google-protobuf";
import * as heim_common_pb from "../../heim_common_pb";
import * as v1_external_heim_organization_product_pb from "../../v1/external/heim_organization_product_pb";

export class Severity extends jspb.Message {
  getType(): Severity.TypeMap[keyof Severity.TypeMap];
  setType(value: Severity.TypeMap[keyof Severity.TypeMap]): void;

  getScore(): number;
  setScore(value: number): void;

  getVersion(): string;
  setVersion(value: string): void;

  hasBaseScore(): boolean;
  clearBaseScore(): void;
  getBaseScore(): BaseScore | undefined;
  setBaseScore(value?: BaseScore): void;

  getRescoretype(): Severity.RescoreTypeMap[keyof Severity.RescoreTypeMap];
  setRescoretype(value: Severity.RescoreTypeMap[keyof Severity.RescoreTypeMap]): void;

  getNewScore(): number;
  setNewScore(value: number): void;

  getNewTemporalScore(): number;
  setNewTemporalScore(value: number): void;

  getNewEnvironmentalScore(): number;
  setNewEnvironmentalScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Severity.AsObject;
  static toObject(includeInstance: boolean, msg: Severity): Severity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Severity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Severity;
  static deserializeBinaryFromReader(message: Severity, reader: jspb.BinaryReader): Severity;
}

export namespace Severity {
  export type AsObject = {
    type: Severity.TypeMap[keyof Severity.TypeMap],
    score: number,
    version: string,
    baseScore?: BaseScore.AsObject,
    rescoretype: Severity.RescoreTypeMap[keyof Severity.RescoreTypeMap],
    newScore: number,
    newTemporalScore: number,
    newEnvironmentalScore: number,
  }

  export interface TypeMap {
    HEIMDALL: 0;
    CVSS: 1;
  }

  export const Type: TypeMap;

  export interface RescoreTypeMap {
    NONE: 0;
    PROFILE: 1;
    ITEM: 2;
  }

  export const RescoreType: RescoreTypeMap;
}

export class BaseScore extends jspb.Message {
  getAttackVector(): BaseScore.AttackVectorMap[keyof BaseScore.AttackVectorMap];
  setAttackVector(value: BaseScore.AttackVectorMap[keyof BaseScore.AttackVectorMap]): void;

  getAttackComplexity(): BaseScore.AttackComplexityMap[keyof BaseScore.AttackComplexityMap];
  setAttackComplexity(value: BaseScore.AttackComplexityMap[keyof BaseScore.AttackComplexityMap]): void;

  getPrivilegesRequired(): BaseScore.PrivilegesRequiredMap[keyof BaseScore.PrivilegesRequiredMap];
  setPrivilegesRequired(value: BaseScore.PrivilegesRequiredMap[keyof BaseScore.PrivilegesRequiredMap]): void;

  getUserInteraction(): BaseScore.UserInteractionMap[keyof BaseScore.UserInteractionMap];
  setUserInteraction(value: BaseScore.UserInteractionMap[keyof BaseScore.UserInteractionMap]): void;

  getScope(): BaseScore.ScopeMap[keyof BaseScore.ScopeMap];
  setScope(value: BaseScore.ScopeMap[keyof BaseScore.ScopeMap]): void;

  getConfidentiality(): BaseScore.ConfidentialityMap[keyof BaseScore.ConfidentialityMap];
  setConfidentiality(value: BaseScore.ConfidentialityMap[keyof BaseScore.ConfidentialityMap]): void;

  getIntegrity(): BaseScore.IntegrityMap[keyof BaseScore.IntegrityMap];
  setIntegrity(value: BaseScore.IntegrityMap[keyof BaseScore.IntegrityMap]): void;

  getAvailability(): BaseScore.AvailabilityMap[keyof BaseScore.AvailabilityMap];
  setAvailability(value: BaseScore.AvailabilityMap[keyof BaseScore.AvailabilityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseScore.AsObject;
  static toObject(includeInstance: boolean, msg: BaseScore): BaseScore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BaseScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseScore;
  static deserializeBinaryFromReader(message: BaseScore, reader: jspb.BinaryReader): BaseScore;
}

export namespace BaseScore {
  export type AsObject = {
    attackVector: BaseScore.AttackVectorMap[keyof BaseScore.AttackVectorMap],
    attackComplexity: BaseScore.AttackComplexityMap[keyof BaseScore.AttackComplexityMap],
    privilegesRequired: BaseScore.PrivilegesRequiredMap[keyof BaseScore.PrivilegesRequiredMap],
    userInteraction: BaseScore.UserInteractionMap[keyof BaseScore.UserInteractionMap],
    scope: BaseScore.ScopeMap[keyof BaseScore.ScopeMap],
    confidentiality: BaseScore.ConfidentialityMap[keyof BaseScore.ConfidentialityMap],
    integrity: BaseScore.IntegrityMap[keyof BaseScore.IntegrityMap],
    availability: BaseScore.AvailabilityMap[keyof BaseScore.AvailabilityMap],
  }

  export interface AttackVectorMap {
    AV_NETWORK: 0;
    AV_ADJACENT: 1;
    AV_LOCAL: 2;
    AV_PHYSICAL: 3;
  }

  export const AttackVector: AttackVectorMap;

  export interface AttackComplexityMap {
    AC_HIGH: 0;
    AC_LOW: 1;
  }

  export const AttackComplexity: AttackComplexityMap;

  export interface PrivilegesRequiredMap {
    PR_HIGH: 0;
    PR_LOW: 1;
    PR_NONE: 2;
  }

  export const PrivilegesRequired: PrivilegesRequiredMap;

  export interface UserInteractionMap {
    UI_NONE: 0;
    UI_REQUIRED: 1;
  }

  export const UserInteraction: UserInteractionMap;

  export interface ScopeMap {
    S_UNCHANGED: 0;
    S_CHANGED: 1;
  }

  export const Scope: ScopeMap;

  export interface ConfidentialityMap {
    C_HIGH: 0;
    C_LOW: 1;
    C_NONE: 2;
  }

  export const Confidentiality: ConfidentialityMap;

  export interface IntegrityMap {
    I_HIGH: 0;
    I_LOW: 1;
    I_NONE: 2;
  }

  export const Integrity: IntegrityMap;

  export interface AvailabilityMap {
    A_HIGH: 0;
    A_LOW: 1;
    A_NONE: 2;
  }

  export const Availability: AvailabilityMap;
}

export class VulnerabilityImpact extends jspb.Message {
  getType(): VulnerabilityImpact.TypeMap[keyof VulnerabilityImpact.TypeMap];
  setType(value: VulnerabilityImpact.TypeMap[keyof VulnerabilityImpact.TypeMap]): void;

  clearSeverityList(): void;
  getSeverityList(): Array<Severity>;
  setSeverityList(value: Array<Severity>): void;
  addSeverity(value?: Severity, index?: number): Severity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VulnerabilityImpact.AsObject;
  static toObject(includeInstance: boolean, msg: VulnerabilityImpact): VulnerabilityImpact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VulnerabilityImpact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VulnerabilityImpact;
  static deserializeBinaryFromReader(message: VulnerabilityImpact, reader: jspb.BinaryReader): VulnerabilityImpact;
}

export namespace VulnerabilityImpact {
  export type AsObject = {
    type: VulnerabilityImpact.TypeMap[keyof VulnerabilityImpact.TypeMap],
    severityList: Array<Severity.AsObject>,
  }

  export interface TypeMap {
    UNRESOLVED: 0;
    DOES_NOT_APPLY: 1;
    PATCH_REQUIRED: 2;
  }

  export const Type: TypeMap;
}

export class TextData extends jspb.Message {
  getLangCode(): string;
  setLangCode(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextData.AsObject;
  static toObject(includeInstance: boolean, msg: TextData): TextData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextData;
  static deserializeBinaryFromReader(message: TextData, reader: jspb.BinaryReader): TextData;
}

export namespace TextData {
  export type AsObject = {
    langCode: string,
    value: string,
  }
}

export class ReferenceLink extends jspb.Message {
  getReferenceLinkHref(): string;
  setReferenceLinkHref(value: string): void;

  getReferenceLinkName(): string;
  setReferenceLinkName(value: string): void;

  getReferenceLinkSource(): string;
  setReferenceLinkSource(value: string): void;

  clearReferenceLinkTagList(): void;
  getReferenceLinkTagList(): Array<string>;
  setReferenceLinkTagList(value: Array<string>): void;
  addReferenceLinkTag(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceLink.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceLink): ReferenceLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceLink;
  static deserializeBinaryFromReader(message: ReferenceLink, reader: jspb.BinaryReader): ReferenceLink;
}

export namespace ReferenceLink {
  export type AsObject = {
    referenceLinkHref: string,
    referenceLinkName: string,
    referenceLinkSource: string,
    referenceLinkTagList: Array<string>,
  }
}

export class Vulnerability extends jspb.Message {
  hasOrganizationProductId(): boolean;
  clearOrganizationProductId(): void;
  getOrganizationProductId(): heim_common_pb.UUID | undefined;
  setOrganizationProductId(value?: heim_common_pb.UUID): void;

  getOrganizationProductName(): string;
  setOrganizationProductName(value: string): void;

  hasOrganizationProductVersionId(): boolean;
  clearOrganizationProductVersionId(): void;
  getOrganizationProductVersionId(): heim_common_pb.UUID | undefined;
  setOrganizationProductVersionId(value?: heim_common_pb.UUID): void;

  getOrganizationProductVersionString(): string;
  setOrganizationProductVersionString(value: string): void;

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

  hasVulnerabilityId(): boolean;
  clearVulnerabilityId(): void;
  getVulnerabilityId(): heim_common_pb.UUID | undefined;
  setVulnerabilityId(value?: heim_common_pb.UUID): void;

  getVulnerabilityKey(): string;
  setVulnerabilityKey(value: string): void;

  getVulnerabilityPublishedDate(): string;
  setVulnerabilityPublishedDate(value: string): void;

  getVulnerabilityModifiedDate(): string;
  setVulnerabilityModifiedDate(value: string): void;

  getVulnerabilitySummary(): string;
  setVulnerabilitySummary(value: string): void;

  clearVulnerabilitySeverityList(): void;
  getVulnerabilitySeverityList(): Array<Severity>;
  setVulnerabilitySeverityList(value: Array<Severity>): void;
  addVulnerabilitySeverity(value?: Severity, index?: number): Severity;

  hasVulnerabilityImpact(): boolean;
  clearVulnerabilityImpact(): void;
  getVulnerabilityImpact(): VulnerabilityImpact | undefined;
  setVulnerabilityImpact(value?: VulnerabilityImpact): void;

  hasDependencyId(): boolean;
  clearDependencyId(): void;
  getDependencyId(): heim_common_pb.UUID | undefined;
  setDependencyId(value?: heim_common_pb.UUID): void;

  hasVulnerabilityAnnalId(): boolean;
  clearVulnerabilityAnnalId(): void;
  getVulnerabilityAnnalId(): heim_common_pb.UUID | undefined;
  setVulnerabilityAnnalId(value?: heim_common_pb.UUID): void;

  getVulnerabilityAnnalCreatedAt(): number;
  setVulnerabilityAnnalCreatedAt(value: number): void;

  hasUserImpactVulnerabilityAnnalId(): boolean;
  clearUserImpactVulnerabilityAnnalId(): void;
  getUserImpactVulnerabilityAnnalId(): heim_common_pb.UUID | undefined;
  setUserImpactVulnerabilityAnnalId(value?: heim_common_pb.UUID): void;

  getUserImpactVulnerabilityAnnalCreatedAt(): number;
  setUserImpactVulnerabilityAnnalCreatedAt(value: number): void;

  clearDescriptionList(): void;
  getDescriptionList(): Array<TextData>;
  setDescriptionList(value: Array<TextData>): void;
  addDescription(value?: TextData, index?: number): TextData;

  clearProblemsList(): void;
  getProblemsList(): Array<TextData>;
  setProblemsList(value: Array<TextData>): void;
  addProblems(value?: TextData, index?: number): TextData;

  clearReferenceLinkList(): void;
  getReferenceLinkList(): Array<ReferenceLink>;
  setReferenceLinkList(value: Array<ReferenceLink>): void;
  addReferenceLink(value?: ReferenceLink, index?: number): ReferenceLink;

  getVulnerabilityNote(): string;
  setVulnerabilityNote(value: string): void;

  getIsModify(): boolean;
  setIsModify(value: boolean): void;

  getCvssV2VectorString(): string;
  setCvssV2VectorString(value: string): void;

  getCvssV3VectorString(): string;
  setCvssV3VectorString(value: string): void;

  getVulnerabilityAssociationDate(): number;
  setVulnerabilityAssociationDate(value: number): void;

  getVulnerabilityPublishedTimestamp(): number;
  setVulnerabilityPublishedTimestamp(value: number): void;

  getVulnerabilityModifiedTimestamp(): number;
  setVulnerabilityModifiedTimestamp(value: number): void;

  getPatchState(): PatchStateMap[keyof PatchStateMap];
  setPatchState(value: PatchStateMap[keyof PatchStateMap]): void;

  getCisaKev(): boolean;
  setCisaKev(value: boolean): void;

  getTopCwe(): boolean;
  setTopCwe(value: boolean): void;

  getExploitDb(): boolean;
  setExploitDb(value: boolean): void;

  getMetasploit(): boolean;
  setMetasploit(value: boolean): void;

  getEpssScore(): string;
  setEpssScore(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vulnerability.AsObject;
  static toObject(includeInstance: boolean, msg: Vulnerability): Vulnerability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vulnerability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vulnerability;
  static deserializeBinaryFromReader(message: Vulnerability, reader: jspb.BinaryReader): Vulnerability;
}

export namespace Vulnerability {
  export type AsObject = {
    organizationProductId?: heim_common_pb.UUID.AsObject,
    organizationProductName: string,
    organizationProductVersionId?: heim_common_pb.UUID.AsObject,
    organizationProductVersionString: string,
    vendorId?: heim_common_pb.UUID.AsObject,
    vendorDisplayName: string,
    productId?: heim_common_pb.UUID.AsObject,
    productDisplayName: string,
    productVersionString: string,
    vulnerabilityId?: heim_common_pb.UUID.AsObject,
    vulnerabilityKey: string,
    vulnerabilityPublishedDate: string,
    vulnerabilityModifiedDate: string,
    vulnerabilitySummary: string,
    vulnerabilitySeverityList: Array<Severity.AsObject>,
    vulnerabilityImpact?: VulnerabilityImpact.AsObject,
    dependencyId?: heim_common_pb.UUID.AsObject,
    vulnerabilityAnnalId?: heim_common_pb.UUID.AsObject,
    vulnerabilityAnnalCreatedAt: number,
    userImpactVulnerabilityAnnalId?: heim_common_pb.UUID.AsObject,
    userImpactVulnerabilityAnnalCreatedAt: number,
    descriptionList: Array<TextData.AsObject>,
    problemsList: Array<TextData.AsObject>,
    referenceLinkList: Array<ReferenceLink.AsObject>,
    vulnerabilityNote: string,
    isModify: boolean,
    cvssV2VectorString: string,
    cvssV3VectorString: string,
    vulnerabilityAssociationDate: number,
    vulnerabilityPublishedTimestamp: number,
    vulnerabilityModifiedTimestamp: number,
    patchState: PatchStateMap[keyof PatchStateMap],
    cisaKev: boolean,
    topCwe: boolean,
    exploitDb: boolean,
    metasploit: boolean,
    epssScore: string,
  }
}

export class VulnerabilityFilter extends jspb.Message {
  hasVulnerabilitySourceId(): boolean;
  clearVulnerabilitySourceId(): void;
  getVulnerabilitySourceId(): heim_common_pb.UUID | undefined;
  setVulnerabilitySourceId(value?: heim_common_pb.UUID): void;

  getVulnerabilityKey(): string;
  setVulnerabilityKey(value: string): void;

  getCvssBaseScore(): number;
  setCvssBaseScore(value: number): void;

  hasVulnerabilityModified(): boolean;
  clearVulnerabilityModified(): void;
  getVulnerabilityModified(): heim_common_pb.DateRange | undefined;
  setVulnerabilityModified(value?: heim_common_pb.DateRange): void;

  hasOrganizationProductId(): boolean;
  clearOrganizationProductId(): void;
  getOrganizationProductId(): heim_common_pb.UUID | undefined;
  setOrganizationProductId(value?: heim_common_pb.UUID): void;

  hasOrganizationProductVersionId(): boolean;
  clearOrganizationProductVersionId(): void;
  getOrganizationProductVersionId(): heim_common_pb.UUID | undefined;
  setOrganizationProductVersionId(value?: heim_common_pb.UUID): void;

  getStartDate(): number;
  setStartDate(value: number): void;

  getEndDate(): number;
  setEndDate(value: number): void;

  getPatchState(): PatchStateMap[keyof PatchStateMap];
  setPatchState(value: PatchStateMap[keyof PatchStateMap]): void;

  getMinimumCvssBaseScore(): number;
  setMinimumCvssBaseScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VulnerabilityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: VulnerabilityFilter): VulnerabilityFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VulnerabilityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VulnerabilityFilter;
  static deserializeBinaryFromReader(message: VulnerabilityFilter, reader: jspb.BinaryReader): VulnerabilityFilter;
}

export namespace VulnerabilityFilter {
  export type AsObject = {
    vulnerabilitySourceId?: heim_common_pb.UUID.AsObject,
    vulnerabilityKey: string,
    cvssBaseScore: number,
    vulnerabilityModified?: heim_common_pb.DateRange.AsObject,
    organizationProductId?: heim_common_pb.UUID.AsObject,
    organizationProductVersionId?: heim_common_pb.UUID.AsObject,
    startDate: number,
    endDate: number,
    patchState: PatchStateMap[keyof PatchStateMap],
    minimumCvssBaseScore: number,
  }
}

export class VulnerabilityOrder extends jspb.Message {
  getColumn(): VulnerabilityOrder.ColumnMap[keyof VulnerabilityOrder.ColumnMap];
  setColumn(value: VulnerabilityOrder.ColumnMap[keyof VulnerabilityOrder.ColumnMap]): void;

  getIsDescending(): boolean;
  setIsDescending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VulnerabilityOrder.AsObject;
  static toObject(includeInstance: boolean, msg: VulnerabilityOrder): VulnerabilityOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VulnerabilityOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VulnerabilityOrder;
  static deserializeBinaryFromReader(message: VulnerabilityOrder, reader: jspb.BinaryReader): VulnerabilityOrder;
}

export namespace VulnerabilityOrder {
  export type AsObject = {
    column: VulnerabilityOrder.ColumnMap[keyof VulnerabilityOrder.ColumnMap],
    isDescending: boolean,
  }

  export interface ColumnMap {
    ORGANIZATION_PRODUCT_NAME: 0;
    ORGANIZATION_PRODUCT_VERSION_STRING: 1;
    PRODUCT_NAME: 2;
    VENDOR_NAME: 3;
    PRODUCT_VERSION_STRING: 4;
    VULNERABILITY_ID: 5;
    SEVERITY: 6;
    VULN_MODIFIED: 7;
    VULN_PUBLISHED: 8;
    SUMMARY: 9;
    DEPENDENCY_VULNERABILITY_UPDATED: 11;
    EPSS: 12;
  }

  export const Column: ColumnMap;
}

export class ListVulnerabilities extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListVulnerabilities.Request | undefined;
  setRequest(value?: ListVulnerabilities.Request): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): ListVulnerabilities.Response | undefined;
  setResponse(value?: ListVulnerabilities.Response): void;

  getPayloadCase(): ListVulnerabilities.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVulnerabilities.AsObject;
  static toObject(includeInstance: boolean, msg: ListVulnerabilities): ListVulnerabilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVulnerabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVulnerabilities;
  static deserializeBinaryFromReader(message: ListVulnerabilities, reader: jspb.BinaryReader): ListVulnerabilities;
}

export namespace ListVulnerabilities {
  export type AsObject = {
    request?: ListVulnerabilities.Request.AsObject,
    response?: ListVulnerabilities.Response.AsObject,
  }

  export class Request extends jspb.Message {
    hasPage(): boolean;
    clearPage(): void;
    getPage(): heim_common_pb.Page | undefined;
    setPage(value?: heim_common_pb.Page): void;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): VulnerabilityFilter | undefined;
    setFilter(value?: VulnerabilityFilter): void;

    clearOrderList(): void;
    getOrderList(): Array<VulnerabilityOrder>;
    setOrderList(value: Array<VulnerabilityOrder>): void;
    addOrder(value?: VulnerabilityOrder, index?: number): VulnerabilityOrder;

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
      page?: heim_common_pb.Page.AsObject,
      filter?: VulnerabilityFilter.AsObject,
      orderList: Array<VulnerabilityOrder.AsObject>,
    }
  }

  export class Response extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): heim_common_pb.ResponseMetadata | undefined;
    setMetadata(value?: heim_common_pb.ResponseMetadata): void;

    clearVulnerabilityList(): void;
    getVulnerabilityList(): Array<Vulnerability>;
    setVulnerabilityList(value: Array<Vulnerability>): void;
    addVulnerability(value?: Vulnerability, index?: number): Vulnerability;

    getTotalCount(): number;
    setTotalCount(value: number): void;

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
      vulnerabilityList: Array<Vulnerability.AsObject>,
      totalCount: number,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
  }
}

export interface PatchStateMap {
  UNKNOWN: 0;
  PATCHED: 1;
  UNPATCHED: 2;
  PATCH_AVAILABLE: 3;
}

export const PatchState: PatchStateMap;


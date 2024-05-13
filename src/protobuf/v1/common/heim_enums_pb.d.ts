// package: medcrypt.helm.web.enums
// file: v1/common/heim_enums.proto

import * as jspb from "google-protobuf";

export interface ProductMatchTypeMap {
  AUTO_EXACT_MATCH: 0;
  AUTO_ALIAS_MATCH: 1;
  USER_EXACT_MATCH: 2;
  USER_ALIAS_MATCH: 3;
  USER_POSSIBLE_MATCH: 4;
  NOT_AVAILABLE: 5;
}

export const ProductMatchType: ProductMatchTypeMap;

export interface ReportRequestStateMap {
  RRS_NOT_DEFINED: 0;
  RRS_INITIALIZED: 1;
  RRS_PROCESSING: 2;
  RRS_FINALIZED_AS_ERROR: 3;
  RRS_FINALIZED_AS_SUCCESS: 4;
}

export const ReportRequestState: ReportRequestStateMap;

export interface ReviewStatusMap {
  NONE: 0;
  NEEDS_REVIEW: 1;
  REVIEWED: 2;
}

export const ReviewStatus: ReviewStatusMap;

export interface FileFormatMap {
  FF_UNKNOWN: 0;
  FF_JSON: 1;
  FF_CSV: 2;
  FF_XML: 3;
  FF_PB: 4;
  FF_GZIP: 5;
  FF_ZIP: 6;
  FF_TXT: 7;
  FF_CBOM: 8;
  FF_TGZ: 9;
  FF_HTML: 10;
  FF_YAML: 11;
  FF_SPDX: 12;
}

export const FileFormat: FileFormatMap;


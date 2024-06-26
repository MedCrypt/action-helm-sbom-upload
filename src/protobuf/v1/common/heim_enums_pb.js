/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.medcrypt.helm.web.enums.FileFormat', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.ProductMatchType', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.ReportRequestState', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.ReviewStatus', null, global);
/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.ProductMatchType = {
  AUTO_EXACT_MATCH: 0,
  AUTO_ALIAS_MATCH: 1,
  USER_EXACT_MATCH: 2,
  USER_ALIAS_MATCH: 3,
  USER_POSSIBLE_MATCH: 4,
  NOT_AVAILABLE: 5
};

/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.ReportRequestState = {
  RRS_NOT_DEFINED: 0,
  RRS_INITIALIZED: 1,
  RRS_PROCESSING: 2,
  RRS_FINALIZED_AS_ERROR: 3,
  RRS_FINALIZED_AS_SUCCESS: 4
};

/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.ReviewStatus = {
  NONE: 0,
  NEEDS_REVIEW: 1,
  REVIEWED: 2
};

/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.FileFormat = {
  FF_UNKNOWN: 0,
  FF_JSON: 1,
  FF_CSV: 2,
  FF_XML: 3,
  FF_PB: 4,
  FF_GZIP: 5,
  FF_ZIP: 6,
  FF_TXT: 7,
  FF_CBOM: 8,
  FF_TGZ: 9,
  FF_HTML: 10,
  FF_YAML: 11,
  FF_SPDX: 12
};

goog.object.extend(exports, proto.medcrypt.helm.web.enums);

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

goog.exportSymbol('proto.medcrypt.helm.web.enums.AccessLevel', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.FileFormat', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.ProductMatchType', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.ReportRequestState', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.ReviewStatus', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.RuleCondition', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.RuleInputField', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.RuleOutputCondition', null, global);
goog.exportSymbol('proto.medcrypt.helm.web.enums.RuleOutputField', null, global);
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

/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.RuleCondition = {
  NOT_SET: 0,
  EXACT: 1,
  GREATER_THAN: 2,
  LESS_THAN: 3,
  CONTAINS: 4,
  STARTS_WITH: 5,
  ENDS_WITH: 6
};

/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.RuleInputField = {
  NO_INPUT_SET: 0,
  COMPONENT_NAME: 1,
  COMPONENT_SUPPLIER: 2,
  COMPONENT_VERSION: 3,
  CPE: 4,
  PURL: 5
};

/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.RuleOutputField = {
  NO_OUTPUT_SET: 0,
  EOL_EOS: 1,
  LEVEL_OF_SUPPORT: 2,
  IR_PRODUCT_NAME: 5
};

/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.RuleOutputCondition = {
  DATE: 0,
  TEXT: 1
};

/**
 * @enum {number}
 */
proto.medcrypt.helm.web.enums.AccessLevel = {
  NO_ACCESS: 0,
  VIEW_ONLY: 1,
  MODIFY: 2
};

goog.object.extend(exports, proto.medcrypt.helm.web.enums);

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

var heim_common_pb = require('../../heim_common_pb.js');
var v1_common_heim_report_components_pb = require('../../v1/common/heim_report_components_pb.js');
goog.exportSymbol('proto.medcrypt.helm.api.v1.report.GetReportFile', null, global);
goog.exportSymbol('proto.medcrypt.helm.api.v1.report.GetReportRequestState', null, global);
goog.exportSymbol('proto.medcrypt.helm.api.v1.report.RequestReport', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.medcrypt.helm.api.v1.report.RequestReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.medcrypt.helm.api.v1.report.RequestReport.oneofGroups_);
};
goog.inherits(proto.medcrypt.helm.api.v1.report.RequestReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.medcrypt.helm.api.v1.report.RequestReport.displayName = 'proto.medcrypt.helm.api.v1.report.RequestReport';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.medcrypt.helm.api.v1.report.RequestReport.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  REQUEST: 1,
  RESPONSE: 2
};

/**
 * @return {proto.medcrypt.helm.api.v1.report.RequestReport.PayloadCase}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.getPayloadCase = function() {
  return /** @type {proto.medcrypt.helm.api.v1.report.RequestReport.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.medcrypt.helm.api.v1.report.RequestReport.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.toObject = function(opt_includeInstance) {
  return proto.medcrypt.helm.api.v1.report.RequestReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.medcrypt.helm.api.v1.report.RequestReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.medcrypt.helm.api.v1.report.RequestReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && v1_common_heim_report_components_pb.RequestReportRequest.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && v1_common_heim_report_components_pb.RequestReportResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.medcrypt.helm.api.v1.report.RequestReport}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.medcrypt.helm.api.v1.report.RequestReport;
  return proto.medcrypt.helm.api.v1.report.RequestReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.medcrypt.helm.api.v1.report.RequestReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.medcrypt.helm.api.v1.report.RequestReport}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new v1_common_heim_report_components_pb.RequestReportRequest;
      reader.readMessage(value,v1_common_heim_report_components_pb.RequestReportRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new v1_common_heim_report_components_pb.RequestReportResponse;
      reader.readMessage(value,v1_common_heim_report_components_pb.RequestReportResponse.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.medcrypt.helm.api.v1.report.RequestReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.medcrypt.helm.api.v1.report.RequestReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.medcrypt.helm.api.v1.report.RequestReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      v1_common_heim_report_components_pb.RequestReportRequest.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      v1_common_heim_report_components_pb.RequestReportResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional medcrypt.helm.web.reports.RequestReportRequest request = 1;
 * @return {?proto.medcrypt.helm.web.reports.RequestReportRequest}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.getRequest = function() {
  return /** @type{?proto.medcrypt.helm.web.reports.RequestReportRequest} */ (
    jspb.Message.getWrapperField(this, v1_common_heim_report_components_pb.RequestReportRequest, 1));
};


/** @param {?proto.medcrypt.helm.web.reports.RequestReportRequest|undefined} value */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.setRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.medcrypt.helm.api.v1.report.RequestReport.oneofGroups_[0], value);
};


proto.medcrypt.helm.api.v1.report.RequestReport.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional medcrypt.helm.web.reports.RequestReportResponse response = 2;
 * @return {?proto.medcrypt.helm.web.reports.RequestReportResponse}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.getResponse = function() {
  return /** @type{?proto.medcrypt.helm.web.reports.RequestReportResponse} */ (
    jspb.Message.getWrapperField(this, v1_common_heim_report_components_pb.RequestReportResponse, 2));
};


/** @param {?proto.medcrypt.helm.web.reports.RequestReportResponse|undefined} value */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.setResponse = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.medcrypt.helm.api.v1.report.RequestReport.oneofGroups_[0], value);
};


proto.medcrypt.helm.api.v1.report.RequestReport.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.medcrypt.helm.api.v1.report.RequestReport.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.medcrypt.helm.api.v1.report.GetReportRequestState.oneofGroups_);
};
goog.inherits(proto.medcrypt.helm.api.v1.report.GetReportRequestState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.medcrypt.helm.api.v1.report.GetReportRequestState.displayName = 'proto.medcrypt.helm.api.v1.report.GetReportRequestState';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  REQUEST: 1,
  RESPONSE: 2
};

/**
 * @return {proto.medcrypt.helm.api.v1.report.GetReportRequestState.PayloadCase}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.getPayloadCase = function() {
  return /** @type {proto.medcrypt.helm.api.v1.report.GetReportRequestState.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.medcrypt.helm.api.v1.report.GetReportRequestState.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.toObject = function(opt_includeInstance) {
  return proto.medcrypt.helm.api.v1.report.GetReportRequestState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.medcrypt.helm.api.v1.report.GetReportRequestState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && v1_common_heim_report_components_pb.GetReportRequestStateRequest.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && v1_common_heim_report_components_pb.GetReportRequestStateResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.medcrypt.helm.api.v1.report.GetReportRequestState}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.medcrypt.helm.api.v1.report.GetReportRequestState;
  return proto.medcrypt.helm.api.v1.report.GetReportRequestState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.medcrypt.helm.api.v1.report.GetReportRequestState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.medcrypt.helm.api.v1.report.GetReportRequestState}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new v1_common_heim_report_components_pb.GetReportRequestStateRequest;
      reader.readMessage(value,v1_common_heim_report_components_pb.GetReportRequestStateRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new v1_common_heim_report_components_pb.GetReportRequestStateResponse;
      reader.readMessage(value,v1_common_heim_report_components_pb.GetReportRequestStateResponse.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.medcrypt.helm.api.v1.report.GetReportRequestState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.medcrypt.helm.api.v1.report.GetReportRequestState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      v1_common_heim_report_components_pb.GetReportRequestStateRequest.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      v1_common_heim_report_components_pb.GetReportRequestStateResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional medcrypt.helm.web.reports.GetReportRequestStateRequest request = 1;
 * @return {?proto.medcrypt.helm.web.reports.GetReportRequestStateRequest}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.getRequest = function() {
  return /** @type{?proto.medcrypt.helm.web.reports.GetReportRequestStateRequest} */ (
    jspb.Message.getWrapperField(this, v1_common_heim_report_components_pb.GetReportRequestStateRequest, 1));
};


/** @param {?proto.medcrypt.helm.web.reports.GetReportRequestStateRequest|undefined} value */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.setRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.medcrypt.helm.api.v1.report.GetReportRequestState.oneofGroups_[0], value);
};


proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional medcrypt.helm.web.reports.GetReportRequestStateResponse response = 2;
 * @return {?proto.medcrypt.helm.web.reports.GetReportRequestStateResponse}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.getResponse = function() {
  return /** @type{?proto.medcrypt.helm.web.reports.GetReportRequestStateResponse} */ (
    jspb.Message.getWrapperField(this, v1_common_heim_report_components_pb.GetReportRequestStateResponse, 2));
};


/** @param {?proto.medcrypt.helm.web.reports.GetReportRequestStateResponse|undefined} value */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.setResponse = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.medcrypt.helm.api.v1.report.GetReportRequestState.oneofGroups_[0], value);
};


proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.medcrypt.helm.api.v1.report.GetReportRequestState.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.medcrypt.helm.api.v1.report.GetReportFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.medcrypt.helm.api.v1.report.GetReportFile.oneofGroups_);
};
goog.inherits(proto.medcrypt.helm.api.v1.report.GetReportFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.medcrypt.helm.api.v1.report.GetReportFile.displayName = 'proto.medcrypt.helm.api.v1.report.GetReportFile';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  REQUEST: 1
};

/**
 * @return {proto.medcrypt.helm.api.v1.report.GetReportFile.PayloadCase}
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.prototype.getPayloadCase = function() {
  return /** @type {proto.medcrypt.helm.api.v1.report.GetReportFile.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.medcrypt.helm.api.v1.report.GetReportFile.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.prototype.toObject = function(opt_includeInstance) {
  return proto.medcrypt.helm.api.v1.report.GetReportFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.medcrypt.helm.api.v1.report.GetReportFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && v1_common_heim_report_components_pb.GetReportFileRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.medcrypt.helm.api.v1.report.GetReportFile}
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.medcrypt.helm.api.v1.report.GetReportFile;
  return proto.medcrypt.helm.api.v1.report.GetReportFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.medcrypt.helm.api.v1.report.GetReportFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.medcrypt.helm.api.v1.report.GetReportFile}
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new v1_common_heim_report_components_pb.GetReportFileRequest;
      reader.readMessage(value,v1_common_heim_report_components_pb.GetReportFileRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.medcrypt.helm.api.v1.report.GetReportFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.medcrypt.helm.api.v1.report.GetReportFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      v1_common_heim_report_components_pb.GetReportFileRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional medcrypt.helm.web.reports.GetReportFileRequest request = 1;
 * @return {?proto.medcrypt.helm.web.reports.GetReportFileRequest}
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.prototype.getRequest = function() {
  return /** @type{?proto.medcrypt.helm.web.reports.GetReportFileRequest} */ (
    jspb.Message.getWrapperField(this, v1_common_heim_report_components_pb.GetReportFileRequest, 1));
};


/** @param {?proto.medcrypt.helm.web.reports.GetReportFileRequest|undefined} value */
proto.medcrypt.helm.api.v1.report.GetReportFile.prototype.setRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.medcrypt.helm.api.v1.report.GetReportFile.oneofGroups_[0], value);
};


proto.medcrypt.helm.api.v1.report.GetReportFile.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.medcrypt.helm.api.v1.report.GetReportFile.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.medcrypt.helm.api.v1.report);

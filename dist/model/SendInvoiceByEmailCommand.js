"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
/**
 * Siigo API
 * Siigo Api v1
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The SendInvoiceByEmailCommand model module.
 * @module model/SendInvoiceByEmailCommand
 * @version v1
 */
var SendInvoiceByEmailCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendInvoiceByEmailCommand</code>.
   * @alias module:model/SendInvoiceByEmailCommand
   */
  function SendInvoiceByEmailCommand() {
    (0, _classCallCheck2["default"])(this, SendInvoiceByEmailCommand);
    SendInvoiceByEmailCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(SendInvoiceByEmailCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendInvoiceByEmailCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendInvoiceByEmailCommand} obj Optional instance to populate.
     * @return {module:model/SendInvoiceByEmailCommand} The populated <code>SendInvoiceByEmailCommand</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendInvoiceByEmailCommand();
        if (data.hasOwnProperty('guid')) {
          obj['guid'] = _ApiClient["default"].convertToType(data['guid'], 'String');
        }
        if (data.hasOwnProperty('mail_to')) {
          obj['mail_to'] = _ApiClient["default"].convertToType(data['mail_to'], 'String');
        }
        if (data.hasOwnProperty('copy_to')) {
          obj['copy_to'] = _ApiClient["default"].convertToType(data['copy_to'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SendInvoiceByEmailCommand;
}();
/**
 * Guid of the document.
 * @member {String} guid
 */
SendInvoiceByEmailCommand.prototype['guid'] = undefined;

/**
 * Email address to send the document.
 * @member {String} mail_to
 */
SendInvoiceByEmailCommand.prototype['mail_to'] = undefined;

/**
 * Email addresses to send copies of the document, maximum 5 email addresses are allowed.
 * @member {String} copy_to
 */
SendInvoiceByEmailCommand.prototype['copy_to'] = undefined;
var _default = exports["default"] = SendInvoiceByEmailCommand;

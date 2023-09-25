"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _InvoiceStampViewModel = _interopRequireDefault(require("./InvoiceStampViewModel"));
var _MailViewModel = _interopRequireDefault(require("./MailViewModel"));
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
 * The SendElectronicInvoiceViewModel model module.
 * @module model/SendElectronicInvoiceViewModel
 * @version v1
 */
var SendElectronicInvoiceViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendElectronicInvoiceViewModel</code>.
   * @alias module:model/SendElectronicInvoiceViewModel
   */
  function SendElectronicInvoiceViewModel() {
    (0, _classCallCheck2["default"])(this, SendElectronicInvoiceViewModel);
    SendElectronicInvoiceViewModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(SendElectronicInvoiceViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendElectronicInvoiceViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendElectronicInvoiceViewModel} obj Optional instance to populate.
     * @return {module:model/SendElectronicInvoiceViewModel} The populated <code>SendElectronicInvoiceViewModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendElectronicInvoiceViewModel();
        if (data.hasOwnProperty('stamp')) {
          obj['stamp'] = _InvoiceStampViewModel["default"].constructFromObject(data['stamp']);
        }
        if (data.hasOwnProperty('mail')) {
          obj['mail'] = _MailViewModel["default"].constructFromObject(data['mail']);
        }
      }
      return obj;
    }
  }]);
  return SendElectronicInvoiceViewModel;
}();
/**
 * @member {module:model/InvoiceStampViewModel} stamp
 */
SendElectronicInvoiceViewModel.prototype['stamp'] = undefined;

/**
 * @member {module:model/MailViewModel} mail
 */
SendElectronicInvoiceViewModel.prototype['mail'] = undefined;
var _default = exports["default"] = SendElectronicInvoiceViewModel;
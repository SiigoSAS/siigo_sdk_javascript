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
 * The DocumentBalanceViewModel model module.
 * @module model/DocumentBalanceViewModel
 * @version v1
 */
var DocumentBalanceViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentBalanceViewModel</code>.
   * Defines the Siigo.SiigoAPI.Api.Application.DocumentBalance.Models.DocumentBalanceViewModel.
   * @alias module:model/DocumentBalanceViewModel
   */
  function DocumentBalanceViewModel() {
    (0, _classCallCheck2["default"])(this, DocumentBalanceViewModel);
    DocumentBalanceViewModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(DocumentBalanceViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>DocumentBalanceViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentBalanceViewModel} obj Optional instance to populate.
     * @return {module:model/DocumentBalanceViewModel} The populated <code>DocumentBalanceViewModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentBalanceViewModel();
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('total_purchased')) {
          obj['total_purchased'] = _ApiClient["default"].convertToType(data['total_purchased'], 'Number');
        }
        if (data.hasOwnProperty('used')) {
          obj['used'] = _ApiClient["default"].convertToType(data['used'], 'Number');
        }
        if (data.hasOwnProperty('available')) {
          obj['available'] = _ApiClient["default"].convertToType(data['available'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return DocumentBalanceViewModel;
}();
/**
 * Type of the document balance, the value is alphanumeric, this value can be 'FV' to invoices, 'NC' to credit notes
 * @member {String} type
 */
DocumentBalanceViewModel.prototype['type'] = undefined;

/**
 * Represents the total invoice purchased,  the value of this field can be an integer
 * @member {Number} total_purchased
 */
DocumentBalanceViewModel.prototype['total_purchased'] = undefined;

/**
 * Represents the total invoice used,  the value of this field can be an integer
 * @member {Number} used
 */
DocumentBalanceViewModel.prototype['used'] = undefined;

/**
 * Represents the total invoice available, the value of this field can be an integer
 * @member {Number} available
 */
DocumentBalanceViewModel.prototype['available'] = undefined;
var _default = exports["default"] = DocumentBalanceViewModel;
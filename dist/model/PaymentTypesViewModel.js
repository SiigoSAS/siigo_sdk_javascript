"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

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
 * The PaymentTypesViewModel model module.
 * @module model/PaymentTypesViewModel
 * @version v1
 */
var PaymentTypesViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentTypesViewModel</code>.
   * @alias module:model/PaymentTypesViewModel
   */
  function PaymentTypesViewModel() {
    (0, _classCallCheck2["default"])(this, PaymentTypesViewModel);
    PaymentTypesViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(PaymentTypesViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentTypesViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentTypesViewModel} obj Optional instance to populate.
     * @return {module:model/PaymentTypesViewModel} The populated <code>PaymentTypesViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentTypesViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('due_date')) {
          obj['due_date'] = _ApiClient["default"].convertToType(data['due_date'], 'Boolean');
        }
      }

      return obj;
    }
  }]);
  return PaymentTypesViewModel;
}();
/**
 * Represents the id of the payment method, the value of this field must be an integer  number that represents the unique id of the payment method. For example '5636'.
 * @member {Number} id
 */


PaymentTypesViewModel.prototype['id'] = undefined;
/**
 * Represents the name of the payment method. This value can be an alphanumeric name  like 'Crédito' (credit).
 * @member {String} name
 */

PaymentTypesViewModel.prototype['name'] = undefined;
/**
 * Type of the payment method. This value can be 'Cartera', 'Proveedor' or 'CarteraProveedor'.
 * @member {String} type
 */

PaymentTypesViewModel.prototype['type'] = undefined;
/**
 * Represents if payment method status is activated or disabled,   the value of this status will be true (for activated) or false (disabled).  By default, this field will be true.
 * @member {Boolean} active
 */

PaymentTypesViewModel.prototype['active'] = undefined;
/**
 * Indicates if the payment method has an expiration date. This value can be 'true' or 'false'.
 * @member {Boolean} due_date
 */

PaymentTypesViewModel.prototype['due_date'] = undefined;
var _default = PaymentTypesViewModel;
exports["default"] = _default;
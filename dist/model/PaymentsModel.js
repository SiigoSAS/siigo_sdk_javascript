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
 * The PaymentsModel model module.
 * @module model/PaymentsModel
 * @version v1
 */
var PaymentsModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentsModel</code>.
   * @alias module:model/PaymentsModel
   */
  function PaymentsModel() {
    (0, _classCallCheck2["default"])(this, PaymentsModel);
    PaymentsModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(PaymentsModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentsModel} obj Optional instance to populate.
     * @return {module:model/PaymentsModel} The populated <code>PaymentsModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentsModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }

        if (data.hasOwnProperty('due_date')) {
          obj['due_date'] = _ApiClient["default"].convertToType(data['due_date'], 'String');
        }
      }

      return obj;
    }
  }]);
  return PaymentsModel;
}();
/**
 * Represents the id of payment method.
 * @member {Number} id
 */


PaymentsModel.prototype['id'] = undefined;
/**
 * Represents the name of the payment method.
 * @member {String} name
 */

PaymentsModel.prototype['name'] = undefined;
/**
 * represents the amount to paid per installment,  this value will be associated to payment method.
 * @member {Number} value
 */

PaymentsModel.prototype['value'] = undefined;
/**
 * Represents the date of fee payment.
 * @member {String} due_date
 */

PaymentsModel.prototype['due_date'] = undefined;
var _default = PaymentsModel;
exports["default"] = _default;
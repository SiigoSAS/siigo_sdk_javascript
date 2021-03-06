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
 * The Customer model module.
 * @module model/Customer
 * @version v1
 */
var Customer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Customer</code>.
   * @alias module:model/Customer
   */
  function Customer() {
    (0, _classCallCheck2["default"])(this, Customer);
    Customer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Customer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Customer} obj Optional instance to populate.
     * @return {module:model/Customer} The populated <code>Customer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Customer();

        if (data.hasOwnProperty('identification')) {
          obj['identification'] = _ApiClient["default"].convertToType(data['identification'], 'String');
        }

        if (data.hasOwnProperty('branch_office')) {
          obj['branch_office'] = _ApiClient["default"].convertToType(data['branch_office'], 'Number');
        }
      }

      return obj;
    }
  }]);
  return Customer;
}();
/**
 * Represents the identification number of customer.  For example, this identification can be like '13832081'.
 * @member {String} identification
 */


Customer.prototype['identification'] = undefined;
/**
 * Represents the branch office number of the customer, default value will be 0.
 * @member {Number} branch_office
 */

Customer.prototype['branch_office'] = undefined;
var _default = Customer;
exports["default"] = _default;
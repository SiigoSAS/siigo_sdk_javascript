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
 * The TestBalanceCustomer model module.
 * @module model/TestBalanceCustomer
 * @version v1
 */
var TestBalanceCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TestBalanceCustomer</code>.
   * @alias module:model/TestBalanceCustomer
   */
  function TestBalanceCustomer() {
    (0, _classCallCheck2["default"])(this, TestBalanceCustomer);
    TestBalanceCustomer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(TestBalanceCustomer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TestBalanceCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestBalanceCustomer} obj Optional instance to populate.
     * @return {module:model/TestBalanceCustomer} The populated <code>TestBalanceCustomer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TestBalanceCustomer();

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
  return TestBalanceCustomer;
}();
/**
 * @member {String} identification
 */


TestBalanceCustomer.prototype['identification'] = undefined;
/**
 * @member {Number} branch_office
 */

TestBalanceCustomer.prototype['branch_office'] = undefined;
var _default = TestBalanceCustomer;
exports["default"] = _default;
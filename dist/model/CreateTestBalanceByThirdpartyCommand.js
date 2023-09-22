"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TestBalanceCustomer = _interopRequireDefault(require("./TestBalanceCustomer"));

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
 * The CreateTestBalanceByThirdpartyCommand model module.
 * @module model/CreateTestBalanceByThirdpartyCommand
 * @version v1
 */
var CreateTestBalanceByThirdpartyCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTestBalanceByThirdpartyCommand</code>.
   * @alias module:model/CreateTestBalanceByThirdpartyCommand
   */
  function CreateTestBalanceByThirdpartyCommand() {
    (0, _classCallCheck2["default"])(this, CreateTestBalanceByThirdpartyCommand);
    CreateTestBalanceByThirdpartyCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CreateTestBalanceByThirdpartyCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTestBalanceByThirdpartyCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestBalanceByThirdpartyCommand} obj Optional instance to populate.
     * @return {module:model/CreateTestBalanceByThirdpartyCommand} The populated <code>CreateTestBalanceByThirdpartyCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTestBalanceByThirdpartyCommand();

        if (data.hasOwnProperty('account_start')) {
          obj['account_start'] = _ApiClient["default"].convertToType(data['account_start'], 'String');
        }

        if (data.hasOwnProperty('account_end')) {
          obj['account_end'] = _ApiClient["default"].convertToType(data['account_end'], 'String');
        }

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('month_start')) {
          obj['month_start'] = _ApiClient["default"].convertToType(data['month_start'], 'Number');
        }

        if (data.hasOwnProperty('month_end')) {
          obj['month_end'] = _ApiClient["default"].convertToType(data['month_end'], 'Number');
        }

        if (data.hasOwnProperty('includes_tax_difference')) {
          obj['includes_tax_difference'] = _ApiClient["default"].convertToType(data['includes_tax_difference'], 'Boolean');
        }

        if (data.hasOwnProperty('customer')) {
          obj['customer'] = _TestBalanceCustomer["default"].constructFromObject(data['customer']);
        }
      }

      return obj;
    }
  }]);
  return CreateTestBalanceByThirdpartyCommand;
}();
/**
 * @member {String} account_start
 */


CreateTestBalanceByThirdpartyCommand.prototype['account_start'] = undefined;
/**
 * @member {String} account_end
 */

CreateTestBalanceByThirdpartyCommand.prototype['account_end'] = undefined;
/**
 * @member {Number} year
 */

CreateTestBalanceByThirdpartyCommand.prototype['year'] = undefined;
/**
 * @member {Number} month_start
 */

CreateTestBalanceByThirdpartyCommand.prototype['month_start'] = undefined;
/**
 * @member {Number} month_end
 */

CreateTestBalanceByThirdpartyCommand.prototype['month_end'] = undefined;
/**
 * @member {Boolean} includes_tax_difference
 */

CreateTestBalanceByThirdpartyCommand.prototype['includes_tax_difference'] = undefined;
/**
 * @member {module:model/TestBalanceCustomer} customer
 */

CreateTestBalanceByThirdpartyCommand.prototype['customer'] = undefined;
var _default = CreateTestBalanceByThirdpartyCommand;
exports["default"] = _default;
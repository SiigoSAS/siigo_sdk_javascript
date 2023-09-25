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
 * The LiteCustomerCommand model module.
 * @module model/LiteCustomerCommand
 * @version v1
 */
var LiteCustomerCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LiteCustomerCommand</code>.
   * @alias module:model/LiteCustomerCommand
   */
  function LiteCustomerCommand() {
    (0, _classCallCheck2["default"])(this, LiteCustomerCommand);
    LiteCustomerCommand.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(LiteCustomerCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>LiteCustomerCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LiteCustomerCommand} obj Optional instance to populate.
     * @return {module:model/LiteCustomerCommand} The populated <code>LiteCustomerCommand</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LiteCustomerCommand();
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
  return LiteCustomerCommand;
}();
/**
 * Represents the identification number of customer.
 * @member {String} identification
 */
LiteCustomerCommand.prototype['identification'] = undefined;

/**
 * Represents the branch office number of the customer, default value will be 0.
 * @member {Number} branch_office
 */
LiteCustomerCommand.prototype['branch_office'] = undefined;
var _default = exports["default"] = LiteCustomerCommand;
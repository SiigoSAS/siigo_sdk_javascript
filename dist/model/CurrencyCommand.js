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
 * The CurrencyCommand model module.
 * @module model/CurrencyCommand
 * @version v1
 */
var CurrencyCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CurrencyCommand</code>.
   * @alias module:model/CurrencyCommand
   */
  function CurrencyCommand() {
    (0, _classCallCheck2["default"])(this, CurrencyCommand);
    CurrencyCommand.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(CurrencyCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CurrencyCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencyCommand} obj Optional instance to populate.
     * @return {module:model/CurrencyCommand} The populated <code>CurrencyCommand</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CurrencyCommand();
        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
        if (data.hasOwnProperty('exchange_rate')) {
          obj['exchange_rate'] = _ApiClient["default"].convertToType(data['exchange_rate'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return CurrencyCommand;
}();
/**
 * Represents the Id code of currency, for example, 'USD' represents   the dollar and 'EUR' means 'Euro'.
 * @member {String} code
 */
CurrencyCommand.prototype['code'] = undefined;

/**
 * Represents the exchange rate of currency. For example, 'USD' could have   an exchange rate of '0.86' to 'EUR'.
 * @member {Number} exchange_rate
 */
CurrencyCommand.prototype['exchange_rate'] = undefined;
var _default = exports["default"] = CurrencyCommand;
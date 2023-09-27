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
 * The AccountsPayableDue model module.
 * @module model/AccountsPayableDue
 * @version v1
 */
var AccountsPayableDue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountsPayableDue</code>.
   * @alias module:model/AccountsPayableDue
   */
  function AccountsPayableDue() {
    (0, _classCallCheck2["default"])(this, AccountsPayableDue);
    AccountsPayableDue.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(AccountsPayableDue, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AccountsPayableDue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountsPayableDue} obj Optional instance to populate.
     * @return {module:model/AccountsPayableDue} The populated <code>AccountsPayableDue</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountsPayableDue();
        if (data.hasOwnProperty('prefix')) {
          obj['prefix'] = _ApiClient["default"].convertToType(data['prefix'], 'String');
        }
        if (data.hasOwnProperty('consecutive')) {
          obj['consecutive'] = _ApiClient["default"].convertToType(data['consecutive'], 'Number');
        }
        if (data.hasOwnProperty('quote')) {
          obj['quote'] = _ApiClient["default"].convertToType(data['quote'], 'Number');
        }
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return AccountsPayableDue;
}();
/**
 * @member {String} prefix
 */
AccountsPayableDue.prototype['prefix'] = undefined;

/**
 * @member {Number} consecutive
 */
AccountsPayableDue.prototype['consecutive'] = undefined;

/**
 * @member {Number} quote
 */
AccountsPayableDue.prototype['quote'] = undefined;

/**
 * @member {String} date
 */
AccountsPayableDue.prototype['date'] = undefined;

/**
 * @member {Number} balance
 */
AccountsPayableDue.prototype['balance'] = undefined;
var _default = exports["default"] = AccountsPayableDue;
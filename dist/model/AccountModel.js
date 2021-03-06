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
 * The AccountModel model module.
 * @module model/AccountModel
 * @version v1
 */
var AccountModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountModel</code>.
   * @alias module:model/AccountModel
   */
  function AccountModel() {
    (0, _classCallCheck2["default"])(this, AccountModel);
    AccountModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(AccountModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountModel} obj Optional instance to populate.
     * @return {module:model/AccountModel} The populated <code>AccountModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountModel();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('movement')) {
          obj['movement'] = _ApiClient["default"].convertToType(data['movement'], 'String');
        }
      }

      return obj;
    }
  }]);
  return AccountModel;
}();
/**
 * Represents Accounting account code.
 * @member {String} code
 */


AccountModel.prototype['code'] = undefined;
/**
 * Represents the type of movement, this movement will be 'Debit' or 'Credit'.
 * @member {String} movement
 */

AccountModel.prototype['movement'] = undefined;
var _default = AccountModel;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AccountModel = _interopRequireDefault(require("./AccountModel"));
var _Due = _interopRequireDefault(require("./Due"));
var _TaxesModel = _interopRequireDefault(require("./TaxesModel"));
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
 * The ItemVoucher model module.
 * @module model/ItemVoucher
 * @version v1
 */
var ItemVoucher = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemVoucher</code>.
   * @alias module:model/ItemVoucher
   */
  function ItemVoucher() {
    (0, _classCallCheck2["default"])(this, ItemVoucher);
    ItemVoucher.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(ItemVoucher, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ItemVoucher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemVoucher} obj Optional instance to populate.
     * @return {module:model/ItemVoucher} The populated <code>ItemVoucher</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemVoucher();
        if (data.hasOwnProperty('account')) {
          obj['account'] = _AccountModel["default"].constructFromObject(data['account']);
        }
        if (data.hasOwnProperty('due')) {
          obj['due'] = _Due["default"].constructFromObject(data['due']);
        }
        if (data.hasOwnProperty('tax')) {
          obj['tax'] = _TaxesModel["default"].constructFromObject(data['tax']);
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ItemVoucher;
}();
/**
 * @member {module:model/AccountModel} account
 */
ItemVoucher.prototype['account'] = undefined;

/**
 * @member {module:model/Due} due
 */
ItemVoucher.prototype['due'] = undefined;

/**
 * @member {module:model/TaxesModel} tax
 */
ItemVoucher.prototype['tax'] = undefined;

/**
 * Represents product description.
 * @member {String} description
 */
ItemVoucher.prototype['description'] = undefined;

/**
 * Represents the price of item.  For example, '119000'.
 * @member {Number} value
 */
ItemVoucher.prototype['value'] = undefined;
var _default = exports["default"] = ItemVoucher;
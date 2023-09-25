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
 * The DiscountModel model module.
 * @module model/DiscountModel
 * @version v1
 */
var DiscountModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DiscountModel</code>.
   * @alias module:model/DiscountModel
   */
  function DiscountModel() {
    (0, _classCallCheck2["default"])(this, DiscountModel);
    DiscountModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(DiscountModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>DiscountModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscountModel} obj Optional instance to populate.
     * @return {module:model/DiscountModel} The populated <code>DiscountModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiscountModel();
        if (data.hasOwnProperty('percentage')) {
          obj['percentage'] = _ApiClient["default"].convertToType(data['percentage'], 'Number');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return DiscountModel;
}();
/**
 * Represents the numerical percentage of the discount.  For example, '13' represents 13%.
 * @member {Number} percentage
 */
DiscountModel.prototype['percentage'] = undefined;

/**
 * Represents the value of the discount.  For example, 130 dollars.
 * @member {Number} value
 */
DiscountModel.prototype['value'] = undefined;
var _default = exports["default"] = DiscountModel;
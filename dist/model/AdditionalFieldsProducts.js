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
 * The AdditionalFieldsProducts model module.
 * @module model/AdditionalFieldsProducts
 * @version v1
 */
var AdditionalFieldsProducts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AdditionalFieldsProducts</code>.
   * @alias module:model/AdditionalFieldsProducts
   */
  function AdditionalFieldsProducts() {
    (0, _classCallCheck2["default"])(this, AdditionalFieldsProducts);
    AdditionalFieldsProducts.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(AdditionalFieldsProducts, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AdditionalFieldsProducts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalFieldsProducts} obj Optional instance to populate.
     * @return {module:model/AdditionalFieldsProducts} The populated <code>AdditionalFieldsProducts</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AdditionalFieldsProducts();
        if (data.hasOwnProperty('barcode')) {
          obj['barcode'] = _ApiClient["default"].convertToType(data['barcode'], 'String');
        }
        if (data.hasOwnProperty('brand')) {
          obj['brand'] = _ApiClient["default"].convertToType(data['brand'], 'String');
        }
        if (data.hasOwnProperty('tariff')) {
          obj['tariff'] = _ApiClient["default"].convertToType(data['tariff'], 'String');
        }
        if (data.hasOwnProperty('model')) {
          obj['model'] = _ApiClient["default"].convertToType(data['model'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AdditionalFieldsProducts;
}();
/**
 * Represents the barcode.
 * @member {String} barcode
 */
AdditionalFieldsProducts.prototype['barcode'] = undefined;

/**
 * Represents the brand of product.
 * @member {String} brand
 */
AdditionalFieldsProducts.prototype['brand'] = undefined;

/**
 * Represents the tariff code of product.
 * @member {String} tariff
 */
AdditionalFieldsProducts.prototype['tariff'] = undefined;

/**
 * Represents the model of product.
 * @member {String} model
 */
AdditionalFieldsProducts.prototype['model'] = undefined;
var _default = exports["default"] = AdditionalFieldsProducts;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProductDetail = _interopRequireDefault(require("./ProductDetail"));

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
 * The ProductDetailsViewModel model module.
 * @module model/ProductDetailsViewModel
 * @version v1
 */
var ProductDetailsViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductDetailsViewModel</code>.
   * Viewmodel Specifically made for the clients, based on the data returned by the queries.
   * @alias module:model/ProductDetailsViewModel
   */
  function ProductDetailsViewModel() {
    (0, _classCallCheck2["default"])(this, ProductDetailsViewModel);
    ProductDetailsViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ProductDetailsViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProductDetailsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductDetailsViewModel} obj Optional instance to populate.
     * @return {module:model/ProductDetailsViewModel} The populated <code>ProductDetailsViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductDetailsViewModel();

        if (data.hasOwnProperty('product_id')) {
          obj['product_id'] = _ApiClient["default"].convertToType(data['product_id'], 'String');
        }

        if (data.hasOwnProperty('product_name')) {
          obj['product_name'] = _ApiClient["default"].convertToType(data['product_name'], 'String');
        }

        if (data.hasOwnProperty('product_description')) {
          obj['product_description'] = _ApiClient["default"].convertToType(data['product_description'], 'String');
        }

        if (data.hasOwnProperty('product_price')) {
          obj['product_price'] = _ApiClient["default"].convertToType(data['product_price'], 'Number');
        }

        if (data.hasOwnProperty('product_details')) {
          obj['product_details'] = _ApiClient["default"].convertToType(data['product_details'], [_ProductDetail["default"]]);
        }
      }

      return obj;
    }
  }]);
  return ProductDetailsViewModel;
}();
/**
 * Represents the identification code of the product. This value can be an alphanumeric  code that will represent the code id of the cost center.  For example, this name can be 'Item-1' or 'toy007'.
 * @member {String} product_id
 */


ProductDetailsViewModel.prototype['product_id'] = undefined;
/**
 * Represents the name of product or service.
 * @member {String} product_name
 */

ProductDetailsViewModel.prototype['product_name'] = undefined;
/**
 * Represents product description.
 * @member {String} product_description
 */

ProductDetailsViewModel.prototype['product_description'] = undefined;
/**
 * Represents product price.
 * @member {Number} product_price
 */

ProductDetailsViewModel.prototype['product_price'] = undefined;
/**
 * Contains a list of products details.
 * @member {Array.<module:model/ProductDetail>} product_details
 */

ProductDetailsViewModel.prototype['product_details'] = undefined;
var _default = ProductDetailsViewModel;
exports["default"] = _default;
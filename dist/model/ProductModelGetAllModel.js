"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _GenericPageListModel = _interopRequireDefault(require("./GenericPageListModel.js"));
var _LinksPagination = _interopRequireDefault(require("./LinksPagination.js"));
var _ProductModel = _interopRequireDefault(require("./ProductModel.js"));
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
 * The ProductModelGetAllModel model module.
 * @module model/ProductModelGetAllModel
 * @version v1
 */
var ProductModelGetAllModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductModelGetAllModel</code>.
   * @alias module:model/ProductModelGetAllModel
   */
  function ProductModelGetAllModel() {
    (0, _classCallCheck2["default"])(this, ProductModelGetAllModel);
    ProductModelGetAllModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(ProductModelGetAllModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ProductModelGetAllModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductModelGetAllModel} obj Optional instance to populate.
     * @return {module:model/ProductModelGetAllModel} The populated <code>ProductModelGetAllModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductModelGetAllModel();
        if (data.hasOwnProperty('pagination')) {
          obj['pagination'] = _GenericPageListModel["default"].constructFromObject(data['pagination']);
        }
        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_ProductModel["default"]]);
        }
        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _LinksPagination["default"].constructFromObject(data['_links']);
        }
      }
      return obj;
    }
  }]);
  return ProductModelGetAllModel;
}();
/**
 * @member {module:model/GenericPageListModel} pagination
 */
ProductModelGetAllModel.prototype['pagination'] = undefined;

/**
 * Contains the Results, this results will be a list of model.
 * @member {Array.<module:model/ProductModel>} results
 */
ProductModelGetAllModel.prototype['results'] = undefined;

/**
 * @member {module:model/LinksPagination} _links
 */
ProductModelGetAllModel.prototype['_links'] = undefined;
var _default = exports["default"] = ProductModelGetAllModel;
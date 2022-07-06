"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountGroup = _interopRequireDefault(require("./AccountGroup"));

var _AdditionalFields = _interopRequireDefault(require("./AdditionalFields"));

var _KeysProductsViewModel = _interopRequireDefault(require("./KeysProductsViewModel"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

var _PriceListViewModel = _interopRequireDefault(require("./PriceListViewModel"));

var _Tax = _interopRequireDefault(require("./Tax"));

var _UnitProductsViewModel = _interopRequireDefault(require("./UnitProductsViewModel"));

var _Warehouse = _interopRequireDefault(require("./Warehouse"));

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
 * The ProductModel model module.
 * @module model/ProductModel
 * @version v1
 */
var ProductModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductModel</code>.
   * @alias module:model/ProductModel
   */
  function ProductModel() {
    (0, _classCallCheck2["default"])(this, ProductModel);
    ProductModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ProductModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProductModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductModel} obj Optional instance to populate.
     * @return {module:model/ProductModel} The populated <code>ProductModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('account_group')) {
          obj['account_group'] = _AccountGroup["default"].constructFromObject(data['account_group']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('stock_control')) {
          obj['stock_control'] = _ApiClient["default"].convertToType(data['stock_control'], 'Boolean');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_classification')) {
          obj['tax_classification'] = _ApiClient["default"].convertToType(data['tax_classification'], 'String');
        }

        if (data.hasOwnProperty('tax_included')) {
          obj['tax_included'] = _ApiClient["default"].convertToType(data['tax_included'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_consumption_value')) {
          obj['tax_consumption_value'] = _ApiClient["default"].convertToType(data['tax_consumption_value'], 'Number');
        }

        if (data.hasOwnProperty('taxes')) {
          obj['taxes'] = _ApiClient["default"].convertToType(data['taxes'], [_Tax["default"]]);
        }

        if (data.hasOwnProperty('prices')) {
          obj['prices'] = _ApiClient["default"].convertToType(data['prices'], [_PriceListViewModel["default"]]);
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _UnitProductsViewModel["default"].constructFromObject(data['unit']);
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _KeysProductsViewModel["default"].constructFromObject(data['key']);
        }

        if (data.hasOwnProperty('unit_label')) {
          obj['unit_label'] = _ApiClient["default"].convertToType(data['unit_label'], 'String');
        }

        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('additional_fields')) {
          obj['additional_fields'] = _AdditionalFields["default"].constructFromObject(data['additional_fields']);
        }

        if (data.hasOwnProperty('available_quantity')) {
          obj['available_quantity'] = _ApiClient["default"].convertToType(data['available_quantity'], 'Number');
        }

        if (data.hasOwnProperty('warehouses')) {
          obj['warehouses'] = _ApiClient["default"].convertToType(data['warehouses'], [_Warehouse["default"]]);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _Metadata["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);
  return ProductModel;
}();
/**
 * @member {String} id
 */


ProductModel.prototype['id'] = undefined;
/**
 * @member {String} code
 */

ProductModel.prototype['code'] = undefined;
/**
 * @member {String} name
 */

ProductModel.prototype['name'] = undefined;
/**
 * @member {module:model/AccountGroup} account_group
 */

ProductModel.prototype['account_group'] = undefined;
/**
 * @member {String} type
 */

ProductModel.prototype['type'] = undefined;
/**
 * @member {Boolean} stock_control
 */

ProductModel.prototype['stock_control'] = undefined;
/**
 * @member {Boolean} active
 */

ProductModel.prototype['active'] = undefined;
/**
 * @member {String} tax_classification
 */

ProductModel.prototype['tax_classification'] = undefined;
/**
 * @member {Boolean} tax_included
 */

ProductModel.prototype['tax_included'] = undefined;
/**
 * @member {Number} tax_consumption_value
 */

ProductModel.prototype['tax_consumption_value'] = undefined;
/**
 * @member {Array.<module:model/Tax>} taxes
 */

ProductModel.prototype['taxes'] = undefined;
/**
 * @member {Array.<module:model/PriceListViewModel>} prices
 */

ProductModel.prototype['prices'] = undefined;
/**
 * @member {module:model/UnitProductsViewModel} unit
 */

ProductModel.prototype['unit'] = undefined;
/**
 * @member {module:model/KeysProductsViewModel} key
 */

ProductModel.prototype['key'] = undefined;
/**
 * @member {String} unit_label
 */

ProductModel.prototype['unit_label'] = undefined;
/**
 * @member {String} reference
 */

ProductModel.prototype['reference'] = undefined;
/**
 * @member {String} description
 */

ProductModel.prototype['description'] = undefined;
/**
 * @member {module:model/AdditionalFields} additional_fields
 */

ProductModel.prototype['additional_fields'] = undefined;
/**
 * @member {Number} available_quantity
 */

ProductModel.prototype['available_quantity'] = undefined;
/**
 * @member {Array.<module:model/Warehouse>} warehouses
 */

ProductModel.prototype['warehouses'] = undefined;
/**
 * @member {module:model/Metadata} metadata
 */

ProductModel.prototype['metadata'] = undefined;
var _default = ProductModel;
exports["default"] = _default;
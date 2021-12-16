"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxesCommand = _interopRequireDefault(require("./TaxesCommand"));

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
 * The ItemsCommand model module.
 * @module model/ItemsCommand
 * @version v1
 */
var ItemsCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemsCommand</code>.
   * @alias module:model/ItemsCommand
   */
  function ItemsCommand() {
    (0, _classCallCheck2["default"])(this, ItemsCommand);
    ItemsCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ItemsCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemsCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemsCommand} obj Optional instance to populate.
     * @return {module:model/ItemsCommand} The populated <code>ItemsCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemsCommand();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('warehouse')) {
          obj['warehouse'] = _ApiClient["default"].convertToType(data['warehouse'], 'Number');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('taxed_price')) {
          obj['taxed_price'] = _ApiClient["default"].convertToType(data['taxed_price'], 'Number');
        }

        if (data.hasOwnProperty('discount')) {
          obj['discount'] = _ApiClient["default"].convertToType(data['discount'], 'Number');
        }

        if (data.hasOwnProperty('seller')) {
          obj['seller'] = _ApiClient["default"].convertToType(data['seller'], 'Number');
        }

        if (data.hasOwnProperty('vat_excluded')) {
          obj['vat_excluded'] = _ApiClient["default"].convertToType(data['vat_excluded'], 'Boolean');
        }

        if (data.hasOwnProperty('taxes')) {
          obj['taxes'] = _ApiClient["default"].convertToType(data['taxes'], [_TaxesCommand["default"]]);
        }
      }

      return obj;
    }
  }]);
  return ItemsCommand;
}();
/**
 * Represents the unique code of the item. This value can be an alphanumeric  code that will represent the code id of the item.  For example,'item-1' or 'toy-007'.
 * @member {String} code
 */


ItemsCommand.prototype['code'] = undefined;
/**
 * Represents product description.
 * @member {String} description
 */

ItemsCommand.prototype['description'] = undefined;
/**
 * Represents the id of the warehouse, by default this field will be null.
 * @member {Number} warehouse
 */

ItemsCommand.prototype['warehouse'] = undefined;
/**
 * Represents product quantity.  For example, '2' quantities of the 'item-01'.
 * @member {Number} quantity
 */

ItemsCommand.prototype['quantity'] = undefined;
/**
 * Represents product price.  For example, '50', dollars.
 * @member {Number} price
 */

ItemsCommand.prototype['price'] = undefined;
/**
 * Represents the price of item with the tax included.
 * @member {Number} taxed_price
 */

ItemsCommand.prototype['taxed_price'] = undefined;
/**
 * Represents the numerical percentage of the discount.  For example, '13' represents 13%.
 * @member {Number} discount
 */

ItemsCommand.prototype['discount'] = undefined;
/**
 * Represents the Id of the seller associated with the invoice,   For example, the id '629' can represent a seller called 'Micke'.
 * @member {Number} seller
 */

ItemsCommand.prototype['seller'] = undefined;
/**
 * Represents whether this product is excluded or does not to pay VAT.
 * @member {Boolean} vat_excluded
 */

ItemsCommand.prototype['vat_excluded'] = undefined;
/**
 * Contains a list of Ids of taxes associated to invoice.
 * @member {Array.<module:model/TaxesCommand>} taxes
 */

ItemsCommand.prototype['taxes'] = undefined;
var _default = ItemsCommand;
exports["default"] = _default;
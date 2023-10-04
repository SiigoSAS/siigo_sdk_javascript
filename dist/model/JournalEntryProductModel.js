"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _JournalEntryWarehouseModel = _interopRequireDefault(require("./JournalEntryWarehouseModel.js"));
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
 * The JournalEntryProductModel model module.
 * @module model/JournalEntryProductModel
 * @version v1
 */
var JournalEntryProductModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JournalEntryProductModel</code>.
   * @alias module:model/JournalEntryProductModel
   */
  function JournalEntryProductModel() {
    (0, _classCallCheck2["default"])(this, JournalEntryProductModel);
    JournalEntryProductModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(JournalEntryProductModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>JournalEntryProductModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryProductModel} obj Optional instance to populate.
     * @return {module:model/JournalEntryProductModel} The populated <code>JournalEntryProductModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JournalEntryProductModel();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('warehouse')) {
          obj['warehouse'] = _JournalEntryWarehouseModel["default"].constructFromObject(data['warehouse']);
        }
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return JournalEntryProductModel;
}();
/**
 * Represents the unique Id of item, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */
JournalEntryProductModel.prototype['id'] = undefined;

/**
 * Represents the unique code of the item. This value can be an alphanumeric  code that will represent the code id of the item.  For example,'item-1' or 'toy-007'.
 * @member {String} code
 */
JournalEntryProductModel.prototype['code'] = undefined;

/**
 * Represents the name of product or service.
 * @member {String} name
 */
JournalEntryProductModel.prototype['name'] = undefined;

/**
 * @member {module:model/JournalEntryWarehouseModel} warehouse
 */
JournalEntryProductModel.prototype['warehouse'] = undefined;

/**
 * Represents product quantity.  For example, '2' quantities of the 'item-01'.
 * @member {Number} quantity
 */
JournalEntryProductModel.prototype['quantity'] = undefined;
var _default = exports["default"] = JournalEntryProductModel;
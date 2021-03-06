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
 * The WarehouseViewModel model module.
 * @module model/WarehouseViewModel
 * @version v1
 */
var WarehouseViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WarehouseViewModel</code>.
   * @alias module:model/WarehouseViewModel
   */
  function WarehouseViewModel() {
    (0, _classCallCheck2["default"])(this, WarehouseViewModel);
    WarehouseViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(WarehouseViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WarehouseViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WarehouseViewModel} obj Optional instance to populate.
     * @return {module:model/WarehouseViewModel} The populated <code>WarehouseViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WarehouseViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('has_movements')) {
          obj['has_movements'] = _ApiClient["default"].convertToType(data['has_movements'], 'Boolean');
        }
      }

      return obj;
    }
  }]);
  return WarehouseViewModel;
}();
/**
 * Represents the id of the warehouse, the value of this field must be an integer  number that represents the unique id of the warehouse. For example '1270'.
 * @member {Number} id
 */


WarehouseViewModel.prototype['id'] = undefined;
/**
 * Represents the warehouse name. This value can be an alphanumeric name  like 'Main Warehouse' or 'Warehouse 1'.
 * @member {String} name
 */

WarehouseViewModel.prototype['name'] = undefined;
/**
 * Represents if warehouse status is activated or disabled,   the value of this status will be 'true' (for activated) or 'false' (disabled).  By default, this field will be 'true'.
 * @member {Boolean} active
 */

WarehouseViewModel.prototype['active'] = undefined;
/**
 * Indicates if the winery has associated movements. This field could be 'true' or 'false'   depending on the associated movements.
 * @member {Boolean} has_movements
 */

WarehouseViewModel.prototype['has_movements'] = undefined;
var _default = WarehouseViewModel;
exports["default"] = _default;
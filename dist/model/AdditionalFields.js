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
 * The AdditionalFields model module.
 * @module model/AdditionalFields
 * @version v1
 */
var AdditionalFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AdditionalFields</code>.
   * @alias module:model/AdditionalFields
   */
  function AdditionalFields() {
    (0, _classCallCheck2["default"])(this, AdditionalFields);
    AdditionalFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(AdditionalFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AdditionalFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalFields} obj Optional instance to populate.
     * @return {module:model/AdditionalFields} The populated <code>AdditionalFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AdditionalFields();

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
  return AdditionalFields;
}();
/**
 * @member {String} barcode
 */


AdditionalFields.prototype['barcode'] = undefined;
/**
 * @member {String} brand
 */

AdditionalFields.prototype['brand'] = undefined;
/**
 * @member {String} tariff
 */

AdditionalFields.prototype['tariff'] = undefined;
/**
 * @member {String} model
 */

AdditionalFields.prototype['model'] = undefined;
var _default = AdditionalFields;
exports["default"] = _default;
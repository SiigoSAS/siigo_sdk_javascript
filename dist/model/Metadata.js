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
 * The Metadata model module.
 * @module model/Metadata
 * @version v1
 */
var Metadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Metadata</code>.
   * @alias module:model/Metadata
   */
  function Metadata() {
    (0, _classCallCheck2["default"])(this, Metadata);
    Metadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Metadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Metadata} obj Optional instance to populate.
     * @return {module:model/Metadata} The populated <code>Metadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Metadata();

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('last_updated')) {
          obj['last_updated'] = _ApiClient["default"].convertToType(data['last_updated'], 'Date');
        }

        if (data.hasOwnProperty('stock_updated')) {
          obj['stock_updated'] = _ApiClient["default"].convertToType(data['stock_updated'], 'Date');
        }
      }

      return obj;
    }
  }]);
  return Metadata;
}();
/**
 * Represents the creation date of organization.
 * @member {Date} created
 */


Metadata.prototype['created'] = undefined;
/**
 * Represents the last update date of organization, this field by the default will be null.
 * @member {Date} last_updated
 */

Metadata.prototype['last_updated'] = undefined;
/**
 * Represents the last stock update date.
 * @member {Date} stock_updated
 */

Metadata.prototype['stock_updated'] = undefined;
var _default = Metadata;
exports["default"] = _default;
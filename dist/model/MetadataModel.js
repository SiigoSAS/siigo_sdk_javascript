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
 * The MetadataModel model module.
 * @module model/MetadataModel
 * @version v1
 */
var MetadataModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetadataModel</code>.
   * @alias module:model/MetadataModel
   */
  function MetadataModel() {
    (0, _classCallCheck2["default"])(this, MetadataModel);
    MetadataModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(MetadataModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MetadataModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetadataModel} obj Optional instance to populate.
     * @return {module:model/MetadataModel} The populated <code>MetadataModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetadataModel();

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('last_updated')) {
          obj['last_updated'] = _ApiClient["default"].convertToType(data['last_updated'], 'Date');
        }
      }

      return obj;
    }
  }]);
  return MetadataModel;
}();
/**
 * Represents the creation date of organization.
 * @member {Date} created
 */


MetadataModel.prototype['created'] = undefined;
/**
 * Represents the last update date of organization, this field by the default will be null.
 * @member {Date} last_updated
 */

MetadataModel.prototype['last_updated'] = undefined;
var _default = MetadataModel;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
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
 * The Provider model module.
 * @module model/Provider
 * @version v1
 */
var Provider = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Provider</code>.
   * @alias module:model/Provider
   */
  function Provider() {
    (0, _classCallCheck2["default"])(this, Provider);
    Provider.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(Provider, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Provider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Provider} obj Optional instance to populate.
     * @return {module:model/Provider} The populated <code>Provider</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Provider();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('identification')) {
          obj['identification'] = _ApiClient["default"].convertToType(data['identification'], 'String');
        }
        if (data.hasOwnProperty('branch_office')) {
          obj['branch_office'] = _ApiClient["default"].convertToType(data['branch_office'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }
      return obj;
    }
  }]);
  return Provider;
}();
/**
 * @member {String} id
 */
Provider.prototype['id'] = undefined;

/**
 * @member {String} identification
 */
Provider.prototype['identification'] = undefined;

/**
 * @member {Number} branch_office
 */
Provider.prototype['branch_office'] = undefined;

/**
 * @member {String} name
 */
Provider.prototype['name'] = undefined;
var _default = exports["default"] = Provider;
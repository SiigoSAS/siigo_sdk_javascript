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
 * The CityCommand model module.
 * @module model/CityCommand
 * @version v1
 */
var CityCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CityCommand</code>.
   * @alias module:model/CityCommand
   */
  function CityCommand() {
    (0, _classCallCheck2["default"])(this, CityCommand);
    CityCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CityCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CityCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CityCommand} obj Optional instance to populate.
     * @return {module:model/CityCommand} The populated <code>CityCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CityCommand();

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('state_code')) {
          obj['state_code'] = _ApiClient["default"].convertToType(data['state_code'], 'String');
        }

        if (data.hasOwnProperty('city_code')) {
          obj['city_code'] = _ApiClient["default"].convertToType(data['city_code'], 'String');
        }
      }

      return obj;
    }
  }]);
  return CityCommand;
}();
/**
 * Represents the country Code.   For example, the code 'Co' to Colombia.
 * @member {String} country_code
 */


CityCommand.prototype['country_code'] = undefined;
/**
 * Represents the state code.   For example, the state code '19' to 'Cauca'.
 * @member {String} state_code
 */

CityCommand.prototype['state_code'] = undefined;
/**
 * Represents the city code.   For example, the code '19001' to 'Popayán'.
 * @member {String} city_code
 */

CityCommand.prototype['city_code'] = undefined;
var _default = CityCommand;
exports["default"] = _default;
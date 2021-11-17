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
 * The PhoneModel model module.
 * @module model/PhoneModel
 * @version v1
 */
var PhoneModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PhoneModel</code>.
   * @alias module:model/PhoneModel
   */
  function PhoneModel() {
    (0, _classCallCheck2["default"])(this, PhoneModel);
    PhoneModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(PhoneModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PhoneModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PhoneModel} obj Optional instance to populate.
     * @return {module:model/PhoneModel} The populated <code>PhoneModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PhoneModel();

        if (data.hasOwnProperty('indicative')) {
          obj['indicative'] = _ApiClient["default"].convertToType(data['indicative'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'String');
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], 'String');
        }
      }

      return obj;
    }
  }]);
  return PhoneModel;
}();
/**
 * Represents the indicative number of country.  For example, the number '57' representate to Colombia.
 * @member {String} indicative
 */


PhoneModel.prototype['indicative'] = undefined;
/**
 * Represents the phone number.  For example, the phone number '3006003345'.
 * @member {String} number
 */

PhoneModel.prototype['number'] = undefined;
/**
 * Represents the extension number.  For example, the extension number '132'.
 * @member {String} extension
 */

PhoneModel.prototype['extension'] = undefined;
var _default = PhoneModel;
exports["default"] = _default;
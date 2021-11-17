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
 * The StampViewModel model module.
 * @module model/StampViewModel
 * @version v1
 */
var StampViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StampViewModel</code>.
   * @alias module:model/StampViewModel
   */
  function StampViewModel() {
    (0, _classCallCheck2["default"])(this, StampViewModel);
    StampViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(StampViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StampViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StampViewModel} obj Optional instance to populate.
     * @return {module:model/StampViewModel} The populated <code>StampViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StampViewModel();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('cufe')) {
          obj['cufe'] = _ApiClient["default"].convertToType(data['cufe'], 'String');
        }

        if (data.hasOwnProperty('cude')) {
          obj['cude'] = _ApiClient["default"].convertToType(data['cude'], 'String');
        }

        if (data.hasOwnProperty('observations')) {
          obj['observations'] = _ApiClient["default"].convertToType(data['observations'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], 'String');
        }
      }

      return obj;
    }
  }]);
  return StampViewModel;
}();
/**
 * Represents the status of an electronic document, this state could be:  \"Draft\": The document was saved correctly in SiigoCloud but this document.  was not sent to the tax collector entity.  \"Accepted\": The document was sent and accepted correctly.  \"Rejected\": The document was sent with errors therefore it was rejected.
 * @member {String} status
 */


StampViewModel.prototype['status'] = undefined;
/**
 * Represents Unique electronic billing code.
 * @member {String} cufe
 */

StampViewModel.prototype['cufe'] = undefined;
/**
 * Represents Unique Code of electronic document.
 * @member {String} cude
 */

StampViewModel.prototype['cude'] = undefined;
/**
 * Represents observations associated to an electronic document.
 * @member {String} observations
 */

StampViewModel.prototype['observations'] = undefined;
/**
 * Represents the document errors.
 * @member {String} errors
 */

StampViewModel.prototype['errors'] = undefined;
var _default = StampViewModel;
exports["default"] = _default;
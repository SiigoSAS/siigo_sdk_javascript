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
 * The TestBalanceResultModel model module.
 * @module model/TestBalanceResultModel
 * @version v1
 */
var TestBalanceResultModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TestBalanceResultModel</code>.
   * @alias module:model/TestBalanceResultModel
   */
  function TestBalanceResultModel() {
    (0, _classCallCheck2["default"])(this, TestBalanceResultModel);
    TestBalanceResultModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(TestBalanceResultModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TestBalanceResultModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestBalanceResultModel} obj Optional instance to populate.
     * @return {module:model/TestBalanceResultModel} The populated <code>TestBalanceResultModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TestBalanceResultModel();
        if (data.hasOwnProperty('file_id')) {
          obj['file_id'] = _ApiClient["default"].convertToType(data['file_id'], 'String');
        }
        if (data.hasOwnProperty('file_url')) {
          obj['file_url'] = _ApiClient["default"].convertToType(data['file_url'], 'String');
        }
      }
      return obj;
    }
  }]);
  return TestBalanceResultModel;
}();
/**
 * @member {String} file_id
 */
TestBalanceResultModel.prototype['file_id'] = undefined;

/**
 * @member {String} file_url
 */
TestBalanceResultModel.prototype['file_url'] = undefined;
var _default = exports["default"] = TestBalanceResultModel;
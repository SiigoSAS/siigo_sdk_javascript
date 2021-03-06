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
 * The DocumentCommand model module.
 * @module model/DocumentCommand
 * @version v1
 */
var DocumentCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentCommand</code>.
   * @alias module:model/DocumentCommand
   */
  function DocumentCommand() {
    (0, _classCallCheck2["default"])(this, DocumentCommand);
    DocumentCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(DocumentCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentCommand} obj Optional instance to populate.
     * @return {module:model/DocumentCommand} The populated <code>DocumentCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentCommand();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);
  return DocumentCommand;
}();
/**
 * Represents the Id of document. The value of this field must be an integer  number that represents the unique id of the document type, for example '22'.
 * @member {Number} id
 */


DocumentCommand.prototype['id'] = undefined;
var _default = DocumentCommand;
exports["default"] = _default;
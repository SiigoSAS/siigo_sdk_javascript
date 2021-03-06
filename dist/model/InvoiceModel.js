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
 * The InvoiceModel model module.
 * @module model/InvoiceModel
 * @version v1
 */
var InvoiceModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceModel</code>.
   * @alias module:model/InvoiceModel
   */
  function InvoiceModel() {
    (0, _classCallCheck2["default"])(this, InvoiceModel);
    InvoiceModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(InvoiceModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvoiceModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceModel} obj Optional instance to populate.
     * @return {module:model/InvoiceModel} The populated <code>InvoiceModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);
  return InvoiceModel;
}();
/**
 * Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */


InvoiceModel.prototype['id'] = undefined;
/**
 * Contains information about document type,   document type Id, and the sequential number of the document.  For example 'FV-2-20' indicates that its document type is an 'Invoice',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */

InvoiceModel.prototype['name'] = undefined;
var _default = InvoiceModel;
exports["default"] = _default;
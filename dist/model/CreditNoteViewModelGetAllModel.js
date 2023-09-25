"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreditNoteViewModel = _interopRequireDefault(require("./CreditNoteViewModel"));

var _GenericPageListModel = _interopRequireDefault(require("./GenericPageListModel"));

var _LinksPagination = _interopRequireDefault(require("./LinksPagination"));

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
 * The CreditNoteViewModelGetAllModel model module.
 * @module model/CreditNoteViewModelGetAllModel
 * @version v1
 */
var CreditNoteViewModelGetAllModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditNoteViewModelGetAllModel</code>.
   * @alias module:model/CreditNoteViewModelGetAllModel
   */
  function CreditNoteViewModelGetAllModel() {
    (0, _classCallCheck2["default"])(this, CreditNoteViewModelGetAllModel);
    CreditNoteViewModelGetAllModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CreditNoteViewModelGetAllModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditNoteViewModelGetAllModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditNoteViewModelGetAllModel} obj Optional instance to populate.
     * @return {module:model/CreditNoteViewModelGetAllModel} The populated <code>CreditNoteViewModelGetAllModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditNoteViewModelGetAllModel();

        if (data.hasOwnProperty('pagination')) {
          obj['pagination'] = _GenericPageListModel["default"].constructFromObject(data['pagination']);
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_CreditNoteViewModel["default"]]);
        }

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _LinksPagination["default"].constructFromObject(data['_links']);
        }
      }

      return obj;
    }
  }]);
  return CreditNoteViewModelGetAllModel;
}();
/**
 * @member {module:model/GenericPageListModel} pagination
 */


CreditNoteViewModelGetAllModel.prototype['pagination'] = undefined;
/**
 * Contains the Results, this results will be a list of model.
 * @member {Array.<module:model/CreditNoteViewModel>} results
 */

CreditNoteViewModelGetAllModel.prototype['results'] = undefined;
/**
 * @member {module:model/LinksPagination} _links
 */

CreditNoteViewModelGetAllModel.prototype['_links'] = undefined;
var _default = CreditNoteViewModelGetAllModel;
exports["default"] = _default;
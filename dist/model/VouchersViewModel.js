"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LinksPagination = _interopRequireDefault(require("./LinksPagination"));

var _PageListModel = _interopRequireDefault(require("./PageListModel"));

var _VoucherViewModel = _interopRequireDefault(require("./VoucherViewModel"));

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
 * The VouchersViewModel model module.
 * @module model/VouchersViewModel
 * @version v1
 */
var VouchersViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VouchersViewModel</code>.
   * @alias module:model/VouchersViewModel
   */
  function VouchersViewModel() {
    (0, _classCallCheck2["default"])(this, VouchersViewModel);
    VouchersViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(VouchersViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VouchersViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VouchersViewModel} obj Optional instance to populate.
     * @return {module:model/VouchersViewModel} The populated <code>VouchersViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VouchersViewModel();

        if (data.hasOwnProperty('pagination')) {
          obj['pagination'] = _PageListModel["default"].constructFromObject(data['pagination']);
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_VoucherViewModel["default"]]);
        }

        if (data.hasOwnProperty('__links')) {
          obj['__links'] = _LinksPagination["default"].constructFromObject(data['__links']);
        }
      }

      return obj;
    }
  }]);
  return VouchersViewModel;
}();
/**
 * @member {module:model/PageListModel} pagination
 */


VouchersViewModel.prototype['pagination'] = undefined;
/**
 * Contains the Results, this results will be a list of Vouchers
 * @member {Array.<module:model/VoucherViewModel>} results
 */

VouchersViewModel.prototype['results'] = undefined;
/**
 * @member {module:model/LinksPagination} __links
 */

VouchersViewModel.prototype['__links'] = undefined;
var _default = VouchersViewModel;
exports["default"] = _default;
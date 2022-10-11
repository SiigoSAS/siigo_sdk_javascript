"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DocumentTypeTaxModel = _interopRequireDefault(require("./DocumentTypeTaxModel"));

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
 * The DocumentTypeViewModel model module.
 * @module model/DocumentTypeViewModel
 * @version v1
 */
var DocumentTypeViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentTypeViewModel</code>.
   * @alias module:model/DocumentTypeViewModel
   */
  function DocumentTypeViewModel() {
    (0, _classCallCheck2["default"])(this, DocumentTypeViewModel);
    DocumentTypeViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(DocumentTypeViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) { }
    /**
     * Constructs a <code>DocumentTypeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentTypeViewModel} obj Optional instance to populate.
     * @return {module:model/DocumentTypeViewModel} The populated <code>DocumentTypeViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentTypeViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('seller_by_item')) {
          obj['seller_by_item'] = _ApiClient["default"].convertToType(data['seller_by_item'], 'Boolean');
        }

        if (data.hasOwnProperty('cost_center')) {
          obj['cost_center'] = _ApiClient["default"].convertToType(data['cost_center'], 'Boolean');
        }

        if (data.hasOwnProperty('cost_center_mandatory')) {
          obj['cost_center_mandatory'] = _ApiClient["default"].convertToType(data['cost_center_mandatory'], 'Boolean');
        }

        if (data.hasOwnProperty('cost_center_default')) {
          obj['cost_center_default'] = _ApiClient["default"].convertToType(data['cost_center_default'], 'Number');
        }

        if (data.hasOwnProperty('automatic_number')) {
          obj['automatic_number'] = _ApiClient["default"].convertToType(data['automatic_number'], 'Boolean');
        }

        if (data.hasOwnProperty('consecutive')) {
          obj['consecutive'] = _ApiClient["default"].convertToType(data['consecutive'], 'Number');
        }

        if (data.hasOwnProperty('discount_type')) {
          obj['discount_type'] = _ApiClient["default"].convertToType(data['discount_type'], 'String');
        }

        if (data.hasOwnProperty('decimals')) {
          obj['decimals'] = _ApiClient["default"].convertToType(data['decimals'], 'Boolean');
        }

        if (data.hasOwnProperty('advance_payment')) {
          obj['advance_payment'] = _ApiClient["default"].convertToType(data['advance_payment'], 'Boolean');
        }

        if (data.hasOwnProperty('reteiva')) {
          obj['reteiva'] = _ApiClient["default"].convertToType(data['reteiva'], 'Boolean');
        }

        if (data.hasOwnProperty('reteica')) {
          obj['reteica'] = _ApiClient["default"].convertToType(data['reteica'], 'Boolean');
        }

        if (data.hasOwnProperty('self_withholding')) {
          obj['self_withholding'] = _ApiClient["default"].convertToType(data['self_withholding'], 'Boolean');
        }

        if (data.hasOwnProperty('self_withholding_limit')) {
          obj['self_withholding_limit'] = _ApiClient["default"].convertToType(data['self_withholding_limit'], 'Number');
        }

        if (data.hasOwnProperty('electronic_type')) {
          obj['electronic_type'] = _ApiClient["default"].convertToType(data['electronic_type'], 'String');
        }

        if (data.hasOwnProperty('official_book')) {
          obj['official_book'] = _ApiClient["default"].convertToType(data['official_book'], 'String');
        }

        if (data.hasOwnProperty('document_support')) {
          obj['document_support'] = _ApiClient["default"].convertToType(data['document_support'], 'Boolean');
        }

        if (data.hasOwnProperty('prefix')) {
          obj['prefix'] = _ApiClient["default"].convertToType(data['prefix'], 'String');
        }

        if (data.hasOwnProperty('global_discounts')) {
          obj['global_discounts'] = _ApiClient["default"].convertToType(data['global_discounts'], [_DocumentTypeTaxModel["default"]]);
        }

        if (data.hasOwnProperty('global_charges')) {
          obj['global_charges'] = _ApiClient["default"].convertToType(data['global_charges'], [_DocumentTypeTaxModel["default"]]);
        }

        if (data.hasOwnProperty('i_s_r')) {
          obj['i_s_r'] = _ApiClient["default"].convertToType(data['i_s_r'], 'Boolean');
        }
      }

      return obj;
    }
  }]);
  return DocumentTypeViewModel;
}();
/**
 * Represents the id of the document type, the value of this field must be an integer  number that represents the unique id of the document type. For example '5636'.
 * @member {Number} id
 */


DocumentTypeViewModel.prototype['id'] = undefined;
/**
 * Represents the document type code. This value must be an integer  code that will represent the code id of the document type. For example, '1'.
 * @member {String} code
 */

DocumentTypeViewModel.prototype['code'] = undefined;
/**
 * Represents the name of the document type. This value can be an alphanumeric name  like 'Factura' (invoice).
 * @member {String} name
 */

DocumentTypeViewModel.prototype['name'] = undefined;
/**
 * Represents the description of the document type. For example, 'This is a description'.
 * @member {String} description
 */

DocumentTypeViewModel.prototype['description'] = undefined;
/**
 * Represents the document types. This type can be 'FV' to invoices, 'RC' to vouchers,   'NC' to credit notes, 'FC' to purchases or, 'CC' to journals.
 * @member {String} type
 */

DocumentTypeViewModel.prototype['type'] = undefined;
/**
 * Represents if document type status is activated or disabled,   the value of this status will be true (for activated) or false (disabled).  By default, this field will be true.
 * @member {Boolean} active
 */

DocumentTypeViewModel.prototype['active'] = undefined;
/**
 * Represents if the document type Handles a seller by item or not.  This field can be 'true' or 'false'.
 * @member {Boolean} seller_by_item
 */

DocumentTypeViewModel.prototype['seller_by_item'] = undefined;
/**
 * Represents if the document type Handles a cost center or not.  This field can be 'true' or 'false'.
 * @member {Boolean} cost_center
 */

DocumentTypeViewModel.prototype['cost_center'] = undefined;
/**
 * Represents if the document type Handles a required cost center or not.  This field can be 'true' or 'false'.
 * @member {Boolean} cost_center_mandatory
 */

DocumentTypeViewModel.prototype['cost_center_mandatory'] = undefined;
/**
 * Represents the id number of the default cost center.  By default, this field will be null.
 * @member {Number} cost_center_default
 */

DocumentTypeViewModel.prototype['cost_center_default'] = undefined;
/**
 * Represents if the document type Handles automatic numbering or not.  This field can be 'true' or 'false'.
 * @member {Boolean} automatic_number
 */

DocumentTypeViewModel.prototype['automatic_number'] = undefined;
/**
 * Represents the consecutive number of the document type.
 * @member {Number} consecutive
 */

DocumentTypeViewModel.prototype['consecutive'] = undefined;
/**
 * Represents if the document type Manages a percentage or a value to discounts.  This field can be 'Percentage' or 'Value'.
 * @member {String} discount_type
 */

DocumentTypeViewModel.prototype['discount_type'] = undefined;
/**
 * Represents if the document type handles Handles decimals or not.  This field can be 'true' or 'false'.
 * @member {Boolean} decimals
 */

DocumentTypeViewModel.prototype['decimals'] = undefined;
/**
 * Represents if the document type handles Manage copayments/advances or not.  This field can be 'true' or 'false'.
 * @member {Boolean} advance_payment
 */

DocumentTypeViewModel.prototype['advance_payment'] = undefined;
/**
 * Represents if the document type handles 'Reteiva' or not.  This field can be 'true' or 'false'.
 * @member {Boolean} reteiva
 */

DocumentTypeViewModel.prototype['reteiva'] = undefined;
/**
 * Represents if the document type handles 'Reteica' or not.  This field can be 'true' or 'false'.
 * @member {Boolean} reteica
 */

DocumentTypeViewModel.prototype['reteica'] = undefined;
/**
 * Represents if the document type handles self-withholding decree 2201 or not.  This field can be 'true' or 'false'.
 * @member {Boolean} self_withholding
 */

DocumentTypeViewModel.prototype['self_withholding'] = undefined;
/**
 * Represents the self withholding limit, the self withholding value will be applied only for values greater than the specified limit.  By default, this field will be null.
 * @member {Number} self_withholding_limit
 */

DocumentTypeViewModel.prototype['self_withholding_limit'] = undefined;
/**
 * Represents the type of the invoice. This type can be 'NoElectronic',   'Electronicvoice', 'ContingencyInvoice' or 'ExportInvoice'.
 * @member {String} electronic_type
 */

DocumentTypeViewModel.prototype['electronic_type'] = undefined;
/**
 * Represents the official book type of the Journals. This value can be '0' to sales book,  '1' to sales returns book, '2' to purchase book, or '3' to purchase return book.
 * @member {String} official_book
 */

DocumentTypeViewModel.prototype['official_book'] = undefined;
/**
 * Represents if the Journals supports documents or not.
 * @member {Boolean} document_support
 */

DocumentTypeViewModel.prototype['document_support'] = undefined;
/**
 * Invoice prefix to which the credit or payent will be applied. For example, 'FV-1'.
 * @member {String} prefix
 */

DocumentTypeViewModel.prototype['prefix'] = undefined;
/**
 * Contains information about the global discounts associated to document type.
 * @member {Array.<module:model/DocumentTypeTaxModel>} global_discounts
 */

DocumentTypeViewModel.prototype['global_discounts'] = undefined;
/**
 * Contains information about the global charges associated to document type.
 * @member {Array.<module:model/DocumentTypeTaxModel>} global_charges
 */

DocumentTypeViewModel.prototype['global_charges'] = undefined;
/**
 * Represent if the document allows ISR. This field is only for Mexico.
 * @member {Boolean} i_s_r
 */

DocumentTypeViewModel.prototype['i_s_r'] = undefined;
var _default = DocumentTypeViewModel;
exports["default"] = _default;
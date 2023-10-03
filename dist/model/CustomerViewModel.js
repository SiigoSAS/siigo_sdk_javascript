"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _AddressModel = _interopRequireDefault(require("./AddressModel.js"));
var _ContactModel = _interopRequireDefault(require("./ContactModel.js"));
var _CustomFieldsModel = _interopRequireDefault(require("./CustomFieldsModel.js"));
var _FiscalResponsibilitiesModel = _interopRequireDefault(require("./FiscalResponsibilitiesModel.js"));
var _IdTypeModel = _interopRequireDefault(require("./IdTypeModel.js"));
var _MetadataModel = _interopRequireDefault(require("./MetadataModel.js"));
var _PhoneModel = _interopRequireDefault(require("./PhoneModel.js"));
var _RelatedUserModel = _interopRequireDefault(require("./RelatedUserModel.js"));
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
 * The CustomerViewModel model module.
 * @module model/CustomerViewModel
 * @version v1
 */
var CustomerViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerViewModel</code>.
   * @alias module:model/CustomerViewModel
   */
  function CustomerViewModel() {
    (0, _classCallCheck2["default"])(this, CustomerViewModel);
    CustomerViewModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(CustomerViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CustomerViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerViewModel} obj Optional instance to populate.
     * @return {module:model/CustomerViewModel} The populated <code>CustomerViewModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerViewModel();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('person_type')) {
          obj['person_type'] = _ApiClient["default"].convertToType(data['person_type'], 'String');
        }
        if (data.hasOwnProperty('id_type')) {
          obj['id_type'] = _IdTypeModel["default"].constructFromObject(data['id_type']);
        }
        if (data.hasOwnProperty('identification')) {
          obj['identification'] = _ApiClient["default"].convertToType(data['identification'], 'String');
        }
        if (data.hasOwnProperty('rfc_id')) {
          obj['rfc_id'] = _ApiClient["default"].convertToType(data['rfc_id'], 'String');
        }
        if (data.hasOwnProperty('branch_office')) {
          obj['branch_office'] = _ApiClient["default"].convertToType(data['branch_office'], 'Number');
        }
        if (data.hasOwnProperty('fiscal_regime')) {
          obj['fiscal_regime'] = _ApiClient["default"].convertToType(data['fiscal_regime'], 'String');
        }
        if (data.hasOwnProperty('check_digit')) {
          obj['check_digit'] = _ApiClient["default"].convertToType(data['check_digit'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], ['String']);
        }
        if (data.hasOwnProperty('commercial_name')) {
          obj['commercial_name'] = _ApiClient["default"].convertToType(data['commercial_name'], 'String');
        }
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
        if (data.hasOwnProperty('vat_responsible')) {
          obj['vat_responsible'] = _ApiClient["default"].convertToType(data['vat_responsible'], 'Boolean');
        }
        if (data.hasOwnProperty('fiscal_responsibilities')) {
          obj['fiscal_responsibilities'] = _ApiClient["default"].convertToType(data['fiscal_responsibilities'], [_FiscalResponsibilitiesModel["default"]]);
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _AddressModel["default"].constructFromObject(data['address']);
        }
        if (data.hasOwnProperty('phones')) {
          obj['phones'] = _ApiClient["default"].convertToType(data['phones'], [_PhoneModel["default"]]);
        }
        if (data.hasOwnProperty('contacts')) {
          obj['contacts'] = _ApiClient["default"].convertToType(data['contacts'], [_ContactModel["default"]]);
        }
        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }
        if (data.hasOwnProperty('related_users')) {
          obj['related_users'] = _RelatedUserModel["default"].constructFromObject(data['related_users']);
        }
        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _ApiClient["default"].convertToType(data['custom_fields'], [_CustomFieldsModel["default"]]);
        }
        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _MetadataModel["default"].constructFromObject(data['metadata']);
        }
      }
      return obj;
    }
  }]);
  return CustomerViewModel;
}();
/**
 * Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */
CustomerViewModel.prototype['id'] = undefined;

/**
 * Represents the customer type (this type can be 'Customer', 'Supplier 'and 'Other'),  this field will be 'Customer' by default.
 * @member {String} type
 */
CustomerViewModel.prototype['type'] = undefined;

/**
 * Represents the person type, this type can be a 'Person' or 'Company'.
 * @member {String} person_type
 */
CustomerViewModel.prototype['person_type'] = undefined;

/**
 * @member {module:model/IdTypeModel} id_type
 */
CustomerViewModel.prototype['id_type'] = undefined;

/**
 * Represents the identification number of customer.  For example, the identifitication number '13832081'.
 * @member {String} identification
 */
CustomerViewModel.prototype['identification'] = undefined;

/**
 * Represents the identification number of customer for Mexico.  For example, the identifitication number 'MIN9203207K0'.
 * @member {String} rfc_id
 */
CustomerViewModel.prototype['rfc_id'] = undefined;

/**
 * Represents the branch office of customer, this value by default will be 0.
 * @member {Number} branch_office
 */
CustomerViewModel.prototype['branch_office'] = undefined;

/**
 * Contains Fiscal Regime about the customer.
 * @member {String} fiscal_regime
 */
CustomerViewModel.prototype['fiscal_regime'] = undefined;

/**
 * Represents the check digit, this digit will be calculated automatically.
 * @member {String} check_digit
 */
CustomerViewModel.prototype['check_digit'] = undefined;

/**
 * Contains a list of strings with information about customer  this information will be commercial_name (or first name and last name, depnding of customer)  branch_office, active and vat_responsible
 * @member {Array.<String>} name
 */
CustomerViewModel.prototype['name'] = undefined;

/**
 * Represents the commercial name of customer organization.  For example, 'Siigo'.
 * @member {String} commercial_name
 */
CustomerViewModel.prototype['commercial_name'] = undefined;

/**
 * Represents the state of customer.  This value can be 'true' or 'false', by default will be true.
 * @member {Boolean} active
 */
CustomerViewModel.prototype['active'] = undefined;

/**
 * Represents whether a person is responsible for VAT.  This value can be 'true' or 'false', by default will be false.
 * @member {Boolean} vat_responsible
 */
CustomerViewModel.prototype['vat_responsible'] = undefined;

/**
 * Represents a list of tax responsibilities of a person, by default will be 'R-99-PN'.
 * @member {Array.<module:model/FiscalResponsibilitiesModel>} fiscal_responsibilities
 */
CustomerViewModel.prototype['fiscal_responsibilities'] = undefined;

/**
 * @member {module:model/AddressModel} address
 */
CustomerViewModel.prototype['address'] = undefined;

/**
 * Represents the phones of the customer.
 * @member {Array.<module:model/PhoneModel>} phones
 */
CustomerViewModel.prototype['phones'] = undefined;

/**
 * Represents the associated contantacts of customer.
 * @member {Array.<module:model/ContactModel>} contacts
 */
CustomerViewModel.prototype['contacts'] = undefined;

/**
 * Represents additional comments or observations.
 * @member {String} comments
 */
CustomerViewModel.prototype['comments'] = undefined;

/**
 * @member {module:model/RelatedUserModel} related_users
 */
CustomerViewModel.prototype['related_users'] = undefined;

/**
 * Allows you to send the purchase order and delivery order fields.
 * @member {Array.<module:model/CustomFieldsModel>} custom_fields
 */
CustomerViewModel.prototype['custom_fields'] = undefined;

/**
 * @member {module:model/MetadataModel} metadata
 */
CustomerViewModel.prototype['metadata'] = undefined;
var _default = exports["default"] = CustomerViewModel;
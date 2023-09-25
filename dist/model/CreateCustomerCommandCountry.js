"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressCommand = _interopRequireDefault(require("./AddressCommand"));
var _ContactCommand = _interopRequireDefault(require("./ContactCommand"));
var _CustomFieldsCommand = _interopRequireDefault(require("./CustomFieldsCommand"));
var _FiscalResponsibilitiesCommand = _interopRequireDefault(require("./FiscalResponsibilitiesCommand"));
var _PhoneCommand = _interopRequireDefault(require("./PhoneCommand"));
var _RelatedUsersCommand = _interopRequireDefault(require("./RelatedUsersCommand"));
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
 * The CreateCustomerCommandCountry model module.
 * @module model/CreateCustomerCommandCountry
 * @version v1
 */
var CreateCustomerCommandCountry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCustomerCommandCountry</code>.
   * @alias module:model/CreateCustomerCommandCountry
   */
  function CreateCustomerCommandCountry() {
    (0, _classCallCheck2["default"])(this, CreateCustomerCommandCountry);
    CreateCustomerCommandCountry.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(CreateCustomerCommandCountry, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateCustomerCommandCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCustomerCommandCountry} obj Optional instance to populate.
     * @return {module:model/CreateCustomerCommandCountry} The populated <code>CreateCustomerCommandCountry</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCustomerCommandCountry();
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('person_type')) {
          obj['person_type'] = _ApiClient["default"].convertToType(data['person_type'], 'String');
        }
        if (data.hasOwnProperty('id_type')) {
          obj['id_type'] = _ApiClient["default"].convertToType(data['id_type'], 'String');
        }
        if (data.hasOwnProperty('identification')) {
          obj['identification'] = _ApiClient["default"].convertToType(data['identification'], 'String');
        }
        if (data.hasOwnProperty('rfc_id')) {
          obj['rfc_id'] = _ApiClient["default"].convertToType(data['rfc_id'], 'String');
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
        if (data.hasOwnProperty('branch_office')) {
          obj['branch_office'] = _ApiClient["default"].convertToType(data['branch_office'], 'Number');
        }
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
        if (data.hasOwnProperty('vat_responsible')) {
          obj['vat_responsible'] = _ApiClient["default"].convertToType(data['vat_responsible'], 'Boolean');
        }
        if (data.hasOwnProperty('fiscal_responsibilities')) {
          obj['fiscal_responsibilities'] = _ApiClient["default"].convertToType(data['fiscal_responsibilities'], [_FiscalResponsibilitiesCommand["default"]]);
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _AddressCommand["default"].constructFromObject(data['address']);
        }
        if (data.hasOwnProperty('phones')) {
          obj['phones'] = _ApiClient["default"].convertToType(data['phones'], [_PhoneCommand["default"]]);
        }
        if (data.hasOwnProperty('contacts')) {
          obj['contacts'] = _ApiClient["default"].convertToType(data['contacts'], [_ContactCommand["default"]]);
        }
        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }
        if (data.hasOwnProperty('related_users')) {
          obj['related_users'] = _RelatedUsersCommand["default"].constructFromObject(data['related_users']);
        }
        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _ApiClient["default"].convertToType(data['custom_fields'], [_CustomFieldsCommand["default"]]);
        }
        if (data.hasOwnProperty('fiscal_regime')) {
          obj['fiscal_regime'] = _ApiClient["default"].convertToType(data['fiscal_regime'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateCustomerCommandCountry;
}();
/**
 * Represents the customer type (this type can be 'Customer', 'Supplier 'and 'Other'),  this field will be 'Customer' by default.
 * @member {String} type
 */
CreateCustomerCommandCountry.prototype['type'] = undefined;

/**
 * Represents the person type, this type can be a 'Person' or 'Company'.
 * @member {String} person_type
 */
CreateCustomerCommandCountry.prototype['person_type'] = undefined;

/**
 * Represents the code of type id.
 * @member {String} id_type
 */
CreateCustomerCommandCountry.prototype['id_type'] = undefined;

/**
 * Represents the identification number of customer.  For example, the identifitication number '13832081'.
 * @member {String} identification
 */
CreateCustomerCommandCountry.prototype['identification'] = undefined;

/**
 * Represents the identification of customer for Mexico.  For example, the identification 'MELM8305281H0 '.
 * @member {String} rfc_id
 */
CreateCustomerCommandCountry.prototype['rfc_id'] = undefined;

/**
 * Represents the check digit, this digit will be calculated automatically.
 * @member {String} check_digit
 */
CreateCustomerCommandCountry.prototype['check_digit'] = undefined;

/**
 * Contains a list of strings with information about customer  this information will be commercial_name (or first name and last name, depnding of customer)  branch_office, active and vat_responsible
 * @member {Array.<String>} name
 */
CreateCustomerCommandCountry.prototype['name'] = undefined;

/**
 * Represents the commercial name of customer organization.  For example, 'Siigo'.
 * @member {String} commercial_name
 */
CreateCustomerCommandCountry.prototype['commercial_name'] = undefined;

/**
 * Represents the branch office of customer, this value by default will be 0.
 * @member {Number} branch_office
 */
CreateCustomerCommandCountry.prototype['branch_office'] = undefined;

/**
 * Represents the state of customer.  This value can be 'true' or 'false', by default will be true.
 * @member {Boolean} active
 */
CreateCustomerCommandCountry.prototype['active'] = undefined;

/**
 * Represents whether a person is responsible for VAT.  This value can be 'true' or 'false', by default will be false.
 * @member {Boolean} vat_responsible
 */
CreateCustomerCommandCountry.prototype['vat_responsible'] = undefined;

/**
 * Represents a list of tax responsibilities of a person, by default will be 'R-99-PN'.
 * @member {Array.<module:model/FiscalResponsibilitiesCommand>} fiscal_responsibilities
 */
CreateCustomerCommandCountry.prototype['fiscal_responsibilities'] = undefined;

/**
 * @member {module:model/AddressCommand} address
 */
CreateCustomerCommandCountry.prototype['address'] = undefined;

/**
 * Represents the phones of the customer.
 * @member {Array.<module:model/PhoneCommand>} phones
 */
CreateCustomerCommandCountry.prototype['phones'] = undefined;

/**
 * °              Represents the associated contantacts of customer.
 * @member {Array.<module:model/ContactCommand>} contacts
 */
CreateCustomerCommandCountry.prototype['contacts'] = undefined;

/**
 * Represents additional comments or observations.
 * @member {String} comments
 */
CreateCustomerCommandCountry.prototype['comments'] = undefined;

/**
 * @member {module:model/RelatedUsersCommand} related_users
 */
CreateCustomerCommandCountry.prototype['related_users'] = undefined;

/**
 * Allows you to send the purchase order and delivery order fields.
 * @member {Array.<module:model/CustomFieldsCommand>} custom_fields
 */
CreateCustomerCommandCountry.prototype['custom_fields'] = undefined;

/**
 * Represents fiscal Regime.
 * @member {String} fiscal_regime
 */
CreateCustomerCommandCountry.prototype['fiscal_regime'] = undefined;
var _default = exports["default"] = CreateCustomerCommandCountry;
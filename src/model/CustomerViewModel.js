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

import ApiClient from '../ApiClient.js';
import AddressModel from './AddressModel.js';
import ContactModel from './ContactModel.js';
import CustomFieldsModel from './CustomFieldsModel.js';
import FiscalResponsibilitiesModel from './FiscalResponsibilitiesModel.js';
import IdTypeModel from './IdTypeModel.js';
import MetadataModel from './MetadataModel.js';
import PhoneModel from './PhoneModel.js';
import RelatedUsersModel from './RelatedUsersModel.js';

/**
 * The CustomerViewModel model module.
 * @module model/CustomerViewModel
 * @version v1
 */
class CustomerViewModel {
    /**
     * Constructs a new <code>CustomerViewModel</code>.
     * @alias module:model/CustomerViewModel
     */
    constructor() { 
        
        CustomerViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerViewModel} obj Optional instance to populate.
     * @return {module:model/CustomerViewModel} The populated <code>CustomerViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('person_type')) {
                obj['person_type'] = ApiClient.convertToType(data['person_type'], 'String');
            }
            if (data.hasOwnProperty('id_type')) {
                obj['id_type'] = IdTypeModel.constructFromObject(data['id_type']);
            }
            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
            }
            if (data.hasOwnProperty('rfc_id')) {
                obj['rfc_id'] = ApiClient.convertToType(data['rfc_id'], 'String');
            }
            if (data.hasOwnProperty('branch_office')) {
                obj['branch_office'] = ApiClient.convertToType(data['branch_office'], 'Number');
            }
            if (data.hasOwnProperty('fiscal_regime')) {
                obj['fiscal_regime'] = ApiClient.convertToType(data['fiscal_regime'], 'String');
            }
            if (data.hasOwnProperty('check_digit')) {
                obj['check_digit'] = ApiClient.convertToType(data['check_digit'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], ['String']);
            }
            if (data.hasOwnProperty('commercial_name')) {
                obj['commercial_name'] = ApiClient.convertToType(data['commercial_name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('vat_responsible')) {
                obj['vat_responsible'] = ApiClient.convertToType(data['vat_responsible'], 'Boolean');
            }
            if (data.hasOwnProperty('fiscal_responsibilities')) {
                obj['fiscal_responsibilities'] = ApiClient.convertToType(data['fiscal_responsibilities'], [FiscalResponsibilitiesModel]);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = AddressModel.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('phones')) {
                obj['phones'] = ApiClient.convertToType(data['phones'], [PhoneModel]);
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [ContactModel]);
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('related_users')) {
                obj['related_users'] = RelatedUsersModel.constructFromObject(data['related_users']);
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomFieldsModel]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = MetadataModel.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }


}

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
 * @member {module:model/RelatedUsersModel} related_users
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






export default CustomerViewModel;


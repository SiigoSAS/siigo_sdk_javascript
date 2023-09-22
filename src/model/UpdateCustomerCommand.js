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

import ApiClient from '../ApiClient';
import AddressCommand from './AddressCommand';
import ContactCommand from './ContactCommand';
import CustomFieldsCommand from './CustomFieldsCommand';
import FiscalResponsibilitiesCommand from './FiscalResponsibilitiesCommand';
import PhoneCommand from './PhoneCommand';
import RelatedUsersCommand from './RelatedUsersCommand';

/**
 * The UpdateCustomerCommand model module.
 * @module model/UpdateCustomerCommand
 * @version v1
 */
class UpdateCustomerCommand {
    /**
     * Constructs a new <code>UpdateCustomerCommand</code>.
     * @alias module:model/UpdateCustomerCommand
     */
    constructor() { 
        
        UpdateCustomerCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateCustomerCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCustomerCommand} obj Optional instance to populate.
     * @return {module:model/UpdateCustomerCommand} The populated <code>UpdateCustomerCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCustomerCommand();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('person_type')) {
                obj['person_type'] = ApiClient.convertToType(data['person_type'], 'String');
            }
            if (data.hasOwnProperty('id_type')) {
                obj['id_type'] = ApiClient.convertToType(data['id_type'], 'String');
            }
            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
            }
            if (data.hasOwnProperty('rfc_id')) {
                obj['rfc_id'] = ApiClient.convertToType(data['rfc_id'], 'String');
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
            if (data.hasOwnProperty('branch_office')) {
                obj['branch_office'] = ApiClient.convertToType(data['branch_office'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('vat_responsible')) {
                obj['vat_responsible'] = ApiClient.convertToType(data['vat_responsible'], 'Boolean');
            }
            if (data.hasOwnProperty('fiscal_responsibilities')) {
                obj['fiscal_responsibilities'] = ApiClient.convertToType(data['fiscal_responsibilities'], [FiscalResponsibilitiesCommand]);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = AddressCommand.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('phones')) {
                obj['phones'] = ApiClient.convertToType(data['phones'], [PhoneCommand]);
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [ContactCommand]);
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('related_users')) {
                obj['related_users'] = RelatedUsersCommand.constructFromObject(data['related_users']);
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomFieldsCommand]);
            }
            if (data.hasOwnProperty('fiscal_regime')) {
                obj['fiscal_regime'] = ApiClient.convertToType(data['fiscal_regime'], 'String');
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the customer type (this type can be 'Customer', 'Supplier 'and 'Other'),  this field will be 'Customer' by default.
 * @member {String} type
 */
UpdateCustomerCommand.prototype['type'] = undefined;

/**
 * Represents the person type, this type can be a 'Person' or 'Company'.
 * @member {String} person_type
 */
UpdateCustomerCommand.prototype['person_type'] = undefined;

/**
 * Represents the code of type id.
 * @member {String} id_type
 */
UpdateCustomerCommand.prototype['id_type'] = undefined;

/**
 * Represents the identification number of customer.  For example, the identifitication number '13832081'.
 * @member {String} identification
 */
UpdateCustomerCommand.prototype['identification'] = undefined;

/**
 * Represents the identification of customer for Mexico.  For example, the identification 'MELM8305281H0 '.
 * @member {String} rfc_id
 */
UpdateCustomerCommand.prototype['rfc_id'] = undefined;

/**
 * Represents the check digit, this digit will be calculated automatically.
 * @member {String} check_digit
 */
UpdateCustomerCommand.prototype['check_digit'] = undefined;

/**
 * Contains a list of strings with information about customer  this information will be commercial_name (or first name and last name, depnding of customer)  branch_office, active and vat_responsible
 * @member {Array.<String>} name
 */
UpdateCustomerCommand.prototype['name'] = undefined;

/**
 * Represents the commercial name of customer organization.  For example, 'Siigo'.
 * @member {String} commercial_name
 */
UpdateCustomerCommand.prototype['commercial_name'] = undefined;

/**
 * Represents the branch office of customer, this value by default will be 0.
 * @member {Number} branch_office
 */
UpdateCustomerCommand.prototype['branch_office'] = undefined;

/**
 * Represents the state of customer.  This value can be 'true' or 'false', by default will be true.
 * @member {Boolean} active
 */
UpdateCustomerCommand.prototype['active'] = undefined;

/**
 * Represents whether a person is responsible for VAT.  This value can be 'true' or 'false', by default will be false.
 * @member {Boolean} vat_responsible
 */
UpdateCustomerCommand.prototype['vat_responsible'] = undefined;

/**
 * Represents a list of tax responsibilities of a person, by default will be 'R-99-PN'.
 * @member {Array.<module:model/FiscalResponsibilitiesCommand>} fiscal_responsibilities
 */
UpdateCustomerCommand.prototype['fiscal_responsibilities'] = undefined;

/**
 * @member {module:model/AddressCommand} address
 */
UpdateCustomerCommand.prototype['address'] = undefined;

/**
 * Represents the phones of the customer.
 * @member {Array.<module:model/PhoneCommand>} phones
 */
UpdateCustomerCommand.prototype['phones'] = undefined;

/**
 * °              Represents the associated contantacts of customer.
 * @member {Array.<module:model/ContactCommand>} contacts
 */
UpdateCustomerCommand.prototype['contacts'] = undefined;

/**
 * Represents additional comments or observations.
 * @member {String} comments
 */
UpdateCustomerCommand.prototype['comments'] = undefined;

/**
 * @member {module:model/RelatedUsersCommand} related_users
 */
UpdateCustomerCommand.prototype['related_users'] = undefined;

/**
 * Allows you to send the purchase order and delivery order fields.
 * @member {Array.<module:model/CustomFieldsCommand>} custom_fields
 */
UpdateCustomerCommand.prototype['custom_fields'] = undefined;

/**
 * Represents fiscal Regime.
 * @member {String} fiscal_regime
 */
UpdateCustomerCommand.prototype['fiscal_regime'] = undefined;

/**
 * Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} guid
 */
UpdateCustomerCommand.prototype['guid'] = undefined;






export default UpdateCustomerCommand;


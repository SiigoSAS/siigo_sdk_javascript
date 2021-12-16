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
import AdditionalFieldsCommand from './AdditionalFieldsCommand';
import CurrencyCommand from './CurrencyCommand';
import CustomerCommand from './CustomerCommand';
import DocumentCommand from './DocumentCommand';
import ItemsCommand from './ItemsCommand';
import MailCommand from './MailCommand';
import PaymentsCommand from './PaymentsCommand';
import RetentionsCommand from './RetentionsCommand';
import StampCommand from './StampCommand';

/**
 * The CreateInvoiceCommand model module.
 * @module model/CreateInvoiceCommand
 * @version v1
 */
class CreateInvoiceCommand {
    /**
     * Constructs a new <code>CreateInvoiceCommand</code>.
     * @alias module:model/CreateInvoiceCommand
     */
    constructor() { 
        
        CreateInvoiceCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateInvoiceCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInvoiceCommand} obj Optional instance to populate.
     * @return {module:model/CreateInvoiceCommand} The populated <code>CreateInvoiceCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInvoiceCommand();

            if (data.hasOwnProperty('document')) {
                obj['document'] = DocumentCommand.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = CustomerCommand.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('cost_center')) {
                obj['cost_center'] = ApiClient.convertToType(data['cost_center'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyCommand.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = ApiClient.convertToType(data['seller'], 'Number');
            }
            if (data.hasOwnProperty('retentions')) {
                obj['retentions'] = ApiClient.convertToType(data['retentions'], [RetentionsCommand]);
            }
            if (data.hasOwnProperty('advance_payment')) {
                obj['advance_payment'] = ApiClient.convertToType(data['advance_payment'], 'Number');
            }
            if (data.hasOwnProperty('observations')) {
                obj['observations'] = ApiClient.convertToType(data['observations'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ItemsCommand]);
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [PaymentsCommand]);
            }
            if (data.hasOwnProperty('additional_fields')) {
                obj['additional_fields'] = AdditionalFieldsCommand.constructFromObject(data['additional_fields']);
            }
            if (data.hasOwnProperty('stamp')) {
                obj['stamp'] = StampCommand.constructFromObject(data['stamp']);
            }
            if (data.hasOwnProperty('mail')) {
                obj['mail'] = MailCommand.constructFromObject(data['mail']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DocumentCommand} document
 */
CreateInvoiceCommand.prototype['document'] = undefined;

/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */
CreateInvoiceCommand.prototype['number'] = undefined;

/**
 * Contains information about document type,   document type Id, and the sequential number of the document.  For example, 'FV-2-22' indicates that its document type is an 'invoice',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */
CreateInvoiceCommand.prototype['name'] = undefined;

/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'.  For example, '2021-10-31' to indicate the date 'October 31st, 2021'.
 * @member {String} date
 */
CreateInvoiceCommand.prototype['date'] = undefined;

/**
 * @member {module:model/CustomerCommand} customer
 */
CreateInvoiceCommand.prototype['customer'] = undefined;

/**
 * Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} cost_center
 */
CreateInvoiceCommand.prototype['cost_center'] = undefined;

/**
 * @member {module:model/CurrencyCommand} currency
 */
CreateInvoiceCommand.prototype['currency'] = undefined;

/**
 * Represents the Id of the seller associated with the invoice.   For example, the id '629' can represent a seller called 'Mike'.
 * @member {Number} seller
 */
CreateInvoiceCommand.prototype['seller'] = undefined;

/**
 * Contains a list information about every Retention associated to invoice.
 * @member {Array.<module:model/RetentionsCommand>} retentions
 */
CreateInvoiceCommand.prototype['retentions'] = undefined;

/**
 * Represent the Advance Payment. For example, an advance payment of 33.3 dollars  for a product of 40 dollars.
 * @member {Number} advance_payment
 */
CreateInvoiceCommand.prototype['advance_payment'] = undefined;

/**
 * Represent additional comments in document.
 * @member {String} observations
 */
CreateInvoiceCommand.prototype['observations'] = undefined;

/**
 * Contains a list of items associated with the invoice.
 * @member {Array.<module:model/ItemsCommand>} items
 */
CreateInvoiceCommand.prototype['items'] = undefined;

/**
 * Contains a list with payments types associated to invoice.
 * @member {Array.<module:model/PaymentsCommand>} payments
 */
CreateInvoiceCommand.prototype['payments'] = undefined;

/**
 * @member {module:model/AdditionalFieldsCommand} additional_fields
 */
CreateInvoiceCommand.prototype['additional_fields'] = undefined;

/**
 * @member {module:model/StampCommand} stamp
 */
CreateInvoiceCommand.prototype['stamp'] = undefined;

/**
 * @member {module:model/MailCommand} mail
 */
CreateInvoiceCommand.prototype['mail'] = undefined;






export default CreateInvoiceCommand;

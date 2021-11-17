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
import CurrencyCommand from './CurrencyCommand';
import Customer from './Customer';
import DocumentCommand from './DocumentCommand';
import Item from './Item';
import Payment from './Payment';

/**
 * The CreateVoucherCommand model module.
 * @module model/CreateVoucherCommand
 * @version v1
 */
class CreateVoucherCommand {
    /**
     * Constructs a new <code>CreateVoucherCommand</code>.
     * @alias module:model/CreateVoucherCommand
     */
    constructor() { 
        
        CreateVoucherCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateVoucherCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVoucherCommand} obj Optional instance to populate.
     * @return {module:model/CreateVoucherCommand} The populated <code>CreateVoucherCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateVoucherCommand();

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
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = Customer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('cost_center')) {
                obj['cost_center'] = ApiClient.convertToType(data['cost_center'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyCommand.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
            if (data.hasOwnProperty('payment')) {
                obj['payment'] = Payment.constructFromObject(data['payment']);
            }
            if (data.hasOwnProperty('observations')) {
                obj['observations'] = ApiClient.convertToType(data['observations'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DocumentCommand} document
 */
CreateVoucherCommand.prototype['document'] = undefined;

/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */
CreateVoucherCommand.prototype['number'] = undefined;

/**
 * Contains information about document type,   document type Id and the sequential number of the document.  For example, 'RC-2-22' indicates that its document type is a 'voucher',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */
CreateVoucherCommand.prototype['name'] = undefined;

/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'.  For example, '2021-10-31' to indicate the date 'October 31st, 2021'.
 * @member {String} date
 */
CreateVoucherCommand.prototype['date'] = undefined;

/**
 * Represents the voucher type, this type will be 'DebtPayment', 'AdvancePayment' or 'Detailed'.
 * @member {String} type
 */
CreateVoucherCommand.prototype['type'] = undefined;

/**
 * @member {module:model/Customer} customer
 */
CreateVoucherCommand.prototype['customer'] = undefined;

/**
 * Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} cost_center
 */
CreateVoucherCommand.prototype['cost_center'] = undefined;

/**
 * @member {module:model/CurrencyCommand} currency
 */
CreateVoucherCommand.prototype['currency'] = undefined;

/**
 * Contains a list with items associated to voucher.
 * @member {Array.<module:model/Item>} items
 */
CreateVoucherCommand.prototype['items'] = undefined;

/**
 * @member {module:model/Payment} payment
 */
CreateVoucherCommand.prototype['payment'] = undefined;

/**
 * Represent additional comments in document.
 * @member {String} observations
 */
CreateVoucherCommand.prototype['observations'] = undefined;






export default CreateVoucherCommand;


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

/**
 * The SendVoucherByEmailCommand model module.
 * @module model/SendVoucherByEmailCommand
 * @version v1
 */
class SendVoucherByEmailCommand {
    /**
     * Constructs a new <code>SendVoucherByEmailCommand</code>.
     * @alias module:model/SendVoucherByEmailCommand
     */
    constructor() { 
        
        SendVoucherByEmailCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendVoucherByEmailCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendVoucherByEmailCommand} obj Optional instance to populate.
     * @return {module:model/SendVoucherByEmailCommand} The populated <code>SendVoucherByEmailCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendVoucherByEmailCommand();

            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('mail_to')) {
                obj['mail_to'] = ApiClient.convertToType(data['mail_to'], 'String');
            }
            if (data.hasOwnProperty('copy_to')) {
                obj['copy_to'] = ApiClient.convertToType(data['copy_to'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Guid of the document.
 * @member {String} guid
 */
SendVoucherByEmailCommand.prototype['guid'] = undefined;

/**
 * Email address to send the document.
 * @member {String} mail_to
 */
SendVoucherByEmailCommand.prototype['mail_to'] = undefined;

/**
 * Email addresses to send copies of the document, maximum 5 email addresses are allowed.
 * @member {String} copy_to
 */
SendVoucherByEmailCommand.prototype['copy_to'] = undefined;






export default SendVoucherByEmailCommand;

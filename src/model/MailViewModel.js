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
 * The MailViewModel model module.
 * @module model/MailViewModel
 * @version v1
 */
class MailViewModel {
    /**
     * Constructs a new <code>MailViewModel</code>.
     * @alias module:model/MailViewModel
     */
    constructor() { 
        
        MailViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MailViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MailViewModel} obj Optional instance to populate.
     * @return {module:model/MailViewModel} The populated <code>MailViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MailViewModel();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('observations')) {
                obj['observations'] = ApiClient.convertToType(data['observations'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the status of sending a document by email, this state could be:  not_sent: The invoice has not been sent by mail.  sent: The invoice was sent to your customer successfully.  read: The invoice was sent to your customer successfully and he has already read it.  failed_delivery: The delivery of the invoice failed, try to email it again.  commented: The customer commented on the invoice sent by email.   process_of_sending: In the process of sending by email.  pending_send: Pending the validation of the document by DIAN.
 * @member {String} status
 */
MailViewModel.prototype['status'] = undefined;

/**
 * Represents observations associated with sending a document by email.
 * @member {String} observations
 */
MailViewModel.prototype['observations'] = undefined;






export default MailViewModel;


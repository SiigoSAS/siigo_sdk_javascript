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
 * The JournalEntryAccountModel model module.
 * @module model/JournalEntryAccountModel
 * @version v1
 */
class JournalEntryAccountModel {
    /**
     * Constructs a new <code>JournalEntryAccountModel</code>.
     * @alias module:model/JournalEntryAccountModel
     */
    constructor() { 
        
        JournalEntryAccountModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalEntryAccountModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryAccountModel} obj Optional instance to populate.
     * @return {module:model/JournalEntryAccountModel} The populated <code>JournalEntryAccountModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalEntryAccountModel();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('movement')) {
                obj['movement'] = ApiClient.convertToType(data['movement'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the Accounting account code.
 * @member {String} code
 */
JournalEntryAccountModel.prototype['code'] = undefined;

/**
 * Represents the type of movement to be made with the account.  This field can be 'Debit' or 'Credit'.
 * @member {String} movement
 */
JournalEntryAccountModel.prototype['movement'] = undefined;






export default JournalEntryAccountModel;


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
 * The Account model module.
 * @module model/Account
 * @version v1
 */
class Account {
    /**
     * Constructs a new <code>Account</code>.
     * @alias module:model/Account
     */
    constructor() { 
        
        Account.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Account} obj Optional instance to populate.
     * @return {module:model/Account} The populated <code>Account</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Account();

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
 * Represents Accounting account code.
 * @member {String} code
 */
Account.prototype['code'] = undefined;

/**
 * Represents the type of movement, this movement will be 'Debit' or 'Credit'.
 * @member {String} movement
 */
Account.prototype['movement'] = undefined;






export default Account;


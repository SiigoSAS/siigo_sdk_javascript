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

/**
 * The AccountGroupViewModel model module.
 * @module model/AccountGroupViewModel
 * @version v1
 */
class AccountGroupViewModel {
    /**
     * Constructs a new <code>AccountGroupViewModel</code>.
     * Viewmodel Specifically made for the clients, based on the data returned by the queries.
     * @alias module:model/AccountGroupViewModel
     */
    constructor() { 
        
        AccountGroupViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountGroupViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountGroupViewModel} obj Optional instance to populate.
     * @return {module:model/AccountGroupViewModel} The populated <code>AccountGroupViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountGroupViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Represents the id of the account group, the value of this field must be an integer  number that represents the unique id of the account group.
 * @member {Number} id
 */
AccountGroupViewModel.prototype['id'] = undefined;

/**
 * Represents the name of the account group.
 * @member {String} name
 */
AccountGroupViewModel.prototype['name'] = undefined;

/**
 * Represents if the status of an account group is activated or disabled,   the value of this status will be true (for activated) or false (disabled).  By default, this field will be active.
 * @member {Boolean} active
 */
AccountGroupViewModel.prototype['active'] = undefined;






export default AccountGroupViewModel;

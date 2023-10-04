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
 * The TestBalanceCustomer model module.
 * @module model/TestBalanceCustomer
 * @version v1
 */
class TestBalanceCustomer {
    /**
     * Constructs a new <code>TestBalanceCustomer</code>.
     * @alias module:model/TestBalanceCustomer
     */
    constructor() { 
        
        TestBalanceCustomer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestBalanceCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestBalanceCustomer} obj Optional instance to populate.
     * @return {module:model/TestBalanceCustomer} The populated <code>TestBalanceCustomer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestBalanceCustomer();

            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
            }
            if (data.hasOwnProperty('branch_office')) {
                obj['branch_office'] = ApiClient.convertToType(data['branch_office'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the identification number of customer.
 * @member {String} identification
 */
TestBalanceCustomer.prototype['identification'] = undefined;

/**
 * Represents the branch office number of the customer, default value will be 0.
 * @member {Number} branch_office
 */
TestBalanceCustomer.prototype['branch_office'] = undefined;






export default TestBalanceCustomer;


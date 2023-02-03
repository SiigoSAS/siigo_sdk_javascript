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
 * The CreateTestBalanceCommand model module.
 * @module model/CreateTestBalanceCommand
 * @version v1
 */
class CreateTestBalanceCommand {
    /**
     * Constructs a new <code>CreateTestBalanceCommand</code>.
     * @alias module:model/CreateTestBalanceCommand
     */
    constructor() { 
        
        CreateTestBalanceCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateTestBalanceCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestBalanceCommand} obj Optional instance to populate.
     * @return {module:model/CreateTestBalanceCommand} The populated <code>CreateTestBalanceCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTestBalanceCommand();

            if (data.hasOwnProperty('account_start')) {
                obj['account_start'] = ApiClient.convertToType(data['account_start'], 'Number');
            }
            if (data.hasOwnProperty('account_end')) {
                obj['account_end'] = ApiClient.convertToType(data['account_end'], 'Number');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('month_start')) {
                obj['month_start'] = ApiClient.convertToType(data['month_start'], 'Number');
            }
            if (data.hasOwnProperty('month_end')) {
                obj['month_end'] = ApiClient.convertToType(data['month_end'], 'Number');
            }
            if (data.hasOwnProperty('includes_tax_difference')) {
                obj['includes_tax_difference'] = ApiClient.convertToType(data['includes_tax_difference'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} account_start
 */
CreateTestBalanceCommand.prototype['account_start'] = undefined;

/**
 * @member {Number} account_end
 */
CreateTestBalanceCommand.prototype['account_end'] = undefined;

/**
 * @member {Number} year
 */
CreateTestBalanceCommand.prototype['year'] = undefined;

/**
 * @member {Number} month_start
 */
CreateTestBalanceCommand.prototype['month_start'] = undefined;

/**
 * @member {Number} month_end
 */
CreateTestBalanceCommand.prototype['month_end'] = undefined;

/**
 * @member {Boolean} includes_tax_difference
 */
CreateTestBalanceCommand.prototype['includes_tax_difference'] = undefined;






export default CreateTestBalanceCommand;


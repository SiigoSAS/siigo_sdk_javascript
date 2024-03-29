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
 * The CurrencyCommand model module.
 * @module model/CurrencyCommand
 * @version v1
 */
class CurrencyCommand {
    /**
     * Constructs a new <code>CurrencyCommand</code>.
     * @alias module:model/CurrencyCommand
     */
    constructor() { 
        
        CurrencyCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencyCommand} obj Optional instance to populate.
     * @return {module:model/CurrencyCommand} The populated <code>CurrencyCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyCommand();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('exchange_rate')) {
                obj['exchange_rate'] = ApiClient.convertToType(data['exchange_rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the Id code of currency, for example, 'USD' represents   the dollar and 'EUR' means 'Euro'.
 * @member {String} code
 */
CurrencyCommand.prototype['code'] = undefined;

/**
 * Represents the exchange rate of currency. For example, 'USD' could have   an exchange rate of '0.86' to 'EUR'.
 * @member {Number} exchange_rate
 */
CurrencyCommand.prototype['exchange_rate'] = undefined;






export default CurrencyCommand;


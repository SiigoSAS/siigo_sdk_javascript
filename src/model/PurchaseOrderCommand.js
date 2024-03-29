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
 * The PurchaseOrderCommand model module.
 * @module model/PurchaseOrderCommand
 * @version v1
 */
class PurchaseOrderCommand {
    /**
     * Constructs a new <code>PurchaseOrderCommand</code>.
     * @alias module:model/PurchaseOrderCommand
     */
    constructor() { 
        
        PurchaseOrderCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PurchaseOrderCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseOrderCommand} obj Optional instance to populate.
     * @return {module:model/PurchaseOrderCommand} The populated <code>PurchaseOrderCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseOrderCommand();

            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represent the prefix of order type.
 * @member {String} prefix
 */
PurchaseOrderCommand.prototype['prefix'] = undefined;

/**
 * Represents the number of the purchase.
 * @member {String} number
 */
PurchaseOrderCommand.prototype['number'] = undefined;






export default PurchaseOrderCommand;


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
 * The GlobalTaxModel model module.
 * @module model/GlobalTaxModel
 * @version v1
 */
class GlobalTaxModel {
    /**
     * Constructs a new <code>GlobalTaxModel</code>.
     * @alias module:model/GlobalTaxModel
     */
    constructor() { 
        
        GlobalTaxModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GlobalTaxModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalTaxModel} obj Optional instance to populate.
     * @return {module:model/GlobalTaxModel} The populated <code>GlobalTaxModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalTaxModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the id of the global tax
 * @member {Number} id
 */
GlobalTaxModel.prototype['id'] = undefined;

/**
 * Represents the name of the global tax
 * @member {String} name
 */
GlobalTaxModel.prototype['name'] = undefined;

/**
 * Represents the percentage parametrized to the type of the global tax
 * @member {Number} percentage
 */
GlobalTaxModel.prototype['percentage'] = undefined;

/**
 * Represents the value calculated from the percentage
 * @member {Number} value
 */
GlobalTaxModel.prototype['value'] = undefined;






export default GlobalTaxModel;

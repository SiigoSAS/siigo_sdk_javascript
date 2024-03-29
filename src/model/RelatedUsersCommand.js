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
 * The RelatedUsersCommand model module.
 * @module model/RelatedUsersCommand
 * @version v1
 */
class RelatedUsersCommand {
    /**
     * Constructs a new <code>RelatedUsersCommand</code>.
     * @alias module:model/RelatedUsersCommand
     */
    constructor() { 
        
        RelatedUsersCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelatedUsersCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedUsersCommand} obj Optional instance to populate.
     * @return {module:model/RelatedUsersCommand} The populated <code>RelatedUsersCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelatedUsersCommand();

            if (data.hasOwnProperty('seller_id')) {
                obj['seller_id'] = ApiClient.convertToType(data['seller_id'], 'Number');
            }
            if (data.hasOwnProperty('collector_id')) {
                obj['collector_id'] = ApiClient.convertToType(data['collector_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the seller Id.
 * @member {Number} seller_id
 */
RelatedUsersCommand.prototype['seller_id'] = undefined;

/**
 * Represents the debt collector Id.
 * @member {Number} collector_id
 */
RelatedUsersCommand.prototype['collector_id'] = undefined;






export default RelatedUsersCommand;


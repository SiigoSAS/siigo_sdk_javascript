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
 * The StampCommand model module.
 * @module model/StampCommand
 * @version v1
 */
class StampCommand {
    /**
     * Constructs a new <code>StampCommand</code>.
     * @alias module:model/StampCommand
     */
    constructor() { 
        
        StampCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StampCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StampCommand} obj Optional instance to populate.
     * @return {module:model/StampCommand} The populated <code>StampCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StampCommand();

            if (data.hasOwnProperty('send')) {
                obj['send'] = ApiClient.convertToType(data['send'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Represents the status of document.
 * @member {Boolean} send
 */
StampCommand.prototype['send'] = undefined;






export default StampCommand;


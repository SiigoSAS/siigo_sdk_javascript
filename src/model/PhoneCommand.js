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
 * The PhoneCommand model module.
 * @module model/PhoneCommand
 * @version v1
 */
class PhoneCommand {
    /**
     * Constructs a new <code>PhoneCommand</code>.
     * @alias module:model/PhoneCommand
     */
    constructor() { 
        
        PhoneCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PhoneCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PhoneCommand} obj Optional instance to populate.
     * @return {module:model/PhoneCommand} The populated <code>PhoneCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhoneCommand();

            if (data.hasOwnProperty('indicative')) {
                obj['indicative'] = ApiClient.convertToType(data['indicative'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the indicative number of country.  For example, the number '57' representate to Colombia.
 * @member {String} indicative
 */
PhoneCommand.prototype['indicative'] = undefined;

/**
 * Represents the phone number.  For example, the phone number '3006003345'.
 * @member {String} number
 */
PhoneCommand.prototype['number'] = undefined;

/**
 * Represents the extension number.  For example, the extension number '132'.
 * @member {String} extension
 */
PhoneCommand.prototype['extension'] = undefined;






export default PhoneCommand;


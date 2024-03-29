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
 * The FiscalResponsibilitiesModel model module.
 * @module model/FiscalResponsibilitiesModel
 * @version v1
 */
class FiscalResponsibilitiesModel {
    /**
     * Constructs a new <code>FiscalResponsibilitiesModel</code>.
     * @alias module:model/FiscalResponsibilitiesModel
     */
    constructor() { 
        
        FiscalResponsibilitiesModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FiscalResponsibilitiesModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FiscalResponsibilitiesModel} obj Optional instance to populate.
     * @return {module:model/FiscalResponsibilitiesModel} The populated <code>FiscalResponsibilitiesModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FiscalResponsibilitiesModel();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the fiscal responsibility code.  For example, the code 'R-99-PN'.
 * @member {String} code
 */
FiscalResponsibilitiesModel.prototype['code'] = undefined;

/**
 * Represents the fiscal responsibility name.
 * @member {String} name
 */
FiscalResponsibilitiesModel.prototype['name'] = undefined;






export default FiscalResponsibilitiesModel;


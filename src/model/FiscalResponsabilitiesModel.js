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
 * The FiscalResponsabilitiesModel model module.
 * @module model/FiscalResponsabilitiesModel
 * @version v1
 */
class FiscalResponsabilitiesModel {
    /**
     * Constructs a new <code>FiscalResponsabilitiesModel</code>.
     * @alias module:model/FiscalResponsabilitiesModel
     */
    constructor() { 
        
        FiscalResponsabilitiesModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FiscalResponsabilitiesModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FiscalResponsabilitiesModel} obj Optional instance to populate.
     * @return {module:model/FiscalResponsabilitiesModel} The populated <code>FiscalResponsabilitiesModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FiscalResponsabilitiesModel();

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
 * Represents the fiscal Responsability code.  For example, the code 'R-99-PN'.
 * @member {String} code
 */
FiscalResponsabilitiesModel.prototype['code'] = undefined;

/**
 * Represents the fiscal Responsability name.
 * @member {String} name
 */
FiscalResponsabilitiesModel.prototype['name'] = undefined;






export default FiscalResponsabilitiesModel;


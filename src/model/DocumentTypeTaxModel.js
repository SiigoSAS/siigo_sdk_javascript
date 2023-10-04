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
 * The DocumentTypeTaxModel model module.
 * @module model/DocumentTypeTaxModel
 * @version v1
 */
class DocumentTypeTaxModel {
    /**
     * Constructs a new <code>DocumentTypeTaxModel</code>.
     * @alias module:model/DocumentTypeTaxModel
     */
    constructor() { 
        
        DocumentTypeTaxModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentTypeTaxModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentTypeTaxModel} obj Optional instance to populate.
     * @return {module:model/DocumentTypeTaxModel} The populated <code>DocumentTypeTaxModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentTypeTaxModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Represents the id of the global tax
 * @member {Number} id
 */
DocumentTypeTaxModel.prototype['id'] = undefined;

/**
 * Represents the name of the global tax
 * @member {String} name
 */
DocumentTypeTaxModel.prototype['name'] = undefined;

/**
 * Represents the percentage parametrized to the type of the global tax
 * @member {Number} percentage
 */
DocumentTypeTaxModel.prototype['percentage'] = undefined;

/**
 * Represents if the type of the global tax is enable
 * @member {Boolean} active
 */
DocumentTypeTaxModel.prototype['active'] = undefined;






export default DocumentTypeTaxModel;


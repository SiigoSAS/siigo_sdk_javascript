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
 * The FixedAssetModel model module.
 * @module model/FixedAssetModel
 * @version v1
 */
class FixedAssetModel {
    /**
     * Constructs a new <code>FixedAssetModel</code>.
     * @alias module:model/FixedAssetModel
     */
    constructor() { 
        
        FixedAssetModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FixedAssetModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FixedAssetModel} obj Optional instance to populate.
     * @return {module:model/FixedAssetModel} The populated <code>FixedAssetModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FixedAssetModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the id of the fixed asset, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} id
 */
FixedAssetModel.prototype['id'] = undefined;

/**
 * Represents the name of the fixed asset. This value can be an alphanumeric  name like 'Personal computer' or 'Furniture'.
 * @member {String} name
 */
FixedAssetModel.prototype['name'] = undefined;






export default FixedAssetModel;


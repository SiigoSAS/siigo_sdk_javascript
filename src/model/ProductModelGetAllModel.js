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
import GenericPageListModel from './GenericPageListModel.js';
import LinksPagination from './LinksPagination.js';
import ProductModel from './ProductModel.js';

/**
 * The ProductModelGetAllModel model module.
 * @module model/ProductModelGetAllModel
 * @version v1
 */
class ProductModelGetAllModel {
    /**
     * Constructs a new <code>ProductModelGetAllModel</code>.
     * @alias module:model/ProductModelGetAllModel
     */
    constructor() { 
        
        ProductModelGetAllModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductModelGetAllModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductModelGetAllModel} obj Optional instance to populate.
     * @return {module:model/ProductModelGetAllModel} The populated <code>ProductModelGetAllModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductModelGetAllModel();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = GenericPageListModel.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ProductModel]);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksPagination.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GenericPageListModel} pagination
 */
ProductModelGetAllModel.prototype['pagination'] = undefined;

/**
 * Contains the Results, this results will be a list of model.
 * @member {Array.<module:model/ProductModel>} results
 */
ProductModelGetAllModel.prototype['results'] = undefined;

/**
 * @member {module:model/LinksPagination} _links
 */
ProductModelGetAllModel.prototype['_links'] = undefined;






export default ProductModelGetAllModel;

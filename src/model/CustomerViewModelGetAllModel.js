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
import CustomerViewModel from './CustomerViewModel.js';
import GenericPageListModel from './GenericPageListModel.js';
import LinksPagination from './LinksPagination.js';

/**
 * The CustomerViewModelGetAllModel model module.
 * @module model/CustomerViewModelGetAllModel
 * @version v1
 */
class CustomerViewModelGetAllModel {
    /**
     * Constructs a new <code>CustomerViewModelGetAllModel</code>.
     * @alias module:model/CustomerViewModelGetAllModel
     */
    constructor() { 
        
        CustomerViewModelGetAllModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerViewModelGetAllModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerViewModelGetAllModel} obj Optional instance to populate.
     * @return {module:model/CustomerViewModelGetAllModel} The populated <code>CustomerViewModelGetAllModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerViewModelGetAllModel();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = GenericPageListModel.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CustomerViewModel]);
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
CustomerViewModelGetAllModel.prototype['pagination'] = undefined;

/**
 * Contains the Results, this results will be a list of model.
 * @member {Array.<module:model/CustomerViewModel>} results
 */
CustomerViewModelGetAllModel.prototype['results'] = undefined;

/**
 * @member {module:model/LinksPagination} _links
 */
CustomerViewModelGetAllModel.prototype['_links'] = undefined;






export default CustomerViewModelGetAllModel;


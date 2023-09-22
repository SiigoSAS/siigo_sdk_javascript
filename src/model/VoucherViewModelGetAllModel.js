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
import GenericPageListModel from './GenericPageListModel';
import LinksPagination from './LinksPagination';
import VoucherViewModel from './VoucherViewModel';

/**
 * The VoucherViewModelGetAllModel model module.
 * @module model/VoucherViewModelGetAllModel
 * @version v1
 */
class VoucherViewModelGetAllModel {
    /**
     * Constructs a new <code>VoucherViewModelGetAllModel</code>.
     * @alias module:model/VoucherViewModelGetAllModel
     */
    constructor() { 
        
        VoucherViewModelGetAllModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VoucherViewModelGetAllModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoucherViewModelGetAllModel} obj Optional instance to populate.
     * @return {module:model/VoucherViewModelGetAllModel} The populated <code>VoucherViewModelGetAllModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoucherViewModelGetAllModel();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = GenericPageListModel.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [VoucherViewModel]);
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
VoucherViewModelGetAllModel.prototype['pagination'] = undefined;

/**
 * Contains the Results, this results will be a list of model.
 * @member {Array.<module:model/VoucherViewModel>} results
 */
VoucherViewModelGetAllModel.prototype['results'] = undefined;

/**
 * @member {module:model/LinksPagination} _links
 */
VoucherViewModelGetAllModel.prototype['_links'] = undefined;






export default VoucherViewModelGetAllModel;


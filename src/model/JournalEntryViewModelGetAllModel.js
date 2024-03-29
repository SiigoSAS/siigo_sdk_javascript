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
import JournalEntryViewModel from './JournalEntryViewModel.js';
import LinksPagination from './LinksPagination.js';

/**
 * The JournalEntryViewModelGetAllModel model module.
 * @module model/JournalEntryViewModelGetAllModel
 * @version v1
 */
class JournalEntryViewModelGetAllModel {
    /**
     * Constructs a new <code>JournalEntryViewModelGetAllModel</code>.
     * @alias module:model/JournalEntryViewModelGetAllModel
     */
    constructor() { 
        
        JournalEntryViewModelGetAllModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalEntryViewModelGetAllModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryViewModelGetAllModel} obj Optional instance to populate.
     * @return {module:model/JournalEntryViewModelGetAllModel} The populated <code>JournalEntryViewModelGetAllModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalEntryViewModelGetAllModel();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = GenericPageListModel.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [JournalEntryViewModel]);
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
JournalEntryViewModelGetAllModel.prototype['pagination'] = undefined;

/**
 * Contains the Results, this results will be a list of model.
 * @member {Array.<module:model/JournalEntryViewModel>} results
 */
JournalEntryViewModelGetAllModel.prototype['results'] = undefined;

/**
 * @member {module:model/LinksPagination} _links
 */
JournalEntryViewModelGetAllModel.prototype['_links'] = undefined;






export default JournalEntryViewModelGetAllModel;


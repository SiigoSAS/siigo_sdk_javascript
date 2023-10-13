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
 * The InvoiceStampViewModel model module.
 * @module model/InvoiceStampViewModel
 * @version v1
 */
class InvoiceStampViewModel {
    /**
     * Constructs a new <code>InvoiceStampViewModel</code>.
     * @alias module:model/InvoiceStampViewModel
     */
    constructor() { 
        
        InvoiceStampViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceStampViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceStampViewModel} obj Optional instance to populate.
     * @return {module:model/InvoiceStampViewModel} The populated <code>InvoiceStampViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceStampViewModel();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('observations')) {
                obj['observations'] = ApiClient.convertToType(data['observations'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents Unique electronic invoice code.
 * @member {String} uuid
 */
InvoiceStampViewModel.prototype['uuid'] = undefined;

/**
 * It represents the status of the electronic document, it can be:  Draft: The document was saved correctly but this document.  was not sent to the tax collector entity.  Accepted: The document was sent and accepted correctly.  Rejected: The document was sent with errors therefore it was rejected.
 * @member {String} status
 */
InvoiceStampViewModel.prototype['status'] = undefined;

/**
 * Represents observations associated with an electronic document.
 * @member {String} observations
 */
InvoiceStampViewModel.prototype['observations'] = undefined;

/**
 * @member {String} errors
 */
InvoiceStampViewModel.prototype['errors'] = undefined;






export default InvoiceStampViewModel;

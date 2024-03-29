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
 * The EInvoiceErrorViewModel model module.
 * @module model/EInvoiceErrorViewModel
 * @version v1
 */
class EInvoiceErrorViewModel {
    /**
     * Constructs a new <code>EInvoiceErrorViewModel</code>.
     * @alias module:model/EInvoiceErrorViewModel
     */
    constructor() { 
        
        EInvoiceErrorViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EInvoiceErrorViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EInvoiceErrorViewModel} obj Optional instance to populate.
     * @return {module:model/EInvoiceErrorViewModel} The populated <code>EInvoiceErrorViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EInvoiceErrorViewModel();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents a code error that was sent by the tax regulatory entity.
 * @member {String} code
 */
EInvoiceErrorViewModel.prototype['code'] = undefined;

/**
 * Respresents a message error like 'Error 401: ...'.
 * @member {String} message
 */
EInvoiceErrorViewModel.prototype['message'] = undefined;






export default EInvoiceErrorViewModel;


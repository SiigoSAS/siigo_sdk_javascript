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
 * The InvoicePdfViewModel model module.
 * @module model/InvoicePdfViewModel
 * @version v1
 */
class InvoicePdfViewModel {
    /**
     * Constructs a new <code>InvoicePdfViewModel</code>.
     * @alias module:model/InvoicePdfViewModel
     */
    constructor() { 
        
        InvoicePdfViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoicePdfViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoicePdfViewModel} obj Optional instance to populate.
     * @return {module:model/InvoicePdfViewModel} The populated <code>InvoicePdfViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoicePdfViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('cufe')) {
                obj['cufe'] = ApiClient.convertToType(data['cufe'], 'String');
            }
            if (data.hasOwnProperty('base64')) {
                obj['base64'] = ApiClient.convertToType(data['base64'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */
InvoicePdfViewModel.prototype['id'] = undefined;

/**
 * Represents the CUFE of credit note.
 * @member {String} cufe
 */
InvoicePdfViewModel.prototype['cufe'] = undefined;

/**
 * Represents the data of the invoice on base 64 to convert it to PDF.
 * @member {String} base64
 */
InvoicePdfViewModel.prototype['base64'] = undefined;






export default InvoicePdfViewModel;


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
 * The PaymentTypeViewModel model module.
 * @module model/PaymentTypeViewModel
 * @version v1
 */
class PaymentTypeViewModel {
    /**
     * Constructs a new <code>PaymentTypeViewModel</code>.
     * Defines the Siigo.SiigoAPI.Api.Application.PaymentTypes.Model.PaymentTypeViewModel.
     * @alias module:model/PaymentTypeViewModel
     */
    constructor() { 
        
        PaymentTypeViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentTypeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentTypeViewModel} obj Optional instance to populate.
     * @return {module:model/PaymentTypeViewModel} The populated <code>PaymentTypeViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTypeViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Represents the id of the payment method, the value of this field must be an integer  number that represents the unique id of the payment method. For example '5636'.
 * @member {Number} id
 */
PaymentTypeViewModel.prototype['id'] = undefined;

/**
 * Represents the name of the payment method. This value can be an alphanumeric name  like 'Crédito' (credit).
 * @member {String} name
 */
PaymentTypeViewModel.prototype['name'] = undefined;

/**
 * Type of the payment method. This value can be 'Cartera', 'Proveedor' or 'CarteraProveedor'.
 * @member {String} type
 */
PaymentTypeViewModel.prototype['type'] = undefined;

/**
 * Represents if payment method status is activated or disabled,  the value of this status will be true (for activated) or false (disabled).  By default, this field will be true.
 * @member {Boolean} active
 */
PaymentTypeViewModel.prototype['active'] = undefined;

/**
 * Indicates if the payment method has an expiration date. This value can be 'true' or 'false'.
 * @member {Boolean} due_date
 */
PaymentTypeViewModel.prototype['due_date'] = undefined;






export default PaymentTypeViewModel;

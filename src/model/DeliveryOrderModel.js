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

/**
 * The DeliveryOrderModel model module.
 * @module model/DeliveryOrderModel
 * @version v1
 */
class DeliveryOrderModel {
    /**
     * Constructs a new <code>DeliveryOrderModel</code>.
     * @alias module:model/DeliveryOrderModel
     */
    constructor() { 
        
        DeliveryOrderModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeliveryOrderModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeliveryOrderModel} obj Optional instance to populate.
     * @return {module:model/DeliveryOrderModel} The populated <code>DeliveryOrderModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliveryOrderModel();

            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represent the prefix of order type.  For example, 'OE' represents 'Delivery Order' and 'OC' means 'Purchase Order'.
 * @member {String} prefix
 */
DeliveryOrderModel.prototype['prefix'] = undefined;

/**
 * Represents the number of the delivery order.
 * @member {String} number
 */
DeliveryOrderModel.prototype['number'] = undefined;

/**
 * Represents the date of delivery.
 * @member {String} date
 */
DeliveryOrderModel.prototype['date'] = undefined;






export default DeliveryOrderModel;

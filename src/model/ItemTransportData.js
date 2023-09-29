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
 * The ItemTransportData model module.
 * @module model/ItemTransportData
 * @version v1
 */
class ItemTransportData {
    /**
     * Constructs a new <code>ItemTransportData</code>.
     * @alias module:model/ItemTransportData
     */
    constructor() { 
        
        ItemTransportData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemTransportData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemTransportData} obj Optional instance to populate.
     * @return {module:model/ItemTransportData} The populated <code>ItemTransportData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemTransportData();

            if (data.hasOwnProperty('file_number')) {
                obj['file_number'] = ApiClient.convertToType(data['file_number'], 'Number');
            }
            if (data.hasOwnProperty('shipment_number')) {
                obj['shipment_number'] = ApiClient.convertToType(data['shipment_number'], 'String');
            }
            if (data.hasOwnProperty('transported_quantity')) {
                obj['transported_quantity'] = ApiClient.convertToType(data['transported_quantity'], 'Number');
            }
            if (data.hasOwnProperty('measurement_unit')) {
                obj['measurement_unit'] = ApiClient.convertToType(data['measurement_unit'], 'String');
            }
            if (data.hasOwnProperty('freight_value')) {
                obj['freight_value'] = ApiClient.convertToType(data['freight_value'], 'Number');
            }
            if (data.hasOwnProperty('purchase_order')) {
                obj['purchase_order'] = ApiClient.convertToType(data['purchase_order'], 'String');
            }
            if (data.hasOwnProperty('service_type')) {
                obj['service_type'] = ApiClient.convertToType(data['service_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the file number of the transport item.
 * @member {Number} file_number
 */
ItemTransportData.prototype['file_number'] = undefined;

/**
 * Represents the shipment number of the transport item.
 * @member {String} shipment_number
 */
ItemTransportData.prototype['shipment_number'] = undefined;

/**
 * Represents the transported quantity of the transport item.
 * @member {Number} transported_quantity
 */
ItemTransportData.prototype['transported_quantity'] = undefined;

/**
 * Represents the measurement unit of the transport item.  It could be KGM or GLL.
 * @member {String} measurement_unit
 */
ItemTransportData.prototype['measurement_unit'] = undefined;

/**
 * Represents the freight value of the transport item.
 * @member {Number} freight_value
 */
ItemTransportData.prototype['freight_value'] = undefined;

/**
 * Represents the purchase order of the transport item.
 * @member {String} purchase_order
 */
ItemTransportData.prototype['purchase_order'] = undefined;

/**
 * Represents the service type of the transport item.  It could be Shipment or AdditionalService
 * @member {String} service_type
 */
ItemTransportData.prototype['service_type'] = undefined;






export default ItemTransportData;


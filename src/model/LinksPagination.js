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
import Link from './Link';

/**
 * The LinksPagination model module.
 * @module model/LinksPagination
 * @version v1
 */
class LinksPagination {
    /**
     * Constructs a new <code>LinksPagination</code>.
     * @alias module:model/LinksPagination
     */
    constructor() { 
        
        LinksPagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinksPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinksPagination} obj Optional instance to populate.
     * @return {module:model/LinksPagination} The populated <code>LinksPagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinksPagination();

            if (data.hasOwnProperty('previous')) {
                obj['previous'] = Link.constructFromObject(data['previous']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = Link.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = Link.constructFromObject(data['next']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Link} previous
 */
LinksPagination.prototype['previous'] = undefined;

/**
 * @member {module:model/Link} self
 */
LinksPagination.prototype['self'] = undefined;

/**
 * @member {module:model/Link} next
 */
LinksPagination.prototype['next'] = undefined;






export default LinksPagination;

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


import ApiClient from "../ApiClient";
import WarehouseViewModel from '../model/WarehouseViewModel';

/**
* Warehouses service.
* @module api/WarehousesApi
* @version v1
*/
export default class WarehousesApi {

    /**
    * Constructs a new WarehousesApi. 
    * @alias module:api/WarehousesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a list of warehouse.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WarehouseViewModel>} and HTTP response
     */
    getWarehouseWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [WarehouseViewModel];
      return this.apiClient.callApi(
        '/v1/warehouses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of warehouse.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WarehouseViewModel>}
     */
    getWarehouse() {
      return this.getWarehouseWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
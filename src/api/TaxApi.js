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


import ApiClient from "../ApiClient.js";
import TaxViewModel from '../model/TaxViewModel.js';

/**
* Tax service.
* @module api/TaxApi
* @version v1
*/
export default class TaxApi {

    /**
    * Constructs a new TaxApi. 
    * @alias module:api/TaxApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a list of taxes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TaxViewModel>} and HTTP response
     */
    getTaxesWithHttpInfo() {
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
      let returnType = [TaxViewModel];
      return this.apiClient.callApi(
        '/v1/taxes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of taxes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TaxViewModel>}
     */
    getTaxes() {
      return this.getTaxesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


}

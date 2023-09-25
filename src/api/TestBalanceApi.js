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
import CreateTestBalanceByThirdpartyCommand from '../model/CreateTestBalanceByThirdpartyCommand';
import CreateTestBalanceCommand from '../model/CreateTestBalanceCommand';
import TestBalanceResultModel from '../model/TestBalanceResultModel';

/**
* TestBalance service.
* @module api/TestBalanceApi
* @version v1
*/
export default class TestBalanceApi {

    /**
    * Constructs a new TestBalanceApi. 
    * @alias module:api/TestBalanceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestBalanceCommand} opts.createTestBalanceCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestBalanceResultModel} and HTTP response
     */
    createTestBalanceWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TestBalanceResultModel;
      return this.apiClient.callApi(
        '/v1/test-balance-report', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestBalanceCommand} opts.createTestBalanceCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestBalanceResultModel}
     */
    createTestBalance(opts) {
      return this.createTestBalanceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestBalanceByThirdpartyCommand} opts.createTestBalanceByThirdpartyCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestBalanceResultModel} and HTTP response
     */
    createTestBalanceByThirdpartyWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TestBalanceResultModel;
      return this.apiClient.callApi(
        '/v1/test-balance-report-by-thirdparty', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestBalanceByThirdpartyCommand} opts.createTestBalanceByThirdpartyCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestBalanceResultModel}
     */
    createTestBalanceByThirdparty(opts) {
      return this.createTestBalanceByThirdpartyWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

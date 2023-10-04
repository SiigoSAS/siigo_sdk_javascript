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
import AccountsPayableViewModelGetAllModel from '../model/AccountsPayableViewModelGetAllModel.js';

/**
* AccountsPayable service.
* @module api/AccountsPayableApi
* @version v1
*/
export default class AccountsPayableApi {

    /**
    * Constructs a new AccountsPayableApi. 
    * @alias module:api/AccountsPayableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a list of document types.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.providerIdentification 
     * @param {Number} opts.providerBranchOffice 
     * @param {Date} opts.dueDateStart 
     * @param {Date} opts.dueDateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountsPayableViewModelGetAllModel} and HTTP response
     */
    getAccountsPayableWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'provider_identification': opts['providerIdentification'],
        'provider_branch_office': opts['providerBranchOffice'],
        'due_date_start': opts['dueDateStart'],
        'due_date_end': opts['dueDateEnd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = AccountsPayableViewModelGetAllModel;
      return this.apiClient.callApi(
        '/v1/accounts-payable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of document types.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.providerIdentification 
     * @param {Number} opts.providerBranchOffice 
     * @param {Date} opts.dueDateStart 
     * @param {Date} opts.dueDateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountsPayableViewModelGetAllModel}
     */
    getAccountsPayable(opts) {
      return this.getAccountsPayableWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


}

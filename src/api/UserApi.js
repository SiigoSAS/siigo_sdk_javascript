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
import UsersViewModel from '../model/UsersViewModel.js';

/**
* User service.
* @module api/UserApi
* @version v1
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a paginated list of users.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Represents the current page of the results that you get. For example, '1'.
     * @param {Number} opts.pageSize Represents the number of users that you will get per page. For example, '20'.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UsersViewModel} and HTTP response
     */
    getUsersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UsersViewModel;
      return this.apiClient.callApi(
        '/v1/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a paginated list of users.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Represents the current page of the results that you get. For example, '1'.
     * @param {Number} opts.pageSize Represents the number of users that you will get per page. For example, '20'.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UsersViewModel}
     */
    getUsers(opts) {
      return this.getUsersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


}

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
import DocumentTypeViewModel from '../model/DocumentTypeViewModel.js';

/**
* DocumentType service.
* @module api/DocumentTypeApi
* @version v1
*/
export default class DocumentTypeApi {

    /**
    * Constructs a new DocumentTypeApi. 
    * @alias module:api/DocumentTypeApi
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
     * @param {String} opts.type Represents the document type. For example, 'FV' to invoices, 'NC' to credit notes, or 'RC' to vouchers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DocumentTypeViewModel>} and HTTP response
     */
    getDocumentTypesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [DocumentTypeViewModel];
      return this.apiClient.callApi(
        '/v1/document-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of document types.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Represents the document type. For example, 'FV' to invoices, 'NC' to credit notes, or 'RC' to vouchers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DocumentTypeViewModel>}
     */
    getDocumentTypes(opts) {
      return this.getDocumentTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


}

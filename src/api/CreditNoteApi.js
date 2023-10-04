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
import CreateCreditNoteCommand from '../model/CreateCreditNoteCommand.js';
import CreditNotePdfViewModel from '../model/CreditNotePdfViewModel.js';
import CreditNoteViewModel from '../model/CreditNoteViewModel.js';
import CreditNoteViewModelGetAllModel from '../model/CreditNoteViewModelGetAllModel.js';

/**
* CreditNote service.
* @module api/CreditNoteApi
* @version v1
*/
export default class CreditNoteApi {

    /**
    * Constructs a new CreditNoteApi. 
    * @alias module:api/CreditNoteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a credit note.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCreditNoteCommand} opts.createCreditNoteCommand Represents the request with the credit note information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditNoteViewModel} and HTTP response
     */
    createCreditNoteWithHttpInfo(opts) {
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
      let returnType = CreditNoteViewModel;
      return this.apiClient.callApi(
        '/v1/credit-notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a credit note.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCreditNoteCommand} opts.createCreditNoteCommand Represents the request with the credit note information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditNoteViewModel}
     */
    createCreditNote(opts) {
      return this.createCreditNoteWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


    /**
     * Gets the credit note by GUID.
     * @param {String} id Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditNoteViewModel} and HTTP response
     */
    getCreditNoteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCreditNote");
      }

      let pathParams = {
        'id': id
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
      let returnType = CreditNoteViewModel;
      return this.apiClient.callApi(
        '/v1/credit-notes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the credit note by GUID.
     * @param {String} id Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditNoteViewModel}
     */
    getCreditNote(id) {
      return this.getCreditNoteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


    /**
     * Gets the credit note PDF by GUID.
     * @param {String} id Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditNotePdfViewModel} and HTTP response
     */
    getCreditNotePDFWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCreditNotePDF");
      }

      let pathParams = {
        'id': id
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
      let returnType = CreditNotePdfViewModel;
      return this.apiClient.callApi(
        '/v1/credit-notes/{id}/pdf', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the credit note PDF by GUID.
     * @param {String} id Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditNotePdfViewModel}
     */
    getCreditNotePDF(id) {
      return this.getCreditNotePDFWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


    /**
     * Returns a paginated list of credit notes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name For filtering by Credit Note name
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditNoteViewModelGetAllModel} and HTTP response
     */
    getCreditNotesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'created_start': opts['createdStart'],
        'created_end': opts['createdEnd'],
        'date_start': opts['dateStart'],
        'date_end': opts['dateEnd'],
        'updated_start': opts['updatedStart'],
        'updated_end': opts['updatedEnd'],
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
      let returnType = CreditNoteViewModelGetAllModel;
      return this.apiClient.callApi(
        '/v1/credit-notes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a paginated list of credit notes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name For filtering by Credit Note name
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditNoteViewModelGetAllModel}
     */
    getCreditNotes(opts) {
      return this.getCreditNotesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


}

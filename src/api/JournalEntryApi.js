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
import CreateJournalEntryCommand from '../model/CreateJournalEntryCommand.js';
import JournalEntryViewModel from '../model/JournalEntryViewModel.js';
import JournalEntryViewModelGetAllModel from '../model/JournalEntryViewModelGetAllModel.js';

/**
* JournalEntry service.
* @module api/JournalEntryApi
* @version v1
*/
export default class JournalEntryApi {

    /**
    * Constructs a new JournalEntryApi. 
    * @alias module:api/JournalEntryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a journal entry.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateJournalEntryCommand} opts.createJournalEntryCommand Represents the request with the journal entry information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JournalEntryViewModel} and HTTP response
     */
    createJournalWithHttpInfo(opts) {
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
      let returnType = JournalEntryViewModel;
      return this.apiClient.callApi(
        '/v1/journals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a journal entry.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateJournalEntryCommand} opts.createJournalEntryCommand Represents the request with the journal entry information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JournalEntryViewModel}
     */
    createJournal(opts) {
      return this.createJournalWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


    /**
     * Gets the journal entry by GUID.
     * @param {String} id Represent the Journal id by GUID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JournalEntryViewModel} and HTTP response
     */
    getJournalWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getJournal");
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
      let returnType = JournalEntryViewModel;
      return this.apiClient.callApi(
        '/v1/journals/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the journal entry by GUID.
     * @param {String} id Represent the Journal id by GUID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JournalEntryViewModel}
     */
    getJournal(id) {
      return this.getJournalWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


    /**
     * Returns a paginated list of journals entries.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name For filtering by Journals Entry name
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JournalEntryViewModelGetAllModel} and HTTP response
     */
    getJournalsWithHttpInfo(opts) {
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
      let returnType = JournalEntryViewModelGetAllModel;
      return this.apiClient.callApi(
        '/v1/journals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a paginated list of journals entries.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name For filtering by Journals Entry name
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JournalEntryViewModelGetAllModel}
     */
    getJournals(opts) {
      return this.getJournalsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data ?? JSON.parse(response_and_data.response.text);
        });
    }


}

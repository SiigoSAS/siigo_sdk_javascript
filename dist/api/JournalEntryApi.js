"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateJournalEntryCommand = _interopRequireDefault(require("../model/CreateJournalEntryCommand"));

var _JournalEntryViewModel = _interopRequireDefault(require("../model/JournalEntryViewModel"));

var _JournalsEntryViewModel = _interopRequireDefault(require("../model/JournalsEntryViewModel"));

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

/**
* JournalEntry service.
* @module api/JournalEntryApi
* @version v1
*/
var JournalEntryApi = /*#__PURE__*/function () {
  /**
  * Constructs a new JournalEntryApi. 
  * @alias module:api/JournalEntryApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function JournalEntryApi(apiClient) {
    (0, _classCallCheck2["default"])(this, JournalEntryApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Creates a journal entry.
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateJournalEntryCommand} opts.createJournalEntryCommand Represents the request with the journal entry information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JournalEntryViewModel} and HTTP response
   */


  (0, _createClass2["default"])(JournalEntryApi, [{
    key: "createJournalWithHttpInfo",
    value: function createJournalWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _JournalEntryViewModel["default"];
      return this.apiClient.callApi('/v1/journals', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a journal entry.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateJournalEntryCommand} opts.createJournalEntryCommand Represents the request with the journal entry information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JournalEntryViewModel}
     */

  }, {
    key: "createJournal",
    value: function createJournal(opts) {
      return this.createJournalWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets the journal entry by GUID.
     * @param {String} id Represent the Journal id by GUID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JournalEntryViewModel} and HTTP response
     */

  }, {
    key: "getJournalWithHttpInfo",
    value: function getJournalWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getJournal");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _JournalEntryViewModel["default"];
      return this.apiClient.callApi('/v1/journals/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets the journal entry by GUID.
     * @param {String} id Represent the Journal id by GUID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JournalEntryViewModel}
     */

  }, {
    key: "getJournal",
    value: function getJournal(id) {
      return this.getJournalWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JournalsEntryViewModel} and HTTP response
     */

  }, {
    key: "getJournalsWithHttpInfo",
    value: function getJournalsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
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
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _JournalsEntryViewModel["default"];
      return this.apiClient.callApi('/v1/journals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JournalsEntryViewModel}
     */

  }, {
    key: "getJournals",
    value: function getJournals(opts) {
      return this.getJournalsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return JournalEntryApi;
}();

exports["default"] = JournalEntryApi;
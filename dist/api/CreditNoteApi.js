"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateCreditNoteCommand = _interopRequireDefault(require("../model/CreateCreditNoteCommand"));

var _CreditNotePdfViewModel = _interopRequireDefault(require("../model/CreditNotePdfViewModel"));

var _CreditNoteViewModel = _interopRequireDefault(require("../model/CreditNoteViewModel"));

var _CreditNotesViewModel = _interopRequireDefault(require("../model/CreditNotesViewModel"));

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
* CreditNote service.
* @module api/CreditNoteApi
* @version v1
*/
var CreditNoteApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CreditNoteApi. 
  * @alias module:api/CreditNoteApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CreditNoteApi(apiClient) {
    (0, _classCallCheck2["default"])(this, CreditNoteApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Creates a credit note.
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateCreditNoteCommand} opts.createCreditNoteCommand Represents the request with the credit note information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditNoteViewModel} and HTTP response
   */


  (0, _createClass2["default"])(CreditNoteApi, [{
    key: "createCreditNoteWithHttpInfo",
    value: function createCreditNoteWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _CreditNoteViewModel["default"];
      return this.apiClient.callApi('/v1/credit-notes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a credit note.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCreditNoteCommand} opts.createCreditNoteCommand Represents the request with the credit note information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditNoteViewModel}
     */

  }, {
    key: "createCreditNote",
    value: function createCreditNote(opts) {
      return this.createCreditNoteWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets the credit note by GUID.
     * @param {String} id Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditNoteViewModel} and HTTP response
     */

  }, {
    key: "getCreditNoteWithHttpInfo",
    value: function getCreditNoteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCreditNote");
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
      var returnType = _CreditNoteViewModel["default"];
      return this.apiClient.callApi('/v1/credit-notes/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets the credit note by GUID.
     * @param {String} id Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditNoteViewModel}
     */

  }, {
    key: "getCreditNote",
    value: function getCreditNote(id) {
      return this.getCreditNoteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets the credit note PDF by GUID.
     * @param {String} id Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditNotePdfViewModel} and HTTP response
     */

  }, {
    key: "getCreditNotePDFWithHttpInfo",
    value: function getCreditNotePDFWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCreditNotePDF");
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
      var returnType = _CreditNotePdfViewModel["default"];
      return this.apiClient.callApi('/v1/credit-notes/{id}/pdf', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets the credit note PDF by GUID.
     * @param {String} id Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditNotePdfViewModel}
     */

  }, {
    key: "getCreditNotePDF",
    value: function getCreditNotePDF(id) {
      return this.getCreditNotePDFWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditNotesViewModel} and HTTP response
     */

  }, {
    key: "getCreditNotesWithHttpInfo",
    value: function getCreditNotesWithHttpInfo(opts) {
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
      var returnType = _CreditNotesViewModel["default"];
      return this.apiClient.callApi('/v1/credit-notes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditNotesViewModel}
     */

  }, {
    key: "getCreditNotes",
    value: function getCreditNotes(opts) {
      return this.getCreditNotesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return CreditNoteApi;
}();

exports["default"] = CreditNoteApi;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DocumentBalanceViewModel = _interopRequireDefault(require("../model/DocumentBalanceViewModel"));
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
* DocumentBalance service.
* @module api/DocumentBalanceApi
* @version v1
*/
var DocumentBalanceApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new DocumentBalanceApi. 
  * @alias module:api/DocumentBalanceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DocumentBalanceApi(apiClient) {
    (0, _classCallCheck2["default"])(this, DocumentBalanceApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns client document balance.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DocumentBalanceViewModel>} and HTTP response
   */
  (0, _createClass2["default"])(DocumentBalanceApi, [{
    key: "getDocumentBalancesWithHttpInfo",
    value: function getDocumentBalancesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_DocumentBalanceViewModel["default"]];
      return this.apiClient.callApi('/v1/available-documents', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns client document balance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DocumentBalanceViewModel>}
     */
  }, {
    key: "getDocumentBalances",
    value: function getDocumentBalances() {
      return this.getDocumentBalancesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return DocumentBalanceApi;
}();
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PriceListsViewModel = _interopRequireDefault(require("../model/PriceListsViewModel"));

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
* PriceLists service.
* @module api/PriceListsApi
* @version v1
*/
var PriceListsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PriceListsApi. 
  * @alias module:api/PriceListsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PriceListsApi(apiClient) {
    (0, _classCallCheck2["default"])(this, PriceListsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get a list of Price Lists.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PriceListsViewModel>} and HTTP response
   */


  (0, _createClass2["default"])(PriceListsApi, [{
    key: "getPriceListWithHttpInfo",
    value: function getPriceListWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_PriceListsViewModel["default"]];
      return this.apiClient.callApi('/v1/price-lists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of Price Lists.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PriceListsViewModel>}
     */

  }, {
    key: "getPriceList",
    value: function getPriceList() {
      return this.getPriceListWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return PriceListsApi;
}();

exports["default"] = PriceListsApi;
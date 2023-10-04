"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _PriceListsViewModel = _interopRequireDefault(require("../model/PriceListsViewModel.js"));
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
* Price service.
* @module api/PriceApi
* @version v1
*/
var PriceApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new PriceApi. 
  * @alias module:api/PriceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PriceApi(apiClient) {
    (0, _classCallCheck2["default"])(this, PriceApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns a list of price lists.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PriceListsViewModel>} and HTTP response
   */
  (0, _createClass2["default"])(PriceApi, [{
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
     * Returns a list of price lists.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PriceListsViewModel>}
     */
  }, {
    key: "getPriceList",
    value: function getPriceList() {
      return this.getPriceListWithHttpInfo().then(function (response_and_data) {
        var _response_and_data$da;
        return (_response_and_data$da = response_and_data.data) !== null && _response_and_data$da !== void 0 ? _response_and_data$da : JSON.parse(response_and_data.response.text);
      });
    }
  }]);
  return PriceApi;
}();
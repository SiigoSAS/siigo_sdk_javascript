"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateVoucherCommand = _interopRequireDefault(require("../model/CreateVoucherCommand"));
var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));
var _MailViewModel = _interopRequireDefault(require("../model/MailViewModel"));
var _SendElectronicVoucherCommand = _interopRequireDefault(require("../model/SendElectronicVoucherCommand"));
var _SendElectronicVoucherViewModel = _interopRequireDefault(require("../model/SendElectronicVoucherViewModel"));
var _SendVoucherByEmailCommand = _interopRequireDefault(require("../model/SendVoucherByEmailCommand"));
var _VoucherViewModel = _interopRequireDefault(require("../model/VoucherViewModel"));
var _VoucherViewModelGetAllModel = _interopRequireDefault(require("../model/VoucherViewModelGetAllModel"));
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
* Voucher service.
* @module api/VoucherApi
* @version v1
*/
var VoucherApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new VoucherApi. 
  * @alias module:api/VoucherApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function VoucherApi(apiClient) {
    (0, _classCallCheck2["default"])(this, VoucherApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Creates a voucher.
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateVoucherCommand} opts.createVoucherCommand Represents the request with the voucher information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VoucherViewModel} and HTTP response
   */
  (0, _createClass2["default"])(VoucherApi, [{
    key: "createVoucherWithHttpInfo",
    value: function createVoucherWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _VoucherViewModel["default"];
      return this.apiClient.callApi('/v1/vouchers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Creates a voucher.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateVoucherCommand} opts.createVoucherCommand Represents the request with the voucher information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VoucherViewModel}
     */
  }, {
    key: "createVoucher",
    value: function createVoucher(opts) {
      return this.createVoucherWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Gets the voucher by GUID.
     * @param {String} id Represents the unique Id of vocher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VoucherViewModel} and HTTP response
     */
  }, {
    key: "getVoucherWithHttpInfo",
    value: function getVoucherWithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVoucher");
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
      var returnType = _VoucherViewModel["default"];
      return this.apiClient.callApi('/v1/vouchers/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Gets the voucher by GUID.
     * @param {String} id Represents the unique Id of vocher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VoucherViewModel}
     */
  }, {
    key: "getVoucher",
    value: function getVoucher(id) {
      return this.getVoucherWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a paginated list of vouchers.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Represents the name of voucher.  For example, the name of a voucher can be like 'RC-01-45'.
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VoucherViewModelGetAllModel} and HTTP response
     */
  }, {
    key: "getVouchersWithHttpInfo",
    value: function getVouchersWithHttpInfo(opts) {
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
      var returnType = _VoucherViewModelGetAllModel["default"];
      return this.apiClient.callApi('/v1/vouchers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a paginated list of vouchers.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Represents the name of voucher.  For example, the name of a voucher can be like 'RC-01-45'.
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VoucherViewModelGetAllModel}
     */
  }, {
    key: "getVouchers",
    value: function getVouchers(opts) {
      return this.getVouchersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/SendElectronicVoucherCommand} opts.sendElectronicVoucherCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendElectronicVoucherViewModel} and HTTP response
     */
  }, {
    key: "sendElectronicVoucherWithHttpInfo",
    value: function sendElectronicVoucherWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sendElectronicVoucher");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _SendElectronicVoucherViewModel["default"];
      return this.apiClient.callApi('/v1/vouchers/{id}/stamp', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/SendElectronicVoucherCommand} opts.sendElectronicVoucherCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendElectronicVoucherViewModel}
     */
  }, {
    key: "sendElectronicVoucher",
    value: function sendElectronicVoucher(id, opts) {
      return this.sendElectronicVoucherWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Send an invoice by email
     * @param {String} id Represents the Guid of the Invoice.
     * @param {Object} opts Optional parameters
     * @param {module:model/SendVoucherByEmailCommand} opts.sendVoucherByEmailCommand Contains the parameters for sending the Email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MailViewModel} and HTTP response
     */
  }, {
    key: "sendVoucherByEmailWithHttpInfo",
    value: function sendVoucherByEmailWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sendVoucherByEmail");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _MailViewModel["default"];
      return this.apiClient.callApi('/v1/vouchers/{id}/mail', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Send an invoice by email
     * @param {String} id Represents the Guid of the Invoice.
     * @param {Object} opts Optional parameters
     * @param {module:model/SendVoucherByEmailCommand} opts.sendVoucherByEmailCommand Contains the parameters for sending the Email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MailViewModel}
     */
  }, {
    key: "sendVoucherByEmail",
    value: function sendVoucherByEmail(id, opts) {
      return this.sendVoucherByEmailWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return VoucherApi;
}();
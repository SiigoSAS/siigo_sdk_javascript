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


import ApiClient from "../ApiClient";
import CreateVoucherCommand from '../model/CreateVoucherCommand';
import VoucherViewModel from '../model/VoucherViewModel';
import VoucherViewModelGetAllModel from '../model/VoucherViewModelGetAllModel';

/**
* Voucher service.
* @module api/VoucherApi
* @version v1
*/
export default class VoucherApi {

    /**
    * Constructs a new VoucherApi. 
    * @alias module:api/VoucherApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a voucher.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateVoucherCommand} opts.createVoucherCommand Represents the request with the voucher information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VoucherViewModel} and HTTP response
     */
    createVoucherWithHttpInfo(opts) {
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
      let returnType = VoucherViewModel;
      return this.apiClient.callApi(
        '/v1/vouchers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a voucher.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateVoucherCommand} opts.createVoucherCommand Represents the request with the voucher information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VoucherViewModel}
     */
    createVoucher(opts) {
      return this.createVoucherWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the voucher by GUID.
     * @param {String} id Represents the unique Id of vocher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VoucherViewModel} and HTTP response
     */
    getVoucherWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVoucher");
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
      let returnType = VoucherViewModel;
      return this.apiClient.callApi(
        '/v1/vouchers/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the voucher by GUID.
     * @param {String} id Represents the unique Id of vocher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VoucherViewModel}
     */
    getVoucher(id) {
      return this.getVoucherWithHttpInfo(id)
        .then(function(response_and_data) {
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
    getVouchersWithHttpInfo(opts) {
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
      let returnType = VoucherViewModelGetAllModel;
      return this.apiClient.callApi(
        '/v1/vouchers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getVouchers(opts) {
      return this.getVouchersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

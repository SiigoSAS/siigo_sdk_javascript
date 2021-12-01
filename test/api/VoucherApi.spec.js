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

 (function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define([
      "expect.js",
      process.cwd() + "/src/index",
      process.cwd() + "/test/app",
    ], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(
      require("expect.js"),
      require(process.cwd() + "/src/index"),
      require(process.cwd() + "/test/app.js")
    );
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SiigoApi, root.app);
  }
})(this, function (expect, SiigoApi, app) {
  "use strict";

  var instance;

  before(function() {
    SiigoApi = app._test.initialize(SiigoApi);
    instance = new SiigoApi.VoucherApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  };
  var document={};
  var id="";
  let result={};
  let data = {
    "document": {
      "id": 115056
    },
    "date": "2021-04-22",
    "type": "AdvancePayment",
    "customer": {
      "identification": "1635287303325",
      "branch_office": 0
    },
    "currency": {
      "code": "USD",
      "exchange_rate": 3825.03
    },
    
    "payment": {
      "id": 34450,
      "value": 1000.0
    },
    "observations": "Observaciones"
  }

  describe('VoucherApi', function() {
    describe('createVoucher', function() {
      it('should call createVoucher successfully', async function() {
        let opts = data;
        try {
          result = await instance.createVoucherWithHttpInfo(opts);
          id = result.response.body.id;
          document=result.response.body;
        } catch (error) {
          console.error(error);
        }  
        expect(result.response.statusCode).to.be(201); 
        expect(result.response.body.id).to.be(document.id)
        expect(result.response.body.number).to.be(document.number)
        expect(result.response.body.name).to.be(document.name)
        expect(result.response.body.type).to.be(document.type)
        expect(result.response.body.observations).to.be(document.observations) 
      });
    });
    describe('getVoucher', function() {
      it('should call getVoucher successfully', async function() {
        try {
          result = await instance.getVoucherWithHttpInfo(id);
        } catch (error) {
          console.error(error);
        }
        expect(result.response.statusCode).to.be(200);
        expect(result.response.body.id).to.be(document.id)
        expect(result.response.body.number).to.be(document.number)
        expect(result.response.body.name).to.be(document.name)
        expect(result.response.body.type).to.be(document.type)
        expect(result.response.body.observations).to.be(document.observations) 
      });
    });
    describe('getVouchers', function() {
      it('should call getVouchers successfully', async function() {
        let opts = {}
        try {
          result = await instance.getVouchersWithHttpInfo(opts);          
        } catch (error) {
          console.error(error);
        }
        expect(result.response.statusCode).to.be(200);
        expect(result.response.body.results[0].id).to.be(document.id)
        expect(result.response.body.results[0].number).to.be(document.number)
        expect(result.response.body.results[0].name).to.be(document.name)
        expect(result.response.body.results[0].type).to.be(document.type)
        expect(result.response.body.results[0].observations).to.be(document.observations)
      });
    });
  });

});
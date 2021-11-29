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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index', process.cwd()+'/test/app'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'), require(process.cwd()+'/test/app.js'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SiigoApi, root.app);
  }
}(this, function(expect, SiigoApi, app) {
  'use strict';

  var instance;

  before(function() {
    SiigoApi = app._test.initialize(SiigoApi);
    instance = new SiigoApi.CreditNoteApi();
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
  }

  var result = {};
  var id = "";
  var data = {
    "document": {
        "id": 115064
    },
    "date": "2020-12-04",
    "invoice": "38866804-ad85-43b6-a7c9-7a6c24e42f76",
    "items": [
        {
            "code": "1215",
            "quantity": "1",
            "price": 1000
        }
    ],
    "payments": [
        {
            "id": 34450,
            "value": 1000
        }
    ]
}
  describe('CreditNoteApi', function() {
    describe('createCreditNote', function() {
      it('should call createCreditNote successfully', async function() {
        let opts = data;
        try {
          result = await instance.createCreditNoteWithHttpInfo(opts);
          id = result.response.body.id;
        } catch (error) {
          console.error(error.response.body);
        }
        expect(result.response.statusCode).to.be(201); 
        expect(result.response.body.id).to.be(id); 
      });
    });
    describe('getCreditNote', function() {
      it('should call getCreditNote successfully', async function() {
        try {      
          result = await instance.getCreditNoteWithHttpInfo(id);
        } catch (error) {
          console.error(error);
        }
        expect(result.response.statusCode).to.be(200); 
        expect(result.response.body.id).to.be(id);
      });
    });
    describe('getCreditNotePDF', function() {
      it('should call getCreditNotePDF successfully', async function() {
        try {      
          result = await instance.getCreditNotePDFWithHttpInfo(id);
        } catch (error) {
          console.error(error);
        }
        expect(result.response.statusCode).to.be(200); 
        expect(result.response.body.id).to.be(id);
      });
    }); 
    describe('getCreditNotes', function() {
      it('should call getCreditNotes successfully', async function() {
        let invoice = "";
        try {
          result = await instance.getCreditNotesWithHttpInfo();
          id = result.response.body.results[0].id;
          invoice = result.response.body.results[0].invoice.id;
        } catch (error) {
          console.error(error.response.body);
        }
        expect(result.response.statusCode).to.be(200);
        expect(result.response.body.results[0].id).to.be(id);
        expect(result.response.body.results[0].invoice.id).to.be(invoice);
      });
    });
  });
}));
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
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SiigoApi);
  }
}(this, function(expect, SiigoApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
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

  describe('CreateTestBalanceByThirdpartyCommand', function() {
    it('should create an instance of CreateTestBalanceByThirdpartyCommand', function() {
      // uncomment below and update the code to test CreateTestBalanceByThirdpartyCommand
      //var instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
      //expect(instance).to.be.a(SiigoApi.CreateTestBalanceByThirdpartyCommand);
    });

    it('should have the property accountStart (base name: "account_start")', function() {
      // uncomment below and update the code to test the property accountStart
      //var instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
      //expect(instance).to.be();
    });

    it('should have the property accountEnd (base name: "account_end")', function() {
      // uncomment below and update the code to test the property accountEnd
      //var instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
      //expect(instance).to.be();
    });

    it('should have the property monthStart (base name: "month_start")', function() {
      // uncomment below and update the code to test the property monthStart
      //var instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
      //expect(instance).to.be();
    });

    it('should have the property monthEnd (base name: "month_end")', function() {
      // uncomment below and update the code to test the property monthEnd
      //var instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
      //expect(instance).to.be();
    });

    it('should have the property includesTaxDifference (base name: "includes_tax_difference")', function() {
      // uncomment below and update the code to test the property includesTaxDifference
      //var instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instance = new SiigoApi.CreateTestBalanceByThirdpartyCommand();
      //expect(instance).to.be();
    });

  });

}));

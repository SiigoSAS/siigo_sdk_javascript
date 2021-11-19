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
    instance = new SiigoApi.VouchersViewModel();
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

  describe('VouchersViewModel', function() {
    it('should create an instance of VouchersViewModel', function() {
      // uncomment below and update the code to test VouchersViewModel
      var instance = new SiigoApi.VouchersViewModel();
      expect(instance).to.be.a(SiigoApi.VouchersViewModel);
    });

    it('should have the property pagination (base name: "pagination")', function() {
      // uncomment below and update the code to test the property pagination
      var instance = new SiigoApi.VouchersViewModel();
      expect(instance.pagination).to.be(undefined);
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      var instance = new SiigoApi.VouchersViewModel();
      expect(instance.results).to.be(undefined);
    });

    it('should have the property links (base name: "__links")', function() {
      // uncomment below and update the code to test the property links
      var instance = new SiigoApi.VouchersViewModel();
      expect(instance.__links).to.be(undefined);
    });

  });

}));

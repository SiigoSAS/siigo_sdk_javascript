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
    instance = new SiigoApi.CustomerCommand();
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

  describe('CustomerCommand', function() {
    it('should create an instance of CustomerCommand', function() {
      // uncomment below and update the code to test CustomerCommand
      var instance = new SiigoApi.CustomerCommand();
      expect(instance).to.be.a(SiigoApi.CustomerCommand);
    });

    it('should have the property personType (base name: "person_type")', function() {
      // uncomment below and update the code to test the property personType
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.person_type).to.be(undefined);
    });

    it('should have the property idType (base name: "id_type")', function() {
      // uncomment below and update the code to test the property idType
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.id_type).to.be(undefined);
    });

    it('should have the property identification (base name: "identification")', function() {
      // uncomment below and update the code to test the property identification
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.identification).to.be(undefined);
    });

    it('should have the property checkDigit (base name: "check_digit")', function() {
      // uncomment below and update the code to test the property checkDigit
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.check_digit).to.be(undefined);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.name).to.be(undefined);
    });

    it('should have the property commercialName (base name: "commercial_name")', function() {
      // uncomment below and update the code to test the property commercialName
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.commercial_name).to.be(undefined);
    });

    it('should have the property branchOffice (base name: "branch_office")', function() {
      // uncomment below and update the code to test the property branchOffice
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.branch_office).to.be(undefined);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.active).to.be(undefined);
    });

    it('should have the property vatResponsible (base name: "vat_responsible")', function() {
      // uncomment below and update the code to test the property vatResponsible
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.vat_responsible).to.be(undefined);
    });

    it('should have the property fiscalResponsibilities (base name: "fiscal_responsibilities")', function() {
      // uncomment below and update the code to test the property fiscalResponsibilities
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.fiscal_responsibilities).to.be(undefined);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.address).to.be(undefined);
    });

    it('should have the property phones (base name: "phones")', function() {
      // uncomment below and update the code to test the property phones
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.phones).to.be(undefined);
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.contacts).to.be(undefined);
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.comments).to.be(undefined);
    });

    it('should have the property relatedUsers (base name: "related_users")', function() {
      // uncomment below and update the code to test the property relatedUsers
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.related_users).to.be(undefined);
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.custom_fields).to.be(undefined);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      var instance = new SiigoApi.CustomerCommand();
      expect(instance.type).to.be(undefined);
    });

  });

}));

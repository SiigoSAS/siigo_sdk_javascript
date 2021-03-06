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
    instance = new SiigoApi.ProductsModel();
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

  describe('ProductsModel', function() {
    it('should create an instance of ProductsModel', function() {
      // uncomment below and update the code to test ProductsModel
      var instance = new SiigoApi.ProductsModel();
      expect(instance).to.be.a(SiigoApi.ProductsModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      var instance = new SiigoApi.ProductsModel();
      expect(instance.id).to.be(undefined);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      var instance = new SiigoApi.ProductsModel();
      expect(instance.code).to.be(undefined);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      var instance = new SiigoApi.ProductsModel();
      expect(instance.name).to.be(undefined);
    });

    it('should have the property accountGroup (base name: "account_group")', function() {
      // uncomment below and update the code to test the property accountGroup
      var instance = new SiigoApi.ProductsModel();
      expect(instance.account_group).to.be(undefined);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      var instance = new SiigoApi.ProductsModel();
      expect(instance.type).to.be(undefined);
    });

    it('should have the property stockControl (base name: "stock_control")', function() {
      // uncomment below and update the code to test the property stockControl
      var instance = new SiigoApi.ProductsModel();
      expect(instance.stock_control).to.be(undefined);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      var instance = new SiigoApi.ProductsModel();
      expect(instance.active).to.be(undefined);
    });

    it('should have the property taxClassification (base name: "tax_classification")', function() {
      // uncomment below and update the code to test the property taxClassification
      var instance = new SiigoApi.ProductsModel();
      expect(instance.tax_classification).to.be(undefined);
    });

    it('should have the property taxIncluded (base name: "tax_included")', function() {
      // uncomment below and update the code to test the property taxIncluded
      var instance = new SiigoApi.ProductsModel();
      expect(instance.tax_included).to.be(undefined);
    });

    it('should have the property taxConsumptionValue (base name: "tax_consumption_value")', function() {
      // uncomment below and update the code to test the property taxConsumptionValue
      var instance = new SiigoApi.ProductsModel();
      expect(instance.tax_consumption_value).to.be(undefined);
    });

    it('should have the property taxes (base name: "taxes")', function() {
      // uncomment below and update the code to test the property taxes
      var instance = new SiigoApi.ProductsModel();
      expect(instance.taxes).to.be(undefined);
    });

    it('should have the property prices (base name: "prices")', function() {
      // uncomment below and update the code to test the property prices
      var instance = new SiigoApi.ProductsModel();
      expect(instance.prices).to.be(undefined);
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      var instance = new SiigoApi.ProductsModel();
      expect(instance.unit).to.be(undefined);
    });

    it('should have the property unitLabel (base name: "unit_label")', function() {
      // uncomment below and update the code to test the property unitLabel
      var instance = new SiigoApi.ProductsModel();
      expect(instance.unit_label).to.be(undefined);
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      var instance = new SiigoApi.ProductsModel();
      expect(instance.reference).to.be(undefined);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      var instance = new SiigoApi.ProductsModel();
      expect(instance.description).to.be(undefined);
    });

    it('should have the property additionalFields (base name: "additional_fields")', function() {
      // uncomment below and update the code to test the property additionalFields
      var instance = new SiigoApi.ProductsModel();
      expect(instance.additional_fields).to.be(undefined);
    });

    it('should have the property availableQuantity (base name: "available_quantity")', function() {
      // uncomment below and update the code to test the property availableQuantity
      var instance = new SiigoApi.ProductsModel();
      expect(instance.available_quantity).to.be(undefined);
    });

    it('should have the property warehouses (base name: "warehouses")', function() {
      // uncomment below and update the code to test the property warehouses
      var instance = new SiigoApi.ProductsModel();
      expect(instance.warehouses).to.be(undefined);
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      var instance = new SiigoApi.ProductsModel();
      expect(instance.metadata).to.be(undefined);
    });

  });

}));

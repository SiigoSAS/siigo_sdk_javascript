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

import app from "../app.js";
import expect from "expect.js";

let instance;

before(async function() {
  let SiigoAPI = await app.initialize();
  instance = new SiigoAPI.DocumentBalanceApi();
});

describe('DocumentBalanceApi', function() {
  describe('getDocumentBalances', function() {
    it('should call getDocumentBalances successfully', async function() {
      try {
        let result = await instance.getDocumentBalancesWithHttpInfo({});
        expect(result.response.statusCode).to.be.greaterThan(199);
        expect(result.response.statusCode).to.be.lessThan(300);
      } catch (error) {
        expect(error.status).to.be.greaterThan(399);
        expect(error.status).to.be.lessThan(500);
      }      
    });
  });
});


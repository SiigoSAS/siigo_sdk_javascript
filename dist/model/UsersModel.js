"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

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
 * The UsersModel model module.
 * @module model/UsersModel
 * @version v1
 */
var UsersModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsersModel</code>.
   * @alias module:model/UsersModel
   */
  function UsersModel() {
    (0, _classCallCheck2["default"])(this, UsersModel);
    UsersModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(UsersModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UsersModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsersModel} obj Optional instance to populate.
     * @return {module:model/UsersModel} The populated <code>UsersModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsersModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('identification')) {
          obj['identification'] = _ApiClient["default"].convertToType(data['identification'], 'String');
        }
      }

      return obj;
    }
  }]);
  return UsersModel;
}();
/**
 * Represents the id of the user, the value of this field must be an integer  number that represents the unique id of the user. For example '35071'.
 * @member {Number} id
 */


UsersModel.prototype['id'] = undefined;
/**
 * Represents the user name. This value can be an alphanumeric name  like 'James' or 'DavidYepes27'.
 * @member {String} username
 */

UsersModel.prototype['username'] = undefined;
/**
 * Represents the first name of the user. For example, 'James David'.
 * @member {String} first_name
 */

UsersModel.prototype['first_name'] = undefined;
/**
 * Represents the last name of the user. For example, 'Freeman Smith'.
 * @member {String} last_name
 */

UsersModel.prototype['last_name'] = undefined;
/**
 * Represents the email of the user. This value can be an alphanumeric email  like 'user@test.com' or 'james.freeman@gmail.com'.
 * @member {String} email
 */

UsersModel.prototype['email'] = undefined;
/**
 * Represents if user status is activated or disabled,   the value of this status will be true (for activated) or false (disabled).  By default, this field will be true.
 * @member {Boolean} active
 */

UsersModel.prototype['active'] = undefined;
/**
 * Represents the identification number of the user. For example '13832082'.
 * @member {String} identification
 */

UsersModel.prototype['identification'] = undefined;
var _default = UsersModel;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _AdditionalFieldsCommand = _interopRequireDefault(require("./AdditionalFieldsCommand.js"));
var _CurrencyCommand = _interopRequireDefault(require("./CurrencyCommand.js"));
var _CustomerCommand = _interopRequireDefault(require("./CustomerCommand.js"));
var _DocumentCommand = _interopRequireDefault(require("./DocumentCommand.js"));
var _GlobalTaxCommand = _interopRequireDefault(require("./GlobalTaxCommand.js"));
var _ItemsCommand = _interopRequireDefault(require("./ItemsCommand.js"));
var _MailCommand = _interopRequireDefault(require("./MailCommand.js"));
var _PaymentsCommand = _interopRequireDefault(require("./PaymentsCommand.js"));
var _RetentionsCommand = _interopRequireDefault(require("./RetentionsCommand.js"));
var _StampCommand = _interopRequireDefault(require("./StampCommand.js"));
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
 * The CreateInvoiceCommand model module.
 * @module model/CreateInvoiceCommand
 * @version v1
 */
var CreateInvoiceCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateInvoiceCommand</code>.
   * @alias module:model/CreateInvoiceCommand
   */
  function CreateInvoiceCommand() {
    (0, _classCallCheck2["default"])(this, CreateInvoiceCommand);
    CreateInvoiceCommand.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(CreateInvoiceCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateInvoiceCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInvoiceCommand} obj Optional instance to populate.
     * @return {module:model/CreateInvoiceCommand} The populated <code>CreateInvoiceCommand</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateInvoiceCommand();
        if (data.hasOwnProperty('document')) {
          obj['document'] = _DocumentCommand["default"].constructFromObject(data['document']);
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
        if (data.hasOwnProperty('customer')) {
          obj['customer'] = _CustomerCommand["default"].constructFromObject(data['customer']);
        }
        if (data.hasOwnProperty('cost_center')) {
          obj['cost_center'] = _ApiClient["default"].convertToType(data['cost_center'], 'Number');
        }
        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _CurrencyCommand["default"].constructFromObject(data['currency']);
        }
        if (data.hasOwnProperty('seller')) {
          obj['seller'] = _ApiClient["default"].convertToType(data['seller'], 'Number');
        }
        if (data.hasOwnProperty('retentions')) {
          obj['retentions'] = _ApiClient["default"].convertToType(data['retentions'], [_RetentionsCommand["default"]]);
        }
        if (data.hasOwnProperty('advance_payment')) {
          obj['advance_payment'] = _ApiClient["default"].convertToType(data['advance_payment'], 'Number');
        }
        if (data.hasOwnProperty('observations')) {
          obj['observations'] = _ApiClient["default"].convertToType(data['observations'], 'String');
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ItemsCommand["default"]]);
        }
        if (data.hasOwnProperty('payments')) {
          obj['payments'] = _ApiClient["default"].convertToType(data['payments'], [_PaymentsCommand["default"]]);
        }
        if (data.hasOwnProperty('additional_fields')) {
          obj['additional_fields'] = _AdditionalFieldsCommand["default"].constructFromObject(data['additional_fields']);
        }
        if (data.hasOwnProperty('stamp')) {
          obj['stamp'] = _StampCommand["default"].constructFromObject(data['stamp']);
        }
        if (data.hasOwnProperty('mail')) {
          obj['mail'] = _MailCommand["default"].constructFromObject(data['mail']);
        }
        if (data.hasOwnProperty('global_charges')) {
          obj['global_charges'] = _ApiClient["default"].convertToType(data['global_charges'], [_GlobalTaxCommand["default"]]);
        }
        if (data.hasOwnProperty('global_discounts')) {
          obj['global_discounts'] = _ApiClient["default"].convertToType(data['global_discounts'], [_GlobalTaxCommand["default"]]);
        }
      }
      return obj;
    }
  }]);
  return CreateInvoiceCommand;
}();
/**
 * @member {module:model/DocumentCommand} document
 */
CreateInvoiceCommand.prototype['document'] = undefined;

/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */
CreateInvoiceCommand.prototype['number'] = undefined;

/**
 * Contains information about document type,   document type Id, and the sequential number of the document.  For example, 'FV-2-22' indicates that its document type is an 'invoice',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */
CreateInvoiceCommand.prototype['name'] = undefined;

/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'.  For example, '2021-10-31' to indicate the date 'October 31st, 2021'.
 * @member {String} date
 */
CreateInvoiceCommand.prototype['date'] = undefined;

/**
 * @member {module:model/CustomerCommand} customer
 */
CreateInvoiceCommand.prototype['customer'] = undefined;

/**
 * Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} cost_center
 */
CreateInvoiceCommand.prototype['cost_center'] = undefined;

/**
 * @member {module:model/CurrencyCommand} currency
 */
CreateInvoiceCommand.prototype['currency'] = undefined;

/**
 * Represents the Id of the seller associated with the invoice.   For example, the id '629' can represent a seller called 'Mike'.
 * @member {Number} seller
 */
CreateInvoiceCommand.prototype['seller'] = undefined;

/**
 * Contains a list information about every Retention associated with invoice.
 * @member {Array.<module:model/RetentionsCommand>} retentions
 */
CreateInvoiceCommand.prototype['retentions'] = undefined;

/**
 * Represent the Advance Payment. For example, an advance payment of 33.3 dollars  for a product of 40 dollars.
 * @member {Number} advance_payment
 */
CreateInvoiceCommand.prototype['advance_payment'] = undefined;

/**
 * Represent additional comments in document.
 * @member {String} observations
 */
CreateInvoiceCommand.prototype['observations'] = undefined;

/**
 * Contains a list of items associated with the invoice.
 * @member {Array.<module:model/ItemsCommand>} items
 */
CreateInvoiceCommand.prototype['items'] = undefined;

/**
 * Contains a list with payments types associated with invoice.
 * @member {Array.<module:model/PaymentsCommand>} payments
 */
CreateInvoiceCommand.prototype['payments'] = undefined;

/**
 * @member {module:model/AdditionalFieldsCommand} additional_fields
 */
CreateInvoiceCommand.prototype['additional_fields'] = undefined;

/**
 * @member {module:model/StampCommand} stamp
 */
CreateInvoiceCommand.prototype['stamp'] = undefined;

/**
 * @member {module:model/MailCommand} mail
 */
CreateInvoiceCommand.prototype['mail'] = undefined;

/**
 * Contains information about the global taxes charges associated with document type.
 * @member {Array.<module:model/GlobalTaxCommand>} global_charges
 */
CreateInvoiceCommand.prototype['global_charges'] = undefined;

/**
 * Contains information about the global taxes discounts associated with document type.
 * @member {Array.<module:model/GlobalTaxCommand>} global_discounts
 */
CreateInvoiceCommand.prototype['global_discounts'] = undefined;
var _default = exports["default"] = CreateInvoiceCommand;

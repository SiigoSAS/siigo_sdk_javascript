"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CurrencyCommand = _interopRequireDefault(require("./CurrencyCommand"));
var _DocumentCommand = _interopRequireDefault(require("./DocumentCommand"));
var _JournalEntryItem = _interopRequireDefault(require("./JournalEntryItem"));
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
 * The CreateJournalEntryCommand model module.
 * @module model/CreateJournalEntryCommand
 * @version v1
 */
var CreateJournalEntryCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateJournalEntryCommand</code>.
   * @alias module:model/CreateJournalEntryCommand
   */
  function CreateJournalEntryCommand() {
    (0, _classCallCheck2["default"])(this, CreateJournalEntryCommand);
    CreateJournalEntryCommand.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(CreateJournalEntryCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateJournalEntryCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateJournalEntryCommand} obj Optional instance to populate.
     * @return {module:model/CreateJournalEntryCommand} The populated <code>CreateJournalEntryCommand</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateJournalEntryCommand();
        if (data.hasOwnProperty('document')) {
          obj['document'] = _DocumentCommand["default"].constructFromObject(data['document']);
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _CurrencyCommand["default"].constructFromObject(data['currency']);
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_JournalEntryItem["default"]]);
        }
        if (data.hasOwnProperty('observations')) {
          obj['observations'] = _ApiClient["default"].convertToType(data['observations'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateJournalEntryCommand;
}();
/**
 * @member {module:model/DocumentCommand} document
 */
CreateJournalEntryCommand.prototype['document'] = undefined;

/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */
CreateJournalEntryCommand.prototype['number'] = undefined;

/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'.  For example, '2021-10-10' to indicate the date 'October 10th, 2021'.
 * @member {String} date
 */
CreateJournalEntryCommand.prototype['date'] = undefined;

/**
 * @member {module:model/CurrencyCommand} currency
 */
CreateJournalEntryCommand.prototype['currency'] = undefined;

/**
 * Contains a list of items associated with the journal.
 * @member {Array.<module:model/JournalEntryItem>} items
 */
CreateJournalEntryCommand.prototype['items'] = undefined;

/**
 * Represent additional comments in document.
 * @member {String} observations
 */
CreateJournalEntryCommand.prototype['observations'] = undefined;
var _default = exports["default"] = CreateJournalEntryCommand;
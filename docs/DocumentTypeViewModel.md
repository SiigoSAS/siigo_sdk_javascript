# SiigoApi.DocumentTypeViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Represents the id of the document type, the value of this field must be an integer  number that represents the unique id of the document type. For example &#39;5636&#39;. | [optional] 
**code** | **String** | Represents the document type code. This value must be an integer  code that will represent the code id of the document type. For example, &#39;1&#39;. | [optional] 
**name** | **String** | Represents the name of the document type. This value can be an alphanumeric name  like &#39;Factura&#39; (invoice). | [optional] 
**description** | **String** | Represents the description of the document type. For example, &#39;This is a description&#39;. | [optional] 
**type** | **String** | Represents the document types. This type can be &#39;FV&#39; to invoices, &#39;RC&#39; to vouchers,   &#39;NC&#39; to credit notes, &#39;FC&#39; to purchases or, &#39;CC&#39; to journals. | [optional] 
**active** | **Boolean** | Represents if document type status is activated or disabled,   the value of this status will be true (for activated) or false (disabled).  By default, this field will be true. | [optional] 
**sellerByItem** | **Boolean** | Represents if the document type Handles a seller by item or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**costCenter** | **Boolean** | Represents if the document type Handles a cost center or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**costCenterMandatory** | **Boolean** | Represents if the document type Handles a required cost center or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**costCenterDefault** | **Number** | Represents the id number of the default cost center.  By default, this field will be null. | [optional] 
**automaticNumber** | **Boolean** | Represents if the document type Handles automatic numbering or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**consecutive** | **Number** | Represents the consecutive number of the document type. | [optional] 
**discountType** | **String** | Represents if the document type Manages a percentage or a value to discounts.  This field can be &#39;Percentage&#39; or &#39;Value&#39;. | [optional] 
**decimals** | **Boolean** | Represents if the document type handles Handles decimals or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**advancePayment** | **Boolean** | Represents if the document type handles Manage copayments/advances or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**reteiva** | **Boolean** | Represents if the document type handles &#39;Reteiva&#39; or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**reteica** | **Boolean** | Represents if the document type handles &#39;Reteica&#39; or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**selfWithholding** | **Boolean** | Represents if the document type handles self-withholding decree 2201 or not.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**selfWithholdingLimit** | **Number** | Represents the self withholding limit, the self withholding value will be applied only for values greater than the specified limit.  By default, this field will be null. | [optional] 
**electronicType** | **String** | Represents the type of the invoice. This type can be &#39;NoElectronic&#39;,   &#39;Electronicvoice&#39;, &#39;ContingencyInvoice&#39; or &#39;ExportInvoice&#39;. | [optional] 
**officialBook** | **String** | Represents the official book type of the Journals. This value can be &#39;0&#39; to sales book,  &#39;1&#39; to sales returns book, &#39;2&#39; to purchase book, or &#39;3&#39; to purchase return book. | [optional] 
**documentSupport** | **Boolean** | Represents if the Journals supports documents or not. | [optional] 
**prefix** | **String** | Invoice prefix to which the credit or payent will be applied. For example, &#39;FV-1&#39;. | [optional] 
**globalDiscounts** | [**[DocumentTypeTaxModel]**](DocumentTypeTaxModel.md) | Contains information about the global discounts associated to document type. | [optional] 
**globalCharges** | [**[DocumentTypeTaxModel]**](DocumentTypeTaxModel.md) | Contains information about the global charges associated to document type. | [optional] 
**iSR** | **Boolean** | Represent if the document allows ISR. This field is only for Mexico. | [optional] 



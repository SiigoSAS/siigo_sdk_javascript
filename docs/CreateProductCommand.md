# SiigoApi.CreateProductCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **String** | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | [optional] 
**code** | **String** | Represents the identification code of the product. This value can be an alphanumeric  code that will represent the code id of the cost center.  For example, this name can be &#39;Item-1&#39; or &#39;toy007&#39;. | [optional] 
**name** | **String** | Represents the name of product or service. | [optional] 
**accountGroup** | **Number** | Represents the id of inventory classification. | [optional] 
**type** | **String** | Represents the type of product. This product could be of type &#39;Product&#39;, &#39;Service&#39; or &#39;Consumer Good&#39;,  by the default this field will be &#39;Product&#39;. | [optional] 
**stockControl** | **Boolean** | Represents the inventory control.  This field can be &#39;true&#39; or &#39;false&#39;, by the fault this field will be false. | [optional] 
**active** | **Boolean** | Represents the status of product.  This field can be &#39;true&#39; or &#39;false&#39;, by default this field will be true. | [optional] 
**taxClassification** | **String** | Represent the tax classification, this field could be &#39;Taxed&#39;, &#39;Exempt&#39; or &#39;Excluded&#39;. | [optional] 
**taxIncluded** | **Boolean** | Represents whether this product has VAT included.  This field can be &#39;true&#39; or &#39;false&#39;. | [optional] 
**taxConsumptionValue** | **Number** | Represents value of consumption tax. | [optional] 
**taxes** | [**[ProductTaxesCommand]**](ProductTaxesCommand.md) | Contains a list with ids of taxes associated to item. | [optional] 
**prices** | [**[PricesProducts]**](PricesProducts.md) | Contains a list with &#39;prices list&#39; of product. Every product can have up to 12 price list. | [optional] 
**unit** | **String** | Represents the id of an unit of measurement, by default this field will be 94 only in Colombia | [optional] 
**unitLabel** | **String** | Represents Unit of measure for invoice printing. | [optional] 
**reference** | **String** | Represents the Reference or factory code of the product or service. | [optional] 
**description** | **String** | Represents product description. | [optional] 
**additionalFields** | [**AdditionalFieldsProducts**](AdditionalFieldsProducts.md) |  | [optional] 
**key** | **String** | Represents the key of the product, mandatory only in Mexico | [optional] 



# SiigoApi.ProductApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductApi.md#createProduct) | **POST** /v1/products | Creates a product.
[**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /v1/products/{id} | Deletes the product by GUID.
[**getProduct**](ProductApi.md#getProduct) | **GET** /v1/products/{id} | Gets the product by GUID.
[**getProducts**](ProductApi.md#getProducts) | **GET** /v1/products | Returns a paginated list of products.
[**updateProduct**](ProductApi.md#updateProduct) | **PUT** /v1/products/{id} | Updates the product by GUID.




## createProduct

> ProductModel createProduct(opts)

Creates a product.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let opts = new SiigoApi.CreateProductCommand(); // CreateProductCommand | Represents the request with the product information.

apiInstance.createProduct(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.ProductApi();
    let opts = new SiigoApi.CreateProductCommand(); // CreateProductCommand | Represents the request with the product information.

    const data = await apiInstance.createProduct(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductCommand** | [**CreateProductCommand**](CreateProductCommand.md)| Represents the request with the product information. | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## deleteProduct

> ProductDeleteViewModel deleteProduct(id)

Deletes the product by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let id = "id_example"; // String | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.deleteProduct(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.ProductApi();
    let id = "id_example"; // String | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.deleteProduct(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**ProductDeleteViewModel**](ProductDeleteViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getProduct

> ProductModel getProduct(id)

Gets the product by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let id = "id_example"; // String | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.getProduct(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.ProductApi();
    let id = "id_example"; // String | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.getProduct(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getProducts

> ProductModelGetAllModel getProducts(opts)

Returns a paginated list of products.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let opts = {
  'code': Item-1, // String | Represents the identification code of the product. This value can be an alphanumeric  code that will represent the code id of the cost center.  For example, this name can be 'Item-1' or 'toy007'.
  'accountGroup': 1253, // String | Represents the id of inventory classification
  'type': Product, // String | Represents the type of product. This product could be of type 'Product', 'Service' or 'Consumer Good',  by the default this field will be Product.
  'stockControl': false, // String | Represents the inventory control, by the fault this field will be false.
  'active': true, // String | Represents the status of product, by default this field will be true.
  'ids': 63f918c2-ca65-4edc-a7db-66bcdd5159fb, // String | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.  Up to 20 id can be filtered at a time:  https://api.siigo.com/v1/products?ids={GUID},{GUID}
  'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
  'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
  'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
  'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
  'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
  'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
  'page': 1, // Number | Represents the current page
  'pageSize': 25 // Number | Represents the number of results per page.
};

apiInstance.getProducts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.ProductApi();
    let opts = {
      'code': Item-1, // String | Represents the identification code of the product. This value can be an alphanumeric  code that will represent the code id of the cost center.  For example, this name can be 'Item-1' or 'toy007'.
      'accountGroup': 1253, // String | Represents the id of inventory classification
      'type': Product, // String | Represents the type of product. This product could be of type 'Product', 'Service' or 'Consumer Good',  by the default this field will be Product.
      'stockControl': false, // String | Represents the inventory control, by the fault this field will be false.
      'active': true, // String | Represents the status of product, by default this field will be true.
      'ids': 63f918c2-ca65-4edc-a7db-66bcdd5159fb, // String | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.  Up to 20 id can be filtered at a time:  https://api.siigo.com/v1/products?ids={GUID},{GUID}
      'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
      'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
      'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
      'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
      'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
      'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
      'page': 1, // Number | Represents the current page
      'pageSize': 25 // Number | Represents the number of results per page.
    };

    const data = await apiInstance.getProducts(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Represents the identification code of the product. This value can be an alphanumeric  code that will represent the code id of the cost center.  For example, this name can be &#39;Item-1&#39; or &#39;toy007&#39;. | [optional] 
 **accountGroup** | **String**| Represents the id of inventory classification | [optional] 
 **type** | **String**| Represents the type of product. This product could be of type &#39;Product&#39;, &#39;Service&#39; or &#39;Consumer Good&#39;,  by the default this field will be Product. | [optional] 
 **stockControl** | **String**| Represents the inventory control, by the fault this field will be false. | [optional] 
 **active** | **String**| Represents the status of product, by default this field will be true. | [optional] 
 **ids** | **String**| Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.  Up to 20 id can be filtered at a time:  https://api.siigo.com/v1/products?ids&#x3D;{GUID},{GUID} | [optional] 
 **createdStart** | **Date**| Returns results where the \&quot;created\&quot; field is greater or equal than the entered date | [optional] 
 **createdEnd** | **Date**| Returns results where the \&quot;created\&quot; field is less or equal than the entered date | [optional] 
 **dateStart** | **Date**| Returns results with date greater or equal than the \&quot;date_start\&quot; date | [optional] 
 **dateEnd** | **Date**| Returns results with date less or equal than the \&quot;date_end\&quot; date | [optional] 
 **updatedStart** | **Date**| Returns results where the \&quot;last_updated\&quot; field is greater or equal than the entered date | [optional] 
 **updatedEnd** | **Date**| Returns results where the \&quot;last_updated\&quot; field is less or equal than the entered date | [optional] 
 **page** | **Number**| Represents the current page | [optional] 
 **pageSize** | **Number**| Represents the number of results per page. | [optional] 

### Return type

[**ProductModelGetAllModel**](ProductModelGetAllModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## updateProduct

> ProductModel updateProduct(id, opts)

Updates the product by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let id = "id_example"; // String | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
let opts = new SiigoApi.UpdateProductCommand(); // UpdateProductCommand | Represents the request with the product information to update.

apiInstance.updateProduct(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.ProductApi();
    let id = "id_example"; // String | Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
    let opts = new SiigoApi.UpdateProductCommand(); // UpdateProductCommand | Represents the request with the product information to update.

    const data = await apiInstance.updateProduct(id, opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 
 **updateProductCommand** | [**UpdateProductCommand**](UpdateProductCommand.md)| Represents the request with the product information to update. | [optional] 

### Return type

[**ProductModel**](ProductModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


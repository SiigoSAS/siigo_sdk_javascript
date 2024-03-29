# SiigoApi.InvoiceApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**annulInvoice**](InvoiceApi.md#annulInvoice) | **POST** /v1/invoices/{id}/annul | Annul the Invoice by GUID.
[**createInvoice**](InvoiceApi.md#createInvoice) | **POST** /v1/invoices | Creates an invoice.
[**deleteInvoice**](InvoiceApi.md#deleteInvoice) | **DELETE** /v1/invoices/{id} | Delete the Invoice by GUID.
[**getElectronicInvoiceErrors**](InvoiceApi.md#getElectronicInvoiceErrors) | **GET** /v1/invoices/{id}/stamp/errors | Returns the errors list for a rejected electronic invoice by GUID.
[**getInvoice**](InvoiceApi.md#getInvoice) | **GET** /v1/invoices/{id} | Gets the invoice by GUID.
[**getInvoicePDF**](InvoiceApi.md#getInvoicePDF) | **GET** /v1/invoices/{id}/pdf | Gets the invoice PDF by GUID.
[**getInvoices**](InvoiceApi.md#getInvoices) | **GET** /v1/invoices | Returns a paginated list of invoices.
[**sendElectronicInvoice**](InvoiceApi.md#sendElectronicInvoice) | **POST** /v1/invoices/{id}/stamp | Send electronic invoice by GUID.
[**sendInvoiceByEmail**](InvoiceApi.md#sendInvoiceByEmail) | **POST** /v1/invoices/{id}/mail | Send an invoice by email
[**updateInvoice**](InvoiceApi.md#updateInvoice) | **PUT** /v1/invoices/{id} | Updates the Invoice by GUID.




## annulInvoice

> InvoiceDeleteViewModel annulInvoice(id)

Annul the Invoice by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.annulInvoice(id).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.annulInvoice(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**InvoiceDeleteViewModel**](InvoiceDeleteViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## createInvoice

> InvoiceViewModel createInvoice(opts)

Creates an invoice.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let opts = new SiigoApi.CreateInvoiceCommand(); // CreateInvoiceCommand | Represents the request with the invoice information.

apiInstance.createInvoice(opts).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let opts = new SiigoApi.CreateInvoiceCommand(); // CreateInvoiceCommand | Represents the request with the invoice information.

    const data = await apiInstance.createInvoice(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInvoiceCommand** | [**CreateInvoiceCommand**](CreateInvoiceCommand.md)| Represents the request with the invoice information. | [optional] 

### Return type

[**InvoiceViewModel**](InvoiceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## deleteInvoice

> InvoiceDeleteViewModel deleteInvoice(id)

Delete the Invoice by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.deleteInvoice(id).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.deleteInvoice(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**InvoiceDeleteViewModel**](InvoiceDeleteViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getElectronicInvoiceErrors

> EInvoiceErrorsViewModel getElectronicInvoiceErrors(id)

Returns the errors list for a rejected electronic invoice by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.getElectronicInvoiceErrors(id).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.getElectronicInvoiceErrors(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**EInvoiceErrorsViewModel**](EInvoiceErrorsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getInvoice

> InvoiceViewModel getInvoice(id)

Gets the invoice by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.getInvoice(id).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.getInvoice(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**InvoiceViewModel**](InvoiceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getInvoicePDF

> InvoicePdfViewModel getInvoicePDF(id)

Gets the invoice PDF by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.getInvoicePDF(id).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.getInvoicePDF(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**InvoicePdfViewModel**](InvoicePdfViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getInvoices

> InvoiceViewModelGetAllModel getInvoices(opts)

Returns a paginated list of invoices.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let opts = {
  'documentId': 24, // Number | Represents the document id of invoice.  For example, a document id can be like '24' or '10'.
  'customerIdentification': 51874544, // String | Represents the customer id associated with invoice.  For example, the number '51874544' can be the id of the customer 'Jackson Smith'.
  'customerBranchOffice': 627, // Number | Represents the branch office id associated with customer.  For example, the branch office '627'.
  'name': FV-003-457, // String | Represents the name of invoice.   For example, the name of an invoice can be like 'FV-003-457'.
  'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
  'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
  'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
  'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
  'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
  'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
  'page': 1, // Number | Represents the current page
  'pageSize': 25 // Number | Represents the number of results per page.
};

apiInstance.getInvoices(opts).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let opts = {
      'documentId': 24, // Number | Represents the document id of invoice.  For example, a document id can be like '24' or '10'.
      'customerIdentification': 51874544, // String | Represents the customer id associated with invoice.  For example, the number '51874544' can be the id of the customer 'Jackson Smith'.
      'customerBranchOffice': 627, // Number | Represents the branch office id associated with customer.  For example, the branch office '627'.
      'name': FV-003-457, // String | Represents the name of invoice.   For example, the name of an invoice can be like 'FV-003-457'.
      'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
      'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
      'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
      'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
      'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
      'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
      'page': 1, // Number | Represents the current page
      'pageSize': 25 // Number | Represents the number of results per page.
    };

    const data = await apiInstance.getInvoices(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| Represents the document id of invoice.  For example, a document id can be like &#39;24&#39; or &#39;10&#39;. | [optional] 
 **customerIdentification** | **String**| Represents the customer id associated with invoice.  For example, the number &#39;51874544&#39; can be the id of the customer &#39;Jackson Smith&#39;. | [optional] 
 **customerBranchOffice** | **Number**| Represents the branch office id associated with customer.  For example, the branch office &#39;627&#39;. | [optional] 
 **name** | **String**| Represents the name of invoice.   For example, the name of an invoice can be like &#39;FV-003-457&#39;. | [optional] 
 **createdStart** | **Date**| Returns results where the \&quot;created\&quot; field is greater or equal than the entered date | [optional] 
 **createdEnd** | **Date**| Returns results where the \&quot;created\&quot; field is less or equal than the entered date | [optional] 
 **dateStart** | **Date**| Returns results with date greater or equal than the \&quot;date_start\&quot; date | [optional] 
 **dateEnd** | **Date**| Returns results with date less or equal than the \&quot;date_end\&quot; date | [optional] 
 **updatedStart** | **Date**| Returns results where the \&quot;last_updated\&quot; field is greater or equal than the entered date | [optional] 
 **updatedEnd** | **Date**| Returns results where the \&quot;last_updated\&quot; field is less or equal than the entered date | [optional] 
 **page** | **Number**| Represents the current page | [optional] 
 **pageSize** | **Number**| Represents the number of results per page. | [optional] 

### Return type

[**InvoiceViewModelGetAllModel**](InvoiceViewModelGetAllModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## sendElectronicInvoice

> SendElectronicInvoiceViewModel sendElectronicInvoice(id, opts)

Send electronic invoice by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
let opts = new SiigoApi.SendElectronicInvoiceCommand(); // SendElectronicInvoiceCommand | Cotains the email (and copy to emails) to send the electronic invoice.

apiInstance.sendElectronicInvoice(id, opts).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
    let opts = new SiigoApi.SendElectronicInvoiceCommand(); // SendElectronicInvoiceCommand | Cotains the email (and copy to emails) to send the electronic invoice.

    const data = await apiInstance.sendElectronicInvoice(id, opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 
 **sendElectronicInvoiceCommand** | [**SendElectronicInvoiceCommand**](SendElectronicInvoiceCommand.md)| Cotains the email (and copy to emails) to send the electronic invoice. | [optional] 

### Return type

[**SendElectronicInvoiceViewModel**](SendElectronicInvoiceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## sendInvoiceByEmail

> MailViewModel sendInvoiceByEmail(id, opts)

Send an invoice by email

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | Represents the Guid of the Invoice.
let opts = new SiigoApi.SendInvoiceByEmailCommand(); // SendInvoiceByEmailCommand | Contains the parameters for sending the Email.

apiInstance.sendInvoiceByEmail(id, opts).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | Represents the Guid of the Invoice.
    let opts = new SiigoApi.SendInvoiceByEmailCommand(); // SendInvoiceByEmailCommand | Contains the parameters for sending the Email.

    const data = await apiInstance.sendInvoiceByEmail(id, opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the Guid of the Invoice. | 
 **sendInvoiceByEmailCommand** | [**SendInvoiceByEmailCommand**](SendInvoiceByEmailCommand.md)| Contains the parameters for sending the Email. | [optional] 

### Return type

[**MailViewModel**](MailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## updateInvoice

> InvoiceViewModel updateInvoice(id, opts)

Updates the Invoice by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
let opts = new SiigoApi.CreateInvoiceCommand(); // CreateInvoiceCommand | Represents the request with the invoice information.

apiInstance.updateInvoice(id, opts).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
    let opts = new SiigoApi.CreateInvoiceCommand(); // CreateInvoiceCommand | Represents the request with the invoice information.

    const data = await apiInstance.updateInvoice(id, opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 
 **createInvoiceCommand** | [**CreateInvoiceCommand**](CreateInvoiceCommand.md)| Represents the request with the invoice information. | [optional] 

### Return type

[**InvoiceViewModel**](InvoiceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


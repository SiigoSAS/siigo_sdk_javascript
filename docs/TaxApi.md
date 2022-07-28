# SiigoApi.TaxApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTaxes**](TaxApi.md#getTaxes) | **GET** /v1/taxes | Returns a list of taxes.




## getTaxes

> [TaxViewModel] getTaxes()

Returns a list of taxes.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.TaxApi();


apiInstance.getTaxes().then((data) => {
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
    let apiInstance = new SiigoApi.TaxApi();

    const data = await apiInstance.getTaxes();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[TaxViewModel]**](TaxViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


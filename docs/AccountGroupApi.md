# SiigoApi.AccountGroupApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountGroups**](AccountGroupApi.md#getAccountGroups) | **GET** /v1/account-groups | Returns a list of account groups.




## getAccountGroups

> [AccountGroupViewModel] getAccountGroups()

Returns a list of account groups.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.AccountGroupApi();


apiInstance.getAccountGroups().then((data) => {
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
    let apiInstance = new SiigoApi.AccountGroupApi();

    const data = await apiInstance.getAccountGroups();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[AccountGroupViewModel]**](AccountGroupViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


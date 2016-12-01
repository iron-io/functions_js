# IronFunctions.VersionApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionGet**](VersionApi.md#versionGet) | **GET** /version | Get daemon version.


<a name="versionGet"></a>
# **versionGet**
> Version versionGet()

Get daemon version.

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.VersionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


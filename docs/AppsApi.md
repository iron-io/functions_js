# IronFunctions.AppsApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsAppGet**](AppsApi.md#appsAppGet) | **GET** /apps/{app} | Get information for a app.
[**appsAppPut**](AppsApi.md#appsAppPut) | **PUT** /apps/{app} | Create/update a app.
[**appsGet**](AppsApi.md#appsGet) | **GET** /apps | Get all app names.
[**appsPost**](AppsApi.md#appsPost) | **POST** /apps | Post new app


<a name="appsAppGet"></a>
# **appsAppGet**
> AppWrapper appsAppGet(app)

Get information for a app.

This gives more details about a app, such as statistics.

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var app = "app_example"; // String | name of the app.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppGet(app, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppPut"></a>
# **appsAppPut**
> AppWrapper appsAppPut(app, body)

Create/update a app.

You can set app level settings here. 

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var app = "app_example"; // String | name of the app.

var body = new IronFunctions.AppWrapper(); // AppWrapper | App to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppPut(app, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 
 **body** | [**AppWrapper**](AppWrapper.md)| App to post. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsGet"></a>
# **appsGet**
> AppsWrapper appsGet()

Get all app names.

Get a list of all the apps in the system.

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AppsWrapper**](AppsWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsPost"></a>
# **appsPost**
> AppWrapper appsPost(body)

Post new app

Insert a new app

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var body = new IronFunctions.AppWrapper(); // AppWrapper | App to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AppWrapper**](AppWrapper.md)| App to post. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


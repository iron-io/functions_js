# FunctionsJs.RoutesApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsAppRoutesGet**](RoutesApi.md#appsAppRoutesGet) | **GET** /apps/{app}/routes | Get route list by app name.
[**appsAppRoutesPost**](RoutesApi.md#appsAppRoutesPost) | **POST** /apps/{app}/routes | Create new Route
[**appsAppRoutesRouteDelete**](RoutesApi.md#appsAppRoutesRouteDelete) | **DELETE** /apps/{app}/routes/{route} | Deletes the route
[**appsAppRoutesRouteGet**](RoutesApi.md#appsAppRoutesRouteGet) | **GET** /apps/{app}/routes/{route} | Gets route by name


<a name="appsAppRoutesGet"></a>
# **appsAppRoutesGet**
> RoutesWrapper appsAppRoutesGet(app)

Get route list by app name.

This will list routes for a particular app.

### Example
```javascript
var FunctionsJs = require('functions_js');

var apiInstance = new FunctionsJs.RoutesApi();

var app = "app_example"; // String | Name of app for this set of routes.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppRoutesGet(app, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| Name of app for this set of routes. | 

### Return type

[**RoutesWrapper**](RoutesWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppRoutesPost"></a>
# **appsAppRoutesPost**
> RoutesWrapper appsAppRoutesPost(app, body)

Create new Route

Create a new route

### Example
```javascript
var FunctionsJs = require('functions_js');

var apiInstance = new FunctionsJs.RoutesApi();

var app = "app_example"; // String | name of the app.

var body = new FunctionsJs.NewRoutesWrapper(); // NewRoutesWrapper | Array of routes to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppRoutesPost(app, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 
 **body** | [**NewRoutesWrapper**](NewRoutesWrapper.md)| Array of routes to post. | 

### Return type

[**RoutesWrapper**](RoutesWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppRoutesRouteDelete"></a>
# **appsAppRoutesRouteDelete**
> appsAppRoutesRouteDelete(app, route)

Deletes the route

Deletes the route.

### Example
```javascript
var FunctionsJs = require('functions_js');

var apiInstance = new FunctionsJs.RoutesApi();

var app = "app_example"; // String | Name of app for this set of routes.

var route = "route_example"; // String | Route name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.appsAppRoutesRouteDelete(app, route, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| Name of app for this set of routes. | 
 **route** | **String**| Route name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppRoutesRouteGet"></a>
# **appsAppRoutesRouteGet**
> RouteWrapper appsAppRoutesRouteGet(app, route)

Gets route by name

Gets a route by name.

### Example
```javascript
var FunctionsJs = require('functions_js');

var apiInstance = new FunctionsJs.RoutesApi();

var app = "app_example"; // String | Name of app for this set of routes.

var route = "route_example"; // String | Route name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppRoutesRouteGet(app, route, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| Name of app for this set of routes. | 
 **route** | **String**| Route name | 

### Return type

[**RouteWrapper**](RouteWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


# IronFunctions.TasksApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /tasks | Get next task.


<a name="tasksGet"></a>
# **tasksGet**
> TaskWrapper tasksGet(opts)

Get next task.

Gets the next task in the queue, ready for processing. Titan may return &lt;&#x3D;n tasks. Consumers should start processing tasks in order. Each returned task is set to &#x60;status&#x60; \&quot;running\&quot; and &#x60;started_at&#x60; is set to the current time. No other consumer can retrieve this task.

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.TasksApi();

var opts = { 
  'n': 1 // Number | Number of tasks to return.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **n** | **Number**| Number of tasks to return. | [optional] [default to 1]

### Return type

[**TaskWrapper**](TaskWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


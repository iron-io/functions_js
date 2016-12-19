# iron_functions

IronFunctions - JavaScript client for iron_functions
The open source serverless platform.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.28
- Package version: 0.1.28
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install iron_functions --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/iron_functions
then install it via:

```shell
    npm install YOUR_USERNAME/iron_functions --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var IronFunctions = require('iron_functions');

var api = new IronFunctions.AppsApi()

var app = "app_example"; // {String} Name of the app.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.appsAppDelete(app, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://127.0.0.1:8080/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*IronFunctions.AppsApi* | [**appsAppDelete**](docs/AppsApi.md#appsAppDelete) | **DELETE** /apps/{app} | Delete an app.
*IronFunctions.AppsApi* | [**appsAppGet**](docs/AppsApi.md#appsAppGet) | **GET** /apps/{app} | Get information for a app.
*IronFunctions.AppsApi* | [**appsAppPatch**](docs/AppsApi.md#appsAppPatch) | **PATCH** /apps/{app} | Updates an app.
*IronFunctions.AppsApi* | [**appsGet**](docs/AppsApi.md#appsGet) | **GET** /apps | Get all app names.
*IronFunctions.AppsApi* | [**appsPost**](docs/AppsApi.md#appsPost) | **POST** /apps | Post new app
*IronFunctions.RoutesApi* | [**appsAppRoutesGet**](docs/RoutesApi.md#appsAppRoutesGet) | **GET** /apps/{app}/routes | Get route list by app name.
*IronFunctions.RoutesApi* | [**appsAppRoutesPost**](docs/RoutesApi.md#appsAppRoutesPost) | **POST** /apps/{app}/routes | Create new Route
*IronFunctions.RoutesApi* | [**appsAppRoutesRouteDelete**](docs/RoutesApi.md#appsAppRoutesRouteDelete) | **DELETE** /apps/{app}/routes/{route} | Deletes the route
*IronFunctions.RoutesApi* | [**appsAppRoutesRouteGet**](docs/RoutesApi.md#appsAppRoutesRouteGet) | **GET** /apps/{app}/routes/{route} | Gets route by name
*IronFunctions.RoutesApi* | [**appsAppRoutesRoutePatch**](docs/RoutesApi.md#appsAppRoutesRoutePatch) | **PATCH** /apps/{app}/routes/{route} | Update a Route
*IronFunctions.TasksApi* | [**tasksGet**](docs/TasksApi.md#tasksGet) | **GET** /tasks | Get next task.
*IronFunctions.VersionApi* | [**versionGet**](docs/VersionApi.md#versionGet) | **GET** /version | Get daemon version.


## Documentation for Models

 - [IronFunctions.App](docs/App.md)
 - [IronFunctions.AppWrapper](docs/AppWrapper.md)
 - [IronFunctions.AppsWrapper](docs/AppsWrapper.md)
 - [IronFunctions.Error](docs/Error.md)
 - [IronFunctions.ErrorBody](docs/ErrorBody.md)
 - [IronFunctions.NewTask](docs/NewTask.md)
 - [IronFunctions.Route](docs/Route.md)
 - [IronFunctions.RouteWrapper](docs/RouteWrapper.md)
 - [IronFunctions.RoutesWrapper](docs/RoutesWrapper.md)
 - [IronFunctions.Task](docs/Task.md)
 - [IronFunctions.TaskWrapper](docs/TaskWrapper.md)
 - [IronFunctions.Version](docs/Version.md)


## Documentation for Authorization

 All endpoints do not require authorization.


/**
 * IronFunctions
 * null
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/RoutesWrapper', 'model/NewRoutesWrapper', 'model/RouteWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/RoutesWrapper'), require('../model/NewRoutesWrapper'), require('../model/RouteWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.FunctionsJs) {
      root.FunctionsJs = {};
    }
    root.FunctionsJs.RoutesApi = factory(root.FunctionsJs.ApiClient, root.FunctionsJs.Error, root.FunctionsJs.RoutesWrapper, root.FunctionsJs.NewRoutesWrapper, root.FunctionsJs.RouteWrapper);
  }
}(this, function(ApiClient, Error, RoutesWrapper, NewRoutesWrapper, RouteWrapper) {
  'use strict';

  /**
   * Routes service.
   * @module api/RoutesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new RoutesApi. 
   * @alias module:api/RoutesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the appsAppRoutesGet operation.
     * @callback module:api/RoutesApi~appsAppRoutesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoutesWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get route list by app name.
     * This will list routes for a particular app.
     * @param {String} app Name of app for this set of routes.
     * @param {module:api/RoutesApi~appsAppRoutesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoutesWrapper}
     */
    this.appsAppRoutesGet = function(app, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app == undefined || app == null) {
        throw "Missing the required parameter 'app' when calling appsAppRoutesGet";
      }


      var pathParams = {
        'app': app
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RoutesWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/routes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppRoutesPost operation.
     * @callback module:api/RoutesApi~appsAppRoutesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoutesWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Route
     * Create a new route
     * @param {String} app name of the app.
     * @param {module:model/NewRoutesWrapper} body Array of routes to post.
     * @param {module:api/RoutesApi~appsAppRoutesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoutesWrapper}
     */
    this.appsAppRoutesPost = function(app, body, callback) {
      var postBody = body;

      // verify the required parameter 'app' is set
      if (app == undefined || app == null) {
        throw "Missing the required parameter 'app' when calling appsAppRoutesPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling appsAppRoutesPost";
      }


      var pathParams = {
        'app': app
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RoutesWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/routes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppRoutesRouteDelete operation.
     * @callback module:api/RoutesApi~appsAppRoutesRouteDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the route
     * Deletes the route.
     * @param {String} app Name of app for this set of routes.
     * @param {String} route Route name
     * @param {module:api/RoutesApi~appsAppRoutesRouteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.appsAppRoutesRouteDelete = function(app, route, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app == undefined || app == null) {
        throw "Missing the required parameter 'app' when calling appsAppRoutesRouteDelete";
      }

      // verify the required parameter 'route' is set
      if (route == undefined || route == null) {
        throw "Missing the required parameter 'route' when calling appsAppRoutesRouteDelete";
      }


      var pathParams = {
        'app': app,
        'route': route
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/apps/{app}/routes/{route}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppRoutesRouteGet operation.
     * @callback module:api/RoutesApi~appsAppRoutesRouteGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RouteWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets route by name
     * Gets a route by name.
     * @param {String} app Name of app for this set of routes.
     * @param {String} route Route name
     * @param {module:api/RoutesApi~appsAppRoutesRouteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RouteWrapper}
     */
    this.appsAppRoutesRouteGet = function(app, route, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app == undefined || app == null) {
        throw "Missing the required parameter 'app' when calling appsAppRoutesRouteGet";
      }

      // verify the required parameter 'route' is set
      if (route == undefined || route == null) {
        throw "Missing the required parameter 'route' when calling appsAppRoutesRouteGet";
      }


      var pathParams = {
        'app': app,
        'route': route
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RouteWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/routes/{route}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

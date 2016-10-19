/**
 * IronFunctions
 * null
 *
 * OpenAPI spec version: 0.0.7
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
    define(['ApiClient', 'model/Error', 'model/AppWrapper', 'model/AppsWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/AppWrapper'), require('../model/AppsWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronFunctions) {
      root.IronFunctions = {};
    }
    root.IronFunctions.AppsApi = factory(root.IronFunctions.ApiClient, root.IronFunctions.Error, root.IronFunctions.AppWrapper, root.IronFunctions.AppsWrapper);
  }
}(this, function(ApiClient, Error, AppWrapper, AppsWrapper) {
  'use strict';

  /**
   * Apps service.
   * @module api/AppsApi
   * @version 0.0.7
   */

  /**
   * Constructs a new AppsApi. 
   * @alias module:api/AppsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the appsAppGet operation.
     * @callback module:api/AppsApi~appsAppGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for a app.
     * This gives more details about a app, such as statistics.
     * @param {String} app name of the app.
     * @param {module:api/AppsApi~appsAppGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppWrapper}
     */
    this.appsAppGet = function(app, callback) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app == undefined || app == null) {
        throw "Missing the required parameter 'app' when calling appsAppGet";
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps/{app}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsAppPut operation.
     * @callback module:api/AppsApi~appsAppPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create/update a app.
     * You can set app level settings here. 
     * @param {String} app name of the app.
     * @param {module:model/AppWrapper} body App to post.
     * @param {module:api/AppsApi~appsAppPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppWrapper}
     */
    this.appsAppPut = function(app, body, callback) {
      var postBody = body;

      // verify the required parameter 'app' is set
      if (app == undefined || app == null) {
        throw "Missing the required parameter 'app' when calling appsAppPut";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling appsAppPut";
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps/{app}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsGet operation.
     * @callback module:api/AppsApi~appsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all app names.
     * Get a list of all the apps in the system.
     * @param {module:api/AppsApi~appsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppsWrapper}
     */
    this.appsGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = AppsWrapper;

      return this.apiClient.callApi(
        '/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appsPost operation.
     * @callback module:api/AppsApi~appsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post new app
     * Insert a new app
     * @param {module:model/AppWrapper} body App to post.
     * @param {module:api/AppsApi~appsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppWrapper}
     */
    this.appsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling appsPost";
      }


      var pathParams = {
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

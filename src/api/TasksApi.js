/**
 * IronFunctions
 * null
 *
 * OpenAPI spec version: 0.0.5
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
    define(['ApiClient', 'model/TasksWrapper', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TasksWrapper'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.IronFunctions) {
      root.IronFunctions = {};
    }
    root.IronFunctions.TasksApi = factory(root.IronFunctions.ApiClient, root.IronFunctions.TasksWrapper, root.IronFunctions.Error);
  }
}(this, function(ApiClient, TasksWrapper, Error) {
  'use strict';

  /**
   * Tasks service.
   * @module api/TasksApi
   * @version 0.0.5
   */

  /**
   * Constructs a new TasksApi. 
   * @alias module:api/TasksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the tasksGet operation.
     * @callback module:api/TasksApi~tasksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TasksWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get next task.
     * Gets the next task in the queue, ready for processing. Titan may return &lt;&#x3D;n tasks. Consumers should start processing tasks in order. Each returned task is set to &#x60;status&#x60; \&quot;running\&quot; and &#x60;started_at&#x60; is set to the current time. No other consumer can retrieve this task.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.n Number of tasks to return. (default to 1)
     * @param {module:api/TasksApi~tasksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TasksWrapper}
     */
    this.tasksGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'n': opts['n']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TasksWrapper;

      return this.apiClient.callApi(
        '/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

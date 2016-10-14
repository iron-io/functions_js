/**
 * IronFunctions
 * null
 *
 * OpenAPI spec version: 0.0.2
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
    define(['ApiClient', 'model/ErrorBody', 'model/Task'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorBody'), require('./Task'));
  } else {
    // Browser globals (root is window)
    if (!root.FunctionsJs) {
      root.FunctionsJs = {};
    }
    root.FunctionsJs.TasksWrapper = factory(root.FunctionsJs.ApiClient, root.FunctionsJs.ErrorBody, root.FunctionsJs.Task);
  }
}(this, function(ApiClient, ErrorBody, Task) {
  'use strict';




  /**
   * The TasksWrapper model module.
   * @module model/TasksWrapper
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>TasksWrapper</code>.
   * @alias module:model/TasksWrapper
   * @class
   * @param tasks {Array.<module:model/Task>} 
   */
  var exports = function(tasks) {
    var _this = this;

    _this['tasks'] = tasks;


  };

  /**
   * Constructs a <code>TasksWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TasksWrapper} obj Optional instance to populate.
   * @return {module:model/TasksWrapper} The populated <code>TasksWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tasks')) {
        obj['tasks'] = ApiClient.convertToType(data['tasks'], [Task]);
      }
      if (data.hasOwnProperty('cursor')) {
        obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorBody.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Task>} tasks
   */
  exports.prototype['tasks'] = undefined;
  /**
   * Used to paginate results. If this is returned, pass it into the same query again to get more results.
   * @member {String} cursor
   */
  exports.prototype['cursor'] = undefined;
  /**
   * @member {module:model/ErrorBody} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


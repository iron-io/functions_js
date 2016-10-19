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
    define(['ApiClient', 'model/ErrorBody', 'model/Route'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorBody'), require('./Route'));
  } else {
    // Browser globals (root is window)
    if (!root.IronFunctions) {
      root.IronFunctions = {};
    }
    root.IronFunctions.RoutesWrapper = factory(root.IronFunctions.ApiClient, root.IronFunctions.ErrorBody, root.IronFunctions.Route);
  }
}(this, function(ApiClient, ErrorBody, Route) {
  'use strict';




  /**
   * The RoutesWrapper model module.
   * @module model/RoutesWrapper
   * @version 0.0.7
   */

  /**
   * Constructs a new <code>RoutesWrapper</code>.
   * @alias module:model/RoutesWrapper
   * @class
   * @param routes {Array.<module:model/Route>} 
   */
  var exports = function(routes) {
    var _this = this;

    _this['routes'] = routes;


  };

  /**
   * Constructs a <code>RoutesWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoutesWrapper} obj Optional instance to populate.
   * @return {module:model/RoutesWrapper} The populated <code>RoutesWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('routes')) {
        obj['routes'] = ApiClient.convertToType(data['routes'], [Route]);
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
   * @member {Array.<module:model/Route>} routes
   */
  exports.prototype['routes'] = undefined;
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



/**
 * IronFunctions
 * The open source serverless platform.
 *
 * OpenAPI spec version: 0.1.29
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/App', 'model/ErrorBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./App'), require('./ErrorBody'));
  } else {
    // Browser globals (root is window)
    if (!root.IronFunctions) {
      root.IronFunctions = {};
    }
    root.IronFunctions.AppWrapper = factory(root.IronFunctions.ApiClient, root.IronFunctions.App, root.IronFunctions.ErrorBody);
  }
}(this, function(ApiClient, App, ErrorBody) {
  'use strict';




  /**
   * The AppWrapper model module.
   * @module model/AppWrapper
   * @version 0.1.29
   */

  /**
   * Constructs a new <code>AppWrapper</code>.
   * @alias module:model/AppWrapper
   * @class
   * @param app {module:model/App} 
   */
  var exports = function(app) {
    var _this = this;

    _this['app'] = app;

  };

  /**
   * Constructs a <code>AppWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppWrapper} obj Optional instance to populate.
   * @return {module:model/AppWrapper} The populated <code>AppWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('app')) {
        obj['app'] = App.constructFromObject(data['app']);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorBody.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/App} app
   */
  exports.prototype['app'] = undefined;
  /**
   * @member {module:model/ErrorBody} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));



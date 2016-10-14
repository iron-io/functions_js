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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/App', 'model/AppWrapper', 'model/AppsWrapper', 'model/Error', 'model/ErrorBody', 'model/NewTasksWrapper', 'model/Route', 'model/RouteWrapper', 'model/RoutesWrapper', 'model/Task', 'model/TaskWrapper', 'model/TasksWrapper', 'api/AppsApi', 'api/RoutesApi', 'api/TasksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/App'), require('./model/AppWrapper'), require('./model/AppsWrapper'), require('./model/Error'), require('./model/ErrorBody'), require('./model/NewTasksWrapper'), require('./model/Route'), require('./model/RouteWrapper'), require('./model/RoutesWrapper'), require('./model/Task'), require('./model/TaskWrapper'), require('./model/TasksWrapper'), require('./api/AppsApi'), require('./api/RoutesApi'), require('./api/TasksApi'));
  }
}(function(ApiClient, App, AppWrapper, AppsWrapper, Error, ErrorBody, NewTasksWrapper, Route, RouteWrapper, RoutesWrapper, Task, TaskWrapper, TasksWrapper, AppsApi, RoutesApi, TasksApi) {
  'use strict';

  /**
   * null.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var IronFunctions = require('index'); // See note below*.
   * var xxxSvc = new IronFunctions.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new IronFunctions.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new IronFunctions.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new IronFunctions.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.5
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The App model constructor.
     * @property {module:model/App}
     */
    App: App,
    /**
     * The AppWrapper model constructor.
     * @property {module:model/AppWrapper}
     */
    AppWrapper: AppWrapper,
    /**
     * The AppsWrapper model constructor.
     * @property {module:model/AppsWrapper}
     */
    AppsWrapper: AppsWrapper,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorBody model constructor.
     * @property {module:model/ErrorBody}
     */
    ErrorBody: ErrorBody,
    /**
     * The NewTasksWrapper model constructor.
     * @property {module:model/NewTasksWrapper}
     */
    NewTasksWrapper: NewTasksWrapper,
    /**
     * The Route model constructor.
     * @property {module:model/Route}
     */
    Route: Route,
    /**
     * The RouteWrapper model constructor.
     * @property {module:model/RouteWrapper}
     */
    RouteWrapper: RouteWrapper,
    /**
     * The RoutesWrapper model constructor.
     * @property {module:model/RoutesWrapper}
     */
    RoutesWrapper: RoutesWrapper,
    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task: Task,
    /**
     * The TaskWrapper model constructor.
     * @property {module:model/TaskWrapper}
     */
    TaskWrapper: TaskWrapper,
    /**
     * The TasksWrapper model constructor.
     * @property {module:model/TasksWrapper}
     */
    TasksWrapper: TasksWrapper,
    /**
     * The AppsApi service constructor.
     * @property {module:api/AppsApi}
     */
    AppsApi: AppsApi,
    /**
     * The RoutesApi service constructor.
     * @property {module:api/RoutesApi}
     */
    RoutesApi: RoutesApi,
    /**
     * The TasksApi service constructor.
     * @property {module:api/TasksApi}
     */
    TasksApi: TasksApi
  };

  return exports;
}));

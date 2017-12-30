//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var MethodHooks;

var require = meteorInstall({"node_modules":{"meteor":{"lacosta:method-hooks":{"src":{"method-hooks-mixin.js":["babel-runtime/helpers/extends",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/lacosta_method-hooks/src/method-hooks-mixin.js                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _extends2 = require("babel-runtime/helpers/extends");                                         //
                                                                                                  //
var _extends3 = _interopRequireDefault(_extends2);                                                //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
MethodHooks = function (options) {                                                                // 1
  var _Match = Match,                                                                             // 1
      ObjectIncluding = _Match.ObjectIncluding,                                                   // 1
      Optional = _Match.Optional;                                                                 // 1
  check(options, ObjectIncluding({                                                                // 4
    name: String,                                                                                 // 5
    beforeHooks: Optional([Function]),                                                            // 6
    afterHooks: Optional([Function]),                                                             // 7
    run: Function                                                                                 // 8
  }));                                                                                            // 4
  var _options$beforeHooks = options.beforeHooks,                                                 // 1
      beforeHooks = _options$beforeHooks === undefined ? [] : _options$beforeHooks,               // 1
      _options$afterHooks = options.afterHooks,                                                   // 1
      afterHooks = _options$afterHooks === undefined ? [] : _options$afterHooks,                  // 1
      run = options.run; // remove hooks to avoid sending hooks to themselves                     // 1
  // remove run function to avoid sending hooks overridden #run                                   // 14
                                                                                                  //
  delete options.beforeHooks;                                                                     // 15
  delete options.afterHooks;                                                                      // 16
  delete options.run;                                                                             // 17
  var finalOptions = (0, _extends3.default)({}, options, {                                        // 19
    run: function (args) {                                                                        // 19
      var _this = this;                                                                           // 19
                                                                                                  //
      var finalArgs = beforeHooks.reduce(function (modifiedArgs, hook) {                          // 20
        return hook.call(_this, modifiedArgs, (0, _extends3.default)({}, options));               // 21
      }, args);                                                                                   // 22
      var result = run.call(this, finalArgs);                                                     // 24
      var finalResult = afterHooks.reduce(function (modifiedResult, hook) {                       // 26
        return hook.call(_this, finalArgs, modifiedResult, (0, _extends3.default)({}, options));  // 27
      }, result);                                                                                 // 28
      return finalResult;                                                                         // 30
    }                                                                                             // 31
  });                                                                                             // 19
  return finalOptions;                                                                            // 33
};                                                                                                // 34
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/lacosta:method-hooks/src/method-hooks-mixin.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['lacosta:method-hooks'] = {}, {
  MethodHooks: MethodHooks
});

})();

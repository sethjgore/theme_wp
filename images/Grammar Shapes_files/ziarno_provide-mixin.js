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
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var ProvideMixin;

var require = meteorInstall({"node_modules":{"meteor":{"ziarno:provide-mixin":{"provide-mixin.js":function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/ziarno_provide-mixin/provide-mixin.js                          //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
ProvideMixin = function (methodOptions) {                                  // 1
  if (_.isFunction(methodOptions.provide)) {                               // 3
    methodOptions.run = _.wrap(methodOptions.run, function (originalRun) {
      var args = Array.prototype.slice.call(arguments, 1);                 // 6
      var provideData = methodOptions.provide.apply(this, args);           // 7
      return originalRun.apply(this, args.concat([provideData]));          // 8
    });                                                                    // 9
  }                                                                        // 11
                                                                           //
  return methodOptions;                                                    // 13
};                                                                         // 15
/////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/ziarno:provide-mixin/provide-mixin.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ziarno:provide-mixin'] = {}, {
  ProvideMixin: ProvideMixin
});

})();

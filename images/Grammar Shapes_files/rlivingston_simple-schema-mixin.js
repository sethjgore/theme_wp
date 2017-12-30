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
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var ValidatedMethod = Package['mdg:validated-method'].ValidatedMethod;
var check = Package.check.check;
var Match = Package.check.Match;
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
var simpleSchemaMixin;

var require = meteorInstall({"node_modules":{"meteor":{"rlivingston:simple-schema-mixin":{"simple-schema-mixin.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rlivingston_simple-schema-mixin/simple-schema-mixin.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* global simpleSchemaMixin:true */ /* global SimpleSchema */ /* global Meteor */simpleSchemaMixin = function () {    // 1
  function SimpleSchemaMixinFunc(methodOptions) {                                                                     // 4
    // If the user didn't give us a schema and they did give us a validate, assume                                    // 5
    // that they are choosing to use the validate way of doing things in this call.                                   // 6
    //  If they've built a wrapper around ValidateMethod that includes this mixin                                     // 7
    // all the time, this could happen semi-"intentionally". There may be times they                                  // 8
    // just don't want to use a schema and have specified a "validate" option. So                                     // 9
    // returning the unchanged options instead of an error seems proper.                                              // 10
    if (typeof methodOptions.schema === 'undefined' && typeof methodOptions.validate !== 'undefined' || typeof methodOptions.schema !== 'undefined' && methodOptions.schema === null && typeof methodOptions.validate !== 'undefined' && methodOptions.validate !== null) {
      return methodOptions;                                                                                           // 15
    } // If they truly gave us both... that just doesn't seem proper.                                                 // 16
                                                                                                                      //
                                                                                                                      //
    if (methodOptions.validate && methodOptions.validate !== null) {                                                  // 19
      throw new Meteor.Error('simpleSchemaMixin.options', '"schema" and "validate" options cannot be used together');
    } // Note that setting them both null will make it through, defaulting to the                                     // 23
    // schema = null behavior (enforce no args) instead of the validate = null                                        // 26
    // behavior (do no validation).                                                                                   // 27
                                                                                                                      //
                                                                                                                      //
    var newOptions = methodOptions;                                                                                   // 29
    newOptions.schemaValidatorOptions = newOptions.schemaValidatorOptions || {                                        // 30
      clean: true,                                                                                                    // 32
      filter: false                                                                                                   // 32
    };                                                                                                                // 32
    var simpleSchema = void 0;                                                                                        // 33
                                                                                                                      //
    if (!newOptions.schema || newOptions.schema === null) {                                                           // 34
      // Allow simply leaving off both the schema and validate specifications                                         // 35
      // or setting them to "null" as a shorthand. In this case, unlike                                               // 36
      // the straight default validate or typical coder's call to validator,                                          // 37
      // we will ENFORCE the Method be called without parameters because of                                           // 38
      // the "filter: false" above.                                                                                   // 39
      simpleSchema = new SimpleSchema({});                                                                            // 40
    } else if (newOptions.schema instanceof SimpleSchema) {                                                           // 41
      // In this one case, we can save ourselves the time to make a schema out                                        // 42
      // of the schema.                                                                                               // 43
      simpleSchema = newOptions.schema;                                                                               // 44
    } else {                                                                                                          // 45
      simpleSchema = new SimpleSchema(newOptions.schema);                                                             // 46
    }                                                                                                                 // 47
                                                                                                                      //
    newOptions.validate = simpleSchema.validator(newOptions.schemaValidatorOptions);                                  // 48
    return newOptions;                                                                                                // 49
  }                                                                                                                   // 50
                                                                                                                      //
  return SimpleSchemaMixinFunc;                                                                                       // 4
}();                                                                                                                  // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/rlivingston:simple-schema-mixin/simple-schema-mixin.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rlivingston:simple-schema-mixin'] = {}, {
  simpleSchemaMixin: simpleSchemaMixin
});

})();

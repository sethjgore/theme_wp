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
var Template = Package['templating-runtime'].Template;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"layout":{"margin.html":["./template.margin.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// node_modules/meteor/layout/margin.html                                      //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
module.exports = require("./template.margin.js");                              // 1
                                                                               // 2
/////////////////////////////////////////////////////////////////////////////////

}],"template.margin.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/layout/template.margin.js                                          //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
                                                                               // 1
Template.__checkName("layoutMargin");                                          // 2
Template["layoutMargin"] = new Template("Template.layoutMargin", (function() {
  var view = this;                                                             // 4
  return [ HTML.DIV({                                                          // 5
    class: function() {                                                        // 6
      return [ "flex-auto fb-", Spacebars.mustache(view.lookup("ratio")) ];    // 7
    }                                                                          // 8
  }), "\n    \t", Blaze._InOuterTemplateScope(view, function() {               // 9
    return Spacebars.include(function() {                                      // 10
      return Spacebars.call(view.templateContentBlock);                        // 11
    });                                                                        // 12
  }), "\n    ", HTML.DIV({                                                     // 13
    class: function() {                                                        // 14
      return [ "flex-auto fb-", Spacebars.mustache(view.lookup("ratio")) ];    // 15
    }                                                                          // 16
  }) ];                                                                        // 17
}));                                                                           // 18
                                                                               // 19
/////////////////////////////////////////////////////////////////////////////////

},"layout.js":["meteor/templating","./margin.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/layout/layout.js                                                   //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
var Template = void 0;                                                         // 1
module.importSync("meteor/templating", {                                       // 1
  Template: function (v) {                                                     // 1
    Template = v;                                                              // 1
  }                                                                            // 1
}, 0);                                                                         // 1
module.importSync("./margin.html");                                            // 1
/////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json",".html"]});
require("./node_modules/meteor/layout/template.margin.js");
var exports = require("./node_modules/meteor/layout/layout.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.layout = exports;

})();

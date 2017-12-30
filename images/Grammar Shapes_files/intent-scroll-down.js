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

var require = meteorInstall({"node_modules":{"meteor":{"intent-scroll-down":{"scroll-down-soft.html":["./template.scroll-down-soft.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// node_modules/meteor/intent-scroll-down/scroll-down-soft.html                    //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
module.exports = require("./template.scroll-down-soft.js");                        // 1
                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////

}],"template.scroll-down-soft.js":function(){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// packages/intent-scroll-down/template.scroll-down-soft.js                        //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
                                                                                   // 1
Template.__checkName("scrolldownsoft");                                            // 2
Template["scrolldownsoft"] = new Template("Template.scrolldownsoft", (function() {
  var view = this;                                                                 // 4
  return HTML.Raw('<div id="single3">\n        <div class="scroll-arrow-container">\n            <span class="arrow-left"></span>\n            <span class="arrow-right"></span>\n        </div>\n    </div>');
}));                                                                               // 6
                                                                                   // 7
/////////////////////////////////////////////////////////////////////////////////////

},"scroll-down-soft.css":function(){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// packages/intent-scroll-down/scroll-down-soft.css                                //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
// These styles have already been applied to the document.                         // 1
                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////

},"intent-scroll-down.js":["meteor/templating","./scroll-down-soft.html","./scroll-down-soft.css",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// packages/intent-scroll-down/intent-scroll-down.js                               //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
var Template = void 0;                                                             // 1
module.importSync("meteor/templating", {                                           // 1
  Template: function (v) {                                                         // 1
    Template = v;                                                                  // 1
  }                                                                                // 1
}, 0);                                                                             // 1
module.importSync("./scroll-down-soft.html");                                      // 1
module.importSync("./scroll-down-soft.css");                                       // 1
/////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json",".html",".css"]});
require("./node_modules/meteor/intent-scroll-down/template.scroll-down-soft.js");
var exports = require("./node_modules/meteor/intent-scroll-down/intent-scroll-down.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['intent-scroll-down'] = exports;

})();

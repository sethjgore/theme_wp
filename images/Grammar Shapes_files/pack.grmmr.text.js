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
var ViewModel = Package['manuel:viewmodel'].ViewModel;
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

var require = meteorInstall({"node_modules":{"meteor":{"pack.grmmr.text":{"template.pack.grmmr.text.js":function(){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// packages/pack.grmmr.text/template.pack.grmmr.text.js                  //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
                                                                         // 1
Template.__checkName("grmmrText");                                       // 2
Template["grmmrText"] = new Template("Template.grmmrText", (function() {
  var view = this;                                                       // 4
  return HTML.Raw('<div grmmrtext="" summernote=""></div>');             // 5
}));                                                                     // 6
                                                                         // 7
///////////////////////////////////////////////////////////////////////////

},"pack.grmmr.text.js":function(){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// packages/pack.grmmr.text/pack.grmmr.text.js                           //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
if (Meteor.isClient) {                                                   // 1
    Template.grmmrText.viewmodel({                                       // 3
        onRendered: function (t) {                                       // 4
            var vm = this;                                               // 5
                                                                         //
            function init() {                                            // 7
                vm.ui(t);                                                // 8
                vm.initalized(true);                                     // 9
            }                                                            // 10
                                                                         //
            var text = t.$('[summernote]').summernote({                  // 12
                height: 200,                                             // 13
                // set editable area's height                            // 13
                focus: true,                                             // 14
                // set focus editable area after Initialize summernote   // 14
                airMode: true,                                           // 15
                popover: {                                               // 16
                    air: []                                              // 17
                },                                                       // 16
                disableDragAndDrop: true,                                // 19
                shortcuts: false,                                        // 20
                callbacks: {                                             // 21
                    onInit: function () {                                // 22
                        init();                                          // 23
                    }                                                    // 24
                }                                                        // 21
            });                                                          // 12
        },                                                               // 29
        ui: undefined,                                                   // 30
        initalized: false,                                               // 31
        focus: function () {                                             // 32
            if (this.ui().find('.note-editor')) {                        // 33
                this.ui().find('.note-editor').focus();                  // 34
            }                                                            // 35
        },                                                               // 36
        autorun: function () {                                           // 37
            if (this.initalized() === true) {                            // 38
                this.focus();                                            // 39
            }                                                            // 40
        }                                                                // 42
    });                                                                  // 3
}                                                                        // 45
///////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json",".html"]});
require("./node_modules/meteor/pack.grmmr.text/template.pack.grmmr.text.js");
require("./node_modules/meteor/pack.grmmr.text/pack.grmmr.text.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['pack.grmmr.text'] = {};

})();

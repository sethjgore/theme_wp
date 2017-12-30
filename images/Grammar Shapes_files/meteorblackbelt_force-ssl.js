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
var WebApp = Package.webapp.WebApp;
var _ = Package.underscore._;
var DDP = Package['ddp-client'].DDP;

(function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/meteorblackbelt_force-ssl/packages/meteorblackbelt_force-ssl. //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
(function () {                                                            // 1
                                                                          // 2
///////////////////////////////////////////////////////////////////////   // 3
//                                                                   //   // 4
// packages/meteorblackbelt:force-ssl/force_ssl_common.js            //   // 5
//                                                                   //   // 6
///////////////////////////////////////////////////////////////////////   // 7
                                                                     //   // 8
if (Meteor.settings && Meteor.settings.forceSSL) {                   // 1
  _.extend(Meteor.absoluteUrl.defaultOptions, {secure: true});       // 2
}                                                                    // 3
                                                                     // 4
///////////////////////////////////////////////////////////////////////   // 13
                                                                          // 14
}).call(this);                                                            // 15
                                                                          // 16
////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteorblackbelt:force-ssl'] = {};

})();

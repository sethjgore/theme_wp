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
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, VmCheck;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/manuel_viewmodel-debug/lib/viewmodel-checks.coffee.js                                           //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var checks,                                                                                                 //
    isObject,                                                                                               //
    parentTemplate,                                                                                         //
    ref,                                                                                                    //
    templateName,                                                                                           //
    slice = [].slice;                                                                                       //
                                                                                                            //
ref = function ref(tag) {                                                                                   //
  return " See https://viewmodel.org/docs/" + tag + " for more information.";                               //
};                                                                                                          //
                                                                                                            //
isObject = function isObject(obj) {                                                                         //
  return _.isObject(obj) && !(obj instanceof Array) && !_.isFunction(obj);                                  //
};                                                                                                          //
                                                                                                            //
templateName = function templateName(template) {                                                            //
  var name, ref1;                                                                                           //
  name = template.viewName || ((ref1 = template.view) != null ? ref1.name : void 0);                        //
  if (!name) {                                                                                              //
    return '?';                                                                                             //
  }                                                                                                         //
  if (name === 'body') {                                                                                    //
    return name;                                                                                            //
  } else {                                                                                                  //
    return name.substr(name.indexOf('.') + 1);                                                              //
  }                                                                                                         //
};                                                                                                          //
                                                                                                            //
parentTemplate = function parentTemplate(templateInstance) {                                                //
  var ref1, view;                                                                                           //
  view = (ref1 = templateInstance.view) != null ? ref1.parentView : void 0;                                 //
  while (view) {                                                                                            //
    if (view.name.substring(0, 9) === 'Template.' || view.name === 'body') {                                //
      return view.templateInstance();                                                                       //
    }                                                                                                       //
    view = view.parentView;                                                                                 //
  }                                                                                                         //
};                                                                                                          //
                                                                                                            //
checks = {                                                                                                  //
  '@addBinding': function () {                                                                              //
    function addBinding(binding) {                                                                          //
      var tag;                                                                                              //
      tag = 'bindings#bindingObject';                                                                       //
      if (!isObject(binding)) {                                                                             //
        console.error("ViewModel.addBinding requires an object." + ref(tag));                               //
      }                                                                                                     //
      if (!_.isString(binding.name) || binding.name.trim() === "") {                                        //
        console.error("ViewModel.addBinding requires an object with a name (string)." + ref(tag));          //
      }                                                                                                     //
      if (binding.bind && !_.isFunction(binding.bind)) {                                                    //
        console.error("Optional property 'bind' has to be a function when passed to ViewModel.addBinding." + ref(tag));
      }                                                                                                     //
      if (binding.bindIf && !_.isFunction(binding.bindIf)) {                                                //
        console.error("Optional property 'bindIf' has to be a function when passed to ViewModel.addBinding." + ref(tag));
      }                                                                                                     //
      if (binding.selector && !_.isString(binding.selector)) {                                              //
        console.error("Optional property 'selector' has to be a string when passed to ViewModel.addBinding." + ref(tag));
      }                                                                                                     //
      if (binding.events && !isObject(binding.events)) {                                                    //
        console.error("Optional property 'events' has to be an object when passed to ViewModel.addBinding." + ref(tag));
      }                                                                                                     //
      if (binding.autorun && !_.isFunction(binding.autorun)) {                                              //
        console.error("Optional property 'autorun' has to be a function when passed to ViewModel.addBinding." + ref(tag));
      }                                                                                                     //
      if (!(binding.bind || binding.events || binding.autorun)) {                                           //
        console.error("ViewModel.addBinding requires at least one of: bind, events, autorun." + ref(tag));  //
      }                                                                                                     //
      if (binding.priority && !_.isNumber(binding.priority)) {                                              //
        console.error("Optional property 'priority' has to be a number when passed to ViewModel.addBinding." + ref(tag));
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return addBinding;                                                                                      //
  }(),                                                                                                      //
  'T#viewmodel': function () {                                                                              //
    function TViewmodel(initial, template) {                                                                //
      var eventFunction, eventName, name, ref1, tag;                                                        //
      tag = 'viewmodels#defining';                                                                          //
      if (!(isObject(initial) || _.isFunction(initial))) {                                                  //
        name = templateName(template);                                                                      //
        console.error("Could not create the view model for template '" + name + "'. Creating a view model requires an object or a function that returns an object." + ref(tag));
      }                                                                                                     //
      if (initial.events) {                                                                                 //
        name = templateName(template);                                                                      //
        tag = 'viewmodels#events';                                                                          //
        if (Object.prototype.toString.call(initial.events) === '[object Object]') {                         //
          ref1 = initial.events;                                                                            //
          for (eventName in meteorBabelHelpers.sanitizeForInObject(ref1)) {                                 //
            eventFunction = ref1[eventName];                                                                //
            if (!!_.isFunction(eventFunction)) {                                                            //
              continue;                                                                                     //
            }                                                                                               //
            console.error("Could not add the events for template '" + name + "'. The event '" + eventName + "' doesn't map to a function." + ref(tag));
            break;                                                                                          //
          }                                                                                                 //
        } else {                                                                                            //
          console.error("Could not add the events for template '" + name + "'. The events property needs an object." + ref(tag));
        }                                                                                                   //
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return TViewmodel;                                                                                      //
  }(),                                                                                                      //
  'getBindHelper': function () {                                                                            //
    function getBindHelper(templateInstance) {                                                              //
      var name, tag;                                                                                        //
      tag = 'viewmodels#defining';                                                                          //
      if (!templateInstance.viewmodel) {                                                                    //
        name = templateName(templateInstance);                                                              //
        console.error("The template '" + name + "' doesn't have a view model associated with it. No `Template." + name + ".viewmodel` found in the code." + ref(tag));
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return getBindHelper;                                                                                   //
  }(),                                                                                                      //
  '#parent': function () {                                                                                  //
    function parent() {                                                                                     //
      var args, tag;                                                                                        //
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                         //
      tag = 'viewmodels#parent';                                                                            //
      if (args.length) {                                                                                    //
        return console.error("viewmodel.parent() doesn't take any arguments. It just returns the single parent view model." + ref(tag));
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return parent;                                                                                          //
  }(),                                                                                                      //
  '#children': function () {                                                                                //
    function children() {                                                                                   //
      var args, tag;                                                                                        //
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                         //
      tag = 'viewmodels#children';                                                                          //
      if (args.length === 0) {                                                                              //
        return;                                                                                             //
      }                                                                                                     //
      if (args.length > 1) {                                                                                //
        return console.error("viewmodel.children only takes 1 optional parameter (a string or a function)." + ref(tag));
      } else if (!(_.isFunction(args[0]) || _.isString(args[0]))) {                                         //
        return console.error("viewmodel.children takes an optional parameter which can be a string or a function." + ref(tag));
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return children;                                                                                        //
  }(),                                                                                                      //
  '@onRendered': function () {                                                                              //
    function onRendered(autorun, template) {                                                                //
      var name, tag;                                                                                        //
      tag = 'viewmodels#autorun';                                                                           //
      if (!autorun || _.isFunction(autorun)) {                                                              //
        return;                                                                                             //
      }                                                                                                     //
      if (autorun instanceof Array && autorun.length && _.every(autorun, _.isFunction)) {                   //
        return;                                                                                             //
      }                                                                                                     //
      name = templateName(template);                                                                        //
      return console.error("autorun on view model for template '" + name + "' has to be function or an array of functions." + ref(tag));
    }                                                                                                       //
                                                                                                            //
    return onRendered;                                                                                      //
  }(),                                                                                                      //
  '#constructor': function () {                                                                             //
    function constructor(initial) {                                                                         //
      var tag;                                                                                              //
      tag = 'misc#hotcodepush';                                                                             //
      if ((initial != null ? initial.persist : void 0) == null || _.isBoolean(initial.persist) || _.isFunction(initial.persist)) {
        return;                                                                                             //
      }                                                                                                     //
      return console.error("persist has to be a boolean or a function that returns a boolean." + ref(tag));
    }                                                                                                       //
                                                                                                            //
    return constructor;                                                                                     //
  }(),                                                                                                      //
  'T#viewmodelArgs': function () {                                                                          //
    function TViewmodelArgs(template, args) {                                                               //
      var name, tag;                                                                                        //
      tag = 'viewmodels#defining';                                                                          //
      if (args.length !== 1) {                                                                              //
        name = templateName(template);                                                                      //
        return console.error("Could not create the view model for template '" + name + "'. Creating a view model only requires 1 parameter (an object or a function that returns an object). You supplied " + args.length + " parameters." + ref(tag));
      } else if (!(isObject(args[0]) || _.isFunction(args[0]))) {                                           //
        name = templateName(template);                                                                      //
        return console.error("Could not create the view model for template '" + name + "'. Creating a view model requires an object or a function that returns an object." + ref(tag));
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return TViewmodelArgs;                                                                                  //
  }(),                                                                                                      //
  '@saveUrl': function () {                                                                                 //
    function saveUrl(viewmodel) {                                                                           //
      var name, tag;                                                                                        //
      tag = 'misc#stateonurl';                                                                              //
      if (viewmodel._id && !viewmodel.vmTag) {                                                              //
        name = templateName(viewmodel.templateInstance);                                                    //
        return console.error("If you're going to put '_id' on the url you must define a 'vmTag' on the view model. This is for the view model for template '" + name + "'." + ref(tag));
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return saveUrl;                                                                                         //
  }(),                                                                                                      //
  'refBinding': function () {                                                                               //
    function refBinding(bindArg) {                                                                          //
      var name, ref1;                                                                                       //
      if (bindArg.viewmodel[bindArg.bindValue] && !((ref1 = bindArg.viewmodel.vmDebugChecked) != null ? ref1[bindArg.bindValue] : void 0)) {
        name = templateName(bindArg.viewmodel.templateInstance);                                            //
        return console.error("The view model for template '" + name + "' already has a property '" + bindArg.bindValue + "'. You're trying to use it as the name for a ref binding.");
      } else {                                                                                              //
        if (!bindArg.viewmodel.vmDebugChecked) {                                                            //
          bindArg.viewmodel.vmDebugChecked = {};                                                            //
        }                                                                                                   //
        return bindArg.viewmodel.vmDebugChecked[bindArg.bindValue] = true;                                  //
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return refBinding;                                                                                      //
  }()                                                                                                       //
};                                                                                                          //
                                                                                                            //
VmCheck = function VmCheck() {                                                                              //
  var args, key;                                                                                            //
  key = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                         //
  if (checks[key]) {                                                                                        //
    checks[key].apply(checks, args);                                                                        //
  } else {                                                                                                  //
    console.warn("Don't have debug information for [" + key + "]. Please report it at https://viewmodel.org/help. In the mean time you can turn off checks with `ViewModel.ignoreErrors = true`." + ref('misc#ignoreErrors'));
  }                                                                                                         //
};                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['manuel:viewmodel-debug'] = {}, {
  VmCheck: VmCheck
});

})();

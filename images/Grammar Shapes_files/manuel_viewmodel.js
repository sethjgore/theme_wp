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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Template = Package['templating-runtime'].Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Reload = Package.reload.Reload;
var SHA256 = Package.sha.SHA256;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ReactiveArray = Package['manuel:reactivearray'].ReactiveArray;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var HTML = Package.htmljs.HTML;
var Spacebars = Package.spacebars.Spacebars;

/* Package-scope variables */
var __coffeescriptShare, ViewModel, LZString;

var require = meteorInstall({"node_modules":{"meteor":{"manuel:viewmodel":{"lib":{"viewmodel.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/manuel_viewmodel/lib/viewmodel.coffee.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var slice = [].slice,                                                                                                  //
    indexOf = [].indexOf || function (item) {                                                                          //
  for (var i = 0, l = this.length; i < l; i++) {                                                                       //
    if (i in this && this[i] === item) return i;                                                                       //
  }return -1;                                                                                                          //
};                                                                                                                     //
                                                                                                                       //
ViewModel = function () {                                                                                              //
  var _nextId, _t, childrenProperty, currentContext, currentView, delayed, dotRegex, firstToken, getBindHelper, getDelayedSetter, getMatchingParenIndex, getPrimitive, _getValue, isPrimitive, _loadMixinShare, _loadToContainer, quoted, removeQuotes, _setValue, signalContainer, stringRegex, tokenGroup, tokens;
                                                                                                                       //
  _nextId = 1;                                                                                                         //
                                                                                                                       //
  ViewModel.nextId = function () {                                                                                     //
    return _nextId++;                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.persist = true;                                                                                            //
                                                                                                                       //
  ViewModel.properties = {                                                                                             //
    autorun: 1,                                                                                                        //
    events: 1,                                                                                                         //
    share: 1,                                                                                                          //
    mixin: 1,                                                                                                          //
    signal: 1,                                                                                                         //
    ref: 1,                                                                                                            //
    load: 1,                                                                                                           //
    onRendered: 1,                                                                                                     //
    onCreated: 1,                                                                                                      //
    onDestroyed: 1                                                                                                     //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.reserved = {                                                                                               //
    vmId: 1,                                                                                                           //
    vmPathToParent: 1,                                                                                                 //
    vmOnCreated: 1,                                                                                                    //
    vmOnRendered: 1,                                                                                                   //
    vmOnDestroyed: 1,                                                                                                  //
    vmAutorun: 1,                                                                                                      //
    vmEvents: 1,                                                                                                       //
    vmInitial: 1,                                                                                                      //
    vmProp: 1,                                                                                                         //
    templateInstance: 1,                                                                                               //
    templateName: 1,                                                                                                   //
    parent: 1,                                                                                                         //
    children: 1,                                                                                                       //
    child: 1,                                                                                                          //
    reset: 1,                                                                                                          //
    data: 1,                                                                                                           //
    b: 1                                                                                                               //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.nonBindings = {                                                                                            //
    throttle: 1,                                                                                                       //
    optionsText: 1,                                                                                                    //
    optionsValue: 1,                                                                                                   //
    defaultText: 1,                                                                                                    //
    defaultValue: 1                                                                                                    //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.funPropReserved = {                                                                                        //
    valid: 1,                                                                                                          //
    validMessage: 1,                                                                                                   //
    invalid: 1,                                                                                                        //
    invalidMessage: 1,                                                                                                 //
    validating: 1,                                                                                                     //
    message: 1                                                                                                         //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.bindObjects = {};                                                                                          //
                                                                                                                       //
  ViewModel.byId = {};                                                                                                 //
                                                                                                                       //
  ViewModel.byTemplate = {};                                                                                           //
                                                                                                                       //
  ViewModel.add = function (viewmodel) {                                                                               //
    var templateName;                                                                                                  //
    ViewModel.byId[viewmodel.vmId] = viewmodel;                                                                        //
    templateName = ViewModel.templateName(viewmodel.templateInstance);                                                 //
    if (templateName) {                                                                                                //
      if (!ViewModel.byTemplate[templateName]) {                                                                       //
        ViewModel.byTemplate[templateName] = {};                                                                       //
      }                                                                                                                //
      return ViewModel.byTemplate[templateName][viewmodel.vmId] = viewmodel;                                           //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.remove = function (viewmodel) {                                                                            //
    var templateName;                                                                                                  //
    delete ViewModel.byId[viewmodel.vmId];                                                                             //
    templateName = ViewModel.templateName(viewmodel.templateInstance);                                                 //
    if (templateName) {                                                                                                //
      return delete ViewModel.byTemplate[templateName][viewmodel.vmId];                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.find = function (templateNameOrPredicate, predicateOrNothing) {                                            //
    var predicate, templateName, vmCollection, vmCollectionValues;                                                     //
    templateName = _.isString(templateNameOrPredicate) && templateNameOrPredicate;                                     //
    predicate = templateName ? predicateOrNothing : _.isFunction(templateNameOrPredicate) && templateNameOrPredicate;  //
    vmCollection = templateName ? ViewModel.byTemplate[templateName] : ViewModel.byId;                                 //
    if (!vmCollection) {                                                                                               //
      return void 0;                                                                                                   //
    }                                                                                                                  //
    vmCollectionValues = _.values(vmCollection);                                                                       //
    if (predicate) {                                                                                                   //
      return _.filter(vmCollection, predicate);                                                                        //
    } else {                                                                                                           //
      return vmCollectionValues;                                                                                       //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.findOne = function (templateNameOrPredicate, predicateOrNothing) {                                         //
    return _.first(ViewModel.find(templateNameOrPredicate, predicateOrNothing));                                       //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.check = function () {                                                                                      //
    var args, key, ref1;                                                                                               //
    key = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                                  //
    if (Meteor.isDev && !ViewModel.ignoreErrors) {                                                                     //
      if ((ref1 = Package['manuel:viewmodel-debug']) != null) {                                                        //
        ref1.VmCheck.apply(ref1, [key].concat(slice.call(args)));                                                      //
      }                                                                                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.onCreated = function (template) {                                                                          //
    return function () {                                                                                               //
      var autoLoadData, fun, helpers, j, len, loadData, parentTemplate, prop, ref1, ref2, templateInstance, viewmodel;
      templateInstance = this;                                                                                         //
      viewmodel = template.createViewModel(templateInstance.data);                                                     //
      templateInstance.viewmodel = viewmodel;                                                                          //
      viewmodel.templateInstance = templateInstance;                                                                   //
      ViewModel.add(viewmodel);                                                                                        //
      if ((ref1 = templateInstance.data) != null ? ref1.ref : void 0) {                                                //
        parentTemplate = ViewModel.parentTemplate(templateInstance);                                                   //
        if (parentTemplate) {                                                                                          //
          if (!parentTemplate.viewmodel) {                                                                             //
            ViewModel.addEmptyViewModel(parentTemplate);                                                               //
          }                                                                                                            //
          viewmodel.parent()[templateInstance.data.ref] = viewmodel;                                                   //
        }                                                                                                              //
      }                                                                                                                //
      loadData = function loadData() {                                                                                 //
        return ViewModel.delay(0, function () {                                                                        //
          var j, len, migrationData, obj, ref2, vmHash;                                                                //
          if (templateInstance.isDestroyed) {                                                                          //
            return;                                                                                                    //
          }                                                                                                            //
          ViewModel.assignChild(viewmodel);                                                                            //
          ref2 = ViewModel.globals;                                                                                    //
          for (j = 0, len = ref2.length; j < len; j++) {                                                               //
            obj = ref2[j];                                                                                             //
            viewmodel.load(obj);                                                                                       //
          }                                                                                                            //
          vmHash = viewmodel.vmHash();                                                                                 //
          if (migrationData = Migration.get(vmHash)) {                                                                 //
            viewmodel.load(migrationData);                                                                             //
            ViewModel.removeMigration(viewmodel, vmHash);                                                              //
          }                                                                                                            //
          if (viewmodel.onUrl) {                                                                                       //
            ViewModel.loadUrl(viewmodel);                                                                              //
            return ViewModel.saveUrl(viewmodel);                                                                       //
          }                                                                                                            //
        });                                                                                                            //
      };                                                                                                               //
      autoLoadData = function autoLoadData() {                                                                         //
        return templateInstance.autorun(function () {                                                                  //
          return viewmodel.load(Template.currentData());                                                               //
        });                                                                                                            //
      };                                                                                                               //
      if (Tracker.currentComputation) {                                                                                //
        loadData();                                                                                                    //
        ViewModel.delay(0, autoLoadData);                                                                              //
      } else {                                                                                                         //
        autoLoadData();                                                                                                //
        Tracker.afterFlush(function () {                                                                               //
          return loadData();                                                                                           //
        });                                                                                                            //
      }                                                                                                                //
      ref2 = viewmodel.vmOnCreated;                                                                                    //
      for (j = 0, len = ref2.length; j < len; j++) {                                                                   //
        fun = ref2[j];                                                                                                 //
        fun.call(viewmodel, templateInstance);                                                                         //
      }                                                                                                                //
      helpers = {};                                                                                                    //
      for (prop in meteorBabelHelpers.sanitizeForInObject(viewmodel)) {                                                //
        if (!ViewModel.reserved[prop]) {                                                                               //
          (function (prop) {                                                                                           //
            return helpers[prop] = function () {                                                                       //
              var args, instanceVm;                                                                                    //
              args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                            //
              instanceVm = Template.instance().viewmodel;                                                              //
              if (instanceVm[prop]) {                                                                                  //
                return instanceVm[prop].apply(instanceVm, args);                                                       //
              }                                                                                                        //
            };                                                                                                         //
          })(prop);                                                                                                    //
        }                                                                                                              //
      }                                                                                                                //
      template.helpers(helpers);                                                                                       //
    };                                                                                                                 //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.bindIdAttribute = 'b-id';                                                                                  //
                                                                                                                       //
  ViewModel.addEmptyViewModel = function (templateInstance) {                                                          //
    var onCreated, onDestroyed, onRendered, template;                                                                  //
    template = templateInstance.view.template;                                                                         //
    template.viewmodelInitial = {};                                                                                    //
    onCreated = ViewModel.onCreated(template, template.viewmodelInitial);                                              //
    onCreated.call(templateInstance);                                                                                  //
    onRendered = ViewModel.onRendered(template.viewmodelInitial);                                                      //
    onRendered.call(templateInstance);                                                                                 //
    onDestroyed = ViewModel.onDestroyed(template.viewmodelInitial);                                                    //
    templateInstance.view.onViewDestroyed(function () {                                                                //
      return onDestroyed.call(templateInstance);                                                                       //
    });                                                                                                                //
  };                                                                                                                   //
                                                                                                                       //
  getBindHelper = function getBindHelper(useBindings) {                                                                //
    var bindIdAttribute;                                                                                               //
    bindIdAttribute = ViewModel.bindIdAttribute;                                                                       //
    if (!useBindings) {                                                                                                //
      bindIdAttribute += "-e";                                                                                         //
    }                                                                                                                  //
    return function (bindString) {                                                                                     //
      var bindId, bindIdObj, bindObject, bindings, currentView, currentViewInstance, templateInstance;                 //
      bindId = ViewModel.nextId();                                                                                     //
      bindObject = ViewModel.parseBind(bindString);                                                                    //
      ViewModel.bindObjects[bindId] = bindObject;                                                                      //
      templateInstance = Template.instance();                                                                          //
      if (!templateInstance.viewmodel) {                                                                               //
        ViewModel.addEmptyViewModel(templateInstance);                                                                 //
      }                                                                                                                //
      bindings = useBindings ? ViewModel.bindings : _.pick(ViewModel.bindings, 'default');                             //
      currentView = Blaze.currentView;                                                                                 //
      currentViewInstance = currentView._templateInstance || templateInstance;                                         //
      Tracker.afterFlush(function () {                                                                                 //
        var element;                                                                                                   //
        if (currentView.isDestroyed) {                                                                                 //
          return;                                                                                                      //
        }                                                                                                              //
        element = currentViewInstance.$("[" + bindIdAttribute + "='" + bindId + "']");                                 //
        if (element.length && !element[0].vmBound) {                                                                   //
          if (!element.removeAttr) {                                                                                   //
            return;                                                                                                    //
          }                                                                                                            //
          element[0].vmBound = true;                                                                                   //
          element.removeAttr(bindIdAttribute);                                                                         //
          return templateInstance.viewmodel.bind(bindObject, templateInstance, element, bindings, bindId, currentView);
        }                                                                                                              //
      });                                                                                                              //
      bindIdObj = {};                                                                                                  //
      bindIdObj[bindIdAttribute] = bindId;                                                                             //
      return bindIdObj;                                                                                                //
    };                                                                                                                 //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.bindHelper = getBindHelper(true);                                                                          //
                                                                                                                       //
  ViewModel.eventHelper = getBindHelper(false);                                                                        //
                                                                                                                       //
  ViewModel.getInitialObject = function (initial, context) {                                                           //
    if (_.isFunction(initial)) {                                                                                       //
      return initial(context) || {};                                                                                   //
    } else {                                                                                                           //
      return initial || {};                                                                                            //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  delayed = {};                                                                                                        //
                                                                                                                       //
  ViewModel.delay = function (time, nameOrFunc, fn) {                                                                  //
    var d, func, id, name;                                                                                             //
    func = fn || nameOrFunc;                                                                                           //
    if (fn) {                                                                                                          //
      name = nameOrFunc;                                                                                               //
    }                                                                                                                  //
    if (name) {                                                                                                        //
      d = delayed[name];                                                                                               //
    }                                                                                                                  //
    if (d != null) {                                                                                                   //
      Meteor.clearTimeout(d);                                                                                          //
    }                                                                                                                  //
    id = Meteor.setTimeout(func, time);                                                                                //
    if (name) {                                                                                                        //
      return delayed[name] = id;                                                                                       //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.makeReactiveProperty = function (initial, viewmodel) {                                                     //
    var _value, dependency, _funProp, getDone, hasAsync, initialValue, reset, validDependency, validatingItems, validationAsync, validator;
    dependency = new Tracker.Dependency();                                                                             //
    initialValue = initial instanceof ViewModel.Property ? initial.defaultValue : initial;                             //
    _value = void 0;                                                                                                   //
    reset = function reset() {                                                                                         //
      if (initialValue instanceof Array) {                                                                             //
        return _value = new ReactiveArray(initialValue, dependency);                                                   //
      } else {                                                                                                         //
        return _value = initialValue;                                                                                  //
      }                                                                                                                //
    };                                                                                                                 //
    reset();                                                                                                           //
    validator = initial instanceof ViewModel.Property ? initial : ViewModel.Property.validator(initial);               //
    _funProp = function funProp(value) {                                                                               //
      var changeValue;                                                                                                 //
      if (arguments.length) {                                                                                          //
        if (_value !== value) {                                                                                        //
          changeValue = function changeValue() {                                                                       //
            if (validator.beforeUpdates.length) {                                                                      //
              validator.beforeValueUpdate(_value, viewmodel);                                                          //
            }                                                                                                          //
            if (value instanceof Array) {                                                                              //
              _value = new ReactiveArray(value, dependency);                                                           //
            } else {                                                                                                   //
              _value = value;                                                                                          //
            }                                                                                                          //
            if (validator.convertIns.length) {                                                                         //
              _value = validator.convertValueIn(_value, viewmodel);                                                    //
            }                                                                                                          //
            if (validator.afterUpdates.length) {                                                                       //
              validator.afterValueUpdate(_value, viewmodel);                                                           //
            }                                                                                                          //
            return dependency.changed();                                                                               //
          };                                                                                                           //
          if (_funProp.delay > 0) {                                                                                    //
            ViewModel.delay(_funProp.delay, _funProp.vmProp, changeValue);                                             //
          } else {                                                                                                     //
            changeValue();                                                                                             //
          }                                                                                                            //
        }                                                                                                              //
      } else {                                                                                                         //
        dependency.depend();                                                                                           //
      }                                                                                                                //
      if (validator.convertOuts.length) {                                                                              //
        return validator.convertValueOut(_value, viewmodel);                                                           //
      } else {                                                                                                         //
        return _value;                                                                                                 //
      }                                                                                                                //
    };                                                                                                                 //
    _funProp.reset = function () {                                                                                     //
      reset();                                                                                                         //
      return dependency.changed();                                                                                     //
    };                                                                                                                 //
    _funProp.depend = function () {                                                                                    //
      return dependency.depend();                                                                                      //
    };                                                                                                                 //
    _funProp.changed = function () {                                                                                   //
      return dependency.changed();                                                                                     //
    };                                                                                                                 //
    _funProp.delay = 0;                                                                                                //
    _funProp.vmProp = ViewModel.nextId();                                                                              //
    hasAsync = validator.hasAsync();                                                                                   //
    validDependency = void 0;                                                                                          //
    validatingItems = void 0;                                                                                          //
    if (hasAsync) {                                                                                                    //
      validDependency = new Tracker.Dependency();                                                                      //
      validatingItems = new ReactiveArray();                                                                           //
    }                                                                                                                  //
    validationAsync = {};                                                                                              //
    getDone = hasAsync ? function (initialValue) {                                                                     //
      validatingItems.push(1);                                                                                         //
      return function (result) {                                                                                       //
        validatingItems.pop();                                                                                         //
        if (_value === initialValue && !(validationAsync.value === _value || result)) {                                //
          validationAsync = {                                                                                          //
            value: _value                                                                                              //
          };                                                                                                           //
          return validDependency.changed();                                                                            //
        }                                                                                                              //
      };                                                                                                               //
    } : void 0;                                                                                                        //
    _funProp.valid = function (noAsync) {                                                                              //
      dependency.depend();                                                                                             //
      if (hasAsync) {                                                                                                  //
        validDependency.depend();                                                                                      //
      }                                                                                                                //
      if (validationAsync && validationAsync.hasOwnProperty('value') && validationAsync.value === _value) {            //
        return false;                                                                                                  //
      } else {                                                                                                         //
        if (hasAsync && !noAsync) {                                                                                    //
          validator.verifyAsync(_value, getDone(_value), viewmodel);                                                   //
        }                                                                                                              //
        return validator.verify(_value, viewmodel);                                                                    //
      }                                                                                                                //
    };                                                                                                                 //
    _funProp.validMessage = function () {                                                                              //
      return validator.validMessageValue;                                                                              //
    };                                                                                                                 //
    _funProp.invalid = function (noAsync) {                                                                            //
      return !this.valid(noAsync);                                                                                     //
    };                                                                                                                 //
    _funProp.invalidMessage = function () {                                                                            //
      return validator.invalidMessageValue;                                                                            //
    };                                                                                                                 //
    _funProp.validating = function () {                                                                                //
      if (!hasAsync) {                                                                                                 //
        return false;                                                                                                  //
      }                                                                                                                //
      validatingItems.depend();                                                                                        //
      return !!validatingItems.length;                                                                                 //
    };                                                                                                                 //
    _funProp.message = function () {                                                                                   //
      if (this.valid(true)) {                                                                                          //
        return validator.validMessageValue;                                                                            //
      } else {                                                                                                         //
        return validator.invalidMessageValue;                                                                          //
      }                                                                                                                //
    };                                                                                                                 //
    Object.defineProperty(_funProp, 'value', {                                                                         //
      get: function () {                                                                                               //
        function get() {                                                                                               //
          return _value;                                                                                               //
        }                                                                                                              //
                                                                                                                       //
        return get;                                                                                                    //
      }()                                                                                                              //
    });                                                                                                                //
    return _funProp;                                                                                                   //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.bindings = {};                                                                                             //
                                                                                                                       //
  ViewModel.addBinding = function (binding) {                                                                          //
    var bindingArray, bindings;                                                                                        //
    ViewModel.check("@addBinding", binding);                                                                           //
    if (!binding.priority) {                                                                                           //
      binding.priority = 1;                                                                                            //
    }                                                                                                                  //
    if (binding.selector) {                                                                                            //
      binding.priority++;                                                                                              //
    }                                                                                                                  //
    if (binding.bindIf) {                                                                                              //
      binding.priority++;                                                                                              //
    }                                                                                                                  //
    bindings = ViewModel.bindings;                                                                                     //
    if (!bindings[binding.name]) {                                                                                     //
      bindings[binding.name] = [];                                                                                     //
    }                                                                                                                  //
    bindingArray = bindings[binding.name];                                                                             //
    bindingArray[bindingArray.length] = binding;                                                                       //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.addAttributeBinding = function (attrs) {                                                                   //
    var attr, fn1, j, len;                                                                                             //
    if (attrs instanceof Array) {                                                                                      //
      fn1 = function fn1(attr) {                                                                                       //
        return ViewModel.addBinding({                                                                                  //
          name: attr,                                                                                                  //
          bind: function () {                                                                                          //
            function bind(bindArg) {                                                                                   //
              bindArg.autorun(function () {                                                                            //
                return bindArg.element[0].setAttribute(attr, bindArg.getVmValue(bindArg.bindValue[attr]));             //
              });                                                                                                      //
            }                                                                                                          //
                                                                                                                       //
            return bind;                                                                                               //
          }()                                                                                                          //
        });                                                                                                            //
      };                                                                                                               //
      for (j = 0, len = attrs.length; j < len; j++) {                                                                  //
        attr = attrs[j];                                                                                               //
        fn1(attr);                                                                                                     //
      }                                                                                                                //
    } else if (_.isString(attrs)) {                                                                                    //
      ViewModel.addBinding({                                                                                           //
        name: attrs,                                                                                                   //
        bind: function () {                                                                                            //
          function bind(bindArg) {                                                                                     //
            bindArg.autorun(function () {                                                                              //
              return bindArg.element[0].setAttribute(attrs, bindArg.getVmValue(bindArg.bindValue[attrs]));             //
            });                                                                                                        //
          }                                                                                                            //
                                                                                                                       //
          return bind;                                                                                                 //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.getBinding = function (bindName, bindArg, bindings) {                                                      //
    var binding, bindingArray;                                                                                         //
    binding = null;                                                                                                    //
    bindingArray = bindings[bindName];                                                                                 //
    if (bindingArray) {                                                                                                //
      if (bindingArray.length === 1 && !(bindingArray[0].bindIf || bindingArray[0].selector)) {                        //
        binding = bindingArray[0];                                                                                     //
      } else {                                                                                                         //
        binding = _.find(_.sortBy(bindingArray, function (b) {                                                         //
          return -b.priority;                                                                                          //
        }), function (b) {                                                                                             //
          return !(b.bindIf && !b.bindIf(bindArg) || b.selector && !bindArg.element.is(b.selector));                   //
        });                                                                                                            //
      }                                                                                                                //
    }                                                                                                                  //
    return binding || ViewModel.getBinding('default', bindArg, bindings);                                              //
  };                                                                                                                   //
                                                                                                                       //
  getDelayedSetter = function getDelayedSetter(bindArg, setter, bindId) {                                              //
    if (bindArg.elementBind.throttle) {                                                                                //
      return function () {                                                                                             //
        var args;                                                                                                      //
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                  //
        return ViewModel.delay(bindArg.getVmValue(bindArg.elementBind.throttle), bindId, function () {                 //
          return setter.apply(null, args);                                                                             //
        });                                                                                                            //
      };                                                                                                               //
    } else {                                                                                                           //
      return setter;                                                                                                   //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.getBindArgument = function (templateInstance, element, bindName, bindValue, bindObject, viewmodel, bindId, view) {
    var bindArg;                                                                                                       //
    bindArg = {                                                                                                        //
      templateInstance: templateInstance,                                                                              //
      autorun: function () {                                                                                           //
        function autorun(f) {                                                                                          //
          var fun;                                                                                                     //
          fun = function () {                                                                                          //
            function fun(c) {                                                                                          //
              return f(bindArg, c);                                                                                    //
            }                                                                                                          //
                                                                                                                       //
            return fun;                                                                                                //
          }();                                                                                                         //
          templateInstance.autorun(fun);                                                                               //
        }                                                                                                              //
                                                                                                                       //
        return autorun;                                                                                                //
      }(),                                                                                                             //
      element: element,                                                                                                //
      elementBind: bindObject,                                                                                         //
      getVmValue: ViewModel.getVmValueGetter(viewmodel, bindValue, view),                                              //
      bindName: bindName,                                                                                              //
      bindValue: bindValue,                                                                                            //
      viewmodel: viewmodel                                                                                             //
    };                                                                                                                 //
    bindArg.setVmValue = getDelayedSetter(bindArg, ViewModel.getVmValueSetter(viewmodel, bindValue, view), bindId);    //
    return bindArg;                                                                                                    //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.bindSingle = function (templateInstance, element, bindName, bindValue, bindObject, viewmodel, bindings, bindId, view) {
    var bindArg, binding, eventFunc, eventName, fn1, ref1;                                                             //
    bindArg = ViewModel.getBindArgument(templateInstance, element, bindName, bindValue, bindObject, viewmodel, bindId, view);
    binding = ViewModel.getBinding(bindName, bindArg, bindings);                                                       //
    if (!binding) {                                                                                                    //
      return;                                                                                                          //
    }                                                                                                                  //
    if (binding.bind) {                                                                                                //
      binding.bind(bindArg);                                                                                           //
    }                                                                                                                  //
    if (binding.autorun) {                                                                                             //
      bindArg.autorun(binding.autorun);                                                                                //
    }                                                                                                                  //
    if (binding.events) {                                                                                              //
      ref1 = binding.events;                                                                                           //
      fn1 = function fn1(eventName, eventFunc) {                                                                       //
        return element.bind(eventName, function (e) {                                                                  //
          return eventFunc(bindArg, e);                                                                                //
        });                                                                                                            //
      };                                                                                                               //
      for (eventName in meteorBabelHelpers.sanitizeForInObject(ref1)) {                                                //
        eventFunc = ref1[eventName];                                                                                   //
        fn1(eventName, eventFunc);                                                                                     //
      }                                                                                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  stringRegex = /^(?:"(?:[^"]|\\")*[^\\]"|'(?:[^']|\\')*[^\\]')$/;                                                     //
                                                                                                                       //
  quoted = function quoted(str) {                                                                                      //
    return stringRegex.test(str);                                                                                      //
  };                                                                                                                   //
                                                                                                                       //
  removeQuotes = function removeQuotes(str) {                                                                          //
    return str.substr(1, str.length - 2);                                                                              //
  };                                                                                                                   //
                                                                                                                       //
  isPrimitive = function isPrimitive(val) {                                                                            //
    return val === "true" || val === "false" || val === "null" || val === "undefined" || $.isNumeric(val);             //
  };                                                                                                                   //
                                                                                                                       //
  getPrimitive = function getPrimitive(val) {                                                                          //
    switch (val) {                                                                                                     //
      case "true":                                                                                                     //
        return true;                                                                                                   //
      case "false":                                                                                                    //
        return false;                                                                                                  //
      case "null":                                                                                                     //
        return null;                                                                                                   //
      case "undefined":                                                                                                //
        return void 0;                                                                                                 //
      default:                                                                                                         //
        if ($.isNumeric(val)) {                                                                                        //
          return parseFloat(val);                                                                                      //
        } else {                                                                                                       //
          return val;                                                                                                  //
        }                                                                                                              //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  tokens = {                                                                                                           //
    '**': function () {                                                                                                //
      function _(a, b) {                                                                                               //
        return Math.pow(a, b);                                                                                         //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '*': function () {                                                                                                 //
      function _(a, b) {                                                                                               //
        return a * b;                                                                                                  //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '/': function () {                                                                                                 //
      function _(a, b) {                                                                                               //
        return a / b;                                                                                                  //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '%': function () {                                                                                                 //
      function _(a, b) {                                                                                               //
        return a % b;                                                                                                  //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '+': function () {                                                                                                 //
      function _(a, b) {                                                                                               //
        return a + b;                                                                                                  //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '-': function () {                                                                                                 //
      function _(a, b) {                                                                                               //
        return a - b;                                                                                                  //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '<': function () {                                                                                                 //
      function _(a, b) {                                                                                               //
        return a < b;                                                                                                  //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '<=': function () {                                                                                                //
      function _(a, b) {                                                                                               //
        return a <= b;                                                                                                 //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '>': function () {                                                                                                 //
      function _(a, b) {                                                                                               //
        return a > b;                                                                                                  //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '>=': function () {                                                                                                //
      function _(a, b) {                                                                                               //
        return a >= b;                                                                                                 //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '==': function () {                                                                                                //
      function _(a, b) {                                                                                               //
        return a == b;                                                                                                 //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '!==': function () {                                                                                               //
      function _(a, b) {                                                                                               //
        return a !== b;                                                                                                //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '===': function () {                                                                                               //
      function _(a, b) {                                                                                               //
        return a === b;                                                                                                //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '!===': function () {                                                                                              //
      function _(a, b) {                                                                                               //
        return a !== b;                                                                                                //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '&&': function () {                                                                                                //
      function _(a, b) {                                                                                               //
        return a && b;                                                                                                 //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }(),                                                                                                               //
    '||': function () {                                                                                                //
      function _(a, b) {                                                                                               //
        return a || b;                                                                                                 //
      }                                                                                                                //
                                                                                                                       //
      return _;                                                                                                        //
    }()                                                                                                                //
  };                                                                                                                   //
                                                                                                                       //
  tokenGroup = {};                                                                                                     //
                                                                                                                       //
  for (_t in meteorBabelHelpers.sanitizeForInObject(tokens)) {                                                         //
    if (!tokenGroup[_t.length]) {                                                                                      //
      tokenGroup[_t.length] = {};                                                                                      //
    }                                                                                                                  //
    tokenGroup[_t.length][_t] = 1;                                                                                     //
  }                                                                                                                    //
                                                                                                                       //
  dotRegex = /(\D\.)|(\.\D)/;                                                                                          //
                                                                                                                       //
  firstToken = function firstToken(str) {                                                                              //
    var c, candidateToken, i, inQuote, j, k, len, length, parensCount, token, tokenIndex;                              //
    tokenIndex = -1;                                                                                                   //
    token = null;                                                                                                      //
    inQuote = null;                                                                                                    //
    parensCount = 0;                                                                                                   //
    for (i = j = 0, len = str.length; j < len; i = ++j) {                                                              //
      c = str[i];                                                                                                      //
      if (token) {                                                                                                     //
        break;                                                                                                         //
      }                                                                                                                //
      if (c === '"' || c === "'") {                                                                                    //
        if (inQuote === c) {                                                                                           //
          inQuote = null;                                                                                              //
        } else if (!inQuote) {                                                                                         //
          inQuote = c;                                                                                                 //
        }                                                                                                              //
      } else if (!inQuote && (c === '(' || c === ')')) {                                                               //
        if (c === '(') {                                                                                               //
          parensCount++;                                                                                               //
        }                                                                                                              //
        if (c === ')') {                                                                                               //
          parensCount--;                                                                                               //
        }                                                                                                              //
      } else if (!inQuote && parensCount === 0 && ~"+-*/%&|><=".indexOf(c)) {                                          //
        tokenIndex = i;                                                                                                //
        for (length = k = 4; k >= 1; length = --k) {                                                                   //
          if (str.length > tokenIndex + length) {                                                                      //
            candidateToken = str.substr(tokenIndex, length);                                                           //
            if (tokenGroup[length] && tokenGroup[length][candidateToken]) {                                            //
              token = candidateToken;                                                                                  //
              break;                                                                                                   //
            }                                                                                                          //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    return [token, tokenIndex];                                                                                        //
  };                                                                                                                   //
                                                                                                                       //
  getMatchingParenIndex = function getMatchingParenIndex(bindValue, parenIndexStart) {                                 //
    var currentChar, i, j, openParenCount, ref1, ref2;                                                                 //
    if (!~parenIndexStart) {                                                                                           //
      return -1;                                                                                                       //
    }                                                                                                                  //
    openParenCount = 0;                                                                                                //
    for (i = j = ref1 = parenIndexStart + 1, ref2 = bindValue.length; ref1 <= ref2 ? j <= ref2 : j >= ref2; i = ref1 <= ref2 ? ++j : --j) {
      currentChar = bindValue.charAt(i);                                                                               //
      if (currentChar === ')') {                                                                                       //
        if (openParenCount === 0) {                                                                                    //
          return i;                                                                                                    //
        } else {                                                                                                       //
          openParenCount--;                                                                                            //
        }                                                                                                              //
      } else if (currentChar === '(') {                                                                                //
        openParenCount++;                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    throw new Error("Unbalanced parenthesis");                                                                         //
  };                                                                                                                   //
                                                                                                                       //
  currentView = null;                                                                                                  //
                                                                                                                       //
  currentContext = function currentContext() {                                                                         //
    var ref1;                                                                                                          //
    if (currentView) {                                                                                                 //
      return Blaze.getData(currentView);                                                                               //
    } else {                                                                                                           //
      return (ref1 = Template.instance()) != null ? ref1.data : void 0;                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  _getValue = function getValue(container, bindValue, viewmodel, funPropReserved) {                                    //
    var arg, args, breakOnFirstDot, dotIndex, errorMsg, j, left, len, name, neg, negate, newArg, newBindValue, newBindValueCheck, newContainer, parenIndexEnd, parenIndexStart, parsed, primitive, ref1, ref2, right, second, templateName, token, tokenIndex, value;
    bindValue = bindValue.trim();                                                                                      //
    if (isPrimitive(bindValue)) {                                                                                      //
      return getPrimitive(bindValue);                                                                                  //
    }                                                                                                                  //
    ref1 = firstToken(bindValue), token = ref1[0], tokenIndex = ref1[1];                                               //
    if (~tokenIndex) {                                                                                                 //
      left = _getValue(container, bindValue.substring(0, tokenIndex), viewmodel);                                      //
      if (token === '&&' && !left || token === '||' && left) {                                                         //
        value = left;                                                                                                  //
      } else {                                                                                                         //
        right = _getValue(container, bindValue.substring(tokenIndex + token.length), viewmodel);                       //
        value = tokens[token.trim()](left, right);                                                                     //
      }                                                                                                                //
    } else if (bindValue === "this") {                                                                                 //
      value = currentContext();                                                                                        //
    } else if (quoted(bindValue)) {                                                                                    //
      value = removeQuotes(bindValue);                                                                                 //
    } else {                                                                                                           //
      negate = bindValue.charAt(0) === '!';                                                                            //
      if (negate) {                                                                                                    //
        bindValue = bindValue.substring(1);                                                                            //
      }                                                                                                                //
      dotIndex = bindValue.search(dotRegex);                                                                           //
      if (~dotIndex && bindValue.charAt(dotIndex) !== '.') {                                                           //
        dotIndex += 1;                                                                                                 //
      }                                                                                                                //
      parenIndexStart = bindValue.indexOf('(');                                                                        //
      parenIndexEnd = getMatchingParenIndex(bindValue, parenIndexStart);                                               //
      breakOnFirstDot = ~dotIndex && (!~parenIndexStart || dotIndex < parenIndexStart || dotIndex === parenIndexEnd + 1);
      if (breakOnFirstDot) {                                                                                           //
        newBindValue = bindValue.substring(dotIndex + 1);                                                              //
        newBindValueCheck = newBindValue.endsWith('()') ? newBindValue.substr(0, newBindValue.length - 2) : newBindValue;
        newContainer = _getValue(container, bindValue.substring(0, dotIndex), viewmodel, ViewModel.funPropReserved[newBindValueCheck]);
        value = _getValue(newContainer, newBindValue, viewmodel);                                                      //
      } else {                                                                                                         //
        if (container == null) {                                                                                       //
          value = void 0;                                                                                              //
        } else {                                                                                                       //
          name = bindValue;                                                                                            //
          args = [];                                                                                                   //
          if (~parenIndexStart) {                                                                                      //
            parsed = ViewModel.parseBind(bindValue);                                                                   //
            name = Object.keys(parsed)[0];                                                                             //
            second = parsed[name];                                                                                     //
            if (second.length > 2) {                                                                                   //
              ref2 = second.substr(1, second.length - 2).split(',');                                                   //
              for (j = 0, len = ref2.length; j < len; j++) {                                                           //
                arg = ref2[j];                                                                                         //
                arg = $.trim(arg);                                                                                     //
                newArg = void 0;                                                                                       //
                if (arg === "this") {                                                                                  //
                  newArg = currentContext();                                                                           //
                } else if (quoted(arg)) {                                                                              //
                  newArg = removeQuotes(arg);                                                                          //
                } else {                                                                                               //
                  neg = arg.charAt(0) === '!';                                                                         //
                  if (neg) {                                                                                           //
                    arg = arg.substring(1);                                                                            //
                  }                                                                                                    //
                  arg = _getValue(viewmodel, arg, viewmodel);                                                          //
                  if (viewmodel && arg in viewmodel) {                                                                 //
                    newArg = _getValue(viewmodel, arg, viewmodel);                                                     //
                  } else {                                                                                             //
                    newArg = arg;                                                                                      //
                  }                                                                                                    //
                  if (neg) {                                                                                           //
                    newArg = !newArg;                                                                                  //
                  }                                                                                                    //
                }                                                                                                      //
                args.push(newArg);                                                                                     //
              }                                                                                                        //
            }                                                                                                          //
          }                                                                                                            //
          primitive = isPrimitive(name);                                                                               //
          if (container instanceof ViewModel && !primitive && !container[name]) {                                      //
            container[name] = ViewModel.makeReactiveProperty(void 0, viewmodel);                                       //
          }                                                                                                            //
          if (!primitive && !(container != null && (container[name] != null || _.isObject(container)))) {              //
            errorMsg = "Can't access '" + name + "' of '" + container + "'.";                                          //
            if (viewmodel) {                                                                                           //
              templateName = ViewModel.templateName(viewmodel.templateInstance);                                       //
              errorMsg += " This is for template '" + templateName + "'.";                                             //
            }                                                                                                          //
            console.error(errorMsg);                                                                                   //
          } else if (primitive) {                                                                                      //
            value = getPrimitive(name);                                                                                //
          } else if (!name in container) {                                                                             //
            return void 0;                                                                                             //
          } else {                                                                                                     //
            if (!funPropReserved && _.isFunction(container[name])) {                                                   //
              value = container[name].apply(container, args);                                                          //
            } else {                                                                                                   //
              value = container[name];                                                                                 //
            }                                                                                                          //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
      if (negate) {                                                                                                    //
        value = !value;                                                                                                //
      }                                                                                                                //
    }                                                                                                                  //
    return value;                                                                                                      //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.getVmValueGetter = function (viewmodel, bindValue, view) {                                                 //
    return function (optBindValue) {                                                                                   //
      if (optBindValue == null) {                                                                                      //
        optBindValue = bindValue;                                                                                      //
      }                                                                                                                //
      currentView = view;                                                                                              //
      return _getValue(viewmodel, optBindValue.toString(), viewmodel);                                                 //
    };                                                                                                                 //
  };                                                                                                                   //
                                                                                                                       //
  _setValue = function setValue(value, container, bindValue, viewmodel) {                                              //
    var i, left, newBindValue, newContainer, ref1, retValue, right, token, tokenIndex;                                 //
    bindValue = bindValue.trim();                                                                                      //
    if (isPrimitive(bindValue)) {                                                                                      //
      return getPrimitive(bindValue);                                                                                  //
    }                                                                                                                  //
    ref1 = firstToken(bindValue), token = ref1[0], tokenIndex = ref1[1];                                               //
    retValue = void 0;                                                                                                 //
    if (~tokenIndex) {                                                                                                 //
      left = _setValue(value, container, bindValue.substring(0, tokenIndex), viewmodel);                               //
      if (token === '&&' && !left) {                                                                                   //
        return left;                                                                                                   //
      }                                                                                                                //
      if (token === '||' && left) {                                                                                    //
        return left;                                                                                                   //
      }                                                                                                                //
      right = _setValue(value, container, bindValue.substring(tokenIndex + token.length), viewmodel);                  //
      retValue = tokens[token.trim()](left, right);                                                                    //
    } else if (~bindValue.indexOf(')', bindValue.length - 1)) {                                                        //
      retValue = _getValue(viewmodel, bindValue, viewmodel);                                                           //
    } else if (dotRegex.test(bindValue)) {                                                                             //
      i = bindValue.search(dotRegex);                                                                                  //
      if (bindValue.charAt(i) !== '.') {                                                                               //
        i += 1;                                                                                                        //
      }                                                                                                                //
      newContainer = _getValue(container, bindValue.substring(0, i), viewmodel);                                       //
      newBindValue = bindValue.substring(i + 1);                                                                       //
      retValue = _setValue(value, newContainer, newBindValue, viewmodel);                                              //
    } else {                                                                                                           //
      if (_.isFunction(container[bindValue])) {                                                                        //
        retValue = container[bindValue](value);                                                                        //
      } else {                                                                                                         //
        container[bindValue] = value;                                                                                  //
        retValue = value;                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    return retValue;                                                                                                   //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.getVmValueSetter = function (viewmodel, bindValue, view) {                                                 //
    if (!_.isString(bindValue)) {                                                                                      //
      return function () {};                                                                                           //
    }                                                                                                                  //
    return function (value) {                                                                                          //
      currentView = view;                                                                                              //
      return _setValue(value, viewmodel, bindValue, viewmodel);                                                        //
    };                                                                                                                 //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.parentTemplate = function (templateInstance) {                                                             //
    var ref1, view;                                                                                                    //
    view = (ref1 = templateInstance.view) != null ? ref1.parentView : void 0;                                          //
    while (view) {                                                                                                     //
      if (view.name.substring(0, 9) === 'Template.' || view.name === 'body') {                                         //
        return view.templateInstance();                                                                                //
      }                                                                                                                //
      view = view.parentView;                                                                                          //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.assignChild = function (viewmodel) {                                                                       //
    var ref1;                                                                                                          //
    if ((ref1 = viewmodel.parent()) != null) {                                                                         //
      ref1.children().push(viewmodel);                                                                                 //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.onRendered = function () {                                                                                 //
    return function () {                                                                                               //
      var initial, templateInstance, viewmodel;                                                                        //
      templateInstance = this;                                                                                         //
      viewmodel = templateInstance.viewmodel;                                                                          //
      initial = viewmodel.vmInitial;                                                                                   //
      ViewModel.check("@onRendered", initial.autorun, templateInstance);                                               //
      ViewModel.delay(0, function () {                                                                                 //
        var autorun, fn1, fun, j, k, len, len1, ref1, ref2;                                                            //
        if (templateInstance.isDestroyed) {                                                                            //
          return;                                                                                                      //
        }                                                                                                              //
        ref1 = viewmodel.vmOnRendered;                                                                                 //
        for (j = 0, len = ref1.length; j < len; j++) {                                                                 //
          fun = ref1[j];                                                                                               //
          fun.call(viewmodel, templateInstance);                                                                       //
        }                                                                                                              //
        ref2 = viewmodel.vmAutorun;                                                                                    //
        fn1 = function fn1(autorun) {                                                                                  //
          fun = function fun(c) {                                                                                      //
            return autorun.call(viewmodel, c);                                                                         //
          };                                                                                                           //
          return templateInstance.autorun(fun);                                                                        //
        };                                                                                                             //
        for (k = 0, len1 = ref2.length; k < len1; k++) {                                                               //
          autorun = ref2[k];                                                                                           //
          fn1(autorun);                                                                                                //
        }                                                                                                              //
      });                                                                                                              //
    };                                                                                                                 //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.loadProperties = function (toLoad, container) {                                                            //
    var j, len, loadObj, obj;                                                                                          //
    loadObj = function loadObj(obj) {                                                                                  //
      var key, value;                                                                                                  //
      for (key in meteorBabelHelpers.sanitizeForInObject(obj)) {                                                       //
        value = obj[key];                                                                                              //
        if (!ViewModel.properties[key]) {                                                                              //
          if (ViewModel.reserved[key]) {                                                                               //
            throw new Error("Can't use reserved word '" + key + "' as a view model property.");                        //
          } else {                                                                                                     //
            if (_.isFunction(value)) {                                                                                 //
              container[key] = value;                                                                                  //
            } else if (container[key] && container[key].vmProp && _.isFunction(container[key])) {                      //
              container[key](value);                                                                                   //
            } else {                                                                                                   //
              container[key] = ViewModel.makeReactiveProperty(value, container);                                       //
            }                                                                                                          //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
    };                                                                                                                 //
    if (toLoad instanceof Array) {                                                                                     //
      for (j = 0, len = toLoad.length; j < len; j++) {                                                                 //
        obj = toLoad[j];                                                                                               //
        loadObj(obj);                                                                                                  //
      }                                                                                                                //
    } else {                                                                                                           //
      loadObj(toLoad);                                                                                                 //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.bind = function (bindObject, templateInstance, element, bindings, bindId, view) {                //
    var bindName, bindNameSingle, bindValue, j, len, ref1, viewmodel;                                                  //
    viewmodel = this;                                                                                                  //
    for (bindName in meteorBabelHelpers.sanitizeForInObject(bindObject)) {                                             //
      bindValue = bindObject[bindName];                                                                                //
      if (!ViewModel.nonBindings[bindName]) {                                                                          //
        if (~bindName.indexOf(' ')) {                                                                                  //
          ref1 = bindName.split(' ');                                                                                  //
          for (j = 0, len = ref1.length; j < len; j++) {                                                               //
            bindNameSingle = ref1[j];                                                                                  //
            ViewModel.bindSingle(templateInstance, element, bindNameSingle, bindValue, bindObject, viewmodel, bindings, bindId, view);
          }                                                                                                            //
        } else {                                                                                                       //
          ViewModel.bindSingle(templateInstance, element, bindName, bindValue, bindObject, viewmodel, bindings, bindId, view);
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  _loadMixinShare = function loadMixinShare(toLoad, collection, viewmodel, onlyEvents) {                               //
    var container, element, item, j, k, len, len1, mixshare, ref;                                                      //
    if (toLoad) {                                                                                                      //
      if (toLoad instanceof Array) {                                                                                   //
        for (j = 0, len = toLoad.length; j < len; j++) {                                                               //
          element = toLoad[j];                                                                                         //
          if (_.isString(element)) {                                                                                   //
            _loadToContainer(viewmodel, viewmodel, collection[element], onlyEvents);                                   //
          } else {                                                                                                     //
            _loadMixinShare(element, collection, viewmodel, onlyEvents);                                               //
          }                                                                                                            //
        }                                                                                                              //
      } else if (_.isString(toLoad)) {                                                                                 //
        _loadToContainer(viewmodel, viewmodel, collection[toLoad], onlyEvents);                                        //
      } else {                                                                                                         //
        for (ref in meteorBabelHelpers.sanitizeForInObject(toLoad)) {                                                  //
          container = {};                                                                                              //
          mixshare = toLoad[ref];                                                                                      //
          if (mixshare instanceof Array) {                                                                             //
            for (k = 0, len1 = mixshare.length; k < len1; k++) {                                                       //
              item = mixshare[k];                                                                                      //
              _loadToContainer(container, viewmodel, collection[item], onlyEvents);                                    //
            }                                                                                                          //
          } else {                                                                                                     //
            _loadToContainer(container, viewmodel, collection[mixshare], onlyEvents);                                  //
          }                                                                                                            //
          viewmodel[ref] = container;                                                                                  //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  _loadToContainer = function loadToContainer(container, viewmodel, toLoad, onlyEvents) {                              //
    var hook, hooks, item, j, k, len, len1, results, signal, signals, vmProp;                                          //
    if (!toLoad) {                                                                                                     //
      return;                                                                                                          //
    }                                                                                                                  //
    if (toLoad instanceof Array) {                                                                                     //
      for (j = 0, len = toLoad.length; j < len; j++) {                                                                 //
        item = toLoad[j];                                                                                              //
        _loadToContainer(container, viewmodel, item, onlyEvents);                                                      //
      }                                                                                                                //
    }                                                                                                                  //
    if (!onlyEvents) {                                                                                                 //
      signals = ViewModel.signalToLoad(toLoad.signal, container);                                                      //
      for (k = 0, len1 = signals.length; k < len1; k++) {                                                              //
        signal = signals[k];                                                                                           //
        _loadToContainer(container, viewmodel, signal, onlyEvents);                                                    //
        viewmodel.vmOnCreated.push(signal.onCreated);                                                                  //
        viewmodel.vmOnDestroyed.push(signal.onDestroyed);                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    _loadMixinShare(toLoad.share, ViewModel.shared, container, onlyEvents);                                            //
    _loadMixinShare(toLoad.mixin, ViewModel.mixins, container, onlyEvents);                                            //
    _loadToContainer(container, viewmodel, toLoad.load, onlyEvents);                                                   //
    if (!onlyEvents) {                                                                                                 //
      ViewModel.loadProperties(toLoad, container);                                                                     //
    }                                                                                                                  //
    if (onlyEvents) {                                                                                                  //
      hooks = {                                                                                                        //
        events: 'vmEvents'                                                                                             //
      };                                                                                                               //
    } else {                                                                                                           //
      hooks = {                                                                                                        //
        onCreated: 'vmOnCreated',                                                                                      //
        onRendered: 'vmOnRendered',                                                                                    //
        onDestroyed: 'vmOnDestroyed',                                                                                  //
        autorun: 'vmAutorun'                                                                                           //
      };                                                                                                               //
    }                                                                                                                  //
    results = [];                                                                                                      //
    for (hook in meteorBabelHelpers.sanitizeForInObject(hooks)) {                                                      //
      vmProp = hooks[hook];                                                                                            //
      if (toLoad[hook]) {                                                                                              //
        if (toLoad[hook] instanceof Array) {                                                                           //
          results.push(function () {                                                                                   //
            var l, len2, ref1, results1;                                                                               //
            ref1 = toLoad[hook];                                                                                       //
            results1 = [];                                                                                             //
            for (l = 0, len2 = ref1.length; l < len2; l++) {                                                           //
              item = ref1[l];                                                                                          //
              results1.push(viewmodel[vmProp].push(item));                                                             //
            }                                                                                                          //
            return results1;                                                                                           //
          }());                                                                                                        //
        } else {                                                                                                       //
          results.push(viewmodel[vmProp].push(toLoad[hook]));                                                          //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    return results;                                                                                                    //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.load = function (toLoad, onlyEvents) {                                                           //
    return _loadToContainer(this, this, toLoad, onlyEvents);                                                           //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.parent = function () {                                                                           //
    var args, instance, parentTemplate, viewmodel;                                                                     //
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                      //
    ViewModel.check.apply(ViewModel, ["#parent"].concat(slice.call(args)));                                            //
    viewmodel = this;                                                                                                  //
    instance = viewmodel.templateInstance;                                                                             //
    while (parentTemplate = ViewModel.parentTemplate(instance)) {                                                      //
      if (parentTemplate.viewmodel) {                                                                                  //
        return parentTemplate.viewmodel;                                                                               //
      } else {                                                                                                         //
        instance = parentTemplate;                                                                                     //
      }                                                                                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.reset = function () {                                                                            //
    var prop, ref1, results, viewmodel;                                                                                //
    viewmodel = this;                                                                                                  //
    results = [];                                                                                                      //
    for (prop in meteorBabelHelpers.sanitizeForInObject(viewmodel)) {                                                  //
      if (_.isFunction((ref1 = viewmodel[prop]) != null ? ref1.reset : void 0)) {                                      //
        results.push(viewmodel[prop].reset());                                                                         //
      }                                                                                                                //
    }                                                                                                                  //
    return results;                                                                                                    //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.data = function (fields) {                                                                       //
    var js, prop, ref1, value, viewmodel;                                                                              //
    if (fields == null) {                                                                                              //
      fields = [];                                                                                                     //
    }                                                                                                                  //
    viewmodel = this;                                                                                                  //
    js = {};                                                                                                           //
    for (prop in meteorBabelHelpers.sanitizeForInObject(viewmodel)) {                                                  //
      if (!(((ref1 = viewmodel[prop]) != null ? ref1.vmProp : void 0) && (fields.length === 0 || indexOf.call(fields, prop) >= 0))) {
        continue;                                                                                                      //
      }                                                                                                                //
      viewmodel[prop].depend();                                                                                        //
      value = viewmodel[prop].value;                                                                                   //
      if (value instanceof ReactiveArray) {                                                                            //
        js[prop] = value.array();                                                                                      //
      } else {                                                                                                         //
        js[prop] = value;                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    return js;                                                                                                         //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.valid = function (fields) {                                                                      //
    var prop, ref1, viewmodel;                                                                                         //
    if (fields == null) {                                                                                              //
      fields = [];                                                                                                     //
    }                                                                                                                  //
    viewmodel = this;                                                                                                  //
    for (prop in meteorBabelHelpers.sanitizeForInObject(viewmodel)) {                                                  //
      if (((ref1 = viewmodel[prop]) != null ? ref1.vmProp : void 0) && (fields.length === 0 || indexOf.call(fields, prop) >= 0)) {
        if (!viewmodel[prop].valid(true)) {                                                                            //
          return false;                                                                                                //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    return true;                                                                                                       //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.validMessages = function (fields) {                                                              //
    var message, messages, prop, ref1, viewmodel;                                                                      //
    if (fields == null) {                                                                                              //
      fields = [];                                                                                                     //
    }                                                                                                                  //
    viewmodel = this;                                                                                                  //
    messages = [];                                                                                                     //
    for (prop in meteorBabelHelpers.sanitizeForInObject(viewmodel)) {                                                  //
      if (((ref1 = viewmodel[prop]) != null ? ref1.vmProp : void 0) && (fields.length === 0 || indexOf.call(fields, prop) >= 0)) {
        if (viewmodel[prop].valid(true)) {                                                                             //
          message = viewmodel[prop].message();                                                                         //
          if (message) {                                                                                               //
            messages.push(message);                                                                                    //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    return messages;                                                                                                   //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.invalid = function (fields) {                                                                    //
    if (fields == null) {                                                                                              //
      fields = [];                                                                                                     //
    }                                                                                                                  //
    return !this.valid(fields);                                                                                        //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.invalidMessages = function (fields) {                                                            //
    var message, messages, prop, ref1, viewmodel;                                                                      //
    if (fields == null) {                                                                                              //
      fields = [];                                                                                                     //
    }                                                                                                                  //
    viewmodel = this;                                                                                                  //
    messages = [];                                                                                                     //
    for (prop in meteorBabelHelpers.sanitizeForInObject(viewmodel)) {                                                  //
      if (((ref1 = viewmodel[prop]) != null ? ref1.vmProp : void 0) && (fields.length === 0 || indexOf.call(fields, prop) >= 0)) {
        if (!viewmodel[prop].valid(true)) {                                                                            //
          message = viewmodel[prop].message();                                                                         //
          if (message) {                                                                                               //
            messages.push(message);                                                                                    //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
    return messages;                                                                                                   //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.templateName = function () {                                                                     //
    return ViewModel.templateName(this.templateInstance);                                                              //
  };                                                                                                                   //
                                                                                                                       //
  childrenProperty = function childrenProperty() {                                                                     //
    var array, funProp;                                                                                                //
    array = new ReactiveArray();                                                                                       //
    funProp = function funProp(search, predicate) {                                                                    //
      var first, newPredicate;                                                                                         //
      array.depend();                                                                                                  //
      if (arguments.length) {                                                                                          //
        ViewModel.check("#children", search);                                                                          //
        newPredicate = void 0;                                                                                         //
        if (_.isString(search)) {                                                                                      //
          first = function first(vm) {                                                                                 //
            return ViewModel.templateName(vm.templateInstance) === search;                                             //
          };                                                                                                           //
          if (predicate) {                                                                                             //
            newPredicate = function newPredicate(vm) {                                                                 //
              return first(vm) && predicate(vm);                                                                       //
            };                                                                                                         //
          } else {                                                                                                     //
            newPredicate = first;                                                                                      //
          }                                                                                                            //
        } else {                                                                                                       //
          newPredicate = search;                                                                                       //
        }                                                                                                              //
        return _.filter(array, newPredicate);                                                                          //
      } else {                                                                                                         //
        return array;                                                                                                  //
      }                                                                                                                //
    };                                                                                                                 //
    return funProp;                                                                                                    //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.getPathTo = function (element) {                                                                           //
    var i, ix, sibling, siblings;                                                                                      //
    if (!element || !element.parentNode || element.tagName === 'HTML' || element === document.body) {                  //
      return '/';                                                                                                      //
    }                                                                                                                  //
    ix = 0;                                                                                                            //
    siblings = element.parentNode.childNodes;                                                                          //
    i = 0;                                                                                                             //
    while (i < siblings.length) {                                                                                      //
      sibling = siblings[i];                                                                                           //
      if (sibling === element) {                                                                                       //
        return ViewModel.getPathTo(element.parentNode) + '/' + element.tagName + '[' + (ix + 1) + ']';                 //
      }                                                                                                                //
      if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {                                             //
        ix++;                                                                                                          //
      }                                                                                                                //
      i++;                                                                                                             //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  function ViewModel(initial) {                                                                                        //
    var viewmodel;                                                                                                     //
    ViewModel.check("#constructor", initial);                                                                          //
    viewmodel = this;                                                                                                  //
    viewmodel.vmId = ViewModel.nextId();                                                                               //
    this.vmOnCreated = [];                                                                                             //
    this.vmOnRendered = [];                                                                                            //
    this.vmOnDestroyed = [];                                                                                           //
    this.vmAutorun = [];                                                                                               //
    this.vmEvents = [];                                                                                                //
    viewmodel.load(initial);                                                                                           //
    this.children = childrenProperty();                                                                                //
    viewmodel.vmPathToParent = function () {                                                                           //
      var difference, i, parentPath, viewmodelPath;                                                                    //
      viewmodelPath = ViewModel.getPathTo(viewmodel.templateInstance.firstNode);                                       //
      if (!viewmodel.parent()) {                                                                                       //
        return viewmodelPath;                                                                                          //
      }                                                                                                                //
      parentPath = ViewModel.getPathTo(viewmodel.parent().templateInstance.firstNode);                                 //
      i = 0;                                                                                                           //
      while (parentPath[i] === viewmodelPath[i] && parentPath[i] != null) {                                            //
        i++;                                                                                                           //
      }                                                                                                                //
      difference = viewmodelPath.substr(i);                                                                            //
      return difference;                                                                                               //
    };                                                                                                                 //
    return;                                                                                                            //
  }                                                                                                                    //
                                                                                                                       //
  ViewModel.prototype.child = function () {                                                                            //
    var args, children;                                                                                                //
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                      //
    children = this.children.apply(this, args);                                                                        //
    if (children != null ? children.length : void 0) {                                                                 //
      return children[0];                                                                                              //
    } else {                                                                                                           //
      return void 0;                                                                                                   //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.onDestroyed = function (initial) {                                                                         //
    return function () {                                                                                               //
      var child, children, fun, indexToRemove, j, k, len, len1, parent, ref1, templateInstance, viewmodel;             //
      templateInstance = this;                                                                                         //
      if (_.isFunction(initial)) {                                                                                     //
        initial = initial(templateInstance.data);                                                                      //
      }                                                                                                                //
      viewmodel = templateInstance.viewmodel;                                                                          //
      ref1 = viewmodel.vmOnDestroyed;                                                                                  //
      for (j = 0, len = ref1.length; j < len; j++) {                                                                   //
        fun = ref1[j];                                                                                                 //
        fun.call(viewmodel, templateInstance);                                                                         //
      }                                                                                                                //
      parent = viewmodel.parent();                                                                                     //
      if (parent) {                                                                                                    //
        children = parent.children();                                                                                  //
        indexToRemove = -1;                                                                                            //
        for (k = 0, len1 = children.length; k < len1; k++) {                                                           //
          child = children[k];                                                                                         //
          indexToRemove++;                                                                                             //
          if (child.vmId === viewmodel.vmId) {                                                                         //
            children.splice(indexToRemove, 1);                                                                         //
            break;                                                                                                     //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
      ViewModel.remove(viewmodel);                                                                                     //
    };                                                                                                                 //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.templateName = function (templateInstance) {                                                               //
    var name, ref1;                                                                                                    //
    name = templateInstance != null ? (ref1 = templateInstance.view) != null ? ref1.name : void 0 : void 0;            //
    if (!name) {                                                                                                       //
      return '';                                                                                                       //
    }                                                                                                                  //
    if (name === 'body') {                                                                                             //
      return name;                                                                                                     //
    } else {                                                                                                           //
      return name.substr(name.indexOf('.') + 1);                                                                       //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.prototype.vmHash = function () {                                                                           //
    var key, viewmodel;                                                                                                //
    viewmodel = this;                                                                                                  //
    key = ViewModel.templateName(viewmodel.templateInstance);                                                          //
    if (viewmodel.parent()) {                                                                                          //
      key += viewmodel.parent().vmHash();                                                                              //
    }                                                                                                                  //
    if (viewmodel.vmTag) {                                                                                             //
      key += viewmodel.vmTag();                                                                                        //
    } else if (viewmodel._id) {                                                                                        //
      key += viewmodel._id();                                                                                          //
    } else {                                                                                                           //
      key += viewmodel.vmPathToParent();                                                                               //
    }                                                                                                                  //
    return SHA256(key).toString();                                                                                     //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.removeMigration = function (viewmodel, vmHash) {                                                           //
    return Migration["delete"](vmHash);                                                                                //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.shared = {};                                                                                               //
                                                                                                                       //
  ViewModel.share = function (obj) {                                                                                   //
    var content, key, prop, value;                                                                                     //
    for (key in meteorBabelHelpers.sanitizeForInObject(obj)) {                                                         //
      value = obj[key];                                                                                                //
      ViewModel.shared[key] = {};                                                                                      //
      for (prop in meteorBabelHelpers.sanitizeForInObject(value)) {                                                    //
        content = value[prop];                                                                                         //
        if (_.isFunction(content) || ViewModel.properties[prop]) {                                                     //
          ViewModel.shared[key][prop] = content;                                                                       //
        } else {                                                                                                       //
          ViewModel.shared[key][prop] = ViewModel.makeReactiveProperty(content);                                       //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.globals = [];                                                                                              //
                                                                                                                       //
  ViewModel.global = function (obj) {                                                                                  //
    return ViewModel.globals.push(obj);                                                                                //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.mixins = {};                                                                                               //
                                                                                                                       //
  ViewModel.mixin = function (obj) {                                                                                   //
    var key, value;                                                                                                    //
    for (key in meteorBabelHelpers.sanitizeForInObject(obj)) {                                                         //
      value = obj[key];                                                                                                //
      ViewModel.mixins[key] = value;                                                                                   //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.signals = {};                                                                                              //
                                                                                                                       //
  ViewModel.signal = function (obj) {                                                                                  //
    var key, value;                                                                                                    //
    for (key in meteorBabelHelpers.sanitizeForInObject(obj)) {                                                         //
      value = obj[key];                                                                                                //
      ViewModel.signals[key] = value;                                                                                  //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  signalContainer = function signalContainer(containerName, container) {                                               //
    var all, fn1, key, signalObject, value;                                                                            //
    all = [];                                                                                                          //
    if (!containerName) {                                                                                              //
      return all;                                                                                                      //
    }                                                                                                                  //
    signalObject = ViewModel.signals[containerName];                                                                   //
    fn1 = function fn1(key, value) {                                                                                   //
      var boundProp, single, transform;                                                                                //
      single = {};                                                                                                     //
      single[key] = {};                                                                                                //
      transform = value.transform || function (e) {                                                                    //
        return e;                                                                                                      //
      };                                                                                                               //
      boundProp = "_" + key + "_Bound";                                                                                //
      single.onCreated = function () {                                                                                 //
        var func, funcToUse, vmProp;                                                                                   //
        vmProp = container[key];                                                                                       //
        func = function func(e) {                                                                                      //
          return vmProp(transform(e));                                                                                 //
        };                                                                                                             //
        funcToUse = value.throttle ? _.throttle(func, value.throttle) : func;                                          //
        container[boundProp] = funcToUse;                                                                              //
        return value.target.addEventListener(value.event, funcToUse);                                                  //
      };                                                                                                               //
      single.onDestroyed = function () {                                                                               //
        return value.target.removeEventListener(value.event, this[boundProp]);                                         //
      };                                                                                                               //
      return all.push(single);                                                                                         //
    };                                                                                                                 //
    for (key in meteorBabelHelpers.sanitizeForInObject(signalObject)) {                                                //
      value = signalObject[key];                                                                                       //
      fn1(key, value);                                                                                                 //
    }                                                                                                                  //
    return all;                                                                                                        //
  };                                                                                                                   //
                                                                                                                       //
  ViewModel.signalToLoad = function (containerName, container) {                                                       //
    var name;                                                                                                          //
    if (containerName instanceof Array) {                                                                              //
      return _.flatten(function () {                                                                                   //
        var j, len, results;                                                                                           //
        results = [];                                                                                                  //
        for (j = 0, len = containerName.length; j < len; j++) {                                                        //
          name = containerName[j];                                                                                     //
          results.push(signalContainer(name, container));                                                              //
        }                                                                                                              //
        return results;                                                                                                //
      }(), true);                                                                                                      //
    } else {                                                                                                           //
      return signalContainer(containerName, container);                                                                //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  return ViewModel;                                                                                                    //
}();                                                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewmodel-parseBind.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/manuel_viewmodel/lib/viewmodel-parseBind.coffee.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var _bindingToken, _divisionLookBehind, _keywordRegexLookBehind, _operators, everyThingElse, oneNotSpace, specials, stringDouble, stringRegexp, stringSingle;
                                                                                                                       //
stringDouble = '"(?:[^"\\\\]|\\\\.)*"';                                                                                // 1
                                                                                                                       //
stringSingle = '\'(?:[^\'\\\\]|\\\\.)*\'';                                                                             // 2
                                                                                                                       //
stringRegexp = '/(?:[^/\\\\]|\\\\.)*/w*';                                                                              // 3
                                                                                                                       //
specials = ',"\'{}()/:[\\]';                                                                                           // 4
                                                                                                                       //
everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']';                                                // 5
                                                                                                                       //
oneNotSpace = '[^\\s]';                                                                                                // 6
                                                                                                                       //
_bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g');
                                                                                                                       //
_divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/;                                                                          // 9
                                                                                                                       //
_keywordRegexLookBehind = {                                                                                            // 10
  "in": 1,                                                                                                             //
  "return": 1,                                                                                                         //
  "typeof": 1                                                                                                          //
};                                                                                                                     //
                                                                                                                       //
_operators = "+-*/&|=><";                                                                                              // 15
                                                                                                                       //
ViewModel.parseBind = function(objectLiteralString) {                                                                  // 17
  var c, depth, i, key, match, result, str, tok, toks, v, values;                                                      // 18
  str = $.trim(objectLiteralString);                                                                                   //
  if (str.charCodeAt(0) === 123) {                                                                                     //
    str = str.slice(1, -1);                                                                                            //
  }                                                                                                                    //
  result = {};                                                                                                         //
  toks = str.match(_bindingToken);                                                                                     //
  depth = 0;                                                                                                           //
  key = void 0;                                                                                                        //
  values = void 0;                                                                                                     //
  if (toks) {                                                                                                          //
    toks.push(',');                                                                                                    //
    i = -1;                                                                                                            //
    tok = void 0;                                                                                                      //
    while (tok = toks[++i]) {                                                                                          // 29
      c = tok.charCodeAt(0);                                                                                           //
      if (c === 44) {                                                                                                  //
        if (depth <= 0) {                                                                                              //
          if (key) {                                                                                                   //
            if (!values) {                                                                                             //
              throw new Error("Error parsing: " + objectLiteralString);                                                // 35
            } else {                                                                                                   //
              v = values.join('');                                                                                     //
              if (v.indexOf('{') === 0) {                                                                              //
                v = this.parseBind(v);                                                                                 //
              }                                                                                                        //
              result[key] = v;                                                                                         //
            }                                                                                                          //
          }                                                                                                            //
          key = values = depth = 0;                                                                                    //
          continue;                                                                                                    // 41
        }                                                                                                              //
      } else if (c === 58) {                                                                                           //
        if (!values) {                                                                                                 //
          continue;                                                                                                    // 44
        }                                                                                                              //
      } else if (c === 47 && i && tok.length > 1) {                                                                    //
        match = toks[i - 1].match(_divisionLookBehind);                                                                //
        if (match && !_keywordRegexLookBehind[match[0]]) {                                                             //
          str = str.substr(str.indexOf(tok) + 1);                                                                      //
          toks = str.match(_bindingToken);                                                                             //
          toks.push(',');                                                                                              //
          i = -1;                                                                                                      //
          tok = '/';                                                                                                   //
        }                                                                                                              //
      } else if (c === 40 || c === 123 || c === 91) {                                                                  //
        ++depth;                                                                                                       //
      } else if (c === 41 || c === 125 || c === 93) {                                                                  //
        --depth;                                                                                                       //
      } else if (!key && !values) {                                                                                    //
        key = (c === 34 || c === 39 ? tok.slice(1, -1) : tok);                                                         //
        continue;                                                                                                      // 59
      }                                                                                                                //
      if (~_operators.indexOf(tok[0])) {                                                                               //
        tok = ' ' + tok;                                                                                               //
      }                                                                                                                //
      if (~_operators.indexOf(tok[tok.length - 1])) {                                                                  //
        tok += ' ';                                                                                                    //
      }                                                                                                                //
      if (values) {                                                                                                    //
        values.push(tok);                                                                                              //
      } else {                                                                                                         //
        values = [tok];                                                                                                //
      }                                                                                                                //
    }                                                                                                                  //
  }                                                                                                                    //
  if (objectLiteralString && !Object.getOwnPropertyNames(result).length) {                                             //
    throw new Error("Error parsing: " + objectLiteralString);                                                          // 72
  } else {                                                                                                             //
    return result;                                                                                                     // 74
  }                                                                                                                    //
};                                                                                                                     // 17
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bindings.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/manuel_viewmodel/lib/bindings.coffee.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var addBinding,                                                                                                        //
    canDisable,                                                                                                        //
    changeBinding,                                                                                                     //
    disable,                                                                                                           //
    enable,                                                                                                            //
    enableDisable,                                                                                                     //
    isArray,                                                                                                           //
    showHide,                                                                                                          //
    valueAutorun,                                                                                                      //
    valueEvent,                                                                                                        //
    indexOf = [].indexOf || function (item) {                                                                          //
  for (var i = 0, l = this.length; i < l; i++) {                                                                       //
    if (i in this && this[i] === item) return i;                                                                       //
  }return -1;                                                                                                          //
};                                                                                                                     //
                                                                                                                       //
isArray = function isArray(obj) {                                                                                      //
  return obj instanceof Array;                                                                                         //
};                                                                                                                     //
                                                                                                                       //
addBinding = ViewModel.addBinding;                                                                                     //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'default',                                                                                                     //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      bindArg.element.on(bindArg.bindName, function (event) {                                                          //
        bindArg.setVmValue(event);                                                                                     //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'toggle',                                                                                                      //
  events: {                                                                                                            //
    click: function () {                                                                                               //
      function click(bindArg) {                                                                                        //
        var value;                                                                                                     //
        value = bindArg.getVmValue();                                                                                  //
        return bindArg.setVmValue(!value);                                                                             //
      }                                                                                                                //
                                                                                                                       //
      return click;                                                                                                    //
    }()                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
showHide = function showHide(reverse) {                                                                                //
  return function (bindArg) {                                                                                          //
    var show;                                                                                                          //
    show = bindArg.getVmValue();                                                                                       //
    if (reverse) {                                                                                                     //
      show = !show;                                                                                                    //
    }                                                                                                                  //
    if (show) {                                                                                                        //
      return bindArg.element.show();                                                                                   //
    } else {                                                                                                           //
      return bindArg.element.hide();                                                                                   //
    }                                                                                                                  //
  };                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'if',                                                                                                          //
  autorun: showHide(false)                                                                                             //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'visible',                                                                                                     //
  autorun: showHide(false)                                                                                             //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'unless',                                                                                                      //
  autorun: showHide(true)                                                                                              //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'hide',                                                                                                        //
  autorun: showHide(true)                                                                                              //
});                                                                                                                    //
                                                                                                                       //
valueEvent = function valueEvent(bindArg) {                                                                            //
  var newVal, vmVal;                                                                                                   //
  newVal = bindArg.element.val();                                                                                      //
  vmVal = bindArg.getVmValue();                                                                                        //
  vmVal = vmVal == null ? "" : vmVal.toString();                                                                       //
  if (bindArg.elementBind.throttle && !bindArg.viewmodel.hasOwnProperty(bindArg.bindValue)) {                          //
    bindArg.viewmodel[bindArg.bindValue] = {};                                                                         //
  }                                                                                                                    //
  if (newVal !== vmVal || bindArg.elementBind.throttle && (!bindArg.viewmodel[bindArg.bindValue].hasOwnProperty('nextVal') || newVal !== bindArg.viewmodel[bindArg.bindValue].nextVal)) {
    if (bindArg.elementBind.throttle) {                                                                                //
      bindArg.viewmodel[bindArg.bindValue].nextVal = newVal;                                                           //
      bindArg.setVmValue(newVal);                                                                                      //
    } else {                                                                                                           //
      bindArg.setVmValue(newVal);                                                                                      //
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
valueAutorun = function valueAutorun(bindArg) {                                                                        //
  var newVal;                                                                                                          //
  newVal = bindArg.getVmValue();                                                                                       //
  newVal = newVal == null ? "" : newVal.toString();                                                                    //
  if (newVal !== bindArg.element.val()) {                                                                              //
    bindArg.element.val(newVal);                                                                                       //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'value',                                                                                                       //
  events: {                                                                                                            //
    'input change': valueEvent                                                                                         //
  },                                                                                                                   //
  autorun: valueAutorun                                                                                                //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'text',                                                                                                        //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      bindArg.element.text(bindArg.getVmValue());                                                                      //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'html',                                                                                                        //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      return bindArg.element.html(bindArg.getVmValue());                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
changeBinding = function changeBinding(eb) {                                                                           //
  return eb.value || eb.check || eb.text || eb.html || eb.focus || eb.hover || eb.toggle || eb["if"] || eb.visible || eb.unless || eb.hide || eb.enable || eb.disable;
};                                                                                                                     //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'change',                                                                                                      //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      var bindValue;                                                                                                   //
      bindValue = changeBinding(bindArg.elementBind);                                                                  //
      return bindArg.autorun(function (bindArg, c) {                                                                   //
        var newValue;                                                                                                  //
        newValue = bindArg.getVmValue(bindValue);                                                                      //
        if (!c.firstRun) {                                                                                             //
          return bindArg.setVmValue(newValue);                                                                         //
        }                                                                                                              //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }(),                                                                                                                 //
  bindIf: function () {                                                                                                //
    function bindIf(bindArg) {                                                                                         //
      return changeBinding(bindArg.elementBind);                                                                       //
    }                                                                                                                  //
                                                                                                                       //
    return bindIf;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'enter',                                                                                                       //
  events: {                                                                                                            //
    'keyup': function () {                                                                                             //
      function keyup(bindArg, event) {                                                                                 //
        if (event.which === 13 || event.keyCode === 13) {                                                              //
          return bindArg.setVmValue(event);                                                                            //
        }                                                                                                              //
      }                                                                                                                //
                                                                                                                       //
      return keyup;                                                                                                    //
    }()                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'attr',                                                                                                        //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      var attr, fn;                                                                                                    //
      fn = function () {                                                                                               //
        function fn(attr) {                                                                                            //
          return bindArg.autorun(function () {                                                                         //
            return bindArg.element[0].setAttribute(attr, bindArg.getVmValue(bindArg.bindValue[attr]));                 //
          });                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return fn;                                                                                                     //
      }();                                                                                                             //
      for (attr in meteorBabelHelpers.sanitizeForInObject(bindArg.bindValue)) {                                        //
        fn(attr);                                                                                                      //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'check',                                                                                                       //
  events: {                                                                                                            //
    'change': function () {                                                                                            //
      function change(bindArg) {                                                                                       //
        bindArg.setVmValue(bindArg.element.is(':checked'));                                                            //
      }                                                                                                                //
                                                                                                                       //
      return change;                                                                                                   //
    }()                                                                                                                //
  },                                                                                                                   //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var elementCheck, vmValue;                                                                                       //
      vmValue = bindArg.getVmValue();                                                                                  //
      elementCheck = bindArg.element.is(':checked');                                                                   //
      if (elementCheck !== vmValue) {                                                                                  //
        return bindArg.element.prop('checked', vmValue);                                                               //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'check',                                                                                                       //
  selector: 'input[type=radio]',                                                                                       //
  events: {                                                                                                            //
    'change': function () {                                                                                            //
      function change(bindArg) {                                                                                       //
        var checked, name, rawElement;                                                                                 //
        checked = bindArg.element.is(':checked');                                                                      //
        bindArg.setVmValue(checked);                                                                                   //
        rawElement = bindArg.element[0];                                                                               //
        if (checked && (name = rawElement.name)) {                                                                     //
          bindArg.templateInstance.$("input[type=radio][name=" + name + "]").each(function () {                        //
            if (rawElement !== this) {                                                                                 //
              return $(this).trigger('change');                                                                        //
            }                                                                                                          //
          });                                                                                                          //
        }                                                                                                              //
      }                                                                                                                //
                                                                                                                       //
      return change;                                                                                                   //
    }()                                                                                                                //
  },                                                                                                                   //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var elementCheck, vmValue;                                                                                       //
      vmValue = bindArg.getVmValue();                                                                                  //
      elementCheck = bindArg.element.is(':checked');                                                                   //
      if (elementCheck !== vmValue) {                                                                                  //
        return bindArg.element.prop('checked', vmValue);                                                               //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'group',                                                                                                       //
  selector: 'input[type=checkbox]',                                                                                    //
  events: {                                                                                                            //
    'change': function () {                                                                                            //
      function change(bindArg) {                                                                                       //
        var elementValue, vmValue;                                                                                     //
        vmValue = bindArg.getVmValue();                                                                                //
        elementValue = bindArg.element.val();                                                                          //
        if (bindArg.element.is(':checked')) {                                                                          //
          if (indexOf.call(vmValue, elementValue) < 0) {                                                               //
            return vmValue.push(elementValue);                                                                         //
          }                                                                                                            //
        } else {                                                                                                       //
          return vmValue.remove(elementValue);                                                                         //
        }                                                                                                              //
      }                                                                                                                //
                                                                                                                       //
      return change;                                                                                                   //
    }()                                                                                                                //
  },                                                                                                                   //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var elementCheck, elementValue, newValue, vmValue;                                                               //
      vmValue = bindArg.getVmValue();                                                                                  //
      elementCheck = bindArg.element.is(':checked');                                                                   //
      elementValue = bindArg.element.val();                                                                            //
      newValue = indexOf.call(vmValue, elementValue) >= 0;                                                             //
      if (elementCheck !== newValue) {                                                                                 //
        return bindArg.element.prop('checked', newValue);                                                              //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'group',                                                                                                       //
  selector: 'input[type=radio]',                                                                                       //
  events: {                                                                                                            //
    'change': function () {                                                                                            //
      function change(bindArg) {                                                                                       //
        var checked, name, rawElement;                                                                                 //
        checked = bindArg.element.is(':checked');                                                                      //
        if (checked) {                                                                                                 //
          bindArg.setVmValue(bindArg.element.val());                                                                   //
          rawElement = bindArg.element[0];                                                                             //
          if (name = rawElement.name) {                                                                                //
            bindArg.templateInstance.$("input[type=radio][name=" + name + "]").each(function () {                      //
              if (rawElement !== this) {                                                                               //
                return $(this).trigger('change');                                                                      //
              }                                                                                                        //
            });                                                                                                        //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
                                                                                                                       //
      return change;                                                                                                   //
    }()                                                                                                                //
  },                                                                                                                   //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var elementValue, vmValue;                                                                                       //
      vmValue = bindArg.getVmValue();                                                                                  //
      elementValue = bindArg.element.val();                                                                            //
      return bindArg.element.prop('checked', vmValue === elementValue);                                                //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'class',                                                                                                       //
  bindIf: function () {                                                                                                //
    function bindIf(bindArg) {                                                                                         //
      return _.isString(bindArg.bindValue);                                                                            //
    }                                                                                                                  //
                                                                                                                       //
    return bindIf;                                                                                                     //
  }(),                                                                                                                 //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      return bindArg.prevValue = '';                                                                                   //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }(),                                                                                                                 //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var newValue;                                                                                                    //
      newValue = bindArg.getVmValue();                                                                                 //
      bindArg.element.removeClass(bindArg.prevValue);                                                                  //
      bindArg.element.addClass(newValue);                                                                              //
      return bindArg.prevValue = newValue;                                                                             //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'class',                                                                                                       //
  bindIf: function () {                                                                                                //
    function bindIf(bindArg) {                                                                                         //
      return !_.isString(bindArg.bindValue);                                                                           //
    }                                                                                                                  //
                                                                                                                       //
    return bindIf;                                                                                                     //
  }(),                                                                                                                 //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      var cssClass, fn;                                                                                                //
      fn = function () {                                                                                               //
        function fn(cssClass) {                                                                                        //
          return bindArg.autorun(function () {                                                                         //
            if (bindArg.getVmValue(bindArg.bindValue[cssClass])) {                                                     //
              bindArg.element.addClass(cssClass);                                                                      //
            } else {                                                                                                   //
              bindArg.element.removeClass(cssClass);                                                                   //
            }                                                                                                          //
          });                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return fn;                                                                                                     //
      }();                                                                                                             //
      for (cssClass in meteorBabelHelpers.sanitizeForInObject(bindArg.bindValue)) {                                    //
        fn(cssClass);                                                                                                  //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'style',                                                                                                       //
  priority: 2,                                                                                                         //
  bindIf: function () {                                                                                                //
    function bindIf(bindArg) {                                                                                         //
      return _.isString(bindArg.bindValue) && bindArg.bindValue.charAt(0) === '[';                                     //
    }                                                                                                                  //
                                                                                                                       //
    return bindIf;                                                                                                     //
  }(),                                                                                                                 //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var i, item, itemString, items, len, value;                                                                      //
      itemString = bindArg.bindValue.substr(1, bindArg.bindValue.length - 2);                                          //
      items = itemString.split(',');                                                                                   //
      for (i = 0, len = items.length; i < len; i++) {                                                                  //
        item = items[i];                                                                                               //
        value = bindArg.getVmValue($.trim(item));                                                                      //
        bindArg.element.css(value);                                                                                    //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'style',                                                                                                       //
  bindIf: function () {                                                                                                //
    function bindIf(bindArg) {                                                                                         //
      return _.isString(bindArg.bindValue);                                                                            //
    }                                                                                                                  //
                                                                                                                       //
    return bindIf;                                                                                                     //
  }(),                                                                                                                 //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var newValue;                                                                                                    //
      newValue = bindArg.getVmValue();                                                                                 //
      if (_.isString(newValue)) {                                                                                      //
        if (~newValue.indexOf(";")) {                                                                                  //
          newValue = newValue.split(";").join(",");                                                                    //
        }                                                                                                              //
        newValue = ViewModel.parseBind(newValue);                                                                      //
      }                                                                                                                //
      return bindArg.element.css(newValue);                                                                            //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'style',                                                                                                       //
  bindIf: function () {                                                                                                //
    function bindIf(bindArg) {                                                                                         //
      return !_.isString(bindArg.bindValue);                                                                           //
    }                                                                                                                  //
                                                                                                                       //
    return bindIf;                                                                                                     //
  }(),                                                                                                                 //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      var fn, style;                                                                                                   //
      fn = function () {                                                                                               //
        function fn(style) {                                                                                           //
          return bindArg.autorun(function () {                                                                         //
            bindArg.element.css(style, bindArg.getVmValue(bindArg.bindValue[style]));                                  //
          });                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return fn;                                                                                                     //
      }();                                                                                                             //
      for (style in meteorBabelHelpers.sanitizeForInObject(bindArg.bindValue)) {                                       //
        fn(style);                                                                                                     //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'hover',                                                                                                       //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      var setBool;                                                                                                     //
      setBool = function () {                                                                                          //
        function setBool(val) {                                                                                        //
          return function () {                                                                                         //
            return bindArg.setVmValue(val);                                                                            //
          };                                                                                                           //
        }                                                                                                              //
                                                                                                                       //
        return setBool;                                                                                                //
      }();                                                                                                             //
      bindArg.element.hover(setBool(true), setBool(false));                                                            //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'focus',                                                                                                       //
  events: {                                                                                                            //
    focus: function () {                                                                                               //
      function focus(bindArg) {                                                                                        //
        if (!bindArg.getVmValue()) {                                                                                   //
          bindArg.setVmValue(true);                                                                                    //
        }                                                                                                              //
      }                                                                                                                //
                                                                                                                       //
      return focus;                                                                                                    //
    }(),                                                                                                               //
    blur: function () {                                                                                                //
      function blur(bindArg) {                                                                                         //
        if (bindArg.getVmValue()) {                                                                                    //
          bindArg.setVmValue(false);                                                                                   //
        }                                                                                                              //
      }                                                                                                                //
                                                                                                                       //
      return blur;                                                                                                     //
    }()                                                                                                                //
  },                                                                                                                   //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var value;                                                                                                       //
      value = bindArg.getVmValue();                                                                                    //
      if (bindArg.element.is(':focus') !== value) {                                                                    //
        if (value) {                                                                                                   //
          bindArg.element.focus();                                                                                     //
        } else {                                                                                                       //
          bindArg.element.blur();                                                                                      //
        }                                                                                                              //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
canDisable = function canDisable(elem) {                                                                               //
  return elem.is('button') || elem.is('input') || elem.is('textarea') || elem.is('select');                            //
};                                                                                                                     //
                                                                                                                       //
enable = function enable(elem) {                                                                                       //
  if (canDisable(elem)) {                                                                                              //
    return elem.removeAttr('disabled');                                                                                //
  } else {                                                                                                             //
    return elem.removeClass('disabled');                                                                               //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
disable = function disable(elem) {                                                                                     //
  if (canDisable(elem)) {                                                                                              //
    return elem.attr('disabled', 'disabled');                                                                          //
  } else {                                                                                                             //
    return elem.addClass('disabled');                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
enableDisable = function enableDisable(reverse) {                                                                      //
  return function (bindArg) {                                                                                          //
    var isEnable;                                                                                                      //
    isEnable = bindArg.getVmValue();                                                                                   //
    if (reverse) {                                                                                                     //
      isEnable = !isEnable;                                                                                            //
    }                                                                                                                  //
    if (isEnable) {                                                                                                    //
      return enable(bindArg.element);                                                                                  //
    } else {                                                                                                           //
      return disable(bindArg.element);                                                                                 //
    }                                                                                                                  //
  };                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'enable',                                                                                                      //
  autorun: enableDisable(false)                                                                                        //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'disable',                                                                                                     //
  autorun: enableDisable(true)                                                                                         //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'options',                                                                                                     //
  selector: 'select:not([multiple])',                                                                                  //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var collection, defaultText, defaultValue, i, item, itemText, itemTextRaw, itemValue, len, optionsText, optionsValue, selected, selection, source;
      optionsText = bindArg.elementBind.optionsText;                                                                   //
      optionsValue = bindArg.elementBind.optionsValue;                                                                 //
      selection = bindArg.getVmValue(bindArg.elementBind.value);                                                       //
      bindArg.element.find('option').remove();                                                                         //
      defaultText = bindArg.elementBind.defaultText;                                                                   //
      defaultValue = bindArg.elementBind.defaultValue;                                                                 //
      if (defaultText != null || defaultValue != null) {                                                               //
        itemText = _.escape(defaultText != null && bindArg.getVmValue(defaultText) || '');                             //
        itemValue = _.escape(defaultValue != null && bindArg.getVmValue(defaultValue) || '');                          //
        bindArg.element.append("<option selected='selected' value=\"" + itemValue + "\">" + itemText + "</option>");   //
      }                                                                                                                //
      source = bindArg.getVmValue();                                                                                   //
      collection = source instanceof Mongo.Cursor ? source.fetch() : source;                                           //
      for (i = 0, len = collection.length; i < len; i++) {                                                             //
        item = collection[i];                                                                                          //
        itemTextRaw = optionsText ? item.hasOwnProperty(optionsText) ? item[optionsText] : _.isFunction(bindArg.viewmodel[optionsText]) ? bindArg.viewmodel[optionsText](item) : void 0 : item;
        itemText = _.escape(itemTextRaw);                                                                              //
        itemValue = _.escape(optionsValue ? item[optionsValue] : item);                                                //
        selected = selection === itemValue ? "selected='selected'" : "";                                               //
        bindArg.element.append("<option " + selected + " value=\"" + itemValue + "\">" + itemText + "</option>");      //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'options',                                                                                                     //
  selector: 'select[multiple]',                                                                                        //
  autorun: function () {                                                                                               //
    function autorun(bindArg) {                                                                                        //
      var collection, i, item, itemText, itemTextRaw, itemValue, len, optionsText, optionsValue, selected, selection, source;
      optionsText = bindArg.elementBind.optionsText;                                                                   //
      optionsValue = bindArg.elementBind.optionsValue;                                                                 //
      selection = bindArg.getVmValue(bindArg.elementBind.value);                                                       //
      bindArg.element.find('option').remove();                                                                         //
      source = bindArg.getVmValue();                                                                                   //
      collection = source instanceof Mongo.Cursor ? source.fetch() : source;                                           //
      for (i = 0, len = collection.length; i < len; i++) {                                                             //
        item = collection[i];                                                                                          //
        itemTextRaw = optionsText ? item.hasOwnProperty(optionsText) ? item[optionsText] : _.isFunction(bindArg.viewmodel[optionsText]) ? bindArg.viewmodel[optionsText](item) : void 0 : item;
        itemText = _.escape(itemTextRaw);                                                                              //
        itemValue = _.escape(optionsValue ? item[optionsValue] : item);                                                //
        selected = indexOf.call(selection, itemValue) >= 0 ? "selected='selected'" : "";                               //
        bindArg.element.append("<option " + selected + " value=\"" + itemValue + "\">" + itemText + "</option>");      //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return autorun;                                                                                                    //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'value',                                                                                                       //
  selector: 'select[multiple]',                                                                                        //
  events: {                                                                                                            //
    change: function () {                                                                                              //
      function change(bindArg) {                                                                                       //
        var elementValues, i, len, selected, v;                                                                        //
        elementValues = bindArg.element.val();                                                                         //
        selected = bindArg.getVmValue();                                                                               //
        if (isArray(selected)) {                                                                                       //
          selected.clear();                                                                                            //
          if (isArray(elementValues)) {                                                                                //
            for (i = 0, len = elementValues.length; i < len; i++) {                                                    //
              v = elementValues[i];                                                                                    //
              selected.push(v);                                                                                        //
            }                                                                                                          //
          }                                                                                                            //
        }                                                                                                              //
      }                                                                                                                //
                                                                                                                       //
      return change;                                                                                                   //
    }()                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'ref',                                                                                                         //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      ViewModel.check("refBinding", bindArg);                                                                          //
      bindArg.viewmodel[bindArg.bindValue] = bindArg.element;                                                          //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'refGroup',                                                                                                    //
  bind: function () {                                                                                                  //
    function bind(bindArg) {                                                                                           //
      var group;                                                                                                       //
      if (!bindArg.viewmodel[bindArg.bindValue]) {                                                                     //
        bindArg.viewmodel[bindArg.bindValue] = $();                                                                    //
      }                                                                                                                //
      group = bindArg.viewmodel[bindArg.bindValue];                                                                    //
      group.push.apply(group, bindArg.element);                                                                        //
    }                                                                                                                  //
                                                                                                                       //
    return bind;                                                                                                       //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'value',                                                                                                       //
  selector: 'input[type=file]:not([multiple])',                                                                        //
  events: {                                                                                                            //
    change: function () {                                                                                              //
      function change(bindArg, event) {                                                                                //
        var file, ref;                                                                                                 //
        file = ((ref = event.target.files) != null ? ref.length : void 0) ? event.target.files[0] : null;              //
        bindArg.setVmValue(file);                                                                                      //
      }                                                                                                                //
                                                                                                                       //
      return change;                                                                                                   //
    }()                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
addBinding({                                                                                                           //
  name: 'value',                                                                                                       //
  selector: 'input[type=file][multiple]',                                                                              //
  events: {                                                                                                            //
    change: function () {                                                                                              //
      function change(bindArg, event) {                                                                                //
        var file, files, i, len, ref, results;                                                                         //
        files = bindArg.getVmValue();                                                                                  //
        files.clear();                                                                                                 //
        ref = event.target.files;                                                                                      //
        results = [];                                                                                                  //
        for (i = 0, len = ref.length; i < len; i++) {                                                                  //
          file = ref[i];                                                                                               //
          results.push(files.push(file));                                                                              //
        }                                                                                                              //
        return results;                                                                                                //
      }                                                                                                                //
                                                                                                                       //
      return change;                                                                                                   //
    }()                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/manuel_viewmodel/lib/template.coffee.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var htmls;                                                                                                             // 1
                                                                                                                       //
Template.registerHelper('b', ViewModel.bindHelper);                                                                    // 1
                                                                                                                       //
Template.registerHelper('on', ViewModel.eventHelper);                                                                  // 2
                                                                                                                       //
Blaze.Template.prototype.viewmodel = function(initial) {                                                               // 4
  var event, eventFunction, eventGroup, fn, i, initialObject, len, ref, template, viewmodel;                           // 5
  template = this;                                                                                                     //
  ViewModel.check('T#viewmodel', initial, template);                                                                   //
  ViewModel.check('T#viewmodelArgs', template, arguments);                                                             //
  template.viewmodelInitial = initial;                                                                                 //
  template.onCreated(ViewModel.onCreated(template, initial));                                                          //
  template.onRendered(ViewModel.onRendered(initial));                                                                  //
  template.onDestroyed(ViewModel.onDestroyed(initial));                                                                //
  initialObject = ViewModel.getInitialObject(initial);                                                                 //
  viewmodel = new ViewModel();                                                                                         //
  viewmodel.load(initialObject, true);                                                                                 //
  ref = viewmodel.vmEvents;                                                                                            // 15
  for (i = 0, len = ref.length; i < len; i++) {                                                                        // 15
    eventGroup = ref[i];                                                                                               //
    fn = function(event, eventFunction) {                                                                              //
      var eventObj;                                                                                                    // 18
      eventObj = {};                                                                                                   //
      eventObj[event] = function(e, t) {                                                                               //
        var templateInstance;                                                                                          // 20
        templateInstance = Template.instance();                                                                        //
        viewmodel = templateInstance.viewmodel;                                                                        //
        return eventFunction.call(viewmodel, e, t);                                                                    //
      };                                                                                                               //
      return template.events(eventObj);                                                                                //
    };                                                                                                                 //
    for (event in eventGroup) {                                                                                        // 16
      eventFunction = eventGroup[event];                                                                               //
      fn(event, eventFunction);                                                                                        //
    }                                                                                                                  // 16
  }                                                                                                                    // 15
};                                                                                                                     // 4
                                                                                                                       //
Blaze.Template.prototype.createViewModel = function(context) {                                                         // 26
  var initial, template, viewmodel;                                                                                    // 27
  template = this;                                                                                                     //
  initial = ViewModel.getInitialObject(template.viewmodelInitial, context);                                            //
  viewmodel = new ViewModel(initial);                                                                                  //
  viewmodel.vmInitial = initial;                                                                                       //
  return viewmodel;                                                                                                    //
};                                                                                                                     // 26
                                                                                                                       //
htmls = {};                                                                                                            // 33
                                                                                                                       //
Blaze.Template.prototype.elementBind = function(selector, data) {                                                      // 34
  var bindId, bindOject, html, name;                                                                                   // 35
  name = this.viewName;                                                                                                //
  html = null;                                                                                                         //
  if (data) {                                                                                                          //
    html = $("<div></div>").append($(Blaze.toHTMLWithData(this, data)));                                               //
  } else if (htmls[name]) {                                                                                            //
    html = htmls[name];                                                                                                //
  } else {                                                                                                             //
    html = $("<div></div>").append($(Blaze.toHTML(this)));                                                             //
    htmls[name] = html;                                                                                                //
  }                                                                                                                    //
  bindId = html.find(selector).attr("b-id");                                                                           //
  bindOject = ViewModel.bindObjects[bindId];                                                                           //
  return bindOject;                                                                                                    // 47
};                                                                                                                     // 34
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"migration.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/manuel_viewmodel/lib/migration.coffee.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Migration = new ReactiveDict("ViewModel_Migration");                                                              // 1
                                                                                                                       //
Reload._onMigrate(function() {                                                                                         // 2
  var migrated, ref, templateName, viewmodel, vmHash, vmId;                                                            // 3
  if (!ViewModel.persist) {                                                                                            //
    return [true];                                                                                                     // 3
  }                                                                                                                    //
  migrated = {};                                                                                                       //
  ref = ViewModel.byId;                                                                                                // 5
  for (vmId in ref) {                                                                                                  // 5
    viewmodel = ref[vmId];                                                                                             //
    if (!(!viewmodel.persist || viewmodel.persist())) {                                                                //
      continue;                                                                                                        //
    }                                                                                                                  //
    vmHash = viewmodel.vmHash();                                                                                       //
    if (migrated[vmHash]) {                                                                                            //
      templateName = ViewModel.templateName(viewmodel.templateInstance);                                               //
      console.error("Could not create unique identifier for an instance of template '" + templateName + "'. This can usually be resolved by wrapping a plain text in a div or adding a vmTag to the view model. Now you need to manually refresh the page. See https://viewmodel.org/docs/misc#hotcodepush for more information.");
      return [false];                                                                                                  // 10
    }                                                                                                                  //
    migrated[vmHash] = 1;                                                                                              //
    Migration.set(vmHash, viewmodel.data());                                                                           //
  }                                                                                                                    // 5
  return [true];                                                                                                       // 13
});                                                                                                                    // 2
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewmodel-onUrl.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/manuel_viewmodel/lib/viewmodel-onUrl.coffee.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var getSavedData, getUrl, parseUri, updateQueryString;                                                                 // 1
                                                                                                                       //
(function(history) {                                                                                                   // 1
  var pushState, replaceState;                                                                                         // 2
  pushState = history.pushState;                                                                                       //
  replaceState = history.replaceState;                                                                                 //
  if (pushState) {                                                                                                     //
    history.pushState = function(state, title, url) {                                                                  //
      if (typeof history.onstatechange === 'function') {                                                               //
        history.onstatechange(state, title, url);                                                                      //
      }                                                                                                                //
      return pushState.apply(history, arguments);                                                                      //
    };                                                                                                                 //
    history.replaceState = function(state, title, url) {                                                               //
      if (typeof history.onstatechange === 'function') {                                                               //
        history.onstatechange(state, title, url);                                                                      //
      }                                                                                                                //
      return replaceState.apply(history, arguments);                                                                   //
    };                                                                                                                 //
  } else {                                                                                                             //
    history.pushState = function() {};                                                                                 //
    history.replaceState = function() {};                                                                              //
  }                                                                                                                    //
})(window.history);                                                                                                    // 1
                                                                                                                       //
parseUri = function(str) {                                                                                             // 20
  var i, m, o, uri;                                                                                                    // 21
  o = parseUri.options;                                                                                                //
  m = o.parser[(o.strictMode ? "strict" : "loose")].exec(str);                                                         //
  uri = {};                                                                                                            //
  i = 14;                                                                                                              //
  while (i--) {                                                                                                        // 25
    uri[o.key[i]] = m[i] || "";                                                                                        //
  }                                                                                                                    //
  uri[o.q.name] = {};                                                                                                  //
  uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {                                                            //
    if ($1) {                                                                                                          //
      uri[o.q.name][$1] = $2;                                                                                          //
    }                                                                                                                  //
  });                                                                                                                  //
  return uri;                                                                                                          //
};                                                                                                                     // 20
                                                                                                                       //
parseUri.options = {                                                                                                   // 33
  strictMode: false,                                                                                                   //
  key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
  q: {                                                                                                                 //
    name: "queryKey",                                                                                                  //
    parser: /(?:^|&)([^&=]*)=?([^&]*)/g                                                                                //
  },                                                                                                                   //
  parser: {                                                                                                            //
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
getUrl = function(target) {                                                                                            // 59
  if (target == null) {                                                                                                //
    target = document.URL;                                                                                             //
  }                                                                                                                    //
  return parseUri(target);                                                                                             //
};                                                                                                                     // 59
                                                                                                                       //
updateQueryString = function(key, value, url) {                                                                        // 61
  var hash, re, separator;                                                                                             // 62
  if (!url) {                                                                                                          //
    url = window.location.href;                                                                                        //
  }                                                                                                                    //
  re = new RegExp('([?&])' + key + '=.*?(&|#|$)(.*)', 'gi');                                                           //
  hash = void 0;                                                                                                       //
  if (re.test(url)) {                                                                                                  //
    if (typeof value !== 'undefined' && value !== null) {                                                              //
      return url.replace(re, '$1' + key + '=' + value + '$2$3');                                                       //
    } else {                                                                                                           //
      hash = url.split('#');                                                                                           //
      url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');                                                        //
      if (typeof hash[1] !== 'undefined' && hash[1] !== null) {                                                        //
        url += '#' + hash[1];                                                                                          //
      }                                                                                                                //
      return url;                                                                                                      //
    }                                                                                                                  //
  } else {                                                                                                             //
    if (typeof value !== 'undefined' && value !== null) {                                                              //
      separator = url.indexOf('?') !== -1 ? '&' : '?';                                                                 //
      hash = url.split('#');                                                                                           //
      url = hash[0] + separator + key + '=' + value;                                                                   //
      if (typeof hash[1] !== 'undefined' && hash[1] !== null) {                                                        //
        url += '#' + hash[1];                                                                                          //
      }                                                                                                                //
      return url;                                                                                                      //
    } else {                                                                                                           //
      return url;                                                                                                      //
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     // 61
                                                                                                                       //
getSavedData = function(url) {                                                                                         // 86
  var dataString, obj, urlData;                                                                                        // 87
  if (url == null) {                                                                                                   //
    url = document.URL;                                                                                                //
  }                                                                                                                    //
  urlData = getUrl(url).queryKey.data;                                                                                 //
  if (!urlData) {                                                                                                      //
    return;                                                                                                            // 88
  }                                                                                                                    //
  dataString = LZString.decompressFromEncodedURIComponent(urlData);                                                    //
  obj = {};                                                                                                            //
  try {                                                                                                                // 91
    return obj = JSON.parse(dataString);                                                                               //
  } finally {                                                                                                          //
    return obj;                                                                                                        // 94
  }                                                                                                                    //
};                                                                                                                     // 86
                                                                                                                       //
ViewModel.saveUrl = function(viewmodel) {                                                                              // 96
  return viewmodel.templateInstance.autorun(function(c) {                                                              //
    var data, dataCompressed, dataString, fields, savedData, url, vmHash;                                              // 98
    ViewModel.check('@saveUrl', viewmodel);                                                                            //
    vmHash = viewmodel.vmHash();                                                                                       //
    url = window.location.href;                                                                                        //
    savedData = getSavedData() || {};                                                                                  //
    fields = viewmodel.onUrl() instanceof Array ? viewmodel.onUrl() : [viewmodel.onUrl()];                             //
    data = viewmodel.data(fields);                                                                                     //
    savedData[vmHash] = data;                                                                                          //
    dataString = JSON.stringify(savedData);                                                                            //
    dataCompressed = LZString.compressToEncodedURIComponent(dataString);                                               //
    url = updateQueryString("data", dataCompressed, url);                                                              //
    if (!c.firstRun && document.URL !== url) {                                                                         //
      return window.history.pushState(null, null, url);                                                                //
    }                                                                                                                  //
  });                                                                                                                  //
};                                                                                                                     // 96
                                                                                                                       //
ViewModel.loadUrl = function(viewmodel) {                                                                              // 110
  var updateFromUrl;                                                                                                   // 111
  updateFromUrl = function(state, title, url) {                                                                        //
    var data, savedData, vmHash;                                                                                       // 112
    if (url == null) {                                                                                                 //
      url = document.URL;                                                                                              //
    }                                                                                                                  //
    data = getSavedData(url);                                                                                          //
    if (!data) {                                                                                                       //
      return;                                                                                                          // 113
    }                                                                                                                  //
    vmHash = viewmodel.vmHash();                                                                                       //
    savedData = data[vmHash];                                                                                          //
    if (savedData) {                                                                                                   //
      return viewmodel.load(savedData);                                                                                //
    }                                                                                                                  //
  };                                                                                                                   //
  window.onpopstate = window.history.onstatechange = updateFromUrl;                                                    //
  return updateFromUrl();                                                                                              //
};                                                                                                                     // 110
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewmodel-property.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/createClass","babel-runtime/helpers/typeof",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/manuel_viewmodel/lib/viewmodel-property.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _createClass2 = require("babel-runtime/helpers/createClass");                                                      //
                                                                                                                       //
var _createClass3 = _interopRequireDefault(_createClass2);                                                             //
                                                                                                                       //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                                //
                                                                                                                       //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var ValueTypes = {                                                                                                     // 1
  string: 1,                                                                                                           // 2
  number: 2,                                                                                                           // 3
  integer: 3,                                                                                                          // 4
  boolean: 4,                                                                                                          // 5
  object: 5,                                                                                                           // 6
  date: 6,                                                                                                             // 7
  array: 7,                                                                                                            // 8
  any: 8                                                                                                               // 9
};                                                                                                                     // 1
                                                                                                                       //
var isNull = function (obj) {                                                                                          // 12
  return obj === null;                                                                                                 // 13
};                                                                                                                     // 14
                                                                                                                       //
var isUndefined = function (obj) {                                                                                     // 16
  return typeof obj === "undefined";                                                                                   // 17
};                                                                                                                     // 18
                                                                                                                       //
var isNumber = function (obj) {                                                                                        // 20
  // jQuery's isNumeric                                                                                                // 21
  return !_.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;                                                            // 22
};                                                                                                                     // 23
                                                                                                                       //
var isInteger = function (n) {                                                                                         // 25
  if (!isNumber(n) || ~n.toString().indexOf('.')) return false;                                                        // 26
  var value = parseFloat(n);                                                                                           // 31
  return value === +value && value === (value | 0);                                                                    // 32
};                                                                                                                     // 33
                                                                                                                       //
var isObject = function (obj) {                                                                                        // 35
  return (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object" && obj !== null && !(obj instanceof Date);
};                                                                                                                     // 35
                                                                                                                       //
var Property = function () {                                                                                           //
  function Property() {                                                                                                // 38
    (0, _classCallCheck3.default)(this, Property);                                                                     // 38
    this.checks = [];                                                                                                  // 39
    this.checksAsync = [];                                                                                             // 40
    this.convertIns = [];                                                                                              // 41
    this.convertOuts = [];                                                                                             // 42
    this.beforeUpdates = [];                                                                                           // 43
    this.afterUpdates = [];                                                                                            // 44
    this.defaultValue = undefined;                                                                                     // 45
    this.validMessageValue = "";                                                                                       // 46
    this.invalidMessageValue = "";                                                                                     // 47
    this.valueType = ValueTypes.any;                                                                                   // 48
  }                                                                                                                    // 50
                                                                                                                       //
  Property.prototype.verify = function () {                                                                            //
    function verify(value, context) {                                                                                  //
      for (var _iterator = this.checks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;                                                                                                      // 52
                                                                                                                       //
        if (_isArray) {                                                                                                // 52
          if (_i >= _iterator.length) break;                                                                           // 52
          _ref = _iterator[_i++];                                                                                      // 52
        } else {                                                                                                       // 52
          _i = _iterator.next();                                                                                       // 52
          if (_i.done) break;                                                                                          // 52
          _ref = _i.value;                                                                                             // 52
        }                                                                                                              // 52
                                                                                                                       //
        var check = _ref;                                                                                              // 52
        if (!check.call(context, value)) return false;                                                                 // 53
      }                                                                                                                // 54
                                                                                                                       //
      return true;                                                                                                     // 55
    }                                                                                                                  // 56
                                                                                                                       //
    return verify;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.verifyAsync = function () {                                                                       //
    function verifyAsync(value, done, context) {                                                                       //
      for (var _iterator2 = this.checksAsync, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;                                                                                                     // 58
                                                                                                                       //
        if (_isArray2) {                                                                                               // 58
          if (_i2 >= _iterator2.length) break;                                                                         // 58
          _ref2 = _iterator2[_i2++];                                                                                   // 58
        } else {                                                                                                       // 58
          _i2 = _iterator2.next();                                                                                     // 58
          if (_i2.done) break;                                                                                         // 58
          _ref2 = _i2.value;                                                                                           // 58
        }                                                                                                              // 58
                                                                                                                       //
        var check = _ref2;                                                                                             // 58
        check.call(context, value, done);                                                                              // 59
      }                                                                                                                // 60
    }                                                                                                                  // 61
                                                                                                                       //
    return verifyAsync;                                                                                                //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.hasAsync = function () {                                                                          //
    function hasAsync() {                                                                                              //
      return this.checksAsync.length;                                                                                  // 63
    }                                                                                                                  // 64
                                                                                                                       //
    return hasAsync;                                                                                                   //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.setDefault = function () {                                                                        //
    function setDefault(value) {                                                                                       //
      if (typeof this.defaultValue === "undefined") this.defaultValue = value;                                         // 66
    }                                                                                                                  // 67
                                                                                                                       //
    return setDefault;                                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.convertIn = function () {                                                                         //
    function convertIn(fun) {                                                                                          //
      this.convertIns.push(fun);                                                                                       // 70
      return this;                                                                                                     // 71
    }                                                                                                                  // 72
                                                                                                                       //
    return convertIn;                                                                                                  //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.convertOut = function () {                                                                        //
    function convertOut(fun) {                                                                                         //
      this.convertOuts.push(fun);                                                                                      // 74
      return this;                                                                                                     // 75
    }                                                                                                                  // 76
                                                                                                                       //
    return convertOut;                                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.beforeUpdate = function () {                                                                      //
    function beforeUpdate(fun) {                                                                                       //
      this.beforeUpdates.push(fun);                                                                                    // 79
      return this;                                                                                                     // 80
    }                                                                                                                  // 81
                                                                                                                       //
    return beforeUpdate;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.afterUpdate = function () {                                                                       //
    function afterUpdate(fun) {                                                                                        //
      this.afterUpdates.push(fun);                                                                                     // 83
      return this;                                                                                                     // 84
    }                                                                                                                  // 85
                                                                                                                       //
    return afterUpdate;                                                                                                //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.convertValueIn = function () {                                                                    //
    function convertValueIn(value, context) {                                                                          //
      var final = value;                                                                                               // 88
                                                                                                                       //
      for (var _iterator3 = this.convertIns, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;                                                                                                     // 89
                                                                                                                       //
        if (_isArray3) {                                                                                               // 89
          if (_i3 >= _iterator3.length) break;                                                                         // 89
          _ref3 = _iterator3[_i3++];                                                                                   // 89
        } else {                                                                                                       // 89
          _i3 = _iterator3.next();                                                                                     // 89
          if (_i3.done) break;                                                                                         // 89
          _ref3 = _i3.value;                                                                                           // 89
        }                                                                                                              // 89
                                                                                                                       //
        var convert = _ref3;                                                                                           // 89
        final = convert.call(context, final);                                                                          // 90
      }                                                                                                                // 91
                                                                                                                       //
      return final;                                                                                                    // 92
    }                                                                                                                  // 93
                                                                                                                       //
    return convertValueIn;                                                                                             //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.convertValueOut = function () {                                                                   //
    function convertValueOut(value, context) {                                                                         //
      var final = value;                                                                                               // 96
                                                                                                                       //
      for (var _iterator4 = this.convertOuts, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;                                                                                                     // 97
                                                                                                                       //
        if (_isArray4) {                                                                                               // 97
          if (_i4 >= _iterator4.length) break;                                                                         // 97
          _ref4 = _iterator4[_i4++];                                                                                   // 97
        } else {                                                                                                       // 97
          _i4 = _iterator4.next();                                                                                     // 97
          if (_i4.done) break;                                                                                         // 97
          _ref4 = _i4.value;                                                                                           // 97
        }                                                                                                              // 97
                                                                                                                       //
        var convert = _ref4;                                                                                           // 97
        final = convert.call(context, final);                                                                          // 98
      }                                                                                                                // 99
                                                                                                                       //
      return final;                                                                                                    // 100
    }                                                                                                                  // 101
                                                                                                                       //
    return convertValueOut;                                                                                            //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.beforeValueUpdate = function () {                                                                 //
    function beforeValueUpdate(value, context) {                                                                       //
      for (var _iterator5 = this.beforeUpdates, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;                                                                                                     // 104
                                                                                                                       //
        if (_isArray5) {                                                                                               // 104
          if (_i5 >= _iterator5.length) break;                                                                         // 104
          _ref5 = _iterator5[_i5++];                                                                                   // 104
        } else {                                                                                                       // 104
          _i5 = _iterator5.next();                                                                                     // 104
          if (_i5.done) break;                                                                                         // 104
          _ref5 = _i5.value;                                                                                           // 104
        }                                                                                                              // 104
                                                                                                                       //
        var fun = _ref5;                                                                                               // 104
        fun.call(context, value);                                                                                      // 105
      }                                                                                                                // 106
                                                                                                                       //
      return final;                                                                                                    // 107
    }                                                                                                                  // 108
                                                                                                                       //
    return beforeValueUpdate;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.afterValueUpdate = function () {                                                                  //
    function afterValueUpdate(value, context) {                                                                        //
      for (var _iterator6 = this.afterUpdates, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref6;                                                                                                     // 111
                                                                                                                       //
        if (_isArray6) {                                                                                               // 111
          if (_i6 >= _iterator6.length) break;                                                                         // 111
          _ref6 = _iterator6[_i6++];                                                                                   // 111
        } else {                                                                                                       // 111
          _i6 = _iterator6.next();                                                                                     // 111
          if (_i6.done) break;                                                                                         // 111
          _ref6 = _i6.value;                                                                                           // 111
        }                                                                                                              // 111
                                                                                                                       //
        var fun = _ref6;                                                                                               // 111
        fun.call(context, value);                                                                                      // 112
      }                                                                                                                // 113
                                                                                                                       //
      return final;                                                                                                    // 114
    }                                                                                                                  // 115
                                                                                                                       //
    return afterValueUpdate;                                                                                           //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.min = function () {                                                                               //
    function min(minValue) {                                                                                           //
      var _this = this;                                                                                                // 118
                                                                                                                       //
      this.checks.push(function (value) {                                                                              // 119
        if (_this.valueType === ValueTypes.string && _.isString(value)) {                                              // 120
          return value.length >= minValue;                                                                             // 121
        } else {                                                                                                       // 122
          return value >= minValue;                                                                                    // 123
        }                                                                                                              // 124
      });                                                                                                              // 125
      return this;                                                                                                     // 126
    }                                                                                                                  // 127
                                                                                                                       //
    return min;                                                                                                        //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.max = function () {                                                                               //
    function max(maxValue) {                                                                                           //
      var _this2 = this;                                                                                               // 129
                                                                                                                       //
      this.checks.push(function (value) {                                                                              // 130
        if (_this2.valueType === ValueTypes.string && _.isString(value)) {                                             // 131
          return value.length <= maxValue;                                                                             // 132
        } else {                                                                                                       // 133
          return value <= maxValue;                                                                                    // 134
        }                                                                                                              // 135
      });                                                                                                              // 136
      return this;                                                                                                     // 137
    }                                                                                                                  // 138
                                                                                                                       //
    return max;                                                                                                        //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.equal = function () {                                                                             //
    function equal(value) {                                                                                            //
      this.checks.push(function (v) {                                                                                  // 141
        return v === value;                                                                                            // 141
      });                                                                                                              // 141
      return this;                                                                                                     // 142
    }                                                                                                                  // 143
                                                                                                                       //
    return equal;                                                                                                      //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.notEqual = function () {                                                                          //
    function notEqual(value) {                                                                                         //
      this.checks.push(function (v) {                                                                                  // 145
        return v !== value;                                                                                            // 145
      });                                                                                                              // 145
      return this;                                                                                                     // 146
    }                                                                                                                  // 147
                                                                                                                       //
    return notEqual;                                                                                                   //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.between = function () {                                                                           //
    function between(min, max) {                                                                                       //
      var _this3 = this;                                                                                               // 149
                                                                                                                       //
      this.checks.push(function (value) {                                                                              // 150
        if (_this3.valueType === ValueTypes.string && _.isString(value)) {                                             // 151
          return value.length >= min && value.length <= max;                                                           // 152
        } else {                                                                                                       // 153
          return value >= min && value <= max;                                                                         // 154
        }                                                                                                              // 155
      });                                                                                                              // 156
      return this;                                                                                                     // 157
    }                                                                                                                  // 158
                                                                                                                       //
    return between;                                                                                                    //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.notBetween = function () {                                                                        //
    function notBetween(min, max) {                                                                                    //
      var _this4 = this;                                                                                               // 159
                                                                                                                       //
      this.checks.push(function (value) {                                                                              // 160
        if (_this4.valueType === ValueTypes.string && _.isString(value)) {                                             // 161
          return value.length < min || value.length > max;                                                             // 162
        } else {                                                                                                       // 163
          return value < min || value > max;                                                                           // 164
        }                                                                                                              // 165
      });                                                                                                              // 166
      return this;                                                                                                     // 167
    }                                                                                                                  // 168
                                                                                                                       //
    return notBetween;                                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.regex = function () {                                                                             //
    function regex(regexp) {                                                                                           //
      this.checks.push(function (v) {                                                                                  // 171
        return regexp.test(v);                                                                                         // 171
      });                                                                                                              // 171
      return this;                                                                                                     // 172
    }                                                                                                                  // 173
                                                                                                                       //
    return regex;                                                                                                      //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.validate = function () {                                                                          //
    function validate(fun) {                                                                                           //
      this.checks.push(fun);                                                                                           // 176
      return this;                                                                                                     // 177
    }                                                                                                                  // 178
                                                                                                                       //
    return validate;                                                                                                   //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.validateAsync = function () {                                                                     //
    function validateAsync(fun) {                                                                                      //
      this.checksAsync.push(fun);                                                                                      // 181
      return this;                                                                                                     // 182
    }                                                                                                                  // 183
                                                                                                                       //
    return validateAsync;                                                                                              //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.default = function () {                                                                           //
    function _default(value) {                                                                                         //
      this.defaultValue = value;                                                                                       // 186
      return this;                                                                                                     // 187
    }                                                                                                                  // 188
                                                                                                                       //
    return _default;                                                                                                   //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.validMessage = function () {                                                                      //
    function validMessage(message) {                                                                                   //
      this.validMessageValue = message;                                                                                // 190
      return this;                                                                                                     // 191
    }                                                                                                                  // 192
                                                                                                                       //
    return validMessage;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  Property.prototype.invalidMessage = function () {                                                                    //
    function invalidMessage(message) {                                                                                 //
      this.invalidMessageValue = message;                                                                              // 194
      return this;                                                                                                     // 195
    }                                                                                                                  // 196
                                                                                                                       //
    return invalidMessage;                                                                                             //
  }();                                                                                                                 //
                                                                                                                       //
  Property.validator = function () {                                                                                   //
    function validator(value) {                                                                                        //
      var property = new Property();                                                                                   // 263
                                                                                                                       //
      if (_.isString(value)) {                                                                                         // 264
        return property.string;                                                                                        // 265
      } else if (_.isNumber(value)) {                                                                                  // 266
        return property.number;                                                                                        // 267
      } else if (_.isDate(value)) {                                                                                    // 268
        return property.date;                                                                                          // 269
      } else if (_.isBoolean(value)) {                                                                                 // 270
        return property.boolean;                                                                                       // 271
      } else if (isObject(value)) {                                                                                    // 272
        return property.object;                                                                                        // 273
      } else if (_.isArray(value)) {                                                                                   // 274
        return property.array;                                                                                         // 275
      } else {                                                                                                         // 276
        return property;                                                                                               // 277
      }                                                                                                                // 278
    }                                                                                                                  // 279
                                                                                                                       //
    return validator;                                                                                                  //
  }();                                                                                                                 //
                                                                                                                       //
  (0, _createClass3.default)(Property, [{                                                                              //
    key: "notBlank",                                                                                                   //
    get: function () {                                                                                                 //
      this.checks.push(function (value) {                                                                              // 199
        return _.isString(value) && !!value.trim().length;                                                             // 199
      });                                                                                                              // 199
      return this;                                                                                                     // 200
    }                                                                                                                  // 201
  }, {                                                                                                                 //
    key: "string",                                                                                                     //
    get: function () {                                                                                                 //
      this.setDefault("");                                                                                             // 203
      this.valueType = ValueTypes.string;                                                                              // 204
      this.checks.push(function (value) {                                                                              // 205
        return _.isString(value);                                                                                      // 205
      });                                                                                                              // 205
      return this;                                                                                                     // 206
    }                                                                                                                  // 207
  }, {                                                                                                                 //
    key: "integer",                                                                                                    //
    get: function () {                                                                                                 //
      this.setDefault(0);                                                                                              // 209
      this.valueType = ValueTypes.integer;                                                                             // 210
      this.checks.push(function (n) {                                                                                  // 211
        return isInteger(n);                                                                                           // 211
      });                                                                                                              // 211
      return this;                                                                                                     // 212
    }                                                                                                                  // 213
  }, {                                                                                                                 //
    key: "number",                                                                                                     //
    get: function () {                                                                                                 //
      this.setDefault(0);                                                                                              // 215
      this.valueType = ValueTypes.number;                                                                              // 216
      this.checks.push(function (value) {                                                                              // 217
        return isNumber(value);                                                                                        // 217
      });                                                                                                              // 217
      return this;                                                                                                     // 218
    }                                                                                                                  // 219
  }, {                                                                                                                 //
    key: "boolean",                                                                                                    //
    get: function () {                                                                                                 //
      this.setDefault(false);                                                                                          // 221
      this.valueType = ValueTypes.boolean;                                                                             // 222
      this.checks.push(function (value) {                                                                              // 223
        return _.isBoolean(value);                                                                                     // 223
      });                                                                                                              // 223
      return this;                                                                                                     // 224
    }                                                                                                                  // 225
  }, {                                                                                                                 //
    key: "object",                                                                                                     //
    get: function () {                                                                                                 //
      this.setDefault({});                                                                                             // 227
      this.valueType = ValueTypes.object;                                                                              // 228
      this.checks.push(function (value) {                                                                              // 229
        return isObject(value);                                                                                        // 229
      });                                                                                                              // 229
      return this;                                                                                                     // 230
    }                                                                                                                  // 231
  }, {                                                                                                                 //
    key: "date",                                                                                                       //
    get: function () {                                                                                                 //
      this.setDefault(new Date());                                                                                     // 233
      this.valueType = ValueTypes.date;                                                                                // 234
      this.checks.push(function (value) {                                                                              // 235
        return value instanceof Date;                                                                                  // 235
      });                                                                                                              // 235
      return this;                                                                                                     // 236
    }                                                                                                                  // 237
  }, {                                                                                                                 //
    key: "array",                                                                                                      //
    get: function () {                                                                                                 //
      this.setDefault([]);                                                                                             // 239
      this.valueType = ValueTypes.array;                                                                               // 240
      this.checks.push(function (value) {                                                                              // 241
        return _.isArray(value);                                                                                       // 241
      });                                                                                                              // 241
      return this;                                                                                                     // 242
    }                                                                                                                  // 243
  }, {                                                                                                                 //
    key: "convert",                                                                                                    //
    get: function () {                                                                                                 //
      if (this.valueType === ValueTypes.integer) {                                                                     // 246
        this.convertIn(function (value) {                                                                              // 247
          return parseInt(value);                                                                                      // 247
        });                                                                                                            // 247
      } else if (this.valueType === ValueTypes.string) {                                                               // 248
        this.convertIn(function (value) {                                                                              // 249
          return value.toString();                                                                                     // 249
        });                                                                                                            // 249
      } else if (this.valueType === ValueTypes.number) {                                                               // 250
        this.convertIn(function (value) {                                                                              // 251
          return parseFloat(value);                                                                                    // 251
        });                                                                                                            // 251
      } else if (this.valueType === ValueTypes.date) {                                                                 // 252
        this.convertIn(function (value) {                                                                              // 253
          return Date.parse(value);                                                                                    // 253
        });                                                                                                            // 253
      } else if (this.valueType === ValueTypes.boolean) {                                                              // 254
        this.convertIn(function (value) {                                                                              // 255
          return !!value;                                                                                              // 255
        });                                                                                                            // 255
      }                                                                                                                // 256
                                                                                                                       //
      return this;                                                                                                     // 257
    }                                                                                                                  // 258
  }]);                                                                                                                 //
  return Property;                                                                                                     //
}();                                                                                                                   //
                                                                                                                       //
Object.defineProperties(ViewModel, {                                                                                   // 282
  "property": {                                                                                                        // 283
    get: function () {                                                                                                 // 283
      return new Property();                                                                                           // 283
    }                                                                                                                  // 283
  }                                                                                                                    // 283
});                                                                                                                    // 282
ViewModel.Property = Property;                                                                                         // 286
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"lzstring.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/manuel_viewmodel/lib/lzstring.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
LZString = function () {                                                                                               // 1
  function o(o, r) {                                                                                                   // 1
    if (!t[o]) {                                                                                                       // 1
      t[o] = {};                                                                                                       // 1
                                                                                                                       //
      for (var n = 0; n < o.length; n++) {                                                                             // 1
        t[o][o.charAt(n)] = n;                                                                                         // 1
      }                                                                                                                // 1
    }                                                                                                                  // 1
                                                                                                                       //
    return t[o][r];                                                                                                    // 1
  }                                                                                                                    // 1
                                                                                                                       //
  var r = String.fromCharCode,                                                                                         // 1
      n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",                                         // 1
      e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",                                         // 1
      t = {},                                                                                                          // 1
      i = {                                                                                                            // 1
    compressToBase64: function (o) {                                                                                   // 1
      if (null == o) return "";                                                                                        // 1
                                                                                                                       //
      var r = i._compress(o, 6, function (o) {                                                                         // 1
        return n.charAt(o);                                                                                            // 1
      });                                                                                                              // 1
                                                                                                                       //
      switch (r.length % 4) {                                                                                          // 1
        default:                                                                                                       // 1
        case 0:                                                                                                        // 1
          return r;                                                                                                    // 1
                                                                                                                       //
        case 1:                                                                                                        // 1
          return r + "===";                                                                                            // 1
                                                                                                                       //
        case 2:                                                                                                        // 1
          return r + "==";                                                                                             // 1
                                                                                                                       //
        case 3:                                                                                                        // 1
          return r + "=";                                                                                              // 1
      }                                                                                                                // 1
    },                                                                                                                 // 1
    decompressFromBase64: function (r) {                                                                               // 1
      return null == r ? "" : "" == r ? null : i._decompress(r.length, 32, function (e) {                              // 1
        return o(n, r.charAt(e));                                                                                      // 1
      });                                                                                                              // 1
    },                                                                                                                 // 1
    compressToUTF16: function (o) {                                                                                    // 1
      return null == o ? "" : i._compress(o, 15, function (o) {                                                        // 1
        return r(o + 32);                                                                                              // 1
      }) + " ";                                                                                                        // 1
    },                                                                                                                 // 1
    decompressFromUTF16: function (o) {                                                                                // 1
      return null == o ? "" : "" == o ? null : i._decompress(o.length, 16384, function (r) {                           // 1
        return o.charCodeAt(r) - 32;                                                                                   // 1
      });                                                                                                              // 1
    },                                                                                                                 // 1
    compressToUint8Array: function (o) {                                                                               // 1
      for (var r = i.compress(o), n = new Uint8Array(2 * r.length), e = 0, t = r.length; t > e; e++) {                 // 1
        var s = r.charCodeAt(e);                                                                                       // 1
        n[2 * e] = s >>> 8, n[2 * e + 1] = s % 256;                                                                    // 1
      }                                                                                                                // 1
                                                                                                                       //
      return n;                                                                                                        // 1
    },                                                                                                                 // 1
    decompressFromUint8Array: function (o) {                                                                           // 1
      if (null === o || void 0 === o) return i.decompress(o);                                                          // 1
                                                                                                                       //
      for (var n = new Array(o.length / 2), e = 0, t = n.length; t > e; e++) {                                         // 1
        n[e] = 256 * o[2 * e] + o[2 * e + 1];                                                                          // 1
      }                                                                                                                // 1
                                                                                                                       //
      var s = [];                                                                                                      // 1
      return n.forEach(function (o) {                                                                                  // 1
        s.push(r(o));                                                                                                  // 1
      }), i.decompress(s.join(""));                                                                                    // 1
    },                                                                                                                 // 1
    compressToEncodedURIComponent: function (o) {                                                                      // 1
      return null == o ? "" : i._compress(o, 6, function (o) {                                                         // 1
        return e.charAt(o);                                                                                            // 1
      });                                                                                                              // 1
    },                                                                                                                 // 1
    decompressFromEncodedURIComponent: function (r) {                                                                  // 1
      return null == r ? "" : "" == r ? null : (r = r.replace(/ /g, "+"), i._decompress(r.length, 32, function (n) {   // 1
        return o(e, r.charAt(n));                                                                                      // 1
      }));                                                                                                             // 1
    },                                                                                                                 // 1
    compress: function (o) {                                                                                           // 1
      return i._compress(o, 16, function (o) {                                                                         // 1
        return r(o);                                                                                                   // 1
      });                                                                                                              // 1
    },                                                                                                                 // 1
    _compress: function (o, r, n) {                                                                                    // 1
      if (null == o) return "";                                                                                        // 1
      var e,                                                                                                           // 1
          t,                                                                                                           // 1
          i,                                                                                                           // 1
          s = {},                                                                                                      // 1
          p = {},                                                                                                      // 1
          u = "",                                                                                                      // 1
          c = "",                                                                                                      // 1
          a = "",                                                                                                      // 1
          l = 2,                                                                                                       // 1
          f = 3,                                                                                                       // 1
          h = 2,                                                                                                       // 1
          d = [],                                                                                                      // 1
          m = 0,                                                                                                       // 1
          v = 0;                                                                                                       // 1
                                                                                                                       //
      for (i = 0; i < o.length; i += 1) {                                                                              // 1
        if (u = o.charAt(i), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = !0), c = a + u, Object.prototype.hasOwnProperty.call(s, c)) a = c;else {
          if (Object.prototype.hasOwnProperty.call(p, a)) {                                                            // 1
            if (a.charCodeAt(0) < 256) {                                                                               // 1
              for (e = 0; h > e; e++) {                                                                                // 1
                m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;                                              // 1
              }                                                                                                        // 1
                                                                                                                       //
              for (t = a.charCodeAt(0), e = 0; 8 > e; e++) {                                                           // 1
                m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;                          // 1
              }                                                                                                        // 1
            } else {                                                                                                   // 1
              for (t = 1, e = 0; h > e; e++) {                                                                         // 1
                m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;                                // 1
              }                                                                                                        // 1
                                                                                                                       //
              for (t = a.charCodeAt(0), e = 0; 16 > e; e++) {                                                          // 1
                m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;                          // 1
              }                                                                                                        // 1
            }                                                                                                          // 1
                                                                                                                       //
            l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a];                                                     // 1
          } else for (t = s[a], e = 0; h > e; e++) {                                                                   // 1
            m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;                              // 1
          }                                                                                                            // 1
                                                                                                                       //
          l--, 0 == l && (l = Math.pow(2, h), h++), s[c] = f++, a = String(u);                                         // 1
        }                                                                                                              // 1
      }                                                                                                                // 1
                                                                                                                       //
      if ("" !== a) {                                                                                                  // 1
        if (Object.prototype.hasOwnProperty.call(p, a)) {                                                              // 1
          if (a.charCodeAt(0) < 256) {                                                                                 // 1
            for (e = 0; h > e; e++) {                                                                                  // 1
              m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;                                                // 1
            }                                                                                                          // 1
                                                                                                                       //
            for (t = a.charCodeAt(0), e = 0; 8 > e; e++) {                                                             // 1
              m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;                            // 1
            }                                                                                                          // 1
          } else {                                                                                                     // 1
            for (t = 1, e = 0; h > e; e++) {                                                                           // 1
              m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;                                  // 1
            }                                                                                                          // 1
                                                                                                                       //
            for (t = a.charCodeAt(0), e = 0; 16 > e; e++) {                                                            // 1
              m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;                            // 1
            }                                                                                                          // 1
          }                                                                                                            // 1
                                                                                                                       //
          l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a];                                                       // 1
        } else for (t = s[a], e = 0; h > e; e++) {                                                                     // 1
          m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;                                // 1
        }                                                                                                              // 1
                                                                                                                       //
        l--, 0 == l && (l = Math.pow(2, h), h++);                                                                      // 1
      }                                                                                                                // 1
                                                                                                                       //
      for (t = 2, e = 0; h > e; e++) {                                                                                 // 1
        m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;                                  // 1
      }                                                                                                                // 1
                                                                                                                       //
      for (;;) {                                                                                                       // 1
        if (m <<= 1, v == r - 1) {                                                                                     // 1
          d.push(n(m));                                                                                                // 1
          break;                                                                                                       // 1
        }                                                                                                              // 1
                                                                                                                       //
        v++;                                                                                                           // 1
      }                                                                                                                // 1
                                                                                                                       //
      return d.join("");                                                                                               // 1
    },                                                                                                                 // 1
    decompress: function (o) {                                                                                         // 1
      return null == o ? "" : "" == o ? null : i._decompress(o.length, 32768, function (r) {                           // 1
        return o.charCodeAt(r);                                                                                        // 1
      });                                                                                                              // 1
    },                                                                                                                 // 1
    _decompress: function (o, n, e) {                                                                                  // 1
      var t,                                                                                                           // 1
          i,                                                                                                           // 1
          s,                                                                                                           // 1
          p,                                                                                                           // 1
          u,                                                                                                           // 1
          c,                                                                                                           // 1
          a,                                                                                                           // 1
          l,                                                                                                           // 1
          f = [],                                                                                                      // 1
          h = 4,                                                                                                       // 1
          d = 4,                                                                                                       // 1
          m = 3,                                                                                                       // 1
          v = "",                                                                                                      // 1
          w = [],                                                                                                      // 1
          A = {                                                                                                        // 1
        val: e(0),                                                                                                     // 1
        position: n,                                                                                                   // 1
        index: 1                                                                                                       // 1
      };                                                                                                               // 1
                                                                                                                       //
      for (i = 0; 3 > i; i += 1) {                                                                                     // 1
        f[i] = i;                                                                                                      // 1
      }                                                                                                                // 1
                                                                                                                       //
      for (p = 0, c = Math.pow(2, 2), a = 1; a != c;) {                                                                // 1
        u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
      }                                                                                                                // 1
                                                                                                                       //
      switch (t = p) {                                                                                                 // 1
        case 0:                                                                                                        // 1
          for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) {                                                            // 1
            u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
          }                                                                                                            // 1
                                                                                                                       //
          l = r(p);                                                                                                    // 1
          break;                                                                                                       // 1
                                                                                                                       //
        case 1:                                                                                                        // 1
          for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) {                                                           // 1
            u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
          }                                                                                                            // 1
                                                                                                                       //
          l = r(p);                                                                                                    // 1
          break;                                                                                                       // 1
                                                                                                                       //
        case 2:                                                                                                        // 1
          return "";                                                                                                   // 1
      }                                                                                                                // 1
                                                                                                                       //
      for (f[3] = l, s = l, w.push(l);;) {                                                                             // 1
        if (A.index > o) return "";                                                                                    // 1
                                                                                                                       //
        for (p = 0, c = Math.pow(2, m), a = 1; a != c;) {                                                              // 1
          u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
        }                                                                                                              // 1
                                                                                                                       //
        switch (l = p) {                                                                                               // 1
          case 0:                                                                                                      // 1
            for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) {                                                          // 1
              u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
            }                                                                                                          // 1
                                                                                                                       //
            f[d++] = r(p), l = d - 1, h--;                                                                             // 1
            break;                                                                                                     // 1
                                                                                                                       //
          case 1:                                                                                                      // 1
            for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) {                                                         // 1
              u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
            }                                                                                                          // 1
                                                                                                                       //
            f[d++] = r(p), l = d - 1, h--;                                                                             // 1
            break;                                                                                                     // 1
                                                                                                                       //
          case 2:                                                                                                      // 1
            return w.join("");                                                                                         // 1
        }                                                                                                              // 1
                                                                                                                       //
        if (0 == h && (h = Math.pow(2, m), m++), f[l]) v = f[l];else {                                                 // 1
          if (l !== d) return null;                                                                                    // 1
          v = s + s.charAt(0);                                                                                         // 1
        }                                                                                                              // 1
        w.push(v), f[d++] = s + v.charAt(0), h--, s = v, 0 == h && (h = Math.pow(2, m), m++);                          // 1
      }                                                                                                                // 1
    }                                                                                                                  // 1
  };                                                                                                                   // 1
  return i;                                                                                                            // 1
}();                                                                                                                   // 1
                                                                                                                       //
"function" == typeof define && define.amd ? define(function () {                                                       // 1
  return LZString;                                                                                                     // 1
}) : "undefined" != typeof module && null != module && (module.exports = LZString);                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{"extensions":[".js",".json",".coffee"]});
require("./node_modules/meteor/manuel:viewmodel/lib/viewmodel.coffee.js");
require("./node_modules/meteor/manuel:viewmodel/lib/viewmodel-parseBind.coffee.js");
require("./node_modules/meteor/manuel:viewmodel/lib/bindings.coffee.js");
require("./node_modules/meteor/manuel:viewmodel/lib/template.coffee.js");
require("./node_modules/meteor/manuel:viewmodel/lib/migration.coffee.js");
require("./node_modules/meteor/manuel:viewmodel/lib/viewmodel-onUrl.coffee.js");
require("./node_modules/meteor/manuel:viewmodel/lib/viewmodel-property.js");
require("./node_modules/meteor/manuel:viewmodel/lib/lzstring.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['manuel:viewmodel'] = {}, {
  ViewModel: ViewModel
});

})();

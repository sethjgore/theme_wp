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

var require = meteorInstall({"node_modules":{"meteor":{"zkroll-ribbon":{"ribbon.html":["./template.ribbon.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// node_modules/meteor/zkroll-ribbon/ribbon.html                                                              //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
module.exports = require("./template.ribbon.js");                                                             // 1
                                                                                                              // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.ribbon.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/zkroll-ribbon/template.ribbon.js                                                                  //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("ribbon");                                                                               // 2
Template["ribbon"] = new Template("Template.ribbon", (function() {                                            // 3
  var view = this;                                                                                            // 4
  return HTML.DIV({                                                                                           // 5
    class: "width-full flex-auto fb-1 flex items-center justify-stretch"                                      // 6
  }, "\n        ", HTML.DIV(HTML.Attrs({                                                                      // 7
    class: "button button-pill m2 px2 py1  bg-cloudy"                                                         // 8
  }, function() {                                                                                             // 9
    return Spacebars.attrMustache(view.lookup("b"), "click: prev");                                           // 10
  }), "\n            ", HTML.Raw('<div class="line-height-1 type-size-subtitle type-weight-heavy type-name-monospace interact-none">-</div>'), "\n        "), "\n        ", HTML.DIV(HTML.Attrs({
    class: "button button-pill m2 px2 py1  bg-cloudy"                                                         // 12
  }, function() {                                                                                             // 13
    return Spacebars.attrMustache(view.lookup("b"), "click: next");                                           // 14
  }), "\n            ", HTML.Raw('<div class="line-height-1 type-size-subtitle type-weight-heavy type-name-monospace interact-none">+</div>'), "\n        "), "\n        ", HTML.DIV({
    class: "button relative mr2 button-pill flex-auto fb-1 overflow-hidden flex items-center justify-stretch"
  }, "\n            ", Blaze.Each(function() {                                                                // 17
    return Spacebars.call(view.lookup("options"));                                                            // 18
  }, function() {                                                                                             // 19
    return [ "\n                ", Blaze._TemplateWith(function() {                                           // 20
      return {                                                                                                // 21
        item: Spacebars.call(view.lookup(".")),                                                               // 22
        index: Spacebars.call(view.lookup("@index")),                                                         // 23
        style: Spacebars.call(view.lookup("style"))                                                           // 24
      };                                                                                                      // 25
    }, function() {                                                                                           // 26
      return Spacebars.include(view.lookupTemplate("ribbonItem"));                                            // 27
    }), "\n            " ];                                                                                   // 28
  }), "\n        "), "\n    ");                                                                               // 29
}));                                                                                                          // 30
                                                                                                              // 31
Template.__checkName("ribbonItem");                                                                           // 32
Template["ribbonItem"] = new Template("Template.ribbonItem", (function() {                                    // 33
  var view = this;                                                                                            // 34
  return [ Blaze.If(function() {                                                                              // 35
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("style"), "01");                            // 36
  }, function() {                                                                                             // 37
    return [ "\n        ", Blaze.If(function() {                                                              // 38
      return Spacebars.call(Spacebars.dot(view.lookup("item"), "image"));                                     // 39
    }, function() {                                                                                           // 40
      return [ "\n            ", HTML.DIV(HTML.Attrs({                                                        // 41
        verticalitem: "",                                                                                     // 42
        style: function() {                                                                                   // 43
          return [ "background: url(", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "image")), ") center center; background-size: cover;" ];
        },                                                                                                    // 45
        class: function() {                                                                                   // 46
          return [ "flex-auto relative button overflow-hidden flex justify-center items-center type-size-paragraph color-white bg-", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "color")), " fb-02 overflow-hidden" ];
        }                                                                                                     // 48
      }, function() {                                                                                         // 49
        return Spacebars.attrMustache(view.lookup("b"), "click: action, class: { active: active}");           // 50
      }), "\n                ", Blaze.View("lookup:item.text", function() {                                   // 51
        return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "text"));                                // 52
      }), "\n            "), "\n        " ];                                                                  // 53
    }, function() {                                                                                           // 54
      return [ "\n            ", HTML.DIV(HTML.Attrs({                                                        // 55
        verticalitem: "",                                                                                     // 56
        class: function() {                                                                                   // 57
          return [ "flex-auto relative overflow-hidden flex justify-start items-center button type-size-paragraph color-white bg-", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "color")), " fb-02" ];
        }                                                                                                     // 59
      }, function() {                                                                                         // 60
        return Spacebars.attrMustache(view.lookup("b"), "click: action, class: { active: active }");          // 61
      }), "\n                ", HTML.DIV({                                                                    // 62
        class: "flex-auto fb-1"                                                                               // 63
      }, Blaze.View("lookup:item.text", function() {                                                          // 64
        return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "text"));                                // 65
      })), "\n            "), "\n        " ];                                                                 // 66
    }), "\n    " ];                                                                                           // 67
  }), "\n    ", Blaze.If(function() {                                                                         // 68
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("style"), "02");                            // 69
  }, function() {                                                                                             // 70
    return [ "\n        ", HTML.DIV({                                                                         // 71
      class: "flex-auto flex justify-center items-center fb-02 "                                              // 72
    }, "\n            ", HTML.DIV(HTML.Attrs({                                                                // 73
      verticalitem: "",                                                                                       // 74
      class: function() {                                                                                     // 75
        return [ "relative button-pill overflow-hidden justify-start button flex type-size-paragraph color-white bg-", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "color")), " fb-02" ];
      }                                                                                                       // 77
    }, function() {                                                                                           // 78
      return Spacebars.attrMustache(view.lookup("b"), "click: action, class: { active: active }");            // 79
    }), "\n                ", HTML.DIV({                                                                      // 80
      class: "flex-auto fb-1"                                                                                 // 81
    }, Blaze.View("lookup:item.text", function() {                                                            // 82
      return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "text"));                                  // 83
    })), "\n            "), "\n        "), "\n    " ];                                                        // 84
  }), "\n    ", Blaze.If(function() {                                                                         // 85
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("style"), "03");                            // 86
  }, function() {                                                                                             // 87
    return [ "\n        ", HTML.DIV({                                                                         // 88
      class: "flex-auto flex justify-center items-center fb-02 "                                              // 89
    }, "\n            ", HTML.DIV(HTML.Attrs({                                                                // 90
      verticalitem: "",                                                                                       // 91
      class: function() {                                                                                     // 92
        return [ "relative button-pill overflow-hidden justify-start button flex type-size-paragraph color-white bg-", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "color")), " fb-02" ];
      }                                                                                                       // 94
    }, function() {                                                                                           // 95
      return Spacebars.attrMustache(view.lookup("b"), "click: action, class: { active: active }");            // 96
    }), "\n                ", HTML.DIV({                                                                      // 97
      class: "flex-auto fb-1"                                                                                 // 98
    }, Blaze.View("lookup:item.text", function() {                                                            // 99
      return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "text"));                                  // 100
    })), "\n            "), "\n        "), "\n    " ];                                                        // 101
  }), "\n    ", Blaze.If(function() {                                                                         // 102
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("style"), "04");                            // 103
  }, function() {                                                                                             // 104
    return [ "\n        ", HTML.DIV({                                                                         // 105
      class: "flex-auto flex justify-center items-center fb-04 "                                              // 106
    }, "\n            ", HTML.DIV(HTML.Attrs({                                                                // 107
      verticalitem: "",                                                                                       // 108
      class: function() {                                                                                     // 109
        return [ "relative  overflow-hidden justify-start button flex type-size-paragraph color-white bg-", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "color")), " fb-04" ];
      }                                                                                                       // 111
    }, function() {                                                                                           // 112
      return Spacebars.attrMustache(view.lookup("b"), "click: action");                                       // 113
    }), "\n                ", HTML.DIV({                                                                      // 114
      class: "bg-white width-3 type-size-one height-3 block"                                                  // 115
    }), "\n                ", HTML.DIV({                                                                      // 116
      class: "flex-auto fb-1"                                                                                 // 117
    }, Blaze.View("lookup:item.text", function() {                                                            // 118
      return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "text"));                                  // 119
    })), "\n            "), "\n        "), "\n    " ];                                                        // 120
  }) ];                                                                                                       // 121
}));                                                                                                          // 122
                                                                                                              // 123
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"style.styl":["./style.styl.css",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// node_modules/meteor/zkroll-ribbon/style.styl                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
module.exports = require("./style.styl.css");                                                                 // 1
                                                                                                              // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"style.styl.css":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/zkroll-ribbon/style.styl.css                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
// These styles have already been applied to the document.                                                    // 1
                                                                                                              // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["meteor/templating","meteor/meteor","./ribbon.html","./style.styl",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/zkroll-ribbon/index.js                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var Template = void 0;                                                                                        // 1
module.importSync("meteor/templating", {                                                                      // 1
    Template: function (v) {                                                                                  // 1
        Template = v;                                                                                         // 1
    }                                                                                                         // 1
}, 0);                                                                                                        // 1
var Meteor = void 0;                                                                                          // 1
module.importSync("meteor/meteor", {                                                                          // 1
    Meteor: function (v) {                                                                                    // 1
        Meteor = v;                                                                                           // 1
    }                                                                                                         // 1
}, 1);                                                                                                        // 1
module.importSync("./ribbon.html");                                                                           // 1
module.importSync("./style.styl");                                                                            // 1
Template.ribbon.viewmodel({                                                                                   // 7
    options: undefined,                                                                                       // 8
    x: 1,                                                                                                     // 9
    within: function (n) {                                                                                    // 10
        //check if within verticals length boundary                                                           // 11
        return 0 <= n && n <= this.verticals().length - 1;                                                    // 12
    },                                                                                                        // 13
    next: function () {                                                                                       // 14
        //stub to test next variable                                                                          // 15
        var n = this.x() + 1; //checks if within boundaries                                                   // 16
                                                                                                              //
        if (this.within(n)) {                                                                                 // 18
            //increment by 1                                                                                  // 19
            this.x(n);                                                                                        // 20
            this.logX();                                                                                      // 21
        }                                                                                                     // 23
    },                                                                                                        // 24
    prev: function () {                                                                                       // 25
        //stub to test next variable                                                                          // 26
        var n = this.x() - 1; //checks if within boundaries                                                   // 27
                                                                                                              //
        if (this.within(n)) {                                                                                 // 29
            //increment by 1                                                                                  // 30
            this.x(n);                                                                                        // 31
            this.logX();                                                                                      // 32
        }                                                                                                     // 33
    },                                                                                                        // 34
    logX: function () {                                                                                       // 35
        console.log(this.x());                                                                                // 36
    }                                                                                                         // 37
});                                                                                                           // 7
Template.ribbonItem.viewmodel({                                                                               // 41
    log: function () {                                                                                        // 42
        console.log(this);                                                                                    // 43
    },                                                                                                        // 44
    action: function () {                                                                                     // 45
        if (this.active()) {                                                                                  // 46
            this.parent().next();                                                                             // 47
        } else {                                                                                              // 48
            this.here();                                                                                      // 49
        }                                                                                                     // 50
    },                                                                                                        // 51
    active: function () {                                                                                     // 52
        if (this.index() == this.parent().x()) {                                                              // 53
            return true;                                                                                      // 54
        }                                                                                                     // 55
    },                                                                                                        // 56
    here: function () {                                                                                       // 57
        this.parent().x(this.index());                                                                        // 58
    }                                                                                                         // 59
});                                                                                                           // 41
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json",".html",".styl"]});
require("./node_modules/meteor/zkroll-ribbon/template.ribbon.js");
var exports = require("./node_modules/meteor/zkroll-ribbon/index.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['zkroll-ribbon'] = exports;

})();

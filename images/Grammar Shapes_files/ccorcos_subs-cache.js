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
var EJSON = Package.ejson.EJSON;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, SubsCache;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/ccorcos_subs-cache/src/subsCache.coffee.js                                                  //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var callbacksFromArgs, debug, hasCallbacks, withoutCallbacks,                                           // 2
  __slice = [].slice;                                                                                   // 3
                                                                                                        // 4
debug = function() {                                                                                    // 5
  var args;                                                                                             // 6
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                       // 7
};                                                                                                      // 8
                                                                                                        // 9
hasCallbacks = function(args) {                                                                         // 10
  var lastArg;                                                                                          // 11
  if (args.length) {                                                                                    // 12
    lastArg = args[args.length - 1];                                                                    // 13
    return _.isFunction(lastArg) || (lastArg && _.any([lastArg.onReady, lastArg.onError, lastArg.onStop], _.isFunction));
  }                                                                                                     // 15
};                                                                                                      // 16
                                                                                                        // 17
withoutCallbacks = function(args) {                                                                     // 18
  if (hasCallbacks(args)) {                                                                             // 19
    return args.slice(0);                                                                               // 20
  } else {                                                                                              // 21
    return args.slice(0);                                                                               // 22
  }                                                                                                     // 23
};                                                                                                      // 24
                                                                                                        // 25
callbacksFromArgs = function(args) {                                                                    // 26
  if (hasCallbacks(args)) {                                                                             // 27
    if (_.isFunction(args[args.length - 1])) {                                                          // 28
      return {                                                                                          // 29
        onReady: args[args.length - 1]                                                                  // 30
      };                                                                                                // 31
    } else {                                                                                            // 32
      return args[args.length - 1];                                                                     // 33
    }                                                                                                   // 34
  } else {                                                                                              // 35
    return {};                                                                                          // 36
  }                                                                                                     // 37
};                                                                                                      // 38
                                                                                                        // 39
SubsCache = (function() {                                                                               // 40
  SubsCache.caches = [];                                                                                // 41
                                                                                                        // 42
  function SubsCache(obj) {                                                                             // 43
    var cacheLimit, expireAfter;                                                                        // 44
    expireAfter = void 0;                                                                               // 45
    cacheLimit = void 0;                                                                                // 46
    if (obj) {                                                                                          // 47
      expireAfter = obj.expireAfter, cacheLimit = obj.cacheLimit;                                       // 48
    }                                                                                                   // 49
    if (expireAfter === void 0) {                                                                       // 50
      expireAfter = 5;                                                                                  // 51
    }                                                                                                   // 52
    if (cacheLimit === void 0) {                                                                        // 53
      cacheLimit = 10;                                                                                  // 54
    }                                                                                                   // 55
    if (cacheLimit === 0) {                                                                             // 56
      console.warn("cacheLimit cannot be zero!");                                                       // 57
      cacheLimit = 1;                                                                                   // 58
    }                                                                                                   // 59
    this.expireAfter = expireAfter;                                                                     // 60
    this.cacheLimit = cacheLimit;                                                                       // 61
    this.cache = {};                                                                                    // 62
    this.allReady = new ReactiveVar(true);                                                              // 63
    SubsCache.caches.push(this);                                                                        // 64
  }                                                                                                     // 65
                                                                                                        // 66
  SubsCache.prototype.ready = function() {                                                              // 67
    return this.allReady.get();                                                                         // 68
  };                                                                                                    // 69
                                                                                                        // 70
  SubsCache.prototype.onReady = function(callback) {                                                    // 71
    return Tracker.autorun((function(_this) {                                                           // 72
      return function(c) {                                                                              // 73
        if (_this.ready()) {                                                                            // 74
          c.stop();                                                                                     // 75
          return callback();                                                                            // 76
        }                                                                                               // 77
      };                                                                                                // 78
    })(this));                                                                                          // 79
  };                                                                                                    // 80
                                                                                                        // 81
  SubsCache.clearAll = function() {                                                                     // 82
    return this.caches.map(function(s) {                                                                // 83
      return s.clear();                                                                                 // 84
    });                                                                                                 // 85
  };                                                                                                    // 86
                                                                                                        // 87
  SubsCache.prototype.clear = function() {                                                              // 88
    return _.values(this.cache).map(function(sub) {                                                     // 89
      return sub.stopNow();                                                                             // 90
    });                                                                                                 // 91
  };                                                                                                    // 92
                                                                                                        // 93
  SubsCache.prototype.subscribe = function() {                                                          // 94
    var args;                                                                                           // 95
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                     // 96
    args.unshift(this.expireAfter);                                                                     // 97
    return this.subscribeFor.apply(this, args);                                                         // 98
  };                                                                                                    // 99
                                                                                                        // 100
  SubsCache.prototype.subscribeFor = function() {                                                       // 101
    var allSubs, args, cache, cachedSub, expireTime, hash, i, needToDelete, newArgs, numSubs, _i, _ref;
    expireTime = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];          // 103
    if (Meteor.isServer) {                                                                              // 104
      return Meteor.subscribe.apply(Meteor.args);                                                       // 105
    } else {                                                                                            // 106
      hash = EJSON.stringify(withoutCallbacks(args));                                                   // 107
      cache = this.cache;                                                                               // 108
      if (hash in cache) {                                                                              // 109
        if (hasCallbacks(args)) {                                                                       // 110
          cache[hash].addHooks(callbacksFromArgs(args));                                                // 111
        }                                                                                               // 112
        cache[hash].restart();                                                                          // 113
      } else {                                                                                          // 114
        cachedSub = {                                                                                   // 115
          sub: null,                                                                                    // 116
          hash: hash,                                                                                   // 117
          compsCount: 0,                                                                                // 118
          timerId: null,                                                                                // 119
          expireTime: expireTime,                                                                       // 120
          when: null,                                                                                   // 121
          hooks: [],                                                                                    // 122
          ready: function() {                                                                           // 123
            return this.sub.ready();                                                                    // 124
          },                                                                                            // 125
          onReady: function(callback) {                                                                 // 126
            if (this.ready()) {                                                                         // 127
              return Tracker.nonreactive(function() {                                                   // 128
                return callback();                                                                      // 129
              });                                                                                       // 130
            } else {                                                                                    // 131
              return Tracker.autorun((function(_this) {                                                 // 132
                return function(c) {                                                                    // 133
                  if (_this.ready()) {                                                                  // 134
                    c.stop();                                                                           // 135
                    return Tracker.nonreactive(function() {                                             // 136
                      return callback();                                                                // 137
                    });                                                                                 // 138
                  }                                                                                     // 139
                };                                                                                      // 140
              })(this));                                                                                // 141
            }                                                                                           // 142
          },                                                                                            // 143
          addHooks: function(callbacks) {                                                               // 144
            if (_.isFunction(callbacks.onReady)) {                                                      // 145
              this.onReady(callbacks.onReady);                                                          // 146
              delete callbacks.onReady;                                                                 // 147
            }                                                                                           // 148
            return this.hooks.push(callbacks);                                                          // 149
          },                                                                                            // 150
          makeCallHooksFn: function(hookName) {                                                         // 151
            cachedSub = this;                                                                           // 152
            return function() {                                                                         // 153
              var originalArgs, originalThis;                                                           // 154
              originalThis = this;                                                                      // 155
              originalArgs = arguments;                                                                 // 156
              return _.each(cachedSub.hooks, function(hookDict) {                                       // 157
                if (_.isFunction(hookDict[hookName])) {                                                 // 158
                  return hookDict[hookName].apply(originalThis, originalArgs);                          // 159
                }                                                                                       // 160
              });                                                                                       // 161
            };                                                                                          // 162
          },                                                                                            // 163
          start: function() {                                                                           // 164
            var c;                                                                                      // 165
            this.when = Date.now();                                                                     // 166
            this.compsCount += 1;                                                                       // 167
            c = Tracker.currentComputation;                                                             // 168
            return c != null ? c.onInvalidate((function(_this) {                                        // 169
              return function() {                                                                       // 170
                return _this.delayedStop();                                                             // 171
              };                                                                                        // 172
            })(this)) : void 0;                                                                         // 173
          },                                                                                            // 174
          stop: function() {                                                                            // 175
            return this.delayedStop();                                                                  // 176
          },                                                                                            // 177
          delayedStop: function() {                                                                     // 178
            if (expireTime >= 0) {                                                                      // 179
              return this.timerId = setTimeout(this.stopNow.bind(this), expireTime * 1000 * 60);        // 180
            }                                                                                           // 181
          },                                                                                            // 182
          restart: function() {                                                                         // 183
            clearTimeout(this.timerId);                                                                 // 184
            return this.start();                                                                        // 185
          },                                                                                            // 186
          stopNow: function() {                                                                         // 187
            this.compsCount -= 1;                                                                       // 188
            if (this.compsCount <= 0) {                                                                 // 189
              this.sub.stop();                                                                          // 190
              return delete cache[this.hash];                                                           // 191
            }                                                                                           // 192
          }                                                                                             // 193
        };                                                                                              // 194
        newArgs = withoutCallbacks(args);                                                               // 195
        newArgs.push({                                                                                  // 196
          onError: cachedSub.makeCallHooksFn('onError'),                                                // 197
          onStop: cachedSub.makeCallHooksFn('onStop')                                                   // 198
        });                                                                                             // 199
        cachedSub.sub = Tracker.nonreactive(function() {                                                // 200
          return Meteor.subscribe.apply(Meteor, newArgs);                                               // 201
        });                                                                                             // 202
        if (hasCallbacks(args)) {                                                                       // 203
          cachedSub.addHooks(callbacksFromArgs(args));                                                  // 204
        }                                                                                               // 205
        if (this.cacheLimit > 0) {                                                                      // 206
          allSubs = _.sortBy(_.values(cache), function(x) {                                             // 207
            return x.when;                                                                              // 208
          });                                                                                           // 209
          numSubs = allSubs.length;                                                                     // 210
          if (numSubs >= this.cacheLimit) {                                                             // 211
            needToDelete = numSubs - this.cacheLimit + 1;                                               // 212
            for (i = _i = 0; 0 <= needToDelete ? _i < needToDelete : _i > needToDelete; i = 0 <= needToDelete ? ++_i : --_i) {
              debug("overflow", allSubs[i]);                                                            // 214
              allSubs[i].stopNow();                                                                     // 215
            }                                                                                           // 216
          }                                                                                             // 217
        }                                                                                               // 218
        cache[hash] = cachedSub;                                                                        // 219
        cachedSub.start();                                                                              // 220
        if ((_ref = this.allReadyComp) != null) {                                                       // 221
          _ref.stop();                                                                                  // 222
        }                                                                                               // 223
        Tracker.autorun((function(_this) {                                                              // 224
          return function(c) {                                                                          // 225
            var subs;                                                                                   // 226
            _this.allReadyComp = c;                                                                     // 227
            subs = _.values(_this.cache);                                                               // 228
            if (subs.length > 0) {                                                                      // 229
              return _this.allReady.set(subs.map(function(x) {                                          // 230
                return x.ready();                                                                       // 231
              }).reduce(function(a, b) {                                                                // 232
                return a && b;                                                                          // 233
              }));                                                                                      // 234
            }                                                                                           // 235
          };                                                                                            // 236
        })(this));                                                                                      // 237
      }                                                                                                 // 238
      return cache[hash];                                                                               // 239
    }                                                                                                   // 240
  };                                                                                                    // 241
                                                                                                        // 242
  return SubsCache;                                                                                     // 243
                                                                                                        // 244
})();                                                                                                   // 245
                                                                                                        // 246
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ccorcos:subs-cache'] = {}, {
  SubsCache: SubsCache
});

})();

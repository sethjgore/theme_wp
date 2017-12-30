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
var HTTP = Package.http.HTTP;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"ostrio:cookies":{"cookies.js":["babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","babel-runtime/helpers/classCallCheck",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ostrio_cookies/cookies.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
module.export({                                                                                                       // 1
  Cookies: function () {                                                                                              // 1
    return Cookies;                                                                                                   // 1
  }                                                                                                                   // 1
});                                                                                                                   // 1
                                                                                                                      //
var NoOp = function () {};                                                                                            // 1
                                                                                                                      //
var urlRE = /\/___cookie___\/set/; /*                                                                                 // 2
                                   @url https://github.com/jshttp/cookie/blob/master/index.js                         //
                                   @name cookie                                                                       //
                                   @author jshttp                                                                     //
                                   @license                                                                           //
                                   (The MIT License)                                                                  //
                                                                                                                      //
                                   Copyright (c) 2012-2014 Roman Shtylman <shtylman@gmail.com>                        //
                                   Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>             //
                                                                                                                      //
                                   Permission is hereby granted, free of charge, to any person obtaining              //
                                   a copy of this software and associated documentation files (the                    //
                                   'Software'), to deal in the Software without restriction, including                //
                                   without limitation the rights to use, copy, modify, merge, publish,                //
                                   distribute, sublicense, and/or sell copies of the Software, and to                 //
                                   permit persons to whom the Software is furnished to do so, subject to              //
                                   the following conditions:                                                          //
                                                                                                                      //
                                   The above copyright notice and this permission notice shall be                     //
                                   included in all copies or substantial portions of the Software.                    //
                                                                                                                      //
                                   THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,                    //
                                   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                 //
                                   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.             //
                                   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY               //
                                   CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,               //
                                   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE                  //
                                   SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                             //
                                    */                                                                                //
var decode = decodeURIComponent;                                                                                      // 32
var encode = encodeURIComponent;                                                                                      // 33
var pairSplitRegExp = /; */; /*                                                                                       // 34
                             RegExp to match field-content in RFC 7230 sec 3.2                                        //
                                                                                                                      //
                             field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]                              //
                             field-vchar   = VCHAR / obs-text                                                         //
                             obs-text      = %x80-FF                                                                  //
                              */                                                                                      //
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/; /*                                                  // 43
                                                                  @function                                           //
                                                                  @name parse                                         //
                                                                  @param {String} str                                 //
                                                                  @param {Object} [options]                           //
                                                                  @return {Object}                                    //
                                                                  @summary                                            //
                                                                  Parse a cookie header.                              //
                                                                  Parse the given cookie header string into an object
                                                                  The object has the various cookies as keys(names) => values
                                                                  @private                                            //
                                                                   */                                                 //
                                                                                                                      //
var parse = function (str, options) {                                                                                 // 57
  if (typeof str !== 'string') {                                                                                      // 58
    throw new Meteor.Error(404, 'argument str must be a string');                                                     // 59
  }                                                                                                                   // 60
                                                                                                                      //
  var obj = {};                                                                                                       // 61
  var opt = options || {};                                                                                            // 62
  var val = void 0;                                                                                                   // 63
  var key = void 0;                                                                                                   // 64
  var eqIndx = void 0;                                                                                                // 65
  str.split(pairSplitRegExp).forEach(function (pair) {                                                                // 67
    eqIndx = pair.indexOf('=');                                                                                       // 68
                                                                                                                      //
    if (eqIndx < 0) {                                                                                                 // 69
      return;                                                                                                         // 70
    }                                                                                                                 // 71
                                                                                                                      //
    key = pair.substr(0, eqIndx).trim();                                                                              // 72
    val = pair.substr(++eqIndx, pair.length).trim();                                                                  // 73
                                                                                                                      //
    if (val[0] === '"') {                                                                                             // 74
      val = val.slice(1, -1);                                                                                         // 75
    }                                                                                                                 // 76
                                                                                                                      //
    if (void 0 === obj[key]) {                                                                                        // 77
      obj[key] = tryDecode(val, opt.decode || decode);                                                                // 78
    }                                                                                                                 // 79
  });                                                                                                                 // 80
  return obj;                                                                                                         // 81
}; /*                                                                                                                 // 82
   @function                                                                                                          //
   @name serialize                                                                                                    //
   @param {String} name                                                                                               //
   @param {String} val                                                                                                //
   @param {Object} [options]                                                                                          //
   @return {String}                                                                                                   //
   @summary                                                                                                           //
   Serialize data into a cookie header.                                                                               //
   Serialize the a name value pair into a cookie string suitable for                                                  //
   http headers. An optional options object specified cookie parameters.                                              //
   serialize('foo', 'bar', { httpOnly: true })                                                                        //
     => "foo=bar; httpOnly"                                                                                           //
   @private                                                                                                           //
    */                                                                                                                //
                                                                                                                      //
var serialize = function (key, val) {                                                                                 // 99
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};                                   // 99
  var name = void 0;                                                                                                  // 100
                                                                                                                      //
  if (!fieldContentRegExp.test(key)) {                                                                                // 102
    name = escape(key);                                                                                               // 103
  } else {                                                                                                            // 104
    name = key;                                                                                                       // 105
  }                                                                                                                   // 106
                                                                                                                      //
  var value = void 0;                                                                                                 // 108
                                                                                                                      //
  if (!_.isUndefined(val)) {                                                                                          // 109
    value = encode(val);                                                                                              // 110
                                                                                                                      //
    if (value && !fieldContentRegExp.test(value)) {                                                                   // 111
      value = escape(value);                                                                                          // 112
    }                                                                                                                 // 113
  } else {                                                                                                            // 114
    value = '';                                                                                                       // 115
  }                                                                                                                   // 116
                                                                                                                      //
  var pairs = [name + "=" + value];                                                                                   // 118
                                                                                                                      //
  if (_.isNumber(opt.maxAge)) {                                                                                       // 120
    pairs.push("Max-Age=" + opt.maxAge);                                                                              // 121
  }                                                                                                                   // 122
                                                                                                                      //
  if (opt.domain && _.isString(opt.domain)) {                                                                         // 124
    if (!fieldContentRegExp.test(opt.domain)) {                                                                       // 125
      throw new Meteor.Error(404, 'option domain is invalid');                                                        // 126
    }                                                                                                                 // 127
                                                                                                                      //
    pairs.push("Domain=" + opt.domain);                                                                               // 128
  }                                                                                                                   // 129
                                                                                                                      //
  if (opt.path && _.isString(opt.path)) {                                                                             // 131
    if (!fieldContentRegExp.test(opt.path)) {                                                                         // 132
      throw new Meteor.Error(404, 'option path is invalid');                                                          // 133
    }                                                                                                                 // 134
                                                                                                                      //
    pairs.push("Path=" + opt.path);                                                                                   // 135
  }                                                                                                                   // 136
                                                                                                                      //
  opt.expires = opt.expires || opt.expire || false;                                                                   // 138
                                                                                                                      //
  if (opt.expires === Infinity) {                                                                                     // 139
    pairs.push('Expires=Fri, 31 Dec 9999 23:59:59 GMT');                                                              // 140
  } else if (opt.expires instanceof Date) {                                                                           // 141
    pairs.push("Expires=" + opt.expires.toUTCString());                                                               // 142
  } else if (opt.expires === 0) {                                                                                     // 143
    pairs.push('Expires=0');                                                                                          // 144
  } else if (_.isNumber(opt.expires)) {                                                                               // 145
    pairs.push("Expires=" + new Date(opt.expires).toUTCString());                                                     // 146
  }                                                                                                                   // 147
                                                                                                                      //
  if (opt.httpOnly) {                                                                                                 // 149
    pairs.push('HttpOnly');                                                                                           // 150
  }                                                                                                                   // 151
                                                                                                                      //
  if (opt.secure) {                                                                                                   // 153
    pairs.push('Secure');                                                                                             // 154
  }                                                                                                                   // 155
                                                                                                                      //
  if (opt.firstPartyOnly) {                                                                                           // 157
    pairs.push('First-Party-Only');                                                                                   // 158
  }                                                                                                                   // 159
                                                                                                                      //
  if (opt.sameSite) {                                                                                                 // 161
    pairs.push('SameSite');                                                                                           // 162
  }                                                                                                                   // 163
                                                                                                                      //
  return pairs.join('; ');                                                                                            // 165
}; /*                                                                                                                 // 166
   @function                                                                                                          //
   @name tryDecode                                                                                                    //
   @param {String} str                                                                                                //
   @param {Function} d                                                                                                //
   @summary Try decoding a string using a decoding function.                                                          //
   @private                                                                                                           //
    */                                                                                                                //
                                                                                                                      //
var tryDecode = function (str, d) {                                                                                   // 177
  try {                                                                                                               // 178
    return d(str);                                                                                                    // 179
  } catch (e) {                                                                                                       // 180
    return str;                                                                                                       // 181
  }                                                                                                                   // 182
}; /*                                                                                                                 // 183
   @locus Anywhere                                                                                                    //
   @class __cookies                                                                                                   //
   @param _cookies {Object|String} - Current cookies as String or Object                                              //
   @param TTL {Number} - Default cookies expiration time (max-age) in milliseconds, by default - session (false)      //
   @param runOnServer {Boolean} - Expose Cookies class to Server                                                      //
   @param response {http.ServerResponse|Object} - This object is created internally by a HTTP server                  //
   @summary Internal Class                                                                                            //
    */                                                                                                                //
                                                                                                                      //
var __cookies = function () {                                                                                         //
  function __cookies(_cookies, TTL, runOnServer, response) {                                                          // 196
    (0, _classCallCheck3.default)(this, __cookies);                                                                   // 196
    this.TTL = TTL;                                                                                                   // 197
    this.response = response;                                                                                         // 198
    this.runOnServer = runOnServer;                                                                                   // 199
                                                                                                                      //
    if (_.isObject(_cookies)) {                                                                                       // 201
      this.cookies = _cookies;                                                                                        // 202
    } else {                                                                                                          // 203
      this.cookies = parse(_cookies);                                                                                 // 204
    }                                                                                                                 // 205
  } /*                                                                                                                // 206
    @locus Anywhere                                                                                                   //
    @memberOf __cookies                                                                                               //
    @name get                                                                                                         //
    @param {String} key  - The name of the cookie to read                                                             //
    @param {String} _tmp - Unparsed string instead of user's cookies                                                  //
    @summary Read a cookie. If the cookie doesn't exist a null value will be returned.                                //
    @returns {String|void}                                                                                            //
     */                                                                                                               //
                                                                                                                      //
  __cookies.prototype.get = function () {                                                                             //
    function get(key, _tmp) {                                                                                         //
      var _cs = _tmp ? parse(_tmp) : this.cookies;                                                                    // 218
                                                                                                                      //
      if (!key || !_cs) {                                                                                             // 219
        return void 0;                                                                                                // 220
      }                                                                                                               // 221
                                                                                                                      //
      if (_cs.hasOwnProperty(key)) {                                                                                  // 223
        return _cs[key];                                                                                              // 224
      }                                                                                                               // 225
                                                                                                                      //
      return void 0;                                                                                                  // 227
    }                                                                                                                 // 228
                                                                                                                      //
    return get;                                                                                                       //
  }(); /*                                                                                                             //
       @locus Anywhere                                                                                                //
       @memberOf __cookies                                                                                            //
       @name set                                                                                                      //
       @param {String}  key   - The name of the cookie to create/overwrite                                            //
       @param {String}  value - The value of the cookie                                                               //
       @param {Object}  opts  - [Optional] Cookie options (see readme docs)                                           //
       @summary Create/overwrite a cookie.                                                                            //
       @returns {Boolean}                                                                                             //
        */                                                                                                            //
                                                                                                                      //
  __cookies.prototype.set = function () {                                                                             //
    function set(key, value) {                                                                                        //
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};                              // 240
                                                                                                                      //
      if (key && !_.isUndefined(value)) {                                                                             // 241
        if (_.isNumber(this.TTL) && opts.expires === undefined) {                                                     // 242
          opts.expires = new Date(+new Date() + this.TTL);                                                            // 243
        }                                                                                                             // 244
                                                                                                                      //
        var newCookie = serialize(key, value, opts);                                                                  // 245
        this.cookies[key] = value;                                                                                    // 246
                                                                                                                      //
        if (Meteor.isClient) {                                                                                        // 247
          document.cookie = newCookie;                                                                                // 248
        } else {                                                                                                      // 249
          this.response.setHeader('Set-Cookie', newCookie);                                                           // 250
        }                                                                                                             // 251
                                                                                                                      //
        return true;                                                                                                  // 252
      }                                                                                                               // 253
                                                                                                                      //
      return false;                                                                                                   // 254
    }                                                                                                                 // 255
                                                                                                                      //
    return set;                                                                                                       //
  }(); /*                                                                                                             //
       @locus Anywhere                                                                                                //
       @memberOf __cookies                                                                                            //
       @name remove                                                                                                   //
       @param {String} key    - The name of the cookie to create/overwrite                                            //
       @param {String} path   - [Optional] The path from where the cookie will be                                     //
       readable. E.g., "/", "/mydir"; if not specified, defaults to the current                                       //
       path of the current document location (string or null). The path must be                                       //
       absolute (see RFC 2965). For more information on how to use relative paths                                     //
       in this argument, see: https://developer.mozilla.org/en-US/docs/Web/API/document.cookie#Using_relative_URLs_in_the_path_parameter
       @param {String} domain - [Optional] The domain from where the cookie will                                      //
       be readable. E.g., "example.com", ".example.com" (includes all subdomains)                                     //
       or "subdomain.example.com"; if not specified, defaults to the host portion                                     //
       of the current document location (string or null).                                                             //
       @summary Remove a cookie(s).                                                                                   //
       @returns {Boolean}                                                                                             //
        */                                                                                                            //
                                                                                                                      //
  __cookies.prototype.remove = function () {                                                                          //
    function remove(key) {                                                                                            //
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';                             // 274
      var domain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';                            // 274
                                                                                                                      //
      if (key && this.cookies.hasOwnProperty(key)) {                                                                  // 275
        var newCookie = serialize(key, '', {                                                                          // 276
          domain: domain,                                                                                             // 277
          path: path,                                                                                                 // 278
          expires: new Date(0)                                                                                        // 279
        });                                                                                                           // 276
        delete this.cookies[key];                                                                                     // 282
                                                                                                                      //
        if (Meteor.isClient) {                                                                                        // 283
          document.cookie = newCookie;                                                                                // 284
        } else {                                                                                                      // 285
          this.response.setHeader('Set-Cookie', newCookie);                                                           // 286
        }                                                                                                             // 287
                                                                                                                      //
        return true;                                                                                                  // 288
      } else if (!key && this.keys().length > 0 && this.keys()[0] !== '') {                                           // 289
        var keys = Object.keys(this.cookies);                                                                         // 290
                                                                                                                      //
        for (var i = 0; i < keys.length; i++) {                                                                       // 291
          this.remove(keys[i]);                                                                                       // 292
        }                                                                                                             // 293
                                                                                                                      //
        return true;                                                                                                  // 294
      }                                                                                                               // 295
                                                                                                                      //
      return false;                                                                                                   // 296
    }                                                                                                                 // 297
                                                                                                                      //
    return remove;                                                                                                    //
  }(); /*                                                                                                             //
       @locus Anywhere                                                                                                //
       @memberOf __cookies                                                                                            //
       @name has                                                                                                      //
       @param {String} key  - The name of the cookie to create/overwrite                                              //
       @param {String} _tmp - Unparsed string instead of user's cookies                                               //
       @summary Check whether a cookie exists in the current position.                                                //
       @returns {Boolean}                                                                                             //
        */                                                                                                            //
                                                                                                                      //
  __cookies.prototype.has = function () {                                                                             //
    function has(key, _tmp) {                                                                                         //
      var _cs = _tmp ? parse(_tmp) : this.cookies;                                                                    // 309
                                                                                                                      //
      if (!key || !_cs) {                                                                                             // 310
        return false;                                                                                                 // 311
      }                                                                                                               // 312
                                                                                                                      //
      return _cs.hasOwnProperty(key);                                                                                 // 314
    }                                                                                                                 // 315
                                                                                                                      //
    return has;                                                                                                       //
  }(); /*                                                                                                             //
       @locus Anywhere                                                                                                //
       @memberOf __cookies                                                                                            //
       @name keys                                                                                                     //
       @summary Returns an array of all readable cookies from this location.                                          //
       @returns {[String]}                                                                                            //
        */                                                                                                            //
                                                                                                                      //
  __cookies.prototype.keys = function () {                                                                            //
    function keys() {                                                                                                 //
      if (this.cookies) {                                                                                             // 325
        return Object.keys(this.cookies);                                                                             // 326
      }                                                                                                               // 327
                                                                                                                      //
      return [];                                                                                                      // 328
    }                                                                                                                 // 329
                                                                                                                      //
    return keys;                                                                                                      //
  }(); /*                                                                                                             //
       @locus Client                                                                                                  //
       @memberOf __cookies                                                                                            //
       @name send                                                                                                     //
       @param cb {Function} - Callback                                                                                //
       @summary Send all cookies over XHR to server.                                                                  //
       @returns {void}                                                                                                //
        */                                                                                                            //
                                                                                                                      //
  __cookies.prototype.send = function () {                                                                            //
    function send() {                                                                                                 //
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NoOp;                              // 339
                                                                                                                      //
      if (Meteor.isServer) {                                                                                          // 340
        cb(new Meteor.Error(400, 'Can\'t run `.send()` on server, it\'s Client only method!'));                       // 341
      }                                                                                                               // 342
                                                                                                                      //
      if (this.runOnServer) {                                                                                         // 344
        HTTP.get((window.__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '') + "/___cookie___/set", cb);            // 345
      } else {                                                                                                        // 346
        cb(new Meteor.Error(400, 'Can\'t send cookies on server when `runOnServer` is false.'));                      // 347
      }                                                                                                               // 348
                                                                                                                      //
      return void 0;                                                                                                  // 349
    }                                                                                                                 // 350
                                                                                                                      //
    return send;                                                                                                      //
  }();                                                                                                                //
                                                                                                                      //
  return __cookies;                                                                                                   //
}(); /*                                                                                                               //
     @function                                                                                                        //
     @locus Server                                                                                                    //
     @summary Middleware handler                                                                                      //
     @private                                                                                                         //
      */                                                                                                              //
                                                                                                                      //
var __middlewareHandler = function (req, res, self) {                                                                 // 360
  var _cookies = {};                                                                                                  // 361
                                                                                                                      //
  if (self.runOnServer) {                                                                                             // 362
    if (req.headers && req.headers.cookie) {                                                                          // 363
      _cookies = parse(req.headers.cookie);                                                                           // 364
    }                                                                                                                 // 365
                                                                                                                      //
    return new __cookies(_cookies, self.TTL, self.runOnServer, res);                                                  // 366
  }                                                                                                                   // 367
                                                                                                                      //
  throw new Meteor.Error(400, 'Can\'t use middleware when `runOnServer` is false.');                                  // 369
}; /*                                                                                                                 // 370
   @locus Anywhere                                                                                                    //
   @class Cookies                                                                                                     //
   @param opts {Object}                                                                                               //
   @param opts.TTL {Number} - Default cookies expiration time (max-age) in milliseconds, by default - session (false)
   @param opts.auto {Boolean} - [Server] Auto-bind in middleware as `req.Cookies`, by default `true`                  //
   @param opts.handler {Function} - [Server] Middleware handler                                                       //
   @param opts.runOnServer {Boolean} - Expose Cookies class to Server                                                 //
   @summary Main Cookie class                                                                                         //
    */                                                                                                                //
                                                                                                                      //
var Cookies = function (_cookies2) {                                                                                  //
  (0, _inherits3.default)(Cookies, _cookies2);                                                                        //
                                                                                                                      //
  function Cookies() {                                                                                                // 384
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};                                // 384
    (0, _classCallCheck3.default)(this, Cookies);                                                                     // 384
    opts.TTL = _.isNumber(opts.TTL) ? opts.TTL : false;                                                               // 385
    opts.runOnServer = opts.runOnServer !== false ? true : false;                                                     // 386
                                                                                                                      //
    if (Meteor.isClient) {                                                                                            // 388
      var _this = (0, _possibleConstructorReturn3.default)(this, _cookies2.call(this, document.cookie, opts.TTL, opts.runOnServer));
    } else {                                                                                                          // 390
      var _this = (0, _possibleConstructorReturn3.default)(this, _cookies2.call(this, {}, opts.TTL, opts.runOnServer));
                                                                                                                      //
      opts.auto = opts.auto !== false ? true : false;                                                                 // 392
                                                                                                                      //
      _this.handler = opts.handler || function () {};                                                                 // 393
                                                                                                                      //
      _this.runOnServer = opts.runOnServer;                                                                           // 394
                                                                                                                      //
      if (_this.runOnServer) {                                                                                        // 396
        if (!Cookies.isLoadedOnServer) {                                                                              // 397
          if (opts.auto) {                                                                                            // 398
            WebApp.connectHandlers.use(function (req, res, next) {                                                    // 399
              if (urlRE.test(req._parsedUrl.path)) {                                                                  // 400
                if (req.headers && req.headers.cookie) {                                                              // 401
                  var _cObj = parse(req.headers.cookie);                                                              // 402
                                                                                                                      //
                  var _cKeys = Object.keys(_cObj);                                                                    // 403
                                                                                                                      //
                  var _cArr = [];                                                                                     // 404
                                                                                                                      //
                  var _cStr = void 0;                                                                                 // 405
                                                                                                                      //
                  for (var i = 0; i < _cKeys.length; i++) {                                                           // 407
                    _cStr = serialize(_cKeys[i], _cObj[_cKeys[i]]);                                                   // 408
                                                                                                                      //
                    if (!~_cArr.indexOf(_cStr)) {                                                                     // 409
                      _cArr.push(_cStr);                                                                              // 410
                    }                                                                                                 // 411
                  }                                                                                                   // 412
                                                                                                                      //
                  res.setHeader('Set-Cookie', _cArr);                                                                 // 414
                }                                                                                                     // 415
                                                                                                                      //
                res.writeHead(200);                                                                                   // 417
                res.end('');                                                                                          // 418
              } else {                                                                                                // 419
                req.Cookies = __middlewareHandler(req, res, _this);                                                   // 420
                next();                                                                                               // 421
              }                                                                                                       // 422
            });                                                                                                       // 423
          }                                                                                                           // 424
                                                                                                                      //
          Cookies.isLoadedOnServer = true;                                                                            // 425
        }                                                                                                             // 426
      }                                                                                                               // 427
    }                                                                                                                 // 428
                                                                                                                      //
    return (0, _possibleConstructorReturn3.default)(_this);                                                           // 384
  } /*                                                                                                                // 429
    @locus Server                                                                                                     //
    @memberOf Cookies                                                                                                 //
    @name middleware                                                                                                  //
    @summary Get Cookies instance into callback                                                                       //
    @returns {void}                                                                                                   //
     */                                                                                                               //
                                                                                                                      //
  Cookies.prototype.middleware = function () {                                                                        //
    function middleware() {                                                                                           //
      var _this2 = this;                                                                                              // 439
                                                                                                                      //
      if (!Meteor.isServer) {                                                                                         // 440
        throw new Meteor.Error(500, '[ostrio:cookies] Can\'t use `.middleware()` on Client, it\'s Server only!');     // 441
      }                                                                                                               // 442
                                                                                                                      //
      return function (req, res, next) {                                                                              // 444
        _this2.handler && _this2.handler(__middlewareHandler(req, res, _this2));                                      // 445
        next();                                                                                                       // 446
      };                                                                                                              // 447
    }                                                                                                                 // 448
                                                                                                                      //
    return middleware;                                                                                                //
  }();                                                                                                                //
                                                                                                                      //
  return Cookies;                                                                                                     //
}(__cookies);                                                                                                         //
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 451
  Cookies.isLoadedOnServer = false;                                                                                   // 452
} /* Export the Cookies class */                                                                                      // 453
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/ostrio:cookies/cookies.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ostrio:cookies'] = exports;

})();

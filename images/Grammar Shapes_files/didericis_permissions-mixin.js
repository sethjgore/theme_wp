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
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var Roles = Package['alanning:roles'].Roles;
var ValidatedMethod = Package['mdg:validated-method'].ValidatedMethod;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var PermissionsMixin;

var require = meteorInstall({"node_modules":{"meteor":{"didericis:permissions-mixin":{"permissions-mixin.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/didericis_permissions-mixin/permissions-mixin.js                                      //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
/* global PermissionsMixin:true, Roles */PermissionsMixin = function (methodOptions) {            // 1
    var DEFINITION_ERROR = 'PermssionsMixin.Definition';                                          // 3
                                                                                                  //
    var checkMethodOption = function () {                                                         // 5
        function checkMethodOption(methodOptions, methodOptionName) {                             // 5
            if (methodOptions[methodOptionName]) {                                                // 7
                check(methodOptions[methodOptionName], Match.OneOf([Object], Boolean));           // 8
                                                                                                  //
                if (Array.isArray(methodOptions[methodOptionName])) {                             // 11
                    if (methodOptions[methodOptionName].length === 0) {                           // 12
                        throw new Meteor.Error(DEFINITION_ERROR, methodOptionName + " must have at least one document in it");
                    }                                                                             // 15
                                                                                                  //
                    methodOptions[methodOptionName].forEach(function (permitDoc) {                // 17
                        try {                                                                     // 18
                            var _check;                                                           // 18
                                                                                                  //
                            check(permitDoc, (_check = {                                          // 19
                                roles: Match.OneOf([String], String, Boolean),                    // 20
                                group: Match.OneOf([String], String, Boolean)                     // 21
                            }, _check[methodOptionName] = Match.Optional(Function), _check));     // 19
                        } catch (e) {                                                             // 24
                            throw new Meteor.Error(DEFINITION_ERROR, e.message);                  // 25
                        }                                                                         // 26
                    });                                                                           // 27
                }                                                                                 // 28
            }                                                                                     // 29
        }                                                                                         // 30
                                                                                                  //
        return checkMethodOption;                                                                 // 5
    }();                                                                                          // 5
                                                                                                  //
    var isInRole = function () {                                                                  // 32
        function isInRole(_ref) {                                                                 // 32
            var userId = _ref.userId,                                                             // 32
                roles = _ref.roles,                                                               // 32
                group = _ref.group;                                                               // 32
            var allUserGroups = Roles.getGroupsForUser(userId); // Any logged in user             // 33
                                                                                                  //
            if (roles === true && group === true) {                                               // 36
                return !!userId;                                                                  // 37
            } // A user with any role in a particular group                                       // 38
                                                                                                  //
                                                                                                  //
            if (roles === true && typeof group === 'string') {                                    // 41
                return Roles.getRolesForUser(userId, group).length > 0;                           // 42
            } // A user with any role in a particular arry of groups                              // 43
                                                                                                  //
                                                                                                  //
            if (roles === true && Array.isArray(group)) {                                         // 46
                var isInAnyRoleInGroupArray = Roles.getRolesForUser(userId).length > 0;           // 47
                group.forEach(function (_group) {                                                 // 49
                    isInAnyRoleInGroupArray = Roles.getRolesForUser(userId, _group).length > 0;   // 50
                });                                                                               // 52
                return isInAnyRoleInGroupArray;                                                   // 53
            } // A user with a particular role in any group                                       // 54
                                                                                                  //
                                                                                                  //
            if (typeof roles === 'string' && group === true) {                                    // 57
                var isInRoleInAnyGroup = Roles.userIsInRole(userId, roles);                       // 58
                allUserGroups.forEach(function (_group) {                                         // 59
                    isInRoleInAnyGroup = Roles.userIsInRole(userId, roles, _group);               // 60
                });                                                                               // 62
                return isInRoleInAnyGroup;                                                        // 63
            } // A user with a particular role in a particular group                              // 64
                                                                                                  //
                                                                                                  //
            if (typeof roles === 'string' && typeof group === 'string') {                         // 67
                return Roles.userIsInRole(userId, roles, group);                                  // 68
            } // A user with a particular role in a particular arry of groups                     // 69
                                                                                                  //
                                                                                                  //
            if (typeof roles === 'string' && Array.isArray(group)) {                              // 72
                var isInRoleInGroupArray = Roles.userIsInRole(userId, roles);                     // 73
                groups.forEach(function (_group) {                                                // 74
                    isInRoleInGroupArray = Roles.userIsInRole(userId, roles, _group);             // 75
                });                                                                               // 77
                return isInRoleInGroupArray;                                                      // 78
            } // A user in a particular array of roles in any group                               // 79
                                                                                                  //
                                                                                                  //
            if (Array.isArray(roles) && group === true) {                                         // 82
                var isInRoleArrayInAnyGroup = Roles.userIsInRole(userId, roles);                  // 83
                allUserGroups.forEach(function (_group) {                                         // 84
                    isInRoleArrayInAnyGroup = Roles.userIsInRole(userId, roles, _group);          // 85
                });                                                                               // 87
                return isInRoleArrayInAnyGroup;                                                   // 88
            } // A user in a particular array of roles in a particular group                      // 89
                                                                                                  //
                                                                                                  //
            if (Array.isArray(roles) && typeof group === 'string') {                              // 92
                return Roles.userIsInRole(userId, roles, group);                                  // 93
            } // A user in a particular array of roles in a particular array of                   // 94
            // groups                                                                             // 97
                                                                                                  //
                                                                                                  //
            if (Array.isArray(roles) && Array.isArray(group)) {                                   // 98
                var isInRoleArrayInGroupArray = Roles.userIsInRole(userId, roles);                // 99
                groups.forEach(function (_group) {                                                // 101
                    isInRoleArrayInGroupArray = Roles.userIsInRole(userId, roles, _group);        // 102
                });                                                                               // 104
                return isInRoleArrayInGroupArray;                                                 // 105
            }                                                                                     // 106
        }                                                                                         // 107
                                                                                                  //
        return isInRole;                                                                          // 32
    }();                                                                                          // 32
                                                                                                  //
    var isRole = function () {                                                                    // 109
        function isRole(option, roleDoc, userId, args) {                                          // 109
            var roles = roleDoc.roles,                                                            // 109
                group = roleDoc.group;                                                            // 109
            var func = roleDoc[option]; // Check to see if this role doc applies to this user     // 111
                                                                                                  //
            if (isInRole({                                                                        // 114
                userId: userId,                                                                   // 114
                roles: roles,                                                                     // 114
                group: group                                                                      // 114
            })) {                                                                                 // 114
                // Check to see if user is allowed/denied                                         // 115
                if (func) {                                                                       // 116
                    return roleDoc[option].apply({                                                // 116
                        userId: userId                                                            // 116
                    }, args);                                                                     // 116
                }                                                                                 // 116
                                                                                                  //
                return true;                                                                      // 117
            }                                                                                     // 118
                                                                                                  //
            return false;                                                                         // 119
        }                                                                                         // 120
                                                                                                  //
        return isRole;                                                                            // 109
    }();                                                                                          // 109
                                                                                                  //
    var isDenied = function () {                                                                  // 122
        function isDenied(_ref2, userId, args) {                                                  // 122
            var deny = _ref2.deny;                                                                // 122
            if (!deny) return true;                                                               // 123
            if (!userId) return true;                                                             // 124
                                                                                                  //
            for (var i = 0; i < methodOptions.deny.length; i++) {                                 // 126
                if (isRole('deny', methodOptions.deny[i], userId, args) === true) {               // 127
                    throw new Meteor.Error(methodOptions.permissionsError.name, methodOptions.permissionsError.message(userId));
                }                                                                                 // 130
            }                                                                                     // 131
                                                                                                  //
            return false;                                                                         // 132
        }                                                                                         // 133
                                                                                                  //
        return isDenied;                                                                          // 122
    }();                                                                                          // 122
                                                                                                  //
    var isAllowed = function () {                                                                 // 135
        function isAllowed(_ref3, userId, args) {                                                 // 135
            var allow = _ref3.allow;                                                              // 135
            if (!allow) return false;                                                             // 136
                                                                                                  //
            if (allow === true) {                                                                 // 138
                return true;                                                                      // 139
            } else if (Array.isArray(allow)) {                                                    // 140
                for (var i = 0; i < allow.length; i++) {                                          // 141
                    if (isRole('allow', allow[i], userId, args) === true) {                       // 142
                        return true;                                                              // 143
                    }                                                                             // 144
                }                                                                                 // 145
                                                                                                  //
                throw new Meteor.Error(methodOptions.permissionsError.name, methodOptions.permissionsError.message(userId));
            }                                                                                     // 148
                                                                                                  //
            throw new Meteor.Error(methodOptions.permissionsError.name, methodOptions.permissionsError.message(userId));
        }                                                                                         // 151
                                                                                                  //
        return isAllowed;                                                                         // 135
    }();                                                                                          // 135
                                                                                                  //
    var runFunc = methodOptions.run;                                                              // 153
                                                                                                  //
    methodOptions.run = function () {                                                             // 155
        function run() {                                                                          // 155
            var userId = this.userId;                                                             // 156
                                                                                                  //
            if (this.isTrusted === true) {                                                        // 158
                return runFunc.apply(this, arguments);                                            // 159
            } else if (isAllowed(methodOptions, userId, arguments) === true) {                    // 160
                return runFunc.apply(this, arguments);                                            // 161
            } else if (isDenied(methodOptions, userId, arguments) === false) {                    // 162
                return runFunc.apply(this, arguments);                                            // 163
            }                                                                                     // 164
                                                                                                  //
            throw new Meteor.Error(methodOptions.permissionsError.name, methodOptions.permissionsError.message(userId));
        }                                                                                         // 168
                                                                                                  //
        return run;                                                                               // 155
    }();                                                                                          // 155
                                                                                                  //
    methodOptions.runTrusted = function () {                                                      // 170
        function runTrusted() {                                                                   // 170
            return runFunc.apply({                                                                // 171
                isTrusted: true                                                                   // 171
            }, arguments);                                                                        // 171
        }                                                                                         // 172
                                                                                                  //
        return runTrusted;                                                                        // 170
    }();                                                                                          // 170
                                                                                                  //
    methodOptions.permissionsError = methodOptions.permissionsError || {                          // 174
        name: 'PermissionsMixin.NotAllowed',                                                      // 175
        message: function (userId) {                                                              // 176
            return "User " + userId + " is not allowed to use " + methodOptions.name;             // 177
        }                                                                                         // 178
    };                                                                                            // 174
                                                                                                  //
    if (methodOptions.allow && methodOptions.deny) {                                              // 181
        throw new Meteor.Error(DEFINITION_ERROR, "method cannot have both allow and deny array");
    }                                                                                             // 184
                                                                                                  //
    checkMethodOption(methodOptions, 'allow');                                                    // 186
    checkMethodOption(methodOptions, 'deny');                                                     // 187
    return methodOptions;                                                                         // 189
};                                                                                                // 190
                                                                                                  //
PermissionsMixin.LoggedIn = [{                                                                    // 192
    roles: true,                                                                                  // 193
    group: true                                                                                   // 194
}];                                                                                               // 192
////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/didericis:permissions-mixin/permissions-mixin.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['didericis:permissions-mixin'] = {}, {
  PermissionsMixin: PermissionsMixin
});

})();

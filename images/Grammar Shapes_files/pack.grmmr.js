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
var Mongo = Package.mongo.Mongo;
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

/* Package-scope variables */
var PackGrmmrCards;

var require = meteorInstall({"node_modules":{"meteor":{"pack.grmmr":{"pack.grmmr.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/pack.grmmr/pack.grmmr.js                                                              //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
PackGrmmrCards = new Mongo.Collection(null);                                                      // 1
                                                                                                  //
var PackGrmmrCardsCollection = function () {                                                      // 4
    return {                                                                                      // 5
        "cards": [{                                                                               // 6
            "card": {                                                                             // 7
                "category": "article",                                                            // 8
                "reminder": "(a/an) dog",                                                         // 9
                "shapes": [{                                                                      // 10
                    "type": "article",                                                            // 11
                    "name": "article-a",                                                          // 12
                    "syntax": {                                                                   // 13
                        "choice": "true first"                                                    // 14
                    }                                                                             // 13
                }, {                                                                              // 10
                    "type": "article",                                                            // 17
                    "name": "article-an",                                                         // 18
                    "syntax": {                                                                   // 19
                        "choice": "true last"                                                     // 20
                    }                                                                             // 19
                }, {                                                                              // 16
                    "type": "noun",                                                               // 23
                    "name": "noun-thing"                                                          // 24
                }]                                                                                // 22
            }                                                                                     // 7
        }, {                                                                                      // 6
            "card": {                                                                             // 28
                "category": "article",                                                            // 29
                "reminder": "some/the/three dogs",                                                // 30
                "shapes": [{                                                                      // 31
                    "type": "article",                                                            // 32
                    "name": "article-plural"                                                      // 33
                }, {                                                                              // 31
                    "type": "noun",                                                               // 35
                    "name": "noun-plural"                                                         // 36
                }]                                                                                // 34
            }                                                                                     // 28
        }, {                                                                                      // 27
            "card": {                                                                             // 40
                "category": "article",                                                            // 41
                "reminder": "the dogs",                                                           // 42
                "shapes": [{                                                                      // 43
                    "type": "article",                                                            // 44
                    "name": "article-the"                                                         // 45
                }, {                                                                              // 43
                    "type": "noun",                                                               // 47
                    "name": "noun-thing-plural"                                                   // 48
                }]                                                                                // 46
            }                                                                                     // 40
        }, {                                                                                      // 39
            "card": {                                                                             // 52
                "category": "article",                                                            // 53
                "reminder": "Dogs",                                                               // 54
                "shapes": [{                                                                      // 55
                    "type": "noun",                                                               // 56
                    "name": "noun-thing-plural"                                                   // 57
                }]                                                                                // 55
            }                                                                                     // 52
        }, {                                                                                      // 51
            "card": {                                                                             // 61
                "category": "article",                                                            // 62
                "shapes": [{                                                                      // 63
                    "type": "article",                                                            // 64
                    "name": "article-the"                                                         // 65
                }, {                                                                              // 63
                    "type": "noun",                                                               // 67
                    "name": "noun-thing"                                                          // 68
                }]                                                                                // 66
            }                                                                                     // 61
        }, {                                                                                      // 60
            "card": {                                                                             // 72
                "category": "article",                                                            // 73
                "shapes": [{                                                                      // 74
                    "type": "article",                                                            // 75
                    "name": "article-a"                                                           // 76
                }, {                                                                              // 74
                    "type": "noun",                                                               // 78
                    "name": "noun-thing"                                                          // 79
                }]                                                                                // 77
            }                                                                                     // 72
        }, {                                                                                      // 71
            "card": {                                                                             // 83
                "category": "article",                                                            // 84
                "shapes": [{                                                                      // 85
                    "type": "article",                                                            // 86
                    "name": "article"                                                             // 87
                }, {                                                                              // 85
                    "type": "noun",                                                               // 89
                    "name": "noun"                                                                // 90
                }]                                                                                // 88
            }                                                                                     // 83
        }, {                                                                                      // 82
            "card": {                                                                             // 94
                "category": "adjective",                                                          // 95
                "reminder": "superlatives",                                                       // 96
                "shapes": [{                                                                      // 97
                    "type": "adjective",                                                          // 98
                    "name": "adjective-superlative"                                               // 99
                }]                                                                                // 97
            }                                                                                     // 94
        }, {                                                                                      // 93
            "card": {                                                                             // 103
                "category": "adjective",                                                          // 104
                "reminder": "royal order of adjectives",                                          // 105
                "shapes": [{                                                                      // 106
                    "type": "adjective",                                                          // 107
                    "name": "adjective-quantity"                                                  // 108
                }, {                                                                              // 106
                    "type": "adjective",                                                          // 110
                    "name": "adjective-opinion"                                                   // 111
                }, {                                                                              // 109
                    "type": "adjective",                                                          // 113
                    "name": "adjective-size"                                                      // 114
                }, {                                                                              // 112
                    "type": "adjective",                                                          // 116
                    "name": "adjective-shape"                                                     // 117
                }, {                                                                              // 115
                    "type": "adjective",                                                          // 119
                    "name": "adjective-age"                                                       // 120
                }, {                                                                              // 118
                    "type": "adjective",                                                          // 122
                    "name": "adjective-color"                                                     // 123
                }, {                                                                              // 121
                    "type": "adjective",                                                          // 125
                    "name": "adjective-origin"                                                    // 126
                }, {                                                                              // 124
                    "type": "adjective",                                                          // 128
                    "name": "adjective-material"                                                  // 129
                }, {                                                                              // 127
                    "type": "adjective",                                                          // 131
                    "name": "adjective-qualifier"                                                 // 132
                }]                                                                                // 130
            }                                                                                     // 103
        }, {                                                                                      // 102
            "card": {                                                                             // 136
                "category": "adjective",                                                          // 137
                "reminder": "quantity",                                                           // 138
                "shapes": [{                                                                      // 139
                    "type": "adjective",                                                          // 140
                    "name": "adjective-quantity"                                                  // 141
                }]                                                                                // 139
            }                                                                                     // 136
        }, {                                                                                      // 135
            "card": {                                                                             // 145
                "category": "adjective",                                                          // 146
                "reminder": "opinion",                                                            // 147
                "shapes": [{                                                                      // 148
                    "type": "adjective",                                                          // 149
                    "name": "adjective-opinion"                                                   // 150
                }]                                                                                // 148
            }                                                                                     // 145
        }, {                                                                                      // 144
            "card": {                                                                             // 154
                "category": "adjective",                                                          // 155
                "reminder": "size",                                                               // 156
                "shapes": [{                                                                      // 157
                    "type": "adjective",                                                          // 158
                    "name": "adjective-size"                                                      // 159
                }]                                                                                // 157
            }                                                                                     // 154
        }, {                                                                                      // 153
            "card": {                                                                             // 163
                "category": "adjective",                                                          // 164
                "reminder": "shape",                                                              // 165
                "shapes": [{                                                                      // 166
                    "type": "adjective",                                                          // 167
                    "name": "adjective-shape"                                                     // 168
                }]                                                                                // 166
            }                                                                                     // 163
        }, {                                                                                      // 162
            "card": {                                                                             // 172
                "category": "adjective",                                                          // 173
                "reminder": "age",                                                                // 174
                "shapes": [{                                                                      // 175
                    "type": "adjective",                                                          // 176
                    "name": "adjective-age"                                                       // 177
                }]                                                                                // 175
            }                                                                                     // 172
        }, {                                                                                      // 171
            "card": {                                                                             // 181
                "category": "adjective",                                                          // 182
                "reminder": "color",                                                              // 183
                "shapes": [{                                                                      // 184
                    "type": "adjective",                                                          // 185
                    "name": "adjective-color"                                                     // 186
                }]                                                                                // 184
            }                                                                                     // 181
        }, {                                                                                      // 180
            "card": {                                                                             // 190
                "category": "adjective",                                                          // 191
                "reminder": "origin",                                                             // 192
                "shapes": [{                                                                      // 193
                    "type": "adjective",                                                          // 194
                    "name": "adjective-origin"                                                    // 195
                }]                                                                                // 193
            }                                                                                     // 190
        }, {                                                                                      // 189
            "card": {                                                                             // 199
                "category": "adjective",                                                          // 200
                "reminder": "material",                                                           // 201
                "shapes": [{                                                                      // 202
                    "type": "adjective",                                                          // 203
                    "name": "adjective-material"                                                  // 204
                }]                                                                                // 202
            }                                                                                     // 199
        }, {                                                                                      // 198
            "card": {                                                                             // 208
                "category": "adjective",                                                          // 209
                "reminder": "qualifier",                                                          // 210
                "shapes": [{                                                                      // 211
                    "type": "adjective",                                                          // 212
                    "name": "adjective-qualifier"                                                 // 213
                }]                                                                                // 211
            }                                                                                     // 208
        }, {                                                                                      // 207
            "card": {                                                                             // 217
                "category": "adjective",                                                          // 218
                "reminder": "adj phrase",                                                         // 219
                "shapes": [{                                                                      // 220
                    "type": "article",                                                            // 221
                    "name": "article-a",                                                          // 222
                    "syntax": {                                                                   // 223
                        "choice": "true first"                                                    // 224
                    }                                                                             // 223
                }, {                                                                              // 220
                    "type": "article",                                                            // 227
                    "name": "article-the",                                                        // 228
                    "syntax": {                                                                   // 229
                        "choice": "true last"                                                     // 230
                    }                                                                             // 229
                }, {                                                                              // 226
                    "type": "adjective",                                                          // 233
                    "name": "adjective",                                                          // 234
                    "syntax": {                                                                   // 235
                        "optional": true                                                          // 236
                    }                                                                             // 235
                }, {                                                                              // 232
                    "type": "noun",                                                               // 239
                    "name": "noun"                                                                // 240
                }]                                                                                // 238
            }                                                                                     // 217
        }, {                                                                                      // 216
            "card": {                                                                             // 244
                "category": "adjective",                                                          // 245
                "reminder": "adj basic phrase",                                                   // 246
                "shapes": [{                                                                      // 247
                    "type": "article",                                                            // 248
                    "name": "article"                                                             // 249
                }, {                                                                              // 247
                    "type": "adjective",                                                          // 251
                    "name": "adjective"                                                           // 252
                }, {                                                                              // 250
                    "type": "noun",                                                               // 254
                    "name": "noun"                                                                // 255
                }]                                                                                // 253
            }                                                                                     // 244
        }, {                                                                                      // 243
            "card": {                                                                             // 259
                "category": "preposition",                                                        // 260
                "shapes": [{                                                                      // 261
                    "type": "preposition",                                                        // 261
                    "name": "preposition"                                                         // 261
                }, {                                                                              // 261
                    "type": "article",                                                            // 262
                    "name": "article",                                                            // 263
                    "syntax": {                                                                   // 264
                        "choice": "true first"                                                    // 265
                    }                                                                             // 264
                }, {                                                                              // 261
                    "type": "pronoun",                                                            // 268
                    "name": "pronoun-possessive",                                                 // 269
                    "syntax": {                                                                   // 270
                        "choice": true                                                            // 271
                    }                                                                             // 270
                }, {                                                                              // 267
                    "type": "noun",                                                               // 274
                    "name": "noun-poss-name",                                                     // 275
                    "syntax": {                                                                   // 276
                        "choice": true                                                            // 277
                    }                                                                             // 276
                }, {                                                                              // 273
                    "type": "article",                                                            // 280
                    "name": "article",                                                            // 281
                    "syntax": {                                                                   // 282
                        "between": "right",                                                       // 283
                        "choice": true                                                            // 284
                    }                                                                             // 282
                }, {                                                                              // 279
                    "type": "noun",                                                               // 287
                    "name": "noun-poss-thing",                                                    // 288
                    "syntax": {                                                                   // 289
                        "choice": true                                                            // 290
                    }                                                                             // 289
                }, {                                                                              // 286
                    "type": "pronoun",                                                            // 293
                    "name": "pronoun-possessive",                                                 // 294
                    "syntax": {                                                                   // 295
                        "choice": true,                                                           // 296
                        "between": "right"                                                        // 297
                    }                                                                             // 295
                }, {                                                                              // 292
                    "type": "noun",                                                               // 300
                    "name": "noun-poss-thing",                                                    // 301
                    "syntax": {                                                                   // 302
                        "choice": "true last"                                                     // 303
                    }                                                                             // 302
                }, {                                                                              // 299
                    "type": "adjective",                                                          // 306
                    "name": "adjective",                                                          // 307
                    "syntax": {                                                                   // 308
                        "optional": true                                                          // 309
                    }                                                                             // 308
                }, {                                                                              // 305
                    "type": "noun",                                                               // 312
                    "name": "noun"                                                                // 312
                }]                                                                                // 312
            }                                                                                     // 259
        }, {                                                                                      // 258
            "card": {                                                                             // 316
                "category": "preposition",                                                        // 317
                "reminder": "to library/her/Sam/flour",                                           // 318
                "shapes": [{                                                                      // 319
                    "type": "preposition",                                                        // 320
                    "name": "preposition"                                                         // 320
                }, {                                                                              // 320
                    "type": "noun",                                                               // 320
                    "name": "noun-place",                                                         // 320
                    "syntax": {                                                                   // 320
                        "choice": "true first"                                                    // 320
                    }                                                                             // 320
                }, {                                                                              // 320
                    "type": "pronoun",                                                            // 321
                    "name": "pronoun-object",                                                     // 321
                    "syntax": {                                                                   // 321
                        "choice": true                                                            // 321
                    }                                                                             // 321
                }, {                                                                              // 321
                    "type": "noun",                                                               // 322
                    "name": "noun-name",                                                          // 322
                    "syntax": {                                                                   // 322
                        "choice": true                                                            // 322
                    }                                                                             // 322
                }, {                                                                              // 322
                    "type": "noun",                                                               // 323
                    "name": "noun-thing",                                                         // 323
                    "syntax": {                                                                   // 323
                        "choice": "true last"                                                     // 323
                    }                                                                             // 323
                }]                                                                                // 323
            }                                                                                     // 316
        }, {                                                                                      // 315
            "card": {                                                                             // 327
                "category": "preposition",                                                        // 328
                "shapes": [{                                                                      // 329
                    "type": "article",                                                            // 329
                    "name": "article"                                                             // 329
                }, {                                                                              // 329
                    "type": "noun",                                                               // 330
                    "name": "noun"                                                                // 330
                }, {                                                                              // 330
                    "type": "preposition",                                                        // 330
                    "name": "preposition"                                                         // 330
                }, {                                                                              // 330
                    "type": "noun",                                                               // 331
                    "name": "noun"                                                                // 331
                }]                                                                                // 331
            }                                                                                     // 327
        }, {                                                                                      // 326
            "card": {                                                                             // 335
                "category": "preposition",                                                        // 336
                "shapes": [{                                                                      // 337
                    "type": "preposition",                                                        // 337
                    "name": "preposition"                                                         // 337
                }, {                                                                              // 337
                    "type": "article",                                                            // 338
                    "name": "article"                                                             // 338
                }, {                                                                              // 338
                    "type": "adjective",                                                          // 338
                    "name": "adjective"                                                           // 338
                }, {                                                                              // 338
                    "type": "noun",                                                               // 339
                    "name": "noun"                                                                // 339
                }]                                                                                // 339
            }                                                                                     // 335
        }, {                                                                                      // 334
            "card": {                                                                             // 343
                "category": "preposition",                                                        // 344
                "shapes": [{                                                                      // 345
                    "type": "preposition",                                                        // 345
                    "name": "preposition"                                                         // 345
                }, {                                                                              // 345
                    "type": "article",                                                            // 346
                    "name": "article"                                                             // 346
                }, {                                                                              // 346
                    "type": "noun",                                                               // 346
                    "name": "noun"                                                                // 346
                }]                                                                                // 346
            }                                                                                     // 343
        }, {                                                                                      // 342
            "card": {                                                                             // 350
                "category": "preposition",                                                        // 351
                "shapes": [{                                                                      // 352
                    "type": "preposition",                                                        // 352
                    "name": "preposition"                                                         // 352
                }, {                                                                              // 352
                    "type": "pronoun",                                                            // 353
                    "name": "pronoun"                                                             // 353
                }]                                                                                // 353
            }                                                                                     // 350
        }, {                                                                                      // 349
            "card": {                                                                             // 357
                "category": "preposition",                                                        // 358
                "shapes": [{                                                                      // 359
                    "type": "preposition",                                                        // 359
                    "name": "preposition"                                                         // 359
                }, {                                                                              // 359
                    "type": "noun",                                                               // 360
                    "name": "noun"                                                                // 360
                }]                                                                                // 360
            }                                                                                     // 357
        }, {                                                                                      // 356
            "card": {                                                                             // 364
                "category": "preposition",                                                        // 365
                "reminder": "where",                                                              // 366
                "shapes": [{                                                                      // 367
                    "type": "preposition",                                                        // 368
                    "name": "preposition-where"                                                   // 368
                }]                                                                                // 368
            }                                                                                     // 364
        }, {                                                                                      // 363
            "card": {                                                                             // 372
                "category": "preposition",                                                        // 373
                "reminder": "when",                                                               // 374
                "shapes": [{                                                                      // 375
                    "type": "preposition",                                                        // 376
                    "name": "preposition-when"                                                    // 376
                }]                                                                                // 376
            }                                                                                     // 372
        }, {                                                                                      // 371
            "card": {                                                                             // 380
                "category": "preposition",                                                        // 381
                "reminder": "who",                                                                // 382
                "shapes": [{                                                                      // 383
                    "type": "preposition",                                                        // 384
                    "name": "preposition-who"                                                     // 384
                }]                                                                                // 384
            }                                                                                     // 380
        }, {                                                                                      // 379
            "card": {                                                                             // 388
                "category": "preposition",                                                        // 389
                "reminder": "what",                                                               // 390
                "shapes": [{                                                                      // 391
                    "type": "preposition",                                                        // 392
                    "name": "preposition-what"                                                    // 392
                }]                                                                                // 392
            }                                                                                     // 388
        }, {                                                                                      // 387
            "card": {                                                                             // 396
                "category": "verb-advanced",                                                      // 397
                "reminder": "can",                                                                // 398
                "shapes": [{                                                                      // 399
                    "type": "verb",                                                               // 400
                    "name": "verb-can"                                                            // 401
                }]                                                                                // 399
            }                                                                                     // 396
        }, {                                                                                      // 395
            "card": {                                                                             // 405
                "category": "verb-advanced",                                                      // 406
                "reminder": "should",                                                             // 407
                "shapes": [{                                                                      // 408
                    "type": "verb",                                                               // 409
                    "name": "verb-should"                                                         // 410
                }]                                                                                // 408
            }                                                                                     // 405
        }, {                                                                                      // 404
            "card": {                                                                             // 414
                "category": "verb-advanced",                                                      // 415
                "reminder": "would",                                                              // 416
                "shapes": [{                                                                      // 417
                    "type": "verb",                                                               // 418
                    "name": "verb-would"                                                          // 419
                }]                                                                                // 417
            }                                                                                     // 414
        }, {                                                                                      // 413
            "card": {                                                                             // 423
                "category": "verb-advanced",                                                      // 424
                "reminder": "could",                                                              // 425
                "shapes": [{                                                                      // 426
                    "type": "verb",                                                               // 427
                    "name": "verb-could"                                                          // 428
                }]                                                                                // 426
            }                                                                                     // 423
        }, {                                                                                      // 422
            "card": {                                                                             // 432
                "category": "verb-advanced",                                                      // 433
                "reminder": "might",                                                              // 434
                "shapes": [{                                                                      // 435
                    "type": "verb",                                                               // 436
                    "name": "verb-might"                                                          // 437
                }]                                                                                // 435
            }                                                                                     // 432
        }, {                                                                                      // 431
            "card": {                                                                             // 441
                "category": "verb-advanced",                                                      // 442
                "reminder": "must",                                                               // 443
                "shapes": [{                                                                      // 444
                    "type": "verb",                                                               // 445
                    "name": "verb-must"                                                           // 446
                }]                                                                                // 444
            }                                                                                     // 441
        }, {                                                                                      // 440
            "card": {                                                                             // 450
                "category": "verb-advanced",                                                      // 451
                "reminder": "being",                                                              // 452
                "shapes": [{                                                                      // 453
                    "type": "verb",                                                               // 454
                    "name": "verb-being"                                                          // 455
                }]                                                                                // 453
            }                                                                                     // 450
        }, {                                                                                      // 449
            "card": {                                                                             // 459
                "category": "verb-advanced",                                                      // 460
                "reminder": "shall",                                                              // 461
                "shapes": [{                                                                      // 462
                    "type": "verb",                                                               // 463
                    "name": "verb-shall"                                                          // 464
                }]                                                                                // 462
            }                                                                                     // 459
        }, {                                                                                      // 458
            "card": {                                                                             // 468
                "category": "verb-advanced",                                                      // 469
                "reminder": "has/have/had been running",                                          // 470
                "shapes": [{                                                                      // 471
                    "type": "verb",                                                               // 472
                    "name": "verb-have-base"                                                      // 473
                }, {                                                                              // 471
                    "type": "verb",                                                               // 475
                    "name": "verb-been"                                                           // 476
                }, {                                                                              // 474
                    "type": "verb",                                                               // 478
                    "name": "verb-ing"                                                            // 479
                }]                                                                                // 477
            }                                                                                     // 468
        }, {                                                                                      // 467
            "card": {                                                                             // 483
                "category": "verb-advanced",                                                      // 484
                "reminder": "has/have/had been running",                                          // 485
                "shapes": [{                                                                      // 486
                    "type": "verb",                                                               // 487
                    "name": "verb-have-base"                                                      // 488
                }, {                                                                              // 486
                    "type": "verb",                                                               // 490
                    "name": "verb-been"                                                           // 491
                }, {                                                                              // 489
                    "type": "verb",                                                               // 493
                    "name": "verb-action",                                                        // 494
                    "syntax": {                                                                   // 495
                        "time": "past"                                                            // 496
                    }                                                                             // 495
                }]                                                                                // 492
            }                                                                                     // 483
        }, {                                                                                      // 482
            "card": {                                                                             // 501
                "category": "verb-advanced",                                                      // 502
                "reminder": "perfect",                                                            // 503
                "shapes": [{                                                                      // 504
                    "type": "verb",                                                               // 505
                    "name": "verb-have-base"                                                      // 506
                }, {                                                                              // 504
                    "type": "verb",                                                               // 508
                    "name": "verb-action",                                                        // 509
                    "syntax": {                                                                   // 510
                        "time": "past"                                                            // 511
                    }                                                                             // 510
                }]                                                                                // 507
            }                                                                                     // 501
        }, {                                                                                      // 500
            "card": {                                                                             // 516
                "category": "verb-advanced",                                                      // 517
                "shapes": [{                                                                      // 518
                    "type": "verb",                                                               // 519
                    "name": "verb-do-base"                                                        // 520
                }, {                                                                              // 518
                    "type": "negator",                                                            // 522
                    "name": "verb-not"                                                            // 523
                }, {                                                                              // 521
                    "type": "verb",                                                               // 525
                    "name": "verb"                                                                // 526
                }]                                                                                // 524
            }                                                                                     // 516
        }, {                                                                                      // 515
            "card": {                                                                             // 530
                "category": "verb-advanced",                                                      // 531
                "reminder": "did not have",                                                       // 532
                "shapes": [{                                                                      // 533
                    "type": "verb",                                                               // 534
                    "name": "verb-do-base"                                                        // 535
                }, {                                                                              // 533
                    "type": "negator",                                                            // 537
                    "name": "verb-not"                                                            // 538
                }, {                                                                              // 536
                    "type": "verb",                                                               // 540
                    "name": "verb-have-base"                                                      // 541
                }]                                                                                // 539
            }                                                                                     // 530
        }, {                                                                                      // 529
            "card": {                                                                             // 545
                "reminder": "will have",                                                          // 546
                "category": "verb-advanced",                                                      // 547
                "shapes": [{                                                                      // 548
                    "type": "verb",                                                               // 549
                    "name": "verb-will-have"                                                      // 550
                }]                                                                                // 548
            }                                                                                     // 545
        }, {                                                                                      // 544
            "card": {                                                                             // 554
                "category": "verb-advanced",                                                      // 555
                "reminder": "has",                                                                // 556
                "shapes": [{                                                                      // 557
                    "type": "verb",                                                               // 558
                    "name": "verb-has"                                                            // 559
                }]                                                                                // 557
            }                                                                                     // 554
        }, {                                                                                      // 553
            "card": {                                                                             // 563
                "category": "verb-advanced",                                                      // 564
                "reminder": "have",                                                               // 565
                "shapes": [{                                                                      // 566
                    "type": "verb",                                                               // 567
                    "name": "verb-have"                                                           // 568
                }]                                                                                // 566
            }                                                                                     // 563
        }, {                                                                                      // 562
            "card": {                                                                             // 572
                "category": "verb-advanced",                                                      // 573
                "reminder": "had",                                                                // 574
                "shapes": [{                                                                      // 575
                    "type": "verb",                                                               // 576
                    "name": "verb-had"                                                            // 577
                }]                                                                                // 575
            }                                                                                     // 572
        }, {                                                                                      // 571
            "card": {                                                                             // 581
                "category": "verb-advanced",                                                      // 582
                "reminder": "does",                                                               // 583
                "shapes": [{                                                                      // 584
                    "type": "verb",                                                               // 585
                    "name": "verb-does"                                                           // 586
                }]                                                                                // 584
            }                                                                                     // 581
        }, {                                                                                      // 580
            "card": {                                                                             // 590
                "category": "verb-advanced",                                                      // 591
                "reminder": "do",                                                                 // 592
                "shapes": [{                                                                      // 593
                    "type": "verb",                                                               // 594
                    "name": "verb-do"                                                             // 595
                }]                                                                                // 593
            }                                                                                     // 590
        }, {                                                                                      // 589
            "card": {                                                                             // 599
                "category": "verb-advanced",                                                      // 600
                "reminder": "did",                                                                // 601
                "shapes": [{                                                                      // 602
                    "type": "verb",                                                               // 603
                    "name": "verb-did"                                                            // 604
                }]                                                                                // 602
            }                                                                                     // 599
        }, {                                                                                      // 598
            "card": {                                                                             // 608
                "category": "verb",                                                               // 609
                "reminder": "negator",                                                            // 610
                "shapes": [{                                                                      // 611
                    "type": "verb",                                                               // 612
                    "name": "verb-not"                                                            // 613
                }]                                                                                // 611
            }                                                                                     // 608
        }, {                                                                                      // 607
            "card": {                                                                             // 617
                "category": "verb",                                                               // 618
                "reminder": "passive voice",                                                      // 619
                "shapes": [{                                                                      // 620
                    "type": "verb",                                                               // 621
                    "name": "verb"                                                                // 622
                }, {                                                                              // 620
                    "type": "verb",                                                               // 624
                    "name": "verb-action",                                                        // 625
                    "syntax": {                                                                   // 626
                        "time": "past"                                                            // 627
                    }                                                                             // 626
                }]                                                                                // 623
            }                                                                                     // 617
        }, {                                                                                      // 616
            "card": {                                                                             // 632
                "category": "verb",                                                               // 633
                "reminder": "continuous",                                                         // 634
                "shapes": [{                                                                      // 635
                    "type": "verb",                                                               // 636
                    "name": "verb"                                                                // 637
                }, {                                                                              // 635
                    "type": "verb",                                                               // 639
                    "name": "verb-ing"                                                            // 640
                }]                                                                                // 638
            }                                                                                     // 632
        }, {                                                                                      // 631
            "card": {                                                                             // 644
                "category": "verb",                                                               // 645
                "reminder": "future",                                                             // 646
                "shapes": [{                                                                      // 647
                    "type": "verb",                                                               // 648
                    "name": "verb-action",                                                        // 649
                    "syntax": {                                                                   // 650
                        "time": "future"                                                          // 651
                    }                                                                             // 650
                }]                                                                                // 647
            }                                                                                     // 644
        }, {                                                                                      // 643
            "card": {                                                                             // 656
                "category": "verb",                                                               // 657
                "reminder": "present",                                                            // 658
                "shapes": [{                                                                      // 659
                    "type": "verb",                                                               // 660
                    "name": "verb-action"                                                         // 661
                }]                                                                                // 659
            }                                                                                     // 656
        }, {                                                                                      // 655
            "card": {                                                                             // 665
                "category": "verb",                                                               // 666
                "reminder": "past",                                                               // 667
                "shapes": [{                                                                      // 668
                    "type": "verb",                                                               // 669
                    "name": "verb-action",                                                        // 670
                    "syntax": {                                                                   // 671
                        "time": "past"                                                            // 672
                    }                                                                             // 671
                }]                                                                                // 668
            }                                                                                     // 665
        }, {                                                                                      // 664
            "card": {                                                                             // 677
                "category": "verb",                                                               // 678
                "reminder": "run(s)",                                                             // 679
                "shapes": [{                                                                      // 680
                    "type": "verb",                                                               // 681
                    "name": "verb-s"                                                              // 682
                }]                                                                                // 680
            }                                                                                     // 677
        }, {                                                                                      // 676
            "card": {                                                                             // 686
                "category": "verb",                                                               // 687
                "reminder": "run(ing)",                                                           // 688
                "shapes": [{                                                                      // 689
                    "type": "verb",                                                               // 690
                    "name": "verb-ing"                                                            // 691
                }]                                                                                // 689
            }                                                                                     // 686
        }, {                                                                                      // 685
            "card": {                                                                             // 695
                "category": "verb",                                                               // 696
                "reminder": "will be",                                                            // 697
                "shapes": [{                                                                      // 698
                    "type": "verb",                                                               // 699
                    "name": "verb-plural",                                                        // 700
                    "syntax": {                                                                   // 701
                        "time": "future"                                                          // 702
                    }                                                                             // 701
                }]                                                                                // 698
            }                                                                                     // 695
        }, {                                                                                      // 694
            "card": {                                                                             // 707
                "category": "verb",                                                               // 708
                "reminder": "are",                                                                // 709
                "shapes": [{                                                                      // 710
                    "type": "verb",                                                               // 711
                    "name": "verb-plural"                                                         // 712
                }]                                                                                // 710
            }                                                                                     // 707
        }, {                                                                                      // 706
            "card": {                                                                             // 716
                "category": "verb",                                                               // 717
                "reminder": "were",                                                               // 718
                "shapes": [{                                                                      // 719
                    "type": "verb",                                                               // 720
                    "name": "verb-plural",                                                        // 721
                    "syntax": {                                                                   // 722
                        "time": "past"                                                            // 723
                    }                                                                             // 722
                }]                                                                                // 719
            }                                                                                     // 716
        }, {                                                                                      // 715
            "card": {                                                                             // 728
                "category": "verb",                                                               // 729
                "reminder": "will be",                                                            // 730
                "shapes": [{                                                                      // 731
                    "type": "verb",                                                               // 732
                    "name": "verb-single",                                                        // 733
                    "syntax": {                                                                   // 734
                        "time": "future"                                                          // 735
                    }                                                                             // 734
                }]                                                                                // 731
            }                                                                                     // 728
        }, {                                                                                      // 727
            "card": {                                                                             // 740
                "category": "verb",                                                               // 741
                "reminder": "is",                                                                 // 742
                "shapes": [{                                                                      // 743
                    "type": "verb",                                                               // 744
                    "name": "verb-single"                                                         // 745
                }]                                                                                // 743
            }                                                                                     // 740
        }, {                                                                                      // 739
            "card": {                                                                             // 749
                "category": "verb",                                                               // 750
                "reminder": "was",                                                                // 751
                "shapes": [{                                                                      // 752
                    "type": "verb",                                                               // 753
                    "name": "verb-single",                                                        // 754
                    "syntax": {                                                                   // 755
                        "time": "past"                                                            // 756
                    }                                                                             // 755
                }]                                                                                // 752
            }                                                                                     // 749
        }, {                                                                                      // 748
            "card": {                                                                             // 761
                "category": "pronoun",                                                            // 762
                "shapes": [{                                                                      // 763
                    "type": "pronoun",                                                            // 764
                    "name": "pronoun-possessive"                                                  // 765
                }, {                                                                              // 763
                    "type": "noun",                                                               // 767
                    "name": "noun"                                                                // 768
                }]                                                                                // 766
            }                                                                                     // 761
        }, {                                                                                      // 760
            "card": {                                                                             // 772
                "category": "pronoun",                                                            // 773
                "shapes": [{                                                                      // 774
                    "type": "pronoun",                                                            // 775
                    "name": "pronoun-possessive"                                                  // 776
                }]                                                                                // 774
            }                                                                                     // 772
        }, {                                                                                      // 771
            "card": {                                                                             // 780
                "category": "pronoun",                                                            // 781
                "shapes": [{                                                                      // 782
                    "type": "pronoun",                                                            // 783
                    "name": "pronoun-object-possessive"                                           // 784
                }]                                                                                // 782
            }                                                                                     // 780
        }, {                                                                                      // 779
            "card": {                                                                             // 788
                "category": "pronoun",                                                            // 789
                "shapes": [{                                                                      // 790
                    "type": "pronoun",                                                            // 791
                    "name": "pronoun-object-plural"                                               // 792
                }]                                                                                // 790
            }                                                                                     // 788
        }, {                                                                                      // 787
            "card": {                                                                             // 796
                "category": "pronoun",                                                            // 797
                "shapes": [{                                                                      // 798
                    "type": "pronoun",                                                            // 799
                    "name": "pronoun-object"                                                      // 800
                }]                                                                                // 798
            }                                                                                     // 796
        }, {                                                                                      // 795
            "card": {                                                                             // 804
                "category": "pronoun",                                                            // 805
                "shapes": [{                                                                      // 806
                    "type": "pronoun",                                                            // 807
                    "name": "pronoun-subject-plural"                                              // 808
                }]                                                                                // 806
            }                                                                                     // 804
        }, {                                                                                      // 803
            "card": {                                                                             // 812
                "category": "pronoun",                                                            // 813
                "shapes": [{                                                                      // 814
                    "type": "pronoun",                                                            // 815
                    "name": "pronoun-subject"                                                     // 816
                }]                                                                                // 814
            }                                                                                     // 812
        }, {                                                                                      // 811
            "card": {                                                                             // 820
                "category": "noun",                                                               // 821
                "shapes": [{                                                                      // 822
                    "type": "article",                                                            // 823
                    "name": "article",                                                            // 824
                    "syntax": {                                                                   // 825
                        "choice": "true first"                                                    // 826
                    }                                                                             // 825
                }, {                                                                              // 822
                    "type": "pronoun",                                                            // 829
                    "name": "pronoun-possessive",                                                 // 830
                    "syntax": {                                                                   // 831
                        "choice": true                                                            // 832
                    }                                                                             // 831
                }, {                                                                              // 828
                    "type": "noun",                                                               // 835
                    "name": "noun-poss-name",                                                     // 836
                    "syntax": {                                                                   // 837
                        "choice": true                                                            // 838
                    }                                                                             // 837
                }, {                                                                              // 834
                    "type": "article",                                                            // 841
                    "name": "article",                                                            // 842
                    "syntax": {                                                                   // 843
                        "between": "right",                                                       // 844
                        "choice": true                                                            // 845
                    }                                                                             // 843
                }, {                                                                              // 840
                    "type": "noun",                                                               // 848
                    "name": "noun-poss-thing",                                                    // 849
                    "syntax": {                                                                   // 850
                        "choice": true                                                            // 851
                    }                                                                             // 850
                }, {                                                                              // 847
                    "type": "pronoun",                                                            // 854
                    "name": "pronoun-possessive",                                                 // 855
                    "syntax": {                                                                   // 856
                        "choice": true,                                                           // 857
                        "between": "right"                                                        // 858
                    }                                                                             // 856
                }, {                                                                              // 853
                    "type": "noun",                                                               // 861
                    "name": "noun-poss-thing",                                                    // 862
                    "syntax": {                                                                   // 863
                        "choice": "true last"                                                     // 864
                    }                                                                             // 863
                }, {                                                                              // 860
                    "type": "noun",                                                               // 867
                    "name": "noun-thing"                                                          // 868
                }]                                                                                // 866
            }                                                                                     // 820
        }, {                                                                                      // 819
            "card": {                                                                             // 872
                category: "noun",                                                                 // 873
                "reminder": "relative",                                                           // 874
                "shapes": [{                                                                      // 875
                    "type": "noun",                                                               // 876
                    "name": "noun-relative"                                                       // 877
                }]                                                                                // 875
            }                                                                                     // 872
        }, {                                                                                      // 871
            "card": {                                                                             // 881
                category: "noun",                                                                 // 882
                "reminder": "gerund - running",                                                   // 883
                "shapes": [{                                                                      // 884
                    "type": "noun",                                                               // 885
                    "name": "noun-ing"                                                            // 886
                }]                                                                                // 884
            }                                                                                     // 881
        }, {                                                                                      // 880
            "card": {                                                                             // 890
                "category": "noun",                                                               // 891
                "reminder": "infinitive - to run",                                                // 892
                "shapes": [{                                                                      // 893
                    "type": "noun",                                                               // 894
                    "name": "noun-to"                                                             // 895
                }]                                                                                // 893
            }                                                                                     // 890
        }, {                                                                                      // 889
            "card": {                                                                             // 899
                "category": "noun",                                                               // 900
                "shapes": [{                                                                      // 901
                    "type": "article",                                                            // 902
                    "name": "article",                                                            // 903
                    "syntax": {                                                                   // 904
                        "between": "right"                                                        // 905
                    }                                                                             // 904
                }, {                                                                              // 901
                    "type": "noun",                                                               // 908
                    "name": "noun-poss-thing",                                                    // 909
                    "syntax": {}                                                                  // 910
                }, {                                                                              // 907
                    "type": "noun",                                                               // 912
                    "name": "noun"                                                                // 913
                }]                                                                                // 911
            }                                                                                     // 899
        }, {                                                                                      // 898
            "card": {                                                                             // 917
                "category": "noun",                                                               // 918
                "shapes": [{                                                                      // 919
                    "type": "pronoun",                                                            // 920
                    "name": "pronoun-possessive"                                                  // 921
                }, {                                                                              // 919
                    "type": "noun",                                                               // 923
                    "name": "noun"                                                                // 924
                }]                                                                                // 922
            }                                                                                     // 917
        }, {                                                                                      // 916
            "card": {                                                                             // 928
                "category": "noun",                                                               // 929
                "shapes": [{                                                                      // 930
                    "type": "noun",                                                               // 931
                    "name": "noun-poss-name"                                                      // 932
                }, {                                                                              // 930
                    "type": "noun",                                                               // 934
                    "name": "noun"                                                                // 935
                }]                                                                                // 933
            }                                                                                     // 928
        }, {                                                                                      // 927
            "card": {                                                                             // 939
                category: "noun",                                                                 // 940
                "shapes": [{                                                                      // 941
                    "type": "noun",                                                               // 942
                    "name": "noun-dummy"                                                          // 943
                }]                                                                                // 941
            }                                                                                     // 939
        }, {                                                                                      // 938
            "card": {                                                                             // 947
                category: "noun",                                                                 // 948
                "shapes": [{                                                                      // 949
                    "type": "noun",                                                               // 950
                    "name": "noun-plural"                                                         // 951
                }]                                                                                // 949
            }                                                                                     // 947
        }, {                                                                                      // 946
            "card": {                                                                             // 955
                "category": "noun",                                                               // 956
                "shapes": [{                                                                      // 957
                    "type": "article",                                                            // 958
                    "name": "article"                                                             // 959
                }, {                                                                              // 957
                    "type": "noun",                                                               // 961
                    "name": "noun-thing"                                                          // 962
                }]                                                                                // 960
            }                                                                                     // 955
        }, {                                                                                      // 954
            "card": {                                                                             // 966
                "category": "noun",                                                               // 967
                "shapes": [{                                                                      // 968
                    "type": "noun",                                                               // 969
                    "name": "noun-name"                                                           // 970
                }]                                                                                // 968
            }                                                                                     // 966
        }, {                                                                                      // 965
            "card": {                                                                             // 974
                "category": "adverb",                                                             // 975
                "reminder": "time",                                                               // 976
                "shapes": [{                                                                      // 977
                    "type": "adverb",                                                             // 978
                    "name": "adverb-time"                                                         // 979
                }]                                                                                // 977
            }                                                                                     // 974
        }, {                                                                                      // 973
            "card": {                                                                             // 983
                "category": "adverb",                                                             // 984
                "reminder": "frequency",                                                          // 985
                "shapes": [{                                                                      // 986
                    "type": "adverb",                                                             // 987
                    "name": "adverb-frequency"                                                    // 988
                }]                                                                                // 986
            }                                                                                     // 983
        }, {                                                                                      // 982
            "card": {                                                                             // 992
                "category": "adverb",                                                             // 993
                "reminder": "degree",                                                             // 994
                "shapes": [{                                                                      // 995
                    "type": "adverb",                                                             // 996
                    "name": "adverb-degree"                                                       // 997
                }]                                                                                // 995
            }                                                                                     // 992
        }, {                                                                                      // 991
            "card": {                                                                             // 1001
                "category": "adverb",                                                             // 1002
                "reminder": "manner",                                                             // 1003
                "shapes": [{                                                                      // 1004
                    "type": "adverb",                                                             // 1005
                    "name": "adverb-manner"                                                       // 1006
                }]                                                                                // 1004
            }                                                                                     // 1001
        }, {                                                                                      // 1000
            "card": {                                                                             // 1010
                "category": "adverb",                                                             // 1011
                "reminder": "place",                                                              // 1012
                "shapes": [{                                                                      // 1013
                    "type": "adverb",                                                             // 1014
                    "name": "adverb-place"                                                        // 1015
                }]                                                                                // 1013
            }                                                                                     // 1010
        }, {                                                                                      // 1009
            "card": {                                                                             // 1019
                "category": "adverb",                                                             // 1020
                "shapes": [{                                                                      // 1021
                    "type": "adverb",                                                             // 1022
                    "name": "adverb-frequency"                                                    // 1023
                }, {                                                                              // 1021
                    "type": "verb",                                                               // 1026
                    "name": "verb-action",                                                        // 1027
                    "syntax": {                                                                   // 1028
                        "time": "past"                                                            // 1029
                    }                                                                             // 1028
                }]                                                                                // 1025
            }                                                                                     // 1019
        }, {                                                                                      // 1018
            "card": {                                                                             // 1034
                "category": "adverb",                                                             // 1035
                "shapes": [{                                                                      // 1036
                    "type": "verb",                                                               // 1037
                    "name": "verb-action",                                                        // 1038
                    "syntax": {                                                                   // 1039
                        "time": "past"                                                            // 1040
                    }                                                                             // 1039
                }, {                                                                              // 1036
                    "type": "adverb",                                                             // 1043
                    "name": "adverb-frequency"                                                    // 1044
                }]                                                                                // 1042
            }                                                                                     // 1034
        }, {                                                                                      // 1033
            "card": {                                                                             // 1049
                "category": "adverb",                                                             // 1050
                "shapes": [{                                                                      // 1051
                    "type": "adverb",                                                             // 1052
                    "name": "adverb-degree"                                                       // 1053
                }, {                                                                              // 1051
                    "type": "adjective",                                                          // 1055
                    "name": "adjective"                                                           // 1056
                }]                                                                                // 1054
            }                                                                                     // 1049
        }, {                                                                                      // 1048
            "card": {                                                                             // 1060
                "category": "adverb",                                                             // 1061
                "shapes": [{                                                                      // 1062
                    "type": "verb",                                                               // 1063
                    "name": "verb-action",                                                        // 1064
                    "syntax": {                                                                   // 1065
                        "time": "past"                                                            // 1066
                    }                                                                             // 1065
                }, {                                                                              // 1062
                    "type": "adverb",                                                             // 1069
                    "name": "adverb-degree"                                                       // 1070
                }, {                                                                              // 1068
                    "type": "adverb",                                                             // 1072
                    "name": "adverb-manner"                                                       // 1073
                }]                                                                                // 1071
            }                                                                                     // 1060
        }, {                                                                                      // 1059
            "card": {                                                                             // 1077
                "category": "adverb",                                                             // 1078
                "shapes": [{                                                                      // 1079
                    "type": "verb",                                                               // 1080
                    "name": "verb-single",                                                        // 1081
                    "syntax": {                                                                   // 1082
                        "time": "past"                                                            // 1083
                    }                                                                             // 1082
                }, {                                                                              // 1079
                    "type": "adverb",                                                             // 1086
                    "name": "adverb-degree"                                                       // 1087
                }]                                                                                // 1085
            }                                                                                     // 1077
        }, {                                                                                      // 1076
            "card": {                                                                             // 1092
                "category": "adverb",                                                             // 1093
                "shapes": [{                                                                      // 1094
                    "type": "adverb",                                                             // 1095
                    "name": "adverb-degree"                                                       // 1096
                }, {                                                                              // 1094
                    "type": "verb",                                                               // 1099
                    "name": "verb-action",                                                        // 1100
                    "syntax": {                                                                   // 1101
                        "time": "past"                                                            // 1102
                    }                                                                             // 1101
                }]                                                                                // 1098
            }                                                                                     // 1092
        }, {                                                                                      // 1091
            "card": {                                                                             // 1107
                "category": "adverb",                                                             // 1108
                "shapes": [{                                                                      // 1109
                    "type": "verb",                                                               // 1110
                    "name": "verb-action",                                                        // 1111
                    "syntax": {                                                                   // 1112
                        "time": "past"                                                            // 1113
                    }                                                                             // 1112
                }, {                                                                              // 1109
                    "type": "noun",                                                               // 1116
                    "name": "noun"                                                                // 1117
                }, {                                                                              // 1115
                    "type": "adverb",                                                             // 1119
                    "name": "adverb-manner"                                                       // 1120
                }]                                                                                // 1118
            }                                                                                     // 1107
        }, {                                                                                      // 1106
            "card": {                                                                             // 1124
                "category": "adverb",                                                             // 1125
                "shapes": [{                                                                      // 1126
                    "type": "verb",                                                               // 1127
                    "name": "verb-action",                                                        // 1128
                    "syntax": {                                                                   // 1129
                        "time": "past"                                                            // 1130
                    }                                                                             // 1129
                }, {                                                                              // 1126
                    "type": "adverb",                                                             // 1133
                    "name": "adverb-manner"                                                       // 1134
                }]                                                                                // 1132
            }                                                                                     // 1124
        }, {                                                                                      // 1123
            "card": {                                                                             // 1138
                "category": "adverb",                                                             // 1139
                "shapes": [{                                                                      // 1140
                    "type": "adverb",                                                             // 1141
                    "name": "adverb-manner"                                                       // 1142
                }, {                                                                              // 1140
                    "type": "verb",                                                               // 1144
                    "name": "verb-action",                                                        // 1145
                    "syntax": {                                                                   // 1146
                        "time": "past"                                                            // 1147
                    }                                                                             // 1146
                }]                                                                                // 1143
            }                                                                                     // 1138
        }, {                                                                                      // 1137
            "card": {                                                                             // 1152
                category: "advanced",                                                             // 1153
                "shapes": [{                                                                      // 1154
                    "type": "qq",                                                                 // 1155
                    "name": "qq-many",                                                            // 1156
                    "syntax": {                                                                   // 1157
                        "choice": "true first"                                                    // 1158
                    }                                                                             // 1157
                }, {                                                                              // 1154
                    "type": "qq",                                                                 // 1161
                    "name": "qq-much",                                                            // 1162
                    "syntax": {                                                                   // 1163
                        "choice": "true last"                                                     // 1164
                    }                                                                             // 1163
                }, {                                                                              // 1160
                    "type": "noun",                                                               // 1167
                    "name": "noun-plural"                                                         // 1168
                }]                                                                                // 1166
            }                                                                                     // 1152
        }, {                                                                                      // 1151
            "card": {                                                                             // 1172
                category: "advanced",                                                             // 1173
                "reminder": "what?",                                                              // 1174
                "shapes": [{                                                                      // 1175
                    "type": "qq",                                                                 // 1176
                    "name": "qq-what"                                                             // 1177
                }]                                                                                // 1175
            }                                                                                     // 1172
        }, {                                                                                      // 1171
            "card": {                                                                             // 1181
                category: "advanced",                                                             // 1182
                "reminder": "when?",                                                              // 1183
                "shapes": [{                                                                      // 1184
                    "type": "qq",                                                                 // 1185
                    "name": "qq-when"                                                             // 1186
                }]                                                                                // 1184
            }                                                                                     // 1181
        }, {                                                                                      // 1180
            "card": {                                                                             // 1190
                category: "advanced",                                                             // 1191
                "reminder": "which?",                                                             // 1192
                "shapes": [{                                                                      // 1193
                    "type": "qq",                                                                 // 1194
                    "name": "qq-which"                                                            // 1195
                }]                                                                                // 1193
            }                                                                                     // 1190
        }, {                                                                                      // 1189
            "card": {                                                                             // 1199
                category: "advanced",                                                             // 1200
                "reminder": "who?",                                                               // 1201
                "shapes": [{                                                                      // 1202
                    "type": "qq",                                                                 // 1203
                    "name": "qq-who"                                                              // 1204
                }]                                                                                // 1202
            }                                                                                     // 1199
        }, {                                                                                      // 1198
            "card": {                                                                             // 1208
                category: "advanced",                                                             // 1209
                "reminder": "where?",                                                             // 1210
                "shapes": [{                                                                      // 1211
                    "type": "qq",                                                                 // 1212
                    "name": "qq-where"                                                            // 1213
                }]                                                                                // 1211
            }                                                                                     // 1208
        }, {                                                                                      // 1207
            "card": {                                                                             // 1217
                category: "advanced",                                                             // 1218
                "reminder": "how many?",                                                          // 1219
                "shapes": [{                                                                      // 1220
                    "type": "qq",                                                                 // 1221
                    "name": "qq-many"                                                             // 1222
                }]                                                                                // 1220
            }                                                                                     // 1217
        }, {                                                                                      // 1216
            "card": {                                                                             // 1226
                category: "advanced",                                                             // 1227
                "reminder": "how much?",                                                          // 1228
                "shapes": [{                                                                      // 1229
                    "type": "qq",                                                                 // 1230
                    "name": "qq-much"                                                             // 1231
                }]                                                                                // 1229
            }                                                                                     // 1226
        }, {                                                                                      // 1225
            "card": {                                                                             // 1235
                category: "advanced",                                                             // 1236
                "reminder": "If...",                                                              // 1237
                "shapes": [{                                                                      // 1238
                    "type": "if",                                                                 // 1239
                    "name": "if-caps"                                                             // 1240
                }]                                                                                // 1238
            }                                                                                     // 1235
        }, {                                                                                      // 1234
            "card": {                                                                             // 1244
                category: "advanced",                                                             // 1245
                "reminder": "...if",                                                              // 1246
                "shapes": [{                                                                      // 1247
                    "type": "if",                                                                 // 1248
                    "name": "if"                                                                  // 1249
                }]                                                                                // 1247
            }                                                                                     // 1244
        }, {                                                                                      // 1243
            "card": {                                                                             // 1253
                category: "advanced",                                                             // 1254
                "reminder": "and/so/but...",                                                      // 1255
                "shapes": [{                                                                      // 1256
                    "type": "conjunction",                                                        // 1257
                    "name": "conjunction"                                                         // 1258
                }]                                                                                // 1256
            }                                                                                     // 1253
        }]                                                                                        // 1252
    };                                                                                            // 5
};                                                                                                // 1263
                                                                                                  //
for (var i = 0; i < PackGrmmrCardsCollection().cards.length; i++) {                               // 1265
    PackGrmmrCards.insert(PackGrmmrCardsCollection().cards[i]);                                   // 1266
}                                                                                                 // 1267
////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.grmmrShape.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/pack.grmmr/template.grmmrShape.js                                                     //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  // 1
Template.__checkName("grmmrShape");                                                               // 2
Template["grmmrShape"] = new Template("Template.grmmrShape", (function() {                        // 3
  var view = this;                                                                                // 4
  return HTML.IMG({                                                                               // 5
    height: "100%",                                                                               // 6
    width: "100%",                                                                                // 7
    type: "image/svg+xml",                                                                        // 8
    src: function() {                                                                             // 9
      return [ "/packages/pack.grmmr/shapes/", Spacebars.mustache(view.lookup("name")), ".svg" ];
    }                                                                                             // 11
  });                                                                                             // 12
}));                                                                                              // 13
                                                                                                  // 14
////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.grmmrCard.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/pack.grmmr/template.grmmrCard.js                                                      //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  // 1
Template.__checkName("grmmrCard");                                                                // 2
Template["grmmrCard"] = new Template("Template.grmmrCard", (function() {                          // 3
  var view = this;                                                                                // 4
  return HTML.DIV({                                                                               // 5
    grmmrcard: ""                                                                                 // 6
  }, "\n        ", Blaze.If(function() {                                                          // 7
    return Spacebars.call(view.lookup("shapes"));                                                 // 8
  }, function() {                                                                                 // 9
    return [ "\n            ", Blaze.Each(function() {                                            // 10
      return Spacebars.call(view.lookup("shapes"));                                               // 11
    }, function() {                                                                               // 12
      return [ "\n                ", HTML.DIV({                                                   // 13
        grmmrshape: "",                                                                           // 14
        time: function() {                                                                        // 15
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "time"));                // 16
        },                                                                                        // 17
        optional: function() {                                                                    // 18
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "optional"));            // 19
        },                                                                                        // 20
        choice: function() {                                                                      // 21
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "choice"));              // 22
        },                                                                                        // 23
        small: function() {                                                                       // 24
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "small"));               // 25
        },                                                                                        // 26
        between: function() {                                                                     // 27
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "between"));             // 28
        },                                                                                        // 29
        type: function() {                                                                        // 30
          return Spacebars.mustache(view.lookup("type"));                                         // 31
        }                                                                                         // 32
      }, Blaze._TemplateWith(function() {                                                         // 33
        return {                                                                                  // 34
          name: Spacebars.call(view.lookup("name"))                                               // 35
        };                                                                                        // 36
      }, function() {                                                                             // 37
        return Spacebars.include(view.lookupTemplate("grmmrShape"));                              // 38
      })), "\n            " ];                                                                    // 39
    }), "\n        " ];                                                                           // 40
  }), "\n        ", Blaze.If(function() {                                                         // 41
    return Spacebars.call(view.lookup("shape"));                                                  // 42
  }, function() {                                                                                 // 43
    return [ "\n            ", Spacebars.With(function() {                                        // 44
      return Spacebars.call(view.lookup("shape"));                                                // 45
    }, function() {                                                                               // 46
      return [ "\n                ", HTML.DIV({                                                   // 47
        grmmrshape: "",                                                                           // 48
        time: function() {                                                                        // 49
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "time"));                // 50
        },                                                                                        // 51
        optional: function() {                                                                    // 52
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "optional"));            // 53
        },                                                                                        // 54
        choice: function() {                                                                      // 55
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "choice"));              // 56
        },                                                                                        // 57
        small: function() {                                                                       // 58
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "small"));               // 59
        },                                                                                        // 60
        between: function() {                                                                     // 61
          return Spacebars.mustache(Spacebars.dot(view.lookup("syntax"), "between"));             // 62
        },                                                                                        // 63
        type: function() {                                                                        // 64
          return Spacebars.mustache(view.lookup("type"));                                         // 65
        }                                                                                         // 66
      }, Blaze._TemplateWith(function() {                                                         // 67
        return {                                                                                  // 68
          name: Spacebars.call(view.lookup("name"))                                               // 69
        };                                                                                        // 70
      }, function() {                                                                             // 71
        return Spacebars.include(view.lookupTemplate("grmmrShape"));                              // 72
      })), "\n            " ];                                                                    // 73
    }), "\n        " ];                                                                           // 74
  }), "\n    ");                                                                                  // 75
}));                                                                                              // 76
                                                                                                  // 77
////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json",".html"]});
require("./node_modules/meteor/pack.grmmr/pack.grmmr.js");
require("./node_modules/meteor/pack.grmmr/template.grmmrShape.js");
require("./node_modules/meteor/pack.grmmr/template.grmmrCard.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['pack.grmmr'] = {}, {
  PackGrmmrCards: PackGrmmrCards
});

})();

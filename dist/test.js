var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v) {
    if (f2(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f2) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f2 ? f2(v) : v;
    } : f2;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
var extendStatics, __assign, __createBinding, __setModuleDefault;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
  }
});

// node_modules/@obsidize/tar-browserify/es5.js
var require_es5 = __commonJS({
  "node_modules/@obsidize/tar-browserify/es5.js"(exports, module2) {
    (() => {
      "use strict";
      var e = { d: (t2, r2) => {
        for (var i2 in r2)
          e.o(r2, i2) && !e.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: r2[i2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { AsyncTarEntryIterator: () => L, Constants: () => i, HeaderFieldDefinitions: () => h, TarEntry: () => U, TarEntryAttributes: () => O, TarEntryIterator: () => M, TarEntryMetadata: () => b, TarHeaderField: () => d, TarHeaderFieldType: () => s, TarHeaderLinkIndicatorType: () => a, TarHeaderMetadata: () => T, TarUtility: () => n, Tarball: () => C, findInAsyncUint8Array: () => o, findNextUstarSectorAsync: () => v, findNextUstarSectorOffset: () => p, getDefaultHeaderValues: () => g, isTarHeaderLinkIndicatorTypeDirectory: () => u, isTarHeaderLinkIndicatorTypeFile: () => f2, sanitizeHeader: () => _, serializeIntegerOctalWithSuffix: () => c });
      const r = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var i, n, a, s;
      function o(e2, t2, a2, s2) {
        return (0, r.__awaiter)(this, void 0, void 0, function* () {
          if (!e2 || !s2)
            return null;
          const r2 = yield e2.byteLength();
          if ((t2 = n.clamp(t2, 0, r2)) >= r2)
            return null;
          const o2 = n.clamp(a2, 1, i.SECTOR_SIZE) * i.SECTOR_SIZE;
          let u2, f3 = false, c2 = t2;
          for (; !f3 && c2 < r2; )
            u2 = yield e2.read(c2, o2), f3 = s2(u2, c2, e2), c2 += o2;
          return f3 ? { source: e2, value: u2, offset: c2 } : null;
        });
      }
      function u(e2) {
        return e2 === a.DIRECTORY;
      }
      function f2(e2) {
        switch (e2) {
          case a.NORMAL_FILE:
          case a.NORMAL_FILE_ALT1:
          case a.NORMAL_FILE_ALT2:
          case a.CONTIGUOUS_FILE:
            return true;
          default:
            return false;
        }
      }
      function c(e2, t2, r2) {
        const { size: i2 } = t2 || { size: 0 }, a2 = Math.max(0, i2 - 1 - r2.length), s2 = n.serializeIntegerOctalToString(e2, a2) + r2;
        return n.encodeString(s2);
      }
      !function(e2) {
        e2.SECTOR_SIZE = 512, e2.OCTAL_RADIX = 8, e2.USTAR_TAG = "ustar", e2.USTAR_INDICATOR_VALUE = `${e2.USTAR_TAG}\0`, e2.USTAR_VERSION_VALUE = "00", e2.HEADER_SIZE = e2.SECTOR_SIZE, e2.FILE_MODE_DEFAULT = 511;
      }(i || (i = {})), function(e2) {
        function t2(e3) {
          return "number" == typeof e3 && !Number.isNaN(e3);
        }
        function r2(e3) {
          return "string" == typeof e3;
        }
        function n2(e3) {
          return r2(e3) && e3.length > 0;
        }
        function a2(e3) {
          return !!(e3 && e3 instanceof Uint8Array);
        }
        function s2(e3) {
          return a2(e3) ? new TextDecoder().decode(e3) : "";
        }
        function o2(e3) {
          return (1 + Math.floor(e3 / i.SECTOR_SIZE)) * i.SECTOR_SIZE;
        }
        function u2(e3) {
          return Math.ceil(e3 / i.SECTOR_SIZE) * i.SECTOR_SIZE;
        }
        function f3(e3) {
          return 1e3 * Math.floor(h2(e3));
        }
        function c2(e3) {
          return Math.floor(h2(e3) / 1e3);
        }
        function l2(e3) {
          return h2(s2(e3).trim(), i.OCTAL_RADIX);
        }
        function d2(e3) {
          const t3 = /^([^\0]*)[\0]*$/.exec(e3);
          return t3 ? t3[1] : e3;
        }
        function h2(e3, r3 = 10, i2 = 0) {
          if (t2(e3))
            return Math.floor(e3);
          const n3 = parseInt(e3, r3);
          return t2(n3) ? n3 : i2;
        }
        e2.isNumber = t2, e2.isString = r2, e2.isPopulatedString = n2, e2.isUint8Array = a2, e2.sizeofUint8Array = function(e3) {
          return a2(e3) ? e3.byteLength : 0;
        }, e2.encodeString = function(e3) {
          return n2(e3) ? new TextEncoder().encode(e3) : new Uint8Array(0);
        }, e2.decodeString = s2, e2.generateChecksum = function(e3) {
          return a2(e3) ? e3.reduce((e4, t3) => e4 + t3, 0) : 0;
        }, e2.clamp = function(e3, t3, r3) {
          return Math.max(t3, Math.min(e3, r3));
        }, e2.advanceSectorOffset = function(e3, t3) {
          return Math.min(t3, o2(e3));
        }, e2.advanceSectorOffsetUnclamped = o2, e2.roundUpSectorOffset = u2, e2.getSectorOffsetDelta = function(e3) {
          return u2(e3) - e3;
        }, e2.parseIntOctal = function(e3) {
          return h2(e3, i.OCTAL_RADIX);
        }, e2.decodeTimestamp = f3, e2.encodeTimestamp = c2, e2.sanitizeTimestamp = function(e3) {
          return f3(c2(e3));
        }, e2.deserializeAsciiPaddedField = function(e3) {
          return d2(s2(e3));
        }, e2.deserializeIntegerOctalTimestamp = function(e3) {
          return f3(l2(e3));
        }, e2.deserializeIntegerOctal = l2, e2.removeTrailingZeros = d2, e2.serializeIntegerOctalToString = function(e3, t3) {
          return h2(e3).toString(i.OCTAL_RADIX).padStart(t3, "0");
        }, e2.parseIntSafe = h2, e2.concatUint8Arrays = function(e3, t3) {
          if (!a2(t3))
            return e3;
          if (!a2(e3))
            return t3;
          const r3 = e3.byteLength, i2 = t3.byteLength, n3 = new Uint8Array(r3 + i2);
          return r3 > 0 && n3.set(e3, 0), i2 > 0 && n3.set(t3, r3), n3;
        };
      }(n || (n = {})), function(e2) {
        e2.UNKNOWN = "UNKNOWN", e2.NORMAL_FILE = "0", e2.NORMAL_FILE_ALT1 = "\0", e2.NORMAL_FILE_ALT2 = "", e2.HARD_LINK = "1", e2.SYMBOLIC_LINK = "2", e2.CHARACTER_SPECIAL = "3", e2.BLOCK_SPECIAL = "4", e2.DIRECTORY = "5", e2.FIFO = "6", e2.CONTIGUOUS_FILE = "7", e2.GLOBAL_EXTENDED_HEADER = "g", e2.LOCAL_EXTENDED_HEADER = "x";
      }(a || (a = {})), function(e2) {
        e2.ASCII = "ASCII", e2.ASCII_PADDED_END = "ASCII_PADDED_END", e2.INTEGER_OCTAL = "INTEGER_OCTAL", e2.INTEGER_OCTAL_TIMESTAMP = "INTEGER_OCTAL_TIMESTAMP";
      }(s || (s = {}));
      const l = { [s.ASCII]: { serialize: n.encodeString, deserialize: n.decodeString }, [s.ASCII_PADDED_END]: { serialize: n.encodeString, deserialize: n.deserializeAsciiPaddedField }, [s.INTEGER_OCTAL]: { serialize: function(e2, t2) {
        return c(e2, t2, " ");
      }, deserialize: n.deserializeIntegerOctal }, [s.INTEGER_OCTAL_TIMESTAMP]: { serialize: function(e2, t2) {
        return c(n.encodeTimestamp(e2), t2, "");
      }, deserialize: n.deserializeIntegerOctalTimestamp } };
      class d {
        constructor(e2) {
          this.name = e2.name, this.offset = e2.offset, this.size = e2.size, this.type = e2.type, this.constantValue = e2.constantValue || void 0;
        }
        static frozen(e2) {
          return Object.freeze(new d(e2));
        }
        sliceString(e2, t2) {
          return n.decodeString(this.slice(e2, t2));
        }
        slice(e2, t2 = 0) {
          if (!n.isUint8Array(e2))
            return new Uint8Array(0);
          const r2 = t2 + this.offset, i2 = r2 + this.size;
          return e2.slice(r2, i2);
        }
        deserialize(e2) {
          const t2 = l[this.type];
          return t2 && n.isUint8Array(e2) ? t2.deserialize(e2, this) : void 0;
        }
        serialize(e2) {
          const t2 = new Uint8Array(this.size), r2 = l[this.type].serialize(e2, this), i2 = n.sizeofUint8Array(r2);
          return i2 > 0 && i2 <= this.size && t2.set(r2, 0), t2;
        }
      }
      var h;
      !function(e2) {
        e2.fileName = d.frozen({ name: "fileName", offset: 0, size: 100, type: s.ASCII_PADDED_END }), e2.fileMode = d.frozen({ name: "fileMode", offset: 100, size: 8, type: s.INTEGER_OCTAL }), e2.ownerUserId = d.frozen({ name: "ownerUserId", offset: 108, size: 8, type: s.INTEGER_OCTAL }), e2.groupUserId = d.frozen({ name: "groupUserId", offset: 116, size: 8, type: s.INTEGER_OCTAL }), e2.fileSize = d.frozen({ name: "fileSize", offset: 124, size: 12, type: s.INTEGER_OCTAL }), e2.lastModified = d.frozen({ name: "lastModified", offset: 136, size: 12, type: s.INTEGER_OCTAL_TIMESTAMP }), e2.headerChecksum = d.frozen({ name: "headerChecksum", offset: 148, size: 8, type: s.INTEGER_OCTAL }), e2.typeFlag = d.frozen({ name: "typeFlag", offset: 156, size: 1, type: s.ASCII }), e2.linkedFileName = d.frozen({ name: "linkedFileName", offset: 157, size: 100, type: s.ASCII_PADDED_END }), e2.ustarIndicator = d.frozen({ name: "ustarIndicator", offset: 257, size: 6, type: s.ASCII, constantValue: i.USTAR_INDICATOR_VALUE }), e2.ustarVersion = d.frozen({ name: "ustarVersion", offset: 263, size: 2, type: s.ASCII, constantValue: i.USTAR_VERSION_VALUE }), e2.ownerUserName = d.frozen({ name: "ownerUserName", offset: 265, size: 32, type: s.ASCII_PADDED_END }), e2.ownerGroupName = d.frozen({ name: "ownerGroupName", offset: 297, size: 32, type: s.ASCII_PADDED_END }), e2.deviceMajorNumber = d.frozen({ name: "deviceMajorNumber", offset: 329, size: 8, type: s.ASCII_PADDED_END }), e2.deviceMinorNumber = d.frozen({ name: "deviceMinorNumber", offset: 337, size: 8, type: s.ASCII_PADDED_END }), e2.fileNamePrefix = d.frozen({ name: "fileNamePrefix", offset: 345, size: 155, type: s.ASCII_PADDED_END });
        const t2 = { fileName: e2.fileName, fileMode: e2.fileMode, ownerUserId: e2.ownerUserId, groupUserId: e2.groupUserId, fileSize: e2.fileSize, lastModified: e2.lastModified, headerChecksum: e2.headerChecksum, typeFlag: e2.typeFlag, linkedFileName: e2.linkedFileName, ustarIndicator: e2.ustarIndicator, ustarVersion: e2.ustarVersion, ownerUserName: e2.ownerUserName, ownerGroupName: e2.ownerGroupName, deviceMajorNumber: e2.deviceMajorNumber, deviceMinorNumber: e2.deviceMinorNumber, fileNamePrefix: e2.fileNamePrefix };
        function r2() {
          return Object.values(t2);
        }
        e2.orderedSet = r2, e2.checksumSet = function() {
          return r2().filter((t3) => t3 !== e2.headerChecksum);
        }, e2.isUstarSector = function(t3, r3) {
          return e2.ustarIndicator.sliceString(t3, r3).startsWith(i.USTAR_TAG);
        };
      }(h || (h = {}));
      const { checksumSet: m, headerChecksum: A, orderedSet: I } = h, y = "".padStart(A.size, " "), S = n.generateChecksum(n.encodeString(y)), E = I(), N = m();
      function _(e2) {
        return e2 && n.isNumber(e2.lastModified) && (e2.lastModified = n.sanitizeTimestamp(e2.lastModified)), Object.assign(g(), e2 || {});
      }
      function g() {
        return { fileName: "", fileMode: i.FILE_MODE_DEFAULT, groupUserId: 0, ownerUserId: 0, fileSize: 0, lastModified: n.sanitizeTimestamp(Date.now()), headerChecksum: 0, linkedFileName: "", typeFlag: a.NORMAL_FILE, ustarIndicator: i.USTAR_INDICATOR_VALUE, ustarVersion: i.USTAR_VERSION_VALUE, ownerUserName: "", ownerGroupName: "", deviceMajorNumber: "00", deviceMinorNumber: "00", fileNamePrefix: "" };
      }
      class T {
        constructor(e2 = g()) {
          this.inflate(e2);
        }
        static serialize(e2) {
          return new T(e2).toUint8Array();
        }
        static deflateFrom(e2, t2) {
          return T.from(e2, t2).deflate();
        }
        static from(e2, t2) {
          const r2 = new T();
          if (n.isUint8Array(e2))
            for (const i2 of E)
              r2.setSerializedField(i2, e2, t2);
          return r2;
        }
        setDeserializedFieldFrom(e2, t2) {
          return this.setDeserializedField(e2, t2[e2.name]);
        }
        setDeserializedField(e2, t2) {
          const r2 = e2.serialize(t2);
          return this[e2.name] = { field: e2, bytes: r2, value: t2 };
        }
        setSerializedField(e2, t2, r2 = 0) {
          const i2 = e2.slice(t2, r2), n2 = e2.deserialize(i2);
          return this[e2.name] = { field: e2, bytes: i2, value: n2 };
        }
        update(e2) {
          const t2 = Object.assign(this.deflate(), e2);
          return this.inflate(t2);
        }
        inflate(e2) {
          const t2 = _(e2);
          let r2 = S;
          for (const e3 of N) {
            const { bytes: i2 } = this.setDeserializedFieldFrom(e3, t2);
            r2 += n.generateChecksum(i2);
          }
          return this.setDeserializedField(A, r2), this;
        }
        deflate() {
          const e2 = {};
          for (const t2 of E)
            e2[t2.name] = this[t2.name].value;
          return _(e2);
        }
        toUint8Array() {
          const e2 = new Uint8Array(i.HEADER_SIZE);
          for (const t2 of E) {
            const { bytes: r2 } = this[t2.name];
            e2.set(r2, t2.offset);
          }
          return e2;
        }
      }
      function z(e2, t2) {
        return n.concatUint8Arrays(e2, t2.toUint8Array());
      }
      class O {
        constructor(e2, t2 = null) {
          this.header = e2, this.content = t2;
        }
        static from(e2) {
          const { header: t2, content: r2 } = e2;
          return new O(t2, r2);
        }
        static fromMany(e2) {
          return Array.from(e2).filter((e3) => !!e3).map((e3) => O.from(e3));
        }
        static combine(e2) {
          return e2.reduce(z, new Uint8Array(0));
        }
        static combinePadded(e2) {
          const t2 = new Uint8Array(2 * i.SECTOR_SIZE);
          return n.concatUint8Arrays(O.combine(e2), t2);
        }
        static combinePaddedFrom(e2) {
          const t2 = O.fromMany(e2);
          return O.combinePadded(t2);
        }
        toUint8Array() {
          const { header: e2, content: t2 } = this, r2 = n.sizeofUint8Array(t2), i2 = n.getSectorOffsetDelta(r2);
          let a2 = t2;
          r2 > 0 && i2 > 0 && (a2 = n.concatUint8Arrays(t2, new Uint8Array(i2)));
          const s2 = _(e2);
          s2.fileSize = r2;
          const o2 = T.serialize(s2);
          return n.concatUint8Arrays(o2, a2);
        }
      }
      function v(e2, t2 = 0) {
        return o(e2, t2, 1, (e3) => h.isUstarSector(e3));
      }
      function p(e2, t2 = 0) {
        if (!n.isUint8Array(e2))
          return -1;
        const r2 = e2.byteLength;
        let i2 = Math.max(0, t2);
        for (; i2 < r2 && !h.isUstarSector(e2, i2); )
          i2 = n.advanceSectorOffset(i2, r2);
        return i2 < r2 ? i2 : -1;
      }
      class b {
        constructor(e2, t2, r2) {
          this.header = e2, this.content = t2, this.offset = r2;
        }
        static isTarEntryMetadata(e2) {
          return !!(e2 && e2 instanceof b);
        }
        static from(e2) {
          if (b.isTarEntryMetadata(e2))
            return e2;
          let { header: t2, content: r2, offset: i2 } = e2 || {};
          t2 || (t2 = new T()), r2 || (r2 = null), i2 || (i2 = 0);
          const a2 = n.sizeofUint8Array(r2);
          return t2.fileSize.value !== a2 && a2 > 0 && t2.update({ fileSize: a2 }), new b(t2, r2, i2);
        }
        static extractFrom(e2, t2 = 0) {
          if (!n.isUint8Array(e2))
            return null;
          const r2 = p(e2, t2);
          if (r2 < 0)
            return null;
          const i2 = e2.byteLength, a2 = T.from(e2, r2), s2 = n.advanceSectorOffset(r2, i2), o2 = a2.fileSize.value;
          let u2 = null;
          if (n.isNumber(o2) && o2 > 0) {
            const t3 = Math.min(i2, s2 + o2);
            u2 = e2.slice(s2, t3);
          }
          return new b(a2, u2, r2);
        }
        static extractFromAsync(e2, t2 = 0) {
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            if (!e2)
              return null;
            const r2 = yield v(e2, t2);
            if (!r2)
              return null;
            const { value: i2, offset: n2 } = r2, a2 = T.from(i2);
            return new b(a2, null, n2);
          });
        }
      }
      class U {
        constructor(e2) {
          this.metadata = b.from(e2);
        }
        static isTarEntry(e2) {
          return !!(e2 && e2 instanceof U);
        }
        static from(e2, t2 = null) {
          const r2 = new T(e2);
          return new U({ header: r2, content: t2, offset: 0 });
        }
        static fromAttributes(e2) {
          const { header: t2, content: r2 } = e2;
          return U.from(t2, r2);
        }
        static tryParse(e2, t2) {
          const r2 = b.extractFrom(e2, t2);
          return r2 ? new U(r2) : null;
        }
        static tryParseAsync(e2, t2) {
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            const r2 = yield b.extractFromAsync(e2, t2);
            return r2 ? new U(r2) : null;
          });
        }
        get fileName() {
          return this.header.fileName.value;
        }
        set fileName(e2) {
          this.header.fileName.value = e2;
        }
        get fileSize() {
          return this.header.fileSize.value;
        }
        set fileSize(e2) {
          this.header.fileSize.value = e2;
        }
        get fileMode() {
          return this.header.fileMode.value;
        }
        set fileMode(e2) {
          this.header.fileMode.value = e2;
        }
        get ownerUserId() {
          return this.header.ownerUserId.value;
        }
        set ownerUserId(e2) {
          this.header.ownerUserId.value = e2;
        }
        get groupUserId() {
          return this.header.groupUserId.value;
        }
        set groupUserId(e2) {
          this.header.groupUserId.value = e2;
        }
        get lastModified() {
          return this.header.lastModified.value;
        }
        set lastModified(e2) {
          this.header.lastModified.value = e2;
        }
        get headerChecksum() {
          return this.header.headerChecksum.value;
        }
        get linkedFileName() {
          return this.header.linkedFileName.value;
        }
        set linkedFileName(e2) {
          this.header.linkedFileName.value = e2;
        }
        get typeFlag() {
          return this.header.typeFlag.value;
        }
        set typeFlag(e2) {
          this.header.typeFlag.value = e2;
        }
        get ustarIndicator() {
          return this.header.ustarIndicator.value;
        }
        get ustarVersion() {
          return this.header.ustarVersion.value;
        }
        set ustarVersion(e2) {
          this.header.ustarVersion.value = e2;
        }
        get ownerUserName() {
          return this.header.ownerUserName.value;
        }
        set ownerUserName(e2) {
          this.header.ownerUserName.value = e2;
        }
        get ownerGroupName() {
          return this.header.ownerGroupName.value;
        }
        set ownerGroupName(e2) {
          this.header.ownerGroupName.value = e2;
        }
        get deviceMajorNumber() {
          return this.header.deviceMajorNumber.value;
        }
        set deviceMajorNumber(e2) {
          this.header.deviceMajorNumber.value = e2;
        }
        get deviceMinorNumber() {
          return this.header.deviceMinorNumber.value;
        }
        set deviceMinorNumber(e2) {
          this.header.deviceMinorNumber.value = e2;
        }
        get fileNamePrefix() {
          return this.header.fileNamePrefix.value;
        }
        set fileNamePrefix(e2) {
          this.header.fileNamePrefix.value = e2;
        }
        get header() {
          return this.metadata.header;
        }
        get content() {
          return this.metadata.content;
        }
        get bufferStartIndex() {
          return this.metadata.offset;
        }
        get bufferEndIndex() {
          return this.bufferStartIndex + this.sectorByteLength;
        }
        get byteLength() {
          return i.HEADER_SIZE + this.fileSize;
        }
        get sectorByteLength() {
          return n.roundUpSectorOffset(this.byteLength);
        }
        get contentStartIndex() {
          return i.HEADER_SIZE + this.bufferStartIndex;
        }
        get contentEndIndex() {
          return this.contentStartIndex + this.fileSize;
        }
        getContentAsText() {
          return n.decodeString(this.content);
        }
        isDirectory() {
          return u(this.typeFlag);
        }
        isFile() {
          return f2(this.typeFlag);
        }
        readContentFrom(e2, t2 = 0, i2 = 0) {
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            const { contentStartIndex: r2, contentEndIndex: a2, fileSize: s2 } = this, o2 = n.clamp(t2, 0, s2) + r2, u2 = Math.max(0, a2 - o2), f3 = i2 > 0 ? Math.min(i2, u2) : u2;
            return e2.read(o2, f3);
          });
        }
        toAttributes() {
          return new O(this.header.deflate(), this.content);
        }
        toUint8Array() {
          return this.toAttributes().toUint8Array();
        }
        toJSON() {
          const { header: e2, fileName: t2, fileSize: r2 } = this, i2 = this.isFile(), n2 = this.isDirectory();
          return { content: this.content ? "Uint8Array[" + this.content.byteLength + "]" : "null", fileName: t2, fileSize: r2, isFile: i2, isDirectory: n2, header: e2 };
        }
      }
      class D {
        constructor() {
          this.mOffset = 0, this.mSize = 0;
        }
        get defaultIteratorResult() {
          return { value: null, done: true };
        }
        get bufferOffset() {
          return this.mOffset;
        }
        set bufferOffset(e2) {
          this.mOffset = n.clamp(e2, 0, this.bufferLength);
        }
        get bufferLength() {
          return this.mSize;
        }
        set bufferLength(e2) {
          this.mSize = Math.max(0, e2);
        }
        canAdvanceOffset() {
          return this.bufferOffset < this.bufferLength;
        }
        toJSON() {
          const { bufferOffset: e2, bufferLength: t2 } = this;
          return { bufferOffset: e2, bufferLength: t2, canAdvanceOffset: this.canAdvanceOffset() };
        }
        consumeIteratorResult(e2) {
          return e2 ? (this.bufferOffset = e2.bufferEndIndex, { value: e2, done: !this.canAdvanceOffset() }) : this.defaultIteratorResult;
        }
      }
      class L extends D {
        constructor() {
          super(), this.initialize(null);
        }
        static forEachIn(e2, t2) {
          var i2, n2, a2, s2;
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            const o2 = new L();
            yield o2.initialize(e2);
            let u2 = 0;
            try {
              for (var f3, c2 = true, l2 = (0, r.__asyncValues)(o2); f3 = yield l2.next(), !(i2 = f3.done); ) {
                s2 = f3.value, c2 = false;
                try {
                  const r2 = s2;
                  yield t2(r2, u2, e2), u2++;
                } finally {
                  c2 = true;
                }
              }
            } catch (e3) {
              n2 = { error: e3 };
            } finally {
              try {
                c2 || i2 || !(a2 = l2.return) || (yield a2.call(l2));
              } finally {
                if (n2)
                  throw n2.error;
              }
            }
          });
        }
        static extractAll(e2) {
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            const t2 = [];
            return yield L.forEachIn(e2, (e3) => (0, r.__awaiter)(this, void 0, void 0, function* () {
              t2.push(e3);
            })), t2;
          });
        }
        [Symbol.asyncIterator]() {
          return this;
        }
        next() {
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            return this.canAdvanceOffset() ? this.consumeIteratorResult(yield U.tryParseAsync(this.mData, this.bufferOffset)) : this.defaultIteratorResult;
          });
        }
        initialize(e2) {
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            e2 ? (this.mData = e2, this.bufferLength = yield this.mData.byteLength()) : (this.mData = null, this.bufferLength = 0), this.bufferOffset = 0;
          });
        }
      }
      class M extends D {
        constructor() {
          super(), this.initialize(null);
        }
        static extractAll(e2) {
          const t2 = new M();
          return t2.initialize(e2), Array.from(t2);
        }
        [Symbol.iterator]() {
          return this;
        }
        next() {
          return this.canAdvanceOffset() ? this.consumeIteratorResult(U.tryParse(this.mData, this.bufferOffset)) : this.defaultIteratorResult;
        }
        initialize(e2) {
          n.isUint8Array(e2) ? (this.mData = e2, this.bufferLength = this.mData.byteLength) : (this.mData = null, this.bufferLength = 0), this.bufferOffset = 0;
        }
      }
      class C {
        constructor() {
          this.entries = [];
        }
        static extract(e2) {
          return M.extractAll(e2);
        }
        static create(e2) {
          return O.combinePaddedFrom(e2);
        }
        static extractAsync(e2) {
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            return L.extractAll(e2);
          });
        }
        static streamAsync(e2, t2) {
          return (0, r.__awaiter)(this, void 0, void 0, function* () {
            return L.forEachIn(e2, t2);
          });
        }
        toUint8Array() {
          const e2 = Array.from(this.entries).map((e3) => e3.toAttributes());
          return C.create(e2);
        }
        setBuffer(e2) {
          return this.entries = C.extract(e2), this;
        }
        add(e2) {
          return this.entries.push(U.fromAttributes(e2)), this;
        }
        addTextFile(e2, t2, r2) {
          return this.addBinaryFile(e2, n.encodeString(t2), r2);
        }
        addBinaryFile(e2, t2, r2 = {}) {
          return this.add({ header: Object.assign({ fileName: e2, fileSize: t2.byteLength, typeFlag: a.NORMAL_FILE }, r2), content: t2 });
        }
        addDirectory(e2, t2 = {}) {
          return this.add({ header: Object.assign({ fileName: e2, typeFlag: a.DIRECTORY }, t2) });
        }
      }
      module2.exports = t;
    })();
  }
});

// src/index.ts
var import_tar_browserify = __toESM(require_es5());

// src/lzwGo.ts
var maxWidth = 12;
var decoderInvalidCode = 65535;
var flushBuffer = 1 << maxWidth;
var ByteWReader = class {
  buf;
  constructor(buf) {
    this.buf = buf;
  }
  // getBuffer returns the buffer
  // Not present in Go
  jsGetInnerArray() {
    return this.buf;
  }
  jsConcat(buf) {
    this.buf = Uint8Array.from([...this.buf, ...buf]);
  }
  // readByte reads the next byte from the input buffer.
  // Equivalent to r.ReadByte() in io.ByteReader
  ReadByte() {
    if (this.buf.length == 0) {
      return [0, new Error("EOF" /* EOF */)];
    }
    let b = this.buf[0];
    this.buf = this.buf.subarray(1);
    return [b, null];
  }
  // Copy copies bytes from src to dst. It returns the number of bytes copied
  // Equivalent to copy in Go
  Copy(bytes) {
    this.buf = Uint8Array.from([...this.buf, ...bytes]);
    return bytes.length;
  }
};
var LZWReader = class {
  r;
  bits = 0;
  // uint32
  nBits = 0;
  // uint
  width = 0;
  // uint
  litWidth = 0;
  // uint
  // The first 1<<litWidth codes are literal codes.
  // The next two codes mean clear and EOF.
  // Other valid codes are in the range [lo, hi] where lo := clear + 2,
  // with the upper bound incrementing on each code seen.
  //
  // overflow is the code at which hi overflows the code width. It always
  // equals 1 << width.
  //
  // last is the most recently seen code, or decoderInvalidCode.
  //
  // An invariant is that hi < overflow.
  clear = 0;
  // uint
  eof = 0;
  // uint
  hi = 0;
  // uint
  overflow = 0;
  // uint
  last = 0;
  // uint
  err;
  // Error in the stream, if any
  // Each code c in [lo, hi] expands to two or more bytes. For c != hi:
  //   suffix[c] is the last of these bytes.
  //   prefix[c] is the code for all but the last byte.
  //   This code can either be a literal code or another code in [lo, c).
  // The c == hi case is a special case.
  suffix = [];
  // [1 << maxWidth]uint8
  prefix = [];
  // [1 << maxWidth]uint16
  // output is the temporary output buffer.
  // Literal codes are accumulated from the start of the buffer.
  // Non-literal codes decode to a sequence of suffixes that are first
  // written right-to-left from the end of the buffer before being copied
  // to the start of the buffer.
  // It is flushed when it contains >= 1<<maxWidth bytes,
  // so that there is always room to decode an entire code.
  output = [];
  // [1 << maxWidth]byte
  o = 0;
  // write index into output
  toRead = [];
  // bytes to return from Read
  // Not present in the go code
  order = 0 /* LSB */;
  // uint
  constructor(src, order, litWidth) {
    if (litWidth < 2 || 8 < litWidth) {
      throw new Error("lzw: litWidth out of range");
    }
    this.order = order;
    this.r = src;
    this.litWidth = litWidth;
    this.width = 1 + litWidth;
    this.clear = 1 << litWidth;
    this.eof = this.clear + 1;
    this.hi = this.clear + 1;
    this.overflow = 1 << this.width;
    this.last = decoderInvalidCode;
    this.suffix = Array.from({ length: 1 << maxWidth }, () => 0);
    this.prefix = Array.from({ length: 1 << maxWidth }, () => 0);
    this.output = Array.from({ length: 2 * (1 << maxWidth) }, () => 0);
  }
  // Not present in the Go code
  //
  // readLSB or readMSB
  //
  // This is slightly more idiomatic than defining a function in the class
  read() {
    switch (this.order) {
      case 0 /* LSB */:
        return this.readLSB();
      case 1 /* MSB */:
        return this.readMSB();
      default:
        return [0, new Error("lzw: invalid order")];
    }
  }
  // readLSB returns the next code for "Least Significant Bits first" data.
  readLSB() {
    while (this.nBits < this.width) {
      let [x, err] = this.r.ReadByte();
      if (err) {
        return [0, err];
      }
      this.bits |= x << this.nBits;
      this.nBits += 8;
    }
    let code = this.bits & (1 << this.width) - 1;
    this.bits >>= this.width;
    this.nBits -= this.width;
    return [code, null];
  }
  // readMSB returns the next code for "Most Significant Bits first" data.
  readMSB() {
    while (this.nBits < this.width) {
      let [x, err] = this.r.ReadByte();
      if (err) {
        return [0, err];
      }
      this.bits |= x << 24 - this.nBits;
      this.nBits += 8;
    }
    let code = this.bits >> 32 - this.width;
    this.bits <<= this.width;
    this.nBits -= this.width;
    return [code, null];
  }
  // The Read function is not implemented here the same way as it is Go-specific
  //
  // Read implements io.Reader, reading uncompressed bytes from its underlying Reader.
  Read(buf) {
    while (true) {
      if (this.toRead.length > 0) {
        let n = buf.Copy(this.toRead);
        this.toRead = this.toRead.slice(n);
        return [n, null];
      }
      if (this.err) {
        return [0, this.err];
      }
      this.decode();
    }
  }
  // decode decompresses bytes from r and leaves them in d.toRead.
  // read specifies how to decode bytes into codes.
  // litWidth is the width in bits of literal codes.
  decode() {
    loop:
      while (true) {
        let [code, err] = this.read();
        if (err) {
          if (err.message == "EOF" /* EOF */) {
            err = new Error("unexpected EOF" /* UnexpectedEOF */);
          }
          this.err = err;
          break;
        }
        if (code < this.clear) {
          this.output[this.o] = code;
          this.o++;
          if (this.last != decoderInvalidCode) {
            this.suffix[this.hi] = code;
            this.prefix[this.hi] = this.last;
          }
        } else if (code == this.clear) {
          this.width = 1 + this.litWidth;
          this.hi = this.eof;
          this.overflow = 1 << this.width;
          this.last = decoderInvalidCode;
          continue;
        } else if (code == this.eof) {
          this.err = new Error("EOF" /* EOF */);
          break loop;
        } else if (code <= this.hi) {
          let [c, i] = [code, this.output.length - 1];
          if (code == this.hi && this.last != decoderInvalidCode) {
            c = this.last;
            while (c >= this.clear) {
              c = this.prefix[c];
            }
            this.output[i] = c;
            i--;
            c = this.last;
          }
          while (c >= this.clear) {
            this.output[i] = this.suffix[c];
            i--;
            c = this.prefix[c];
          }
          this.output[i] = c;
          let srcArray = this.output.slice(i);
          for (let i2 = 0; i2 < srcArray.length; i2++) {
            this.output[this.o + i2] = srcArray[i2];
          }
          this.o += srcArray.length;
          if (this.last != decoderInvalidCode) {
            this.suffix[this.hi] = c;
            this.prefix[this.hi] = this.last;
          }
        } else {
          this.err = new Error("lzw: invalid code");
          break loop;
        }
        this.last = code;
        this.hi++;
        if (this.hi >= this.overflow) {
          if (this.hi > this.overflow) {
            throw new Error("Unreachable");
          }
          if (this.width == maxWidth) {
            this.last = decoderInvalidCode;
            this.hi--;
          } else {
            this.width++;
            this.overflow = 1 << this.width;
          }
        }
        if (this.o >= flushBuffer) {
          break;
        }
      }
    this.toRead = this.output.slice(0, this.o);
    this.o = 0;
  }
  // Close closes the Reader and returns an error for any future read operation.
  // It does not close the underlying io.Reader.
  close() {
    this.err = new Error("lzw: reader/writer is closed");
    return [null];
  }
};

// src/index.ts
var IblFile = class {
  sections;
  constructor() {
    this.sections = {};
  }
  lzwDecompress(compressed) {
    let lzwReader = new LZWReader(new ByteWReader(compressed), 0 /* LSB */, 8);
    let bufs = [];
    while (true) {
      let tmpBuf = new ByteWReader(Uint8Array.from([]));
      let [n, err] = lzwReader.Read(tmpBuf);
      bufs.push(tmpBuf.jsGetInnerArray());
      if (err) {
        if (err.message == "EOF" /* EOF */) {
          let finalBuf = new Uint8Array(bufs.reduce((acc, cur) => acc + cur.length, 0));
          let offset = 0;
          for (let buf of bufs) {
            finalBuf.set(buf, offset);
            offset += buf.length;
          }
          return finalBuf;
        }
        throw err;
      }
    }
  }
  parseInputSync(blob) {
    let lzwDecompressed = this.lzwDecompress(blob);
    const entriesFromBigFile = import_tar_browserify.Tarball.extract(lzwDecompressed);
    return entriesFromBigFile;
  }
};

// src/test.ts
var fs = __toESM(require("node:fs"));
var f = fs.readFileSync("./test.ibl");
var file = new IblFile();
var es = file.parseInputSync(f);
for (let e of es) {
  console.log(e.fileName);
}

function Af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var uc = { exports: {} }, yi = {}, cc = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr = Symbol.for("react.element"), Mf = Symbol.for("react.portal"), If = Symbol.for("react.fragment"), _f = Symbol.for("react.strict_mode"), jf = Symbol.for("react.profiler"), Ff = Symbol.for("react.provider"), Df = Symbol.for("react.context"), Bf = Symbol.for("react.forward_ref"), Hf = Symbol.for("react.suspense"), Vf = Symbol.for("react.memo"), Uf = Symbol.for("react.lazy"), ma = Symbol.iterator;
function Wf(e) {
  return e === null || typeof e != "object" ? null : (e = ma && e[ma] || e["@@iterator"], typeof e == "function" ? e : null);
}
var dc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fc = Object.assign, pc = {};
function Un(e, t, n) {
  this.props = e, this.context = t, this.refs = pc, this.updater = n || dc;
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hc() {
}
hc.prototype = Un.prototype;
function xs(e, t, n) {
  this.props = e, this.context = t, this.refs = pc, this.updater = n || dc;
}
var ks = xs.prototype = new hc();
ks.constructor = xs;
fc(ks, Un.prototype);
ks.isPureReactComponent = !0;
var ya = Array.isArray, gc = Object.prototype.hasOwnProperty, Ss = { current: null }, mc = { key: !0, ref: !0, __self: !0, __source: !0 };
function yc(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) gc.call(t, r) && !mc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Wr, type: e, key: i, ref: l, props: o, _owner: Ss.current };
}
function Kf(e, t) {
  return { $$typeof: Wr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wr;
}
function Qf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var va = /\/+/g;
function Ai(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Qf("" + e.key) : t.toString(36);
}
function ko(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Wr:
        case Mf:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + Ai(l, 0) : r, ya(o) ? (n = "", e != null && (n = e.replace(va, "$&/") + "/"), ko(o, t, n, "", function(u) {
    return u;
  })) : o != null && (bs(o) && (o = Kf(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(va, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", ya(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + Ai(i, s);
    l += ko(i, t, n, a, o);
  }
  else if (a = Wf(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + Ai(i, s++), l += ko(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Jr(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ko(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Gf(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null }, So = { transition: null }, Yf = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: So, ReactCurrentOwner: Ss };
function vc() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: Jr, forEach: function(e, t, n) {
  Jr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Jr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Jr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!bs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = Un;
M.Fragment = If;
M.Profiler = jf;
M.PureComponent = xs;
M.StrictMode = _f;
M.Suspense = Hf;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yf;
M.act = vc;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fc({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ss.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) gc.call(t, a) && !mc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Wr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
M.createContext = function(e) {
  return e = { $$typeof: Df, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ff, _context: e }, e.Consumer = e;
};
M.createElement = yc;
M.createFactory = function(e) {
  var t = yc.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: Bf, render: e };
};
M.isValidElement = bs;
M.lazy = function(e) {
  return { $$typeof: Uf, _payload: { _status: -1, _result: e }, _init: Gf };
};
M.memo = function(e, t) {
  return { $$typeof: Vf, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = So.transition;
  So.transition = {};
  try {
    e();
  } finally {
    So.transition = t;
  }
};
M.unstable_act = vc;
M.useCallback = function(e, t) {
  return Se.current.useCallback(e, t);
};
M.useContext = function(e) {
  return Se.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return Se.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return Se.current.useEffect(e, t);
};
M.useId = function() {
  return Se.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return Se.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return Se.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return Se.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return Se.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return Se.current.useRef(e);
};
M.useState = function(e) {
  return Se.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return Se.current.useTransition();
};
M.version = "18.3.1";
cc.exports = M;
var P = cc.exports;
const Xf = /* @__PURE__ */ Af(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zf = P, Jf = Symbol.for("react.element"), qf = Symbol.for("react.fragment"), ep = Object.prototype.hasOwnProperty, tp = Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, np = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) ep.call(t, r) && !np.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Jf, type: e, key: i, ref: l, props: o, _owner: tp.current };
}
yi.Fragment = qf;
yi.jsx = wc;
yi.jsxs = wc;
uc.exports = yi;
var $ = uc.exports, hl = {}, xc = { exports: {} }, _e = {}, kc = { exports: {} }, Sc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(N, z) {
    var A = N.length;
    N.push(z);
    e: for (; 0 < A; ) {
      var I = A - 1 >>> 1, D = N[I];
      if (0 < o(D, z)) N[I] = z, N[A] = D, A = I;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var z = N[0], A = N.pop();
    if (A !== z) {
      N[0] = A;
      e: for (var I = 0, D = N.length, et = D >>> 1; I < et; ) {
        var tt = 2 * (I + 1) - 1, un = N[tt], Kt = tt + 1, Zr = N[Kt];
        if (0 > o(un, A)) Kt < D && 0 > o(Zr, un) ? (N[I] = Zr, N[Kt] = A, I = Kt) : (N[I] = un, N[tt] = A, I = tt);
        else if (Kt < D && 0 > o(Zr, A)) N[I] = Zr, N[Kt] = A, I = Kt;
        else break e;
      }
    }
    return z;
  }
  function o(N, z) {
    var A = N.sortIndex - z.sortIndex;
    return A !== 0 ? A : N.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], c = 1, f = null, h = 3, y = !1, m = !1, w = !1, x = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= N) r(u), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(u);
    }
  }
  function v(N) {
    if (w = !1, g(N), !m) if (n(a) !== null) m = !0, j(k);
    else {
      var z = n(u);
      z !== null && te(v, z.startTime - N);
    }
  }
  function k(N, z) {
    m = !1, w && (w = !1, d(C), C = -1), y = !0;
    var A = h;
    try {
      for (g(z), f = n(a); f !== null && (!(f.expirationTime > z) || N && !Y()); ) {
        var I = f.callback;
        if (typeof I == "function") {
          f.callback = null, h = f.priorityLevel;
          var D = I(f.expirationTime <= z);
          z = e.unstable_now(), typeof D == "function" ? f.callback = D : f === n(a) && r(a), g(z);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var et = !0;
      else {
        var tt = n(u);
        tt !== null && te(v, tt.startTime - z), et = !1;
      }
      return et;
    } finally {
      f = null, h = A, y = !1;
    }
  }
  var b = !1, L = null, C = -1, E = 5, T = -1;
  function Y() {
    return !(e.unstable_now() - T < E);
  }
  function he() {
    if (L !== null) {
      var N = e.unstable_now();
      T = N;
      var z = !0;
      try {
        z = L(!0, N);
      } finally {
        z ? ee() : (b = !1, L = null);
      }
    } else b = !1;
  }
  var ee;
  if (typeof p == "function") ee = function() {
    p(he);
  };
  else if (typeof MessageChannel < "u") {
    var Z = new MessageChannel(), dt = Z.port2;
    Z.port1.onmessage = he, ee = function() {
      dt.postMessage(null);
    };
  } else ee = function() {
    x(he, 0);
  };
  function j(N) {
    L = N, b || (b = !0, ee());
  }
  function te(N, z) {
    C = x(function() {
      N(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    m || y || (m = !0, j(k));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(N) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = h;
    }
    var A = h;
    h = z;
    try {
      return N();
    } finally {
      h = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, z) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var A = h;
    h = N;
    try {
      return z();
    } finally {
      h = A;
    }
  }, e.unstable_scheduleCallback = function(N, z, A) {
    var I = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? I + A : I) : A = I, N) {
      case 1:
        var D = -1;
        break;
      case 2:
        D = 250;
        break;
      case 5:
        D = 1073741823;
        break;
      case 4:
        D = 1e4;
        break;
      default:
        D = 5e3;
    }
    return D = A + D, N = { id: c++, callback: z, priorityLevel: N, startTime: A, expirationTime: D, sortIndex: -1 }, A > I ? (N.sortIndex = A, t(u, N), n(a) === null && N === n(u) && (w ? (d(C), C = -1) : w = !0, te(v, A - I))) : (N.sortIndex = D, t(a, N), m || y || (m = !0, j(k))), N;
  }, e.unstable_shouldYield = Y, e.unstable_wrapCallback = function(N) {
    var z = h;
    return function() {
      var A = h;
      h = z;
      try {
        return N.apply(this, arguments);
      } finally {
        h = A;
      }
    };
  };
})(Sc);
kc.exports = Sc;
var rp = kc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op = P, Ie = rp;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var bc = /* @__PURE__ */ new Set(), Cr = {};
function sn(e, t) {
  Mn(e, t), Mn(e + "Capture", t);
}
function Mn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) bc.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gl = Object.prototype.hasOwnProperty, ip = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wa = {}, xa = {};
function lp(e) {
  return gl.call(xa, e) ? !0 : gl.call(wa, e) ? !1 : ip.test(e) ? xa[e] = !0 : (wa[e] = !0, !1);
}
function sp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ap(e, t, n, r) {
  if (t === null || typeof t > "u" || sp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function be(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Es = /[\-:]([a-z])/g;
function Ls(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Es,
    Ls
  );
  pe[t] = new be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Es, Ls);
  pe[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Es, Ls);
  pe[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cs(e, t, n, r) {
  var o = pe.hasOwnProperty(t) ? pe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ap(t, n, o, r) && (n = null), r || o === null ? lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qr = Symbol.for("react.element"), fn = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), Ts = Symbol.for("react.strict_mode"), ml = Symbol.for("react.profiler"), Ec = Symbol.for("react.provider"), Lc = Symbol.for("react.context"), $s = Symbol.for("react.forward_ref"), yl = Symbol.for("react.suspense"), vl = Symbol.for("react.suspense_list"), Ns = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), Cc = Symbol.for("react.offscreen"), ka = Symbol.iterator;
function Gn(e) {
  return e === null || typeof e != "object" ? null : (e = ka && e[ka] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Mi;
function sr(e) {
  if (Mi === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Mi = t && t[1] || "";
  }
  return `
` + Mi + e;
}
var Ii = !1;
function _i(e, t) {
  if (!e || Ii) return "";
  Ii = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; ) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== i[s]) {
        if (l !== 1 || s !== 1)
          do
            if (l--, s--, 0 > s || o[l] !== i[s]) {
              var a = `
` + o[l].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    Ii = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function up(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr("Lazy");
    case 13:
      return sr("Suspense");
    case 19:
      return sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _i(e.type, !1), e;
    case 11:
      return e = _i(e.type.render, !1), e;
    case 1:
      return e = _i(e.type, !0), e;
    default:
      return "";
  }
}
function wl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pn:
      return "Fragment";
    case fn:
      return "Portal";
    case ml:
      return "Profiler";
    case Ts:
      return "StrictMode";
    case yl:
      return "Suspense";
    case vl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Lc:
      return (e.displayName || "Context") + ".Consumer";
    case Ec:
      return (e._context.displayName || "Context") + ".Provider";
    case $s:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ns:
      return t = e.displayName || null, t !== null ? t : wl(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return wl(e(t));
      } catch {
      }
  }
  return null;
}
function cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wl(t);
    case 8:
      return t === Ts ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Bt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Tc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function dp(e) {
  var t = Tc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function eo(e) {
  e._valueTracker || (e._valueTracker = dp(e));
}
function $c(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Tc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Io(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xl(e, t) {
  var n = t.checked;
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Sa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Nc(e, t) {
  t = t.checked, t != null && Cs(e, "checked", t, !1);
}
function kl(e, t) {
  Nc(e, t);
  var n = Bt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Sl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Sl(e, t.type, Bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ba(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Sl(e, t, n) {
  (t !== "number" || Io(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ar = Array.isArray;
function Cn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function bl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ea(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (ar(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function Oc(e, t) {
  var n = Bt(t.value), r = Bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function La(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var to, Rc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (to = to || document.createElement("div"), to.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = to.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, fp = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function(e) {
  fp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), gr[t] = gr[e];
  });
});
function Pc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gr.hasOwnProperty(e) && gr[e] ? ("" + t).trim() : t + "px";
}
function Ac(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Pc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var pp = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ll(e, t) {
  if (t) {
    if (pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Cl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Tl = null;
function Os(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var $l = null, Tn = null, $n = null;
function Ca(e) {
  if (e = Gr(e)) {
    if (typeof $l != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Si(t), $l(e.stateNode, e.type, t));
  }
}
function Mc(e) {
  Tn ? $n ? $n.push(e) : $n = [e] : Tn = e;
}
function Ic() {
  if (Tn) {
    var e = Tn, t = $n;
    if ($n = Tn = null, Ca(e), t) for (e = 0; e < t.length; e++) Ca(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function jc() {
}
var ji = !1;
function Fc(e, t, n) {
  if (ji) return e(t, n);
  ji = !0;
  try {
    return _c(e, t, n);
  } finally {
    ji = !1, (Tn !== null || $n !== null) && (jc(), Ic());
  }
}
function $r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Si(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Nl = !1;
if (xt) try {
  var Yn = {};
  Object.defineProperty(Yn, "passive", { get: function() {
    Nl = !0;
  } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
} catch {
  Nl = !1;
}
function hp(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mr = !1, _o = null, jo = !1, Ol = null, gp = { onError: function(e) {
  mr = !0, _o = e;
} };
function mp(e, t, n, r, o, i, l, s, a) {
  mr = !1, _o = null, hp.apply(gp, arguments);
}
function yp(e, t, n, r, o, i, l, s, a) {
  if (mp.apply(this, arguments), mr) {
    if (mr) {
      var u = _o;
      mr = !1, _o = null;
    } else throw Error(S(198));
    jo || (jo = !0, Ol = u);
  }
}
function an(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Dc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ta(e) {
  if (an(e) !== e) throw Error(S(188));
}
function vp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = an(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ta(o), e;
        if (i === r) return Ta(o), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          l = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            l = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Bc(e) {
  return e = vp(e), e !== null ? Hc(e) : null;
}
function Hc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vc = Ie.unstable_scheduleCallback, $a = Ie.unstable_cancelCallback, wp = Ie.unstable_shouldYield, xp = Ie.unstable_requestPaint, q = Ie.unstable_now, kp = Ie.unstable_getCurrentPriorityLevel, zs = Ie.unstable_ImmediatePriority, Uc = Ie.unstable_UserBlockingPriority, Fo = Ie.unstable_NormalPriority, Sp = Ie.unstable_LowPriority, Wc = Ie.unstable_IdlePriority, vi = null, ut = null;
function bp(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function") try {
    ut.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ze = Math.clz32 ? Math.clz32 : Cp, Ep = Math.log, Lp = Math.LN2;
function Cp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ep(e) / Lp | 0) | 0;
}
var no = 64, ro = 4194304;
function ur(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Do(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = ur(s) : (i &= l, i !== 0 && (r = ur(i)));
  } else l = n & ~o, l !== 0 ? r = ur(l) : i !== 0 && (r = ur(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ze(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Tp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $p(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Ze(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = Tp(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function zl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Kc() {
  var e = no;
  return no <<= 1, !(no & 4194240) && (no = 64), e;
}
function Fi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function Np(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ze(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Rs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var F = 0;
function Qc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Gc, Ps, Yc, Xc, Zc, Rl = !1, oo = [], Pt = null, At = null, Mt = null, Nr = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map(), Nt = [], Op = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Na(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Gr(t), t !== null && Ps(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function zp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Pt = Xn(Pt, e, t, n, r, o), !0;
    case "dragenter":
      return At = Xn(At, e, t, n, r, o), !0;
    case "mouseover":
      return Mt = Xn(Mt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Nr.set(i, Xn(Nr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Or.set(i, Xn(Or.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Jc(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Dc(n), t !== null) {
          e.blockedOn = t, Zc(e.priority, function() {
            Yc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function bo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Tl = r, n.target.dispatchEvent(r), Tl = null;
    } else return t = Gr(n), t !== null && Ps(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Oa(e, t, n) {
  bo(e) && n.delete(t);
}
function Rp() {
  Rl = !1, Pt !== null && bo(Pt) && (Pt = null), At !== null && bo(At) && (At = null), Mt !== null && bo(Mt) && (Mt = null), Nr.forEach(Oa), Or.forEach(Oa);
}
function Zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Rl || (Rl = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Rp)));
}
function zr(e) {
  function t(o) {
    return Zn(o, e);
  }
  if (0 < oo.length) {
    Zn(oo[0], e);
    for (var n = 1; n < oo.length; n++) {
      var r = oo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Pt !== null && Zn(Pt, e), At !== null && Zn(At, e), Mt !== null && Zn(Mt, e), Nr.forEach(t), Or.forEach(t), n = 0; n < Nt.length; n++) r = Nt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nt.length && (n = Nt[0], n.blockedOn === null); ) Jc(n), n.blockedOn === null && Nt.shift();
}
var Nn = Et.ReactCurrentBatchConfig, Bo = !0;
function Pp(e, t, n, r) {
  var o = F, i = Nn.transition;
  Nn.transition = null;
  try {
    F = 1, As(e, t, n, r);
  } finally {
    F = o, Nn.transition = i;
  }
}
function Ap(e, t, n, r) {
  var o = F, i = Nn.transition;
  Nn.transition = null;
  try {
    F = 4, As(e, t, n, r);
  } finally {
    F = o, Nn.transition = i;
  }
}
function As(e, t, n, r) {
  if (Bo) {
    var o = Pl(e, t, n, r);
    if (o === null) Yi(e, t, r, Ho, n), Na(e, r);
    else if (zp(o, e, t, n, r)) r.stopPropagation();
    else if (Na(e, r), t & 4 && -1 < Op.indexOf(e)) {
      for (; o !== null; ) {
        var i = Gr(o);
        if (i !== null && Gc(i), i = Pl(e, t, n, r), i === null && Yi(e, t, r, Ho, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Yi(e, t, r, null, n);
  }
}
var Ho = null;
function Pl(e, t, n, r) {
  if (Ho = null, e = Os(r), e = Xt(e), e !== null) if (t = an(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Dc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ho = e, null;
}
function qc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kp()) {
        case zs:
          return 1;
        case Uc:
          return 4;
        case Fo:
        case Sp:
          return 16;
        case Wc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null, Ms = null, Eo = null;
function ed() {
  if (Eo) return Eo;
  var e, t = Ms, n = t.length, r, o = "value" in zt ? zt.value : zt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Eo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Lo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function io() {
  return !0;
}
function za() {
  return !1;
}
function je(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? io : za, this.isPropagationStopped = za, this;
  }
  return G(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = io);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = io);
  }, persist: function() {
  }, isPersistent: io }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Is = je(Wn), Qr = G({}, Wn, { view: 0, detail: 0 }), Mp = je(Qr), Di, Bi, Jn, wi = G({}, Qr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _s, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (Di = e.screenX - Jn.screenX, Bi = e.screenY - Jn.screenY) : Bi = Di = 0, Jn = e), Di);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Bi;
} }), Ra = je(wi), Ip = G({}, wi, { dataTransfer: 0 }), _p = je(Ip), jp = G({}, Qr, { relatedTarget: 0 }), Hi = je(jp), Fp = G({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dp = je(Fp), Bp = G({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Hp = je(Bp), Vp = G({}, Wn, { data: 0 }), Pa = je(Vp), Up = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Wp = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Qp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kp[e]) ? !!t[e] : !1;
}
function _s() {
  return Qp;
}
var Gp = G({}, Qr, { key: function(e) {
  if (e.key) {
    var t = Up[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _s, charCode: function(e) {
  return e.type === "keypress" ? Lo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Yp = je(Gp), Xp = G({}, wi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Aa = je(Xp), Zp = G({}, Qr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _s }), Jp = je(Zp), qp = G({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), eh = je(qp), th = G({}, wi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), nh = je(th), rh = [9, 13, 27, 32], js = xt && "CompositionEvent" in window, yr = null;
xt && "documentMode" in document && (yr = document.documentMode);
var oh = xt && "TextEvent" in window && !yr, td = xt && (!js || yr && 8 < yr && 11 >= yr), Ma = " ", Ia = !1;
function nd(e, t) {
  switch (e) {
    case "keyup":
      return rh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function rd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var hn = !1;
function ih(e, t) {
  switch (e) {
    case "compositionend":
      return rd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ia = !0, Ma);
    case "textInput":
      return e = t.data, e === Ma && Ia ? null : e;
    default:
      return null;
  }
}
function lh(e, t) {
  if (hn) return e === "compositionend" || !js && nd(e, t) ? (e = ed(), Eo = Ms = zt = null, hn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return td && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sh[e.type] : t === "textarea";
}
function od(e, t, n, r) {
  Mc(r), t = Vo(t, "onChange"), 0 < t.length && (n = new Is("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var vr = null, Rr = null;
function ah(e) {
  gd(e, 0);
}
function xi(e) {
  var t = yn(e);
  if ($c(t)) return e;
}
function uh(e, t) {
  if (e === "change") return t;
}
var id = !1;
if (xt) {
  var Vi;
  if (xt) {
    var Ui = "oninput" in document;
    if (!Ui) {
      var ja = document.createElement("div");
      ja.setAttribute("oninput", "return;"), Ui = typeof ja.oninput == "function";
    }
    Vi = Ui;
  } else Vi = !1;
  id = Vi && (!document.documentMode || 9 < document.documentMode);
}
function Fa() {
  vr && (vr.detachEvent("onpropertychange", ld), Rr = vr = null);
}
function ld(e) {
  if (e.propertyName === "value" && xi(Rr)) {
    var t = [];
    od(t, Rr, e, Os(e)), Fc(ah, t);
  }
}
function ch(e, t, n) {
  e === "focusin" ? (Fa(), vr = t, Rr = n, vr.attachEvent("onpropertychange", ld)) : e === "focusout" && Fa();
}
function dh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xi(Rr);
}
function fh(e, t) {
  if (e === "click") return xi(t);
}
function ph(e, t) {
  if (e === "input" || e === "change") return xi(t);
}
function hh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qe = typeof Object.is == "function" ? Object.is : hh;
function Pr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!gl.call(t, o) || !qe(e[o], t[o])) return !1;
  }
  return !0;
}
function Da(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ba(e, t) {
  var n = Da(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Da(n);
  }
}
function sd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ad() {
  for (var e = window, t = Io(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Io(e.document);
  }
  return t;
}
function Fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function gh(e) {
  var t = ad(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Fs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Ba(n, i);
        var l = Ba(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var mh = xt && "documentMode" in document && 11 >= document.documentMode, gn = null, Al = null, wr = null, Ml = !1;
function Ha(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ml || gn == null || gn !== Io(r) || (r = gn, "selectionStart" in r && Fs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wr && Pr(wr, r) || (wr = r, r = Vo(Al, "onSelect"), 0 < r.length && (t = new Is("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
}
function lo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var mn = { animationend: lo("Animation", "AnimationEnd"), animationiteration: lo("Animation", "AnimationIteration"), animationstart: lo("Animation", "AnimationStart"), transitionend: lo("Transition", "TransitionEnd") }, Wi = {}, ud = {};
xt && (ud = document.createElement("div").style, "AnimationEvent" in window || (delete mn.animationend.animation, delete mn.animationiteration.animation, delete mn.animationstart.animation), "TransitionEvent" in window || delete mn.transitionend.transition);
function ki(e) {
  if (Wi[e]) return Wi[e];
  if (!mn[e]) return e;
  var t = mn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ud) return Wi[e] = t[n];
  return e;
}
var cd = ki("animationend"), dd = ki("animationiteration"), fd = ki("animationstart"), pd = ki("transitionend"), hd = /* @__PURE__ */ new Map(), Va = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vt(e, t) {
  hd.set(e, t), sn(t, [e]);
}
for (var Ki = 0; Ki < Va.length; Ki++) {
  var Qi = Va[Ki], yh = Qi.toLowerCase(), vh = Qi[0].toUpperCase() + Qi.slice(1);
  Vt(yh, "on" + vh);
}
Vt(cd, "onAnimationEnd");
Vt(dd, "onAnimationIteration");
Vt(fd, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(pd, "onTransitionEnd");
Mn("onMouseEnter", ["mouseout", "mouseover"]);
Mn("onMouseLeave", ["mouseout", "mouseover"]);
Mn("onPointerEnter", ["pointerout", "pointerover"]);
Mn("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wh = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function Ua(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, yp(r, t, void 0, e), e.currentTarget = null;
}
function gd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Ua(o, s, u), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Ua(o, s, u), i = a;
      }
    }
  }
  if (jo) throw e = Ol, jo = !1, Ol = null, e;
}
function V(e, t) {
  var n = t[Dl];
  n === void 0 && (n = t[Dl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (md(t, e, 2, !1), n.add(r));
}
function Gi(e, t, n) {
  var r = 0;
  t && (r |= 4), md(n, e, r, t);
}
var so = "_reactListening" + Math.random().toString(36).slice(2);
function Ar(e) {
  if (!e[so]) {
    e[so] = !0, bc.forEach(function(n) {
      n !== "selectionchange" && (wh.has(n) || Gi(n, !1, e), Gi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || (t[so] = !0, Gi("selectionchange", !1, t));
  }
}
function md(e, t, n, r) {
  switch (qc(t)) {
    case 1:
      var o = Pp;
      break;
    case 4:
      o = Ap;
      break;
    default:
      o = As;
  }
  n = o.bind(null, t, n, e), o = void 0, !Nl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Yi(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        l = l.return;
      }
      for (; s !== null; ) {
        if (l = Xt(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Fc(function() {
    var u = i, c = Os(n), f = [];
    e: {
      var h = hd.get(e);
      if (h !== void 0) {
        var y = Is, m = e;
        switch (e) {
          case "keypress":
            if (Lo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Yp;
            break;
          case "focusin":
            m = "focus", y = Hi;
            break;
          case "focusout":
            m = "blur", y = Hi;
            break;
          case "beforeblur":
          case "afterblur":
            y = Hi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Ra;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = _p;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Jp;
            break;
          case cd:
          case dd:
          case fd:
            y = Dp;
            break;
          case pd:
            y = eh;
            break;
          case "scroll":
            y = Mp;
            break;
          case "wheel":
            y = nh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Hp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Aa;
        }
        var w = (t & 4) !== 0, x = !w && e === "scroll", d = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var v = g.stateNode;
          if (g.tag === 5 && v !== null && (g = v, d !== null && (v = $r(p, d), v != null && w.push(Mr(p, v, g)))), x) break;
          p = p.return;
        }
        0 < w.length && (h = new y(h, m, null, n, c), f.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== Tl && (m = n.relatedTarget || n.fromElement) && (Xt(m) || m[kt])) break e;
        if ((y || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (m = n.relatedTarget || n.toElement, y = u, m = m ? Xt(m) : null, m !== null && (x = an(m), m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (y = null, m = u), y !== m)) {
          if (w = Ra, v = "onMouseLeave", d = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = Aa, v = "onPointerLeave", d = "onPointerEnter", p = "pointer"), x = y == null ? h : yn(y), g = m == null ? h : yn(m), h = new w(v, p + "leave", y, n, c), h.target = x, h.relatedTarget = g, v = null, Xt(c) === u && (w = new w(d, p + "enter", m, n, c), w.target = g, w.relatedTarget = x, v = w), x = v, y && m) t: {
            for (w = y, d = m, p = 0, g = w; g; g = cn(g)) p++;
            for (g = 0, v = d; v; v = cn(v)) g++;
            for (; 0 < p - g; ) w = cn(w), p--;
            for (; 0 < g - p; ) d = cn(d), g--;
            for (; p--; ) {
              if (w === d || d !== null && w === d.alternate) break t;
              w = cn(w), d = cn(d);
            }
            w = null;
          }
          else w = null;
          y !== null && Wa(f, h, y, w, !1), m !== null && x !== null && Wa(f, x, m, w, !0);
        }
      }
      e: {
        if (h = u ? yn(u) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var k = uh;
        else if (_a(h)) if (id) k = ph;
        else {
          k = dh;
          var b = ch;
        }
        else (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = fh);
        if (k && (k = k(e, u))) {
          od(f, k, n, c);
          break e;
        }
        b && b(e, h, u), e === "focusout" && (b = h._wrapperState) && b.controlled && h.type === "number" && Sl(h, "number", h.value);
      }
      switch (b = u ? yn(u) : window, e) {
        case "focusin":
          (_a(b) || b.contentEditable === "true") && (gn = b, Al = u, wr = null);
          break;
        case "focusout":
          wr = Al = gn = null;
          break;
        case "mousedown":
          Ml = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ml = !1, Ha(f, n, c);
          break;
        case "selectionchange":
          if (mh) break;
        case "keydown":
        case "keyup":
          Ha(f, n, c);
      }
      var L;
      if (js) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else hn ? nd(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (td && n.locale !== "ko" && (hn || C !== "onCompositionStart" ? C === "onCompositionEnd" && hn && (L = ed()) : (zt = c, Ms = "value" in zt ? zt.value : zt.textContent, hn = !0)), b = Vo(u, C), 0 < b.length && (C = new Pa(C, e, null, n, c), f.push({ event: C, listeners: b }), L ? C.data = L : (L = rd(n), L !== null && (C.data = L)))), (L = oh ? ih(e, n) : lh(e, n)) && (u = Vo(u, "onBeforeInput"), 0 < u.length && (c = new Pa("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = L));
    }
    gd(f, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = $r(e, n), i != null && r.unshift(Mr(e, i, o)), i = $r(e, t), i != null && r.push(Mr(e, i, o))), e = e.return;
  }
  return r;
}
function cn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wa(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = $r(n, i), a != null && l.unshift(Mr(n, a, s))) : o || (a = $r(n, i), a != null && l.push(Mr(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var xh = /\r\n?/g, kh = /\u0000|\uFFFD/g;
function Ka(e) {
  return (typeof e == "string" ? e : "" + e).replace(xh, `
`).replace(kh, "");
}
function ao(e, t, n) {
  if (t = Ka(t), Ka(e) !== t && n) throw Error(S(425));
}
function Uo() {
}
var Il = null, _l = null;
function jl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Fl = typeof setTimeout == "function" ? setTimeout : void 0, Sh = typeof clearTimeout == "function" ? clearTimeout : void 0, Qa = typeof Promise == "function" ? Promise : void 0, bh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qa < "u" ? function(e) {
  return Qa.resolve(null).then(e).catch(Eh);
} : Fl;
function Eh(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xi(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), zr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  zr(t);
}
function It(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ga(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kn = Math.random().toString(36).slice(2), st = "__reactFiber$" + Kn, Ir = "__reactProps$" + Kn, kt = "__reactContainer$" + Kn, Dl = "__reactEvents$" + Kn, Lh = "__reactListeners$" + Kn, Ch = "__reactHandles$" + Kn;
function Xt(e) {
  var t = e[st];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[kt] || n[st]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ga(e); e !== null; ) {
        if (n = e[st]) return n;
        e = Ga(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Gr(e) {
  return e = e[st] || e[kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Si(e) {
  return e[Ir] || null;
}
var Bl = [], vn = -1;
function Ut(e) {
  return { current: e };
}
function U(e) {
  0 > vn || (e.current = Bl[vn], Bl[vn] = null, vn--);
}
function H(e, t) {
  vn++, Bl[vn] = e.current, e.current = t;
}
var Ht = {}, ve = Ut(Ht), $e = Ut(!1), tn = Ht;
function In(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function Wo() {
  U($e), U(ve);
}
function Ya(e, t, n) {
  if (ve.current !== Ht) throw Error(S(168));
  H(ve, t), H($e, n);
}
function yd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, cp(e) || "Unknown", o));
  return G({}, n, r);
}
function Ko(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, tn = ve.current, H(ve, e), H($e, $e.current), !0;
}
function Xa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = yd(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, U($e), U(ve), H(ve, e)) : U($e), H($e, n);
}
var ht = null, bi = !1, Zi = !1;
function vd(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function Th(e) {
  bi = !0, vd(e);
}
function Wt() {
  if (!Zi && ht !== null) {
    Zi = !0;
    var e = 0, t = F;
    try {
      var n = ht;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ht = null, bi = !1;
    } catch (o) {
      throw ht !== null && (ht = ht.slice(e + 1)), Vc(zs, Wt), o;
    } finally {
      F = t, Zi = !1;
    }
  }
  return null;
}
var wn = [], xn = 0, Qo = null, Go = 0, Fe = [], De = 0, nn = null, gt = 1, mt = "";
function Gt(e, t) {
  wn[xn++] = Go, wn[xn++] = Qo, Qo = e, Go = t;
}
function wd(e, t, n) {
  Fe[De++] = gt, Fe[De++] = mt, Fe[De++] = nn, nn = e;
  var r = gt;
  e = mt;
  var o = 32 - Ze(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Ze(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, gt = 1 << 32 - Ze(t) + o | n << o | r, mt = i + e;
  } else gt = 1 << i | n << o | r, mt = e;
}
function Ds(e) {
  e.return !== null && (Gt(e, 1), wd(e, 1, 0));
}
function Bs(e) {
  for (; e === Qo; ) Qo = wn[--xn], wn[xn] = null, Go = wn[--xn], wn[xn] = null;
  for (; e === nn; ) nn = Fe[--De], Fe[De] = null, mt = Fe[--De], Fe[De] = null, gt = Fe[--De], Fe[De] = null;
}
var Ae = null, Pe = null, W = !1, Xe = null;
function xd(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Za(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Pe = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Pe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: gt, overflow: mt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Pe = null, !0) : !1;
    default:
      return !1;
  }
}
function Hl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vl(e) {
  if (W) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!Za(e, t)) {
        if (Hl(e)) throw Error(S(418));
        t = It(n.nextSibling);
        var r = Ae;
        t && Za(e, t) ? xd(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Ae = e);
      }
    } else {
      if (Hl(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, W = !1, Ae = e;
    }
  }
}
function Ja(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ae = e;
}
function uo(e) {
  if (e !== Ae) return !1;
  if (!W) return Ja(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !jl(e.type, e.memoizedProps)), t && (t = Pe)) {
    if (Hl(e)) throw kd(), Error(S(418));
    for (; t; ) xd(e, t), t = It(t.nextSibling);
  }
  if (Ja(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = It(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = Ae ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function kd() {
  for (var e = Pe; e; ) e = It(e.nextSibling);
}
function _n() {
  Pe = Ae = null, W = !1;
}
function Hs(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
var $h = Et.ReactCurrentBatchConfig;
function qn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function co(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function qa(e) {
  var t = e._init;
  return t(e._payload);
}
function Sd(e) {
  function t(d, p) {
    if (e) {
      var g = d.deletions;
      g === null ? (d.deletions = [p], d.flags |= 16) : g.push(p);
    }
  }
  function n(d, p) {
    if (!e) return null;
    for (; p !== null; ) t(d, p), p = p.sibling;
    return null;
  }
  function r(d, p) {
    for (d = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? d.set(p.key, p) : d.set(p.index, p), p = p.sibling;
    return d;
  }
  function o(d, p) {
    return d = Dt(d, p), d.index = 0, d.sibling = null, d;
  }
  function i(d, p, g) {
    return d.index = g, e ? (g = d.alternate, g !== null ? (g = g.index, g < p ? (d.flags |= 2, p) : g) : (d.flags |= 2, p)) : (d.flags |= 1048576, p);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, p, g, v) {
    return p === null || p.tag !== 6 ? (p = ol(g, d.mode, v), p.return = d, p) : (p = o(p, g), p.return = d, p);
  }
  function a(d, p, g, v) {
    var k = g.type;
    return k === pn ? c(d, p, g.props.children, v, g.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Tt && qa(k) === p.type) ? (v = o(p, g.props), v.ref = qn(d, p, g), v.return = d, v) : (v = Ro(g.type, g.key, g.props, null, d.mode, v), v.ref = qn(d, p, g), v.return = d, v);
  }
  function u(d, p, g, v) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = il(g, d.mode, v), p.return = d, p) : (p = o(p, g.children || []), p.return = d, p);
  }
  function c(d, p, g, v, k) {
    return p === null || p.tag !== 7 ? (p = en(g, d.mode, v, k), p.return = d, p) : (p = o(p, g), p.return = d, p);
  }
  function f(d, p, g) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = ol("" + p, d.mode, g), p.return = d, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case qr:
          return g = Ro(p.type, p.key, p.props, null, d.mode, g), g.ref = qn(d, null, p), g.return = d, g;
        case fn:
          return p = il(p, d.mode, g), p.return = d, p;
        case Tt:
          var v = p._init;
          return f(d, v(p._payload), g);
      }
      if (ar(p) || Gn(p)) return p = en(p, d.mode, g, null), p.return = d, p;
      co(d, p);
    }
    return null;
  }
  function h(d, p, g, v) {
    var k = p !== null ? p.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return k !== null ? null : s(d, p, "" + g, v);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case qr:
          return g.key === k ? a(d, p, g, v) : null;
        case fn:
          return g.key === k ? u(d, p, g, v) : null;
        case Tt:
          return k = g._init, h(
            d,
            p,
            k(g._payload),
            v
          );
      }
      if (ar(g) || Gn(g)) return k !== null ? null : c(d, p, g, v, null);
      co(d, g);
    }
    return null;
  }
  function y(d, p, g, v, k) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return d = d.get(g) || null, s(p, d, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case qr:
          return d = d.get(v.key === null ? g : v.key) || null, a(p, d, v, k);
        case fn:
          return d = d.get(v.key === null ? g : v.key) || null, u(p, d, v, k);
        case Tt:
          var b = v._init;
          return y(d, p, g, b(v._payload), k);
      }
      if (ar(v) || Gn(v)) return d = d.get(g) || null, c(p, d, v, k, null);
      co(p, v);
    }
    return null;
  }
  function m(d, p, g, v) {
    for (var k = null, b = null, L = p, C = p = 0, E = null; L !== null && C < g.length; C++) {
      L.index > C ? (E = L, L = null) : E = L.sibling;
      var T = h(d, L, g[C], v);
      if (T === null) {
        L === null && (L = E);
        break;
      }
      e && L && T.alternate === null && t(d, L), p = i(T, p, C), b === null ? k = T : b.sibling = T, b = T, L = E;
    }
    if (C === g.length) return n(d, L), W && Gt(d, C), k;
    if (L === null) {
      for (; C < g.length; C++) L = f(d, g[C], v), L !== null && (p = i(L, p, C), b === null ? k = L : b.sibling = L, b = L);
      return W && Gt(d, C), k;
    }
    for (L = r(d, L); C < g.length; C++) E = y(L, d, C, g[C], v), E !== null && (e && E.alternate !== null && L.delete(E.key === null ? C : E.key), p = i(E, p, C), b === null ? k = E : b.sibling = E, b = E);
    return e && L.forEach(function(Y) {
      return t(d, Y);
    }), W && Gt(d, C), k;
  }
  function w(d, p, g, v) {
    var k = Gn(g);
    if (typeof k != "function") throw Error(S(150));
    if (g = k.call(g), g == null) throw Error(S(151));
    for (var b = k = null, L = p, C = p = 0, E = null, T = g.next(); L !== null && !T.done; C++, T = g.next()) {
      L.index > C ? (E = L, L = null) : E = L.sibling;
      var Y = h(d, L, T.value, v);
      if (Y === null) {
        L === null && (L = E);
        break;
      }
      e && L && Y.alternate === null && t(d, L), p = i(Y, p, C), b === null ? k = Y : b.sibling = Y, b = Y, L = E;
    }
    if (T.done) return n(
      d,
      L
    ), W && Gt(d, C), k;
    if (L === null) {
      for (; !T.done; C++, T = g.next()) T = f(d, T.value, v), T !== null && (p = i(T, p, C), b === null ? k = T : b.sibling = T, b = T);
      return W && Gt(d, C), k;
    }
    for (L = r(d, L); !T.done; C++, T = g.next()) T = y(L, d, C, T.value, v), T !== null && (e && T.alternate !== null && L.delete(T.key === null ? C : T.key), p = i(T, p, C), b === null ? k = T : b.sibling = T, b = T);
    return e && L.forEach(function(he) {
      return t(d, he);
    }), W && Gt(d, C), k;
  }
  function x(d, p, g, v) {
    if (typeof g == "object" && g !== null && g.type === pn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case qr:
          e: {
            for (var k = g.key, b = p; b !== null; ) {
              if (b.key === k) {
                if (k = g.type, k === pn) {
                  if (b.tag === 7) {
                    n(d, b.sibling), p = o(b, g.props.children), p.return = d, d = p;
                    break e;
                  }
                } else if (b.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Tt && qa(k) === b.type) {
                  n(d, b.sibling), p = o(b, g.props), p.ref = qn(d, b, g), p.return = d, d = p;
                  break e;
                }
                n(d, b);
                break;
              } else t(d, b);
              b = b.sibling;
            }
            g.type === pn ? (p = en(g.props.children, d.mode, v, g.key), p.return = d, d = p) : (v = Ro(g.type, g.key, g.props, null, d.mode, v), v.ref = qn(d, p, g), v.return = d, d = v);
          }
          return l(d);
        case fn:
          e: {
            for (b = g.key; p !== null; ) {
              if (p.key === b) if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                n(d, p.sibling), p = o(p, g.children || []), p.return = d, d = p;
                break e;
              } else {
                n(d, p);
                break;
              }
              else t(d, p);
              p = p.sibling;
            }
            p = il(g, d.mode, v), p.return = d, d = p;
          }
          return l(d);
        case Tt:
          return b = g._init, x(d, p, b(g._payload), v);
      }
      if (ar(g)) return m(d, p, g, v);
      if (Gn(g)) return w(d, p, g, v);
      co(d, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(d, p.sibling), p = o(p, g), p.return = d, d = p) : (n(d, p), p = ol(g, d.mode, v), p.return = d, d = p), l(d)) : n(d, p);
  }
  return x;
}
var jn = Sd(!0), bd = Sd(!1), Yo = Ut(null), Xo = null, kn = null, Vs = null;
function Us() {
  Vs = kn = Xo = null;
}
function Ws(e) {
  var t = Yo.current;
  U(Yo), e._currentValue = t;
}
function Ul(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function On(e, t) {
  Xo = e, Vs = kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null);
}
function Ue(e) {
  var t = e._currentValue;
  if (Vs !== e) if (e = { context: e, memoizedValue: t, next: null }, kn === null) {
    if (Xo === null) throw Error(S(308));
    kn = e, Xo.dependencies = { lanes: 0, firstContext: e };
  } else kn = kn.next = e;
  return t;
}
var Zt = null;
function Ks(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
function Ed(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Ks(t)) : (n.next = o.next, o.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function Qs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ld(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, _ & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, St(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Ks(r)) : (t.next = o.next, o.next = t), r.interleaved = t, St(e, n);
}
function Co(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Rs(e, n);
  }
}
function eu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Zo(e, t, n, r) {
  var o = e.updateQueue;
  $t = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? i = u : l.next = u, l = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var f = o.baseState;
    l = 0, c = u = a = null, s = i;
    do {
      var h = s.lane, y = s.eventTime;
      if ((r & h) === h) {
        c !== null && (c = c.next = {
          eventTime: y,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var m = e, w = s;
          switch (h = t, y = n, w.tag) {
            case 1:
              if (m = w.payload, typeof m == "function") {
                f = m.call(y, f, h);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = w.payload, h = typeof m == "function" ? m.call(y, f, h) : m, h == null) break e;
              f = G({}, f, h);
              break e;
            case 2:
              $t = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [s] : h.push(s));
      } else y = { eventTime: y, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = y, a = f) : c = c.next = y, l |= h;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        h = s, s = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    on |= l, e.lanes = l, e.memoizedState = f;
  }
}
function tu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(S(191, o));
      o.call(r);
    }
  }
}
var Yr = {}, ct = Ut(Yr), _r = Ut(Yr), jr = Ut(Yr);
function Jt(e) {
  if (e === Yr) throw Error(S(174));
  return e;
}
function Gs(e, t) {
  switch (H(jr, t), H(_r, e), H(ct, Yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = El(t, e);
  }
  U(ct), H(ct, t);
}
function Fn() {
  U(ct), U(_r), U(jr);
}
function Cd(e) {
  Jt(jr.current);
  var t = Jt(ct.current), n = El(t, e.type);
  t !== n && (H(_r, e), H(ct, n));
}
function Ys(e) {
  _r.current === e && (U(ct), U(_r));
}
var K = Ut(0);
function Jo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Ji = [];
function Xs() {
  for (var e = 0; e < Ji.length; e++) Ji[e]._workInProgressVersionPrimary = null;
  Ji.length = 0;
}
var To = Et.ReactCurrentDispatcher, qi = Et.ReactCurrentBatchConfig, rn = 0, Q = null, oe = null, ae = null, qo = !1, xr = !1, Fr = 0, Nh = 0;
function ge() {
  throw Error(S(321));
}
function Zs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Js(e, t, n, r, o, i) {
  if (rn = i, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, To.current = e === null || e.memoizedState === null ? Ph : Ah, e = n(r, o), xr) {
    i = 0;
    do {
      if (xr = !1, Fr = 0, 25 <= i) throw Error(S(301));
      i += 1, ae = oe = null, t.updateQueue = null, To.current = Mh, e = n(r, o);
    } while (xr);
  }
  if (To.current = ei, t = oe !== null && oe.next !== null, rn = 0, ae = oe = Q = null, qo = !1, t) throw Error(S(300));
  return e;
}
function qs() {
  var e = Fr !== 0;
  return Fr = 0, e;
}
function it() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ae === null ? Q.memoizedState = ae = e : ae = ae.next = e, ae;
}
function We() {
  if (oe === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ae === null ? Q.memoizedState : ae.next;
  if (t !== null) ae = t, oe = e;
  else {
    if (e === null) throw Error(S(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ae === null ? Q.memoizedState = ae = e : ae = ae.next = e;
  }
  return ae;
}
function Dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function el(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = oe, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((rn & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = f, l = r) : a = a.next = f, Q.lanes |= c, on |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, qe(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Q.lanes |= i, on |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tl(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    qe(i, t.memoizedState) || (Te = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Td() {
}
function $d(e, t) {
  var n = Q, r = We(), o = t(), i = !qe(r.memoizedState, o);
  if (i && (r.memoizedState = o, Te = !0), r = r.queue, ea(zd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ae !== null && ae.memoizedState.tag & 1) {
    if (n.flags |= 2048, Br(9, Od.bind(null, n, r, o, t), void 0, null), ue === null) throw Error(S(349));
    rn & 30 || Nd(n, t, o);
  }
  return o;
}
function Nd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Od(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Rd(t) && Pd(e);
}
function zd(e, t, n) {
  return n(function() {
    Rd(t) && Pd(e);
  });
}
function Rd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function Pd(e) {
  var t = St(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function nu(e) {
  var t = it();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Rh.bind(null, Q, e), [t.memoizedState, e];
}
function Br(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ad() {
  return We().memoizedState;
}
function $o(e, t, n, r) {
  var o = it();
  Q.flags |= e, o.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ei(e, t, n, r) {
  var o = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (oe !== null) {
    var l = oe.memoizedState;
    if (i = l.destroy, r !== null && Zs(r, l.deps)) {
      o.memoizedState = Br(t, n, i, r);
      return;
    }
  }
  Q.flags |= e, o.memoizedState = Br(1 | t, n, i, r);
}
function ru(e, t) {
  return $o(8390656, 8, e, t);
}
function ea(e, t) {
  return Ei(2048, 8, e, t);
}
function Md(e, t) {
  return Ei(4, 2, e, t);
}
function Id(e, t) {
  return Ei(4, 4, e, t);
}
function _d(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function jd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ei(4, 4, _d.bind(null, t, e), n);
}
function ta() {
}
function Fd(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Dd(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Bd(e, t, n) {
  return rn & 21 ? (qe(n, t) || (n = Kc(), Q.lanes |= n, on |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n);
}
function Oh(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = qi.transition;
  qi.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, qi.transition = r;
  }
}
function Hd() {
  return We().memoizedState;
}
function zh(e, t, n) {
  var r = Ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Vd(e)) Ud(t, n);
  else if (n = Ed(e, t, n, r), n !== null) {
    var o = ke();
    Je(n, e, r, o), Wd(n, t, r);
  }
}
function Rh(e, t, n) {
  var r = Ft(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Vd(e)) Ud(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, qe(s, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Ks(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Ed(e, t, o, r), n !== null && (o = ke(), Je(n, e, r, o), Wd(n, t, r));
  }
}
function Vd(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function Ud(e, t) {
  xr = qo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Wd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Rs(e, n);
  }
}
var ei = { readContext: Ue, useCallback: ge, useContext: ge, useEffect: ge, useImperativeHandle: ge, useInsertionEffect: ge, useLayoutEffect: ge, useMemo: ge, useReducer: ge, useRef: ge, useState: ge, useDebugValue: ge, useDeferredValue: ge, useTransition: ge, useMutableSource: ge, useSyncExternalStore: ge, useId: ge, unstable_isNewReconciler: !1 }, Ph = { readContext: Ue, useCallback: function(e, t) {
  return it().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ue, useEffect: ru, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $o(
    4194308,
    4,
    _d.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return $o(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return $o(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = it();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = it();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = zh.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = it();
  return e = { current: e }, t.memoizedState = e;
}, useState: nu, useDebugValue: ta, useDeferredValue: function(e) {
  return it().memoizedState = e;
}, useTransition: function() {
  var e = nu(!1), t = e[0];
  return e = Oh.bind(null, e[1]), it().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, o = it();
  if (W) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ue === null) throw Error(S(349));
    rn & 30 || Nd(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, ru(zd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Br(9, Od.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = it(), t = ue.identifierPrefix;
  if (W) {
    var n = mt, r = gt;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Fr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Nh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ah = {
  readContext: Ue,
  useCallback: Fd,
  useContext: Ue,
  useEffect: ea,
  useImperativeHandle: jd,
  useInsertionEffect: Md,
  useLayoutEffect: Id,
  useMemo: Dd,
  useReducer: el,
  useRef: Ad,
  useState: function() {
    return el(Dr);
  },
  useDebugValue: ta,
  useDeferredValue: function(e) {
    var t = We();
    return Bd(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = el(Dr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: Td,
  useSyncExternalStore: $d,
  useId: Hd,
  unstable_isNewReconciler: !1
}, Mh = { readContext: Ue, useCallback: Fd, useContext: Ue, useEffect: ea, useImperativeHandle: jd, useInsertionEffect: Md, useLayoutEffect: Id, useMemo: Dd, useReducer: tl, useRef: Ad, useState: function() {
  return tl(Dr);
}, useDebugValue: ta, useDeferredValue: function(e) {
  var t = We();
  return oe === null ? t.memoizedState = e : Bd(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = tl(Dr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: Td, useSyncExternalStore: $d, useId: Hd, unstable_isNewReconciler: !1 };
function Qe(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), o = Ft(e), i = vt(r, o);
  i.payload = t, n != null && (i.callback = n), t = _t(e, i, o), t !== null && (Je(t, e, o, r), Co(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), o = Ft(e), i = vt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = _t(e, i, o), t !== null && (Je(t, e, o, r), Co(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ke(), r = Ft(e), o = vt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = _t(e, o, r), t !== null && (Je(t, e, r, n), Co(t, e, r));
} };
function ou(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(o, i) : !0;
}
function Kd(e, t, n) {
  var r = !1, o = Ht, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ue(i) : (o = Ne(t) ? tn : ve.current, r = t.contextTypes, i = (r = r != null) ? In(e, o) : Ht), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Li, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function iu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function Kl(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Qs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Ue(i) : (i = Ne(t) ? tn : ve.current, o.context = In(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Wl(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Li.enqueueReplaceState(o, o.state, null), Zo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = "", r = t;
    do
      n += up(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function nl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Ih = typeof WeakMap == "function" ? WeakMap : Map;
function Qd(e, t, n) {
  n = vt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ni || (ni = !0, rs = r), Ql(e, t);
  }, n;
}
function Gd(e, t, n) {
  n = vt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ql(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ql(e, t), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function lu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ih();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Xh.bind(null, e, t, n), t.then(e, e));
}
function su(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function au(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, _t(n, t, 1))), n.lanes |= 1), e);
}
var _h = Et.ReactCurrentOwner, Te = !1;
function xe(e, t, n, r) {
  t.child = e === null ? bd(t, null, n, r) : jn(t, e.child, n, r);
}
function uu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return On(t, o), r = Js(e, t, n, r, i, o), n = qs(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, bt(e, t, o)) : (W && n && Ds(t), t.flags |= 1, xe(e, t, r, o), t.child);
}
function cu(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ua(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Yd(e, t, i, r, o)) : (e = Ro(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(l, r) && e.ref === t.ref) return bt(e, t, o);
  }
  return t.flags |= 1, e = Dt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Yd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Pr(i, r) && e.ref === t.ref) if (Te = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Te = !0);
    else return t.lanes = e.lanes, bt(e, t, o);
  }
  return Gl(e, t, n, r, o);
}
function Xd(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(bn, Re), Re |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, H(bn, Re), Re |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, H(bn, Re), Re |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, H(bn, Re), Re |= r;
  return xe(e, t, o, n), t.child;
}
function Zd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Gl(e, t, n, r, o) {
  var i = Ne(n) ? tn : ve.current;
  return i = In(t, i), On(t, o), n = Js(e, t, n, r, i, o), r = qs(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, bt(e, t, o)) : (W && r && Ds(t), t.flags |= 1, xe(e, t, n, o), t.child);
}
function du(e, t, n, r, o) {
  if (Ne(n)) {
    var i = !0;
    Ko(t);
  } else i = !1;
  if (On(t, o), t.stateNode === null) No(e, t), Kd(t, n, r), Kl(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ue(u) : (u = Ne(n) ? tn : ve.current, u = In(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && iu(t, l, r, u), $t = !1;
    var h = t.memoizedState;
    l.state = h, Zo(t, r, l, o), a = t.memoizedState, s !== r || h !== a || $e.current || $t ? (typeof c == "function" && (Wl(t, n, c, r), a = t.memoizedState), (s = $t || ou(t, n, s, r, h, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Ld(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Qe(t.type, s), l.props = u, f = t.pendingProps, h = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ue(a) : (a = Ne(n) ? tn : ve.current, a = In(t, a));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || h !== a) && iu(t, l, r, a), $t = !1, h = t.memoizedState, l.state = h, Zo(t, r, l, o);
    var m = t.memoizedState;
    s !== f || h !== m || $e.current || $t ? (typeof y == "function" && (Wl(t, n, y, r), m = t.memoizedState), (u = $t || ou(t, n, u, r, h, m, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Yl(e, t, n, r, i, o);
}
function Yl(e, t, n, r, o, i) {
  Zd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Xa(t, n, !1), bt(e, t, i);
  r = t.stateNode, _h.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = jn(t, e.child, null, i), t.child = jn(t, null, s, i)) : xe(e, t, s, i), t.memoizedState = r.state, o && Xa(t, n, !0), t.child;
}
function Jd(e) {
  var t = e.stateNode;
  t.pendingContext ? Ya(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ya(e, t.context, !1), Gs(e, t.containerInfo);
}
function fu(e, t, n, r, o) {
  return _n(), Hs(o), t.flags |= 256, xe(e, t, n, r), t.child;
}
var Xl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qd(e, t, n) {
  var r = t.pendingProps, o = K.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), H(K, o & 1), e === null)
    return Vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = $i(l, r, 0, null), e = en(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Zl(n), t.memoizedState = Xl, e) : na(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return jh(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Dt(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Dt(s, i) : (i = en(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Zl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Xl, r;
  }
  return i = e.child, e = i.sibling, r = Dt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function na(e, t) {
  return t = $i({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function fo(e, t, n, r) {
  return r !== null && Hs(r), jn(t, e.child, null, n), e = na(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function jh(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = nl(Error(S(422))), fo(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = $i({ mode: "visible", children: r.children }, o, 0, null), i = en(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && jn(t, e.child, null, l), t.child.memoizedState = Zl(l), t.memoizedState = Xl, i);
  if (!(t.mode & 1)) return fo(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(S(419)), r = nl(i, r, void 0), fo(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, Te || s) {
    if (r = ue, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, St(e, o), Je(r, e, o, -1));
    }
    return aa(), r = nl(Error(S(421))), fo(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Zh.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Pe = It(o.nextSibling), Ae = t, W = !0, Xe = null, e !== null && (Fe[De++] = gt, Fe[De++] = mt, Fe[De++] = nn, gt = e.id, mt = e.overflow, nn = t), t = na(t, r.children), t.flags |= 4096, t);
}
function pu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ul(e.return, t, n);
}
function rl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function ef(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (xe(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && pu(e, n, t);
      else if (e.tag === 19) pu(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (H(K, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Jo(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), rl(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Jo(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      rl(t, !0, n, null, i);
      break;
    case "together":
      rl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function No(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), on |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Fh(e, t, n) {
  switch (t.tag) {
    case 3:
      Jd(t), _n();
      break;
    case 5:
      Cd(t);
      break;
    case 1:
      Ne(t.type) && Ko(t);
      break;
    case 4:
      Gs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      H(Yo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (H(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? qd(e, t, n) : (H(K, K.current & 1), e = bt(e, t, n), e !== null ? e.sibling : null);
      H(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ef(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), H(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Xd(e, t, n);
  }
  return bt(e, t, n);
}
var tf, Jl, nf, rf;
tf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Jl = function() {
};
nf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Jt(ct.current);
    var i = null;
    switch (n) {
      case "input":
        o = xl(e, o), r = xl(e, r), i = [];
        break;
      case "select":
        o = G({}, o, { value: void 0 }), r = G({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = bl(e, o), r = bl(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Uo);
    }
    Ll(n, r);
    var l;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Cr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Cr.hasOwnProperty(u) ? (a != null && u === "onScroll" && V("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
rf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function er(e, t) {
  if (!W) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Dh(e, t, n) {
  var r = t.pendingProps;
  switch (Bs(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return Ne(t.type) && Wo(), me(t), null;
    case 3:
      return r = t.stateNode, Fn(), U($e), U(ve), Xs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (uo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (ls(Xe), Xe = null))), Jl(e, t), me(t), null;
    case 5:
      Ys(t);
      var o = Jt(jr.current);
      if (n = t.type, e !== null && t.stateNode != null) nf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return me(t), null;
        }
        if (e = Jt(ct.current), uo(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[st] = t, r[Ir] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < cr.length; o++) V(cr[o], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V(
                "error",
                r
              ), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Sa(r, i), V("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, V("invalid", r);
              break;
            case "textarea":
              Ea(r, i), V("invalid", r);
          }
          Ll(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ao(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ao(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Cr.hasOwnProperty(l) && s != null && l === "onScroll" && V("scroll", r);
          }
          switch (n) {
            case "input":
              eo(r), ba(r, i, !0);
              break;
            case "textarea":
              eo(r), La(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Uo);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[st] = t, e[Ir] = r, tf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Cl(n, r), n) {
              case "dialog":
                V("cancel", e), V("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < cr.length; o++) V(cr[o], e);
                o = r;
                break;
              case "source":
                V("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                V(
                  "error",
                  e
                ), V("load", e), o = r;
                break;
              case "details":
                V("toggle", e), o = r;
                break;
              case "input":
                Sa(e, r), o = xl(e, r), V("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = G({}, r, { value: void 0 }), V("invalid", e);
                break;
              case "textarea":
                Ea(e, r), o = bl(e, r), V("invalid", e);
                break;
              default:
                o = r;
            }
            Ll(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? Ac(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Rc(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Tr(e, a) : typeof a == "number" && Tr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Cr.hasOwnProperty(i) ? a != null && i === "onScroll" && V("scroll", e) : a != null && Cs(e, i, a, l));
            }
            switch (n) {
              case "input":
                eo(e), ba(e, r, !1);
                break;
              case "textarea":
                eo(e), La(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Cn(e, !!r.multiple, i, !1) : r.defaultValue != null && Cn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Uo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) rf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Jt(jr.current), Jt(ct.current), uo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[st] = t, (i = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
            case 3:
              ao(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ao(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[st] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (U(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Pe !== null && t.mode & 1 && !(t.flags & 128)) kd(), _n(), t.flags |= 98560, i = !1;
        else if (i = uo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(S(317));
            i[st] = t;
          } else _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), i = !1;
        } else Xe !== null && (ls(Xe), Xe = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? le === 0 && (le = 3) : aa())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Fn(), Jl(e, t), e === null && Ar(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Ws(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && Wo(), me(t), null;
    case 19:
      if (U(K), i = t.memoizedState, i === null) return me(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) er(i, !1);
      else {
        if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Jo(e), l !== null) {
            for (t.flags |= 128, er(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return H(K, K.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && q() > Bn && (t.flags |= 128, r = !0, er(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Jo(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), er(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !W) return me(t), null;
        } else 2 * q() - i.renderingStartTime > Bn && n !== 1073741824 && (t.flags |= 128, r = !0, er(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = q(), t.sibling = null, n = K.current, H(K, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return sa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Re & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Bh(e, t) {
  switch (Bs(t), t.tag) {
    case 1:
      return Ne(t.type) && Wo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Fn(), U($e), U(ve), Xs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ys(t), null;
    case 13:
      if (U(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        _n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(K), null;
    case 4:
      return Fn(), null;
    case 10:
      return Ws(t.type._context), null;
    case 22:
    case 23:
      return sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var po = !1, ye = !1, Hh = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function Sn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function ql(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var hu = !1;
function Vh(e, t) {
  if (Il = Bo, e = ad(), Fs(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, s = -1, a = -1, u = 0, c = 0, f = e, h = null;
        t: for (; ; ) {
          for (var y; f !== n || o !== 0 && f.nodeType !== 3 || (s = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (y = f.firstChild) !== null; )
            h = f, f = y;
          for (; ; ) {
            if (f === e) break t;
            if (h === n && ++u === o && (s = l), h === i && ++c === r && (a = l), (y = f.nextSibling) !== null) break;
            f = h, h = f.parentNode;
          }
          f = y;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_l = { focusedElem: e, selectionRange: n }, Bo = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var m = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (m !== null) {
            var w = m.memoizedProps, x = m.memoizedState, d = t.stateNode, p = d.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Qe(t.type, w), x);
            d.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (v) {
      X(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
  }
  return m = hu, hu = !1, m;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && ql(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ci(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function es(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function of(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, of(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[st], delete t[Ir], delete t[Dl], delete t[Lh], delete t[Ch])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function lf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || lf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ts(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Uo));
  else if (r !== 4 && (e = e.child, e !== null)) for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), e = e.sibling;
}
function ns(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), e = e.sibling;
}
var de = null, Ge = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) sf(e, t, n), n = n.sibling;
}
function sf(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function") try {
    ut.onCommitFiberUnmount(vi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ye || Sn(n, t);
    case 6:
      var r = de, o = Ge;
      de = null, Lt(e, t, n), de = r, Ge = o, de !== null && (Ge ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null && (Ge ? (e = de, n = n.stateNode, e.nodeType === 8 ? Xi(e.parentNode, n) : e.nodeType === 1 && Xi(e, n), zr(e)) : Xi(de, n.stateNode));
      break;
    case 4:
      r = de, o = Ge, de = n.stateNode.containerInfo, Ge = !0, Lt(e, t, n), de = r, Ge = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && ql(n, t, l), o = o.next;
        } while (o !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (!ye && (Sn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        X(n, t, s);
      }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, Lt(e, t, n), ye = r) : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function mu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hh()), t.forEach(function(r) {
      var o = Jh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            de = s.stateNode, Ge = !1;
            break e;
          case 3:
            de = s.stateNode.containerInfo, Ge = !0;
            break e;
          case 4:
            de = s.stateNode.containerInfo, Ge = !0;
            break e;
        }
        s = s.return;
      }
      if (de === null) throw Error(S(160));
      sf(i, l, o), de = null, Ge = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      X(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) af(t, e), t = t.sibling;
}
function af(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), nt(e), r & 4) {
        try {
          kr(3, e, e.return), Ci(3, e);
        } catch (w) {
          X(e, e.return, w);
        }
        try {
          kr(5, e, e.return);
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 1:
      Ke(t, e), nt(e), r & 512 && n !== null && Sn(n, n.return);
      break;
    case 5:
      if (Ke(t, e), nt(e), r & 512 && n !== null && Sn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Tr(o, "");
        } catch (w) {
          X(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Nc(o, i), Cl(s, l);
          var u = Cl(s, i);
          for (l = 0; l < a.length; l += 2) {
            var c = a[l], f = a[l + 1];
            c === "style" ? Ac(o, f) : c === "dangerouslySetInnerHTML" ? Rc(o, f) : c === "children" ? Tr(o, f) : Cs(o, c, f, u);
          }
          switch (s) {
            case "input":
              kl(o, i);
              break;
            case "textarea":
              Oc(o, i);
              break;
            case "select":
              var h = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? Cn(o, !!i.multiple, y, !1) : h !== !!i.multiple && (i.defaultValue != null ? Cn(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Cn(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Ir] = i;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Ke(t, e), nt(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Ke(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        zr(t.containerInfo);
      } catch (w) {
        X(e, e.return, w);
      }
      break;
    case 4:
      Ke(t, e), nt(e);
      break;
    case 13:
      Ke(t, e), nt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ia = q())), r & 4 && mu(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (u = ye) || c, Ke(t, e), ye = u) : Ke(t, e), nt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (O = e, c = e.child; c !== null; ) {
          for (f = O = c; O !== null; ) {
            switch (h = O, y = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                kr(4, h, h.return);
                break;
              case 1:
                Sn(h, h.return);
                var m = h.stateNode;
                if (typeof m.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                  } catch (w) {
                    X(r, n, w);
                  }
                }
                break;
              case 5:
                Sn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  vu(f);
                  continue;
                }
            }
            y !== null ? (y.return = h, O = y) : vu(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Pc("display", l));
              } catch (w) {
                X(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (w) {
              X(e, e.return, w);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      Ke(t, e), nt(e), r & 4 && mu(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), nt(e);
  }
}
function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Tr(o, ""), r.flags &= -33);
          var i = gu(e);
          ns(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = gu(e);
          ts(e, s, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Uh(e, t, n) {
  O = e, uf(e);
}
function uf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || po;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || ye;
        s = po;
        var u = ye;
        if (po = l, (ye = a) && !u) for (O = o; O !== null; ) l = O, a = l.child, l.tag === 22 && l.memoizedState !== null ? wu(o) : a !== null ? (a.return = l, O = a) : wu(o);
        for (; i !== null; ) O = i, uf(i), i = i.sibling;
        O = o, po = s, ye = u;
      }
      yu(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, O = i) : yu(e);
  }
}
function yu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ye || Ci(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ye) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && tu(t, i, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              tu(t, l, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && zr(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(S(163));
        }
        ye || t.flags & 512 && es(t);
      } catch (h) {
        X(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function vu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function wu(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ci(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, o, a);
            }
          }
          var i = t.return;
          try {
            es(t);
          } catch (a) {
            X(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            es(t);
          } catch (a) {
            X(t, l, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, O = s;
      break;
    }
    O = t.return;
  }
}
var Wh = Math.ceil, ti = Et.ReactCurrentDispatcher, ra = Et.ReactCurrentOwner, Ve = Et.ReactCurrentBatchConfig, _ = 0, ue = null, re = null, fe = 0, Re = 0, bn = Ut(0), le = 0, Hr = null, on = 0, Ti = 0, oa = 0, Sr = null, Ce = null, ia = 0, Bn = 1 / 0, pt = null, ni = !1, rs = null, jt = null, ho = !1, Rt = null, ri = 0, br = 0, os = null, Oo = -1, zo = 0;
function ke() {
  return _ & 6 ? q() : Oo !== -1 ? Oo : Oo = q();
}
function Ft(e) {
  return e.mode & 1 ? _ & 2 && fe !== 0 ? fe & -fe : $h.transition !== null ? (zo === 0 && (zo = Kc()), zo) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qc(e.type)), e) : 1;
}
function Je(e, t, n, r) {
  if (50 < br) throw br = 0, os = null, Error(S(185));
  Kr(e, n, r), (!(_ & 2) || e !== ue) && (e === ue && (!(_ & 2) && (Ti |= n), le === 4 && Ot(e, fe)), Oe(e, r), n === 1 && _ === 0 && !(t.mode & 1) && (Bn = q() + 500, bi && Wt()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  $p(e, t);
  var r = Do(e, e === ue ? fe : 0);
  if (r === 0) n !== null && $a(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && $a(n), t === 1) e.tag === 0 ? Th(xu.bind(null, e)) : vd(xu.bind(null, e)), bh(function() {
      !(_ & 6) && Wt();
    }), n = null;
    else {
      switch (Qc(r)) {
        case 1:
          n = zs;
          break;
        case 4:
          n = Uc;
          break;
        case 16:
          n = Fo;
          break;
        case 536870912:
          n = Wc;
          break;
        default:
          n = Fo;
      }
      n = yf(n, cf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function cf(e, t) {
  if (Oo = -1, zo = 0, _ & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n) return null;
  var r = Do(e, e === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = oi(e, r);
  else {
    t = r;
    var o = _;
    _ |= 2;
    var i = ff();
    (ue !== e || fe !== t) && (pt = null, Bn = q() + 500, qt(e, t));
    do
      try {
        Gh();
        break;
      } catch (s) {
        df(e, s);
      }
    while (!0);
    Us(), ti.current = i, _ = o, re !== null ? t = 0 : (ue = null, fe = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (o = zl(e), o !== 0 && (r = o, t = is(e, o))), t === 1) throw n = Hr, qt(e, 0), Ot(e, r), Oe(e, q()), n;
    if (t === 6) Ot(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Kh(o) && (t = oi(e, r), t === 2 && (i = zl(e), i !== 0 && (r = i, t = is(e, i))), t === 1)) throw n = Hr, qt(e, 0), Ot(e, r), Oe(e, q()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Yt(e, Ce, pt);
          break;
        case 3:
          if (Ot(e, r), (r & 130023424) === r && (t = ia + 500 - q(), 10 < t)) {
            if (Do(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ke(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Fl(Yt.bind(null, e, Ce, pt), t);
            break;
          }
          Yt(e, Ce, pt);
          break;
        case 4:
          if (Ot(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Ze(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Fl(Yt.bind(null, e, Ce, pt), r);
            break;
          }
          Yt(e, Ce, pt);
          break;
        case 5:
          Yt(e, Ce, pt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Oe(e, q()), e.callbackNode === n ? cf.bind(null, e) : null;
}
function is(e, t) {
  var n = Sr;
  return e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256), e = oi(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && ls(t)), e;
}
function ls(e) {
  Ce === null ? Ce = e : Ce.push.apply(Ce, e);
}
function Kh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!qe(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Ot(e, t) {
  for (t &= ~oa, t &= ~Ti, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xu(e) {
  if (_ & 6) throw Error(S(327));
  zn();
  var t = Do(e, 0);
  if (!(t & 1)) return Oe(e, q()), null;
  var n = oi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zl(e);
    r !== 0 && (t = r, n = is(e, r));
  }
  if (n === 1) throw n = Hr, qt(e, 0), Ot(e, t), Oe(e, q()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yt(e, Ce, pt), Oe(e, q()), null;
}
function la(e, t) {
  var n = _;
  _ |= 1;
  try {
    return e(t);
  } finally {
    _ = n, _ === 0 && (Bn = q() + 500, bi && Wt());
  }
}
function ln(e) {
  Rt !== null && Rt.tag === 0 && !(_ & 6) && zn();
  var t = _;
  _ |= 1;
  var n = Ve.transition, r = F;
  try {
    if (Ve.transition = null, F = 1, e) return e();
  } finally {
    F = r, Ve.transition = n, _ = t, !(_ & 6) && Wt();
  }
}
function sa() {
  Re = bn.current, U(bn);
}
function qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Sh(n)), re !== null) for (n = re.return; n !== null; ) {
    var r = n;
    switch (Bs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Wo();
        break;
      case 3:
        Fn(), U($e), U(ve), Xs();
        break;
      case 5:
        Ys(r);
        break;
      case 4:
        Fn();
        break;
      case 13:
        U(K);
        break;
      case 19:
        U(K);
        break;
      case 10:
        Ws(r.type._context);
        break;
      case 22:
      case 23:
        sa();
    }
    n = n.return;
  }
  if (ue = e, re = e = Dt(e.current, null), fe = Re = t, le = 0, Hr = null, oa = Ti = on = 0, Ce = Sr = null, Zt !== null) {
    for (t = 0; t < Zt.length; t++) if (n = Zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    Zt = null;
  }
  return e;
}
function df(e, t) {
  do {
    var n = re;
    try {
      if (Us(), To.current = ei, qo) {
        for (var r = Q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        qo = !1;
      }
      if (rn = 0, ae = oe = Q = null, xr = !1, Fr = 0, ra.current = null, n === null || n.return === null) {
        le = 1, Hr = t, re = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, a = t;
        if (t = fe, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var y = su(l);
          if (y !== null) {
            y.flags &= -257, au(y, l, s, i, t), y.mode & 1 && lu(i, u, t), t = y, a = u;
            var m = t.updateQueue;
            if (m === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else m.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              lu(i, u, t), aa();
              break e;
            }
            a = Error(S(426));
          }
        } else if (W && s.mode & 1) {
          var x = su(l);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), au(x, l, s, i, t), Hs(Dn(a, s));
            break e;
          }
        }
        i = a = Dn(a, s), le !== 4 && (le = 2), Sr === null ? Sr = [i] : Sr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Qd(i, a, t);
              eu(i, d);
              break e;
            case 1:
              s = a;
              var p = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (jt === null || !jt.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = Gd(i, s, t);
                eu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      hf(n);
    } catch (k) {
      t = k, re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ff() {
  var e = ti.current;
  return ti.current = ei, e === null ? ei : e;
}
function aa() {
  (le === 0 || le === 3 || le === 2) && (le = 4), ue === null || !(on & 268435455) && !(Ti & 268435455) || Ot(ue, fe);
}
function oi(e, t) {
  var n = _;
  _ |= 2;
  var r = ff();
  (ue !== e || fe !== t) && (pt = null, qt(e, t));
  do
    try {
      Qh();
      break;
    } catch (o) {
      df(e, o);
    }
  while (!0);
  if (Us(), _ = n, ti.current = r, re !== null) throw Error(S(261));
  return ue = null, fe = 0, le;
}
function Qh() {
  for (; re !== null; ) pf(re);
}
function Gh() {
  for (; re !== null && !wp(); ) pf(re);
}
function pf(e) {
  var t = mf(e.alternate, e, Re);
  e.memoizedProps = e.pendingProps, t === null ? hf(e) : re = t, ra.current = null;
}
function hf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Bh(n, t), n !== null) {
        n.flags &= 32767, re = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, re = null;
        return;
      }
    } else if (n = Dh(n, t, Re), n !== null) {
      re = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Yt(e, t, n) {
  var r = F, o = Ve.transition;
  try {
    Ve.transition = null, F = 1, Yh(e, t, n, r);
  } finally {
    Ve.transition = o, F = r;
  }
  return null;
}
function Yh(e, t, n, r) {
  do
    zn();
  while (Rt !== null);
  if (_ & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Np(e, i), e === ue && (re = ue = null, fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ho || (ho = !0, yf(Fo, function() {
    return zn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ve.transition, Ve.transition = null;
    var l = F;
    F = 1;
    var s = _;
    _ |= 4, ra.current = null, Vh(e, n), af(n, e), gh(_l), Bo = !!Il, _l = Il = null, e.current = n, Uh(n), xp(), _ = s, F = l, Ve.transition = i;
  } else e.current = n;
  if (ho && (ho = !1, Rt = e, ri = o), i = e.pendingLanes, i === 0 && (jt = null), bp(n.stateNode), Oe(e, q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ni) throw ni = !1, e = rs, rs = null, e;
  return ri & 1 && e.tag !== 0 && zn(), i = e.pendingLanes, i & 1 ? e === os ? br++ : (br = 0, os = e) : br = 0, Wt(), null;
}
function zn() {
  if (Rt !== null) {
    var e = Qc(ri), t = Ve.transition, n = F;
    try {
      if (Ve.transition = null, F = 16 > e ? 16 : e, Rt === null) var r = !1;
      else {
        if (e = Rt, Rt = null, ri = 0, _ & 6) throw Error(S(331));
        var o = _;
        for (_ |= 4, O = e.current; O !== null; ) {
          var i = O, l = i.child;
          if (O.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, O = f;
                  else for (; O !== null; ) {
                    c = O;
                    var h = c.sibling, y = c.return;
                    if (of(c), c === u) {
                      O = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = y, O = h;
                      break;
                    }
                    O = y;
                  }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var w = m.child;
                if (w !== null) {
                  m.child = null;
                  do {
                    var x = w.sibling;
                    w.sibling = null, w = x;
                  } while (w !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, O = l;
          else e: for (; O !== null; ) {
            if (i = O, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                kr(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, O = d;
              break e;
            }
            O = i.return;
          }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          l = O;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) g.return = l, O = g;
          else e: for (l = p; O !== null; ) {
            if (s = O, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ci(9, s);
              }
            } catch (k) {
              X(s, s.return, k);
            }
            if (s === l) {
              O = null;
              break e;
            }
            var v = s.sibling;
            if (v !== null) {
              v.return = s.return, O = v;
              break e;
            }
            O = s.return;
          }
        }
        if (_ = o, Wt(), ut && typeof ut.onPostCommitFiberRoot == "function") try {
          ut.onPostCommitFiberRoot(vi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      F = n, Ve.transition = t;
    }
  }
  return !1;
}
function ku(e, t, n) {
  t = Dn(n, t), t = Qd(e, t, 1), e = _t(e, t, 1), t = ke(), e !== null && (Kr(e, 1, t), Oe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) ku(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ku(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
        e = Dn(n, e), e = Gd(t, e, 1), t = _t(t, e, 1), e = ke(), t !== null && (Kr(t, 1, e), Oe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Xh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (fe & n) === n && (le === 4 || le === 3 && (fe & 130023424) === fe && 500 > q() - ia ? qt(e, 0) : oa |= n), Oe(e, t);
}
function gf(e, t) {
  t === 0 && (e.mode & 1 ? (t = ro, ro <<= 1, !(ro & 130023424) && (ro = 4194304)) : t = 1);
  var n = ke();
  e = St(e, t), e !== null && (Kr(e, t, n), Oe(e, n));
}
function Zh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), gf(e, n);
}
function Jh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), gf(e, n);
}
var mf;
mf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) Te = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, Fh(e, t, n);
    Te = !!(e.flags & 131072);
  }
  else Te = !1, W && t.flags & 1048576 && wd(t, Go, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      No(e, t), e = t.pendingProps;
      var o = In(t, ve.current);
      On(t, n), o = Js(null, t, r, e, o, n);
      var i = qs();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (i = !0, Ko(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Qs(t), o.updater = Li, t.stateNode = o, o._reactInternals = t, Kl(t, r, e, n), t = Yl(null, t, r, !0, i, n)) : (t.tag = 0, W && i && Ds(t), xe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (No(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = eg(r), e = Qe(r, e), o) {
          case 0:
            t = Gl(null, t, r, e, n);
            break e;
          case 1:
            t = du(null, t, r, e, n);
            break e;
          case 11:
            t = uu(null, t, r, e, n);
            break e;
          case 14:
            t = cu(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), Gl(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), du(e, t, r, o, n);
    case 3:
      e: {
        if (Jd(t), e === null) throw Error(S(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Ld(e, t), Zo(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Dn(Error(S(423)), t), t = fu(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Dn(Error(S(424)), t), t = fu(e, t, r, n, o);
          break e;
        } else for (Pe = It(t.stateNode.containerInfo.firstChild), Ae = t, W = !0, Xe = null, n = bd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_n(), r === o) {
            t = bt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Cd(t), e === null && Vl(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, jl(r, o) ? l = null : i !== null && jl(r, i) && (t.flags |= 32), Zd(e, t), xe(e, t, l, n), t.child;
    case 6:
      return e === null && Vl(t), null;
    case 13:
      return qd(e, t, n);
    case 4:
      return Gs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = jn(t, null, r, n) : xe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), uu(e, t, r, o, n);
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, H(Yo, r._currentValue), r._currentValue = l, i !== null) if (qe(i.value, l)) {
          if (i.children === o.children && !$e.current) {
            t = bt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = vt(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ul(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(S(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ul(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        xe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, On(t, n), o = Ue(o), r = r(o), t.flags |= 1, xe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Qe(r, t.pendingProps), o = Qe(r.type, o), cu(e, t, r, o, n);
    case 15:
      return Yd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), No(e, t), t.tag = 1, Ne(r) ? (e = !0, Ko(t)) : e = !1, On(t, n), Kd(t, r, o), Kl(t, r, o, n), Yl(null, t, r, !0, e, n);
    case 19:
      return ef(e, t, n);
    case 22:
      return Xd(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function yf(e, t) {
  return Vc(e, t);
}
function qh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new qh(e, t, n, r);
}
function ua(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function eg(e) {
  if (typeof e == "function") return ua(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === $s) return 11;
    if (e === Ns) return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ro(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") ua(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case pn:
      return en(n.children, o, i, t);
    case Ts:
      l = 8, o |= 8;
      break;
    case ml:
      return e = He(12, n, t, o | 2), e.elementType = ml, e.lanes = i, e;
    case yl:
      return e = He(13, n, t, o), e.elementType = yl, e.lanes = i, e;
    case vl:
      return e = He(19, n, t, o), e.elementType = vl, e.lanes = i, e;
    case Cc:
      return $i(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ec:
          l = 10;
          break e;
        case Lc:
          l = 9;
          break e;
        case $s:
          l = 11;
          break e;
        case Ns:
          l = 14;
          break e;
        case Tt:
          l = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = He(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function en(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function $i(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = Cc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ol(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function il(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function tg(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fi(0), this.expirationTimes = Fi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ca(e, t, n, r, o, i, l, s, a) {
  return e = new tg(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = He(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qs(i), e;
}
function ng(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function vf(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return yd(e, n, t);
  }
  return t;
}
function wf(e, t, n, r, o, i, l, s, a) {
  return e = ca(n, r, !0, e, o, i, l, s, a), e.context = vf(null), n = e.current, r = ke(), o = Ft(n), i = vt(r, o), i.callback = t ?? null, _t(n, i, o), e.current.lanes = o, Kr(e, o, r), Oe(e, r), e;
}
function Ni(e, t, n, r) {
  var o = t.current, i = ke(), l = Ft(o);
  return n = vf(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _t(o, t, l), e !== null && (Je(e, o, l, i), Co(e, o, l)), l;
}
function ii(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Su(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function da(e, t) {
  Su(e, t), (e = e.alternate) && Su(e, t);
}
function rg() {
  return null;
}
var xf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function fa(e) {
  this._internalRoot = e;
}
Oi.prototype.render = fa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Ni(e, t, null, null);
};
Oi.prototype.unmount = fa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function() {
      Ni(null, e, null, null);
    }), t[kt] = null;
  }
};
function Oi(e) {
  this._internalRoot = e;
}
Oi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Xc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++) ;
    Nt.splice(n, 0, e), n === 0 && Jc(e);
  }
};
function pa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bu() {
}
function og(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = ii(l);
        i.call(u);
      };
    }
    var l = wf(t, r, e, 0, null, !1, !1, "", bu);
    return e._reactRootContainer = l, e[kt] = l.current, Ar(e.nodeType === 8 ? e.parentNode : e), ln(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = ii(a);
      s.call(u);
    };
  }
  var a = ca(e, 0, !1, null, null, !1, !1, "", bu);
  return e._reactRootContainer = a, e[kt] = a.current, Ar(e.nodeType === 8 ? e.parentNode : e), ln(function() {
    Ni(t, a, n, r);
  }), a;
}
function Ri(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = ii(l);
        s.call(a);
      };
    }
    Ni(t, l, e, o);
  } else l = og(n, t, e, o, r);
  return ii(l);
}
Gc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 && (Rs(t, n | 1), Oe(t, q()), !(_ & 6) && (Bn = q() + 500, Wt()));
      }
      break;
    case 13:
      ln(function() {
        var r = St(e, 1);
        if (r !== null) {
          var o = ke();
          Je(r, e, 1, o);
        }
      }), da(e, 1);
  }
};
Ps = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = ke();
      Je(t, e, 134217728, n);
    }
    da(e, 134217728);
  }
};
Yc = function(e) {
  if (e.tag === 13) {
    var t = Ft(e), n = St(e, t);
    if (n !== null) {
      var r = ke();
      Je(n, e, t, r);
    }
    da(e, t);
  }
};
Xc = function() {
  return F;
};
Zc = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
  }
};
$l = function(e, t, n) {
  switch (t) {
    case "input":
      if (kl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Si(r);
            if (!o) throw Error(S(90));
            $c(r), kl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Oc(e, n);
      break;
    case "select":
      t = n.value, t != null && Cn(e, !!n.multiple, t, !1);
  }
};
_c = la;
jc = ln;
var ig = { usingClientEntryPoint: !1, Events: [Gr, yn, Si, Mc, Ic, la] }, tr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, lg = { bundleType: tr.bundleType, version: tr.version, rendererPackageName: tr.rendererPackageName, rendererConfig: tr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: tr.findFiberByHostInstance || rg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!go.isDisabled && go.supportsFiber) try {
    vi = go.inject(lg), ut = go;
  } catch {
  }
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig;
_e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pa(t)) throw Error(S(200));
  return ng(e, t, null, n);
};
_e.createRoot = function(e, t) {
  if (!pa(e)) throw Error(S(299));
  var n = !1, r = "", o = xf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ca(e, 1, !1, null, null, n, !1, r, o), e[kt] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new fa(t);
};
_e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Bc(t), e = e === null ? null : e.stateNode, e;
};
_e.flushSync = function(e) {
  return ln(e);
};
_e.hydrate = function(e, t, n) {
  if (!zi(t)) throw Error(S(200));
  return Ri(null, e, t, !0, n);
};
_e.hydrateRoot = function(e, t, n) {
  if (!pa(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = xf;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = wf(t, null, e, 1, n ?? null, o, !1, i, l), e[kt] = t.current, Ar(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Oi(t);
};
_e.render = function(e, t, n) {
  if (!zi(t)) throw Error(S(200));
  return Ri(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function(e) {
  if (!zi(e)) throw Error(S(40));
  return e._reactRootContainer ? (ln(function() {
    Ri(null, null, e, !1, function() {
      e._reactRootContainer = null, e[kt] = null;
    });
  }), !0) : !1;
};
_e.unstable_batchedUpdates = la;
_e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zi(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Ri(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function kf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf);
    } catch (e) {
      console.error(e);
    }
}
kf(), xc.exports = _e;
var sg = xc.exports, Eu = sg;
hl.createRoot = Eu.createRoot, hl.hydrateRoot = Eu.hydrateRoot;
const li = "area11y:settings", ha = "area11y:hide-media", ag = "a11y-core:settings", ug = "a11y-core:hide-media";
function cg() {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = [
        [ag, li],
        [ug, ha]
      ];
      for (const [t, n] of e) {
        const r = window.localStorage.getItem(t);
        r !== null && (window.localStorage.getItem(n) === null && window.localStorage.setItem(n, r), window.localStorage.removeItem(t));
      }
    } catch {
    }
}
const ss = {
  fontSize: 100,
  contrast: !1,
  dyslexiaFont: !1,
  readableFont: !1,
  lineHeight: 1.4,
  letterSpacing: 0,
  reduceMotion: !1,
  highlightLinks: !1,
  theme: "light",
  bigCursor: !1,
  readAloud: !1,
  hideImages: !1,
  magnifier: !1
}, ll = "area11y-host-overrides", Vr = "area11y-themed-button", J = "area11y-dark-mode-active", ne = "area11y-night-shift-active", si = "area11y-night-solarize", we = "area11y-big-cursor-active", ai = "area11y-hide-media-active", Sf = `
    html.${ai} :where(img, video):not(#area11y-root *):not([data-area11y-ignore]):not([data-area11y-ignore] *) {
        object-fit: none !important;
        object-position: -99999px -99999px !important;
        background-color: #f4f4f5 !important;
        background-image: none !important;
    }
`, Be = "area11y-root", ft = "area11y-magnifier-active", ie = "area11y-magnifier-overlay", sl = "area11y-highlight-links-active", as = "#0f172a", bf = "#ffff00", Ef = "#ff0000", Hn = "p, span, a, li, dt, dd, label, blockquote, h1, h2, h3, h4, h5, h6, small, strong, em, pre, code, kbd, samp, td, th, caption, figcaption, summary, cite, time, address", ga = /* @__PURE__ */ new Set(["IMG", "VIDEO", "PICTURE", "CANVAS", "IFRAME"]), Qn = 'button, input, textarea, select, [role="button"]', Xr = "div, section, article, main, header, footer, nav, aside", se = {
  bg: "#111113",
  text: "#f5f5f5",
  link: "#f5f5f5",
  border: "#3a3a42",
  focus: "#60a5fa",
  // Clear elevation hierarchy so cards/sections are obviously visible against
  // the page: bg (#111113) < surface (cards) < button. The gaps are large
  // enough to read on screen, not the near-invisible dark-on-dark we had.
  surface: "#26262c",
  button: { bg: "#34343c", text: "#f5f5f5", border: "#45454d" }
}, ce = {
  bg: "#fff6e1",
  text: "#5b2b1e",
  link: "#8c1d18",
  border: "#d48a5a",
  focus: "#9c2a1a",
  // Clear elevation against the cream page: bg (#fff6e1) > surface (cards) >
  // button, each progressively deeper/warmer so they stay visibly separated.
  surface: "#f3e6c4",
  button: { bg: "#e9d09c", text: "#5b2b1e", border: "#cf8a52" }
}, Lu = `
    html.${J} {
        color-scheme: dark;
        background-color: ${se.bg} !important;
    }
    html.${J} body {
        background-color: ${se.bg} !important;
        color: ${se.text} !important;
    }
    html.${J} ${Hn} {
        color: ${se.text} !important;
    }
    html.${J} body > *:not(#${Be}):not(#${ie}) {
        background-color: ${se.bg} !important;
        color: ${se.text} !important;
    }
    html.${J} body :where(a):not(#${Be} *):not(#${ie} *) {
        color: ${se.link} !important;
    }
    html.${J} body :where(*:focus-visible):not(#${Be} *):not(#${ie} *) {
        outline: 3px solid ${se.focus} !important;
        outline-offset: 2px !important;
    }
    html.${J} body :where(svg, svg *):not(#${Be} *):not(#${ie} *) {
        stroke: ${se.text} !important;
        color: ${se.text} !important;
    }
    html.${J} body :where(img, video, picture):not(#${Be} *):not(#${ie} *) {
        filter: brightness(0.88) contrast(1.04);
    }
    html.${J} body .${Vr}:hover:not(#${Be} *):not(#${ie} *) {
        filter: brightness(1.3) !important;
    }
    html.${J} {
        scrollbar-color: ${se.border} ${se.bg};
    }
    html.${J} ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    html.${J} ::-webkit-scrollbar-track {
        background: ${se.bg};
    }
    html.${J} ::-webkit-scrollbar-thumb {
        background-color: ${se.border};
        border-radius: 999px;
        border: 3px solid ${se.bg};
    }
`, Cu = `
    html.${ne} {
        color-scheme: light;
        background-color: ${ce.bg} !important;
    }
    html.${ne} body {
        background-color: ${ce.bg} !important;
        color: ${ce.text} !important;
    }
    html.${ne} body > *:not(#${Be}):not(#${ie}) {
        background-color: ${ce.bg} !important;
        color: ${ce.text} !important;
    }
    html.${ne} body :where(a):not(#${Be} *):not(#${ie} *) {
        color: ${ce.link} !important;
    }
    html.${ne} body :where(*:focus-visible):not(#${Be} *):not(#${ie} *) {
        outline: 3px solid ${ce.focus} !important;
        outline-offset: 2px !important;
    }
    html.${ne} body :where(svg, svg *):not(#${Be} *):not(#${ie} *) {
        stroke: ${ce.text} !important;
        color: ${ce.text} !important;
    }
    html.${ne} {
        scrollbar-color: ${ce.border} ${ce.bg};
    }
    html.${ne} ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    html.${ne} ::-webkit-scrollbar-track {
        background: ${ce.bg};
    }
    html.${ne} ::-webkit-scrollbar-thumb {
        background-color: ${ce.border};
        border-radius: 999px;
        border: 3px solid ${ce.bg};
    }
    html.${ne} .${si} {
        filter: sepia(0.5) saturate(0.7) hue-rotate(-12deg) brightness(1.04) contrast(1.1) !important;
    }
    html.${ne} body .${Vr}:hover:not(#${Be} *):not(#${ie} *) {
        filter: brightness(0.95) !important;
    }
`;
let mo = /* @__PURE__ */ new WeakSet(), yo = /* @__PURE__ */ new WeakSet();
const dr = /* @__PURE__ */ new Set(), us = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), Tu = /* @__PURE__ */ new Set(), $u = /* @__PURE__ */ new Set(), lt = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new Set(), ds = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new Set();
let ui = /* @__PURE__ */ new WeakMap(), fr = 1, pr = null, hr = null, Rn = null, al = !1, ul = !1, Nu = !1, Ou = !1;
const ci = /* @__PURE__ */ new Set();
let Pn = null, En = !1;
const dg = `${Hn}, ${Qn}, ${Xr}`, zu = `${Hn}, ${Qn}`, wt = 15e3, fg = (e) => !!e.closest("[data-area11y-ignore]"), Me = (e) => !!e.closest(`#${Be}, #${ie}`) || fg(e), di = (e) => ga.has(e.tagName) || e instanceof SVGElement || Me(e) ? !1 : e.matches(Hn) || e.matches(Qn) || e.matches(Xr), vo = (e) => {
  for (const t of Array.from(e.childNodes))
    if (t.nodeType === Node.TEXT_NODE && t.textContent && t.textContent.trim().length > 0)
      return !0;
  return !1;
}, nr = /* @__PURE__ */ new Map();
let rt;
const Ru = "#010203", pg = (e) => {
  if (!e.includes("(") && !e.startsWith("#")) return null;
  if (nr.has(e)) return nr.get(e) || null;
  if (rt === void 0)
    try {
      const n = document.createElement("canvas");
      n.width = 1, n.height = 1, rt = n.getContext("2d", { willReadFrequently: !0 });
    } catch {
      rt = null;
    }
  let t = null;
  if (rt)
    try {
      if (rt.fillStyle = Ru, rt.fillStyle = e, rt.fillStyle !== Ru) {
        rt.clearRect(0, 0, 1, 1), rt.fillRect(0, 0, 1, 1);
        const [n, r, o, i] = rt.getImageData(0, 0, 1, 1).data;
        t = { r: n, g: r, b: o, a: i / 255 };
      }
    } catch {
      t = null;
    }
  return nr.size > 2e3 && nr.clear(), nr.set(e, t), t;
}, yt = (e) => {
  if (!e || e === "transparent") return null;
  const t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/) || [];
  if (t.length)
    return {
      r: Number(t[1]),
      g: Number(t[2]),
      b: Number(t[3]),
      a: t[4] == null ? 1 : Number(t[4])
    };
  const n = e.match(
    /rgba?\((\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)(?:\s*\/\s*([0-9.]+))?\)/
  ) || [];
  if (n.length)
    return {
      r: Number(n[1]),
      g: Number(n[2]),
      b: Number(n[3]),
      a: n[4] == null ? 1 : Number(n[4])
    };
  if (e.startsWith("#")) {
    const r = e.replace("#", "");
    if (r.length === 3) {
      const o = parseInt(r[0] + r[0], 16), i = parseInt(r[1] + r[1], 16), l = parseInt(r[2] + r[2], 16);
      return { r: o, g: i, b: l, a: 1 };
    }
    if (r.length === 6) {
      const o = parseInt(r.slice(0, 2), 16), i = parseInt(r.slice(2, 4), 16), l = parseInt(r.slice(4, 6), 16);
      return { r: o, g: i, b: l, a: 1 };
    }
  }
  return pg(e);
}, Po = (e, t, n) => {
  const o = [e, t, n].map((i) => i / 255).map(
    (i) => i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2];
}, hg = (e) => e != null && e.a > 0.12, Lf = (e, t, n) => {
  const r = e / 255, o = t / 255, i = n / 255, l = Math.max(r, o, i), s = Math.min(r, o, i), a = l - s;
  let u = 0, c = 0;
  const f = (l + s) / 2;
  if (a !== 0) {
    switch (c = a / (1 - Math.abs(2 * f - 1)), l) {
      case r:
        u = (o - i) / a % 6;
        break;
      case o:
        u = (i - r) / a + 2;
        break;
      default:
        u = (r - o) / a + 4;
    }
    u *= 60, u < 0 && (u += 360);
  }
  return { h: u, s: c, l: f };
}, gg = (e, t) => {
  const [n, r] = e > t ? [e, t] : [t, e];
  return (n + 0.05) / (r + 0.05);
}, An = (e) => !e || e.a <= 0.05, ps = (e) => {
  if (!e || e.a <= 0.05) return !1;
  const { s: t, l: n } = Lf(e.r, e.g, e.b);
  return t >= 0.35 && n >= 0.12 && n <= 0.85;
}, mg = (e) => {
  const t = e.match(
    /(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\([^()]*\)/gi
  ), n = [];
  for (const r of t || []) {
    const o = yt(r);
    o && n.push(o);
  }
  return n;
}, yg = (e) => {
  const t = e.matchAll(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g), n = [];
  for (const r of t) {
    const o = r[1];
    if (o.length === 3) {
      const i = parseInt(o[0] + o[0], 16), l = parseInt(o[1] + o[1], 16), s = parseInt(o[2] + o[2], 16);
      n.push({ r: i, g: l, b: s, a: 1 });
    } else {
      const i = parseInt(o.slice(0, 2), 16), l = parseInt(o.slice(2, 4), 16), s = parseInt(o.slice(4, 6), 16);
      n.push({ r: i, g: l, b: s, a: 1 });
    }
  }
  return n;
}, Pu = (e) => !e || !e.includes("gradient(") ? !1 : [
  ...mg(e),
  ...yg(e)
].some((n) => ps(n)), Au = (e) => ga.has(e.tagName) || e instanceof SVGElement || Me(e) ? !1 : e.matches(Xr) || e.matches(Qn), Cf = (e, t = wt) => {
  let n = 0;
  const r = e instanceof Element ? e : null;
  if (r && Au(r)) {
    const i = getComputedStyle(r), l = yt(i.backgroundColor), s = !An(l) && l !== null, a = Pu(i.backgroundImage);
    (s && ps(l) || a) && (r.classList.add(si), ci.add(r)), n += 1;
  }
  const o = e.querySelectorAll(
    `${Xr}, ${Qn}`
  );
  for (const i of Array.from(o)) {
    if (n >= t) break;
    if (!Au(i)) continue;
    const l = getComputedStyle(i), s = yt(l.backgroundColor), a = !An(s) && s !== null;
    !Pu(l.backgroundImage) && (!a || !ps(s)) || (i.classList.add(si), ci.add(i), n += 1);
  }
}, vg = () => {
  Pn || (Pn = new MutationObserver((e) => {
    for (const t of e)
      for (const n of Array.from(t.addedNodes))
        n instanceof Element && (Me(n) || Cf(n, wt));
  }), Pn.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}, wg = () => {
  Pn && (Pn.disconnect(), Pn = null), ci.forEach((e) => {
    e.classList.remove(si);
  }), ci.clear();
}, Qt = (e) => {
  if (!e || e.a <= 0.05) return !1;
  const { s: t } = Lf(e.r, e.g, e.b);
  return t >= 0.45;
}, xg = (e) => {
  let t = e, n = 6;
  for (; t && n > 0; ) {
    const r = getComputedStyle(t), o = yt(r.backgroundColor);
    if (!An(o))
      return o;
    t = t.parentElement, n -= 1;
  }
  return null;
}, B = (e, t, n, r, o) => {
  const i = r.get(e) || {};
  if (!i[t]) {
    const l = e instanceof HTMLElement ? [us, cs, lt].filter((s) => s !== r).map((s) => {
      var a;
      return (a = s.get(e)) == null ? void 0 : a[t];
    }).find(Boolean) : void 0;
    i[t] = l ? { ...l } : {
      value: e.style.getPropertyValue(t) || "",
      priority: e.style.getPropertyPriority(t) || ""
    }, r.set(e, i);
  }
  o.add(e), e.style.setProperty(t, n, "important");
}, Ct = (e, t) => {
  t.forEach((n) => {
    const r = e.get(n);
    r && (Object.entries(r).forEach(([o, i]) => {
      i && (i.value ? n.style.setProperty(o, i.value, i.priority || "") : n.style.removeProperty(o));
    }), e.delete(n));
  }), t.clear();
}, hs = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new Set(), kg = "path, circle, rect, ellipse, polygon, polyline, line", Mu = (e, t, n) => {
  const r = e.querySelectorAll("svg");
  for (const o of Array.from(r)) {
    if (Me(o)) continue;
    const i = o.querySelectorAll(kg), l = i.length ? Array.from(i) : [o];
    for (const s of l) {
      const a = yt(getComputedStyle(s).fill);
      if (!a || a.a < 0.05) continue;
      const u = Po(a.r, a.g, a.b), c = n === "dark" && u < 0.25, f = n === "night" && u > 0.7;
      (c || f) && B(
        s,
        "fill",
        t.text,
        hs,
        gs
      );
    }
  }
}, Iu = (e, t) => {
  if (!(e instanceof HTMLElement) || ga.has(e.tagName) || e instanceof SVGElement || Me(e)) return;
  let r = ui.get(e);
  if (!r) {
    const i = parseFloat(getComputedStyle(e).fontSize || "");
    if (!Number.isFinite(i) || i <= 0) return;
    r = i, ui.set(e, i);
  }
  const o = Math.max(1, r * t);
  B(
    e,
    "font-size",
    `${o.toFixed(3)}px`,
    ds,
    fs
  );
}, Tf = (e, t, n = wt) => {
  let r = 0;
  e instanceof Element && e.matches(zu) && (Iu(e, t), r += 1);
  const o = e.querySelectorAll(
    zu
  );
  for (const i of Array.from(o)) {
    if (r >= n) break;
    Iu(i, t), r += 1;
  }
}, Sg = () => {
  Rn || (Rn = new MutationObserver((e) => {
    for (const t of e)
      for (const n of Array.from(t.addedNodes))
        n instanceof Element && Tf(n, fr, wt);
  }), Rn.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}, _u = () => {
  Rn && (Rn.disconnect(), Rn = null);
}, rr = (e) => [
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth"
].map(
  (t) => parseFloat(String(e[t] || "0"))
).some((t) => t > 0), ju = (e, t, n, r, o, i) => {
  if (r.has(e) || (r.add(e), !(e instanceof HTMLElement)) || En && e.matches("a")) return;
  const l = getComputedStyle(e), s = yt(l.backgroundColor), a = yt(l.color), u = yt(l.borderColor), c = l.backgroundImage, f = l.mixBlendMode != null && l.mixBlendMode !== "normal", h = s && !An(s) ? s : xg(e), y = h ? Po(h.r, h.g, h.b) : null, m = a ? Po(a.r, a.g, a.b) : null, w = hg(s) || c !== "none", x = n === "night", d = w && (c !== "none" || Qt(s) || Qt(h)), p = w && !(!x && d) && (y !== null && (y > 0.45 || y < 0.12) || !x && (c !== "none" || Qt(s) || Qt(h))), g = yt(t.bg), v = g ? Po(g.r, g.g, g.b) : null, b = x && d && y !== null ? y : v, L = b !== null && m !== null ? gg(b, m) : null, C = e.matches(
    "[aria-pressed], [aria-checked], [aria-selected]"
  ), E = e.matches("a"), T = parseFloat(l.paddingLeft || "0") + parseFloat(l.paddingRight || "0"), Y = parseFloat(l.paddingTop || "0") + parseFloat(l.paddingBottom || "0"), he = parseFloat(l.borderTopLeftRadius || "0"), ee = T >= 8 || Y >= 4, Z = E && (s !== null && s.a > 0.12 || rr(l) || ee && (he > 0 || s !== null && s.a > 0.01 || c !== "none"));
  if ((e.matches(
    'button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"]'
  ) || Z) && !f) {
    B(e, "background-color", t.button.bg, o, i), B(e, "color", t.button.text, o, i), B(e, "border-color", t.button.border, o, i), e.classList.add(Vr), dr.add(e);
    return;
  }
  if (e.matches(Xr) && p && !(x && d) && !f) {
    const j = l.boxShadow != null && l.boxShadow !== "none", te = he >= 4 || j;
    B(
      e,
      "background-color",
      te ? t.surface : t.bg,
      o,
      i
    ), B(e, "color", t.text, o, i), rr(l) && B(e, "border-color", t.border, o, i);
  }
  if ((e.matches(Qn) || Z) && ((p && !(x && d) || C || // Text-labelled buttons whose background is effectively transparent
  // (e.g. a 4%-alpha "ghost" button) otherwise keep their original
  // text colour and look unthemed/black. Give them a real palette
  // surface so they read as proper buttons. Icon-only buttons (no
  // direct text) and intentionally colourful buttons are left alone.
  vo(e) && !d && !f) && !f && (B(
    e,
    "background-color",
    t.surface,
    o,
    i
  ), B(e, "color", t.text, o, i), rr(l) && B(
    e,
    "border-color",
    t.border,
    o,
    i
  )), rr(l) && !(x && d) && u && !An(u) && Qt(u) && B(
    e,
    "border-color",
    t.border,
    o,
    i
  )), E && !En && !f && B(e, "color", t.link, o, i), (e.matches(Hn) || vo(e)) && (!E || !En) && L !== null && L < 4.5 && m !== null && !f && B(e, "color", t.text, o, i), (e.matches(Hn) || vo(e)) && (!E || !En) && a && !An(a) && !f && Qt(a) && B(e, "color", t.text, o, i), u && u.a > 0 && rr(l) && !(x && d) && !f && Qt(u) && B(e, "border-color", t.border, o, i), n === "dark" && c !== "none" && c.includes("gradient(") && !c.includes("url(") && p && !f && B(e, "background-image", "none", o, i), n === "dark" && c.includes("url(") && w && e.children.length === 0 && !vo(e) && !f && B(e, "filter", "brightness(0.82)", o, i), f && n === "dark" && l.mixBlendMode === "multiply")
    B(e, "mix-blend-mode", "normal", o, i);
  else if (n === "dark") {
    const j = o.get(e), te = j == null ? void 0 : j["mix-blend-mode"];
    te && (te.value ? e.style.setProperty(
      "mix-blend-mode",
      te.value,
      te.priority || ""
    ) : e.style.removeProperty("mix-blend-mode"), delete j["mix-blend-mode"], Object.keys(j).length === 0 ? o.delete(e) : o.set(e, j));
  }
}, bg = () => {
  const e = document.querySelectorAll("a");
  for (const t of Array.from(e))
    t instanceof HTMLElement && (Me(t) || (B(
      t,
      "color",
      as,
      lt,
      Ye
    ), B(
      t,
      "text-decoration-color",
      as,
      lt,
      Ye
    ), B(
      t,
      "text-decoration-line",
      "underline",
      lt,
      Ye
    ), B(
      t,
      "background-color",
      bf,
      lt,
      Ye
    ), B(
      t,
      "outline",
      `3px solid ${Ef}`,
      lt,
      Ye
    ), B(
      t,
      "outline-offset",
      "2px",
      lt,
      Ye
    ), B(
      t,
      "border-radius",
      "2px",
      lt,
      Ye
    )));
}, Ao = /* @__PURE__ */ new Set(), ms = "area11y-iframe-baseline";
let ze = null;
const Eg = (e) => {
  try {
    const t = e.contentDocument;
    return t ? (t.location.href, t) : null;
  } catch {
    return null;
  }
}, Fu = (e) => {
  Ao.forEach((t) => {
    var n;
    try {
      const r = t.documentElement;
      r.classList.remove(e), r.classList.contains(J) || r.classList.contains(ne) || ((n = t.getElementById(ms)) == null || n.remove(), Ao.delete(t));
    } catch {
      Ao.delete(t);
    }
  });
}, ys = (e) => {
  const t = Eg(e);
  if (!t || !t.documentElement) return null;
  if (ze) {
    t.documentElement.classList.add(ze.activeClass);
    let n = t.getElementById(
      ms
    );
    n || (n = t.createElement("style"), n.id = ms, (t.head || t.documentElement).appendChild(n)), n.textContent = ze.baselineCss, Ao.add(t);
  }
  return t;
}, Du = (e, t, n) => {
  const r = ys(e);
  r != null && r.body && fi(r.body, t, n);
}, fi = (e, t, n) => {
  const r = e instanceof Element ? e : null;
  r && (di(r) && (t(r), n.count += 1), r.shadowRoot && !Me(r) && fi(r.shadowRoot, t, n), r instanceof HTMLIFrameElement && Du(r, t, n));
  const i = e.querySelectorAll("*");
  for (const l of Array.from(i)) {
    if (n.count >= n.limit) break;
    Me(l) || (l.shadowRoot && fi(l.shadowRoot, t, n), l instanceof HTMLIFrameElement && Du(l, t, n), di(l) && (t(l), n.count += 1));
  }
}, Bu = (e, t, n = wt) => {
  fi(e, t, { count: 0, limit: n });
}, Ln = (e, t, n) => {
  const r = e instanceof Element ? e : null;
  if (r && (di(r) && (n.push(r), t.count += 1), r.shadowRoot && !Me(r) && Ln(r.shadowRoot, t, n), r instanceof HTMLIFrameElement)) {
    const l = ys(r);
    l != null && l.body && Ln(l.body, t, n);
  }
  const i = e.querySelectorAll("*");
  for (const l of Array.from(i)) {
    if (t.count >= t.limit) break;
    if (!Me(l)) {
      if (l.shadowRoot && Ln(l.shadowRoot, t, n), l instanceof HTMLIFrameElement) {
        const s = ys(l);
        s != null && s.body && Ln(s.body, t, n);
      }
      di(l) && (n.push(l), t.count += 1);
    }
  }
}, Hu = (e) => typeof requestIdleCallback == "function" ? requestIdleCallback(e, { timeout: 500 }) : window.setTimeout(
  () => e({
    timeRemaining: () => 16,
    didTimeout: !0
  }),
  16
), wo = (e) => {
  e != null && (typeof cancelIdleCallback == "function" ? cancelIdleCallback(e) : window.clearTimeout(e));
}, Vu = (e, t, n) => {
  let r = 0;
  const o = (i) => {
    for (; r < e.length && (i.didTimeout || i.timeRemaining() > 4); ) {
      const l = e[r++];
      l.isConnected && t(l);
    }
    n(r < e.length ? Hu(o) : null);
  };
  n(Hu(o));
};
let or = null, ir = null;
const Lg = () => {
  if (typeof document > "u") return;
  const e = "area11y-no-transitions";
  if (document.getElementById(e)) return;
  const t = document.createElement("style");
  t.id = e, t.textContent = `*, *::before, *::after {
        transition: none !important;
        animation-duration: 0s !important;
        animation-delay: 0s !important;
    }`, document.head.appendChild(t), requestAnimationFrame(
    () => requestAnimationFrame(() => t.remove())
  );
}, Uu = (e, t, n) => {
  let r = null, o = !1;
  const i = () => {
    o = !1;
    const a = r;
    if (r = null, !a) return;
    const u = e === "dark" ? J : ne;
    if (document.documentElement.classList.contains(u))
      for (const c of a) {
        if (!c.isConnected || Me(c)) continue;
        n.delete(c);
        const f = c.querySelectorAll(dg);
        for (const h of Array.from(f)) n.delete(h);
        Bu(c, t);
      }
  }, l = (a) => {
    r || (r = /* @__PURE__ */ new Set()), r.add(a), o || (o = !0, requestAnimationFrame(i));
  }, s = new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const c of Array.from(u.addedNodes))
          c instanceof Element && (Me(c) || Bu(c, t, wt));
      else if (u.type === "attributes") {
        const c = u.target;
        if (!(c instanceof Element) || Me(c)) continue;
        l(c);
      }
  });
  s.observe(document.body, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [
      "class",
      "data-theme",
      "aria-pressed",
      "aria-checked",
      "aria-selected"
    ]
  }), e === "dark" ? pr = s : hr = s;
}, Wu = (e, t, n, r, o) => {
  o.push(t), n || r(!0);
}, mi = class mi {
  static setAssetBase(t) {
    this.assetBase = t.replace(/\/$/, "");
  }
  static enableDarkModeHybrid(t) {
    al = !0, document.documentElement.classList.add(J), ze = {
      activeClass: J,
      baselineCss: Lu
    }, Wu(
      "area11y-dark-baseline",
      Lu,
      Nu,
      (o) => {
        Nu = o;
      },
      t
    );
    const n = (o) => ju(
      o,
      se,
      "dark",
      mo,
      us,
      Tu
    );
    pr || Uu("dark", n, mo), wo(or), or = null;
    const r = [];
    Ln(
      document.body,
      { count: 0, limit: wt },
      r
    ), Vu(r, n, (o) => {
      or = o;
    }), Mu(document.body, se, "dark");
  }
  static disableDarkModeHybrid() {
    document.documentElement.classList.remove(J), al && (al = !1, (ze == null ? void 0 : ze.activeClass) === J && (ze = null), Fu(J), wo(or), or = null, pr && (pr.disconnect(), pr = null), Ct(us, Tu), Ct(hs, gs), mo = /* @__PURE__ */ new WeakSet(), dr.forEach((t) => t.classList.remove(Vr)), dr.clear());
  }
  static enableNightShiftHybrid(t) {
    ul = !0, document.documentElement.classList.add(ne), ze = {
      activeClass: ne,
      baselineCss: Cu
    }, Wu(
      "area11y-night-baseline",
      Cu,
      Ou,
      (o) => {
        Ou = o;
      },
      t
    );
    const n = (o) => ju(
      o,
      ce,
      "night",
      yo,
      cs,
      $u
    );
    hr || Uu("night", n, yo), wo(ir), ir = null;
    const r = [];
    Ln(
      document.body,
      { count: 0, limit: wt },
      r
    ), Vu(r, n, (o) => {
      ir = o;
    }), Cf(document.body, wt), vg(), Mu(document.body, ce, "night");
  }
  static disableNightShiftHybrid() {
    document.documentElement.classList.remove(ne), ul && (ul = !1, (ze == null ? void 0 : ze.activeClass) === ne && (ze = null), Fu(ne), wo(ir), ir = null, hr && (hr.disconnect(), hr = null), Ct(cs, $u), Ct(hs, gs), yo = /* @__PURE__ */ new WeakSet(), wg(), dr.forEach((t) => t.classList.remove(Vr)), dr.clear());
  }
  static applySettings(t) {
    var m, w;
    Lg();
    let n = document.getElementById(ll);
    n || (n = document.createElement("style"), n.id = ll, document.head.appendChild(n));
    const r = { ...t };
    r.theme === "dark" ? r.contrast = !1 : r.contrast && (r.theme = "light");
    const o = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches, i = r.theme === "auto" ? o ? "dark" : "light" : r.theme === "dark" ? "dark" : "light";
    r.magnifier ? r.bigCursor = !1 : r.bigCursor && (r.magnifier = !1), r.dyslexiaFont ? r.readableFont = !1 : r.readableFont && (r.dyslexiaFont = !1);
    const l = document.getElementById("area11y-root"), s = (m = l == null ? void 0 : l.shadowRoot) == null ? void 0 : m.getElementById(
      "app-root"
    ), a = [];
    if (En = !!r.highlightLinks, document.documentElement.classList.toggle(
      sl,
      !!r.highlightLinks
    ), r.highlightLinks)
      bg();
    else if (Ye.size > 0) {
      const x = Array.from(Ye);
      Ct(lt, Ye);
      for (const d of x)
        mo.delete(d), yo.delete(d);
    }
    const u = r.contrast, c = !r.contrast && i === "dark";
    u ? (this.disableDarkModeHybrid(), this.enableNightShiftHybrid(a)) : c ? (this.disableNightShiftHybrid(), this.enableDarkModeHybrid(a)) : (this.disableDarkModeHybrid(), this.disableNightShiftHybrid()), r.bigCursor ? (document.documentElement.classList.add(we), l == null || l.classList.add(we), s == null || s.classList.add(we), a.push(`
                html.${we} :not(#area11y-root):not(#area11y-root *):not(#area11y-magnifier-overlay):not(#area11y-magnifier-overlay *):not(:is(a[href], button, [role="button"], input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, label[for])) {
                  cursor: url('${this.assetBase ? `${this.assetBase}/image/cursor_big.svg` : "/image/cursor_big.svg"}') 8 8, auto;
                }
              
                html.${we} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *),
                html.${we} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *):hover,
                html.${we} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *):active,
                html.${we} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *):focus,
                html.${we} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *):focus-visible {
                  cursor: url('${this.assetBase ? `${this.assetBase}/image/pointinghand.svg` : "/image/pointinghand.svg"}') 8 8, auto !important;
                }
            `)) : (document.documentElement.classList.remove(we), l == null || l.classList.remove(we), s == null || s.classList.remove(we));
    const f = [
      '[class*="icon" i]',
      '[class*="fa-"]',
      ".fa",
      ".fas",
      ".far",
      ".fal",
      ".fab",
      ".glyphicon",
      '[class*="material-symbols"]',
      '[class*="bi-"]',
      '[class*="ri-"]',
      "[data-icon]"
    ].map((x) => `:not(${x})`).join(""), h = `
            body > *:not(#area11y-root):not(#area11y-magnifier-overlay)${f},
            body > *:not(#area11y-root):not(#area11y-magnifier-overlay) *${f}`;
    r.dyslexiaFont && a.push(`
            ${h} {
                font-family: "OpenDyslexic", "Comic Sans MS", "Arial", sans-serif !important;
            }
        `), r.readableFont && a.push(`
            ${h} {
                font-family: "Atkinson Hyperlegible", sans-serif !important;
            }
        `), (r.dyslexiaFont || r.readableFont) && a.push(`
              :where(pre, code, kbd, samp):not(#area11y-root *):not(#area11y-magnifier-overlay *) {
                font-family: ui-monospace, SFMono-Regular, SFMono, Menlo, Consolas, "Liberation Mono", monospace !important;
              }
            `);
    const y = "p, li, span, h1, h2, h3, h4, h5, h6, a, div:not(:has(*))";
    r.lineHeight !== ss.lineHeight && a.push(`
            ${y} { 
                line-height: ${r.lineHeight} !important;
            } 
        `), r.letterSpacing !== ss.letterSpacing && a.push(`
            ${y} { 
                letter-spacing: ${r.letterSpacing}px !important;
            } 
        `), r.highlightLinks && a.push(`
                html.${sl} body a:not(#area11y-root *):not(#area11y-magnifier-overlay *) {
                outline: 3px solid ${Ef} !important;
                outline-offset: 2px !important;
                background-color: ${bf} !important;
                color: ${as} !important;
                padding: 1px 2px !important;
                border-radius: 2px !important;
                text-decoration: underline !important;
                width: fit-content;
            } 
        `), a.push(`
            .area11y-read-aloud-hover {
                outline: 2px solid var(--area11y-accent) !important;
                outline-offset: 2px !important;
                cursor: pointer !important;
            }
        `), r.reduceMotion && a.push(`
            *, *:before, *:after {
                animation-delay: -1ms !important;
                animation-duration: 1ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0s !important;
                scroll-behavior: auto !important;
            }
        `), document.documentElement.classList.toggle(
      ai,
      !!r.hideImages
    ), r.hideImages && a.push(Sf), r.magnifier ? (document.documentElement.classList.add(ft), a.push(`
                html.${ft} #${ie} {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    z-index: 2147483646;
                }
                html.${ft} #${ie} .area11y-readingmask-top,
                html.${ft} #${ie} .area11y-readingmask-bottom {
                    position: absolute;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.45);
                }
                html.${ft} #${ie} .area11y-readingmask-top {
                    top: 0;
                    height: var(--area11y-readingmask-top, 0px);
                }
                html.${ft} #${ie} .area11y-readingmask-band {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: var(--area11y-readingmask-band-y, 0px);
                    height: var(--area11y-readingmask-band-h, 110px);
                    background: transparent;
                    border-top: 5px solid var(--area11y-accent);
                    border-bottom: 5px solid var(--area11y-accent);
                }
                html.${ft} #${ie} .area11y-readingmask-bottom {
                    bottom: 0;
                    height: var(--area11y-readingmask-bottom, 0px);
                }
            `), this.enableMagnifier()) : (document.documentElement.classList.remove(ft), this.disableMagnifier()), r.fontSize !== 100 ? (fr = r.fontSize / 100, Tf(document.body, fr), Sg()) : (_u(), Ct(ds, fs), ui = /* @__PURE__ */ new WeakMap(), fr = 1), n.innerHTML = a.join(`
`), (w = document.getElementById("area11y-prehide-media")) == null || w.remove();
  }
  static clearSettings() {
    var o, i, l;
    const t = document.getElementById(ll);
    t && t.remove(), (o = document.getElementById("area11y-prepaint-theme")) == null || o.remove(), this.disableDarkModeHybrid(), this.disableNightShiftHybrid(), _u(), Ct(ds, fs), ui = /* @__PURE__ */ new WeakMap(), fr = 1, document.documentElement.classList.remove(we), document.documentElement.classList.remove(ft);
    const n = document.getElementById("area11y-root"), r = (i = n == null ? void 0 : n.shadowRoot) == null ? void 0 : i.getElementById(
      "app-root"
    );
    n == null || n.classList.remove(we), r == null || r.classList.remove(we), document.documentElement.classList.remove(ai), (l = document.getElementById("area11y-prehide-media")) == null || l.remove(), En = !1, document.documentElement.classList.remove(sl), Ct(lt, Ye), this.disableMagnifier();
  }
  static enableMagnifier() {
    if (this.magnifierState.overlay) return;
    const t = document.createElement("div");
    t.id = ie, t.style.position = "fixed", t.style.inset = "0", t.style.pointerEvents = "none", t.style.zIndex = "2147483646";
    const n = document.createElement("div");
    n.className = "area11y-readingmask-top";
    const r = document.createElement("div");
    r.className = "area11y-readingmask-band";
    const o = document.createElement("div");
    o.className = "area11y-readingmask-bottom", t.appendChild(n), t.appendChild(r), t.appendChild(o), document.body.appendChild(t);
    const i = (c) => {
      const f = this.magnifierState.bandHeight, h = window.innerHeight || 0, y = h / 2, m = typeof c == "number" ? c : this.magnifierState.lastBandCenterY ?? y, w = Math.max(0, h - f), x = Math.min(
        w,
        Math.max(0, m - f / 2)
      ), d = Math.max(
        0,
        h - x - f
      );
      t.style.setProperty(
        "--area11y-readingmask-band-h",
        `${f}px`
      ), t.style.setProperty(
        "--area11y-readingmask-band-y",
        `${x}px`
      ), t.style.setProperty("--area11y-readingmask-top", `${x}px`), t.style.setProperty(
        "--area11y-readingmask-bottom",
        `${d}px`
      ), this.magnifierState.lastBandCenterY = x + f / 2;
    }, l = (c) => {
      i(c.clientY);
    }, s = (c) => {
      c.touches.length !== 0 && i(c.touches[0].clientY);
    }, a = (c) => {
      c.touches.length !== 0 && i(c.touches[0].clientY);
    }, u = () => {
      i();
    };
    window.addEventListener("mousemove", l, !0), window.addEventListener("touchmove", s, { passive: !0 }), window.addEventListener("touchstart", a, {
      passive: !0
    }), window.addEventListener("resize", u), i(), this.magnifierState.overlay = t, this.magnifierState.mouseMoveHandler = l, this.magnifierState.touchMoveHandler = s, this.magnifierState.touchStartHandler = a, this.magnifierState.resizeHandler = u;
  }
  static disableMagnifier() {
    var t;
    this.magnifierState.overlay && (this.magnifierState.mouseMoveHandler && window.removeEventListener(
      "mousemove",
      this.magnifierState.mouseMoveHandler,
      !0
    ), this.magnifierState.touchMoveHandler && window.removeEventListener(
      "touchmove",
      this.magnifierState.touchMoveHandler
    ), this.magnifierState.touchStartHandler && window.removeEventListener(
      "touchstart",
      this.magnifierState.touchStartHandler
    ), this.magnifierState.resizeHandler && window.removeEventListener(
      "resize",
      this.magnifierState.resizeHandler
    ), this.magnifierState.mouseMoveHandler = void 0, this.magnifierState.touchMoveHandler = void 0, this.magnifierState.touchStartHandler = void 0, this.magnifierState.resizeHandler = void 0, this.magnifierState.lastBandCenterY = void 0, (t = this.magnifierState.overlay) == null || t.remove(), this.magnifierState.overlay = void 0);
  }
};
mi.assetBase = "", mi.magnifierState = {
  bandHeight: 140,
  overlay: void 0,
  mouseMoveHandler: void 0,
  touchMoveHandler: void 0,
  touchStartHandler: void 0,
  resizeHandler: void 0,
  lastBandCenterY: void 0
};
let Vn = mi;
const Cg = "M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Z", Tg = "M61.05,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Z", $g = "M61.44,20.66a8.83,8.83,0,1,1-6.24,2.59A8.79,8.79,0,0,1,61.44,20.66Z", $f = ({
  size: e = 56,
  background: t = "#7486BA",
  figure: n = "#F2F4F8"
}) => /* @__PURE__ */ $.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 122.88 122.88",
    role: "img",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ $.jsx("path", { d: Cg, fill: t }),
      /* @__PURE__ */ $.jsx("path", { d: Tg, fill: n }),
      /* @__PURE__ */ $.jsx("path", { d: $g, fill: n })
    ]
  }
), Ng = ({
  onClick: e,
  isOpen: t,
  position: n,
  primaryColor: r,
  ariaLabel: o
}) => {
  const i = () => {
    const l = {
      position: "fixed",
      bottom: "15px",
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
      zIndex: 999999,
      border: "none",
      transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      padding: 0
    };
    return n === "bottom-left" ? l.left = "15px" : n === "bottom-center" ? (l.left = "50%", l.transform = "translateX(-50%)") : l.right = "15px", l;
  };
  return /* @__PURE__ */ $.jsx(
    "button",
    {
      onClick: e,
      style: i(),
      onMouseEnter: (l) => {
        const s = n === "bottom-center" ? "translateX(-50%) " : "";
        l.currentTarget.style.transform = `${s}scale(1.1)`;
      },
      onMouseLeave: (l) => {
        const s = n === "bottom-center" ? "translateX(-50%) " : "";
        l.currentTarget.style.transform = `${s}scale(1)`;
      },
      "aria-label": o,
      "aria-expanded": t,
      children: /* @__PURE__ */ $.jsx($f, { background: r })
    }
  );
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Nf = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = P.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: l,
    ...s
  }, a) => P.createElement(
    "svg",
    {
      ref: a,
      ...zg,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Nf("lucide", o),
      ...s
    },
    [
      ...l.map(([u, c]) => P.createElement(u, c)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = (e, t) => {
  const n = P.forwardRef(
    ({ className: r, ...o }, i) => P.createElement(Rg, {
      ref: i,
      iconNode: t,
      className: Nf(`lucide-${Og(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = Ee("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = Ee("AlignLeft", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
  ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = Ee("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = Ee("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = Ee("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = Ee("ImageOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = Ee("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = Ee("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = Ee("MousePointer2", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = Ee("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = Ee("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = Ee("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ku = Ee("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = Ee("Volume2", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kg = Ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Qg = (e, t) => {
  let n = parseInt(e.slice(1), 16), r = t, o = "#", i = [];
  for (let l = 0; l < 3; l++) {
    let s = n >> 8 * (2 - l) & 255;
    s = Math.round((255 - s) * r) + s, i.push(s);
  }
  for (let l = 0; l < 3; l++)
    o += ("00" + i[l].toString(16)).slice(-2);
  return o;
}, ot = ({
  active: e,
  onClick: t,
  icon: n,
  label: r,
  primaryColor: o,
  disabled: i = !1
}) => (Qg(o, 0.4), /* @__PURE__ */ $.jsxs(
  "button",
  {
    type: "button",
    disabled: i,
    onClick: () => {
      i || t();
    },
    className: `flex items-center justify-between p-4 rounded-xl border-2 transition-all w-full text-left mb-2 setting-btn ${e ? `bg-[${o}] border-[${o}] shadow-md` : "bg-white border-gray-100 text-gray-700 hover:border-gray-300"} ${i ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
    "aria-disabled": i,
    children: [
      /* @__PURE__ */ $.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ $.jsx("span", { style: { color: o }, children: n }),
        /* @__PURE__ */ $.jsx(
          "span",
          {
            className: "text-sm font-bold max-w-full md:max-w-[calc(100%-35px)]",
            children: r
          }
        )
      ] }),
      /* @__PURE__ */ $.jsx(
        "div",
        {
          className: "min-w-10 h-5 rounded-full relative transition-colors",
          style: { backgroundColor: e ? o : "#e2e8f0" },
          children: /* @__PURE__ */ $.jsx(
            "div",
            {
              className: "absolute top-1 w-3 h-3 rounded-full bg-white transition-all shadow-sm",
              style: { left: e ? "22px" : "4px" }
            }
          )
        }
      )
    ]
  }
)), cl = ({
  label: e,
  value: t,
  min: n,
  max: r,
  step: o,
  unit: i = "",
  onChange: l,
  primaryColor: s
}) => {
  const a = (u) => {
    const c = u === "inc" ? o : -o, f = Math.min(r, Math.max(n, t + c));
    l(Number(f.toFixed(4)));
  };
  return /* @__PURE__ */ $.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ $.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
      /* @__PURE__ */ $.jsx("span", { className: "text-sm font-bold text-gray-700", children: e }),
      /* @__PURE__ */ $.jsxs("span", { className: "text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-600", children: [
        t,
        i
      ] })
    ] }),
    /* @__PURE__ */ $.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ $.jsx(
        "button",
        {
          type: "button",
          onClick: () => a("dec"),
          className: "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors",
          "aria-label": `${e} verringern`,
          children: /* @__PURE__ */ $.jsx(Mg, { size: 16 })
        }
      ),
      /* @__PURE__ */ $.jsx(
        "input",
        {
          type: "range",
          min: n,
          max: r,
          step: o,
          value: t,
          onChange: (u) => l(parseFloat(u.target.value)),
          className: "flex-1 h-[2px] bg-gray-200 rounded-lg appearance-none cursor-grab active:cursor-grabbing",
          style: { accentColor: s }
        }
      ),
      /* @__PURE__ */ $.jsx(
        "button",
        {
          type: "button",
          onClick: () => a("inc"),
          className: "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors",
          "aria-label": `${e} erhöhen`,
          children: /* @__PURE__ */ $.jsx(Ig, { size: 16 })
        }
      )
    ] })
  ] });
}, Gg = ({
  settings: e,
  onUpdate: t,
  onClose: n,
  position: r,
  primaryColor: o,
  translations: i,
  hotkey: l,
  onReset: s
}) => {
  const a = P.useRef(null), u = P.useRef(null), [c, f] = P.useState(!1), [h, y] = P.useState(!1);
  P.useEffect(() => {
    const x = (d) => {
      d.key === "Escape" && n();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [n]), P.useEffect(() => {
    const x = a.current;
    if (!x) return;
    const d = x.getRootNode(), p = d.activeElement || document.activeElement, g = () => Array.from(
      x.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((k) => k.getClientRects().length > 0);
    x.focus({ preventScroll: !0 });
    const v = (k) => {
      if (k.key !== "Tab") return;
      const b = g();
      if (b.length === 0) {
        k.preventDefault(), x.focus({ preventScroll: !0 });
        return;
      }
      const L = b[0], C = b[b.length - 1], E = d.activeElement, T = E ? x.contains(E) : !1;
      k.shiftKey ? (!T || E === L || E === x) && (k.preventDefault(), C.focus()) : (!T || E === C) && (k.preventDefault(), L.focus());
    };
    return window.addEventListener("keydown", v, !0), () => {
      window.removeEventListener("keydown", v, !0), p != null && p.isConnected && p.focus({ preventScroll: !0 });
    };
  }, []), P.useEffect(() => {
    const x = window.matchMedia("(min-width: 640px)"), d = () => y(x.matches);
    return d(), x.addEventListener ? (x.addEventListener("change", d), () => x.removeEventListener("change", d)) : (x.addListener(d), () => x.removeListener(d));
  }, []);
  const m = P.useMemo(() => {
    const x = {
      position: "fixed",
      bottom: "90px",
      zIndex: 1e6,
      width: h ? "100%" : "90%",
      maxWidth: "520px",
      maxHeight: "76svh",
      fontSize: "16px"
    };
    return r === "bottom-left" ? x.left = "15px" : r === "bottom-center" ? (x.left = "50%", x.transform = "translateX(-50%)") : x.right = "15px", x;
  }, [h, r]), w = P.useMemo(
    () => ({
      "--scroll-thumb-color": o
    }),
    [o]
  );
  return P.useEffect(() => {
    const x = u.current;
    if (!x) return;
    let d = null;
    const p = () => {
      f(!0), d && window.clearTimeout(d), d = window.setTimeout(() => {
        f(!1);
      }, 600);
    };
    return x.addEventListener("scroll", p), () => {
      x.removeEventListener("scroll", p), d && window.clearTimeout(d);
    };
  }, []), /* @__PURE__ */ $.jsxs(
    "div",
    {
      ref: a,
      style: m,
      className: "setting-panel bg-white shadow-2xl rounded-3xl border border-gray-100 flex flex-col overflow-hidden",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": i.panelTitle,
      tabIndex: -1,
      children: [
        /* @__PURE__ */ $.jsxs("div", { className: "p-5 border-b border-gray-50 flex justify-between items-center bg-white", children: [
          /* @__PURE__ */ $.jsx(
            "div",
            {
              className: "p-2 rounded-full",
              style: { backgroundColor: `${o}50` },
              children: /* @__PURE__ */ $.jsx($f, { background: o, size: 25 })
            }
          ),
          /* @__PURE__ */ $.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ $.jsxs("h2", { className: "text-lg font-black text-gray-900 tracking-tight flex items-center gap-3 max-[460px]:flex-col", children: [
            i.panelTitle,
            l && h && /* @__PURE__ */ $.jsx("span", { className: "text-xs font-medium text-gray-900 border border-gray-200 rounded-full px-2 py-1", children: l })
          ] }) }),
          /* @__PURE__ */ $.jsx(
            "button",
            {
              type: "button",
              onClick: n,
              "aria-label": i.closeLabel,
              className: "p-2 hover:bg-gray-100 rounded-full transition-colors border-none bg-transparent cursor-pointer text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ $.jsx(Kg, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ $.jsxs(
          "div",
          {
            ref: u,
            style: w,
            className: `setting-panel-scroll flex-1 p-6 space-y-8 bg-white${c ? " setting-panel-scroll--visible" : ""}`,
            children: [
              /* @__PURE__ */ $.jsxs("section", { children: [
                /* @__PURE__ */ $.jsxs("div", { className: "flex items-center gap-2 mb-4 text-gray-400", children: [
                  /* @__PURE__ */ $.jsx(Ku, { size: 14 }),
                  /* @__PURE__ */ $.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest", children: i.sections.textLayout })
                ] }),
                /* @__PURE__ */ $.jsx(
                  cl,
                  {
                    label: i.sliders.fontSize,
                    value: e.fontSize,
                    min: 100,
                    max: 200,
                    step: 10,
                    unit: "%",
                    onChange: (x) => t({ fontSize: x }),
                    primaryColor: o
                  }
                ),
                /* @__PURE__ */ $.jsx(
                  cl,
                  {
                    label: i.sliders.lineHeight,
                    value: e.lineHeight,
                    min: 1,
                    max: 3,
                    step: 0.1,
                    onChange: (x) => t({ lineHeight: x }),
                    primaryColor: o
                  }
                ),
                /* @__PURE__ */ $.jsx(
                  cl,
                  {
                    label: i.sliders.letterSpacing,
                    value: e.letterSpacing,
                    min: 0,
                    max: 10,
                    step: 1,
                    unit: "px",
                    onChange: (x) => t({ letterSpacing: x }),
                    primaryColor: o
                  }
                )
              ] }),
              /* @__PURE__ */ $.jsxs("section", { children: [
                /* @__PURE__ */ $.jsxs("div", { className: "flex items-center gap-2 mb-4 text-gray-400", children: [
                  /* @__PURE__ */ $.jsx(_g, { size: 14 }),
                  /* @__PURE__ */ $.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest", children: i.sections.visualAids })
                ] }),
                /* @__PURE__ */ $.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.theme === "dark",
                      onClick: () => t({
                        theme: e.theme === "dark" ? "light" : "dark"
                      }),
                      icon: /* @__PURE__ */ $.jsx(Dg, { size: 18 }),
                      label: i.toggles.darkMode,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.contrast,
                      onClick: () => t({ contrast: !e.contrast }),
                      icon: /* @__PURE__ */ $.jsx(Ug, { size: 18 }),
                      label: i.toggles.contrast,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.dyslexiaFont,
                      onClick: () => t({
                        dyslexiaFont: !e.dyslexiaFont
                      }),
                      icon: /* @__PURE__ */ $.jsx(Ag, { size: 18 }),
                      label: i.toggles.dyslexia,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.readableFont,
                      onClick: () => t({
                        readableFont: !e.readableFont
                      }),
                      icon: /* @__PURE__ */ $.jsx(Ku, { size: 18 }),
                      label: i.toggles.readableFont,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.highlightLinks,
                      onClick: () => t({
                        highlightLinks: !e.highlightLinks
                      }),
                      icon: /* @__PURE__ */ $.jsx(Fg, { size: 18 }),
                      label: i.toggles.highlightLinks,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.hideImages,
                      onClick: () => t({
                        hideImages: !e.hideImages
                      }),
                      icon: /* @__PURE__ */ $.jsx(jg, { size: 18 }),
                      label: i.toggles.hideImages,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.magnifier,
                      onClick: () => t({
                        magnifier: !e.magnifier
                      }),
                      icon: /* @__PURE__ */ $.jsx(Vg, { size: 18 }),
                      label: i.toggles.magnifier,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.reduceMotion,
                      onClick: () => t({
                        reduceMotion: !e.reduceMotion
                      }),
                      icon: /* @__PURE__ */ $.jsx(Pg, { size: 18 }),
                      label: i.toggles.reduceMotion,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.bigCursor,
                      onClick: () => t({ bigCursor: !e.bigCursor }),
                      icon: /* @__PURE__ */ $.jsx(Bg, { size: 18 }),
                      label: i.toggles.bigCursor,
                      primaryColor: o
                    }
                  ),
                  /* @__PURE__ */ $.jsx(
                    ot,
                    {
                      active: e.readAloud,
                      onClick: () => t({ readAloud: !e.readAloud }),
                      icon: /* @__PURE__ */ $.jsx(Wg, { size: 18 }),
                      label: i.toggles.readAloud,
                      primaryColor: o
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ $.jsxs(
                "button",
                {
                  type: "button",
                  onClick: s,
                  className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border text-sm font-semibold bg-white transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-sm hover:shadow-md",
                  style: {
                    color: o,
                    borderColor: o
                  },
                  children: [
                    /* @__PURE__ */ $.jsx(Hg, { size: 16 }),
                    i.resetButton
                  ]
                }
              ),
              /* @__PURE__ */ $.jsx("section", { children: /* @__PURE__ */ $.jsxs(
                "a",
                {
                  href: "https://area11y.com/",
                  target: "_blank",
                  className: "text-[11px] inline-flex items-center gap-1",
                  children: [
                    "area11y",
                    /* @__PURE__ */ $.jsxs(
                      "svg",
                      {
                        "aria-hidden": "true",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        width: "12",
                        height: "12",
                        children: [
                          /* @__PURE__ */ $.jsx("path", { d: "M7 17L17 7" }),
                          /* @__PURE__ */ $.jsx("path", { d: "M8 7h9v9" })
                        ]
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, Yg = /* @__PURE__ */ new Set([
  "A",
  "P",
  "SPAN",
  "LI",
  "DT",
  "DD",
  "BLOCKQUOTE",
  "LABEL",
  "BUTTON",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6"
]), Of = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "TEXTAREA", "SELECT"]), Xg = /* @__PURE__ */ new Set([
  "BODY",
  "HTML",
  "DIV",
  "SECTION",
  "ARTICLE",
  "NAV",
  "HEADER",
  "FOOTER",
  "ASIDE",
  "MAIN"
]);
function Zg({
  enabled: e,
  widgetRootIds: t = ["area11y-root", "area11y-mount"],
  hoverDelay: n = 200,
  lang: r = "de-DE",
  announcements: o
}) {
  const i = P.useRef(!1), l = P.useRef(null), s = P.useRef(null), a = P.useRef(null), u = P.useRef([]), c = P.useRef(null), f = P.useRef(null);
  P.useEffect(() => {
    const v = typeof window < "u" && typeof window.speechSynthesis < "u";
    if (i.current = v, !v) return;
    l.current = window.speechSynthesis;
    const k = () => {
      var b;
      u.current = ((b = l.current) == null ? void 0 : b.getVoices()) || [];
    };
    return k(), l.current.addEventListener(
      "voiceschanged",
      k
    ), () => {
      var b;
      (b = l.current) == null || b.removeEventListener(
        "voiceschanged",
        k
      );
    };
  }, []);
  const h = P.useMemo(() => typeof document > "u" ? [] : t.map((v) => document.getElementById(v)).filter((v) => !!v), [t.join("|")]), y = () => {
    c.current !== null && (window.clearTimeout(c.current), c.current = null);
  }, m = P.useCallback(() => {
    var v;
    if (i.current)
      try {
        (v = l.current) == null || v.resume();
      } catch {
      }
  }, []), w = () => {
    var v;
    if (y(), s.current = null, !!i.current)
      try {
        (v = l.current) == null || v.cancel();
      } catch {
      }
  }, x = P.useCallback(
    (v) => {
      var T;
      if (!i.current || !v.trim()) return;
      const k = l.current;
      if (!k) return;
      m();
      try {
        k.cancel();
      } catch {
      }
      const b = new SpeechSynthesisUtterance(v.trim()), L = ((T = r == null ? void 0 : r.toLowerCase) == null ? void 0 : T.call(r)) || "de-de", C = L.split("-")[0];
      b.lang = L;
      const E = em(
        u.current,
        L,
        C
      );
      E && (b.voice = E), k.speak(b);
    },
    [r, m]
  ), d = (v) => {
    a.current !== v && (a.current && a.current.classList.remove("area11y-read-aloud-hover"), a.current = v, v && v.classList.add("area11y-read-aloud-hover"));
  };
  P.useEffect(() => {
    if (!i.current || typeof document > "u")
      return;
    const v = () => {
      m();
    };
    return document.addEventListener("pointerdown", v, !0), document.addEventListener("keydown", v, !0), () => {
      document.removeEventListener("pointerdown", v, !0), document.removeEventListener("keydown", v, !0);
    };
  }, [m]);
  const p = (o == null ? void 0 : o.enabled) ?? "Vorlesen aktiviert", g = (o == null ? void 0 : o.disabled) ?? "Vorlesen deaktiviert";
  return P.useEffect(() => {
    if (!i.current) return;
    const v = f.current;
    if (f.current = e, v === null || v === e)
      return;
    const k = e ? p : g, b = window.setTimeout(() => x(k), 50);
    return () => {
      window.clearTimeout(b);
    };
  }, [g, e, p, x]), P.useEffect(() => {
    if (!i.current)
      return;
    if (!e) {
      w();
      return;
    }
    const v = (C) => {
      C.pointerType !== "touch" && (m(), L(C.target));
    }, k = (C) => {
      m(), L(C.target);
    }, b = (C) => {
      m(), L(C.target);
    }, L = (C) => {
      if (!(C instanceof HTMLElement)) return;
      if (Xg.has(C.tagName.toUpperCase())) {
        d(null);
        return;
      }
      if (C.getAttribute("aria-hidden") === "true") {
        d(null);
        return;
      }
      if (tm(C, h)) {
        d(null);
        return;
      }
      const E = nm(C);
      if (!E || !rm(E)) {
        d(null);
        return;
      }
      if (s.current === E) {
        d(E);
        return;
      }
      d(E), y(), c.current = window.setTimeout(() => {
        const T = om(E);
        if (!T) {
          d(null), s.current = null;
          return;
        }
        s.current = E, x(T);
      }, n);
    };
    return document.addEventListener("pointerover", v, !0), document.addEventListener("mouseover", k, !0), document.addEventListener("focusin", b, !0), () => {
      document.removeEventListener("pointerover", v, !0), document.removeEventListener("mouseover", k, !0), document.removeEventListener("focusin", b, !0), w(), d(null);
    };
  }, [e, n, m, x, h]), { speak: x, supported: i.current };
}
const Jg = /\b(albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|junior|kathy|organ|pipe organ|princess|ralph|superstar|trinoids|whisper|wobble|zarvox|fred|grandma|grandpa|rocko|sandy|shelley|eddy|flo|reed)\b/i, qg = /(natural|neural|premium|enhanced|google|microsoft|siri)/i;
function em(e, t, n) {
  if (!e.length) return null;
  const r = e.filter(
    (u) => {
      var c;
      return ((c = u.lang) == null ? void 0 : c.toLowerCase()) === t;
    }
  ), o = e.filter(
    (u) => {
      var c;
      return (c = u.lang) == null ? void 0 : c.toLowerCase().startsWith(n);
    }
  ), i = r.length ? r : o;
  if (!i.length) return null;
  const l = i.filter(
    (u) => !Jg.test(u.name)
  ), s = l.length ? l : i, a = (u) => {
    let c = 0;
    return qg.test(u.name) && (c += 100), u.default && (c += 10), u.localService && (c += 1), c;
  };
  return s.map((u, c) => ({ voice: u, index: c })).sort((u, c) => a(c.voice) - a(u.voice) || u.index - c.index)[0].voice;
}
function tm(e, t) {
  return t.some((n) => n.contains(e));
}
function nm(e) {
  let t = e;
  for (; t && t !== document.body; ) {
    const n = t.tagName.toUpperCase();
    if (Yg.has(n) || Of.has(n))
      return t;
    t = t.parentElement;
  }
  return null;
}
function rm(e) {
  if (!e.isConnected) return !1;
  const t = window.getComputedStyle(e);
  if (t.display === "none" || t.visibility === "hidden" || parseFloat(t.opacity || "1") === 0)
    return !1;
  const n = e.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function om(e) {
  const t = e.tagName.toUpperCase();
  return Of.has(t) ? im(e) : e.innerText.trim() || null;
}
function im(e) {
  const t = e.getAttribute("aria-label");
  if (t != null && t.trim()) return t.trim();
  const n = e.getAttribute("aria-labelledby");
  if (n) {
    const i = n.split(/\s+/).map((l) => {
      var s;
      return (s = document.getElementById(l)) == null ? void 0 : s.innerText.trim();
    }).filter(Boolean);
    if (i.length) return i.join(" ");
  }
  if ("value" in e && typeof e.value == "string" && e.value.trim())
    return e.value.trim();
  const r = e.getAttribute("placeholder");
  if (r != null && r.trim()) return r.trim();
  if (e.id && typeof document < "u") {
    const i = document.querySelector(
      `label[for="${e.id}"]`
    );
    if (i != null && i.innerText.trim())
      return i.innerText.trim();
  }
  const o = e.closest("label");
  return o != null && o.innerText.trim() ? o.innerText.trim() : e.innerText.trim() || null;
}
const R = (e) => typeof e == "string", lr = () => {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}, Qu = (e) => e == null ? "" : "" + e, lm = (e, t, n) => {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}, sm = /###/g, Gu = (e) => e && e.indexOf("###") > -1 ? e.replace(sm, ".") : e, Yu = (e) => !e || R(e), Er = (e, t, n) => {
  const r = R(t) ? t.split(".") : t;
  let o = 0;
  for (; o < r.length - 1; ) {
    if (Yu(e)) return {};
    const i = Gu(r[o]);
    !e[i] && n && (e[i] = new n()), Object.prototype.hasOwnProperty.call(e, i) ? e = e[i] : e = {}, ++o;
  }
  return Yu(e) ? {} : {
    obj: e,
    k: Gu(r[o])
  };
}, Xu = (e, t, n) => {
  const {
    obj: r,
    k: o
  } = Er(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[o] = n;
    return;
  }
  let i = t[t.length - 1], l = t.slice(0, t.length - 1), s = Er(e, l, Object);
  for (; s.obj === void 0 && l.length; )
    i = `${l[l.length - 1]}.${i}`, l = l.slice(0, l.length - 1), s = Er(e, l, Object), s != null && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${i}`] = n;
}, am = (e, t, n, r) => {
  const {
    obj: o,
    k: i
  } = Er(e, t, Object);
  o[i] = o[i] || [], o[i].push(n);
}, pi = (e, t) => {
  const {
    obj: n,
    k: r
  } = Er(e, t);
  if (n && Object.prototype.hasOwnProperty.call(n, r))
    return n[r];
}, um = (e, t, n) => {
  const r = pi(e, n);
  return r !== void 0 ? r : pi(t, n);
}, zf = (e, t, n) => {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? R(e[r]) || e[r] instanceof String || R(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : zf(e[r], t[r], n) : e[r] = t[r]);
  return e;
}, dn = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var cm = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const dm = (e) => R(e) ? e.replace(/[&<>"'\/]/g, (t) => cm[t]) : e;
class fm {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const pm = [" ", ",", "?", "!", ";"], hm = new fm(20), gm = (e, t, n) => {
  t = t || "", n = n || "";
  const r = pm.filter((l) => t.indexOf(l) < 0 && n.indexOf(l) < 0);
  if (r.length === 0) return !0;
  const o = hm.getRegExp(`(${r.map((l) => l === "?" ? "\\?" : l).join("|")})`);
  let i = !o.test(e);
  if (!i) {
    const l = e.indexOf(n);
    l > 0 && !o.test(e.substring(0, l)) && (i = !0);
  }
  return i;
}, vs = (e, t, n = ".") => {
  if (!e) return;
  if (e[t])
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  const r = t.split(n);
  let o = e;
  for (let i = 0; i < r.length; ) {
    if (!o || typeof o != "object")
      return;
    let l, s = "";
    for (let a = i; a < r.length; ++a)
      if (a !== i && (s += n), s += r[a], l = o[s], l !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof l) > -1 && a < r.length - 1)
          continue;
        i += a - i + 1;
        break;
      }
    o = l;
  }
  return o;
}, Ur = (e) => e == null ? void 0 : e.replace("_", "-"), mm = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    var n, r;
    (r = (n = console == null ? void 0 : console[e]) == null ? void 0 : n.apply) == null || r.call(n, console, t);
  }
};
class hi {
  constructor(t, n = {}) {
    this.init(t, n);
  }
  init(t, n = {}) {
    this.prefix = n.prefix || "i18next:", this.logger = t || mm, this.options = n, this.debug = n.debug;
  }
  log(...t) {
    return this.forward(t, "log", "", !0);
  }
  warn(...t) {
    return this.forward(t, "warn", "", !0);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, o) {
    return o && !this.debug ? null : (R(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new hi(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new hi(this.logger, t);
  }
}
var at = new hi();
class Pi {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const o = this.observers[r].get(n) || 0;
      this.observers[r].set(n, o + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t, ...n) {
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(([o, i]) => {
      for (let l = 0; l < i; l++)
        o(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([o, i]) => {
      for (let l = 0; l < i; l++)
        o.apply(o, [t, ...n]);
    });
  }
}
class Zu extends Pi {
  constructor(t, n = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r, o = {}) {
    var u, c;
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, l = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    t.indexOf(".") > -1 ? s = t.split(".") : (s = [t, n], r && (Array.isArray(r) ? s.push(...r) : R(r) && i ? s.push(...r.split(i)) : s.push(r)));
    const a = pi(this.data, s);
    return !a && !n && !r && t.indexOf(".") > -1 && (t = s[0], n = s[1], r = s.slice(2).join(".")), a || !l || !R(r) ? a : vs((c = (u = this.data) == null ? void 0 : u[t]) == null ? void 0 : c[n], r, i);
  }
  addResource(t, n, r, o, i = {
    silent: !1
  }) {
    const l = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(l ? r.split(l) : r)), t.indexOf(".") > -1 && (s = t.split("."), o = n, n = s[1]), this.addNamespaces(n), Xu(this.data, s, o), i.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r, o = {
    silent: !1
  }) {
    for (const i in r)
      (R(r[i]) || Array.isArray(r[i])) && this.addResource(t, n, i, r[i], {
        silent: !0
      });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i, l = {
    silent: !1,
    skipCopy: !1
  }) {
    let s = [t, n];
    t.indexOf(".") > -1 && (s = t.split("."), o = r, r = n, n = s[1]), this.addNamespaces(n);
    let a = pi(this.data, s) || {};
    l.skipCopy || (r = JSON.parse(JSON.stringify(r))), o ? zf(a, r, i) : a = {
      ...a,
      ...r
    }, Xu(this.data, s, a), l.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((o) => n[o] && Object.keys(n[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Rf = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return e.forEach((i) => {
      var l;
      t = ((l = this.processors[i]) == null ? void 0 : l.process(t, n, r, o)) ?? t;
    }), t;
  }
};
const Pf = Symbol("i18next/PATH_KEY");
function ym() {
  const e = [], t = /* @__PURE__ */ Object.create(null);
  let n;
  return t.get = (r, o) => {
    var i;
    return (i = n == null ? void 0 : n.revoke) == null || i.call(n), o === Pf ? e : (e.push(o), n = Proxy.revocable(r, t), n.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), t).proxy;
}
function ws(e, t) {
  const {
    [Pf]: n
  } = e(ym());
  return n.join((t == null ? void 0 : t.keySeparator) ?? ".");
}
const Ju = {}, dl = (e) => !R(e) && typeof e != "boolean" && typeof e != "number";
class gi extends Pi {
  constructor(t, n = {}) {
    super(), lm(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = at.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, n = {
    interpolation: {}
  }) {
    const r = {
      ...n
    };
    if (t == null) return !1;
    const o = this.resolve(t, r);
    if ((o == null ? void 0 : o.res) === void 0) return !1;
    const i = dl(o.res);
    return !(r.returnObjects === !1 && i);
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const l = r && t.indexOf(r) > -1, s = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !gm(t, r, o);
    if (l && !s) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0)
        return {
          key: t,
          namespaces: R(i) ? [i] : i
        };
      const u = t.split(r);
      (r !== o || r === o && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), t = u.join(o);
    }
    return {
      key: t,
      namespaces: R(i) ? [i] : i
    };
  }
  translate(t, n, r) {
    let o = typeof n == "object" ? {
      ...n
    } : n;
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
      ...o
    }), o || (o = {}), t == null) return "";
    typeof t == "function" && (t = ws(t, {
      ...this.options,
      ...o
    })), Array.isArray(t) || (t = [String(t)]);
    const i = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: a
    } = this.extractFromKey(t[t.length - 1], o), u = a[a.length - 1];
    let c = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const f = o.lng || this.language, h = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((f == null ? void 0 : f.toLowerCase()) === "cimode")
      return h ? i ? {
        res: `${u}${c}${s}`,
        usedKey: s,
        exactUsedKey: s,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(o)
      } : `${u}${c}${s}` : i ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(o)
      } : s;
    const y = this.resolve(t, o);
    let m = y == null ? void 0 : y.res;
    const w = (y == null ? void 0 : y.usedKey) || s, x = (y == null ? void 0 : y.exactUsedKey) || s, d = ["[object Number]", "[object Function]", "[object RegExp]"], p = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, g = !this.i18nFormat || this.i18nFormat.handleAsObject, v = o.count !== void 0 && !R(o.count), k = gi.hasDefaultValue(o), b = v ? this.pluralResolver.getSuffix(f, o.count, o) : "", L = o.ordinal && v ? this.pluralResolver.getSuffix(f, o.count, {
      ordinal: !1
    }) : "", C = v && !o.ordinal && o.count === 0, E = C && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${b}`] || o[`defaultValue${L}`] || o.defaultValue;
    let T = m;
    g && !m && k && (T = E);
    const Y = dl(T), he = Object.prototype.toString.apply(T);
    if (g && T && Y && d.indexOf(he) < 0 && !(R(p) && Array.isArray(T))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const ee = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(w, T, {
          ...o,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return i ? (y.res = ee, y.usedParams = this.getUsedParamsDetails(o), y) : ee;
      }
      if (l) {
        const ee = Array.isArray(T), Z = ee ? [] : {}, dt = ee ? x : w;
        for (const j in T)
          if (Object.prototype.hasOwnProperty.call(T, j)) {
            const te = `${dt}${l}${j}`;
            k && !m ? Z[j] = this.translate(te, {
              ...o,
              defaultValue: dl(E) ? E[j] : void 0,
              joinArrays: !1,
              ns: a
            }) : Z[j] = this.translate(te, {
              ...o,
              joinArrays: !1,
              ns: a
            }), Z[j] === te && (Z[j] = T[j]);
          }
        m = Z;
      }
    } else if (g && R(p) && Array.isArray(m))
      m = m.join(p), m && (m = this.extendTranslation(m, t, o, r));
    else {
      let ee = !1, Z = !1;
      !this.isValidLookup(m) && k && (ee = !0, m = E), this.isValidLookup(m) || (Z = !0, m = s);
      const j = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Z ? void 0 : m, te = k && E !== m && this.options.updateMissing;
      if (Z || ee || te) {
        if (this.logger.log(te ? "updateKey" : "missingKey", f, u, s, te ? E : m), l) {
          const I = this.resolve(s, {
            ...o,
            keySeparator: !1
          });
          I && I.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let N = [];
        const z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && z && z[0])
          for (let I = 0; I < z.length; I++)
            N.push(z[I]);
        else this.options.saveMissingTo === "all" ? N = this.languageUtils.toResolveHierarchy(o.lng || this.language) : N.push(o.lng || this.language);
        const A = (I, D, et) => {
          var un;
          const tt = k && et !== m ? et : j;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(I, u, D, tt, te, o) : (un = this.backendConnector) != null && un.saveMissing && this.backendConnector.saveMissing(I, u, D, tt, te, o), this.emit("missingKey", I, u, D, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && v ? N.forEach((I) => {
          const D = this.pluralResolver.getSuffixes(I, o);
          C && o[`defaultValue${this.options.pluralSeparator}zero`] && D.indexOf(`${this.options.pluralSeparator}zero`) < 0 && D.push(`${this.options.pluralSeparator}zero`), D.forEach((et) => {
            A([I], s + et, o[`defaultValue${et}`] || E);
          });
        }) : A(N, s, E));
      }
      m = this.extendTranslation(m, t, o, y, r), Z && m === s && this.options.appendNamespaceToMissingKey && (m = `${u}${c}${s}`), (Z || ee) && this.options.parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${s}` : s, ee ? m : void 0, o));
    }
    return i ? (y.res = m, y.usedParams = this.getUsedParamsDetails(o), y) : m;
  }
  extendTranslation(t, n, r, o, i) {
    var a, u;
    if ((a = this.i18nFormat) != null && a.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
        resolved: o
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const c = R(t) && (((u = r == null ? void 0 : r.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (c) {
        const y = t.match(this.interpolator.nestingRegexp);
        f = y && y.length;
      }
      let h = r.replace && !R(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (h = {
        ...this.options.interpolation.defaultVariables,
        ...h
      }), t = this.interpolator.interpolate(t, h, r.lng || this.language || o.usedLng, r), c) {
        const y = t.match(this.interpolator.nestingRegexp), m = y && y.length;
        f < m && (r.nest = !1);
      }
      !r.lng && o && o.res && (r.lng = this.language || o.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, (...y) => (i == null ? void 0 : i[0]) === y[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`), null) : this.translate(...y, n), r)), r.interpolation && this.interpolator.reset();
    }
    const l = r.postProcess || this.options.postProcess, s = R(l) ? [l] : l;
    return t != null && (s != null && s.length) && r.applyPostProcessor !== !1 && (t = Rf.handle(s, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t, n = {}) {
    let r, o, i, l, s;
    return R(t) && (t = [t]), t.forEach((a) => {
      if (this.isValidLookup(r)) return;
      const u = this.extractFromKey(a, n), c = u.key;
      o = c;
      let f = u.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const h = n.count !== void 0 && !R(n.count), y = h && !n.ordinal && n.count === 0, m = n.context !== void 0 && (R(n.context) || typeof n.context == "number") && n.context !== "", w = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      f.forEach((x) => {
        var d, p;
        this.isValidLookup(r) || (s = x, !Ju[`${w[0]}-${x}`] && ((d = this.utils) != null && d.hasLoadedNamespace) && !((p = this.utils) != null && p.hasLoadedNamespace(s)) && (Ju[`${w[0]}-${x}`] = !0, this.logger.warn(`key "${o}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), w.forEach((g) => {
          var b;
          if (this.isValidLookup(r)) return;
          l = g;
          const v = [c];
          if ((b = this.i18nFormat) != null && b.addLookupKeys)
            this.i18nFormat.addLookupKeys(v, c, g, x, n);
          else {
            let L;
            h && (L = this.pluralResolver.getSuffix(g, n.count, n));
            const C = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (n.ordinal && L.indexOf(E) === 0 && v.push(c + L.replace(E, this.options.pluralSeparator)), v.push(c + L), y && v.push(c + C)), m) {
              const T = `${c}${this.options.contextSeparator || "_"}${n.context}`;
              v.push(T), h && (n.ordinal && L.indexOf(E) === 0 && v.push(T + L.replace(E, this.options.pluralSeparator)), v.push(T + L), y && v.push(T + C));
            }
          }
          let k;
          for (; k = v.pop(); )
            this.isValidLookup(r) || (i = k, r = this.getResource(g, x, k, n));
        }));
      });
    }), {
      res: r,
      usedKey: o,
      exactUsedKey: i,
      usedLng: l,
      usedNS: s
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r, o = {}) {
    var i;
    return (i = this.i18nFormat) != null && i.getResource ? this.i18nFormat.getResource(t, n, r, o) : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails(t = {}) {
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && !R(t.replace);
    let o = r ? t.replace : t;
    if (r && typeof t.count < "u" && (o.count = t.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !r) {
      o = {
        ...o
      };
      for (const i of n)
        delete o[i];
    }
    return o;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
class qu {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = at.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Ur(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Ur(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (R(t) && t.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const o = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const o = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(o)) return n = o;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      n = this.options.supportedLngs.find((l) => {
        if (l === i) return l;
        if (!(l.indexOf("-") < 0 && i.indexOf("-") < 0) && (l.indexOf("-") > 0 && i.indexOf("-") < 0 && l.substring(0, l.indexOf("-")) === i || l.indexOf(i) === 0 && i.length > 1))
          return l;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), R(t) && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], t), o = [], i = (l) => {
      l && (this.isSupportedCode(l) ? o.push(l) : this.logger.warn(`rejecting language code not found in supportedLngs: ${l}`));
    };
    return R(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : R(t) && i(this.formatLanguageCode(t)), r.forEach((l) => {
      o.indexOf(l) < 0 && i(this.formatLanguageCode(l));
    }), o;
  }
}
const ec = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, tc = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class vm {
  constructor(t, n = {}) {
    this.languageUtils = t, this.options = n, this.logger = at.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, n = {}) {
    const r = Ur(t === "dev" ? "en" : t), o = n.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
      cleanedCode: r,
      type: o
    });
    if (i in this.pluralRulesCache)
      return this.pluralRulesCache[i];
    let l;
    try {
      l = new Intl.PluralRules(r, {
        type: o
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), tc;
      if (!t.match(/-|_/)) return tc;
      const a = this.languageUtils.getLanguagePartFromCode(t);
      l = this.getRule(a, n);
    }
    return this.pluralRulesCache[i] = l, l;
  }
  needsPlural(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(t, n, r = {}) {
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), r ? r.resolvedOptions().pluralCategories.sort((o, i) => ec[o] - ec[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : [];
  }
  getSuffix(t, n, r = {}) {
    const o = this.getRule(t, r);
    return o ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", n, r));
  }
}
const nc = (e, t, n, r = ".", o = !0) => {
  let i = um(e, t, n);
  return !i && o && R(n) && (i = vs(e, n, r), i === void 0 && (i = vs(t, n, r))), i;
}, fl = (e) => e.replace(/\$/g, "$$$$");
class rc {
  constructor(t = {}) {
    var n;
    this.logger = at.create("interpolator"), this.options = t, this.format = ((n = t == null ? void 0 : t.interpolation) == null ? void 0 : n.format) || ((r) => r), this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: l,
      suffix: s,
      suffixEscaped: a,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: h,
      nestingPrefixEscaped: y,
      nestingSuffix: m,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: x,
      maxReplaces: d,
      alwaysFormat: p
    } = t.interpolation;
    this.escape = n !== void 0 ? n : dm, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? dn(i) : l || "{{", this.suffix = s ? dn(s) : a || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = h ? dn(h) : y || dn("$t("), this.nestingSuffix = m ? dn(m) : w || dn(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = d || 1e3, this.alwaysFormat = p !== void 0 ? p : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => (n == null ? void 0 : n.source) === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, o) {
    var y;
    let i, l, s;
    const a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const p = nc(n, a, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(p, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : p;
      }
      const w = m.split(this.formatSeparator), x = w.shift().trim(), d = w.join(this.formatSeparator).trim();
      return this.format(nc(n, a, x, this.options.keySeparator, this.options.ignoreJSONStructure), d, r, {
        ...o,
        ...n,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const c = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler, f = ((y = o == null ? void 0 : o.interpolation) == null ? void 0 : y.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => fl(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? fl(this.escape(m)) : fl(m)
    }].forEach((m) => {
      for (s = 0; i = m.regex.exec(t); ) {
        const w = i[1].trim();
        if (l = u(w), l === void 0)
          if (typeof c == "function") {
            const d = c(t, i, o);
            l = R(d) ? d : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, w))
            l = "";
          else if (f) {
            l = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`), l = "";
        else !R(l) && !this.useRawValueToEscape && (l = Qu(l));
        const x = m.safeValue(l);
        if (t = t.replace(i[0], x), f ? (m.regex.lastIndex += l.length, m.regex.lastIndex -= i[0].length) : m.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n, r = {}) {
    let o, i, l;
    const s = (a, u) => {
      const c = this.nestingOptionsSeparator;
      if (a.indexOf(c) < 0) return a;
      const f = a.split(new RegExp(`${c}[ ]*{`));
      let h = `{${f[1]}`;
      a = f[0], h = this.interpolate(h, l);
      const y = h.match(/'/g), m = h.match(/"/g);
      (((y == null ? void 0 : y.length) ?? 0) % 2 === 0 && !m || m.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        l = JSON.parse(h), u && (l = {
          ...u,
          ...l
        });
      } catch (w) {
        return this.logger.warn(`failed parsing options string in nesting for key ${a}`, w), `${a}${c}${h}`;
      }
      return l.defaultValue && l.defaultValue.indexOf(this.prefix) > -1 && delete l.defaultValue, a;
    };
    for (; o = this.nestingRegexp.exec(t); ) {
      let a = [];
      l = {
        ...r
      }, l = l.replace && !R(l.replace) ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
      const u = /{.*}/.test(o[1]) ? o[1].lastIndexOf("}") + 1 : o[1].indexOf(this.formatSeparator);
      if (u !== -1 && (a = o[1].slice(u).split(this.formatSeparator).map((c) => c.trim()).filter(Boolean), o[1] = o[1].slice(0, u)), i = n(s.call(this, o[1].trim(), l), l), i && o[0] === t && !R(i)) return i;
      R(i) || (i = Qu(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), a.length && (i = a.reduce((c, f) => this.format(c, f, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const wm = (e) => {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const o = r[1].substring(0, r[1].length - 1);
    t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((l) => {
      if (l) {
        const [s, ...a] = l.split(":"), u = a.join(":").trim().replace(/^'+|'+$/g, ""), c = s.trim();
        n[c] || (n[c] = u), u === "false" && (n[c] = !1), u === "true" && (n[c] = !0), isNaN(u) || (n[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}, oc = (e) => {
  const t = {};
  return (n, r, o) => {
    let i = o;
    o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (i = {
      ...i,
      [o.interpolationkey]: void 0
    });
    const l = r + JSON.stringify(i);
    let s = t[l];
    return s || (s = e(Ur(r), o), t[l] = s), s(n);
  };
}, xm = (e) => (t, n, r) => e(Ur(n), r)(t);
class km {
  constructor(t = {}) {
    this.logger = at.create("formatter"), this.options = t, this.init(t);
  }
  init(t, n = {
    interpolation: {}
  }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const r = n.cacheInBuiltFormats ? oc : xm;
    this.formats = {
      number: r((o, i) => {
        const l = new Intl.NumberFormat(o, {
          ...i
        });
        return (s) => l.format(s);
      }),
      currency: r((o, i) => {
        const l = new Intl.NumberFormat(o, {
          ...i,
          style: "currency"
        });
        return (s) => l.format(s);
      }),
      datetime: r((o, i) => {
        const l = new Intl.DateTimeFormat(o, {
          ...i
        });
        return (s) => l.format(s);
      }),
      relativetime: r((o, i) => {
        const l = new Intl.RelativeTimeFormat(o, {
          ...i
        });
        return (s) => l.format(s, i.range || "day");
      }),
      list: r((o, i) => {
        const l = new Intl.ListFormat(o, {
          ...i
        });
        return (s) => l.format(s);
      })
    };
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = oc(n);
  }
  format(t, n, r, o = {}) {
    const i = n.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((s) => s.indexOf(")") > -1)) {
      const s = i.findIndex((a) => a.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, s)].join(this.formatSeparator);
    }
    return i.reduce((s, a) => {
      var f;
      const {
        formatName: u,
        formatOptions: c
      } = wm(a);
      if (this.formats[u]) {
        let h = s;
        try {
          const y = ((f = o == null ? void 0 : o.formatParams) == null ? void 0 : f[o.interpolationkey]) || {}, m = y.locale || y.lng || o.locale || o.lng || r;
          h = this.formats[u](s, m, {
            ...c,
            ...o,
            ...y
          });
        } catch (y) {
          this.logger.warn(y);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
const Sm = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class bm extends Pi {
  constructor(t, n, r, o = {}) {
    var i, l;
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = at.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (l = (i = this.backend) == null ? void 0 : i.init) == null || l.call(i, r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {}, l = {}, s = {}, a = {};
    return t.forEach((u) => {
      let c = !0;
      n.forEach((f) => {
        const h = `${u}|${f}`;
        !r.reload && this.store.hasResourceBundle(u, f) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? l[h] === void 0 && (l[h] = !0) : (this.state[h] = 1, c = !1, l[h] === void 0 && (l[h] = !0), i[h] === void 0 && (i[h] = !0), a[f] === void 0 && (a[f] = !0)));
      }), c || (s[u] = !0);
    }), (Object.keys(i).length || Object.keys(l).length) && this.queue.push({
      pending: l,
      pendingCount: Object.keys(l).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(l),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(a)
    };
  }
  loaded(t, n, r) {
    const o = t.split("|"), i = o[0], l = o[1];
    n && this.emit("failedLoading", i, l, n), !n && r && this.store.addResourceBundle(i, l, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2, n && r && (this.state[t] = 0);
    const s = {};
    this.queue.forEach((a) => {
      am(a.loaded, [i], l), Sm(a, t), n && a.errors.push(n), a.pendingCount === 0 && !a.done && (Object.keys(a.loaded).forEach((u) => {
        s[u] || (s[u] = {});
        const c = a.loaded[u];
        c.length && c.forEach((f) => {
          s[u][f] === void 0 && (s[u][f] = !0);
        });
      }), a.done = !0, a.errors.length ? a.callback(a.errors) : a.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((a) => !a.done);
  }
  read(t, n, r, o = 0, i = this.retryTimeout, l) {
    if (!t.length) return l(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: i,
        callback: l
      });
      return;
    }
    this.readingCalls++;
    const s = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (u && c && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, o + 1, i * 2, l);
        }, i);
        return;
      }
      l(u, c);
    }, a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function" ? u.then((c) => s(null, c)).catch(s) : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return a(t, n, s);
  }
  prepareLoading(t, n, r = {}, o) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    R(t) && (t = this.languageUtils.toResolveHierarchy(t)), R(n) && (n = [n]);
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length)
      return i.pending.length || o(), null;
    i.toLoad.forEach((l) => {
      this.loadOne(l);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t, n = "") {
    const r = t.split("|"), o = r[0], i = r[1];
    this.read(o, i, "read", void 0, void 0, (l, s) => {
      l && this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`, l), !l && s && this.logger.log(`${n}loaded namespace ${i} for language ${o}`, s), this.loaded(t, l, s);
    });
  }
  saveMissing(t, n, r, o, i, l = {}, s = () => {
  }) {
    var a, u, c, f, h;
    if ((u = (a = this.services) == null ? void 0 : a.utils) != null && u.hasLoadedNamespace && !((f = (c = this.services) == null ? void 0 : c.utils) != null && f.hasLoadedNamespace(n))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((h = this.backend) != null && h.create) {
        const y = {
          ...l,
          isUpdate: i
        }, m = this.backend.create.bind(this.backend);
        if (m.length < 6)
          try {
            let w;
            m.length === 5 ? w = m(t, n, r, o, y) : w = m(t, n, r, o), w && typeof w.then == "function" ? w.then((x) => s(null, x)).catch(s) : s(null, w);
          } catch (w) {
            s(w);
          }
        else
          m(t, n, r, o, s, y);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
const pl = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (e) => {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), R(e[1]) && (t.defaultValue = e[1]), R(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const n = e[3] || e[2];
      Object.keys(n).forEach((r) => {
        t[r] = n[r];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), ic = (e) => {
  var t, n;
  return R(e.ns) && (e.ns = [e.ns]), R(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), R(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), ((n = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null ? void 0 : n.call(t, "cimode")) < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e;
}, xo = () => {
}, Em = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
};
class Lr extends Pi {
  constructor(t = {}, n) {
    if (super(), this.options = ic(t), this.services = {}, this.logger = at, this.modules = {
      external: []
    }, Em(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init(t = {}, n) {
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (R(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = pl();
    this.options = {
      ...r,
      ...this.options,
      ...ic(t)
    }, this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = r.overloadTranslationOptionHandler);
    const o = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? at.init(o(this.modules.logger), this.options) : at.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = km;
      const c = new qu(this.options);
      this.store = new Zu(this.options.resources, this.options);
      const f = this.services;
      f.logger = at, f.resourceStore = this.store, f.languageUtils = c, f.pluralResolver = new vm(c, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (f.formatter = o(u), f.formatter.init && f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new rc(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new bm(o(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", (y, ...m) => {
        this.emit(y, ...m);
      }), this.modules.languageDetector && (f.languageDetector = o(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = o(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new gi(this.services, this.options), this.translator.on("*", (y, ...m) => {
        this.emit(y, ...m);
      }), this.modules.external.forEach((y) => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = xo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...c) => this.store[u](...c);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...c) => (this.store[u](...c), this);
    });
    const s = lr(), a = () => {
      const u = (c, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), s.resolve(f), n(c, f);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? a() : setTimeout(a, 0), s;
  }
  loadResources(t, n = xo) {
    var i, l;
    let r = n;
    const o = R(t) ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const s = [], a = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((f) => {
          f !== "cimode" && s.indexOf(f) < 0 && s.push(f);
        });
      };
      o ? a(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => a(c)), (l = (i = this.options.preload) == null ? void 0 : i.forEach) == null || l.call(i, (u) => a(u)), this.services.backendConnector.load(s, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(u);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const o = lr();
    return typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), r || (r = xo), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Rf.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
    }
  }
  changeLanguage(t, n) {
    this.isLanguageChangingTo = t;
    const r = lr();
    this.emit("languageChanging", t);
    const o = (s) => {
      this.language = s, this.languages = this.services.languageUtils.toResolveHierarchy(s), this.resolvedLanguage = void 0, this.setResolvedLanguage(s);
    }, i = (s, a) => {
      a ? this.isLanguageChangingTo === t && (o(a), this.translator.changeLanguage(a), this.isLanguageChangingTo = void 0, this.emit("languageChanged", a), this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0, r.resolve((...u) => this.t(...u)), n && n(s, (...u) => this.t(...u));
    }, l = (s) => {
      var c, f;
      !t && !s && this.services.languageDetector && (s = []);
      const a = R(s) ? s : s && s[0], u = this.store.hasLanguageSomeTranslations(a) ? a : this.services.languageUtils.getBestMatchFromCodes(R(s) ? [s] : s);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), (f = (c = this.services.languageDetector) == null ? void 0 : c.cacheUserLanguage) == null || f.call(c, u)), this.loadResources(u, (h) => {
        i(h, u);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(t), r;
  }
  getFixedT(t, n, r) {
    const o = (i, l, ...s) => {
      let a;
      typeof l != "object" ? a = this.options.overloadTranslationOptionHandler([i, l].concat(s)) : a = {
        ...l
      }, a.lng = a.lng || o.lng, a.lngs = a.lngs || o.lngs, a.ns = a.ns || o.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || o.keyPrefix);
      const u = this.options.keySeparator || ".";
      let c;
      return a.keyPrefix && Array.isArray(i) ? c = i.map((f) => (typeof f == "function" && (f = ws(f, {
        ...this.options,
        ...l
      })), `${a.keyPrefix}${u}${f}`)) : (typeof i == "function" && (i = ws(i, {
        ...this.options,
        ...l
      })), c = a.keyPrefix ? `${a.keyPrefix}${u}${i}` : i), this.t(c, a);
    };
    return R(t) ? o.lng = t : o.lngs = t, o.ns = n, o.keyPrefix = r, o;
  }
  t(...t) {
    var n;
    return (n = this.translator) == null ? void 0 : n.translate(...t);
  }
  exists(...t) {
    var n;
    return (n = this.translator) == null ? void 0 : n.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, n = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const l = (s, a) => {
      const u = this.services.backendConnector.state[`${s}|${a}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (n.precheck) {
      const s = n.precheck(this, l);
      if (s !== void 0) return s;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || l(r, t) && (!o || l(i, t)));
  }
  loadNamespaces(t, n) {
    const r = lr();
    return this.options.ns ? (R(t) && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = lr();
    R(t) && (t = [t]);
    const o = this.options.preload || [], i = t.filter((l) => o.indexOf(l) < 0 && this.services.languageUtils.isSupportedCode(l));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((l) => {
      r.resolve(), n && n(l);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    var o, i;
    if (t || (t = this.resolvedLanguage || (((o = this.languages) == null ? void 0 : o.length) > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    try {
      const l = new Intl.Locale(t);
      if (l && l.getTextInfo) {
        const s = l.getTextInfo();
        if (s && s.direction) return s.direction;
      }
    } catch {
    }
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((i = this.services) == null ? void 0 : i.languageUtils) || new qu(pl());
    return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(t = {}, n) {
    const r = new Lr(t, n);
    return r.createInstance = Lr.createInstance, r;
  }
  cloneInstance(t = {}, n = xo) {
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new Lr(o);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((s) => {
      i[s] = this[s];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r) {
      const s = Object.keys(this.store.data).reduce((a, u) => (a[u] = {
        ...this.store.data[u]
      }, a[u] = Object.keys(a[u]).reduce((c, f) => (c[f] = {
        ...a[u][f]
      }, c), a[u]), a), {});
      i.store = new Zu(s, o), i.services.resourceStore = i.store;
    }
    if (t.interpolation) {
      const a = {
        ...pl().interpolation,
        ...this.options.interpolation,
        ...t.interpolation
      }, u = {
        ...o,
        interpolation: a
      };
      i.services.interpolator = new rc(u);
    }
    return i.translator = new gi(i.services, o), i.translator.on("*", (s, ...a) => {
      i.emit(s, ...a);
    }), i.init(o, n), i.translator.options = o, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const Le = Lr.createInstance();
Le.createInstance;
Le.dir;
Le.init;
Le.loadResources;
Le.reloadResources;
Le.use;
Le.changeLanguage;
Le.getFixedT;
Le.t;
Le.exists;
Le.setDefaultNamespace;
Le.hasLoadedNamespace;
Le.loadNamespaces;
Le.loadLanguages;
const Lm = "Accessibility Menu", Cm = "Open accessibility menu", Tm = "Close accessibility menu", $m = "en-US", Nm = {
  textLayout: "Text & Layout",
  visualAids: "Visual Aids"
}, Om = {
  fontSize: "Font Size",
  lineHeight: "Line Height",
  letterSpacing: "Letter Spacing"
}, zm = {
  darkMode: "Dark Mode",
  contrast: "Night Shift",
  dyslexia: "Dyslexia-Friendly",
  readableFont: "Readable Font",
  highlightLinks: "Highlight Links",
  hideImages: "Hide Images & Videos",
  magnifier: "Reading Mask",
  reduceMotion: "Reduce Motion",
  bigCursor: "Big Cursor",
  readAloud: "Read Aloud"
}, Rm = "Reset all settings", Pm = {
  enabled: "Read Aloud enabled",
  disabled: "Read Aloud disabled"
}, Am = {
  panelTitle: Lm,
  floatingButtonLabel: Cm,
  closeLabel: Tm,
  speechLang: $m,
  sections: Nm,
  sliders: Om,
  toggles: zm,
  resetButton: Rm,
  readAloudAnnouncements: Pm
}, Mm = "Barrierefreiheitsmenü", Im = "Barrierefreiheitsmenü öffnen", _m = "Barrierefreiheitsmenü schließen", jm = "de-DE", Fm = {
  textLayout: "Text & Layout",
  visualAids: "Visuelle Hilfen"
}, Dm = {
  fontSize: "Textgröße",
  lineHeight: "Zeilenabstand",
  letterSpacing: "Zeichenabstand"
}, Bm = {
  darkMode: "Dark Mode",
  contrast: "Night Shift",
  dyslexia: "Legasthenie freundlich",
  readableFont: "Lesbare Schrift",
  highlightLinks: "Links hervorheben",
  hideImages: "Bilder & Videos ausblenden",
  magnifier: "Lesemaske",
  reduceMotion: "Weniger Bewegung",
  bigCursor: "Großer Cursor",
  readAloud: "Vorlesen"
}, Hm = "Alle Einstellungen zurücksetzen", Vm = {
  enabled: "Vorlesen aktiviert",
  disabled: "Vorlesen deaktiviert"
}, Um = {
  panelTitle: Mm,
  floatingButtonLabel: Im,
  closeLabel: _m,
  speechLang: jm,
  sections: Fm,
  sliders: Dm,
  toggles: Bm,
  resetButton: Hm,
  readAloudAnnouncements: Vm
}, Wm = "Menu d’accessibilité", Km = "Ouvrir le menu d’accessibilité", Qm = "Fermer le menu d’accessibilité", Gm = "fr-FR", Ym = {
  textLayout: "Texte & mise en page",
  visualAids: "Aides visuelles"
}, Xm = {
  fontSize: "Taille du texte",
  lineHeight: "Hauteur de ligne",
  letterSpacing: "Espacement des lettres"
}, Zm = {
  darkMode: "Mode sombre",
  contrast: "Mode nuit",
  dyslexia: "Adapté à la dyslexie",
  readableFont: "Police lisible",
  highlightLinks: "Mettre en évidence les liens",
  hideImages: "Masquer images et vidéos",
  magnifier: "Masque de lecture",
  reduceMotion: "Réduire les animations",
  bigCursor: "Grand curseur",
  readAloud: "Lire à voix haute"
}, Jm = "Réinitialiser tous les réglages", qm = {
  enabled: "Lecture à voix haute activée",
  disabled: "Lecture à voix haute désactivée"
}, ey = {
  panelTitle: Wm,
  floatingButtonLabel: Km,
  closeLabel: Qm,
  speechLang: Gm,
  sections: Ym,
  sliders: Xm,
  toggles: Zm,
  resetButton: Jm,
  readAloudAnnouncements: qm
}, ty = "Menú de accesibilidad", ny = "Abrir el menú de accesibilidad", ry = "Cerrar el menú de accesibilidad", oy = "es-ES", iy = {
  textLayout: "Texto y diseño",
  visualAids: "Ayudas visuales"
}, ly = {
  fontSize: "Tamaño de texto",
  lineHeight: "Altura de línea",
  letterSpacing: "Espaciado de letras"
}, sy = {
  darkMode: "Modo oscuro",
  contrast: "Modo noche",
  dyslexia: "Apto para dislexia",
  readableFont: "Fuente legible",
  highlightLinks: "Resaltar enlaces",
  hideImages: "Ocultar imágenes y vídeos",
  magnifier: "Máscara de lectura",
  reduceMotion: "Reducir movimiento",
  bigCursor: "Cursor grande",
  readAloud: "Leer en voz alta"
}, ay = "Restablecer todos los ajustes", uy = {
  enabled: "Lectura en voz alta activada",
  disabled: "Lectura en voz alta desactivada"
}, cy = {
  panelTitle: ty,
  floatingButtonLabel: ny,
  closeLabel: ry,
  speechLang: oy,
  sections: iy,
  sliders: ly,
  toggles: sy,
  resetButton: ay,
  readAloudAnnouncements: uy
}, dy = "Menu accessibilità", fy = "Apri il menu accessibilità", py = "Chiudi il menu di accessibilità", hy = "it-IT", gy = {
  textLayout: "Testo e layout",
  visualAids: "Aiuti visivi"
}, my = {
  fontSize: "Dimensione testo",
  lineHeight: "Altezza riga",
  letterSpacing: "Spaziatura delle lettere"
}, yy = {
  darkMode: "Modalità scura",
  contrast: "Modalità notturna",
  dyslexia: "Adatto alla dislessia",
  readableFont: "Carattere leggibile",
  highlightLinks: "Evidenzia link",
  hideImages: "Nascondi immagini e video",
  magnifier: "Maschera di lettura",
  reduceMotion: "Riduci movimento",
  bigCursor: "Cursore grande",
  readAloud: "Leggi ad alta voce"
}, vy = "Reimposta tutte le impostazioni", wy = {
  enabled: "Lettura ad alta voce attivata",
  disabled: "Lettura ad alta voce disattivata"
}, xy = {
  panelTitle: dy,
  floatingButtonLabel: fy,
  closeLabel: py,
  speechLang: hy,
  sections: gy,
  sliders: my,
  toggles: yy,
  resetButton: vy,
  readAloudAnnouncements: wy
}, ky = "Toegankelijkheidsmenu", Sy = "Toegankelijkheidsmenu openen", by = "Toegankelijkheidsmenu sluiten", Ey = "nl-NL", Ly = {
  textLayout: "Tekst en lay-out",
  visualAids: "Visuele hulpmiddelen"
}, Cy = {
  fontSize: "Tekstgrootte",
  lineHeight: "Regelhoogte",
  letterSpacing: "Letterafstand"
}, Ty = {
  darkMode: "Donkere modus",
  contrast: "Nachtmodus",
  dyslexia: "Dyslexie-vriendelijk",
  readableFont: "Leesbaar lettertype",
  highlightLinks: "Links markeren",
  hideImages: "Afbeeldingen en video’s verbergen",
  magnifier: "Leesmasker",
  reduceMotion: "Beweging verminderen",
  bigCursor: "Grote cursor",
  readAloud: "Voorlezen"
}, $y = "Alle instellingen resetten", Ny = {
  enabled: "Voorlezen ingeschakeld",
  disabled: "Voorlezen uitgeschakeld"
}, Oy = {
  panelTitle: ky,
  floatingButtonLabel: Sy,
  closeLabel: by,
  speechLang: Ey,
  sections: Ly,
  sliders: Cy,
  toggles: Ty,
  resetButton: $y,
  readAloudAnnouncements: Ny
}, zy = "Menu de acessibilidade", Ry = "Abrir menu de acessibilidade", Py = "Fechar o menu de acessibilidade", Ay = "pt-PT", My = {
  textLayout: "Texto e layout",
  visualAids: "Ajudas visuais"
}, Iy = {
  fontSize: "Tamanho do texto",
  lineHeight: "Altura da linha",
  letterSpacing: "Espaçamento entre letras"
}, _y = {
  darkMode: "Modo escuro",
  contrast: "Modo noturno",
  dyslexia: "Amigável para dislexia",
  readableFont: "Fonte legível",
  highlightLinks: "Realçar links",
  hideImages: "Ocultar imagens e vídeos",
  magnifier: "Máscara de leitura",
  reduceMotion: "Reduzir movimento",
  bigCursor: "Cursor grande",
  readAloud: "Ler em voz alta"
}, jy = "Repor todas as definições", Fy = {
  enabled: "Leitura em voz alta ativada",
  disabled: "Leitura em voz alta desativada"
}, Dy = {
  panelTitle: zy,
  floatingButtonLabel: Ry,
  closeLabel: Py,
  speechLang: Ay,
  sections: My,
  sliders: Iy,
  toggles: _y,
  resetButton: jy,
  readAloudAnnouncements: Fy
}, By = "Menu dostępności", Hy = "Otwórz menu dostępności", Vy = "Zamknij menu dostępności", Uy = "pl-PL", Wy = {
  textLayout: "Tekst i układ",
  visualAids: "Ułatwienia wizualne"
}, Ky = {
  fontSize: "Rozmiar tekstu",
  lineHeight: "Wysokość linii",
  letterSpacing: "Odstępy między literami"
}, Qy = {
  darkMode: "Tryb ciemny",
  contrast: "Tryb nocny",
  dyslexia: "Przyjazne dla dysleksji",
  readableFont: "Czytelna czcionka",
  highlightLinks: "Wyróżnij linki",
  hideImages: "Ukryj obrazy i wideo",
  magnifier: "Maska czytania",
  reduceMotion: "Ogranicz ruch",
  bigCursor: "Duży kursor",
  readAloud: "Czytaj na głos"
}, Gy = "Zresetuj wszystkie ustawienia", Yy = {
  enabled: "Czytanie na głos włączone",
  disabled: "Czytanie na głos wyłączone"
}, Xy = {
  panelTitle: By,
  floatingButtonLabel: Hy,
  closeLabel: Vy,
  speechLang: Uy,
  sections: Wy,
  sliders: Ky,
  toggles: Qy,
  resetButton: Gy,
  readAloudAnnouncements: Yy
}, Zy = "Erişilebilirlik menüsü", Jy = "Erişilebilirlik menüsünü aç", qy = "Erişilebilirlik menüsünü kapat", ev = "tr-TR", tv = {
  textLayout: "Metin ve düzen",
  visualAids: "Görsel yardımcılar"
}, nv = {
  fontSize: "Yazı boyutu",
  lineHeight: "Satır yüksekliği",
  letterSpacing: "Harf aralığı"
}, rv = {
  darkMode: "Karanlık mod",
  contrast: "Gece modu",
  dyslexia: "Disleksi dostu",
  readableFont: "Okunabilir yazı tipi",
  highlightLinks: "Bağlantıları vurgula",
  hideImages: "Görselleri ve videoları gizle",
  magnifier: "Okuma maskesi",
  reduceMotion: "Hareketi azalt",
  bigCursor: "Büyük imleç",
  readAloud: "Sesli okuma"
}, ov = "Tüm ayarları sıfırla", iv = {
  enabled: "Sesli okuma etkin",
  disabled: "Sesli okuma devre dışı"
}, lv = {
  panelTitle: Zy,
  floatingButtonLabel: Jy,
  closeLabel: qy,
  speechLang: ev,
  sections: tv,
  sliders: nv,
  toggles: rv,
  resetButton: ov,
  readAloudAnnouncements: iv
}, sv = "Меню доступности", av = "Открыть меню доступности", uv = "Закрыть меню специальных возможностей", cv = "ru-RU", dv = {
  textLayout: "Текст и макет",
  visualAids: "Визуальные помощники"
}, fv = {
  fontSize: "Размер текста",
  lineHeight: "Высота строки",
  letterSpacing: "Интервал между буквами"
}, pv = {
  darkMode: "Темный режим",
  contrast: "Ночной режим",
  dyslexia: "Для дислексии",
  readableFont: "Читаемый шрифт",
  highlightLinks: "Подсветка ссылок",
  hideImages: "Скрыть изображения и видео",
  magnifier: "Маска чтения",
  reduceMotion: "Уменьшить движение",
  bigCursor: "Большой курсор",
  readAloud: "Читать вслух"
}, hv = "Сбросить все настройки", gv = {
  enabled: "Озвучивание включено",
  disabled: "Озвучивание выключено"
}, mv = {
  panelTitle: sv,
  floatingButtonLabel: av,
  closeLabel: uv,
  speechLang: cv,
  sections: dv,
  sliders: fv,
  toggles: pv,
  resetButton: hv,
  readAloudAnnouncements: gv
}, yv = "قائمة إمكانية الوصول", vv = "فتح قائمة إمكانية الوصول", wv = "إغلاق قائمة إمكانية الوصول", xv = "ar-SA", kv = {
  textLayout: "النص والتخطيط",
  visualAids: "مساعدات بصرية"
}, Sv = {
  fontSize: "حجم الخط",
  lineHeight: "ارتفاع السطر",
  letterSpacing: "تباعد الأحرف"
}, bv = {
  darkMode: "الوضع الداكن",
  contrast: "الوضع الليلي",
  dyslexia: "مناسب لعسر القراءة",
  readableFont: "خط واضح",
  highlightLinks: "تمييز الروابط",
  hideImages: "إخفاء الصور والفيديوهات",
  magnifier: "قناع القراءة",
  reduceMotion: "تقليل الحركة",
  bigCursor: "مؤشر كبير",
  readAloud: "قراءة بصوت عالٍ"
}, Ev = "إعادة ضبط جميع الإعدادات", Lv = {
  enabled: "تم تفعيل القراءة بصوت عالٍ",
  disabled: "تم إيقاف القراءة بصوت عالٍ"
}, Cv = {
  panelTitle: yv,
  floatingButtonLabel: vv,
  closeLabel: wv,
  speechLang: xv,
  sections: kv,
  sliders: Sv,
  toggles: bv,
  resetButton: Ev,
  readAloudAnnouncements: Lv
}, Tv = "无障碍菜单", $v = "打开无障碍菜单", Nv = "关闭无障碍菜单", Ov = "zh-CN", zv = {
  textLayout: "文字与布局",
  visualAids: "视觉辅助"
}, Rv = {
  fontSize: "字体大小",
  lineHeight: "行高",
  letterSpacing: "字符间距"
}, Pv = {
  darkMode: "深色模式",
  contrast: "夜间模式",
  dyslexia: "阅读障碍友好",
  readableFont: "易读字体",
  highlightLinks: "高亮链接",
  hideImages: "隐藏图片和视频",
  magnifier: "阅读遮罩",
  reduceMotion: "减少动态效果",
  bigCursor: "大光标",
  readAloud: "朗读"
}, Av = "重置所有设置", Mv = {
  enabled: "朗读已开启",
  disabled: "朗读已关闭"
}, Iv = {
  panelTitle: Tv,
  floatingButtonLabel: $v,
  closeLabel: Nv,
  speechLang: Ov,
  sections: zv,
  sliders: Rv,
  toggles: Pv,
  resetButton: Av,
  readAloudAnnouncements: Mv
}, _v = "アクセシビリティメニュー", jv = "アクセシビリティメニューを開く", Fv = "アクセシビリティメニューを閉じる", Dv = "ja-JP", Bv = {
  textLayout: "テキストとレイアウト",
  visualAids: "視覚支援"
}, Hv = {
  fontSize: "文字サイズ",
  lineHeight: "行間",
  letterSpacing: "文字間隔"
}, Vv = {
  darkMode: "ダークモード",
  contrast: "ナイトシフト",
  dyslexia: "ディスレクシア向け",
  readableFont: "読みやすいフォント",
  highlightLinks: "リンクを強調",
  hideImages: "画像と動画を非表示",
  magnifier: "読書マスク",
  reduceMotion: "動きを減らす",
  bigCursor: "大きなカーソル",
  readAloud: "読み上げ"
}, Uv = "すべての設定をリセット", Wv = {
  enabled: "読み上げが有効になりました",
  disabled: "読み上げが無効になりました"
}, Kv = {
  panelTitle: _v,
  floatingButtonLabel: jv,
  closeLabel: Fv,
  speechLang: Dv,
  sections: Bv,
  sliders: Hv,
  toggles: Vv,
  resetButton: Uv,
  readAloudAnnouncements: Wv
}, Qv = {
  en: { widget: Am },
  de: { widget: Um },
  fr: { widget: ey },
  es: { widget: cy },
  it: { widget: xy },
  nl: { widget: Oy },
  pt: { widget: Dy },
  pl: { widget: Xy },
  tr: { widget: lv },
  ru: { widget: mv },
  ar: { widget: Cv },
  zh: { widget: Iv },
  ja: { widget: Kv }
}, Gv = /* @__PURE__ */ new Set(["ar", "fa", "he", "ur"]), Mo = Le.createInstance();
Mo.init({
  fallbackLng: "en",
  resources: Qv,
  defaultNS: "widget",
  interpolation: { escapeValue: !1 },
  initImmediate: !1
});
function Yv(e) {
  const t = (e || "").toLowerCase();
  return t.startsWith("de") ? "de" : t.startsWith("fr") ? "fr" : t.startsWith("es") ? "es" : t.startsWith("it") ? "it" : t.startsWith("nl") ? "nl" : t.startsWith("pt") ? "pt" : t.startsWith("pl") ? "pl" : t.startsWith("tr") ? "tr" : t.startsWith("ru") ? "ru" : t.startsWith("ar") ? "ar" : t.startsWith("zh") ? "zh" : t.startsWith("ja") ? "ja" : "en";
}
function lc() {
  var n;
  if (typeof document > "u")
    return typeof navigator < "u" && navigator.language ? navigator.language : "en";
  const e = document.documentElement.getAttribute("lang");
  if (e && e.trim()) return e;
  const t = (n = document.querySelector('meta[name="language"]')) == null ? void 0 : n.getAttribute("content");
  return t && t.trim() ? t : typeof navigator < "u" && navigator.language ? navigator.language : "en";
}
function sc(e) {
  var r;
  if (typeof document < "u") {
    const o = document.documentElement.getAttribute("dir") || ((r = document.body) == null ? void 0 : r.getAttribute("dir"));
    if (o === "ltr" || o === "rtl")
      return o;
  }
  if (!e) return "ltr";
  const n = e.toLowerCase().split("-")[0];
  return Gv.has(n) ? "rtl" : "ltr";
}
function Xv(e) {
  const t = Yv(e);
  if (Mo.language !== t) {
    const r = Mo.changeLanguage(t);
    r instanceof Promise && r.catch(() => {
    });
  }
  const n = Mo.getResourceBundle(
    t,
    "widget"
  );
  return {
    locale: t,
    strings: n
  };
}
const Zv = ({ options: e }) => {
  const { strings: t } = P.useMemo(
    () => Xv(e.locale),
    [e.locale]
  ), n = P.useMemo(() => {
    var x;
    const w = (x = e.locale) == null ? void 0 : x.trim();
    return w && w.length > 0 ? w : t.speechLang;
  }, [e.locale, t.speechLang]), r = t.readAloudAnnouncements, o = P.useCallback(
    () => ({
      ...ss,
      ...e.theme ? { theme: e.theme } : {},
      ...e.defaultSettings
    }),
    [e.defaultSettings, e.theme]
  ), [i, l] = P.useState(!1), [s, a] = P.useState(() => {
    const w = o();
    try {
      const x = localStorage.getItem(li);
      if (!x) return w;
      const d = JSON.parse(x);
      return d && typeof d == "object" ? { ...w, ...d } : w;
    } catch {
      return w;
    }
  }), u = JSON.stringify(e.defaultSettings ?? null), c = P.useRef(u);
  P.useEffect(() => {
    c.current !== u && (c.current = u, e.defaultSettings && a((w) => ({ ...w, ...e.defaultSettings })));
  }, [u, e.defaultSettings]), Zg({
    enabled: s.readAloud,
    lang: n,
    announcements: r
  }), P.useEffect(() => {
    try {
      const w = o(), x = {};
      for (const d of Object.keys(s))
        s[d] !== w[d] && (x[d] = s[d]);
      localStorage.setItem(li, JSON.stringify(x)), localStorage.setItem(
        ha,
        String(s.hideImages)
      );
    } catch {
    }
    Vn.applySettings(s);
  }, [s, o]), P.useEffect(() => {
    if (s.theme !== "auto" || typeof window.matchMedia != "function") return;
    const w = window.matchMedia("(prefers-color-scheme: dark)"), x = () => Vn.applySettings(s);
    return w.addEventListener("change", x), () => w.removeEventListener("change", x);
  }, [s]), P.useEffect(() => {
    if (!e.hotkey) return;
    const w = (x) => {
      const d = e.hotkey.split("+").map((T) => T.trim()).filter(Boolean);
      if (d.length === 0) return;
      const p = d[d.length - 1], g = d.slice(0, -1).map((T) => T.toLowerCase()), v = p.toLowerCase(), k = g.includes("alt") || g.includes("option"), b = g.includes("ctrl") || g.includes("control"), L = g.includes("shift"), C = g.includes("meta") || g.includes("cmd");
      (x.code === `Key${p.toUpperCase()}` || x.code === `Digit${p}` || x.code.toLowerCase() === v || x.key.toLowerCase() === v) && x.altKey === k && x.ctrlKey === b && x.shiftKey === L && x.metaKey === C && (l((T) => !T), x.preventDefault());
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [e.hotkey]);
  const f = P.useCallback(
    (w) => {
      a((x) => {
        const d = { ...x, ...w };
        return "theme" in w && d.theme === "dark" && (d.contrast = !1), "contrast" in w && d.contrast && (d.theme = "light"), "magnifier" in w && d.magnifier && (d.bigCursor = !1), "bigCursor" in w && d.bigCursor && (d.magnifier = !1), "dyslexiaFont" in w && d.dyslexiaFont && (d.readableFont = !1), "readableFont" in w && d.readableFont && (d.dyslexiaFont = !1), d;
      });
    },
    []
  ), h = P.useCallback(() => {
    const w = o();
    a(w);
  }, [o]), y = e.primaryColor || "#2563eb", m = e.position || "bottom-right";
  return /* @__PURE__ */ $.jsxs("div", { className: "area11y-wrapper", children: [
    /* @__PURE__ */ $.jsx(
      Ng,
      {
        onClick: () => l(!i),
        isOpen: i,
        position: m,
        primaryColor: y,
        ariaLabel: t.floatingButtonLabel
      }
    ),
    i && /* @__PURE__ */ $.jsx(
      Gg,
      {
        settings: s,
        onUpdate: f,
        onClose: () => l(!1),
        position: m,
        primaryColor: y,
        translations: t,
        hotkey: e.hotkey,
        onReset: h
      }
    )
  ] });
}, ac = '@font-face{font-family:Geist;src:url(/fonts/geist/Geist-Variable.woff2) format("woff2");font-weight:100 900;font-style:normal;font-display:swap}@font-face{font-family:OpenDyslexic;src:url(/fonts/opendyslexic/OpenDyslexic-Regular.eot);src:url(/fonts/opendyslexic/OpenDyslexic-Regular.eot?#iefix) format("embedded-opentype"),url(/fonts/opendyslexic/OpenDyslexic-Regular.woff2) format("woff2"),url(/fonts/opendyslexic/OpenDyslexic-Regular.woff) format("woff"),url(/fonts/opendyslexic/OpenDyslexic-Regular.otf) format("opentype");font-weight:400;font-style:normal}@font-face{font-family:OpenDyslexic;src:url(/fonts/opendyslexic/OpenDyslexic-Italic.eot);src:url(/fonts/opendyslexic/OpenDyslexic-Italic.eot?#iefix) format("embedded-opentype"),url(/fonts/opendyslexic/OpenDyslexic-Italic.woff2) format("woff2"),url(/fonts/opendyslexic/OpenDyslexic-Italic.woff) format("woff"),url(/fonts/opendyslexic/OpenDyslexic-Italic.otf) format("opentype");font-weight:400;font-style:italic}@font-face{font-family:OpenDyslexic;src:url(/fonts/opendyslexic/OpenDyslexic-Bold.eot);src:url(/fonts/opendyslexic/OpenDyslexic-Bold.eot?#iefix) format("embedded-opentype"),url(/fonts/opendyslexic/OpenDyslexic-Bold.woff2) format("woff2"),url(/fonts/opendyslexic/OpenDyslexic-Bold.woff) format("woff"),url(/fonts/opendyslexic/OpenDyslexic-Bold.otf) format("opentype");font-weight:700;font-style:normal}@font-face{font-family:OpenDyslexic;src:url(/fonts/opendyslexic/OpenDyslexic-Bold-Italic.eot);src:url(/fonts/opendyslexic/OpenDyslexic-Bold-Italic.eot?#iefix) format("embedded-opentype"),url(/fonts/opendyslexic/OpenDyslexic-Bold-Italic.woff2) format("woff2"),url(/fonts/opendyslexic/OpenDyslexic-Bold-Italic.woff) format("woff"),url(/fonts/opendyslexic/OpenDyslexic-Bold-Italic.otf) format("opentype");font-weight:700;font-style:italic}@font-face{font-family:Atkinson Hyperlegible;src:url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Regular.eot);src:url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Regular.eot?#iefix) format("embedded-opentype"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Regular.woff2) format("woff2"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Regular.woff) format("woff"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Atkinson Hyperlegible;src:url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold.eot);src:url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold.eot?#iefix) format("embedded-opentype"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold.woff2) format("woff2"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold.woff) format("woff"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:Atkinson Hyperlegible;src:url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Italic.eot);src:url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Italic.eot?#iefix) format("embedded-opentype"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Italic.woff2) format("woff2"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Italic.woff) format("woff"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Italic.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:Atkinson Hyperlegible;src:url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold-Italic.eot);src:url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold-Italic.eot?#iefix) format("embedded-opentype"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold-Italic.woff2) format("woff2"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold-Italic.woff) format("woff"),url(/fonts/atkinson-hyperlegible/Atkinson-Hyperlegible-Bold-Italic.ttf) format("truetype");font-weight:700;font-style:italic}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-1{top:.25rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-3{height:.75rem}.h-5{height:1.25rem}.h-8{height:2rem}.h-\\[2px\\]{height:2px}.w-3{width:.75rem}.w-8{width:2rem}.w-full{width:100%}.min-w-10{min-width:2.5rem}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-grab{cursor:grab}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-scroll{overflow-y:scroll}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-none{border-style:none}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-50{--tw-border-opacity: 1;border-color:rgb(249 250 251 / var(--tw-border-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.p-2{padding:.5rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.text-left{text-align:left}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-black{font-weight:900}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.tracking-tight{letter-spacing:-.025em}.tracking-widest{letter-spacing:.1em}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.sepia{--tw-sepia: sepia(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}html,body{height:100vh;font-family:Geist,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}.area11y-read-aloud-hover{cursor:pointer;outline:2px solid #2563eb;outline-offset:2px}.area11y-big-cursor-active .area11y-read-aloud-hover{cursor:url(/image/cursor_big.svg) 0 0,auto}.area11y-big-cursor-active,.area11y-big-cursor-active *{cursor:url(/image/cursor_big.svg) 0 0,auto}.area11y-big-cursor-active a:hover,.area11y-big-cursor-active .setting-btn div,.area11y-big-cursor-active .setting-btn div *,.area11y-big-cursor-active button,.area11y-big-cursor-active button:hover,.area11y-big-cursor-active button svg,.area11y-big-cursor-active [role=button]:hover,.area11y-big-cursor-active input:hover,.area11y-big-cursor-active select:hover,.area11y-big-cursor-active textarea:hover,.area11y-big-cursor-active [type=button]:hover,.area11y-big-cursor-active [type=submit]:hover,.area11y-big-cursor-active [type=reset]:hover{cursor:url(/image/pointinghand.svg) 0 0,auto}.setting-panel-scroll{overflow-y:auto;scrollbar-width:thin;scrollbar-color:transparent transparent;--scroll-thumb-color: #d4d4d8;--scroll-track-color: transparent}.setting-panel-scroll::-webkit-scrollbar{width:.375rem;height:.375rem}.setting-panel-scroll::-webkit-scrollbar-track{background:var(--scroll-track-color)}.setting-panel-scroll::-webkit-scrollbar-thumb{background:transparent;border-radius:999px}.setting-panel-scroll--visible{scrollbar-color:var(--scroll-thumb-color) transparent}.setting-panel-scroll--visible::-webkit-scrollbar-thumb{background:var(--scroll-thumb-color)}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.active\\:cursor-grabbing:active{cursor:grabbing}.active\\:bg-gray-200:active{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}@media (max-width: 460px){.max-\\[460px\\]\\:flex-col{flex-direction:column}}@media (min-width: 768px){.md\\:max-w-\\[calc\\(100\\%-35px\\)\\]{max-width:calc(100% - 35px)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}';
function Jv(e = {}) {
  var C;
  cg();
  const { selector: t = "body" } = e, n = document.querySelector(t);
  n || console.warn(
    `Area11y: Target "${t}" nicht gefunden. Nutze <body>.`
  );
  const r = n || document.body, o = r === document.body ? null : r.closest("body > *");
  o && (o.dataset.area11yHost = "true");
  const i = document.createElement("div");
  i.id = "area11y-root", Object.assign(i.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "2147483647",
    overflow: "visible"
  }), r.appendChild(i);
  const l = i.attachShadow({ mode: "open" });
  try {
    if (localStorage.getItem(ha) === "true") {
      let T = document.getElementById(
        "area11y-prehide-media"
      );
      T || (T = document.createElement("style"), T.id = "area11y-prehide-media", T.textContent = Sf, document.head.appendChild(T)), document.documentElement.classList.add(ai);
    }
  } catch {
  }
  try {
    const E = localStorage.getItem(li);
    {
      const T = {
        ...e.theme ? { theme: e.theme } : {},
        ...e.defaultSettings,
        ...E ? JSON.parse(E) : {}
      }, Y = typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches, he = T.contrast === !0, ee = !he && (T.theme === "dark" || T.theme === "auto" && Y);
      if (he || ee) {
        const Z = he ? ne : J, dt = he ? ce : se;
        document.documentElement.classList.add(Z);
        let j = document.getElementById(
          "area11y-prepaint-theme"
        );
        j || (j = document.createElement("style"), j.id = "area11y-prepaint-theme", j.innerHTML = `
						html.${Z} {
							color-scheme: ${he ? "light" : "dark"};
							background-color: ${dt.bg};
						}
						html.${Z} body {
							background-color: ${dt.bg} !important;
							color: ${dt.text} !important;
						}
					`, document.head.appendChild(j));
      }
    }
  } catch {
  }
  const s = (C = e.assetBase) == null ? void 0 : C.replace(/\/$/, ""), a = s ? ac.replace(
    /url\((['"]?)\/(fonts|image)\//g,
    `url($1${s}/$2/`
  ) : ac;
  s && Vn.setAssetBase(s);
  const u = (a.match(/@font-face[^}]+}/g) || []).join(
    `
`
  );
  if (u) {
    let E = document.getElementById(
      "area11y-fonts"
    );
    E || (E = document.createElement("style"), E.id = "area11y-fonts", document.head.appendChild(E)), E.innerHTML = u;
  }
  const c = (e.forceFontFamily || "Geist").replace(
    /"/g,
    '\\"'
  ), f = document.createElement("style");
  f.innerHTML = a, l.appendChild(f);
  const h = document.createElement("div");
  h.id = "app-root", h.style.pointerEvents = "auto", l.appendChild(h), document.documentElement.style.setProperty(
    "--area11y-accent",
    e.primaryColor || "#2563eb"
  );
  const y = lc(), m = (e.locale || y).trim(), w = sc(m);
  h.setAttribute("lang", m || "en"), h.setAttribute("dir", w);
  const x = document.createElement("style");
  x.innerHTML = `
    :host {
      all: initial;
      display: block;
    }
    #app-root {
      /* Expliziter Reset gegen Host-Injektionen */
      font-family: "${c}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 16px !important;
      line-height: 1.4 !important;
      letter-spacing: normal !important;
      filter: none !important;
      text-decoration: none !important;
      color: #1a1a1a;
      pointerEvents: auto;
    }
    #app-root * {
      box-sizing: border-box;
      /* Verhindert das Erben von Filtern wie Kontrast */
      filter: none !important;
    }
    #app-root pre, #app-root code, #app-root kbd, #app-root samp {
      font-family: ui-monospace, SFMono-Regular, SFMono, Menlo, Consolas, "Liberation Mono", monospace;
    }
    #app-root table, #app-root thead, #app-root tbody, #app-root tfoot, #app-root tr, #app-root th, #app-root td {
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    }
    
    @keyframes slide-in-from-bottom-4 {
      from { transform: translateY(1rem) translateX(-50%); opacity: 0; }
      to { transform: translateY(0) translateX(-50%); opacity: 1; }
    }

    .animate-in { animation: slide-in-from-bottom-4 0.3s ease-out; }

    /* Custom Scrollbar Styles for the Settings Panel */
    #app-root .flex-1.overflow-y-scroll::-webkit-scrollbar-track {
      background-color: transparent; /* Make track transparent or subtle */
      border-radius: 10px; /* Rounded corners for track */
    }

    #app-root .flex-1.overflow-y-scroll::-webkit-scrollbar-thumb {
      background-color: ${e.primaryColor || "#2563eb"};
      border-radius: 9999px; /* Max rounded corners for thumb */
      border: 3px solid transparent; /* Keeps thumb smaller than track */
      background-clip: padding-box; /* Ensures border-radius applies to visible part */
    }

    /* For Firefox (less customization options) */
    #app-root .flex-1.overflow-y-scroll {
      scrollbar-width: thin;
      scrollbar-color: ${e.primaryColor || "#2563eb"} transparent;
    }
  `, l.appendChild(x);
  const d = hl.createRoot(h);
  let p = {
    ...e,
    locale: m || void 0
  }, g = typeof e.locale == "string" && e.locale.trim().length > 0, v = m;
  const k = (E) => {
    if (E.locale) {
      const T = sc(E.locale);
      h.setAttribute("lang", E.locale), h.setAttribute("dir", T);
    }
    E.primaryColor && document.documentElement.style.setProperty(
      "--area11y-accent",
      E.primaryColor
    ), p = { ...p, ...E }, b(p);
  }, b = (E) => {
    d.render(
      /* @__PURE__ */ $.jsx(Xf.StrictMode, { children: /* @__PURE__ */ $.jsx(Zv, { options: E }) })
    );
  };
  b(p);
  const L = (() => {
    if (g) return null;
    const E = document.documentElement;
    if (!E) return null;
    const T = new MutationObserver(() => {
      const Y = lc().trim();
      !Y || Y === v || g || (v = Y, k({ locale: Y }));
    });
    return T.observe(E, {
      attributes: !0,
      attributeFilter: ["lang"]
    }), T;
  })();
  return {
    destroy: () => {
      var E;
      L == null || L.disconnect(), d.unmount(), i.remove(), Vn.clearSettings(), (E = document.getElementById("area11y-fonts")) == null || E.remove(), document.documentElement.style.removeProperty("--area11y-accent"), o && delete o.dataset.area11yHost;
    },
    updateOptions: (E) => {
      E.locale && (g = !0), k(E);
    }
  };
}
function qv({ config: e = {} } = {}) {
  const t = e || {}, n = typeof t.accent == "string" ? t.accent : void 0, r = typeof t.primaryColor == "string" ? t.primaryColor : n;
  return Jv({
    ...t,
    primaryColor: r
  });
}
export {
  qv as init
};

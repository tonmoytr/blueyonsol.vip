function Zh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();

function Jh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var qh = {
        exports: {}
    },
    Bs = {},
    $h = {
        exports: {}
    },
    Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo = Symbol.for("react.element"),
    Sy = Symbol.for("react.portal"),
    Ay = Symbol.for("react.fragment"),
    Py = Symbol.for("react.strict_mode"),
    Ey = Symbol.for("react.profiler"),
    Ty = Symbol.for("react.provider"),
    Cy = Symbol.for("react.context"),
    ky = Symbol.for("react.forward_ref"),
    jy = Symbol.for("react.suspense"),
    Ry = Symbol.for("react.memo"),
    Dy = Symbol.for("react.lazy"),
    rd = Symbol.iterator;

function My(e) {
    return e === null || typeof e != "object" ? null : (e = rd && e[rd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ep = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    tp = Object.assign,
    np = {};

function Qr(e, t, n) {
    this.props = e, this.context = t, this.refs = np, this.updater = n || ep
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Qr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function rp() {}
rp.prototype = Qr.prototype;

function du(e, t, n) {
    this.props = e, this.context = t, this.refs = np, this.updater = n || ep
}
var fu = du.prototype = new rp;
fu.constructor = du;
tp(fu, Qr.prototype);
fu.isPureReactComponent = !0;
var id = Array.isArray,
    ip = Object.prototype.hasOwnProperty,
    hu = {
        current: null
    },
    op = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function sp(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) ip.call(t, r) && !op.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: eo,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: hu.current
    }
}

function Ny(e, t) {
    return {
        $$typeof: eo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function pu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === eo
}

function Ly(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var od = /\/+/g;

function ca(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ly("" + e.key) : t.toString(36)
}

function Io(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case eo:
                case Sy:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + ca(s, 0) : r, id(i) ? (n = "", e != null && (n = e.replace(od, "$&/") + "/"), Io(i, t, n, "", function(u) {
        return u
    })) : i != null && (pu(i) && (i = Ny(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(od, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", id(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + ca(o, a);
            s += Io(o, t, n, l, i)
        } else if (l = My(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + ca(o, a++), s += Io(o, t, n, l, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function yo(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Io(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function Vy(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Xe = {
        current: null
    },
    zo = {
        transition: null
    },
    Fy = {
        ReactCurrentDispatcher: Xe,
        ReactCurrentBatchConfig: zo,
        ReactCurrentOwner: hu
    };

function ap() {
    throw Error("act(...) is not supported in production builds of React.")
}
Q.Children = {
    map: yo,
    forEach: function(e, t, n) {
        yo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return yo(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return yo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!pu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Q.Component = Qr;
Q.Fragment = Ay;
Q.Profiler = Ey;
Q.PureComponent = du;
Q.StrictMode = Py;
Q.Suspense = jy;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fy;
Q.act = ap;
Q.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = tp({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = hu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) ip.call(t, l) && !op.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: eo,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
};
Q.createContext = function(e) {
    return e = {
        $$typeof: Cy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Ty,
        _context: e
    }, e.Consumer = e
};
Q.createElement = sp;
Q.createFactory = function(e) {
    var t = sp.bind(null, e);
    return t.type = e, t
};
Q.createRef = function() {
    return {
        current: null
    }
};
Q.forwardRef = function(e) {
    return {
        $$typeof: ky,
        render: e
    }
};
Q.isValidElement = pu;
Q.lazy = function(e) {
    return {
        $$typeof: Dy,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Vy
    }
};
Q.memo = function(e, t) {
    return {
        $$typeof: Ry,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Q.startTransition = function(e) {
    var t = zo.transition;
    zo.transition = {};
    try {
        e()
    } finally {
        zo.transition = t
    }
};
Q.unstable_act = ap;
Q.useCallback = function(e, t) {
    return Xe.current.useCallback(e, t)
};
Q.useContext = function(e) {
    return Xe.current.useContext(e)
};
Q.useDebugValue = function() {};
Q.useDeferredValue = function(e) {
    return Xe.current.useDeferredValue(e)
};
Q.useEffect = function(e, t) {
    return Xe.current.useEffect(e, t)
};
Q.useId = function() {
    return Xe.current.useId()
};
Q.useImperativeHandle = function(e, t, n) {
    return Xe.current.useImperativeHandle(e, t, n)
};
Q.useInsertionEffect = function(e, t) {
    return Xe.current.useInsertionEffect(e, t)
};
Q.useLayoutEffect = function(e, t) {
    return Xe.current.useLayoutEffect(e, t)
};
Q.useMemo = function(e, t) {
    return Xe.current.useMemo(e, t)
};
Q.useReducer = function(e, t, n) {
    return Xe.current.useReducer(e, t, n)
};
Q.useRef = function(e) {
    return Xe.current.useRef(e)
};
Q.useState = function(e) {
    return Xe.current.useState(e)
};
Q.useSyncExternalStore = function(e, t, n) {
    return Xe.current.useSyncExternalStore(e, t, n)
};
Q.useTransition = function() {
    return Xe.current.useTransition()
};
Q.version = "18.3.1";
$h.exports = Q;
var k = $h.exports;
const mn = Jh(k),
    Oy = Zh({
        __proto__: null,
        default: mn
    }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var By = k,
    by = Symbol.for("react.element"),
    Iy = Symbol.for("react.fragment"),
    zy = Object.prototype.hasOwnProperty,
    Uy = By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    _y = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function lp(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) zy.call(t, r) && !_y.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: by,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Uy.current
    }
}
Bs.Fragment = Iy;
Bs.jsx = lp;
Bs.jsxs = lp;
qh.exports = Bs;
var v = qh.exports,
    up = {
        exports: {}
    },
    lt = {},
    cp = {
        exports: {}
    },
    dp = {};
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
    function t(N, _) {
        var W = N.length;
        N.push(_);
        e: for (; 0 < W;) {
            var ee = W - 1 >>> 1,
                le = N[ee];
            if (0 < i(le, _)) N[ee] = _, N[W] = le, W = ee;
            else break e
        }
    }

    function n(N) {
        return N.length === 0 ? null : N[0]
    }

    function r(N) {
        if (N.length === 0) return null;
        var _ = N[0],
            W = N.pop();
        if (W !== _) {
            N[0] = W;
            e: for (var ee = 0, le = N.length, kt = le >>> 1; ee < kt;) {
                var Me = 2 * (ee + 1) - 1,
                    yt = N[Me],
                    We = Me + 1,
                    bt = N[We];
                if (0 > i(yt, W)) We < le && 0 > i(bt, yt) ? (N[ee] = bt, N[We] = W, ee = We) : (N[ee] = yt, N[Me] = W, ee = Me);
                else if (We < le && 0 > i(bt, W)) N[ee] = bt, N[We] = W, ee = We;
                else break e
            }
        }
        return _
    }

    function i(N, _) {
        var W = N.sortIndex - _.sortIndex;
        return W !== 0 ? W : N.id - _.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        m = !1,
        y = !1,
        w = !1,
        T = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(N) {
        for (var _ = n(u); _ !== null;) {
            if (_.callback === null) r(u);
            else if (_.startTime <= N) r(u), _.sortIndex = _.expirationTime, t(l, _);
            else break;
            _ = n(u)
        }
    }

    function P(N) {
        if (w = !1, g(N), !y)
            if (n(l) !== null) y = !0, Bt(j);
            else {
                var _ = n(u);
                _ !== null && Y(P, _.startTime - N)
            }
    }

    function j(N, _) {
        y = !1, w && (w = !1, p(C), C = -1), m = !0;
        var W = f;
        try {
            for (g(_), d = n(l); d !== null && (!(d.expirationTime > _) || N && !G());) {
                var ee = d.callback;
                if (typeof ee == "function") {
                    d.callback = null, f = d.priorityLevel;
                    var le = ee(d.expirationTime <= _);
                    _ = e.unstable_now(), typeof le == "function" ? d.callback = le : d === n(l) && r(l), g(_)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var kt = !0;
            else {
                var Me = n(u);
                Me !== null && Y(P, Me.startTime - _), kt = !1
            }
            return kt
        } finally {
            d = null, f = W, m = !1
        }
    }
    var S = !1,
        M = null,
        C = -1,
        V = 5,
        L = -1;

    function G() {
        return !(e.unstable_now() - L < V)
    }

    function oe() {
        if (M !== null) {
            var N = e.unstable_now();
            L = N;
            var _ = !0;
            try {
                _ = M(!0, N)
            } finally {
                _ ? ye() : (S = !1, M = null)
            }
        } else S = !1
    }
    var ye;
    if (typeof h == "function") ye = function() {
        h(oe)
    };
    else if (typeof MessageChannel < "u") {
        var he = new MessageChannel,
            Ot = he.port2;
        he.port1.onmessage = oe, ye = function() {
            Ot.postMessage(null)
        }
    } else ye = function() {
        T(oe, 0)
    };

    function Bt(N) {
        M = N, S || (S = !0, ye())
    }

    function Y(N, _) {
        C = T(function() {
            N(e.unstable_now())
        }, _)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
        N.callback = null
    }, e.unstable_continueExecution = function() {
        y || m || (y = !0, Bt(j))
    }, e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return f
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(N) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var _ = 3;
                break;
            default:
                _ = f
        }
        var W = f;
        f = _;
        try {
            return N()
        } finally {
            f = W
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, _) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var W = f;
        f = N;
        try {
            return _()
        } finally {
            f = W
        }
    }, e.unstable_scheduleCallback = function(N, _, W) {
        var ee = e.unstable_now();
        switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ee + W : ee) : W = ee, N) {
            case 1:
                var le = -1;
                break;
            case 2:
                le = 250;
                break;
            case 5:
                le = 1073741823;
                break;
            case 4:
                le = 1e4;
                break;
            default:
                le = 5e3
        }
        return le = W + le, N = {
            id: c++,
            callback: _,
            priorityLevel: N,
            startTime: W,
            expirationTime: le,
            sortIndex: -1
        }, W > ee ? (N.sortIndex = W, t(u, N), n(l) === null && N === n(u) && (w ? (p(C), C = -1) : w = !0, Y(P, W - ee))) : (N.sortIndex = le, t(l, N), y || m || (y = !0, Bt(j))), N
    }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(N) {
        var _ = f;
        return function() {
            var W = f;
            f = _;
            try {
                return N.apply(this, arguments)
            } finally {
                f = W
            }
        }
    }
})(dp);
cp.exports = dp;
var Hy = cp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wy = k,
    st = Hy;

function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var fp = new Set,
    Ni = {};

function ir(e, t) {
    Or(e, t), Or(e + "Capture", t)
}

function Or(e, t) {
    for (Ni[e] = t, e = 0; e < t.length; e++) fp.add(t[e])
}
var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    qa = Object.prototype.hasOwnProperty,
    Ky = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    sd = {},
    ad = {};

function Yy(e) {
    return qa.call(ad, e) ? !0 : qa.call(sd, e) ? !1 : Ky.test(e) ? ad[e] = !0 : (sd[e] = !0, !1)
}

function Qy(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Xy(e, t, n, r) {
    if (t === null || typeof t > "u" || Qy(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ge(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Oe[e] = new Ge(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Oe[t] = new Ge(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Oe[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Oe[e] = new Ge(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Oe[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Oe[e] = new Ge(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Oe[e] = new Ge(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Oe[e] = new Ge(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Oe[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var mu = /[\-:]([a-z])/g;

function gu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(mu, gu);
    Oe[t] = new Ge(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(mu, gu);
    Oe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(mu, gu);
    Oe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Oe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Oe.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Oe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function vu(e, t, n, r) {
    var i = Oe.hasOwnProperty(t) ? Oe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Xy(t, n, i, r) && (n = null), r || i === null ? Yy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var tn = Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    xo = Symbol.for("react.element"),
    hr = Symbol.for("react.portal"),
    pr = Symbol.for("react.fragment"),
    yu = Symbol.for("react.strict_mode"),
    $a = Symbol.for("react.profiler"),
    hp = Symbol.for("react.provider"),
    pp = Symbol.for("react.context"),
    xu = Symbol.for("react.forward_ref"),
    el = Symbol.for("react.suspense"),
    tl = Symbol.for("react.suspense_list"),
    wu = Symbol.for("react.memo"),
    ln = Symbol.for("react.lazy"),
    mp = Symbol.for("react.offscreen"),
    ld = Symbol.iterator;

function ti(e) {
    return e === null || typeof e != "object" ? null : (e = ld && e[ld] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ve = Object.assign,
    da;

function hi(e) {
    if (da === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        da = t && t[1] || ""
    }
    return `
` + da + e
}
var fa = !1;

function ha(e, t) {
    if (!e || fa) return "";
    fa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        fa = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? hi(e) : ""
}

function Gy(e) {
    switch (e.tag) {
        case 5:
            return hi(e.type);
        case 16:
            return hi("Lazy");
        case 13:
            return hi("Suspense");
        case 19:
            return hi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ha(e.type, !1), e;
        case 11:
            return e = ha(e.type.render, !1), e;
        case 1:
            return e = ha(e.type, !0), e;
        default:
            return ""
    }
}

function nl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case pr:
            return "Fragment";
        case hr:
            return "Portal";
        case $a:
            return "Profiler";
        case yu:
            return "StrictMode";
        case el:
            return "Suspense";
        case tl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case pp:
            return (e.displayName || "Context") + ".Consumer";
        case hp:
            return (e._context.displayName || "Context") + ".Provider";
        case xu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case wu:
            return t = e.displayName || null, t !== null ? t : nl(e.type) || "Memo";
        case ln:
            t = e._payload, e = e._init;
            try {
                return nl(e(t))
            } catch {}
    }
    return null
}

function Zy(e) {
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
            return nl(t);
        case 8:
            return t === yu ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function En(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function gp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Jy(e) {
    var t = gp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function wo(e) {
    e._valueTracker || (e._valueTracker = Jy(e))
}

function vp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = gp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ts(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function rl(e, t) {
    var n = t.checked;
    return ve({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function ud(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = En(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function yp(e, t) {
    t = t.checked, t != null && vu(e, "checked", t, !1)
}

function il(e, t) {
    yp(e, t);
    var n = En(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ol(e, t.type, n) : t.hasOwnProperty("defaultValue") && ol(e, t.type, En(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function cd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ol(e, t, n) {
    (t !== "number" || ts(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var pi = Array.isArray;

function Dr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + En(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function sl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
    return ve({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function dd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(D(92));
            if (pi(n)) {
                if (1 < n.length) throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: En(n)
    }
}

function xp(e, t) {
    var n = En(t.value),
        r = En(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function fd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function wp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function al(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? wp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var So, Sp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (So = So || document.createElement("div"), So.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = So.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Li(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var wi = {
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
    },
    qy = ["Webkit", "ms", "Moz", "O"];
Object.keys(wi).forEach(function(e) {
    qy.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), wi[t] = wi[e]
    })
});

function Ap(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wi.hasOwnProperty(e) && wi[e] ? ("" + t).trim() : t + "px"
}

function Pp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Ap(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var $y = ve({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ll(e, t) {
    if (t) {
        if ($y[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(D(62))
    }
}

function ul(e, t) {
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
            return !0
    }
}
var cl = null;

function Su(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var dl = null,
    Mr = null,
    Nr = null;

function hd(e) {
    if (e = ro(e)) {
        if (typeof dl != "function") throw Error(D(280));
        var t = e.stateNode;
        t && (t = _s(t), dl(e.stateNode, e.type, t))
    }
}

function Ep(e) {
    Mr ? Nr ? Nr.push(e) : Nr = [e] : Mr = e
}

function Tp() {
    if (Mr) {
        var e = Mr,
            t = Nr;
        if (Nr = Mr = null, hd(e), t)
            for (e = 0; e < t.length; e++) hd(t[e])
    }
}

function Cp(e, t) {
    return e(t)
}

function kp() {}
var pa = !1;

function jp(e, t, n) {
    if (pa) return e(t, n);
    pa = !0;
    try {
        return Cp(e, t, n)
    } finally {
        pa = !1, (Mr !== null || Nr !== null) && (kp(), Tp())
    }
}

function Vi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = _s(n);
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
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(D(231, t, typeof n));
    return n
}
var fl = !1;
if (Jt) try {
    var ni = {};
    Object.defineProperty(ni, "passive", {
        get: function() {
            fl = !0
        }
    }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni)
} catch {
    fl = !1
}

function e0(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Si = !1,
    ns = null,
    rs = !1,
    hl = null,
    t0 = {
        onError: function(e) {
            Si = !0, ns = e
        }
    };

function n0(e, t, n, r, i, o, s, a, l) {
    Si = !1, ns = null, e0.apply(t0, arguments)
}

function r0(e, t, n, r, i, o, s, a, l) {
    if (n0.apply(this, arguments), Si) {
        if (Si) {
            var u = ns;
            Si = !1, ns = null
        } else throw Error(D(198));
        rs || (rs = !0, hl = u)
    }
}

function or(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Rp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function pd(e) {
    if (or(e) !== e) throw Error(D(188))
}

function i0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = or(e), t === null) throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return pd(i), e;
                if (o === r) return pd(i), t;
                o = o.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(D(189))
            }
        }
        if (n.alternate !== r) throw Error(D(190))
    }
    if (n.tag !== 3) throw Error(D(188));
    return n.stateNode.current === n ? e : t
}

function Dp(e) {
    return e = i0(e), e !== null ? Mp(e) : null
}

function Mp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Mp(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Np = st.unstable_scheduleCallback,
    md = st.unstable_cancelCallback,
    o0 = st.unstable_shouldYield,
    s0 = st.unstable_requestPaint,
    Pe = st.unstable_now,
    a0 = st.unstable_getCurrentPriorityLevel,
    Au = st.unstable_ImmediatePriority,
    Lp = st.unstable_UserBlockingPriority,
    is = st.unstable_NormalPriority,
    l0 = st.unstable_LowPriority,
    Vp = st.unstable_IdlePriority,
    bs = null,
    Nt = null;

function u0(e) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
        Nt.onCommitFiberRoot(bs, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : f0,
    c0 = Math.log,
    d0 = Math.LN2;

function f0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (c0(e) / d0 | 0) | 0
}
var Ao = 64,
    Po = 4194304;

function mi(e) {
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
            return e
    }
}

function os(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = mi(a) : (o &= s, o !== 0 && (r = mi(o)))
    } else s = n & ~i, s !== 0 ? r = mi(s) : o !== 0 && (r = mi(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Et(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function h0(e, t) {
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
            return -1
    }
}

function p0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - Et(o),
            a = 1 << s,
            l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = h0(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function pl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Fp() {
    var e = Ao;
    return Ao <<= 1, !(Ao & 4194240) && (Ao = 64), e
}

function ma(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function to(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Et(t), e[t] = n
}

function m0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Et(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Pu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Et(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var ne = 0;

function Op(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Bp, Eu, bp, Ip, zp, ml = !1,
    Eo = [],
    gn = null,
    vn = null,
    yn = null,
    Fi = new Map,
    Oi = new Map,
    cn = [],
    g0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function gd(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            gn = null;
            break;
        case "dragenter":
        case "dragleave":
            vn = null;
            break;
        case "mouseover":
        case "mouseout":
            yn = null;
            break;
        case "pointerover":
        case "pointerout":
            Fi.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Oi.delete(t.pointerId)
    }
}

function ri(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = ro(t), t !== null && Eu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function v0(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return gn = ri(gn, e, t, n, r, i), !0;
        case "dragenter":
            return vn = ri(vn, e, t, n, r, i), !0;
        case "mouseover":
            return yn = ri(yn, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return Fi.set(o, ri(Fi.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, Oi.set(o, ri(Oi.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Up(e) {
    var t = Wn(e.target);
    if (t !== null) {
        var n = or(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Rp(n), t !== null) {
                    e.blockedOn = t, zp(e.priority, function() {
                        bp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Uo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            cl = r, n.target.dispatchEvent(r), cl = null
        } else return t = ro(n), t !== null && Eu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function vd(e, t, n) {
    Uo(e) && n.delete(t)
}

function y0() {
    ml = !1, gn !== null && Uo(gn) && (gn = null), vn !== null && Uo(vn) && (vn = null), yn !== null && Uo(yn) && (yn = null), Fi.forEach(vd), Oi.forEach(vd)
}

function ii(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ml || (ml = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, y0)))
}

function Bi(e) {
    function t(i) {
        return ii(i, e)
    }
    if (0 < Eo.length) {
        ii(Eo[0], e);
        for (var n = 1; n < Eo.length; n++) {
            var r = Eo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (gn !== null && ii(gn, e), vn !== null && ii(vn, e), yn !== null && ii(yn, e), Fi.forEach(t), Oi.forEach(t), n = 0; n < cn.length; n++) r = cn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < cn.length && (n = cn[0], n.blockedOn === null);) Up(n), n.blockedOn === null && cn.shift()
}
var Lr = tn.ReactCurrentBatchConfig,
    ss = !0;

function x0(e, t, n, r) {
    var i = ne,
        o = Lr.transition;
    Lr.transition = null;
    try {
        ne = 1, Tu(e, t, n, r)
    } finally {
        ne = i, Lr.transition = o
    }
}

function w0(e, t, n, r) {
    var i = ne,
        o = Lr.transition;
    Lr.transition = null;
    try {
        ne = 4, Tu(e, t, n, r)
    } finally {
        ne = i, Lr.transition = o
    }
}

function Tu(e, t, n, r) {
    if (ss) {
        var i = gl(e, t, n, r);
        if (i === null) Ta(e, t, r, as, n), gd(e, r);
        else if (v0(i, e, t, n, r)) r.stopPropagation();
        else if (gd(e, r), t & 4 && -1 < g0.indexOf(e)) {
            for (; i !== null;) {
                var o = ro(i);
                if (o !== null && Bp(o), o = gl(e, t, n, r), o === null && Ta(e, t, r, as, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else Ta(e, t, r, null, n)
    }
}
var as = null;

function gl(e, t, n, r) {
    if (as = null, e = Su(r), e = Wn(e), e !== null)
        if (t = or(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Rp(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return as = e, null
}

function _p(e) {
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
            switch (a0()) {
                case Au:
                    return 1;
                case Lp:
                    return 4;
                case is:
                case l0:
                    return 16;
                case Vp:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var fn = null,
    Cu = null,
    _o = null;

function Hp() {
    if (_o) return _o;
    var e, t = Cu,
        n = t.length,
        r, i = "value" in fn ? fn.value : fn.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return _o = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Ho(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function To() {
    return !0
}

function yd() {
    return !1
}

function ut(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? To : yd, this.isPropagationStopped = yd, this
    }
    return ve(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = To)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = To)
        },
        persist: function() {},
        isPersistent: To
    }), t
}
var Xr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    ku = ut(Xr),
    no = ve({}, Xr, {
        view: 0,
        detail: 0
    }),
    S0 = ut(no),
    ga, va, oi, Is = ve({}, no, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ju,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== oi && (oi && e.type === "mousemove" ? (ga = e.screenX - oi.screenX, va = e.screenY - oi.screenY) : va = ga = 0, oi = e), ga)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : va
        }
    }),
    xd = ut(Is),
    A0 = ve({}, Is, {
        dataTransfer: 0
    }),
    P0 = ut(A0),
    E0 = ve({}, no, {
        relatedTarget: 0
    }),
    ya = ut(E0),
    T0 = ve({}, Xr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    C0 = ut(T0),
    k0 = ve({}, Xr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    j0 = ut(k0),
    R0 = ve({}, Xr, {
        data: 0
    }),
    wd = ut(R0),
    D0 = {
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
    },
    M0 = {
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
    },
    N0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function L0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = N0[e]) ? !!t[e] : !1
}

function ju() {
    return L0
}
var V0 = ve({}, no, {
        key: function(e) {
            if (e.key) {
                var t = D0[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? M0[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ju,
        charCode: function(e) {
            return e.type === "keypress" ? Ho(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    F0 = ut(V0),
    O0 = ve({}, Is, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Sd = ut(O0),
    B0 = ve({}, no, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ju
    }),
    b0 = ut(B0),
    I0 = ve({}, Xr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    z0 = ut(I0),
    U0 = ve({}, Is, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    _0 = ut(U0),
    H0 = [9, 13, 27, 32],
    Ru = Jt && "CompositionEvent" in window,
    Ai = null;
Jt && "documentMode" in document && (Ai = document.documentMode);
var W0 = Jt && "TextEvent" in window && !Ai,
    Wp = Jt && (!Ru || Ai && 8 < Ai && 11 >= Ai),
    Ad = " ",
    Pd = !1;

function Kp(e, t) {
    switch (e) {
        case "keyup":
            return H0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Yp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var mr = !1;

function K0(e, t) {
    switch (e) {
        case "compositionend":
            return Yp(t);
        case "keypress":
            return t.which !== 32 ? null : (Pd = !0, Ad);
        case "textInput":
            return e = t.data, e === Ad && Pd ? null : e;
        default:
            return null
    }
}

function Y0(e, t) {
    if (mr) return e === "compositionend" || !Ru && Kp(e, t) ? (e = Hp(), _o = Cu = fn = null, mr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Wp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Q0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Ed(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Q0[e.type] : t === "textarea"
}

function Qp(e, t, n, r) {
    Ep(r), t = ls(t, "onChange"), 0 < t.length && (n = new ku("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Pi = null,
    bi = null;

function X0(e) {
    im(e, 0)
}

function zs(e) {
    var t = yr(e);
    if (vp(t)) return e
}

function G0(e, t) {
    if (e === "change") return t
}
var Xp = !1;
if (Jt) {
    var xa;
    if (Jt) {
        var wa = "oninput" in document;
        if (!wa) {
            var Td = document.createElement("div");
            Td.setAttribute("oninput", "return;"), wa = typeof Td.oninput == "function"
        }
        xa = wa
    } else xa = !1;
    Xp = xa && (!document.documentMode || 9 < document.documentMode)
}

function Cd() {
    Pi && (Pi.detachEvent("onpropertychange", Gp), bi = Pi = null)
}

function Gp(e) {
    if (e.propertyName === "value" && zs(bi)) {
        var t = [];
        Qp(t, bi, e, Su(e)), jp(X0, t)
    }
}

function Z0(e, t, n) {
    e === "focusin" ? (Cd(), Pi = t, bi = n, Pi.attachEvent("onpropertychange", Gp)) : e === "focusout" && Cd()
}

function J0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zs(bi)
}

function q0(e, t) {
    if (e === "click") return zs(t)
}

function $0(e, t) {
    if (e === "input" || e === "change") return zs(t)
}

function ex(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ct = typeof Object.is == "function" ? Object.is : ex;

function Ii(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!qa.call(t, i) || !Ct(e[i], t[i])) return !1
    }
    return !0
}

function kd(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function jd(e, t) {
    var n = kd(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = kd(n)
    }
}

function Zp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Jp() {
    for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = ts(e.document)
    }
    return t
}

function Du(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function tx(e) {
    var t = Jp(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zp(n.ownerDocument.documentElement, n)) {
        if (r !== null && Du(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = jd(n, o);
                var s = jd(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var nx = Jt && "documentMode" in document && 11 >= document.documentMode,
    gr = null,
    vl = null,
    Ei = null,
    yl = !1;

function Rd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yl || gr == null || gr !== ts(r) || (r = gr, "selectionStart" in r && Du(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Ei && Ii(Ei, r) || (Ei = r, r = ls(vl, "onSelect"), 0 < r.length && (t = new ku("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = gr)))
}

function Co(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var vr = {
        animationend: Co("Animation", "AnimationEnd"),
        animationiteration: Co("Animation", "AnimationIteration"),
        animationstart: Co("Animation", "AnimationStart"),
        transitionend: Co("Transition", "TransitionEnd")
    },
    Sa = {},
    qp = {};
Jt && (qp = document.createElement("div").style, "AnimationEvent" in window || (delete vr.animationend.animation, delete vr.animationiteration.animation, delete vr.animationstart.animation), "TransitionEvent" in window || delete vr.transitionend.transition);

function Us(e) {
    if (Sa[e]) return Sa[e];
    if (!vr[e]) return e;
    var t = vr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in qp) return Sa[e] = t[n];
    return e
}
var $p = Us("animationend"),
    em = Us("animationiteration"),
    tm = Us("animationstart"),
    nm = Us("transitionend"),
    rm = new Map,
    Dd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Rn(e, t) {
    rm.set(e, t), ir(t, [e])
}
for (var Aa = 0; Aa < Dd.length; Aa++) {
    var Pa = Dd[Aa],
        rx = Pa.toLowerCase(),
        ix = Pa[0].toUpperCase() + Pa.slice(1);
    Rn(rx, "on" + ix)
}
Rn($p, "onAnimationEnd");
Rn(em, "onAnimationIteration");
Rn(tm, "onAnimationStart");
Rn("dblclick", "onDoubleClick");
Rn("focusin", "onFocus");
Rn("focusout", "onBlur");
Rn(nm, "onTransitionEnd");
Or("onMouseEnter", ["mouseout", "mouseover"]);
Or("onMouseLeave", ["mouseout", "mouseover"]);
Or("onPointerEnter", ["pointerout", "pointerover"]);
Or("onPointerLeave", ["pointerout", "pointerover"]);
ir("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ir("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ir("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ir("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ir("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    ox = new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));

function Md(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, r0(r, t, void 0, e), e.currentTarget = null
}

function im(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                    Md(i, a, u), o = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                        Md(i, a, u), o = l
                    }
        }
    }
    if (rs) throw e = hl, rs = !1, hl = null, e
}

function ue(e, t) {
    var n = t[Pl];
    n === void 0 && (n = t[Pl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (om(t, e, 2, !1), n.add(r))
}

function Ea(e, t, n) {
    var r = 0;
    t && (r |= 4), om(n, e, r, t)
}
var ko = "_reactListening" + Math.random().toString(36).slice(2);

function zi(e) {
    if (!e[ko]) {
        e[ko] = !0, fp.forEach(function(n) {
            n !== "selectionchange" && (ox.has(n) || Ea(n, !1, e), Ea(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ko] || (t[ko] = !0, Ea("selectionchange", !1, t))
    }
}

function om(e, t, n, r) {
    switch (_p(t)) {
        case 1:
            var i = x0;
            break;
        case 4:
            i = w0;
            break;
        default:
            i = Tu
    }
    n = i.bind(null, t, n, e), i = void 0, !fl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Ta(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = Wn(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = o = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    jp(function() {
        var u = o,
            c = Su(n),
            d = [];
        e: {
            var f = rm.get(e);
            if (f !== void 0) {
                var m = ku,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (Ho(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = F0;
                        break;
                    case "focusin":
                        y = "focus", m = ya;
                        break;
                    case "focusout":
                        y = "blur", m = ya;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = ya;
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
                        m = xd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = P0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = b0;
                        break;
                    case $p:
                    case em:
                    case tm:
                        m = C0;
                        break;
                    case nm:
                        m = z0;
                        break;
                    case "scroll":
                        m = S0;
                        break;
                    case "wheel":
                        m = _0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = j0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = Sd
                }
                var w = (t & 4) !== 0,
                    T = !w && e === "scroll",
                    p = w ? f !== null ? f + "Capture" : null : f;
                w = [];
                for (var h = u, g; h !== null;) {
                    g = h;
                    var P = g.stateNode;
                    if (g.tag === 5 && P !== null && (g = P, p !== null && (P = Vi(h, p), P != null && w.push(Ui(h, P, g)))), T) break;
                    h = h.return
                }
                0 < w.length && (f = new m(f, y, null, n, c), d.push({
                    event: f,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", f && n !== cl && (y = n.relatedTarget || n.fromElement) && (Wn(y) || y[qt])) break e;
                if ((m || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, m ? (y = n.relatedTarget || n.toElement, m = u, y = y ? Wn(y) : null, y !== null && (T = or(y), y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null, y = u), m !== y)) {
                    if (w = xd, P = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (w = Sd, P = "onPointerLeave", p = "onPointerEnter", h = "pointer"), T = m == null ? f : yr(m), g = y == null ? f : yr(y), f = new w(P, h + "leave", m, n, c), f.target = T, f.relatedTarget = g, P = null, Wn(c) === u && (w = new w(p, h + "enter", y, n, c), w.target = g, w.relatedTarget = T, P = w), T = P, m && y) t: {
                        for (w = m, p = y, h = 0, g = w; g; g = dr(g)) h++;
                        for (g = 0, P = p; P; P = dr(P)) g++;
                        for (; 0 < h - g;) w = dr(w),
                        h--;
                        for (; 0 < g - h;) p = dr(p),
                        g--;
                        for (; h--;) {
                            if (w === p || p !== null && w === p.alternate) break t;
                            w = dr(w), p = dr(p)
                        }
                        w = null
                    }
                    else w = null;
                    m !== null && Nd(d, f, m, w, !1), y !== null && T !== null && Nd(d, T, y, w, !0)
                }
            }
            e: {
                if (f = u ? yr(u) : window, m = f.nodeName && f.nodeName.toLowerCase(), m === "select" || m === "input" && f.type === "file") var j = G0;
                else if (Ed(f))
                    if (Xp) j = $0;
                    else {
                        j = J0;
                        var S = Z0
                    }
                else(m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (j = q0);
                if (j && (j = j(e, u))) {
                    Qp(d, j, n, c);
                    break e
                }
                S && S(e, f, u),
                e === "focusout" && (S = f._wrapperState) && S.controlled && f.type === "number" && ol(f, "number", f.value)
            }
            switch (S = u ? yr(u) : window, e) {
                case "focusin":
                    (Ed(S) || S.contentEditable === "true") && (gr = S, vl = u, Ei = null);
                    break;
                case "focusout":
                    Ei = vl = gr = null;
                    break;
                case "mousedown":
                    yl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    yl = !1, Rd(d, n, c);
                    break;
                case "selectionchange":
                    if (nx) break;
                case "keydown":
                case "keyup":
                    Rd(d, n, c)
            }
            var M;
            if (Ru) e: {
                switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                }
                C = void 0
            }
            else mr ? Kp(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");C && (Wp && n.locale !== "ko" && (mr || C !== "onCompositionStart" ? C === "onCompositionEnd" && mr && (M = Hp()) : (fn = c, Cu = "value" in fn ? fn.value : fn.textContent, mr = !0)), S = ls(u, C), 0 < S.length && (C = new wd(C, e, null, n, c), d.push({
                event: C,
                listeners: S
            }), M ? C.data = M : (M = Yp(n), M !== null && (C.data = M)))),
            (M = W0 ? K0(e, n) : Y0(e, n)) && (u = ls(u, "onBeforeInput"), 0 < u.length && (c = new wd("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = M))
        }
        im(d, t)
    })
}

function Ui(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ls(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Vi(e, n), o != null && r.unshift(Ui(e, o, i)), o = Vi(e, t), o != null && r.push(Ui(e, o, i))), e = e.return
    }
    return r
}

function dr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Nd(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = Vi(n, o), l != null && s.unshift(Ui(n, l, a))) : i || (l = Vi(n, o), l != null && s.push(Ui(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var sx = /\r\n?/g,
    ax = /\u0000|\uFFFD/g;

function Ld(e) {
    return (typeof e == "string" ? e : "" + e).replace(sx, `
`).replace(ax, "")
}

function jo(e, t, n) {
    if (t = Ld(t), Ld(e) !== t && n) throw Error(D(425))
}

function us() {}
var xl = null,
    wl = null;

function Sl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Al = typeof setTimeout == "function" ? setTimeout : void 0,
    lx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vd = typeof Promise == "function" ? Promise : void 0,
    ux = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vd < "u" ? function(e) {
        return Vd.resolve(null).then(e).catch(cx)
    } : Al;

function cx(e) {
    setTimeout(function() {
        throw e
    })
}

function Ca(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Bi(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Bi(t)
}

function xn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Fd(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Gr = Math.random().toString(36).slice(2),
    Mt = "__reactFiber$" + Gr,
    _i = "__reactProps$" + Gr,
    qt = "__reactContainer$" + Gr,
    Pl = "__reactEvents$" + Gr,
    dx = "__reactListeners$" + Gr,
    fx = "__reactHandles$" + Gr;

function Wn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[qt] || n[Mt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Fd(e); e !== null;) {
                    if (n = e[Mt]) return n;
                    e = Fd(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ro(e) {
    return e = e[Mt] || e[qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function yr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(D(33))
}

function _s(e) {
    return e[_i] || null
}
var El = [],
    xr = -1;

function Dn(e) {
    return {
        current: e
    }
}

function ce(e) {
    0 > xr || (e.current = El[xr], El[xr] = null, xr--)
}

function ae(e, t) {
    xr++, El[xr] = e.current, e.current = t
}
var Tn = {},
    He = Dn(Tn),
    $e = Dn(!1),
    $n = Tn;

function Br(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Tn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function et(e) {
    return e = e.childContextTypes, e != null
}

function cs() {
    ce($e), ce(He)
}

function Od(e, t, n) {
    if (He.current !== Tn) throw Error(D(168));
    ae(He, t), ae($e, n)
}

function sm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(D(108, Zy(e) || "Unknown", i));
    return ve({}, n, r)
}

function ds(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tn, $n = He.current, ae(He, e), ae($e, $e.current), !0
}

function Bd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(D(169));
    n ? (e = sm(e, t, $n), r.__reactInternalMemoizedMergedChildContext = e, ce($e), ce(He), ae(He, e)) : ce($e), ae($e, n)
}
var _t = null,
    Hs = !1,
    ka = !1;

function am(e) {
    _t === null ? _t = [e] : _t.push(e)
}

function hx(e) {
    Hs = !0, am(e)
}

function Mn() {
    if (!ka && _t !== null) {
        ka = !0;
        var e = 0,
            t = ne;
        try {
            var n = _t;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            _t = null, Hs = !1
        } catch (i) {
            throw _t !== null && (_t = _t.slice(e + 1)), Np(Au, Mn), i
        } finally {
            ne = t, ka = !1
        }
    }
    return null
}
var wr = [],
    Sr = 0,
    fs = null,
    hs = 0,
    ft = [],
    ht = 0,
    er = null,
    Ht = 1,
    Wt = "";

function bn(e, t) {
    wr[Sr++] = hs, wr[Sr++] = fs, fs = e, hs = t
}

function lm(e, t, n) {
    ft[ht++] = Ht, ft[ht++] = Wt, ft[ht++] = er, er = e;
    var r = Ht;
    e = Wt;
    var i = 32 - Et(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Et(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Ht = 1 << 32 - Et(t) + i | n << i | r, Wt = o + e
    } else Ht = 1 << o | n << i | r, Wt = e
}

function Mu(e) {
    e.return !== null && (bn(e, 1), lm(e, 1, 0))
}

function Nu(e) {
    for (; e === fs;) fs = wr[--Sr], wr[Sr] = null, hs = wr[--Sr], wr[Sr] = null;
    for (; e === er;) er = ft[--ht], ft[ht] = null, Wt = ft[--ht], ft[ht] = null, Ht = ft[--ht], ft[ht] = null
}
var ot = null,
    it = null,
    fe = !1,
    Pt = null;

function um(e, t) {
    var n = pt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function bd(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ot = e, it = xn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ot = e, it = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = er !== null ? {
                id: Ht,
                overflow: Wt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ot = e, it = null, !0) : !1;
        default:
            return !1
    }
}

function Tl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Cl(e) {
    if (fe) {
        var t = it;
        if (t) {
            var n = t;
            if (!bd(e, t)) {
                if (Tl(e)) throw Error(D(418));
                t = xn(n.nextSibling);
                var r = ot;
                t && bd(e, t) ? um(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, ot = e)
            }
        } else {
            if (Tl(e)) throw Error(D(418));
            e.flags = e.flags & -4097 | 2, fe = !1, ot = e
        }
    }
}

function Id(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ot = e
}

function Ro(e) {
    if (e !== ot) return !1;
    if (!fe) return Id(e), fe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Sl(e.type, e.memoizedProps)), t && (t = it)) {
        if (Tl(e)) throw cm(), Error(D(418));
        for (; t;) um(e, t), t = xn(t.nextSibling)
    }
    if (Id(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(D(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            it = xn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            it = null
        }
    } else it = ot ? xn(e.stateNode.nextSibling) : null;
    return !0
}

function cm() {
    for (var e = it; e;) e = xn(e.nextSibling)
}

function br() {
    it = ot = null, fe = !1
}

function Lu(e) {
    Pt === null ? Pt = [e] : Pt.push(e)
}
var px = tn.ReactCurrentBatchConfig;

function si(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(D(309));
                var r = n.stateNode
            }
            if (!r) throw Error(D(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(D(284));
        if (!n._owner) throw Error(D(290, e))
    }
    return e
}

function Do(e, t) {
    throw e = Object.prototype.toString.call(t), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function zd(e) {
    var t = e._init;
    return t(e._payload)
}

function dm(e) {
    function t(p, h) {
        if (e) {
            var g = p.deletions;
            g === null ? (p.deletions = [h], p.flags |= 16) : g.push(h)
        }
    }

    function n(p, h) {
        if (!e) return null;
        for (; h !== null;) t(p, h), h = h.sibling;
        return null
    }

    function r(p, h) {
        for (p = new Map; h !== null;) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
        return p
    }

    function i(p, h) {
        return p = Pn(p, h), p.index = 0, p.sibling = null, p
    }

    function o(p, h, g) {
        return p.index = g, e ? (g = p.alternate, g !== null ? (g = g.index, g < h ? (p.flags |= 2, h) : g) : (p.flags |= 2, h)) : (p.flags |= 1048576, h)
    }

    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, h, g, P) {
        return h === null || h.tag !== 6 ? (h = Va(g, p.mode, P), h.return = p, h) : (h = i(h, g), h.return = p, h)
    }

    function l(p, h, g, P) {
        var j = g.type;
        return j === pr ? c(p, h, g.props.children, P, g.key) : h !== null && (h.elementType === j || typeof j == "object" && j !== null && j.$$typeof === ln && zd(j) === h.type) ? (P = i(h, g.props), P.ref = si(p, h, g), P.return = p, P) : (P = Zo(g.type, g.key, g.props, null, p.mode, P), P.ref = si(p, h, g), P.return = p, P)
    }

    function u(p, h, g, P) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Fa(g, p.mode, P), h.return = p, h) : (h = i(h, g.children || []), h.return = p, h)
    }

    function c(p, h, g, P, j) {
        return h === null || h.tag !== 7 ? (h = Zn(g, p.mode, P, j), h.return = p, h) : (h = i(h, g), h.return = p, h)
    }

    function d(p, h, g) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = Va("" + h, p.mode, g), h.return = p, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case xo:
                    return g = Zo(h.type, h.key, h.props, null, p.mode, g), g.ref = si(p, null, h), g.return = p, g;
                case hr:
                    return h = Fa(h, p.mode, g), h.return = p, h;
                case ln:
                    var P = h._init;
                    return d(p, P(h._payload), g)
            }
            if (pi(h) || ti(h)) return h = Zn(h, p.mode, g, null), h.return = p, h;
            Do(p, h)
        }
        return null
    }

    function f(p, h, g, P) {
        var j = h !== null ? h.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return j !== null ? null : a(p, h, "" + g, P);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case xo:
                    return g.key === j ? l(p, h, g, P) : null;
                case hr:
                    return g.key === j ? u(p, h, g, P) : null;
                case ln:
                    return j = g._init, f(p, h, j(g._payload), P)
            }
            if (pi(g) || ti(g)) return j !== null ? null : c(p, h, g, P, null);
            Do(p, g)
        }
        return null
    }

    function m(p, h, g, P, j) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return p = p.get(g) || null, a(h, p, "" + P, j);
        if (typeof P == "object" && P !== null) {
            switch (P.$$typeof) {
                case xo:
                    return p = p.get(P.key === null ? g : P.key) || null, l(h, p, P, j);
                case hr:
                    return p = p.get(P.key === null ? g : P.key) || null, u(h, p, P, j);
                case ln:
                    var S = P._init;
                    return m(p, h, g, S(P._payload), j)
            }
            if (pi(P) || ti(P)) return p = p.get(g) || null, c(h, p, P, j, null);
            Do(h, P)
        }
        return null
    }

    function y(p, h, g, P) {
        for (var j = null, S = null, M = h, C = h = 0, V = null; M !== null && C < g.length; C++) {
            M.index > C ? (V = M, M = null) : V = M.sibling;
            var L = f(p, M, g[C], P);
            if (L === null) {
                M === null && (M = V);
                break
            }
            e && M && L.alternate === null && t(p, M), h = o(L, h, C), S === null ? j = L : S.sibling = L, S = L, M = V
        }
        if (C === g.length) return n(p, M), fe && bn(p, C), j;
        if (M === null) {
            for (; C < g.length; C++) M = d(p, g[C], P), M !== null && (h = o(M, h, C), S === null ? j = M : S.sibling = M, S = M);
            return fe && bn(p, C), j
        }
        for (M = r(p, M); C < g.length; C++) V = m(M, p, C, g[C], P), V !== null && (e && V.alternate !== null && M.delete(V.key === null ? C : V.key), h = o(V, h, C), S === null ? j = V : S.sibling = V, S = V);
        return e && M.forEach(function(G) {
            return t(p, G)
        }), fe && bn(p, C), j
    }

    function w(p, h, g, P) {
        var j = ti(g);
        if (typeof j != "function") throw Error(D(150));
        if (g = j.call(g), g == null) throw Error(D(151));
        for (var S = j = null, M = h, C = h = 0, V = null, L = g.next(); M !== null && !L.done; C++, L = g.next()) {
            M.index > C ? (V = M, M = null) : V = M.sibling;
            var G = f(p, M, L.value, P);
            if (G === null) {
                M === null && (M = V);
                break
            }
            e && M && G.alternate === null && t(p, M), h = o(G, h, C), S === null ? j = G : S.sibling = G, S = G, M = V
        }
        if (L.done) return n(p, M), fe && bn(p, C), j;
        if (M === null) {
            for (; !L.done; C++, L = g.next()) L = d(p, L.value, P), L !== null && (h = o(L, h, C), S === null ? j = L : S.sibling = L, S = L);
            return fe && bn(p, C), j
        }
        for (M = r(p, M); !L.done; C++, L = g.next()) L = m(M, p, C, L.value, P), L !== null && (e && L.alternate !== null && M.delete(L.key === null ? C : L.key), h = o(L, h, C), S === null ? j = L : S.sibling = L, S = L);
        return e && M.forEach(function(oe) {
            return t(p, oe)
        }), fe && bn(p, C), j
    }

    function T(p, h, g, P) {
        if (typeof g == "object" && g !== null && g.type === pr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case xo:
                    e: {
                        for (var j = g.key, S = h; S !== null;) {
                            if (S.key === j) {
                                if (j = g.type, j === pr) {
                                    if (S.tag === 7) {
                                        n(p, S.sibling), h = i(S, g.props.children), h.return = p, p = h;
                                        break e
                                    }
                                } else if (S.elementType === j || typeof j == "object" && j !== null && j.$$typeof === ln && zd(j) === S.type) {
                                    n(p, S.sibling), h = i(S, g.props), h.ref = si(p, S, g), h.return = p, p = h;
                                    break e
                                }
                                n(p, S);
                                break
                            } else t(p, S);
                            S = S.sibling
                        }
                        g.type === pr ? (h = Zn(g.props.children, p.mode, P, g.key), h.return = p, p = h) : (P = Zo(g.type, g.key, g.props, null, p.mode, P), P.ref = si(p, h, g), P.return = p, p = P)
                    }
                    return s(p);
                case hr:
                    e: {
                        for (S = g.key; h !== null;) {
                            if (h.key === S)
                                if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                                    n(p, h.sibling), h = i(h, g.children || []), h.return = p, p = h;
                                    break e
                                } else {
                                    n(p, h);
                                    break
                                }
                            else t(p, h);
                            h = h.sibling
                        }
                        h = Fa(g, p.mode, P),
                        h.return = p,
                        p = h
                    }
                    return s(p);
                case ln:
                    return S = g._init, T(p, h, S(g._payload), P)
            }
            if (pi(g)) return y(p, h, g, P);
            if (ti(g)) return w(p, h, g, P);
            Do(p, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, g), h.return = p, p = h) : (n(p, h), h = Va(g, p.mode, P), h.return = p, p = h), s(p)) : n(p, h)
    }
    return T
}
var Ir = dm(!0),
    fm = dm(!1),
    ps = Dn(null),
    ms = null,
    Ar = null,
    Vu = null;

function Fu() {
    Vu = Ar = ms = null
}

function Ou(e) {
    var t = ps.current;
    ce(ps), e._currentValue = t
}

function kl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Vr(e, t) {
    ms = e, Vu = Ar = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null)
}

function gt(e) {
    var t = e._currentValue;
    if (Vu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Ar === null) {
            if (ms === null) throw Error(D(308));
            Ar = e, ms.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Ar = Ar.next = e;
    return t
}
var Kn = null;

function Bu(e) {
    Kn === null ? Kn = [e] : Kn.push(e)
}

function hm(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Bu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, $t(e, r)
}

function $t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var un = !1;

function bu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function pm(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Yt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function wn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, q & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, $t(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Bu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, $t(e, n)
}

function Wo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Pu(e, n)
    }
}

function Ud(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function gs(e, t, n, r) {
    var i = e.updateQueue;
    un = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? o = u : s.next = u, s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0, c = u = l = null, a = o;
        do {
            var f = a.lane,
                m = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e,
                        w = a;
                    switch (f = t, m = n, w.tag) {
                        case 1:
                            if (y = w.payload, typeof y == "function") {
                                d = y.call(m, d, f);
                                break e
                            }
                            d = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = w.payload, f = typeof y == "function" ? y.call(m, d, f) : y, f == null) break e;
                            d = ve({}, d, f);
                            break e;
                        case 2:
                            un = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [a] : f.push(a))
            } else m = {
                eventTime: m,
                lane: f,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = m, l = d) : c = c.next = m, s |= f;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                f = a, a = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        nr |= s, e.lanes = s, e.memoizedState = d
    }
}

function _d(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(D(191, i));
                i.call(r)
            }
        }
}
var io = {},
    Lt = Dn(io),
    Hi = Dn(io),
    Wi = Dn(io);

function Yn(e) {
    if (e === io) throw Error(D(174));
    return e
}

function Iu(e, t) {
    switch (ae(Wi, t), ae(Hi, e), ae(Lt, io), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : al(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = al(t, e)
    }
    ce(Lt), ae(Lt, t)
}

function zr() {
    ce(Lt), ce(Hi), ce(Wi)
}

function mm(e) {
    Yn(Wi.current);
    var t = Yn(Lt.current),
        n = al(t, e.type);
    t !== n && (ae(Hi, e), ae(Lt, n))
}

function zu(e) {
    Hi.current === e && (ce(Lt), ce(Hi))
}
var pe = Dn(0);

function vs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ja = [];

function Uu() {
    for (var e = 0; e < ja.length; e++) ja[e]._workInProgressVersionPrimary = null;
    ja.length = 0
}
var Ko = tn.ReactCurrentDispatcher,
    Ra = tn.ReactCurrentBatchConfig,
    tr = 0,
    ge = null,
    ke = null,
    Re = null,
    ys = !1,
    Ti = !1,
    Ki = 0,
    mx = 0;

function Be() {
    throw Error(D(321))
}

function _u(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ct(e[n], t[n])) return !1;
    return !0
}

function Hu(e, t, n, r, i, o) {
    if (tr = o, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ko.current = e === null || e.memoizedState === null ? xx : wx, e = n(r, i), Ti) {
        o = 0;
        do {
            if (Ti = !1, Ki = 0, 25 <= o) throw Error(D(301));
            o += 1, Re = ke = null, t.updateQueue = null, Ko.current = Sx, e = n(r, i)
        } while (Ti)
    }
    if (Ko.current = xs, t = ke !== null && ke.next !== null, tr = 0, Re = ke = ge = null, ys = !1, t) throw Error(D(300));
    return e
}

function Wu() {
    var e = Ki !== 0;
    return Ki = 0, e
}

function Dt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Re === null ? ge.memoizedState = Re = e : Re = Re.next = e, Re
}

function vt() {
    if (ke === null) {
        var e = ge.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ke.next;
    var t = Re === null ? ge.memoizedState : Re.next;
    if (t !== null) Re = t, ke = e;
    else {
        if (e === null) throw Error(D(310));
        ke = e, e = {
            memoizedState: ke.memoizedState,
            baseState: ke.baseState,
            baseQueue: ke.baseQueue,
            queue: ke.queue,
            next: null
        }, Re === null ? ge.memoizedState = Re = e : Re = Re.next = e
    }
    return Re
}

function Yi(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Da(e) {
    var t = vt(),
        n = t.queue;
    if (n === null) throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = ke,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = o;
        do {
            var c = u.lane;
            if ((tr & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, s = r) : l = l.next = d, ge.lanes |= c, nr |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a, Ct(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, ge.lanes |= o, nr |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Ma(e) {
    var t = vt(),
        n = t.queue;
    if (n === null) throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        Ct(o, t.memoizedState) || (qe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function gm() {}

function vm(e, t) {
    var n = ge,
        r = vt(),
        i = t(),
        o = !Ct(r.memoizedState, i);
    if (o && (r.memoizedState = i, qe = !0), r = r.queue, Ku(wm.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Re !== null && Re.memoizedState.tag & 1) {
        if (n.flags |= 2048, Qi(9, xm.bind(null, n, r, i, t), void 0, null), De === null) throw Error(D(349));
        tr & 30 || ym(n, t, i)
    }
    return i
}

function ym(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ge.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function xm(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Sm(t) && Am(e)
}

function wm(e, t, n) {
    return n(function() {
        Sm(t) && Am(e)
    })
}

function Sm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ct(e, n)
    } catch {
        return !0
    }
}

function Am(e) {
    var t = $t(e, 1);
    t !== null && Tt(t, e, 1, -1)
}

function Hd(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = yx.bind(null, ge, e), [t.memoizedState, e]
}

function Qi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ge.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ge.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Pm() {
    return vt().memoizedState
}

function Yo(e, t, n, r) {
    var i = Dt();
    ge.flags |= e, i.memoizedState = Qi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ws(e, t, n, r) {
    var i = vt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ke !== null) {
        var s = ke.memoizedState;
        if (o = s.destroy, r !== null && _u(r, s.deps)) {
            i.memoizedState = Qi(t, n, o, r);
            return
        }
    }
    ge.flags |= e, i.memoizedState = Qi(1 | t, n, o, r)
}

function Wd(e, t) {
    return Yo(8390656, 8, e, t)
}

function Ku(e, t) {
    return Ws(2048, 8, e, t)
}

function Em(e, t) {
    return Ws(4, 2, e, t)
}

function Tm(e, t) {
    return Ws(4, 4, e, t)
}

function Cm(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function km(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ws(4, 4, Cm.bind(null, t, e), n)
}

function Yu() {}

function jm(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _u(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Rm(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _u(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Dm(e, t, n) {
    return tr & 21 ? (Ct(n, t) || (n = Fp(), ge.lanes |= n, nr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n)
}

function gx(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ra.transition;
    Ra.transition = {};
    try {
        e(!1), t()
    } finally {
        ne = n, Ra.transition = r
    }
}

function Mm() {
    return vt().memoizedState
}

function vx(e, t, n) {
    var r = An(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Nm(e)) Lm(t, n);
    else if (n = hm(e, t, n, r), n !== null) {
        var i = Qe();
        Tt(n, e, r, i), Vm(n, t, r)
    }
}

function yx(e, t, n) {
    var r = An(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Nm(e)) Lm(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState,
                a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, Ct(a, s)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Bu(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = hm(e, t, i, r), n !== null && (i = Qe(), Tt(n, e, r, i), Vm(n, t, r))
    }
}

function Nm(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge
}

function Lm(e, t) {
    Ti = ys = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Vm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Pu(e, n)
    }
}
var xs = {
        readContext: gt,
        useCallback: Be,
        useContext: Be,
        useEffect: Be,
        useImperativeHandle: Be,
        useInsertionEffect: Be,
        useLayoutEffect: Be,
        useMemo: Be,
        useReducer: Be,
        useRef: Be,
        useState: Be,
        useDebugValue: Be,
        useDeferredValue: Be,
        useTransition: Be,
        useMutableSource: Be,
        useSyncExternalStore: Be,
        useId: Be,
        unstable_isNewReconciler: !1
    },
    xx = {
        readContext: gt,
        useCallback: function(e, t) {
            return Dt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: gt,
        useEffect: Wd,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Yo(4194308, 4, Cm.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Yo(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Yo(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Dt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Dt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = vx.bind(null, ge, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Dt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Hd,
        useDebugValue: Yu,
        useDeferredValue: function(e) {
            return Dt().memoizedState = e
        },
        useTransition: function() {
            var e = Hd(!1),
                t = e[0];
            return e = gx.bind(null, e[1]), Dt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ge,
                i = Dt();
            if (fe) {
                if (n === void 0) throw Error(D(407));
                n = n()
            } else {
                if (n = t(), De === null) throw Error(D(349));
                tr & 30 || ym(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, Wd(wm.bind(null, r, o, e), [e]), r.flags |= 2048, Qi(9, xm.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Dt(),
                t = De.identifierPrefix;
            if (fe) {
                var n = Wt,
                    r = Ht;
                n = (r & ~(1 << 32 - Et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ki++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = mx++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    wx = {
        readContext: gt,
        useCallback: jm,
        useContext: gt,
        useEffect: Ku,
        useImperativeHandle: km,
        useInsertionEffect: Em,
        useLayoutEffect: Tm,
        useMemo: Rm,
        useReducer: Da,
        useRef: Pm,
        useState: function() {
            return Da(Yi)
        },
        useDebugValue: Yu,
        useDeferredValue: function(e) {
            var t = vt();
            return Dm(t, ke.memoizedState, e)
        },
        useTransition: function() {
            var e = Da(Yi)[0],
                t = vt().memoizedState;
            return [e, t]
        },
        useMutableSource: gm,
        useSyncExternalStore: vm,
        useId: Mm,
        unstable_isNewReconciler: !1
    },
    Sx = {
        readContext: gt,
        useCallback: jm,
        useContext: gt,
        useEffect: Ku,
        useImperativeHandle: km,
        useInsertionEffect: Em,
        useLayoutEffect: Tm,
        useMemo: Rm,
        useReducer: Ma,
        useRef: Pm,
        useState: function() {
            return Ma(Yi)
        },
        useDebugValue: Yu,
        useDeferredValue: function(e) {
            var t = vt();
            return ke === null ? t.memoizedState = e : Dm(t, ke.memoizedState, e)
        },
        useTransition: function() {
            var e = Ma(Yi)[0],
                t = vt().memoizedState;
            return [e, t]
        },
        useMutableSource: gm,
        useSyncExternalStore: vm,
        useId: Mm,
        unstable_isNewReconciler: !1
    };

function wt(e, t) {
    if (e && e.defaultProps) {
        t = ve({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function jl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ks = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? or(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Qe(),
            i = An(e),
            o = Yt(r, i);
        o.payload = t, n != null && (o.callback = n), t = wn(e, o, i), t !== null && (Tt(t, e, i, r), Wo(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Qe(),
            i = An(e),
            o = Yt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = wn(e, o, i), t !== null && (Tt(t, e, i, r), Wo(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Qe(),
            r = An(e),
            i = Yt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = wn(e, i, r), t !== null && (Tt(t, e, r, n), Wo(t, e, r))
    }
};

function Kd(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ii(n, r) || !Ii(i, o) : !0
}

function Fm(e, t, n) {
    var r = !1,
        i = Tn,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = gt(o) : (i = et(t) ? $n : He.current, r = t.contextTypes, o = (r = r != null) ? Br(e, i) : Tn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ks, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Yd(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ks.enqueueReplaceState(t, t.state, null)
}

function Rl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, bu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = gt(o) : (o = et(t) ? $n : He.current, i.context = Br(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (jl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ks.enqueueReplaceState(i, i.state, null), gs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ur(e, t) {
    try {
        var n = "",
            r = t;
        do n += Gy(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Na(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Dl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Ax = typeof WeakMap == "function" ? WeakMap : Map;

function Om(e, t, n) {
    n = Yt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ss || (Ss = !0, zl = r), Dl(e, t)
    }, n
}

function Bm(e, t, n) {
    n = Yt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Dl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Dl(e, t), typeof r != "function" && (Sn === null ? Sn = new Set([this]) : Sn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function Qd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ax;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Ox.bind(null, e, t, n), t.then(e, e))
}

function Xd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Gd(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Yt(-1, 1), t.tag = 2, wn(n, t, 1))), n.lanes |= 1), e)
}
var Px = tn.ReactCurrentOwner,
    qe = !1;

function Ye(e, t, n, r) {
    t.child = e === null ? fm(t, null, n, r) : Ir(t, e.child, n, r)
}

function Zd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Vr(t, i), r = Hu(e, t, n, r, o, i), n = Wu(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, en(e, t, i)) : (fe && n && Mu(t), t.flags |= 1, Ye(e, t, r, i), t.child)
}

function Jd(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ec(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, bm(e, t, o, r, i)) : (e = Zo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Ii, n(s, r) && e.ref === t.ref) return en(e, t, i)
    }
    return t.flags |= 1, e = Pn(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function bm(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Ii(o, r) && e.ref === t.ref)
            if (qe = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (qe = !0);
            else return t.lanes = e.lanes, en(e, t, i)
    }
    return Ml(e, t, n, r, i)
}

function Im(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ae(Er, nt), nt |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ae(Er, nt), nt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, ae(Er, nt), nt |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ae(Er, nt), nt |= r;
    return Ye(e, t, i, n), t.child
}

function zm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ml(e, t, n, r, i) {
    var o = et(n) ? $n : He.current;
    return o = Br(t, o), Vr(t, i), n = Hu(e, t, n, r, o, i), r = Wu(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, en(e, t, i)) : (fe && r && Mu(t), t.flags |= 1, Ye(e, t, n, i), t.child)
}

function qd(e, t, n, r, i) {
    if (et(n)) {
        var o = !0;
        ds(t)
    } else o = !1;
    if (Vr(t, i), t.stateNode === null) Qo(e, t), Fm(t, n, r), Rl(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = gt(u) : (u = et(n) ? $n : He.current, u = Br(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Yd(t, s, r, u), un = !1;
        var f = t.memoizedState;
        s.state = f, gs(t, r, s, i), l = t.memoizedState, a !== r || f !== l || $e.current || un ? (typeof c == "function" && (jl(t, n, c, r), l = t.memoizedState), (a = un || Kd(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, pm(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : wt(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = gt(l) : (l = et(n) ? $n : He.current, l = Br(t, l));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && Yd(t, s, r, l), un = !1, f = t.memoizedState, s.state = f, gs(t, r, s, i);
        var y = t.memoizedState;
        a !== d || f !== y || $e.current || un ? (typeof m == "function" && (jl(t, n, m, r), y = t.memoizedState), (u = un || Kd(t, n, u, r, f, y, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Nl(e, t, n, r, o, i)
}

function Nl(e, t, n, r, i, o) {
    zm(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Bd(t, n, !1), en(e, t, o);
    r = t.stateNode, Px.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ir(t, e.child, null, o), t.child = Ir(t, null, a, o)) : Ye(e, t, a, o), t.memoizedState = r.state, i && Bd(t, n, !0), t.child
}

function Um(e) {
    var t = e.stateNode;
    t.pendingContext ? Od(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Od(e, t.context, !1), Iu(e, t.containerInfo)
}

function $d(e, t, n, r, i) {
    return br(), Lu(i), t.flags |= 256, Ye(e, t, n, r), t.child
}
var Ll = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Vl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function _m(e, t, n) {
    var r = t.pendingProps,
        i = pe.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ae(pe, i & 1), e === null) return Cl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Xs(s, r, 0, null), e = Zn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Vl(n), t.memoizedState = Ll, e) : Qu(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Ex(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Pn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Pn(a, o) : (o = Zn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Vl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Ll, r
    }
    return o = e.child, e = o.sibling, r = Pn(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Qu(e, t) {
    return t = Xs({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Mo(e, t, n, r) {
    return r !== null && Lu(r), Ir(t, e.child, null, n), e = Qu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Ex(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Na(Error(D(422))), Mo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Xs({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = Zn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ir(t, e.child, null, s), t.child.memoizedState = Vl(s), t.memoizedState = Ll, o);
    if (!(t.mode & 1)) return Mo(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(D(419)), r = Na(o, r, void 0), Mo(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, qe || a) {
        if (r = De, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
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
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, $t(e, i), Tt(r, e, i, -1))
        }
        return $u(), r = Na(Error(D(421))), Mo(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bx.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, it = xn(i.nextSibling), ot = t, fe = !0, Pt = null, e !== null && (ft[ht++] = Ht, ft[ht++] = Wt, ft[ht++] = er, Ht = e.id, Wt = e.overflow, er = t), t = Qu(t, r.children), t.flags |= 4096, t)
}

function ef(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), kl(e.return, t, n)
}

function La(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function Hm(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (Ye(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ef(e, n, t);
            else if (e.tag === 19) ef(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ae(pe, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && vs(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), La(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && vs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            La(t, !0, n, null, o);
            break;
        case "together":
            La(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Qo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function en(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), nr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Pn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Tx(e, t, n) {
    switch (t.tag) {
        case 3:
            Um(t), br();
            break;
        case 5:
            mm(t);
            break;
        case 1:
            et(t.type) && ds(t);
            break;
        case 4:
            Iu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            ae(ps, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ae(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _m(e, t, n) : (ae(pe, pe.current & 1), e = en(e, t, n), e !== null ? e.sibling : null);
            ae(pe, pe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Hm(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ae(pe, pe.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Im(e, t, n)
    }
    return en(e, t, n)
}
var Wm, Fl, Km, Ym;
Wm = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Fl = function() {};
Km = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Yn(Lt.current);
        var o = null;
        switch (n) {
            case "input":
                i = rl(e, i), r = rl(e, r), o = [];
                break;
            case "select":
                i = ve({}, i, {
                    value: void 0
                }), r = ve({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = sl(e, i), r = sl(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = us)
        }
        ll(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ni.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (o || (o = []), o.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ni.hasOwnProperty(u) ? (l != null && u === "onScroll" && ue("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Ym = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function ai(e, t) {
    if (!fe) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Cx(e, t, n) {
    var r = t.pendingProps;
    switch (Nu(t), t.tag) {
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
            return be(t), null;
        case 1:
            return et(t.type) && cs(), be(t), null;
        case 3:
            return r = t.stateNode, zr(), ce($e), ce(He), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ro(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Pt !== null && (Hl(Pt), Pt = null))), Fl(e, t), be(t), null;
        case 5:
            zu(t);
            var i = Yn(Wi.current);
            if (n = t.type, e !== null && t.stateNode != null) Km(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(D(166));
                    return be(t), null
                }
                if (e = Yn(Lt.current), Ro(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Mt] = t, r[_i] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ue("cancel", r), ue("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ue("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < gi.length; i++) ue(gi[i], r);
                            break;
                        case "source":
                            ue("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ue("error", r), ue("load", r);
                            break;
                        case "details":
                            ue("toggle", r);
                            break;
                        case "input":
                            ud(r, o), ue("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, ue("invalid", r);
                            break;
                        case "textarea":
                            dd(r, o), ue("invalid", r)
                    }
                    ll(n, o), i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && jo(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && jo(r.textContent, a, e), i = ["children", "" + a]) : Ni.hasOwnProperty(s) && a != null && s === "onScroll" && ue("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            wo(r), cd(r, o, !0);
                            break;
                        case "textarea":
                            wo(r), fd(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = us)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Mt] = t, e[_i] = r, Wm(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = ul(n, r), n) {
                            case "dialog":
                                ue("cancel", e), ue("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ue("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < gi.length; i++) ue(gi[i], e);
                                i = r;
                                break;
                            case "source":
                                ue("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ue("error", e), ue("load", e), i = r;
                                break;
                            case "details":
                                ue("toggle", e), i = r;
                                break;
                            case "input":
                                ud(e, r), i = rl(e, r), ue("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = ve({}, r, {
                                    value: void 0
                                }), ue("invalid", e);
                                break;
                            case "textarea":
                                dd(e, r), i = sl(e, r), ue("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        ll(n, i),
                        a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style" ? Pp(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Sp(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Li(e, l) : typeof l == "number" && Li(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ni.hasOwnProperty(o) ? l != null && o === "onScroll" && ue("scroll", e) : l != null && vu(e, o, l, s))
                            }
                        switch (n) {
                            case "input":
                                wo(e), cd(e, r, !1);
                                break;
                            case "textarea":
                                wo(e), fd(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + En(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Dr(e, !!r.multiple, o, !1) : r.defaultValue != null && Dr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = us)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return be(t), null;
        case 6:
            if (e && t.stateNode != null) Ym(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
                if (n = Yn(Wi.current), Yn(Lt.current), Ro(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (o = r.nodeValue !== n) && (e = ot, e !== null)) switch (e.tag) {
                        case 3:
                            jo(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && jo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r
            }
            return be(t), null;
        case 13:
            if (ce(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (fe && it !== null && t.mode & 1 && !(t.flags & 128)) cm(), br(), t.flags |= 98560, o = !1;
                else if (o = Ro(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(D(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(D(317));
                        o[Mt] = t
                    } else br(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    be(t), o = !1
                } else Pt !== null && (Hl(Pt), Pt = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? je === 0 && (je = 3) : $u())), t.updateQueue !== null && (t.flags |= 4), be(t), null);
        case 4:
            return zr(), Fl(e, t), e === null && zi(t.stateNode.containerInfo), be(t), null;
        case 10:
            return Ou(t.type._context), be(t), null;
        case 17:
            return et(t.type) && cs(), be(t), null;
        case 19:
            if (ce(pe), o = t.memoizedState, o === null) return be(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
                if (r) ai(o, !1);
                else {
                    if (je !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = vs(e), s !== null) {
                                for (t.flags |= 128, ai(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return ae(pe, pe.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && Pe() > _r && (t.flags |= 128, r = !0, ai(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = vs(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ai(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !fe) return be(t), null
                    } else 2 * Pe() - o.renderingStartTime > _r && n !== 1073741824 && (t.flags |= 128, r = !0, ai(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Pe(), t.sibling = null, n = pe.current, ae(pe, r ? n & 1 | 2 : n & 1), t) : (be(t), null);
        case 22:
        case 23:
            return qu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : be(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(D(156, t.tag))
}

function kx(e, t) {
    switch (Nu(t), t.tag) {
        case 1:
            return et(t.type) && cs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return zr(), ce($e), ce(He), Uu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return zu(t), null;
        case 13:
            if (ce(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(D(340));
                br()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ce(pe), null;
        case 4:
            return zr(), null;
        case 10:
            return Ou(t.type._context), null;
        case 22:
        case 23:
            return qu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var No = !1,
    ze = !1,
    jx = typeof WeakSet == "function" ? WeakSet : Set,
    F = null;

function Pr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Se(e, t, r)
        } else n.current = null
}

function Ol(e, t, n) {
    try {
        n()
    } catch (r) {
        Se(e, t, r)
    }
}
var tf = !1;

function Rx(e, t) {
    if (xl = ss, e = Jp(), Du(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    f = null;
                t: for (;;) {
                    for (var m; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i), d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (m = d.firstChild) !== null;) f = d, d = m;
                    for (;;) {
                        if (d === e) break t;
                        if (f === n && ++u === i && (a = s), f === o && ++c === r && (l = s), (m = d.nextSibling) !== null) break;
                        d = f, f = d.parentNode
                    }
                    d = m
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (wl = {
            focusedElem: e,
            selectionRange: n
        }, ss = !1, F = t; F !== null;)
        if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
        else
            for (; F !== null;) {
                t = F;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var w = y.memoizedProps,
                                    T = y.memoizedState,
                                    p = t.stateNode,
                                    h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : wt(t.type, w), T);
                                p.__reactInternalSnapshotBeforeUpdate = h
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
                            throw Error(D(163))
                    }
                } catch (P) {
                    Se(t, t.return, P)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, F = e;
                    break
                }
                F = t.return
            }
    return y = tf, tf = !1, y
}

function Ci(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && Ol(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Ys(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Bl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Qm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[_i], delete t[Pl], delete t[dx], delete t[fx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Xm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function nf(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Xm(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function bl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = us));
    else if (r !== 4 && (e = e.child, e !== null))
        for (bl(e, t, n), e = e.sibling; e !== null;) bl(e, t, n), e = e.sibling
}

function Il(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Il(e, t, n), e = e.sibling; e !== null;) Il(e, t, n), e = e.sibling
}
var Le = null,
    St = !1;

function on(e, t, n) {
    for (n = n.child; n !== null;) Gm(e, t, n), n = n.sibling
}

function Gm(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
        Nt.onCommitFiberUnmount(bs, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ze || Pr(n, t);
        case 6:
            var r = Le,
                i = St;
            Le = null, on(e, t, n), Le = r, St = i, Le !== null && (St ? (e = Le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
            break;
        case 18:
            Le !== null && (St ? (e = Le, n = n.stateNode, e.nodeType === 8 ? Ca(e.parentNode, n) : e.nodeType === 1 && Ca(e, n), Bi(e)) : Ca(Le, n.stateNode));
            break;
        case 4:
            r = Le, i = St, Le = n.stateNode.containerInfo, St = !0, on(e, t, n), Le = r, St = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ol(n, t, s), i = i.next
                } while (i !== r)
            }
            on(e, t, n);
            break;
        case 1:
            if (!ze && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                Se(n, t, a)
            }
            on(e, t, n);
            break;
        case 21:
            on(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, on(e, t, n), ze = r) : on(e, t, n);
            break;
        default:
            on(e, t, n)
    }
}

function rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new jx), t.forEach(function(r) {
            var i = bx.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function xt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Le = a.stateNode, St = !1;
                            break e;
                        case 3:
                            Le = a.stateNode.containerInfo, St = !0;
                            break e;
                        case 4:
                            Le = a.stateNode.containerInfo, St = !0;
                            break e
                    }
                    a = a.return
                }
                if (Le === null) throw Error(D(160));
                Gm(o, s, i), Le = null, St = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (u) {
                Se(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Zm(t, e), t = t.sibling
}

function Zm(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (xt(t, e), Rt(e), r & 4) {
                try {
                    Ci(3, e, e.return), Ys(3, e)
                } catch (w) {
                    Se(e, e.return, w)
                }
                try {
                    Ci(5, e, e.return)
                } catch (w) {
                    Se(e, e.return, w)
                }
            }
            break;
        case 1:
            xt(t, e), Rt(e), r & 512 && n !== null && Pr(n, n.return);
            break;
        case 5:
            if (xt(t, e), Rt(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Li(i, "")
                } catch (w) {
                    Se(e, e.return, w)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && yp(i, o), ul(a, s);
                    var u = ul(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s],
                            d = l[s + 1];
                        c === "style" ? Pp(i, d) : c === "dangerouslySetInnerHTML" ? Sp(i, d) : c === "children" ? Li(i, d) : vu(i, c, d, u)
                    }
                    switch (a) {
                        case "input":
                            il(i, o);
                            break;
                        case "textarea":
                            xp(i, o);
                            break;
                        case "select":
                            var f = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var m = o.value;
                            m != null ? Dr(i, !!o.multiple, m, !1) : f !== !!o.multiple && (o.defaultValue != null ? Dr(i, !!o.multiple, o.defaultValue, !0) : Dr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[_i] = o
                } catch (w) {
                    Se(e, e.return, w)
                }
            }
            break;
        case 6:
            if (xt(t, e), Rt(e), r & 4) {
                if (e.stateNode === null) throw Error(D(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (w) {
                    Se(e, e.return, w)
                }
            }
            break;
        case 3:
            if (xt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Bi(t.containerInfo)
            } catch (w) {
                Se(e, e.return, w)
            }
            break;
        case 4:
            xt(t, e), Rt(e);
            break;
        case 13:
            xt(t, e), Rt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Zu = Pe())), r & 4 && rf(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (u = ze) || c, xt(t, e), ze = u) : xt(t, e), Rt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (F = e, c = e.child; c !== null;) {
                        for (d = F = c; F !== null;) {
                            switch (f = F, m = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ci(4, f, f.return);
                                    break;
                                case 1:
                                    Pr(f, f.return);
                                    var y = f.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                        } catch (w) {
                                            Se(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Pr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        sf(d);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = f, F = m) : sf(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Ap("display", s))
                            } catch (w) {
                                Se(e, e.return, w)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (w) {
                            Se(e, e.return, w)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            xt(t, e), Rt(e), r & 4 && rf(e);
            break;
        case 21:
            break;
        default:
            xt(t, e), Rt(e)
    }
}

function Rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Xm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Li(i, ""), r.flags &= -33);
                    var o = nf(e);
                    Il(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = nf(e);
                    bl(e, a, s);
                    break;
                default:
                    throw Error(D(161))
            }
        }
        catch (l) {
            Se(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Dx(e, t, n) {
    F = e, Jm(e)
}

function Jm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null;) {
        var i = F,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || No;
            if (!s) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || ze;
                a = No;
                var u = ze;
                if (No = s, (ze = l) && !u)
                    for (F = i; F !== null;) s = F, l = s.child, s.tag === 22 && s.memoizedState !== null ? af(i) : l !== null ? (l.return = s, F = l) : af(i);
                for (; o !== null;) F = o, Jm(o), o = o.sibling;
                F = i, No = a, ze = u
            } of (e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, F = o) : of (e)
    }
}

function of (e) {
    for (; F !== null;) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ze || Ys(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ze)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && _d(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            _d(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
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
                                    var d = c.dehydrated;
                                    d !== null && Bi(d)
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
                        throw Error(D(163))
                }
                ze || t.flags & 512 && Bl(t)
            } catch (f) {
                Se(t, t.return, f)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function sf(e) {
    for (; F !== null;) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function af(e) {
    for (; F !== null;) {
        var t = F;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ys(4, t)
                    } catch (l) {
                        Se(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            Se(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        Bl(t)
                    } catch (l) {
                        Se(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Bl(t)
                    } catch (l) {
                        Se(t, s, l)
                    }
            }
        } catch (l) {
            Se(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, F = a;
            break
        }
        F = t.return
    }
}
var Mx = Math.ceil,
    ws = tn.ReactCurrentDispatcher,
    Xu = tn.ReactCurrentOwner,
    mt = tn.ReactCurrentBatchConfig,
    q = 0,
    De = null,
    Ce = null,
    Fe = 0,
    nt = 0,
    Er = Dn(0),
    je = 0,
    Xi = null,
    nr = 0,
    Qs = 0,
    Gu = 0,
    ki = null,
    Je = null,
    Zu = 0,
    _r = 1 / 0,
    Ut = null,
    Ss = !1,
    zl = null,
    Sn = null,
    Lo = !1,
    hn = null,
    As = 0,
    ji = 0,
    Ul = null,
    Xo = -1,
    Go = 0;

function Qe() {
    return q & 6 ? Pe() : Xo !== -1 ? Xo : Xo = Pe()
}

function An(e) {
    return e.mode & 1 ? q & 2 && Fe !== 0 ? Fe & -Fe : px.transition !== null ? (Go === 0 && (Go = Fp()), Go) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _p(e.type)), e) : 1
}

function Tt(e, t, n, r) {
    if (50 < ji) throw ji = 0, Ul = null, Error(D(185));
    to(e, n, r), (!(q & 2) || e !== De) && (e === De && (!(q & 2) && (Qs |= n), je === 4 && dn(e, Fe)), tt(e, r), n === 1 && q === 0 && !(t.mode & 1) && (_r = Pe() + 500, Hs && Mn()))
}

function tt(e, t) {
    var n = e.callbackNode;
    p0(e, t);
    var r = os(e, e === De ? Fe : 0);
    if (r === 0) n !== null && md(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && md(n), t === 1) e.tag === 0 ? hx(lf.bind(null, e)) : am(lf.bind(null, e)), ux(function() {
            !(q & 6) && Mn()
        }), n = null;
        else {
            switch (Op(r)) {
                case 1:
                    n = Au;
                    break;
                case 4:
                    n = Lp;
                    break;
                case 16:
                    n = is;
                    break;
                case 536870912:
                    n = Vp;
                    break;
                default:
                    n = is
            }
            n = og(n, qm.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function qm(e, t) {
    if (Xo = -1, Go = 0, q & 6) throw Error(D(327));
    var n = e.callbackNode;
    if (Fr() && e.callbackNode !== n) return null;
    var r = os(e, e === De ? Fe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ps(e, r);
    else {
        t = r;
        var i = q;
        q |= 2;
        var o = eg();
        (De !== e || Fe !== t) && (Ut = null, _r = Pe() + 500, Gn(e, t));
        do try {
            Vx();
            break
        } catch (a) {
            $m(e, a)
        }
        while (!0);
        Fu(), ws.current = o, q = i, Ce !== null ? t = 0 : (De = null, Fe = 0, t = je)
    }
    if (t !== 0) {
        if (t === 2 && (i = pl(e), i !== 0 && (r = i, t = _l(e, i))), t === 1) throw n = Xi, Gn(e, 0), dn(e, r), tt(e, Pe()), n;
        if (t === 6) dn(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !Nx(i) && (t = Ps(e, r), t === 2 && (o = pl(e), o !== 0 && (r = o, t = _l(e, o))), t === 1)) throw n = Xi, Gn(e, 0), dn(e, r), tt(e, Pe()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(D(345));
                case 2:
                    In(e, Je, Ut);
                    break;
                case 3:
                    if (dn(e, r), (r & 130023424) === r && (t = Zu + 500 - Pe(), 10 < t)) {
                        if (os(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Qe(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Al(In.bind(null, e, Je, Ut), t);
                        break
                    }
                    In(e, Je, Ut);
                    break;
                case 4:
                    if (dn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - Et(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = Pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mx(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Al(In.bind(null, e, Je, Ut), r);
                        break
                    }
                    In(e, Je, Ut);
                    break;
                case 5:
                    In(e, Je, Ut);
                    break;
                default:
                    throw Error(D(329))
            }
        }
    }
    return tt(e, Pe()), e.callbackNode === n ? qm.bind(null, e) : null
}

function _l(e, t) {
    var n = ki;
    return e.current.memoizedState.isDehydrated && (Gn(e, t).flags |= 256), e = Ps(e, t), e !== 2 && (t = Je, Je = n, t !== null && Hl(t)), e
}

function Hl(e) {
    Je === null ? Je = e : Je.push.apply(Je, e)
}

function Nx(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ct(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function dn(e, t) {
    for (t &= ~Gu, t &= ~Qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Et(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function lf(e) {
    if (q & 6) throw Error(D(327));
    Fr();
    var t = os(e, 0);
    if (!(t & 1)) return tt(e, Pe()), null;
    var n = Ps(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = pl(e);
        r !== 0 && (t = r, n = _l(e, r))
    }
    if (n === 1) throw n = Xi, Gn(e, 0), dn(e, t), tt(e, Pe()), n;
    if (n === 6) throw Error(D(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, In(e, Je, Ut), tt(e, Pe()), null
}

function Ju(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n, q === 0 && (_r = Pe() + 500, Hs && Mn())
    }
}

function rr(e) {
    hn !== null && hn.tag === 0 && !(q & 6) && Fr();
    var t = q;
    q |= 1;
    var n = mt.transition,
        r = ne;
    try {
        if (mt.transition = null, ne = 1, e) return e()
    } finally {
        ne = r, mt.transition = n, q = t, !(q & 6) && Mn()
    }
}

function qu() {
    nt = Er.current, ce(Er)
}

function Gn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, lx(n)), Ce !== null)
        for (n = Ce.return; n !== null;) {
            var r = n;
            switch (Nu(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && cs();
                    break;
                case 3:
                    zr(), ce($e), ce(He), Uu();
                    break;
                case 5:
                    zu(r);
                    break;
                case 4:
                    zr();
                    break;
                case 13:
                    ce(pe);
                    break;
                case 19:
                    ce(pe);
                    break;
                case 10:
                    Ou(r.type._context);
                    break;
                case 22:
                case 23:
                    qu()
            }
            n = n.return
        }
    if (De = e, Ce = e = Pn(e.current, null), Fe = nt = t, je = 0, Xi = null, Gu = Qs = nr = 0, Je = ki = null, Kn !== null) {
        for (t = 0; t < Kn.length; t++)
            if (n = Kn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i, r.next = s
                }
                n.pending = r
            }
        Kn = null
    }
    return e
}

function $m(e, t) {
    do {
        var n = Ce;
        try {
            if (Fu(), Ko.current = xs, ys) {
                for (var r = ge.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                ys = !1
            }
            if (tr = 0, Re = ke = ge = null, Ti = !1, Ki = 0, Xu.current = null, n === null || n.return === null) {
                je = 1, Xi = t, Ce = null;
                break
            }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = Fe, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var m = Xd(s);
                    if (m !== null) {
                        m.flags &= -257, Gd(m, s, a, o, t), m.mode & 1 && Qd(o, u, t), t = m, l = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var w = new Set;
                            w.add(l), t.updateQueue = w
                        } else y.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Qd(o, u, t), $u();
                            break e
                        }
                        l = Error(D(426))
                    }
                } else if (fe && a.mode & 1) {
                    var T = Xd(s);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256), Gd(T, s, a, o, t), Lu(Ur(l, a));
                        break e
                    }
                }
                o = l = Ur(l, a),
                je !== 4 && (je = 2),
                ki === null ? ki = [o] : ki.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var p = Om(o, l, t);
                            Ud(o, p);
                            break e;
                        case 1:
                            a = l;
                            var h = o.type,
                                g = o.stateNode;
                            if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Sn === null || !Sn.has(g)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var P = Bm(o, a, t);
                                Ud(o, P);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            ng(n)
        } catch (j) {
            t = j, Ce === n && n !== null && (Ce = n = n.return);
            continue
        }
        break
    } while (!0)
}

function eg() {
    var e = ws.current;
    return ws.current = xs, e === null ? xs : e
}

function $u() {
    (je === 0 || je === 3 || je === 2) && (je = 4), De === null || !(nr & 268435455) && !(Qs & 268435455) || dn(De, Fe)
}

function Ps(e, t) {
    var n = q;
    q |= 2;
    var r = eg();
    (De !== e || Fe !== t) && (Ut = null, Gn(e, t));
    do try {
        Lx();
        break
    } catch (i) {
        $m(e, i)
    }
    while (!0);
    if (Fu(), q = n, ws.current = r, Ce !== null) throw Error(D(261));
    return De = null, Fe = 0, je
}

function Lx() {
    for (; Ce !== null;) tg(Ce)
}

function Vx() {
    for (; Ce !== null && !o0();) tg(Ce)
}

function tg(e) {
    var t = ig(e.alternate, e, nt);
    e.memoizedProps = e.pendingProps, t === null ? ng(e) : Ce = t, Xu.current = null
}

function ng(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = kx(n, t), n !== null) {
                n.flags &= 32767, Ce = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                je = 6, Ce = null;
                return
            }
        } else if (n = Cx(n, t, nt), n !== null) {
            Ce = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Ce = t;
            return
        }
        Ce = t = e
    } while (t !== null);
    je === 0 && (je = 5)
}

function In(e, t, n) {
    var r = ne,
        i = mt.transition;
    try {
        mt.transition = null, ne = 1, Fx(e, t, n, r)
    } finally {
        mt.transition = i, ne = r
    }
    return null
}

function Fx(e, t, n, r) {
    do Fr(); while (hn !== null);
    if (q & 6) throw Error(D(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(D(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (m0(e, o), e === De && (Ce = De = null, Fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Lo || (Lo = !0, og(is, function() {
            return Fr(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = mt.transition, mt.transition = null;
        var s = ne;
        ne = 1;
        var a = q;
        q |= 4, Xu.current = null, Rx(e, n), Zm(n, e), tx(wl), ss = !!xl, wl = xl = null, e.current = n, Dx(n), s0(), q = a, ne = s, mt.transition = o
    } else e.current = n;
    if (Lo && (Lo = !1, hn = e, As = i), o = e.pendingLanes, o === 0 && (Sn = null), u0(n.stateNode), tt(e, Pe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Ss) throw Ss = !1, e = zl, zl = null, e;
    return As & 1 && e.tag !== 0 && Fr(), o = e.pendingLanes, o & 1 ? e === Ul ? ji++ : (ji = 0, Ul = e) : ji = 0, Mn(), null
}

function Fr() {
    if (hn !== null) {
        var e = Op(As),
            t = mt.transition,
            n = ne;
        try {
            if (mt.transition = null, ne = 16 > e ? 16 : e, hn === null) var r = !1;
            else {
                if (e = hn, hn = null, As = 0, q & 6) throw Error(D(331));
                var i = q;
                for (q |= 4, F = e.current; F !== null;) {
                    var o = F,
                        s = o.child;
                    if (F.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (F = u; F !== null;) {
                                    var c = F;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ci(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, F = d;
                                    else
                                        for (; F !== null;) {
                                            c = F;
                                            var f = c.sibling,
                                                m = c.return;
                                            if (Qm(c), c === u) {
                                                F = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = m, F = f;
                                                break
                                            }
                                            F = m
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var T = w.sibling;
                                        w.sibling = null, w = T
                                    } while (w !== null)
                                }
                            }
                            F = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, F = s;
                    else e: for (; F !== null;) {
                        if (o = F, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ci(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, F = p;
                            break e
                        }
                        F = o.return
                    }
                }
                var h = e.current;
                for (F = h; F !== null;) {
                    s = F;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, F = g;
                    else e: for (s = h; F !== null;) {
                        if (a = F, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ys(9, a)
                            }
                        } catch (j) {
                            Se(a, a.return, j)
                        }
                        if (a === s) {
                            F = null;
                            break e
                        }
                        var P = a.sibling;
                        if (P !== null) {
                            P.return = a.return, F = P;
                            break e
                        }
                        F = a.return
                    }
                }
                if (q = i, Mn(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
                    Nt.onPostCommitFiberRoot(bs, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n, mt.transition = t
        }
    }
    return !1
}

function uf(e, t, n) {
    t = Ur(n, t), t = Om(e, t, 1), e = wn(e, t, 1), t = Qe(), e !== null && (to(e, 1, t), tt(e, t))
}

function Se(e, t, n) {
    if (e.tag === 3) uf(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                uf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Sn === null || !Sn.has(r))) {
                    e = Ur(n, e), e = Bm(t, e, 1), t = wn(t, e, 1), e = Qe(), t !== null && (to(t, 1, e), tt(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Ox(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Fe & n) === n && (je === 4 || je === 3 && (Fe & 130023424) === Fe && 500 > Pe() - Zu ? Gn(e, 0) : Gu |= n), tt(e, t)
}

function rg(e, t) {
    t === 0 && (e.mode & 1 ? (t = Po, Po <<= 1, !(Po & 130023424) && (Po = 4194304)) : t = 1);
    var n = Qe();
    e = $t(e, t), e !== null && (to(e, t, n), tt(e, n))
}

function Bx(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), rg(e, n)
}

function bx(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(D(314))
    }
    r !== null && r.delete(t), rg(e, n)
}
var ig;
ig = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || $e.current) qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, Tx(e, t, n);
            qe = !!(e.flags & 131072)
        }
    else qe = !1, fe && t.flags & 1048576 && lm(t, hs, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Qo(e, t), e = t.pendingProps;
            var i = Br(t, He.current);
            Vr(t, n), i = Hu(null, t, r, e, i, n);
            var o = Wu();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (o = !0, ds(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, bu(t), i.updater = Ks, t.stateNode = i, i._reactInternals = t, Rl(t, r, e, n), t = Nl(null, t, r, !0, o, n)) : (t.tag = 0, fe && o && Mu(t), Ye(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Qo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = zx(r), e = wt(r, e), i) {
                    case 0:
                        t = Ml(null, t, r, e, n);
                        break e;
                    case 1:
                        t = qd(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Zd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Jd(null, t, r, wt(r.type, e), n);
                        break e
                }
                throw Error(D(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : wt(r, i), Ml(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : wt(r, i), qd(e, t, r, i, n);
        case 3:
            e: {
                if (Um(t), e === null) throw Error(D(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                pm(e, t),
                gs(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = Ur(Error(D(423)), t), t = $d(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Ur(Error(D(424)), t), t = $d(e, t, r, n, i);
                    break e
                } else
                    for (it = xn(t.stateNode.containerInfo.firstChild), ot = t, fe = !0, Pt = null, n = fm(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (br(), r === i) {
                        t = en(e, t, n);
                        break e
                    }
                    Ye(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return mm(t), e === null && Cl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Sl(r, i) ? s = null : o !== null && Sl(r, o) && (t.flags |= 32), zm(e, t), Ye(e, t, s, n), t.child;
        case 6:
            return e === null && Cl(t), null;
        case 13:
            return _m(e, t, n);
        case 4:
            return Iu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ir(t, null, r, n) : Ye(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : wt(r, i), Zd(e, t, r, i, n);
        case 7:
            return Ye(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ye(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ye(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, ae(ps, r._currentValue), r._currentValue = s, o !== null)
                    if (Ct(o.value, s)) {
                        if (o.children === i.children && !$e.current) {
                            t = en(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            l = Yt(-1, n & -n), l.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), kl(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(D(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), kl(s, n, t), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                Ye(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Vr(t, n), i = gt(i), r = r(i), t.flags |= 1, Ye(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = wt(r, t.pendingProps), i = wt(r.type, i), Jd(e, t, r, i, n);
        case 15:
            return bm(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : wt(r, i), Qo(e, t), t.tag = 1, et(r) ? (e = !0, ds(t)) : e = !1, Vr(t, n), Fm(t, r, i), Rl(t, r, i, n), Nl(null, t, r, !0, e, n);
        case 19:
            return Hm(e, t, n);
        case 22:
            return Im(e, t, n)
    }
    throw Error(D(156, t.tag))
};

function og(e, t) {
    return Np(e, t)
}

function Ix(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function pt(e, t, n, r) {
    return new Ix(e, t, n, r)
}

function ec(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function zx(e) {
    if (typeof e == "function") return ec(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === xu) return 11;
        if (e === wu) return 14
    }
    return 2
}

function Pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Zo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") ec(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case pr:
            return Zn(n.children, i, o, t);
        case yu:
            s = 8, i |= 8;
            break;
        case $a:
            return e = pt(12, n, t, i | 2), e.elementType = $a, e.lanes = o, e;
        case el:
            return e = pt(13, n, t, i), e.elementType = el, e.lanes = o, e;
        case tl:
            return e = pt(19, n, t, i), e.elementType = tl, e.lanes = o, e;
        case mp:
            return Xs(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case hp:
                    s = 10;
                    break e;
                case pp:
                    s = 9;
                    break e;
                case xu:
                    s = 11;
                    break e;
                case wu:
                    s = 14;
                    break e;
                case ln:
                    s = 16, r = null;
                    break e
            }
            throw Error(D(130, e == null ? e : typeof e, ""))
    }
    return t = pt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function Zn(e, t, n, r) {
    return e = pt(7, e, r, t), e.lanes = n, e
}

function Xs(e, t, n, r) {
    return e = pt(22, e, r, t), e.elementType = mp, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Va(e, t, n) {
    return e = pt(6, e, null, t), e.lanes = n, e
}

function Fa(e, t, n) {
    return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Ux(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ma(0), this.expirationTimes = ma(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ma(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function tc(e, t, n, r, i, o, s, a, l) {
    return e = new Ux(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = pt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, bu(o), e
}

function _x(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function sg(e) {
    if (!e) return Tn;
    e = e._reactInternals;
    e: {
        if (or(e) !== e || e.tag !== 1) throw Error(D(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (et(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (et(n)) return sm(e, n, t)
    }
    return t
}

function ag(e, t, n, r, i, o, s, a, l) {
    return e = tc(n, r, !0, e, i, o, s, a, l), e.context = sg(null), n = e.current, r = Qe(), i = An(n), o = Yt(r, i), o.callback = t ? ? null, wn(n, o, i), e.current.lanes = i, to(e, i, r), tt(e, r), e
}

function Gs(e, t, n, r) {
    var i = t.current,
        o = Qe(),
        s = An(i);
    return n = sg(n), t.context === null ? t.context = n : t.pendingContext = n, t = Yt(o, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wn(i, t, s), e !== null && (Tt(e, i, s, o), Wo(e, i, s)), s
}

function Es(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function cf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function nc(e, t) {
    cf(e, t), (e = e.alternate) && cf(e, t)
}

function Hx() {
    return null
}
var lg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function rc(e) {
    this._internalRoot = e
}
Zs.prototype.render = rc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(D(409));
    Gs(e, t, null, null)
};
Zs.prototype.unmount = rc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rr(function() {
            Gs(null, e, null, null)
        }), t[qt] = null
    }
};

function Zs(e) {
    this._internalRoot = e
}
Zs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ip();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
        cn.splice(n, 0, e), n === 0 && Up(e)
    }
};

function ic(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Js(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function df() {}

function Wx(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Es(s);
                o.call(u)
            }
        }
        var s = ag(t, r, e, 0, null, !1, !1, "", df);
        return e._reactRootContainer = s, e[qt] = s.current, zi(e.nodeType === 8 ? e.parentNode : e), rr(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Es(l);
            a.call(u)
        }
    }
    var l = tc(e, 0, !1, null, null, !1, !1, "", df);
    return e._reactRootContainer = l, e[qt] = l.current, zi(e.nodeType === 8 ? e.parentNode : e), rr(function() {
        Gs(t, l, n, r)
    }), l
}

function qs(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Es(s);
                a.call(l)
            }
        }
        Gs(t, s, e, i)
    } else s = Wx(n, t, e, i, r);
    return Es(s)
}
Bp = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = mi(t.pendingLanes);
                n !== 0 && (Pu(t, n | 1), tt(t, Pe()), !(q & 6) && (_r = Pe() + 500, Mn()))
            }
            break;
        case 13:
            rr(function() {
                var r = $t(e, 1);
                if (r !== null) {
                    var i = Qe();
                    Tt(r, e, 1, i)
                }
            }), nc(e, 1)
    }
};
Eu = function(e) {
    if (e.tag === 13) {
        var t = $t(e, 134217728);
        if (t !== null) {
            var n = Qe();
            Tt(t, e, 134217728, n)
        }
        nc(e, 134217728)
    }
};
bp = function(e) {
    if (e.tag === 13) {
        var t = An(e),
            n = $t(e, t);
        if (n !== null) {
            var r = Qe();
            Tt(n, e, t, r)
        }
        nc(e, t)
    }
};
Ip = function() {
    return ne
};
zp = function(e, t) {
    var n = ne;
    try {
        return ne = e, t()
    } finally {
        ne = n
    }
};
dl = function(e, t, n) {
    switch (t) {
        case "input":
            if (il(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = _s(r);
                        if (!i) throw Error(D(90));
                        vp(r), il(r, i)
                    }
                }
            }
            break;
        case "textarea":
            xp(e, n);
            break;
        case "select":
            t = n.value, t != null && Dr(e, !!n.multiple, t, !1)
    }
};
Cp = Ju;
kp = rr;
var Kx = {
        usingClientEntryPoint: !1,
        Events: [ro, yr, _s, Ep, Tp, Ju]
    },
    li = {
        findFiberByHostInstance: Wn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Yx = {
        bundleType: li.bundleType,
        version: li.version,
        rendererPackageName: li.rendererPackageName,
        rendererConfig: li.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: tn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Dp(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: li.findFiberByHostInstance || Hx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vo.isDisabled && Vo.supportsFiber) try {
        bs = Vo.inject(Yx), Nt = Vo
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kx;
lt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ic(t)) throw Error(D(200));
    return _x(e, t, null, n)
};
lt.createRoot = function(e, t) {
    if (!ic(e)) throw Error(D(299));
    var n = !1,
        r = "",
        i = lg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = tc(e, 1, !1, null, null, n, !1, r, i), e[qt] = t.current, zi(e.nodeType === 8 ? e.parentNode : e), new rc(t)
};
lt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e)));
    return e = Dp(t), e = e === null ? null : e.stateNode, e
};
lt.flushSync = function(e) {
    return rr(e)
};
lt.hydrate = function(e, t, n) {
    if (!Js(t)) throw Error(D(200));
    return qs(null, e, t, !0, n)
};
lt.hydrateRoot = function(e, t, n) {
    if (!ic(e)) throw Error(D(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        s = lg;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ag(t, null, e, 1, n ? ? null, i, !1, o, s), e[qt] = t.current, zi(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Zs(t)
};
lt.render = function(e, t, n) {
    if (!Js(t)) throw Error(D(200));
    return qs(null, e, t, !1, n)
};
lt.unmountComponentAtNode = function(e) {
    if (!Js(e)) throw Error(D(40));
    return e._reactRootContainer ? (rr(function() {
        qs(null, null, e, !1, function() {
            e._reactRootContainer = null, e[qt] = null
        })
    }), !0) : !1
};
lt.unstable_batchedUpdates = Ju;
lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Js(n)) throw Error(D(200));
    if (e == null || e._reactInternals === void 0) throw Error(D(38));
    return qs(e, t, n, !1, r)
};
lt.version = "18.3.1-next-f1338f8080-20240426";

function ug() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ug)
    } catch (e) {
        console.error(e)
    }
}
ug(), up.exports = lt;
var oc = up.exports;
const Qx = Jh(oc),
    Xx = Zh({
        __proto__: null,
        default: Qx
    }, [oc]);
var cg, ff = oc;
cg = ff.createRoot, ff.hydrateRoot;
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function de() {
    return de = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, de.apply(this, arguments)
}
var Te;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Te || (Te = {}));
const hf = "popstate";

function Gx(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {
            pathname: o,
            search: s,
            hash: a
        } = r.location;
        return Gi("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : oo(i)
    }
    return Jx(t, n, null, e)
}

function J(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Hr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function Zx() {
    return Math.random().toString(36).substr(2, 8)
}

function pf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Gi(e, t, n, r) {
    return n === void 0 && (n = null), de({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Nn(t) : t, {
        state: n,
        key: t && t.key || r || Zx()
    })
}

function oo(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Nn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function Jx(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: o = !1
    } = r, s = i.history, a = Te.Pop, l = null, u = c();
    u == null && (u = 0, s.replaceState(de({}, s.state, {
        idx: u
    }), ""));

    function c() {
        return (s.state || {
            idx: null
        }).idx
    }

    function d() {
        a = Te.Pop;
        let T = c(),
            p = T == null ? null : T - u;
        u = T, l && l({
            action: a,
            location: w.location,
            delta: p
        })
    }

    function f(T, p) {
        a = Te.Push;
        let h = Gi(w.location, T, p);
        u = c() + 1;
        let g = pf(h, u),
            P = w.createHref(h);
        try {
            s.pushState(g, "", P)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError") throw j;
            i.location.assign(P)
        }
        o && l && l({
            action: a,
            location: w.location,
            delta: 1
        })
    }

    function m(T, p) {
        a = Te.Replace;
        let h = Gi(w.location, T, p);
        u = c();
        let g = pf(h, u),
            P = w.createHref(h);
        s.replaceState(g, "", P), o && l && l({
            action: a,
            location: w.location,
            delta: 0
        })
    }

    function y(T) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
            h = typeof T == "string" ? T : oo(T);
        return h = h.replace(/ $/, "%20"), J(p, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, p)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(i, s)
        },
        listen(T) {
            if (l) throw new Error("A history only accepts one active listener");
            return i.addEventListener(hf, d), l = T, () => {
                i.removeEventListener(hf, d), l = null
            }
        },
        createHref(T) {
            return t(i, T)
        },
        createURL: y,
        encodeLocation(T) {
            let p = y(T);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: f,
        replace: m,
        go(T) {
            return s.go(T)
        }
    };
    return w
}
var re;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(re || (re = {}));
const qx = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function $x(e) {
    return e.index === !0
}

function Ts(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((i, o) => {
        let s = [...n, String(o)],
            a = typeof i.id == "string" ? i.id : s.join("-");
        if (J(i.index !== !0 || !i.children, "Cannot specify children on an index route"), J(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), $x(i)) {
            let l = de({}, i, t(i), {
                id: a
            });
            return r[a] = l, l
        } else {
            let l = de({}, i, t(i), {
                id: a,
                children: void 0
            });
            return r[a] = l, i.children && (l.children = Ts(i.children, t, s, r)), l
        }
    })
}

function _n(e, t, n) {
    return n === void 0 && (n = "/"), Jo(e, t, n, !1)
}

function Jo(e, t, n, r) {
    let i = typeof t == "string" ? Nn(t) : t,
        o = so(i.pathname || "/", n);
    if (o == null) return null;
    let s = dg(e);
    t1(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = f1(o);
        a = c1(s[l], u, r)
    }
    return a
}

function e1(e, t) {
    let {
        route: n,
        pathname: r,
        params: i
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        handle: n.handle
    }
}

function dg(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (J(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = Jn([r, l.relativePath]),
            c = n.concat(l);
        o.children && o.children.length > 0 && (J(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), dg(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
            path: u,
            score: l1(u, o.index),
            routesMeta: c
        })
    };
    return e.forEach((o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
        else
            for (let l of fg(o.path)) i(o, s, l)
    }), t
}

function fg(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let s = fg(r.join("/")),
        a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))), i && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function t1(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : u1(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const n1 = /^:[\w-]+$/,
    r1 = 3,
    i1 = 2,
    o1 = 1,
    s1 = 10,
    a1 = -2,
    mf = e => e === "*";

function l1(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(mf) && (r += a1), t && (r += i1), n.filter(i => !mf(i)).reduce((i, o) => i + (n1.test(o) ? r1 : o === "" ? o1 : s1), r)
}

function u1(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function c1(e, t, n) {
    n === void 0 && (n = !1);
    let {
        routesMeta: r
    } = e, i = {}, o = "/", s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            c = o === "/" ? t : t.slice(o.length) || "/",
            d = gf({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, c),
            f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = gf({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, c)), !d) return null;
        Object.assign(i, d.params), s.push({
            params: i,
            pathname: Jn([o, d.pathname]),
            pathnameBase: v1(Jn([o, d.pathnameBase])),
            route: f
        }), d.pathnameBase !== "/" && (o = Jn([o, d.pathnameBase]))
    }
    return s
}

function gf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = d1(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let o = i[0],
        s = o.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let {
                paramName: f,
                isOptional: m
            } = c;
            if (f === "*") {
                let w = a[d] || "";
                s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[d];
            return m && !y ? u[f] = void 0 : u[f] = (y || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}

function d1(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), Hr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function f1(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Hr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function so(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function h1(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? Nn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : p1(n, t) : t,
        search: y1(r),
        hash: x1(i)
    }
}

function p1(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function Oa(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function hg(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function m1(e, t) {
    let n = hg(e);
    return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function g1(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = Nn(e) : (i = de({}, e), J(!i.pathname || !i.pathname.includes("?"), Oa("?", "pathname", "search", i)), J(!i.pathname || !i.pathname.includes("#"), Oa("#", "pathname", "hash", i)), J(!i.search || !i.search.includes("#"), Oa("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "",
        s = o ? "/" : i.pathname,
        a;
    if (s == null) a = n;
    else {
        let d = t.length - 1;
        if (!r && s.startsWith("..")) {
            let f = s.split("/");
            for (; f[0] === "..";) f.shift(), d -= 1;
            i.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = h1(i, a),
        u = s && s !== "/" && s.endsWith("/"),
        c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l
}
const Jn = e => e.join("/").replace(/\/\/+/g, "/"),
    v1 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    y1 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    x1 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Cs {
    constructor(t, n, r, i) {
        i === void 0 && (i = !1), this.status = t, this.statusText = n || "", this.internal = i, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function $s(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const pg = ["post", "put", "patch", "delete"],
    w1 = new Set(pg),
    S1 = ["get", ...pg],
    A1 = new Set(S1),
    P1 = new Set([301, 302, 303, 307, 308]),
    E1 = new Set([307, 308]),
    Ba = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    T1 = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    ui = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    sc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    C1 = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    mg = "remix-router-transitions";

function k1(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        r = !n;
    J(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let i;
    if (e.mapRouteProperties) i = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let x = e.detectErrorBoundary;
        i = A => ({
            hasErrorBoundary: x(A)
        })
    } else i = C1;
    let o = {},
        s = Ts(e.routes, i, void 0, o),
        a, l = e.basename || "/",
        u = e.dataStrategy || M1,
        c = e.patchRoutesOnNavigation,
        d = de({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            v7_skipActionErrorRevalidation: !1
        }, e.future),
        f = null,
        m = new Set,
        y = null,
        w = null,
        T = null,
        p = e.hydrationData != null,
        h = _n(s, e.history.location, l),
        g = null;
    if (h == null && !c) {
        let x = Ze(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: A,
                route: E
            } = kf(s);
        h = A, g = {
            [E.id]: x
        }
    }
    h && !e.hydrationData && po(h, s, e.history.location.pathname).active && (h = null);
    let P;
    if (h)
        if (h.some(x => x.route.lazy)) P = !1;
        else if (!h.some(x => x.route.loader)) P = !0;
    else if (d.v7_partialHydration) {
        let x = e.hydrationData ? e.hydrationData.loaderData : null,
            A = e.hydrationData ? e.hydrationData.errors : null;
        if (A) {
            let E = h.findIndex(R => A[R.route.id] !== void 0);
            P = h.slice(0, E + 1).every(R => !Kl(R.route, x, A))
        } else P = h.every(E => !Kl(E.route, x, A))
    } else P = e.hydrationData != null;
    else if (P = !1, h = [], d.v7_partialHydration) {
        let x = po(null, s, e.history.location.pathname);
        x.active && x.matches && (h = x.matches)
    }
    let j, S = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: h,
            initialized: P,
            navigation: Ba,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || g,
            fetchers: new Map,
            blockers: new Map
        },
        M = Te.Pop,
        C = !1,
        V, L = !1,
        G = new Map,
        oe = null,
        ye = !1,
        he = !1,
        Ot = [],
        Bt = new Set,
        Y = new Map,
        N = 0,
        _ = -1,
        W = new Map,
        ee = new Set,
        le = new Map,
        kt = new Map,
        Me = new Set,
        yt = new Map,
        We = new Map,
        bt;

    function iy() {
        if (f = e.history.listen(x => {
                let {
                    action: A,
                    location: E,
                    delta: R
                } = x;
                if (bt) {
                    bt(), bt = void 0;
                    return
                }
                Hr(We.size === 0 || R != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let O = $c({
                    currentLocation: S.location,
                    nextLocation: E,
                    historyAction: A
                });
                if (O && R != null) {
                    let z = new Promise(K => {
                        bt = K
                    });
                    e.history.go(R * -1), ho(O, {
                        state: "blocked",
                        location: E,
                        proceed() {
                            ho(O, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: E
                            }), z.then(() => e.history.go(R))
                        },
                        reset() {
                            let K = new Map(S.blockers);
                            K.set(O, ui), Ke({
                                blockers: K
                            })
                        }
                    });
                    return
                }
                return Vn(A, E)
            }), n) {
            K1(t, G);
            let x = () => Y1(t, G);
            t.addEventListener("pagehide", x), oe = () => t.removeEventListener("pagehide", x)
        }
        return S.initialized || Vn(Te.Pop, S.location, {
            initialHydration: !0
        }), j
    }

    function oy() {
        f && f(), oe && oe(), m.clear(), V && V.abort(), S.fetchers.forEach((x, A) => fo(A)), S.blockers.forEach((x, A) => qc(A))
    }

    function sy(x) {
        return m.add(x), () => m.delete(x)
    }

    function Ke(x, A) {
        A === void 0 && (A = {}), S = de({}, S, x);
        let E = [],
            R = [];
        d.v7_fetcherPersist && S.fetchers.forEach((O, z) => {
            O.state === "idle" && (Me.has(z) ? R.push(z) : E.push(z))
        }), [...m].forEach(O => O(S, {
            deletedFetchers: R,
            viewTransitionOpts: A.viewTransitionOpts,
            flushSync: A.flushSync === !0
        })), d.v7_fetcherPersist && (E.forEach(O => S.fetchers.delete(O)), R.forEach(O => fo(O)))
    }

    function ar(x, A, E) {
        var R, O;
        let {
            flushSync: z
        } = E === void 0 ? {} : E, K = S.actionData != null && S.navigation.formMethod != null && At(S.navigation.formMethod) && S.navigation.state === "loading" && ((R = x.state) == null ? void 0 : R._isRedirect) !== !0, b;
        A.actionData ? Object.keys(A.actionData).length > 0 ? b = A.actionData : b = null : K ? b = S.actionData : b = null;
        let I = A.loaderData ? Tf(S.loaderData, A.loaderData, A.matches || [], A.errors) : S.loaderData,
            B = S.blockers;
        B.size > 0 && (B = new Map(B), B.forEach((Z, Ne) => B.set(Ne, ui)));
        let U = C === !0 || S.navigation.formMethod != null && At(S.navigation.formMethod) && ((O = x.state) == null ? void 0 : O._isRedirect) !== !0;
        a && (s = a, a = void 0), ye || M === Te.Pop || (M === Te.Push ? e.history.push(x, x.state) : M === Te.Replace && e.history.replace(x, x.state));
        let X;
        if (M === Te.Pop) {
            let Z = G.get(S.location.pathname);
            Z && Z.has(x.pathname) ? X = {
                currentLocation: S.location,
                nextLocation: x
            } : G.has(x.pathname) && (X = {
                currentLocation: x,
                nextLocation: S.location
            })
        } else if (L) {
            let Z = G.get(S.location.pathname);
            Z ? Z.add(x.pathname) : (Z = new Set([x.pathname]), G.set(S.location.pathname, Z)), X = {
                currentLocation: S.location,
                nextLocation: x
            }
        }
        Ke(de({}, A, {
            actionData: b,
            loaderData: I,
            historyAction: M,
            location: x,
            initialized: !0,
            navigation: Ba,
            revalidation: "idle",
            restoreScrollPosition: td(x, A.matches || S.matches),
            preventScrollReset: U,
            blockers: B
        }), {
            viewTransitionOpts: X,
            flushSync: z === !0
        }), M = Te.Pop, C = !1, L = !1, ye = !1, he = !1, Ot = []
    }
    async function Kc(x, A) {
        if (typeof x == "number") {
            e.history.go(x);
            return
        }
        let E = Wl(S.location, S.matches, l, d.v7_prependBasename, x, d.v7_relativeSplatPath, A == null ? void 0 : A.fromRouteId, A == null ? void 0 : A.relative),
            {
                path: R,
                submission: O,
                error: z
            } = vf(d.v7_normalizeFormMethod, !1, E, A),
            K = S.location,
            b = Gi(S.location, R, A && A.state);
        b = de({}, b, e.history.encodeLocation(b));
        let I = A && A.replace != null ? A.replace : void 0,
            B = Te.Push;
        I === !0 ? B = Te.Replace : I === !1 || O != null && At(O.formMethod) && O.formAction === S.location.pathname + S.location.search && (B = Te.Replace);
        let U = A && "preventScrollReset" in A ? A.preventScrollReset === !0 : void 0,
            X = (A && A.flushSync) === !0,
            Z = $c({
                currentLocation: K,
                nextLocation: b,
                historyAction: B
            });
        if (Z) {
            ho(Z, {
                state: "blocked",
                location: b,
                proceed() {
                    ho(Z, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: b
                    }), Kc(x, A)
                },
                reset() {
                    let Ne = new Map(S.blockers);
                    Ne.set(Z, ui), Ke({
                        blockers: Ne
                    })
                }
            });
            return
        }
        return await Vn(B, b, {
            submission: O,
            pendingError: z,
            preventScrollReset: U,
            replace: A && A.replace,
            enableViewTransition: A && A.viewTransition,
            flushSync: X
        })
    }

    function ay() {
        if (sa(), Ke({
                revalidation: "loading"
            }), S.navigation.state !== "submitting") {
            if (S.navigation.state === "idle") {
                Vn(S.historyAction, S.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            Vn(M || S.historyAction, S.navigation.location, {
                overrideNavigation: S.navigation,
                enableViewTransition: L === !0
            })
        }
    }
    async function Vn(x, A, E) {
        V && V.abort(), V = null, M = x, ye = (E && E.startUninterruptedRevalidation) === !0, vy(S.location, S.matches), C = (E && E.preventScrollReset) === !0, L = (E && E.enableViewTransition) === !0;
        let R = a || s,
            O = E && E.overrideNavigation,
            z = _n(R, A, l),
            K = (E && E.flushSync) === !0,
            b = po(z, R, A.pathname);
        if (b.active && b.matches && (z = b.matches), !z) {
            let {
                error: se,
                notFoundMatches: te,
                route: xe
            } = aa(A.pathname);
            ar(A, {
                matches: te,
                loaderData: {},
                errors: {
                    [xe.id]: se
                }
            }, {
                flushSync: K
            });
            return
        }
        if (S.initialized && !he && B1(S.location, A) && !(E && E.submission && At(E.submission.formMethod))) {
            ar(A, {
                matches: z
            }, {
                flushSync: K
            });
            return
        }
        V = new AbortController;
        let I = fr(e.history, A, V.signal, E && E.submission),
            B;
        if (E && E.pendingError) B = [Hn(z).route.id, {
            type: re.error,
            error: E.pendingError
        }];
        else if (E && E.submission && At(E.submission.formMethod)) {
            let se = await ly(I, A, E.submission, z, b.active, {
                replace: E.replace,
                flushSync: K
            });
            if (se.shortCircuited) return;
            if (se.pendingActionResult) {
                let [te, xe] = se.pendingActionResult;
                if (rt(xe) && $s(xe.error) && xe.error.status === 404) {
                    V = null, ar(A, {
                        matches: se.matches,
                        loaderData: {},
                        errors: {
                            [te]: xe.error
                        }
                    });
                    return
                }
            }
            z = se.matches || z, B = se.pendingActionResult, O = ba(A, E.submission), K = !1, b.active = !1, I = fr(e.history, I.url, I.signal)
        }
        let {
            shortCircuited: U,
            matches: X,
            loaderData: Z,
            errors: Ne
        } = await uy(I, A, z, b.active, O, E && E.submission, E && E.fetcherSubmission, E && E.replace, E && E.initialHydration === !0, K, B);
        U || (V = null, ar(A, de({
            matches: X || z
        }, Cf(B), {
            loaderData: Z,
            errors: Ne
        })))
    }
    async function ly(x, A, E, R, O, z) {
        z === void 0 && (z = {}), sa();
        let K = H1(A, E);
        if (Ke({
                navigation: K
            }, {
                flushSync: z.flushSync === !0
            }), O) {
            let B = await mo(R, A.pathname, x.signal);
            if (B.type === "aborted") return {
                shortCircuited: !0
            };
            if (B.type === "error") {
                let U = Hn(B.partialMatches).route.id;
                return {
                    matches: B.partialMatches,
                    pendingActionResult: [U, {
                        type: re.error,
                        error: B.error
                    }]
                }
            } else if (B.matches) R = B.matches;
            else {
                let {
                    notFoundMatches: U,
                    error: X,
                    route: Z
                } = aa(A.pathname);
                return {
                    matches: U,
                    pendingActionResult: [Z.id, {
                        type: re.error,
                        error: X
                    }]
                }
            }
        }
        let b, I = vi(R, A);
        if (!I.route.action && !I.route.lazy) b = {
            type: re.error,
            error: Ze(405, {
                method: x.method,
                pathname: A.pathname,
                routeId: I.route.id
            })
        };
        else if (b = (await Jr("action", S, x, [I], R, null))[I.route.id], x.signal.aborted) return {
            shortCircuited: !0
        };
        if (Qn(b)) {
            let B;
            return z && z.replace != null ? B = z.replace : B = Af(b.response.headers.get("Location"), new URL(x.url), l) === S.location.pathname + S.location.search, await Fn(x, b, !0, {
                submission: E,
                replace: B
            }), {
                shortCircuited: !0
            }
        }
        if (pn(b)) throw Ze(400, {
            type: "defer-action"
        });
        if (rt(b)) {
            let B = Hn(R, I.route.id);
            return (z && z.replace) !== !0 && (M = Te.Push), {
                matches: R,
                pendingActionResult: [B.route.id, b]
            }
        }
        return {
            matches: R,
            pendingActionResult: [I.route.id, b]
        }
    }
    async function uy(x, A, E, R, O, z, K, b, I, B, U) {
        let X = O || ba(A, z),
            Z = z || K || Rf(X),
            Ne = !ye && (!d.v7_partialHydration || !I);
        if (R) {
            if (Ne) {
                let we = Yc(U);
                Ke(de({
                    navigation: X
                }, we !== void 0 ? {
                    actionData: we
                } : {}), {
                    flushSync: B
                })
            }
            let $ = await mo(E, A.pathname, x.signal);
            if ($.type === "aborted") return {
                shortCircuited: !0
            };
            if ($.type === "error") {
                let we = Hn($.partialMatches).route.id;
                return {
                    matches: $.partialMatches,
                    loaderData: {},
                    errors: {
                        [we]: $.error
                    }
                }
            } else if ($.matches) E = $.matches;
            else {
                let {
                    error: we,
                    notFoundMatches: ur,
                    route: ei
                } = aa(A.pathname);
                return {
                    matches: ur,
                    loaderData: {},
                    errors: {
                        [ei.id]: we
                    }
                }
            }
        }
        let se = a || s,
            [te, xe] = xf(e.history, S, E, Z, A, d.v7_partialHydration && I === !0, d.v7_skipActionErrorRevalidation, he, Ot, Bt, Me, le, ee, se, l, U);
        if (la($ => !(E && E.some(we => we.route.id === $)) || te && te.some(we => we.route.id === $)), _ = ++N, te.length === 0 && xe.length === 0) {
            let $ = Zc();
            return ar(A, de({
                matches: E,
                loaderData: {},
                errors: U && rt(U[1]) ? {
                    [U[0]]: U[1].error
                } : null
            }, Cf(U), $ ? {
                fetchers: new Map(S.fetchers)
            } : {}), {
                flushSync: B
            }), {
                shortCircuited: !0
            }
        }
        if (Ne) {
            let $ = {};
            if (!R) {
                $.navigation = X;
                let we = Yc(U);
                we !== void 0 && ($.actionData = we)
            }
            xe.length > 0 && ($.fetchers = cy(xe)), Ke($, {
                flushSync: B
            })
        }
        xe.forEach($ => {
            rn($.key), $.controller && Y.set($.key, $.controller)
        });
        let lr = () => xe.forEach($ => rn($.key));
        V && V.signal.addEventListener("abort", lr);
        let {
            loaderResults: qr,
            fetcherResults: zt
        } = await Qc(S, E, te, xe, x);
        if (x.signal.aborted) return {
            shortCircuited: !0
        };
        V && V.signal.removeEventListener("abort", lr), xe.forEach($ => Y.delete($.key));
        let jt = Fo(qr);
        if (jt) return await Fn(x, jt.result, !0, {
            replace: b
        }), {
            shortCircuited: !0
        };
        if (jt = Fo(zt), jt) return ee.add(jt.key), await Fn(x, jt.result, !0, {
            replace: b
        }), {
            shortCircuited: !0
        };
        let {
            loaderData: ua,
            errors: $r
        } = Ef(S, E, qr, U, xe, zt, yt);
        yt.forEach(($, we) => {
            $.subscribe(ur => {
                (ur || $.done) && yt.delete(we)
            })
        }), d.v7_partialHydration && I && S.errors && ($r = de({}, S.errors, $r));
        let On = Zc(),
            go = Jc(_),
            vo = On || go || xe.length > 0;
        return de({
            matches: E,
            loaderData: ua,
            errors: $r
        }, vo ? {
            fetchers: new Map(S.fetchers)
        } : {})
    }

    function Yc(x) {
        if (x && !rt(x[1])) return {
            [x[0]]: x[1].data
        };
        if (S.actionData) return Object.keys(S.actionData).length === 0 ? null : S.actionData
    }

    function cy(x) {
        return x.forEach(A => {
            let E = S.fetchers.get(A.key),
                R = ci(void 0, E ? E.data : void 0);
            S.fetchers.set(A.key, R)
        }), new Map(S.fetchers)
    }

    function dy(x, A, E, R) {
        if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        rn(x);
        let O = (R && R.flushSync) === !0,
            z = a || s,
            K = Wl(S.location, S.matches, l, d.v7_prependBasename, E, d.v7_relativeSplatPath, A, R == null ? void 0 : R.relative),
            b = _n(z, K, l),
            I = po(b, z, K);
        if (I.active && I.matches && (b = I.matches), !b) {
            It(x, A, Ze(404, {
                pathname: K
            }), {
                flushSync: O
            });
            return
        }
        let {
            path: B,
            submission: U,
            error: X
        } = vf(d.v7_normalizeFormMethod, !0, K, R);
        if (X) {
            It(x, A, X, {
                flushSync: O
            });
            return
        }
        let Z = vi(b, B),
            Ne = (R && R.preventScrollReset) === !0;
        if (U && At(U.formMethod)) {
            fy(x, A, B, Z, b, I.active, O, Ne, U);
            return
        }
        le.set(x, {
            routeId: A,
            path: B
        }), hy(x, A, B, Z, b, I.active, O, Ne, U)
    }
    async function fy(x, A, E, R, O, z, K, b, I) {
        sa(), le.delete(x);

        function B(Ee) {
            if (!Ee.route.action && !Ee.route.lazy) {
                let cr = Ze(405, {
                    method: I.formMethod,
                    pathname: E,
                    routeId: A
                });
                return It(x, A, cr, {
                    flushSync: K
                }), !0
            }
            return !1
        }
        if (!z && B(R)) return;
        let U = S.fetchers.get(x);
        nn(x, W1(I, U), {
            flushSync: K
        });
        let X = new AbortController,
            Z = fr(e.history, E, X.signal, I);
        if (z) {
            let Ee = await mo(O, E, Z.signal);
            if (Ee.type === "aborted") return;
            if (Ee.type === "error") {
                It(x, A, Ee.error, {
                    flushSync: K
                });
                return
            } else if (Ee.matches) {
                if (O = Ee.matches, R = vi(O, E), B(R)) return
            } else {
                It(x, A, Ze(404, {
                    pathname: E
                }), {
                    flushSync: K
                });
                return
            }
        }
        Y.set(x, X);
        let Ne = N,
            te = (await Jr("action", S, Z, [R], O, x))[R.route.id];
        if (Z.signal.aborted) {
            Y.get(x) === X && Y.delete(x);
            return
        }
        if (d.v7_fetcherPersist && Me.has(x)) {
            if (Qn(te) || rt(te)) {
                nn(x, sn(void 0));
                return
            }
        } else {
            if (Qn(te))
                if (Y.delete(x), _ > Ne) {
                    nn(x, sn(void 0));
                    return
                } else return ee.add(x), nn(x, ci(I)), Fn(Z, te, !1, {
                    fetcherSubmission: I,
                    preventScrollReset: b
                });
            if (rt(te)) {
                It(x, A, te.error);
                return
            }
        }
        if (pn(te)) throw Ze(400, {
            type: "defer-action"
        });
        let xe = S.navigation.location || S.location,
            lr = fr(e.history, xe, X.signal),
            qr = a || s,
            zt = S.navigation.state !== "idle" ? _n(qr, S.navigation.location, l) : S.matches;
        J(zt, "Didn't find any matches after fetcher action");
        let jt = ++N;
        W.set(x, jt);
        let ua = ci(I, te.data);
        S.fetchers.set(x, ua);
        let [$r, On] = xf(e.history, S, zt, I, xe, !1, d.v7_skipActionErrorRevalidation, he, Ot, Bt, Me, le, ee, qr, l, [R.route.id, te]);
        On.filter(Ee => Ee.key !== x).forEach(Ee => {
            let cr = Ee.key,
                nd = S.fetchers.get(cr),
                wy = ci(void 0, nd ? nd.data : void 0);
            S.fetchers.set(cr, wy), rn(cr), Ee.controller && Y.set(cr, Ee.controller)
        }), Ke({
            fetchers: new Map(S.fetchers)
        });
        let go = () => On.forEach(Ee => rn(Ee.key));
        X.signal.addEventListener("abort", go);
        let {
            loaderResults: vo,
            fetcherResults: $
        } = await Qc(S, zt, $r, On, lr);
        if (X.signal.aborted) return;
        X.signal.removeEventListener("abort", go), W.delete(x), Y.delete(x), On.forEach(Ee => Y.delete(Ee.key));
        let we = Fo(vo);
        if (we) return Fn(lr, we.result, !1, {
            preventScrollReset: b
        });
        if (we = Fo($), we) return ee.add(we.key), Fn(lr, we.result, !1, {
            preventScrollReset: b
        });
        let {
            loaderData: ur,
            errors: ei
        } = Ef(S, zt, vo, void 0, On, $, yt);
        if (S.fetchers.has(x)) {
            let Ee = sn(te.data);
            S.fetchers.set(x, Ee)
        }
        Jc(jt), S.navigation.state === "loading" && jt > _ ? (J(M, "Expected pending action"), V && V.abort(), ar(S.navigation.location, {
            matches: zt,
            loaderData: ur,
            errors: ei,
            fetchers: new Map(S.fetchers)
        })) : (Ke({
            errors: ei,
            loaderData: Tf(S.loaderData, ur, zt, ei),
            fetchers: new Map(S.fetchers)
        }), he = !1)
    }
    async function hy(x, A, E, R, O, z, K, b, I) {
        let B = S.fetchers.get(x);
        nn(x, ci(I, B ? B.data : void 0), {
            flushSync: K
        });
        let U = new AbortController,
            X = fr(e.history, E, U.signal);
        if (z) {
            let te = await mo(O, E, X.signal);
            if (te.type === "aborted") return;
            if (te.type === "error") {
                It(x, A, te.error, {
                    flushSync: K
                });
                return
            } else if (te.matches) O = te.matches, R = vi(O, E);
            else {
                It(x, A, Ze(404, {
                    pathname: E
                }), {
                    flushSync: K
                });
                return
            }
        }
        Y.set(x, U);
        let Z = N,
            se = (await Jr("loader", S, X, [R], O, x))[R.route.id];
        if (pn(se) && (se = await ac(se, X.signal, !0) || se), Y.get(x) === U && Y.delete(x), !X.signal.aborted) {
            if (Me.has(x)) {
                nn(x, sn(void 0));
                return
            }
            if (Qn(se))
                if (_ > Z) {
                    nn(x, sn(void 0));
                    return
                } else {
                    ee.add(x), await Fn(X, se, !1, {
                        preventScrollReset: b
                    });
                    return
                }
            if (rt(se)) {
                It(x, A, se.error);
                return
            }
            J(!pn(se), "Unhandled fetcher deferred data"), nn(x, sn(se.data))
        }
    }
    async function Fn(x, A, E, R) {
        let {
            submission: O,
            fetcherSubmission: z,
            preventScrollReset: K,
            replace: b
        } = R === void 0 ? {} : R;
        A.response.headers.has("X-Remix-Revalidate") && (he = !0);
        let I = A.response.headers.get("Location");
        J(I, "Expected a Location header on the redirect Response"), I = Af(I, new URL(x.url), l);
        let B = Gi(S.location, I, {
            _isRedirect: !0
        });
        if (n) {
            let te = !1;
            if (A.response.headers.has("X-Remix-Reload-Document")) te = !0;
            else if (sc.test(I)) {
                const xe = e.history.createURL(I);
                te = xe.origin !== t.location.origin || so(xe.pathname, l) == null
            }
            if (te) {
                b ? t.location.replace(I) : t.location.assign(I);
                return
            }
        }
        V = null;
        let U = b === !0 || A.response.headers.has("X-Remix-Replace") ? Te.Replace : Te.Push,
            {
                formMethod: X,
                formAction: Z,
                formEncType: Ne
            } = S.navigation;
        !O && !z && X && Z && Ne && (O = Rf(S.navigation));
        let se = O || z;
        if (E1.has(A.response.status) && se && At(se.formMethod)) await Vn(U, B, {
            submission: de({}, se, {
                formAction: I
            }),
            preventScrollReset: K || C,
            enableViewTransition: E ? L : void 0
        });
        else {
            let te = ba(B, O);
            await Vn(U, B, {
                overrideNavigation: te,
                fetcherSubmission: z,
                preventScrollReset: K || C,
                enableViewTransition: E ? L : void 0
            })
        }
    }
    async function Jr(x, A, E, R, O, z) {
        let K, b = {};
        try {
            K = await N1(u, x, A, E, R, O, z, o, i)
        } catch (I) {
            return R.forEach(B => {
                b[B.route.id] = {
                    type: re.error,
                    error: I
                }
            }), b
        }
        for (let [I, B] of Object.entries(K))
            if (b1(B)) {
                let U = B.result;
                b[I] = {
                    type: re.redirect,
                    response: F1(U, E, I, O, l, d.v7_relativeSplatPath)
                }
            } else b[I] = await V1(B);
        return b
    }
    async function Qc(x, A, E, R, O) {
        let z = x.matches,
            K = Jr("loader", x, O, E, A, null),
            b = Promise.all(R.map(async U => {
                if (U.matches && U.match && U.controller) {
                    let Z = (await Jr("loader", x, fr(e.history, U.path, U.controller.signal), [U.match], U.matches, U.key))[U.match.route.id];
                    return {
                        [U.key]: Z
                    }
                } else return Promise.resolve({
                    [U.key]: {
                        type: re.error,
                        error: Ze(404, {
                            pathname: U.path
                        })
                    }
                })
            })),
            I = await K,
            B = (await b).reduce((U, X) => Object.assign(U, X), {});
        return await Promise.all([U1(A, I, O.signal, z, x.loaderData), _1(A, B, R)]), {
            loaderResults: I,
            fetcherResults: B
        }
    }

    function sa() {
        he = !0, Ot.push(...la()), le.forEach((x, A) => {
            Y.has(A) && Bt.add(A), rn(A)
        })
    }

    function nn(x, A, E) {
        E === void 0 && (E = {}), S.fetchers.set(x, A), Ke({
            fetchers: new Map(S.fetchers)
        }, {
            flushSync: (E && E.flushSync) === !0
        })
    }

    function It(x, A, E, R) {
        R === void 0 && (R = {});
        let O = Hn(S.matches, A);
        fo(x), Ke({
            errors: {
                [O.route.id]: E
            },
            fetchers: new Map(S.fetchers)
        }, {
            flushSync: (R && R.flushSync) === !0
        })
    }

    function Xc(x) {
        return d.v7_fetcherPersist && (kt.set(x, (kt.get(x) || 0) + 1), Me.has(x) && Me.delete(x)), S.fetchers.get(x) || T1
    }

    function fo(x) {
        let A = S.fetchers.get(x);
        Y.has(x) && !(A && A.state === "loading" && W.has(x)) && rn(x), le.delete(x), W.delete(x), ee.delete(x), Me.delete(x), Bt.delete(x), S.fetchers.delete(x)
    }

    function py(x) {
        if (d.v7_fetcherPersist) {
            let A = (kt.get(x) || 0) - 1;
            A <= 0 ? (kt.delete(x), Me.add(x)) : kt.set(x, A)
        } else fo(x);
        Ke({
            fetchers: new Map(S.fetchers)
        })
    }

    function rn(x) {
        let A = Y.get(x);
        A && (A.abort(), Y.delete(x))
    }

    function Gc(x) {
        for (let A of x) {
            let E = Xc(A),
                R = sn(E.data);
            S.fetchers.set(A, R)
        }
    }

    function Zc() {
        let x = [],
            A = !1;
        for (let E of ee) {
            let R = S.fetchers.get(E);
            J(R, "Expected fetcher: " + E), R.state === "loading" && (ee.delete(E), x.push(E), A = !0)
        }
        return Gc(x), A
    }

    function Jc(x) {
        let A = [];
        for (let [E, R] of W)
            if (R < x) {
                let O = S.fetchers.get(E);
                J(O, "Expected fetcher: " + E), O.state === "loading" && (rn(E), W.delete(E), A.push(E))
            }
        return Gc(A), A.length > 0
    }

    function my(x, A) {
        let E = S.blockers.get(x) || ui;
        return We.get(x) !== A && We.set(x, A), E
    }

    function qc(x) {
        S.blockers.delete(x), We.delete(x)
    }

    function ho(x, A) {
        let E = S.blockers.get(x) || ui;
        J(E.state === "unblocked" && A.state === "blocked" || E.state === "blocked" && A.state === "blocked" || E.state === "blocked" && A.state === "proceeding" || E.state === "blocked" && A.state === "unblocked" || E.state === "proceeding" && A.state === "unblocked", "Invalid blocker state transition: " + E.state + " -> " + A.state);
        let R = new Map(S.blockers);
        R.set(x, A), Ke({
            blockers: R
        })
    }

    function $c(x) {
        let {
            currentLocation: A,
            nextLocation: E,
            historyAction: R
        } = x;
        if (We.size === 0) return;
        We.size > 1 && Hr(!1, "A router only supports one blocker at a time");
        let O = Array.from(We.entries()),
            [z, K] = O[O.length - 1],
            b = S.blockers.get(z);
        if (!(b && b.state === "proceeding") && K({
                currentLocation: A,
                nextLocation: E,
                historyAction: R
            })) return z
    }

    function aa(x) {
        let A = Ze(404, {
                pathname: x
            }),
            E = a || s,
            {
                matches: R,
                route: O
            } = kf(E);
        return la(), {
            notFoundMatches: R,
            route: O,
            error: A
        }
    }

    function la(x) {
        let A = [];
        return yt.forEach((E, R) => {
            (!x || x(R)) && (E.cancel(), A.push(R), yt.delete(R))
        }), A
    }

    function gy(x, A, E) {
        if (y = x, T = A, w = E || null, !p && S.navigation === Ba) {
            p = !0;
            let R = td(S.location, S.matches);
            R != null && Ke({
                restoreScrollPosition: R
            })
        }
        return () => {
            y = null, T = null, w = null
        }
    }

    function ed(x, A) {
        return w && w(x, A.map(R => e1(R, S.loaderData))) || x.key
    }

    function vy(x, A) {
        if (y && T) {
            let E = ed(x, A);
            y[E] = T()
        }
    }

    function td(x, A) {
        if (y) {
            let E = ed(x, A),
                R = y[E];
            if (typeof R == "number") return R
        }
        return null
    }

    function po(x, A, E) {
        if (c)
            if (x) {
                if (Object.keys(x[0].params).length > 0) return {
                    active: !0,
                    matches: Jo(A, E, l, !0)
                }
            } else return {
                active: !0,
                matches: Jo(A, E, l, !0) || []
            };
        return {
            active: !1,
            matches: null
        }
    }
    async function mo(x, A, E) {
        if (!c) return {
            type: "success",
            matches: x
        };
        let R = x;
        for (;;) {
            let O = a == null,
                z = a || s,
                K = o;
            try {
                await c({
                    path: A,
                    matches: R,
                    patch: (B, U) => {
                        E.aborted || Sf(B, U, z, K, i)
                    }
                })
            } catch (B) {
                return {
                    type: "error",
                    error: B,
                    partialMatches: R
                }
            } finally {
                O && !E.aborted && (s = [...s])
            }
            if (E.aborted) return {
                type: "aborted"
            };
            let b = _n(z, A, l);
            if (b) return {
                type: "success",
                matches: b
            };
            let I = Jo(z, A, l, !0);
            if (!I || R.length === I.length && R.every((B, U) => B.route.id === I[U].route.id)) return {
                type: "success",
                matches: null
            };
            R = I
        }
    }

    function yy(x) {
        o = {}, a = Ts(x, i, void 0, o)
    }

    function xy(x, A) {
        let E = a == null;
        Sf(x, A, a || s, o, i), E && (s = [...s], Ke({}))
    }
    return j = {
        get basename() {
            return l
        },
        get future() {
            return d
        },
        get state() {
            return S
        },
        get routes() {
            return s
        },
        get window() {
            return t
        },
        initialize: iy,
        subscribe: sy,
        enableScrollRestoration: gy,
        navigate: Kc,
        fetch: dy,
        revalidate: ay,
        createHref: x => e.history.createHref(x),
        encodeLocation: x => e.history.encodeLocation(x),
        getFetcher: Xc,
        deleteFetcher: py,
        dispose: oy,
        getBlocker: my,
        deleteBlocker: qc,
        patchRoutes: xy,
        _internalFetchControllers: Y,
        _internalActiveDeferreds: yt,
        _internalSetRoutes: yy
    }, j
}

function j1(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function Wl(e, t, n, r, i, o, s, a) {
    let l, u;
    if (s) {
        l = [];
        for (let d of t)
            if (l.push(d), d.route.id === s) {
                u = d;
                break
            }
    } else l = t, u = t[t.length - 1];
    let c = g1(i || ".", m1(l, o), so(e.pathname, n) || e.pathname, a === "path");
    if (i == null && (c.search = e.search, c.hash = e.hash), (i == null || i === "" || i === ".") && u) {
        let d = lc(c.search);
        if (u.route.index && !d) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
        else if (!u.route.index && d) {
            let f = new URLSearchParams(c.search),
                m = f.getAll("index");
            f.delete("index"), m.filter(w => w).forEach(w => f.append("index", w));
            let y = f.toString();
            c.search = y ? "?" + y : ""
        }
    }
    return r && n !== "/" && (c.pathname = c.pathname === "/" ? n : Jn([n, c.pathname])), oo(c)
}

function vf(e, t, n, r) {
    if (!r || !j1(r)) return {
        path: n
    };
    if (r.formMethod && !z1(r.formMethod)) return {
        path: n,
        error: Ze(405, {
            method: r.formMethod
        })
    };
    let i = () => ({
            path: n,
            error: Ze(400, {
                type: "invalid-body"
            })
        }),
        o = r.formMethod || "get",
        s = e ? o.toUpperCase() : o.toLowerCase(),
        a = yg(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!At(s)) return i();
            let f = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((m, y) => {
                let [w, T] = y;
                return "" + m + w + "=" + T + `
`
            }, "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: s,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: f
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!At(s)) return i();
            try {
                let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: s,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: f,
                        text: void 0
                    }
                }
            } catch {
                return i()
            }
        }
    }
    J(typeof FormData == "function", "FormData is not available in this environment");
    let l, u;
    if (r.formData) l = Yl(r.formData), u = r.formData;
    else if (r.body instanceof FormData) l = Yl(r.body), u = r.body;
    else if (r.body instanceof URLSearchParams) l = r.body, u = Pf(l);
    else if (r.body == null) l = new URLSearchParams, u = new FormData;
    else try {
        l = new URLSearchParams(r.body), u = Pf(l)
    } catch {
        return i()
    }
    let c = {
        formMethod: s,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: u,
        json: void 0,
        text: void 0
    };
    if (At(c.formMethod)) return {
        path: n,
        submission: c
    };
    let d = Nn(n);
    return t && d.search && lc(d.search) && l.append("index", ""), d.search = "?" + l, {
        path: oo(d),
        submission: c
    }
}

function yf(e, t, n) {
    n === void 0 && (n = !1);
    let r = e.findIndex(i => i.route.id === t);
    return r >= 0 ? e.slice(0, n ? r + 1 : r) : e
}

function xf(e, t, n, r, i, o, s, a, l, u, c, d, f, m, y, w) {
    let T = w ? rt(w[1]) ? w[1].error : w[1].data : void 0,
        p = e.createURL(t.location),
        h = e.createURL(i),
        g = n;
    o && t.errors ? g = yf(n, Object.keys(t.errors)[0], !0) : w && rt(w[1]) && (g = yf(n, w[0]));
    let P = w ? w[1].statusCode : void 0,
        j = s && P && P >= 400,
        S = g.filter((C, V) => {
            let {
                route: L
            } = C;
            if (L.lazy) return !0;
            if (L.loader == null) return !1;
            if (o) return Kl(L, t.loaderData, t.errors);
            if (R1(t.loaderData, t.matches[V], C) || l.some(ye => ye === C.route.id)) return !0;
            let G = t.matches[V],
                oe = C;
            return wf(C, de({
                currentUrl: p,
                currentParams: G.params,
                nextUrl: h,
                nextParams: oe.params
            }, r, {
                actionResult: T,
                actionStatus: P,
                defaultShouldRevalidate: j ? !1 : a || p.pathname + p.search === h.pathname + h.search || p.search !== h.search || gg(G, oe)
            }))
        }),
        M = [];
    return d.forEach((C, V) => {
        if (o || !n.some(he => he.route.id === C.routeId) || c.has(V)) return;
        let L = _n(m, C.path, y);
        if (!L) {
            M.push({
                key: V,
                routeId: C.routeId,
                path: C.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let G = t.fetchers.get(V),
            oe = vi(L, C.path),
            ye = !1;
        f.has(V) ? ye = !1 : u.has(V) ? (u.delete(V), ye = !0) : G && G.state !== "idle" && G.data === void 0 ? ye = a : ye = wf(oe, de({
            currentUrl: p,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: h,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: T,
            actionStatus: P,
            defaultShouldRevalidate: j ? !1 : a
        })), ye && M.push({
            key: V,
            routeId: C.routeId,
            path: C.path,
            matches: L,
            match: oe,
            controller: new AbortController
        })
    }), [S, M]
}

function Kl(e, t, n) {
    if (e.lazy) return !0;
    if (!e.loader) return !1;
    let r = t != null && t[e.id] !== void 0,
        i = n != null && n[e.id] !== void 0;
    return !r && i ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !i
}

function R1(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        i = e[n.route.id] === void 0;
    return r || i
}

function gg(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function wf(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}

function Sf(e, t, n, r, i) {
    var o;
    let s;
    if (e) {
        let u = r[e];
        J(u, "No route found to patch children into: routeId = " + e), u.children || (u.children = []), s = u.children
    } else s = n;
    let a = t.filter(u => !s.some(c => vg(u, c))),
        l = Ts(a, i, [e || "_", "patch", String(((o = s) == null ? void 0 : o.length) || "0")], r);
    s.push(...l)
}

function vg(e, t) {
    return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every((n, r) => {
        var i;
        return (i = t.children) == null ? void 0 : i.some(o => vg(n, o))
    }) : !1
}
async function D1(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let i = n[e.id];
    J(i, "No route found in manifest");
    let o = {};
    for (let s in r) {
        let l = i[s] !== void 0 && s !== "hasErrorBoundary";
        Hr(!l, 'Route "' + i.id + '" has a static property "' + s + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + s + '" will be ignored.')), !l && !qx.has(s) && (o[s] = r[s])
    }
    Object.assign(i, o), Object.assign(i, de({}, t(i), {
        lazy: void 0
    }))
}
async function M1(e) {
    let {
        matches: t
    } = e, n = t.filter(i => i.shouldLoad);
    return (await Promise.all(n.map(i => i.resolve()))).reduce((i, o, s) => Object.assign(i, {
        [n[s].route.id]: o
    }), {})
}
async function N1(e, t, n, r, i, o, s, a, l, u) {
    let c = o.map(m => m.route.lazy ? D1(m.route, l, a) : void 0),
        d = o.map((m, y) => {
            let w = c[y],
                T = i.some(h => h.route.id === m.route.id);
            return de({}, m, {
                shouldLoad: T,
                resolve: async h => (h && r.method === "GET" && (m.route.lazy || m.route.loader) && (T = !0), T ? L1(t, r, m, w, h, u) : Promise.resolve({
                    type: re.data,
                    result: void 0
                }))
            })
        }),
        f = await e({
            matches: d,
            request: r,
            params: o[0].params,
            fetcherKey: s,
            context: u
        });
    try {
        await Promise.all(c)
    } catch {}
    return f
}
async function L1(e, t, n, r, i, o) {
    let s, a, l = u => {
        let c, d = new Promise((y, w) => c = w);
        a = () => c(), t.signal.addEventListener("abort", a);
        let f = y => typeof u != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : u({
                request: t,
                params: n.params,
                context: o
            }, ...y !== void 0 ? [y] : []),
            m = (async () => {
                try {
                    return {
                        type: "data",
                        result: await (i ? i(w => f(w)) : f())
                    }
                } catch (y) {
                    return {
                        type: "error",
                        result: y
                    }
                }
            })();
        return Promise.race([m, d])
    };
    try {
        let u = n.route[e];
        if (r)
            if (u) {
                let c, [d] = await Promise.all([l(u).catch(f => {
                    c = f
                }), r]);
                if (c !== void 0) throw c;
                s = d
            } else if (await r, u = n.route[e], u) s = await l(u);
        else if (e === "action") {
            let c = new URL(t.url),
                d = c.pathname + c.search;
            throw Ze(405, {
                method: t.method,
                pathname: d,
                routeId: n.route.id
            })
        } else return {
            type: re.data,
            result: void 0
        };
        else if (u) s = await l(u);
        else {
            let c = new URL(t.url),
                d = c.pathname + c.search;
            throw Ze(404, {
                pathname: d
            })
        }
        J(s.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (u) {
        return {
            type: re.error,
            result: u
        }
    } finally {
        a && t.signal.removeEventListener("abort", a)
    }
    return s
}
async function V1(e) {
    let {
        result: t,
        type: n
    } = e;
    if (xg(t)) {
        let u;
        try {
            let c = t.headers.get("Content-Type");
            c && /\bapplication\/json\b/.test(c) ? t.body == null ? u = null : u = await t.json() : u = await t.text()
        } catch (c) {
            return {
                type: re.error,
                error: c
            }
        }
        return n === re.error ? {
            type: re.error,
            error: new Cs(t.status, t.statusText, u),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: re.data,
            data: u,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === re.error) {
        if (jf(t)) {
            var r;
            if (t.data instanceof Error) {
                var i;
                return {
                    type: re.error,
                    error: t.data,
                    statusCode: (i = t.init) == null ? void 0 : i.status
                }
            }
            t = new Cs(((r = t.init) == null ? void 0 : r.status) || 500, void 0, t.data)
        }
        return {
            type: re.error,
            error: t,
            statusCode: $s(t) ? t.status : void 0
        }
    }
    if (I1(t)) {
        var o, s;
        return {
            type: re.deferred,
            deferredData: t,
            statusCode: (o = t.init) == null ? void 0 : o.status,
            headers: ((s = t.init) == null ? void 0 : s.headers) && new Headers(t.init.headers)
        }
    }
    if (jf(t)) {
        var a, l;
        return {
            type: re.data,
            data: t.data,
            statusCode: (a = t.init) == null ? void 0 : a.status,
            headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0
        }
    }
    return {
        type: re.data,
        data: t
    }
}

function F1(e, t, n, r, i, o) {
    let s = e.headers.get("Location");
    if (J(s, "Redirects returned/thrown from loaders/actions must have a Location header"), !sc.test(s)) {
        let a = r.slice(0, r.findIndex(l => l.route.id === n) + 1);
        s = Wl(new URL(t.url), a, i, !0, s, o), e.headers.set("Location", s)
    }
    return e
}

function Af(e, t, n) {
    if (sc.test(e)) {
        let r = e,
            i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            o = so(i.pathname, n) != null;
        if (i.origin === t.origin && o) return i.pathname + i.search + i.hash
    }
    return e
}

function fr(e, t, n, r) {
    let i = e.createURL(yg(t)).toString(),
        o = {
            signal: n
        };
    if (r && At(r.formMethod)) {
        let {
            formMethod: s,
            formEncType: a
        } = r;
        o.method = s.toUpperCase(), a === "application/json" ? (o.headers = new Headers({
            "Content-Type": a
        }), o.body = JSON.stringify(r.json)) : a === "text/plain" ? o.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? o.body = Yl(r.formData) : o.body = r.formData
    }
    return new Request(i, o)
}

function Yl(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
    return t
}

function Pf(e) {
    let t = new FormData;
    for (let [n, r] of e.entries()) t.append(n, r);
    return t
}

function O1(e, t, n, r, i) {
    let o = {},
        s = null,
        a, l = !1,
        u = {},
        c = n && rt(n[1]) ? n[1].error : void 0;
    return e.forEach(d => {
        if (!(d.route.id in t)) return;
        let f = d.route.id,
            m = t[f];
        if (J(!Qn(m), "Cannot handle redirect results in processLoaderData"), rt(m)) {
            let y = m.error;
            c !== void 0 && (y = c, c = void 0), s = s || {}; {
                let w = Hn(e, f);
                s[w.route.id] == null && (s[w.route.id] = y)
            }
            o[f] = void 0, l || (l = !0, a = $s(m.error) ? m.error.status : 500), m.headers && (u[f] = m.headers)
        } else pn(m) ? (r.set(f, m.deferredData), o[f] = m.deferredData.data, m.statusCode != null && m.statusCode !== 200 && !l && (a = m.statusCode), m.headers && (u[f] = m.headers)) : (o[f] = m.data, m.statusCode && m.statusCode !== 200 && !l && (a = m.statusCode), m.headers && (u[f] = m.headers))
    }), c !== void 0 && n && (s = {
        [n[0]]: c
    }, o[n[0]] = void 0), {
        loaderData: o,
        errors: s,
        statusCode: a || 200,
        loaderHeaders: u
    }
}

function Ef(e, t, n, r, i, o, s) {
    let {
        loaderData: a,
        errors: l
    } = O1(t, n, r, s);
    return i.forEach(u => {
        let {
            key: c,
            match: d,
            controller: f
        } = u, m = o[c];
        if (J(m, "Did not find corresponding fetcher result"), !(f && f.signal.aborted))
            if (rt(m)) {
                let y = Hn(e.matches, d == null ? void 0 : d.route.id);
                l && l[y.route.id] || (l = de({}, l, {
                    [y.route.id]: m.error
                })), e.fetchers.delete(c)
            } else if (Qn(m)) J(!1, "Unhandled fetcher revalidation redirect");
        else if (pn(m)) J(!1, "Unhandled fetcher deferred data");
        else {
            let y = sn(m.data);
            e.fetchers.set(c, y)
        }
    }), {
        loaderData: a,
        errors: l
    }
}

function Tf(e, t, n, r) {
    let i = de({}, t);
    for (let o of n) {
        let s = o.route.id;
        if (t.hasOwnProperty(s) ? t[s] !== void 0 && (i[s] = t[s]) : e[s] !== void 0 && o.route.loader && (i[s] = e[s]), r && r.hasOwnProperty(s)) break
    }
    return i
}

function Cf(e) {
    return e ? rt(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}

function Hn(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function kf(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function Ze(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: i,
        type: o,
        message: s
    } = t === void 0 ? {} : t, a = "Unknown Server Error", l = "Unknown @remix-run/router error";
    return e === 400 ? (a = "Bad Request", i && n && r ? l = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? l = "defer() is not supported in actions" : o === "invalid-body" && (l = "Unable to encode submission body")) : e === 403 ? (a = "Forbidden", l = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (a = "Not Found", l = 'No route matches URL "' + n + '"') : e === 405 && (a = "Method Not Allowed", i && n && r ? l = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')), new Cs(e || 500, a, new Error(l), !0)
}

function Fo(e) {
    let t = Object.entries(e);
    for (let n = t.length - 1; n >= 0; n--) {
        let [r, i] = t[n];
        if (Qn(i)) return {
            key: r,
            result: i
        }
    }
}

function yg(e) {
    let t = typeof e == "string" ? Nn(e) : e;
    return oo(de({}, t, {
        hash: ""
    }))
}

function B1(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function b1(e) {
    return xg(e.result) && P1.has(e.result.status)
}

function pn(e) {
    return e.type === re.deferred
}

function rt(e) {
    return e.type === re.error
}

function Qn(e) {
    return (e && e.type) === re.redirect
}

function jf(e) {
    return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit"
}

function I1(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function xg(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function z1(e) {
    return A1.has(e.toLowerCase())
}

function At(e) {
    return w1.has(e.toLowerCase())
}
async function U1(e, t, n, r, i) {
    let o = Object.entries(t);
    for (let s = 0; s < o.length; s++) {
        let [a, l] = o[s], u = e.find(f => (f == null ? void 0 : f.route.id) === a);
        if (!u) continue;
        let c = r.find(f => f.route.id === u.route.id),
            d = c != null && !gg(c, u) && (i && i[u.route.id]) !== void 0;
        pn(l) && d && await ac(l, n, !1).then(f => {
            f && (t[a] = f)
        })
    }
}
async function _1(e, t, n) {
    for (let r = 0; r < n.length; r++) {
        let {
            key: i,
            routeId: o,
            controller: s
        } = n[r], a = t[i];
        e.find(u => (u == null ? void 0 : u.route.id) === o) && pn(a) && (J(s, "Expected an AbortController for revalidating fetcher deferred result"), await ac(a, s.signal, !0).then(u => {
            u && (t[i] = u)
        }))
    }
}
async function ac(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: re.data,
                data: e.deferredData.unwrappedData
            }
        } catch (i) {
            return {
                type: re.error,
                error: i
            }
        }
        return {
            type: re.data,
            data: e.deferredData.data
        }
    }
}

function lc(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function vi(e, t) {
    let n = typeof t == "string" ? Nn(t).search : t.search;
    if (e[e.length - 1].route.index && lc(n || "")) return e[e.length - 1];
    let r = hg(e);
    return r[r.length - 1]
}

function Rf(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: i,
        formData: o,
        json: s
    } = e;
    if (!(!t || !n || !r)) {
        if (i != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: void 0,
            text: i
        };
        if (o != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: o,
            json: void 0,
            text: void 0
        };
        if (s !== void 0) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: s,
            text: void 0
        }
    }
}

function ba(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function H1(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}

function ci(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function W1(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}

function sn(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function K1(e, t) {
    try {
        let n = e.sessionStorage.getItem(mg);
        if (n) {
            let r = JSON.parse(n);
            for (let [i, o] of Object.entries(r || {})) o && Array.isArray(o) && t.set(i, new Set(o || []))
        }
    } catch {}
}

function Y1(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, i] of t) n[r] = [...i];
        try {
            e.sessionStorage.setItem(mg, JSON.stringify(n))
        } catch (r) {
            Hr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ql() {
    return Ql = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ql.apply(this, arguments)
}
const wg = k.createContext(null),
    Sg = k.createContext(null),
    Ag = k.createContext(null),
    uc = k.createContext(null),
    ao = k.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Pg = k.createContext(null);

function cc() {
    return k.useContext(uc) != null
}

function Q1() {
    return cc() || J(!1), k.useContext(uc).location
}
const X1 = k.createContext(null);

function G1(e) {
    let t = k.useContext(ao).outlet;
    return t && k.createElement(X1.Provider, {
        value: e
    }, t)
}

function Z1(e, t, n, r) {
    cc() || J(!1);
    let {
        navigator: i
    } = k.useContext(Ag), {
        matches: o
    } = k.useContext(ao), s = o[o.length - 1], a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Q1(),
        c;
    c = u;
    let d = c.pathname || "/",
        f = d;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        f = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let m = _n(e, {
        pathname: f
    });
    return tw(m && m.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: Jn([l, i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Jn([l, i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), o, n, r)
}

function J1() {
    let e = ow(),
        t = $s(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? k.createElement("pre", {
        style: i
    }, n) : null, null)
}
const q1 = k.createElement(J1, null);
class $1 extends k.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? k.createElement(ao.Provider, {
            value: this.props.routeContext
        }, k.createElement(Pg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function ew(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = k.useContext(wg);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(ao.Provider, {
        value: t
    }, r)
}

function tw(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || J(!1), s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
                let {
                    loaderData: f,
                    errors: m
                } = n, y = d.route.loader && f[d.route.id] === void 0 && (!m || m[d.route.id] === void 0);
                if (d.route.lazy || y) {
                    l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, d, f) => {
        let m, y = !1,
            w = null,
            T = null;
        n && (m = a && d.route.id ? a[d.route.id] : void 0, w = d.route.errorElement || q1, l && (u < 0 && f === 0 ? (sw("route-fallback"), y = !0, T = null) : u === f && (y = !0, T = d.route.hydrateFallbackElement || null)));
        let p = t.concat(s.slice(0, f + 1)),
            h = () => {
                let g;
                return m ? g = w : y ? g = T : d.route.Component ? g = k.createElement(d.route.Component, null) : d.route.element ? g = d.route.element : g = c, k.createElement(ew, {
                    match: d,
                    routeContext: {
                        outlet: c,
                        matches: p,
                        isDataRoute: n != null
                    },
                    children: g
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? k.createElement($1, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: m,
            children: h(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : h()
    }, null)
}
var Xl = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Xl || {});

function nw(e) {
    let t = k.useContext(Sg);
    return t || J(!1), t
}

function rw(e) {
    let t = k.useContext(ao);
    return t || J(!1), t
}

function iw(e) {
    let t = rw(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || J(!1), n.route.id
}

function ow() {
    var e;
    let t = k.useContext(Pg),
        n = nw(Xl.UseRouteError),
        r = iw(Xl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
const Df = {};

function sw(e, t, n) {
    Df[e] || (Df[e] = !0)
}

function aw(e) {
    return G1(e.context)
}

function lw(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = Te.Pop,
        navigator: o,
        static: s = !1,
        future: a
    } = e;
    cc() && J(!1);
    let l = t.replace(/^\/*/, "/"),
        u = k.useMemo(() => ({
            basename: l,
            navigator: o,
            static: s,
            future: Ql({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, o, s]);
    typeof r == "string" && (r = Nn(r));
    let {
        pathname: c = "/",
        search: d = "",
        hash: f = "",
        state: m = null,
        key: y = "default"
    } = r, w = k.useMemo(() => {
        let T = so(c, l);
        return T == null ? null : {
            location: {
                pathname: T,
                search: d,
                hash: f,
                state: m,
                key: y
            },
            navigationType: i
        }
    }, [l, c, d, f, m, y, i]);
    return w == null ? null : k.createElement(Ag.Provider, {
        value: u
    }, k.createElement(uc.Provider, {
        children: n,
        value: w
    }))
}
new Promise(() => {});

function uw(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: k.createElement(e.Component),
        Component: void 0
    }), e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: k.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: k.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ks() {
    return ks = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ks.apply(this, arguments)
}
const cw = "6";
try {
    window.__reactRouterVersion = cw
} catch {}

function dw(e, t) {
    return k1({
        basename: void 0,
        future: ks({}, void 0, {
            v7_prependBasename: !0
        }),
        history: Gx({
            window: void 0
        }),
        hydrationData: fw(),
        routes: e,
        mapRouteProperties: uw,
        dataStrategy: void 0,
        patchRoutesOnNavigation: void 0,
        window: void 0
    }).initialize()
}

function fw() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = ks({}, t, {
        errors: hw(t.errors)
    })), t
}

function hw(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, i] of t)
        if (i && i.__type === "RouteErrorResponse") n[r] = new Cs(i.status, i.statusText, i.data, i.internal === !0);
        else if (i && i.__type === "Error") {
        if (i.__subType) {
            let o = window[i.__subType];
            if (typeof o == "function") try {
                let s = new o(i.message);
                s.stack = "", n[r] = s
            } catch {}
        }
        if (n[r] == null) {
            let o = new Error(i.message);
            o.stack = "", n[r] = o
        }
    } else n[r] = i;
    return n
}
const pw = k.createContext({
        isTransitioning: !1
    }),
    mw = k.createContext(new Map),
    gw = "startTransition",
    Mf = Oy[gw],
    vw = "flushSync",
    Nf = Xx[vw];

function yw(e) {
    Mf ? Mf(e) : e()
}

function di(e) {
    Nf ? Nf(e) : e()
}
class xw {
    constructor() {
        this.status = "pending", this.promise = new Promise((t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved", t(r))
            }, this.reject = r => {
                this.status === "pending" && (this.status = "rejected", n(r))
            }
        })
    }
}

function ww(e) {
    let {
        fallbackElement: t,
        router: n,
        future: r
    } = e, [i, o] = k.useState(n.state), [s, a] = k.useState(), [l, u] = k.useState({
        isTransitioning: !1
    }), [c, d] = k.useState(), [f, m] = k.useState(), [y, w] = k.useState(), T = k.useRef(new Map), {
        v7_startTransition: p
    } = r || {}, h = k.useCallback(C => {
        p ? yw(C) : C()
    }, [p]), g = k.useCallback((C, V) => {
        let {
            deletedFetchers: L,
            flushSync: G,
            viewTransitionOpts: oe
        } = V;
        L.forEach(he => T.current.delete(he)), C.fetchers.forEach((he, Ot) => {
            he.data !== void 0 && T.current.set(Ot, he.data)
        });
        let ye = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!oe || ye) {
            G ? di(() => o(C)) : h(() => o(C));
            return
        }
        if (G) {
            di(() => {
                f && (c && c.resolve(), f.skipTransition()), u({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: oe.currentLocation,
                    nextLocation: oe.nextLocation
                })
            });
            let he = n.window.document.startViewTransition(() => {
                di(() => o(C))
            });
            he.finished.finally(() => {
                di(() => {
                    d(void 0), m(void 0), a(void 0), u({
                        isTransitioning: !1
                    })
                })
            }), di(() => m(he));
            return
        }
        f ? (c && c.resolve(), f.skipTransition(), w({
            state: C,
            currentLocation: oe.currentLocation,
            nextLocation: oe.nextLocation
        })) : (a(C), u({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: oe.currentLocation,
            nextLocation: oe.nextLocation
        }))
    }, [n.window, f, c, T, h]);
    k.useLayoutEffect(() => n.subscribe(g), [n, g]), k.useEffect(() => {
        l.isTransitioning && !l.flushSync && d(new xw)
    }, [l]), k.useEffect(() => {
        if (c && s && n.window) {
            let C = s,
                V = c.promise,
                L = n.window.document.startViewTransition(async () => {
                    h(() => o(C)), await V
                });
            L.finished.finally(() => {
                d(void 0), m(void 0), a(void 0), u({
                    isTransitioning: !1
                })
            }), m(L)
        }
    }, [h, s, c, n.window]), k.useEffect(() => {
        c && s && i.location.key === s.location.key && c.resolve()
    }, [c, f, i.location, s]), k.useEffect(() => {
        !l.isTransitioning && y && (a(y.state), u({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: y.currentLocation,
            nextLocation: y.nextLocation
        }), w(void 0))
    }, [l.isTransitioning, y]), k.useEffect(() => {}, []);
    let P = k.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: C => n.navigate(C),
            push: (C, V, L) => n.navigate(C, {
                state: V,
                preventScrollReset: L == null ? void 0 : L.preventScrollReset
            }),
            replace: (C, V, L) => n.navigate(C, {
                replace: !0,
                state: V,
                preventScrollReset: L == null ? void 0 : L.preventScrollReset
            })
        }), [n]),
        j = n.basename || "/",
        S = k.useMemo(() => ({
            router: n,
            navigator: P,
            static: !1,
            basename: j
        }), [n, P, j]),
        M = k.useMemo(() => ({
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
        }), [n.future.v7_relativeSplatPath]);
    return k.createElement(k.Fragment, null, k.createElement(wg.Provider, {
        value: S
    }, k.createElement(Sg.Provider, {
        value: i
    }, k.createElement(mw.Provider, {
        value: T.current
    }, k.createElement(pw.Provider, {
        value: l
    }, k.createElement(lw, {
        basename: j,
        location: i.location,
        navigationType: i.historyAction,
        navigator: P,
        future: M
    }, i.initialized || n.future.v7_partialHydration ? k.createElement(Sw, {
        routes: n.routes,
        future: n.future,
        state: i
    }) : t))))), null)
}
const Sw = k.memo(Aw);

function Aw(e) {
    let {
        routes: t,
        future: n,
        state: r
    } = e;
    return Z1(t, void 0, r, n)
}
var Lf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Lf || (Lf = {}));
var Vf;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Vf || (Vf = {}));
const Pw = () => {
        const [e, t] = k.useState(!1);
        k.useEffect(() => {
            const r = () => {
                window.scrollY > 50 ? t(!0) : t(!1)
            };
            return window.addEventListener("scroll", r), () => {
                window.removeEventListener("scroll", r)
            }
        }, []);
        const n = v.jsxs(v.Fragment, {
            children: [v.jsx("li", {
                children: v.jsx("a", {
                    href: "#home",
                    children: "Home"
                })
            }), v.jsx("li", {
                children: v.jsx("a", {
                    href: "#bluey",
                    children: "What is BLUEY"
                })
            }), v.jsx("li", {
                children: v.jsx("a", {
                    href: "#tokenomics",
                    children: "Tokenomics"
                })
            }), v.jsx("li", {
                children: v.jsx("a", {
                    href: "#roadmap",
                    children: "Roadmap"
                })
            }), v.jsx("li", {
                children: v.jsx("a", {
                    href: "#joinUs",
                    children: "Join Us"
                })
            })]
        });
        return v.jsx("div", {
            className: `  text-white fixed w-full  z-20 mx-auto   md:h-[103px] flex items-center   ${e?"bg-[#01296e]  ":"bg-black bg-opacity-25 bg-color"}`,
            children: v.jsx("div", {
                className: "  lg:max-w-[1100px] mx-auto",
                children: v.jsxs("div", {
                    className: "flex  justify-between gap-32 md:gap-[125px] items-center",
                    children: [v.jsxs("div", {
                        className: "flex justify-between items-center ",
                        children: [v.jsxs("div", {
                            className: "dropdown",
                            children: [v.jsx("label", {
                                tabIndex: 0,
                                className: "btn btn-ghost lg:hidden",
                                children: v.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: v.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 6h16M4 12h8m-8 6h16"
                                    })
                                })
                            }), v.jsx("ul", {
                                tabIndex: 0,
                                className: "menu rubik-font font-normal text-base menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-blue-950 rounded-box w-52",
                                children: n
                            })]
                        }), v.jsx("h2", {
                            className: "text-2xl md:text-[34px]  rubik-font font-normal",
                            children: "BLUEY"
                        })]
                    }), v.jsx("div", {
                        className: " hidden lg:flex ",
                        children: v.jsxs("div", {
                            className: "flex justify-between font-normal text-base rubik-font gap-8  ",
                            children: [v.jsx("p", {
                                className: " text-white  hover:text-[#8beef7]",
                                children: v.jsx("a", {
                                    href: "#home",
                                    children: "Home"
                                })
                            }), v.jsx("p", {
                                className: " text-white  hover:text-[#8beef7]",
                                children: v.jsx("a", {
                                    href: "#bluey",
                                    children: "What is BLUEY"
                                })
                            }), v.jsx("p", {
                                className: " text-white  hover:text-[#8beef7]",
                                children: v.jsx("a", {
                                    href: "#tokenomics",
                                    children: "Tokenomics"
                                })
                            }), v.jsx("p", {
                                className: " text-white  hover:text-[#8beef7]",
                                children: v.jsx("a", {
                                    href: "#roadmap",
                                    children: "Roadmap"
                                })
                            }), v.jsx("p", {
                                className: " text-white  hover:text-[#8beef7]",
                                children: v.jsx("a", {
                                    href: "#joinUs",
                                    children: "Join Us"
                                })
                            })]
                        })
                    }), v.jsx("div", {
                        className: "mr-5 md:mr-0",
                        children: v.jsx("a", {
                            href: "https://raydium.io/swap/?inputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&outputMint=BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump",
                            children: v.jsx("button", {
                                className: " h-[26px] md:h-[48px] w-[100px] md:w-[161px] rubik-font rounded-2xl bg-[#003084] text-white text-xs md:text-base font-normal navbar-button",
                                children: "Buy Bluey"
                            })
                        })
                    })]
                })
            })
        })
    },
    Ew = () => v.jsx("div", {
        children: v.jsxs("div", {
            children: [v.jsx("div", {
                className: "",
                children: v.jsx(Pw, {})
            }), v.jsx(aw, {})]
        })
    });
var Eg = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Ff = mn.createContext && mn.createContext(Eg),
    Tw = ["attr", "size", "title"];

function Cw(e, t) {
    if (e == null) return {};
    var n = kw(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function kw(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r]
        }
    return n
}

function js() {
    return js = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, js.apply(this, arguments)
}

function Of(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Rs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Of(Object(n), !0).forEach(function(r) {
            jw(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Of(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function jw(e, t, n) {
    return t = Rw(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Rw(e) {
    var t = Dw(e, "string");
    return typeof t == "symbol" ? t : t + ""
}

function Dw(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Tg(e) {
    return e && e.map((t, n) => mn.createElement(t.tag, Rs({
        key: n
    }, t.attr), Tg(t.child)))
}

function Cg(e) {
    return t => mn.createElement(Mw, js({
        attr: Rs({}, e.attr)
    }, t), Tg(e.child))
}

function Mw(e) {
    var t = n => {
        var {
            attr: r,
            size: i,
            title: o
        } = e, s = Cw(e, Tw), a = i || n.size || "1em", l;
        return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), mn.createElement("svg", js({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: l,
            style: Rs(Rs({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && mn.createElement("title", null, o), e.children)
    };
    return Ff !== void 0 ? mn.createElement(Ff.Consumer, null, n => t(n)) : t(Eg)
}

function dc(e) {
    return Cg({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
            },
            child: []
        }]
    })(e)
}

function fc(e) {
    return Cg({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            },
            child: []
        }]
    })(e)
}
const hc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAACFCAYAAABsfRffAAAMAklEQVR4nO1d63HcNhCGPfkfpgLTFYSuwJcKcq7A5wosV+BTBbIrOLmCkyuQUoHkCu5SwbGDy3C8G8M0iH0AIABK3wxHefBIEB8W2AX28ex8PptK0RpjOrhewL/jRaE3xjzA32/wz8N1rLEraiJxIGdtjHltjFkZY5oE7xhIvTPGfIW/VZBaOolI3FuQuLkxSOcXY8w1EFwkSiVxIO49SFwpGIj8DMQWhdJI3BhjPjLXtVwYptlL+FsESiFxkLhd4eSNMZD4roR183nm9w+k7Y0xt5URaGDgHYwx28hKlvhZGhJR2QjFhTHmPtKzcuIjfEeM9Xun+ZGGxB5ettG8EEbaIH1XicyEHGhhNtkGvHsHGrhcCx7WRMW1O3/HVvjb7nw+H87Lxv35fG6E/YL9udHwoSWxtWjYMRs9NPC0cAIRJxiwVJ80QPoZBreKDy2Jw3VlNXpowIog8LHhREjWejSoVVIYSmLjmBpvHWTuHiGBNi5G/bGCfrJxG8BDsJ24BiVljCPsbHQVmg4pgBvsq4n+eBWyExTD2A/RVJ/wffcnRKuNQmIDdtKTxMnxAFIYhBg7NoNd82bGD18Keti2C0asbbdhRH141JTI8SHWiUjsDfD9ArbR5sB1LCk0CUhsYPspxwFuLYiyDtqIfYqB62Oxp+CZMRD4V+wmpDiKOkJDn4j8GajIRO+XVOeJT4rOz+hhYCdx7Uh5KBx18a4YSQk0kUjceM4FHzuRFIEdHI4HIVQ7bcFF4Y5YsDfaU+uKQRHYWG4pL0PWylBJRGJWcFI/hccmkZwp9AoksQEXDz0CjkBax7ELdSb2GA6G76FvqH4Yg/rN5BUiia7Rc0UY+tcLNz/QDvS5MXYTS4v6JEi7JuJa6ELPmOM7yzFoKeAsGS2c+LgUQU6/OaGVRN+owQXb58mGI7YYL+pAXDIIRC+/qX5p1PvOynmY47HG9frapl2ikuIEvjIcV5Z7RkPu5/Kx6QS9smM+c+w0VAPumR5tw7UXfI9YwdFMp28F926Y694N7OzXMr1eC3dhJNOkeErVkCh5yZ3gQ3Hj/FLRprmAm9jSjWxJ0M3f0m+RksgNp0ZoCNmGen8lwh2061rx+C+Ce8VR0FISJUEjx4DpEQ9OS5DKHk5kKPvPh09CyRUF50hJfC2497Pw2S5swXbKtVai9H0KfE4P6z4XIvtZSqLk4b6ObwW797hWJjlQ9bzzjUD6GkaU11fB+yXCIjYxuDgRz0HX/lthBFHDsCv3sDc5Vv9X4FLvs9dO8HxJmzrrmWOX/XHbY/Wf2k6U2IdUbIG9WcA1mO2rdcR47AQ2liseghvdZV8XAd9NIQmJq4gkurBXdOIwsLZERJbvWgMRUgO7dQyCM0OCXL+ZAvubfhPMvKk3q9eglb0TKAEYqKKFRNlAbCE9i2v9yxL5LFFs5mhgU3AihhWcQHz09AU1oCR9yL43laMUJbWUBKTKTKFBC8dmHKdoyhSSzGbseyUk/im4tyEawTXiPwKZOULnGhhE98z398R3JVuOUk6nvj3WB4HPTQOSICFzA9PyabCi4O9esBNyAe/zTZ02eobHguTgQAaBRibRrM7MRAKaIyifLdYxzu0o21RybITPo46kGsV3sjOTpCTxTHS4/YGUEX5g2IGdoKOo7BYreJ/veXuBGaA5+GaTKPGxuVVkTeph71GycTx+x5Hx+47hEuJqG+dM0HVyI9nL1bTNSMLAJXaiBmgySDzcpJvdrbKTsG2viLZxBpHvHbvUGvYcCfq6xB8S8uw22HF3GrPFas6VZXGtlBYKw9QbmhjvIsHGQjtnsO2cqTI7UNtjhoPHkqKY0ojZI2fzqZ0736m9rRYqQW3E9NK+yC4u1kDe7NkjcyWtXQGRuLWmISN2ggfN8zCQ6ACDM4tHe2rtlAIqFjid9ZbK/4VwSpKdftN4Tbzv1vpnqcNYUkhInCPXdTOSSl+nxs7UT0lRSZUBfoJkOv13hvbY8NluTYJ1J/SEIhtSnWLEwDfPM57y5Fgo7VA4N4qdMn3IXVJBi6eMjhZKJpHyW50b/2R4JwulknhdoCLxqcQ6UaZAEtHzusRMG32pUVulkHgE4l4q3QjnQm/Fh0iDZJIhN4noXCQNGfs9UXu4a+0RIqW0oW4cvODemJPEaxjRW+GI7hJ6v1EpXMbAGSRFlDNbecthJ2K4mDTKCSOPplKIxEBj1XySvAOzgbzJUopP4CgVioMicMZ2NJo7MQNVYcZ3XURoL7vgyRwknhSFwWyvs9wFwu6VATtNYHUeNokSbzdtOkZt0qGp6jc5gGmxNd9xQSQv9OEZ5ybumhiyQ3KrPO2+KSQBw51ScWmtOpFpIZjWQnFiOhO7rqsI79dA094mYntZ8ZpzkojQKjhzptnk1j8ckxdbAWOtxdzpNOYRTat0lporzeaDImf3hhG7mAw5jX3bWYrrpPSQmEhp0nUMPE1VXp41yLkkpjzVl5ZpT1IghBmehsD4iiKq8XBJnGOKWAkCOiXxjVy8YUrgNmJJdgo8j77Ehr4WV8x2xSp1y9mM4OYsjQlWsWiOse9LFZ0SnHTMMQpwUuUgzJzBMQ6QBj9nOs3lz7JhGMoxCklyyiHlXPvIaZtDYk4PsAvGGnkXcJB8yVgHpcdTsUEKEYfEuf1Nx+B0oqa4WM/InriOUQYoEGT/c0jMrUI3jBJFR8UJ+2eGl3kJpZHI/qcUmwbSh5QAKoZdooBxalBcFSCFCK9yQ0liSR7R74n1QSKNlBSuCiLQUDxQJMYOHwsBpzAWN9sxtRamiuPXwjul1iSJBjRVnzRysi5eM6SwtO/2CpOPRCo/Wy6ESiOVGb80KTTUAYGPxFLr5VPSeOORNKpCQIlSiJhsl4/EktbDMXzS4st8X6MUIiaLnvhMjFPBMYmUiTDlZPXS4xfawT5sqThC+3/BlCR2hQeVNsR2nGtKfSAce99HalsqTCZ7mCIxXW7OeKA6fTyl+qZSalCUAqeeMkViqUqNjZZo57iYiG+TvAYCzZRwuUhcVRRO7Zsx7Cm19KmU6zPUubhxkciZStEfJVVYFxeDJPrWbpQ+31Tq7JiZcQnuIRwyfx1wDhcEym/SLjPbFBAr4XPwXcM9vozFsVw8tLBL0HLSX//isuFy0PXBVV52Tfxmzk5wXVRgSu4yuGMn5YaRh3ztI9E3CnxhXtLk57HhkzTf/8s9AH0OYeM6VDb2UyROFfTiuLS3mUc01zuupMF3YMRarDz9+v/gfO5dML9rdS8ZJwPHzFklNCaRvq59HHxgKDJ3nsiwH3xZkjSGZnTP7ZdpQxoAQ63/LsSabfbCtroCVk8oySiJtrGLboAa56MYXtnDqPtDEQ8o3WWSVtGOFdDTK/rWxcmPXaaRWXFQjOjxFRKbZ5sv0nWW5S1tjWwJTla7JEVUXNDGaBrH+w+o2GD1FE0RyqkO0tiOrvI/0sou3AEo1UrH8ZRal37KHJL0Mb5/Y4BVrXYXq5Nc9ideks7ijnKJgT9lZ2qIDJ3lXN9xMAkejBdXffcRaIRRytyRLqkp5bMzJURqM4iQApPioXhx1jTuDCBZZ6n6wJJBwe14SrI5NqH6SkmiIXYdJIl+JKXrqCmVOyCk65ePSG0SJtaVmkQzMd1oMjVx11nKBuMqXZoERC5FTGoTFknieDtPm2rLCGo4Tk1drk0NF0IUPXsTgVpTqyHRWKlBQqcVru049R7f9G53fOj6tQ7MDVckibEHBIUpjZcjyUnXrxSXJLdbSaCqovWwdWeDE+HFCf0uDrWWVKD2Hl0hCNSJRYzQ8SyolcQ7RmTTeEOc8mi/zJJwNgJqnU4NSNsQVDrlKPUAZ3EIn0f7+N6qUKskGsb0Z3uxUR7tVU6jiJpJNOCS6Dt3xHXQd9ZYbNESLmoncYAvITyug1NKTW63kihYAolHT2DpmnAO5vi5FI+aFZsxpmzHh4n/fgNe19VjSSSuRnV/fehBG63SpBhjCdMpgmM7Iqq1CV1YkiQahu1oarcJXViSJBrm1lnVNqELSyPRgMIyFVDKyapYHZY2nSJaR2GwI0yj1ZsUYyxREs2EES+tElcNliqJCLQdF2MTurB0EgfbcchnQ6XFrBfGmP8AhCdWBvi4ENgAAAAASUVORK5CYII=",
    Nw = () => v.jsx("section", {
        id: "home",
        children: v.jsx("div", {
            className: "max-w-[500px] lg:max-w-[1100px] mx-auto flex items-center  min-h-[65vh]  md:min-h-[120vh]",
            children: v.jsx("div", {
                className: "ml-10 md:ml-[70px] mt-10 md:mt-0   ",
                children: v.jsxs("div", {
                    className: "max-w-[250px] md:max-w-[653px]  mx-auto",
                    children: [v.jsxs("h1", {
                        className: "text-[22px] leading-6 md:leading-[66px] rubik-font  text-white md:text-[57px] font-normal",
                        children: ["Welcome to Bluey ", v.jsx("br", {}), "The Future of Meme ", v.jsx("br", {}), " Coins!"]
                    }), v.jsx("div", {
                        className: "max-w-[200px] pl-0 md:pl-1 md:max-w-[520px] mt-1 md:mt-2 mb-2 md:mb-6  ",
                        children: v.jsx("p", {
                            className: "text-base md:text-sm poppins-font font-normal text-[#fff] leading-5 md:leading-5",
                            children: "Just a time traveller finding his true self."
                        })
                    }), v.jsxs("div", {
                        className: "flex  items-center gap-1 md:gap-8",
                        children: [v.jsx("a", {
                            href: "https://raydium.io/swap/?inputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&outputMint=BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump",
                            children: v.jsx("button", {
                                className: "w-[101px] md:w-[161px] h-[32px] md:h-[61px] bg-[#fff] rounded-2xl text-sm md:text-base rubik-font font-semibold text-[#003084] banner-buy-button banner-stroke-button",
                                children: "Buy Turbo"
                            })
                        }), v.jsxs("div", {
                            className: "space-x-1 flex justify-center items-center md:space-x-7",
                            children: [v.jsx("a", {
                                href: "https://t.me/BlueyValley",
                                children: v.jsx("button", {
                                    className: " btn btn-sm md:btn-md  btn-circle  border-[1px] md:border-[2px] border-black",
                                    children: v.jsx(dc, {
                                        className: "text-sm md:text-xl font-bold banner-rounded-button text-[#0f2c69]"
                                    })
                                })
                            }), v.jsx("a", {
                                href: "https://x.com/itsblueyonsol",
                                children: v.jsx("button", {
                                    className: "btn btn-sm md:btn-md  btn-circle border-[1px] md:border-[2px] border-black",
                                    children: v.jsx(fc, {
                                        className: "text-sm md:text-xl font-bold text-[#0f2c69]"
                                    })
                                })
                            }), v.jsx("a", {
                                href: "https://dexscreener.com/solana/BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump?1731933193225",
                                children: v.jsx("button", {
                                    className: "btn btn-sm md:btn-md  btn-circle border-[1px] md:border-[2px] border-black",
                                    children: v.jsx("img", {
                                        className: "h-[15px] md:h-[25px]  w-[15px] md:w-[25px]  bg-[#0f2c69] rounded-full p-0 md:p-1",
                                        src: hc,
                                        alt: ""
                                    })
                                })
                            })]
                        })]
                    })]
                })
            })
        })
    }),
    Lw = "/assets/Vector%201%20for%20foter-CdNG-lwB.png",
    Vw = () => v.jsx("section", {
        id: "roadmap",
        className: "py-10 md:py-[82px]  max-w-[1022px] mx-auto",
        children: v.jsxs("div", {
            className: "roadmap-image ",
            style: {},
            children: [v.jsx("h1", {
                className: "text-center mb-4 md:mb-8  font-normal text-xl md:text-[57px] rubik-font text-white ",
                children: "Roadmap"
            }), v.jsx("img", {
                src: Lw,
                alt: ""
            }), v.jsx("div", {
                className: "max-w-[300px] md:max-w-[680px] mx-auto ",
                children: v.jsxs("div", {
                    className: "text-center text-sm  md:text-base font-normal text-[#fff] poppins-font -mt-10 md:-mt-28",
                    children: [v.jsx("h4", {
                        className: "text-xl font-semibold",
                        children: "  Phase 1: The Awakening "
                    }), v.jsxs("p", {
                        className: "mt-2 md:mt-1",
                        children: ["Deploy $BLUEY on Solana with smart contract audits. ", v.jsx("br", {}), "Launch community channels and build hype for the token presale."]
                    }), v.jsx("h4", {
                        className: "text-xl font-semibold mt-4 md:mt-3",
                        children: "Phase 2: Exploring Timelines"
                    }), v.jsxs("p", {
                        className: "mt-2 md:mt-1",
                        children: ["Introduce staking and basic utility features. ", v.jsx("br", {}), "Launch exclusive BLUEY NFTs representing its time-travel journey. ", v.jsx("br", {}), "Collaborate with Solana-based projects for visibility. "]
                    }), v.jsx("h4", {
                        className: "text-xl font-semibold mt-4 md:mt-3",
                        children: "Phase 3: The Present"
                    }), v.jsxs("p", {
                        className: "mt-2 md:mt-1",
                        children: ["Secure listings on Solana DEXs and CEXs. ", v.jsx("br", {}), "Develop a gamified experience around BLUEY’s adventures. ", v.jsx("br", {}), "Run community-driven events to deepen engagement."]
                    }), v.jsx("h4", {
                        className: "text-xl font-semibold mt-4 md:mt-3",
                        children: "  Phase 4: Finding True Self"
                    }), v.jsxs("p", {
                        className: "mt-2 md:mt-1",
                        children: ["Expand $BLUEY’s reach via cross-chain compatibility. ", v.jsx("br", {}), "Launch BLUEY DAO for community-led initiatives. ", v.jsx("br", {}), "Explore integration into Solana-based metaverse projects."]
                    })]
                })
            })]
        })
    }),
    Fw = "/assets/image%20boder-BapqwMGn.png",
    Ow = "/assets/web%20image%204-BjJyXWkB.png",
    Bw = () => v.jsx("section", {
        id: "tokenomics",
        className: " py-10 md:py-[82px]  ",
        children: v.jsxs("div", {
            className: "max-w-[500px] lg:max-w-[1100px] mx-auto flex flex-col md:flex-col lg:flex-row justify-center items-center gap-6",
            children: [v.jsxs("div", {
                className: "flex flex-col justify-center items-center gap-3 ",
                children: [v.jsx("h3", {
                    className: " text-xl md:text-[57px] text-[#fff] font-normal rubik-font",
                    children: "Tokenomics"
                }), v.jsx("div", {
                    className: " ",
                    children: v.jsx("div", {
                        className: " tokenomics-image flex items-center bg-center  bg-cover",
                        style: {
                            backgroundImage: `url(${Fw})`
                        },
                        children: v.jsx("img", {
                            className: "mx-[43px] w-[250px] md:w-[462px] h-[250px] md:h-[462px] ",
                            src: Ow,
                            alt: ""
                        })
                    })
                }), v.jsx("div", {
                    className: " ",
                    children: v.jsx("a", {
                        href: "https://raydium.io/swap/?inputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&outputMint=BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump",
                        children: v.jsx("button", {
                            className: "w-[101px] md:w-[161px] mt-1 md:mt-1 h-[32px] md:h-[48px] rounded-2xl bg-[#003084] text-white text-base font-semibold rubik-font tokenomics-button ",
                            children: "Buy Bluey"
                        })
                    })
                })]
            }), v.jsx("div", {
                className: "flex flex-col md:flex-row justify-between items-center ",
                children: v.jsx("div", {
                    className: "max-w-[407px] flex justify-start",
                    children: v.jsxs("div", {
                        className: "",
                        children: [v.jsx("h3", {
                            className: "text-xl md:text-[34px] font-bold text-[#fff] pb-4 md:pb-5 poppins-font",
                            children: "Total Supply:"
                        }), v.jsx("h3", {
                            className: "text-xl md:text-[34px] font-bold text-[#fff] pb-4 md:pb-7 leading-none md:leading-10 poppins-font",
                            children: "10 million $BLUEY Token"
                        }), v.jsxs("div", {
                            className: "pb-3 md:pb-5  poppins-font",
                            children: [v.jsx("h4", {
                                className: "text-base md:text-[24px] font-medium text-[#fff] pb-2 md:pb-4 poppins-font",
                                children: "Initial Token Distribution"
                            }), v.jsx("p", {
                                className: "test-sm md:text-base font-normal text-white poppins-font",
                                children: "Tax - 0/0"
                            }), v.jsx("p", {
                                className: "test-sm md:text-base font-normal text-white poppins-font",
                                children: "LP - Burnt"
                            })]
                        }), v.jsxs("div", {
                            className: "pb-3 md:pb-5",
                            children: [v.jsx("h4", {
                                className: "text-[19px] md:text-[24px] font-medium text-[#fff] pb-2 md:pb-4 poppins-font",
                                children: "Key Future"
                            }), v.jsx("p", {
                                className: "text-base font-normal poppins-font text-white",
                                children: "No taxes on transactions"
                            })]
                        })]
                    })
                })
            })]
        })
    }),
    bw = (e, t) => ({
        hidden: {
            y: e === "up" ? 30 : e === "down" ? -30 : 0,
            x: e === "left" ? 40 : e === "right" ? -40 : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            Transition: {
                type: "tween",
                duration: 1.2,
                delay: t,
                ease: [.25, .25, .25, .75]
            }
        }
    });

function Iw(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
    })
}

function ea(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Gl = e => Array.isArray(e);

function kg(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function Zi(e) {
    return typeof e == "string" || Array.isArray(e)
}

function Bf(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function pc(e, t, n, r) {
    if (typeof t == "function") {
        const [i, o] = Bf(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, o] = Bf(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}

function ta(e, t, n) {
    const r = e.getProps();
    return pc(r, t, n !== void 0 ? n : r.custom, e)
}
const mc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    gc = ["initial", ...mc],
    lo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    sr = new Set(lo),
    Qt = e => e * 1e3,
    Xt = e => e / 1e3,
    zw = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Uw = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    _w = {
        type: "keyframes",
        duration: .8
    },
    Hw = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Ww = (e, {
        keyframes: t
    }) => t.length > 2 ? _w : sr.has(e) ? e.startsWith("scale") ? Uw(t[1]) : zw : Hw;

function vc(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const Kw = {
        skipAnimations: !1,
        useManualTiming: !1
    },
    Yw = e => e !== null;

function na(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(Yw),
        o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const _e = e => e;

function Qw(e) {
    let t = new Set,
        n = new Set,
        r = !1,
        i = !1;
    const o = new WeakSet;
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function a(u) {
        o.has(u) && (l.schedule(u), e()), u(s)
    }
    const l = {
        schedule: (u, c = !1, d = !1) => {
            const m = d && r ? t : n;
            return c && o.add(u), m.has(u) || m.add(u), u
        },
        cancel: u => {
            n.delete(u), o.delete(u)
        },
        process: u => {
            if (s = u, r) {
                i = !0;
                return
            }
            r = !0, [t, n] = [n, t], n.clear(), t.forEach(a), r = !1, i && (i = !1, l.process(u))
        }
    };
    return l
}
const Oo = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    Xw = 40;

function jg(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        s = Oo.reduce((p, h) => (p[h] = Qw(o), p), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: d,
            postRender: f
        } = s,
        m = () => {
            const p = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Xw), 1), i.timestamp = p, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), d.process(i), f.process(i), i.isProcessing = !1, n && t && (r = !1, e(m))
        },
        y = () => {
            n = !0, r = !0, i.isProcessing || e(m)
        };
    return {
        schedule: Oo.reduce((p, h) => {
            const g = s[h];
            return p[h] = (P, j = !1, S = !1) => (n || y(), g.schedule(P, j, S)), p
        }, {}),
        cancel: p => {
            for (let h = 0; h < Oo.length; h++) s[Oo[h]].cancel(p)
        },
        state: i,
        steps: s
    }
}
const {
    schedule: ie,
    cancel: Cn,
    state: Ve,
    steps: Ia
} = jg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _e, !0), Rg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Gw = 1e-7, Zw = 12;

function Jw(e, t, n, r, i) {
    let o, s, a = 0;
    do s = t + (n - t) / 2, o = Rg(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > Gw && ++a < Zw);
    return s
}

function uo(e, t, n, r) {
    if (e === t && n === r) return _e;
    const i = o => Jw(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Rg(i(o), t, r)
}
const Dg = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Mg = e => t => 1 - e(1 - t),
    Ng = uo(.33, 1.53, .69, .99),
    yc = Mg(Ng),
    Lg = Dg(yc),
    Vg = e => (e *= 2) < 1 ? .5 * yc(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    xc = e => 1 - Math.sin(Math.acos(e)),
    Fg = Mg(xc),
    Og = Dg(xc),
    Bg = e => /^0[^.\s]+$/u.test(e);

function qw(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Bg(e) : !0
}
let Zl = _e;
const bg = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Ig = e => t => typeof t == "string" && t.startsWith(e),
    zg = Ig("--"),
    $w = Ig("var(--"),
    wc = e => $w(e) ? eS.test(e.split("/*")[0].trim()) : !1,
    eS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    tS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function nS(e) {
    const t = tS.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function Ug(e, t, n = 1) {
    const [r, i] = nS(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return bg(s) ? parseFloat(s) : s
    }
    return wc(i) ? Ug(i, t, n + 1) : i
}
const kn = (e, t, n) => n > t ? t : n < e ? e : n,
    Zr = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Ji = { ...Zr,
        transform: e => kn(0, 1, e)
    },
    Bo = { ...Zr,
        default: 1
    },
    co = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    an = co("deg"),
    Vt = co("%"),
    H = co("px"),
    rS = co("vh"),
    iS = co("vw"),
    bf = { ...Vt,
        parse: e => Vt.parse(e) / 100,
        transform: e => Vt.transform(e * 100)
    },
    oS = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    If = e => e === Zr || e === H,
    zf = (e, t) => parseFloat(e.split(", ")[t]),
    Uf = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return zf(i[1], t); {
            const o = r.match(/^matrix\((.+)\)$/u);
            return o ? zf(o[1], e) : 0
        }
    },
    sS = new Set(["x", "y", "z"]),
    aS = lo.filter(e => !sS.has(e));

function lS(e) {
    const t = [];
    return aS.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const Wr = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: Uf(4, 13),
    y: Uf(5, 14)
};
Wr.translateX = Wr.x;
Wr.translateY = Wr.y;
const _g = e => t => t.test(e),
    uS = {
        test: e => e === "auto",
        parse: e => e
    },
    Hg = [Zr, H, Vt, an, iS, rS, uS],
    _f = e => Hg.find(_g(e)),
    qn = new Set;
let Jl = !1,
    ql = !1;

function Wg() {
    if (ql) {
        const e = Array.from(qn).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = lS(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([o, s]) => {
                var a;
                (a = r.getValue(o)) === null || a === void 0 || a.set(s)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    ql = !1, Jl = !1, qn.forEach(e => e.complete()), qn.clear()
}

function Kg() {
    qn.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (ql = !0)
    })
}

function cS() {
    Kg(), Wg()
}
class Sc {
    constructor(t, n, r, i, o, s = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (qn.add(this), Jl || (Jl = !0, ie.read(Kg), ie.resolveKeyframes(Wg))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get(),
                        a = t[t.length - 1];
                    if (s !== void 0) t[0] = s;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0])
                } else t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), qn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, qn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Ri = e => Math.round(e * 1e5) / 1e5,
    Ac = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function dS(e) {
    return e == null
}
const fS = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Pc = (e, t) => n => !!(typeof n == "string" && fS.test(n) && n.startsWith(e) || t && !dS(n) && Object.prototype.hasOwnProperty.call(n, t)),
    Yg = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [i, o, s, a] = r.match(Ac);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    hS = e => kn(0, 255, e),
    za = { ...Zr,
        transform: e => Math.round(hS(e))
    },
    Xn = {
        test: Pc("rgb", "red"),
        parse: Yg("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + za.transform(e) + ", " + za.transform(t) + ", " + za.transform(n) + ", " + Ri(Ji.transform(r)) + ")"
    };

function pS(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const $l = {
        test: Pc("#"),
        parse: pS,
        transform: Xn.transform
    },
    Tr = {
        test: Pc("hsl", "hue"),
        parse: Yg("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + Vt.transform(Ri(t)) + ", " + Vt.transform(Ri(n)) + ", " + Ri(Ji.transform(r)) + ")"
    },
    Ie = {
        test: e => Xn.test(e) || $l.test(e) || Tr.test(e),
        parse: e => Xn.test(e) ? Xn.parse(e) : Tr.test(e) ? Tr.parse(e) : $l.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Xn.transform(e) : Tr.transform(e)
    },
    mS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function gS(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Ac)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(mS)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Qg = "number",
    Xg = "color",
    vS = "var",
    yS = "var(",
    Hf = "${}",
    xS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function qi(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let o = 0;
    const a = t.replace(xS, l => (Ie.test(l) ? (r.color.push(o), i.push(Xg), n.push(Ie.parse(l))) : l.startsWith(yS) ? (r.var.push(o), i.push(vS), n.push(l)) : (r.number.push(o), i.push(Qg), n.push(parseFloat(l))), ++o, Hf)).split(Hf);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}

function Gg(e) {
    return qi(e).values
}

function Zg(e) {
    const {
        split: t,
        types: n
    } = qi(e), r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s], i[s] !== void 0) {
                const a = n[s];
                a === Qg ? o += Ri(i[s]) : a === Xg ? o += Ie.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const wS = e => typeof e == "number" ? 0 : e;

function SS(e) {
    const t = Gg(e);
    return Zg(e)(t.map(wS))
}
const jn = {
        test: gS,
        parse: Gg,
        createTransformer: Zg,
        getAnimatableNone: SS
    },
    AS = new Set(["brightness", "contrast", "saturate", "opacity"]);

function PS(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Ac) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = AS.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const ES = /\b([a-z-]*)\(.*?\)/gu,
    eu = { ...jn,
        getAnimatableNone: e => {
            const t = e.match(ES);
            return t ? t.map(PS).join(" ") : e
        }
    },
    TS = {
        borderWidth: H,
        borderTopWidth: H,
        borderRightWidth: H,
        borderBottomWidth: H,
        borderLeftWidth: H,
        borderRadius: H,
        radius: H,
        borderTopLeftRadius: H,
        borderTopRightRadius: H,
        borderBottomRightRadius: H,
        borderBottomLeftRadius: H,
        width: H,
        maxWidth: H,
        height: H,
        maxHeight: H,
        top: H,
        right: H,
        bottom: H,
        left: H,
        padding: H,
        paddingTop: H,
        paddingRight: H,
        paddingBottom: H,
        paddingLeft: H,
        margin: H,
        marginTop: H,
        marginRight: H,
        marginBottom: H,
        marginLeft: H,
        backgroundPositionX: H,
        backgroundPositionY: H
    },
    CS = {
        rotate: an,
        rotateX: an,
        rotateY: an,
        rotateZ: an,
        scale: Bo,
        scaleX: Bo,
        scaleY: Bo,
        scaleZ: Bo,
        skew: an,
        skewX: an,
        skewY: an,
        distance: H,
        translateX: H,
        translateY: H,
        translateZ: H,
        x: H,
        y: H,
        z: H,
        perspective: H,
        transformPerspective: H,
        opacity: Ji,
        originX: bf,
        originY: bf,
        originZ: H
    },
    Wf = { ...Zr,
        transform: Math.round
    },
    Ec = { ...TS,
        ...CS,
        zIndex: Wf,
        size: H,
        fillOpacity: Ji,
        strokeOpacity: Ji,
        numOctaves: Wf
    },
    kS = { ...Ec,
        color: Ie,
        backgroundColor: Ie,
        outlineColor: Ie,
        fill: Ie,
        stroke: Ie,
        borderColor: Ie,
        borderTopColor: Ie,
        borderRightColor: Ie,
        borderBottomColor: Ie,
        borderLeftColor: Ie,
        filter: eu,
        WebkitFilter: eu
    },
    Tc = e => kS[e];

function Jg(e, t) {
    let n = Tc(e);
    return n !== eu && (n = jn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const jS = new Set(["auto", "none", "0"]);

function RS(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const o = e[r];
        typeof o == "string" && !jS.has(o) && qi(o).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const o of t) e[o] = Jg(n, i)
}
class qg extends Sc {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(), wc(u))) {
                const c = Ug(u, n.current);
                c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !oS.has(r) || t.length !== 2) return;
        const [i, o] = t, s = _f(i), a = _f(o);
        if (s !== a)
            if (If(s) && If(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++) qw(t[i]) && r.push(i);
        r.length && RS(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Wr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: r,
            unresolvedKeyframes: i
        } = this;
        if (!n || !n.current) return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1,
            a = i[s];
        i[s] = Wr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function Cc(e) {
    return typeof e == "function"
}
let qo;

function DS() {
    qo = void 0
}
const Ft = {
        now: () => (qo === void 0 && Ft.set(Ve.isProcessing || Kw.useManualTiming ? Ve.timestamp : performance.now()), qo),
        set: e => {
            qo = e, queueMicrotask(DS)
        }
    },
    Kf = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (jn.test(e) || e === "0") && !e.startsWith("url("));

function MS(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function NS(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const o = e[e.length - 1],
        s = Kf(i, t),
        a = Kf(o, t);
    return !s || !a ? !1 : MS(e) || (n === "spring" || Cc(n)) && r
}
const LS = 40;
class $g {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: s = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ft.now(), this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...a
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > LS ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && cS(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = Ft.now(), this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: i,
            velocity: o,
            delay: s,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !NS(t, r, i, o))
            if (s) this.options.duration = 0;
            else {
                l == null || l(na(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}

function ev(e, t) {
    return t ? e * (1e3 / t) : 0
}
const VS = 5;

function tv(e, t, n) {
    const r = Math.max(t - VS, 0);
    return ev(n - e(r), t - r)
}
const Ua = .001,
    FS = .01,
    OS = 10,
    BS = .05,
    bS = 1;

function IS({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, o, s = 1 - t;
    s = kn(BS, bS, s), e = kn(FS, OS, Xt(e)), s < 1 ? (i = u => {
        const c = u * s,
            d = c * e,
            f = c - n,
            m = tu(u, s),
            y = Math.exp(-d);
        return Ua - f / m * y
    }, o = u => {
        const d = u * s * e,
            f = d * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            w = tu(Math.pow(u, 2), s);
        return (-i(u) + Ua > 0 ? -1 : 1) * ((f - m) * y) / w
    }) : (i = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -Ua + c * d
    }, o = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const a = 5 / e,
        l = US(i, o, a);
    if (e = Qt(e), isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const zS = 12;

function US(e, t, n) {
    let r = n;
    for (let i = 1; i < zS; i++) r = r - e(r) / t(r);
    return r
}

function tu(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const _S = ["duration", "bounce"],
    HS = ["stiffness", "damping", "mass"];

function Yf(e, t) {
    return t.some(n => e[n] !== void 0)
}

function WS(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Yf(e, HS) && Yf(e, _S)) {
        const n = IS(e);
        t = { ...t,
            ...n,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function nv({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const i = e[0],
        o = e[e.length - 1],
        s = {
            done: !1,
            value: i
        },
        {
            stiffness: a,
            damping: l,
            mass: u,
            duration: c,
            velocity: d,
            isResolvedFromDuration: f
        } = WS({ ...r,
            velocity: -Xt(r.velocity || 0)
        }),
        m = d || 0,
        y = l / (2 * Math.sqrt(a * u)),
        w = o - i,
        T = Xt(Math.sqrt(a / u)),
        p = Math.abs(w) < 5;
    n || (n = p ? .01 : 2), t || (t = p ? .005 : .5);
    let h;
    if (y < 1) {
        const g = tu(T, y);
        h = P => {
            const j = Math.exp(-y * T * P);
            return o - j * ((m + y * T * w) / g * Math.sin(g * P) + w * Math.cos(g * P))
        }
    } else if (y === 1) h = g => o - Math.exp(-T * g) * (w + (m + T * w) * g);
    else {
        const g = T * Math.sqrt(y * y - 1);
        h = P => {
            const j = Math.exp(-y * T * P),
                S = Math.min(g * P, 300);
            return o - j * ((m + y * T * w) * Math.sinh(S) + g * w * Math.cosh(S)) / g
        }
    }
    return {
        calculatedDuration: f && c || null,
        next: g => {
            const P = h(g);
            if (f) s.done = g >= c;
            else {
                let j = 0;
                y < 1 && (j = g === 0 ? Qt(m) : tv(h, g, P));
                const S = Math.abs(j) <= n,
                    M = Math.abs(o - P) <= t;
                s.done = S && M
            }
            return s.value = s.done ? o : P, s
        }
    }
}

function Qf({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: s,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const d = e[0],
        f = {
            done: !1,
            value: d
        },
        m = C => a !== void 0 && C < a || l !== void 0 && C > l,
        y = C => a === void 0 ? l : l === void 0 || Math.abs(a - C) < Math.abs(l - C) ? a : l;
    let w = n * t;
    const T = d + w,
        p = s === void 0 ? T : s(T);
    p !== T && (w = p - d);
    const h = C => -w * Math.exp(-C / r),
        g = C => p + h(C),
        P = C => {
            const V = h(C),
                L = g(C);
            f.done = Math.abs(V) <= u, f.value = f.done ? p : L
        };
    let j, S;
    const M = C => {
        m(f.value) && (j = C, S = nv({
            keyframes: [f.value, y(f.value)],
            velocity: tv(g, C, f.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    };
    return M(0), {
        calculatedDuration: null,
        next: C => {
            let V = !1;
            return !S && j === void 0 && (V = !0, P(C), M(C)), j !== void 0 && C >= j ? S.next(C - j) : (!V && P(C), f)
        }
    }
}
const KS = uo(.42, 0, 1, 1),
    YS = uo(0, 0, .58, 1),
    rv = uo(.42, 0, .58, 1),
    QS = e => Array.isArray(e) && typeof e[0] != "number",
    kc = e => Array.isArray(e) && typeof e[0] == "number",
    Xf = {
        linear: _e,
        easeIn: KS,
        easeInOut: rv,
        easeOut: YS,
        circIn: xc,
        circInOut: Og,
        circOut: Fg,
        backIn: yc,
        backInOut: Lg,
        backOut: Ng,
        anticipate: Vg
    },
    Gf = e => {
        if (kc(e)) {
            Zl(e.length === 4);
            const [t, n, r, i] = e;
            return uo(t, n, r, i)
        } else if (typeof e == "string") return Zl(Xf[e] !== void 0), Xf[e];
        return e
    },
    XS = (e, t) => n => t(e(n)),
    Gt = (...e) => e.reduce(XS),
    Kr = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    me = (e, t, n) => e + (t - e) * n;

function _a(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function GS({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        o = 0,
        s = 0;
    if (!t) i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        i = _a(l, a, e + 1 / 3), o = _a(l, a, e), s = _a(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}

function Ds(e, t) {
    return n => n > 0 ? t : e
}
const Ha = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    ZS = [$l, Xn, Tr],
    JS = e => ZS.find(t => t.test(e));

function Zf(e) {
    const t = JS(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Tr && (n = GS(n)), n
}
const Jf = (e, t) => {
        const n = Zf(e),
            r = Zf(t);
        if (!n || !r) return Ds(e, t);
        const i = { ...n
        };
        return o => (i.red = Ha(n.red, r.red, o), i.green = Ha(n.green, r.green, o), i.blue = Ha(n.blue, r.blue, o), i.alpha = me(n.alpha, r.alpha, o), Xn.transform(i))
    },
    nu = new Set(["none", "hidden"]);

function qS(e, t) {
    return nu.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function $S(e, t) {
    return n => me(e, t, n)
}

function jc(e) {
    return typeof e == "number" ? $S : typeof e == "string" ? wc(e) ? Ds : Ie.test(e) ? Jf : nA : Array.isArray(e) ? iv : typeof e == "object" ? Ie.test(e) ? Jf : eA : Ds
}

function iv(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((o, s) => jc(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++) n[s] = i[s](o);
        return n
    }
}

function eA(e, t) {
    const n = { ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = jc(e[i])(e[i], t[i]));
    return i => {
        for (const o in r) n[o] = r[o](i);
        return n
    }
}

function tA(e, t) {
    var n;
    const r = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o],
            a = e.indexes[s][i[s]],
            l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[o] = l, i[s]++
    }
    return r
}
const nA = (e, t) => {
    const n = jn.createTransformer(t),
        r = qi(e),
        i = qi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? nu.has(e) && !i.values.length || nu.has(t) && !r.values.length ? qS(e, t) : Gt(iv(tA(r, i), i.values), n) : Ds(e, t)
};

function ov(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? me(e, t, n) : jc(e)(e, t)
}

function rA(e, t, n) {
    const r = [],
        i = n || ov,
        o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || _e : t;
            a = Gt(l, a)
        }
        r.push(a)
    }
    return r
}

function iA(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const o = e.length;
    if (Zl(o === t.length), o === 1) return () => t[0];
    if (o === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = rA(t, r, i),
        a = s.length,
        l = u => {
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const d = Kr(e[c], e[c + 1], u);
            return s[c](d)
        };
    return n ? u => l(kn(e[0], e[o - 1], u)) : l
}

function oA(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Kr(0, t, r);
        e.push(me(n, 1, i))
    }
}

function sA(e) {
    const t = [0];
    return oA(t, e.length - 1), t
}

function aA(e, t) {
    return e.map(n => n * t)
}

function lA(e, t) {
    return e.map(() => t || rv).splice(0, e.length - 1)
}

function Ms({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = QS(r) ? r.map(Gf) : Gf(r),
        o = {
            done: !1,
            value: t[0]
        },
        s = aA(n && n.length === t.length ? n : sA(t), e),
        a = iA(s, t, {
            ease: Array.isArray(i) ? i : lA(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l), o.done = l >= e, o)
    }
}
const qf = 2e4;

function uA(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < qf;) t += n, r = e.next(t);
    return t >= qf ? 1 / 0 : t
}
const cA = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => ie.update(t, !0),
            stop: () => Cn(t),
            now: () => Ve.isProcessing ? Ve.timestamp : Ft.now()
        }
    },
    dA = {
        decay: Qf,
        inertia: Qf,
        tween: Ms,
        keyframes: Ms,
        spring: nv
    },
    fA = e => e / 100;
class Rc extends $g {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: l
            } = this.options;
            l && l()
        };
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || Sc, a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new s(o, a, n, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: s = 0
        } = this.options, a = Cc(n) ? n : dA[n] || Ms;
        let l, u;
        a !== Ms && typeof t[0] != "number" && (l = Gt(fA, ov(t[0], t[1])), t = [0, 100]);
        const c = a({ ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = a({ ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })), c.calculatedDuration === null && (c.calculatedDuration = uA(c));
        const {
            calculatedDuration: d
        } = c, f = d + i, m = f * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: d,
            resolvedDuration: f,
            totalDuration: m
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: C
            } = this.options;
            return {
                done: !0,
                value: C[C.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: o,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: d
        } = r;
        if (this.startTime === null) return o.next(0);
        const {
            delay: f,
            repeat: m,
            repeatType: y,
            repeatDelay: w,
            onUpdate: T
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
            h = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let g = this.currentTime,
            P = o;
        if (m) {
            const C = Math.min(this.currentTime, c) / d;
            let V = Math.floor(C),
                L = C % 1;
            !L && C >= 1 && (L = 1), L === 1 && V--, V = Math.min(V, m + 1), !!(V % 2) && (y === "reverse" ? (L = 1 - L, w && (L -= w / d)) : y === "mirror" && (P = s)), g = kn(0, 1, L) * d
        }
        const j = h ? {
            done: !1,
            value: l[0]
        } : P.next(g);
        a && (j.value = a(j.value));
        let {
            done: S
        } = j;
        !h && u !== null && (S = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
        return M && i !== void 0 && (j.value = na(l, this.options, i)), T && T(j.value), M && this.finish(), j
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? Xt(t.calculatedDuration) : 0
    }
    get time() {
        return Xt(this.currentTime)
    }
    set time(t) {
        t = Qt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = Xt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = cA,
            onPlay: n,
            startTime: r
        } = this.options;
        this.driver || (this.driver = t(o => this.tick(o))), n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const hA = new Set(["opacity", "clipPath", "filter", "transform"]),
    pA = 10,
    mA = (e, t) => {
        let n = "";
        const r = Math.max(Math.round(t / pA), 2);
        for (let i = 0; i < r; i++) n += e(Kr(0, r - 1, i)) + ", ";
        return `linear(${n.substring(0,n.length-2)})`
    };

function Dc(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const gA = {
    linearEasing: void 0
};

function vA(e, t) {
    const n = Dc(e);
    return () => {
        var r;
        return (r = gA[t]) !== null && r !== void 0 ? r : n()
    }
}
const Ns = vA(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function sv(e) {
    return !!(typeof e == "function" && Ns() || !e || typeof e == "string" && (e in ru || Ns()) || kc(e) || Array.isArray(e) && e.every(sv))
}
const yi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    ru = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: yi([0, .65, .55, 1]),
        circOut: yi([.55, 0, 1, .45]),
        backIn: yi([.31, .01, .66, -.59]),
        backOut: yi([.33, 1.53, .69, .99])
    };

function av(e, t) {
    if (e) return typeof e == "function" && Ns() ? mA(e, t) : kc(e) ? yi(e) : Array.isArray(e) ? e.map(n => av(n, t) || ru.easeOut) : ru[e]
}

function yA(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l
} = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = av(a, i);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

function $f(e, t) {
    e.timeline = t, e.onfinish = null
}
const xA = Dc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Ls = 10,
    wA = 2e4;

function SA(e) {
    return Cc(e.type) || e.type === "spring" || !sv(e.ease)
}

function AA(e, t) {
    const n = new Rc({ ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < wA;) r = n.sample(o), i.push(r.value), o += Ls;
    return {
        times: void 0,
        keyframes: i,
        duration: o - Ls,
        ease: "linear"
    }
}
const lv = {
    anticipate: Vg,
    backInOut: Lg,
    circInOut: Og
};

function PA(e) {
    return e in lv
}
class eh extends $g {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options;
        this.resolver = new qg(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: i = 300,
            times: o,
            ease: s,
            type: a,
            motionValue: l,
            name: u,
            startTime: c
        } = this.options;
        if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
        if (typeof s == "string" && Ns() && PA(s) && (s = lv[s]), SA(this.options)) {
            const {
                onComplete: f,
                onUpdate: m,
                motionValue: y,
                element: w,
                ...T
            } = this.options, p = AA(t, T);
            t = p.keyframes, t.length === 1 && (t[1] = t[0]), i = p.duration, o = p.times, s = p.ease, a = "keyframes"
        }
        const d = yA(l.owner.current, u, t, { ...this.options,
            duration: i,
            times: o,
            ease: s
        });
        return d.startTime = c ? ? this.calcStartTime(), this.pendingTimeline ? ($f(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
            const {
                onComplete: f
            } = this.options;
            l.set(na(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: d,
            duration: i,
            times: o,
            type: a,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return Xt(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return Xt(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = Qt(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: n
        } = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return _e;
            const {
                animation: r
            } = n;
            $f(r, t)
        }
        return _e
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: c,
                onComplete: d,
                element: f,
                ...m
            } = this.options, y = new Rc({ ...m,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: a,
                isGenerator: !0
            }), w = Qt(this.time);
            u.setWithVelocity(y.sample(w - Ls).value, y.sample(w).value, Ls)
        }
        const {
            onStop: l
        } = this.options;
        l && l(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: i,
            repeatType: o,
            damping: s,
            type: a
        } = t;
        return xA() && r && hA.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && a !== "inertia"
    }
}
const EA = Dc(() => window.ScrollTimeline !== void 0);
class TA {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => EA() && i.attachTimeline ? i.attachTimeline(t) : n(i));
        return () => {
            r.forEach((i, o) => {
                i && i(), this.animations[o].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function CA({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: o,
    repeatType: s,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}
const Mc = (e, t, n, r = {}, i, o) => s => {
        const a = vc(r, e) || {},
            l = a.delay || r.delay || 0;
        let {
            elapsed: u = 0
        } = r;
        u = u - Qt(l);
        let c = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: f => {
                t.set(f), a.onUpdate && a.onUpdate(f)
            },
            onComplete: () => {
                s(), a.onComplete && a.onComplete()
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : i
        };
        CA(a) || (c = { ...c,
            ...Ww(e, c)
        }), c.duration && (c.duration = Qt(c.duration)), c.repeatDelay && (c.repeatDelay = Qt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
        let d = !1;
        if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !o && t.get() !== void 0) {
            const f = na(c.keyframes, a);
            if (f !== void 0) return ie.update(() => {
                c.onUpdate(f), c.onComplete()
            }), new TA([])
        }
        return !o && eh.supports(c) ? new eh(c) : new Rc(c)
    },
    kA = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    jA = e => Gl(e) ? e[e.length - 1] || 0 : e;

function Nc(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Lc(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Vc {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Nc(this.subscriptions, t), () => Lc(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const th = 30,
    RA = e => !isNaN(parseFloat(e));
class DA {
    constructor(t, n = {}) {
        this.version = "11.11.10", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            const o = Ft.now();
            this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Ft.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = RA(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Vc);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), ie.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Ft.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > th) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, th);
        return ev(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function $i(e, t) {
    return new DA(e, t)
}

function MA(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, $i(n))
}

function NA(e, t) {
    const n = ta(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...o
    } = n || {};
    o = { ...o,
        ...r
    };
    for (const s in o) {
        const a = jA(o[s]);
        MA(e, s, a)
    }
}
const Fc = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    LA = "framerAppearId",
    uv = "data-" + Fc(LA);

function cv(e) {
    return e.props[uv]
}
const Ue = e => !!(e && e.getVelocity);

function VA(e) {
    return !!(Ue(e) && e.add)
}

function iu(e, t) {
    const n = e.getValue("willChange");
    if (VA(n)) return n.add(t)
}

function FA({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function dv(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    var o;
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = t;
    r && (s = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
        const f = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null),
            m = l[d];
        if (m === void 0 || c && FA(c, d)) continue;
        const y = {
            delay: n,
            ...vc(s || {}, d)
        };
        let w = !1;
        if (window.MotionHandoffAnimation) {
            const p = cv(e);
            if (p) {
                const h = window.MotionHandoffAnimation(p, d, ie);
                h !== null && (y.startTime = h, w = !0)
            }
        }
        iu(e, d), f.start(Mc(d, f, m, e.shouldReduceMotion && sr.has(d) ? {
            type: !1
        } : y, e, w));
        const T = f.animation;
        T && u.push(T)
    }
    return a && Promise.all(u).then(() => {
        ie.update(() => {
            a && NA(e, a)
        })
    }), u
}

function ou(e, t, n = {}) {
    var r;
    const i = ta(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(dv(e, i, n)) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: f
            } = o;
            return OA(e, t, c + u, d, f, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = o;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
        return u().then(() => c())
    } else return Promise.all([s(), a(n.delay)])
}

function OA(e, t, n = 0, r = 0, i = 1, o) {
    const s = [],
        a = (e.variantChildren.size - 1) * r,
        l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(BA).forEach((u, c) => {
        u.notify("AnimationStart", t), s.push(ou(u, t, { ...o,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function BA(e, t) {
    return e.sortNodePosition(t)
}

function bA(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => ou(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = ou(e, t, n);
    else {
        const i = typeof t == "function" ? ta(e, t, n.custom) : t;
        r = Promise.all(dv(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}
const IA = gc.length;

function fv(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? fv(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < IA; n++) {
        const r = gc[n],
            i = e.props[r];
        (Zi(i) || i === !1) && (t[r] = i)
    }
    return t
}
const zA = [...mc].reverse(),
    UA = mc.length;

function _A(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => bA(e, n, r)))
}

function HA(e) {
    let t = _A(e),
        n = nh(),
        r = !0;
    const i = l => (u, c) => {
        var d;
        const f = ta(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (f) {
            const {
                transition: m,
                transitionEnd: y,
                ...w
            } = f;
            u = { ...u,
                ...w,
                ...y
            }
        }
        return u
    };

    function o(l) {
        t = l(e)
    }

    function s(l) {
        const {
            props: u
        } = e, c = fv(e.parent) || {}, d = [], f = new Set;
        let m = {},
            y = 1 / 0;
        for (let T = 0; T < UA; T++) {
            const p = zA[T],
                h = n[p],
                g = u[p] !== void 0 ? u[p] : c[p],
                P = Zi(g),
                j = p === l ? h.isActive : null;
            j === !1 && (y = T);
            let S = g === c[p] && g !== u[p] && P;
            if (S && r && e.manuallyAnimateOnMount && (S = !1), h.protectedKeys = { ...m
                }, !h.isActive && j === null || !g && !h.prevProp || ea(g) || typeof g == "boolean") continue;
            const M = WA(h.prevProp, g);
            let C = M || p === l && h.isActive && !S && P || T > y && P,
                V = !1;
            const L = Array.isArray(g) ? g : [g];
            let G = L.reduce(i(p), {});
            j === !1 && (G = {});
            const {
                prevResolvedValues: oe = {}
            } = h, ye = { ...oe,
                ...G
            }, he = Y => {
                C = !0, f.has(Y) && (V = !0, f.delete(Y)), h.needsAnimating[Y] = !0;
                const N = e.getValue(Y);
                N && (N.liveStyle = !1)
            };
            for (const Y in ye) {
                const N = G[Y],
                    _ = oe[Y];
                if (m.hasOwnProperty(Y)) continue;
                let W = !1;
                Gl(N) && Gl(_) ? W = !kg(N, _) : W = N !== _, W ? N != null ? he(Y) : f.add(Y) : N !== void 0 && f.has(Y) ? he(Y) : h.protectedKeys[Y] = !0
            }
            h.prevProp = g, h.prevResolvedValues = G, h.isActive && (m = { ...m,
                ...G
            }), r && e.blockInitialAnimation && (C = !1), C && (!(S && M) || V) && d.push(...L.map(Y => ({
                animation: Y,
                options: {
                    type: p
                }
            })))
        }
        if (f.size) {
            const T = {};
            f.forEach(p => {
                const h = e.getBaseTarget(p),
                    g = e.getValue(p);
                g && (g.liveStyle = !0), T[p] = h ? ? null
            }), d.push({
                animation: T
            })
        }
        let w = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (w = !1), r = !1, w ? t(d) : Promise.resolve()
    }

    function a(l, u) {
        var c;
        if (n[l].isActive === u) return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(f => {
            var m;
            return (m = f.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u)
        }), n[l].isActive = u;
        const d = s(l);
        for (const f in n) n[f].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = nh(), r = !0
        }
    }
}

function WA(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !kg(t, e) : !1
}

function Bn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function nh() {
    return {
        animate: Bn(!0),
        whileInView: Bn(),
        whileHover: Bn(),
        whileTap: Bn(),
        whileDrag: Bn(),
        whileFocus: Bn(),
        exit: Bn()
    }
}
class Ln {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class KA extends Ln {
    constructor(t) {
        super(t), t.animationState || (t.animationState = HA(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        ea(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let YA = 0;
class QA extends Ln {
    constructor() {
        super(...arguments), this.id = YA++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const XA = {
        animation: {
            Feature: KA
        },
        exit: {
            Feature: QA
        }
    },
    hv = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function ra(e, t = "page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const GA = e => t => hv(t) && e(t, ra(t));

function Kt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function Zt(e, t, n, r) {
    return Kt(e, t, GA(n), r)
}
const rh = (e, t) => Math.abs(e - t);

function ZA(e, t) {
    const n = rh(e.x, t.x),
        r = rh(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class pv {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = Ka(this.lastMoveEventInfo, this.history),
                    f = this.startEvent !== null,
                    m = ZA(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!f && !m) return;
                const {
                    point: y
                } = d, {
                    timestamp: w
                } = Ve;
                this.history.push({ ...y,
                    timestamp: w
                });
                const {
                    onStart: T,
                    onMove: p
                } = this.handlers;
                f || (T && T(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, d)
            }, this.handlePointerMove = (d, f) => {
                this.lastMoveEvent = d, this.lastMoveEventInfo = Wa(f, this.transformPagePoint), ie.update(this.updatePoint, !0)
            }, this.handlePointerUp = (d, f) => {
                this.end();
                const {
                    onEnd: m,
                    onSessionEnd: y,
                    resumeAnimation: w
                } = this.handlers;
                if (this.dragSnapToOrigin && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const T = Ka(d.type === "pointercancel" ? this.lastMoveEventInfo : Wa(f, this.transformPagePoint), this.history);
                this.startEvent && m && m(d, T), y && y(d, T)
            }, !hv(t)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
        const s = ra(t),
            a = Wa(s, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = Ve;
        this.history = [{ ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(t, Ka(a, this.history)), this.removeListeners = Gt(Zt(this.contextWindow, "pointermove", this.handlePointerMove), Zt(this.contextWindow, "pointerup", this.handlePointerUp), Zt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Cn(this.updatePoint)
    }
}

function Wa(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function ih(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Ka({
    point: e
}, t) {
    return {
        point: e,
        delta: ih(e, mv(t)),
        offset: ih(e, JA(t)),
        velocity: qA(t, .1)
    }
}

function JA(e) {
    return e[0]
}

function mv(e) {
    return e[e.length - 1]
}

function qA(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = mv(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Qt(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const o = Xt(i.timestamp - r.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function gv(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const oh = gv("dragHorizontal"),
    sh = gv("dragVertical");

function vv(e) {
    let t = !1;
    if (e === "y") t = sh();
    else if (e === "x") t = oh();
    else {
        const n = oh(),
            r = sh();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function yv() {
    const e = vv(!0);
    return e ? (e(), !1) : !0
}

function Cr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const xv = 1e-4,
    $A = 1 - xv,
    eP = 1 + xv,
    wv = .01,
    tP = 0 - wv,
    nP = 0 + wv;

function at(e) {
    return e.max - e.min
}

function rP(e, t, n) {
    return Math.abs(e - t) <= n
}

function ah(e, t, n, r = .5) {
    e.origin = r, e.originPoint = me(t.min, t.max, e.origin), e.scale = at(n) / at(t), e.translate = me(n.min, n.max, e.origin) - e.originPoint, (e.scale >= $A && e.scale <= eP || isNaN(e.scale)) && (e.scale = 1), (e.translate >= tP && e.translate <= nP || isNaN(e.translate)) && (e.translate = 0)
}

function Di(e, t, n, r) {
    ah(e.x, t.x, n.x, r ? r.originX : void 0), ah(e.y, t.y, n.y, r ? r.originY : void 0)
}

function lh(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + at(t)
}

function iP(e, t, n) {
    lh(e.x, t.x, n.x), lh(e.y, t.y, n.y)
}

function uh(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + at(t)
}

function Mi(e, t, n) {
    uh(e.x, t.x, n.x), uh(e.y, t.y, n.y)
}

function oP(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? me(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? me(n, e, r.max) : Math.min(e, n)), e
}

function ch(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function sP(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: ch(e.x, n, i),
        y: ch(e.y, t, r)
    }
}

function dh(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function aP(e, t) {
    return {
        x: dh(e.x, t.x),
        y: dh(e.y, t.y)
    }
}

function lP(e, t) {
    let n = .5;
    const r = at(e),
        i = at(t);
    return i > r ? n = Kr(t.min, t.max - r, e.min) : r > i && (n = Kr(e.min, e.max - i, t.min)), kn(0, 1, n)
}

function uP(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const su = .35;

function cP(e = su) {
    return e === !1 ? e = 0 : e === !0 && (e = su), {
        x: fh(e, "left", "right"),
        y: fh(e, "top", "bottom")
    }
}

function fh(e, t, n) {
    return {
        min: hh(e, t),
        max: hh(e, n)
    }
}

function hh(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const ph = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    kr = () => ({
        x: ph(),
        y: ph()
    }),
    mh = () => ({
        min: 0,
        max: 0
    }),
    Ae = () => ({
        x: mh(),
        y: mh()
    });

function dt(e) {
    return [e("x"), e("y")]
}

function Sv({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function dP({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function fP(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Ya(e) {
    return e === void 0 || e === 1
}

function au({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Ya(e) || !Ya(t) || !Ya(n)
}

function zn(e) {
    return au(e) || Av(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Av(e) {
    return gh(e.x) || gh(e.y)
}

function gh(e) {
    return e && e !== "0%"
}

function Vs(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function vh(e, t, n, r, i) {
    return i !== void 0 && (e = Vs(e, i, r)), Vs(e, n, r) + t
}

function lu(e, t = 0, n = 1, r, i) {
    e.min = vh(e.min, t, n, r, i), e.max = vh(e.max, t, n, r, i)
}

function Pv(e, {
    x: t,
    y: n
}) {
    lu(e.x, t.translate, t.scale, t.originPoint), lu(e.y, n.translate, n.scale, n.originPoint)
}
const yh = .999999999999,
    xh = 1.0000000000001;

function hP(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a], s = o.projectionDelta;
        const {
            visualElement: l
        } = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Rr(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Pv(e, s)), r && zn(o.latestValues) && Rr(e, o.latestValues))
    }
    t.x < xh && t.x > yh && (t.x = 1), t.y < xh && t.y > yh && (t.y = 1)
}

function jr(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function wh(e, t, n, r, i = .5) {
    const o = me(e.min, e.max, i);
    lu(e, t, n, o, r)
}

function Rr(e, t) {
    wh(e.x, t.x, t.scaleX, t.scale, t.originX), wh(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function Ev(e, t) {
    return Sv(fP(e.getBoundingClientRect(), t))
}

function pP(e, t, n) {
    const r = Ev(e, n),
        {
            scroll: i
        } = t;
    return i && (jr(r.x, i.offset.x), jr(r.y, i.offset.y)), r
}
const Tv = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    mP = new WeakMap;
class gP {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ae(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ra(c, "page").point)
            },
            o = (c, d) => {
                const {
                    drag: f,
                    dragPropagation: m,
                    onDragStart: y
                } = this.getProps();
                if (f && !m && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = vv(f), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), dt(T => {
                    let p = this.getAxisMotionValue(T).get() || 0;
                    if (Vt.test(p)) {
                        const {
                            projection: h
                        } = this.visualElement;
                        if (h && h.layout) {
                            const g = h.layout.layoutBox[T];
                            g && (p = at(g) * (parseFloat(p) / 100))
                        }
                    }
                    this.originPoint[T] = p
                }), y && ie.postRender(() => y(c, d)), iu(this.visualElement, "transform");
                const {
                    animationState: w
                } = this.visualElement;
                w && w.setActive("whileDrag", !0)
            },
            s = (c, d) => {
                const {
                    dragPropagation: f,
                    dragDirectionLock: m,
                    onDirectionLock: y,
                    onDrag: w
                } = this.getProps();
                if (!f && !this.openGlobalLock) return;
                const {
                    offset: T
                } = d;
                if (m && this.currentDirection === null) {
                    this.currentDirection = vP(T), this.currentDirection !== null && y && y(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, T), this.updateAxis("y", d.point, T), this.visualElement.render(), w && w(c, d)
            },
            a = (c, d) => this.stop(c, d),
            l = () => dt(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new pv(t, {
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Tv(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && ie.postRender(() => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !bo(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = oP(s, this.constraints[t], this.elastic[t])), o.set(s)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
        n && Cr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = sP(i.layoutBox, n) : this.constraints = !1, this.elastic = cP(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && dt(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = uP(i.layoutBox[s], this.constraints[s]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Cr(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = pP(r, i.root, this.visualElement.getTransformPagePoint());
        let s = aP(i.layout.layoutBox, o);
        if (n) {
            const a = n(dP(s));
            this.hasMutatedConstraints = !!a, a && (s = Sv(a))
        }
        return s
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = dt(c => {
            if (!bo(c, n, this.currentDirection)) return;
            let d = l && l[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6,
                m = i ? 40 : 1e7,
                y = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: f,
                    bounceDamping: m,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...d
                };
            return this.startAxisValueAnimation(c, y)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return iu(this.visualElement, t), r.start(Mc(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        dt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        dt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        dt(n => {
            const {
                drag: r
            } = this.getProps();
            if (!bo(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: s,
                    max: a
                } = i.layout.layoutBox[n];
                o.set(t[n] - me(s, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Cr(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        dt(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[s] = lP({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), dt(s => {
            if (!bo(s, t, null)) return;
            const a = this.getAxisMotionValue(s),
                {
                    min: l,
                    max: u
                } = this.constraints[s];
            a.set(me(l, u, i[s]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        mP.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = Zt(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                Cr(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), ie.read(r);
        const s = Kt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (dt(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            s(), n(), o(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: s = su,
                dragMomentum: a = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}

function bo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function vP(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class yP extends Ln {
    constructor(t) {
        super(t), this.removeGroupControls = _e, this.removeListeners = _e, this.controls = new gP(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || _e
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Sh = e => (t, n) => {
    e && ie.postRender(() => e(t, n))
};
class xP extends Ln {
    constructor() {
        super(...arguments), this.removePointerDownListener = _e
    }
    onPointerDown(t) {
        this.session = new pv(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Tv(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Sh(t),
            onStart: Sh(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session, i && ie.postRender(() => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Zt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Oc = k.createContext(null);

function wP() {
    const e = k.useContext(Oc);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = k.useId();
    k.useEffect(() => r(i), []);
    const o = k.useCallback(() => n && n(i), [i, n]);
    return !t && n ? [!1, o] : [!0]
}
const Cv = k.createContext({}),
    kv = k.createContext({}),
    $o = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

function Ah(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const fi = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (H.test(e)) e = parseFloat(e);
                else return e;
            const n = Ah(e, t.target.x),
                r = Ah(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    SP = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = jn.parse(e);
            if (i.length > 5) return r;
            const o = jn.createTransformer(e),
                s = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + s] /= a, i[1 + s] /= l;
            const u = me(a, l, .5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
        }
    },
    Fs = {};

function AP(e) {
    Object.assign(Fs, e)
}
const {
    schedule: Bc,
    cancel: ST
} = jg(queueMicrotask, !1);
class PP extends k.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: o
        } = t;
        AP(EP), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), $o.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: o
        } = this.props, s = r.projection;
        return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || ie.postRender(() => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), Bc.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function jv(e) {
    const [t, n] = wP(), r = k.useContext(Cv);
    return v.jsx(PP, { ...e,
        layoutGroup: r,
        switchLayoutGroup: k.useContext(kv),
        isPresent: t,
        safeToRemove: n
    })
}
const EP = {
        borderRadius: { ...fi,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: fi,
        borderTopRightRadius: fi,
        borderBottomLeftRadius: fi,
        borderBottomRightRadius: fi,
        boxShadow: SP
    },
    Rv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    TP = Rv.length,
    Ph = e => typeof e == "string" ? parseFloat(e) : e,
    Eh = e => typeof e == "number" || H.test(e);

function CP(e, t, n, r, i, o) {
    i ? (e.opacity = me(0, n.opacity !== void 0 ? n.opacity : 1, kP(r)), e.opacityExit = me(t.opacity !== void 0 ? t.opacity : 1, 0, jP(r))) : o && (e.opacity = me(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < TP; s++) {
        const a = `border${Rv[s]}Radius`;
        let l = Th(t, a),
            u = Th(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Eh(l) === Eh(u) ? (e[a] = Math.max(me(Ph(l), Ph(u), r), 0), (Vt.test(u) || Vt.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = me(t.rotate || 0, n.rotate || 0, r))
}

function Th(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const kP = Dv(0, .5, Fg),
    jP = Dv(.5, .95, _e);

function Dv(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Kr(e, t, r))
}

function Ch(e, t) {
    e.min = t.min, e.max = t.max
}

function ct(e, t) {
    Ch(e.x, t.x), Ch(e.y, t.y)
}

function kh(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function jh(e, t, n, r, i) {
    return e -= t, e = Vs(e, 1 / n, r), i !== void 0 && (e = Vs(e, 1 / i, r)), e
}

function RP(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (Vt.test(t) && (t = parseFloat(t), t = me(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let a = me(o.min, o.max, r);
    e === o && (a -= t), e.min = jh(e.min, t, n, a, i), e.max = jh(e.max, t, n, a, i)
}

function Rh(e, t, [n, r, i], o, s) {
    RP(e, t[n], t[r], t[i], t.scale, o, s)
}
const DP = ["x", "scaleX", "originX"],
    MP = ["y", "scaleY", "originY"];

function Dh(e, t, n, r) {
    Rh(e.x, t, DP, n ? n.x : void 0, r ? r.x : void 0), Rh(e.y, t, MP, n ? n.y : void 0, r ? r.y : void 0)
}

function Mh(e) {
    return e.translate === 0 && e.scale === 1
}

function Mv(e) {
    return Mh(e.x) && Mh(e.y)
}

function Nh(e, t) {
    return e.min === t.min && e.max === t.max
}

function NP(e, t) {
    return Nh(e.x, t.x) && Nh(e.y, t.y)
}

function Lh(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function Nv(e, t) {
    return Lh(e.x, t.x) && Lh(e.y, t.y)
}

function Vh(e) {
    return at(e.x) / at(e.y)
}

function Fh(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class LP {
    constructor() {
        this.members = []
    }
    add(t) {
        Nc(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (Lc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function VP(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y,
        s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: d,
            rotateY: f,
            skewX: m,
            skewY: y
        } = n;
        u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), m && (r += `skewX(${m}deg) `), y && (r += `skewY(${y}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const FP = (e, t) => e.depth - t.depth;
class OP {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Nc(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Lc(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(FP), this.isDirty = !1, this.children.forEach(t)
    }
}

function es(e) {
    const t = Ue(e) ? e.get() : e;
    return kA(t) ? t.toValue() : t
}

function BP(e, t) {
    const n = Ft.now(),
        r = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= t && (Cn(r), e(o - t))
        };
    return ie.read(r, !0), () => Cn(r)
}

function bP(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function IP(e, t, n) {
    const r = Ue(e) ? e : $i(e);
    return r.start(Mc("", r, t, n)), r.animation
}
const Un = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    xi = typeof window < "u" && window.MotionDebug !== void 0,
    Qa = ["", "X", "Y", "Z"],
    zP = {
        visibility: "hidden"
    },
    Oh = 1e3;
let UP = 0;

function Xa(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function Lv(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = cv(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: o
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", ie, !(i || o))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && Lv(r)
}

function Vv({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = UP++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, xi && (Un.totalNodes = Un.resolvedTargetDeltas = Un.recalculatedProjection = 0), this.nodes.forEach(WP), this.nodes.forEach(GP), this.nodes.forEach(ZP), this.nodes.forEach(KP), xi && window.MotionDebug.record(Un)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new OP)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Vc), this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = bP(s), this.instance = s;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = BP(f, 250), $o.hasAnimatedSinceResize && ($o.hasAnimatedSinceResize = !1, this.nodes.forEach(bh))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: f,
                hasRelativeTargetChanged: m,
                layout: y
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const w = this.options.transition || c.getDefaultTransition() || tE,
                    {
                        onLayoutAnimationStart: T,
                        onLayoutAnimationComplete: p
                    } = c.getProps(),
                    h = !this.targetLayout || !Nv(this.targetLayout, y) || m,
                    g = !f && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || f && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, g);
                    const P = { ...vc(w, "layout"),
                        onPlay: T,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P)
                } else f || bh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Cn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(JP), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: s
            } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Lv(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Bh);
                return
            }
            this.isUpdating || this.nodes.forEach(QP), this.isUpdating = !1, this.nodes.forEach(XP), this.nodes.forEach(_P), this.nodes.forEach(HP), this.clearAllSnapshots();
            const a = Ft.now();
            Ve.delta = kn(0, 1e3 / 60, a - Ve.timestamp), Ve.timestamp = a, Ve.isProcessing = !0, Ia.update.process(Ve), Ia.preRender.process(Ve), Ia.render.process(Ve), Ve.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Bc.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(YP), this.sharedNodes.forEach(qP)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ie.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ie.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Ae(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !Mv(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && (a || zn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), nE(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {
                visualElement: a
            } = this.options;
            if (!a) return Ae();
            const l = a.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(rE))) {
                const {
                    scroll: c
                } = this.root;
                c && (jr(l.x, c.offset.x), jr(l.y, c.offset.y))
            }
            return l
        }
        removeElementScroll(s) {
            var a;
            const l = Ae();
            if (ct(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: d,
                        options: f
                    } = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && ct(l, s), jr(l.x, d.offset.x), jr(l.y, d.offset.y))
            }
            return l
        }
        applyTransform(s, a = !1) {
            const l = Ae();
            ct(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Rr(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), zn(c.latestValues) && Rr(l, c.latestValues)
            }
            return zn(this.latestValues) && Rr(l, this.latestValues), l
        }
        removeTransform(s) {
            const a = Ae();
            ct(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !zn(u.latestValues)) continue;
                au(u.latestValues) && u.updateSnapshot();
                const c = Ae(),
                    d = u.measurePageBox();
                ct(c, d), Dh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return zn(this.latestValues) && Dh(a, this.latestValues), a
        }
        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = { ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ve.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = Ve.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ae(), this.relativeTargetOrigin = Ae(), Mi(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), ct(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ae(), this.targetWithTransforms = Ae()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), iP(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ct(this.target, this.layout.layoutBox), Pv(this.target, this.targetDelta)) : ct(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ae(), this.relativeTargetOrigin = Ae(), Mi(this.relativeTargetOrigin, this.target, m.target), ct(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    xi && Un.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || au(this.parent.latestValues) || Av(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ve.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            ct(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                m = this.treeScale.y;
            hP(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Ae());
            const {
                target: y
            } = a;
            if (!y) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (kh(this.prevProjectionDelta.x, this.projectionDelta.x), kh(this.prevProjectionDelta.y, this.projectionDelta.y)), Di(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== m || !Fh(this.projectionDelta.x, this.prevProjectionDelta.x) || !Fh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), xi && Un.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = kr(), this.projectionDelta = kr(), this.projectionDeltaWithTransform = kr()
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                d = kr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const f = Ae(),
                m = l ? l.source : void 0,
                y = this.layout ? this.layout.source : void 0,
                w = m !== y,
                T = this.getStack(),
                p = !T || T.members.length <= 1,
                h = !!(w && !p && this.options.crossfade === !0 && !this.path.some(eE));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = P => {
                const j = P / 1e3;
                Ih(d.x, s.x, j), Ih(d.y, s.y, j), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Mi(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), $P(this.relativeTarget, this.relativeTargetOrigin, f, j), g && NP(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = Ae()), ct(g, this.relativeTarget)), w && (this.animationValues = c, CP(c, u, this.latestValues, j, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Cn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ie.update(() => {
                $o.hasAnimatedSinceResize = !0, this.currentAnimation = IP(0, Oh, { ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a)
                    },
                    onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Oh), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && Fv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ae();
                    const d = at(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min, l.x.max = l.x.min + d;
                    const f = at(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min, l.y.max = l.y.min + f
                }
                ct(a, l), Rr(a, c), Di(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new LP), this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: s
            } = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({
            needsReset: s,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return;
            let a = !1;
            const {
                latestValues: l
            } = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && Xa("z", s, u, this.animationValues);
            for (let c = 0; c < Qa.length; c++) Xa(`rotate${Qa[c]}`, s, u, this.animationValues), Xa(`skew${Qa[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return zP;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = es(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, w.pointerEvents = es(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !zn(this.latestValues) && (w.transform = c ? c({}, "") : "none", this.hasProjected = !1), w
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), u.transform = VP(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
            const {
                x: m,
                y
            } = this.projectionDelta;
            u.transformOrigin = `${m.origin*100}% ${y.origin*100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const w in Fs) {
                if (f[w] === void 0) continue;
                const {
                    correct: T,
                    applyTo: p
                } = Fs[w], h = u.transform === "none" ? f[w] : T(f[w], d);
                if (p) {
                    const g = p.length;
                    for (let P = 0; P < g; P++) u[p[P]] = h
                } else u[w] = h
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? es(s == null ? void 0 : s.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(Bh), this.root.sharedNodes.clear()
        }
    }
}

function _P(e) {
    e.updateLayout()
}

function HP(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: o
        } = e.options, s = n.source !== e.layout.source;
        o === "size" ? dt(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d],
                m = at(f);
            f.min = r[d].min, f.max = f.min + m
        }) : Fv(o, n.layoutBox, r) && dt(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d],
                m = at(r[d]);
            f.max = f.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m)
        });
        const a = kr();
        Di(a, r, n.layoutBox);
        const l = kr();
        s ? Di(l, e.applyTransform(i, !0), n.measuredBox) : Di(l, r, n.layoutBox);
        const u = !Mv(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: f,
                    layout: m
                } = d;
                if (f && m) {
                    const y = Ae();
                    Mi(y, n.layoutBox, f.layoutBox);
                    const w = Ae();
                    Mi(w, r, m.layoutBox), Nv(y, w) || (c = !0), d.options.layoutRoot && (e.relativeTarget = w, e.relativeTargetOrigin = y, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function WP(e) {
    xi && Un.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function KP(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function YP(e) {
    e.clearSnapshot()
}

function Bh(e) {
    e.clearMeasurements()
}

function QP(e) {
    e.isLayoutDirty = !1
}

function XP(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function bh(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function GP(e) {
    e.resolveTargetDelta()
}

function ZP(e) {
    e.calcProjection()
}

function JP(e) {
    e.resetSkewAndRotation()
}

function qP(e) {
    e.removeLeadSnapshot()
}

function Ih(e, t, n) {
    e.translate = me(t.translate, 0, n), e.scale = me(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function zh(e, t, n, r) {
    e.min = me(t.min, n.min, r), e.max = me(t.max, n.max, r)
}

function $P(e, t, n, r) {
    zh(e.x, t.x, n.x, r), zh(e.y, t.y, n.y, r)
}

function eE(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const tE = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Uh = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    _h = Uh("applewebkit/") && !Uh("chrome/") ? Math.round : _e;

function Hh(e) {
    e.min = _h(e.min), e.max = _h(e.max)
}

function nE(e) {
    Hh(e.x), Hh(e.y)
}

function Fv(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !rP(Vh(t), Vh(n), .2)
}

function rE(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const iE = Vv({
        attachResizeListener: (e, t) => Kt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Ga = {
        current: void 0
    },
    Ov = Vv({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Ga.current) {
                const e = new iE({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Ga.current = e
            }
            return Ga.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    oE = {
        pan: {
            Feature: xP
        },
        drag: {
            Feature: yP,
            ProjectionNode: Ov,
            MeasureLayout: jv
        }
    };

function Wh(e, t) {
    const n = t ? "pointerenter" : "pointerleave",
        r = t ? "onHoverStart" : "onHoverEnd",
        i = (o, s) => {
            if (o.pointerType === "touch" || yv()) return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
            const l = a[r];
            l && ie.postRender(() => l(o, s))
        };
    return Zt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class sE extends Ln {
    mount() {
        this.unmount = Gt(Wh(this.node, !0), Wh(this.node, !1))
    }
    unmount() {}
}
class aE extends Ln {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Gt(Kt(this.node.current, "focus", () => this.onFocus()), Kt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Bv = (e, t) => t ? e === t ? !0 : Bv(e, t.parentElement) : !1;

function Za(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, ra(n))
}
class lE extends Ln {
    constructor() {
        super(...arguments), this.removeStartListeners = _e, this.removeEndListeners = _e, this.removeAccessibleListeners = _e, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                o = Zt(window, "pointerup", (a, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c,
                        globalTapTarget: d
                    } = this.node.getProps(), f = !d && !Bv(this.node.current, a.target) ? c : u;
                    f && ie.update(() => f(a, l))
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                s = Zt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = Gt(o, s), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = o => {
                    if (o.key !== "Enter" || this.isPressing) return;
                    const s = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || Za("up", (l, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && ie.postRender(() => c(l, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = Kt(this.node.current, "keyup", s), Za("down", (a, l) => {
                        this.startPress(a, l)
                    })
                },
                n = Kt(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Za("cancel", (o, s) => this.cancelPress(o, s))
                },
                i = Kt(this.node.current, "blur", r);
            this.removeAccessibleListeners = Gt(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && ie.postRender(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !yv()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && ie.postRender(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = Zt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = Kt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Gt(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const uu = new WeakMap,
    Ja = new WeakMap,
    uE = e => {
        const t = uu.get(e.target);
        t && t(e)
    },
    cE = e => {
        e.forEach(uE)
    };

function dE({
    root: e,
    ...t
}) {
    const n = e || document;
    Ja.has(n) || Ja.set(n, {});
    const r = Ja.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(cE, {
        root: e,
        ...t
    })), r[i]
}

function fE(e, t, n) {
    const r = dE(t);
    return uu.set(e, n), r.observe(e), () => {
        uu.delete(e), r.unobserve(e)
    }
}
const hE = {
    some: 0,
    all: 1
};
class pE extends Ln {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: o
        } = t, s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : hE[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: d
            } = this.node.getProps(), f = u ? c : d;
            f && f(l)
        };
        return fE(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(mE(t, n)) && this.startObserver()
    }
    unmount() {}
}

function mE({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const gE = {
        inView: {
            Feature: pE
        },
        tap: {
            Feature: lE
        },
        focus: {
            Feature: aE
        },
        hover: {
            Feature: sE
        }
    },
    vE = {
        layout: {
            ProjectionNode: Ov,
            MeasureLayout: jv
        }
    },
    bv = k.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    ia = k.createContext({}),
    bc = typeof window < "u",
    yE = bc ? k.useLayoutEffect : k.useEffect,
    Iv = k.createContext({
        strict: !1
    });

function xE(e, t, n, r, i) {
    var o, s;
    const {
        visualElement: a
    } = k.useContext(ia), l = k.useContext(Iv), u = k.useContext(Oc), c = k.useContext(bv).reducedMotion, d = k.useRef();
    r = r || l.renderer, !d.current && r && (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const f = d.current,
        m = k.useContext(kv);
    f && !f.projection && i && (f.type === "html" || f.type === "svg") && wE(d.current, n, i, m), k.useInsertionEffect(() => {
        f && f.update(n, u)
    });
    const y = n[uv],
        w = k.useRef(!!y && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, y)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, y)));
    return yE(() => {
        f && (window.MotionIsMounted = !0, f.updateFeatures(), Bc.render(f.render), w.current && f.animationState && f.animationState.animateChanges())
    }), k.useEffect(() => {
        f && (!w.current && f.animationState && f.animationState.animateChanges(), w.current && (queueMicrotask(() => {
            var T;
            (T = window.MotionHandoffMarkAsComplete) === null || T === void 0 || T.call(window, y)
        }), w.current = !1))
    }), f
}

function wE(e, t, n, r) {
    const {
        layoutId: i,
        layout: o,
        drag: s,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : zv(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || a && Cr(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: u
    })
}

function zv(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : zv(e.parent)
}

function SE(e, t, n) {
    return k.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Cr(n) && (n.current = r))
    }, [t])
}

function oa(e) {
    return ea(e.animate) || gc.some(t => Zi(e[t]))
}

function Uv(e) {
    return !!(oa(e) || e.variants)
}

function AE(e, t) {
    if (oa(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || Zi(n) ? n : void 0,
            animate: Zi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function PE(e) {
    const {
        initial: t,
        animate: n
    } = AE(e, k.useContext(ia));
    return k.useMemo(() => ({
        initial: t,
        animate: n
    }), [Kh(t), Kh(n)])
}

function Kh(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Yh = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Yr = {};
for (const e in Yh) Yr[e] = {
    isEnabled: t => Yh[e].some(n => !!t[n])
};

function EE(e) {
    for (const t in e) Yr[t] = { ...Yr[t],
        ...e[t]
    }
}
const TE = Symbol.for("motionComponentSymbol");

function CE({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && EE(e);

    function o(a, l) {
        let u;
        const c = { ...k.useContext(bv),
                ...a,
                layoutId: kE(a)
            },
            {
                isStatic: d
            } = c,
            f = PE(a),
            m = r(a, d);
        if (!d && bc) {
            jE();
            const y = RE(c);
            u = y.MeasureLayout, f.visualElement = xE(i, m, c, t, y.ProjectionNode)
        }
        return v.jsxs(ia.Provider, {
            value: f,
            children: [u && f.visualElement ? v.jsx(u, {
                visualElement: f.visualElement,
                ...c
            }) : null, n(i, a, SE(m, f.visualElement, l), m, d, f.visualElement)]
        })
    }
    const s = k.forwardRef(o);
    return s[TE] = i, s
}

function kE({
    layoutId: e
}) {
    const t = k.useContext(Cv).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function jE(e, t) {
    k.useContext(Iv).strict
}

function RE(e) {
    const {
        drag: t,
        layout: n
    } = Yr;
    if (!t && !n) return {};
    const r = { ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const DE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Ic(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(DE.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function _v(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o])
}
const Hv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Wv(e, t, n, r) {
    _v(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(Hv.has(i) ? i : Fc(i), t.attrs[i])
}

function Kv(e, {
    layout: t,
    layoutId: n
}) {
    return sr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Fs[e] || e === "opacity")
}

function zc(e, t, n) {
    var r;
    const {
        style: i
    } = e, o = {};
    for (const s in i)(Ue(i[s]) || t.style && Ue(t.style[s]) || Kv(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}

function Yv(e, t, n) {
    const r = zc(e, t, n);
    for (const i in e)
        if (Ue(e[i]) || Ue(t[i])) {
            const o = lo.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}

function ME(e) {
    const t = k.useRef(null);
    return t.current === null && (t.current = e()), t.current
}

function NE({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, o) {
    const s = {
        latestValues: LE(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)), s
}
const Qv = e => (t, n) => {
    const r = k.useContext(ia),
        i = k.useContext(Oc),
        o = () => NE(e, t, r, i);
    return n ? o() : ME(o)
};

function LE(e, t, n, r) {
    const i = {},
        o = r(e, {});
    for (const f in o) i[f] = es(o[f]);
    let {
        initial: s,
        animate: a
    } = e;
    const l = oa(e),
        u = Uv(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    if (d && typeof d != "boolean" && !ea(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let m = 0; m < f.length; m++) {
            const y = pc(e, f[m]);
            if (y) {
                const {
                    transitionEnd: w,
                    transition: T,
                    ...p
                } = y;
                for (const h in p) {
                    let g = p[h];
                    if (Array.isArray(g)) {
                        const P = c ? g.length - 1 : 0;
                        g = g[P]
                    }
                    g !== null && (i[h] = g)
                }
                for (const h in w) i[h] = w[h]
            }
        }
    }
    return i
}
const Uc = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    Xv = () => ({ ...Uc(),
        attrs: {}
    }),
    Gv = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    VE = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    FE = lo.length;

function OE(e, t, n) {
    let r = "",
        i = !0;
    for (let o = 0; o < FE; o++) {
        const s = lo[o],
            a = e[s];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = Gv(a, Ec[s]);
            if (!l) {
                i = !1;
                const c = VE[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function _c(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: o
    } = e;
    let s = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (sr.has(l)) {
            s = !0;
            continue
        } else if (zg(l)) {
            i[l] = u;
            continue
        } else {
            const c = Gv(u, Ec[l]);
            l.startsWith("origin") ? (a = !0, o[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = OE(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = o;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}

function Qh(e, t, n) {
    return typeof e == "string" ? e : H.transform(t + n * e)
}

function BE(e, t, n) {
    const r = Qh(t, e.x, e.width),
        i = Qh(n, e.y, e.height);
    return `${r} ${i}`
}
const bE = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    IE = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function zE(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? bE : IE;
    e[o.offset] = H.transform(-r);
    const s = H.transform(t),
        a = H.transform(n);
    e[o.array] = `${s} ${a}`
}

function Hc(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, d) {
    if (_c(e, u, d), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: f,
        style: m,
        dimensions: y
    } = e;
    f.transform && (y && (m.transform = f.transform), delete f.transform), y && (i !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = BE(y, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), s !== void 0 && zE(f, s, a, l, !1)
}
const Wc = e => typeof e == "string" && e.toLowerCase() === "svg",
    UE = {
        useVisualState: Qv({
            scrapeMotionValuesFromProps: Yv,
            createRenderState: Xv,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                ie.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), ie.render(() => {
                    Hc(n, r, Wc(t.tagName), e.transformTemplate), Wv(t, n)
                })
            }
        })
    },
    _E = {
        useVisualState: Qv({
            scrapeMotionValuesFromProps: zc,
            createRenderState: Uc
        })
    };

function Zv(e, t, n) {
    for (const r in t) !Ue(t[r]) && !Kv(r, n) && (e[r] = t[r])
}

function HE({
    transformTemplate: e
}, t) {
    return k.useMemo(() => {
        const n = Uc();
        return _c(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function WE(e, t) {
    const n = e.style || {},
        r = {};
    return Zv(r, n, e), Object.assign(r, HE(e, t)), r
}

function KE(e, t) {
    const n = {},
        r = WE(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const YE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Os(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || YE.has(e)
}
let Jv = e => !Os(e);

function QE(e) {
    e && (Jv = t => t.startsWith("on") ? !Os(t) : e(t))
}
try {
    QE(require("@emotion/is-prop-valid").default)
} catch {}

function XE(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (Jv(i) || n === !0 && Os(i) || !t && !Os(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function GE(e, t, n, r) {
    const i = k.useMemo(() => {
        const o = Xv();
        return Hc(o, t, Wc(r), e.transformTemplate), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [t]);
    if (e.style) {
        const o = {};
        Zv(o, e.style, e), i.style = { ...o,
            ...i.style
        }
    }
    return i
}

function ZE(e = !1) {
    return (n, r, i, {
        latestValues: o
    }, s) => {
        const l = (Ic(n) ? GE : KE)(r, o, s, n),
            u = XE(r, typeof n == "string", e),
            c = n !== k.Fragment ? { ...u,
                ...l,
                ref: i
            } : {},
            {
                children: d
            } = r,
            f = k.useMemo(() => Ue(d) ? d.get() : d, [d]);
        return k.createElement(n, { ...c,
            children: f
        })
    }
}

function JE(e, t) {
    return function(r, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const s = { ...Ic(r) ? UE : _E,
            preloadedFeatures: e,
            useRender: ZE(i),
            createVisualElement: t,
            Component: r
        };
        return CE(s)
    }
}
const cu = {
        current: null
    },
    qv = {
        current: !1
    };

function qE() {
    if (qv.current = !0, !!bc)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => cu.current = e.matches;
            e.addListener(t), t()
        } else cu.current = !1
}

function $E(e, t, n) {
    for (const r in t) {
        const i = t[r],
            o = n[r];
        if (Ue(i)) e.addValue(r, i);
        else if (Ue(o)) e.addValue(r, $i(i, {
            owner: e
        }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, $i(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const Xh = new WeakMap,
    eT = [...Hg, Ie, jn],
    tT = e => eT.find(_g(e)),
    Gh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class nT {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: o,
        visualState: s
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Sc, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const f = Ft.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f, ie.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = s;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = oa(n), this.isVariantNode = Uv(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: c,
            ...d
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in d) {
            const m = d[f];
            l[f] !== void 0 && Ue(m) && m.set(l[f], !1)
        }
    }
    mount(t) {
        this.current = t, Xh.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), qv.current || qE(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : cu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Xh.delete(this.current), this.projection && this.projection.unmount(), Cn(this.notifyUpdate), Cn(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = sr.has(t),
            i = n.on("change", a => {
                this.latestValues[t] = a, this.props.onUpdate && ie.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), o(), s && s(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Yr) {
            const n = Yr[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ae()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Gh.length; r++) {
            const i = Gh[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = "on" + i,
                s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = $E(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = $i(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (bg(i) || Bg(i)) ? i = parseFloat(i) : !tT(i) && jn.test(n) && (i = Jg(t, n)), this.setBaseTarget(t, Ue(i) ? i.get() : i)), Ue(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = pc(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Ue(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Vc), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class $v extends nT {
    constructor() {
        super(...arguments), this.KeyframeResolver = qg
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
}

function rT(e) {
    return window.getComputedStyle(e)
}
class iT extends $v {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = _v
    }
    readValueFromInstance(t, n) {
        if (sr.has(n)) {
            const r = Tc(n);
            return r && r.default || 0
        } else {
            const r = rT(t),
                i = (zg(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return Ev(t, n)
    }
    build(t, n, r) {
        _c(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return zc(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Ue(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}
class oT extends $v {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ae
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (sr.has(n)) {
            const r = Tc(n);
            return r && r.default || 0
        }
        return n = Hv.has(n) ? n : Fc(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Yv(t, n, r)
    }
    build(t, n, r) {
        Hc(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Wv(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Wc(t.tagName), super.mount(t)
    }
}
const sT = (e, t) => Ic(e) ? new oT(t) : new iT(t, {
        allowProjection: e !== k.Fragment
    }),
    aT = JE({ ...XA,
        ...gE,
        ...oE,
        ...vE
    }, sT),
    lT = Iw(aT),
    uT = "/assets/web%20image%20two-01-DrksK3KN.png",
    ey = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZbSURBVHgB1ZvNbhtVFMfPHY8jAaVxIpVWgYKhVIIumkYim2zqLOiiQkpSkVJWdJ4g5AmSPEHSJ5jukEhEWqliUZDiLOimleqwSBdVhQGBoJESJ02LFI99Of8ZO7En8+mZccc/yfmYez2+/znnnjn3zLWghFjVZe6AXhQUknlBYliSvCSJcvx3vrUfHy/zsTK3VQTJDSKlqNKJ0pQmKpQAgmIEIg3an2EZBf63QNEo8nnuqtR3Z0p7o0wxEYvgZf1FgQc3R9FFulHkoS5Ma28XKSKRBHdBaBs82HKNaPYr7eQd6pCOBK/q/+UNqurUJaF2eNC3M5Rd6MTVFQrJir4/U6PqY3pNYgEHuJs8hrXv9b2bFJLAFm4EJHZf+S2lCrHEc3s2cO8gnRpi11jsJUolssTRfCqIi/sKxnyF+7Ab5SnFIKDxvB73E+0puFfENrFE10amtAHXpMUzaBlkrPaKWICxGqSsreo7Obc+roL5HruY3jnrhbhkkDrn2up0EOGeG3TqIrlBQadOC+ofUOitE4Jf1vGDA6Iqvyrbddp6LunvP+qBzlcjOXtD61+yHz8muJvz9tQZQUPvKZT/WKFsX7A75Kt9SeVnddrcqPl1raiUHbEHMdXeqyaqc1ImKxZCL1xUzd9heZOtf2E4Q/lzChXvG+YFcCHXyAbHWw+2feKKvjfJb1+lhIgi1AmI9RHNiPHWRYc9aC1SAsBdPxvL0OUr2djEAlh7dEz16SXbAtihYKx8kpi3EHj1msrzNENJgPPDvT0oWKs6i5aeco5iZnjUsmrQgNQpH5zzu5hH2syRNJZ7v1FMQOBYQY3Vff34+V6Vb13uc1ml2gAyMNPCBh1MUkxgXn3+RXfFglOnvVe6nIGZq7zGjBcTFAMQW7iimr/DAuts/mqYScb5TzI09P6RAETh0iPntib9g36fKS6bP5F3GpTZoYhEEQt+/KHadnu5ei17eC57m1O03/pH0vr9qudnwK0Vzjsj58tRxWKw9nvpX39aKSQsb2+r7BxPL5upqBcHlOGyMdULFBEEqE7Fgmyfe1ufR1tYUCNXhBDDFAHcenKD0QIU3m+/YO+eteYpjru1tfJyn3zBAwGV8+Ycdcj5TxV+xZNQYEo8fGCYt7T8R+0ivdrCUOflrorsqpO340OHR/3SunDnQzAK29bEaV7bUUjkFNFhOomrniZ2t6VvHxg3dF0awJWjBKkkqOz4CwahBUNoXPM2LnDbqmwnJPjCxfRZ9/m/wcQChbuWg3aG0KSWeVH4/ZlvuccEZVwOWsEfPMO6aQPujEwtCFKwYL47bVBA3jmTPsEBinmHSCl3oaAUpPPQWZG6udusYAaFR1+CS5eDdB4629vWtVCKCj+LKQbpmjZ3fvqkFsq6QCWjpDQePBW9OmI1E8Wdvcuo4fujfXMjnFj25+JhiYen87pX36iroTCWgBhYz6sdtejqQbiLyBHrLn6ZglWqL1FCYJ7huVAQIOJB0aAtl0QCt5+f7hmhPQYYVDc3wpiC/dw6671QcQWWgmDUovyA2HW2HFJEvB79YhxWO/AADeUbvEJbFrA7f60NlPFny5JHLDQ2lB3j1UsKTZmzn42HlmvCYhi4WxyA5bDebbUcpkHYoOSKhDaLthEs63tr5LI7Z+JG8II6LNsU28Sp7gWhSAtjE+YAtjZe1/o/bP5vW9S6W/npk7r51M4LuBuip1PQgfVQfWwGQJRkOnLPkEgSbTt8jpnMy8qoXzktDTFwXBC8uiEiKNjA9qV2Ums9dqxsYVBNy1LmMXa+2tvgphCVG0Q10bpWzSCTNuDKHJkX7McdJ+WyvsuPJUQij067BZtAu66dvG0/7pgvTmv9S4LkLepR2Lq3nMQC1wQ5Q/V57HCjnkOWOCq7bo90FYxkhDOwccwF6hEa83bKq4/nEgiiaz0iGmPEWJsZlRu+az6cACdKt3vLUpbqI35iQahl0Iq+u8Q38hlKEQhQLHbea39lK6HXfdambDln/3ZK95EQuDDtsNvOi44Wut/pO3mVlHl++zf0OuDVjyFrWhAXPv7WCGAjGz+RW+yatVkoVj5Rvt0S39d4hJzjCVWgJIhB6NGpYqTh6pMkxERk8aZIuY5qTNCAFOy0CWFtlsH+kXoBuwywGOFCeN7xq3gCX8MTJW7fQNkYldQ4RbbyP0rl0NA7sy00AAAAAElFTkSuQmCC",
    ty = "/assets/Raydium-Logo-PNG-758x473-removebg-preview-CYYNqz4N.png",
    ny = "data:image/webp;base64,UklGRuYLAABXRUJQVlA4WAoAAAAYAAAATwAATwAAVlA4TAULAAAvT8ATEBpvsm07kqJtW/W/GduXpZX6VaYQaTQufJ/jTmY1YMV1BZwgExytgoP0JIqNBxpWKoTjxo0cWdSZ0n/Q6AgOF4B9Hda040aSFGn9tyxKqsMX3y20IRJg2zb25vXmVbHxT2zbtm2ntm3bNoLabuw6tm273/zzz/0gSrYVtDmkzI1FS4V3H/AJ3IFiCR/JJolqpKGJwiaxJpuEr0nm8V9QAAWEBJGgBLCSjCdAm9zq0nPbSnYbAAsSBILfEuBFGCjAgGuAQ45bVbKb/Pl5wYIEniDfYGsEwAZUiSpjAhwBouS4a/z+vMOfnw8lgTX4olapSbARnCaVkEAf2GMIkwbdFX7ukiUJDMELaabqydQk7KxMk8LgqYIusGa5Kw1GEqiD5FCJIqfcpwm0QEVIoAEsIdcAdpY1+RFcMOakKLrnVCoMdA10A/iT653k3LYSAmlwAow4NTmVF5agFGGwAtnAkjvJr48roWENeqoAN+r8YJUgpT14cqLNHmCqvu0QF2aAJGkQGvDAaJOGodbJ/bXiHu4eVktbgQ5wDGjuCD93Kcmfq9R/aAiCHaeS677KUKVhKLp3opmSQB3YZIim028csQr9MSi5D4xHcpnc+APsAwNu1kepAZJBoRThruizETmSyzXJP14vQJX64O09M9cg+oZAhbEkmdb7IwlEjX2nkqRXhjEJYkGV6iABrvHKcHZukvQfiINt4A4wJpeLXooHRplqk6AEasAqsMD3Y70kV2DXdzAHXgBz148RLHkpYwxcM3SZvLilQUigDi6AASnAsx5iYRAShIKSqiEAukABK8CirADq5M9dOLet4PrxDIQDedIAAOn/DeyNJxtpMLhSfQt0ybs5ywOEBN6g2I2LgY1gUSuMBmNV9jGHZ7YVcu/Oj/pI8j1Il58nJaR3n4E6uc78ANuHUoTKZj6biF6ABmPF0r/QNVYJM+XCDL0wQ9JhAYngr1RcoJngRptBAjPgCpBmItcEf7U3FDWBmzb0MuIliDdIb8MZwRbQZLCKTNgeuLgQ2MGtLk0B+Qp9bsBcME+TE0YFiCa57AU4IUWXQwkwAhs4evYJChWlyx4OnD1U8BMEkgD+/HygjwDKzkGztlL2ZvzcpVnkur+aW6CBq7m/oGLwQvpsuJPntpW+7gSrlDx+KIVWBznAGk7drObezSxB14mNNjFI4AMwJbeqtFc+M6K/11wlg6tHvDBDk8u5SgYDmIw/JgY01AIeGIq9TGEkjQuKKVcZK1L2UxQCA4bzh8R9VjmhwTg1dhr9SBr8IPq25vMEA98JLOkHGAHi/ArS5e52Dul/Cca+Af6Oa62lPHjpTDStooOaAoaAPEngD0r8rGkC/S1Gwy1DvOM5CxIoXwY91XXNAnM8z2EUKsu4Jp+AJilKCUlGPohOTCQX7IY5SAYzaj2mTNMqz/YM7WyiqPcMea45ksYisG3mWFJ5CtxJjj93CT1bXeIM46lqjVCZTHC1ygKi+V9PWp8YSSAJzgAGzH0Apu5NZHIAeek5+A1Y1e4MOU0zQHimSQeJm4wkUAea5MKAVG11YUECWbDPaGmHy8AONU0WqNgrOuhNEoRntpXcnYXPzG8929tKH7Su/QWwdci1yLtW3QNPbvJ1XzI5dnsGMookMAfJBuMGv87z6qQ45wcTxi2gS+4zBeQ7pil0BDjcniHsKtdbO3jjXVv5K6vNJKdADzgG5MkFILm0YOTPaDP6nsDETb7u4NpdEvA/ASVSGTaa5vnBt0CvjBqwAYiS4yHJfFVUhkEVVKw6WCxIQxbsAS2q0T2VLEFnKRIoBuEGJX/u0jPbSjpWXS3DIOmasQIIdkTgPgm0wZUvUqsM7Bh8bSKkAG8esY+NLmjkCjBSgE/vOxaeI0nDHjzZSD1bhMHqy4mhT6Zmywsz5HUOkKn6Edz6H2cvLK/WIPCkqsZgoDpWd97qZLRdPSaxCpezEZtyyHtgyNhhcEgD7uYH3xAEq/Zq3QBeqdMme6URbFVRBSVgicFPAnqYxthI3gT6OfHDzYyOwQcHQEefZ5vgNLWGUQXS3zg3yfbTkLwKGOMGF9lUmcnuBiV5Cdz44hJxmXdG4BDSBqQC67ybjGvy0rejKnCNi0wEvs4P/qOXIUWoNIFdqkTUemScA+qkQTrSBHBu+7mp4E6uyiqDglCQLymiTlNWNeDkp9ILsANIkj9XYeYmOd6AXNfPoX6gASSzf6xddIF1oKa6mEnb57KXJFACEsEiP1wpr/m4TddDUQm97ajObCs9JA15cAz0VB8z3VcGSU/f06s8gGNMCXCLppVCV1OSYLgEboGJNKV2R2Ct74xHwDwZ/C7uHCk2PkWBJx1fPoEPgNdLJcZ1BM4Yqj6b9gBwwIhCKRlnG/8DxXKqSbBPCwnUgDUuLHKTZXHomVkqkAdj1TNkmKUHsMMP5smmS4XLq0b0SGKVbm8rSSfL6NfciwRDHkz4F6nIMwkwZZbms+aQtAfMK+DMzBLad//YOAAqQLJhSB61fblCoAimMrzKYbxRdNlgYlzfDE0Sq+TMttJ8yjf0wY2PUjV4H4Cym2KnHMCMDhLAK+57zvxXyqc1SjYX+cE3WoxdQJo0IOMmI0nD/QXgujOCqnfg3B33moA6YGSB3dwlSFcYbG4FW0IS+A0SjUVd2YPPQCwollrnKDIwJDACDhiiJIF2SamZLws+1KD0rhqq8aJHzPwwjoCWWoehyBJsEvSbR1WjB2wBwlzWSC93EAmNsAoN4AkwJjl2TfD7l91Ot3gX3kwaBgl0GUtAsCbPIONFDiM7wxS6cZMcF3129l+/S0MY7LSZkhfYCjBVVgm5BxngqsxvjIkPQLffbmIk34Dfyep/ShpEyBJ2MmGTL1e5SCuQm2F1bZIAA0487rXjWQBCPgcNqhFVU5rB7q1qUlXwKGWfID9XGbgqIYEOY1nvrS9YBDaBnlZ0ZO2WEhXcydBWZeqK7xsgeuwrgDDYAwbcY5rARrAjO+4J3MhhlFTAlDpNmTAaQvW2IcntGdJXGOJXjBFpMFAmeNLhfuDMT5eFoErTOQMuyGXf+bQ62chnTsP7Is5wRhJIgzP3DVZJ0p0+O5+vIPlOug8lCcyNN9ImioprNrwC9mTK9gxcmIHsomyrSsd9vxu/Ca4AxonUmZ8Cy/xJEKqEBNYvVCOGkMDEIdAnH8wOzUhilSyZC6lx7e/zDQz1D4N7mRFVoBC4k9fyqydUYUEeg3TJYPX9CuCQWAW/9dwfydEIvrsgx/V6dOsB4w5QzolLr6Ri8GoFf6+T69NeO0Hgeg+UgSWGYCYoFyMJxG8ZNRKoAqsMfpIk8De+RNW7w0QAWJI/jHcSqPi5G501he7DizHjPn+8HvQBOfwf9NXWH6rRAjZ8AbJghVEiF+f1HbgEFMllKxYk8AbLDCD//H3oRRzmcenVn78PIfkDPAIz7VAaWCJUwYCb7EUqoQqmvt0kR/evt2vBHTrXA4HGF1XFoDJbTmuI5FwhjbL7xhkgmayQZnuxHeABDX+jRypDpPtllY6tbhhcCTDgyLiTZ6K8+SH8fmnefa53MK+llR9BNHeyGIQExi+Ss47Vqsdeouo2COYOlz9/L3KXBM4gE7C+Qfcypd42gkmOO37ibQAJ/I3idPizxzv6/GY3FEmO++QbkF81xKZagtP0pDp18onkXe5SMSjJN7dVkwlfJCMduO5Wi/ziAQQeqYa7YHwwHMl1Ru1mg+vgpyQVYE+uF/wXlCbhI9lEiCWlTfKlEUvSgCYB8qIhAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAAALdwEA6AMAAAt3AQDoAwAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAFAAAAADoAQAAQAAAFAAAAAAAAAA",
    ry = "/assets/solana-c-BLioMopL.png",
    cT = "/assets/Ellipse%209-JNjotA1M.png",
    dT = "/assets/Ellipse%207-SoEACCW_.png",
    fT = () => v.jsx("div", {
        className: "max-w-[400px] md:max-w-[1100px] mx-auto bg-cover   bg-light",
        children: v.jsxs("div", {
            className: "py-10 md:py-[82px] ",
            children: [v.jsx(lT.div, {
                variants: bw("up", .2),
                initial: "hidden",
                whileInView: "show",
                viewport: {
                    once: !1,
                    amount: .7
                },
                id: "bluey",
                className: "max-w-[300px] md:max-w-[970px] lg:max-w-[970px] mx-auto  ",
                children: v.jsxs("div", {
                    className: " ",
                    children: [v.jsxs("h1", {
                        className: "text-center font-normal text-xl md:text-[57px] text-white rubik-font pb-0 md:pb-12]",
                        children: ["What is ", v.jsx("span", {
                            className: "text-[#003084]",
                            children: " BLUEY?"
                        })]
                    }), v.jsx("div", {
                        className: "max-w-[290px] md:max-w-3xl mx-auto pt-1 md:pt-6",
                        children: v.jsx("p", {
                            className: "text-center text-base md:text-base font-normal text-[#fff] poppins-font ",
                            children: "BLUEY is more than just a token; it’s the story of a time traveler on a quest to find his true self, blending imagination with innovation. As $BLUEY ventures through the ever-evolving timelines of blockchain technology, it invites the community to join in a journey of discovery, growth, and exploration. With a unique narrative-driven approach, BLUEY’s roadmap unfolds like chapters in a saga, offering utility, gamified experiences, and opportunities for engagement. Whether you are here for the story, the community, or the technology, $BLUEY promises an adventure like no other—one that’s about finding purpose and unlocking potential in both crypto and beyond."
                        })
                    })]
                })
            }), v.jsxs("div", {
                className: "mt-16 md:mt-24 flex  justify-center gap-5 md:gap-16  relative z-10",
                children: [v.jsxs("div", {
                    className: "",
                    children: [v.jsx("div", {
                        className: "h-10 md:h-20",
                        children: " "
                    }), v.jsx("a", {
                        href: "",
                        children: v.jsx("button", {
                            className: "btn btn-sm md:btn-lg btn-circle",
                            children: v.jsx("img", {
                                className: "h-[17px] md:h-[30px] w-[17px] md:w-[30px] ",
                                src: ey,
                                alt: ""
                            })
                        })
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("div", {
                        className: " h-16 md:h-32 ",
                        children: " "
                    }), v.jsx("a", {
                        href: "https://dexscreener.com/solana/BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump?1731933193225",
                        children: v.jsx("button", {
                            className: "btn  btn-sm md:btn-lg btn-circle",
                            children: v.jsx("img", {
                                className: "h-[17px] md:h-[30px] w-[17px] md:w-[30px] bg-[#030B18] rounded-full p-0 md:p-1",
                                src: hc,
                                alt: ""
                            })
                        })
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("div", {
                        className: "h-5 md:h-10",
                        children: " "
                    }), v.jsx("a", {
                        href: "https://x.com/itsblueyonsol",
                        children: v.jsx("button", {
                            className: "btn  btn-sm md:btn-lg btn-circle",
                            children: v.jsx(fc, {
                                className: "text-base md:text-[26px] font-bold text-[#030B18]"
                            })
                        })
                    })]
                }), v.jsx("div", {
                    className: "-mt-5 md:-mt-10",
                    children: v.jsx("a", {
                        href: "https://raydium.io/swap/?inputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&outputMint=BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump",
                        children: v.jsx("button", {
                            className: "btn  btn-sm md:btn-lg btn-circle",
                            children: v.jsx("img", {
                                className: "h-[17px] md:h-[30px] w-[17px] md:w-[30px]",
                                src: ty,
                                alt: ""
                            })
                        })
                    })
                }), v.jsxs("div", {
                    children: [v.jsx("div", {
                        className: "h-5 md:h-10",
                        children: " "
                    }), v.jsx("a", {
                        href: "https://t.me/BlueyValley",
                        children: v.jsx("button", {
                            className: "btn  btn-sm md:btn-lg btn-circle",
                            children: v.jsx(dc, {
                                className: "text-base md:text-[26px] font-bold text-[#030B18]"
                            })
                        })
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("div", {
                        className: "h-16 md:h-32",
                        children: " "
                    }), v.jsxs("a", {
                        href: "https://www.dextools.io/app/en/solana/pair-explorer/8Vwe1bxMLy8SffPTfb3D6eLPpmTmzCiRbZayCDM51pts",
                        children: [" ", v.jsx("button", {
                            className: "btn  btn-sm md:btn-lg btn-circle",
                            children: v.jsx("img", {
                                className: "h-[17px] md:h-[25px] w-[17px] md:w-[25px]",
                                src: ny,
                                alt: ""
                            })
                        })]
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("div", {
                        className: "h-10 md:h-20",
                        children: " "
                    }), v.jsx("a", {
                        href: "",
                        children: v.jsx("button", {
                            className: "btn  btn-sm md:btn-lg btn-circle",
                            children: v.jsx("img", {
                                className: "h-[17px] md:h-[25px] w-[17px] md:w-[25px]",
                                src: ry,
                                alt: ""
                            })
                        })
                    })]
                })]
            }), v.jsx("div", {
                className: "flex justify-center items-start pb-20 md:pb-28",
                children: v.jsx("div", {
                    className: "bg-cover curve-image -mt-16 md:-mt-32",
                    style: {
                        backgroundImage: `url(${uT})`
                    },
                    children: v.jsxs("div", {
                        className: "-mt-[136px] md:mt-0",
                        children: [v.jsx("img", {
                            className: "circle2 border-spacing-3  mt-[116px] md:-mt-20 rounded-full     mx-[43px] w-[200px] md:w-[600px] h-[200px] md:h-[600px]",
                            src: dT,
                            alt: ""
                        }), v.jsx("img", {
                            className: "big-circle rounded-full  absolute ml-[70px] md:ml-28 -mt-[180px] md:-mt-[530px]  mx-[43px] w-[150px] md:w-[462px] h-[150px] md:h-[462px]",
                            src: cT,
                            alt: ""
                        })]
                    })
                })
            })]
        })
    }),
    hT = "/assets/Final%20pfp%20for%20rizzy-01-Cp-8WGjL.png",
    pT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBIAAAAVCAYAAAD7Es1tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5MSURBVHgB7V1LjxzFHf9XT/fs9uyuDX6hBAMDOAKRx8VKzj4jcuQbJMdIQZECUiLFQkoUkiiPQ275BBzzCXyPfU6ADSxgDrBmEevd6Z1XV/71fkzPeBY7ik1+P2h3dVX9n1U/W1Xq6iECAAAAAAAAAAAAAAB4UJBSiutSFlwQ+gIAAAAAAAAAAAAA4GsDadf70l70VeE2EK5KWfFDX92vSVm+KmWP1MYCAAAAAAAAAAAAAACPJCT5DYSeWuurNf9LvPbn51LtBehNhbWVuTcPbt6sviHlgL744jE6PLywI+V5rn+Mr4Eygs0EAAAAAAAAAAAAAHg0odb+V3ndT5/wuv/g4OwZKc+Ruc4Mpdwku+7v2kwQuSJb0eNrk6+tjfF4Z962F2dlKalt97c2No6OiY6vEZ3cIGpZosV5BwAAAAAAAAAAAAB4RMBr/2u87r9BtEFHR1tUlttVr3dBNU3n1R3eDTgis+4f37jnut/tSEi5TSP5JI3l93oz+YoYT3bFZPoezWavcNt3+XqSrx2+Kv/9hEjHMt0r72sEunZ97s8y/+4lexp/lsWzyva6MZ3m+xTr9PuqcZ8mj+voeBDycd5X5f5+sErPacZwVf1p2tadD10yXfzrsrOOX6cZyy67q/qfVu+yOvB/vT7g//o212m73/mxqg38X10P/p++D/i/vs112u53fqxqA/9X14P/p+8D/q9vc522+50fq9oeMP+vmzW8ettgeyDlN2k8/g6v9V9Wa3677n+Z275Nqk3tDZi+iQ+poVu3yotXr27sN83ZqiyfmEr5LUHityTE0HbfKwp6o2jb3elstk91fZcrJ0o6ulRnuccFJbQXbOg3Ii7z823bL+8ft3GZbNnrcf0iv6WVUbIaZdpH0vLygg2FGdcrHbPMF6vXydAS3ZTXXb7N+i6nfg+trg45Lx/5Fsed+O9ycI963xbl1+Waor6xvM/rMMpn7DeX/dhGOaErvFu1a/z3tqgjhg69FPnl43bjYO0l4xTXOzi/nK/DNNdxbpIcU4euPCeRPDnfShvjXqajI7+5j05/nONl6LS/l/GgjOzsxXMwHYsFP+L2rI58TDyPuVLbUZW3F+eXi1MMwX/wH/wH/wn8B/8TWep4TtrA/06A/+B/rhv8B/8fBP/FE0TFp0R9apodXvefb4vi+bal39twlNk9Kec/532A92pe92/X9Zf7RCfc0HJd6xwke6RBffNgk0ajszQYXOpN5i+2gt7i1qdT8/Kjoih+MZfyAyrLg80TxubmLO6g/2xYd939XHO5qbme7zXfG66so8D5WdTmbuSNbEiE08UdrHxCSqWrsc+2THWjO0urU7AP1NTR4Bhd1ET+Ot8sRIcvIosv+NA0bLem3O9I54LP6rlZ3i/vb9pcHNa+y5u+Nza22uY8FU7+otH5sH2tLXI50jlsfBv58aM01x05EhQlkIJz6Rywdps4h/F88ekL/jo7dWQn9omDlw03Ov/8PDDysjHyRe3sOvfyeF2bnRs16f6Fn7fW5yb462OMwla2WzLz2ukmH4OLP/jXOYY2XmriHAd5ajK7UR6jeWn0NfXSeU7RUCV5zvtEsS3+Awb+g//gP0U5Av/Bf/Af/Af/wf9UlsB/8P9/xf+m2Kzr4mQy2aR58XivJ57ldf9v2MQziR4SH9rNhHeoqj7likO+xqykFUIkrzn0+drm6xLN5y+JeftHFso2ESyk/Fj2ijdpJm9Tj474eUomUcRGiKZTfa/4Ps1EuVVMq0qqPpWdEFNTb/pG8hqmnynG7TY6JV+5vrb/NCKdbRFT9RzptHrifqZPZEPpdb6pvq5d1/NzZX0nE4+gEIfxK7frbHfB9tHyRreqa7lcaDvGRkFOX4ghyKb5FpXNs/aHy5WL1/rvc6f6hLw6372cjk3djQ1dnkZxJHHGfsXjZeaDGvtWxVFZfWTqZBX5UHWMl58fUXwUj10Yg3iMyJUp5MblwtizMU3TfwyVTpenaIjsfMjy7HJaRTFPXS6dregf2myu63GK7WhdZh6kOYzsVdQBG880nxuZnogTbu6mOnJexDGosrEhaLk8+A/+E2XjCf5rgP/g/yLAf/A/mgvgP/gP/oP/SQ4jew+M/+pp1lRUFFt8XRZU/IoWXh5wnssPi17xWm8+/9dkPP6MdnbUdxMm5DYS1BmJ6+ojC01zjo29IFr5N258llZC3CYh/yGknBAV/o0EtZtQ6HvL9yKqCQh91N31vLdEKueCYzlhagtbG+t1T/f6iYnYutkR4SfWTaKwz8Fm63W29tnq176Qt5dGRJn3IYo28z33TPfTvuR5SWXi6OOo4tw4H+OMZB5pQqVjQ1FsVtb60y7Lrc0dRZ542aw99TiNsV2wkGefOu230Z8+A3aurDO3gu7lHtBK+yHeRT9bneXgy2lm/OJsTDWzt/6vxCLT1sUw50vwNfHYj1PqUYKOsQT/wX/wH/wH/8F/54mXzdrBf/Af/Af/83KIAPz/L/Jf9SxaIfq8HfB9duwpWgn5vhTix1SW7/DDF6SOOLgPL74qZe/G/n59dPHi4yez+V955+GHBAAAAAAAAAAAAADA/zWkoL9vluVPTogOrhONrvtfcFBfbTTfR3iM+n33RsJzq9WJj9UbCbKVk0KoNxLMXkhh961CmfeBJN9FIe3ui64jX1Ywz3bfxLand9dm9HIt6yystKtTfVuWYH8i/ZEu7YfLhgoh2KVIP3k/HKx9lm874kjkrf04lnZBn4s59o8W8md0Bizu3C3xwepJxiBus+OR5tZbSeRSW8FvE+diLGZcusY3lLtyE8e+mCerzevuii3Yi+dDaju2v7CX58eeaNV4pXpoId60HPuW+mURdg9DnJSNe8QfXSY3xzN/El+CrhBPPlfSnHa1+5xavqQcsb5aXoH/4D/4D/4bHeA/+A/+g//gP/gP/j+0/Ke2KKgopJAbrPwHvO6/TCsh3ue+P6Lp9F2q6/SNBHW04W2i8jbR9uFkcqlHvRfZwJ/CrzUsKPuIHXtzLngzgeioUt9ImKpzIvrMkHDpsWeI3LMWJFJnY6ZZnU8pWTn9rM/xVAPV35+bsXfyfcxpEmHPnUhzDsfIxA6rP/QZFtum5CqaOp3xuaZwlib4ZeStjdzvILNQinNBzhaFtlh/iN+cbZHWR11nY3bx5vopyndAdu6JbMzWfpTDZFycT1Qt2g0T15whk8vOo1U+vsrmO+SC0jy4s3I07chFVI6h/a28P8qPqYshP08V/DPnscL5I3OmyPveMXe9rWhcRTSOXDZ5qxbzKM3oubLLpfPVoeqYq8lYmPNa5CMz+txZNT3G5OcJUXbmcDFfOSf9WUWtZToS9ixYPAeyOa91+TlszxDaOQv+RyXwH/wH/8F/8B/8B//Bf/Af/H/Y+C/KqurTbLYlpbjMmwzXadk3EvSvN9DPiHr/3Bnf3b+7s3NXm4neSBDXuPWG+k4C0RmaTC7y4wtC0O+4cZjokvJD3tr7ZVkU78/K8oDUdyGbZqZ++oEGA99LWR2MSI5oJKJ63TZQgYy4hQb8H98HA1XHVdyXQl8Wk9wsRrZqMNJ9VUfdqO+qvxb2MtqG0jUYDEx16Kdtcxu5NqdzoGRsgp0v3EdaeRWDHJh70GmMSdse7JBvM3D2jIzpb5w1xInqtU2rz/qkR9D6pDOm9GtLVqfXbVELIZq6luQmy8iPQfqX4CgkzekPyTR354+vNTlRzzYO0yKDTdLjHoZFhPlgxtwPlh0TFx85H3wuTR+XypH1X43DKOpjx9LH6sc9zr3TZkMzoi6fFOfUzQM9NyI/g29k5qWLYxCN5cjO71GYF+l4s5ya135ehfy7cQ99XCzJuNiSsZfrcHmwuSbDsIHz12YxkR3kFEr44uQ0T8Pc9jxKxgr8J/Af/Af/wX/wH/wH/8F/l0/wH/x/KPnP40Z1XfYnk3qif7Whfa4l8Wuuf4YS8CZCQa9T277LGxif8gbBXfsTkHP/sUUN88sNJalfbxiNzvJu06VpUTwv5u0f/JsJUu7xJsIb/Pzvzfl8/2RzU/8EBJm3JfwkvcLlXdK/KaqxS924YtuuZH2Wya3Qpyfr0E4A9zuwex27WdaW35EZhn7CPqvf1pTOp2GmJ/PZx7rKRi5Dkf7Y/6jOx7NnfbtidS2xtaxODCn8Nqr1tUuXi2NhB9D5kN+7Yol96Yov1uf6WD9ynzrjXWeeXInKWV5EHH80P8SQzJjTYt4pGxPqGu9c9+6S+LvGt+zWl8jllcN0DBbqO/yWca7iHM2y+U9L5HN/uuad6wP+g//gP/gP/oP/cXyxPtfH+gH+dwP8X6OewP9ldWJI4H8eI/gfYPOgTjn0qWnOUFlfIDm5wjsMb4UTCeIDKeevk+jvUkWfccWXV3ndf0uJ8yaCMxJgNhN6pL6XQLTTn9D5SW/+tGjlX7iN/29f629sfDQhOjh3cHD47Llzza2wibAQMAAAAAAAAAAAAAAADw+u8z7ADd5MuHHnTk0XLuzQZHKBer2neN3/Z7Wsl237U1KfMej371wkOtznTQSp9yBIvdDQsZFAai9BCmHeTFDHHLZoPN6uiuKCaiuq6s74+PiYtraO+fGEHZirLzYSAAAAAAAAAAAAAACPBNy6nzcKNnijYJvGvPYvphdV00ZV7ZfHx6PB1tbRvjmB4N9EWKVR6G8mSFkOpdykzz8/Q4fy/I6U589JeYY++WRw9ebNyr69AAAAAAAAAAAAAADAowYpC7u2r9VaX6356fDwPD+fucx1ak9ArftPd/RA/SQkX1a4b69K/cKDxCYCAAAAAAAAAAAAADzSUOt7evvtnlrrq+uquas9gN7pNxEy+I0DbCAAAAAAAAAAAAAAwNcP9nQCPn4IAAAAAAAAAAAAAMADxX8A2YpTqpAxe7kAAAAASUVORK5CYII=",
    mT = () => v.jsx("div", {
        className: "py-10 md:py-[82px] footer-image max-w-[1100px] mx-auto",
        style: {
            backgroundImage: `url(${pT})`
        },
        children: v.jsxs("div", {
            children: [v.jsxs("div", {
                className: "flex justify-around items-center pt-2 md:pt-4",
                children: [v.jsx("div", {
                    children: v.jsx("img", {
                        className: "w-12 md:w-[72px]",
                        src: hT,
                        alt: ""
                    })
                }), v.jsxs("div", {
                    className: "-mr-4 md:-mr-0 flex justify-center items-center space-x-2 md:space-x-6",
                    children: [v.jsx("a", {
                        href: "https://t.me/BlueyValley",
                        children: v.jsx("button", {
                            className: "btn btn-sm md:btn-md border-[2px] border-black btn-circle",
                            children: v.jsx(dc, {
                                className: "text-sm md:text-xl font-bold text-[#030B18]"
                            })
                        })
                    }), v.jsx("a", {
                        href: "https://x.com/itsblueyonsol",
                        children: v.jsx("button", {
                            className: "btn btn-sm md:btn-md border-[2px] border-black btn-circle",
                            children: v.jsx(fc, {
                                className: "text-sm md:text-xl font-bold text-[#030B18]"
                            })
                        })
                    }), v.jsx("a", {
                        href: "https://www.dextools.io/app/en/solana/pair-explorer/8Vwe1bxMLy8SffPTfb3D6eLPpmTmzCiRbZayCDM51pts",
                        children: v.jsx("button", {
                            className: "btn btn-sm md:btn-md border-[2px] border-black btn-circle",
                            children: v.jsx("img", {
                                className: " h-[12px] md:h-[20px] w-[12px] md:w-[20px]",
                                src: ny,
                                alt: ""
                            })
                        })
                    })]
                }), v.jsx("div", {
                    children: v.jsx("p", {
                        className: " text-white text-[10px] md:text-base font-normal poppins-font",
                        children: "Privacy policy"
                    })
                })]
            }), v.jsx("div", {
                className: "footer px-3 md:px-10 pt-5 md:pt-8 pb-4 md:pb-12  text-white test-sm md:text-base font-normal flex justify-center poppins-font ",
                children: v.jsx("p", {
                    className: "",
                    children: "2024 by BLUEY. All rights reserved!"
                })
            })]
        })
    }),
    gT = "/assets/Group%2063-CBFuEJY3.png",
    vT = () => v.jsxs("section", {
        id: "joinUs",
        className: "max-w-[400px] lg:max-w-[1100px] mx-auto   flex  md:flex-row flex-col-reverse justify-center items-center md:items-end gap-12 md:gap-0   py-10 md:py-[82px] ",
        children: [v.jsxs("div", {
            className: "flex  justify-center mb-5 md:mb-10 items-end ml-0 md:ml-[40px]",
            children: [v.jsxs("div", {
                className: "w-28 md:w-60 h-[400px] md:h-[600px] border-curve-div1 ",
                children: [v.jsx("div", {
                    className: "h-[340px] md:h-[500px] border-small flex justify-center flex-col  mr-4 md:mr-12 items-center",
                    children: v.jsx("p", {
                        className: "curve-p poppins-font text-white font-semibold",
                        children: "Create a Wallet"
                    })
                }), v.jsx("div", {
                    className: "h-32 flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]",
                    children: v.jsx("div", {
                        className: "w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full ",
                        children: v.jsx("div", {
                            className: "-mt-3 md:-mt-6 flex justify-center items-start",
                            children: v.jsx("a", {
                                href: "",
                                children: v.jsx("button", {
                                    className: "btn btn-xs md:btn-md btn-circle",
                                    children: v.jsx("img", {
                                        className: "h-[15px] md:h-[30px] w-[15px] md:w-[30px] ",
                                        src: ey,
                                        alt: ""
                                    })
                                })
                            })
                        })
                    })
                })]
            }), v.jsxs("div", {
                className: "w-28 md:w-60 h-[350px] md:h-[510px] -mx-8 md:-mx-20 border-curve-div2 ",
                children: [v.jsx("div", {
                    className: "h-[290px] md:h-[410px] border-small flex justify-center mr-4 md:mr-12 items-center",
                    children: v.jsx("p", {
                        className: "curve-p poppins-font text-white font-semibold",
                        children: "Get Some Sol"
                    })
                }), v.jsx("div", {
                    className: "h-1/5 flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]",
                    children: v.jsx("div", {
                        className: "w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full ",
                        children: v.jsx("div", {
                            className: "-mt-3 md:-mt-6 flex justify-center items-start",
                            children: v.jsx("a", {
                                href: "",
                                children: v.jsx("button", {
                                    className: "btn btn-xs md:btn-md btn-circle",
                                    children: v.jsx("img", {
                                        className: "h-[15px] md:h-[25px] w-[15px] md:w-[25px] ",
                                        src: ry,
                                        alt: ""
                                    })
                                })
                            })
                        })
                    })
                })]
            }), v.jsxs("div", {
                className: "w-28 md:w-60  h-[290px] md:h-[400px]  border-curve-div3 ",
                children: [v.jsx("div", {
                    className: "h-[230px] md:h-[300px] border-small flex justify-center mr-4 md:mr-12 items-center",
                    children: v.jsx("p", {
                        className: "curve-p poppins-font text-white font-semibold",
                        children: "Go to Raydium"
                    })
                }), v.jsx("div", {
                    className: " flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px]",
                    children: v.jsx("div", {
                        className: "w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full ",
                        children: v.jsx("div", {
                            className: " -mt-3 md:-mt-6 flex justify-center items-start",
                            children: v.jsx("a", {
                                href: "https://raydium.io/swap/?inputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&outputMint=BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump",
                                children: v.jsx("button", {
                                    className: "btn btn-xs md:btn-md btn-circle",
                                    children: v.jsx("img", {
                                        className: "h-[15px] md:h-[30px] w-[15px] md:w-[30px] ",
                                        src: ty,
                                        alt: ""
                                    })
                                })
                            })
                        })
                    })
                })]
            }), v.jsxs("div", {
                className: "w-28 md:w-60 -mx-8 md:-mx-20 h-[240px] md:h-[320px] border-curve-div4  ",
                children: [v.jsx("div", {
                    className: "h-[180px] md:h-[220px] border-small flex justify-center mr-4 md:mr-12 items-center",
                    children: v.jsx("p", {
                        className: "curve-p poppins-font text-white font-semibold",
                        children: "Get Some $Bluey"
                    })
                }), v.jsx("div", {
                    className: "flex justify-center -ml-8 md:-ml-16 -mt-[6px] md:-mt-[5px] ",
                    children: v.jsx("div", {
                        className: "w-10 md:w-16 h-5 md:h-8 absolute bg-[#030B18] border-extra-small rounded-b-full ",
                        children: v.jsx("div", {
                            className: " -mt-3 md:-mt-6 flex justify-center items-start",
                            children: v.jsx("a", {
                                href: "https://dexscreener.com/solana/BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump?1731933193225",
                                children: v.jsx("button", {
                                    className: "btn btn-xs md:btn-md btn-circle",
                                    children: v.jsx("img", {
                                        className: "h-[15px] md:h-[30px] w-[15px] md:w-[30px] bg-black rounded-full p-[2px] md:p-1",
                                        src: hc,
                                        alt: ""
                                    })
                                })
                            })
                        })
                    })
                })]
            })]
        }), v.jsxs("div", {
            className: "flex  flex-col items-center md:items-start   max-w-xl mx-auto",
            children: [v.jsx("h1", {
                className: " absolute rubik-font  -ml-0 md:-ml-60 -mt-[60px] md:-mt-36 text-xl md:text-[57px] text-[#fff] font-normal",
                children: "How to buy $BLUEY"
            }), v.jsx("img", {
                className: "w-[280px] md:w-[370px] h-[280px] md:h-[370px] ",
                src: gT,
                alt: ""
            })]
        })]
    }),
    yT = "/assets/landing%20page%202-01-B_jFMmQQ.jpg",
    xT = () => v.jsxs("div", {
        children: [v.jsx("div", {
            className: " bg-banner ",
            style: {
                backgroundImage: `url(${yT})`
            },
            children: v.jsx(Nw, {})
        }), v.jsx("div", {
            className: "bg-[#030B18]  ",
            children: v.jsxs("div", {
                className: " mx-auto",
                children: [v.jsx("div", {
                    className: "   bg-light",
                    children: v.jsx(fT, {})
                }), v.jsx(vT, {}), v.jsx(Bw, {}), v.jsx(Vw, {}), v.jsx(mT, {})]
            })
        })]
    }),
    wT = dw([{
        path: "/",
        element: v.jsx(Ew, {}),
        children: [{
            path: "/",
            element: v.jsx(xT, {})
        }]
    }]);
cg(document.getElementById("root")).render(v.jsx(k.StrictMode, {
    children: v.jsx(ww, {
        router: wT
    })
}));
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).canvg = {})
}(this, (function (t) {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function r(t, e, r) {
        return t(r = {
            path: e, exports: {}, require: function (t, e) {
                return function () {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == e && r.path)
            }
        }, r.exports), r.exports
    }

    var n = function (t) {
            return t && t.Math == Math && t
        },
        i = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function () {
            return this
        }() || Function("return this")(), a = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }, o = !a((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })), u = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, c = {
            f: s && !u.call({1: 2}, 1) ? function (t) {
                var e = s(this, t);
                return !!e && e.enumerable
            } : u
        }, l = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }, f = {}.toString, h = function (t) {
            return f.call(t).slice(8, -1)
        }, p = "".split, y = a((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == h(t) ? p.call(t, "") : Object(t)
        } : Object, v = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }, g = function (t) {
            return y(v(t))
        }, d = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }, m = function (t, e) {
            if (!d(t)) return t;
            var r, n;
            if (e && "function" == typeof (r = t.toString) && !d(n = r.call(t))) return n;
            if ("function" == typeof (r = t.valueOf) && !d(n = r.call(t))) return n;
            if (!e && "function" == typeof (r = t.toString) && !d(n = r.call(t))) return n;
            throw TypeError("Can't convert object to primitive value")
        }, x = {}.hasOwnProperty, b = function (t, e) {
            return x.call(t, e)
        }, w = i.document, S = d(w) && d(w.createElement), A = function (t) {
            return S ? w.createElement(t) : {}
        }, k = !o && !a((function () {
            return 7 != Object.defineProperty(A("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })), T = Object.getOwnPropertyDescriptor, O = {
            f: o ? T : function (t, e) {
                if (t = g(t), e = m(e, !0), k) try {
                    return T(t, e)
                } catch (t) {
                }
                if (b(t, e)) return l(!c.f.call(t, e), t[e])
            }
        }, P = /#|\.prototype\./, E = function (t, e) {
            var r = M[C(t)];
            return r == R || r != N && ("function" == typeof e ? a(e) : !!e)
        }, C = E.normalize = function (t) {
            return String(t).replace(P, ".").toLowerCase()
        }, M = E.data = {}, N = E.NATIVE = "N", R = E.POLYFILL = "P", _ = E, D = {}, V = function (t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        }, L = function (t, e, r) {
            if (V(t), void 0 === e) return t;
            switch (r) {
                case 0:
                    return function () {
                        return t.call(e)
                    };
                case 1:
                    return function (r) {
                        return t.call(e, r)
                    };
                case 2:
                    return function (r, n) {
                        return t.call(e, r, n)
                    };
                case 3:
                    return function (r, n, i) {
                        return t.call(e, r, n, i)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }, I = function (t) {
            if (!d(t)) throw TypeError(String(t) + " is not an object");
            return t
        }, j = Object.defineProperty, z = {
            f: o ? j : function (t, e, r) {
                if (I(t), e = m(e, !0), I(r), k) try {
                    return j(t, e, r)
                } catch (t) {
                }
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
                return "value" in r && (t[e] = r.value), t
            }
        }, F = o ? function (t, e, r) {
            return z.f(t, e, l(1, r))
        } : function (t, e, r) {
            return t[e] = r, t
        }, B = O.f, U = function (t) {
            var e = function (e, r, n) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, r)
                    }
                    return new t(e, r, n)
                }
                return t.apply(this, arguments)
            };
            return e.prototype = t.prototype, e
        }, H = function (t, e) {
            var r, n, a, o, u, s, c, l, f = t.target, h = t.global, p = t.stat, y = t.proto,
                v = h ? i : p ? i[f] : (i[f] || {}).prototype, g = h ? D : D[f] || (D[f] = {}), d = g.prototype;
            for (a in e) r = !_(h ? a : f + (p ? "." : "#") + a, t.forced) && v && b(v, a), u = g[a], r && (s = t.noTargetGet ? (l = B(v, a)) && l.value : v[a]), o = r && s ? s : e[a], r && typeof u == typeof o || (c = t.bind && r ? L(o, i) : t.wrap && r ? U(o) : y && "function" == typeof o ? L(Function.call, o) : o, (t.sham || o && o.sham || u && u.sham) && F(c, "sham", !0), g[a] = c, y && (b(D, n = f + "Prototype") || F(D, n, {}), D[n][a] = o, t.real && d && !d[a] && F(d, a, o)))
        }, X = Math.ceil, Y = Math.floor, q = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? Y : X)(t)
        }, G = Math.min, Q = function (t) {
            return t > 0 ? G(q(t), 9007199254740991) : 0
        }, W = "__core-js_shared__", $ = i[W] || function (t, e) {
            try {
                F(i, t, e)
            } catch (r) {
                i[t] = e
            }
            return e
        }(W, {}), Z = r((function (t) {
            (t.exports = function (t, e) {
                return $[t] || ($[t] = void 0 !== e ? e : {})
            })("versions", []).push({version: "3.7.0", mode: "pure", copyright: "© 2020 Denis Pushkarev (zloirock.ru)"})
        })), K = 0, J = Math.random(), tt = function (t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++K + J).toString(36)
        }, et = !!Object.getOwnPropertySymbols && !a((function () {
            return !String(Symbol())
        })), rt = et && !Symbol.sham && "symbol" == typeof Symbol.iterator, nt = Z("wks"), it = i.Symbol,
        at = rt ? it : it && it.withoutSetter || tt, ot = function (t) {
            return b(nt, t) || (et && b(it, t) ? nt[t] = it[t] : nt[t] = at("Symbol." + t)), nt[t]
        }, ut = ot("match"), st = function (t) {
            if (function (t) {
                var e;
                return d(t) && (void 0 !== (e = t[ut]) ? !!e : "RegExp" == h(t))
            }(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
        }, ct = ot("match"), lt = function (t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (r) {
                try {
                    return e[ct] = !1, "/./"[t](e)
                } catch (t) {
                }
            }
            return !1
        }, ft = "".startsWith, ht = Math.min, pt = lt("startsWith");
    H({target: "String", proto: !0, forced: !pt}, {
        startsWith: function (t) {
            var e = String(v(this));
            st(t);
            var r = Q(ht(arguments.length > 1 ? arguments[1] : void 0, e.length)), n = String(t);
            return ft ? ft.call(e, n, r) : e.slice(r, r + n.length) === n
        }
    });
    var yt = function (t) {
            return D[t + "Prototype"]
        }, vt = yt("String").startsWith, gt = String.prototype, dt = function (t) {
            var e = t.startsWith;
            return "string" == typeof t || t === gt || t instanceof String && e === gt.startsWith ? vt : e
        }, mt = "\t\n\v\f\r                　\u2028\u2029\ufeff", xt = "[" + mt + "]", bt = RegExp("^" + xt + xt + "*"),
        wt = RegExp(xt + xt + "*$"), St = function (t) {
            return function (e) {
                var r = String(v(e));
                return 1 & t && (r = r.replace(bt, "")), 2 & t && (r = r.replace(wt, "")), r
            }
        }, At = {start: St(1), end: St(2), trim: St(3)}, kt = At.trim, Tt = i.parseFloat,
        Ot = 1 / Tt(mt + "-0") != -1 / 0 ? function (t) {
            var e = kt(String(t)), r = Tt(e);
            return 0 === r && "-" == e.charAt(0) ? -0 : r
        } : Tt;
    H({global: !0, forced: parseFloat != Ot}, {parseFloat: Ot});
    var Pt, Et, Ct = D.parseFloat, Mt = function (t) {
            return Object(v(t))
        }, Nt = Array.isArray || function (t) {
            return "Array" == h(t)
        }, Rt = ot("species"), _t = function (t, e) {
            var r;
            return Nt(t) && ("function" != typeof (r = t.constructor) || r !== Array && !Nt(r.prototype) ? d(r) && null === (r = r[Rt]) && (r = void 0) : r = void 0), new (void 0 === r ? Array : r)(0 === e ? 0 : e)
        }, Dt = [].push, Vt = function (t) {
            var e = 1 == t, r = 2 == t, n = 3 == t, i = 4 == t, a = 6 == t, o = 5 == t || a;
            return function (u, s, c, l) {
                for (var f, h, p = Mt(u), v = y(p), g = L(s, c, 3), d = Q(v.length), m = 0, x = l || _t, b = e ? x(u, d) : r ? x(u, 0) : void 0; d > m; m++) if ((o || m in v) && (h = g(f = v[m], m, p), t)) if (e) b[m] = h; else if (h) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return m;
                    case 2:
                        Dt.call(b, f)
                } else if (i) return !1;
                return a ? -1 : n || i ? i : b
            }
        }, Lt = {forEach: Vt(0), map: Vt(1), filter: Vt(2), some: Vt(3), every: Vt(4), find: Vt(5), findIndex: Vt(6)},
        It = function (t) {
            return "function" == typeof t ? t : void 0
        }, jt = function (t, e) {
            return arguments.length < 2 ? It(D[t]) || It(i[t]) : D[t] && D[t][e] || i[t] && i[t][e]
        }, zt = jt("navigator", "userAgent") || "", Ft = i.process, Bt = Ft && Ft.versions, Ut = Bt && Bt.v8;
    Ut ? Et = (Pt = Ut.split("."))[0] + Pt[1] : zt && (!(Pt = zt.match(/Edge\/(\d+)/)) || Pt[1] >= 74) && (Pt = zt.match(/Chrome\/(\d+)/)) && (Et = Pt[1]);
    var Ht = Et && +Et, Xt = ot("species"), Yt = function (t) {
        return Ht >= 51 || !a((function () {
            var e = [];
            return (e.constructor = {})[Xt] = function () {
                return {foo: 1}
            }, 1 !== e[t](Boolean).foo
        }))
    }, qt = Object.defineProperty, Gt = {}, Qt = function (t) {
        throw t
    }, Wt = function (t, e) {
        if (b(Gt, t)) return Gt[t];
        e || (e = {});
        var r = [][t], n = !!b(e, "ACCESSORS") && e.ACCESSORS, i = b(e, 0) ? e[0] : Qt, u = b(e, 1) ? e[1] : void 0;
        return Gt[t] = !!r && !a((function () {
            if (n && !o) return !0;
            var t = {length: -1};
            n ? qt(t, 1, {enumerable: !0, get: Qt}) : t[1] = 1, r.call(t, i, u)
        }))
    }, $t = Lt.map, Zt = Yt("map"), Kt = Wt("map");
    H({target: "Array", proto: !0, forced: !Zt || !Kt}, {
        map: function (t) {
            return $t(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Jt = yt("Array").map, te = Array.prototype, ee = function (t) {
        var e = t.map;
        return t === te || t instanceof Array && e === te.map ? Jt : e
    };

    function re(t) {
        return t.replace(/(?!\u3000)\s+/gm, " ")
    }

    function ne(t) {
        return t.replace(/^[\n \t]+/, "")
    }

    function ie(t) {
        return t.replace(/[\n \t]+$/, "")
    }

    function ae(t) {
        var e = (t || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
        return ee(e).call(e, Ct)
    }

    var oe = /^[A-Z-]+$/;

    function ue(t) {
        return oe.test(t) ? t.toLowerCase() : t
    }

    function se(t) {
        var e = t.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
        return e[2] || e[3] || e[4]
    }

    function ce(t) {
        if (!dt(t).call(t, "rgb")) return t;
        var e = 3;
        return t.replace(/\d+(\.\d+)?/g, (function (t, r) {
            return e-- && r ? String(Math.round(Ct(t))) : t
        }))
    }

    H({target: "Array", stat: !0}, {isArray: Nt});
    var le = D.Array.isArray, fe = le;
    var he = function (t) {
        if (fe(t)) return t
    }, pe = {}, ye = Function.toString;
    "function" != typeof $.inspectSource && ($.inspectSource = function (t) {
        return ye.call(t)
    });
    var ve, ge, de, me = $.inspectSource, xe = i.WeakMap, be = "function" == typeof xe && /native code/.test(me(xe)),
        we = Z("keys"), Se = function (t) {
            return we[t] || (we[t] = tt(t))
        }, Ae = {}, ke = i.WeakMap;
    if (be) {
        var Te = $.state || ($.state = new ke), Oe = Te.get, Pe = Te.has, Ee = Te.set;
        ve = function (t, e) {
            return e.facade = t, Ee.call(Te, t, e), e
        }, ge = function (t) {
            return Oe.call(Te, t) || {}
        }, de = function (t) {
            return Pe.call(Te, t)
        }
    } else {
        var Ce = Se("state");
        Ae[Ce] = !0, ve = function (t, e) {
            return e.facade = t, F(t, Ce, e), e
        }, ge = function (t) {
            return b(t, Ce) ? t[Ce] : {}
        }, de = function (t) {
            return b(t, Ce)
        }
    }
    var Me, Ne, Re, _e = {
        set: ve, get: ge, has: de, enforce: function (t) {
            return de(t) ? ge(t) : ve(t, {})
        }, getterFor: function (t) {
            return function (e) {
                var r;
                if (!d(e) || (r = ge(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return r
            }
        }
    }, De = !a((function () {
        function t() {
        }

        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })), Ve = Se("IE_PROTO"), Le = Object.prototype, Ie = De ? Object.getPrototypeOf : function (t) {
        return t = Mt(t), b(t, Ve) ? t[Ve] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Le : null
    }, je = (ot("iterator"), !1);
    [].keys && ("next" in (Re = [].keys()) ? (Ne = Ie(Ie(Re))) !== Object.prototype && (Me = Ne) : je = !0), null == Me && (Me = {});
    var ze, Fe = {IteratorPrototype: Me, BUGGY_SAFARI_ITERATORS: je}, Be = Math.max, Ue = Math.min,
        He = function (t, e) {
            var r = q(t);
            return r < 0 ? Be(r + e, 0) : Ue(r, e)
        }, Xe = function (t) {
            return function (e, r, n) {
                var i, a = g(e), o = Q(a.length), u = He(n, o);
                if (t && r != r) {
                    for (; o > u;) if ((i = a[u++]) != i) return !0
                } else for (; o > u; u++) if ((t || u in a) && a[u] === r) return t || u || 0;
                return !t && -1
            }
        }, Ye = {includes: Xe(!0), indexOf: Xe(!1)}, qe = Ye.indexOf, Ge = function (t, e) {
            var r, n = g(t), i = 0, a = [];
            for (r in n) !b(Ae, r) && b(n, r) && a.push(r);
            for (; e.length > i;) b(n, r = e[i++]) && (~qe(a, r) || a.push(r));
            return a
        },
        Qe = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        We = Object.keys || function (t) {
            return Ge(t, Qe)
        }, $e = o ? Object.defineProperties : function (t, e) {
            I(t);
            for (var r, n = We(e), i = n.length, a = 0; i > a;) z.f(t, r = n[a++], e[r]);
            return t
        }, Ze = jt("document", "documentElement"), Ke = Se("IE_PROTO"), Je = function () {
        }, tr = function (t) {
            return "<script>" + t + "</" + "script>"
        }, er = function () {
            try {
                ze = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {
            }
            var t, e;
            er = ze ? function (t) {
                t.write(tr("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(ze) : ((e = A("iframe")).style.display = "none", Ze.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(tr("document.F=Object")), t.close(), t.F);
            for (var r = Qe.length; r--;) delete er.prototype[Qe[r]];
            return er()
        };
    Ae[Ke] = !0;
    var rr = Object.create || function (t, e) {
        var r;
        return null !== t ? (Je.prototype = I(t), r = new Je, Je.prototype = null, r[Ke] = t) : r = er(), void 0 === e ? r : $e(r, e)
    }, nr = {};
    nr[ot("toStringTag")] = "z";
    var ir = "[object z]" === String(nr), ar = ot("toStringTag"), or = "Arguments" == h(function () {
            return arguments
        }()), ur = ir ? h : function (t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
                try {
                    return t[e]
                } catch (t) {
                }
            }(e = Object(t), ar)) ? r : or ? h(e) : "Object" == (n = h(e)) && "function" == typeof e.callee ? "Arguments" : n
        }, sr = ir ? {}.toString : function () {
            return "[object " + ur(this) + "]"
        }, cr = z.f, lr = ot("toStringTag"), fr = function (t, e, r, n) {
            if (t) {
                var i = r ? t : t.prototype;
                b(i, lr) || cr(i, lr, {configurable: !0, value: e}), n && !ir && F(i, "toString", sr)
            }
        }, hr = Fe.IteratorPrototype, pr = function () {
            return this
        }, yr = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1, r = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
            } catch (t) {
            }
            return function (r, n) {
                return I(r), function (t) {
                    if (!d(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                }(n), e ? t.call(r, n) : r.__proto__ = n, r
            }
        }() : void 0), vr = function (t, e, r, n) {
            n && n.enumerable ? t[e] = r : F(t, e, r)
        }, gr = Fe.IteratorPrototype, dr = Fe.BUGGY_SAFARI_ITERATORS, mr = ot("iterator"), xr = "keys", br = "values",
        wr = "entries", Sr = function () {
            return this
        }, Ar = function (t, e, r, n, i, a, o) {
            !function (t, e, r) {
                var n = e + " Iterator";
                t.prototype = rr(hr, {next: l(1, r)}), fr(t, n, !1, !0), pe[n] = pr
            }(r, e, n);
            var u, s, c, f = function (t) {
                    if (t === i && g) return g;
                    if (!dr && t in y) return y[t];
                    switch (t) {
                        case xr:
                        case br:
                        case wr:
                            return function () {
                                return new r(this, t)
                            }
                    }
                    return function () {
                        return new r(this)
                    }
                }, h = e + " Iterator", p = !1, y = t.prototype, v = y[mr] || y["@@iterator"] || i && y[i],
                g = !dr && v || f(i), d = "Array" == e && y.entries || v;
            if (d && (u = Ie(d.call(new t)), gr !== Object.prototype && u.next && (fr(u, h, !0, !0), pe[h] = Sr)), i == br && v && v.name !== br && (p = !0, g = function () {
                return v.call(this)
            }), o && y[mr] !== g && F(y, mr, g), pe[e] = g, i) if (s = {
                values: f(br),
                keys: a ? g : f(xr),
                entries: f(wr)
            }, o) for (c in s) (dr || p || !(c in y)) && vr(y, c, s[c]); else H({target: e, proto: !0, forced: dr || p}, s);
            return s
        }, kr = "Array Iterator", Tr = _e.set, Or = _e.getterFor(kr);
    Ar(Array, "Array", (function (t, e) {
        Tr(this, {type: kr, target: g(t), index: 0, kind: e})
    }), (function () {
        var t = Or(this), e = t.target, r = t.kind, n = t.index++;
        return !e || n >= e.length ? (t.target = void 0, {value: void 0, done: !0}) : "keys" == r ? {
            value: n,
            done: !1
        } : "values" == r ? {value: e[n], done: !1} : {value: [n, e[n]], done: !1}
    }), "values");
    pe.Arguments = pe.Array;
    var Pr = ot("toStringTag");
    for (var Er in {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }) {
        var Cr = i[Er], Mr = Cr && Cr.prototype;
        Mr && ur(Mr) !== Pr && F(Mr, Pr, Er), pe[Er] = pe.Array
    }
    var Nr = function (t) {
        return function (e, r) {
            var n, i, a = String(v(e)), o = q(r), u = a.length;
            return o < 0 || o >= u ? t ? "" : void 0 : (n = a.charCodeAt(o)) < 55296 || n > 56319 || o + 1 === u || (i = a.charCodeAt(o + 1)) < 56320 || i > 57343 ? t ? a.charAt(o) : n : t ? a.slice(o, o + 2) : i - 56320 + (n - 55296 << 10) + 65536
        }
    }, Rr = {codeAt: Nr(!1), charAt: Nr(!0)}.charAt, _r = "String Iterator", Dr = _e.set, Vr = _e.getterFor(_r);
    Ar(String, "String", (function (t) {
        Dr(this, {type: _r, string: String(t), index: 0})
    }), (function () {
        var t, e = Vr(this), r = e.string, n = e.index;
        return n >= r.length ? {value: void 0, done: !0} : (t = Rr(r, n), e.index += t.length, {value: t, done: !1})
    }));
    var Lr = ot("iterator"), Ir = function (t) {
            if (null != t) return t[Lr] || t["@@iterator"] || pe[ur(t)]
        }, jr = function (t) {
            var e = Ir(t);
            if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
            return I(e.call(t))
        }, zr = ot("iterator"), Fr = function (t) {
            var e = Object(t);
            return void 0 !== e[zr] || "@@iterator" in e || pe.hasOwnProperty(ur(e))
        }, Br = function (t, e, r) {
            var n = m(e);
            n in t ? z.f(t, n, l(0, r)) : t[n] = r
        }, Ur = ot("isConcatSpreadable"), Hr = 9007199254740991, Xr = "Maximum allowed index exceeded",
        Yr = Ht >= 51 || !a((function () {
            var t = [];
            return t[Ur] = !1, t.concat()[0] !== t
        })), qr = Yt("concat"), Gr = function (t) {
            if (!d(t)) return !1;
            var e = t[Ur];
            return void 0 !== e ? !!e : Nt(t)
        };
    H({target: "Array", proto: !0, forced: !Yr || !qr}, {
        concat: function (t) {
            var e, r, n, i, a, o = Mt(this), u = _t(o, 0), s = 0;
            for (e = -1, n = arguments.length; e < n; e++) if (Gr(a = -1 === e ? o : arguments[e])) {
                if (s + (i = Q(a.length)) > Hr) throw TypeError(Xr);
                for (r = 0; r < i; r++, s++) r in a && Br(u, s, a[r])
            } else {
                if (s >= Hr) throw TypeError(Xr);
                Br(u, s++, a)
            }
            return u.length = s, u
        }
    });
    var Qr = Qe.concat("length", "prototype"), Wr = {
            f: Object.getOwnPropertyNames || function (t) {
                return Ge(t, Qr)
            }
        }, $r = Wr.f, Zr = {}.toString,
        Kr = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Jr = {
            f: function (t) {
                return Kr && "[object Window]" == Zr.call(t) ? function (t) {
                    try {
                        return $r(t)
                    } catch (t) {
                        return Kr.slice()
                    }
                }(t) : $r(g(t))
            }
        }, tn = {f: Object.getOwnPropertySymbols}, en = {f: ot}, rn = z.f, nn = function (t) {
            var e = D.Symbol || (D.Symbol = {});
            b(e, t) || rn(e, t, {value: en.f(t)})
        }, an = Lt.forEach, on = Se("hidden"), un = "Symbol", sn = ot("toPrimitive"), cn = _e.set, ln = _e.getterFor(un),
        fn = Object.prototype, hn = i.Symbol, pn = jt("JSON", "stringify"), yn = O.f, vn = z.f, gn = Jr.f, dn = c.f,
        mn = Z("symbols"), xn = Z("op-symbols"), bn = Z("string-to-symbol-registry"),
        wn = Z("symbol-to-string-registry"), Sn = Z("wks"), An = i.QObject,
        kn = !An || !An.prototype || !An.prototype.findChild, Tn = o && a((function () {
            return 7 != rr(vn({}, "a", {
                get: function () {
                    return vn(this, "a", {value: 7}).a
                }
            })).a
        })) ? function (t, e, r) {
            var n = yn(fn, e);
            n && delete fn[e], vn(t, e, r), n && t !== fn && vn(fn, e, n)
        } : vn, On = function (t, e) {
            var r = mn[t] = rr(hn.prototype);
            return cn(r, {type: un, tag: t, description: e}), o || (r.description = e), r
        }, Pn = rt ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return Object(t) instanceof hn
        }, En = function (t, e, r) {
            t === fn && En(xn, e, r), I(t);
            var n = m(e, !0);
            return I(r), b(mn, n) ? (r.enumerable ? (b(t, on) && t[on][n] && (t[on][n] = !1), r = rr(r, {enumerable: l(0, !1)})) : (b(t, on) || vn(t, on, l(1, {})), t[on][n] = !0), Tn(t, n, r)) : vn(t, n, r)
        }, Cn = function (t, e) {
            I(t);
            var r = g(e), n = We(r).concat(_n(r));
            return an(n, (function (e) {
                o && !Mn.call(r, e) || En(t, e, r[e])
            })), t
        }, Mn = function (t) {
            var e = m(t, !0), r = dn.call(this, e);
            return !(this === fn && b(mn, e) && !b(xn, e)) && (!(r || !b(this, e) || !b(mn, e) || b(this, on) && this[on][e]) || r)
        }, Nn = function (t, e) {
            var r = g(t), n = m(e, !0);
            if (r !== fn || !b(mn, n) || b(xn, n)) {
                var i = yn(r, n);
                return !i || !b(mn, n) || b(r, on) && r[on][n] || (i.enumerable = !0), i
            }
        }, Rn = function (t) {
            var e = gn(g(t)), r = [];
            return an(e, (function (t) {
                b(mn, t) || b(Ae, t) || r.push(t)
            })), r
        }, _n = function (t) {
            var e = t === fn, r = gn(e ? xn : g(t)), n = [];
            return an(r, (function (t) {
                !b(mn, t) || e && !b(fn, t) || n.push(mn[t])
            })), n
        };
    if (et || (vr((hn = function () {
        if (this instanceof hn) throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, e = tt(t),
            r = function (t) {
                this === fn && r.call(xn, t), b(this, on) && b(this[on], e) && (this[on][e] = !1), Tn(this, e, l(1, t))
            };
        return o && kn && Tn(fn, e, {configurable: !0, set: r}), On(e, t)
    }).prototype, "toString", (function () {
        return ln(this).tag
    })), vr(hn, "withoutSetter", (function (t) {
        return On(tt(t), t)
    })), c.f = Mn, z.f = En, O.f = Nn, Wr.f = Jr.f = Rn, tn.f = _n, en.f = function (t) {
        return On(ot(t), t)
    }, o && vn(hn.prototype, "description", {
        configurable: !0, get: function () {
            return ln(this).description
        }
    })), H({global: !0, wrap: !0, forced: !et, sham: !et}, {Symbol: hn}), an(We(Sn), (function (t) {
        nn(t)
    })), H({target: un, stat: !0, forced: !et}, {
        for: function (t) {
            var e = String(t);
            if (b(bn, e)) return bn[e];
            var r = hn(e);
            return bn[e] = r, wn[r] = e, r
        }, keyFor: function (t) {
            if (!Pn(t)) throw TypeError(t + " is not a symbol");
            if (b(wn, t)) return wn[t]
        }, useSetter: function () {
            kn = !0
        }, useSimple: function () {
            kn = !1
        }
    }), H({target: "Object", stat: !0, forced: !et, sham: !o}, {
        create: function (t, e) {
            return void 0 === e ? rr(t) : Cn(rr(t), e)
        }, defineProperty: En, defineProperties: Cn, getOwnPropertyDescriptor: Nn
    }), H({target: "Object", stat: !0, forced: !et}, {
        getOwnPropertyNames: Rn,
        getOwnPropertySymbols: _n
    }), H({
        target: "Object", stat: !0, forced: a((function () {
            tn.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (t) {
            return tn.f(Mt(t))
        }
    }), pn) {
        var Dn = !et || a((function () {
            var t = hn();
            return "[null]" != pn([t]) || "{}" != pn({a: t}) || "{}" != pn(Object(t))
        }));
        H({target: "JSON", stat: !0, forced: Dn}, {
            stringify: function (t, e, r) {
                for (var n, i = [t], a = 1; arguments.length > a;) i.push(arguments[a++]);
                if (n = e, (d(e) || void 0 !== t) && !Pn(t)) return Nt(e) || (e = function (t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !Pn(e)) return e
                }), i[1] = e, pn.apply(null, i)
            }
        })
    }
    hn.prototype[sn] || F(hn.prototype, sn, hn.prototype.valueOf), fr(hn, un), Ae[on] = !0, nn("asyncIterator"), nn("hasInstance"), nn("isConcatSpreadable"), nn("iterator"), nn("match"), nn("matchAll"), nn("replace"), nn("search"), nn("species"), nn("split"), nn("toPrimitive"), nn("toStringTag"), nn("unscopables"), fr(i.JSON, "JSON", !0);
    var Vn = D.Symbol;
    nn("asyncDispose"), nn("dispose"), nn("observable"), nn("patternMatch"), nn("replaceAll");
    var Ln = Vn;
    var In = function (t, e) {
        if (void 0 !== Ln && Fr(Object(t))) {
            var r = [], n = !0, i = !1, a = void 0;
            try {
                for (var o, u = jr(t); !(n = (o = u.next()).done) && (r.push(o.value), !e || r.length !== e); n = !0) ;
            } catch (t) {
                i = !0, a = t
            } finally {
                try {
                    n || null == u.return || u.return()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
    }, jn = function (t) {
        var e = t.return;
        if (void 0 !== e) return I(e.call(t)).value
    }, zn = function (t, e, r, n) {
        try {
            return n ? e(I(r)[0], r[1]) : e(r)
        } catch (e) {
            throw jn(t), e
        }
    }, Fn = ot("iterator"), Bn = Array.prototype, Un = function (t) {
        return void 0 !== t && (pe.Array === t || Bn[Fn] === t)
    }, Hn = ot("iterator"), Xn = !1;
    try {
        var Yn = 0, qn = {
            next: function () {
                return {done: !!Yn++}
            }, return: function () {
                Xn = !0
            }
        };
        qn[Hn] = function () {
            return this
        }, Array.from(qn, (function () {
            throw 2
        }))
    } catch (t) {
    }
    var Gn = function (t, e) {
        if (!e && !Xn) return !1;
        var r = !1;
        try {
            var n = {};
            n[Hn] = function () {
                return {
                    next: function () {
                        return {done: r = !0}
                    }
                }
            }, t(n)
        } catch (t) {
        }
        return r
    }, Qn = !Gn((function (t) {
        Array.from(t)
    }));
    H({target: "Array", stat: !0, forced: Qn}, {
        from: function (t) {
            var e, r, n, i, a, o, u = Mt(t), s = "function" == typeof this ? this : Array, c = arguments.length,
                l = c > 1 ? arguments[1] : void 0, f = void 0 !== l, h = Ir(u), p = 0;
            if (f && (l = L(l, c > 2 ? arguments[2] : void 0, 2)), null == h || s == Array && Un(h)) for (r = new s(e = Q(u.length)); e > p; p++) o = f ? l(u[p], p) : u[p], Br(r, p, o); else for (a = (i = h.call(u)).next, r = new s; !(n = a.call(i)).done; p++) o = f ? zn(i, l, [n.value, p], !0) : n.value, Br(r, p, o);
            return r.length = p, r
        }
    });
    var Wn = D.Array.from, $n = Wn, Zn = Yt("slice"), Kn = Wt("slice", {ACCESSORS: !0, 0: 0, 1: 2}), Jn = ot("species"),
        ti = [].slice, ei = Math.max;
    H({target: "Array", proto: !0, forced: !Zn || !Kn}, {
        slice: function (t, e) {
            var r, n, i, a = g(this), o = Q(a.length), u = He(t, o), s = He(void 0 === e ? o : e, o);
            if (Nt(a) && ("function" != typeof (r = a.constructor) || r !== Array && !Nt(r.prototype) ? d(r) && null === (r = r[Jn]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return ti.call(a, u, s);
            for (n = new (void 0 === r ? Array : r)(ei(s - u, 0)), i = 0; u < s; u++, i++) u in a && Br(n, i, a[u]);
            return n.length = i, n
        }
    });
    var ri = yt("Array").slice, ni = Array.prototype, ii = function (t) {
        var e = t.slice;
        return t === ni || t instanceof Array && e === ni.slice ? ri : e
    }, ai = ii;
    var oi = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    };
    var ui = function (t, e) {
        var r;
        if (t) {
            if ("string" == typeof t) return oi(t, e);
            var n = ai(r = Object.prototype.toString.call(t)).call(r, 8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? $n(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? oi(t, e) : void 0
        }
    };
    var si = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    };
    var ci = function (t, e) {
            return he(t) || In(t, e) || ui(t, e) || si()
        }, li = /(\[[^\]]+\])/g, fi = /(#[^\s\+>~\.\[:]+)/g, hi = /(\.[^\s\+>~\.\[:]+)/g,
        pi = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, yi = /(:[\w-]+\([^\)]*\))/gi,
        vi = /(:[^\s\+>~\.\[:]+)/g, gi = /([^\s\+>~\.\[:]+)/g;

    function di(t, e) {
        var r = t.match(e);
        return r ? [t.replace(e, " "), r.length] : [t, 0]
    }

    function mi(t) {
        var e = [0, 0, 0], r = t.replace(/:not\(([^\)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), n = 0,
            i = di(r, li), a = ci(i, 2);
        r = a[0], n = a[1], e[1] += n;
        var o = di(r, fi), u = ci(o, 2);
        r = u[0], n = u[1], e[0] += n;
        var s = di(r, hi), c = ci(s, 2);
        r = c[0], n = c[1], e[1] += n;
        var l = di(r, pi), f = ci(l, 2);
        r = f[0], n = f[1], e[2] += n;
        var h = di(r, yi), p = ci(h, 2);
        r = p[0], n = p[1], e[1] += n;
        var y = di(r, vi), v = ci(y, 2);
        r = v[0], n = v[1], e[1] += n;
        var g = di(r = r.replace(/[\*\s\+>~]/g, " ").replace(/[#\.]/g, " "), gi), d = ci(g, 2);
        return r = d[0], n = d[1], e[2] += n, e.join("")
    }

    var xi = 1e-8;

    function bi(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2))
    }

    function wi(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (bi(t) * bi(e))
    }

    function Si(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(wi(t, e))
    }

    function Ai(t) {
        return t * t * t
    }

    function ki(t) {
        return 3 * t * t * (1 - t)
    }

    function Ti(t) {
        return 3 * t * (1 - t) * (1 - t)
    }

    function Oi(t) {
        return (1 - t) * (1 - t) * (1 - t)
    }

    function Pi(t) {
        return t * t
    }

    function Ei(t) {
        return 2 * t * (1 - t)
    }

    function Ci(t) {
        return (1 - t) * (1 - t)
    }

    H({target: "Object", stat: !0, forced: !o, sham: !o}, {defineProperty: z.f});
    var Mi = r((function (t) {
        var e = D.Object, r = t.exports = function (t, r, n) {
            return e.defineProperty(t, r, n)
        };
        e.defineProperty.sham && (r.sham = !0)
    })), Ni = Mi;
    H({target: "Object", stat: !0, forced: !o, sham: !o}, {defineProperties: $e});
    var Ri = r((function (t) {
        var e = D.Object, r = t.exports = function (t, r) {
            return e.defineProperties(t, r)
        };
        e.defineProperties.sham && (r.sham = !0)
    })), _i = jt("Reflect", "ownKeys") || function (t) {
        var e = Wr.f(I(t)), r = tn.f;
        return r ? e.concat(r(t)) : e
    };
    H({target: "Object", stat: !0, sham: !o}, {
        getOwnPropertyDescriptors: function (t) {
            for (var e, r, n = g(t), i = O.f, a = _i(n), o = {}, u = 0; a.length > u;) void 0 !== (r = i(n, e = a[u++])) && Br(o, e, r);
            return o
        }
    });
    var Di = D.Object.getOwnPropertyDescriptors, Vi = function (t, e) {
        var r = [][t];
        return !!r && a((function () {
            r.call(null, e || function () {
                throw 1
            }, 1)
        }))
    }, Li = Lt.forEach, Ii = Vi("forEach"), ji = Wt("forEach"), zi = Ii && ji ? [].forEach : function (t) {
        return Li(this, t, arguments.length > 1 ? arguments[1] : void 0)
    };
    H({target: "Array", proto: !0, forced: [].forEach != zi}, {forEach: zi});
    var Fi = yt("Array").forEach, Bi = Array.prototype, Ui = {DOMTokenList: !0, NodeList: !0}, Hi = function (t) {
        var e = t.forEach;
        return t === Bi || t instanceof Array && e === Bi.forEach || Ui.hasOwnProperty(ur(t)) ? Fi : e
    }, Xi = O.f, Yi = a((function () {
        Xi(1)
    }));
    H({target: "Object", stat: !0, forced: !o || Yi, sham: !o}, {
        getOwnPropertyDescriptor: function (t, e) {
            return Xi(g(t), e)
        }
    });
    var qi = r((function (t) {
        var e = D.Object, r = t.exports = function (t, r) {
            return e.getOwnPropertyDescriptor(t, r)
        };
        e.getOwnPropertyDescriptor.sham && (r.sham = !0)
    })), Gi = qi, Qi = Lt.filter, Wi = Yt("filter"), $i = Wt("filter");
    H({target: "Array", proto: !0, forced: !Wi || !$i}, {
        filter: function (t) {
            return Qi(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Zi = yt("Array").filter, Ki = Array.prototype, Ji = function (t) {
        var e = t.filter;
        return t === Ki || t instanceof Array && e === Ki.filter ? Zi : e
    }, ta = D.Object.getOwnPropertySymbols, ea = a((function () {
        We(1)
    }));
    H({target: "Object", stat: !0, forced: ea}, {
        keys: function (t) {
            return We(Mt(t))
        }
    });
    var ra = D.Object.keys, na = r((function (t) {
        var e = function (t) {
            var e, r = Object.prototype, n = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator", o = i.asyncIterator || "@@asyncIterator",
                u = i.toStringTag || "@@toStringTag";

            function s(t, e, r) {
                return Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
            }

            try {
                s({}, "")
            } catch (t) {
                s = function (t, e, r) {
                    return t[e] = r
                }
            }

            function c(t, e, r, n) {
                var i = e && e.prototype instanceof g ? e : g, a = Object.create(i.prototype), o = new E(n || []);
                return a._invoke = function (t, e, r) {
                    var n = f;
                    return function (i, a) {
                        if (n === p) throw new Error("Generator is already running");
                        if (n === y) {
                            if ("throw" === i) throw a;
                            return M()
                        }
                        for (r.method = i, r.arg = a; ;) {
                            var o = r.delegate;
                            if (o) {
                                var u = T(o, r);
                                if (u) {
                                    if (u === v) continue;
                                    return u
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                if (n === f) throw n = y, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = p;
                            var s = l(t, e, r);
                            if ("normal" === s.type) {
                                if (n = r.done ? y : h, s.arg === v) continue;
                                return {value: s.arg, done: r.done}
                            }
                            "throw" === s.type && (n = y, r.method = "throw", r.arg = s.arg)
                        }
                    }
                }(t, r, o), a
            }

            function l(t, e, r) {
                try {
                    return {type: "normal", arg: t.call(e, r)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            t.wrap = c;
            var f = "suspendedStart", h = "suspendedYield", p = "executing", y = "completed", v = {};

            function g() {
            }

            function d() {
            }

            function m() {
            }

            var x = {};
            x[a] = function () {
                return this
            };
            var b = Object.getPrototypeOf, w = b && b(b(C([])));
            w && w !== r && n.call(w, a) && (x = w);
            var S = m.prototype = g.prototype = Object.create(x);

            function A(t) {
                ["next", "throw", "return"].forEach((function (e) {
                    s(t, e, (function (t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function k(t, e) {
                function r(i, a, o, u) {
                    var s = l(t[i], t, a);
                    if ("throw" !== s.type) {
                        var c = s.arg, f = c.value;
                        return f && "object" == typeof f && n.call(f, "__await") ? e.resolve(f.__await).then((function (t) {
                            r("next", t, o, u)
                        }), (function (t) {
                            r("throw", t, o, u)
                        })) : e.resolve(f).then((function (t) {
                            c.value = t, o(c)
                        }), (function (t) {
                            return r("throw", t, o, u)
                        }))
                    }
                    u(s.arg)
                }

                var i;
                this._invoke = function (t, n) {
                    function a() {
                        return new e((function (e, i) {
                            r(t, n, e, i)
                        }))
                    }

                    return i = i ? i.then(a, a) : a()
                }
            }

            function T(t, r) {
                var n = t.iterator[r.method];
                if (n === e) {
                    if (r.delegate = null, "throw" === r.method) {
                        if (t.iterator.return && (r.method = "return", r.arg = e, T(t, r), "throw" === r.method)) return v;
                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return v
                }
                var i = l(n, t.iterator, r.arg);
                if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
            }

            function O(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function P(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function E(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(O, this), this.reset(!0)
            }

            function C(t) {
                if (t) {
                    var r = t[a];
                    if (r) return r.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1, o = function r() {
                            for (; ++i < t.length;) if (n.call(t, i)) return r.value = t[i], r.done = !1, r;
                            return r.value = e, r.done = !0, r
                        };
                        return o.next = o
                    }
                }
                return {next: M}
            }

            function M() {
                return {value: e, done: !0}
            }

            return d.prototype = S.constructor = m, m.constructor = d, d.displayName = s(m, u, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, s(t, u, "GeneratorFunction")), t.prototype = Object.create(S), t
            }, t.awrap = function (t) {
                return {__await: t}
            }, A(k.prototype), k.prototype[o] = function () {
                return this
            }, t.AsyncIterator = k, t.async = function (e, r, n, i, a) {
                void 0 === a && (a = Promise);
                var o = new k(c(e, r, n, i), a);
                return t.isGeneratorFunction(r) ? o : o.next().then((function (t) {
                    return t.done ? t.value : o.next()
                }))
            }, A(S), s(S, u, "Generator"), S[a] = function () {
                return this
            }, S.toString = function () {
                return "[object Generator]"
            }, t.keys = function (t) {
                var e = [];
                for (var r in t) e.push(r);
                return e.reverse(), function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
            }, t.values = C, E.prototype = {
                constructor: E, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    if (this.done) throw t;
                    var r = this;

                    function i(n, i) {
                        return u.type = "throw", u.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i
                    }

                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var o = this.tryEntries[a], u = o.completion;
                        if ("root" === o.tryLoc) return i("end");
                        if (o.tryLoc <= this.prev) {
                            var s = n.call(o, "catchLoc"), c = n.call(o, "finallyLoc");
                            if (s && c) {
                                if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var a = i;
                            break
                        }
                    }
                    a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                    var o = a ? a.completion : {};
                    return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(o)
                }, complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), v
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                P(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, r, n) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: r,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = e), v
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = e
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(e)
        }
    })), ia = function (t, e) {
        this.stopped = t, this.result = e
    }, aa = function (t, e, r) {
        var n, i, a, o, u, s, c, l = r && r.that, f = !(!r || !r.AS_ENTRIES), h = !(!r || !r.IS_ITERATOR),
            p = !(!r || !r.INTERRUPTED), y = L(e, l, 1 + f + p), v = function (t) {
                return n && jn(n), new ia(!0, t)
            }, g = function (t) {
                return f ? (I(t), p ? y(t[0], t[1], v) : y(t[0], t[1])) : p ? y(t, v) : y(t)
            };
        if (h) n = t; else {
            if ("function" != typeof (i = Ir(t))) throw TypeError("Target is not iterable");
            if (Un(i)) {
                for (a = 0, o = Q(t.length); o > a; a++) if ((u = g(t[a])) && u instanceof ia) return u;
                return new ia(!1)
            }
            n = i.call(t)
        }
        for (s = n.next; !(c = s.call(n)).done;) {
            try {
                u = g(c.value)
            } catch (t) {
                throw jn(n), t
            }
            if ("object" == typeof u && u && u instanceof ia) return u
        }
        return new ia(!1)
    }, oa = function (t, e) {
        var r = this;
        if (!(r instanceof oa)) return new oa(t, e);
        yr && (r = yr(new Error(void 0), Ie(r))), void 0 !== e && F(r, "message", String(e));
        var n = [];
        return aa(t, n.push, {that: n}), F(r, "errors", n), r
    };
    oa.prototype = rr(Error.prototype, {
        constructor: l(5, oa),
        message: l(5, ""),
        name: l(5, "AggregateError")
    }), H({global: !0}, {AggregateError: oa});
    var ua, sa, ca, la = i.Promise, fa = function (t, e, r) {
            for (var n in e) r && r.unsafe && t[n] ? t[n] = e[n] : vr(t, n, e[n], r);
            return t
        }, ha = ot("species"), pa = function (t) {
            var e = jt(t), r = z.f;
            o && e && !e[ha] && r(e, ha, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }, ya = function (t, e, r) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return t
        }, va = ot("species"), ga = function (t, e) {
            var r, n = I(t).constructor;
            return void 0 === n || null == (r = I(n)[va]) ? e : V(r)
        }, da = /(iphone|ipod|ipad).*applewebkit/i.test(zt), ma = "process" == h(i.process), xa = i.location,
        ba = i.setImmediate, wa = i.clearImmediate, Sa = i.process, Aa = i.MessageChannel, ka = i.Dispatch, Ta = 0,
        Oa = {}, Pa = "onreadystatechange", Ea = function (t) {
            if (Oa.hasOwnProperty(t)) {
                var e = Oa[t];
                delete Oa[t], e()
            }
        }, Ca = function (t) {
            return function () {
                Ea(t)
            }
        }, Ma = function (t) {
            Ea(t.data)
        }, Na = function (t) {
            i.postMessage(t + "", xa.protocol + "//" + xa.host)
        };
    ba && wa || (ba = function (t) {
        for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
        return Oa[++Ta] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }, ua(Ta), Ta
    }, wa = function (t) {
        delete Oa[t]
    }, ma ? ua = function (t) {
        Sa.nextTick(Ca(t))
    } : ka && ka.now ? ua = function (t) {
        ka.now(Ca(t))
    } : Aa && !da ? (ca = (sa = new Aa).port2, sa.port1.onmessage = Ma, ua = L(ca.postMessage, ca, 1)) : i.addEventListener && "function" == typeof postMessage && !i.importScripts && xa && "file:" !== xa.protocol && !a(Na) ? (ua = Na, i.addEventListener("message", Ma, !1)) : ua = Pa in A("script") ? function (t) {
        Ze.appendChild(A("script")).onreadystatechange = function () {
            Ze.removeChild(this), Ea(t)
        }
    } : function (t) {
        setTimeout(Ca(t), 0)
    });
    var Ra, _a, Da, Va, La, Ia, ja, za, Fa = {set: ba, clear: wa}, Ba = O.f, Ua = Fa.set,
        Ha = i.MutationObserver || i.WebKitMutationObserver, Xa = i.document, Ya = i.process, qa = i.Promise,
        Ga = Ba(i, "queueMicrotask"), Qa = Ga && Ga.value;
    Qa || (Ra = function () {
        var t, e;
        for (ma && (t = Ya.domain) && t.exit(); _a;) {
            e = _a.fn, _a = _a.next;
            try {
                e()
            } catch (t) {
                throw _a ? Va() : Da = void 0, t
            }
        }
        Da = void 0, t && t.enter()
    }, !da && !ma && Ha && Xa ? (La = !0, Ia = Xa.createTextNode(""), new Ha(Ra).observe(Ia, {characterData: !0}), Va = function () {
        Ia.data = La = !La
    }) : qa && qa.resolve ? (ja = qa.resolve(void 0), za = ja.then, Va = function () {
        za.call(ja, Ra)
    }) : Va = ma ? function () {
        Ya.nextTick(Ra)
    } : function () {
        Ua.call(i, Ra)
    });
    var Wa, $a, Za, Ka = Qa || function (t) {
            var e = {fn: t, next: void 0};
            Da && (Da.next = e), _a || (_a = e, Va()), Da = e
        }, Ja = function (t) {
            var e, r;
            this.promise = new t((function (t, n) {
                if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
                e = t, r = n
            })), this.resolve = V(e), this.reject = V(r)
        }, to = {
            f: function (t) {
                return new Ja(t)
            }
        }, eo = function (t, e) {
            if (I(t), d(e) && e.constructor === t) return e;
            var r = to.f(t);
            return (0, r.resolve)(e), r.promise
        }, ro = function (t) {
            try {
                return {error: !1, value: t()}
            } catch (t) {
                return {error: !0, value: t}
            }
        }, no = Fa.set, io = ot("species"), ao = "Promise", oo = _e.get, uo = _e.set, so = _e.getterFor(ao), co = la,
        lo = i.TypeError, fo = i.document, ho = i.process, po = (jt("fetch"), to.f), yo = po,
        vo = !!(fo && fo.createEvent && i.dispatchEvent), go = "function" == typeof PromiseRejectionEvent,
        mo = "unhandledrejection", xo = _(ao, (function () {
            if (!(me(co) !== String(co))) {
                if (66 === Ht) return !0;
                if (!ma && !go) return !0
            }
            if (!co.prototype.finally) return !0;
            if (Ht >= 51 && /native code/.test(co)) return !1;
            var t = co.resolve(1), e = function (t) {
                t((function () {
                }), (function () {
                }))
            };
            return (t.constructor = {})[io] = e, !(t.then((function () {
            })) instanceof e)
        })), bo = xo || !Gn((function (t) {
            co.all(t).catch((function () {
            }))
        })), wo = function (t) {
            var e;
            return !(!d(t) || "function" != typeof (e = t.then)) && e
        }, So = function (t, e) {
            if (!t.notified) {
                t.notified = !0;
                var r = t.reactions;
                Ka((function () {
                    for (var n = t.value, i = 1 == t.state, a = 0; r.length > a;) {
                        var o, u, s, c = r[a++], l = i ? c.ok : c.fail, f = c.resolve, h = c.reject, p = c.domain;
                        try {
                            l ? (i || (2 === t.rejection && Oo(t), t.rejection = 1), !0 === l ? o = n : (p && p.enter(), o = l(n), p && (p.exit(), s = !0)), o === c.promise ? h(lo("Promise-chain cycle")) : (u = wo(o)) ? u.call(o, f, h) : f(o)) : h(n)
                        } catch (t) {
                            p && !s && p.exit(), h(t)
                        }
                    }
                    t.reactions = [], t.notified = !1, e && !t.rejection && ko(t)
                }))
            }
        }, Ao = function (t, e, r) {
            var n, a;
            vo ? ((n = fo.createEvent("Event")).promise = e, n.reason = r, n.initEvent(t, !1, !0), i.dispatchEvent(n)) : n = {
                promise: e,
                reason: r
            }, !go && (a = i["on" + t]) ? a(n) : t === mo && function (t, e) {
                var r = i.console;
                r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e))
            }("Unhandled promise rejection", r)
        }, ko = function (t) {
            no.call(i, (function () {
                var e, r = t.facade, n = t.value;
                if (To(t) && (e = ro((function () {
                    ma ? ho.emit("unhandledRejection", n, r) : Ao(mo, r, n)
                })), t.rejection = ma || To(t) ? 2 : 1, e.error)) throw e.value
            }))
        }, To = function (t) {
            return 1 !== t.rejection && !t.parent
        }, Oo = function (t) {
            no.call(i, (function () {
                var e = t.facade;
                ma ? ho.emit("rejectionHandled", e) : Ao("rejectionhandled", e, t.value)
            }))
        }, Po = function (t, e, r) {
            return function (n) {
                t(e, n, r)
            }
        }, Eo = function (t, e, r) {
            t.done || (t.done = !0, r && (t = r), t.value = e, t.state = 2, So(t, !0))
        }, Co = function (t, e, r) {
            if (!t.done) {
                t.done = !0, r && (t = r);
                try {
                    if (t.facade === e) throw lo("Promise can't be resolved itself");
                    var n = wo(e);
                    n ? Ka((function () {
                        var r = {done: !1};
                        try {
                            n.call(e, Po(Co, r, t), Po(Eo, r, t))
                        } catch (e) {
                            Eo(r, e, t)
                        }
                    })) : (t.value = e, t.state = 1, So(t, !1))
                } catch (e) {
                    Eo({done: !1}, e, t)
                }
            }
        };
    xo && (co = function (t) {
        ya(this, co, ao), V(t), Wa.call(this);
        var e = oo(this);
        try {
            t(Po(Co, e), Po(Eo, e))
        } catch (t) {
            Eo(e, t)
        }
    }, (Wa = function (t) {
        uo(this, {type: ao, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0})
    }).prototype = fa(co.prototype, {
        then: function (t, e) {
            var r = so(this), n = po(ga(this, co));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = ma ? ho.domain : void 0, r.parent = !0, r.reactions.push(n), 0 != r.state && So(r, !1), n.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), $a = function () {
        var t = new Wa, e = oo(t);
        this.promise = t, this.resolve = Po(Co, e), this.reject = Po(Eo, e)
    }, to.f = po = function (t) {
        return t === co || t === Za ? new $a(t) : yo(t)
    }), H({global: !0, wrap: !0, forced: xo}, {Promise: co}), fr(co, ao, !1, !0), pa(ao), Za = jt(ao), H({
        target: ao,
        stat: !0,
        forced: xo
    }, {
        reject: function (t) {
            var e = po(this);
            return e.reject.call(void 0, t), e.promise
        }
    }), H({target: ao, stat: !0, forced: !0}, {
        resolve: function (t) {
            return eo(this === Za ? co : this, t)
        }
    }), H({target: ao, stat: !0, forced: bo}, {
        all: function (t) {
            var e = this, r = po(e), n = r.resolve, i = r.reject, a = ro((function () {
                var r = V(e.resolve), a = [], o = 0, u = 1;
                aa(t, (function (t) {
                    var s = o++, c = !1;
                    a.push(void 0), u++, r.call(e, t).then((function (t) {
                        c || (c = !0, a[s] = t, --u || n(a))
                    }), i)
                })), --u || n(a)
            }));
            return a.error && i(a.value), r.promise
        }, race: function (t) {
            var e = this, r = po(e), n = r.reject, i = ro((function () {
                var i = V(e.resolve);
                aa(t, (function (t) {
                    i.call(e, t).then(r.resolve, n)
                }))
            }));
            return i.error && n(i.value), r.promise
        }
    }), H({target: "Promise", stat: !0}, {
        allSettled: function (t) {
            var e = this, r = to.f(e), n = r.resolve, i = r.reject, a = ro((function () {
                var r = V(e.resolve), i = [], a = 0, o = 1;
                aa(t, (function (t) {
                    var u = a++, s = !1;
                    i.push(void 0), o++, r.call(e, t).then((function (t) {
                        s || (s = !0, i[u] = {status: "fulfilled", value: t}, --o || n(i))
                    }), (function (t) {
                        s || (s = !0, i[u] = {status: "rejected", reason: t}, --o || n(i))
                    }))
                })), --o || n(i)
            }));
            return a.error && i(a.value), r.promise
        }
    });
    var Mo = "No one promise resolved";
    H({target: "Promise", stat: !0}, {
        any: function (t) {
            var e = this, r = to.f(e), n = r.resolve, i = r.reject, a = ro((function () {
                var r = V(e.resolve), a = [], o = 0, u = 1, s = !1;
                aa(t, (function (t) {
                    var c = o++, l = !1;
                    a.push(void 0), u++, r.call(e, t).then((function (t) {
                        l || s || (s = !0, n(t))
                    }), (function (t) {
                        l || s || (l = !0, a[c] = t, --u || i(new (jt("AggregateError"))(a, Mo)))
                    }))
                })), --u || i(new (jt("AggregateError"))(a, Mo))
            }));
            return a.error && i(a.value), r.promise
        }
    });
    var No = !!la && a((function () {
        la.prototype.finally.call({
            then: function () {
            }
        }, (function () {
        }))
    }));
    H({target: "Promise", proto: !0, real: !0, forced: No}, {
        finally: function (t) {
            var e = ga(this, jt("Promise")), r = "function" == typeof t;
            return this.then(r ? function (r) {
                return eo(e, t()).then((function () {
                    return r
                }))
            } : t, r ? function (r) {
                return eo(e, t()).then((function () {
                    throw r
                }))
            } : t)
        }
    });
    var Ro = D.Promise;
    H({target: "Promise", stat: !0}, {
        try: function (t) {
            var e = to.f(this), r = ro(t);
            return (r.error ? e.reject : e.resolve)(r.value), e.promise
        }
    });
    var _o = Ro;

    function Do(t, e, r, n, i, a, o) {
        try {
            var u = t[a](o), s = u.value
        } catch (t) {
            return void r(t)
        }
        u.done ? e(s) : _o.resolve(s).then(n, i)
    }

    var Vo = function (t) {
        return function () {
            var e = this, r = arguments;
            return new _o((function (n, i) {
                var a = t.apply(e, r);

                function o(t) {
                    Do(a, n, i, o, u, "next", t)
                }

                function u(t) {
                    Do(a, n, i, o, u, "throw", t)
                }

                o(void 0)
            }))
        }
    }, Lo = Mi;
    var Io = function (t, e, r) {
        return e in t ? Lo(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}) : t[e] = r, t
    };
    var jo = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    };

    function zo(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Lo(t, n.key, n)
        }
    }

    var Fo = function (t, e, r) {
        return e && zo(t.prototype, e), r && zo(t, r), t
    }, Bo = yt("Array").concat, Uo = Array.prototype, Ho = function (t) {
        var e = t.concat;
        return t === Uo || t instanceof Array && e === Uo.concat ? Bo : e
    }, Xo = function (t) {
        return function (e, r, n, i) {
            V(r);
            var a = Mt(e), o = y(a), u = Q(a.length), s = t ? u - 1 : 0, c = t ? -1 : 1;
            if (n < 2) for (; ;) {
                if (s in o) {
                    i = o[s], s += c;
                    break
                }
                if (s += c, t ? s < 0 : u <= s) throw TypeError("Reduce of empty array with no initial value")
            }
            for (; t ? s >= 0 : u > s; s += c) s in o && (i = r(i, o[s], s, a));
            return i
        }
    }, Yo = {left: Xo(!1), right: Xo(!0)}.left, qo = Vi("reduce"), Go = Wt("reduce", {1: 0});
    H({target: "Array", proto: !0, forced: !qo || !Go || !ma && Ht > 79 && Ht < 83}, {
        reduce: function (t) {
            return Yo(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Qo = yt("Array").reduce, Wo = Array.prototype, $o = function (t) {
        var e = t.reduce;
        return t === Wo || t instanceof Array && e === Wo.reduce ? Qo : e
    };
    H({target: "Date", stat: !0}, {
        now: function () {
            return (new Date).getTime()
        }
    });
    var Zo = D.Date.now, Ko = Lt.every, Jo = Vi("every"), tu = Wt("every");
    H({target: "Array", proto: !0, forced: !Jo || !tu}, {
        every: function (t) {
            return Ko(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var eu = yt("Array").every, ru = Array.prototype, nu = function (t) {
        var e = t.every;
        return t === ru || t instanceof Array && e === ru.every ? eu : e
    }, iu = Ro, au = [].slice, ou = {}, uu = function (t, e, r) {
        if (!(e in ou)) {
            for (var n = [], i = 0; i < e; i++) n[i] = "a[" + i + "]";
            ou[e] = Function("C,a", "return new C(" + n.join(",") + ")")
        }
        return ou[e](t, r)
    }, su = Function.bind || function (t) {
        var e = V(this), r = au.call(arguments, 1), n = function () {
            var i = r.concat(au.call(arguments));
            return this instanceof n ? uu(e, i.length, i) : e.apply(t, i)
        };
        return d(e.prototype) && (n.prototype = e.prototype), n
    };
    H({target: "Function", proto: !0}, {bind: su});
    var cu = yt("Function").bind, lu = Function.prototype, fu = function (t) {
            var e = t.bind;
            return t === lu || t instanceof Function && e === lu.bind ? cu : e
        },
        hu = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};

    function pu() {
        throw new Error("setTimeout has not been defined")
    }

    function yu() {
        throw new Error("clearTimeout has not been defined")
    }

    var vu = pu, gu = yu;

    function du(t) {
        if (vu === setTimeout) return setTimeout(t, 0);
        if ((vu === pu || !vu) && setTimeout) return vu = setTimeout, setTimeout(t, 0);
        try {
            return vu(t, 0)
        } catch (e) {
            try {
                return vu.call(null, t, 0)
            } catch (e) {
                return vu.call(this, t, 0)
            }
        }
    }

    "function" == typeof hu.setTimeout && (vu = setTimeout), "function" == typeof hu.clearTimeout && (gu = clearTimeout);
    var mu, xu = [], bu = !1, wu = -1;

    function Su() {
        bu && mu && (bu = !1, mu.length ? xu = mu.concat(xu) : wu = -1, xu.length && Au())
    }

    function Au() {
        if (!bu) {
            var t = du(Su);
            bu = !0;
            for (var e = xu.length; e;) {
                for (mu = xu, xu = []; ++wu < e;) mu && mu[wu].run();
                wu = -1, e = xu.length
            }
            mu = null, bu = !1, function (t) {
                if (gu === clearTimeout) return clearTimeout(t);
                if ((gu === yu || !gu) && clearTimeout) return gu = clearTimeout, clearTimeout(t);
                try {
                    gu(t)
                } catch (e) {
                    try {
                        return gu.call(null, t)
                    } catch (e) {
                        return gu.call(this, t)
                    }
                }
            }(t)
        }
    }

    function ku(t, e) {
        this.fun = t, this.array = e
    }

    ku.prototype.run = function () {
        this.fun.apply(null, this.array)
    };

    function Tu() {
    }

    var Ou = Tu, Pu = Tu, Eu = Tu, Cu = Tu, Mu = Tu, Nu = Tu, Ru = Tu;
    var _u = hu.performance || {}, Du = _u.now || _u.mozNow || _u.msNow || _u.oNow || _u.webkitNow || function () {
        return (new Date).getTime()
    };
    var Vu = new Date;
    for (var Lu = {
        nextTick: function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            xu.push(new ku(t, e)), 1 !== xu.length || bu || du(Au)
        },
        title: "browser",
        browser: !0,
        env: {},
        argv: [],
        version: "",
        versions: {},
        on: Ou,
        addListener: Pu,
        once: Eu,
        off: Cu,
        removeListener: Mu,
        removeAllListeners: Nu,
        emit: Ru,
        binding: function (t) {
            throw new Error("process.binding is not supported")
        },
        cwd: function () {
            return "/"
        },
        chdir: function (t) {
            throw new Error("process.chdir is not supported")
        },
        umask: function () {
            return 0
        },
        hrtime: function (t) {
            var e = .001 * Du.call(_u), r = Math.floor(e), n = Math.floor(e % 1 * 1e9);
            return t && (r -= t[0], (n -= t[1]) < 0 && (r--, n += 1e9)), [r, n]
        },
        platform: "browser",
        release: {},
        config: {},
        uptime: function () {
            return (new Date - Vu) / 1e3
        }
    }, Iu = r((function (t) {
        (function () {
            var e, r, n, i, a, o;
            "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function () {
                return performance.now()
            } : null != Lu && Lu.hrtime ? (t.exports = function () {
                return (e() - a) / 1e6
            }, r = Lu.hrtime, i = (e = function () {
                var t;
                return 1e9 * (t = r())[0] + t[1]
            })(), o = 1e9 * Lu.uptime(), a = i - o) : Date.now ? (t.exports = function () {
                return Date.now() - n
            }, n = Date.now()) : (t.exports = function () {
                return (new Date).getTime() - n
            }, n = (new Date).getTime())
        }).call(e)
    })), ju = "undefined" == typeof window ? e : window, zu = ["moz", "webkit"], Fu = "AnimationFrame", Bu = ju["request" + Fu], Uu = ju["cancel" + Fu] || ju["cancelRequest" + Fu], Hu = 0; !Bu && Hu < zu.length; Hu++) Bu = ju[zu[Hu] + "Request" + Fu], Uu = ju[zu[Hu] + "Cancel" + Fu] || ju[zu[Hu] + "CancelRequest" + Fu];
    if (!Bu || !Uu) {
        var Xu = 0, Yu = 0, qu = [];
        Bu = function (t) {
            if (0 === qu.length) {
                var e = Iu(), r = Math.max(0, 16.666666666666668 - (e - Xu));
                Xu = r + e, setTimeout((function () {
                    var t = qu.slice(0);
                    qu.length = 0;
                    for (var e = 0; e < t.length; e++) if (!t[e].cancelled) try {
                        t[e].callback(Xu)
                    } catch (t) {
                        setTimeout((function () {
                            throw t
                        }), 0)
                    }
                }), Math.round(r))
            }
            return qu.push({handle: ++Yu, callback: t, cancelled: !1}), Yu
        }, Uu = function (t) {
            for (var e = 0; e < qu.length; e++) qu[e].handle === t && (qu[e].cancelled = !0)
        }
    }
    var Gu = function (t) {
        return Bu.call(ju, t)
    };
    Gu.cancel = function () {
        Uu.apply(ju, arguments)
    }, Gu.polyfill = function (t) {
        t || (t = ju), t.requestAnimationFrame = Bu, t.cancelAnimationFrame = Uu
    };
    var Qu, Wu = At.trim;
    H({
        target: "String", proto: !0, forced: (Qu = "trim", a((function () {
            return !!mt[Qu]() || "​᠎" != "​᠎"[Qu]() || mt[Qu].name !== Qu
        })))
    }, {
        trim: function () {
            return Wu(this)
        }
    });
    var $u = yt("String").trim, Zu = String.prototype, Ku = function (t) {
        var e = t.trim;
        return "string" == typeof t || t === Zu || t instanceof String && e === Zu.trim ? $u : e
    }, Ju = function (t) {
        this.ok = !1, this.alpha = 1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = (t = t.replace(/ /g, "")).toLowerCase();
        var e = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dodgerblue: "1e90ff",
            feldspar: "d19275",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgrey: "d3d3d3",
            lightgreen: "90ee90",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslateblue: "8470ff",
            lightslategray: "778899",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370d8",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "d87093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "ff0000",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            violetred: "d02090",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
        };
        t = e[t] || t;
        for (var r = [{
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
            process: function (t) {
                return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3]), parseFloat(t[4])]
            }
        }, {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
            process: function (t) {
                return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])]
            }
        }, {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: ["#00ff00", "336699"],
            process: function (t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, example: ["#fb0", "f0f"], process: function (t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }], n = 0; n < r.length; n++) {
            var i = r[n].re, a = r[n].process, o = i.exec(t);
            if (o) {
                var u = a(o);
                this.r = u[0], this.g = u[1], this.b = u[2], u.length > 3 && (this.alpha = u[3]), this.ok = !0
            }
        }
        this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
        }, this.toRGBA = function () {
            return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")"
        }, this.toHex = function () {
            var t = this.r.toString(16), e = this.g.toString(16), r = this.b.toString(16);
            return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == r.length && (r = "0" + r), "#" + t + e + r
        }, this.getHelpXML = function () {
            for (var t = new Array, n = 0; n < r.length; n++) for (var i = r[n].example, a = 0; a < i.length; a++) t[t.length] = i[a];
            for (var o in e) t[t.length] = o;
            var u = document.createElement("ul");
            u.setAttribute("id", "rgbcolor-examples");
            for (n = 0; n < t.length; n++) try {
                var s = document.createElement("li"), c = new RGBColor(t[n]), l = document.createElement("div");
                l.style.cssText = "margin: 3px; border: 1px solid black; background:" + c.toHex() + "; color:" + c.toHex(), l.appendChild(document.createTextNode("test"));
                var f = document.createTextNode(" " + t[n] + " -> " + c.toRGB() + " -> " + c.toHex());
                s.appendChild(l), s.appendChild(f), u.appendChild(s)
            } catch (t) {
            }
            return u
        }
    }, ts = function () {
        function t(e, r, n) {
            jo(this, t), this.document = e, this.name = r, this.value = n, this.isNormalizedColor = !1
        }

        return Fo(t, [{
            key: "split", value: function () {
                var e, r, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ", i = this.document,
                    a = this.name;
                return ee(e = Ku(r = re(this.getString())).call(r).split(n)).call(e, (function (e) {
                    return new t(i, a, e)
                }))
            }
        }, {
            key: "hasValue", value: function (t) {
                var e = this.value;
                return null !== e && "" !== e && (t || 0 !== e) && void 0 !== e
            }
        }, {
            key: "isString", value: function (t) {
                var e = this.value, r = "string" == typeof e;
                return r && t ? t.test(e) : r
            }
        }, {
            key: "isUrlDefinition", value: function () {
                return this.isString(/^url\(/)
            }
        }, {
            key: "isPixels", value: function () {
                if (!this.hasValue()) return !1;
                var t = this.getString();
                switch (!0) {
                    case/px$/.test(t):
                    case/^[0-9]+$/.test(t):
                        return !0;
                    default:
                        return !1
                }
            }
        }, {
            key: "setValue", value: function (t) {
                return this.value = t, this
            }
        }, {
            key: "getValue", value: function (t) {
                return void 0 === t || this.hasValue() ? this.value : t
            }
        }, {
            key: "getNumber", value: function (t) {
                if (!this.hasValue()) return void 0 === t ? 0 : Ct(t);
                var e = this.value, r = Ct(e);
                return this.isString(/%$/) && (r /= 100), r
            }
        }, {
            key: "getString", value: function (t) {
                return void 0 === t || this.hasValue() ? void 0 === this.value ? "" : String(this.value) : String(t)
            }
        }, {
            key: "getColor", value: function (t) {
                var e = this.getString(t);
                return this.isNormalizedColor || (this.isNormalizedColor = !0, e = ce(e), this.value = e), e
            }
        }, {
            key: "getDpi", value: function () {
                return 96
            }
        }, {
            key: "getRem", value: function () {
                return this.document.rootEmSize
            }
        }, {
            key: "getEm", value: function () {
                return this.document.emSize
            }
        }, {
            key: "getUnits", value: function () {
                return this.getString().replace(/[0-9\.\-]/g, "")
            }
        }, {
            key: "getPixels", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!this.hasValue()) return 0;
                var r = "boolean" == typeof t ? [void 0, t] : [t], n = ci(r, 2), i = n[0], a = n[1],
                    o = this.document.screen.viewPort;
                switch (!0) {
                    case this.isString(/vmin$/):
                        return this.getNumber() / 100 * Math.min(o.computeSize("x"), o.computeSize("y"));
                    case this.isString(/vmax$/):
                        return this.getNumber() / 100 * Math.max(o.computeSize("x"), o.computeSize("y"));
                    case this.isString(/vw$/):
                        return this.getNumber() / 100 * o.computeSize("x");
                    case this.isString(/vh$/):
                        return this.getNumber() / 100 * o.computeSize("y");
                    case this.isString(/rem$/):
                        return this.getNumber() * this.getRem();
                    case this.isString(/em$/):
                        return this.getNumber() * this.getEm();
                    case this.isString(/ex$/):
                        return this.getNumber() * this.getEm() / 2;
                    case this.isString(/px$/):
                        return this.getNumber();
                    case this.isString(/pt$/):
                        return this.getNumber() * this.getDpi() * (1 / 72);
                    case this.isString(/pc$/):
                        return 15 * this.getNumber();
                    case this.isString(/cm$/):
                        return this.getNumber() * this.getDpi() / 2.54;
                    case this.isString(/mm$/):
                        return this.getNumber() * this.getDpi() / 25.4;
                    case this.isString(/in$/):
                        return this.getNumber() * this.getDpi();
                    case this.isString(/%$/) && a:
                        return this.getNumber() * this.getEm();
                    case this.isString(/%$/):
                        return this.getNumber() * o.computeSize(i);
                    default:
                        var u = this.getNumber();
                        return e && u < 1 ? u * o.computeSize(i) : u
                }
            }
        }, {
            key: "getMilliseconds", value: function () {
                return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : 1e3 * this.getNumber() : 0
            }
        }, {
            key: "getRadians", value: function () {
                if (!this.hasValue()) return 0;
                switch (!0) {
                    case this.isString(/deg$/):
                        return this.getNumber() * (Math.PI / 180);
                    case this.isString(/grad$/):
                        return this.getNumber() * (Math.PI / 200);
                    case this.isString(/rad$/):
                        return this.getNumber();
                    default:
                        return this.getNumber() * (Math.PI / 180)
                }
            }
        }, {
            key: "getDefinition", value: function () {
                var t = this.getString(), e = t.match(/#([^\)'"]+)/);
                return e && (e = e[1]), e || (e = t), this.document.definitions[e]
            }
        }, {
            key: "getFillStyleDefinition", value: function (t, e) {
                var r = this.getDefinition();
                if (!r) return null;
                if ("function" == typeof r.createGradient) return r.createGradient(this.document.ctx, t, e);
                if ("function" == typeof r.createPattern) {
                    if (r.getHrefAttribute().hasValue()) {
                        var n = r.getAttribute("patternTransform");
                        r = r.getHrefAttribute().getDefinition(), n.hasValue() && r.getAttribute("patternTransform", !0).setValue(n.value)
                    }
                    return r.createPattern(this.document.ctx, t, e)
                }
                return null
            }
        }, {
            key: "getTextBaseline", value: function () {
                return this.hasValue() ? t.textBaselineMapping[this.getString()] : null
            }
        }, {
            key: "addOpacity", value: function (e) {
                for (var r = this.getColor(), n = r.length, i = 0, a = 0; a < n && ("," === r[a] && i++, 3 !== i); a++) ;
                if (e.hasValue() && this.isString() && 3 !== i) {
                    var o = new Ju(r);
                    o.ok && (o.alpha = e.getNumber(), r = o.toRGBA())
                }
                return new t(this.document, this.name, r)
            }
        }], [{
            key: "empty", value: function (e) {
                return new t(e, "EMPTY", "")
            }
        }]), t
    }();
    ts.textBaselineMapping = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic"
    };
    var es = function () {
            function t() {
                jo(this, t), this.viewPorts = []
            }

            return Fo(t, [{
                key: "clear", value: function () {
                    this.viewPorts = []
                }
            }, {
                key: "setCurrent", value: function (t, e) {
                    this.viewPorts.push({width: t, height: e})
                }
            }, {
                key: "removeCurrent", value: function () {
                    this.viewPorts.pop()
                }
            }, {
                key: "getCurrent", value: function () {
                    var t = this.viewPorts;
                    return t[t.length - 1]
                }
            }, {
                key: "computeSize", value: function (t) {
                    return "number" == typeof t ? t : "x" === t ? this.width : "y" === t ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2)
                }
            }, {
                key: "width", get: function () {
                    return this.getCurrent().width
                }
            }, {
                key: "height", get: function () {
                    return this.getCurrent().height
                }
            }]), t
        }(), rs = function () {
            function t(e, r) {
                jo(this, t), this.x = e, this.y = r
            }

            return Fo(t, [{
                key: "angleTo", value: function (t) {
                    return Math.atan2(t.y - this.y, t.x - this.x)
                }
            }, {
                key: "applyTransform", value: function (t) {
                    var e = this.x, r = this.y, n = e * t[0] + r * t[2] + t[4], i = e * t[1] + r * t[3] + t[5];
                    this.x = n, this.y = i
                }
            }], [{
                key: "parse", value: function (e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = ae(e), i = ci(n, 2),
                        a = i[0], o = void 0 === a ? r : a, u = i[1], s = void 0 === u ? r : u;
                    return new t(o, s)
                }
            }, {
                key: "parseScale", value: function (e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = ae(e), i = ci(n, 2),
                        a = i[0], o = void 0 === a ? r : a, u = i[1], s = void 0 === u ? o : u;
                    return new t(o, s)
                }
            }, {
                key: "parsePath", value: function (e) {
                    for (var r = ae(e), n = r.length, i = [], a = 0; a < n; a += 2) i.push(new t(r[a], r[a + 1]));
                    return i
                }
            }]), t
        }(), ns = function () {
            function t(e) {
                var r, n;
                jo(this, t), this.screen = e, this.working = !1, this.events = [], this.eventElements = [], this.onClick = fu(r = this.onClick).call(r, this), this.onMouseMove = fu(n = this.onMouseMove).call(n, this)
            }

            return Fo(t, [{
                key: "isWorking", value: function () {
                    return this.working
                }
            }, {
                key: "start", value: function () {
                    if (!this.working) {
                        var t = this.screen, e = this.onClick, r = this.onMouseMove, n = t.ctx.canvas;
                        n.onclick = e, n.onmousemove = r, this.working = !0
                    }
                }
            }, {
                key: "stop", value: function () {
                    if (this.working) {
                        var t = this.screen.ctx.canvas;
                        this.working = !1, t.onclick = null, t.onmousemove = null
                    }
                }
            }, {
                key: "hasEvents", value: function () {
                    return this.working && this.events.length > 0
                }
            }, {
                key: "runEvents", value: function () {
                    if (this.working) {
                        var t = this.screen, e = this.events, r = this.eventElements, n = t.ctx.canvas.style;
                        n && (n.cursor = ""), Hi(e).call(e, (function (t, e) {
                            for (var n = t.run, i = r[e]; i;) n(i), i = i.parent
                        })), this.events = [], this.eventElements = []
                    }
                }
            }, {
                key: "checkPath", value: function (t, e) {
                    if (this.working && e) {
                        var r = this.events, n = this.eventElements;
                        Hi(r).call(r, (function (r, i) {
                            var a = r.x, o = r.y;
                            !n[i] && e.isPointInPath && e.isPointInPath(a, o) && (n[i] = t)
                        }))
                    }
                }
            }, {
                key: "checkBoundingBox", value: function (t, e) {
                    if (this.working && e) {
                        var r = this.events, n = this.eventElements;
                        Hi(r).call(r, (function (r, i) {
                            var a = r.x, o = r.y;
                            !n[i] && e.isPointInBox(a, o) && (n[i] = t)
                        }))
                    }
                }
            }, {
                key: "mapXY", value: function (t, e) {
                    for (var r = this.screen, n = r.window, i = r.ctx, a = new rs(t, e), o = i.canvas; o;) a.x -= o.offsetLeft, a.y -= o.offsetTop, o = o.offsetParent;
                    return n.scrollX && (a.x += n.scrollX), n.scrollY && (a.y += n.scrollY), a
                }
            }, {
                key: "onClick", value: function (t) {
                    var e = this.mapXY((t || event).clientX, (t || event).clientY), r = e.x, n = e.y;
                    this.events.push({
                        type: "onclick", x: r, y: n, run: function (t) {
                            t.onClick && t.onClick()
                        }
                    })
                }
            }, {
                key: "onMouseMove", value: function (t) {
                    var e = this.mapXY((t || event).clientX, (t || event).clientY), r = e.x, n = e.y;
                    this.events.push({
                        type: "onmousemove", x: r, y: n, run: function (t) {
                            t.onMouseMove && t.onMouseMove()
                        }
                    })
                }
            }]), t
        }(), is = "undefined" != typeof window ? window : null,
        as = "undefined" != typeof fetch ? fu(fetch).call(fetch, void 0) : null, os = function () {
            function t(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = r.fetch,
                    i = void 0 === n ? as : n, a = r.window, o = void 0 === a ? is : a;
                jo(this, t), this.ctx = e, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new es, this.mouse = new ns(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = o, this.fetch = i
            }

            return Fo(t, [{
                key: "wait", value: function (t) {
                    this.waits.push(t)
                }
            }, {
                key: "ready", value: function () {
                    return this.readyPromise ? this.readyPromise : iu.resolve()
                }
            }, {
                key: "isReady", value: function () {
                    var t;
                    if (this.isReadyLock) return !0;
                    var e = nu(t = this.waits).call(t, (function (t) {
                        return t()
                    }));
                    return e && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = e, e
                }
            }, {
                key: "setDefaults", value: function (t) {
                    t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4
                }
            }, {
                key: "setViewBox", value: function (t) {
                    var e = t.document, r = t.ctx, n = t.aspectRatio, i = t.width, a = t.desiredWidth, o = t.height,
                        u = t.desiredHeight, s = t.minX, c = void 0 === s ? 0 : s, l = t.minY, f = void 0 === l ? 0 : l,
                        h = t.refX, p = t.refY, y = t.clip, v = void 0 !== y && y, g = t.clipX, d = void 0 === g ? 0 : g,
                        m = t.clipY, x = void 0 === m ? 0 : m, b = re(n).replace(/^defer\s/, "").split(" "), w = ci(b, 2),
                        S = w[0] || "xMidYMid", A = w[1] || "meet", k = i / a, T = o / u, O = Math.min(k, T),
                        P = Math.max(k, T), E = a, C = u;
                    "meet" === A && (E *= O, C *= O), "slice" === A && (E *= P, C *= P);
                    var M = new ts(e, "refX", h), N = new ts(e, "refY", p), R = M.hasValue() && N.hasValue();
                    if (R && r.translate(-O * M.getPixels("x"), -O * N.getPixels("y")), v) {
                        var _ = O * d, D = O * x;
                        r.beginPath(), r.moveTo(_, D), r.lineTo(i, D), r.lineTo(i, o), r.lineTo(_, o), r.closePath(), r.clip()
                    }
                    if (!R) {
                        var V = "meet" === A && O === T, L = "slice" === A && P === T, I = "meet" === A && O === k,
                            j = "slice" === A && P === k;
                        /^xMid/.test(S) && (V || L) && r.translate(i / 2 - E / 2, 0), /YMid$/.test(S) && (I || j) && r.translate(0, o / 2 - C / 2), /^xMax/.test(S) && (V || L) && r.translate(i - E, 0), /YMax$/.test(S) && (I || j) && r.translate(0, o - C)
                    }
                    switch (!0) {
                        case"none" === S:
                            r.scale(k, T);
                            break;
                        case"meet" === A:
                            r.scale(O, O);
                            break;
                        case"slice" === A:
                            r.scale(P, P)
                    }
                    r.translate(-c, -f)
                }
            }, {
                key: "start", value: function (t) {
                    var e = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = r.enableRedraw, i = void 0 !== n && n, a = r.ignoreMouse, o = void 0 !== a && a,
                        u = r.ignoreAnimation, s = void 0 !== u && u, c = r.ignoreDimensions, l = void 0 !== c && c,
                        f = r.ignoreClear, h = void 0 !== f && f, p = r.forceRedraw, y = r.scaleWidth, v = r.scaleHeight,
                        g = r.offsetX, d = r.offsetY, m = this.FRAMERATE, x = this.mouse, b = 1e3 / m;
                    if (this.frameDuration = b, this.readyPromise = new iu((function (t) {
                        e.resolveReady = t
                    })), this.isReady() && this.render(t, l, h, y, v, g, d), i) {
                        var w = Zo(), S = w, A = 0, k = function r() {
                            w = Zo(), (A = w - S) >= b && (S = w - A % b, e.shouldUpdate(s, p) && (e.render(t, l, h, y, v, g, d), x.runEvents())), e.intervalId = Gu(r)
                        };
                        o || x.start(), this.intervalId = Gu(k)
                    }
                }
            }, {
                key: "stop", value: function () {
                    this.intervalId && (Gu.cancel(this.intervalId), this.intervalId = null), this.mouse.stop()
                }
            }, {
                key: "shouldUpdate", value: function (t, e) {
                    if (!t) {
                        var r, n = this.frameDuration, i = $o(r = this.animations).call(r, (function (t, e) {
                            return e.update(n) || t
                        }), !1);
                        if (i) return !0
                    }
                    return !("function" != typeof e || !e()) || (!(this.isReadyLock || !this.isReady()) || !!this.mouse.hasEvents())
                }
            }, {
                key: "render", value: function (t, e, r, n, i, a, o) {
                    var u = this.CLIENT_WIDTH, s = this.CLIENT_HEIGHT, c = this.viewPort, l = this.ctx,
                        f = this.isFirstRender, h = l.canvas;
                    c.clear(), h.width && h.height ? c.setCurrent(h.width, h.height) : c.setCurrent(u, s);
                    var p = t.getStyle("width"), y = t.getStyle("height");
                    !e && (f || "number" != typeof n && "number" != typeof i) && (p.hasValue() && (h.width = p.getPixels("x"), h.style && (h.style.width = "".concat(h.width, "px"))), y.hasValue() && (h.height = y.getPixels("y"), h.style && (h.style.height = "".concat(h.height, "px"))));
                    var v = h.clientWidth || h.width, g = h.clientHeight || h.height;
                    if (e && p.hasValue() && y.hasValue() && (v = p.getPixels("x"), g = y.getPixels("y")), c.setCurrent(v, g), "number" == typeof a && t.getAttribute("x", !0).setValue(a), "number" == typeof o && t.getAttribute("y", !0).setValue(o), "number" == typeof n || "number" == typeof i) {
                        var d, m, x = ae(t.getAttribute("viewBox").getString()), b = 0, w = 0;
                        if ("number" == typeof n) {
                            var S = t.getStyle("width");
                            S.hasValue() ? b = S.getPixels("x") / n : isNaN(x[2]) || (b = x[2] / n)
                        }
                        if ("number" == typeof i) {
                            var A = t.getStyle("height");
                            A.hasValue() ? w = A.getPixels("y") / i : isNaN(x[3]) || (w = x[3] / i)
                        }
                        b || (b = w), w || (w = b), t.getAttribute("width", !0).setValue(n), t.getAttribute("height", !0).setValue(i);
                        var k = t.getStyle("transform", !0, !0);
                        k.setValue(Ho(d = Ho(m = "".concat(k.getString(), " scale(")).call(m, 1 / b, ", ")).call(d, 1 / w, ")"))
                    }
                    r || l.clearRect(0, 0, v, g), t.render(l), f && (this.isFirstRender = !1)
                }
            }]), t
        }();
    os.defaultWindow = is, os.defaultFetch = as;
    var us = os.defaultFetch, ss = "undefined" != typeof DOMParser ? DOMParser : null, cs = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e.fetch,
                n = void 0 === r ? us : r, i = e.DOMParser, a = void 0 === i ? ss : i;
            jo(this, t), this.fetch = n, this.DOMParser = a
        }

        var e, r;
        return Fo(t, [{
            key: "parse", value: (r = Vo(na.mark((function t(e) {
                return na.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (!/^</.test(e)) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", this.parseFromString(e));
                        case 2:
                            return t.abrupt("return", this.load(e));
                        case 3:
                        case"end":
                            return t.stop()
                    }
                }), t, this)
            }))), function (t) {
                return r.apply(this, arguments)
            })
        }, {
            key: "parseFromString", value: function (t) {
                var e = new this.DOMParser;
                try {
                    return this.checkDocument(e.parseFromString(t, "image/svg+xml"))
                } catch (r) {
                    return this.checkDocument(e.parseFromString(t, "text/xml"))
                }
            }
        }, {
            key: "checkDocument", value: function (t) {
                var e = t.getElementsByTagName("parsererror")[0];
                if (e) throw new Error(e.textContent);
                return t
            }
        }, {
            key: "load", value: (e = Vo(na.mark((function t(e) {
                var r, n;
                return na.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, this.fetch(e);
                        case 2:
                            return r = t.sent, t.next = 5, r.text();
                        case 5:
                            return n = t.sent, t.abrupt("return", this.parseFromString(n));
                        case 7:
                        case"end":
                            return t.stop()
                    }
                }), t, this)
            }))), function (t) {
                return e.apply(this, arguments)
            })
        }]), t
    }(), ls = jt("Reflect", "construct"), fs = a((function () {
        function t() {
        }

        return !(ls((function () {
        }), [], t) instanceof t)
    })), hs = !a((function () {
        ls((function () {
        }))
    })), ps = fs || hs;
    H({target: "Reflect", stat: !0, forced: ps, sham: ps}, {
        construct: function (t, e) {
            V(t), I(e);
            var r = arguments.length < 3 ? t : V(arguments[2]);
            if (hs && !fs) return ls(t, e, r);
            if (t == r) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var n = [null];
                return n.push.apply(n, e), new (su.apply(t, n))
            }
            var i = r.prototype, a = rr(d(i) ? i : Object.prototype), o = Function.apply.call(t, a, e);
            return d(o) ? o : a
        }
    });
    var ys = D.Reflect.construct;
    H({target: "Object", stat: !0, sham: !o}, {create: rr});
    var vs = D.Object, gs = function (t, e) {
        return vs.create(t, e)
    };
    H({target: "Object", stat: !0}, {setPrototypeOf: yr});
    var ds = D.Object.setPrototypeOf, ms = r((function (t) {
        function e(r, n) {
            return t.exports = e = ds || function (t, e) {
                return t.__proto__ = e, t
            }, e(r, n)
        }

        t.exports = e
    }));
    var xs = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = gs(e && e.prototype, {constructor: {value: t, writable: !0, configurable: !0}}), e && ms(t, e)
    }, bs = en.f("iterator"), ws = r((function (t) {
        function e(r) {
            return t.exports = e = "function" == typeof Ln && "symbol" == typeof bs ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Ln && t.constructor === Ln && t !== Ln.prototype ? "symbol" : typeof t
            }, e(r)
        }

        t.exports = e
    }));
    var Ss = function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    };
    var As = function (t, e) {
        return !e || "object" !== ws(e) && "function" != typeof e ? Ss(t) : e
    }, ks = a((function () {
        Ie(1)
    }));
    H({target: "Object", stat: !0, forced: ks, sham: !De}, {
        getPrototypeOf: function (t) {
            return Ie(Mt(t))
        }
    });
    var Ts = D.Object.getPrototypeOf, Os = r((function (t) {
        function e(r) {
            return t.exports = e = ds ? Ts : function (t) {
                return t.__proto__ || Ts(t)
            }, e(r)
        }

        t.exports = e
    }));
    var Ps = function (t) {
        if (fe(t)) return oi(t)
    };
    var Es = function (t) {
        if (void 0 !== Ln && Fr(Object(t))) return $n(t)
    };
    var Cs = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    };
    var Ms = function (t) {
        return Ps(t) || Es(t) || ui(t) || Cs()
    }, Ns = Lt.some, Rs = Vi("some"), _s = Wt("some");
    H({target: "Array", proto: !0, forced: !Rs || !_s}, {
        some: function (t) {
            return Ns(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ds = yt("Array").some, Vs = Array.prototype, Ls = function (t) {
        var e = t.some;
        return t === Vs || t instanceof Array && e === Vs.some ? Ds : e
    }, Is = Ye.includes, js = Wt("indexOf", {ACCESSORS: !0, 1: 0});
    H({target: "Array", proto: !0, forced: !js}, {
        includes: function (t) {
            return Is(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var zs = yt("Array").includes;
    H({target: "String", proto: !0, forced: !lt("includes")}, {
        includes: function (t) {
            return !!~String(v(this)).indexOf(st(t), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Fs = yt("String").includes, Bs = Array.prototype, Us = String.prototype, Hs = function (t) {
        var e = t.includes;
        return t === Bs || t instanceof Array && e === Bs.includes ? zs : "string" == typeof t || t === Us || t instanceof String && e === Us.includes ? Fs : e
    }, Xs = Wn, Ys = function () {
        function t(e, r) {
            jo(this, t), this.type = "translate", this.point = null, this.point = rs.parse(r)
        }

        return Fo(t, [{
            key: "apply", value: function (t) {
                var e = this.point, r = e.x, n = e.y;
                t.translate(r || 0, n || 0)
            }
        }, {
            key: "unapply", value: function (t) {
                var e = this.point, r = e.x, n = e.y;
                t.translate(-1 * r || 0, -1 * n || 0)
            }
        }, {
            key: "applyToPoint", value: function (t) {
                var e = this.point, r = e.x, n = e.y;
                t.applyTransform([1, 0, 0, 1, r || 0, n || 0])
            }
        }]), t
    }(), qs = function () {
        function t(e, r, n) {
            jo(this, t), this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
            var i = ae(r);
            this.angle = new ts(e, "angle", i[0]), this.originX = n[0], this.originY = n[1], this.cx = i[1] || 0, this.cy = i[2] || 0
        }

        return Fo(t, [{
            key: "apply", value: function (t) {
                var e = this.cx, r = this.cy, n = this.originX, i = this.originY, a = this.angle,
                    o = e + n.getPixels("x"), u = r + i.getPixels("y");
                t.translate(o, u), t.rotate(a.getRadians()), t.translate(-o, -u)
            }
        }, {
            key: "unapply", value: function (t) {
                var e = this.cx, r = this.cy, n = this.angle;
                t.translate(e, r), t.rotate(-1 * n.getRadians()), t.translate(-e, -r)
            }
        }, {
            key: "applyToPoint", value: function (t) {
                var e = this.cx, r = this.cy, n = this.angle.getRadians();
                t.applyTransform([1, 0, 0, 1, e || 0, r || 0]), t.applyTransform([Math.cos(n), Math.sin(n), -Math.sin(n), Math.cos(n), 0, 0]), t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0])
            }
        }]), t
    }(), Gs = function () {
        function t(e, r) {
            jo(this, t), this.type = "scale", this.scale = null;
            var n = rs.parseScale(r);
            0 !== n.x && 0 !== n.y || (n.x = xi, n.y = xi), this.scale = n
        }

        return Fo(t, [{
            key: "apply", value: function (t) {
                var e = this.scale, r = e.x, n = e.y;
                t.scale(r, n || r)
            }
        }, {
            key: "unapply", value: function (t) {
                var e = this.scale, r = e.x, n = e.y;
                t.scale(1 / r, 1 / n || r)
            }
        }, {
            key: "applyToPoint", value: function (t) {
                var e = this.scale, r = e.x, n = e.y;
                t.applyTransform([r || 0, 0, 0, n || 0, 0, 0])
            }
        }]), t
    }(), Qs = function () {
        function t(e, r) {
            jo(this, t), this.type = "matrix", this.matrix = [], this.matrix = ae(r)
        }

        return Fo(t, [{
            key: "apply", value: function (t) {
                var e = this.matrix;
                t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
            }
        }, {
            key: "unapply", value: function (t) {
                var e = this.matrix, r = e[0], n = e[2], i = e[4], a = e[1], o = e[3], u = e[5],
                    s = 1 / (r * (1 * o - 0 * u) - n * (1 * a - 0 * u) + i * (0 * a - 0 * o));
                t.transform(s * (1 * o - 0 * u), s * (0 * u - 1 * a), s * (0 * i - 1 * n), s * (1 * r - 0 * i), s * (n * u - i * o), s * (i * a - r * u))
            }
        }, {
            key: "applyToPoint", value: function (t) {
                t.applyTransform(this.matrix)
            }
        }]), t
    }();

    function Ws(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var $s = function (t) {
        xs(r, t);
        var e = Ws(r);

        function r(t, n) {
            var i;
            return jo(this, r), (i = e.call(this, t, n)).type = "skew", i.angle = null, i.angle = new ts(t, "angle", n), i
        }

        return r
    }(Qs);

    function Zs(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Ks = function (t) {
        xs(r, t);
        var e = Zs(r);

        function r(t, n) {
            var i;
            return jo(this, r), (i = e.call(this, t, n)).type = "skewX", i.matrix = [1, 0, Math.tan(i.angle.getRadians()), 1, 0, 0], i
        }

        return r
    }($s);

    function Js(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var tc = function (t) {
        xs(r, t);
        var e = Js(r);

        function r(t, n) {
            var i;
            return jo(this, r), (i = e.call(this, t, n)).type = "skewY", i.matrix = [1, Math.tan(i.angle.getRadians()), 0, 1, 0, 0], i
        }

        return r
    }($s);
    var ec = function () {
        function t(e, r, n) {
            var i = this;
            jo(this, t), this.document = e, this.transforms = [];
            var a = function (t) {
                var e;
                return Ku(e = re(t)).call(e).replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/)
            }(r);
            Hi(a).call(a, (function (e) {
                if ("none" !== e) {
                    var r = function (t) {
                        var e = t.split("("), r = ci(e, 2), n = r[0], i = r[1];
                        return [Ku(n).call(n), Ku(i).call(i).replace(")", "")]
                    }(e), a = ci(r, 2), o = a[0], u = a[1], s = t.transformTypes[o];
                    void 0 !== s && i.transforms.push(new s(i.document, u, n))
                }
            }))
        }

        return Fo(t, [{
            key: "apply", value: function (t) {
                for (var e = this.transforms, r = e.length, n = 0; n < r; n++) e[n].apply(t)
            }
        }, {
            key: "unapply", value: function (t) {
                for (var e = this.transforms, r = e.length - 1; r >= 0; r--) e[r].unapply(t)
            }
        }, {
            key: "applyToPoint", value: function (t) {
                for (var e = this.transforms, r = e.length, n = 0; n < r; n++) e[n].applyToPoint(t)
            }
        }], [{
            key: "fromElement", value: function (e, r) {
                var n = r.getStyle("transform", !1, !0), i = r.getStyle("transform-origin", !1, !0).split(),
                    a = ci(i, 2), o = a[0], u = a[1], s = [o, void 0 === u ? o : u];
                return n.hasValue() ? new t(e, n.getString(), s) : null
            }
        }]), t
    }();
    ec.transformTypes = {translate: Ys, rotate: qs, scale: Gs, matrix: Qs, skewX: Ks, skewY: tc};
    var rc = function () {
        function t(e, r) {
            var n, i, a = this, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (jo(this, t), this.document = e, this.node = r, this.captureTextNodes = o, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], r && 1 === r.nodeType) {
                if (Hi(n = Xs(r.attributes)).call(n, (function (t) {
                    var r = ue(t.nodeName);
                    a.attributes[r] = new ts(e, r, t.value)
                })), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
                    var u, s = ee(u = this.getAttribute("style").getString().split(";")).call(u, (function (t) {
                        return Ku(t).call(t)
                    }));
                    Hi(s).call(s, (function (t) {
                        var r;
                        if (t) {
                            var n = ee(r = t.split(":")).call(r, (function (t) {
                                return Ku(t).call(t)
                            })), i = ci(n, 2), o = i[0], u = i[1];
                            a.styles[o] = new ts(e, o, u)
                        }
                    }))
                }
                var c = e.definitions, l = this.getAttribute("id");
                l.hasValue() && (c[l.getValue()] || (c[l.getValue()] = this)), Hi(i = Xs(r.childNodes)).call(i, (function (t) {
                    if (1 === t.nodeType) a.addChild(t); else if (o && (3 === t.nodeType || 4 === t.nodeType)) {
                        var r = e.createTextNode(t);
                        r.getText().length > 0 && a.addChild(r)
                    }
                }))
            }
        }

        return Fo(t, [{
            key: "getAttribute", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = this.attributes[t];
                if (!r && e) {
                    var n = new ts(this.document, t, "");
                    return this.attributes[t] = n, n
                }
                return r || ts.empty(this.document)
            }
        }, {
            key: "getHrefAttribute", value: function () {
                for (var t in this.attributes) if ("href" === t || /:href$/.test(t)) return this.attributes[t];
                return ts.empty(this.document)
            }
        }, {
            key: "getStyle", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = this.styles[t];
                if (n) return n;
                var i = this.getAttribute(t);
                if (i && i.hasValue()) return this.styles[t] = i, i;
                if (!r) {
                    var a = this.parent;
                    if (a) {
                        var o = a.getStyle(t);
                        if (o && o.hasValue()) return o
                    }
                }
                if (e) {
                    var u = new ts(this.document, t, "");
                    return this.styles[t] = u, u
                }
                return n || ts.empty(this.document)
            }
        }, {
            key: "render", value: function (t) {
                if ("none" !== this.getStyle("display").getString() && "hidden" !== this.getStyle("visibility").getString()) {
                    if (t.save(), this.getStyle("mask").hasValue()) {
                        var e = this.getStyle("mask").getDefinition();
                        e && (this.applyEffects(t), e.apply(t, this))
                    } else if ("none" !== this.getStyle("filter").getValue("none")) {
                        var r = this.getStyle("filter").getDefinition();
                        r && (this.applyEffects(t), r.apply(t, this))
                    } else this.setContext(t), this.renderChildren(t), this.clearContext(t);
                    t.restore()
                }
            }
        }, {
            key: "setContext", value: function (t) {
            }
        }, {
            key: "applyEffects", value: function (t) {
                var e = ec.fromElement(this.document, this);
                e && e.apply(t);
                var r = this.getStyle("clip-path", !1, !0);
                if (r.hasValue()) {
                    var n = r.getDefinition();
                    n && n.apply(t)
                }
            }
        }, {
            key: "clearContext", value: function (t) {
            }
        }, {
            key: "renderChildren", value: function (t) {
                var e;
                Hi(e = this.children).call(e, (function (e) {
                    e.render(t)
                }))
            }
        }, {
            key: "addChild", value: function (e) {
                var r, n = e instanceof t ? e : this.document.createElement(e);
                n.parent = this, Hs(r = t.ignoreChildTypes).call(r, n.type) || this.children.push(n)
            }
        }, {
            key: "matchesSelector", value: function (t) {
                var e, r = this.node;
                if ("function" == typeof r.matches) return r.matches(t);
                var n = r.getAttribute("class");
                return !(!n || "" === n) && Ls(e = n.split(" ")).call(e, (function (e) {
                    if (".".concat(e) === t) return !0
                }))
            }
        }, {
            key: "addStylesFromStyleDefinition", value: function () {
                var t = this.document, e = t.styles, r = t.stylesSpecificity;
                for (var n in e) if ("@" !== n[0] && this.matchesSelector(n)) {
                    var i = e[n], a = r[n];
                    if (i) for (var o in i) {
                        var u = this.stylesSpecificity[o];
                        void 0 === u && (u = "000"), a >= u && (this.styles[o] = i[o], this.stylesSpecificity[o] = a)
                    }
                }
            }
        }, {
            key: "removeStyles", value: function (t, e) {
                return $o(e).call(e, (function (e, r) {
                    var n, i = t.getStyle(r);
                    if (!i.hasValue()) return e;
                    var a = i.getString();
                    return i.setValue(""), Ho(n = []).call(n, Ms(e), [[r, a]])
                }), [])
            }
        }, {
            key: "restoreStyles", value: function (t, e) {
                Hi(e).call(e, (function (e) {
                    var r = ci(e, 2), n = r[0], i = r[1];
                    t.getStyle(n, !0).setValue(i)
                }))
            }
        }]), t
    }();

    function nc(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    rc.ignoreChildTypes = ["title"];
    var ic = function (t) {
        xs(r, t);
        var e = nc(r);

        function r(t, n, i) {
            return jo(this, r), e.call(this, t, n, i)
        }

        return r
    }(rc), ac = [].reverse, oc = [1, 2];
    H({target: "Array", proto: !0, forced: String(oc) === String(oc.reverse())}, {
        reverse: function () {
            return Nt(this) && (this.length = this.length), ac.call(this)
        }
    });
    var uc = yt("Array").reverse, sc = Array.prototype, cc = function (t) {
            var e = t.reverse;
            return t === sc || t instanceof Array && e === sc.reverse ? uc : e
        }, lc = Ye.indexOf, fc = [].indexOf, hc = !!fc && 1 / [1].indexOf(1, -0) < 0, pc = Vi("indexOf"),
        yc = Wt("indexOf", {ACCESSORS: !0, 1: 0});
    H({target: "Array", proto: !0, forced: hc || !pc || !yc}, {
        indexOf: function (t) {
            return hc ? fc.apply(this, arguments) || 0 : lc(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var vc = yt("Array").indexOf, gc = Array.prototype, dc = function (t) {
        var e = t.indexOf;
        return t === gc || t instanceof Array && e === gc.indexOf ? vc : e
    }, mc = qi;
    H({target: "Reflect", stat: !0}, {
        get: function t(e, r) {
            var n, i, a = arguments.length < 3 ? e : arguments[2];
            return I(e) === a ? e[r] : (n = O.f(e, r)) ? b(n, "value") ? n.value : void 0 === n.get ? void 0 : n.get.call(a) : d(i = Ie(e)) ? t(i, r, a) : void 0
        }
    });
    var xc = D.Reflect.get;
    var bc = function (t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Os(t));) ;
        return t
    }, wc = r((function (t) {
        function e(r, n, i) {
            return "undefined" != typeof Reflect && xc ? t.exports = e = xc : t.exports = e = function (t, e, r) {
                var n = bc(t, e);
                if (n) {
                    var i = mc(n, e);
                    return i.get ? i.get.call(r) : i.value
                }
            }, e(r, n, i || r)
        }

        t.exports = e
    }));

    function Sc(t) {
        var e = Ku(t).call(t);
        return /^('|")/.test(e) ? e : '"'.concat(e, '"')
    }

    function Ac(t) {
        if (!t) return "";
        var e = Ku(t).call(t).toLowerCase();
        switch (e) {
            case"normal":
            case"italic":
            case"oblique":
            case"inherit":
            case"initial":
            case"unset":
                return e;
            default:
                return /^oblique\s+(-|)\d+deg$/.test(e) ? e : ""
        }
    }

    function kc(t) {
        if (!t) return "";
        var e = Ku(t).call(t).toLowerCase();
        switch (e) {
            case"normal":
            case"bold":
            case"lighter":
            case"bolder":
            case"inherit":
            case"initial":
            case"unset":
                return e;
            default:
                return /^[\d.]+$/.test(e) ? e : ""
        }
    }

    var Tc = function () {
        function t(e, r, n, i, a, o) {
            jo(this, t);
            var u = o ? "string" == typeof o ? t.parse(o) : o : {};
            this.fontFamily = a || u.fontFamily, this.fontSize = i || u.fontSize, this.fontStyle = e || u.fontStyle, this.fontWeight = n || u.fontWeight, this.fontVariant = r || u.fontVariant
        }

        return Fo(t, [{
            key: "toString", value: function () {
                var t, e, r;
                return Ku(t = [Ac(this.fontStyle), this.fontVariant, kc(this.fontWeight), this.fontSize, (e = this.fontFamily, "undefined" == typeof process ? e : ee(r = Ku(e).call(e).split(",")).call(r, Sc).join(","))].join(" ")).call(t)
            }
        }], [{
            key: "parse", value: function () {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = arguments.length > 1 ? arguments[1] : void 0, i = "", a = "", o = "", u = "", s = "",
                    c = Ku(e = re(r)).call(e).split(" "),
                    l = {fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1};
                return Hi(c).call(c, (function (e) {
                    var r, n, c;
                    switch (!0) {
                        case!l.fontStyle && Hs(r = t.styles).call(r, e):
                            "inherit" !== e && (i = e), l.fontStyle = !0;
                            break;
                        case!l.fontVariant && Hs(n = t.variants).call(n, e):
                            "inherit" !== e && (a = e), l.fontStyle = !0, l.fontVariant = !0;
                            break;
                        case!l.fontWeight && Hs(c = t.weights).call(c, e):
                            "inherit" !== e && (o = e), l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0;
                            break;
                        case!l.fontSize:
                            if ("inherit" !== e) {
                                var f = e.split("/"), h = ci(f, 1);
                                u = h[0]
                            }
                            l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0, l.fontSize = !0;
                            break;
                        default:
                            "inherit" !== e && (s += e)
                    }
                })), new t(i, a, o, u, s, n)
            }
        }]), t
    }();
    Tc.styles = "normal|italic|oblique|inherit", Tc.variants = "normal|small-caps|inherit", Tc.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
    var Oc = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.NaN,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.NaN,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.NaN,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Number.NaN;
            jo(this, t), this.x1 = e, this.y1 = r, this.x2 = n, this.y2 = i, this.addPoint(e, r), this.addPoint(n, i)
        }

        return Fo(t, [{
            key: "addPoint", value: function (t, e) {
                void 0 !== t && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), void 0 !== e && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e))
            }
        }, {
            key: "addX", value: function (t) {
                this.addPoint(t, null)
            }
        }, {
            key: "addY", value: function (t) {
                this.addPoint(null, t)
            }
        }, {
            key: "addBoundingBox", value: function (t) {
                if (t) {
                    var e = t.x1, r = t.y1, n = t.x2, i = t.y2;
                    this.addPoint(e, r), this.addPoint(n, i)
                }
            }
        }, {
            key: "sumCubic", value: function (t, e, r, n, i) {
                return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * r + 3 * (1 - t) * Math.pow(t, 2) * n + Math.pow(t, 3) * i
            }
        }, {
            key: "bezierCurveAdd", value: function (t, e, r, n, i) {
                var a = 6 * e - 12 * r + 6 * n, o = -3 * e + 9 * r - 9 * n + 3 * i, u = 3 * r - 3 * e;
                if (0 !== o) {
                    var s = Math.pow(a, 2) - 4 * u * o;
                    if (!(s < 0)) {
                        var c = (-a + Math.sqrt(s)) / (2 * o);
                        0 < c && c < 1 && (t ? this.addX(this.sumCubic(c, e, r, n, i)) : this.addY(this.sumCubic(c, e, r, n, i)));
                        var l = (-a - Math.sqrt(s)) / (2 * o);
                        0 < l && l < 1 && (t ? this.addX(this.sumCubic(l, e, r, n, i)) : this.addY(this.sumCubic(l, e, r, n, i)))
                    }
                } else {
                    if (0 === a) return;
                    var f = -u / a;
                    0 < f && f < 1 && (t ? this.addX(this.sumCubic(f, e, r, n, i)) : this.addY(this.sumCubic(f, e, r, n, i)))
                }
            }
        }, {
            key: "addBezierCurve", value: function (t, e, r, n, i, a, o, u) {
                this.addPoint(t, e), this.addPoint(o, u), this.bezierCurveAdd(!0, t, r, i, o), this.bezierCurveAdd(!1, e, n, a, u)
            }
        }, {
            key: "addQuadraticCurve", value: function (t, e, r, n, i, a) {
                var o = t + 2 / 3 * (r - t), u = e + 2 / 3 * (n - e), s = o + 1 / 3 * (i - t), c = u + 1 / 3 * (a - e);
                this.addBezierCurve(t, e, o, s, u, c, i, a)
            }
        }, {
            key: "isPointInBox", value: function (t, e) {
                var r = this.x1, n = this.y1, i = this.x2, a = this.y2;
                return r <= t && t <= i && n <= e && e <= a
            }
        }, {
            key: "x", get: function () {
                return this.x1
            }
        }, {
            key: "y", get: function () {
                return this.y1
            }
        }, {
            key: "width", get: function () {
                return this.x2 - this.x1
            }
        }, {
            key: "height", get: function () {
                return this.y2 - this.y1
            }
        }]), t
    }();

    function Pc(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Ec = function (t) {
        xs(r, t);
        var e = Pc(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).modifiedEmSizeStack = !1, t
        }

        return Fo(r, [{
            key: "calculateOpacity", value: function () {
                for (var t = 1, e = this; e;) {
                    var r = e.getStyle("opacity", !1, !0);
                    r.hasValue(!0) && (t *= r.getNumber()), e = e.parent
                }
                return t
            }
        }, {
            key: "setContext", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!e) {
                    var r = this.getStyle("fill"), n = this.getStyle("fill-opacity"), i = this.getStyle("stroke"),
                        a = this.getStyle("stroke-opacity");
                    if (r.isUrlDefinition()) {
                        var o = r.getFillStyleDefinition(this, n);
                        o && (t.fillStyle = o)
                    } else if (r.hasValue()) {
                        "currentColor" === r.getString() && r.setValue(this.getStyle("color").getColor());
                        var u = r.getColor();
                        "inherit" !== u && (t.fillStyle = "none" === u ? "rgba(0,0,0,0)" : u)
                    }
                    if (n.hasValue()) {
                        var s = new ts(this.document, "fill", t.fillStyle).addOpacity(n).getColor();
                        t.fillStyle = s
                    }
                    if (i.isUrlDefinition()) {
                        var c = i.getFillStyleDefinition(this, a);
                        c && (t.strokeStyle = c)
                    } else if (i.hasValue()) {
                        "currentColor" === i.getString() && i.setValue(this.getStyle("color").getColor());
                        var l = i.getString();
                        "inherit" !== l && (t.strokeStyle = "none" === l ? "rgba(0,0,0,0)" : l)
                    }
                    if (a.hasValue()) {
                        var f = new ts(this.document, "stroke", t.strokeStyle).addOpacity(a).getString();
                        t.strokeStyle = f
                    }
                    var h = this.getStyle("stroke-width");
                    if (h.hasValue()) {
                        var p = h.getPixels();
                        t.lineWidth = p || xi
                    }
                    var y = this.getStyle("stroke-linecap"), v = this.getStyle("stroke-linejoin"),
                        g = this.getStyle("stroke-miterlimit"), d = this.getStyle("paint-order"),
                        m = this.getStyle("stroke-dasharray"), x = this.getStyle("stroke-dashoffset");
                    if (y.hasValue() && (t.lineCap = y.getString()), v.hasValue() && (t.lineJoin = v.getString()), g.hasValue() && (t.miterLimit = g.getNumber()), d.hasValue() && (t.paintOrder = d.getValue()), m.hasValue() && "none" !== m.getString()) {
                        var b = ae(m.getString());
                        void 0 !== t.setLineDash ? t.setLineDash(b) : void 0 !== t.webkitLineDash ? t.webkitLineDash = b : void 0 === t.mozDash || 1 === b.length && 0 === b[0] || (t.mozDash = b);
                        var w = x.getPixels();
                        void 0 !== t.lineDashOffset ? t.lineDashOffset = w : void 0 !== t.webkitLineDashOffset ? t.webkitLineDashOffset = w : void 0 !== t.mozDashOffset && (t.mozDashOffset = w)
                    }
                }
                if (this.modifiedEmSizeStack = !1, void 0 !== t.font) {
                    var S = this.getStyle("font"), A = this.getStyle("font-style"), k = this.getStyle("font-variant"),
                        T = this.getStyle("font-weight"), O = this.getStyle("font-size"),
                        P = this.getStyle("font-family"),
                        E = new Tc(A.getString(), k.getString(), T.getString(), O.hasValue() ? "".concat(O.getPixels(!0), "px") : "", P.getString(), Tc.parse(S.getString(), t.font));
                    A.setValue(E.fontStyle), k.setValue(E.fontVariant), T.setValue(E.fontWeight), O.setValue(E.fontSize), P.setValue(E.fontFamily), t.font = E.toString(), O.isPixels() && (this.document.emSize = O.getPixels(), this.modifiedEmSizeStack = !0)
                }
                e || (this.applyEffects(t), t.globalAlpha = this.calculateOpacity())
            }
        }, {
            key: "clearContext", value: function (t) {
                wc(Os(r.prototype), "clearContext", this).call(this, t), this.modifiedEmSizeStack && this.document.popEmSize()
            }
        }]), r
    }(rc);

    function Cc(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Mc = function (t) {
        xs(r, t);
        var e = Cc(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, (this instanceof r ? this.constructor : void 0) === r || i)).type = "text", a.x = 0, a.y = 0, a.measureCache = -1, a
        }

        return Fo(r, [{
            key: "setContext", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                wc(Os(r.prototype), "setContext", this).call(this, t, e);
                var n = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
                n && (t.textBaseline = n)
            }
        }, {
            key: "initializeCoordinates", value: function (t) {
                this.x = this.getAttribute("x").getPixels("x"), this.y = this.getAttribute("y").getPixels("y");
                var e = this.getAttribute("dx"), r = this.getAttribute("dy");
                e.hasValue() && (this.x += e.getPixels("x")), r.hasValue() && (this.y += r.getPixels("y")), this.x += this.getAnchorDelta(t, this, 0)
            }
        }, {
            key: "getBoundingBox", value: function (t) {
                var e, r = this;
                if ("text" !== this.type) return this.getTElementBoundingBox(t);
                this.initializeCoordinates(t);
                var n = null;
                return Hi(e = this.children).call(e, (function (e, i) {
                    var a = r.getChildBoundingBox(t, r, r, i);
                    n ? n.addBoundingBox(a) : n = a
                })), n
            }
        }, {
            key: "getFontSize", value: function () {
                var t = this.document, e = this.parent, r = Tc.parse(t.ctx.font).fontSize;
                return e.getStyle("font-size").getNumber(r)
            }
        }, {
            key: "getTElementBoundingBox", value: function (t) {
                var e = this.getFontSize();
                return new Oc(this.x, this.y - e, this.x + this.measureText(t), this.y)
            }
        }, {
            key: "getGlyph", value: function (t, e, r) {
                var n = e[r], i = null;
                if (t.isArabic) {
                    var a = e.length, o = e[r - 1], u = e[r + 1], s = "isolated";
                    (0 === r || " " === o) && r < a - 2 && " " !== u && (s = "terminal"), r > 0 && " " !== o && r < a - 2 && " " !== u && (s = "medial"), r > 0 && " " !== o && (r === a - 1 || " " === u) && (s = "initial"), void 0 !== t.glyphs[n] && ((i = t.glyphs[n][s]) || "glyph" !== t.glyphs[n].type || (i = t.glyphs[n]))
                } else i = t.glyphs[n];
                return i || (i = t.missingGlyph), i
            }
        }, {
            key: "getText", value: function () {
                return ""
            }
        }, {
            key: "getTextFromNode", value: function (t) {
                var e = t || this.node, r = Xs(e.parentNode.childNodes), n = dc(r).call(r, e), i = r.length - 1,
                    a = re(e.value || e.text || e.textContent || "");
                return 0 === n && (a = ne(a)), n === i && (a = ie(a)), a
            }
        }, {
            key: "renderChildren", value: function (t) {
                var e, r = this;
                if ("text" === this.type) {
                    this.initializeCoordinates(t), Hi(e = this.children).call(e, (function (e, n) {
                        r.renderChild(t, r, r, n)
                    }));
                    var n = this.document.screen.mouse;
                    n.isWorking() && n.checkBoundingBox(this, this.getBoundingBox(t))
                } else this.renderTElementChildren(t)
            }
        }, {
            key: "renderTElementChildren", value: function (t) {
                var e = this.document, r = this.parent, n = this.getText(),
                    i = r.getStyle("font-family").getDefinition();
                if (i) for (var a, o = i.fontFace.unitsPerEm, u = Tc.parse(e.ctx.font), s = r.getStyle("font-size").getNumber(u.fontSize), c = r.getStyle("font-style").getString(u.fontStyle), l = s / o, f = i.isRTL ? cc(a = n.split("")).call(a).join("") : n, h = ae(r.getAttribute("dx").getString()), p = f.length, y = 0; y < p; y++) {
                    var v = this.getGlyph(i, f, y);
                    t.translate(this.x, this.y), t.scale(l, -l);
                    var g = t.lineWidth;
                    t.lineWidth = t.lineWidth * o / s, "italic" === c && t.transform(1, 0, .4, 1, 0, 0), v.render(t), "italic" === c && t.transform(1, 0, -.4, 1, 0, 0), t.lineWidth = g, t.scale(1 / l, -1 / l), t.translate(-this.x, -this.y), this.x += s * (v.horizAdvX || i.horizAdvX) / o, void 0 === h[y] || isNaN(h[y]) || (this.x += h[y])
                } else {
                    var d = this.x, m = this.y;
                    "stroke" === t.paintOrder ? (t.strokeStyle && t.strokeText(n, d, m), t.fillStyle && t.fillText(n, d, m)) : (t.fillStyle && t.fillText(n, d, m), t.strokeStyle && t.strokeText(n, d, m))
                }
            }
        }, {
            key: "getAnchorDelta", value: function (t, e, r) {
                var n = this.getStyle("text-anchor").getString("start");
                if ("start" !== n) {
                    for (var i = e.children, a = i.length, o = null, u = 0, s = r; s < a && (o = i[s], !(s > r && o.getAttribute("x").hasValue() || o.getAttribute("text-anchor").hasValue())); s++) u += o.measureTextRecursive(t);
                    return -1 * ("end" === n ? u : u / 2)
                }
                return 0
            }
        }, {
            key: "adjustChildCoordinates", value: function (t, e, r, n) {
                var i = r.children[n];
                if ("function" != typeof i.measureText) return i;
                t.save(), i.setContext(t, !0);
                var a = i.getAttribute("x"), o = i.getAttribute("y"), u = i.getAttribute("dx"),
                    s = i.getAttribute("dy"), c = i.getAttribute("text-anchor").getString("start");
                if (0 === n && "textNode" !== i.type && (a.hasValue() || a.setValue(e.getAttribute("x").getValue("0")), o.hasValue() || o.setValue(e.getAttribute("y").getValue("0")), u.hasValue() || u.setValue(e.getAttribute("dx").getValue("0")), s.hasValue() || s.setValue(e.getAttribute("dy").getValue("0"))), a.hasValue()) {
                    if (i.x = a.getPixels("x") + e.getAnchorDelta(t, r, n), "start" !== c) {
                        var l = i.measureTextRecursive(t);
                        i.x += -1 * ("end" === c ? l : l / 2)
                    }
                    u.hasValue() && (i.x += u.getPixels("x"))
                } else {
                    if ("start" !== c) {
                        var f = i.measureTextRecursive(t);
                        e.x += -1 * ("end" === c ? f : f / 2)
                    }
                    u.hasValue() && (e.x += u.getPixels("x")), i.x = e.x
                }
                return e.x = i.x + i.measureText(t), o.hasValue() ? (i.y = o.getPixels("y"), s.hasValue() && (i.y += s.getPixels("y"))) : (s.hasValue() && (e.y += s.getPixels("y")), i.y = e.y), e.y = i.y, i.clearContext(t), t.restore(), i
            }
        }, {
            key: "getChildBoundingBox", value: function (t, e, r, n) {
                var i, a = this.adjustChildCoordinates(t, e, r, n);
                if ("function" != typeof a.getBoundingBox) return null;
                var o = a.getBoundingBox(t);
                return o ? (Hi(i = a.children).call(i, (function (r, n) {
                    var i = e.getChildBoundingBox(t, e, a, n);
                    o.addBoundingBox(i)
                })), o) : null
            }
        }, {
            key: "renderChild", value: function (t, e, r, n) {
                var i, a = this.adjustChildCoordinates(t, e, r, n);
                a.render(t), Hi(i = a.children).call(i, (function (r, n) {
                    e.renderChild(t, e, a, n)
                }))
            }
        }, {
            key: "measureTextRecursive", value: function (t) {
                var e;
                return $o(e = this.children).call(e, (function (e, r) {
                    return e + r.measureTextRecursive(t)
                }), this.measureText(t))
            }
        }, {
            key: "measureText", value: function (t) {
                var e = this.measureCache;
                if (~e) return e;
                var r = this.getText(), n = this.measureTargetText(t, r);
                return this.measureCache = n, n
            }
        }, {
            key: "measureTargetText", value: function (t, e) {
                if (!e.length) return 0;
                var r = this.parent, n = r.getStyle("font-family").getDefinition();
                if (n) {
                    for (var i, a = this.getFontSize(), o = n.isRTL ? cc(i = e.split("")).call(i).join("") : e, u = ae(r.getAttribute("dx").getString()), s = o.length, c = 0, l = 0; l < s; l++) {
                        c += (this.getGlyph(n, o, l).horizAdvX || n.horizAdvX) * a / n.fontFace.unitsPerEm, void 0 === u[l] || isNaN(u[l]) || (c += u[l])
                    }
                    return c
                }
                if (!t.measureText) return 10 * e.length;
                t.save(), this.setContext(t, !0);
                var f = t.measureText(e).width;
                return this.clearContext(t), t.restore(), f
            }
        }]), r
    }(Ec);

    function Nc(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Rc = function (t) {
        xs(r, t);
        var e = Nc(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, (this instanceof r ? this.constructor : void 0) === r || i)).type = "tspan", a.text = a.children.length > 0 ? "" : a.getTextFromNode(), a
        }

        return Fo(r, [{
            key: "getText", value: function () {
                return this.text
            }
        }]), r
    }(Mc);

    function _c(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Dc = function (t) {
        xs(r, t);
        var e = _c(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "textNode", t
        }

        return r
    }(Rc);
    H({target: "Array", proto: !0}, {
        fill: function (t) {
            for (var e = Mt(this), r = Q(e.length), n = arguments.length, i = He(n > 1 ? arguments[1] : void 0, r), a = n > 2 ? arguments[2] : void 0, o = void 0 === a ? r : He(a, r); o > i;) e[i++] = t;
            return e
        }
    });
    var Vc = yt("Array").fill, Lc = Array.prototype, Ic = function (t) {
        var e = t.fill;
        return t === Lc || t instanceof Array && e === Lc.fill ? Vc : e
    }, jc = function (t, e) {
        return (jc = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    };

    function zc(t, e) {
        function r() {
            this.constructor = t
        }

        jc(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function Fc(t, e) {
        var r = t[0], n = t[1];
        return [r * Math.cos(e) - n * Math.sin(e), r * Math.sin(e) + n * Math.cos(e)]
    }

    function Bc() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var r = 0; r < t.length; r++) if ("number" != typeof t[r]) throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof t[r] + " == typeof " + t[r]);
        return !0
    }

    var Uc = Math.PI;

    function Hc(t, e, r) {
        t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
        var n = t.rX, i = t.rY, a = t.x, o = t.y;
        n = Math.abs(t.rX), i = Math.abs(t.rY);
        var u = Fc([(e - a) / 2, (r - o) / 2], -t.xRot / 180 * Uc), s = u[0], c = u[1],
            l = Math.pow(s, 2) / Math.pow(n, 2) + Math.pow(c, 2) / Math.pow(i, 2);
        1 < l && (n *= Math.sqrt(l), i *= Math.sqrt(l)), t.rX = n, t.rY = i;
        var f = Math.pow(n, 2) * Math.pow(c, 2) + Math.pow(i, 2) * Math.pow(s, 2),
            h = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - f) / f)),
            p = n * c / i * h, y = -i * s / n * h, v = Fc([p, y], t.xRot / 180 * Uc);
        t.cX = v[0] + (e + a) / 2, t.cY = v[1] + (r + o) / 2, t.phi1 = Math.atan2((c - y) / i, (s - p) / n), t.phi2 = Math.atan2((-c - y) / i, (-s - p) / n), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * Uc), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * Uc), t.phi1 *= 180 / Uc, t.phi2 *= 180 / Uc
    }

    function Xc(t, e, r) {
        Bc(t, e, r);
        var n = t * t + e * e - r * r;
        if (0 > n) return [];
        if (0 === n) return [[t * r / (t * t + e * e), e * r / (t * t + e * e)]];
        var i = Math.sqrt(n);
        return [[(t * r + e * i) / (t * t + e * e), (e * r - t * i) / (t * t + e * e)], [(t * r - e * i) / (t * t + e * e), (e * r + t * i) / (t * t + e * e)]]
    }

    var Yc, qc = Math.PI / 180;

    function Gc(t, e, r) {
        return (1 - r) * t + r * e
    }

    function Qc(t, e, r, n) {
        return t + Math.cos(n / 180 * Uc) * e + Math.sin(n / 180 * Uc) * r
    }

    function Wc(t, e, r, n) {
        var i = e - t, a = r - e, o = 3 * i + 3 * (n - r) - 6 * a, u = 6 * (a - i), s = 3 * i;
        return Math.abs(o) < 1e-6 ? [-s / u] : function (t, e, r) {
            void 0 === r && (r = 1e-6);
            var n = t * t / 4 - e;
            if (n < -r) return [];
            if (n <= r) return [-t / 2];
            var i = Math.sqrt(n);
            return [-t / 2 - i, -t / 2 + i]
        }(u / o, s / o, 1e-6)
    }

    function $c(t, e, r, n, i) {
        var a = 1 - i;
        return t * (a * a * a) + e * (3 * a * a * i) + r * (3 * a * i * i) + n * (i * i * i)
    }

    !function (t) {
        function e() {
            return i((function (t, e, r) {
                return t.relative && (void 0 !== t.x1 && (t.x1 += e), void 0 !== t.y1 && (t.y1 += r), void 0 !== t.x2 && (t.x2 += e), void 0 !== t.y2 && (t.y2 += r), void 0 !== t.x && (t.x += e), void 0 !== t.y && (t.y += r), t.relative = !1), t
            }))
        }

        function r() {
            var t = NaN, e = NaN, r = NaN, n = NaN;
            return i((function (i, a, o) {
                return i.type & rl.SMOOTH_CURVE_TO && (i.type = rl.CURVE_TO, t = isNaN(t) ? a : t, e = isNaN(e) ? o : e, i.x1 = i.relative ? a - t : 2 * a - t, i.y1 = i.relative ? o - e : 2 * o - e), i.type & rl.CURVE_TO ? (t = i.relative ? a + i.x2 : i.x2, e = i.relative ? o + i.y2 : i.y2) : (t = NaN, e = NaN), i.type & rl.SMOOTH_QUAD_TO && (i.type = rl.QUAD_TO, r = isNaN(r) ? a : r, n = isNaN(n) ? o : n, i.x1 = i.relative ? a - r : 2 * a - r, i.y1 = i.relative ? o - n : 2 * o - n), i.type & rl.QUAD_TO ? (r = i.relative ? a + i.x1 : i.x1, n = i.relative ? o + i.y1 : i.y1) : (r = NaN, n = NaN), i
            }))
        }

        function n() {
            var t = NaN, e = NaN;
            return i((function (r, n, i) {
                if (r.type & rl.SMOOTH_QUAD_TO && (r.type = rl.QUAD_TO, t = isNaN(t) ? n : t, e = isNaN(e) ? i : e, r.x1 = r.relative ? n - t : 2 * n - t, r.y1 = r.relative ? i - e : 2 * i - e), r.type & rl.QUAD_TO) {
                    t = r.relative ? n + r.x1 : r.x1, e = r.relative ? i + r.y1 : r.y1;
                    var a = r.x1, o = r.y1;
                    r.type = rl.CURVE_TO, r.x1 = ((r.relative ? 0 : n) + 2 * a) / 3, r.y1 = ((r.relative ? 0 : i) + 2 * o) / 3, r.x2 = (r.x + 2 * a) / 3, r.y2 = (r.y + 2 * o) / 3
                } else t = NaN, e = NaN;
                return r
            }))
        }

        function i(t) {
            var e = 0, r = 0, n = NaN, i = NaN;
            return function (a) {
                if (isNaN(n) && !(a.type & rl.MOVE_TO)) throw new Error("path must start with moveto");
                var o = t(a, e, r, n, i);
                return a.type & rl.CLOSE_PATH && (e = n, r = i), void 0 !== a.x && (e = a.relative ? e + a.x : a.x), void 0 !== a.y && (r = a.relative ? r + a.y : a.y), a.type & rl.MOVE_TO && (n = e, i = r), o
            }
        }

        function a(t, e, r, n, a, o) {
            return Bc(t, e, r, n, a, o), i((function (i, u, s, c) {
                var l = i.x1, f = i.x2, h = i.relative && !isNaN(c), p = void 0 !== i.x ? i.x : h ? 0 : u,
                    y = void 0 !== i.y ? i.y : h ? 0 : s;

                function v(t) {
                    return t * t
                }

                i.type & rl.HORIZ_LINE_TO && 0 !== e && (i.type = rl.LINE_TO, i.y = i.relative ? 0 : s), i.type & rl.VERT_LINE_TO && 0 !== r && (i.type = rl.LINE_TO, i.x = i.relative ? 0 : u), void 0 !== i.x && (i.x = i.x * t + y * r + (h ? 0 : a)), void 0 !== i.y && (i.y = p * e + i.y * n + (h ? 0 : o)), void 0 !== i.x1 && (i.x1 = i.x1 * t + i.y1 * r + (h ? 0 : a)), void 0 !== i.y1 && (i.y1 = l * e + i.y1 * n + (h ? 0 : o)), void 0 !== i.x2 && (i.x2 = i.x2 * t + i.y2 * r + (h ? 0 : a)), void 0 !== i.y2 && (i.y2 = f * e + i.y2 * n + (h ? 0 : o));
                var g = t * n - e * r;
                if (void 0 !== i.xRot && (1 !== t || 0 !== e || 0 !== r || 1 !== n)) if (0 === g) delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag, i.type = rl.LINE_TO; else {
                    var d = i.xRot * Math.PI / 180, m = Math.sin(d), x = Math.cos(d), b = 1 / v(i.rX), w = 1 / v(i.rY),
                        S = v(x) * b + v(m) * w, A = 2 * m * x * (b - w), k = v(m) * b + v(x) * w,
                        T = S * n * n - A * e * n + k * e * e, O = A * (t * n + e * r) - 2 * (S * r * n + k * t * e),
                        P = S * r * r - A * t * r + k * t * t, E = (Math.atan2(O, T - P) + Math.PI) % Math.PI / 2,
                        C = Math.sin(E), M = Math.cos(E);
                    i.rX = Math.abs(g) / Math.sqrt(T * v(M) + O * C * M + P * v(C)), i.rY = Math.abs(g) / Math.sqrt(T * v(C) - O * C * M + P * v(M)), i.xRot = 180 * E / Math.PI
                }
                return void 0 !== i.sweepFlag && 0 > g && (i.sweepFlag = +!i.sweepFlag), i
            }))
        }

        t.ROUND = function (t) {
            function e(e) {
                return Math.round(e * t) / t
            }

            return void 0 === t && (t = 1e13), Bc(t), function (t) {
                return void 0 !== t.x1 && (t.x1 = e(t.x1)), void 0 !== t.y1 && (t.y1 = e(t.y1)), void 0 !== t.x2 && (t.x2 = e(t.x2)), void 0 !== t.y2 && (t.y2 = e(t.y2)), void 0 !== t.x && (t.x = e(t.x)), void 0 !== t.y && (t.y = e(t.y)), void 0 !== t.rX && (t.rX = e(t.rX)), void 0 !== t.rY && (t.rY = e(t.rY)), t
            }
        }, t.TO_ABS = e, t.TO_REL = function () {
            return i((function (t, e, r) {
                return t.relative || (void 0 !== t.x1 && (t.x1 -= e), void 0 !== t.y1 && (t.y1 -= r), void 0 !== t.x2 && (t.x2 -= e), void 0 !== t.y2 && (t.y2 -= r), void 0 !== t.x && (t.x -= e), void 0 !== t.y && (t.y -= r), t.relative = !0), t
            }))
        }, t.NORMALIZE_HVZ = function (t, e, r) {
            return void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), i((function (n, i, a, o, u) {
                if (isNaN(o) && !(n.type & rl.MOVE_TO)) throw new Error("path must start with moveto");
                return e && n.type & rl.HORIZ_LINE_TO && (n.type = rl.LINE_TO, n.y = n.relative ? 0 : a), r && n.type & rl.VERT_LINE_TO && (n.type = rl.LINE_TO, n.x = n.relative ? 0 : i), t && n.type & rl.CLOSE_PATH && (n.type = rl.LINE_TO, n.x = n.relative ? o - i : o, n.y = n.relative ? u - a : u), n.type & rl.ARC && (0 === n.rX || 0 === n.rY) && (n.type = rl.LINE_TO, delete n.rX, delete n.rY, delete n.xRot, delete n.lArcFlag, delete n.sweepFlag), n
            }))
        }, t.NORMALIZE_ST = r, t.QT_TO_C = n, t.INFO = i, t.SANITIZE = function (t) {
            void 0 === t && (t = 0), Bc(t);
            var e = NaN, r = NaN, n = NaN, a = NaN;
            return i((function (i, o, u, s, c) {
                var l = Math.abs, f = !1, h = 0, p = 0;
                if (i.type & rl.SMOOTH_CURVE_TO && (h = isNaN(e) ? 0 : o - e, p = isNaN(r) ? 0 : u - r), i.type & (rl.CURVE_TO | rl.SMOOTH_CURVE_TO) ? (e = i.relative ? o + i.x2 : i.x2, r = i.relative ? u + i.y2 : i.y2) : (e = NaN, r = NaN), i.type & rl.SMOOTH_QUAD_TO ? (n = isNaN(n) ? o : 2 * o - n, a = isNaN(a) ? u : 2 * u - a) : i.type & rl.QUAD_TO ? (n = i.relative ? o + i.x1 : i.x1, a = i.relative ? u + i.y1 : i.y2) : (n = NaN, a = NaN), i.type & rl.LINE_COMMANDS || i.type & rl.ARC && (0 === i.rX || 0 === i.rY || !i.lArcFlag) || i.type & rl.CURVE_TO || i.type & rl.SMOOTH_CURVE_TO || i.type & rl.QUAD_TO || i.type & rl.SMOOTH_QUAD_TO) {
                    var y = void 0 === i.x ? 0 : i.relative ? i.x : i.x - o,
                        v = void 0 === i.y ? 0 : i.relative ? i.y : i.y - u;
                    h = isNaN(n) ? void 0 === i.x1 ? h : i.relative ? i.x : i.x1 - o : n - o, p = isNaN(a) ? void 0 === i.y1 ? p : i.relative ? i.y : i.y1 - u : a - u;
                    var g = void 0 === i.x2 ? 0 : i.relative ? i.x : i.x2 - o,
                        d = void 0 === i.y2 ? 0 : i.relative ? i.y : i.y2 - u;
                    l(y) <= t && l(v) <= t && l(h) <= t && l(p) <= t && l(g) <= t && l(d) <= t && (f = !0)
                }
                return i.type & rl.CLOSE_PATH && l(o - s) <= t && l(u - c) <= t && (f = !0), f ? [] : i
            }))
        }, t.MATRIX = a, t.ROTATE = function (t, e, r) {
            void 0 === e && (e = 0), void 0 === r && (r = 0), Bc(t, e, r);
            var n = Math.sin(t), i = Math.cos(t);
            return a(i, n, -n, i, e - e * i + r * n, r - e * n - r * i)
        }, t.TRANSLATE = function (t, e) {
            return void 0 === e && (e = 0), Bc(t, e), a(1, 0, 0, 1, t, e)
        }, t.SCALE = function (t, e) {
            return void 0 === e && (e = t), Bc(t, e), a(t, 0, 0, e, 0, 0)
        }, t.SKEW_X = function (t) {
            return Bc(t), a(1, 0, Math.atan(t), 1, 0, 0)
        }, t.SKEW_Y = function (t) {
            return Bc(t), a(1, Math.atan(t), 0, 1, 0, 0)
        }, t.X_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), Bc(t), a(-1, 0, 0, 1, t, 0)
        }, t.Y_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), Bc(t), a(1, 0, 0, -1, 0, t)
        }, t.A_TO_C = function () {
            return i((function (t, e, r) {
                return rl.ARC === t.type ? function (t, e, r) {
                    var n, i, a, o;
                    t.cX || Hc(t, e, r);
                    for (var u = Math.min(t.phi1, t.phi2), s = Math.max(t.phi1, t.phi2) - u, c = Math.ceil(s / 90), l = new Array(c), f = e, h = r, p = 0; p < c; p++) {
                        var y = Gc(t.phi1, t.phi2, p / c), v = Gc(t.phi1, t.phi2, (p + 1) / c), g = v - y,
                            d = 4 / 3 * Math.tan(g * qc / 4),
                            m = [Math.cos(y * qc) - d * Math.sin(y * qc), Math.sin(y * qc) + d * Math.cos(y * qc)],
                            x = m[0], b = m[1], w = [Math.cos(v * qc), Math.sin(v * qc)], S = w[0], A = w[1],
                            k = [S + d * Math.sin(v * qc), A - d * Math.cos(v * qc)], T = k[0], O = k[1];
                        l[p] = {relative: t.relative, type: rl.CURVE_TO};
                        var P = function (e, r) {
                            var n = Fc([e * t.rX, r * t.rY], t.xRot), i = n[0], a = n[1];
                            return [t.cX + i, t.cY + a]
                        };
                        n = P(x, b), l[p].x1 = n[0], l[p].y1 = n[1], i = P(T, O), l[p].x2 = i[0], l[p].y2 = i[1], a = P(S, A), l[p].x = a[0], l[p].y = a[1], t.relative && (l[p].x1 -= f, l[p].y1 -= h, l[p].x2 -= f, l[p].y2 -= h, l[p].x -= f, l[p].y -= h), f = (o = [l[p].x, l[p].y])[0], h = o[1]
                    }
                    return l
                }(t, t.relative ? 0 : e, t.relative ? 0 : r) : t
            }))
        }, t.ANNOTATE_ARCS = function () {
            return i((function (t, e, r) {
                return t.relative && (e = 0, r = 0), rl.ARC === t.type && Hc(t, e, r), t
            }))
        }, t.CLONE = function () {
            return function (t) {
                var e = {};
                for (var r in t) e[r] = t[r];
                return e
            }
        }, t.CALCULATE_BOUNDS = function () {
            var t = e(), a = n(), o = r(), u = i((function (e, r, n) {
                var i = o(a(t(function (t) {
                    var e = {};
                    for (var r in t) e[r] = t[r];
                    return e
                }(e))));

                function s(t) {
                    t > u.maxX && (u.maxX = t), t < u.minX && (u.minX = t)
                }

                function c(t) {
                    t > u.maxY && (u.maxY = t), t < u.minY && (u.minY = t)
                }

                if (i.type & rl.DRAWING_COMMANDS && (s(r), c(n)), i.type & rl.HORIZ_LINE_TO && s(i.x), i.type & rl.VERT_LINE_TO && c(i.y), i.type & rl.LINE_TO && (s(i.x), c(i.y)), i.type & rl.CURVE_TO) {
                    s(i.x), c(i.y);
                    for (var l = 0, f = Wc(r, i.x1, i.x2, i.x); l < f.length; l++) 0 < (P = f[l]) && 1 > P && s($c(r, i.x1, i.x2, i.x, P));
                    for (var h = 0, p = Wc(n, i.y1, i.y2, i.y); h < p.length; h++) 0 < (P = p[h]) && 1 > P && c($c(n, i.y1, i.y2, i.y, P))
                }
                if (i.type & rl.ARC) {
                    s(i.x), c(i.y), Hc(i, r, n);
                    for (var y = i.xRot / 180 * Math.PI, v = Math.cos(y) * i.rX, g = Math.sin(y) * i.rX, d = -Math.sin(y) * i.rY, m = Math.cos(y) * i.rY, x = i.phi1 < i.phi2 ? [i.phi1, i.phi2] : -180 > i.phi2 ? [i.phi2 + 360, i.phi1 + 360] : [i.phi2, i.phi1], b = x[0], w = x[1], S = function (t) {
                        var e = t[0], r = t[1], n = 180 * Math.atan2(r, e) / Math.PI;
                        return n < b ? n + 360 : n
                    }, A = 0, k = Xc(d, -v, 0).map(S); A < k.length; A++) (P = k[A]) > b && P < w && s(Qc(i.cX, v, d, P));
                    for (var T = 0, O = Xc(m, -g, 0).map(S); T < O.length; T++) {
                        var P;
                        (P = O[T]) > b && P < w && c(Qc(i.cY, g, m, P))
                    }
                }
                return e
            }));
            return u.minX = 1 / 0, u.maxX = -1 / 0, u.minY = 1 / 0, u.maxY = -1 / 0, u
        }
    }(Yc || (Yc = {}));
    var Zc, Kc = function () {
            function t() {
            }

            return t.prototype.round = function (t) {
                return this.transform(Yc.ROUND(t))
            }, t.prototype.toAbs = function () {
                return this.transform(Yc.TO_ABS())
            }, t.prototype.toRel = function () {
                return this.transform(Yc.TO_REL())
            }, t.prototype.normalizeHVZ = function (t, e, r) {
                return this.transform(Yc.NORMALIZE_HVZ(t, e, r))
            }, t.prototype.normalizeST = function () {
                return this.transform(Yc.NORMALIZE_ST())
            }, t.prototype.qtToC = function () {
                return this.transform(Yc.QT_TO_C())
            }, t.prototype.aToC = function () {
                return this.transform(Yc.A_TO_C())
            }, t.prototype.sanitize = function (t) {
                return this.transform(Yc.SANITIZE(t))
            }, t.prototype.translate = function (t, e) {
                return this.transform(Yc.TRANSLATE(t, e))
            }, t.prototype.scale = function (t, e) {
                return this.transform(Yc.SCALE(t, e))
            }, t.prototype.rotate = function (t, e, r) {
                return this.transform(Yc.ROTATE(t, e, r))
            }, t.prototype.matrix = function (t, e, r, n, i, a) {
                return this.transform(Yc.MATRIX(t, e, r, n, i, a))
            }, t.prototype.skewX = function (t) {
                return this.transform(Yc.SKEW_X(t))
            }, t.prototype.skewY = function (t) {
                return this.transform(Yc.SKEW_Y(t))
            }, t.prototype.xSymmetry = function (t) {
                return this.transform(Yc.X_AXIS_SYMMETRY(t))
            }, t.prototype.ySymmetry = function (t) {
                return this.transform(Yc.Y_AXIS_SYMMETRY(t))
            }, t.prototype.annotateArcs = function () {
                return this.transform(Yc.ANNOTATE_ARCS())
            }, t
        }(), Jc = function (t) {
            return " " === t || "\t" === t || "\r" === t || "\n" === t
        }, tl = function (t) {
            return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0)
        }, el = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.curNumber = "", e.curCommandType = -1, e.curCommandRelative = !1, e.canParseCommandOrComma = !0, e.curNumberHasExp = !1, e.curNumberHasExpDigits = !1, e.curNumberHasDecimal = !1, e.curArgs = [], e
            }

            return zc(e, t), e.prototype.finish = function (t) {
                if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
                return t
            }, e.prototype.parse = function (t, e) {
                var r = this;
                void 0 === e && (e = []);
                for (var n = function (t) {
                    e.push(t), r.curArgs.length = 0, r.canParseCommandOrComma = !0
                }, i = 0; i < t.length; i++) {
                    var a = t[i],
                        o = !(this.curCommandType !== rl.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber),
                        u = tl(a) && ("0" === this.curNumber && "0" === a || o);
                    if (!tl(a) || u) if ("e" !== a && "E" !== a) if ("-" !== a && "+" !== a || !this.curNumberHasExp || this.curNumberHasExpDigits) if ("." !== a || this.curNumberHasExp || this.curNumberHasDecimal || o) {
                        if (this.curNumber && -1 !== this.curCommandType) {
                            var s = Number(this.curNumber);
                            if (isNaN(s)) throw new SyntaxError("Invalid number ending at " + i);
                            if (this.curCommandType === rl.ARC) if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                                if (0 > s) throw new SyntaxError('Expected positive number, got "' + s + '" at index "' + i + '"')
                            } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + i + '"');
                            this.curArgs.push(s), this.curArgs.length === nl[this.curCommandType] && (rl.HORIZ_LINE_TO === this.curCommandType ? n({
                                type: rl.HORIZ_LINE_TO,
                                relative: this.curCommandRelative,
                                x: s
                            }) : rl.VERT_LINE_TO === this.curCommandType ? n({
                                type: rl.VERT_LINE_TO,
                                relative: this.curCommandRelative,
                                y: s
                            }) : this.curCommandType === rl.MOVE_TO || this.curCommandType === rl.LINE_TO || this.curCommandType === rl.SMOOTH_QUAD_TO ? (n({
                                type: this.curCommandType,
                                relative: this.curCommandRelative,
                                x: this.curArgs[0],
                                y: this.curArgs[1]
                            }), rl.MOVE_TO === this.curCommandType && (this.curCommandType = rl.LINE_TO)) : this.curCommandType === rl.CURVE_TO ? n({
                                type: rl.CURVE_TO,
                                relative: this.curCommandRelative,
                                x1: this.curArgs[0],
                                y1: this.curArgs[1],
                                x2: this.curArgs[2],
                                y2: this.curArgs[3],
                                x: this.curArgs[4],
                                y: this.curArgs[5]
                            }) : this.curCommandType === rl.SMOOTH_CURVE_TO ? n({
                                type: rl.SMOOTH_CURVE_TO,
                                relative: this.curCommandRelative,
                                x2: this.curArgs[0],
                                y2: this.curArgs[1],
                                x: this.curArgs[2],
                                y: this.curArgs[3]
                            }) : this.curCommandType === rl.QUAD_TO ? n({
                                type: rl.QUAD_TO,
                                relative: this.curCommandRelative,
                                x1: this.curArgs[0],
                                y1: this.curArgs[1],
                                x: this.curArgs[2],
                                y: this.curArgs[3]
                            }) : this.curCommandType === rl.ARC && n({
                                type: rl.ARC,
                                relative: this.curCommandRelative,
                                rX: this.curArgs[0],
                                rY: this.curArgs[1],
                                xRot: this.curArgs[2],
                                lArcFlag: this.curArgs[3],
                                sweepFlag: this.curArgs[4],
                                x: this.curArgs[5],
                                y: this.curArgs[6]
                            })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0
                        }
                        if (!Jc(a)) if ("," === a && this.canParseCommandOrComma) this.canParseCommandOrComma = !1; else if ("+" !== a && "-" !== a && "." !== a) if (u) this.curNumber = a, this.curNumberHasDecimal = !1; else {
                            if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + i + ".");
                            if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + a + '" at index ' + i + ". Command cannot follow comma");
                            if (this.canParseCommandOrComma = !1, "z" !== a && "Z" !== a) if ("h" === a || "H" === a) this.curCommandType = rl.HORIZ_LINE_TO, this.curCommandRelative = "h" === a; else if ("v" === a || "V" === a) this.curCommandType = rl.VERT_LINE_TO, this.curCommandRelative = "v" === a; else if ("m" === a || "M" === a) this.curCommandType = rl.MOVE_TO, this.curCommandRelative = "m" === a; else if ("l" === a || "L" === a) this.curCommandType = rl.LINE_TO, this.curCommandRelative = "l" === a; else if ("c" === a || "C" === a) this.curCommandType = rl.CURVE_TO, this.curCommandRelative = "c" === a; else if ("s" === a || "S" === a) this.curCommandType = rl.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === a; else if ("q" === a || "Q" === a) this.curCommandType = rl.QUAD_TO, this.curCommandRelative = "q" === a; else if ("t" === a || "T" === a) this.curCommandType = rl.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === a; else {
                                if ("a" !== a && "A" !== a) throw new SyntaxError('Unexpected character "' + a + '" at index ' + i + ".");
                                this.curCommandType = rl.ARC, this.curCommandRelative = "a" === a
                            } else e.push({type: rl.CLOSE_PATH}), this.canParseCommandOrComma = !0, this.curCommandType = -1
                        } else this.curNumber = a, this.curNumberHasDecimal = "." === a
                    } else this.curNumber += a, this.curNumberHasDecimal = !0; else this.curNumber += a; else this.curNumber += a, this.curNumberHasExp = !0; else this.curNumber += a, this.curNumberHasExpDigits = this.curNumberHasExp
                }
                return e
            }, e.prototype.transform = function (t) {
                return Object.create(this, {
                    parse: {
                        value: function (e, r) {
                            void 0 === r && (r = []);
                            for (var n = 0, i = Object.getPrototypeOf(this).parse.call(this, e); n < i.length; n++) {
                                var a = i[n], o = t(a);
                                Array.isArray(o) ? r.push.apply(r, o) : r.push(o)
                            }
                            return r
                        }
                    }
                })
            }, e
        }(Kc), rl = function (t) {
            function e(r) {
                var n = t.call(this) || this;
                return n.commands = "string" == typeof r ? e.parse(r) : r, n
            }

            return zc(e, t), e.prototype.encode = function () {
                return e.encode(this.commands)
            }, e.prototype.getBounds = function () {
                var t = Yc.CALCULATE_BOUNDS();
                return this.transform(t), t
            }, e.prototype.transform = function (t) {
                for (var e = [], r = 0, n = this.commands; r < n.length; r++) {
                    var i = t(n[r]);
                    Array.isArray(i) ? e.push.apply(e, i) : e.push(i)
                }
                return this.commands = e, this
            }, e.encode = function (t) {
                return function (t) {
                    var e = "";
                    Array.isArray(t) || (t = [t]);
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        if (n.type === rl.CLOSE_PATH) e += "z"; else if (n.type === rl.HORIZ_LINE_TO) e += (n.relative ? "h" : "H") + n.x; else if (n.type === rl.VERT_LINE_TO) e += (n.relative ? "v" : "V") + n.y; else if (n.type === rl.MOVE_TO) e += (n.relative ? "m" : "M") + n.x + " " + n.y; else if (n.type === rl.LINE_TO) e += (n.relative ? "l" : "L") + n.x + " " + n.y; else if (n.type === rl.CURVE_TO) e += (n.relative ? "c" : "C") + n.x1 + " " + n.y1 + " " + n.x2 + " " + n.y2 + " " + n.x + " " + n.y; else if (n.type === rl.SMOOTH_CURVE_TO) e += (n.relative ? "s" : "S") + n.x2 + " " + n.y2 + " " + n.x + " " + n.y; else if (n.type === rl.QUAD_TO) e += (n.relative ? "q" : "Q") + n.x1 + " " + n.y1 + " " + n.x + " " + n.y; else if (n.type === rl.SMOOTH_QUAD_TO) e += (n.relative ? "t" : "T") + n.x + " " + n.y; else {
                            if (n.type !== rl.ARC) throw new Error('Unexpected command type "' + n.type + '" at index ' + r + ".");
                            e += (n.relative ? "a" : "A") + n.rX + " " + n.rY + " " + n.xRot + " " + +n.lArcFlag + " " + +n.sweepFlag + " " + n.x + " " + n.y
                        }
                    }
                    return e
                }(t)
            }, e.parse = function (t) {
                var e = new el, r = [];
                return e.parse(t, r), e.finish(r), r
            }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, e
        }(Kc),
        nl = ((Zc = {})[rl.MOVE_TO] = 2, Zc[rl.LINE_TO] = 2, Zc[rl.HORIZ_LINE_TO] = 1, Zc[rl.VERT_LINE_TO] = 1, Zc[rl.CLOSE_PATH] = 0, Zc[rl.QUAD_TO] = 4, Zc[rl.SMOOTH_QUAD_TO] = 2, Zc[rl.CURVE_TO] = 6, Zc[rl.SMOOTH_CURVE_TO] = 4, Zc[rl.ARC] = 7, Zc);

    function il(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var al = function (t) {
        xs(r, t);
        var e = il(r);

        function r(t) {
            var n;
            return jo(this, r), (n = e.call(this, t.replace(/[+-.]\s+/g, "-").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""))).control = null, n.start = null, n.current = null, n.command = null, n.commands = n.commands, n.i = -1, n.previousCommand = null, n.points = [], n.angles = [], n
        }

        return Fo(r, [{
            key: "reset", value: function () {
                this.i = -1, this.command = null, this.previousCommand = null, this.start = new rs(0, 0), this.control = new rs(0, 0), this.current = new rs(0, 0), this.points = [], this.angles = []
            }
        }, {
            key: "isEnd", value: function () {
                return this.i >= this.commands.length - 1
            }
        }, {
            key: "next", value: function () {
                var t = this.commands[++this.i];
                return this.previousCommand = this.command, this.command = t, t
            }
        }, {
            key: "getPoint", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "x",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
                    r = new rs(this.command[t], this.command[e]);
                return this.makeAbsolute(r)
            }
        }, {
            key: "getAsControlPoint", value: function (t, e) {
                var r = this.getPoint(t, e);
                return this.control = r, r
            }
        }, {
            key: "getAsCurrentPoint", value: function (t, e) {
                var r = this.getPoint(t, e);
                return this.current = r, r
            }
        }, {
            key: "getReflectedControlPoint", value: function () {
                var t = this.previousCommand.type;
                if (t !== rl.CURVE_TO && t !== rl.SMOOTH_CURVE_TO && t !== rl.QUAD_TO && t !== rl.SMOOTH_QUAD_TO) return this.current;
                var e = this.current, r = e.x, n = e.y, i = this.control, a = i.x, o = i.y;
                return new rs(2 * r - a, 2 * n - o)
            }
        }, {
            key: "makeAbsolute", value: function (t) {
                if (this.command.relative) {
                    var e = this.current, r = e.x, n = e.y;
                    t.x += r, t.y += n
                }
                return t
            }
        }, {
            key: "addMarker", value: function (t, e, r) {
                var n = this.points, i = this.angles;
                r && i.length > 0 && !i[i.length - 1] && (i[i.length - 1] = n[n.length - 1].angleTo(r)), this.addMarkerAngle(t, e ? e.angleTo(t) : null)
            }
        }, {
            key: "addMarkerAngle", value: function (t, e) {
                this.points.push(t), this.angles.push(e)
            }
        }, {
            key: "getMarkerPoints", value: function () {
                return this.points
            }
        }, {
            key: "getMarkerAngles", value: function () {
                for (var t = this.angles, e = t.length, r = 0; r < e; r++) if (!t[r]) for (var n = r + 1; n < e; n++) if (t[n]) {
                    t[r] = t[n];
                    break
                }
                return t
            }
        }]), r
    }(rl);

    function ol(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var ul = function (t) {
        xs(r, t);
        var e = ol(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, i)).type = "path", a.pathParser = null, a.pathParser = new al(a.getAttribute("d").getString()), a
        }

        return Fo(r, [{
            key: "path", value: function (t) {
                var e = this.pathParser, r = new Oc;
                for (e.reset(), t && t.beginPath(); !e.isEnd();) switch (e.next().type) {
                    case al.MOVE_TO:
                        this.pathM(t, r);
                        break;
                    case al.LINE_TO:
                        this.pathL(t, r);
                        break;
                    case al.HORIZ_LINE_TO:
                        this.pathH(t, r);
                        break;
                    case al.VERT_LINE_TO:
                        this.pathV(t, r);
                        break;
                    case al.CURVE_TO:
                        this.pathC(t, r);
                        break;
                    case al.SMOOTH_CURVE_TO:
                        this.pathS(t, r);
                        break;
                    case al.QUAD_TO:
                        this.pathQ(t, r);
                        break;
                    case al.SMOOTH_QUAD_TO:
                        this.pathT(t, r);
                        break;
                    case al.ARC:
                        this.pathA(t, r);
                        break;
                    case al.CLOSE_PATH:
                        this.pathZ(t, r)
                }
                return r
            }
        }, {
            key: "getBoundingBox", value: function (t) {
                return this.path()
            }
        }, {
            key: "getMarkers", value: function () {
                var t = this.pathParser, e = t.getMarkerPoints(), r = t.getMarkerAngles();
                return ee(e).call(e, (function (t, e) {
                    return [t, r[e]]
                }))
            }
        }, {
            key: "renderChildren", value: function (t) {
                this.path(t), this.document.screen.mouse.checkPath(this, t);
                var e = this.getStyle("fill-rule");
                "" !== t.fillStyle && ("inherit" !== e.getString("inherit") ? Ic(t).call(t, e.getString()) : Ic(t).call(t)), "" !== t.strokeStyle && t.stroke();
                var r = this.getMarkers();
                if (r) {
                    var n = r.length - 1, i = this.getStyle("marker-start"), a = this.getStyle("marker-mid"),
                        o = this.getStyle("marker-end");
                    if (i.isUrlDefinition()) {
                        var u = i.getDefinition(), s = ci(r[0], 2), c = s[0], l = s[1];
                        u.render(t, c, l)
                    }
                    if (a.isUrlDefinition()) for (var f = a.getDefinition(), h = 1; h < n; h++) {
                        var p = ci(r[h], 2), y = p[0], v = p[1];
                        f.render(t, y, v)
                    }
                    if (o.isUrlDefinition()) {
                        var g = o.getDefinition(), d = ci(r[n], 2), m = d[0], x = d[1];
                        g.render(t, m, x)
                    }
                }
            }
        }, {
            key: "pathM", value: function (t, e) {
                var n = this.pathParser, i = r.pathM(n).point, a = i.x, o = i.y;
                n.addMarker(i), e.addPoint(a, o), t && t.moveTo(a, o)
            }
        }, {
            key: "pathL", value: function (t, e) {
                var n = this.pathParser, i = r.pathL(n), a = i.current, o = i.point, u = o.x, s = o.y;
                n.addMarker(o, a), e.addPoint(u, s), t && t.lineTo(u, s)
            }
        }, {
            key: "pathH", value: function (t, e) {
                var n = this.pathParser, i = r.pathH(n), a = i.current, o = i.point, u = o.x, s = o.y;
                n.addMarker(o, a), e.addPoint(u, s), t && t.lineTo(u, s)
            }
        }, {
            key: "pathV", value: function (t, e) {
                var n = this.pathParser, i = r.pathV(n), a = i.current, o = i.point, u = o.x, s = o.y;
                n.addMarker(o, a), e.addPoint(u, s), t && t.lineTo(u, s)
            }
        }, {
            key: "pathC", value: function (t, e) {
                var n = this.pathParser, i = r.pathC(n), a = i.current, o = i.point, u = i.controlPoint,
                    s = i.currentPoint;
                n.addMarker(s, u, o), e.addBezierCurve(a.x, a.y, o.x, o.y, u.x, u.y, s.x, s.y), t && t.bezierCurveTo(o.x, o.y, u.x, u.y, s.x, s.y)
            }
        }, {
            key: "pathS", value: function (t, e) {
                var n = this.pathParser, i = r.pathS(n), a = i.current, o = i.point, u = i.controlPoint,
                    s = i.currentPoint;
                n.addMarker(s, u, o), e.addBezierCurve(a.x, a.y, o.x, o.y, u.x, u.y, s.x, s.y), t && t.bezierCurveTo(o.x, o.y, u.x, u.y, s.x, s.y)
            }
        }, {
            key: "pathQ", value: function (t, e) {
                var n = this.pathParser, i = r.pathQ(n), a = i.current, o = i.controlPoint, u = i.currentPoint;
                n.addMarker(u, o, o), e.addQuadraticCurve(a.x, a.y, o.x, o.y, u.x, u.y), t && t.quadraticCurveTo(o.x, o.y, u.x, u.y)
            }
        }, {
            key: "pathT", value: function (t, e) {
                var n = this.pathParser, i = r.pathT(n), a = i.current, o = i.controlPoint, u = i.currentPoint;
                n.addMarker(u, o, o), e.addQuadraticCurve(a.x, a.y, o.x, o.y, u.x, u.y), t && t.quadraticCurveTo(o.x, o.y, u.x, u.y)
            }
        }, {
            key: "pathA", value: function (t, e) {
                var n = this.pathParser, i = r.pathA(n), a = i.currentPoint, o = i.rX, u = i.rY, s = i.sweepFlag,
                    c = i.xAxisRotation, l = i.centp, f = i.a1, h = i.ad, p = 1 - s ? 1 : -1, y = f + p * (h / 2),
                    v = new rs(l.x + o * Math.cos(y), l.y + u * Math.sin(y));
                if (n.addMarkerAngle(v, y - p * Math.PI / 2), n.addMarkerAngle(a, y - p * Math.PI), e.addPoint(a.x, a.y), t && !isNaN(f) && !isNaN(h)) {
                    var g = o > u ? o : u, d = o > u ? 1 : o / u, m = o > u ? u / o : 1;
                    t.translate(l.x, l.y), t.rotate(c), t.scale(d, m), t.arc(0, 0, g, f, f + h, Boolean(1 - s)), t.scale(1 / d, 1 / m), t.rotate(-c), t.translate(-l.x, -l.y)
                }
            }
        }, {
            key: "pathZ", value: function (t, e) {
                r.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath()
            }
        }], [{
            key: "pathM", value: function (t) {
                var e = t.getAsCurrentPoint();
                return t.start = t.current, {point: e}
            }
        }, {
            key: "pathL", value: function (t) {
                return {current: t.current, point: t.getAsCurrentPoint()}
            }
        }, {
            key: "pathH", value: function (t) {
                var e = t.current, r = t.command, n = new rs((r.relative ? e.x : 0) + r.x, e.y);
                return t.current = n, {current: e, point: n}
            }
        }, {
            key: "pathV", value: function (t) {
                var e = t.current, r = t.command, n = new rs(e.x, (r.relative ? e.y : 0) + r.y);
                return t.current = n, {current: e, point: n}
            }
        }, {
            key: "pathC", value: function (t) {
                return {
                    current: t.current,
                    point: t.getPoint("x1", "y1"),
                    controlPoint: t.getAsControlPoint("x2", "y2"),
                    currentPoint: t.getAsCurrentPoint()
                }
            }
        }, {
            key: "pathS", value: function (t) {
                return {
                    current: t.current,
                    point: t.getReflectedControlPoint(),
                    controlPoint: t.getAsControlPoint("x2", "y2"),
                    currentPoint: t.getAsCurrentPoint()
                }
            }
        }, {
            key: "pathQ", value: function (t) {
                return {
                    current: t.current,
                    controlPoint: t.getAsControlPoint("x1", "y1"),
                    currentPoint: t.getAsCurrentPoint()
                }
            }
        }, {
            key: "pathT", value: function (t) {
                var e = t.current, r = t.getReflectedControlPoint();
                return t.control = r, {current: e, controlPoint: r, currentPoint: t.getAsCurrentPoint()}
            }
        }, {
            key: "pathA", value: function (t) {
                var e = t.current, r = t.command, n = r.rX, i = r.rY, a = r.xRot, o = r.lArcFlag, u = r.sweepFlag,
                    s = a * (Math.PI / 180), c = t.getAsCurrentPoint(),
                    l = new rs(Math.cos(s) * (e.x - c.x) / 2 + Math.sin(s) * (e.y - c.y) / 2, -Math.sin(s) * (e.x - c.x) / 2 + Math.cos(s) * (e.y - c.y) / 2),
                    f = Math.pow(l.x, 2) / Math.pow(n, 2) + Math.pow(l.y, 2) / Math.pow(i, 2);
                f > 1 && (n *= Math.sqrt(f), i *= Math.sqrt(f));
                var h = (o === u ? -1 : 1) * Math.sqrt((Math.pow(n, 2) * Math.pow(i, 2) - Math.pow(n, 2) * Math.pow(l.y, 2) - Math.pow(i, 2) * Math.pow(l.x, 2)) / (Math.pow(n, 2) * Math.pow(l.y, 2) + Math.pow(i, 2) * Math.pow(l.x, 2)));
                isNaN(h) && (h = 0);
                var p = new rs(h * n * l.y / i, h * -i * l.x / n),
                    y = new rs((e.x + c.x) / 2 + Math.cos(s) * p.x - Math.sin(s) * p.y, (e.y + c.y) / 2 + Math.sin(s) * p.x + Math.cos(s) * p.y),
                    v = Si([1, 0], [(l.x - p.x) / n, (l.y - p.y) / i]), g = [(l.x - p.x) / n, (l.y - p.y) / i],
                    d = [(-l.x - p.x) / n, (-l.y - p.y) / i], m = Si(g, d);
                return wi(g, d) <= -1 && (m = Math.PI), wi(g, d) >= 1 && (m = 0), {
                    currentPoint: c,
                    rX: n,
                    rY: i,
                    sweepFlag: u,
                    xAxisRotation: s,
                    centp: y,
                    a1: v,
                    ad: m
                }
            }
        }, {
            key: "pathZ", value: function (t) {
                t.current = t.start
            }
        }]), r
    }(Ec);

    function sl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var cl = function (t) {
        xs(r, t);
        var e = sl(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "svg", t.root = !1, t
        }

        return Fo(r, [{
            key: "setContext", value: function (t) {
                var e = this.document, n = e.screen, i = e.window, a = t.canvas;
                if (n.setDefaults(t), a.style && void 0 !== t.font && i && void 0 !== i.getComputedStyle) {
                    t.font = i.getComputedStyle(a).getPropertyValue("font");
                    var o = new ts(e, "fontSize", Tc.parse(t.font).fontSize);
                    o.hasValue() && (e.rootEmSize = o.getPixels("y"), e.emSize = e.rootEmSize)
                }
                this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
                var u = n.viewPort, s = u.width, c = u.height;
                this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
                var l = this.getAttribute("refX"), f = this.getAttribute("refY"), h = this.getAttribute("viewBox"),
                    p = h.hasValue() ? ae(h.getString()) : null,
                    y = !this.root && "visible" !== this.getStyle("overflow").getValue("hidden"), v = 0, g = 0, d = 0,
                    m = 0;
                p && (v = p[0], g = p[1]), this.root || (s = this.getStyle("width").getPixels("x"), c = this.getStyle("height").getPixels("y"), "marker" === this.type && (d = v, m = g, v = 0, g = 0)), n.viewPort.setCurrent(s, c), this.node && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), wc(Os(r.prototype), "setContext", this).call(this, t), t.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), p && (s = p[2], c = p[3]), e.setViewBox({
                    ctx: t,
                    aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                    width: n.viewPort.width,
                    desiredWidth: s,
                    height: n.viewPort.height,
                    desiredHeight: c,
                    minX: v,
                    minY: g,
                    refX: l.getValue(),
                    refY: f.getValue(),
                    clip: y,
                    clipX: d,
                    clipY: m
                }), p && (n.viewPort.removeCurrent(), n.viewPort.setCurrent(s, c))
            }
        }, {
            key: "clearContext", value: function (t) {
                wc(Os(r.prototype), "clearContext", this).call(this, t), this.document.screen.viewPort.removeCurrent()
            }
        }, {
            key: "resize", value: function (t) {
                var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = this.getAttribute("width", !0), a = this.getAttribute("height", !0),
                    o = this.getAttribute("viewBox"), u = this.getAttribute("style"), s = i.getNumber(0),
                    c = a.getNumber(0);
                if (n) if ("string" == typeof n) this.getAttribute("preserveAspectRatio", !0).setValue(n); else {
                    var l = this.getAttribute("preserveAspectRatio");
                    l.hasValue() && l.setValue(l.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"))
                }
                (i.setValue(t), a.setValue(r), o.hasValue()) || o.setValue(Ho(e = "0 0 ".concat(s || t, " ")).call(e, c || r));
                if (u.hasValue()) {
                    var f = this.getStyle("width"), h = this.getStyle("height");
                    f.hasValue() && f.setValue("".concat(t, "px")), h.hasValue() && h.setValue("".concat(r, "px"))
                }
            }
        }]), r
    }(Ec);

    function ll(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var fl = function (t) {
        xs(r, t);
        var e = ll(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "rect", t
        }

        return Fo(r, [{
            key: "path", value: function (t) {
                var e = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"),
                    n = this.getStyle("width", !1, !0).getPixels("x"),
                    i = this.getStyle("height", !1, !0).getPixels("y"), a = this.getAttribute("rx"),
                    o = this.getAttribute("ry"), u = a.getPixels("x"), s = o.getPixels("y");
                if (a.hasValue() && !o.hasValue() && (s = u), o.hasValue() && !a.hasValue() && (u = s), u = Math.min(u, n / 2), s = Math.min(s, i / 2), t) {
                    var c = (Math.sqrt(2) - 1) / 3 * 4;
                    t.beginPath(), i > 0 && n > 0 && (t.moveTo(e + u, r), t.lineTo(e + n - u, r), t.bezierCurveTo(e + n - u + c * u, r, e + n, r + s - c * s, e + n, r + s), t.lineTo(e + n, r + i - s), t.bezierCurveTo(e + n, r + i - s + c * s, e + n - u + c * u, r + i, e + n - u, r + i), t.lineTo(e + u, r + i), t.bezierCurveTo(e + u - c * u, r + i, e, r + i - s + c * s, e, r + i - s), t.lineTo(e, r + s), t.bezierCurveTo(e, r + s - c * s, e + u - c * u, r, e + u, r), t.closePath())
                }
                return new Oc(e, r, e + n, r + i)
            }
        }, {
            key: "getMarkers", value: function () {
                return null
            }
        }]), r
    }(ul);

    function hl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var pl = function (t) {
        xs(r, t);
        var e = hl(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "circle", t
        }

        return Fo(r, [{
            key: "path", value: function (t) {
                var e = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"),
                    n = this.getAttribute("r").getPixels();
                return t && n > 0 && (t.beginPath(), t.arc(e, r, n, 0, 2 * Math.PI, !1), t.closePath()), new Oc(e - n, r - n, e + n, r + n)
            }
        }, {
            key: "getMarkers", value: function () {
                return null
            }
        }]), r
    }(ul);

    function yl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var vl = function (t) {
        xs(r, t);
        var e = yl(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "ellipse", t
        }

        return Fo(r, [{
            key: "path", value: function (t) {
                var e = (Math.sqrt(2) - 1) / 3 * 4, r = this.getAttribute("rx").getPixels("x"),
                    n = this.getAttribute("ry").getPixels("y"), i = this.getAttribute("cx").getPixels("x"),
                    a = this.getAttribute("cy").getPixels("y");
                return t && r > 0 && n > 0 && (t.beginPath(), t.moveTo(i + r, a), t.bezierCurveTo(i + r, a + e * n, i + e * r, a + n, i, a + n), t.bezierCurveTo(i - e * r, a + n, i - r, a + e * n, i - r, a), t.bezierCurveTo(i - r, a - e * n, i - e * r, a - n, i, a - n), t.bezierCurveTo(i + e * r, a - n, i + r, a - e * n, i + r, a), t.closePath()), new Oc(i - r, a - n, i + r, a + n)
            }
        }, {
            key: "getMarkers", value: function () {
                return null
            }
        }]), r
    }(ul);

    function gl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var dl = function (t) {
        xs(r, t);
        var e = gl(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "line", t
        }

        return Fo(r, [{
            key: "getPoints", value: function () {
                return [new rs(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new rs(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))]
            }
        }, {
            key: "path", value: function (t) {
                var e = this.getPoints(), r = ci(e, 2), n = r[0], i = n.x, a = n.y, o = r[1], u = o.x, s = o.y;
                return t && (t.beginPath(), t.moveTo(i, a), t.lineTo(u, s)), new Oc(i, a, u, s)
            }
        }, {
            key: "getMarkers", value: function () {
                var t = this.getPoints(), e = ci(t, 2), r = e[0], n = e[1], i = r.angleTo(n);
                return [[r, i], [n, i]]
            }
        }]), r
    }(ul);

    function ml(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var xl = function (t) {
        xs(r, t);
        var e = ml(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, i)).type = "polyline", a.points = [], a.points = rs.parsePath(a.getAttribute("points").getString()), a
        }

        return Fo(r, [{
            key: "path", value: function (t) {
                var e = this.points, r = ci(e, 1)[0], n = r.x, i = r.y, a = new Oc(n, i);
                return t && (t.beginPath(), t.moveTo(n, i)), Hi(e).call(e, (function (e) {
                    var r = e.x, n = e.y;
                    a.addPoint(r, n), t && t.lineTo(r, n)
                })), a
            }
        }, {
            key: "getMarkers", value: function () {
                var t = this.points, e = t.length - 1, r = [];
                return Hi(t).call(t, (function (n, i) {
                    i !== e && r.push([n, n.angleTo(t[i + 1])])
                })), r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]), r
            }
        }]), r
    }(ul);

    function bl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var wl = function (t) {
        xs(r, t);
        var e = bl(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "polygon", t
        }

        return Fo(r, [{
            key: "path", value: function (t) {
                var e = wc(Os(r.prototype), "path", this).call(this, t), n = ci(this.points, 1)[0], i = n.x, a = n.y;
                return t && (t.lineTo(i, a), t.closePath()), e
            }
        }]), r
    }(xl), Sl = O.f;
    H({target: "Reflect", stat: !0}, {
        deleteProperty: function (t, e) {
            var r = Sl(I(t), e);
            return !(r && !r.configurable) && delete t[e]
        }
    });
    var Al = D.Reflect.deleteProperty;

    function kl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Tl = function (t) {
        xs(r, t);
        var e = kl(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "pattern", t
        }

        return Fo(r, [{
            key: "createPattern", value: function (t, e, r) {
                var n = this.getStyle("width").getPixels("x", !0), i = this.getStyle("height").getPixels("y", !0),
                    a = new cl(this.document, null);
                a.attributes.viewBox = new ts(this.document, "viewBox", this.getAttribute("viewBox").getValue()), a.attributes.width = new ts(this.document, "width", "".concat(n, "px")), a.attributes.height = new ts(this.document, "height", "".concat(i, "px")), a.attributes.transform = new ts(this.document, "transform", this.getAttribute("patternTransform").getValue()), a.children = this.children;
                var o = this.document.createCanvas(n, i), u = o.getContext("2d"), s = this.getAttribute("x"),
                    c = this.getAttribute("y");
                s.hasValue() && c.hasValue() && u.translate(s.getPixels("x", !0), c.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Al(this.styles, "fill-opacity");
                for (var l = -1; l <= 1; l++) for (var f = -1; f <= 1; f++) u.save(), a.attributes.x = new ts(this.document, "x", l * o.width), a.attributes.y = new ts(this.document, "y", f * o.height), a.render(u), u.restore();
                return t.createPattern(o, "repeat")
            }
        }]), r
    }(rc);

    function Ol(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Pl = function (t) {
        xs(r, t);
        var e = Ol(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "marker", t
        }

        return Fo(r, [{
            key: "render", value: function (t, e, r) {
                if (e) {
                    var n = e.x, i = e.y, a = this.getAttribute("orient").getValue("auto"),
                        o = this.getAttribute("markerUnits").getValue("strokeWidth");
                    t.translate(n, i), "auto" === a && t.rotate(r), "strokeWidth" === o && t.scale(t.lineWidth, t.lineWidth), t.save();
                    var u = new cl(this.document, null);
                    u.type = this.type, u.attributes.viewBox = new ts(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new ts(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new ts(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new ts(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new ts(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new ts(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new ts(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new ts(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(t), t.restore(), "strokeWidth" === o && t.scale(1 / t.lineWidth, 1 / t.lineWidth), "auto" === a && t.rotate(-r), t.translate(-n, -i)
                }
            }
        }]), r
    }(rc);

    function El(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Cl = function (t) {
        xs(r, t);
        var e = El(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "defs", t
        }

        return Fo(r, [{
            key: "render", value: function () {
            }
        }]), r
    }(rc);

    function Ml(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Nl = function (t) {
        xs(r, t);
        var e = Ml(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "g", t
        }

        return Fo(r, [{
            key: "getBoundingBox", value: function (t) {
                var e, r = new Oc;
                return Hi(e = this.children).call(e, (function (e) {
                    r.addBoundingBox(e.getBoundingBox(t))
                })), r
            }
        }]), r
    }(Ec);

    function Rl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var _l = function (t) {
        xs(r, t);
        var e = Rl(r);

        function r(t, n, i) {
            var a;
            jo(this, r), (a = e.call(this, t, n, i)).attributesToInherit = ["gradientUnits"], a.stops = [];
            var o = Ss(a), u = o.stops, s = o.children;
            return Hi(s).call(s, (function (t) {
                "stop" === t.type && u.push(t)
            })), a
        }

        return Fo(r, [{
            key: "getGradientUnits", value: function () {
                return this.getAttribute("gradientUnits").getString("objectBoundingBox")
            }
        }, {
            key: "createGradient", value: function (t, e, r) {
                var n = this, i = this;
                this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(i));
                var a = i.stops, o = this.getGradient(t, e);
                if (!o) return this.addParentOpacity(r, a[a.length - 1].color);
                if (Hi(a).call(a, (function (t) {
                    o.addColorStop(t.offset, n.addParentOpacity(r, t.color))
                })), this.getAttribute("gradientTransform").hasValue()) {
                    var u = this.document, s = u.screen, c = s.MAX_VIRTUAL_PIXELS, l = s.viewPort,
                        f = ci(l.viewPorts, 1)[0], h = new fl(u, null);
                    h.attributes.x = new ts(u, "x", -c / 3), h.attributes.y = new ts(u, "y", -c / 3), h.attributes.width = new ts(u, "width", c), h.attributes.height = new ts(u, "height", c);
                    var p = new Nl(u, null);
                    p.attributes.transform = new ts(u, "transform", this.getAttribute("gradientTransform").getValue()), p.children = [h];
                    var y = new cl(u, null);
                    y.attributes.x = new ts(u, "x", 0), y.attributes.y = new ts(u, "y", 0), y.attributes.width = new ts(u, "width", f.width), y.attributes.height = new ts(u, "height", f.height), y.children = [p];
                    var v = u.createCanvas(f.width, f.height), g = v.getContext("2d");
                    return g.fillStyle = o, y.render(g), g.createPattern(v, "no-repeat")
                }
                return o
            }
        }, {
            key: "inheritStopContainer", value: function (t) {
                var e, r = this;
                Hi(e = this.attributesToInherit).call(e, (function (e) {
                    !r.getAttribute(e).hasValue() && t.getAttribute(e).hasValue() && r.getAttribute(e, !0).setValue(t.getAttribute(e).getValue())
                }))
            }
        }, {
            key: "addParentOpacity", value: function (t, e) {
                return t.hasValue() ? new ts(this.document, "color", e).addOpacity(t).getColor() : e
            }
        }]), r
    }(rc);

    function Dl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Vl = function (t) {
        xs(r, t);
        var e = Dl(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, i)).type = "linearGradient", a.attributesToInherit.push("x1", "y1", "x2", "y2"), a
        }

        return Fo(r, [{
            key: "getGradient", value: function (t, e) {
                var r = "objectBoundingBox" === this.getGradientUnits(), n = r ? e.getBoundingBox(t) : null;
                if (r && !n) return null;
                this.getAttribute("x1").hasValue() || this.getAttribute("y1").hasValue() || this.getAttribute("x2").hasValue() || this.getAttribute("y2").hasValue() || (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
                var i = r ? n.x + n.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"),
                    a = r ? n.y + n.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"),
                    o = r ? n.x + n.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"),
                    u = r ? n.y + n.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
                return i === o && a === u ? null : t.createLinearGradient(i, a, o, u)
            }
        }]), r
    }(_l);

    function Ll(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Il = function (t) {
        xs(r, t);
        var e = Ll(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, i)).type = "radialGradient", a.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr"), a
        }

        return Fo(r, [{
            key: "getGradient", value: function (t, e) {
                var r = "objectBoundingBox" === this.getGradientUnits(), n = e.getBoundingBox(t);
                if (r && !n) return null;
                this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
                var i = r ? n.x + n.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"),
                    a = r ? n.y + n.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"),
                    o = i, u = a;
                this.getAttribute("fx").hasValue() && (o = r ? n.x + n.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = r ? n.y + n.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
                var s = r ? (n.width + n.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(),
                    c = this.getAttribute("fr").getPixels();
                return t.createRadialGradient(o, u, c, i, a, s)
            }
        }]), r
    }(_l);

    function jl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var zl = function (t) {
        xs(r, t);
        var e = jl(r);

        function r(t, n, i) {
            var a;
            jo(this, r), (a = e.call(this, t, n, i)).type = "stop";
            var o = Math.max(0, Math.min(1, a.getAttribute("offset").getNumber())), u = a.getStyle("stop-opacity"),
                s = a.getStyle("stop-color", !0);
            return "" === s.getString() && s.setValue("#000"), u.hasValue() && (s = s.addOpacity(u)), a.offset = o, a.color = s.getColor(), a
        }

        return r
    }(rc), Fl = yt("Array").values, Bl = Array.prototype, Ul = {DOMTokenList: !0, NodeList: !0}, Hl = function (t) {
        var e = t.values;
        return t === Bl || t instanceof Array && e === Bl.values || Ul.hasOwnProperty(ur(t)) ? Fl : e
    };

    function Xl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Yl = function (t) {
            xs(r, t);
            var e = Xl(r);

            function r(t, n, i) {
                var a;
                return jo(this, r), (a = e.call(this, t, n, i)).type = "animate", a.duration = 0, a.initialValue = null, a.initialUnits = "", a.removed = !1, a.frozen = !1, t.screen.animations.push(Ss(a)), a.begin = a.getAttribute("begin").getMilliseconds(), a.maxDuration = a.begin + a.getAttribute("dur").getMilliseconds(), a.from = a.getAttribute("from"), a.to = a.getAttribute("to"), a.values = a.getAttribute("values"), Hl(a).hasValue() && Hl(a).setValue(Hl(a).getString().split(";")), a
            }

            return Fo(r, [{
                key: "getProperty", value: function () {
                    var t = this.getAttribute("attributeType").getString(),
                        e = this.getAttribute("attributeName").getString();
                    return "CSS" === t ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0)
                }
            }, {
                key: "calcValue", value: function () {
                    var t, e = this.initialUnits, r = this.getProgress(), n = r.progress, i = r.from, a = r.to,
                        o = i.getNumber() + (a.getNumber() - i.getNumber()) * n;
                    return "%" === e && (o *= 100), Ho(t = "".concat(o)).call(t, e)
                }
            }, {
                key: "update", value: function (t) {
                    var e = this.parent, r = this.getProperty();
                    if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
                        var n = this.getAttribute("fill").getString("remove");
                        if ("indefinite" === this.getAttribute("repeatCount").getString() || "indefinite" === this.getAttribute("repeatDur").getString()) this.duration = 0; else if ("freeze" !== n || this.frozen) {
                            if ("remove" === n && !this.removed) return this.removed = !0, r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue), !0
                        } else this.frozen = !0, e.animationFrozen = !0, e.animationFrozenValue = r.getString();
                        return !1
                    }
                    this.duration += t;
                    var i = !1;
                    if (this.begin < this.duration) {
                        var a = this.calcValue(), o = this.getAttribute("type");
                        if (o.hasValue()) {
                            var u, s = o.getString();
                            a = Ho(u = "".concat(s, "(")).call(u, a, ")")
                        }
                        r.setValue(a), i = !0
                    }
                    return i
                }
            }, {
                key: "getProgress", value: function () {
                    var t = this.document, e = Hl(this),
                        r = {progress: (this.duration - this.begin) / (this.maxDuration - this.begin)};
                    if (e.hasValue()) {
                        var n = r.progress * (e.getValue().length - 1), i = Math.floor(n), a = Math.ceil(n);
                        r.from = new ts(t, "from", Ct(e.getValue()[i])), r.to = new ts(t, "to", Ct(e.getValue()[a])), r.progress = (n - i) / (a - i)
                    } else r.from = this.from, r.to = this.to;
                    return r
                }
            }]), r
        }(rc), ql = At.trim, Gl = i.parseInt, Ql = /^[+-]?0[Xx]/,
        Wl = 8 !== Gl(mt + "08") || 22 !== Gl(mt + "0x16") ? function (t, e) {
            var r = ql(String(t));
            return Gl(r, e >>> 0 || (Ql.test(r) ? 16 : 10))
        } : Gl;
    H({global: !0, forced: parseInt != Wl}, {parseInt: Wl});
    var $l = D.parseInt;

    function Zl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Kl = function (t) {
        xs(r, t);
        var e = Zl(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "animateColor", t
        }

        return Fo(r, [{
            key: "calcValue", value: function () {
                var t = this.getProgress(), e = t.progress, r = t.from, n = t.to, i = new Ju(r.getColor()),
                    a = new Ju(n.getColor());
                if (i.ok && a.ok) {
                    var o, u, s = i.r + (a.r - i.r) * e, c = i.g + (a.g - i.g) * e, l = i.b + (a.b - i.b) * e;
                    return Ho(o = Ho(u = "rgb(".concat($l(s, 10), ", ")).call(u, $l(c, 10), ", ")).call(o, $l(l, 10), ")")
                }
                return this.getAttribute("from").getColor()
            }
        }]), r
    }(Yl);

    function Jl(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var tf = function (t) {
        xs(r, t);
        var e = Jl(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "animateTransform", t
        }

        return Fo(r, [{
            key: "calcValue", value: function () {
                var t = this.getProgress(), e = t.progress, r = t.from, n = t.to, i = ae(r.getString()),
                    a = ae(n.getString());
                return ee(i).call(i, (function (t, r) {
                    return t + (a[r] - t) * e
                })).join(" ")
            }
        }]), r
    }(Yl), ef = le, rf = Ir, nf = Vn, af = ii;

    function of(t, e) {
        var r;
        if (void 0 === nf || null == rf(t)) {
            if (ef(t) || (r = function (t, e) {
                var r;
                if (!t) return;
                if ("string" == typeof t) return uf(t, e);
                var n = af(r = Object.prototype.toString.call(t)).call(r, 8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Xs(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return uf(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var n = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }, e: function (t) {
                        throw t
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0, u = !1;
        return {
            s: function () {
                r = jr(t)
            }, n: function () {
                var t = r.next();
                return o = t.done, t
            }, e: function (t) {
                u = !0, a = t
            }, f: function () {
                try {
                    o || null == r.return || r.return()
                } finally {
                    if (u) throw a
                }
            }
        }
    }

    function uf(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function sf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var cf = function (t) {
        xs(r, t);
        var e = sf(r);

        function r(t, n, i) {
            var a;
            jo(this, r), (a = e.call(this, t, n, i)).type = "font", a.glyphs = {}, a.horizAdvX = a.getAttribute("horiz-adv-x").getNumber();
            var o, u = t.definitions, s = of(Ss(a).children);
            try {
                for (s.s(); !(o = s.n()).done;) {
                    var c = o.value;
                    switch (c.type) {
                        case"font-face":
                            a.fontFace = c;
                            var l = c.getStyle("font-family");
                            l.hasValue() && (u[l.getString()] = Ss(a));
                            break;
                        case"missing-glyph":
                            a.missingGlyph = c;
                            break;
                        case"glyph":
                            var f = c;
                            f.arabicForm ? (a.isRTL = !0, a.isArabic = !0, void 0 === a.glyphs[f.unicode] && (a.glyphs[f.unicode] = {}), a.glyphs[f.unicode][f.arabicForm] = f) : a.glyphs[f.unicode] = f
                    }
                }
            } catch (t) {
                s.e(t)
            } finally {
                s.f()
            }
            return a
        }

        return Fo(r, [{
            key: "render", value: function () {
            }
        }]), r
    }(rc);

    function lf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var ff = function (t) {
        xs(r, t);
        var e = lf(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, i)).type = "font-face", a.ascent = a.getAttribute("ascent").getNumber(), a.descent = a.getAttribute("descent").getNumber(), a.unitsPerEm = a.getAttribute("units-per-em").getNumber(), a
        }

        return r
    }(rc);

    function hf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var pf = function (t) {
        xs(r, t);
        var e = hf(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "missing-glyph", t.horizAdvX = 0, t
        }

        return r
    }(ul);

    function yf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var vf = function (t) {
        xs(r, t);
        var e = yf(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, i)).type = "glyph", a.horizAdvX = a.getAttribute("horiz-adv-x").getNumber(), a.unicode = a.getAttribute("unicode").getString(), a.arabicForm = a.getAttribute("arabic-form").getString(), a
        }

        return r
    }(ul);

    function gf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var df = function (t) {
        xs(r, t);
        var e = gf(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "tref", t
        }

        return Fo(r, [{
            key: "getText", value: function () {
                var t = this.getHrefAttribute().getDefinition();
                if (t) {
                    var e = t.children[0];
                    if (e) return e.getText()
                }
                return ""
            }
        }]), r
    }(Mc);

    function mf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var xf = function (t) {
            xs(r, t);
            var e = mf(r);

            function r(t, n, i) {
                var a, o;
                jo(this, r), (o = e.call(this, t, n, i)).type = "a";
                var u = n.childNodes, s = u[0], c = u.length > 0 && nu(a = Xs(u)).call(a, (function (t) {
                    return 3 === t.nodeType
                }));
                return o.hasText = c, o.text = c ? o.getTextFromNode(s) : "", o
            }

            return Fo(r, [{
                key: "getText", value: function () {
                    return this.text
                }
            }, {
                key: "renderChildren", value: function (t) {
                    if (this.hasText) {
                        wc(Os(r.prototype), "renderChildren", this).call(this, t);
                        var e = this.document, n = this.x, i = this.y, a = e.screen.mouse,
                            o = new ts(e, "fontSize", Tc.parse(e.ctx.font).fontSize);
                        a.isWorking() && a.checkBoundingBox(this, new Oc(n, i - o.getPixels("y"), n + this.measureText(t), i))
                    } else if (this.children.length > 0) {
                        var u = new Nl(this.document, null);
                        u.children = this.children, u.parent = this, u.render(t)
                    }
                }
            }, {
                key: "onClick", value: function () {
                    var t = this.document.window;
                    t && t.open(this.getHrefAttribute().getString())
                }
            }, {
                key: "onMouseMove", value: function () {
                    this.document.ctx.canvas.style.cursor = "pointer"
                }
            }]), r
        }(Mc), bf = !a((function () {
            return Object.isExtensible(Object.preventExtensions({}))
        })), wf = r((function (t) {
            var e = z.f, r = tt("meta"), n = 0, i = Object.isExtensible || function () {
                return !0
            }, a = function (t) {
                e(t, r, {value: {objectID: "O" + ++n, weakData: {}}})
            }, o = t.exports = {
                REQUIRED: !1, fastKey: function (t, e) {
                    if (!d(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!b(t, r)) {
                        if (!i(t)) return "F";
                        if (!e) return "E";
                        a(t)
                    }
                    return t[r].objectID
                }, getWeakData: function (t, e) {
                    if (!b(t, r)) {
                        if (!i(t)) return !0;
                        if (!e) return !1;
                        a(t)
                    }
                    return t[r].weakData
                }, onFreeze: function (t) {
                    return bf && o.REQUIRED && i(t) && !b(t, r) && a(t), t
                }
            };
            Ae[r] = !0
        })), Sf = z.f, Af = Lt.forEach, kf = _e.set, Tf = _e.getterFor, Of = z.f, Pf = wf.fastKey, Ef = _e.set,
        Cf = _e.getterFor, Mf = (function (t, e, r) {
            var n, u = -1 !== t.indexOf("Map"), s = -1 !== t.indexOf("Weak"), c = u ? "set" : "add", l = i[t],
                f = l && l.prototype, h = {};
            if (o && "function" == typeof l && (s || f.forEach && !a((function () {
                (new l).entries().next()
            })))) {
                n = e((function (e, r) {
                    kf(ya(e, n, t), {type: t, collection: new l}), null != r && aa(r, e[c], {that: e, AS_ENTRIES: u})
                }));
                var p = Tf(t);
                Af(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], (function (t) {
                    var e = "add" == t || "set" == t;
                    !(t in f) || s && "clear" == t || F(n.prototype, t, (function (r, n) {
                        var i = p(this).collection;
                        if (!e && s && !d(r)) return "get" == t && void 0;
                        var a = i[t](0 === r ? 0 : r, n);
                        return e ? this : a
                    }))
                })), s || Sf(n.prototype, "size", {
                    configurable: !0, get: function () {
                        return p(this).collection.size
                    }
                })
            } else n = r.getConstructor(e, t, u, c), wf.REQUIRED = !0;
            fr(n, t, !1, !0), h[t] = n, H({global: !0, forced: !0}, h), s || r.setStrong(n, t, u)
        }("Map", (function (t) {
            return function () {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }), {
            getConstructor: function (t, e, r, n) {
                var i = t((function (t, a) {
                    ya(t, i, e), Ef(t, {
                        type: e,
                        index: rr(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), o || (t.size = 0), null != a && aa(a, t[n], {that: t, AS_ENTRIES: r})
                })), a = Cf(e), u = function (t, e, r) {
                    var n, i, u = a(t), c = s(t, e);
                    return c ? c.value = r : (u.last = c = {
                        index: i = Pf(e, !0),
                        key: e,
                        value: r,
                        previous: n = u.last,
                        next: void 0,
                        removed: !1
                    }, u.first || (u.first = c), n && (n.next = c), o ? u.size++ : t.size++, "F" !== i && (u.index[i] = c)), t
                }, s = function (t, e) {
                    var r, n = a(t), i = Pf(e);
                    if ("F" !== i) return n.index[i];
                    for (r = n.first; r; r = r.next) if (r.key == e) return r
                };
                return fa(i.prototype, {
                    clear: function () {
                        for (var t = a(this), e = t.index, r = t.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete e[r.index], r = r.next;
                        t.first = t.last = void 0, o ? t.size = 0 : this.size = 0
                    }, delete: function (t) {
                        var e = this, r = a(e), n = s(e, t);
                        if (n) {
                            var i = n.next, u = n.previous;
                            delete r.index[n.index], n.removed = !0, u && (u.next = i), i && (i.previous = u), r.first == n && (r.first = i), r.last == n && (r.last = u), o ? r.size-- : e.size--
                        }
                        return !!n
                    }, forEach: function (t) {
                        for (var e, r = a(this), n = L(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : r.first;) for (n(e.value, e.key, this); e && e.removed;) e = e.previous
                    }, has: function (t) {
                        return !!s(this, t)
                    }
                }), fa(i.prototype, r ? {
                    get: function (t) {
                        var e = s(this, t);
                        return e && e.value
                    }, set: function (t, e) {
                        return u(this, 0 === t ? 0 : t, e)
                    }
                } : {
                    add: function (t) {
                        return u(this, t = 0 === t ? 0 : t, t)
                    }
                }), o && Of(i.prototype, "size", {
                    get: function () {
                        return a(this).size
                    }
                }), i
            }, setStrong: function (t, e, r) {
                var n = e + " Iterator", i = Cf(e), a = Cf(n);
                Ar(t, e, (function (t, e) {
                    Ef(this, {type: n, target: t, state: i(t), kind: e, last: void 0})
                }), (function () {
                    for (var t = a(this), e = t.kind, r = t.last; r && r.removed;) r = r.previous;
                    return t.target && (t.last = r = r ? r.next : t.state.first) ? "keys" == e ? {
                        value: r.key,
                        done: !1
                    } : "values" == e ? {value: r.value, done: !1} : {
                        value: [r.key, r.value],
                        done: !1
                    } : (t.target = void 0, {value: void 0, done: !0})
                }), r ? "entries" : "values", !r, !0), pa(e)
            }
        }), D.Map);

    function Nf(t, e) {
        var r;
        if (void 0 === nf || null == rf(t)) {
            if (ef(t) || (r = function (t, e) {
                var r;
                if (!t) return;
                if ("string" == typeof t) return Rf(t, e);
                var n = af(r = Object.prototype.toString.call(t)).call(r, 8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Xs(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rf(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var n = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                    }, e: function (t) {
                        throw t
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0, u = !1;
        return {
            s: function () {
                r = jr(t)
            }, n: function () {
                var t = r.next();
                return o = t.done, t
            }, e: function (t) {
                u = !0, a = t
            }, f: function () {
                try {
                    o || null == r.return || r.return()
                } finally {
                    if (u) throw a
                }
            }
        }
    }

    function Rf(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function _f(t, e) {
        var r = ra(t);
        if (ta) {
            var n = ta(t);
            e && (n = Ji(n).call(n, (function (e) {
                return Gi(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function Df(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r, n = null != arguments[e] ? arguments[e] : {};
            if (e % 2) Hi(r = _f(Object(n), !0)).call(r, (function (e) {
                Io(t, e, n[e])
            })); else if (Di) Ri(t, Di(n)); else {
                var i;
                Hi(i = _f(Object(n))).call(i, (function (e) {
                    Ni(t, e, Gi(n, e))
                }))
            }
        }
        return t
    }

    function Vf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Lf = function (t) {
        xs(r, t);
        var e = Vf(r);

        function r(t, n, i) {
            var a;
            jo(this, r), (a = e.call(this, t, n, i)).type = "textPath", a.textWidth = 0, a.textHeight = 0, a.pathLength = -1, a.glyphInfo = null, a.letterSpacingCache = [], a.measuresCache = new Mf([["", 0]]);
            var o = a.getHrefAttribute().getDefinition();
            return a.text = a.getTextFromNode(), a.dataArray = a.parsePathData(o), a
        }

        return Fo(r, [{
            key: "getText", value: function () {
                return this.text
            }
        }, {
            key: "path", value: function (t) {
                var e = this.dataArray;
                t && t.beginPath(), Hi(e).call(e, (function (e) {
                    var r = e.type, n = e.points;
                    switch (r) {
                        case al.LINE_TO:
                            t && t.lineTo(n[0], n[1]);
                            break;
                        case al.MOVE_TO:
                            t && t.moveTo(n[0], n[1]);
                            break;
                        case al.CURVE_TO:
                            t && t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                            break;
                        case al.QUAD_TO:
                            t && t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                            break;
                        case al.ARC:
                            var i = ci(n, 8), a = i[0], o = i[1], u = i[2], s = i[3], c = i[4], l = i[5], f = i[6],
                                h = i[7], p = u > s ? u : s, y = u > s ? 1 : u / s, v = u > s ? s / u : 1;
                            t && (t.translate(a, o), t.rotate(f), t.scale(y, v), t.arc(0, 0, p, c, c + l, Boolean(1 - h)), t.scale(1 / y, 1 / v), t.rotate(-f), t.translate(-a, -o));
                            break;
                        case al.CLOSE_PATH:
                            t && t.closePath()
                    }
                }))
            }
        }, {
            key: "renderChildren", value: function (t) {
                this.setTextData(t), t.save();
                var e = this.parent.getStyle("text-decoration").getString(), r = this.getFontSize(), n = this.glyphInfo,
                    i = t.fillStyle;
                "underline" === e && t.beginPath(), Hi(n).call(n, (function (n, i) {
                    var a = n.p0, o = n.p1, u = n.rotation, s = n.text;
                    t.save(), t.translate(a.x, a.y), t.rotate(u), t.fillStyle && t.fillText(s, 0, 0), t.strokeStyle && t.strokeText(s, 0, 0), t.restore(), "underline" === e && (0 === i && t.moveTo(a.x, a.y + r / 8), t.lineTo(o.x, o.y + r / 5))
                })), "underline" === e && (t.lineWidth = r / 20, t.strokeStyle = i, t.stroke(), t.closePath()), t.restore()
            }
        }, {
            key: "getLetterSpacingAt", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return this.letterSpacingCache[t] || 0
            }
        }, {
            key: "findSegmentToFitChar", value: function (t, e, r, n, i, a, o, u, s) {
                var c = a, l = this.measureText(t, u);
                " " === u && "justify" === e && r < n && (l += (n - r) / i), s > -1 && (c += this.getLetterSpacingAt(s));
                var f = this.textHeight / 20, h = this.getEquidistantPointOnPath(c, f, 0),
                    p = this.getEquidistantPointOnPath(c + l, f, 0), y = {p0: h, p1: p},
                    v = h && p ? Math.atan2(p.y - h.y, p.x - h.x) : 0;
                if (o) {
                    var g = Math.cos(Math.PI / 2 + v) * o, d = Math.cos(-v) * o;
                    y.p0 = Df(Df({}, h), {}, {x: h.x + g, y: h.y + d}), y.p1 = Df(Df({}, p), {}, {
                        x: p.x + g,
                        y: p.y + d
                    })
                }
                return {offset: c += l, segment: y, rotation: v}
            }
        }, {
            key: "measureText", value: function (t, e) {
                var r = this.measuresCache, n = e || this.getText();
                if (r.has(n)) return r.get(n);
                var i = this.measureTargetText(t, n);
                return r.set(n, i), i
            }
        }, {
            key: "setTextData", value: function (t) {
                var e, r = this;
                if (!this.glyphInfo) {
                    var n = this.getText(), i = n.split(""), a = n.split(" ").length - 1,
                        o = ee(e = this.parent.getAttribute("dx").split()).call(e, (function (t) {
                            return t.getPixels("x")
                        })), u = this.parent.getAttribute("dy").getPixels("y"),
                        s = this.parent.getStyle("text-anchor").getString("start"), c = this.getStyle("letter-spacing"),
                        l = this.parent.getStyle("letter-spacing"), f = 0;
                    c.hasValue() && "inherit" !== c.getValue() ? c.hasValue() && "initial" !== c.getValue() && "unset" !== c.getValue() && (f = c.getPixels()) : f = l.getPixels();
                    var h = [], p = n.length;
                    this.letterSpacingCache = h;
                    for (var y = 0; y < p; y++) h.push(void 0 !== o[y] ? o[y] : f);
                    var v = $o(h).call(h, (function (t, e, r) {
                        return 0 === r ? 0 : t + e || 0
                    }), 0), g = this.measureText(t), d = Math.max(g + v, 0);
                    this.textWidth = g, this.textHeight = this.getFontSize(), this.glyphInfo = [];
                    var m = this.getPathLength(), x = this.getStyle("startOffset").getNumber(0) * m, b = 0;
                    "middle" !== s && "center" !== s || (b = -d / 2), "end" !== s && "right" !== s || (b = -d), b += x, Hi(i).call(i, (function (e, n) {
                        var o = r.findSegmentToFitChar(t, s, d, m, a, b, u, e, n), c = o.offset, l = o.segment,
                            f = o.rotation;
                        b = c, l.p0 && l.p1 && r.glyphInfo.push({text: i[n], p0: l.p0, p1: l.p1, rotation: f})
                    }))
                }
            }
        }, {
            key: "parsePathData", value: function (t) {
                if (this.pathLength = -1, !t) return [];
                var e = [], r = t.pathParser;
                for (r.reset(); !r.isEnd();) {
                    var n = r.current, i = n ? n.x : 0, a = n ? n.y : 0, o = r.next(), u = o.type, s = [];
                    switch (o.type) {
                        case al.MOVE_TO:
                            this.pathM(r, s);
                            break;
                        case al.LINE_TO:
                            u = this.pathL(r, s);
                            break;
                        case al.HORIZ_LINE_TO:
                            u = this.pathH(r, s);
                            break;
                        case al.VERT_LINE_TO:
                            u = this.pathV(r, s);
                            break;
                        case al.CURVE_TO:
                            this.pathC(r, s);
                            break;
                        case al.SMOOTH_CURVE_TO:
                            u = this.pathS(r, s);
                            break;
                        case al.QUAD_TO:
                            this.pathQ(r, s);
                            break;
                        case al.SMOOTH_QUAD_TO:
                            u = this.pathT(r, s);
                            break;
                        case al.ARC:
                            s = this.pathA(r);
                            break;
                        case al.CLOSE_PATH:
                            ul.pathZ(r)
                    }
                    o.type !== al.CLOSE_PATH ? e.push({
                        type: u,
                        points: s,
                        start: {x: i, y: a},
                        pathLength: this.calcLength(i, a, u, s)
                    }) : e.push({type: al.CLOSE_PATH, points: [], pathLength: 0})
                }
                return e
            }
        }, {
            key: "pathM", value: function (t, e) {
                var r = ul.pathM(t).point, n = r.x, i = r.y;
                e.push(n, i)
            }
        }, {
            key: "pathL", value: function (t, e) {
                var r = ul.pathL(t).point, n = r.x, i = r.y;
                return e.push(n, i), al.LINE_TO
            }
        }, {
            key: "pathH", value: function (t, e) {
                var r = ul.pathH(t).point, n = r.x, i = r.y;
                return e.push(n, i), al.LINE_TO
            }
        }, {
            key: "pathV", value: function (t, e) {
                var r = ul.pathV(t).point, n = r.x, i = r.y;
                return e.push(n, i), al.LINE_TO
            }
        }, {
            key: "pathC", value: function (t, e) {
                var r = ul.pathC(t), n = r.point, i = r.controlPoint, a = r.currentPoint;
                e.push(n.x, n.y, i.x, i.y, a.x, a.y)
            }
        }, {
            key: "pathS", value: function (t, e) {
                var r = ul.pathS(t), n = r.point, i = r.controlPoint, a = r.currentPoint;
                return e.push(n.x, n.y, i.x, i.y, a.x, a.y), al.CURVE_TO
            }
        }, {
            key: "pathQ", value: function (t, e) {
                var r = ul.pathQ(t), n = r.controlPoint, i = r.currentPoint;
                e.push(n.x, n.y, i.x, i.y)
            }
        }, {
            key: "pathT", value: function (t, e) {
                var r = ul.pathT(t), n = r.controlPoint, i = r.currentPoint;
                return e.push(n.x, n.y, i.x, i.y), al.QUAD_TO
            }
        }, {
            key: "pathA", value: function (t) {
                var e = ul.pathA(t), r = e.rX, n = e.rY, i = e.sweepFlag, a = e.xAxisRotation, o = e.centp, u = e.a1,
                    s = e.ad;
                return 0 === i && s > 0 && (s -= 2 * Math.PI), 1 === i && s < 0 && (s += 2 * Math.PI), [o.x, o.y, r, n, u, s, a, i]
            }
        }, {
            key: "calcLength", value: function (t, e, r, n) {
                var i = 0, a = null, o = null, u = 0;
                switch (r) {
                    case al.LINE_TO:
                        return this.getLineLength(t, e, n[0], n[1]);
                    case al.CURVE_TO:
                        for (i = 0, a = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), u = .01; u <= 1; u += .01) o = this.getPointOnCubicBezier(u, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), i += this.getLineLength(a.x, a.y, o.x, o.y), a = o;
                        return i;
                    case al.QUAD_TO:
                        for (i = 0, a = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), u = .01; u <= 1; u += .01) o = this.getPointOnQuadraticBezier(u, t, e, n[0], n[1], n[2], n[3]), i += this.getLineLength(a.x, a.y, o.x, o.y), a = o;
                        return i;
                    case al.ARC:
                        i = 0;
                        var s = n[4], c = n[5], l = n[4] + c, f = Math.PI / 180;
                        if (Math.abs(s - l) < f && (f = Math.abs(s - l)), a = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], s, 0), c < 0) for (u = s - f; u > l; u -= f) o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), i += this.getLineLength(a.x, a.y, o.x, o.y), a = o; else for (u = s + f; u < l; u += f) o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), i += this.getLineLength(a.x, a.y, o.x, o.y), a = o;
                        return o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], l, 0), i += this.getLineLength(a.x, a.y, o.x, o.y)
                }
                return 0
            }
        }, {
            key: "getPointOnLine", value: function (t, e, r, n, i) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
                    o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : r, u = (i - r) / (n - e + xi),
                    s = Math.sqrt(t * t / (1 + u * u));
                n < e && (s *= -1);
                var c = u * s, l = null;
                if (n === e) l = {x: a, y: o + c}; else if ((o - r) / (a - e + xi) === u) l = {
                    x: a + s,
                    y: o + c
                }; else {
                    var f = 0, h = 0, p = this.getLineLength(e, r, n, i);
                    if (p < xi) return null;
                    var y = (a - e) * (n - e) + (o - r) * (i - r);
                    f = e + (y /= p * p) * (n - e), h = r + y * (i - r);
                    var v = this.getLineLength(a, o, f, h), g = Math.sqrt(t * t - v * v);
                    s = Math.sqrt(g * g / (1 + u * u)), n < e && (s *= -1), l = {x: f + s, y: h + (c = u * s)}
                }
                return l
            }
        }, {
            key: "getPointOnPath", value: function (t) {
                var e = this.getPathLength(), r = 0, n = null;
                if (t < -5e-5 || t - 5e-5 > e) return null;
                var i, a = Nf(this.dataArray);
                try {
                    for (a.s(); !(i = a.n()).done;) {
                        var o = i.value;
                        if (!o || !(o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < t)) {
                            var u = t - r, s = 0;
                            switch (o.type) {
                                case al.LINE_TO:
                                    n = this.getPointOnLine(u, o.start.x, o.start.y, o.points[0], o.points[1], o.start.x, o.start.y);
                                    break;
                                case al.ARC:
                                    var c = o.points[4], l = o.points[5], f = o.points[4] + l;
                                    if (s = c + u / o.pathLength * l, l < 0 && s < f || l >= 0 && s > f) break;
                                    n = this.getPointOnEllipticalArc(o.points[0], o.points[1], o.points[2], o.points[3], s, o.points[6]);
                                    break;
                                case al.CURVE_TO:
                                    (s = u / o.pathLength) > 1 && (s = 1), n = this.getPointOnCubicBezier(s, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3], o.points[4], o.points[5]);
                                    break;
                                case al.QUAD_TO:
                                    (s = u / o.pathLength) > 1 && (s = 1), n = this.getPointOnQuadraticBezier(s, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3])
                            }
                            if (n) return n;
                            break
                        }
                        r += o.pathLength
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return null
            }
        }, {
            key: "getLineLength", value: function (t, e, r, n) {
                return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e))
            }
        }, {
            key: "getPathLength", value: function () {
                var t;
                -1 === this.pathLength && (this.pathLength = $o(t = this.dataArray).call(t, (function (t, e) {
                    return e.pathLength > 0 ? t + e.pathLength : t
                }), 0));
                return this.pathLength
            }
        }, {
            key: "getPointOnCubicBezier", value: function (t, e, r, n, i, a, o, u, s) {
                return {
                    x: u * Ai(t) + a * ki(t) + n * Ti(t) + e * Oi(t),
                    y: s * Ai(t) + o * ki(t) + i * Ti(t) + r * Oi(t)
                }
            }
        }, {
            key: "getPointOnQuadraticBezier", value: function (t, e, r, n, i, a, o) {
                return {x: a * Pi(t) + n * Ei(t) + e * Ci(t), y: o * Pi(t) + i * Ei(t) + r * Ci(t)}
            }
        }, {
            key: "getPointOnEllipticalArc", value: function (t, e, r, n, i, a) {
                var o = Math.cos(a), u = Math.sin(a), s = r * Math.cos(i), c = n * Math.sin(i);
                return {x: t + (s * o - c * u), y: e + (s * u + c * o)}
            }
        }, {
            key: "buildEquidistantCache", value: function (t, e) {
                var r = this.getPathLength(), n = e || .25, i = t || r / 100;
                if (!this.equidistantCache || this.equidistantCache.step !== i || this.equidistantCache.precision !== n) {
                    this.equidistantCache = {step: i, precision: n, points: []};
                    for (var a = 0, o = 0; o <= r; o += n) {
                        var u = this.getPointOnPath(o), s = this.getPointOnPath(o + n);
                        u && s && ((a += this.getLineLength(u.x, u.y, s.x, s.y)) >= i && (this.equidistantCache.points.push({
                            x: u.x,
                            y: u.y,
                            distance: o
                        }), a -= i))
                    }
                }
            }
        }, {
            key: "getEquidistantPointOnPath", value: function (t, e, r) {
                if (this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5) return null;
                var n = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1));
                return this.equidistantCache.points[n] || null
            }
        }]), r
    }(Mc);

    function If(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var jf = function (t) {
        xs(i, t);
        var e, r, n = If(i);

        function i(t, e, r) {
            var a;
            jo(this, i), (a = n.call(this, t, e, r)).type = "image", a.loaded = !1;
            var o = a.getHrefAttribute().getString();
            if (!o) return As(a);
            var u = /\.svg$/.test(o);
            return t.images.push(Ss(a)), u ? a.loadSvg(o) : a.loadImage(o), a.isSvg = u, a
        }

        return Fo(i, [{
            key: "loadImage", value: (r = Vo(na.mark((function t(e) {
                var r;
                return na.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, this.document.createImage(e);
                        case 3:
                            r = t.sent, this.image = r, t.next = 10;
                            break;
                        case 7:
                            t.prev = 7, t.t0 = t.catch(0), console.error('Error while loading image "'.concat(e, '":'), t.t0);
                        case 10:
                            this.loaded = !0;
                        case 11:
                        case"end":
                            return t.stop()
                    }
                }), t, this, [[0, 7]])
            }))), function (t) {
                return r.apply(this, arguments)
            })
        }, {
            key: "loadSvg", value: (e = Vo(na.mark((function t(e) {
                var r, n;
                return na.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, this.document.fetch(e);
                        case 3:
                            return r = t.sent, t.next = 6, r.text();
                        case 6:
                            n = t.sent, this.image = n, t.next = 13;
                            break;
                        case 10:
                            t.prev = 10, t.t0 = t.catch(0), console.error('Error while loading image "'.concat(e, '":'), t.t0);
                        case 13:
                            this.loaded = !0;
                        case 14:
                        case"end":
                            return t.stop()
                    }
                }), t, this, [[0, 10]])
            }))), function (t) {
                return e.apply(this, arguments)
            })
        }, {
            key: "renderChildren", value: function (t) {
                var e = this.document, r = this.image, n = this.loaded, i = this.getAttribute("x").getPixels("x"),
                    a = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"),
                    u = this.getStyle("height").getPixels("y");
                if (n && r && o && u) {
                    if (t.save(), this.isSvg) e.canvg.forkString(t, this.image, {
                        ignoreMouse: !0,
                        ignoreAnimation: !0,
                        ignoreDimensions: !0,
                        ignoreClear: !0,
                        offsetX: i,
                        offsetY: a,
                        scaleWidth: o,
                        scaleHeight: u
                    }).render(); else {
                        var s = this.image;
                        t.translate(i, a), e.setViewBox({
                            ctx: t,
                            aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                            width: o,
                            desiredWidth: s.width,
                            height: u,
                            desiredHeight: s.height
                        }), this.loaded && (void 0 === s.complete || s.complete) && t.drawImage(s, 0, 0)
                    }
                    t.restore()
                }
            }
        }, {
            key: "getBoundingBox", value: function () {
                var t = this.getAttribute("x").getPixels("x"), e = this.getAttribute("y").getPixels("y"),
                    r = this.getStyle("width").getPixels("x"), n = this.getStyle("height").getPixels("y");
                return new Oc(t, e, t + r, e + n)
            }
        }]), i
    }(Ec);

    function zf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Ff = function (t) {
        xs(r, t);
        var e = zf(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "symbol", t
        }

        return Fo(r, [{
            key: "render", value: function (t) {
            }
        }]), r
    }(Ec), Bf = function () {
        function t(e) {
            jo(this, t), this.document = e, this.loaded = !1, e.fonts.push(this)
        }

        var e;
        return Fo(t, [{
            key: "load", value: (e = Vo(na.mark((function t(e, r) {
                var n, i, a, o;
                return na.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, i = this.document, t.next = 4, i.canvg.parser.load(r);
                        case 4:
                            a = t.sent, o = a.getElementsByTagName("font"), Hi(n = Xs(o)).call(n, (function (t) {
                                var r = i.createElement(t);
                                i.definitions[e] = r
                            })), t.next = 12;
                            break;
                        case 9:
                            t.prev = 9, t.t0 = t.catch(0), console.error('Error while loading font "'.concat(r, '":'), t.t0);
                        case 12:
                            this.loaded = !0;
                        case 13:
                        case"end":
                            return t.stop()
                    }
                }), t, this, [[0, 9]])
            }))), function (t, r) {
                return e.apply(this, arguments)
            })
        }]), t
    }();

    function Uf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Hf = function (t) {
        xs(r, t);
        var e = Uf(r);

        function r(t, n, i) {
            var a, o;
            jo(this, r), (o = e.call(this, t, n, i)).type = "style";
            var u = re(ee(a = Xs(n.childNodes)).call(a, (function (t) {
                return t.data
            })).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")).split("}");
            return Hi(u).call(u, (function (e) {
                var r = Ku(e).call(e);
                if (r) {
                    var n = r.split("{"), i = n[0].split(","), a = n[1].split(";");
                    Hi(i).call(i, (function (e) {
                        var r = Ku(e).call(e);
                        if (r) {
                            var n = t.styles[r] || {};
                            if (Hi(a).call(a, (function (e) {
                                var r, i, a = dc(e).call(e, ":"), o = Ku(r = e.substr(0, a)).call(r),
                                    u = Ku(i = e.substr(a + 1, e.length - a)).call(i);
                                o && u && (n[o] = new ts(t, o, u))
                            })), t.styles[r] = n, t.stylesSpecificity[r] = mi(r), "@font-face" === r) {
                                var i = n["font-family"].getString().replace(/"|'/g, ""),
                                    o = n.src.getString().split(",");
                                Hi(o).call(o, (function (e) {
                                    if (dc(e).call(e, 'format("svg")') > 0) {
                                        var r = se(e);
                                        r && new Bf(t).load(i, r)
                                    }
                                }))
                            }
                        }
                    }))
                }
            })), o
        }

        return r
    }(rc);

    function Xf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    Hf.parseExternalUrl = se;
    var Yf = function (t) {
        xs(r, t);
        var e = Xf(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "use", t
        }

        return Fo(r, [{
            key: "setContext", value: function (t) {
                wc(Os(r.prototype), "setContext", this).call(this, t);
                var e = this.getAttribute("x"), n = this.getAttribute("y");
                e.hasValue() && t.translate(e.getPixels("x"), 0), n.hasValue() && t.translate(0, n.getPixels("y"))
            }
        }, {
            key: "path", value: function (t) {
                var e = this.element;
                e && e.path(t)
            }
        }, {
            key: "renderChildren", value: function (t) {
                var e = this.document, r = this.element;
                if (r) {
                    var n = r;
                    if ("symbol" === r.type && ((n = new cl(e, null)).attributes.viewBox = new ts(e, "viewBox", r.getAttribute("viewBox").getString()), n.attributes.preserveAspectRatio = new ts(e, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), n.attributes.overflow = new ts(e, "overflow", r.getAttribute("overflow").getString()), n.children = r.children, r.styles.opacity = new ts(e, "opacity", this.calculateOpacity())), "svg" === n.type) {
                        var i = this.getStyle("width", !1, !0), a = this.getStyle("height", !1, !0);
                        i.hasValue() && (n.attributes.width = new ts(e, "width", i.getString())), a.hasValue() && (n.attributes.height = new ts(e, "height", a.getString()))
                    }
                    var o = n.parent;
                    n.parent = this, n.render(t), n.parent = o
                }
            }
        }, {
            key: "getBoundingBox", value: function (t) {
                var e = this.element;
                return e ? e.getBoundingBox(t) : null
            }
        }, {
            key: "elementTransform", value: function () {
                var t = this.document, e = this.element;
                return ec.fromElement(t, e)
            }
        }, {
            key: "element", get: function () {
                return this._element || (this._element = this.getHrefAttribute().getDefinition()), this._element
            }
        }]), r
    }(Ec);

    function qf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    function Gf(t, e, r, n, i, a) {
        return t[r * n * 4 + 4 * e + a]
    }

    function Qf(t, e, r, n, i, a, o) {
        t[r * n * 4 + 4 * e + a] = o
    }

    function Wf(t, e, r) {
        return t[e] * r
    }

    function $f(t, e, r, n) {
        return e + Math.cos(t) * r + Math.sin(t) * n
    }

    var Zf = function (t) {
        xs(r, t);
        var e = qf(r);

        function r(t, n, i) {
            var a;
            jo(this, r), (a = e.call(this, t, n, i)).type = "feColorMatrix";
            var o = ae(a.getAttribute("values").getString());
            switch (a.getAttribute("type").getString("matrix")) {
                case"saturate":
                    var u = o[0];
                    o = [.213 + .787 * u, .715 - .715 * u, .072 - .072 * u, 0, 0, .213 - .213 * u, .715 + .285 * u, .072 - .072 * u, 0, 0, .213 - .213 * u, .715 - .715 * u, .072 + .928 * u, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                    break;
                case"hueRotate":
                    var s = o[0] * Math.PI / 180;
                    o = [$f(s, .213, .787, -.213), $f(s, .715, -.715, -.715), $f(s, .072, -.072, .928), 0, 0, $f(s, .213, -.213, .143), $f(s, .715, .285, .14), $f(s, .072, -.072, -.283), 0, 0, $f(s, .213, -.213, -.787), $f(s, .715, -.715, .715), $f(s, .072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                    break;
                case"luminanceToAlpha":
                    o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1]
            }
            return a.matrix = o, a.includeOpacity = a.getAttribute("includeOpacity").hasValue(), a
        }

        return Fo(r, [{
            key: "apply", value: function (t, e, r, n, i) {
                for (var a = this.includeOpacity, o = this.matrix, u = t.getImageData(0, 0, n, i), s = 0; s < i; s++) for (var c = 0; c < n; c++) {
                    var l = Gf(u.data, c, s, n, 0, 0), f = Gf(u.data, c, s, n, 0, 1), h = Gf(u.data, c, s, n, 0, 2),
                        p = Gf(u.data, c, s, n, 0, 3),
                        y = Wf(o, 0, l) + Wf(o, 1, f) + Wf(o, 2, h) + Wf(o, 3, p) + Wf(o, 4, 1),
                        v = Wf(o, 5, l) + Wf(o, 6, f) + Wf(o, 7, h) + Wf(o, 8, p) + Wf(o, 9, 1),
                        g = Wf(o, 10, l) + Wf(o, 11, f) + Wf(o, 12, h) + Wf(o, 13, p) + Wf(o, 14, 1),
                        d = Wf(o, 15, l) + Wf(o, 16, f) + Wf(o, 17, h) + Wf(o, 18, p) + Wf(o, 19, 1);
                    a && (y = v = g = 0, d *= p / 255), Qf(u.data, c, s, n, 0, 0, y), Qf(u.data, c, s, n, 0, 1, v), Qf(u.data, c, s, n, 0, 2, g), Qf(u.data, c, s, n, 0, 3, d)
                }
                t.clearRect(0, 0, n, i), t.putImageData(u, 0, 0)
            }
        }]), r
    }(rc);

    function Kf(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Jf = function (t) {
        xs(r, t);
        var e = Kf(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "mask", t
        }

        return Fo(r, [{
            key: "apply", value: function (t, e) {
                var n = this.document, i = this.getAttribute("x").getPixels("x"),
                    a = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"),
                    u = this.getStyle("height").getPixels("y");
                if (!o && !u) {
                    var s, c = new Oc;
                    Hi(s = this.children).call(s, (function (e) {
                        c.addBoundingBox(e.getBoundingBox(t))
                    })), i = Math.floor(c.x1), a = Math.floor(c.y1), o = Math.floor(c.width), u = Math.floor(c.height)
                }
                var l = this.removeStyles(e, r.ignoreStyles), f = n.createCanvas(i + o, a + u), h = f.getContext("2d");
                n.screen.setDefaults(h), this.renderChildren(h), new Zf(n, {
                    nodeType: 1,
                    childNodes: [],
                    attributes: [{nodeName: "type", value: "luminanceToAlpha"}, {
                        nodeName: "includeOpacity",
                        value: "true"
                    }]
                }).apply(h, 0, 0, i + o, a + u);
                var p = n.createCanvas(i + o, a + u), y = p.getContext("2d");
                n.screen.setDefaults(y), e.render(y), y.globalCompositeOperation = "destination-in", y.fillStyle = h.createPattern(f, "no-repeat"), y.fillRect(0, 0, i + o, a + u), t.fillStyle = y.createPattern(p, "no-repeat"), t.fillRect(0, 0, i + o, a + u), this.restoreStyles(e, l)
            }
        }, {
            key: "render", value: function (t) {
            }
        }]), r
    }(rc);
    Jf.ignoreStyles = ["mask", "transform", "clip-path"];
    var th = jt("Reflect", "apply"), eh = Function.apply, rh = !a((function () {
        th((function () {
        }))
    }));
    H({target: "Reflect", stat: !0, forced: rh}, {
        apply: function (t, e, r) {
            return V(t), I(r), th ? th(t, e, r) : eh.call(t, e, r)
        }
    });
    var nh = D.Reflect.apply;
    H({target: "Reflect", stat: !0, sham: !De}, {
        getPrototypeOf: function (t) {
            return Ie(I(t))
        }
    });
    var ih = D.Reflect.getPrototypeOf;

    function ah(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var oh = function () {
    }, uh = function (t) {
        xs(r, t);
        var e = ah(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "clipPath", t
        }

        return Fo(r, [{
            key: "apply", value: function (t) {
                var e, r = this.document, n = ih(t), i = t.beginPath, a = t.closePath;
                n && (n.beginPath = oh, n.closePath = oh), nh(i, t, []), Hi(e = this.children).call(e, (function (e) {
                    if (void 0 !== e.path) {
                        var i = void 0 !== e.elementTransform ? e.elementTransform() : null;
                        i || (i = ec.fromElement(r, e)), i && i.apply(t), e.path(t), n && (n.closePath = a), i && i.unapply(t)
                    }
                })), nh(a, t, []), t.clip(), n && (n.beginPath = i, n.closePath = a)
            }
        }, {
            key: "render", value: function (t) {
            }
        }]), r
    }(rc);

    function sh(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var ch = function (t) {
        xs(r, t);
        var e = sh(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "filter", t
        }

        return Fo(r, [{
            key: "apply", value: function (t, e) {
                var n = this.document, i = this.children, a = e.getBoundingBox(t);
                if (a) {
                    var o = 0, u = 0;
                    Hi(i).call(i, (function (t) {
                        var e = t.extraFilterDistance || 0;
                        o = Math.max(o, e), u = Math.max(u, e)
                    }));
                    var s = Math.floor(a.width), c = Math.floor(a.height), l = s + 2 * o, f = c + 2 * u;
                    if (!(l < 1 || f < 1)) {
                        var h = Math.floor(a.x), p = Math.floor(a.y), y = this.removeStyles(e, r.ignoreStyles),
                            v = n.createCanvas(l, f), g = v.getContext("2d");
                        n.screen.setDefaults(g), g.translate(-h + o, -p + u), e.render(g), Hi(i).call(i, (function (t) {
                            "function" == typeof t.apply && t.apply(g, 0, 0, l, f)
                        })), t.drawImage(v, 0, 0, l, f, h - o, p - u, l, f), this.restoreStyles(e, y)
                    }
                }
            }
        }, {
            key: "render", value: function (t) {
            }
        }]), r
    }(rc);

    function lh(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    ch.ignoreStyles = ["filter", "transform", "clip-path"];
    var fh = function (t) {
        xs(r, t);
        var e = lh(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, i)).type = "feDropShadow", a.addStylesFromStyleDefinition(), a
        }

        return Fo(r, [{
            key: "apply", value: function (t, e, r, n, i) {
            }
        }]), r
    }(rc);

    function hh(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var ph = function (t) {
        xs(r, t);
        var e = hh(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "feMorphology", t
        }

        return Fo(r, [{
            key: "apply", value: function (t, e, r, n, i) {
            }
        }]), r
    }(rc);

    function yh(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var vh = function (t) {
        xs(r, t);
        var e = yh(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "feComposite", t
        }

        return Fo(r, [{
            key: "apply", value: function (t, e, r, n, i) {
            }
        }]), r
    }(rc);

    function gh(t) {
        return (gh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var dh = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        mh = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

    function xh(t, e, r, n, i, a) {
        if (!(isNaN(a) || a < 1)) {
            a |= 0;
            var o = function (t, e, r, n, i) {
                if ("string" == typeof t && (t = document.getElementById(t)), !t || "object" !== gh(t) || !("getContext" in t)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
                var a = t.getContext("2d");
                try {
                    return a.getImageData(e, r, n, i)
                } catch (t) {
                    throw new Error("unable to access image data: " + t)
                }
            }(t, e, r, n, i);
            o = function (t, e, r, n, i, a) {
                for (var o, u = t.data, s = 2 * a + 1, c = n - 1, l = i - 1, f = a + 1, h = f * (f + 1) / 2, p = new bh, y = p, v = 1; v < s; v++) y = y.next = new bh, v === f && (o = y);
                y.next = p;
                for (var g = null, d = null, m = 0, x = 0, b = dh[a], w = mh[a], S = 0; S < i; S++) {
                    y = p;
                    for (var A = u[x], k = u[x + 1], T = u[x + 2], O = u[x + 3], P = 0; P < f; P++) y.r = A, y.g = k, y.b = T, y.a = O, y = y.next;
                    for (var E = 0, C = 0, M = 0, N = 0, R = f * A, _ = f * k, D = f * T, V = f * O, L = h * A, I = h * k, j = h * T, z = h * O, F = 1; F < f; F++) {
                        var B = x + ((c < F ? c : F) << 2), U = u[B], H = u[B + 1], X = u[B + 2], Y = u[B + 3],
                            q = f - F;
                        L += (y.r = U) * q, I += (y.g = H) * q, j += (y.b = X) * q, z += (y.a = Y) * q, E += U, C += H, M += X, N += Y, y = y.next
                    }
                    g = p, d = o;
                    for (var G = 0; G < n; G++) {
                        var Q = z * b >> w;
                        if (u[x + 3] = Q, 0 !== Q) {
                            var W = 255 / Q;
                            u[x] = (L * b >> w) * W, u[x + 1] = (I * b >> w) * W, u[x + 2] = (j * b >> w) * W
                        } else u[x] = u[x + 1] = u[x + 2] = 0;
                        L -= R, I -= _, j -= D, z -= V, R -= g.r, _ -= g.g, D -= g.b, V -= g.a;
                        var $ = G + a + 1;
                        $ = m + ($ < c ? $ : c) << 2, L += E += g.r = u[$], I += C += g.g = u[$ + 1], j += M += g.b = u[$ + 2], z += N += g.a = u[$ + 3], g = g.next;
                        var Z = d, K = Z.r, J = Z.g, tt = Z.b, et = Z.a;
                        R += K, _ += J, D += tt, V += et, E -= K, C -= J, M -= tt, N -= et, d = d.next, x += 4
                    }
                    m += n
                }
                for (var rt = 0; rt < n; rt++) {
                    var nt = u[x = rt << 2], it = u[x + 1], at = u[x + 2], ot = u[x + 3], ut = f * nt, st = f * it,
                        ct = f * at, lt = f * ot, ft = h * nt, ht = h * it, pt = h * at, yt = h * ot;
                    y = p;
                    for (var vt = 0; vt < f; vt++) y.r = nt, y.g = it, y.b = at, y.a = ot, y = y.next;
                    for (var gt = n, dt = 0, mt = 0, xt = 0, bt = 0, wt = 1; wt <= a; wt++) {
                        x = gt + rt << 2;
                        var St = f - wt;
                        ft += (y.r = nt = u[x]) * St, ht += (y.g = it = u[x + 1]) * St, pt += (y.b = at = u[x + 2]) * St, yt += (y.a = ot = u[x + 3]) * St, bt += nt, dt += it, mt += at, xt += ot, y = y.next, wt < l && (gt += n)
                    }
                    x = rt, g = p, d = o;
                    for (var At = 0; At < i; At++) {
                        var kt = x << 2;
                        u[kt + 3] = ot = yt * b >> w, ot > 0 ? (ot = 255 / ot, u[kt] = (ft * b >> w) * ot, u[kt + 1] = (ht * b >> w) * ot, u[kt + 2] = (pt * b >> w) * ot) : u[kt] = u[kt + 1] = u[kt + 2] = 0, ft -= ut, ht -= st, pt -= ct, yt -= lt, ut -= g.r, st -= g.g, ct -= g.b, lt -= g.a, kt = rt + ((kt = At + f) < l ? kt : l) * n << 2, ft += bt += g.r = u[kt], ht += dt += g.g = u[kt + 1], pt += mt += g.b = u[kt + 2], yt += xt += g.a = u[kt + 3], g = g.next, ut += nt = d.r, st += it = d.g, ct += at = d.b, lt += ot = d.a, bt -= nt, dt -= it, mt -= at, xt -= ot, d = d.next, x += n
                    }
                }
                return t
            }(o, 0, 0, n, i, a), t.getContext("2d").putImageData(o, e, r)
        }
    }

    var bh = function t() {
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    };

    function wh(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Sh = function (t) {
        xs(r, t);
        var e = wh(r);

        function r(t, n, i) {
            var a;
            return jo(this, r), (a = e.call(this, t, n, i)).type = "feGaussianBlur", a.blurRadius = Math.floor(a.getAttribute("stdDeviation").getNumber()), a.extraFilterDistance = a.blurRadius, a
        }

        return Fo(r, [{
            key: "apply", value: function (t, e, r, n, i) {
                var a = this.document, o = this.blurRadius, u = a.window ? a.window.document.body : null, s = t.canvas;
                s.id = a.getUniqueId(), u && (s.style.display = "none", u.appendChild(s)), xh(s, e, r, n, i, o), u && u.removeChild(s)
            }
        }]), r
    }(rc);

    function Ah(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var kh = function (t) {
        xs(r, t);
        var e = Ah(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "title", t
        }

        return r
    }(rc);

    function Th(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !ys) return !1;
            if (ys.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(ys(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = Os(t);
            if (e) {
                var i = Os(this).constructor;
                r = ys(n, arguments, i)
            } else r = n.apply(this, arguments);
            return As(this, r)
        }
    }

    var Oh = function (t) {
        xs(r, t);
        var e = Th(r);

        function r() {
            var t;
            return jo(this, r), (t = e.apply(this, arguments)).type = "desc", t
        }

        return r
    }(rc), Ph = {
        svg: cl,
        rect: fl,
        circle: pl,
        ellipse: vl,
        line: dl,
        polyline: xl,
        polygon: wl,
        path: ul,
        pattern: Tl,
        marker: Pl,
        defs: Cl,
        linearGradient: Vl,
        radialGradient: Il,
        stop: zl,
        animate: Yl,
        animateColor: Kl,
        animateTransform: tf,
        font: cf,
        "font-face": ff,
        "missing-glyph": pf,
        glyph: vf,
        text: Mc,
        tspan: Rc,
        tref: df,
        a: xf,
        textPath: Lf,
        image: jf,
        g: Nl,
        symbol: Ff,
        style: Hf,
        use: Yf,
        mask: Jf,
        clipPath: uh,
        filter: ch,
        feDropShadow: fh,
        feMorphology: ph,
        feComposite: vh,
        feColorMatrix: Zf,
        feGaussianBlur: Sh,
        title: kh,
        desc: Oh
    };

    function Eh(t, e) {
        var r = ra(t);
        if (ta) {
            var n = ta(t);
            e && (n = Ji(n).call(n, (function (e) {
                return Gi(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function Ch() {
        return (Ch = Vo(na.mark((function t(e) {
            var r, n, i = arguments;
            return na.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return r = i.length > 1 && void 0 !== i[1] && i[1], n = document.createElement("img"), r && (n.crossOrigin = "Anonymous"), t.abrupt("return", new iu((function (t, r) {
                            n.onload = function () {
                                t(n)
                            }, n.onerror = function () {
                                r()
                            }, n.src = e
                        })));
                    case 4:
                    case"end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }

    var Mh = function () {
        function t(e) {
            var r, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = i.rootEmSize,
                o = void 0 === a ? 12 : a, u = i.emSize, s = void 0 === u ? 12 : u, c = i.createCanvas,
                l = void 0 === c ? t.createCanvas : c, f = i.createImage, h = void 0 === f ? t.createImage : f,
                p = i.anonymousCrossOrigin;
            jo(this, t), this.canvg = e, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = e.screen, this.rootEmSize = o, this.emSize = s, this.createCanvas = l, this.createImage = this.bindCreateImage(h, p), this.screen.wait(fu(r = this.isImagesLoaded).call(r, this)), this.screen.wait(fu(n = this.isFontsLoaded).call(n, this))
        }

        return Fo(t, [{
            key: "bindCreateImage", value: function (t, e) {
                return "boolean" == typeof e ? function (r, n) {
                    return t(r, "boolean" == typeof n ? n : e)
                } : t
            }
        }, {
            key: "popEmSize", value: function () {
                this.emSizeStack.pop()
            }
        }, {
            key: "getUniqueId", value: function () {
                return "canvg".concat(++this.uniqueId)
            }
        }, {
            key: "isImagesLoaded", value: function () {
                var t;
                return nu(t = this.images).call(t, (function (t) {
                    return t.loaded
                }))
            }
        }, {
            key: "isFontsLoaded", value: function () {
                var t;
                return nu(t = this.fonts).call(t, (function (t) {
                    return t.loaded
                }))
            }
        }, {
            key: "createDocumentElement", value: function (t) {
                var e = this.createElement(t.documentElement);
                return e.root = !0, e.addStylesFromStyleDefinition(), this.documentElement = e, e
            }
        }, {
            key: "createElement", value: function (e) {
                var r = e.nodeName.replace(/^[^:]+:/, ""), n = t.elementTypes[r];
                return void 0 !== n ? new n(this, e) : new ic(this, e)
            }
        }, {
            key: "createTextNode", value: function (t) {
                return new Dc(this, t)
            }
        }, {
            key: "setViewBox", value: function (t) {
                this.screen.setViewBox(function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r, n = null != arguments[e] ? arguments[e] : {};
                        if (e % 2) Hi(r = Eh(Object(n), !0)).call(r, (function (e) {
                            Io(t, e, n[e])
                        })); else if (Di) Ri(t, Di(n)); else {
                            var i;
                            Hi(i = Eh(Object(n))).call(i, (function (e) {
                                Ni(t, e, Gi(n, e))
                            }))
                        }
                    }
                    return t
                }({document: this}, t))
            }
        }, {
            key: "window", get: function () {
                return this.screen.window
            }
        }, {
            key: "fetch", get: function () {
                return this.screen.fetch
            }
        }, {
            key: "ctx", get: function () {
                return this.screen.ctx
            }
        }, {
            key: "emSize", get: function () {
                var t = this.emSizeStack;
                return t[t.length - 1]
            }, set: function (t) {
                this.emSizeStack.push(t)
            }
        }]), t
    }();

    function Nh(t, e) {
        var r = ra(t);
        if (ta) {
            var n = ta(t);
            e && (n = Ji(n).call(n, (function (e) {
                return Gi(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function Rh(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r, n = null != arguments[e] ? arguments[e] : {};
            if (e % 2) Hi(r = Nh(Object(n), !0)).call(r, (function (e) {
                Io(t, e, n[e])
            })); else if (Di) Ri(t, Di(n)); else {
                var i;
                Hi(i = Nh(Object(n))).call(i, (function (e) {
                    Ni(t, e, Gi(n, e))
                }))
            }
        }
        return t
    }

    Mh.createCanvas = function (t, e) {
        var r = document.createElement("canvas");
        return r.width = t, r.height = e, r
    }, Mh.createImage = function (t) {
        return Ch.apply(this, arguments)
    }, Mh.elementTypes = Ph;
    var _h = function () {
        function t(e, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            jo(this, t), this.parser = new cs(n), this.screen = new os(e, n), this.options = n;
            var i = new Mh(this, n), a = i.createDocumentElement(r);
            this.document = i, this.documentElement = a
        }

        var e, r;
        return Fo(t, [{
            key: "fork", value: function (e, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return t.from(e, r, Rh(Rh({}, this.options), n))
            }
        }, {
            key: "forkString", value: function (e, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return t.fromString(e, r, Rh(Rh({}, this.options), n))
            }
        }, {
            key: "ready", value: function () {
                return this.screen.ready()
            }
        }, {
            key: "isReady", value: function () {
                return this.screen.isReady()
            }
        }, {
            key: "render", value: (r = Vo(na.mark((function t() {
                var e, r = arguments;
                return na.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return e = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.start(Rh({
                                enableRedraw: !0,
                                ignoreAnimation: !0,
                                ignoreMouse: !0
                            }, e)), t.next = 4, this.ready();
                        case 4:
                            this.stop();
                        case 5:
                        case"end":
                            return t.stop()
                    }
                }), t, this)
            }))), function () {
                return r.apply(this, arguments)
            })
        }, {
            key: "start", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = this.documentElement,
                    r = this.screen, n = this.options;
                r.start(e, Rh(Rh({enableRedraw: !0}, n), t))
            }
        }, {
            key: "stop", value: function () {
                this.screen.stop()
            }
        }, {
            key: "resize", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.documentElement.resize(t, e, r)
            }
        }], [{
            key: "from", value: (e = Vo(na.mark((function e(r, n) {
                var i, a, o, u = arguments;
                return na.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return i = u.length > 2 && void 0 !== u[2] ? u[2] : {}, a = new cs(i), e.next = 4, a.parse(n);
                        case 4:
                            return o = e.sent, e.abrupt("return", new t(r, o, i));
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            }))), function (t, r) {
                return e.apply(this, arguments)
            })
        }, {
            key: "fromString", value: function (e, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = new cs(n),
                    a = i.parseFromString(r);
                return new t(e, a, n)
            }
        }]), t
    }();
    var Dh = Object.freeze({
        __proto__: null, offscreen: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.DOMParser, r = {
                window: null, ignoreAnimation: !0, ignoreMouse: !0, DOMParser: e, createCanvas: function (t, e) {
                    return new OffscreenCanvas(t, e)
                }, createImage: function (t) {
                    return Vo(na.mark((function e() {
                        var r, n, i;
                        return na.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(t);
                                case 2:
                                    return r = e.sent, e.next = 5, r.blob();
                                case 5:
                                    return n = e.sent, e.next = 8, createImageBitmap(n);
                                case 8:
                                    return i = e.sent, e.abrupt("return", i);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }
            };
            return "undefined" == typeof DOMParser && void 0 !== e || Al(r, "DOMParser"), r
        }, node: function (t) {
            var e = t.DOMParser, r = t.canvas;
            return {
                window: null,
                ignoreAnimation: !0,
                ignoreMouse: !0,
                DOMParser: e,
                fetch: t.fetch,
                createCanvas: r.createCanvas,
                createImage: r.loadImage
            }
        }
    });
    t.AElement = xf, t.AnimateColorElement = Kl, t.AnimateElement = Yl, t.AnimateTransformElement = tf, t.BoundingBox = Oc, t.CB1 = Ai, t.CB2 = ki, t.CB3 = Ti, t.CB4 = Oi, t.Canvg = _h, t.CircleElement = pl, t.ClipPathElement = uh, t.DefsElement = Cl, t.DescElement = Oh, t.Document = Mh, t.Element = rc, t.EllipseElement = vl, t.FeColorMatrixElement = Zf, t.FeCompositeElement = vh, t.FeDropShadowElement = fh, t.FeGaussianBlurElement = Sh, t.FeMorphologyElement = ph, t.FilterElement = ch, t.Font = Tc, t.FontElement = cf, t.FontFaceElement = ff, t.GElement = Nl, t.GlyphElement = vf, t.GradientElement = _l, t.ImageElement = jf, t.LineElement = dl, t.LinearGradientElement = Vl, t.MarkerElement = Pl, t.MaskElement = Jf, t.Matrix = Qs, t.MissingGlyphElement = pf, t.Mouse = ns, t.PSEUDO_ZERO = xi, t.Parser = cs, t.PathElement = ul, t.PathParser = al, t.PatternElement = Tl, t.Point = rs, t.PolygonElement = wl, t.PolylineElement = xl, t.Property = ts, t.QB1 = Pi, t.QB2 = Ei, t.QB3 = Ci, t.RadialGradientElement = Il, t.RectElement = fl, t.RenderedElement = Ec, t.Rotate = qs, t.SVGElement = cl, t.SVGFontLoader = Bf, t.Scale = Gs, t.Screen = os, t.Skew = $s, t.SkewX = Ks, t.SkewY = tc, t.StopElement = zl, t.StyleElement = Hf, t.SymbolElement = Ff, t.TRefElement = df, t.TSpanElement = Rc, t.TextElement = Mc, t.TextPathElement = Lf, t.TitleElement = kh, t.Transform = ec, t.Translate = Ys, t.UnknownElement = ic, t.UseElement = Yf, t.ViewPort = es, t.compressSpaces = re, t.default = _h, t.getSelectorSpecificity = mi, t.normalizeAttributeName = ue, t.normalizeColor = ce, t.parseExternalUrl = se, t.presets = Dh, t.toNumbers = ae, t.trimLeft = ne, t.trimRight = ie, t.vectorMagnitude = bi, t.vectorsAngle = Si, t.vectorsRatio = wi, Object.defineProperty(t, "__esModule", {value: !0})
}));
//# sourceMappingURL=umd.js.map

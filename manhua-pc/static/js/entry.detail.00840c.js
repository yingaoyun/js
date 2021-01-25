! function (n) {
    var e = {};

    function t(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = n, t.c = e, t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: r
        })
    }, t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, t.t = function (n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var i in n) t.d(r, i, function (e) {
                return n[e]
            }.bind(null, i));
        return r
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "/", t(t.s = 13)
}({
    "+lvF": function (n, e, t) {
        n.exports = t("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (n, e) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    13: function (n, e, t) {
        n.exports = t("cQax")
    },
    "2OiF": function (n, e) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    "2Spj": function (n, e, t) {
        var r = t("XKFU");
        r(r.P, "Function", {
            bind: t("8MEG")
        })
    },
    "69bn": function (n, e, t) {
        var r = t("y3w9"),
            i = t("2OiF"),
            o = t("K0xU")("species");
        n.exports = function (n, e) {
            var t, c = r(n).constructor;
            return c === undefined || (t = r(c)[o]) == undefined ? e : i(t)
        }
    },
    "6FMO": function (n, e, t) {
        var r = t("0/R4"),
            i = t("EWmC"),
            o = t("K0xU")("species");
        n.exports = function (n) {
            var e;
            return i(n) && ("function" != typeof (e = n.constructor) || e !== Array && !i(e.prototype) || (e = undefined), r(e) && null === (e = e[o]) && (e = undefined)), e === undefined ? Array : e
        }
    },
    "8MEG": function (n, e, t) {
        "use strict";
        var r = t("2OiF"),
            i = t("0/R4"),
            o = t("MfQN"),
            c = [].slice,
            u = {};
        n.exports = Function.bind || function (n) {
            var e = r(this),
                t = c.call(arguments, 1),
                a = function () {
                    var r = t.concat(c.call(arguments));
                    return this instanceof a ? function (n, e, t) {
                        if (!(e in u)) {
                            for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                            u[e] = Function("F,a", "return new F(" + r.join(",") + ")")
                        }
                        return u[e](n, t)
                    }(e, r.length, r) : o(e, r, n)
                };
            return i(e.prototype) && (a.prototype = e.prototype), a
        }
    },
    A5AN: function (n, e, t) {
        "use strict";
        var r = t("AvRE")(!0);
        n.exports = function (n, e, t) {
            return e + (t ? r(n, e).length : 1)
        }
    },
    AvRE: function (n, e, t) {
        var r = t("RYi7"),
            i = t("vhPU");
        n.exports = function (n) {
            return function (e, t) {
                var o, c, u = String(i(e)),
                    a = r(t),
                    f = u.length;
                return a < 0 || a >= f ? n ? "" : undefined : (o = u.charCodeAt(a)) < 55296 || o > 56319 || a + 1 === f || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? n ? u.charAt(a) : o : n ? u.slice(a, a + 2) : c - 56320 + (o - 55296 << 10) + 65536
            }
        }
    },
    "C/va": function (n, e, t) {
        "use strict";
        var r = t("y3w9");
        n.exports = function () {
            var n = r(this),
                e = "";
            return n.global && (e += "g"), n.ignoreCase && (e += "i"), n.multiline && (e += "m"), n.unicode && (e += "u"), n.sticky && (e += "y"), e
        }
    },
    CkkT: function (n, e, t) {
        var r = t("m0Pp"),
            i = t("Ymqv"),
            o = t("S/j/"),
            c = t("ne8i"),
            u = t("zRwo");
        n.exports = function (n, e) {
            var t = 1 == n,
                a = 2 == n,
                f = 3 == n,
                l = 4 == n,
                s = 6 == n,
                d = 5 == n || s,
                p = e || u;
            return function (e, u, h) {
                for (var v, g, x = o(e), y = i(x), b = r(u, h, 3), m = c(y.length), w = 0, S = t ? p(e, m) : a ? p(e, 0) : undefined; m > w; w++)
                    if ((d || w in y) && (g = b(v = y[w], w, x), n))
                        if (t) S[w] = g;
                        else if (g) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return w;
                    case 2:
                        S.push(v)
                } else if (l) return !1;
                return s ? -1 : f || l ? l : S
            }
        }
    },
    EWmC: function (n, e, t) {
        var r = t("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == r(n)
        }
    },
    "I8a+": function (n, e, t) {
        var r = t("LZWt"),
            i = t("K0xU")("toStringTag"),
            o = "Arguments" == r(function () {
                return arguments
            }());
        n.exports = function (n) {
            var e, t, c;
            return n === undefined ? "Undefined" : null === n ? "Null" : "string" == typeof (t = function (n, e) {
                try {
                    return n[e]
                } catch (t) {}
            }(e = Object(n), i)) ? t : o ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
        }
    },
    "IU+Z": function (n, e, t) {
        "use strict";
        t("sMXx");
        var r = t("KroJ"),
            i = t("Mukb"),
            o = t("eeVq"),
            c = t("vhPU"),
            u = t("K0xU"),
            a = t("Ugos"),
            f = u("species"),
            l = !o(function () {
                var n = /./;
                return n.exec = function () {
                    var n = [];
                    return n.groups = {
                        a: "7"
                    }, n
                }, "7" !== "".replace(n, "$<a>")
            }),
            s = function () {
                var n = /(?:)/,
                    e = n.exec;
                n.exec = function () {
                    return e.apply(this, arguments)
                };
                var t = "ab".split(n);
                return 2 === t.length && "a" === t[0] && "b" === t[1]
            }();
        n.exports = function (n, e, t) {
            var d = u(n),
                p = !o(function () {
                    var e = {};
                    return e[d] = function () {
                        return 7
                    }, 7 != "" [n](e)
                }),
                h = p ? !o(function () {
                    var e = !1,
                        t = /a/;
                    return t.exec = function () {
                        return e = !0, null
                    }, "split" === n && (t.constructor = {}, t.constructor[f] = function () {
                        return t
                    }), t[d](""), !e
                }) : undefined;
            if (!p || !h || "replace" === n && !l || "split" === n && !s) {
                var v = /./ [d],
                    g = t(c, d, "" [n], function (n, e, t, r, i) {
                        return e.exec === a ? p && !i ? {
                            done: !0,
                            value: v.call(e, t, r)
                        } : {
                            done: !0,
                            value: n.call(t, e, r)
                        } : {
                            done: !1
                        }
                    }),
                    x = g[0],
                    y = g[1];
                r(String.prototype, n, x), i(RegExp.prototype, d, 2 == e ? function (n, e) {
                    return y.call(n, this, e)
                } : function (n) {
                    return y.call(n, this)
                })
            }
        }
    },
    Iw71: function (n, e, t) {
        var r = t("0/R4"),
            i = t("dyZX").document,
            o = r(i) && r(i.createElement);
        n.exports = function (n) {
            return o ? i.createElement(n) : {}
        }
    },
    K0xU: function (n, e, t) {
        var r = t("VTer")("wks"),
            i = t("ylqs"),
            o = t("dyZX").Symbol,
            c = "function" == typeof o;
        (n.exports = function (n) {
            return r[n] || (r[n] = c && o[n] || (c ? o : i)("Symbol." + n))
        }).store = r
    },
    KKXr: function (n, e, t) {
        "use strict";
        var r = t("quPj"),
            i = t("y3w9"),
            o = t("69bn"),
            c = t("A5AN"),
            u = t("ne8i"),
            a = t("Xxuz"),
            f = t("Ugos"),
            l = t("eeVq"),
            s = Math.min,
            d = [].push,
            p = !l(function () {
                RegExp(4294967295, "y")
            });
        t("IU+Z")("split", 2, function (n, e, t, l) {
            var h;
            return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (n, e) {
                var i = String(this);
                if (n === undefined && 0 === e) return [];
                if (!r(n)) return t.call(i, n, e);
                for (var o, c, u, a = [], l = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (n.sticky ? "y" : ""), s = 0, p = e === undefined ? 4294967295 : e >>> 0, h = new RegExp(n.source, l + "g");
                    (o = f.call(h, i)) && !((c = h.lastIndex) > s && (a.push(i.slice(s, o.index)), o.length > 1 && o.index < i.length && d.apply(a, o.slice(1)), u = o[0].length, s = c, a.length >= p));) h.lastIndex === o.index && h.lastIndex++;
                return s === i.length ? !u && h.test("") || a.push("") : a.push(i.slice(s)), a.length > p ? a.slice(0, p) : a
            } : "0".split(undefined, 0).length ? function (n, e) {
                return n === undefined && 0 === e ? [] : t.call(this, n, e)
            } : t, [function (t, r) {
                var i = n(this),
                    o = t == undefined ? undefined : t[e];
                return o !== undefined ? o.call(t, i, r) : h.call(String(i), t, r)
            }, function (n, e) {
                var r = l(h, n, this, e, h !== t);
                if (r.done) return r.value;
                var f = i(n),
                    d = String(this),
                    v = o(f, RegExp),
                    g = f.unicode,
                    x = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (p ? "y" : "g"),
                    y = new v(p ? f : "^(?:" + f.source + ")", x),
                    b = e === undefined ? 4294967295 : e >>> 0;
                if (0 === b) return [];
                if (0 === d.length) return null === a(y, d) ? [d] : [];
                for (var m = 0, w = 0, S = []; w < d.length;) {
                    y.lastIndex = p ? w : 0;
                    var _, R = a(y, p ? d : d.slice(w));
                    if (null === R || (_ = s(u(y.lastIndex + (p ? 0 : w)), d.length)) === m) w = c(d, w, g);
                    else {
                        if (S.push(d.slice(m, w)), S.length === b) return S;
                        for (var j = 1; j <= R.length - 1; j++)
                            if (S.push(R[j]), S.length === b) return S;
                        w = m = _
                    }
                }
                return S.push(d.slice(m)), S
            }]
        })
    },
    KroJ: function (n, e, t) {
        var r = t("dyZX"),
            i = t("Mukb"),
            o = t("aagx"),
            c = t("ylqs")("src"),
            u = t("+lvF"),
            a = ("" + u).split("toString");
        t("g3g5").inspectSource = function (n) {
            return u.call(n)
        }, (n.exports = function (n, e, t, u) {
            var f = "function" == typeof t;
            f && (o(t, "name") || i(t, "name", e)), n[e] !== t && (f && (o(t, c) || i(t, c, n[e] ? "" + n[e] : a.join(String(e)))), n === r ? n[e] = t : u ? n[e] ? n[e] = t : i(n, e, t) : (delete n[e], i(n, e, t)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[c] || u.call(this)
        })
    },
    LQAc: function (n, e) {
        n.exports = !1
    },
    LZWt: function (n, e) {
        var t = {}.toString;
        n.exports = function (n) {
            return t.call(n).slice(8, -1)
        }
    },
    MfQN: function (n, e) {
        n.exports = function (n, e, t) {
            var r = t === undefined;
            switch (e.length) {
                case 0:
                    return r ? n() : n.call(t);
                case 1:
                    return r ? n(e[0]) : n.call(t, e[0]);
                case 2:
                    return r ? n(e[0], e[1]) : n.call(t, e[0], e[1]);
                case 3:
                    return r ? n(e[0], e[1], e[2]) : n.call(t, e[0], e[1], e[2]);
                case 4:
                    return r ? n(e[0], e[1], e[2], e[3]) : n.call(t, e[0], e[1], e[2], e[3])
            }
            return n.apply(t, e)
        }
    },
    Mukb: function (n, e, t) {
        var r = t("hswa"),
            i = t("RjD/");
        n.exports = t("nh4g") ? function (n, e, t) {
            return r.f(n, e, i(1, t))
        } : function (n, e, t) {
            return n[e] = t, n
        }
    },
    RYi7: function (n, e) {
        var t = Math.ceil,
            r = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? r : t)(n)
        }
    },
    RYyE: function (n, e, t) {},
    "RjD/": function (n, e) {
        n.exports = function (n, e) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: e
            }
        }
    },
    "S/j/": function (n, e, t) {
        var r = t("vhPU");
        n.exports = function (n) {
            return Object(r(n))
        }
    },
    Ugos: function (n, e, t) {
        "use strict";
        var r, i, o = t("C/va"),
            c = RegExp.prototype.exec,
            u = String.prototype.replace,
            a = c,
            f = (r = /a/, i = /b*/g, c.call(r, "a"), c.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
            l = /()??/.exec("")[1] !== undefined;
        (f || l) && (a = function (n) {
            var e, t, r, i, a = this;
            return l && (t = new RegExp("^" + a.source + "$(?!\\s)", o.call(a))), f && (e = a.lastIndex), r = c.call(a, n), f && r && (a.lastIndex = a.global ? r.index + r[0].length : e), l && r && r.length > 1 && u.call(r[0], t, function () {
                for (i = 1; i < arguments.length - 2; i++) arguments[i] === undefined && (r[i] = undefined)
            }), r
        }), n.exports = a
    },
    VTer: function (n, e, t) {
        var r = t("g3g5"),
            i = t("dyZX"),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (n.exports = function (n, e) {
            return o[n] || (o[n] = e !== undefined ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: t("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, e, t) {
        var r = t("dyZX"),
            i = t("g3g5"),
            o = t("Mukb"),
            c = t("KroJ"),
            u = t("m0Pp"),
            a = function (n, e, t) {
                var f, l, s, d, p = n & a.F,
                    h = n & a.G,
                    v = n & a.S,
                    g = n & a.P,
                    x = n & a.B,
                    y = h ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    b = h ? i : i[e] || (i[e] = {}),
                    m = b.prototype || (b.prototype = {});
                for (f in h && (t = e), t) s = ((l = !p && y && y[f] !== undefined) ? y : t)[f], d = x && l ? u(s, r) : g && "function" == typeof s ? u(Function.call, s) : s, y && c(y, f, s, n & a.U), b[f] != s && o(b, f, d), g && m[f] != s && (m[f] = s)
            };
        r.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, n.exports = a
    },
    Xxuz: function (n, e, t) {
        "use strict";
        var r = t("I8a+"),
            i = RegExp.prototype.exec;
        n.exports = function (n, e) {
            var t = n.exec;
            if ("function" == typeof t) {
                var o = t.call(n, e);
                if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== r(n)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return i.call(n, e)
        }
    },
    Ymqv: function (n, e, t) {
        var r = t("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == r(n) ? n.split("") : Object(n)
        }
    },
    aagx: function (n, e) {
        var t = {}.hasOwnProperty;
        n.exports = function (n, e) {
            return t.call(n, e)
        }
    },
    apmT: function (n, e, t) {
        var r = t("0/R4");
        n.exports = function (n, e) {
            if (!r(n)) return n;
            var t, i;
            if (e && "function" == typeof (t = n.toString) && !r(i = t.call(n))) return i;
            if ("function" == typeof (t = n.valueOf) && !r(i = t.call(n))) return i;
            if (!e && "function" == typeof (t = n.toString) && !r(i = t.call(n))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    cQax: function (n, e, t) {
        "use strict";
        (function (n) {
            t("2Spj"), t("KKXr"), t("pIFo"), t("dRSK"), t("RYyE"),
                function () {
                    if (window.ACGN === undefined) return !1;
                    var e = window,
                        t = n;
                    e.Swiper;
                    window.ACGN.model.register("detail-frontcover", {
                        desc: "漫画封面",
                        resource: ""
                    }, function (n, e) {
                        var r = t(n.el);
                        n.cls;
                        if (!window.moduleDebug) {
                            var i = ACGN.business.comicRecord,
                                o = r.find(".btn-collect");
                            if (o.length)
                                if (r.find(".btn-read").length) {
                                    var c = t(".btn-collect.collect").attr("data-source");
                                    c = c.replace(/\\"/g, '"');
                                    var u = JSON.parse(c),
                                        a = location.pathname.split("/")[1];
                                    a = parseInt(a), i.getUserCollect(u, function (n, e) {
                                        e && e.comic_id ? (r.find(".btn-collect").hide(), r.find(".btn-collect.collected").show()) : (r.find(".btn-collect").hide(), r.find(".btn-collect.collect").show())
                                    });
                                    var f = r.find(".btn-read");
                                    i.getReadHistory({
                                        comic_id: a
                                    }, function (n, e) {
                                        n || e && !t.isArray(e) && e.comic_id && (f.hide(), r.find(".btn-read.continue").show())
                                    }), r.on("click", ".btn-read", function () {
                                        var n = t(this).attr("data-source");
                                        n = n.replace(/\\"/g, '"');
                                        var e = JSON.parse(n);
                                        i.getReadHistory(e, function (n, t) {
                                            if (t && t.length > 0)
                                                for (var r = 0; r < t.length; r++) {
                                                    var i = t[r];
                                                    if (i.comic_id == a) {
                                                        // var o = "/".concat(i.comic_id, "/").concat(i.chapter_newid ? i.chapter_newid : i.chapter_id, ".html");
                                                        var o = "/".concat(i.comic_id, "/").concat(i.chapter_newid ? i.chapter_newid : i.chapter_id, ".html");
                                                        return void(window.location.href = o)
                                                    }
                                                }
                                            var c = "/".concat(u.comic_id, "/").concat(e.chapter_id, ".html");
                                            window.location.href = c
                                        })
                                    });
                                    o.on("click", ACGN.util.beforeCheck(function () {
                                        var n = t(this).attr("data-source");
                                        n = n.replace(/\\"/g, '"');
                                        var e = JSON.parse(n),
                                            r = ACGN.userInfo;
                                        new(0, ACGN.business.bookCollect)({
                                            userInfo: r,
                                            collectCallback: function (n, e) {
                                                n || (i.refreshCollect(), e && (t("body").find(".btn-collect").hide(), t("body").find(".btn-collect.collected").show()))
                                            }
                                        }).initShow([e])
                                    }.bind(o), ACGN.business.checkLogin.bind(ACGN.business))), r.on("mouseover", ".read.continue", function () {
                                        var n = t(this);
                                        i.getUserRecord({
                                            comic_id: a
                                        }, function (e, t) {
                                            if (t && t.length > 0) {
                                                for (var r = !1, i = 0; i < t.length; i++)
                                                    if (t[i].comic_id == a) {
                                                        r = t[i];
                                                        break
                                                    } var o = r.read_time;
                                                if (o) {
                                                    for (var c = o + ""; c.length < 13;) c += "0";
                                                    o = parseInt(c);
                                                    var u = (new Date).getTime() - o,
                                                        f = (u = parseInt(u / 1e3)) / 86400,
                                                        l = u / 3600,
                                                        s = u / 60,
                                                        d = u / 31536e3,
                                                        p = "";
                                                    p = d >= 1 ? "您在 " + parseInt(d) + "年 前阅读至 " + r.chapter_name + ", 点击继续阅读" : f >= 1 ? "您在 " + parseInt(f) + "天 前阅读至 " + r.chapter_name + ", 点击继续阅读" : l >= 1 ? "您在 " + parseInt(l) + "小时 前阅读至 " + r.chapter_name + ", 点击继续阅读" : s >= 1 ? "您在 " + parseInt(s) + "分钟 前阅读至 " + r.chapter_name + ", 点击继续阅读" : "您在 刚才 阅读至 " + r.chapter_name + ", 点击继续阅读", n.find(".continue-des").removeClass("acgn-hide").find("span").text(p)
                                                }
                                            }
                                        })
                                    }), r.on("mouseout", ".read.continue", function () {
                                        t(this).find(".continue-des").addClass("acgn-hide").find("span").text("")
                                    })
                                }
                        }
                    })
                }()
        }).call(this, t("xeH2"))
    },
    dRSK: function (n, e, t) {
        "use strict";
        var r = t("XKFU"),
            i = t("CkkT")(5),
            o = !0;
        "find" in [] && Array(1).find(function () {
            o = !1
        }), r(r.P + r.F * o, "Array", {
            find: function (n) {
                return i(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), t("nGyu")("find")
    },
    dyZX: function (n, e) {
        var t = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    },
    eeVq: function (n, e) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (e) {
                return !0
            }
        }
    },
    g3g5: function (n, e) {
        var t = n.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = t)
    },
    hswa: function (n, e, t) {
        var r = t("y3w9"),
            i = t("xpql"),
            o = t("apmT"),
            c = Object.defineProperty;
        e.f = t("nh4g") ? Object.defineProperty : function (n, e, t) {
            if (r(n), e = o(e, !0), r(t), i) try {
                return c(n, e, t)
            } catch (u) {}
            if ("get" in t || "set" in t) throw TypeError("Accessors not supported!");
            return "value" in t && (n[e] = t.value), n
        }
    },
    m0Pp: function (n, e, t) {
        var r = t("2OiF");
        n.exports = function (n, e, t) {
            if (r(n), e === undefined) return n;
            switch (t) {
                case 1:
                    return function (t) {
                        return n.call(e, t)
                    };
                case 2:
                    return function (t, r) {
                        return n.call(e, t, r)
                    };
                case 3:
                    return function (t, r, i) {
                        return n.call(e, t, r, i)
                    }
            }
            return function () {
                return n.apply(e, arguments)
            }
        }
    },
    nGyu: function (n, e, t) {
        var r = t("K0xU")("unscopables"),
            i = Array.prototype;
        i[r] == undefined && t("Mukb")(i, r, {}), n.exports = function (n) {
            i[r][n] = !0
        }
    },
    ne8i: function (n, e, t) {
        var r = t("RYi7"),
            i = Math.min;
        n.exports = function (n) {
            return n > 0 ? i(r(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, e, t) {
        n.exports = !t("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    pIFo: function (n, e, t) {
        "use strict";
        var r = t("y3w9"),
            i = t("S/j/"),
            o = t("ne8i"),
            c = t("RYi7"),
            u = t("A5AN"),
            a = t("Xxuz"),
            f = Math.max,
            l = Math.min,
            s = Math.floor,
            d = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g;
        t("IU+Z")("replace", 2, function (n, e, t, h) {
            return [function (r, i) {
                var o = n(this),
                    c = r == undefined ? undefined : r[e];
                return c !== undefined ? c.call(r, o, i) : t.call(String(o), r, i)
            }, function (n, e) {
                var i = h(t, n, this, e);
                if (i.done) return i.value;
                var s = r(n),
                    d = String(this),
                    p = "function" == typeof e;
                p || (e = String(e));
                var g = s.global;
                if (g) {
                    var x = s.unicode;
                    s.lastIndex = 0
                }
                for (var y = [];;) {
                    var b = a(s, d);
                    if (null === b) break;
                    if (y.push(b), !g) break;
                    "" === String(b[0]) && (s.lastIndex = u(d, o(s.lastIndex), x))
                }
                for (var m, w = "", S = 0, _ = 0; _ < y.length; _++) {
                    b = y[_];
                    for (var R = String(b[0]), j = f(l(c(b.index), d.length), 0), A = [], I = 1; I < b.length; I++) A.push((m = b[I]) === undefined ? m : String(m));
                    var E = b.groups;
                    if (p) {
                        var M = [R].concat(A, j, d);
                        E !== undefined && M.push(E);
                        var O = String(e.apply(undefined, M))
                    } else O = v(R, d, j, A, E, e);
                    j >= S && (w += d.slice(S, j) + O, S = j + R.length)
                }
                return w + d.slice(S)
            }];

            function v(n, e, r, o, c, u) {
                var a = r + n.length,
                    f = o.length,
                    l = p;
                return c !== undefined && (c = i(c), l = d), t.call(u, l, function (t, i) {
                    var u;
                    switch (i.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return n;
                        case "`":
                            return e.slice(0, r);
                        case "'":
                            return e.slice(a);
                        case "<":
                            u = c[i.slice(1, -1)];
                            break;
                        default:
                            var l = +i;
                            if (0 === l) return t;
                            if (l > f) {
                                var d = s(l / 10);
                                return 0 === d ? t : d <= f ? o[d - 1] === undefined ? i.charAt(1) : o[d - 1] + i.charAt(1) : t
                            }
                            u = o[l - 1]
                    }
                    return u === undefined ? "" : u
                })
            }
        })
    },
    quPj: function (n, e, t) {
        var r = t("0/R4"),
            i = t("LZWt"),
            o = t("K0xU")("match");
        n.exports = function (n) {
            var e;
            return r(n) && ((e = n[o]) !== undefined ? !!e : "RegExp" == i(n))
        }
    },
    sMXx: function (n, e, t) {
        "use strict";
        var r = t("Ugos");
        t("XKFU")({
            target: "RegExp",
            proto: !0,
            forced: r !== /./.exec
        }, {
            exec: r
        })
    },
    vhPU: function (n, e) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    xeH2: function (n, e) {
        n.exports = jQuery
    },
    xpql: function (n, e, t) {
        n.exports = !t("nh4g") && !t("eeVq")(function () {
            return 7 != Object.defineProperty(t("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, e, t) {
        var r = t("0/R4");
        n.exports = function (n) {
            if (!r(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, e) {
        var t = 0,
            r = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++t + r).toString(36))
        }
    },
    zRwo: function (n, e, t) {
        var r = t("6FMO");
        n.exports = function (n, e) {
            return new(r(n))(e)
        }
    }
});
! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function (e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 9)
}({
    "+lvF": function (t, e, n) {
        t.exports = n("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    "0l/t": function (t, e, n) {
        "use strict";
        var r = n("XKFU"),
            i = n("CkkT")(2);
        r(r.P + r.F * !n("LyE8")([].filter, !0), "Array", {
            filter: function (t) {
                return i(this, t, arguments[1])
            }
        })
    },
    "0sh+": function (t, e, n) {
        var r = n("quPj"),
            i = n("vhPU");
        t.exports = function (t, e, n) {
            if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(t))
        }
    },
    "2OiF": function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    "69bn": function (t, e, n) {
        var r = n("y3w9"),
            i = n("2OiF"),
            o = n("K0xU")("species");
        t.exports = function (t, e) {
            var n, a = r(t).constructor;
            return a === undefined || (n = r(a)[o]) == undefined ? e : i(n)
        }
    },
    "6FMO": function (t, e, n) {
        var r = n("0/R4"),
            i = n("EWmC"),
            o = n("K0xU")("species");
        t.exports = function (t) {
            var e;
            return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = undefined), r(e) && null === (e = e[o]) && (e = undefined)), e === undefined ? Array : e
        }
    },
    9: function (t, e, n) {
        t.exports = n("kH++")
    },
    A5AN: function (t, e, n) {
        "use strict";
        var r = n("AvRE")(!0);
        t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1)
        }
    },
    AvRE: function (t, e, n) {
        var r = n("RYi7"),
            i = n("vhPU");
        t.exports = function (t) {
            return function (e, n) {
                var o, a, u = String(i(e)),
                    c = r(n),
                    s = u.length;
                return c < 0 || c >= s ? t ? "" : undefined : (o = u.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === s || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? u.charAt(c) : o : t ? u.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        }
    },
    Btvt: function (t, e, n) {
        "use strict";
        var r = n("I8a+"),
            i = {};
        i[n("K0xU")("toStringTag")] = "z", i + "" != "[object z]" && n("KroJ")(Object.prototype, "toString", function () {
            return "[object " + r(this) + "]"
        }, !0)
    },
    "C/va": function (t, e, n) {
        "use strict";
        var r = n("y3w9");
        t.exports = function () {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    },
    CkkT: function (t, e, n) {
        var r = n("m0Pp"),
            i = n("Ymqv"),
            o = n("S/j/"),
            a = n("ne8i"),
            u = n("zRwo");
        t.exports = function (t, e) {
            var n = 1 == t,
                c = 2 == t,
                s = 3 == t,
                l = 4 == t,
                f = 6 == t,
                d = 5 == t || f,
                p = e || u;
            return function (e, u, v) {
                for (var h, g, y = o(e), m = i(y), x = r(u, v, 3), w = a(m.length), b = 0, C = n ? p(e, w) : c ? p(e, 0) : undefined; w > b; b++)
                    if ((d || b in m) && (g = x(h = m[b], b, y), t))
                        if (n) C[b] = g;
                        else if (g) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return b;
                    case 2:
                        C.push(h)
                } else if (l) return !1;
                return f ? -1 : s || l ? l : C
            }
        }
    },
    EWmC: function (t, e, n) {
        var r = n("LZWt");
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
    },
    "HAE/": function (t, e, n) {
        var r = n("XKFU");
        r(r.S + r.F * !n("nh4g"), "Object", {
            defineProperty: n("hswa").f
        })
    },
    "I8a+": function (t, e, n) {
        var r = n("LZWt"),
            i = n("K0xU")("toStringTag"),
            o = "Arguments" == r(function () {
                return arguments
            }());
        t.exports = function (t) {
            var e, n, a;
            return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (n) {}
            }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    },
    "IU+Z": function (t, e, n) {
        "use strict";
        n("sMXx");
        var r = n("KroJ"),
            i = n("Mukb"),
            o = n("eeVq"),
            a = n("vhPU"),
            u = n("K0xU"),
            c = n("Ugos"),
            s = u("species"),
            l = !o(function () {
                var t = /./;
                return t.exec = function () {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            }),
            f = function () {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments)
                };
                var n = "ab".split(t);
                return 2 === n.length && "a" === n[0] && "b" === n[1]
            }();
        t.exports = function (t, e, n) {
            var d = u(t),
                p = !o(function () {
                    var e = {};
                    return e[d] = function () {
                        return 7
                    }, 7 != "" [t](e)
                }),
                v = p ? !o(function () {
                    var e = !1,
                        n = /a/;
                    return n.exec = function () {
                        return e = !0, null
                    }, "split" === t && (n.constructor = {}, n.constructor[s] = function () {
                        return n
                    }), n[d](""), !e
                }) : undefined;
            if (!p || !v || "replace" === t && !l || "split" === t && !f) {
                var h = /./ [d],
                    g = n(a, d, "" [t], function (t, e, n, r, i) {
                        return e.exec === c ? p && !i ? {
                            done: !0,
                            value: h.call(e, n, r)
                        } : {
                            done: !0,
                            value: t.call(n, e, r)
                        } : {
                            done: !1
                        }
                    }),
                    y = g[0],
                    m = g[1];
                r(String.prototype, t, y), i(RegExp.prototype, d, 2 == e ? function (t, e) {
                    return m.call(t, this, e)
                } : function (t) {
                    return m.call(t, this)
                })
            }
        }
    },
    Iw71: function (t, e, n) {
        var r = n("0/R4"),
            i = n("dyZX").document,
            o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {}
        }
    },
    K0xU: function (t, e, n) {
        var r = n("VTer")("wks"),
            i = n("ylqs"),
            o = n("dyZX").Symbol,
            a = "function" == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
        }).store = r
    },
    KKXr: function (t, e, n) {
        "use strict";
        var r = n("quPj"),
            i = n("y3w9"),
            o = n("69bn"),
            a = n("A5AN"),
            u = n("ne8i"),
            c = n("Xxuz"),
            s = n("Ugos"),
            l = n("eeVq"),
            f = Math.min,
            d = [].push,
            p = !l(function () {
                RegExp(4294967295, "y")
            });
        n("IU+Z")("split", 2, function (t, e, n, l) {
            var v;
            return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
                var i = String(this);
                if (t === undefined && 0 === e) return [];
                if (!r(t)) return n.call(i, t, e);
                for (var o, a, u, c = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = e === undefined ? 4294967295 : e >>> 0, v = new RegExp(t.source, l + "g");
                    (o = s.call(v, i)) && !((a = v.lastIndex) > f && (c.push(i.slice(f, o.index)), o.length > 1 && o.index < i.length && d.apply(c, o.slice(1)), u = o[0].length, f = a, c.length >= p));) v.lastIndex === o.index && v.lastIndex++;
                return f === i.length ? !u && v.test("") || c.push("") : c.push(i.slice(f)), c.length > p ? c.slice(0, p) : c
            } : "0".split(undefined, 0).length ? function (t, e) {
                return t === undefined && 0 === e ? [] : n.call(this, t, e)
            } : n, [function (n, r) {
                var i = t(this),
                    o = n == undefined ? undefined : n[e];
                return o !== undefined ? o.call(n, i, r) : v.call(String(i), n, r)
            }, function (t, e) {
                var r = l(v, t, this, e, v !== n);
                if (r.done) return r.value;
                var s = i(t),
                    d = String(this),
                    h = o(s, RegExp),
                    g = s.unicode,
                    y = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (p ? "y" : "g"),
                    m = new h(p ? s : "^(?:" + s.source + ")", y),
                    x = e === undefined ? 4294967295 : e >>> 0;
                if (0 === x) return [];
                if (0 === d.length) return null === c(m, d) ? [d] : [];
                for (var w = 0, b = 0, C = []; b < d.length;) {
                    m.lastIndex = p ? b : 0;
                    var R, S = c(m, p ? d : d.slice(b));
                    if (null === S || (R = f(u(m.lastIndex + (p ? 0 : b)), d.length)) === w) b = a(d, b, g);
                    else {
                        if (C.push(d.slice(w, b)), C.length === x) return C;
                        for (var _ = 1; _ <= S.length - 1; _++)
                            if (C.push(S[_]), C.length === x) return C;
                        b = w = R
                    }
                }
                return C.push(d.slice(w)), C
            }]
        })
    },
    KroJ: function (t, e, n) {
        var r = n("dyZX"),
            i = n("Mukb"),
            o = n("aagx"),
            a = n("ylqs")("src"),
            u = n("+lvF"),
            c = ("" + u).split("toString");
        n("g3g5").inspectSource = function (t) {
            return u.call(t)
        }, (t.exports = function (t, e, n, u) {
            var s = "function" == typeof n;
            s && (o(n, "name") || i(n, "name", e)), t[e] !== n && (s && (o(n, a) || i(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : u ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[a] || u.call(this)
        })
    },
    L9s1: function (t, e, n) {
        "use strict";
        var r = n("XKFU"),
            i = n("0sh+");
        r(r.P + r.F * n("UUeW")("includes"), "String", {
            includes: function (t) {
                return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : undefined)
            }
        })
    },
    LQAc: function (t, e) {
        t.exports = !1
    },
    LZWt: function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    },
    LyE8: function (t, e, n) {
        "use strict";
        var r = n("eeVq");
        t.exports = function (t, e) {
            return !!t && r(function () {
                e ? t.call(null, function () {}, 1) : t.call(null)
            })
        }
    },
    "M+4l": function (t, e, n) {},
    Mukb: function (t, e, n) {
        var r = n("hswa"),
            i = n("RjD/");
        t.exports = n("nh4g") ? function (t, e, n) {
            return r.f(t, e, i(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    },
    OEbY: function (t, e, n) {
        n("nh4g") && "g" != /./g.flags && n("hswa").f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n("C/va")
        })
    },
    RYi7: function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    },
    "RjD/": function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    "S/j/": function (t, e, n) {
        var r = n("vhPU");
        t.exports = function (t) {
            return Object(r(t))
        }
    },
    TqRt: function (t, e) {
        t.exports = function (t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
    },
    UUeW: function (t, e, n) {
        var r = n("K0xU")("match");
        t.exports = function (t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[r] = !1, !"/./" [t](e)
                } catch (i) {}
            }
            return !0
        }
    },
    Ugos: function (t, e, n) {
        "use strict";
        var r, i, o = n("C/va"),
            a = RegExp.prototype.exec,
            u = String.prototype.replace,
            c = a,
            s = (r = /a/, i = /b*/g, a.call(r, "a"), a.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
            l = /()??/.exec("")[1] !== undefined;
        (s || l) && (c = function (t) {
            var e, n, r, i, c = this;
            return l && (n = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))), s && (e = c.lastIndex), r = a.call(c, t), s && r && (c.lastIndex = c.global ? r.index + r[0].length : e), l && r && r.length > 1 && u.call(r[0], n, function () {
                for (i = 1; i < arguments.length - 2; i++) arguments[i] === undefined && (r[i] = undefined)
            }), r
        }), t.exports = c
    },
    VTer: function (t, e, n) {
        var r = n("g3g5"),
            i = n("dyZX"),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return o[t] || (o[t] = e !== undefined ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    W8MJ: function (t, e) {
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        t.exports = function (t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), t
        }
    },
    XKFU: function (t, e, n) {
        var r = n("dyZX"),
            i = n("g3g5"),
            o = n("Mukb"),
            a = n("KroJ"),
            u = n("m0Pp"),
            c = function (t, e, n) {
                var s, l, f, d, p = t & c.F,
                    v = t & c.G,
                    h = t & c.S,
                    g = t & c.P,
                    y = t & c.B,
                    m = v ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    x = v ? i : i[e] || (i[e] = {}),
                    w = x.prototype || (x.prototype = {});
                for (s in v && (n = e), n) f = ((l = !p && m && m[s] !== undefined) ? m : n)[s], d = y && l ? u(f, r) : g && "function" == typeof f ? u(Function.call, f) : f, m && a(m, s, f, t & c.U), x[s] != f && o(x, s, d), g && w[s] != f && (w[s] = f)
            };
        r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    },
    Xxuz: function (t, e, n) {
        "use strict";
        var r = n("I8a+"),
            i = RegExp.prototype.exec;
        t.exports = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var o = n.call(t, e);
                if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return i.call(t, e)
        }
    },
    Ymqv: function (t, e, n) {
        var r = n("LZWt");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    Z2Ku: function (t, e, n) {
        "use strict";
        var r = n("XKFU"),
            i = n("w2a5")(!0);
        r(r.P, "Array", {
            includes: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), n("nGyu")("includes")
    },
    a1Th: function (t, e, n) {
        "use strict";
        n("OEbY");
        var r = n("y3w9"),
            i = n("C/va"),
            o = n("nh4g"),
            a = /./.toString,
            u = function (t) {
                n("KroJ")(RegExp.prototype, "toString", t, !0)
            };
        n("eeVq")(function () {
            return "/a/b" != a.call({
                source: "a",
                flags: "b"
            })
        }) ? u(function () {
            var t = r(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : undefined)
        }) : "toString" != a.name && u(function () {
            return a.call(this)
        })
    },
    aCFj: function (t, e, n) {
        var r = n("Ymqv"),
            i = n("vhPU");
        t.exports = function (t) {
            return r(i(t))
        }
    },
    aagx: function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    },
    apmT: function (t, e, n) {
        var r = n("0/R4");
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    "d/Gc": function (t, e, n) {
        var r = n("RYi7"),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
        }
    },
    dRSK: function (t, e, n) {
        "use strict";
        var r = n("XKFU"),
            i = n("CkkT")(5),
            o = !0;
        "find" in [] && Array(1).find(function () {
            o = !1
        }), r(r.P + r.F * o, "Array", {
            find: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), n("nGyu")("find")
    },
    dyZX: function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    eM6i: function (t, e, n) {
        var r = n("XKFU");
        r(r.S, "Date", {
            now: function () {
                return (new Date).getTime()
            }
        })
    },
    eeVq: function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    },
    "f+/7": function (t, e, n) {
        "use strict";
        (function (t) {
            var r = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("Z2Ku"), n("L9s1"), n("eM6i"), n("0l/t"), n("dRSK");
            var i = r(n("lwsE")),
                o = r(n("W8MJ"));
            n("M+4l");
            var a = function () {
                function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    (0, i["default"])(this, e), this.comicId = t.comicId || "", this.init()
                }
                return (0, o["default"])(e, [{
                    key: "init",
                    value: function () {
                        var e = this;
                        this.enabled && (this.$wrap = t("#__acgn-virtual-coin__ .acgn-virtual-coin"), this.$dialogs = this.$wrap.find(".item"), this.$userDialog = this.$wrap.find(".acgn-virtual-coin__user"), this.$surpriseDialog = this.$wrap.find(".acgn-virtual-coin__surprise"), this.$bloodDialog = this.$wrap.find(".acgn-virtual-coin__blood"), this.$wrap.on("click", function () {
                            e.hide()
                        }), this.hasRegistered() || this.registerReward(), "read" === window.pageType && this.timing())
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var t = this.$dialogs.filter(":visible"),
                            e = t.length;
                        t.eq(e - 1).hide(), e <= 1 && this.$wrap.hide()
                    }
                }, {
                    key: "showSurprise",
                    value: function () {
                        this.$wrap.show(), this.$surpriseDialog.show()
                    }
                }, {
                    key: "showUser",
                    value: function () {
                        this.$wrap.show(), this.$userDialog.show()
                    }
                }, {
                    key: "showBlood",
                    value: function () {
                        this.$wrap.show(), this.$bloodDialog.show()
                    }
                }, {
                    key: "hasRegistered",
                    value: function () {
                        return 1 === ACGN.util.limitStore("virtualCoinRegistered")
                    }
                }, {
                    key: "registerReward",
                    value: function () {
                        this.showUser(), ACGN.util.limitStore("virtualCoinRegistered", 1), ACGN.util.limitStore("virtualCoin", 5e3)
                    }
                }, {
                    key: "surpriseReward",
                    value: function () {
                        this.showSurprise();
                        var t = parseInt(ACGN.util.limitStore("virtualCoin") || 0);
                        try {
                            t += 688
                        } catch (e) {}
                        ACGN.util.limitStore("virtualCoin", t)
                    }
                }, {
                    key: "bloodReward",
                    value: function () {
                        this.showBlood();
                        var t = parseInt(ACGN.util.limitStore("virtualCoin") || 0);
                        try {
                            t += 3e3
                        } catch (e) {}
                        ACGN.util.limitStore("virtualCoin", t)
                    }
                }, {
                    key: "timing",
                    value: function () {
                        var e = this;
                        t(document).on("scroll click mousemove", function () {
                            ACGN.util.throttle(e.updateTiming, undefined, 50, e)
                        })
                    }
                }, {
                    key: "updateTiming",
                    value: function () {
                        var t = ACGN.util.limitStore("virtualCoinReadtime") || {
                                startTime: Date.now(),
                                lastTime: Date.now()
                            },
                            e = Date.now();
                        e - t.lastTime > 18e5 && (t.startTime = e - (t.lastTime - t.startTime)), t.lastTime = e, ACGN.util.limitStore("virtualCoinReadtime", t), t.lastTime - t.startTime > 18e5 && (this.surpriseReward(), ACGN.util.limitStore("virtualCoinReadtime", {
                            startTime: e,
                            lastTime: e
                        }))
                    }
                }, {
                    key: "pay",
                    value: function (t, e) {
                        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "chapterId";
                        this.deduction(t.price), this.saveRecord(t[n]), "function" == typeof e && e()
                    }
                }, {
                    key: "saveRecord",
                    value: function (t) {
                        var e = ACGN.util.limitStore("virtualCoinRecord") || {};
                        e[this.comicId] = e[this.comicId] || [], e[this.comicId].push(t), ACGN.util.limitStore("virtualCoinRecord", e)
                    }
                }, {
                    key: "deduction",
                    value: function (t) {
                        var n = parseInt(ACGN.util.limitStore("virtualCoin") || 0);
                        n -= t * e.getRatio(), ACGN.util.limitStore("virtualCoin", n), n < 1500 && this.bloodReward()
                    }
                }, {
                    key: "checkChapter",
                    value: function (t) {
                        var e = ACGN.util.limitStore("virtualCoinRecord") || {};
                        return e[this.comicId] && e[this.comicId].includes(t)
                    }
                }, {
                    key: "getRecordList",
                    value: function () {
                        return (ACGN.util.limitStore("virtualCoinRecord") || {})[this.comicId] || []
                    }
                }, {
                    key: "enabled",
                    get: function () {
                        return window.siteConf.active_config && window.siteConf.active_config.boo_virtual_coin
                    }
                }, {
                    key: "virtualCoinNum",
                    get: function () {
                        return this.enabled && ACGN.util.limitStore("virtualCoin") || 0
                    }
                }], [{
                    key: "getRatio",
                    value: function () {
                        return 10
                    }
                }]), e
            }();
            e["default"] = a
        }).call(this, n("xeH2"))
    },
    g3g5: function (t, e) {
        var n = t.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = n)
    },
    h7Nl: function (t, e, n) {
        var r = Date.prototype,
            i = r.toString,
            o = r.getTime;
        new Date(NaN) + "" != "Invalid Date" && n("KroJ")(r, "toString", function () {
            var t = o.call(this);
            return t == t ? i.call(this) : "Invalid Date"
        })
    },
    hswa: function (t, e, n) {
        var r = n("y3w9"),
            i = n("xpql"),
            o = n("apmT"),
            a = Object.defineProperty;
        e.f = n("nh4g") ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return a(t, e, n)
            } catch (u) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    },
    "kH++": function (t, e, n) {
        "use strict";
        (function (t) {
            var e = n("TqRt");
            n("a1Th"), n("h7Nl"), n("Btvt"), n("KKXr"), n("dRSK"), n("vqWx");
            var r = e(n("f+/7"));
            ! function () {
                window.ACGN, undefined;
                window;
                var e = t;
                window.ACGN.model.register("detail-chapter", {
                    desc: "章节列表",
                    resource: "detail-banner-3"
                }, function (t, n) {
                    var i = e(t.el);
                    if (i.find(".item").length) {
                        var o = location.pathname.split("/")[1],
                            a = e("#j_chapter_list");
                        i.find(".swith-bar").on("click", ".item", function () {
                            var t = e(this);
                            i.find(".swith-bar").find(".item").removeClass("active"), t.addClass("active"), t.hasClass("img-text") ? a.removeClass("col-4").addClass("col-5").removeClass("text").addClass("img-text") : a.removeClass("col-5").addClass("col-4").removeClass("img-text").addClass("text")
                        });
                        var u, c, s = i.find(".page-bar");
                        return i.find(".page-start").on("click", function () {
                            var t = e(this);
                            s.find(".btn").removeClass("active"), s.find(".page").removeClass("active"), t.addClass("active");
                            var n = t.attr("end");
                            n = parseInt(n), a.find(".item").each(function (t, r) {
                                var i = e(this),
                                    o = i.attr("data-id");
                                (o = parseInt(o)) < n ? (i.show(), i.removeClass("acgn-hide")) : i.hide()
                            })
                        }), i.find(".j_chapter_page").on("click", function () {
                            var t = e(this);
                            s.find(".btn").removeClass("active"), s.find(".btn-more").addClass("active"), t.addClass("active").siblings(".page").removeClass("active");
                            var n = t.attr("size");
                            n = parseInt(n);
                            var r = t.attr("start");
                            r = parseInt(r), a.find(".item").each(function (t, i) {
                                var o = e(this),
                                    a = o.attr("data-id");
                                (a = parseInt(a)) >= r && a < r + n ? (o.show(), o.removeClass("acgn-hide")) : o.hide()
                            })
                        }), i.find(".page-last").on("click", function () {
                            var t = e(this);
                            s.find(".btn").removeClass("active"), s.find(".page").removeClass("active"), t.addClass("active");
                            var n = t.attr("size");
                            n = parseInt(n);
                            var r = t.attr("end");
                            r = parseInt(r), a.find(".item").each(function (t, i) {
                                var o = e(this),
                                    a = o.attr("data-id");
                                (a = parseInt(a)) > r - n ? (o.show(), o.removeClass("acgn-hide")) : o.hide()
                            })
                        }), window.moduleDebug ? !0 : (u = ACGN.business.comicRecord, c = window.ACGN.util.cookieParse("user") || {}, window.ACGN.business.header.getUserInfo({}, function (t, n) {
                            if (c = n, ACGN.business.isLogin()) {
                                var r = {
                                    comic_id: o,
                                    openid: c.openid,
                                    type: c.type
                                };
                                e.ajax({
                                    url: "/api/getPurChasedChapters",
                                    data: r,
                                    success: function (t) {
                                        if (0 === t.status) {
                                            var e = t.data;
                                            l(e), u.getReadHistory({
                                                comic_id: o
                                            }, function (t, e) {
                                                if (t) i.find(".page-start").trigger("click");
                                                else if (e && (i.find(".page-last").trigger("click"), e.comic_id.toString() === o)) {
                                                    i.find(".page-last").trigger("click");
                                                    var n = i.find("li[data-chapter=" + e.chapter_id + "]");
                                                    n.hasClass("read") ? (n.removeClass("lock").removeClass("unlock").siblings().removeClass("read"), n.find(".j_chapter_badge").attr("class", "j_chapter_badge ift-eye")) : (n.addClass("read").removeClass("lock").removeClass("unlock").siblings().removeClass("read"), n.find(".j_chapter_badge").attr("class", "j_chapter_badge ift-eye"))
                                                }
                                            })
                                        }
                                    }
                                })
                            } else l()
                        }), u.getReadHistory({
                            comic_id: o
                        }, function (t, e) {
                            t ? i.find(".page-start").trigger("click") : e && i.find(".page-last").trigger("click")
                        }), !0)
                    }

                    function l() {
                        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
                            e = new r["default"]({
                                comicId: o
                            });
                        e.enabled && (t = t.concat(e.getRecordList()));
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n],
                                u = i.find("li[data-chapter=" + a + "]");
                            u.hasClass("lock") && (u.removeClass("lock").addClass("unlock"), u.find(".j_chapter_badge").attr("class", "j_chapter_badge ift-unlock"))
                        }
                    }
                })
            }()
        }).call(this, n("xeH2"))
    },
    lwsE: function (t, e) {
        t.exports = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    },
    m0Pp: function (t, e, n) {
        var r = n("2OiF");
        t.exports = function (t, e, n) {
            if (r(t), e === undefined) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    },
    nGyu: function (t, e, n) {
        var r = n("K0xU")("unscopables"),
            i = Array.prototype;
        i[r] == undefined && n("Mukb")(i, r, {}), t.exports = function (t) {
            i[r][t] = !0
        }
    },
    ne8i: function (t, e, n) {
        var r = n("RYi7"),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    },
    nh4g: function (t, e, n) {
        t.exports = !n("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    quPj: function (t, e, n) {
        var r = n("0/R4"),
            i = n("LZWt"),
            o = n("K0xU")("match");
        t.exports = function (t) {
            var e;
            return r(t) && ((e = t[o]) !== undefined ? !!e : "RegExp" == i(t))
        }
    },
    sMXx: function (t, e, n) {
        "use strict";
        var r = n("Ugos");
        n("XKFU")({
            target: "RegExp",
            proto: !0,
            forced: r !== /./.exec
        }, {
            exec: r
        })
    },
    vhPU: function (t, e) {
        t.exports = function (t) {
            if (t == undefined) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    vqWx: function (t, e, n) {},
    w2a5: function (t, e, n) {
        var r = n("aCFj"),
            i = n("ne8i"),
            o = n("d/Gc");
        t.exports = function (t) {
            return function (e, n, a) {
                var u, c = r(e),
                    s = i(c.length),
                    l = o(a, s);
                if (t && n != n) {
                    for (; s > l;)
                        if ((u = c[l++]) != u) return !0
                } else
                    for (; s > l; l++)
                        if ((t || l in c) && c[l] === n) return t || l || 0;
                return !t && -1
            }
        }
    },
    xeH2: function (t, e) {
        t.exports = jQuery
    },
    xpql: function (t, e, n) {
        t.exports = !n("nh4g") && !n("eeVq")(function () {
            return 7 != Object.defineProperty(n("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (t, e, n) {
        var r = n("0/R4");
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    ylqs: function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(t === undefined ? "" : t, ")_", (++n + r).toString(36))
        }
    },
    zRwo: function (t, e, n) {
        var r = n("6FMO");
        t.exports = function (t, e) {
            return new(r(t))(e)
        }
    }
});
! function (n) {
    var e = {};

    function t(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = n, t.c = e, t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: r
        })
    }, t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, t.t = function (n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var i in n) t.d(r, i, function (e) {
                return n[e]
            }.bind(null, i));
        return r
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "/", t(t.s = 8)
}({
    "+lvF": function (n, e, t) {
        n.exports = t("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (n, e) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    "2OiF": function (n, e) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    "69bn": function (n, e, t) {
        var r = t("y3w9"),
            i = t("2OiF"),
            o = t("K0xU")("species");
        n.exports = function (n, e) {
            var t, u = r(n).constructor;
            return u === undefined || (t = r(u)[o]) == undefined ? e : i(t)
        }
    },
    "6FMO": function (n, e, t) {
        var r = t("0/R4"),
            i = t("EWmC"),
            o = t("K0xU")("species");
        n.exports = function (n) {
            var e;
            return i(n) && ("function" != typeof (e = n.constructor) || e !== Array && !i(e.prototype) || (e = undefined), r(e) && null === (e = e[o]) && (e = undefined)), e === undefined ? Array : e
        }
    },
    8: function (n, e, t) {
        n.exports = t("MQ7v")
    },
    A5AN: function (n, e, t) {
        "use strict";
        var r = t("AvRE")(!0);
        n.exports = function (n, e, t) {
            return e + (t ? r(n, e).length : 1)
        }
    },
    AvRE: function (n, e, t) {
        var r = t("RYi7"),
            i = t("vhPU");
        n.exports = function (n) {
            return function (e, t) {
                var o, u, c = String(i(e)),
                    a = r(t),
                    s = c.length;
                return a < 0 || a >= s ? n ? "" : undefined : (o = c.charCodeAt(a)) < 55296 || o > 56319 || a + 1 === s || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? n ? c.charAt(a) : o : n ? c.slice(a, a + 2) : u - 56320 + (o - 55296 << 10) + 65536
            }
        }
    },
    "C/va": function (n, e, t) {
        "use strict";
        var r = t("y3w9");
        n.exports = function () {
            var n = r(this),
                e = "";
            return n.global && (e += "g"), n.ignoreCase && (e += "i"), n.multiline && (e += "m"), n.unicode && (e += "u"), n.sticky && (e += "y"), e
        }
    },
    CkkT: function (n, e, t) {
        var r = t("m0Pp"),
            i = t("Ymqv"),
            o = t("S/j/"),
            u = t("ne8i"),
            c = t("zRwo");
        n.exports = function (n, e) {
            var t = 1 == n,
                a = 2 == n,
                s = 3 == n,
                f = 4 == n,
                l = 6 == n,
                p = 5 == n || l,
                d = e || c;
            return function (e, c, g) {
                for (var v, h, y = o(e), x = i(y), m = r(c, g, 3), b = u(x.length), w = 0, S = t ? d(e, b) : a ? d(e, 0) : undefined; b > w; w++)
                    if ((p || w in x) && (h = m(v = x[w], w, y), n))
                        if (t) S[w] = h;
                        else if (h) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return w;
                    case 2:
                        S.push(v)
                } else if (f) return !1;
                return l ? -1 : s || f ? f : S
            }
        }
    },
    EWmC: function (n, e, t) {
        var r = t("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == r(n)
        }
    },
    "I8a+": function (n, e, t) {
        var r = t("LZWt"),
            i = t("K0xU")("toStringTag"),
            o = "Arguments" == r(function () {
                return arguments
            }());
        n.exports = function (n) {
            var e, t, u;
            return n === undefined ? "Undefined" : null === n ? "Null" : "string" == typeof (t = function (n, e) {
                try {
                    return n[e]
                } catch (t) {}
            }(e = Object(n), i)) ? t : o ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
        }
    },
    "IU+Z": function (n, e, t) {
        "use strict";
        t("sMXx");
        var r = t("KroJ"),
            i = t("Mukb"),
            o = t("eeVq"),
            u = t("vhPU"),
            c = t("K0xU"),
            a = t("Ugos"),
            s = c("species"),
            f = !o(function () {
                var n = /./;
                return n.exec = function () {
                    var n = [];
                    return n.groups = {
                        a: "7"
                    }, n
                }, "7" !== "".replace(n, "$<a>")
            }),
            l = function () {
                var n = /(?:)/,
                    e = n.exec;
                n.exec = function () {
                    return e.apply(this, arguments)
                };
                var t = "ab".split(n);
                return 2 === t.length && "a" === t[0] && "b" === t[1]
            }();
        n.exports = function (n, e, t) {
            var p = c(n),
                d = !o(function () {
                    var e = {};
                    return e[p] = function () {
                        return 7
                    }, 7 != "" [n](e)
                }),
                g = d ? !o(function () {
                    var e = !1,
                        t = /a/;
                    return t.exec = function () {
                        return e = !0, null
                    }, "split" === n && (t.constructor = {}, t.constructor[s] = function () {
                        return t
                    }), t[p](""), !e
                }) : undefined;
            if (!d || !g || "replace" === n && !f || "split" === n && !l) {
                var v = /./ [p],
                    h = t(u, p, "" [n], function (n, e, t, r, i) {
                        return e.exec === a ? d && !i ? {
                            done: !0,
                            value: v.call(e, t, r)
                        } : {
                            done: !0,
                            value: n.call(t, e, r)
                        } : {
                            done: !1
                        }
                    }),
                    y = h[0],
                    x = h[1];
                r(String.prototype, n, y), i(RegExp.prototype, p, 2 == e ? function (n, e) {
                    return x.call(n, this, e)
                } : function (n) {
                    return x.call(n, this)
                })
            }
        }
    },
    Iw71: function (n, e, t) {
        var r = t("0/R4"),
            i = t("dyZX").document,
            o = r(i) && r(i.createElement);
        n.exports = function (n) {
            return o ? i.createElement(n) : {}
        }
    },
    K0xU: function (n, e, t) {
        var r = t("VTer")("wks"),
            i = t("ylqs"),
            o = t("dyZX").Symbol,
            u = "function" == typeof o;
        (n.exports = function (n) {
            return r[n] || (r[n] = u && o[n] || (u ? o : i)("Symbol." + n))
        }).store = r
    },
    KKXr: function (n, e, t) {
        "use strict";
        var r = t("quPj"),
            i = t("y3w9"),
            o = t("69bn"),
            u = t("A5AN"),
            c = t("ne8i"),
            a = t("Xxuz"),
            s = t("Ugos"),
            f = t("eeVq"),
            l = Math.min,
            p = [].push,
            d = !f(function () {
                RegExp(4294967295, "y")
            });
        t("IU+Z")("split", 2, function (n, e, t, f) {
            var g;
            return g = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (n, e) {
                var i = String(this);
                if (n === undefined && 0 === e) return [];
                if (!r(n)) return t.call(i, n, e);
                for (var o, u, c, a = [], f = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (n.sticky ? "y" : ""), l = 0, d = e === undefined ? 4294967295 : e >>> 0, g = new RegExp(n.source, f + "g");
                    (o = s.call(g, i)) && !((u = g.lastIndex) > l && (a.push(i.slice(l, o.index)), o.length > 1 && o.index < i.length && p.apply(a, o.slice(1)), c = o[0].length, l = u, a.length >= d));) g.lastIndex === o.index && g.lastIndex++;
                return l === i.length ? !c && g.test("") || a.push("") : a.push(i.slice(l)), a.length > d ? a.slice(0, d) : a
            } : "0".split(undefined, 0).length ? function (n, e) {
                return n === undefined && 0 === e ? [] : t.call(this, n, e)
            } : t, [function (t, r) {
                var i = n(this),
                    o = t == undefined ? undefined : t[e];
                return o !== undefined ? o.call(t, i, r) : g.call(String(i), t, r)
            }, function (n, e) {
                var r = f(g, n, this, e, g !== t);
                if (r.done) return r.value;
                var s = i(n),
                    p = String(this),
                    v = o(s, RegExp),
                    h = s.unicode,
                    y = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (d ? "y" : "g"),
                    x = new v(d ? s : "^(?:" + s.source + ")", y),
                    m = e === undefined ? 4294967295 : e >>> 0;
                if (0 === m) return [];
                if (0 === p.length) return null === a(x, p) ? [p] : [];
                for (var b = 0, w = 0, S = []; w < p.length;) {
                    x.lastIndex = d ? w : 0;
                    var j, R = a(x, d ? p : p.slice(w));
                    if (null === R || (j = l(c(x.lastIndex + (d ? 0 : w)), p.length)) === b) w = u(p, w, h);
                    else {
                        if (S.push(p.slice(b, w)), S.length === m) return S;
                        for (var I = 1; I <= R.length - 1; I++)
                            if (S.push(R[I]), S.length === m) return S;
                        w = b = j
                    }
                }
                return S.push(p.slice(b)), S
            }]
        })
    },
    KroJ: function (n, e, t) {
        var r = t("dyZX"),
            i = t("Mukb"),
            o = t("aagx"),
            u = t("ylqs")("src"),
            c = t("+lvF"),
            a = ("" + c).split("toString");
        t("g3g5").inspectSource = function (n) {
            return c.call(n)
        }, (n.exports = function (n, e, t, c) {
            var s = "function" == typeof t;
            s && (o(t, "name") || i(t, "name", e)), n[e] !== t && (s && (o(t, u) || i(t, u, n[e] ? "" + n[e] : a.join(String(e)))), n === r ? n[e] = t : c ? n[e] ? n[e] = t : i(n, e, t) : (delete n[e], i(n, e, t)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || c.call(this)
        })
    },
    LQAc: function (n, e) {
        n.exports = !1
    },
    LZWt: function (n, e) {
        var t = {}.toString;
        n.exports = function (n) {
            return t.call(n).slice(8, -1)
        }
    },
    MQ7v: function (n, e, t) {
        "use strict";
        (function (n) {
            t("KKXr"), t("dRSK"), t("aHCO"),
                function () {
                    window.ACGN, undefined;
                    var e = window,
                        t = n;
                    e.Swiper;
                    window.ACGN.model.register("detail-statistic", {
                        desc: "漫画数据,漫画统计",
                        resource: "detail-banner-2"
                    }, function (n, e) {
                        var r = window.ACGN,
                            i = window.siteConf.language,
                            o = window.siteConf.staticRoot;
                        var u = t(n.el),
                            c = t("#j_fans_queue"),
                            a = c.data("comic_id");
                        r.ajax({
                            url: "/api/getFansDynamic",
                            data: {
                                comic_id: a
                            }
                        }, function (n, e) {
                            if (!n) {
                                c.html(function (n) {
                                    for (var e = "", t = 0; t < n.length; t++) {
                                        var u = n[t];
                                        e += '<li class="fan">\n          <a href="/user/'.concat(u.userId, '.html" target="_blank" title="').concat(u.uname, '">\n          <img alt="').concat(u.uname, '" class="head-img" src="').concat(o, 'images/comm/space.gif" data-src="').concat(r.util.getHeadCover(siteConf, u.userId), '">\n          <span class="username" title="').concat(u.uname, '">').concat(u.uname, "</span></a>");
                                        var c = parseInt(u.supportType);
                                        1 === c ? e += '<span class="action">收藏</span><span class="target">此漫画</span>' : 2 === c ? e += '<span class="action">分享</span><span class="target">此漫画</span>' : 3 === c ? e += '<span class="action">给作者留言</span>' : 4 === c ? e += '<span class="action">赠送礼物</span><span class="target">*'.concat(u.count, "</span>") : 5 === c ? e += '<span class="action">赠送'.concat(i.gold, '</span><span class="target">*').concat(u.count, "</span>") : 6 === c ? e += '<span class="action">投了</span><span class="target">'.concat(i.ticket, "*").concat(u.count, "</span>") : 7 === c ? e += '<span class="action">推荐了</span><span class="target">此漫画</span>' : 8 === c && (e += '<span class="action">评分了</span><span class="target">此漫画</span>'), e += "</li>"
                                    }
                                    return e
                                }(e));
                                var a = u.find(".fans"),
                                    s = a.width(),
                                    f = a.find("li"),
                                    l = 0;
                                t.each(f, function (n, e) {
                                    l += t(e).width()
                                }), l = parseInt(l);
                                var p = !1,
                                    d = 1;
                                a.on("mouseover", function () {
                                    clearInterval(p)
                                }), a.on("mouseout", function () {
                                    g()
                                }), g(), window.moduleDebug || (u.find(".event-appreate").on("click", function () {
                                    var n = location.pathname.split("/")[1],
                                        e = r.userInfo,
                                        t = !(!e || !e.openid) && e.openid;
                                    if (r.business.isLogin()) {
                                        var i = e.type;
                                        r.business.SendThings.sendAppreciate({
                                            openid: t,
                                            type: i,
                                            comicId: n
                                        })
                                    } else r.layerLogin()
                                }), u.find(".event-ticket").on("click", function () {
                                    var n = location.pathname.split("/")[1],
                                        e = r.userInfo,
                                        t = !(!e || !e.openid) && e.openid;
                                    if (r.business.isLogin()) {
                                        var i = e.type;
                                        r.business.SendThings.sendMonthTicket({
                                            openid: t,
                                            type: i,
                                            comicId: n
                                        })
                                    } else r.layerLogin()
                                }), u.find(".event-feather").on("click", function () {
                                    var n = location.pathname.split("/")[1],
                                        e = r.userInfo,
                                        t = !(!e || !e.openid) && e.openid;
                                    if (r.business.isLogin()) {
                                        var i = e.type;
                                        r.business.SendThings.sendFeather({
                                            openid: t,
                                            type: i,
                                            comicId: n
                                        })
                                    } else r.layerLogin()
                                }), u.find(".event-mark").on("click", function () {
                                    var n = location.pathname.split("/")[1],
                                        e = r.userInfo,
                                        t = !(!e || !e.openid) && e.openid;
                                    if (r.business.isLogin()) {
                                        var i = e.type;
                                        r.business.SendThings.sendMark({
                                            openid: t,
                                            type: i,
                                            comicId: n
                                        })
                                    } else r.layerLogin()
                                }), u.find(".event-share").on("click", function () {
                                    r.business.SendThings.openShareDialog()
                                }))
                            }

                            function g() {
                                p = setInterval(function () {
                                    var n = a.scrollLeft();
                                    n >= l - s ? a.scrollLeft(0) : a.scrollLeft(n + d)
                                }, 15)
                            }
                        })
                    })
                }()
        }).call(this, t("xeH2"))
    },
    Mukb: function (n, e, t) {
        var r = t("hswa"),
            i = t("RjD/");
        n.exports = t("nh4g") ? function (n, e, t) {
            return r.f(n, e, i(1, t))
        } : function (n, e, t) {
            return n[e] = t, n
        }
    },
    RYi7: function (n, e) {
        var t = Math.ceil,
            r = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? r : t)(n)
        }
    },
    "RjD/": function (n, e) {
        n.exports = function (n, e) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: e
            }
        }
    },
    "S/j/": function (n, e, t) {
        var r = t("vhPU");
        n.exports = function (n) {
            return Object(r(n))
        }
    },
    Ugos: function (n, e, t) {
        "use strict";
        var r, i, o = t("C/va"),
            u = RegExp.prototype.exec,
            c = String.prototype.replace,
            a = u,
            s = (r = /a/, i = /b*/g, u.call(r, "a"), u.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
            f = /()??/.exec("")[1] !== undefined;
        (s || f) && (a = function (n) {
            var e, t, r, i, a = this;
            return f && (t = new RegExp("^" + a.source + "$(?!\\s)", o.call(a))), s && (e = a.lastIndex), r = u.call(a, n), s && r && (a.lastIndex = a.global ? r.index + r[0].length : e), f && r && r.length > 1 && c.call(r[0], t, function () {
                for (i = 1; i < arguments.length - 2; i++) arguments[i] === undefined && (r[i] = undefined)
            }), r
        }), n.exports = a
    },
    VTer: function (n, e, t) {
        var r = t("g3g5"),
            i = t("dyZX"),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (n.exports = function (n, e) {
            return o[n] || (o[n] = e !== undefined ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: t("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, e, t) {
        var r = t("dyZX"),
            i = t("g3g5"),
            o = t("Mukb"),
            u = t("KroJ"),
            c = t("m0Pp"),
            a = function (n, e, t) {
                var s, f, l, p, d = n & a.F,
                    g = n & a.G,
                    v = n & a.S,
                    h = n & a.P,
                    y = n & a.B,
                    x = g ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    m = g ? i : i[e] || (i[e] = {}),
                    b = m.prototype || (m.prototype = {});
                for (s in g && (t = e), t) l = ((f = !d && x && x[s] !== undefined) ? x : t)[s], p = y && f ? c(l, r) : h && "function" == typeof l ? c(Function.call, l) : l, x && u(x, s, l, n & a.U), m[s] != l && o(m, s, p), h && b[s] != l && (b[s] = l)
            };
        r.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, n.exports = a
    },
    Xxuz: function (n, e, t) {
        "use strict";
        var r = t("I8a+"),
            i = RegExp.prototype.exec;
        n.exports = function (n, e) {
            var t = n.exec;
            if ("function" == typeof t) {
                var o = t.call(n, e);
                if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== r(n)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return i.call(n, e)
        }
    },
    Ymqv: function (n, e, t) {
        var r = t("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == r(n) ? n.split("") : Object(n)
        }
    },
    aHCO: function (n, e, t) {},
    aagx: function (n, e) {
        var t = {}.hasOwnProperty;
        n.exports = function (n, e) {
            return t.call(n, e)
        }
    },
    apmT: function (n, e, t) {
        var r = t("0/R4");
        n.exports = function (n, e) {
            if (!r(n)) return n;
            var t, i;
            if (e && "function" == typeof (t = n.toString) && !r(i = t.call(n))) return i;
            if ("function" == typeof (t = n.valueOf) && !r(i = t.call(n))) return i;
            if (!e && "function" == typeof (t = n.toString) && !r(i = t.call(n))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    dRSK: function (n, e, t) {
        "use strict";
        var r = t("XKFU"),
            i = t("CkkT")(5),
            o = !0;
        "find" in [] && Array(1).find(function () {
            o = !1
        }), r(r.P + r.F * o, "Array", {
            find: function (n) {
                return i(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), t("nGyu")("find")
    },
    dyZX: function (n, e) {
        var t = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    },
    eeVq: function (n, e) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (e) {
                return !0
            }
        }
    },
    g3g5: function (n, e) {
        var t = n.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = t)
    },
    hswa: function (n, e, t) {
        var r = t("y3w9"),
            i = t("xpql"),
            o = t("apmT"),
            u = Object.defineProperty;
        e.f = t("nh4g") ? Object.defineProperty : function (n, e, t) {
            if (r(n), e = o(e, !0), r(t), i) try {
                return u(n, e, t)
            } catch (c) {}
            if ("get" in t || "set" in t) throw TypeError("Accessors not supported!");
            return "value" in t && (n[e] = t.value), n
        }
    },
    m0Pp: function (n, e, t) {
        var r = t("2OiF");
        n.exports = function (n, e, t) {
            if (r(n), e === undefined) return n;
            switch (t) {
                case 1:
                    return function (t) {
                        return n.call(e, t)
                    };
                case 2:
                    return function (t, r) {
                        return n.call(e, t, r)
                    };
                case 3:
                    return function (t, r, i) {
                        return n.call(e, t, r, i)
                    }
            }
            return function () {
                return n.apply(e, arguments)
            }
        }
    },
    nGyu: function (n, e, t) {
        var r = t("K0xU")("unscopables"),
            i = Array.prototype;
        i[r] == undefined && t("Mukb")(i, r, {}), n.exports = function (n) {
            i[r][n] = !0
        }
    },
    ne8i: function (n, e, t) {
        var r = t("RYi7"),
            i = Math.min;
        n.exports = function (n) {
            return n > 0 ? i(r(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, e, t) {
        n.exports = !t("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    quPj: function (n, e, t) {
        var r = t("0/R4"),
            i = t("LZWt"),
            o = t("K0xU")("match");
        n.exports = function (n) {
            var e;
            return r(n) && ((e = n[o]) !== undefined ? !!e : "RegExp" == i(n))
        }
    },
    sMXx: function (n, e, t) {
        "use strict";
        var r = t("Ugos");
        t("XKFU")({
            target: "RegExp",
            proto: !0,
            forced: r !== /./.exec
        }, {
            exec: r
        })
    },
    vhPU: function (n, e) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    xeH2: function (n, e) {
        n.exports = jQuery
    },
    xpql: function (n, e, t) {
        n.exports = !t("nh4g") && !t("eeVq")(function () {
            return 7 != Object.defineProperty(t("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, e, t) {
        var r = t("0/R4");
        n.exports = function (n) {
            if (!r(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, e) {
        var t = 0,
            r = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++t + r).toString(36))
        }
    },
    zRwo: function (n, e, t) {
        var r = t("6FMO");
        n.exports = function (n, e) {
            return new(r(n))(e)
        }
    }
});
! function (n) {
    var t = {};

    function r(e) {
        if (t[e]) return t[e].exports;
        var o = t[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = n, r.c = t, r.d = function (n, t, e) {
        r.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: e
        })
    }, r.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, r.t = function (n, t) {
        if (1 & t && (n = r(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var o in n) r.d(e, o, function (t) {
                return n[t]
            }.bind(null, o));
        return e
    }, r.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return r.d(t, "a", t), t
    }, r.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, r.p = "/", r(r.s = 16)
}({
    "+lvF": function (n, t, r) {
        n.exports = r("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (n, t) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    16: function (n, t, r) {
        n.exports = r("i+IP")
    },
    "2OiF": function (n, t) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    "4R4u": function (n, t) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "6FMO": function (n, t, r) {
        var e = r("0/R4"),
            o = r("EWmC"),
            i = r("K0xU")("species");
        n.exports = function (n) {
            var t;
            return o(n) && ("function" != typeof (t = n.constructor) || t !== Array && !o(t.prototype) || (t = undefined), e(t) && null === (t = t[i]) && (t = undefined)), t === undefined ? Array : t
        }
    },
    "91GP": function (n, t, r) {
        var e = r("XKFU");
        e(e.S + e.F, "Object", {
            assign: r("czNK")
        })
    },
    CkkT: function (n, t, r) {
        var e = r("m0Pp"),
            o = r("Ymqv"),
            i = r("S/j/"),
            u = r("ne8i"),
            c = r("zRwo");
        n.exports = function (n, t) {
            var r = 1 == n,
                f = 2 == n,
                a = 3 == n,
                s = 4 == n,
                p = 6 == n,
                l = 5 == n || p,
                d = t || c;
            return function (t, c, y) {
                for (var v, h, g = i(t), x = o(g), b = e(c, y, 3), w = u(x.length), m = 0, j = r ? d(t, w) : f ? d(t, 0) : undefined; w > m; m++)
                    if ((l || m in x) && (h = b(v = x[m], m, g), n))
                        if (r) j[m] = h;
                        else if (h) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return m;
                    case 2:
                        j.push(v)
                } else if (s) return !1;
                return p ? -1 : a || s ? s : j
            }
        }
    },
    DVgA: function (n, t, r) {
        var e = r("zhAb"),
            o = r("4R4u");
        n.exports = Object.keys || function (n) {
            return e(n, o)
        }
    },
    EWmC: function (n, t, r) {
        var e = r("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == e(n)
        }
    },
    Iw71: function (n, t, r) {
        var e = r("0/R4"),
            o = r("dyZX").document,
            i = e(o) && e(o.createElement);
        n.exports = function (n) {
            return i ? o.createElement(n) : {}
        }
    },
    JFlB: function (n, t, r) {},
    JiEa: function (n, t) {
        t.f = Object.getOwnPropertySymbols
    },
    K0xU: function (n, t, r) {
        var e = r("VTer")("wks"),
            o = r("ylqs"),
            i = r("dyZX").Symbol,
            u = "function" == typeof i;
        (n.exports = function (n) {
            return e[n] || (e[n] = u && i[n] || (u ? i : o)("Symbol." + n))
        }).store = e
    },
    KroJ: function (n, t, r) {
        var e = r("dyZX"),
            o = r("Mukb"),
            i = r("aagx"),
            u = r("ylqs")("src"),
            c = r("+lvF"),
            f = ("" + c).split("toString");
        r("g3g5").inspectSource = function (n) {
            return c.call(n)
        }, (n.exports = function (n, t, r, c) {
            var a = "function" == typeof r;
            a && (i(r, "name") || o(r, "name", t)), n[t] !== r && (a && (i(r, u) || o(r, u, n[t] ? "" + n[t] : f.join(String(t)))), n === e ? n[t] = r : c ? n[t] ? n[t] = r : o(n, t, r) : (delete n[t], o(n, t, r)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || c.call(this)
        })
    },
    LQAc: function (n, t) {
        n.exports = !1
    },
    LZWt: function (n, t) {
        var r = {}.toString;
        n.exports = function (n) {
            return r.call(n).slice(8, -1)
        }
    },
    Mukb: function (n, t, r) {
        var e = r("hswa"),
            o = r("RjD/");
        n.exports = r("nh4g") ? function (n, t, r) {
            return e.f(n, t, o(1, r))
        } : function (n, t, r) {
            return n[t] = r, n
        }
    },
    RYi7: function (n, t) {
        var r = Math.ceil,
            e = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? e : r)(n)
        }
    },
    "RjD/": function (n, t) {
        n.exports = function (n, t) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: t
            }
        }
    },
    "S/j/": function (n, t, r) {
        var e = r("vhPU");
        n.exports = function (n) {
            return Object(e(n))
        }
    },
    UqcF: function (n, t) {
        t.f = {}.propertyIsEnumerable
    },
    VTer: function (n, t, r) {
        var e = r("g3g5"),
            o = r("dyZX"),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (n.exports = function (n, t) {
            return i[n] || (i[n] = t !== undefined ? t : {})
        })("versions", []).push({
            version: e.version,
            mode: r("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, t, r) {
        var e = r("dyZX"),
            o = r("g3g5"),
            i = r("Mukb"),
            u = r("KroJ"),
            c = r("m0Pp"),
            f = function (n, t, r) {
                var a, s, p, l, d = n & f.F,
                    y = n & f.G,
                    v = n & f.S,
                    h = n & f.P,
                    g = n & f.B,
                    x = y ? e : v ? e[t] || (e[t] = {}) : (e[t] || {}).prototype,
                    b = y ? o : o[t] || (o[t] = {}),
                    w = b.prototype || (b.prototype = {});
                for (a in y && (r = t), r) p = ((s = !d && x && x[a] !== undefined) ? x : r)[a], l = g && s ? c(p, e) : h && "function" == typeof p ? c(Function.call, p) : p, x && u(x, a, p, n & f.U), b[a] != p && i(b, a, l), h && w[a] != p && (w[a] = p)
            };
        e.core = o, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, n.exports = f
    },
    YTvA: function (n, t, r) {
        var e = r("VTer")("keys"),
            o = r("ylqs");
        n.exports = function (n) {
            return e[n] || (e[n] = o(n))
        }
    },
    Ymqv: function (n, t, r) {
        var e = r("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == e(n) ? n.split("") : Object(n)
        }
    },
    aCFj: function (n, t, r) {
        var e = r("Ymqv"),
            o = r("vhPU");
        n.exports = function (n) {
            return e(o(n))
        }
    },
    aagx: function (n, t) {
        var r = {}.hasOwnProperty;
        n.exports = function (n, t) {
            return r.call(n, t)
        }
    },
    apmT: function (n, t, r) {
        var e = r("0/R4");
        n.exports = function (n, t) {
            if (!e(n)) return n;
            var r, o;
            if (t && "function" == typeof (r = n.toString) && !e(o = r.call(n))) return o;
            if ("function" == typeof (r = n.valueOf) && !e(o = r.call(n))) return o;
            if (!t && "function" == typeof (r = n.toString) && !e(o = r.call(n))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    czNK: function (n, t, r) {
        "use strict";
        var e = r("nh4g"),
            o = r("DVgA"),
            i = r("JiEa"),
            u = r("UqcF"),
            c = r("S/j/"),
            f = r("Ymqv"),
            a = Object.assign;
        n.exports = !a || r("eeVq")(function () {
            var n = {},
                t = {},
                r = Symbol(),
                e = "abcdefghijklmnopqrst";
            return n[r] = 7, e.split("").forEach(function (n) {
                t[n] = n
            }), 7 != a({}, n)[r] || Object.keys(a({}, t)).join("") != e
        }) ? function (n, t) {
            for (var r = c(n), a = arguments.length, s = 1, p = i.f, l = u.f; a > s;)
                for (var d, y = f(arguments[s++]), v = p ? o(y).concat(p(y)) : o(y), h = v.length, g = 0; h > g;) d = v[g++], e && !l.call(y, d) || (r[d] = y[d]);
            return r
        } : a
    },
    "d/Gc": function (n, t, r) {
        var e = r("RYi7"),
            o = Math.max,
            i = Math.min;
        n.exports = function (n, t) {
            return (n = e(n)) < 0 ? o(n + t, 0) : i(n, t)
        }
    },
    dRSK: function (n, t, r) {
        "use strict";
        var e = r("XKFU"),
            o = r("CkkT")(5),
            i = !0;
        "find" in [] && Array(1).find(function () {
            i = !1
        }), e(e.P + e.F * i, "Array", {
            find: function (n) {
                return o(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), r("nGyu")("find")
    },
    dyZX: function (n, t) {
        var r = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    },
    eeVq: function (n, t) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (t) {
                return !0
            }
        }
    },
    g3g5: function (n, t) {
        var r = n.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = r)
    },
    hswa: function (n, t, r) {
        var e = r("y3w9"),
            o = r("xpql"),
            i = r("apmT"),
            u = Object.defineProperty;
        t.f = r("nh4g") ? Object.defineProperty : function (n, t, r) {
            if (e(n), t = i(t, !0), e(r), o) try {
                return u(n, t, r)
            } catch (c) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (n[t] = r.value), n
        }
    },
    "i+IP": function (n, t, r) {
        "use strict";
        (function (n) {
            r("91GP"), r("dRSK"), r("JFlB"),
                function () {
                    window.ACGN, undefined;
                    var t = window,
                        r = n,
                        e = t.Swiper;
                    window.ACGN.model.register("detail-recommend", {
                        desc: "一行6个带波浪遮罩的漫画单元格",
                        resource: "swiper-15",
                        tags: []
                    }, function (n, t) {
                        var o = r(n.el),
                            i = n.cls,
                            u = null;
                        return o.find(".swiper-area").show(), window.swp = u = new e("." + i + " .swiper-container", {
                            centeredSlides: !0,
                            calculateHeight: !0,
                            autoplay: !1,
                            loop: !0,
                            speed: 0
                        }), o.find(".change").on("click", function () {
                            u.swipeNext()
                        }), Object.assign(n, {
                            swiper: u
                        }), !0
                    })
                }()
        }).call(this, r("xeH2"))
    },
    m0Pp: function (n, t, r) {
        var e = r("2OiF");
        n.exports = function (n, t, r) {
            if (e(n), t === undefined) return n;
            switch (r) {
                case 1:
                    return function (r) {
                        return n.call(t, r)
                    };
                case 2:
                    return function (r, e) {
                        return n.call(t, r, e)
                    };
                case 3:
                    return function (r, e, o) {
                        return n.call(t, r, e, o)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }
    },
    nGyu: function (n, t, r) {
        var e = r("K0xU")("unscopables"),
            o = Array.prototype;
        o[e] == undefined && r("Mukb")(o, e, {}), n.exports = function (n) {
            o[e][n] = !0
        }
    },
    ne8i: function (n, t, r) {
        var e = r("RYi7"),
            o = Math.min;
        n.exports = function (n) {
            return n > 0 ? o(e(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, t, r) {
        n.exports = !r("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    vhPU: function (n, t) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    w2a5: function (n, t, r) {
        var e = r("aCFj"),
            o = r("ne8i"),
            i = r("d/Gc");
        n.exports = function (n) {
            return function (t, r, u) {
                var c, f = e(t),
                    a = o(f.length),
                    s = i(u, a);
                if (n && r != r) {
                    for (; a > s;)
                        if ((c = f[s++]) != c) return !0
                } else
                    for (; a > s; s++)
                        if ((n || s in f) && f[s] === r) return n || s || 0;
                return !n && -1
            }
        }
    },
    xeH2: function (n, t) {
        n.exports = jQuery
    },
    xpql: function (n, t, r) {
        n.exports = !r("nh4g") && !r("eeVq")(function () {
            return 7 != Object.defineProperty(r("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, t, r) {
        var e = r("0/R4");
        n.exports = function (n) {
            if (!e(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, t) {
        var r = 0,
            e = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++r + e).toString(36))
        }
    },
    zRwo: function (n, t, r) {
        var e = r("6FMO");
        n.exports = function (n, t) {
            return new(e(n))(t)
        }
    },
    zhAb: function (n, t, r) {
        var e = r("aagx"),
            o = r("aCFj"),
            i = r("w2a5")(!1),
            u = r("YTvA")("IE_PROTO");
        n.exports = function (n, t) {
            var r, c = o(n),
                f = 0,
                a = [];
            for (r in c) r != u && e(c, r) && a.push(r);
            for (; t.length > f;) e(c, r = t[f++]) && (~i(a, r) || a.push(r));
            return a
        }
    }
});
! function (n) {
    var t = {};

    function r(e) {
        if (t[e]) return t[e].exports;
        var o = t[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = n, r.c = t, r.d = function (n, t, e) {
        r.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: e
        })
    }, r.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, r.t = function (n, t) {
        if (1 & t && (n = r(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var o in n) r.d(e, o, function (t) {
                return n[t]
            }.bind(null, o));
        return e
    }, r.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return r.d(t, "a", t), t
    }, r.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, r.p = "/", r(r.s = 6)
}({
    "+lvF": function (n, t, r) {
        n.exports = r("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (n, t) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    "2OiF": function (n, t) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    "4R4u": function (n, t) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    6: function (n, t, r) {
        n.exports = r("Z1Ur")
    },
    "6FMO": function (n, t, r) {
        var e = r("0/R4"),
            o = r("EWmC"),
            i = r("K0xU")("species");
        n.exports = function (n) {
            var t;
            return o(n) && ("function" != typeof (t = n.constructor) || t !== Array && !o(t.prototype) || (t = undefined), e(t) && null === (t = t[i]) && (t = undefined)), t === undefined ? Array : t
        }
    },
    "91GP": function (n, t, r) {
        var e = r("XKFU");
        e(e.S + e.F, "Object", {
            assign: r("czNK")
        })
    },
    CkkT: function (n, t, r) {
        var e = r("m0Pp"),
            o = r("Ymqv"),
            i = r("S/j/"),
            u = r("ne8i"),
            c = r("zRwo");
        n.exports = function (n, t) {
            var r = 1 == n,
                f = 2 == n,
                a = 3 == n,
                s = 4 == n,
                p = 6 == n,
                l = 5 == n || p,
                d = t || c;
            return function (t, c, y) {
                for (var v, h, g = i(t), x = o(g), b = e(c, y, 3), m = u(x.length), w = 0, j = r ? d(t, m) : f ? d(t, 0) : undefined; m > w; w++)
                    if ((l || w in x) && (h = b(v = x[w], w, g), n))
                        if (r) j[w] = h;
                        else if (h) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return w;
                    case 2:
                        j.push(v)
                } else if (s) return !1;
                return p ? -1 : a || s ? s : j
            }
        }
    },
    DVgA: function (n, t, r) {
        var e = r("zhAb"),
            o = r("4R4u");
        n.exports = Object.keys || function (n) {
            return e(n, o)
        }
    },
    EWmC: function (n, t, r) {
        var e = r("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == e(n)
        }
    },
    Iw71: function (n, t, r) {
        var e = r("0/R4"),
            o = r("dyZX").document,
            i = e(o) && e(o.createElement);
        n.exports = function (n) {
            return i ? o.createElement(n) : {}
        }
    },
    JiEa: function (n, t) {
        t.f = Object.getOwnPropertySymbols
    },
    K0xU: function (n, t, r) {
        var e = r("VTer")("wks"),
            o = r("ylqs"),
            i = r("dyZX").Symbol,
            u = "function" == typeof i;
        (n.exports = function (n) {
            return e[n] || (e[n] = u && i[n] || (u ? i : o)("Symbol." + n))
        }).store = e
    },
    KroJ: function (n, t, r) {
        var e = r("dyZX"),
            o = r("Mukb"),
            i = r("aagx"),
            u = r("ylqs")("src"),
            c = r("+lvF"),
            f = ("" + c).split("toString");
        r("g3g5").inspectSource = function (n) {
            return c.call(n)
        }, (n.exports = function (n, t, r, c) {
            var a = "function" == typeof r;
            a && (i(r, "name") || o(r, "name", t)), n[t] !== r && (a && (i(r, u) || o(r, u, n[t] ? "" + n[t] : f.join(String(t)))), n === e ? n[t] = r : c ? n[t] ? n[t] = r : o(n, t, r) : (delete n[t], o(n, t, r)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || c.call(this)
        })
    },
    LQAc: function (n, t) {
        n.exports = !1
    },
    LZWt: function (n, t) {
        var r = {}.toString;
        n.exports = function (n) {
            return r.call(n).slice(8, -1)
        }
    },
    Mukb: function (n, t, r) {
        var e = r("hswa"),
            o = r("RjD/");
        n.exports = r("nh4g") ? function (n, t, r) {
            return e.f(n, t, o(1, r))
        } : function (n, t, r) {
            return n[t] = r, n
        }
    },
    RYi7: function (n, t) {
        var r = Math.ceil,
            e = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? e : r)(n)
        }
    },
    "RjD/": function (n, t) {
        n.exports = function (n, t) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: t
            }
        }
    },
    "S/j/": function (n, t, r) {
        var e = r("vhPU");
        n.exports = function (n) {
            return Object(e(n))
        }
    },
    UqcF: function (n, t) {
        t.f = {}.propertyIsEnumerable
    },
    VTer: function (n, t, r) {
        var e = r("g3g5"),
            o = r("dyZX"),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (n.exports = function (n, t) {
            return i[n] || (i[n] = t !== undefined ? t : {})
        })("versions", []).push({
            version: e.version,
            mode: r("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, t, r) {
        var e = r("dyZX"),
            o = r("g3g5"),
            i = r("Mukb"),
            u = r("KroJ"),
            c = r("m0Pp"),
            f = function (n, t, r) {
                var a, s, p, l, d = n & f.F,
                    y = n & f.G,
                    v = n & f.S,
                    h = n & f.P,
                    g = n & f.B,
                    x = y ? e : v ? e[t] || (e[t] = {}) : (e[t] || {}).prototype,
                    b = y ? o : o[t] || (o[t] = {}),
                    m = b.prototype || (b.prototype = {});
                for (a in y && (r = t), r) p = ((s = !d && x && x[a] !== undefined) ? x : r)[a], l = g && s ? c(p, e) : h && "function" == typeof p ? c(Function.call, p) : p, x && u(x, a, p, n & f.U), b[a] != p && i(b, a, l), h && m[a] != p && (m[a] = p)
            };
        e.core = o, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, n.exports = f
    },
    YTvA: function (n, t, r) {
        var e = r("VTer")("keys"),
            o = r("ylqs");
        n.exports = function (n) {
            return e[n] || (e[n] = o(n))
        }
    },
    Ymqv: function (n, t, r) {
        var e = r("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == e(n) ? n.split("") : Object(n)
        }
    },
    Z1Ur: function (n, t, r) {
        "use strict";
        (function (n) {
            r("91GP"), r("dRSK"), r("ueeJ"),
                function () {
                    window.ACGN, undefined;
                    var t = window,
                        r = n,
                        e = t.Swiper;
                    window.ACGN.model.register("detail-recommend-2", {
                        desc: "一行6个带波浪遮罩的漫画单元格",
                        resource: "swiper-15",
                        tags: []
                    }, function (n, t) {
                        var o = r(n.el),
                            i = n.cls,
                            u = null;
                        return o.find(".swiper-area").show(), u = new e("." + i + " .swiper-container", {
                            centeredSlides: !0,
                            calculateHeight: !0,
                            autoplay: !1,
                            loop: !0,
                            speed: 0
                        }), o.find(".change").on("click", function () {
                            u.swipeNext()
                        }), Object.assign(n, {
                            swiper: u
                        }), !0
                    })
                }()
        }).call(this, r("xeH2"))
    },
    aCFj: function (n, t, r) {
        var e = r("Ymqv"),
            o = r("vhPU");
        n.exports = function (n) {
            return e(o(n))
        }
    },
    aagx: function (n, t) {
        var r = {}.hasOwnProperty;
        n.exports = function (n, t) {
            return r.call(n, t)
        }
    },
    apmT: function (n, t, r) {
        var e = r("0/R4");
        n.exports = function (n, t) {
            if (!e(n)) return n;
            var r, o;
            if (t && "function" == typeof (r = n.toString) && !e(o = r.call(n))) return o;
            if ("function" == typeof (r = n.valueOf) && !e(o = r.call(n))) return o;
            if (!t && "function" == typeof (r = n.toString) && !e(o = r.call(n))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    czNK: function (n, t, r) {
        "use strict";
        var e = r("nh4g"),
            o = r("DVgA"),
            i = r("JiEa"),
            u = r("UqcF"),
            c = r("S/j/"),
            f = r("Ymqv"),
            a = Object.assign;
        n.exports = !a || r("eeVq")(function () {
            var n = {},
                t = {},
                r = Symbol(),
                e = "abcdefghijklmnopqrst";
            return n[r] = 7, e.split("").forEach(function (n) {
                t[n] = n
            }), 7 != a({}, n)[r] || Object.keys(a({}, t)).join("") != e
        }) ? function (n, t) {
            for (var r = c(n), a = arguments.length, s = 1, p = i.f, l = u.f; a > s;)
                for (var d, y = f(arguments[s++]), v = p ? o(y).concat(p(y)) : o(y), h = v.length, g = 0; h > g;) d = v[g++], e && !l.call(y, d) || (r[d] = y[d]);
            return r
        } : a
    },
    "d/Gc": function (n, t, r) {
        var e = r("RYi7"),
            o = Math.max,
            i = Math.min;
        n.exports = function (n, t) {
            return (n = e(n)) < 0 ? o(n + t, 0) : i(n, t)
        }
    },
    dRSK: function (n, t, r) {
        "use strict";
        var e = r("XKFU"),
            o = r("CkkT")(5),
            i = !0;
        "find" in [] && Array(1).find(function () {
            i = !1
        }), e(e.P + e.F * i, "Array", {
            find: function (n) {
                return o(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), r("nGyu")("find")
    },
    dyZX: function (n, t) {
        var r = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    },
    eeVq: function (n, t) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (t) {
                return !0
            }
        }
    },
    g3g5: function (n, t) {
        var r = n.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = r)
    },
    hswa: function (n, t, r) {
        var e = r("y3w9"),
            o = r("xpql"),
            i = r("apmT"),
            u = Object.defineProperty;
        t.f = r("nh4g") ? Object.defineProperty : function (n, t, r) {
            if (e(n), t = i(t, !0), e(r), o) try {
                return u(n, t, r)
            } catch (c) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (n[t] = r.value), n
        }
    },
    m0Pp: function (n, t, r) {
        var e = r("2OiF");
        n.exports = function (n, t, r) {
            if (e(n), t === undefined) return n;
            switch (r) {
                case 1:
                    return function (r) {
                        return n.call(t, r)
                    };
                case 2:
                    return function (r, e) {
                        return n.call(t, r, e)
                    };
                case 3:
                    return function (r, e, o) {
                        return n.call(t, r, e, o)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }
    },
    nGyu: function (n, t, r) {
        var e = r("K0xU")("unscopables"),
            o = Array.prototype;
        o[e] == undefined && r("Mukb")(o, e, {}), n.exports = function (n) {
            o[e][n] = !0
        }
    },
    ne8i: function (n, t, r) {
        var e = r("RYi7"),
            o = Math.min;
        n.exports = function (n) {
            return n > 0 ? o(e(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, t, r) {
        n.exports = !r("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    ueeJ: function (n, t, r) {},
    vhPU: function (n, t) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    w2a5: function (n, t, r) {
        var e = r("aCFj"),
            o = r("ne8i"),
            i = r("d/Gc");
        n.exports = function (n) {
            return function (t, r, u) {
                var c, f = e(t),
                    a = o(f.length),
                    s = i(u, a);
                if (n && r != r) {
                    for (; a > s;)
                        if ((c = f[s++]) != c) return !0
                } else
                    for (; a > s; s++)
                        if ((n || s in f) && f[s] === r) return n || s || 0;
                return !n && -1
            }
        }
    },
    xeH2: function (n, t) {
        n.exports = jQuery
    },
    xpql: function (n, t, r) {
        n.exports = !r("nh4g") && !r("eeVq")(function () {
            return 7 != Object.defineProperty(r("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, t, r) {
        var e = r("0/R4");
        n.exports = function (n) {
            if (!e(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, t) {
        var r = 0,
            e = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++r + e).toString(36))
        }
    },
    zRwo: function (n, t, r) {
        var e = r("6FMO");
        n.exports = function (n, t) {
            return new(e(n))(t)
        }
    },
    zhAb: function (n, t, r) {
        var e = r("aagx"),
            o = r("aCFj"),
            i = r("w2a5")(!1),
            u = r("YTvA")("IE_PROTO");
        n.exports = function (n, t) {
            var r, c = o(n),
                f = 0,
                a = [];
            for (r in c) r != u && e(c, r) && a.push(r);
            for (; t.length > f;) e(c, r = t[f++]) && (~i(a, r) || a.push(r));
            return a
        }
    }
});
! function (n) {
    var t = {};

    function r(e) {
        if (t[e]) return t[e].exports;
        var o = t[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = n, r.c = t, r.d = function (n, t, e) {
        r.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: e
        })
    }, r.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, r.t = function (n, t) {
        if (1 & t && (n = r(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var o in n) r.d(e, o, function (t) {
                return n[t]
            }.bind(null, o));
        return e
    }, r.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return r.d(t, "a", t), t
    }, r.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, r.p = "/", r(r.s = 10)
}({
    "+lvF": function (n, t, r) {
        n.exports = r("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (n, t) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    10: function (n, t, r) {
        n.exports = r("iqpo")
    },
    "2OiF": function (n, t) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    "4R4u": function (n, t) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "6FMO": function (n, t, r) {
        var e = r("0/R4"),
            o = r("EWmC"),
            i = r("K0xU")("species");
        n.exports = function (n) {
            var t;
            return o(n) && ("function" != typeof (t = n.constructor) || t !== Array && !o(t.prototype) || (t = undefined), e(t) && null === (t = t[i]) && (t = undefined)), t === undefined ? Array : t
        }
    },
    "91GP": function (n, t, r) {
        var e = r("XKFU");
        e(e.S + e.F, "Object", {
            assign: r("czNK")
        })
    },
    CkkT: function (n, t, r) {
        var e = r("m0Pp"),
            o = r("Ymqv"),
            i = r("S/j/"),
            u = r("ne8i"),
            c = r("zRwo");
        n.exports = function (n, t) {
            var r = 1 == n,
                f = 2 == n,
                a = 3 == n,
                s = 4 == n,
                p = 6 == n,
                l = 5 == n || p,
                d = t || c;
            return function (t, c, y) {
                for (var v, g, h = i(t), x = o(h), b = e(c, y, 3), m = u(x.length), w = 0, j = r ? d(t, m) : f ? d(t, 0) : undefined; m > w; w++)
                    if ((l || w in x) && (g = b(v = x[w], w, h), n))
                        if (r) j[w] = g;
                        else if (g) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return w;
                    case 2:
                        j.push(v)
                } else if (s) return !1;
                return p ? -1 : a || s ? s : j
            }
        }
    },
    DVgA: function (n, t, r) {
        var e = r("zhAb"),
            o = r("4R4u");
        n.exports = Object.keys || function (n) {
            return e(n, o)
        }
    },
    EWmC: function (n, t, r) {
        var e = r("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == e(n)
        }
    },
    Iw71: function (n, t, r) {
        var e = r("0/R4"),
            o = r("dyZX").document,
            i = e(o) && e(o.createElement);
        n.exports = function (n) {
            return i ? o.createElement(n) : {}
        }
    },
    JiEa: function (n, t) {
        t.f = Object.getOwnPropertySymbols
    },
    K0xU: function (n, t, r) {
        var e = r("VTer")("wks"),
            o = r("ylqs"),
            i = r("dyZX").Symbol,
            u = "function" == typeof i;
        (n.exports = function (n) {
            return e[n] || (e[n] = u && i[n] || (u ? i : o)("Symbol." + n))
        }).store = e
    },
    KroJ: function (n, t, r) {
        var e = r("dyZX"),
            o = r("Mukb"),
            i = r("aagx"),
            u = r("ylqs")("src"),
            c = r("+lvF"),
            f = ("" + c).split("toString");
        r("g3g5").inspectSource = function (n) {
            return c.call(n)
        }, (n.exports = function (n, t, r, c) {
            var a = "function" == typeof r;
            a && (i(r, "name") || o(r, "name", t)), n[t] !== r && (a && (i(r, u) || o(r, u, n[t] ? "" + n[t] : f.join(String(t)))), n === e ? n[t] = r : c ? n[t] ? n[t] = r : o(n, t, r) : (delete n[t], o(n, t, r)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || c.call(this)
        })
    },
    LQAc: function (n, t) {
        n.exports = !1
    },
    LZWt: function (n, t) {
        var r = {}.toString;
        n.exports = function (n) {
            return r.call(n).slice(8, -1)
        }
    },
    Mukb: function (n, t, r) {
        var e = r("hswa"),
            o = r("RjD/");
        n.exports = r("nh4g") ? function (n, t, r) {
            return e.f(n, t, o(1, r))
        } : function (n, t, r) {
            return n[t] = r, n
        }
    },
    QNso: function (n, t, r) {},
    RYi7: function (n, t) {
        var r = Math.ceil,
            e = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? e : r)(n)
        }
    },
    "RjD/": function (n, t) {
        n.exports = function (n, t) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: t
            }
        }
    },
    "S/j/": function (n, t, r) {
        var e = r("vhPU");
        n.exports = function (n) {
            return Object(e(n))
        }
    },
    UqcF: function (n, t) {
        t.f = {}.propertyIsEnumerable
    },
    VTer: function (n, t, r) {
        var e = r("g3g5"),
            o = r("dyZX"),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (n.exports = function (n, t) {
            return i[n] || (i[n] = t !== undefined ? t : {})
        })("versions", []).push({
            version: e.version,
            mode: r("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, t, r) {
        var e = r("dyZX"),
            o = r("g3g5"),
            i = r("Mukb"),
            u = r("KroJ"),
            c = r("m0Pp"),
            f = function (n, t, r) {
                var a, s, p, l, d = n & f.F,
                    y = n & f.G,
                    v = n & f.S,
                    g = n & f.P,
                    h = n & f.B,
                    x = y ? e : v ? e[t] || (e[t] = {}) : (e[t] || {}).prototype,
                    b = y ? o : o[t] || (o[t] = {}),
                    m = b.prototype || (b.prototype = {});
                for (a in y && (r = t), r) p = ((s = !d && x && x[a] !== undefined) ? x : r)[a], l = h && s ? c(p, e) : g && "function" == typeof p ? c(Function.call, p) : p, x && u(x, a, p, n & f.U), b[a] != p && i(b, a, l), g && m[a] != p && (m[a] = p)
            };
        e.core = o, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, n.exports = f
    },
    YTvA: function (n, t, r) {
        var e = r("VTer")("keys"),
            o = r("ylqs");
        n.exports = function (n) {
            return e[n] || (e[n] = o(n))
        }
    },
    Ymqv: function (n, t, r) {
        var e = r("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == e(n) ? n.split("") : Object(n)
        }
    },
    aCFj: function (n, t, r) {
        var e = r("Ymqv"),
            o = r("vhPU");
        n.exports = function (n) {
            return e(o(n))
        }
    },
    aagx: function (n, t) {
        var r = {}.hasOwnProperty;
        n.exports = function (n, t) {
            return r.call(n, t)
        }
    },
    apmT: function (n, t, r) {
        var e = r("0/R4");
        n.exports = function (n, t) {
            if (!e(n)) return n;
            var r, o;
            if (t && "function" == typeof (r = n.toString) && !e(o = r.call(n))) return o;
            if ("function" == typeof (r = n.valueOf) && !e(o = r.call(n))) return o;
            if (!t && "function" == typeof (r = n.toString) && !e(o = r.call(n))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    czNK: function (n, t, r) {
        "use strict";
        var e = r("nh4g"),
            o = r("DVgA"),
            i = r("JiEa"),
            u = r("UqcF"),
            c = r("S/j/"),
            f = r("Ymqv"),
            a = Object.assign;
        n.exports = !a || r("eeVq")(function () {
            var n = {},
                t = {},
                r = Symbol(),
                e = "abcdefghijklmnopqrst";
            return n[r] = 7, e.split("").forEach(function (n) {
                t[n] = n
            }), 7 != a({}, n)[r] || Object.keys(a({}, t)).join("") != e
        }) ? function (n, t) {
            for (var r = c(n), a = arguments.length, s = 1, p = i.f, l = u.f; a > s;)
                for (var d, y = f(arguments[s++]), v = p ? o(y).concat(p(y)) : o(y), g = v.length, h = 0; g > h;) d = v[h++], e && !l.call(y, d) || (r[d] = y[d]);
            return r
        } : a
    },
    "d/Gc": function (n, t, r) {
        var e = r("RYi7"),
            o = Math.max,
            i = Math.min;
        n.exports = function (n, t) {
            return (n = e(n)) < 0 ? o(n + t, 0) : i(n, t)
        }
    },
    dRSK: function (n, t, r) {
        "use strict";
        var e = r("XKFU"),
            o = r("CkkT")(5),
            i = !0;
        "find" in [] && Array(1).find(function () {
            i = !1
        }), e(e.P + e.F * i, "Array", {
            find: function (n) {
                return o(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), r("nGyu")("find")
    },
    dyZX: function (n, t) {
        var r = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    },
    eeVq: function (n, t) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (t) {
                return !0
            }
        }
    },
    g3g5: function (n, t) {
        var r = n.exports = {
            version: "2.6.10"
        };
        "number" == typeof __e && (__e = r)
    },
    hswa: function (n, t, r) {
        var e = r("y3w9"),
            o = r("xpql"),
            i = r("apmT"),
            u = Object.defineProperty;
        t.f = r("nh4g") ? Object.defineProperty : function (n, t, r) {
            if (e(n), t = i(t, !0), e(r), o) try {
                return u(n, t, r)
            } catch (c) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (n[t] = r.value), n
        }
    },
    iqpo: function (n, t, r) {
        "use strict";
        (function (n) {
            r("91GP"), r("dRSK"), r("QNso"),
                function () {
                    window.ACGN, undefined;
                    var t = window,
                        r = n,
                        e = t.Swiper;
                    window.ACGN.model.register("cms-recommend", {
                        desc: "一行6个带波浪遮罩的漫画单元格",
                        resource: "swiper-15",
                        tags: []
                    }, function (n, t) {
                        var o = r(n.el),
                            i = n.cls,
                            u = null;
                        return o.find(".swiper-area").show(), u = new e("." + i + " .swiper-container", {
                            centeredSlides: !0,
                            calculateHeight: !0,
                            autoplay: !0,
                            loop: !0,
                            speed: 0
                        }), o.find(".swiper-btn").on("click", function (n) {
                            n.stopPropagation(), u.swipeNext()
                        }), Object.assign(n, {
                            swiper: u
                        }), !0
                    })
                }()
        }).call(this, r("xeH2"))
    },
    m0Pp: function (n, t, r) {
        var e = r("2OiF");
        n.exports = function (n, t, r) {
            if (e(n), t === undefined) return n;
            switch (r) {
                case 1:
                    return function (r) {
                        return n.call(t, r)
                    };
                case 2:
                    return function (r, e) {
                        return n.call(t, r, e)
                    };
                case 3:
                    return function (r, e, o) {
                        return n.call(t, r, e, o)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }
    },
    nGyu: function (n, t, r) {
        var e = r("K0xU")("unscopables"),
            o = Array.prototype;
        o[e] == undefined && r("Mukb")(o, e, {}), n.exports = function (n) {
            o[e][n] = !0
        }
    },
    ne8i: function (n, t, r) {
        var e = r("RYi7"),
            o = Math.min;
        n.exports = function (n) {
            return n > 0 ? o(e(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, t, r) {
        n.exports = !r("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    vhPU: function (n, t) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    w2a5: function (n, t, r) {
        var e = r("aCFj"),
            o = r("ne8i"),
            i = r("d/Gc");
        n.exports = function (n) {
            return function (t, r, u) {
                var c, f = e(t),
                    a = o(f.length),
                    s = i(u, a);
                if (n && r != r) {
                    for (; a > s;)
                        if ((c = f[s++]) != c) return !0
                } else
                    for (; a > s; s++)
                        if ((n || s in f) && f[s] === r) return n || s || 0;
                return !n && -1
            }
        }
    },
    xeH2: function (n, t) {
        n.exports = jQuery
    },
    xpql: function (n, t, r) {
        n.exports = !r("nh4g") && !r("eeVq")(function () {
            return 7 != Object.defineProperty(r("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, t, r) {
        var e = r("0/R4");
        n.exports = function (n) {
            if (!e(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, t) {
        var r = 0,
            e = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++r + e).toString(36))
        }
    },
    zRwo: function (n, t, r) {
        var e = r("6FMO");
        n.exports = function (n, t) {
            return new(e(n))(t)
        }
    },
    zhAb: function (n, t, r) {
        var e = r("aagx"),
            o = r("aCFj"),
            i = r("w2a5")(!1),
            u = r("YTvA")("IE_PROTO");
        n.exports = function (n, t) {
            var r, c = o(n),
                f = 0,
                a = [];
            for (r in c) r != u && e(c, r) && a.push(r);
            for (; t.length > f;) e(c, r = t[f++]) && (~i(a, r) || a.push(r));
            return a
        }
    }
});
! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 10)
}({
    10: function (e, t, n) {
        e.exports = n("LvFR")
    },
    LvFR: function (e, t, n) {
        "use strict";
        // (function (e) {
        //     n("SfSV");
        //     var t = e("#COMMENT"),
        //         r = 0;
        //     window.COMMENT_CONFIG = {
        //         title: t.data("title"),
        //         appId: siteConf.product_id,
        //         ssid: t.data("ssid"),
        //         ssidType: 0,
        //         currentPage: 1,
        //         commentType: 0,
        //         hotCommentCount: 10,
        //         url: "",
        //         starId: "",
        //         satelliteId: "",
        //         getUserHanddle: function (e) {
        //             var t = ACGN.userInfo,
        //                 n = t && "device" !== t.type;
        //             if (t && n) e(null, t);
        //             else {
        //                 var o = ACGN.util.cookieParse("simpleInfo");
        //                 o && n ? ACGN.business.header.getUserInfo(o, function (t, n) {
        //                     t ? e(new Error(t)) : (ACGN.userInfo = n, e(null, n))
        //                 }) : (r > 0 && ACGN.layerLogin(), e(new Error("请登录"))), r++
        //             }
        //         },
        //         theme: ["#fc6976", "#fc6976"],
        //         sort: 1,
        //         commentPosition: 1,
        //         maxCharacter: 500
        //     }, ACGN.util.loadjs("//static.321mh.com/comment/comments.min.js", {
        //         async: !0
        //     })
        // }).call(this, n("xeH2"))
    },
    SfSV: function (e, t, n) {},
    xeH2: function (e, t) {
        e.exports = jQuery
    }
});
! function (n) {
    var t = {};

    function e(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = n, e.c = t, e.d = function (n, t, r) {
        e.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: r
        })
    }, e.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, e.t = function (n, t) {
        if (1 & t && (n = e(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var o in n) e.d(r, o, function (t) {
                return n[t]
            }.bind(null, o));
        return r
    }, e.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, e.p = "/", e(e.s = 7)
}({
    "+lvF": function (n, t, e) {
        n.exports = e("VTer")("native-function-to-string", Function.toString)
    },
    "/e88": function (n, t) {
        n.exports = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"
    },
    "0/R4": function (n, t) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    "2OiF": function (n, t) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    "4R4u": function (n, t) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "6FMO": function (n, t, e) {
        var r = e("0/R4"),
            o = e("EWmC"),
            i = e("K0xU")("species");
        n.exports = function (n) {
            var t;
            return o(n) && ("function" != typeof (t = n.constructor) || t !== Array && !o(t.prototype) || (t = undefined), r(t) && null === (t = t[i]) && (t = undefined)), t === undefined ? Array : t
        }
    },
    7: function (n, t, e) {
        n.exports = e("fY8x")
    },
    "91GP": function (n, t, e) {
        var r = e("XKFU");
        r(r.S + r.F, "Object", {
            assign: e("czNK")
        })
    },
    CkkT: function (n, t, e) {
        var r = e("m0Pp"),
            o = e("Ymqv"),
            i = e("S/j/"),
            u = e("ne8i"),
            c = e("zRwo");
        n.exports = function (n, t) {
            var e = 1 == n,
                f = 2 == n,
                a = 3 == n,
                s = 4 == n,
                d = 6 == n,
                p = 5 == n || d,
                l = t || c;
            return function (t, c, v) {
                for (var h, x, y = i(t), g = o(y), b = r(c, v, 3), w = u(g.length), m = 0, j = e ? l(t, w) : f ? l(t, 0) : undefined; w > m; m++)
                    if ((p || m in g) && (x = b(h = g[m], m, y), n))
                        if (e) j[m] = x;
                        else if (x) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return m;
                    case 2:
                        j.push(h)
                } else if (s) return !1;
                return d ? -1 : a || s ? s : j
            }
        }
    },
    DVgA: function (n, t, e) {
        var r = e("zhAb"),
            o = e("4R4u");
        n.exports = Object.keys || function (n) {
            return r(n, o)
        }
    },
    EWmC: function (n, t, e) {
        var r = e("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == r(n)
        }
    },
    Iw71: function (n, t, e) {
        var r = e("0/R4"),
            o = e("dyZX").document,
            i = r(o) && r(o.createElement);
        n.exports = function (n) {
            return i ? o.createElement(n) : {}
        }
    },
    JiEa: function (n, t) {
        t.f = Object.getOwnPropertySymbols
    },
    K0xU: function (n, t, e) {
        var r = e("VTer")("wks"),
            o = e("ylqs"),
            i = e("dyZX").Symbol,
            u = "function" == typeof i;
        (n.exports = function (n) {
            return r[n] || (r[n] = u && i[n] || (u ? i : o)("Symbol." + n))
        }).store = r
    },
    KroJ: function (n, t, e) {
        var r = e("dyZX"),
            o = e("Mukb"),
            i = e("aagx"),
            u = e("ylqs")("src"),
            c = e("+lvF"),
            f = ("" + c).split("toString");
        e("g3g5").inspectSource = function (n) {
            return c.call(n)
        }, (n.exports = function (n, t, e, c) {
            var a = "function" == typeof e;
            a && (i(e, "name") || o(e, "name", t)), n[t] !== e && (a && (i(e, u) || o(e, u, n[t] ? "" + n[t] : f.join(String(t)))), n === r ? n[t] = e : c ? n[t] ? n[t] = e : o(n, t, e) : (delete n[t], o(n, t, e)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || c.call(this)
        })
    },
    LQAc: function (n, t) {
        n.exports = !1
    },
    LZWt: function (n, t) {
        var e = {}.toString;
        n.exports = function (n) {
            return e.call(n).slice(8, -1)
        }
    },
    Mukb: function (n, t, e) {
        var r = e("hswa"),
            o = e("RjD/");
        n.exports = e("nh4g") ? function (n, t, e) {
            return r.f(n, t, o(1, e))
        } : function (n, t, e) {
            return n[t] = e, n
        }
    },
    RYi7: function (n, t) {
        var e = Math.ceil,
            r = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? r : e)(n)
        }
    },
    "RjD/": function (n, t) {
        n.exports = function (n, t) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: t
            }
        }
    },
    "S/j/": function (n, t, e) {
        var r = e("vhPU");
        n.exports = function (n) {
            return Object(r(n))
        }
    },
    Tze0: function (n, t, e) {
        "use strict";
        e("qncB")("trim", function (n) {
            return function () {
                return n(this, 3)
            }
        })
    },
    UqcF: function (n, t) {
        t.f = {}.propertyIsEnumerable
    },
    VTer: function (n, t, e) {
        var r = e("g3g5"),
            o = e("dyZX"),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (n.exports = function (n, t) {
            return i[n] || (i[n] = t !== undefined ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: e("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, t, e) {
        var r = e("dyZX"),
            o = e("g3g5"),
            i = e("Mukb"),
            u = e("KroJ"),
            c = e("m0Pp"),
            f = function (n, t, e) {
                var a, s, d, p, l = n & f.F,
                    v = n & f.G,
                    h = n & f.S,
                    x = n & f.P,
                    y = n & f.B,
                    g = v ? r : h ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                    b = v ? o : o[t] || (o[t] = {}),
                    w = b.prototype || (b.prototype = {});
                for (a in v && (e = t), e) d = ((s = !l && g && g[a] !== undefined) ? g : e)[a], p = y && s ? c(d, r) : x && "function" == typeof d ? c(Function.call, d) : d, g && u(g, a, d, n & f.U), b[a] != d && i(b, a, p), x && w[a] != d && (w[a] = d)
            };
        r.core = o, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, n.exports = f
    },
    YTvA: function (n, t, e) {
        var r = e("VTer")("keys"),
            o = e("ylqs");
        n.exports = function (n) {
            return r[n] || (r[n] = o(n))
        }
    },
    Ymqv: function (n, t, e) {
        var r = e("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == r(n) ? n.split("") : Object(n)
        }
    },
    aCFj: function (n, t, e) {
        var r = e("Ymqv"),
            o = e("vhPU");
        n.exports = function (n) {
            return r(o(n))
        }
    },
    aagx: function (n, t) {
        var e = {}.hasOwnProperty;
        n.exports = function (n, t) {
            return e.call(n, t)
        }
    },
    apmT: function (n, t, e) {
        var r = e("0/R4");
        n.exports = function (n, t) {
            if (!r(n)) return n;
            var e, o;
            if (t && "function" == typeof (e = n.toString) && !r(o = e.call(n))) return o;
            if ("function" == typeof (e = n.valueOf) && !r(o = e.call(n))) return o;
            if (!t && "function" == typeof (e = n.toString) && !r(o = e.call(n))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    czNK: function (n, t, e) {
        "use strict";
        var r = e("nh4g"),
            o = e("DVgA"),
            i = e("JiEa"),
            u = e("UqcF"),
            c = e("S/j/"),
            f = e("Ymqv"),
            a = Object.assign;
        n.exports = !a || e("eeVq")(function () {
            var n = {},
                t = {},
                e = Symbol(),
                r = "abcdefghijklmnopqrst";
            return n[e] = 7, r.split("").forEach(function (n) {
                t[n] = n
            }), 7 != a({}, n)[e] || Object.keys(a({}, t)).join("") != r
        }) ? function (n, t) {
            for (var e = c(n), a = arguments.length, s = 1, d = i.f, p = u.f; a > s;)
                for (var l, v = f(arguments[s++]), h = d ? o(v).concat(d(v)) : o(v), x = h.length, y = 0; x > y;) l = h[y++], r && !p.call(v, l) || (e[l] = v[l]);
            return e
        } : a
    },
    "d/Gc": function (n, t, e) {
        var r = e("RYi7"),
            o = Math.max,
            i = Math.min;
        n.exports = function (n, t) {
            return (n = r(n)) < 0 ? o(n + t, 0) : i(n, t)
        }
    },
    dRSK: function (n, t, e) {
        "use strict";
        var r = e("XKFU"),
            o = e("CkkT")(5),
            i = !0;
        "find" in [] && Array(1).find(function () {
            i = !1
        }), r(r.P + r.F * i, "Array", {
            find: function (n) {
                return o(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), e("nGyu")("find")
    },
    dyZX: function (n, t) {
        var e = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    },
    eeVq: function (n, t) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (t) {
                return !0
            }
        }
    },
    fY8x: function (n, t, e) {
        "use strict";
        (function (n) {
            e("Tze0"), e("91GP"), e("dRSK"), e("s0I5"),
                function () {
                    window.ACGN, undefined;
                    window;
                    var t = n;
                    window.ACGN.model.register("detail-introduce", {
                        desc: "漫画简介 作者角色信息",
                        resource: "detail-banner-4"
                    }, function (n, e) {
                        var r, o = t(n.el),
                            i = n.cls,
                            u = !1,
                            c = !1;

                        function f() {
                            o.find(".swiper-box").find(".swiper-area").show(), r = new Swiper("." + i + " .swiper-container", {
                                loop: !0,
                                loopAdditionalSlides: 1,
                                simulateTouch: !1,
                                centeredSlides: !0,
                                slidesPerView: 3,
                                watchActiveIndex: !0,
                                onInit: function (n) {},
                                onSlideChangeEnd: function (n, t) {
                                    o.find(".introduce-box").hide(), o.find(".introduce-box:eq(" + n.activeLoopIndex + ")").show().removeClass("acgn-hide"), a(".desc-box")
                                }
                            }), Object.assign(n, {
                                swiper: r
                            }), u = !0
                        }

                        function a(n) {
                            o.find(n).each(function (n, e) {
                                var r = t(this),
                                    o = r.width(),
                                    i = r.height(),
                                    u = r.find(".content"),
                                    f = u.height(),
                                    a = u.text().trim();
                                if (f > i && r.find(".expand-btn").length <= 0) {
                                    r.append('<div class="expand-btn"></div>');
                                    var s = 3 * parseInt(o / 14) - 3,
                                        d = a.substring(0, s) + "...";
                                    u.text(d), r.data("s_data", d), r.data("l_data", a)
                                }
                                c || r.on("click", ".expand-btn", function (n) {
                                    r.hasClass("expand") ? (r.removeClass("expand"), u.text(r.data("s_data"))) : (r.addClass("expand"), u.text(r.data("l_data")))
                                })
                            }), c = !0
                        }
                        return f(), a(".desc-box"), o.find(".acgn-new-hd").on("mouseover", ".switch", function () {
                            var n = t(this);
                            n.hasClass("mhjj") ? (o.find(".switch").removeClass("active"), o.find(".acgn-new-bd").find(".zzjs").removeClass("active"), o.find(".acgn-new-bd").find(".mhjj").addClass("active"), n.addClass("active")) : (o.find(".switch").removeClass("active"), o.find(".acgn-new-bd").find(".mhjj").removeClass("active"), o.find(".acgn-new-bd").find(".zzjs").addClass("active"), n.addClass("active"), u || f(), a(".desc-box"))
                        }), o.on("click", ".swiper-slide", function (n) {
                            var e = t(this),
                                i = o.find(".swiper-slide-active").index(".swiper-slide"),
                                u = e.index(".swiper-slide");
                            i < u ? r.swipeNext() : i > u ? r.swipePrev() : window.open(e.find("a")[0].href)
                        }), a(".desc-box"), !0
                    })
                }()
        }).call(this, e("xeH2"))
    },
    g3g5: function (n, t) {
        var e = n.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = e)
    },
    hswa: function (n, t, e) {
        var r = e("y3w9"),
            o = e("xpql"),
            i = e("apmT"),
            u = Object.defineProperty;
        t.f = e("nh4g") ? Object.defineProperty : function (n, t, e) {
            if (r(n), t = i(t, !0), r(e), o) try {
                return u(n, t, e)
            } catch (c) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (n[t] = e.value), n
        }
    },
    m0Pp: function (n, t, e) {
        var r = e("2OiF");
        n.exports = function (n, t, e) {
            if (r(n), t === undefined) return n;
            switch (e) {
                case 1:
                    return function (e) {
                        return n.call(t, e)
                    };
                case 2:
                    return function (e, r) {
                        return n.call(t, e, r)
                    };
                case 3:
                    return function (e, r, o) {
                        return n.call(t, e, r, o)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }
    },
    nGyu: function (n, t, e) {
        var r = e("K0xU")("unscopables"),
            o = Array.prototype;
        o[r] == undefined && e("Mukb")(o, r, {}), n.exports = function (n) {
            o[r][n] = !0
        }
    },
    ne8i: function (n, t, e) {
        var r = e("RYi7"),
            o = Math.min;
        n.exports = function (n) {
            return n > 0 ? o(r(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, t, e) {
        n.exports = !e("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    qncB: function (n, t, e) {
        var r = e("XKFU"),
            o = e("vhPU"),
            i = e("eeVq"),
            u = e("/e88"),
            c = "[" + u + "]",
            f = RegExp("^" + c + c + "*"),
            a = RegExp(c + c + "*$"),
            s = function (n, t, e) {
                var o = {},
                    c = i(function () {
                        return !!u[n]() || "​" != "​" [n]()
                    }),
                    f = o[n] = c ? t(d) : u[n];
                e && (o[e] = f), r(r.P + r.F * c, "String", o)
            },
            d = s.trim = function (n, t) {
                return n = String(o(n)), 1 & t && (n = n.replace(f, "")), 2 & t && (n = n.replace(a, "")), n
            };
        n.exports = s
    },
    s0I5: function (n, t, e) {},
    vhPU: function (n, t) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    w2a5: function (n, t, e) {
        var r = e("aCFj"),
            o = e("ne8i"),
            i = e("d/Gc");
        n.exports = function (n) {
            return function (t, e, u) {
                var c, f = r(t),
                    a = o(f.length),
                    s = i(u, a);
                if (n && e != e) {
                    for (; a > s;)
                        if ((c = f[s++]) != c) return !0
                } else
                    for (; a > s; s++)
                        if ((n || s in f) && f[s] === e) return n || s || 0;
                return !n && -1
            }
        }
    },
    xeH2: function (n, t) {
        n.exports = jQuery
    },
    xpql: function (n, t, e) {
        n.exports = !e("nh4g") && !e("eeVq")(function () {
            return 7 != Object.defineProperty(e("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, t, e) {
        var r = e("0/R4");
        n.exports = function (n) {
            if (!r(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, t) {
        var e = 0,
            r = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++e + r).toString(36))
        }
    },
    zRwo: function (n, t, e) {
        var r = e("6FMO");
        n.exports = function (n, t) {
            return new(r(n))(t)
        }
    },
    zhAb: function (n, t, e) {
        var r = e("aagx"),
            o = e("aCFj"),
            i = e("w2a5")(!1),
            u = e("YTvA")("IE_PROTO");
        n.exports = function (n, t) {
            var e, c = o(n),
                f = 0,
                a = [];
            for (e in c) e != u && r(c, e) && a.push(e);
            for (; t.length > f;) r(c, e = t[f++]) && (~i(a, e) || a.push(e));
            return a
        }
    }
});
! function (e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function (n) {
                return e[n]
            }.bind(null, o));
        return r
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "/", t(t.s = 12)
}({
    "+izy": function (e, n, t) {},
    12: function (e, n, t) {
        e.exports = t("nOLP")
    },
    nOLP: function (e, n, t) {
        "use strict";
        t("+izy"), window.ACGN, undefined, window.ACGN.model.register("detail-contribution", {
            desc: "粉丝贡献",
            resource: "detail-banner-6"
        }, function (e, n) {
            return !0
        })
    }
});
! function (n) {
    var t = {};

    function e(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = n, e.c = t, e.d = function (n, t, r) {
        e.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: r
        })
    }, e.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, e.t = function (n, t) {
        if (1 & t && (n = e(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var o in n) e.d(r, o, function (t) {
                return n[t]
            }.bind(null, o));
        return r
    }, e.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, e.p = "/", e(e.s = 14)
}({
    "+lvF": function (n, t, e) {
        n.exports = e("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (n, t) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    14: function (n, t, e) {
        n.exports = e("x0J6")
    },
    "2OiF": function (n, t) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    "4R4u": function (n, t) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "6FMO": function (n, t, e) {
        var r = e("0/R4"),
            o = e("EWmC"),
            i = e("K0xU")("species");
        n.exports = function (n) {
            var t;
            return o(n) && ("function" != typeof (t = n.constructor) || t !== Array && !o(t.prototype) || (t = undefined), r(t) && null === (t = t[i]) && (t = undefined)), t === undefined ? Array : t
        }
    },
    A5AN: function (n, t, e) {
        "use strict";
        var r = e("AvRE")(!0);
        n.exports = function (n, t, e) {
            return t + (e ? r(n, t).length : 1)
        }
    },
    AvRE: function (n, t, e) {
        var r = e("RYi7"),
            o = e("vhPU");
        n.exports = function (n) {
            return function (t, e) {
                var i, c, u = String(o(t)),
                    a = r(e),
                    f = u.length;
                return a < 0 || a >= f ? n ? "" : undefined : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === f || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? n ? u.charAt(a) : i : n ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536
            }
        }
    },
    "C/va": function (n, t, e) {
        "use strict";
        var r = e("y3w9");
        n.exports = function () {
            var n = r(this),
                t = "";
            return n.global && (t += "g"), n.ignoreCase && (t += "i"), n.multiline && (t += "m"), n.unicode && (t += "u"), n.sticky && (t += "y"), t
        }
    },
    CkkT: function (n, t, e) {
        var r = e("m0Pp"),
            o = e("Ymqv"),
            i = e("S/j/"),
            c = e("ne8i"),
            u = e("zRwo");
        n.exports = function (n, t) {
            var e = 1 == n,
                a = 2 == n,
                f = 3 == n,
                s = 4 == n,
                l = 6 == n,
                p = 5 == n || l,
                d = t || u;
            return function (t, u, v) {
                for (var g, h, x = i(t), y = o(x), m = r(u, v, 3), b = c(y.length), w = 0, _ = e ? d(t, b) : a ? d(t, 0) : undefined; b > w; w++)
                    if ((p || w in y) && (h = m(g = y[w], w, x), n))
                        if (e) _[w] = h;
                        else if (h) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return g;
                    case 6:
                        return w;
                    case 2:
                        _.push(g)
                } else if (s) return !1;
                return l ? -1 : f || s ? s : _
            }
        }
    },
    EWmC: function (n, t, e) {
        var r = e("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == r(n)
        }
    },
    EemH: function (n, t, e) {
        var r = e("UqcF"),
            o = e("RjD/"),
            i = e("aCFj"),
            c = e("apmT"),
            u = e("aagx"),
            a = e("xpql"),
            f = Object.getOwnPropertyDescriptor;
        t.f = e("nh4g") ? f : function (n, t) {
            if (n = i(n), t = c(t, !0), a) try {
                return f(n, t)
            } catch (e) {}
            if (u(n, t)) return o(!r.f.call(n, t), n[t])
        }
    },
    FXD9: function (n, t, e) {},
    "I8a+": function (n, t, e) {
        var r = e("LZWt"),
            o = e("K0xU")("toStringTag"),
            i = "Arguments" == r(function () {
                return arguments
            }());
        n.exports = function (n) {
            var t, e, c;
            return n === undefined ? "Undefined" : null === n ? "Null" : "string" == typeof (e = function (n, t) {
                try {
                    return n[t]
                } catch (e) {}
            }(t = Object(n), o)) ? e : i ? r(t) : "Object" == (c = r(t)) && "function" == typeof t.callee ? "Arguments" : c
        }
    },
    "IU+Z": function (n, t, e) {
        "use strict";
        e("sMXx");
        var r = e("KroJ"),
            o = e("Mukb"),
            i = e("eeVq"),
            c = e("vhPU"),
            u = e("K0xU"),
            a = e("Ugos"),
            f = u("species"),
            s = !i(function () {
                var n = /./;
                return n.exec = function () {
                    var n = [];
                    return n.groups = {
                        a: "7"
                    }, n
                }, "7" !== "".replace(n, "$<a>")
            }),
            l = function () {
                var n = /(?:)/,
                    t = n.exec;
                n.exec = function () {
                    return t.apply(this, arguments)
                };
                var e = "ab".split(n);
                return 2 === e.length && "a" === e[0] && "b" === e[1]
            }();
        n.exports = function (n, t, e) {
            var p = u(n),
                d = !i(function () {
                    var t = {};
                    return t[p] = function () {
                        return 7
                    }, 7 != "" [n](t)
                }),
                v = d ? !i(function () {
                    var t = !1,
                        e = /a/;
                    return e.exec = function () {
                        return t = !0, null
                    }, "split" === n && (e.constructor = {}, e.constructor[f] = function () {
                        return e
                    }), e[p](""), !t
                }) : undefined;
            if (!d || !v || "replace" === n && !s || "split" === n && !l) {
                var g = /./ [p],
                    h = e(c, p, "" [n], function (n, t, e, r, o) {
                        return t.exec === a ? d && !o ? {
                            done: !0,
                            value: g.call(t, e, r)
                        } : {
                            done: !0,
                            value: n.call(e, t, r)
                        } : {
                            done: !1
                        }
                    }),
                    x = h[0],
                    y = h[1];
                r(String.prototype, n, x), o(RegExp.prototype, p, 2 == t ? function (n, t) {
                    return y.call(n, this, t)
                } : function (n) {
                    return y.call(n, this)
                })
            }
        }
    },
    Iw71: function (n, t, e) {
        var r = e("0/R4"),
            o = e("dyZX").document,
            i = r(o) && r(o.createElement);
        n.exports = function (n) {
            return i ? o.createElement(n) : {}
        }
    },
    K0xU: function (n, t, e) {
        var r = e("VTer")("wks"),
            o = e("ylqs"),
            i = e("dyZX").Symbol,
            c = "function" == typeof i;
        (n.exports = function (n) {
            return r[n] || (r[n] = c && i[n] || (c ? i : o)("Symbol." + n))
        }).store = r
    },
    KroJ: function (n, t, e) {
        var r = e("dyZX"),
            o = e("Mukb"),
            i = e("aagx"),
            c = e("ylqs")("src"),
            u = e("+lvF"),
            a = ("" + u).split("toString");
        e("g3g5").inspectSource = function (n) {
            return u.call(n)
        }, (n.exports = function (n, t, e, u) {
            var f = "function" == typeof e;
            f && (i(e, "name") || o(e, "name", t)), n[t] !== e && (f && (i(e, c) || o(e, c, n[t] ? "" + n[t] : a.join(String(t)))), n === r ? n[t] = e : u ? n[t] ? n[t] = e : o(n, t, e) : (delete n[t], o(n, t, e)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[c] || u.call(this)
        })
    },
    LQAc: function (n, t) {
        n.exports = !1
    },
    LZWt: function (n, t) {
        var e = {}.toString;
        n.exports = function (n) {
            return e.call(n).slice(8, -1)
        }
    },
    Mukb: function (n, t, e) {
        var r = e("hswa"),
            o = e("RjD/");
        n.exports = e("nh4g") ? function (n, t, e) {
            return r.f(n, t, o(1, e))
        } : function (n, t, e) {
            return n[t] = e, n
        }
    },
    Oyvg: function (n, t, e) {
        var r = e("dyZX"),
            o = e("Xbzi"),
            i = e("hswa").f,
            c = e("kJMx").f,
            u = e("quPj"),
            a = e("C/va"),
            f = r.RegExp,
            s = f,
            l = f.prototype,
            p = /a/g,
            d = /a/g,
            v = new f(p) !== p;
        if (e("nh4g") && (!v || e("eeVq")(function () {
                return d[e("K0xU")("match")] = !1, f(p) != p || f(d) == d || "/a/i" != f(p, "i")
            }))) {
            f = function (n, t) {
                var e = this instanceof f,
                    r = u(n),
                    i = t === undefined;
                return !e && r && n.constructor === f && i ? n : o(v ? new s(r && !i ? n.source : n, t) : s((r = n instanceof f) ? n.source : n, r && i ? a.call(n) : t), e ? this : l, f)
            };
            for (var g = function (n) {
                    n in f || i(f, n, {
                        configurable: !0,
                        get: function () {
                            return s[n]
                        },
                        set: function (t) {
                            s[n] = t
                        }
                    })
                }, h = c(s), x = 0; h.length > x;) g(h[x++]);
            l.constructor = f, f.prototype = l, e("KroJ")(r, "RegExp", f)
        }
        e("elZq")("RegExp")
    },
    RYi7: function (n, t) {
        var e = Math.ceil,
            r = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? r : e)(n)
        }
    },
    "RjD/": function (n, t) {
        n.exports = function (n, t) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: t
            }
        }
    },
    "S/j/": function (n, t, e) {
        var r = e("vhPU");
        n.exports = function (n) {
            return Object(r(n))
        }
    },
    Ugos: function (n, t, e) {
        "use strict";
        var r, o, i = e("C/va"),
            c = RegExp.prototype.exec,
            u = String.prototype.replace,
            a = c,
            f = (r = /a/, o = /b*/g, c.call(r, "a"), c.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
            s = /()??/.exec("")[1] !== undefined;
        (f || s) && (a = function (n) {
            var t, e, r, o, a = this;
            return s && (e = new RegExp("^" + a.source + "$(?!\\s)", i.call(a))), f && (t = a.lastIndex), r = c.call(a, n), f && r && (a.lastIndex = a.global ? r.index + r[0].length : t), s && r && r.length > 1 && u.call(r[0], e, function () {
                for (o = 1; o < arguments.length - 2; o++) arguments[o] === undefined && (r[o] = undefined)
            }), r
        }), n.exports = a
    },
    UqcF: function (n, t) {
        t.f = {}.propertyIsEnumerable
    },
    VTer: function (n, t, e) {
        var r = e("g3g5"),
            o = e("dyZX"),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (n.exports = function (n, t) {
            return i[n] || (i[n] = t !== undefined ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: e("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, t, e) {
        var r = e("dyZX"),
            o = e("g3g5"),
            i = e("Mukb"),
            c = e("KroJ"),
            u = e("m0Pp"),
            a = function (n, t, e) {
                var f, s, l, p, d = n & a.F,
                    v = n & a.G,
                    g = n & a.S,
                    h = n & a.P,
                    x = n & a.B,
                    y = v ? r : g ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                    m = v ? o : o[t] || (o[t] = {}),
                    b = m.prototype || (m.prototype = {});
                for (f in v && (e = t), e) l = ((s = !d && y && y[f] !== undefined) ? y : e)[f], p = x && s ? u(l, r) : h && "function" == typeof l ? u(Function.call, l) : l, y && c(y, f, l, n & a.U), m[f] != l && i(m, f, p), h && b[f] != l && (b[f] = l)
            };
        r.core = o, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, n.exports = a
    },
    Xbzi: function (n, t, e) {
        var r = e("0/R4"),
            o = e("i5dc").set;
        n.exports = function (n, t, e) {
            var i, c = t.constructor;
            return c !== e && "function" == typeof c && (i = c.prototype) !== e.prototype && r(i) && o && o(n, i), n
        }
    },
    Xxuz: function (n, t, e) {
        "use strict";
        var r = e("I8a+"),
            o = RegExp.prototype.exec;
        n.exports = function (n, t) {
            var e = n.exec;
            if ("function" == typeof e) {
                var i = e.call(n, t);
                if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== r(n)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return o.call(n, t)
        }
    },
    YTvA: function (n, t, e) {
        var r = e("VTer")("keys"),
            o = e("ylqs");
        n.exports = function (n) {
            return r[n] || (r[n] = o(n))
        }
    },
    Ymqv: function (n, t, e) {
        var r = e("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == r(n) ? n.split("") : Object(n)
        }
    },
    aCFj: function (n, t, e) {
        var r = e("Ymqv"),
            o = e("vhPU");
        n.exports = function (n) {
            return r(o(n))
        }
    },
    aagx: function (n, t) {
        var e = {}.hasOwnProperty;
        n.exports = function (n, t) {
            return e.call(n, t)
        }
    },
    apmT: function (n, t, e) {
        var r = e("0/R4");
        n.exports = function (n, t) {
            if (!r(n)) return n;
            var e, o;
            if (t && "function" == typeof (e = n.toString) && !r(o = e.call(n))) return o;
            if ("function" == typeof (e = n.valueOf) && !r(o = e.call(n))) return o;
            if (!t && "function" == typeof (e = n.toString) && !r(o = e.call(n))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    "d/Gc": function (n, t, e) {
        var r = e("RYi7"),
            o = Math.max,
            i = Math.min;
        n.exports = function (n, t) {
            return (n = r(n)) < 0 ? o(n + t, 0) : i(n, t)
        }
    },
    dRSK: function (n, t, e) {
        "use strict";
        var r = e("XKFU"),
            o = e("CkkT")(5),
            i = !0;
        "find" in [] && Array(1).find(function () {
            i = !1
        }), r(r.P + r.F * i, "Array", {
            find: function (n) {
                return o(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), e("nGyu")("find")
    },
    dyZX: function (n, t) {
        var e = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    },
    eeVq: function (n, t) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (t) {
                return !0
            }
        }
    },
    elZq: function (n, t, e) {
        "use strict";
        var r = e("dyZX"),
            o = e("hswa"),
            i = e("nh4g"),
            c = e("K0xU")("species");
        n.exports = function (n) {
            var t = r[n];
            i && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    },
    g3g5: function (n, t) {
        var e = n.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = e)
    },
    hswa: function (n, t, e) {
        var r = e("y3w9"),
            o = e("xpql"),
            i = e("apmT"),
            c = Object.defineProperty;
        t.f = e("nh4g") ? Object.defineProperty : function (n, t, e) {
            if (r(n), t = i(t, !0), r(e), o) try {
                return c(n, t, e)
            } catch (u) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (n[t] = e.value), n
        }
    },
    i5dc: function (n, t, e) {
        var r = e("0/R4"),
            o = e("y3w9"),
            i = function (n, t) {
                if (o(n), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
            };
        n.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (n, t, r) {
                try {
                    (r = e("m0Pp")(Function.call, e("EemH").f(Object.prototype, "__proto__").set, 2))(n, []), t = !(n instanceof Array)
                } catch (o) {
                    t = !0
                }
                return function (n, e) {
                    return i(n, e), t ? n.__proto__ = e : r(n, e), n
                }
            }({}, !1) : undefined),
            check: i
        }
    },
    kJMx: function (n, t, e) {
        var r = e("zhAb"),
            o = e("4R4u").concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (n) {
            return r(n, o)
        }
    },
    m0Pp: function (n, t, e) {
        var r = e("2OiF");
        n.exports = function (n, t, e) {
            if (r(n), t === undefined) return n;
            switch (e) {
                case 1:
                    return function (e) {
                        return n.call(t, e)
                    };
                case 2:
                    return function (e, r) {
                        return n.call(t, e, r)
                    };
                case 3:
                    return function (e, r, o) {
                        return n.call(t, e, r, o)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }
    },
    nGyu: function (n, t, e) {
        var r = e("K0xU")("unscopables"),
            o = Array.prototype;
        o[r] == undefined && e("Mukb")(o, r, {}), n.exports = function (n) {
            o[r][n] = !0
        }
    },
    ne8i: function (n, t, e) {
        var r = e("RYi7"),
            o = Math.min;
        n.exports = function (n) {
            return n > 0 ? o(r(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, t, e) {
        n.exports = !e("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    pIFo: function (n, t, e) {
        "use strict";
        var r = e("y3w9"),
            o = e("S/j/"),
            i = e("ne8i"),
            c = e("RYi7"),
            u = e("A5AN"),
            a = e("Xxuz"),
            f = Math.max,
            s = Math.min,
            l = Math.floor,
            p = /\$([$&`']|\d\d?|<[^>]*>)/g,
            d = /\$([$&`']|\d\d?)/g;
        e("IU+Z")("replace", 2, function (n, t, e, v) {
            return [function (r, o) {
                var i = n(this),
                    c = r == undefined ? undefined : r[t];
                return c !== undefined ? c.call(r, i, o) : e.call(String(i), r, o)
            }, function (n, t) {
                var o = v(e, n, this, t);
                if (o.done) return o.value;
                var l = r(n),
                    p = String(this),
                    d = "function" == typeof t;
                d || (t = String(t));
                var h = l.global;
                if (h) {
                    var x = l.unicode;
                    l.lastIndex = 0
                }
                for (var y = [];;) {
                    var m = a(l, p);
                    if (null === m) break;
                    if (y.push(m), !h) break;
                    "" === String(m[0]) && (l.lastIndex = u(p, i(l.lastIndex), x))
                }
                for (var b, w = "", _ = 0, j = 0; j < y.length; j++) {
                    m = y[j];
                    for (var R = String(m[0]), S = f(s(c(m.index), p.length), 0), k = [], O = 1; O < m.length; O++) k.push((b = m[O]) === undefined ? b : String(b));
                    var A = m.groups;
                    if (d) {
                        var E = [R].concat(k, S, p);
                        A !== undefined && E.push(A);
                        var C = String(t.apply(undefined, E))
                    } else C = g(R, p, S, k, A, t);
                    S >= _ && (w += p.slice(_, S) + C, _ = S + R.length)
                }
                return w + p.slice(_)
            }];

            function g(n, t, r, i, c, u) {
                var a = r + n.length,
                    f = i.length,
                    s = d;
                return c !== undefined && (c = o(c), s = p), e.call(u, s, function (e, o) {
                    var u;
                    switch (o.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return n;
                        case "`":
                            return t.slice(0, r);
                        case "'":
                            return t.slice(a);
                        case "<":
                            u = c[o.slice(1, -1)];
                            break;
                        default:
                            var s = +o;
                            if (0 === s) return e;
                            if (s > f) {
                                var p = l(s / 10);
                                return 0 === p ? e : p <= f ? i[p - 1] === undefined ? o.charAt(1) : i[p - 1] + o.charAt(1) : e
                            }
                            u = i[s - 1]
                    }
                    return u === undefined ? "" : u
                })
            }
        })
    },
    quPj: function (n, t, e) {
        var r = e("0/R4"),
            o = e("LZWt"),
            i = e("K0xU")("match");
        n.exports = function (n) {
            var t;
            return r(n) && ((t = n[i]) !== undefined ? !!t : "RegExp" == o(n))
        }
    },
    sMXx: function (n, t, e) {
        "use strict";
        var r = e("Ugos");
        e("XKFU")({
            target: "RegExp",
            proto: !0,
            forced: r !== /./.exec
        }, {
            exec: r
        })
    },
    vhPU: function (n, t) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    w2a5: function (n, t, e) {
        var r = e("aCFj"),
            o = e("ne8i"),
            i = e("d/Gc");
        n.exports = function (n) {
            return function (t, e, c) {
                var u, a = r(t),
                    f = o(a.length),
                    s = i(c, f);
                if (n && e != e) {
                    for (; f > s;)
                        if ((u = a[s++]) != u) return !0
                } else
                    for (; f > s; s++)
                        if ((n || s in a) && a[s] === e) return n || s || 0;
                return !n && -1
            }
        }
    },
    x0J6: function (n, t, e) {
        "use strict";
        (function (n) {
            e("Oyvg"), e("pIFo"), e("dRSK"), e("FXD9"),
                function () {
                    window.ACGN, undefined;
                    window;
                    var t = n;
                    window.ACGN.model.register("detail-rank", {
                        desc: "1x10,且可多个时间段切换的排行榜",
                        resource: "rank-5"
                    }, function (n, e) {
                        var r = t(n.el),
                            o = window.siteConf,
                            i = window.ACGN.util,
                            c = '<li class="rank-row {{hover}}">\n            <div class="row-text">\n              <div class="rank-num icon-detail-rank-num-{{num}}">{{numtext}}</div>\n              <p class="name-box"><a href="/{{comic_id}}/" class="name" title="{{comic_name}}" target="_blank">{{comic_name}}</a></p>\n              <div class="hot-num">\n                {{count_num}}\n                <i class="icon-detail-fire"></i>\n              </div>\n            </div>\n            <div class="row-view">\n              <div>\n                <div class="adapt-box">\n                  <a href="/{{comic_id}}/" title="{{comic_name}}" target="_blank">\n                    <div class="pic">\n                      <img src="'.concat(o.staticRoot, 'images/comm/space.gif" class="view-img" data-src="{{img}}" alt="{{comic_name}},{{comic_feature}}漫画" >\n                    </div>\n                  </a>\n                </div>\n                <div class="rank-order icon-detail-rank-{{num-img}}">{{numtext}}</div>\n              </div>\n              <div class="des">\n                <a href="/{{comic_id}}/" class="title" title="{{comic_name}}" target="_blank">{{comic_name}}</a>\n                <p class="desc">\n                  {{comic_feature}}\n                </p>\n                <div class="des-info">\n                  <div class="hot-num">\n                    {{count_num}}\n                    <i class="icon-detail-fire"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>'),
                            u = r.find(".tabs-underline .tab"),
                            a = r.find(".block-container");

                        function f(n, t) {
                            n = n || [];
                            for (var e = 0; e < 10 && e < n.length; e++) {
                                var r = n[e];
                                r.num = e;
                                var u = "";
                                for (var a in u = c.replace(/\{\{num\}\}/g, e + 1), r) {
                                    var f = new RegExp("{{".concat(a, "}}"), "ig");
                                    u = "count_num" === a ? u.replace(f, i.numberToUnitStr(r[a])) : u.replace(f, r[a])
                                }
                                u = (u = (u = (u = u.replace(/\{\{hover\}\}/gi, e < 1 ? "hover" : "")).replace(/\{\{numtext\}\}/gi, e >= 3 ? e + 1 : "")).replace(/\{\{num-img\}\}/gi, e >= 3 ? 4 : e + 1)).replace("{{img}}", o.pathRules.front_cover21.replace("{0}", r.comic_id)), t.append(u)
                            }
                        }

                        function s(n, e) {
                            var r = {
                                isalldata: 0,
                                sort_type: "all",
                                rank_type: "heat",
                                limit: 10,
                                time_type: "week",
                                query_time: ""
                            };
                            n && (r.time_type = n), t.ajax({
                                url: "/api/getRankDataForWeb",
                                type: "get",
                                data: r,
                                success: function (n) {
                                    e && e.call(null, n)
                                }
                            })
                        }
                        // return a.find(".rank-list").empty(), 
                        t.each(u, function (n, e) {
                            var r = t(this),
                                o = r.attr("data-type");
                            r.hasClass("active") && s(o, function (t) {
                                var e = a.eq(n).find(".rank-list");
                                f(t.data, e)
                            })
                        }), u.on("mouseover", function (n) {
                            var e = t(this),
                                r = e.index();
                            if (a.eq(r).find("li").length > 0) u.removeClass("active").eq(r).addClass("active"), a.removeClass("active").eq(r).addClass("active");
                            else {
                                var o = a.eq(r).find(".rank-list");
                                s(e.attr("data-type"), function (n) {
                                    f(n.data, o), u.removeClass("active").eq(r).addClass("active"), a.removeClass("active").eq(r).addClass("active")
                                })
                            }
                        }), r.find(".rank-list").on("mouseover", "li", function () {
                            t(this).addClass("hover").siblings().removeClass("hover")
                        }), !0
                    })
                }()
        }).call(this, e("xeH2"))
    },
    xeH2: function (n, t) {
        n.exports = jQuery
    },
    xpql: function (n, t, e) {
        n.exports = !e("nh4g") && !e("eeVq")(function () {
            return 7 != Object.defineProperty(e("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, t, e) {
        var r = e("0/R4");
        n.exports = function (n) {
            if (!r(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, t) {
        var e = 0,
            r = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++e + r).toString(36))
        }
    },
    zRwo: function (n, t, e) {
        var r = e("6FMO");
        n.exports = function (n, t) {
            return new(r(n))(t)
        }
    },
    zhAb: function (n, t, e) {
        var r = e("aagx"),
            o = e("aCFj"),
            i = e("w2a5")(!1),
            c = e("YTvA")("IE_PROTO");
        n.exports = function (n, t) {
            var e, u = o(n),
                a = 0,
                f = [];
            for (e in u) e != c && r(u, e) && f.push(e);
            for (; t.length > a;) r(u, e = t[a++]) && (~i(f, e) || f.push(e));
            return f
        }
    }
});
! function (n) {
    var t = {};

    function r(e) {
        if (t[e]) return t[e].exports;
        var o = t[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = n, r.c = t, r.d = function (n, t, e) {
        r.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: e
        })
    }, r.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, r.t = function (n, t) {
        if (1 & t && (n = r(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var o in n) r.d(e, o, function (t) {
                return n[t]
            }.bind(null, o));
        return e
    }, r.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return r.d(t, "a", t), t
    }, r.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, r.p = "/", r(r.s = 15)
}({
    "+lvF": function (n, t, r) {
        n.exports = r("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (n, t) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    15: function (n, t, r) {
        n.exports = r("kdzP")
    },
    "2OiF": function (n, t) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    "4R4u": function (n, t) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "6FMO": function (n, t, r) {
        var e = r("0/R4"),
            o = r("EWmC"),
            i = r("K0xU")("species");
        n.exports = function (n) {
            var t;
            return o(n) && ("function" != typeof (t = n.constructor) || t !== Array && !o(t.prototype) || (t = undefined), e(t) && null === (t = t[i]) && (t = undefined)), t === undefined ? Array : t
        }
    },
    "91GP": function (n, t, r) {
        var e = r("XKFU");
        e(e.S + e.F, "Object", {
            assign: r("czNK")
        })
    },
    CkkT: function (n, t, r) {
        var e = r("m0Pp"),
            o = r("Ymqv"),
            i = r("S/j/"),
            u = r("ne8i"),
            c = r("zRwo");
        n.exports = function (n, t) {
            var r = 1 == n,
                f = 2 == n,
                a = 3 == n,
                s = 4 == n,
                p = 6 == n,
                l = 5 == n || p,
                d = t || c;
            return function (t, c, y) {
                for (var v, x, h = i(t), g = o(h), b = e(c, y, 3), w = u(g.length), m = 0, j = r ? d(t, w) : f ? d(t, 0) : undefined; w > m; m++)
                    if ((l || m in g) && (x = b(v = g[m], m, h), n))
                        if (r) j[m] = x;
                        else if (x) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return m;
                    case 2:
                        j.push(v)
                } else if (s) return !1;
                return p ? -1 : a || s ? s : j
            }
        }
    },
    DVgA: function (n, t, r) {
        var e = r("zhAb"),
            o = r("4R4u");
        n.exports = Object.keys || function (n) {
            return e(n, o)
        }
    },
    EWmC: function (n, t, r) {
        var e = r("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == e(n)
        }
    },
    Iw71: function (n, t, r) {
        var e = r("0/R4"),
            o = r("dyZX").document,
            i = e(o) && e(o.createElement);
        n.exports = function (n) {
            return i ? o.createElement(n) : {}
        }
    },
    JiEa: function (n, t) {
        t.f = Object.getOwnPropertySymbols
    },
    K0xU: function (n, t, r) {
        var e = r("VTer")("wks"),
            o = r("ylqs"),
            i = r("dyZX").Symbol,
            u = "function" == typeof i;
        (n.exports = function (n) {
            return e[n] || (e[n] = u && i[n] || (u ? i : o)("Symbol." + n))
        }).store = e
    },
    KroJ: function (n, t, r) {
        var e = r("dyZX"),
            o = r("Mukb"),
            i = r("aagx"),
            u = r("ylqs")("src"),
            c = r("+lvF"),
            f = ("" + c).split("toString");
        r("g3g5").inspectSource = function (n) {
            return c.call(n)
        }, (n.exports = function (n, t, r, c) {
            var a = "function" == typeof r;
            a && (i(r, "name") || o(r, "name", t)), n[t] !== r && (a && (i(r, u) || o(r, u, n[t] ? "" + n[t] : f.join(String(t)))), n === e ? n[t] = r : c ? n[t] ? n[t] = r : o(n, t, r) : (delete n[t], o(n, t, r)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || c.call(this)
        })
    },
    LQAc: function (n, t) {
        n.exports = !1
    },
    LZWt: function (n, t) {
        var r = {}.toString;
        n.exports = function (n) {
            return r.call(n).slice(8, -1)
        }
    },
    Mukb: function (n, t, r) {
        var e = r("hswa"),
            o = r("RjD/");
        n.exports = r("nh4g") ? function (n, t, r) {
            return e.f(n, t, o(1, r))
        } : function (n, t, r) {
            return n[t] = r, n
        }
    },
    RYi7: function (n, t) {
        var r = Math.ceil,
            e = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? e : r)(n)
        }
    },
    "RjD/": function (n, t) {
        n.exports = function (n, t) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: t
            }
        }
    },
    "S/j/": function (n, t, r) {
        var e = r("vhPU");
        n.exports = function (n) {
            return Object(e(n))
        }
    },
    UqcF: function (n, t) {
        t.f = {}.propertyIsEnumerable
    },
    VTer: function (n, t, r) {
        var e = r("g3g5"),
            o = r("dyZX"),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (n.exports = function (n, t) {
            return i[n] || (i[n] = t !== undefined ? t : {})
        })("versions", []).push({
            version: e.version,
            mode: r("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, t, r) {
        var e = r("dyZX"),
            o = r("g3g5"),
            i = r("Mukb"),
            u = r("KroJ"),
            c = r("m0Pp"),
            f = function (n, t, r) {
                var a, s, p, l, d = n & f.F,
                    y = n & f.G,
                    v = n & f.S,
                    x = n & f.P,
                    h = n & f.B,
                    g = y ? e : v ? e[t] || (e[t] = {}) : (e[t] || {}).prototype,
                    b = y ? o : o[t] || (o[t] = {}),
                    w = b.prototype || (b.prototype = {});
                for (a in y && (r = t), r) p = ((s = !d && g && g[a] !== undefined) ? g : r)[a], l = h && s ? c(p, e) : x && "function" == typeof p ? c(Function.call, p) : p, g && u(g, a, p, n & f.U), b[a] != p && i(b, a, l), x && w[a] != p && (w[a] = p)
            };
        e.core = o, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, n.exports = f
    },
    YTvA: function (n, t, r) {
        var e = r("VTer")("keys"),
            o = r("ylqs");
        n.exports = function (n) {
            return e[n] || (e[n] = o(n))
        }
    },
    Ymqv: function (n, t, r) {
        var e = r("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == e(n) ? n.split("") : Object(n)
        }
    },
    aCFj: function (n, t, r) {
        var e = r("Ymqv"),
            o = r("vhPU");
        n.exports = function (n) {
            return e(o(n))
        }
    },
    aagx: function (n, t) {
        var r = {}.hasOwnProperty;
        n.exports = function (n, t) {
            return r.call(n, t)
        }
    },
    apmT: function (n, t, r) {
        var e = r("0/R4");
        n.exports = function (n, t) {
            if (!e(n)) return n;
            var r, o;
            if (t && "function" == typeof (r = n.toString) && !e(o = r.call(n))) return o;
            if ("function" == typeof (r = n.valueOf) && !e(o = r.call(n))) return o;
            if (!t && "function" == typeof (r = n.toString) && !e(o = r.call(n))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    czNK: function (n, t, r) {
        "use strict";
        var e = r("nh4g"),
            o = r("DVgA"),
            i = r("JiEa"),
            u = r("UqcF"),
            c = r("S/j/"),
            f = r("Ymqv"),
            a = Object.assign;
        n.exports = !a || r("eeVq")(function () {
            var n = {},
                t = {},
                r = Symbol(),
                e = "abcdefghijklmnopqrst";
            return n[r] = 7, e.split("").forEach(function (n) {
                t[n] = n
            }), 7 != a({}, n)[r] || Object.keys(a({}, t)).join("") != e
        }) ? function (n, t) {
            for (var r = c(n), a = arguments.length, s = 1, p = i.f, l = u.f; a > s;)
                for (var d, y = f(arguments[s++]), v = p ? o(y).concat(p(y)) : o(y), x = v.length, h = 0; x > h;) d = v[h++], e && !l.call(y, d) || (r[d] = y[d]);
            return r
        } : a
    },
    "d/Gc": function (n, t, r) {
        var e = r("RYi7"),
            o = Math.max,
            i = Math.min;
        n.exports = function (n, t) {
            return (n = e(n)) < 0 ? o(n + t, 0) : i(n, t)
        }
    },
    dRSK: function (n, t, r) {
        "use strict";
        var e = r("XKFU"),
            o = r("CkkT")(5),
            i = !0;
        "find" in [] && Array(1).find(function () {
            i = !1
        }), e(e.P + e.F * i, "Array", {
            find: function (n) {
                return o(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), r("nGyu")("find")
    },
    dyZX: function (n, t) {
        var r = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    },
    eeVq: function (n, t) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (t) {
                return !0
            }
        }
    },
    g3g5: function (n, t) {
        var r = n.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = r)
    },
    hswa: function (n, t, r) {
        var e = r("y3w9"),
            o = r("xpql"),
            i = r("apmT"),
            u = Object.defineProperty;
        t.f = r("nh4g") ? Object.defineProperty : function (n, t, r) {
            if (e(n), t = i(t, !0), e(r), o) try {
                return u(n, t, r)
            } catch (c) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (n[t] = r.value), n
        }
    },
    kdzP: function (n, t, r) {
        "use strict";
        (function (n) {
            r("91GP"), r("dRSK"), r("s6Ox"),
                function () {
                    window.ACGN, undefined;
                    var t = window,
                        r = n,
                        e = t.Swiper;
                    window.ACGN.model.register("detail-review", {
                        desc: "一行6个带波浪遮罩的漫画单元格",
                        resource: "swiper-15",
                        tags: []
                    }, function (n, t) {
                        var o = r(n.el),
                            i = n.cls,
                            u = null;
                        return o.find(".swiper-area").show(), u = new e("." + i + " .swiper-container", {
                            centeredSlides: !0,
                            calculateHeight: !0,
                            autoplay: !1,
                            loop: !0,
                            speed: 0
                        }), o.find(".change").on("click", function () {
                            u.swipeNext()
                        }), Object.assign(n, {
                            swiper: u
                        }), !0
                    })
                }()
        }).call(this, r("xeH2"))
    },
    m0Pp: function (n, t, r) {
        var e = r("2OiF");
        n.exports = function (n, t, r) {
            if (e(n), t === undefined) return n;
            switch (r) {
                case 1:
                    return function (r) {
                        return n.call(t, r)
                    };
                case 2:
                    return function (r, e) {
                        return n.call(t, r, e)
                    };
                case 3:
                    return function (r, e, o) {
                        return n.call(t, r, e, o)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }
    },
    nGyu: function (n, t, r) {
        var e = r("K0xU")("unscopables"),
            o = Array.prototype;
        o[e] == undefined && r("Mukb")(o, e, {}), n.exports = function (n) {
            o[e][n] = !0
        }
    },
    ne8i: function (n, t, r) {
        var e = r("RYi7"),
            o = Math.min;
        n.exports = function (n) {
            return n > 0 ? o(e(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, t, r) {
        n.exports = !r("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    s6Ox: function (n, t, r) {},
    vhPU: function (n, t) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    w2a5: function (n, t, r) {
        var e = r("aCFj"),
            o = r("ne8i"),
            i = r("d/Gc");
        n.exports = function (n) {
            return function (t, r, u) {
                var c, f = e(t),
                    a = o(f.length),
                    s = i(u, a);
                if (n && r != r) {
                    for (; a > s;)
                        if ((c = f[s++]) != c) return !0
                } else
                    for (; a > s; s++)
                        if ((n || s in f) && f[s] === r) return n || s || 0;
                return !n && -1
            }
        }
    },
    xeH2: function (n, t) {
        n.exports = jQuery
    },
    xpql: function (n, t, r) {
        n.exports = !r("nh4g") && !r("eeVq")(function () {
            return 7 != Object.defineProperty(r("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, t, r) {
        var e = r("0/R4");
        n.exports = function (n) {
            if (!e(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, t) {
        var r = 0,
            e = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++r + e).toString(36))
        }
    },
    zRwo: function (n, t, r) {
        var e = r("6FMO");
        n.exports = function (n, t) {
            return new(e(n))(t)
        }
    },
    zhAb: function (n, t, r) {
        var e = r("aagx"),
            o = r("aCFj"),
            i = r("w2a5")(!1),
            u = r("YTvA")("IE_PROTO");
        n.exports = function (n, t) {
            var r, c = o(n),
                f = 0,
                a = [];
            for (r in c) r != u && e(c, r) && a.push(r);
            for (; t.length > f;) e(c, r = t[f++]) && (~i(a, r) || a.push(r));
            return a
        }
    }
});
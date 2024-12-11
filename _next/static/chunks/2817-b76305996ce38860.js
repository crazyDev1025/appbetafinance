(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2817], {
        98910: function(e) {
            var t, r, n, o, i, a, s, u, l, c, d, f, p, h, g, v, m, y, w, x, b, $;
            e.exports = (t = "millisecond", r = "second", n = "minute", o = "hour", i = "week", a = "month", s = "quarter", u = "year", l = "date", c = "Invalid Date", d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, p = function(e, t, r) {
                var n = String(e);
                return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(r) + e
            }, (g = {})[h = "en"] = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(e) {
                    var t = ["th", "st", "nd", "rd"],
                        r = e % 100;
                    return "[" + e + (t[(r - 20) % 10] || t[r] || "th") + "]"
                }
            }, v = "$isDayjsObject", m = function(e) {
                return e instanceof b || !(!e || !e[v])
            }, y = function e(t, r, n) {
                var o;
                if (!t) return h;
                if ("string" == typeof t) {
                    var i = t.toLowerCase();
                    g[i] && (o = i), r && (g[i] = r, o = i);
                    var a = t.split("-");
                    if (!o && a.length > 1) return e(a[0])
                } else {
                    var s = t.name;
                    g[s] = t, o = s
                }
                return !n && o && (h = o), o || !n && h
            }, w = function(e, t) {
                if (m(e)) return e.clone();
                var r = "object" == typeof t ? t : {};
                return r.date = e, r.args = arguments, new b(r)
            }, (x = {
                s: p,
                z: function(e) {
                    var t = -e.utcOffset(),
                        r = Math.abs(t);
                    return (t <= 0 ? "+" : "-") + p(Math.floor(r / 60), 2, "0") + ":" + p(r % 60, 2, "0")
                },
                m: function e(t, r) {
                    if (t.date() < r.date()) return -e(r, t);
                    var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                        o = t.clone().add(n, a),
                        i = r - o < 0,
                        s = t.clone().add(n + (i ? -1 : 1), a);
                    return +(-(n + (r - o) / (i ? o - s : s - o)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(e) {
                    return ({
                        M: a,
                        y: u,
                        w: i,
                        d: "day",
                        D: l,
                        h: o,
                        m: n,
                        s: r,
                        ms: t,
                        Q: s
                    })[e] || String(e || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            }).l = y, x.i = m, x.w = function(e, t) {
                return w(e, {
                    locale: t.$L,
                    utc: t.$u,
                    x: t.$x,
                    $offset: t.$offset
                })
            }, $ = (b = function() {
                function e(e) {
                    this.$L = y(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[v] = !0
                }
                var p = e.prototype;
                return p.parse = function(e) {
                    this.$d = function(e) {
                        var t = e.date,
                            r = e.utc;
                        if (null === t) return new Date(NaN);
                        if (x.u(t)) return new Date;
                        if (t instanceof Date) return new Date(t);
                        if ("string" == typeof t && !/Z$/i.test(t)) {
                            var n = t.match(d);
                            if (n) {
                                var o = n[2] - 1 || 0,
                                    i = (n[7] || "0").substring(0, 3);
                                return r ? new Date(Date.UTC(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i)) : new Date(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i)
                            }
                        }
                        return new Date(t)
                    }(e), this.init()
                }, p.init = function() {
                    var e = this.$d;
                    this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                }, p.$utils = function() {
                    return x
                }, p.isValid = function() {
                    return this.$d.toString() !== c
                }, p.isSame = function(e, t) {
                    var r = w(e);
                    return this.startOf(t) <= r && r <= this.endOf(t)
                }, p.isAfter = function(e, t) {
                    return w(e) < this.startOf(t)
                }, p.isBefore = function(e, t) {
                    return this.endOf(t) < w(e)
                }, p.$g = function(e, t, r) {
                    return x.u(e) ? this[t] : this.set(r, e)
                }, p.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, p.valueOf = function() {
                    return this.$d.getTime()
                }, p.startOf = function(e, t) {
                    var s = this,
                        c = !!x.u(t) || t,
                        d = x.p(e),
                        f = function(e, t) {
                            var r = x.w(s.$u ? Date.UTC(s.$y, t, e) : new Date(s.$y, t, e), s);
                            return c ? r : r.endOf("day")
                        },
                        p = function(e, t) {
                            return x.w(s.toDate()[e].apply(s.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), s)
                        },
                        h = this.$W,
                        g = this.$M,
                        v = this.$D,
                        m = "set" + (this.$u ? "UTC" : "");
                    switch (d) {
                        case u:
                            return c ? f(1, 0) : f(31, 11);
                        case a:
                            return c ? f(1, g) : f(0, g + 1);
                        case i:
                            var y = this.$locale().weekStart || 0,
                                w = (h < y ? h + 7 : h) - y;
                            return f(c ? v - w : v + (6 - w), g);
                        case "day":
                        case l:
                            return p(m + "Hours", 0);
                        case o:
                            return p(m + "Minutes", 1);
                        case n:
                            return p(m + "Seconds", 2);
                        case r:
                            return p(m + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, p.endOf = function(e) {
                    return this.startOf(e, !1)
                }, p.$set = function(e, i) {
                    var s, c = x.p(e),
                        d = "set" + (this.$u ? "UTC" : ""),
                        f = ((s = {}).day = d + "Date", s[l] = d + "Date", s[a] = d + "Month", s[u] = d + "FullYear", s[o] = d + "Hours", s[n] = d + "Minutes", s[r] = d + "Seconds", s[t] = d + "Milliseconds", s)[c],
                        p = "day" === c ? this.$D + (i - this.$W) : i;
                    if (c === a || c === u) {
                        var h = this.clone().set(l, 1);
                        h.$d[f](p), h.init(), this.$d = h.set(l, Math.min(this.$D, h.daysInMonth())).$d
                    } else f && this.$d[f](p);
                    return this.init(), this
                }, p.set = function(e, t) {
                    return this.clone().$set(e, t)
                }, p.get = function(e) {
                    return this[x.p(e)]()
                }, p.add = function(e, t) {
                    var s, l = this;
                    e = Number(e);
                    var c = x.p(t),
                        d = function(t) {
                            var r = w(l);
                            return x.w(r.date(r.date() + Math.round(t * e)), l)
                        };
                    if (c === a) return this.set(a, this.$M + e);
                    if (c === u) return this.set(u, this.$y + e);
                    if ("day" === c) return d(1);
                    if (c === i) return d(7);
                    var f = ((s = {})[n] = 6e4, s[o] = 36e5, s[r] = 1e3, s)[c] || 1,
                        p = this.$d.getTime() + e * f;
                    return x.w(p, this)
                }, p.subtract = function(e, t) {
                    return this.add(-1 * e, t)
                }, p.format = function(e) {
                    var t = this,
                        r = this.$locale();
                    if (!this.isValid()) return r.invalidDate || c;
                    var n = e || "YYYY-MM-DDTHH:mm:ssZ",
                        o = x.z(this),
                        i = this.$H,
                        a = this.$m,
                        s = this.$M,
                        u = r.weekdays,
                        l = r.months,
                        d = r.meridiem,
                        p = function(e, r, o, i) {
                            return e && (e[r] || e(t, n)) || o[r].slice(0, i)
                        },
                        h = function(e) {
                            return x.s(i % 12 || 12, e, "0")
                        },
                        g = d || function(e, t, r) {
                            var n = e < 12 ? "AM" : "PM";
                            return r ? n.toLowerCase() : n
                        };
                    return n.replace(f, function(e, n) {
                        return n || function(e) {
                            switch (e) {
                                case "YY":
                                    return String(t.$y).slice(-2);
                                case "YYYY":
                                    return x.s(t.$y, 4, "0");
                                case "M":
                                    return s + 1;
                                case "MM":
                                    return x.s(s + 1, 2, "0");
                                case "MMM":
                                    return p(r.monthsShort, s, l, 3);
                                case "MMMM":
                                    return p(l, s);
                                case "D":
                                    return t.$D;
                                case "DD":
                                    return x.s(t.$D, 2, "0");
                                case "d":
                                    return String(t.$W);
                                case "dd":
                                    return p(r.weekdaysMin, t.$W, u, 2);
                                case "ddd":
                                    return p(r.weekdaysShort, t.$W, u, 3);
                                case "dddd":
                                    return u[t.$W];
                                case "H":
                                    return String(i);
                                case "HH":
                                    return x.s(i, 2, "0");
                                case "h":
                                    return h(1);
                                case "hh":
                                    return h(2);
                                case "a":
                                    return g(i, a, !0);
                                case "A":
                                    return g(i, a, !1);
                                case "m":
                                    return String(a);
                                case "mm":
                                    return x.s(a, 2, "0");
                                case "s":
                                    return String(t.$s);
                                case "ss":
                                    return x.s(t.$s, 2, "0");
                                case "SSS":
                                    return x.s(t.$ms, 3, "0");
                                case "Z":
                                    return o
                            }
                            return null
                        }(e) || o.replace(":", "")
                    })
                }, p.utcOffset = function() {
                    return -(15 * Math.round(this.$d.getTimezoneOffset() / 15))
                }, p.diff = function(e, t, l) {
                    var c, d = this,
                        f = x.p(t),
                        p = w(e),
                        h = (p.utcOffset() - this.utcOffset()) * 6e4,
                        g = this - p,
                        v = function() {
                            return x.m(d, p)
                        };
                    switch (f) {
                        case u:
                            c = v() / 12;
                            break;
                        case a:
                            c = v();
                            break;
                        case s:
                            c = v() / 3;
                            break;
                        case i:
                            c = (g - h) / 6048e5;
                            break;
                        case "day":
                            c = (g - h) / 864e5;
                            break;
                        case o:
                            c = g / 36e5;
                            break;
                        case n:
                            c = g / 6e4;
                            break;
                        case r:
                            c = g / 1e3;
                            break;
                        default:
                            c = g
                    }
                    return l ? c : x.a(c)
                }, p.daysInMonth = function() {
                    return this.endOf(a).$D
                }, p.$locale = function() {
                    return g[this.$L]
                }, p.locale = function(e, t) {
                    if (!e) return this.$L;
                    var r = this.clone(),
                        n = y(e, t, !0);
                    return n && (r.$L = n), r
                }, p.clone = function() {
                    return x.w(this.$d, this)
                }, p.toDate = function() {
                    return new Date(this.valueOf())
                }, p.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, p.toISOString = function() {
                    return this.$d.toISOString()
                }, p.toString = function() {
                    return this.$d.toUTCString()
                }, e
            }()).prototype, w.prototype = $, [
                ["$ms", t],
                ["$s", r],
                ["$m", n],
                ["$H", o],
                ["$W", "day"],
                ["$M", a],
                ["$y", u],
                ["$D", l]
            ].forEach(function(e) {
                $[e[1]] = function(t) {
                    return this.$g(t, e[0], e[1])
                }
            }), w.extend = function(e, t) {
                return e.$i || (e(t, b, w), e.$i = !0), w
            }, w.locale = y, w.isDayjs = m, w.unix = function(e) {
                return w(1e3 * e)
            }, w.en = g[h], w.Ls = g, w.p = {}, w)
        },
        38684: function(e, t, r) {
            var n = r(53730)("length");
            e.exports = n
        },
        61504: function(e, t, r) {
            var n = r(19311),
                o = r(94325),
                i = r(7153),
                a = r(78480),
                s = r(6937),
                u = r(50866),
                l = Math.ceil;
            e.exports = function(e, t) {
                var r = (t = void 0 === t ? " " : o(t)).length;
                if (r < 2) return r ? n(t, e) : t;
                var c = n(t, l(e / s(t)));
                return a(t) ? i(u(c), 0, e).join("") : c.slice(0, e)
            }
        },
        6937: function(e, t, r) {
            var n = r(38684),
                o = r(78480),
                i = r(49510);
            e.exports = function(e) {
                return o(e) ? i(e) : n(e)
            }
        },
        49510: function(e) {
            var t = "\ud800-\udfff",
                r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                n = "\ud83c[\udffb-\udfff]",
                o = "[^" + t + "]",
                i = "(?:\ud83c[\udde6-\uddff]){2}",
                a = "[\ud800-\udbff][\udc00-\udfff]",
                s = "(?:" + r + "|" + n + ")?",
                u = "[\\ufe0e\\ufe0f]?",
                l = "(?:\\u200d(?:" + [o, i, a].join("|") + ")" + u + s + ")*",
                c = RegExp(n + "(?=" + n + ")|(?:" + [o + r + "?", r, i, a, "[" + t + "]"].join("|") + ")" + (u + s + l), "g");
            e.exports = function(e) {
                for (var t = c.lastIndex = 0; c.test(e);) ++t;
                return t
            }
        },
        49451: function(e, t, r) {
            var n = r(61504),
                o = r(6937),
                i = r(68969),
                a = r(56798);
            e.exports = function(e, t, r) {
                e = a(e);
                var s = (t = i(t)) ? o(e) : 0;
                return t && s < t ? n(t - s, r) + e : e
            }
        },
        84844: function(e, t, r) {
            "use strict";
            r.d(t, {
                Eh: function() {
                    return ed
                },
                VY: function() {
                    return ec
                },
                h_: function() {
                    return el
                },
                zt: function() {
                    return ea
                },
                fC: function() {
                    return es
                },
                xz: function() {
                    return eu
                }
            });
            var n = r(27198),
                o = r(2265),
                i = r(21082),
                a = r(88556),
                s = r(46341),
                u = r(48646),
                l = r(36303),
                c = r(82744),
                d = r(94126),
                f = r(38209),
                p = r(28),
                h = r(38671),
                g = r(16418),
                v = r(41469),
                m = r(29427);
            let y = "Popper",
                [w, x] = (0, s.b)(y),
                [b, $] = w(y),
                M = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopePopper: r,
                        virtualRef: i,
                        ...s
                    } = e, u = $("PopperAnchor", r), l = (0, o.useRef)(null), c = (0, a.e)(t, l);
                    return (0, o.useEffect)(() => {
                        u.onAnchorChange((null == i ? void 0 : i.current) || l.current)
                    }), i ? null : (0, o.createElement)(h.WV.div, (0, n.Z)({}, s, {
                        ref: c
                    }))
                }),
                E = "PopperContent",
                [C, D] = w(E),
                T = (0, o.forwardRef)((e, t) => {
                    var r, i, s, u, l, p, y, w;
                    let {
                        __scopePopper: x,
                        side: b = "bottom",
                        sideOffset: M = 0,
                        align: D = "center",
                        alignOffset: T = 0,
                        arrowPadding: _ = 0,
                        avoidCollisions: S = !0,
                        collisionBoundary: A = [],
                        collisionPadding: R = 0,
                        sticky: H = "partial",
                        hideWhenDetached: L = !1,
                        updatePositionStrategy: Y = "optimized",
                        onPlaced: W,
                        ...I
                    } = e, Z = $(E, x), [z, F] = (0, o.useState)(null), j = (0, a.e)(t, e => F(e)), [B, V] = (0, o.useState)(null), N = (0, m.t)(B), X = null !== (r = null == N ? void 0 : N.width) && void 0 !== r ? r : 0, U = null !== (i = null == N ? void 0 : N.height) && void 0 !== i ? i : 0, J = "number" == typeof R ? R : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...R
                    }, K = Array.isArray(A) ? A : [A], q = K.length > 0, Q = {
                        padding: J,
                        boundary: K.filter(O),
                        altBoundary: q
                    }, {
                        refs: G,
                        floatingStyles: ee,
                        placement: et,
                        isPositioned: er,
                        middlewareData: en
                    } = (0, c.YF)({
                        strategy: "fixed",
                        placement: b + ("center" !== D ? "-" + D : ""),
                        whileElementsMounted: (...e) => {
                            let t = (0, d.Me)(...e, {
                                animationFrame: "always" === Y
                            });
                            return t
                        },
                        elements: {
                            reference: Z.anchor
                        },
                        middleware: [(0, f.cv)({
                            mainAxis: M + U,
                            alignmentAxis: T
                        }), S && (0, f.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === H ? (0, f.dr)() : void 0,
                            ...Q
                        }), S && (0, f.RR)({ ...Q
                        }), (0, f.dp)({ ...Q,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: r,
                                availableHeight: n
                            }) => {
                                let {
                                    width: o,
                                    height: i
                                } = t.reference, a = e.floating.style;
                                a.setProperty("--radix-popper-available-width", `${r}px`), a.setProperty("--radix-popper-available-height", `${n}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), B && (0, c.x7)({
                            element: B,
                            padding: _
                        }), k({
                            arrowWidth: X,
                            arrowHeight: U
                        }), L && (0, f.Cp)({
                            strategy: "referenceHidden",
                            ...Q
                        })]
                    }), [eo, ei] = P(et), ea = (0, g.W)(W);
                    (0, v.b)(() => {
                        er && (null == ea || ea())
                    }, [er, ea]);
                    let es = null === (s = en.arrow) || void 0 === s ? void 0 : s.x,
                        eu = null === (u = en.arrow) || void 0 === u ? void 0 : u.y,
                        el = (null === (l = en.arrow) || void 0 === l ? void 0 : l.centerOffset) !== 0,
                        [ec, ed] = (0, o.useState)();
                    return (0, v.b)(() => {
                        z && ed(window.getComputedStyle(z).zIndex)
                    }, [z]), (0, o.createElement)("div", {
                        ref: G.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...ee,
                            transform: er ? ee.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: ec,
                            "--radix-popper-transform-origin": [null === (p = en.transformOrigin) || void 0 === p ? void 0 : p.x, null === (y = en.transformOrigin) || void 0 === y ? void 0 : y.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, o.createElement)(C, {
                        scope: x,
                        placedSide: eo,
                        onArrowChange: V,
                        arrowX: es,
                        arrowY: eu,
                        shouldHideArrow: el
                    }, (0, o.createElement)(h.WV.div, (0, n.Z)({
                        "data-side": eo,
                        "data-align": ei
                    }, I, {
                        ref: j,
                        style: { ...I.style,
                            animation: er ? void 0 : "none",
                            opacity: null !== (w = en.hide) && void 0 !== w && w.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                _ = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                S = (0, o.forwardRef)(function(e, t) {
                    let {
                        __scopePopper: r,
                        ...i
                    } = e, a = D("PopperArrow", r), s = _[a.placedSide];
                    return (0, o.createElement)("span", {
                        ref: a.onArrowChange,
                        style: {
                            position: "absolute",
                            left: a.arrowX,
                            top: a.arrowY,
                            [s]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[a.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[a.placedSide],
                            visibility: a.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, o.createElement)(p.f, (0, n.Z)({}, i, {
                        ref: t,
                        style: { ...i.style,
                            display: "block"
                        }
                    })))
                });

            function O(e) {
                return null !== e
            }
            let k = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var r, n, o, i, a;
                    let {
                        placement: s,
                        rects: u,
                        middlewareData: l
                    } = t, c = (null === (r = l.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0, d = c ? 0 : e.arrowWidth, f = c ? 0 : e.arrowHeight, [p, h] = P(s), g = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], v = (null !== (n = null === (o = l.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== n ? n : 0) + d / 2, m = (null !== (i = null === (a = l.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== i ? i : 0) + f / 2, y = "", w = "";
                    return "bottom" === p ? (y = c ? g : `${v}px`, w = `${-f}px`) : "top" === p ? (y = c ? g : `${v}px`, w = `${u.floating.height+f}px`) : "right" === p ? (y = `${-f}px`, w = c ? g : `${m}px`) : "left" === p && (y = `${u.floating.width+f}px`, w = c ? g : `${m}px`), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function P(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r]
            }
            let A = e => {
                let {
                    __scopePopper: t,
                    children: r
                } = e, [n, i] = (0, o.useState)(null);
                return (0, o.createElement)(b, {
                    scope: t,
                    anchor: n,
                    onAnchorChange: i
                }, r)
            };
            var R = r(42268),
                H = r(7575),
                L = r(50432),
                Y = r(37840);
            let W = (0, o.forwardRef)((e, t) => (0, o.createElement)(h.WV.span, (0, n.Z)({}, e, {
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }))),
                [I, Z] = (0, s.b)("Tooltip", [x]),
                z = x(),
                F = "tooltip.open",
                [j, B] = I("TooltipProvider"),
                V = "Tooltip",
                [N, X] = I(V),
                U = "TooltipTrigger",
                J = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: r,
                        ...s
                    } = e, u = X(U, r), l = B(U, r), c = z(r), d = (0, o.useRef)(null), f = (0, a.e)(t, d, u.onTriggerChange), p = (0, o.useRef)(!1), g = (0, o.useRef)(!1), v = (0, o.useCallback)(() => p.current = !1, []);
                    return (0, o.useEffect)(() => () => document.removeEventListener("pointerup", v), [v]), (0, o.createElement)(M, (0, n.Z)({
                        asChild: !0
                    }, c), (0, o.createElement)(h.WV.button, (0, n.Z)({
                        "aria-describedby": u.open ? u.contentId : void 0,
                        "data-state": u.stateAttribute
                    }, s, {
                        ref: f,
                        onPointerMove: (0, i.M)(e.onPointerMove, e => {
                            "touch" === e.pointerType || g.current || l.isPointerInTransitRef.current || (u.onTriggerEnter(), g.current = !0)
                        }),
                        onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                            u.onTriggerLeave(), g.current = !1
                        }),
                        onPointerDown: (0, i.M)(e.onPointerDown, () => {
                            p.current = !0, document.addEventListener("pointerup", v, {
                                once: !0
                            })
                        }),
                        onFocus: (0, i.M)(e.onFocus, () => {
                            p.current || u.onOpen()
                        }),
                        onBlur: (0, i.M)(e.onBlur, u.onClose),
                        onClick: (0, i.M)(e.onClick, u.onClose)
                    })))
                }),
                K = "TooltipPortal",
                [q, Q] = I(K, {
                    forceMount: void 0
                }),
                G = "TooltipContent",
                ee = (0, o.forwardRef)((e, t) => {
                    let r = Q(G, e.__scopeTooltip),
                        {
                            forceMount: i = r.forceMount,
                            side: a = "top",
                            ...s
                        } = e,
                        u = X(G, e.__scopeTooltip);
                    return (0, o.createElement)(H.z, {
                        present: i || u.open
                    }, u.disableHoverableContent ? (0, o.createElement)(eo, (0, n.Z)({
                        side: a
                    }, s, {
                        ref: t
                    })) : (0, o.createElement)(et, (0, n.Z)({
                        side: a
                    }, s, {
                        ref: t
                    })))
                }),
                et = (0, o.forwardRef)((e, t) => {
                    let r = X(G, e.__scopeTooltip),
                        i = B(G, e.__scopeTooltip),
                        s = (0, o.useRef)(null),
                        u = (0, a.e)(t, s),
                        [l, c] = (0, o.useState)(null),
                        {
                            trigger: d,
                            onClose: f
                        } = r,
                        p = s.current,
                        {
                            onPointerInTransitChange: h
                        } = i,
                        g = (0, o.useCallback)(() => {
                            c(null), h(!1)
                        }, [h]),
                        v = (0, o.useCallback)((e, t) => {
                            let r = e.currentTarget,
                                n = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let r = Math.abs(t.top - e.y),
                                        n = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        i = Math.abs(t.left - e.x);
                                    switch (Math.min(r, n, o, i)) {
                                        case i:
                                            return "left";
                                        case o:
                                            return "right";
                                        case r:
                                            return "top";
                                        case n:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(n, r.getBoundingClientRect()),
                                i = function(e, t, r = 5) {
                                    let n = [];
                                    switch (t) {
                                        case "top":
                                            n.push({
                                                x: e.x - r,
                                                y: e.y + r
                                            }, {
                                                x: e.x + r,
                                                y: e.y + r
                                            });
                                            break;
                                        case "bottom":
                                            n.push({
                                                x: e.x - r,
                                                y: e.y - r
                                            }, {
                                                x: e.x + r,
                                                y: e.y - r
                                            });
                                            break;
                                        case "left":
                                            n.push({
                                                x: e.x + r,
                                                y: e.y - r
                                            }, {
                                                x: e.x + r,
                                                y: e.y + r
                                            });
                                            break;
                                        case "right":
                                            n.push({
                                                x: e.x - r,
                                                y: e.y - r
                                            }, {
                                                x: e.x - r,
                                                y: e.y + r
                                            })
                                    }
                                    return n
                                }(n, o),
                                a = function(e) {
                                    let {
                                        top: t,
                                        right: r,
                                        bottom: n,
                                        left: o
                                    } = e;
                                    return [{
                                        x: o,
                                        y: t
                                    }, {
                                        x: r,
                                        y: t
                                    }, {
                                        x: r,
                                        y: n
                                    }, {
                                        x: o,
                                        y: n
                                    }]
                                }(t.getBoundingClientRect()),
                                s = function(e) {
                                    let t = e.slice();
                                    return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                        function(e) {
                                            if (e.length <= 1) return e.slice();
                                            let t = [];
                                            for (let r = 0; r < e.length; r++) {
                                                let n = e[r];
                                                for (; t.length >= 2;) {
                                                    let e = t[t.length - 1],
                                                        r = t[t.length - 2];
                                                    if ((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();
                                                    else break
                                                }
                                                t.push(n)
                                            }
                                            t.pop();
                                            let r = [];
                                            for (let t = e.length - 1; t >= 0; t--) {
                                                let n = e[t];
                                                for (; r.length >= 2;) {
                                                    let e = r[r.length - 1],
                                                        t = r[r.length - 2];
                                                    if ((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x)) r.pop();
                                                    else break
                                                }
                                                r.push(n)
                                            }
                                            return (r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y) ? t : t.concat(r)
                                        }(t)
                                }([...i, ...a]);
                            c(s), h(!0)
                        }, [h]);
                    return (0, o.useEffect)(() => () => g(), [g]), (0, o.useEffect)(() => {
                        if (d && p) {
                            let e = e => v(e, p),
                                t = e => v(e, d);
                            return d.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
                                d.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [d, p, v, g]), (0, o.useEffect)(() => {
                        if (l) {
                            let e = e => {
                                let t = e.target,
                                    r = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    n = (null == d ? void 0 : d.contains(t)) || (null == p ? void 0 : p.contains(t)),
                                    o = ! function(e, t) {
                                        let {
                                            x: r,
                                            y: n
                                        } = e, o = !1;
                                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                            let a = t[e].x,
                                                s = t[e].y,
                                                u = t[i].x,
                                                l = t[i].y,
                                                c = s > n != l > n && r < (u - a) * (n - s) / (l - s) + a;
                                            c && (o = !o)
                                        }
                                        return o
                                    }(r, l);
                                n ? g() : o && (g(), f())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [d, p, l, f, g]), (0, o.createElement)(eo, (0, n.Z)({}, e, {
                        ref: u
                    }))
                }),
                [er, en] = I(V, {
                    isInside: !1
                }),
                eo = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: r,
                        children: i,
                        "aria-label": a,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: l,
                        ...c
                    } = e, d = X(G, r), f = z(r), {
                        onClose: p
                    } = d;
                    return (0, o.useEffect)(() => (document.addEventListener(F, p), () => document.removeEventListener(F, p)), [p]), (0, o.useEffect)(() => {
                        if (d.trigger) {
                            let e = e => {
                                let t = e.target;
                                null != t && t.contains(d.trigger) && p()
                            };
                            return window.addEventListener("scroll", e, {
                                capture: !0
                            }), () => window.removeEventListener("scroll", e, {
                                capture: !0
                            })
                        }
                    }, [d.trigger, p]), (0, o.createElement)(u.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: l,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: p
                    }, (0, o.createElement)(T, (0, n.Z)({
                        "data-state": d.stateAttribute
                    }, f, c, {
                        ref: t,
                        style: { ...c.style,
                            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }), (0, o.createElement)(L.A4, null, i), (0, o.createElement)(er, {
                        scope: r,
                        isInside: !0
                    }, (0, o.createElement)(W, {
                        id: d.contentId,
                        role: "tooltip"
                    }, a || i))))
                }),
                ei = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: r,
                        ...i
                    } = e, a = z(r), s = en("TooltipArrow", r);
                    return s.isInside ? null : (0, o.createElement)(S, (0, n.Z)({}, a, i, {
                        ref: t
                    }))
                }),
                ea = e => {
                    let {
                        __scopeTooltip: t,
                        delayDuration: r = 700,
                        skipDelayDuration: n = 300,
                        disableHoverableContent: i = !1,
                        children: a
                    } = e, [s, u] = (0, o.useState)(!0), l = (0, o.useRef)(!1), c = (0, o.useRef)(0);
                    return (0, o.useEffect)(() => {
                        let e = c.current;
                        return () => window.clearTimeout(e)
                    }, []), (0, o.createElement)(j, {
                        scope: t,
                        isOpenDelayed: s,
                        delayDuration: r,
                        onOpen: (0, o.useCallback)(() => {
                            window.clearTimeout(c.current), u(!1)
                        }, []),
                        onClose: (0, o.useCallback)(() => {
                            window.clearTimeout(c.current), c.current = window.setTimeout(() => u(!0), n)
                        }, [n]),
                        isPointerInTransitRef: l,
                        onPointerInTransitChange: (0, o.useCallback)(e => {
                            l.current = e
                        }, []),
                        disableHoverableContent: i
                    }, a)
                },
                es = e => {
                    let {
                        __scopeTooltip: t,
                        children: r,
                        open: n,
                        defaultOpen: i = !1,
                        onOpenChange: a,
                        disableHoverableContent: s,
                        delayDuration: u
                    } = e, c = B(V, e.__scopeTooltip), d = z(t), [f, p] = (0, o.useState)(null), h = (0, l.M)(), g = (0, o.useRef)(0), v = null != s ? s : c.disableHoverableContent, m = null != u ? u : c.delayDuration, y = (0, o.useRef)(!1), [w = !1, x] = (0, Y.T)({
                        prop: n,
                        defaultProp: i,
                        onChange: e => {
                            e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(F))) : c.onClose(), null == a || a(e)
                        }
                    }), b = (0, o.useMemo)(() => w ? y.current ? "delayed-open" : "instant-open" : "closed", [w]), $ = (0, o.useCallback)(() => {
                        window.clearTimeout(g.current), y.current = !1, x(!0)
                    }, [x]), M = (0, o.useCallback)(() => {
                        window.clearTimeout(g.current), x(!1)
                    }, [x]), E = (0, o.useCallback)(() => {
                        window.clearTimeout(g.current), g.current = window.setTimeout(() => {
                            y.current = !0, x(!0)
                        }, m)
                    }, [m, x]);
                    return (0, o.useEffect)(() => () => window.clearTimeout(g.current), []), (0, o.createElement)(A, d, (0, o.createElement)(N, {
                        scope: t,
                        contentId: h,
                        open: w,
                        stateAttribute: b,
                        trigger: f,
                        onTriggerChange: p,
                        onTriggerEnter: (0, o.useCallback)(() => {
                            c.isOpenDelayed ? E() : $()
                        }, [c.isOpenDelayed, E, $]),
                        onTriggerLeave: (0, o.useCallback)(() => {
                            v ? M() : window.clearTimeout(g.current)
                        }, [M, v]),
                        onOpen: $,
                        onClose: M,
                        disableHoverableContent: v
                    }, r))
                },
                eu = J,
                el = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: r,
                        children: n,
                        container: i
                    } = e, a = X(K, t);
                    return (0, o.createElement)(q, {
                        scope: t,
                        forceMount: r
                    }, (0, o.createElement)(H.z, {
                        present: r || a.open
                    }, (0, o.createElement)(R.h, {
                        asChild: !0,
                        container: i
                    }, n)))
                },
                ec = ee,
                ed = ei
        }
    }
]);
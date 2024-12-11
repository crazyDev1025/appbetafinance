"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9887], {
        30622: function(r, e, o) {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var t = o(2265),
                n = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                l = Object.prototype.hasOwnProperty,
                a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                s = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(r, e, o) {
                var t, i = {},
                    c = null,
                    d = null;
                for (t in void 0 !== o && (c = "" + o), void 0 !== e.key && (c = "" + e.key), void 0 !== e.ref && (d = e.ref), e) l.call(e, t) && !s.hasOwnProperty(t) && (i[t] = e[t]);
                if (r && r.defaultProps)
                    for (t in e = r.defaultProps) void 0 === i[t] && (i[t] = e[t]);
                return {
                    $$typeof: n,
                    type: r,
                    key: c,
                    ref: d,
                    props: i,
                    _owner: a.current
                }
            }
            e.Fragment = i, e.jsx = c, e.jsxs = c
        },
        57437: function(r, e, o) {
            r.exports = o(30622)
        },
        74345: function(r, e, o) {
            o.d(e, {
                TKU: function() {
                    return n
                },
                xqh: function() {
                    return i
                }
            });
            var t = o(75559);

            function n(r) {
                return (0, t.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    },
                    child: [{
                        tag: "line",
                        attr: {
                            x1: "7",
                            y1: "17",
                            x2: "17",
                            y2: "7"
                        }
                    }, {
                        tag: "polyline",
                        attr: {
                            points: "7 7 17 7 17 17"
                        }
                    }]
                })(r)
            }

            function i(r) {
                return (0, t.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                        }
                    }, {
                        tag: "polyline",
                        attr: {
                            points: "16 17 21 12 16 7"
                        }
                    }, {
                        tag: "line",
                        attr: {
                            x1: "21",
                            y1: "12",
                            x2: "9",
                            y2: "12"
                        }
                    }]
                })(r)
            }
        },
        75559: function(r, e, o) {
            o.d(e, {
                w_: function() {
                    return s
                }
            });
            var t = o(2265),
                n = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                i = t.createContext && t.createContext(n),
                l = function() {
                    return (l = Object.assign || function(r) {
                        for (var e, o = 1, t = arguments.length; o < t; o++)
                            for (var n in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                        return r
                    }).apply(this, arguments)
                },
                a = function(r, e) {
                    var o = {};
                    for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && 0 > e.indexOf(t) && (o[t] = r[t]);
                    if (null != r && "function" == typeof Object.getOwnPropertySymbols)
                        for (var n = 0, t = Object.getOwnPropertySymbols(r); n < t.length; n++) 0 > e.indexOf(t[n]) && Object.prototype.propertyIsEnumerable.call(r, t[n]) && (o[t[n]] = r[t[n]]);
                    return o
                };

            function s(r) {
                return function(e) {
                    return t.createElement(c, l({
                        attr: l({}, r.attr)
                    }, e), function r(e) {
                        return e && e.map(function(e, o) {
                            return t.createElement(e.tag, l({
                                key: o
                            }, e.attr), r(e.child))
                        })
                    }(r.child))
                }
            }

            function c(r) {
                var e = function(e) {
                    var o, n = r.attr,
                        i = r.size,
                        s = r.title,
                        c = a(r, ["attr", "size", "title"]),
                        d = i || e.size || "1em";
                    return e.className && (o = e.className), r.className && (o = (o ? o + " " : "") + r.className), t.createElement("svg", l({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, n, c, {
                        className: o,
                        style: l(l({
                            color: r.color || e.color
                        }, e.style), r.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), s && t.createElement("title", null, s), r.children)
                };
                return void 0 !== i ? t.createElement(i.Consumer, null, function(r) {
                    return e(r)
                }) : e(n)
            }
        },
        90794: function(r, e, o) {
            o.d(e, {
                W: function() {
                    return t
                }
            });

            function t() {
                for (var r, e, o = 0, t = ""; o < arguments.length;)(r = arguments[o++]) && (e = function r(e) {
                    var o, t, n = "";
                    if ("string" == typeof e || "number" == typeof e) n += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (o = 0; o < e.length; o++) e[o] && (t = r(e[o])) && (n && (n += " "), n += t);
                        else
                            for (o in e) e[o] && (n && (n += " "), n += o)
                    }
                    return n
                }(r)) && (t && (t += " "), t += e);
                return t
            }
        },
        75e3: function(r, e, o) {
            o.d(e, {
                m: function() {
                    return S
                }
            });
            var t = /^\[(.+)\]$/;

            function n(r, e) {
                var o = r;
                return e.split("-").forEach(function(r) {
                    o.nextPart.has(r) || o.nextPart.set(r, {
                        nextPart: new Map,
                        validators: []
                    }), o = o.nextPart.get(r)
                }), o
            }
            var i = /\s+/;

            function l() {
                for (var r, e, o = 0, t = ""; o < arguments.length;)(r = arguments[o++]) && (e = function r(e) {
                    if ("string" == typeof e) return e;
                    for (var o, t = "", n = 0; n < e.length; n++) e[n] && (o = r(e[n])) && (t && (t += " "), t += o);
                    return t
                }(r)) && (t && (t += " "), t += e);
                return t
            }

            function a(r) {
                var e = function(e) {
                    return e[r] || []
                };
                return e.isThemeGetter = !0, e
            }
            var s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                d = new Set(["px", "full", "screen"]),
                u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                p = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                f = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

            function b(r) {
                return x(r) || d.has(r) || c.test(r) || m(r)
            }

            function m(r) {
                return _(r, "length", N)
            }

            function g(r) {
                return _(r, "size", P)
            }

            function v(r) {
                return _(r, "position", P)
            }

            function h(r) {
                return _(r, "url", E)
            }

            function y(r) {
                return _(r, "number", x)
            }

            function x(r) {
                return !Number.isNaN(Number(r))
            }

            function w(r) {
                return r.endsWith("%") && x(r.slice(0, -1))
            }

            function k(r) {
                return I(r) || _(r, "number", I)
            }

            function z(r) {
                return s.test(r)
            }

            function C() {
                return !0
            }

            function j(r) {
                return u.test(r)
            }

            function O(r) {
                return _(r, "", G)
            }

            function _(r, e, o) {
                var t = s.exec(r);
                return !!t && (t[1] ? t[1] === e : o(t[2]))
            }

            function N(r) {
                return p.test(r)
            }

            function P() {
                return !1
            }

            function E(r) {
                return r.startsWith("url(")
            }

            function I(r) {
                return Number.isInteger(Number(r))
            }

            function G(r) {
                return f.test(r)
            }
            var S = function() {
                for (var r, e, o, a = arguments.length, s = Array(a), c = 0; c < a; c++) s[c] = arguments[c];
                var d = function(i) {
                    var l = s[0];
                    return e = (r = function(r) {
                        var e, o, i, l, a, s, c, d, u, p, f;
                        return {
                            cache: function(r) {
                                if (r < 1) return {
                                    get: function() {},
                                    set: function() {}
                                };
                                var e = 0,
                                    o = new Map,
                                    t = new Map;

                                function n(n, i) {
                                    o.set(n, i), ++e > r && (e = 0, t = o, o = new Map)
                                }
                                return {
                                    get: function(r) {
                                        var e = o.get(r);
                                        return void 0 !== e ? e : void 0 !== (e = t.get(r)) ? (n(r, e), e) : void 0
                                    },
                                    set: function(r, e) {
                                        o.has(r) ? o.set(r, e) : n(r, e)
                                    }
                                }
                            }(r.cacheSize),
                            splitModifiers: (o = 1 === (e = r.separator || ":").length, i = e[0], l = e.length, function(r) {
                                for (var t, n = [], a = 0, s = 0, c = 0; c < r.length; c++) {
                                    var d = r[c];
                                    if (0 === a) {
                                        if (d === i && (o || r.slice(c, c + l) === e)) {
                                            n.push(r.slice(s, c)), s = c + l;
                                            continue
                                        }
                                        if ("/" === d) {
                                            t = c;
                                            continue
                                        }
                                    }
                                    "[" === d ? a++ : "]" === d && a--
                                }
                                var u = 0 === n.length ? r : r.substring(s),
                                    p = u.startsWith("!"),
                                    f = p ? u.substring(1) : u;
                                return {
                                    modifiers: n,
                                    hasImportantModifier: p,
                                    baseClassName: f,
                                    maybePostfixModifierPosition: t && t > s ? t - s : void 0
                                }
                            }),
                            ...(d = r.theme, u = r.prefix, p = {
                                nextPart: new Map,
                                validators: []
                            }, (f = Object.entries(r.classGroups), u ? f.map(function(r) {
                                return [r[0], r[1].map(function(r) {
                                    return "string" == typeof r ? u + r : "object" == typeof r ? Object.fromEntries(Object.entries(r).map(function(r) {
                                        return [u + r[0], r[1]]
                                    })) : r
                                })]
                            }) : f).forEach(function(r) {
                                var e = r[0];
                                (function r(e, o, t, i) {
                                    e.forEach(function(e) {
                                        if ("string" == typeof e) {
                                            ("" === e ? o : n(o, e)).classGroupId = t;
                                            return
                                        }
                                        if ("function" == typeof e) {
                                            if (e.isThemeGetter) {
                                                r(e(i), o, t, i);
                                                return
                                            }
                                            o.validators.push({
                                                validator: e,
                                                classGroupId: t
                                            });
                                            return
                                        }
                                        Object.entries(e).forEach(function(e) {
                                            var l = e[0];
                                            r(e[1], n(o, l), t, i)
                                        })
                                    })
                                })(r[1], p, e, d)
                            }), a = r.conflictingClassGroups, c = void 0 === (s = r.conflictingClassGroupModifiers) ? {} : s, {
                                getClassGroupId: function(r) {
                                    var e = r.split("-");
                                    return "" === e[0] && 1 !== e.length && e.shift(),
                                        function r(e, o) {
                                            if (0 === e.length) return o.classGroupId;
                                            var t = e[0],
                                                n = o.nextPart.get(t),
                                                i = n ? r(e.slice(1), n) : void 0;
                                            if (i) return i;
                                            if (0 !== o.validators.length) {
                                                var l = e.join("-");
                                                return o.validators.find(function(r) {
                                                    return (0, r.validator)(l)
                                                }) ?.classGroupId
                                            }
                                        }(e, p) || function(r) {
                                            if (t.test(r)) {
                                                var e = t.exec(r)[1],
                                                    o = e ?.substring(0, e.indexOf(":"));
                                                if (o) return "arbitrary.." + o
                                            }
                                        }(r)
                                },
                                getConflictingClassGroupIds: function(r, e) {
                                    var o = a[r] || [];
                                    return e && c[r] ? [].concat(o, c[r]) : o
                                }
                            })
                        }
                    }(s.slice(1).reduce(function(r, e) {
                        return e(r)
                    }, l()))).cache.get, o = r.cache.set, d = u, u(i)
                };

                function u(t) {
                    var n, l, a, s, c, d = e(t);
                    if (d) return d;
                    var u = (l = (n = r).splitModifiers, a = n.getClassGroupId, s = n.getConflictingClassGroupIds, c = new Set, t.trim().split(i).map(function(r) {
                        var e = l(r),
                            o = e.modifiers,
                            t = e.hasImportantModifier,
                            n = e.baseClassName,
                            i = e.maybePostfixModifierPosition,
                            s = a(i ? n.substring(0, i) : n),
                            c = !!i;
                        if (!s) {
                            if (!i || !(s = a(n))) return {
                                isTailwindClass: !1,
                                originalClassName: r
                            };
                            c = !1
                        }
                        var d = (function(r) {
                            if (r.length <= 1) return r;
                            var e = [],
                                o = [];
                            return r.forEach(function(r) {
                                "[" === r[0] ? (e.push.apply(e, o.sort().concat([r])), o = []) : o.push(r)
                            }), e.push.apply(e, o.sort()), e
                        })(o).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: t ? d + "!" : d,
                            classGroupId: s,
                            originalClassName: r,
                            hasPostfixModifier: c
                        }
                    }).reverse().filter(function(r) {
                        if (!r.isTailwindClass) return !0;
                        var e = r.modifierId,
                            o = r.classGroupId,
                            t = r.hasPostfixModifier,
                            n = e + o;
                        return !c.has(n) && (c.add(n), s(o, t).forEach(function(r) {
                            return c.add(e + r)
                        }), !0)
                    }).reverse().map(function(r) {
                        return r.originalClassName
                    }).join(" "));
                    return o(t, u), u
                }
                return function() {
                    return d(l.apply(null, arguments))
                }
            }(function() {
                var r = a("colors"),
                    e = a("spacing"),
                    o = a("blur"),
                    t = a("brightness"),
                    n = a("borderColor"),
                    i = a("borderRadius"),
                    l = a("borderSpacing"),
                    s = a("borderWidth"),
                    c = a("contrast"),
                    d = a("grayscale"),
                    u = a("hueRotate"),
                    p = a("invert"),
                    f = a("gap"),
                    _ = a("gradientColorStops"),
                    N = a("gradientColorStopPositions"),
                    P = a("inset"),
                    E = a("margin"),
                    I = a("opacity"),
                    G = a("padding"),
                    S = a("saturate"),
                    M = a("scale"),
                    W = a("sepia"),
                    R = a("skew"),
                    T = a("space"),
                    L = a("translate"),
                    $ = function() {
                        return ["auto", "contain", "none"]
                    },
                    A = function() {
                        return ["auto", "hidden", "clip", "visible", "scroll"]
                    },
                    q = function() {
                        return ["auto", z, e]
                    },
                    B = function() {
                        return [z, e]
                    },
                    U = function() {
                        return ["", b]
                    },
                    D = function() {
                        return ["auto", x, z]
                    },
                    F = function() {
                        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
                    },
                    H = function() {
                        return ["solid", "dashed", "dotted", "double", "none"]
                    },
                    K = function() {
                        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                    },
                    V = function() {
                        return ["start", "end", "center", "between", "around", "evenly", "stretch"]
                    },
                    Y = function() {
                        return ["", "0", z]
                    },
                    J = function() {
                        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                    },
                    Q = function() {
                        return [x, y]
                    },
                    X = function() {
                        return [x, z]
                    };
                return {
                    cacheSize: 500,
                    theme: {
                        colors: [C],
                        spacing: [b],
                        blur: ["none", "", j, z],
                        brightness: Q(),
                        borderColor: [r],
                        borderRadius: ["none", "", "full", j, z],
                        borderSpacing: B(),
                        borderWidth: U(),
                        contrast: Q(),
                        grayscale: Y(),
                        hueRotate: X(),
                        invert: Y(),
                        gap: B(),
                        gradientColorStops: [r],
                        gradientColorStopPositions: [w, m],
                        inset: q(),
                        margin: q(),
                        opacity: Q(),
                        padding: B(),
                        saturate: Q(),
                        scale: Q(),
                        sepia: Y(),
                        skew: X(),
                        space: B(),
                        translate: B()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", z]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [j]
                        }],
                        "break-after": [{
                            "break-after": J()
                        }],
                        "break-before": [{
                            "break-before": J()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [].concat(F(), [z])
                        }],
                        overflow: [{
                            overflow: A()
                        }],
                        "overflow-x": [{
                            "overflow-x": A()
                        }],
                        "overflow-y": [{
                            "overflow-y": A()
                        }],
                        overscroll: [{
                            overscroll: $()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": $()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": $()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [P]
                        }],
                        "inset-x": [{
                            "inset-x": [P]
                        }],
                        "inset-y": [{
                            "inset-y": [P]
                        }],
                        start: [{
                            start: [P]
                        }],
                        end: [{
                            end: [P]
                        }],
                        top: [{
                            top: [P]
                        }],
                        right: [{
                            right: [P]
                        }],
                        bottom: [{
                            bottom: [P]
                        }],
                        left: [{
                            left: [P]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", k]
                        }],
                        basis: [{
                            basis: q()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", z]
                        }],
                        grow: [{
                            grow: Y()
                        }],
                        shrink: [{
                            shrink: Y()
                        }],
                        order: [{
                            order: ["first", "last", "none", k]
                        }],
                        "grid-cols": [{
                            "grid-cols": [C]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", k]
                            }, z]
                        }],
                        "col-start": [{
                            "col-start": D()
                        }],
                        "col-end": [{
                            "col-end": D()
                        }],
                        "grid-rows": [{
                            "grid-rows": [C]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [k]
                            }, z]
                        }],
                        "row-start": [{
                            "row-start": D()
                        }],
                        "row-end": [{
                            "row-end": D()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", z]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", z]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal"].concat(V())
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal"].concat(V(), ["baseline"])
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [].concat(V(), ["baseline"])
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [G]
                        }],
                        px: [{
                            px: [G]
                        }],
                        py: [{
                            py: [G]
                        }],
                        ps: [{
                            ps: [G]
                        }],
                        pe: [{
                            pe: [G]
                        }],
                        pt: [{
                            pt: [G]
                        }],
                        pr: [{
                            pr: [G]
                        }],
                        pb: [{
                            pb: [G]
                        }],
                        pl: [{
                            pl: [G]
                        }],
                        m: [{
                            m: [E]
                        }],
                        mx: [{
                            mx: [E]
                        }],
                        my: [{
                            my: [E]
                        }],
                        ms: [{
                            ms: [E]
                        }],
                        me: [{
                            me: [E]
                        }],
                        mt: [{
                            mt: [E]
                        }],
                        mr: [{
                            mr: [E]
                        }],
                        mb: [{
                            mb: [E]
                        }],
                        ml: [{
                            ml: [E]
                        }],
                        "space-x": [{
                            "space-x": [T]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [T]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", z, e]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", z, b]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [j]
                            }, j, z]
                        }],
                        h: [{
                            h: [z, e, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", z, b]
                        }],
                        "max-h": [{
                            "max-h": [z, e, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", j, m]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", y]
                        }],
                        "font-family": [{
                            font: [C]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", x, y]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z, b]
                        }],
                        "list-image": [{
                            "list-image": ["none", z]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", z]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [r]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [I]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [r]
                        }],
                        "text-opacity": [{
                            "text-opacity": [I]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [].concat(H(), ["wavy"])
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", b]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", z, b]
                        }],
                        "text-decoration-color": [{
                            decoration: [r]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: B()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", z]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [I]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [].concat(F(), [v])
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", g]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, h]
                        }],
                        "bg-color": [{
                            bg: [r]
                        }],
                        "gradient-from-pos": [{
                            from: [N]
                        }],
                        "gradient-via-pos": [{
                            via: [N]
                        }],
                        "gradient-to-pos": [{
                            to: [N]
                        }],
                        "gradient-from": [{
                            from: [_]
                        }],
                        "gradient-via": [{
                            via: [_]
                        }],
                        "gradient-to": [{
                            to: [_]
                        }],
                        rounded: [{
                            rounded: [i]
                        }],
                        "rounded-s": [{
                            "rounded-s": [i]
                        }],
                        "rounded-e": [{
                            "rounded-e": [i]
                        }],
                        "rounded-t": [{
                            "rounded-t": [i]
                        }],
                        "rounded-r": [{
                            "rounded-r": [i]
                        }],
                        "rounded-b": [{
                            "rounded-b": [i]
                        }],
                        "rounded-l": [{
                            "rounded-l": [i]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [i]
                        }],
                        "rounded-se": [{
                            "rounded-se": [i]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [i]
                        }],
                        "rounded-es": [{
                            "rounded-es": [i]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [i]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [i]
                        }],
                        "rounded-br": [{
                            "rounded-br": [i]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [i]
                        }],
                        "border-w": [{
                            border: [s]
                        }],
                        "border-w-x": [{
                            "border-x": [s]
                        }],
                        "border-w-y": [{
                            "border-y": [s]
                        }],
                        "border-w-s": [{
                            "border-s": [s]
                        }],
                        "border-w-e": [{
                            "border-e": [s]
                        }],
                        "border-w-t": [{
                            "border-t": [s]
                        }],
                        "border-w-r": [{
                            "border-r": [s]
                        }],
                        "border-w-b": [{
                            "border-b": [s]
                        }],
                        "border-w-l": [{
                            "border-l": [s]
                        }],
                        "border-opacity": [{
                            "border-opacity": [I]
                        }],
                        "border-style": [{
                            border: [].concat(H(), ["hidden"])
                        }],
                        "divide-x": [{
                            "divide-x": [s]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [s]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [I]
                        }],
                        "divide-style": [{
                            divide: H()
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: [""].concat(H())
                        }],
                        "outline-offset": [{
                            "outline-offset": [z, b]
                        }],
                        "outline-w": [{
                            outline: [b]
                        }],
                        "outline-color": [{
                            outline: [r]
                        }],
                        "ring-w": [{
                            ring: U()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [r]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [I]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [b]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [r]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", j, O]
                        }],
                        "shadow-color": [{
                            shadow: [C]
                        }],
                        opacity: [{
                            opacity: [I]
                        }],
                        "mix-blend": [{
                            "mix-blend": K()
                        }],
                        "bg-blend": [{
                            "bg-blend": K()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [o]
                        }],
                        brightness: [{
                            brightness: [t]
                        }],
                        contrast: [{
                            contrast: [c]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", j, z]
                        }],
                        grayscale: [{
                            grayscale: [d]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [p]
                        }],
                        saturate: [{
                            saturate: [S]
                        }],
                        sepia: [{
                            sepia: [W]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [o]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [t]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [c]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [d]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [p]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [I]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [S]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [W]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [l]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [l]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [l]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
                        }],
                        duration: [{
                            duration: X()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", z]
                        }],
                        delay: [{
                            delay: X()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", z]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [M]
                        }],
                        "scale-x": [{
                            "scale-x": [M]
                        }],
                        "scale-y": [{
                            "scale-y": [M]
                        }],
                        rotate: [{
                            rotate: [k, z]
                        }],
                        "translate-x": [{
                            "translate-x": [L]
                        }],
                        "translate-y": [{
                            "translate-y": [L]
                        }],
                        "skew-x": [{
                            "skew-x": [R]
                        }],
                        "skew-y": [{
                            "skew-y": [R]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
                        }],
                        accent: [{
                            accent: ["auto", r]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
                        }],
                        "caret-color": [{
                            caret: [r]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": B()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": B()
                        }],
                        "scroll-my": [{
                            "scroll-my": B()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": B()
                        }],
                        "scroll-me": [{
                            "scroll-me": B()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": B()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": B()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": B()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": B()
                        }],
                        "scroll-p": [{
                            "scroll-p": B()
                        }],
                        "scroll-px": [{
                            "scroll-px": B()
                        }],
                        "scroll-py": [{
                            "scroll-py": B()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": B()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": B()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": B()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": B()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": B()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": B()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "pinch-zoom", "manipulation", {
                                pan: ["x", "left", "right", "y", "up", "down"]
                            }]
                        }],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", z]
                        }],
                        fill: [{
                            fill: [r, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [b, y]
                        }],
                        stroke: [{
                            stroke: [r, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        }
    }
]);
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7813], {
        82744: function(t, e, n) {
            n.d(e, {
                YF: function() {
                    return h
                },
                x7: function() {
                    return u
                }
            });
            var r = n(38209),
                i = n(94126),
                o = n(2265),
                l = n(54887);
            let u = t => ({
                name: "arrow",
                options: t,
                fn(e) {
                    let {
                        element: n,
                        padding: i
                    } = "function" == typeof t ? t(e) : t;
                    if (n && ({}).hasOwnProperty.call(n, "current")) {
                        if (null != n.current) return (0, r.x7)({
                            element: n.current,
                            padding: i
                        }).fn(e)
                    } else if (n) return (0, r.x7)({
                        element: n,
                        padding: i
                    }).fn(e);
                    return {}
                }
            });
            var f = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function c(t, e) {
                let n, r, i;
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ("function" == typeof t && t.toString() === e.toString()) return !0;
                if (t && e && "object" == typeof t) {
                    if (Array.isArray(t)) {
                        if ((n = t.length) != e.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!c(t[r], e[r])) return !1;
                        return !0
                    }
                    if ((n = (i = Object.keys(t)).length) !== Object.keys(e).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(e, i[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = i[r];
                        if (("_owner" !== n || !t.$$typeof) && !c(t[n], e[n])) return !1
                    }
                    return !0
                }
                return t != t && e != e
            }

            function s(t) {
                if ("undefined" == typeof window) return 1;
                let e = t.ownerDocument.defaultView || window;
                return e.devicePixelRatio || 1
            }

            function a(t, e) {
                let n = s(t);
                return Math.round(e * n) / n
            }

            function d(t) {
                let e = o.useRef(t);
                return f(() => {
                    e.current = t
                }), e
            }

            function h(t) {
                void 0 === t && (t = {});
                let {
                    placement: e = "bottom",
                    strategy: n = "absolute",
                    middleware: r = [],
                    platform: u,
                    elements: {
                        reference: h,
                        floating: p
                    } = {},
                    transform: m = !0,
                    whileElementsMounted: g,
                    open: y
                } = t, [w, x] = o.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: e,
                    middlewareData: {},
                    isPositioned: !1
                }), [v, b] = o.useState(r);
                c(v, r) || b(r);
                let [R, k] = o.useState(null), [A, E] = o.useState(null), L = o.useCallback(t => {
                    t != S.current && (S.current = t, k(t))
                }, [k]), T = o.useCallback(t => {
                    t !== C.current && (C.current = t, E(t))
                }, [E]), F = h || R, V = p || A, S = o.useRef(null), C = o.useRef(null), O = o.useRef(w), W = d(g), P = d(u), z = o.useCallback(() => {
                    if (!S.current || !C.current) return;
                    let t = {
                        placement: e,
                        strategy: n,
                        middleware: v
                    };
                    P.current && (t.platform = P.current), (0, i.oo)(S.current, C.current, t).then(t => {
                        let e = { ...t,
                            isPositioned: !0
                        };
                        M.current && !c(O.current, e) && (O.current = e, l.flushSync(() => {
                            x(e)
                        }))
                    })
                }, [v, e, n, P]);
                f(() => {
                    !1 === y && O.current.isPositioned && (O.current.isPositioned = !1, x(t => ({ ...t,
                        isPositioned: !1
                    })))
                }, [y]);
                let M = o.useRef(!1);
                f(() => (M.current = !0, () => {
                    M.current = !1
                }), []), f(() => {
                    if (F && (S.current = F), V && (C.current = V), F && V) {
                        if (W.current) return W.current(F, V, z);
                        z()
                    }
                }, [F, V, z, W]);
                let D = o.useMemo(() => ({
                        reference: S,
                        floating: C,
                        setReference: L,
                        setFloating: T
                    }), [L, T]),
                    H = o.useMemo(() => ({
                        reference: F,
                        floating: V
                    }), [F, V]),
                    B = o.useMemo(() => {
                        let t = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!H.floating) return t;
                        let e = a(H.floating, w.x),
                            r = a(H.floating, w.y);
                        return m ? { ...t,
                            transform: "translate(" + e + "px, " + r + "px)",
                            ...s(H.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: n,
                            left: e,
                            top: r
                        }
                    }, [n, m, H.floating, w.x, w.y]);
                return o.useMemo(() => ({ ...w,
                    update: z,
                    refs: D,
                    elements: H,
                    floatingStyles: B
                }), [w, z, D, H, B])
            }
        },
        38209: function(t, e, n) {
            n.d(e, {
                Cp: function() {
                    return a
                },
                RR: function() {
                    return f
                },
                cv: function() {
                    return h
                },
                dp: function() {
                    return g
                },
                dr: function() {
                    return m
                },
                oo: function() {
                    return o
                },
                uY: function() {
                    return p
                },
                x7: function() {
                    return u
                }
            });
            var r = n(7263);

            function i(t, e, n) {
                let i, {
                        reference: o,
                        floating: l
                    } = t,
                    u = (0, r.Qq)(e),
                    f = (0, r.Wh)(e),
                    c = (0, r.I4)(f),
                    s = (0, r.k3)(e),
                    a = "y" === u,
                    d = o.x + o.width / 2 - l.width / 2,
                    h = o.y + o.height / 2 - l.height / 2,
                    p = o[c] / 2 - l[c] / 2;
                switch (s) {
                    case "top":
                        i = {
                            x: d,
                            y: o.y - l.height
                        };
                        break;
                    case "bottom":
                        i = {
                            x: d,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        i = {
                            x: o.x + o.width,
                            y: h
                        };
                        break;
                    case "left":
                        i = {
                            x: o.x - l.width,
                            y: h
                        };
                        break;
                    default:
                        i = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch ((0, r.hp)(e)) {
                    case "start":
                        i[f] -= p * (n && a ? -1 : 1);
                        break;
                    case "end":
                        i[f] += p * (n && a ? -1 : 1)
                }
                return i
            }
            let o = async (t, e, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: l = [],
                    platform: u
                } = n, f = l.filter(Boolean), c = await (null == u.isRTL ? void 0 : u.isRTL(e)), s = await u.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: o
                }), {
                    x: a,
                    y: d
                } = i(s, r, c), h = r, p = {}, m = 0;
                for (let n = 0; n < f.length; n++) {
                    let {
                        name: l,
                        fn: g
                    } = f[n], {
                        x: y,
                        y: w,
                        data: x,
                        reset: v
                    } = await g({
                        x: a,
                        y: d,
                        initialPlacement: r,
                        placement: h,
                        strategy: o,
                        middlewareData: p,
                        rects: s,
                        platform: u,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    if (a = null != y ? y : a, d = null != w ? w : d, p = { ...p,
                            [l]: { ...p[l],
                                ...x
                            }
                        }, v && m <= 50) {
                        m++, "object" == typeof v && (v.placement && (h = v.placement), v.rects && (s = !0 === v.rects ? await u.getElementRects({
                            reference: t,
                            floating: e,
                            strategy: o
                        }) : v.rects), {
                            x: a,
                            y: d
                        } = i(s, h, c)), n = -1;
                        continue
                    }
                }
                return {
                    x: a,
                    y: d,
                    placement: h,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function l(t, e) {
                var n;
                void 0 === e && (e = {});
                let {
                    x: i,
                    y: o,
                    platform: l,
                    rects: u,
                    elements: f,
                    strategy: c
                } = t, {
                    boundary: s = "clippingAncestors",
                    rootBoundary: a = "viewport",
                    elementContext: d = "floating",
                    altBoundary: h = !1,
                    padding: p = 0
                } = (0, r.ku)(e, t), m = (0, r.yd)(p), g = f[h ? "floating" === d ? "reference" : "floating" : d], y = (0, r.JB)(await l.getClippingRect({
                    element: null == (n = await (null == l.isElement ? void 0 : l.isElement(g))) || n ? g : g.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(f.floating)),
                    boundary: s,
                    rootBoundary: a,
                    strategy: c
                })), w = "floating" === d ? { ...u.floating,
                    x: i,
                    y: o
                } : u.reference, x = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f.floating)), v = await (null == l.isElement ? void 0 : l.isElement(x)) && await (null == l.getScale ? void 0 : l.getScale(x)) || {
                    x: 1,
                    y: 1
                }, b = (0, r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: w,
                    offsetParent: x,
                    strategy: c
                }) : w);
                return {
                    top: (y.top - b.top + m.top) / v.y,
                    bottom: (b.bottom - y.bottom + m.bottom) / v.y,
                    left: (y.left - b.left + m.left) / v.x,
                    right: (b.right - y.right + m.right) / v.x
                }
            }
            let u = t => ({
                    name: "arrow",
                    options: t,
                    async fn(e) {
                        let {
                            x: n,
                            y: i,
                            placement: o,
                            rects: l,
                            platform: u,
                            elements: f
                        } = e, {
                            element: c,
                            padding: s = 0
                        } = (0, r.ku)(t, e) || {};
                        if (null == c) return {};
                        let a = (0, r.yd)(s),
                            d = {
                                x: n,
                                y: i
                            },
                            h = (0, r.Wh)(o),
                            p = (0, r.I4)(h),
                            m = await u.getDimensions(c),
                            g = "y" === h,
                            y = g ? "clientHeight" : "clientWidth",
                            w = l.reference[p] + l.reference[h] - d[h] - l.floating[p],
                            x = d[h] - l.reference[h],
                            v = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(c)),
                            b = v ? v[y] : 0;
                        b && await (null == u.isElement ? void 0 : u.isElement(v)) || (b = f.floating[y] || l.floating[p]);
                        let R = b / 2 - m[p] / 2 - 1,
                            k = (0, r.VV)(a[g ? "top" : "left"], R),
                            A = (0, r.VV)(a[g ? "bottom" : "right"], R),
                            E = b - m[p] - A,
                            L = b / 2 - m[p] / 2 + (w / 2 - x / 2),
                            T = (0, r.uZ)(k, L, E),
                            F = null != (0, r.hp)(o) && L != T && l.reference[p] / 2 - (L < k ? k : A) - m[p] / 2 < 0,
                            V = F ? L < k ? k - L : E - L : 0;
                        return {
                            [h]: d[h] - V,
                            data: {
                                [h]: T,
                                centerOffset: L - T + V
                            }
                        }
                    }
                }),
                f = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "flip",
                        options: t,
                        async fn(e) {
                            var n, i, o, u;
                            let {
                                placement: f,
                                middlewareData: c,
                                rects: s,
                                initialPlacement: a,
                                platform: d,
                                elements: h
                            } = e, {
                                mainAxis: p = !0,
                                crossAxis: m = !0,
                                fallbackPlacements: g,
                                fallbackStrategy: y = "bestFit",
                                fallbackAxisSideDirection: w = "none",
                                flipAlignment: x = !0,
                                ...v
                            } = (0, r.ku)(t, e), b = (0, r.k3)(f), R = (0, r.k3)(a) === a, k = await (null == d.isRTL ? void 0 : d.isRTL(h.floating)), A = g || (R || !x ? [(0, r.pw)(a)] : (0, r.gy)(a));
                            g || "none" === w || A.push(...(0, r.KX)(a, x, w, k));
                            let E = [a, ...A],
                                L = await l(e, v),
                                T = [],
                                F = (null == (n = c.flip) ? void 0 : n.overflows) || [];
                            if (p && T.push(L[b]), m) {
                                let t = (0, r.i8)(f, s, k);
                                T.push(L[t[0]], L[t[1]])
                            }
                            if (F = [...F, {
                                    placement: f,
                                    overflows: T
                                }], !T.every(t => t <= 0)) {
                                let t = ((null == (i = c.flip) ? void 0 : i.index) || 0) + 1,
                                    e = E[t];
                                if (e) return {
                                    data: {
                                        index: t,
                                        overflows: F
                                    },
                                    reset: {
                                        placement: e
                                    }
                                };
                                let n = null == (o = F.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : o.placement;
                                if (!n) switch (y) {
                                    case "bestFit":
                                        {
                                            let t = null == (u = F.map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : u[0];t && (n = t);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = a
                                }
                                if (f !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                };

            function c(t, e) {
                return {
                    top: t.top - e.height,
                    right: t.right - e.width,
                    bottom: t.bottom - e.height,
                    left: t.left - e.width
                }
            }

            function s(t) {
                return r.mA.some(e => t[e] >= 0)
            }
            let a = function(t) {
                return void 0 === t && (t = {}), {
                    name: "hide",
                    options: t,
                    async fn(e) {
                        let {
                            rects: n
                        } = e, {
                            strategy: i = "referenceHidden",
                            ...o
                        } = (0, r.ku)(t, e);
                        switch (i) {
                            case "referenceHidden":
                                {
                                    let t = await l(e, { ...o,
                                            elementContext: "reference"
                                        }),
                                        r = c(t, n.reference);
                                    return {
                                        data: {
                                            referenceHiddenOffsets: r,
                                            referenceHidden: s(r)
                                        }
                                    }
                                }
                            case "escaped":
                                {
                                    let t = await l(e, { ...o,
                                            altBoundary: !0
                                        }),
                                        r = c(t, n.floating);
                                    return {
                                        data: {
                                            escapedOffsets: r,
                                            escaped: s(r)
                                        }
                                    }
                                }
                            default:
                                return {}
                        }
                    }
                }
            };
            async function d(t, e) {
                let {
                    placement: n,
                    platform: i,
                    elements: o
                } = t, l = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)), u = (0, r.k3)(n), f = (0, r.hp)(n), c = "y" === (0, r.Qq)(n), s = ["left", "top"].includes(u) ? -1 : 1, a = l && c ? -1 : 1, d = (0, r.ku)(e, t), {
                    mainAxis: h,
                    crossAxis: p,
                    alignmentAxis: m
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...d
                };
                return f && "number" == typeof m && (p = "end" === f ? -1 * m : m), c ? {
                    x: p * a,
                    y: h * s
                } : {
                    x: h * s,
                    y: p * a
                }
            }
            let h = function(t) {
                    return void 0 === t && (t = 0), {
                        name: "offset",
                        options: t,
                        async fn(e) {
                            let {
                                x: n,
                                y: r
                            } = e, i = await d(e, t);
                            return {
                                x: n + i.x,
                                y: r + i.y,
                                data: i
                            }
                        }
                    }
                },
                p = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "shift",
                        options: t,
                        async fn(e) {
                            let {
                                x: n,
                                y: i,
                                placement: o
                            } = e, {
                                mainAxis: u = !0,
                                crossAxis: f = !1,
                                limiter: c = {
                                    fn: t => {
                                        let {
                                            x: e,
                                            y: n
                                        } = t;
                                        return {
                                            x: e,
                                            y: n
                                        }
                                    }
                                },
                                ...s
                            } = (0, r.ku)(t, e), a = {
                                x: n,
                                y: i
                            }, d = await l(e, s), h = (0, r.Qq)((0, r.k3)(o)), p = (0, r.Rn)(h), m = a[p], g = a[h];
                            if (u) {
                                let t = m + d["y" === p ? "top" : "left"],
                                    e = m - d["y" === p ? "bottom" : "right"];
                                m = (0, r.uZ)(t, m, e)
                            }
                            if (f) {
                                let t = "y" === h ? "top" : "left",
                                    e = "y" === h ? "bottom" : "right",
                                    n = g + d[t],
                                    i = g - d[e];
                                g = (0, r.uZ)(n, g, i)
                            }
                            let y = c.fn({ ...e,
                                [p]: m,
                                [h]: g
                            });
                            return { ...y,
                                data: {
                                    x: y.x - n,
                                    y: y.y - i
                                }
                            }
                        }
                    }
                },
                m = function(t) {
                    return void 0 === t && (t = {}), {
                        options: t,
                        fn(e) {
                            let {
                                x: n,
                                y: i,
                                placement: o,
                                rects: l,
                                middlewareData: u
                            } = e, {
                                offset: f = 0,
                                mainAxis: c = !0,
                                crossAxis: s = !0
                            } = (0, r.ku)(t, e), a = {
                                x: n,
                                y: i
                            }, d = (0, r.Qq)(o), h = (0, r.Rn)(d), p = a[h], m = a[d], g = (0, r.ku)(f, e), y = "number" == typeof g ? {
                                mainAxis: g,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...g
                            };
                            if (c) {
                                let t = "y" === h ? "height" : "width",
                                    e = l.reference[h] - l.floating[t] + y.mainAxis,
                                    n = l.reference[h] + l.reference[t] - y.mainAxis;
                                p < e ? p = e : p > n && (p = n)
                            }
                            if (s) {
                                var w, x;
                                let t = "y" === h ? "width" : "height",
                                    e = ["top", "left"].includes((0, r.k3)(o)),
                                    n = l.reference[d] - l.floating[t] + (e && (null == (w = u.offset) ? void 0 : w[d]) || 0) + (e ? 0 : y.crossAxis),
                                    i = l.reference[d] + l.reference[t] + (e ? 0 : (null == (x = u.offset) ? void 0 : x[d]) || 0) - (e ? y.crossAxis : 0);
                                m < n ? m = n : m > i && (m = i)
                            }
                            return {
                                [h]: p,
                                [d]: m
                            }
                        }
                    }
                },
                g = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "size",
                        options: t,
                        async fn(e) {
                            let n, i;
                            let {
                                placement: o,
                                rects: u,
                                platform: f,
                                elements: c
                            } = e, {
                                apply: s = () => {},
                                ...a
                            } = (0, r.ku)(t, e), d = await l(e, a), h = (0, r.k3)(o), p = (0, r.hp)(o), m = "y" === (0, r.Qq)(o), {
                                width: g,
                                height: y
                            } = u.floating;
                            "top" === h || "bottom" === h ? (n = h, i = p === (await (null == f.isRTL ? void 0 : f.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (i = h, n = "end" === p ? "top" : "bottom");
                            let w = y - d[n],
                                x = g - d[i],
                                v = !e.middlewareData.shift,
                                b = w,
                                R = x;
                            if (m) {
                                let t = g - d.left - d.right;
                                R = p || v ? (0, r.VV)(x, t) : t
                            } else {
                                let t = y - d.top - d.bottom;
                                b = p || v ? (0, r.VV)(w, t) : t
                            }
                            if (v && !p) {
                                let t = (0, r.Fp)(d.left, 0),
                                    e = (0, r.Fp)(d.right, 0),
                                    n = (0, r.Fp)(d.top, 0),
                                    i = (0, r.Fp)(d.bottom, 0);
                                m ? R = g - 2 * (0 !== t || 0 !== e ? t + e : (0, r.Fp)(d.left, d.right)) : b = y - 2 * (0 !== n || 0 !== i ? n + i : (0, r.Fp)(d.top, d.bottom))
                            }
                            await s({ ...e,
                                availableWidth: R,
                                availableHeight: b
                            });
                            let k = await f.getDimensions(c.floating);
                            return g !== k.width || y !== k.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        94126: function(t, e, n) {
            n.d(e, {
                Me: function() {
                    return O
                },
                oo: function() {
                    return W
                }
            });
            var r = n(7263),
                i = n(38209);

            function o(t) {
                return f(t) ? (t.nodeName || "").toLowerCase() : "#document"
            }

            function l(t) {
                var e;
                return (null == t ? void 0 : null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function u(t) {
                var e;
                return null == (e = (f(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
            }

            function f(t) {
                return t instanceof Node || t instanceof l(t).Node
            }

            function c(t) {
                return t instanceof Element || t instanceof l(t).Element
            }

            function s(t) {
                return t instanceof HTMLElement || t instanceof l(t).HTMLElement
            }

            function a(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof l(t).ShadowRoot)
            }

            function d(t) {
                let {
                    overflow: e,
                    overflowX: n,
                    overflowY: r,
                    display: i
                } = g(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i)
            }

            function h(t) {
                let e = p(),
                    n = g(t);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(t => (n.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some(t => (n.contain || "").includes(t))
            }

            function p() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function m(t) {
                return ["html", "body", "#document"].includes(o(t))
            }

            function g(t) {
                return l(t).getComputedStyle(t)
            }

            function y(t) {
                return c(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function w(t) {
                if ("html" === o(t)) return t;
                let e = t.assignedSlot || t.parentNode || a(t) && t.host || u(t);
                return a(e) ? e.host : e
            }

            function x(t, e) {
                var n;
                void 0 === e && (e = []);
                let r = function t(e) {
                        let n = w(e);
                        return m(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : s(n) && d(n) ? n : t(n)
                    }(t),
                    i = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    o = l(r);
                return i ? e.concat(o, o.visualViewport || [], d(r) ? r : []) : e.concat(r, x(r))
            }

            function v(t) {
                let e = g(t),
                    n = parseFloat(e.width) || 0,
                    i = parseFloat(e.height) || 0,
                    o = s(t),
                    l = o ? t.offsetWidth : n,
                    u = o ? t.offsetHeight : i,
                    f = (0, r.NM)(n) !== l || (0, r.NM)(i) !== u;
                return f && (n = l, i = u), {
                    width: n,
                    height: i,
                    $: f
                }
            }

            function b(t) {
                return c(t) ? t : t.contextElement
            }

            function R(t) {
                let e = b(t);
                if (!s(e)) return (0, r.ze)(1);
                let n = e.getBoundingClientRect(),
                    {
                        width: i,
                        height: o,
                        $: l
                    } = v(e),
                    u = (l ? (0, r.NM)(n.width) : n.width) / i,
                    f = (l ? (0, r.NM)(n.height) : n.height) / o;
                return u && Number.isFinite(u) || (u = 1), f && Number.isFinite(f) || (f = 1), {
                    x: u,
                    y: f
                }
            }
            let k = (0, r.ze)(0);

            function A(t) {
                let e = l(t);
                return p() && e.visualViewport ? {
                    x: e.visualViewport.offsetLeft,
                    y: e.visualViewport.offsetTop
                } : k
            }

            function E(t, e, n, i) {
                var o;
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                let u = t.getBoundingClientRect(),
                    f = b(t),
                    s = (0, r.ze)(1);
                e && (i ? c(i) && (s = R(i)) : s = R(t));
                let a = (void 0 === (o = n) && (o = !1), i && (!o || i === l(f)) && o) ? A(f) : (0, r.ze)(0),
                    d = (u.left + a.x) / s.x,
                    h = (u.top + a.y) / s.y,
                    p = u.width / s.x,
                    m = u.height / s.y;
                if (f) {
                    let t = l(f),
                        e = i && c(i) ? l(i) : i,
                        n = t.frameElement;
                    for (; n && i && e !== t;) {
                        let t = R(n),
                            e = n.getBoundingClientRect(),
                            r = g(n),
                            i = e.left + (n.clientLeft + parseFloat(r.paddingLeft)) * t.x,
                            o = e.top + (n.clientTop + parseFloat(r.paddingTop)) * t.y;
                        d *= t.x, h *= t.y, p *= t.x, m *= t.y, d += i, h += o, n = l(n).frameElement
                    }
                }
                return (0, r.JB)({
                    width: p,
                    height: m,
                    x: d,
                    y: h
                })
            }

            function L(t) {
                return E(u(t)).left + y(t).scrollLeft
            }

            function T(t, e, n) {
                let i;
                if ("viewport" === e) i = function(t, e) {
                    let n = l(t),
                        r = u(t),
                        i = n.visualViewport,
                        o = r.clientWidth,
                        f = r.clientHeight,
                        c = 0,
                        s = 0;
                    if (i) {
                        o = i.width, f = i.height;
                        let t = p();
                        (!t || t && "fixed" === e) && (c = i.offsetLeft, s = i.offsetTop)
                    }
                    return {
                        width: o,
                        height: f,
                        x: c,
                        y: s
                    }
                }(t, n);
                else if ("document" === e) i = function(t) {
                    let e = u(t),
                        n = y(t),
                        i = t.ownerDocument.body,
                        o = (0, r.Fp)(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
                        l = (0, r.Fp)(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight),
                        f = -n.scrollLeft + L(t),
                        c = -n.scrollTop;
                    return "rtl" === g(i).direction && (f += (0, r.Fp)(e.clientWidth, i.clientWidth) - o), {
                        width: o,
                        height: l,
                        x: f,
                        y: c
                    }
                }(u(t));
                else if (c(e)) i = function(t, e) {
                    let n = E(t, !0, "fixed" === e),
                        i = n.top + t.clientTop,
                        o = n.left + t.clientLeft,
                        l = s(t) ? R(t) : (0, r.ze)(1),
                        u = t.clientWidth * l.x,
                        f = t.clientHeight * l.y,
                        c = o * l.x,
                        a = i * l.y;
                    return {
                        width: u,
                        height: f,
                        x: c,
                        y: a
                    }
                }(e, n);
                else {
                    let n = A(t);
                    i = { ...e,
                        x: e.x - n.x,
                        y: e.y - n.y
                    }
                }
                return (0, r.JB)(i)
            }

            function F(t, e) {
                return s(t) && "fixed" !== g(t).position ? e ? e(t) : t.offsetParent : null
            }

            function V(t, e) {
                let n = l(t);
                if (!s(t)) return n;
                let r = F(t, e);
                for (; r && ["table", "td", "th"].includes(o(r)) && "static" === g(r).position;) r = F(r, e);
                return r && ("html" === o(r) || "body" === o(r) && "static" === g(r).position && !h(r)) ? n : r || function(t) {
                    let e = w(t);
                    for (; s(e) && !m(e);) {
                        if (h(e)) return e;
                        e = w(e)
                    }
                    return null
                }(t) || n
            }
            let S = async function(t) {
                    let {
                        reference: e,
                        floating: n,
                        strategy: i
                    } = t, l = this.getOffsetParent || V, f = this.getDimensions;
                    return {
                        reference: function(t, e, n) {
                            let i = s(e),
                                l = u(e),
                                f = "fixed" === n,
                                c = E(t, !0, f, e),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                h = (0, r.ze)(0);
                            if (i || !i && !f) {
                                if (("body" !== o(e) || d(l)) && (a = y(e)), i) {
                                    let t = E(e, !0, f, e);
                                    h.x = t.x + e.clientLeft, h.y = t.y + e.clientTop
                                } else l && (h.x = L(l))
                            }
                            return {
                                x: c.left + a.scrollLeft - h.x,
                                y: c.top + a.scrollTop - h.y,
                                width: c.width,
                                height: c.height
                            }
                        }(e, await l(n), i),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await f(n)
                        }
                    }
                },
                C = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                        let {
                            rect: e,
                            offsetParent: n,
                            strategy: i
                        } = t, l = s(n), f = u(n);
                        if (n === f) return e;
                        let c = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            a = (0, r.ze)(1),
                            h = (0, r.ze)(0);
                        if ((l || !l && "fixed" !== i) && (("body" !== o(n) || d(f)) && (c = y(n)), s(n))) {
                            let t = E(n);
                            a = R(n), h.x = t.x + n.clientLeft, h.y = t.y + n.clientTop
                        }
                        return {
                            width: e.width * a.x,
                            height: e.height * a.y,
                            x: e.x * a.x - c.scrollLeft * a.x + h.x,
                            y: e.y * a.y - c.scrollTop * a.y + h.y
                        }
                    },
                    getDocumentElement: u,
                    getClippingRect: function(t) {
                        let {
                            element: e,
                            boundary: n,
                            rootBoundary: i,
                            strategy: l
                        } = t, u = "clippingAncestors" === n ? function(t, e) {
                            let n = e.get(t);
                            if (n) return n;
                            let r = x(t).filter(t => c(t) && "body" !== o(t)),
                                i = null,
                                l = "fixed" === g(t).position,
                                u = l ? w(t) : t;
                            for (; c(u) && !m(u);) {
                                let e = g(u),
                                    n = h(u);
                                n || "fixed" !== e.position || (i = null);
                                let o = l ? !n && !i : !n && "static" === e.position && !!i && ["absolute", "fixed"].includes(i.position) || d(u) && !n && function t(e, n) {
                                    let r = w(e);
                                    return !(r === n || !c(r) || m(r)) && ("fixed" === g(r).position || t(r, n))
                                }(t, u);
                                o ? r = r.filter(t => t !== u) : i = e, u = w(u)
                            }
                            return e.set(t, r), r
                        }(e, this._c) : [].concat(n), f = [...u, i], s = f[0], a = f.reduce((t, n) => {
                            let i = T(e, n, l);
                            return t.top = (0, r.Fp)(i.top, t.top), t.right = (0, r.VV)(i.right, t.right), t.bottom = (0, r.VV)(i.bottom, t.bottom), t.left = (0, r.Fp)(i.left, t.left), t
                        }, T(e, s, l));
                        return {
                            width: a.right - a.left,
                            height: a.bottom - a.top,
                            x: a.left,
                            y: a.top
                        }
                    },
                    getOffsetParent: V,
                    getElementRects: S,
                    getClientRects: function(t) {
                        return Array.from(t.getClientRects())
                    },
                    getDimensions: function(t) {
                        return v(t)
                    },
                    getScale: R,
                    isElement: c,
                    isRTL: function(t) {
                        return "rtl" === g(t).direction
                    }
                };

            function O(t, e, n, i) {
                let o;
                void 0 === i && (i = {});
                let {
                    ancestorScroll: l = !0,
                    ancestorResize: f = !0,
                    elementResize: c = "function" == typeof ResizeObserver,
                    layoutShift: s = "function" == typeof IntersectionObserver,
                    animationFrame: a = !1
                } = i, d = b(t), h = l || f ? [...d ? x(d) : [], ...x(e)] : [];
                h.forEach(t => {
                    l && t.addEventListener("scroll", n, {
                        passive: !0
                    }), f && t.addEventListener("resize", n)
                });
                let p = d && s ? function(t, e) {
                        let n, i = null,
                            o = u(t);

                        function l() {
                            clearTimeout(n), i && i.disconnect(), i = null
                        }
                        return ! function u(f, c) {
                            void 0 === f && (f = !1), void 0 === c && (c = 1), l();
                            let {
                                left: s,
                                top: a,
                                width: d,
                                height: h
                            } = t.getBoundingClientRect();
                            if (f || e(), !d || !h) return;
                            let p = (0, r.GW)(a),
                                m = (0, r.GW)(o.clientWidth - (s + d)),
                                g = (0, r.GW)(o.clientHeight - (a + h)),
                                y = (0, r.GW)(s),
                                w = {
                                    rootMargin: -p + "px " + -m + "px " + -g + "px " + -y + "px",
                                    threshold: (0, r.Fp)(0, (0, r.VV)(1, c)) || 1
                                },
                                x = !0;

                            function v(t) {
                                let e = t[0].intersectionRatio;
                                if (e !== c) {
                                    if (!x) return u();
                                    e ? u(!1, e) : n = setTimeout(() => {
                                        u(!1, 1e-7)
                                    }, 100)
                                }
                                x = !1
                            }
                            try {
                                i = new IntersectionObserver(v, { ...w,
                                    root: o.ownerDocument
                                })
                            } catch (t) {
                                i = new IntersectionObserver(v, w)
                            }
                            i.observe(t)
                        }(!0), l
                    }(d, n) : null,
                    m = -1,
                    g = null;
                c && (g = new ResizeObserver(t => {
                    let [r] = t;
                    r && r.target === d && g && (g.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                        g && g.observe(e)
                    })), n()
                }), d && !a && g.observe(d), g.observe(e));
                let y = a ? E(t) : null;
                return a && function e() {
                    let r = E(t);
                    y && (r.x !== y.x || r.y !== y.y || r.width !== y.width || r.height !== y.height) && n(), y = r, o = requestAnimationFrame(e)
                }(), n(), () => {
                    h.forEach(t => {
                        l && t.removeEventListener("scroll", n), f && t.removeEventListener("resize", n)
                    }), p && p(), g && g.disconnect(), g = null, a && cancelAnimationFrame(o)
                }
            }
            let W = (t, e, n) => {
                let r = new Map,
                    o = {
                        platform: C,
                        ...n
                    },
                    l = { ...o.platform,
                        _c: r
                    };
                return (0, i.oo)(t, e, { ...o,
                    platform: l
                })
            }
        },
        7263: function(t, e, n) {
            n.d(e, {
                Fp: function() {
                    return o
                },
                GW: function() {
                    return u
                },
                I4: function() {
                    return g
                },
                JB: function() {
                    return E
                },
                KX: function() {
                    return R
                },
                NM: function() {
                    return l
                },
                Qq: function() {
                    return y
                },
                Rn: function() {
                    return m
                },
                VV: function() {
                    return i
                },
                Wh: function() {
                    return w
                },
                gy: function() {
                    return v
                },
                hp: function() {
                    return p
                },
                i8: function() {
                    return x
                },
                k3: function() {
                    return h
                },
                ku: function() {
                    return d
                },
                mA: function() {
                    return r
                },
                pw: function() {
                    return k
                },
                uZ: function() {
                    return a
                },
                yd: function() {
                    return A
                },
                ze: function() {
                    return f
                }
            });
            let r = ["top", "right", "bottom", "left"],
                i = Math.min,
                o = Math.max,
                l = Math.round,
                u = Math.floor,
                f = t => ({
                    x: t,
                    y: t
                }),
                c = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                s = {
                    start: "end",
                    end: "start"
                };

            function a(t, e, n) {
                return o(t, i(e, n))
            }

            function d(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function h(t) {
                return t.split("-")[0]
            }

            function p(t) {
                return t.split("-")[1]
            }

            function m(t) {
                return "x" === t ? "y" : "x"
            }

            function g(t) {
                return "y" === t ? "height" : "width"
            }

            function y(t) {
                return ["top", "bottom"].includes(h(t)) ? "y" : "x"
            }

            function w(t) {
                return m(y(t))
            }

            function x(t, e, n) {
                void 0 === n && (n = !1);
                let r = p(t),
                    i = w(t),
                    o = g(i),
                    l = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return e.reference[o] > e.floating[o] && (l = k(l)), [l, k(l)]
            }

            function v(t) {
                let e = k(t);
                return [b(t), e, b(e)]
            }

            function b(t) {
                return t.replace(/start|end/g, t => s[t])
            }

            function R(t, e, n, r) {
                let i = p(t),
                    o = function(t, e, n) {
                        let r = ["left", "right"],
                            i = ["right", "left"];
                        switch (t) {
                            case "top":
                            case "bottom":
                                if (n) return e ? i : r;
                                return e ? r : i;
                            case "left":
                            case "right":
                                return e ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return []
                        }
                    }(h(t), "start" === n, r);
                return i && (o = o.map(t => t + "-" + i), e && (o = o.concat(o.map(b)))), o
            }

            function k(t) {
                return t.replace(/left|right|bottom|top/g, t => c[t])
            }

            function A(t) {
                return "number" != typeof t ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...t
                } : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function E(t) {
                return { ...t,
                    top: t.y,
                    left: t.x,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                }
            }
        },
        28: function(t, e, n) {
            n.d(e, {
                f: function() {
                    return u
                }
            });
            var r = n(27198),
                i = n(2265),
                o = n(38671);
            let l = (0, i.forwardRef)((t, e) => {
                    let {
                        children: n,
                        width: l = 10,
                        height: u = 5,
                        ...f
                    } = t;
                    return (0, i.createElement)(o.WV.svg, (0, r.Z)({}, f, {
                        ref: e,
                        width: l,
                        height: u,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none"
                    }), t.asChild ? n : (0, i.createElement)("polygon", {
                        points: "0,0 30,0 15,10"
                    }))
                }),
                u = l
        },
        29427: function(t, e, n) {
            n.d(e, {
                t: function() {
                    return o
                }
            });
            var r = n(2265),
                i = n(41469);

            function o(t) {
                let [e, n] = (0, r.useState)(void 0);
                return (0, i.b)(() => {
                    if (t) {
                        n({
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        });
                        let e = new ResizeObserver(e => {
                            let r, i;
                            if (!Array.isArray(e) || !e.length) return;
                            let o = e[0];
                            if ("borderBoxSize" in o) {
                                let t = o.borderBoxSize,
                                    e = Array.isArray(t) ? t[0] : t;
                                r = e.inlineSize, i = e.blockSize
                            } else r = t.offsetWidth, i = t.offsetHeight;
                            n({
                                width: r,
                                height: i
                            })
                        });
                        return e.observe(t, {
                            box: "border-box"
                        }), () => e.unobserve(t)
                    }
                    n(void 0)
                }, [t]), e
            }
        }
    }
]);
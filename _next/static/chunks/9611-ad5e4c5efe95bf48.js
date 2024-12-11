(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9611], {
        24033: function(e, t, n) {
            e.exports = n(20290)
        },
        84844: function(e, t, n) {
            "use strict";
            n.d(t, {
                Eh: function() {
                    return ed
                },
                VY: function() {
                    return eg
                },
                h_: function() {
                    return es
                },
                zt: function() {
                    return ei
                },
                fC: function() {
                    return ea
                },
                xz: function() {
                    return eu
                }
            });
            var l = n(27198),
                o = n(2265),
                r = n(21082),
                i = n(88556),
                a = n(46341),
                u = n(48646),
                s = n(36303),
                g = n(82744),
                d = n(94126),
                c = n(38209),
                p = n(28),
                f = n(38671),
                m = n(16418),
                b = n(41469),
                v = n(29427);
            let h = "Popper",
                [C, w] = (0, a.b)(h),
                [S, R] = C(h),
                y = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: r,
                        ...a
                    } = e, u = R("PopperAnchor", n), s = (0, o.useRef)(null), g = (0, i.e)(t, s);
                    return (0, o.useEffect)(() => {
                        u.onAnchorChange((null == r ? void 0 : r.current) || s.current)
                    }), r ? null : (0, o.createElement)(f.WV.div, (0, l.Z)({}, a, {
                        ref: g
                    }))
                }),
                x = "PopperContent",
                [F, M] = C(x),
                V = (0, o.forwardRef)((e, t) => {
                    var n, r, a, u, s, p, h, C;
                    let {
                        __scopePopper: w,
                        side: S = "bottom",
                        sideOffset: y = 0,
                        align: M = "center",
                        alignOffset: V = 0,
                        arrowPadding: E = 0,
                        avoidCollisions: P = !0,
                        collisionBoundary: H = [],
                        collisionPadding: L = 0,
                        sticky: D = "partial",
                        hideWhenDetached: G = !1,
                        updatePositionStrategy: k = "optimized",
                        onPlaced: O,
                        ...z
                    } = e, T = R(x, w), [B, j] = (0, o.useState)(null), q = (0, i.e)(t, e => j(e)), [N, $] = (0, o.useState)(null), U = (0, v.t)(N), X = null !== (n = null == U ? void 0 : U.width) && void 0 !== n ? n : 0, W = null !== (r = null == U ? void 0 : U.height) && void 0 !== r ? r : 0, Z = "number" == typeof L ? L : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...L
                    }, Y = Array.isArray(H) ? H : [H], K = Y.length > 0, J = {
                        padding: Z,
                        boundary: Y.filter(_),
                        altBoundary: K
                    }, {
                        refs: Q,
                        floatingStyles: ee,
                        placement: et,
                        isPositioned: en,
                        middlewareData: el
                    } = (0, g.YF)({
                        strategy: "fixed",
                        placement: S + ("center" !== M ? "-" + M : ""),
                        whileElementsMounted: (...e) => {
                            let t = (0, d.Me)(...e, {
                                animationFrame: "always" === k
                            });
                            return t
                        },
                        elements: {
                            reference: T.anchor
                        },
                        middleware: [(0, c.cv)({
                            mainAxis: y + W,
                            alignmentAxis: V
                        }), P && (0, c.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === D ? (0, c.dr)() : void 0,
                            ...J
                        }), P && (0, c.RR)({ ...J
                        }), (0, c.dp)({ ...J,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: l
                            }) => {
                                let {
                                    width: o,
                                    height: r
                                } = t.reference, i = e.floating.style;
                                i.setProperty("--radix-popper-available-width", `${n}px`), i.setProperty("--radix-popper-available-height", `${l}px`), i.setProperty("--radix-popper-anchor-width", `${o}px`), i.setProperty("--radix-popper-anchor-height", `${r}px`)
                            }
                        }), N && (0, g.x7)({
                            element: N,
                            padding: E
                        }), I({
                            arrowWidth: X,
                            arrowHeight: W
                        }), G && (0, c.Cp)({
                            strategy: "referenceHidden",
                            ...J
                        })]
                    }), [eo, er] = A(et), ei = (0, m.W)(O);
                    (0, b.b)(() => {
                        en && (null == ei || ei())
                    }, [en, ei]);
                    let ea = null === (a = el.arrow) || void 0 === a ? void 0 : a.x,
                        eu = null === (u = el.arrow) || void 0 === u ? void 0 : u.y,
                        es = (null === (s = el.arrow) || void 0 === s ? void 0 : s.centerOffset) !== 0,
                        [eg, ed] = (0, o.useState)();
                    return (0, b.b)(() => {
                        B && ed(window.getComputedStyle(B).zIndex)
                    }, [B]), (0, o.createElement)("div", {
                        ref: Q.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...ee,
                            transform: en ? ee.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: eg,
                            "--radix-popper-transform-origin": [null === (p = el.transformOrigin) || void 0 === p ? void 0 : p.x, null === (h = el.transformOrigin) || void 0 === h ? void 0 : h.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, o.createElement)(F, {
                        scope: w,
                        placedSide: eo,
                        onArrowChange: $,
                        arrowX: ea,
                        arrowY: eu,
                        shouldHideArrow: es
                    }, (0, o.createElement)(f.WV.div, (0, l.Z)({
                        "data-side": eo,
                        "data-align": er
                    }, z, {
                        ref: q,
                        style: { ...z.style,
                            animation: en ? void 0 : "none",
                            opacity: null !== (C = el.hide) && void 0 !== C && C.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                E = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                P = (0, o.forwardRef)(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, i = M("PopperArrow", n), a = E[i.placedSide];
                    return (0, o.createElement)("span", {
                        ref: i.onArrowChange,
                        style: {
                            position: "absolute",
                            left: i.arrowX,
                            top: i.arrowY,
                            [a]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[i.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[i.placedSide],
                            visibility: i.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, o.createElement)(p.f, (0, l.Z)({}, r, {
                        ref: t,
                        style: { ...r.style,
                            display: "block"
                        }
                    })))
                });

            function _(e) {
                return null !== e
            }
            let I = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, l, o, r, i;
                    let {
                        placement: a,
                        rects: u,
                        middlewareData: s
                    } = t, g = (null === (n = s.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, d = g ? 0 : e.arrowWidth, c = g ? 0 : e.arrowHeight, [p, f] = A(a), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[f], b = (null !== (l = null === (o = s.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== l ? l : 0) + d / 2, v = (null !== (r = null === (i = s.arrow) || void 0 === i ? void 0 : i.y) && void 0 !== r ? r : 0) + c / 2, h = "", C = "";
                    return "bottom" === p ? (h = g ? m : `${b}px`, C = `${-c}px`) : "top" === p ? (h = g ? m : `${b}px`, C = `${u.floating.height+c}px`) : "right" === p ? (h = `${-c}px`, C = g ? m : `${v}px`) : "left" === p && (h = `${u.floating.width+c}px`, C = g ? m : `${v}px`), {
                        data: {
                            x: h,
                            y: C
                        }
                    }
                }
            });

            function A(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            let H = e => {
                let {
                    __scopePopper: t,
                    children: n
                } = e, [l, r] = (0, o.useState)(null);
                return (0, o.createElement)(S, {
                    scope: t,
                    anchor: l,
                    onAnchorChange: r
                }, n)
            };
            var L = n(42268),
                D = n(7575),
                G = n(50432),
                k = n(37840);
            let O = (0, o.forwardRef)((e, t) => (0, o.createElement)(f.WV.span, (0, l.Z)({}, e, {
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
                [z, T] = (0, a.b)("Tooltip", [w]),
                B = w(),
                j = "tooltip.open",
                [q, N] = z("TooltipProvider"),
                $ = "Tooltip",
                [U, X] = z($),
                W = "TooltipTrigger",
                Z = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...a
                    } = e, u = X(W, n), s = N(W, n), g = B(n), d = (0, o.useRef)(null), c = (0, i.e)(t, d, u.onTriggerChange), p = (0, o.useRef)(!1), m = (0, o.useRef)(!1), b = (0, o.useCallback)(() => p.current = !1, []);
                    return (0, o.useEffect)(() => () => document.removeEventListener("pointerup", b), [b]), (0, o.createElement)(y, (0, l.Z)({
                        asChild: !0
                    }, g), (0, o.createElement)(f.WV.button, (0, l.Z)({
                        "aria-describedby": u.open ? u.contentId : void 0,
                        "data-state": u.stateAttribute
                    }, a, {
                        ref: c,
                        onPointerMove: (0, r.M)(e.onPointerMove, e => {
                            "touch" === e.pointerType || m.current || s.isPointerInTransitRef.current || (u.onTriggerEnter(), m.current = !0)
                        }),
                        onPointerLeave: (0, r.M)(e.onPointerLeave, () => {
                            u.onTriggerLeave(), m.current = !1
                        }),
                        onPointerDown: (0, r.M)(e.onPointerDown, () => {
                            p.current = !0, document.addEventListener("pointerup", b, {
                                once: !0
                            })
                        }),
                        onFocus: (0, r.M)(e.onFocus, () => {
                            p.current || u.onOpen()
                        }),
                        onBlur: (0, r.M)(e.onBlur, u.onClose),
                        onClick: (0, r.M)(e.onClick, u.onClose)
                    })))
                }),
                Y = "TooltipPortal",
                [K, J] = z(Y, {
                    forceMount: void 0
                }),
                Q = "TooltipContent",
                ee = (0, o.forwardRef)((e, t) => {
                    let n = J(Q, e.__scopeTooltip),
                        {
                            forceMount: r = n.forceMount,
                            side: i = "top",
                            ...a
                        } = e,
                        u = X(Q, e.__scopeTooltip);
                    return (0, o.createElement)(D.z, {
                        present: r || u.open
                    }, u.disableHoverableContent ? (0, o.createElement)(eo, (0, l.Z)({
                        side: i
                    }, a, {
                        ref: t
                    })) : (0, o.createElement)(et, (0, l.Z)({
                        side: i
                    }, a, {
                        ref: t
                    })))
                }),
                et = (0, o.forwardRef)((e, t) => {
                    let n = X(Q, e.__scopeTooltip),
                        r = N(Q, e.__scopeTooltip),
                        a = (0, o.useRef)(null),
                        u = (0, i.e)(t, a),
                        [s, g] = (0, o.useState)(null),
                        {
                            trigger: d,
                            onClose: c
                        } = n,
                        p = a.current,
                        {
                            onPointerInTransitChange: f
                        } = r,
                        m = (0, o.useCallback)(() => {
                            g(null), f(!1)
                        }, [f]),
                        b = (0, o.useCallback)((e, t) => {
                            let n = e.currentTarget,
                                l = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let n = Math.abs(t.top - e.y),
                                        l = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        r = Math.abs(t.left - e.x);
                                    switch (Math.min(n, l, o, r)) {
                                        case r:
                                            return "left";
                                        case o:
                                            return "right";
                                        case n:
                                            return "top";
                                        case l:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(l, n.getBoundingClientRect()),
                                r = function(e, t, n = 5) {
                                    let l = [];
                                    switch (t) {
                                        case "top":
                                            l.push({
                                                x: e.x - n,
                                                y: e.y + n
                                            }, {
                                                x: e.x + n,
                                                y: e.y + n
                                            });
                                            break;
                                        case "bottom":
                                            l.push({
                                                x: e.x - n,
                                                y: e.y - n
                                            }, {
                                                x: e.x + n,
                                                y: e.y - n
                                            });
                                            break;
                                        case "left":
                                            l.push({
                                                x: e.x + n,
                                                y: e.y - n
                                            }, {
                                                x: e.x + n,
                                                y: e.y + n
                                            });
                                            break;
                                        case "right":
                                            l.push({
                                                x: e.x - n,
                                                y: e.y - n
                                            }, {
                                                x: e.x - n,
                                                y: e.y + n
                                            })
                                    }
                                    return l
                                }(l, o),
                                i = function(e) {
                                    let {
                                        top: t,
                                        right: n,
                                        bottom: l,
                                        left: o
                                    } = e;
                                    return [{
                                        x: o,
                                        y: t
                                    }, {
                                        x: n,
                                        y: t
                                    }, {
                                        x: n,
                                        y: l
                                    }, {
                                        x: o,
                                        y: l
                                    }]
                                }(t.getBoundingClientRect()),
                                a = function(e) {
                                    let t = e.slice();
                                    return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                        function(e) {
                                            if (e.length <= 1) return e.slice();
                                            let t = [];
                                            for (let n = 0; n < e.length; n++) {
                                                let l = e[n];
                                                for (; t.length >= 2;) {
                                                    let e = t[t.length - 1],
                                                        n = t[t.length - 2];
                                                    if ((e.x - n.x) * (l.y - n.y) >= (e.y - n.y) * (l.x - n.x)) t.pop();
                                                    else break
                                                }
                                                t.push(l)
                                            }
                                            t.pop();
                                            let n = [];
                                            for (let t = e.length - 1; t >= 0; t--) {
                                                let l = e[t];
                                                for (; n.length >= 2;) {
                                                    let e = n[n.length - 1],
                                                        t = n[n.length - 2];
                                                    if ((e.x - t.x) * (l.y - t.y) >= (e.y - t.y) * (l.x - t.x)) n.pop();
                                                    else break
                                                }
                                                n.push(l)
                                            }
                                            return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                        }(t)
                                }([...r, ...i]);
                            g(a), f(!0)
                        }, [f]);
                    return (0, o.useEffect)(() => () => m(), [m]), (0, o.useEffect)(() => {
                        if (d && p) {
                            let e = e => b(e, p),
                                t = e => b(e, d);
                            return d.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
                                d.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [d, p, b, m]), (0, o.useEffect)(() => {
                        if (s) {
                            let e = e => {
                                let t = e.target,
                                    n = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    l = (null == d ? void 0 : d.contains(t)) || (null == p ? void 0 : p.contains(t)),
                                    o = ! function(e, t) {
                                        let {
                                            x: n,
                                            y: l
                                        } = e, o = !1;
                                        for (let e = 0, r = t.length - 1; e < t.length; r = e++) {
                                            let i = t[e].x,
                                                a = t[e].y,
                                                u = t[r].x,
                                                s = t[r].y,
                                                g = a > l != s > l && n < (u - i) * (l - a) / (s - a) + i;
                                            g && (o = !o)
                                        }
                                        return o
                                    }(n, s);
                                l ? m() : o && (m(), c())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [d, p, s, c, m]), (0, o.createElement)(eo, (0, l.Z)({}, e, {
                        ref: u
                    }))
                }),
                [en, el] = z($, {
                    isInside: !1
                }),
                eo = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: n,
                        children: r,
                        "aria-label": i,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        ...g
                    } = e, d = X(Q, n), c = B(n), {
                        onClose: p
                    } = d;
                    return (0, o.useEffect)(() => (document.addEventListener(j, p), () => document.removeEventListener(j, p)), [p]), (0, o.useEffect)(() => {
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
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: p
                    }, (0, o.createElement)(V, (0, l.Z)({
                        "data-state": d.stateAttribute
                    }, c, g, {
                        ref: t,
                        style: { ...g.style,
                            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }), (0, o.createElement)(G.A4, null, r), (0, o.createElement)(en, {
                        scope: n,
                        isInside: !0
                    }, (0, o.createElement)(O, {
                        id: d.contentId,
                        role: "tooltip"
                    }, i || r))))
                }),
                er = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...r
                    } = e, i = B(n), a = el("TooltipArrow", n);
                    return a.isInside ? null : (0, o.createElement)(P, (0, l.Z)({}, i, r, {
                        ref: t
                    }))
                }),
                ei = e => {
                    let {
                        __scopeTooltip: t,
                        delayDuration: n = 700,
                        skipDelayDuration: l = 300,
                        disableHoverableContent: r = !1,
                        children: i
                    } = e, [a, u] = (0, o.useState)(!0), s = (0, o.useRef)(!1), g = (0, o.useRef)(0);
                    return (0, o.useEffect)(() => {
                        let e = g.current;
                        return () => window.clearTimeout(e)
                    }, []), (0, o.createElement)(q, {
                        scope: t,
                        isOpenDelayed: a,
                        delayDuration: n,
                        onOpen: (0, o.useCallback)(() => {
                            window.clearTimeout(g.current), u(!1)
                        }, []),
                        onClose: (0, o.useCallback)(() => {
                            window.clearTimeout(g.current), g.current = window.setTimeout(() => u(!0), l)
                        }, [l]),
                        isPointerInTransitRef: s,
                        onPointerInTransitChange: (0, o.useCallback)(e => {
                            s.current = e
                        }, []),
                        disableHoverableContent: r
                    }, i)
                },
                ea = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: l,
                        defaultOpen: r = !1,
                        onOpenChange: i,
                        disableHoverableContent: a,
                        delayDuration: u
                    } = e, g = N($, e.__scopeTooltip), d = B(t), [c, p] = (0, o.useState)(null), f = (0, s.M)(), m = (0, o.useRef)(0), b = null != a ? a : g.disableHoverableContent, v = null != u ? u : g.delayDuration, h = (0, o.useRef)(!1), [C = !1, w] = (0, k.T)({
                        prop: l,
                        defaultProp: r,
                        onChange: e => {
                            e ? (g.onOpen(), document.dispatchEvent(new CustomEvent(j))) : g.onClose(), null == i || i(e)
                        }
                    }), S = (0, o.useMemo)(() => C ? h.current ? "delayed-open" : "instant-open" : "closed", [C]), R = (0, o.useCallback)(() => {
                        window.clearTimeout(m.current), h.current = !1, w(!0)
                    }, [w]), y = (0, o.useCallback)(() => {
                        window.clearTimeout(m.current), w(!1)
                    }, [w]), x = (0, o.useCallback)(() => {
                        window.clearTimeout(m.current), m.current = window.setTimeout(() => {
                            h.current = !0, w(!0)
                        }, v)
                    }, [v, w]);
                    return (0, o.useEffect)(() => () => window.clearTimeout(m.current), []), (0, o.createElement)(H, d, (0, o.createElement)(U, {
                        scope: t,
                        contentId: f,
                        open: C,
                        stateAttribute: S,
                        trigger: c,
                        onTriggerChange: p,
                        onTriggerEnter: (0, o.useCallback)(() => {
                            g.isOpenDelayed ? x() : R()
                        }, [g.isOpenDelayed, x, R]),
                        onTriggerLeave: (0, o.useCallback)(() => {
                            b ? y() : window.clearTimeout(m.current)
                        }, [y, b]),
                        onOpen: R,
                        onClose: y,
                        disableHoverableContent: b
                    }, n))
                },
                eu = Z,
                es = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: n,
                        children: l,
                        container: r
                    } = e, i = X(Y, t);
                    return (0, o.createElement)(K, {
                        scope: t,
                        forceMount: n
                    }, (0, o.createElement)(D.z, {
                        present: n || i.open
                    }, (0, o.createElement)(L.h, {
                        asChild: !0,
                        container: r
                    }, l)))
                },
                eg = ee,
                ed = er
        },
        8753: function(e, t, n) {
            "use strict";
            n.d(t, {
                b7: function() {
                    return i
                },
                ie: function() {
                    return r
                }
            });
            var l = n(2265),
                o = n(74432);
            /**
             * react-table
             *
             * Copyright (c) TanStack
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE.md file in the root directory of this source tree.
             *
             * @license MIT
             */
            function r(e, t) {
                return e ? "function" == typeof e && (() => {
                    let t = Object.getPrototypeOf(e);
                    return t.prototype && t.prototype.isReactComponent
                })() || "function" == typeof e || "object" == typeof e && "symbol" == typeof e.$$typeof && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description) ? l.createElement(e, t) : e : null
            }

            function i(e) {
                let t = {
                        state: {},
                        onStateChange: () => {},
                        renderFallbackValue: null,
                        ...e
                    },
                    [n] = l.useState(() => ({
                        current: (0, o.W_)(t)
                    })),
                    [r, i] = l.useState(() => n.current.initialState);
                return n.current.setOptions(t => ({ ...t,
                    ...e,
                    state: { ...r,
                        ...e.state
                    },
                    onStateChange: t => {
                        i(t), null == e.onStateChange || e.onStateChange(t)
                    }
                })), n.current
            }
        },
        74432: function(e, t, n) {
            "use strict";
            /**
             * table-core
             *
             * Copyright (c) TanStack
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE.md file in the root directory of this source tree.
             *
             * @license MIT
             */
            function l(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function o(e, t) {
                return n => {
                    t.setState(t => ({ ...t,
                        [e]: l(n, t[e])
                    }))
                }
            }

            function r(e) {
                return e instanceof Function
            }

            function i(e, t, n) {
                let l, o = [];
                return () => {
                    let r, i;
                    n.key && n.debug && (r = Date.now());
                    let a = e(),
                        u = a.length !== o.length || a.some((e, t) => o[t] !== e);
                    if (!u) return l;
                    if (o = a, n.key && n.debug && (i = Date.now()), l = t(...a), null == n || null == n.onChange || n.onChange(l), n.key && n.debug && null != n && n.debug()) {
                        let e = Math.round((Date.now() - r) * 100) / 100,
                            t = Math.round((Date.now() - i) * 100) / 100,
                            l = t / 16,
                            o = (e, t) => {
                                for (e = String(e); e.length < t;) e = " " + e;
                                return e
                            };
                        console.info(`%c⏱ ${o(t,5)} /${o(e,5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*l,120))}deg 100% 31%);`, null == n ? void 0 : n.key)
                    }
                    return l
                }
            }

            function a(e, t, n) {
                var l;
                let o = null != (l = n.id) ? l : t.id,
                    r = {
                        id: o,
                        column: t,
                        index: n.index,
                        isPlaceholder: !!n.isPlaceholder,
                        placeholderId: n.placeholderId,
                        depth: n.depth,
                        subHeaders: [],
                        colSpan: 0,
                        rowSpan: 0,
                        headerGroup: null,
                        getLeafHeaders: () => {
                            let e = [],
                                t = n => {
                                    n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n)
                                };
                            return t(r), e
                        },
                        getContext: () => ({
                            table: e,
                            header: r,
                            column: t
                        })
                    };
                return e._features.forEach(t => {
                    Object.assign(r, null == t.createHeader ? void 0 : t.createHeader(r, e))
                }), r
            }

            function u(e, t, n, l) {
                var o, r;
                let i = 0,
                    u = function(e, t) {
                        void 0 === t && (t = 1), i = Math.max(i, t), e.filter(e => e.getIsVisible()).forEach(e => {
                            var n;
                            null != (n = e.columns) && n.length && u(e.columns, t + 1)
                        }, 0)
                    };
                u(e);
                let s = [],
                    g = (e, t) => {
                        let o = {
                                depth: t,
                                id: [l, `${t}`].filter(Boolean).join("_"),
                                headers: []
                            },
                            r = [];
                        e.forEach(e => {
                            let i;
                            let u = [...r].reverse()[0],
                                s = e.column.depth === o.depth,
                                g = !1;
                            if (s && e.column.parent ? i = e.column.parent : (i = e.column, g = !0), u && (null == u ? void 0 : u.column) === i) u.subHeaders.push(e);
                            else {
                                let o = a(n, i, {
                                    id: [l, t, i.id, null == e ? void 0 : e.id].filter(Boolean).join("_"),
                                    isPlaceholder: g,
                                    placeholderId: g ? `${r.filter(e=>e.column===i).length}` : void 0,
                                    depth: t,
                                    index: r.length
                                });
                                o.subHeaders.push(e), r.push(o)
                            }
                            o.headers.push(e), e.headerGroup = o
                        }), s.push(o), t > 0 && g(r, t - 1)
                    },
                    d = t.map((e, t) => a(n, e, {
                        depth: i,
                        index: t
                    }));
                g(d, i - 1), s.reverse();
                let c = e => {
                    let t = e.filter(e => e.column.getIsVisible());
                    return t.map(e => {
                        let t = 0,
                            n = 0,
                            l = [0];
                        e.subHeaders && e.subHeaders.length ? (l = [], c(e.subHeaders).forEach(e => {
                            let {
                                colSpan: n,
                                rowSpan: o
                            } = e;
                            t += n, l.push(o)
                        })) : t = 1;
                        let o = Math.min(...l);
                        return n += o, e.colSpan = t, e.rowSpan = n, {
                            colSpan: t,
                            rowSpan: n
                        }
                    })
                };
                return c(null != (o = null == (r = s[0]) ? void 0 : r.headers) ? o : []), s
            }
            n.d(t, {
                W_: function() {
                    return O
                },
                rV: function() {
                    return B
                },
                sC: function() {
                    return T
                }
            });
            let s = {
                    size: 150,
                    minSize: 20,
                    maxSize: Number.MAX_SAFE_INTEGER
                },
                g = () => ({
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    isResizingColumn: !1,
                    columnSizingStart: []
                }),
                d = null;

            function c(e) {
                return "touchstart" === e.type
            }
            let p = (e, t, n) => {
                var l, o, r;
                let i = n.toLowerCase();
                return !!(null == (l = e.getValue(t)) ? void 0 : null == (o = l.toString()) ? void 0 : null == (r = o.toLowerCase()) ? void 0 : r.includes(i))
            };
            p.autoRemove = e => y(e);
            let f = (e, t, n) => {
                var l, o;
                return !!(null == (l = e.getValue(t)) ? void 0 : null == (o = l.toString()) ? void 0 : o.includes(n))
            };
            f.autoRemove = e => y(e);
            let m = (e, t, n) => {
                var l, o;
                return (null == (l = e.getValue(t)) ? void 0 : null == (o = l.toString()) ? void 0 : o.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
            };
            m.autoRemove = e => y(e);
            let b = (e, t, n) => {
                var l;
                return null == (l = e.getValue(t)) ? void 0 : l.includes(n)
            };
            b.autoRemove = e => y(e) || !(null != e && e.length);
            let v = (e, t, n) => !n.some(n => {
                var l;
                return !(null != (l = e.getValue(t)) && l.includes(n))
            });
            v.autoRemove = e => y(e) || !(null != e && e.length);
            let h = (e, t, n) => n.some(n => {
                var l;
                return null == (l = e.getValue(t)) ? void 0 : l.includes(n)
            });
            h.autoRemove = e => y(e) || !(null != e && e.length);
            let C = (e, t, n) => e.getValue(t) === n;
            C.autoRemove = e => y(e);
            let w = (e, t, n) => e.getValue(t) == n;
            w.autoRemove = e => y(e);
            let S = (e, t, n) => {
                let [l, o] = n, r = e.getValue(t);
                return r >= l && r <= o
            };
            S.resolveFilterValue = e => {
                let [t, n] = e, l = "number" != typeof t ? parseFloat(t) : t, o = "number" != typeof n ? parseFloat(n) : n, r = null === t || Number.isNaN(l) ? -1 / 0 : l, i = null === n || Number.isNaN(o) ? 1 / 0 : o;
                if (r > i) {
                    let e = r;
                    r = i, i = e
                }
                return [r, i]
            }, S.autoRemove = e => y(e) || y(e[0]) && y(e[1]);
            let R = {
                includesString: p,
                includesStringSensitive: f,
                equalsString: m,
                arrIncludes: b,
                arrIncludesAll: v,
                arrIncludesSome: h,
                equals: C,
                weakEquals: w,
                inNumberRange: S
            };

            function y(e) {
                return null == e || "" === e
            }

            function x(e, t, n) {
                return !!e && !!e.autoRemove && e.autoRemove(t, n) || void 0 === t || "string" == typeof t && !t
            }
            let F = {
                    sum: (e, t, n) => n.reduce((t, n) => {
                        let l = n.getValue(e);
                        return t + ("number" == typeof l ? l : 0)
                    }, 0),
                    min: (e, t, n) => {
                        let l;
                        return n.forEach(t => {
                            let n = t.getValue(e);
                            null != n && (l > n || void 0 === l && n >= n) && (l = n)
                        }), l
                    },
                    max: (e, t, n) => {
                        let l;
                        return n.forEach(t => {
                            let n = t.getValue(e);
                            null != n && (l < n || void 0 === l && n >= n) && (l = n)
                        }), l
                    },
                    extent: (e, t, n) => {
                        let l, o;
                        return n.forEach(t => {
                            let n = t.getValue(e);
                            null != n && (void 0 === l ? n >= n && (l = o = n) : (l > n && (l = n), o < n && (o = n)))
                        }), [l, o]
                    },
                    mean: (e, t) => {
                        let n = 0,
                            l = 0;
                        if (t.forEach(t => {
                                let o = t.getValue(e);
                                null != o && (o = +o) >= o && (++n, l += o)
                            }), n) return l / n
                    },
                    median: (e, t) => {
                        if (!t.length) return;
                        let n = t.map(t => t.getValue(e));
                        if (!(Array.isArray(n) && n.every(e => "number" == typeof e))) return;
                        if (1 === n.length) return n[0];
                        let l = Math.floor(n.length / 2),
                            o = n.sort((e, t) => e - t);
                        return n.length % 2 != 0 ? o[l] : (o[l - 1] + o[l]) / 2
                    },
                    unique: (e, t) => Array.from(new Set(t.map(t => t.getValue(e))).values()),
                    uniqueCount: (e, t) => new Set(t.map(t => t.getValue(e))).size,
                    count: (e, t) => t.length
                },
                M = () => ({
                    pageIndex: 0,
                    pageSize: 10
                }),
                V = () => ({
                    left: [],
                    right: []
                }),
                E = (e, t, n, l) => {
                    var o;
                    let r = l.getRow(t);
                    n ? (r.getCanMultiSelect() || Object.keys(e).forEach(t => delete e[t]), r.getCanSelect() && (e[t] = !0)) : delete e[t], null != (o = r.subRows) && o.length && r.getCanSelectSubRows() && r.subRows.forEach(t => E(e, t.id, n, l))
                };

            function P(e, t) {
                let n = e.getState().rowSelection,
                    l = [],
                    o = {},
                    r = function(e, t) {
                        return e.map(e => {
                            var t;
                            let i = _(e, n);
                            if (i && (l.push(e), o[e.id] = e), null != (t = e.subRows) && t.length && (e = { ...e,
                                    subRows: r(e.subRows)
                                }), i) return e
                        }).filter(Boolean)
                    };
                return {
                    rows: r(t.rows),
                    flatRows: l,
                    rowsById: o
                }
            }

            function _(e, t) {
                var n;
                return null != (n = t[e.id]) && n
            }

            function I(e, t, n) {
                if (e.subRows && e.subRows.length) {
                    let n = !0,
                        l = !1;
                    return e.subRows.forEach(e => {
                        (!l || n) && (_(e, t) ? l = !0 : n = !1)
                    }), n ? "all" : !!l && "some"
                }
                return !1
            }
            let A = /([0-9]+)/gm;

            function H(e, t) {
                return e === t ? 0 : e > t ? 1 : -1
            }

            function L(e) {
                return "number" == typeof e ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : "string" == typeof e ? e : ""
            }

            function D(e, t) {
                let n = e.split(A).filter(Boolean),
                    l = t.split(A).filter(Boolean);
                for (; n.length && l.length;) {
                    let e = n.shift(),
                        t = l.shift(),
                        o = parseInt(e, 10),
                        r = parseInt(t, 10),
                        i = [o, r].sort();
                    if (isNaN(i[0])) {
                        if (e > t) return 1;
                        if (t > e) return -1;
                        continue
                    }
                    if (isNaN(i[1])) return isNaN(o) ? -1 : 1;
                    if (o > r) return 1;
                    if (r > o) return -1
                }
                return n.length - l.length
            }
            let G = {
                    alphanumeric: (e, t, n) => D(L(e.getValue(n)).toLowerCase(), L(t.getValue(n)).toLowerCase()),
                    alphanumericCaseSensitive: (e, t, n) => D(L(e.getValue(n)), L(t.getValue(n))),
                    text: (e, t, n) => H(L(e.getValue(n)).toLowerCase(), L(t.getValue(n)).toLowerCase()),
                    textCaseSensitive: (e, t, n) => H(L(e.getValue(n)), L(t.getValue(n))),
                    datetime: (e, t, n) => {
                        let l = e.getValue(n),
                            o = t.getValue(n);
                        return l > o ? 1 : l < o ? -1 : 0
                    },
                    basic: (e, t, n) => H(e.getValue(n), t.getValue(n))
                },
                k = [{
                    createTable: e => ({
                        getHeaderGroups: i(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, l, o) => {
                            var r, i;
                            let a = null != (r = null == l ? void 0 : l.map(e => n.find(t => t.id === e)).filter(Boolean)) ? r : [],
                                s = null != (i = null == o ? void 0 : o.map(e => n.find(t => t.id === e)).filter(Boolean)) ? i : [],
                                g = n.filter(e => !(null != l && l.includes(e.id)) && !(null != o && o.includes(e.id))),
                                d = u(t, [...a, ...g, ...s], e);
                            return d
                        }, {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getCenterHeaderGroups: i(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, l, o) => u(t, n = n.filter(e => !(null != l && l.includes(e.id)) && !(null != o && o.includes(e.id))), e, "center"), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getLeftHeaderGroups: i(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, l) => {
                            var o;
                            let r = null != (o = null == l ? void 0 : l.map(e => n.find(t => t.id === e)).filter(Boolean)) ? o : [];
                            return u(t, r, e, "left")
                        }, {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getRightHeaderGroups: i(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, l) => {
                            var o;
                            let r = null != (o = null == l ? void 0 : l.map(e => n.find(t => t.id === e)).filter(Boolean)) ? o : [];
                            return u(t, r, e, "right")
                        }, {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getFooterGroups: i(() => [e.getHeaderGroups()], e => [...e].reverse(), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getLeftFooterGroups: i(() => [e.getLeftHeaderGroups()], e => [...e].reverse(), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getCenterFooterGroups: i(() => [e.getCenterHeaderGroups()], e => [...e].reverse(), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getRightFooterGroups: i(() => [e.getRightHeaderGroups()], e => [...e].reverse(), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getFlatHeaders: i(() => [e.getHeaderGroups()], e => e.map(e => e.headers).flat(), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getLeftFlatHeaders: i(() => [e.getLeftHeaderGroups()], e => e.map(e => e.headers).flat(), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getCenterFlatHeaders: i(() => [e.getCenterHeaderGroups()], e => e.map(e => e.headers).flat(), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getRightFlatHeaders: i(() => [e.getRightHeaderGroups()], e => e.map(e => e.headers).flat(), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getCenterLeafHeaders: i(() => [e.getCenterFlatHeaders()], e => e.filter(e => {
                            var t;
                            return !(null != (t = e.subHeaders) && t.length)
                        }), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getLeftLeafHeaders: i(() => [e.getLeftFlatHeaders()], e => e.filter(e => {
                            var t;
                            return !(null != (t = e.subHeaders) && t.length)
                        }), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getRightLeafHeaders: i(() => [e.getRightFlatHeaders()], e => e.filter(e => {
                            var t;
                            return !(null != (t = e.subHeaders) && t.length)
                        }), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        }),
                        getLeafHeaders: i(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (e, t, n) => {
                            var l, o, r, i, a, u;
                            return [...null != (l = null == (o = e[0]) ? void 0 : o.headers) ? l : [], ...null != (r = null == (i = t[0]) ? void 0 : i.headers) ? r : [], ...null != (a = null == (u = n[0]) ? void 0 : u.headers) ? a : []].map(e => e.getLeafHeaders()).flat()
                        }, {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
                            }
                        })
                    })
                }, {
                    getInitialState: e => ({
                        columnVisibility: {},
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onColumnVisibilityChange: o("columnVisibility", e)
                    }),
                    createColumn: (e, t) => ({
                        toggleVisibility: n => {
                            e.getCanHide() && t.setColumnVisibility(t => ({ ...t,
                                [e.id]: null != n ? n : !e.getIsVisible()
                            }))
                        },
                        getIsVisible: () => {
                            var n, l;
                            return null == (n = null == (l = t.getState().columnVisibility) ? void 0 : l[e.id]) || n
                        },
                        getCanHide: () => {
                            var n, l;
                            return (null == (n = e.columnDef.enableHiding) || n) && (null == (l = t.options.enableHiding) || l)
                        },
                        getToggleVisibilityHandler: () => t => {
                            null == e.toggleVisibility || e.toggleVisibility(t.target.checked)
                        }
                    }),
                    createRow: (e, t) => ({
                        _getAllVisibleCells: i(() => [e.getAllCells(), t.getState().columnVisibility], e => e.filter(e => e.column.getIsVisible()), {
                            key: "row._getAllVisibleCells",
                            debug: () => {
                                var e;
                                return null != (e = t.options.debugAll) ? e : t.options.debugRows
                            }
                        }),
                        getVisibleCells: i(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (e, t, n) => [...e, ...t, ...n], {
                            key: !1,
                            debug: () => {
                                var e;
                                return null != (e = t.options.debugAll) ? e : t.options.debugRows
                            }
                        })
                    }),
                    createTable: e => {
                        let t = (t, n) => i(() => [n(), n().filter(e => e.getIsVisible()).map(e => e.id).join("_")], e => e.filter(e => null == e.getIsVisible ? void 0 : e.getIsVisible()), {
                            key: t,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                            }
                        });
                        return {
                            getVisibleFlatColumns: t("getVisibleFlatColumns", () => e.getAllFlatColumns()),
                            getVisibleLeafColumns: t("getVisibleLeafColumns", () => e.getAllLeafColumns()),
                            getLeftVisibleLeafColumns: t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()),
                            getRightVisibleLeafColumns: t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()),
                            getCenterVisibleLeafColumns: t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()),
                            setColumnVisibility: t => null == e.options.onColumnVisibilityChange ? void 0 : e.options.onColumnVisibilityChange(t),
                            resetColumnVisibility: t => {
                                var n;
                                e.setColumnVisibility(t ? {} : null != (n = e.initialState.columnVisibility) ? n : {})
                            },
                            toggleAllColumnsVisible: t => {
                                t = null != t ? t : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((e, n) => ({ ...e,
                                    [n.id]: t || !(null != n.getCanHide && n.getCanHide())
                                }), {}))
                            },
                            getIsAllColumnsVisible: () => !e.getAllLeafColumns().some(e => !(null != e.getIsVisible && e.getIsVisible())),
                            getIsSomeColumnsVisible: () => e.getAllLeafColumns().some(e => null == e.getIsVisible ? void 0 : e.getIsVisible()),
                            getToggleAllColumnsVisibilityHandler: () => t => {
                                var n;
                                e.toggleAllColumnsVisible(null == (n = t.target) ? void 0 : n.checked)
                            }
                        }
                    }
                }, {
                    getInitialState: e => ({
                        columnOrder: [],
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onColumnOrderChange: o("columnOrder", e)
                    }),
                    createTable: e => ({
                        setColumnOrder: t => null == e.options.onColumnOrderChange ? void 0 : e.options.onColumnOrderChange(t),
                        resetColumnOrder: t => {
                            var n;
                            e.setColumnOrder(t ? [] : null != (n = e.initialState.columnOrder) ? n : [])
                        },
                        _getOrderColumnsFn: i(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (e, t, n) => l => {
                            let o = [];
                            if (null != e && e.length) {
                                let t = [...e],
                                    n = [...l];
                                for (; n.length && t.length;) {
                                    let e = t.shift(),
                                        l = n.findIndex(t => t.id === e);
                                    l > -1 && o.push(n.splice(l, 1)[0])
                                }
                                o = [...o, ...n]
                            } else o = l;
                            return function(e, t, n) {
                                if (!(null != t && t.length) || !n) return e;
                                let l = e.filter(e => !t.includes(e.id));
                                if ("remove" === n) return l;
                                let o = t.map(t => e.find(e => e.id === t)).filter(Boolean);
                                return [...o, ...l]
                            }(o, t, n)
                        }, {
                            key: !1
                        })
                    })
                }, {
                    getInitialState: e => ({
                        columnPinning: V(),
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onColumnPinningChange: o("columnPinning", e)
                    }),
                    createColumn: (e, t) => ({
                        pin: n => {
                            let l = e.getLeafColumns().map(e => e.id).filter(Boolean);
                            t.setColumnPinning(e => {
                                var t, o, r, i, a, u;
                                return "right" === n ? {
                                    left: (null != (r = null == e ? void 0 : e.left) ? r : []).filter(e => !(null != l && l.includes(e))),
                                    right: [...(null != (i = null == e ? void 0 : e.right) ? i : []).filter(e => !(null != l && l.includes(e))), ...l]
                                } : "left" === n ? {
                                    left: [...(null != (a = null == e ? void 0 : e.left) ? a : []).filter(e => !(null != l && l.includes(e))), ...l],
                                    right: (null != (u = null == e ? void 0 : e.right) ? u : []).filter(e => !(null != l && l.includes(e)))
                                } : {
                                    left: (null != (t = null == e ? void 0 : e.left) ? t : []).filter(e => !(null != l && l.includes(e))),
                                    right: (null != (o = null == e ? void 0 : e.right) ? o : []).filter(e => !(null != l && l.includes(e)))
                                }
                            })
                        },
                        getCanPin: () => {
                            let n = e.getLeafColumns();
                            return n.some(e => {
                                var n, l;
                                return (null == (n = e.columnDef.enablePinning) || n) && (null == (l = t.options.enablePinning) || l)
                            })
                        },
                        getIsPinned: () => {
                            let n = e.getLeafColumns().map(e => e.id),
                                {
                                    left: l,
                                    right: o
                                } = t.getState().columnPinning,
                                r = n.some(e => null == l ? void 0 : l.includes(e)),
                                i = n.some(e => null == o ? void 0 : o.includes(e));
                            return r ? "left" : !!i && "right"
                        },
                        getPinnedIndex: () => {
                            var n, l, o;
                            let r = e.getIsPinned();
                            return r ? null != (n = null == (l = t.getState().columnPinning) ? void 0 : null == (o = l[r]) ? void 0 : o.indexOf(e.id)) ? n : -1 : 0
                        }
                    }),
                    createRow: (e, t) => ({
                        getCenterVisibleCells: i(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (e, t, n) => {
                            let l = [...null != t ? t : [], ...null != n ? n : []];
                            return e.filter(e => !l.includes(e.column.id))
                        }, {
                            key: "row.getCenterVisibleCells",
                            debug: () => {
                                var e;
                                return null != (e = t.options.debugAll) ? e : t.options.debugRows
                            }
                        }),
                        getLeftVisibleCells: i(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, , ], (e, t) => {
                            let n = (null != t ? t : []).map(t => e.find(e => e.column.id === t)).filter(Boolean).map(e => ({ ...e,
                                position: "left"
                            }));
                            return n
                        }, {
                            key: "row.getLeftVisibleCells",
                            debug: () => {
                                var e;
                                return null != (e = t.options.debugAll) ? e : t.options.debugRows
                            }
                        }),
                        getRightVisibleCells: i(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (e, t) => {
                            let n = (null != t ? t : []).map(t => e.find(e => e.column.id === t)).filter(Boolean).map(e => ({ ...e,
                                position: "right"
                            }));
                            return n
                        }, {
                            key: "row.getRightVisibleCells",
                            debug: () => {
                                var e;
                                return null != (e = t.options.debugAll) ? e : t.options.debugRows
                            }
                        })
                    }),
                    createTable: e => ({
                        setColumnPinning: t => null == e.options.onColumnPinningChange ? void 0 : e.options.onColumnPinningChange(t),
                        resetColumnPinning: t => {
                            var n, l;
                            return e.setColumnPinning(t ? V() : null != (n = null == (l = e.initialState) ? void 0 : l.columnPinning) ? n : V())
                        },
                        getIsSomeColumnsPinned: t => {
                            var n, l, o;
                            let r = e.getState().columnPinning;
                            return t ? !!(null == (n = r[t]) ? void 0 : n.length) : !!((null == (l = r.left) ? void 0 : l.length) || (null == (o = r.right) ? void 0 : o.length))
                        },
                        getLeftLeafColumns: i(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (e, t) => (null != t ? t : []).map(t => e.find(e => e.id === t)).filter(Boolean), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                            }
                        }),
                        getRightLeafColumns: i(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (e, t) => (null != t ? t : []).map(t => e.find(e => e.id === t)).filter(Boolean), {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                            }
                        }),
                        getCenterLeafColumns: i(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (e, t, n) => {
                            let l = [...null != t ? t : [], ...null != n ? n : []];
                            return e.filter(e => !l.includes(e.id))
                        }, {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                            }
                        })
                    })
                }, {
                    getDefaultColumnDef: () => ({
                        filterFn: "auto"
                    }),
                    getInitialState: e => ({
                        columnFilters: [],
                        globalFilter: void 0,
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onColumnFiltersChange: o("columnFilters", e),
                        onGlobalFilterChange: o("globalFilter", e),
                        filterFromLeafRows: !1,
                        maxLeafRowFilterDepth: 100,
                        globalFilterFn: "auto",
                        getColumnCanGlobalFilter: t => {
                            var n, l;
                            let o = null == (n = e.getCoreRowModel().flatRows[0]) ? void 0 : null == (l = n._getAllCellsByColumnId()[t.id]) ? void 0 : l.getValue();
                            return "string" == typeof o || "number" == typeof o
                        }
                    }),
                    createColumn: (e, t) => ({
                        getAutoFilterFn: () => {
                            let n = t.getCoreRowModel().flatRows[0],
                                l = null == n ? void 0 : n.getValue(e.id);
                            return "string" == typeof l ? R.includesString : "number" == typeof l ? R.inNumberRange : "boolean" == typeof l || null !== l && "object" == typeof l ? R.equals : Array.isArray(l) ? R.arrIncludes : R.weakEquals
                        },
                        getFilterFn: () => {
                            var n, l;
                            return r(e.columnDef.filterFn) ? e.columnDef.filterFn : "auto" === e.columnDef.filterFn ? e.getAutoFilterFn() : null != (n = null == (l = t.options.filterFns) ? void 0 : l[e.columnDef.filterFn]) ? n : R[e.columnDef.filterFn]
                        },
                        getCanFilter: () => {
                            var n, l, o;
                            return (null == (n = e.columnDef.enableColumnFilter) || n) && (null == (l = t.options.enableColumnFilters) || l) && (null == (o = t.options.enableFilters) || o) && !!e.accessorFn
                        },
                        getCanGlobalFilter: () => {
                            var n, l, o, r;
                            return (null == (n = e.columnDef.enableGlobalFilter) || n) && (null == (l = t.options.enableGlobalFilter) || l) && (null == (o = t.options.enableFilters) || o) && (null == (r = null == t.options.getColumnCanGlobalFilter ? void 0 : t.options.getColumnCanGlobalFilter(e)) || r) && !!e.accessorFn
                        },
                        getIsFiltered: () => e.getFilterIndex() > -1,
                        getFilterValue: () => {
                            var n, l;
                            return null == (n = t.getState().columnFilters) ? void 0 : null == (l = n.find(t => t.id === e.id)) ? void 0 : l.value
                        },
                        getFilterIndex: () => {
                            var n, l;
                            return null != (n = null == (l = t.getState().columnFilters) ? void 0 : l.findIndex(t => t.id === e.id)) ? n : -1
                        },
                        setFilterValue: n => {
                            t.setColumnFilters(t => {
                                var o, r;
                                let i = e.getFilterFn(),
                                    a = null == t ? void 0 : t.find(t => t.id === e.id),
                                    u = l(n, a ? a.value : void 0);
                                if (x(i, u, e)) return null != (o = null == t ? void 0 : t.filter(t => t.id !== e.id)) ? o : [];
                                let s = {
                                    id: e.id,
                                    value: u
                                };
                                return a ? null != (r = null == t ? void 0 : t.map(t => t.id === e.id ? s : t)) ? r : [] : null != t && t.length ? [...t, s] : [s]
                            })
                        },
                        _getFacetedRowModel: t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id),
                        getFacetedRowModel: () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(),
                        _getFacetedUniqueValues: t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id),
                        getFacetedUniqueValues: () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map,
                        _getFacetedMinMaxValues: t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id),
                        getFacetedMinMaxValues: () => {
                            if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues()
                        }
                    }),
                    createRow: (e, t) => ({
                        columnFilters: {},
                        columnFiltersMeta: {}
                    }),
                    createTable: e => ({
                        getGlobalAutoFilterFn: () => R.includesString,
                        getGlobalFilterFn: () => {
                            var t, n;
                            let {
                                globalFilterFn: l
                            } = e.options;
                            return r(l) ? l : "auto" === l ? e.getGlobalAutoFilterFn() : null != (t = null == (n = e.options.filterFns) ? void 0 : n[l]) ? t : R[l]
                        },
                        setColumnFilters: t => {
                            let n = e.getAllLeafColumns();
                            null == e.options.onColumnFiltersChange || e.options.onColumnFiltersChange(e => {
                                var o;
                                return null == (o = l(t, e)) ? void 0 : o.filter(e => {
                                    let t = n.find(t => t.id === e.id);
                                    if (t) {
                                        let n = t.getFilterFn();
                                        if (x(n, e.value, t)) return !1
                                    }
                                    return !0
                                })
                            })
                        },
                        setGlobalFilter: t => {
                            null == e.options.onGlobalFilterChange || e.options.onGlobalFilterChange(t)
                        },
                        resetGlobalFilter: t => {
                            e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter)
                        },
                        resetColumnFilters: t => {
                            var n, l;
                            e.setColumnFilters(t ? [] : null != (n = null == (l = e.initialState) ? void 0 : l.columnFilters) ? n : [])
                        },
                        getPreFilteredRowModel: () => e.getCoreRowModel(),
                        getFilteredRowModel: () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel) ? e.getPreFilteredRowModel() : e._getFilteredRowModel(),
                        _getGlobalFacetedRowModel: e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"),
                        getGlobalFacetedRowModel: () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(),
                        _getGlobalFacetedUniqueValues: e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"),
                        getGlobalFacetedUniqueValues: () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : new Map,
                        _getGlobalFacetedMinMaxValues: e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"),
                        getGlobalFacetedMinMaxValues: () => {
                            if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues()
                        }
                    })
                }, {
                    getInitialState: e => ({
                        sorting: [],
                        ...e
                    }),
                    getDefaultColumnDef: () => ({
                        sortingFn: "auto",
                        sortUndefined: 1
                    }),
                    getDefaultOptions: e => ({
                        onSortingChange: o("sorting", e),
                        isMultiSortEvent: e => e.shiftKey
                    }),
                    createColumn: (e, t) => ({
                        getAutoSortingFn: () => {
                            let n = t.getFilteredRowModel().flatRows.slice(10),
                                l = !1;
                            for (let t of n) {
                                let n = null == t ? void 0 : t.getValue(e.id);
                                if ("[object Date]" === Object.prototype.toString.call(n)) return G.datetime;
                                if ("string" == typeof n && (l = !0, n.split(A).length > 1)) return G.alphanumeric
                            }
                            return l ? G.text : G.basic
                        },
                        getAutoSortDir: () => {
                            let n = t.getFilteredRowModel().flatRows[0],
                                l = null == n ? void 0 : n.getValue(e.id);
                            return "string" == typeof l ? "asc" : "desc"
                        },
                        getSortingFn: () => {
                            var n, l;
                            if (!e) throw Error();
                            return r(e.columnDef.sortingFn) ? e.columnDef.sortingFn : "auto" === e.columnDef.sortingFn ? e.getAutoSortingFn() : null != (n = null == (l = t.options.sortingFns) ? void 0 : l[e.columnDef.sortingFn]) ? n : G[e.columnDef.sortingFn]
                        },
                        toggleSorting: (n, l) => {
                            let o = e.getNextSortingOrder(),
                                r = null != n;
                            t.setSorting(i => {
                                let a;
                                let u = null == i ? void 0 : i.find(t => t.id === e.id),
                                    s = null == i ? void 0 : i.findIndex(t => t.id === e.id),
                                    g = [],
                                    d = r ? n : "desc" === o;
                                if ("toggle" != (a = null != i && i.length && e.getCanMultiSort() && l ? u ? "toggle" : "add" : null != i && i.length && s !== i.length - 1 ? "replace" : u ? "toggle" : "replace") || r || o || (a = "remove"), "add" === a) {
                                    var c;
                                    (g = [...i, {
                                        id: e.id,
                                        desc: d
                                    }]).splice(0, g.length - (null != (c = t.options.maxMultiSortColCount) ? c : Number.MAX_SAFE_INTEGER))
                                } else g = "toggle" === a ? i.map(t => t.id === e.id ? { ...t,
                                    desc: d
                                } : t) : "remove" === a ? i.filter(t => t.id !== e.id) : [{
                                    id: e.id,
                                    desc: d
                                }];
                                return g
                            })
                        },
                        getFirstSortDir: () => {
                            var n, l;
                            let o = null != (n = null != (l = e.columnDef.sortDescFirst) ? l : t.options.sortDescFirst) ? n : "desc" === e.getAutoSortDir();
                            return o ? "desc" : "asc"
                        },
                        getNextSortingOrder: n => {
                            var l, o;
                            let r = e.getFirstSortDir(),
                                i = e.getIsSorted();
                            return i ? (i === r || null != (l = t.options.enableSortingRemoval) && !l || !!n && null != (o = t.options.enableMultiRemove) && !o) && ("desc" === i ? "asc" : "desc") : r
                        },
                        getCanSort: () => {
                            var n, l;
                            return (null == (n = e.columnDef.enableSorting) || n) && (null == (l = t.options.enableSorting) || l) && !!e.accessorFn
                        },
                        getCanMultiSort: () => {
                            var n, l;
                            return null != (n = null != (l = e.columnDef.enableMultiSort) ? l : t.options.enableMultiSort) ? n : !!e.accessorFn
                        },
                        getIsSorted: () => {
                            var n;
                            let l = null == (n = t.getState().sorting) ? void 0 : n.find(t => t.id === e.id);
                            return !!l && (l.desc ? "desc" : "asc")
                        },
                        getSortIndex: () => {
                            var n, l;
                            return null != (n = null == (l = t.getState().sorting) ? void 0 : l.findIndex(t => t.id === e.id)) ? n : -1
                        },
                        clearSorting: () => {
                            t.setSorting(t => null != t && t.length ? t.filter(t => t.id !== e.id) : [])
                        },
                        getToggleSortingHandler: () => {
                            let n = e.getCanSort();
                            return l => {
                                n && (null == l.persist || l.persist(), null == e.toggleSorting || e.toggleSorting(void 0, !!e.getCanMultiSort() && (null == t.options.isMultiSortEvent ? void 0 : t.options.isMultiSortEvent(l))))
                            }
                        }
                    }),
                    createTable: e => ({
                        setSorting: t => null == e.options.onSortingChange ? void 0 : e.options.onSortingChange(t),
                        resetSorting: t => {
                            var n, l;
                            e.setSorting(t ? [] : null != (n = null == (l = e.initialState) ? void 0 : l.sorting) ? n : [])
                        },
                        getPreSortedRowModel: () => e.getGroupedRowModel(),
                        getSortedRowModel: () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel) ? e.getPreSortedRowModel() : e._getSortedRowModel()
                    })
                }, {
                    getDefaultColumnDef: () => ({
                        aggregatedCell: e => {
                            var t, n;
                            return null != (t = null == (n = e.getValue()) ? void 0 : null == n.toString ? void 0 : n.toString()) ? t : null
                        },
                        aggregationFn: "auto"
                    }),
                    getInitialState: e => ({
                        grouping: [],
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onGroupingChange: o("grouping", e),
                        groupedColumnMode: "reorder"
                    }),
                    createColumn: (e, t) => ({
                        toggleGrouping: () => {
                            t.setGrouping(t => null != t && t.includes(e.id) ? t.filter(t => t !== e.id) : [...null != t ? t : [], e.id])
                        },
                        getCanGroup: () => {
                            var n, l, o, r;
                            return null != (n = null == (l = null != (o = null == (r = e.columnDef.enableGrouping) || r) ? o : t.options.enableGrouping) || l) ? n : !!e.accessorFn
                        },
                        getIsGrouped: () => {
                            var n;
                            return null == (n = t.getState().grouping) ? void 0 : n.includes(e.id)
                        },
                        getGroupedIndex: () => {
                            var n;
                            return null == (n = t.getState().grouping) ? void 0 : n.indexOf(e.id)
                        },
                        getToggleGroupingHandler: () => {
                            let t = e.getCanGroup();
                            return () => {
                                t && e.toggleGrouping()
                            }
                        },
                        getAutoAggregationFn: () => {
                            let n = t.getCoreRowModel().flatRows[0],
                                l = null == n ? void 0 : n.getValue(e.id);
                            return "number" == typeof l ? F.sum : "[object Date]" === Object.prototype.toString.call(l) ? F.extent : void 0
                        },
                        getAggregationFn: () => {
                            var n, l;
                            if (!e) throw Error();
                            return r(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : "auto" === e.columnDef.aggregationFn ? e.getAutoAggregationFn() : null != (n = null == (l = t.options.aggregationFns) ? void 0 : l[e.columnDef.aggregationFn]) ? n : F[e.columnDef.aggregationFn]
                        }
                    }),
                    createTable: e => ({
                        setGrouping: t => null == e.options.onGroupingChange ? void 0 : e.options.onGroupingChange(t),
                        resetGrouping: t => {
                            var n, l;
                            e.setGrouping(t ? [] : null != (n = null == (l = e.initialState) ? void 0 : l.grouping) ? n : [])
                        },
                        getPreGroupedRowModel: () => e.getFilteredRowModel(),
                        getGroupedRowModel: () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel) ? e.getPreGroupedRowModel() : e._getGroupedRowModel()
                    }),
                    createRow: (e, t) => ({
                        getIsGrouped: () => !!e.groupingColumnId,
                        getGroupingValue: n => {
                            if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
                            let l = t.getColumn(n);
                            return null != l && l.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = l.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n)
                        },
                        _groupingValuesCache: {}
                    }),
                    createCell: (e, t, n, l) => ({
                        getIsGrouped: () => t.getIsGrouped() && t.id === n.groupingColumnId,
                        getIsPlaceholder: () => !e.getIsGrouped() && t.getIsGrouped(),
                        getIsAggregated: () => {
                            var t;
                            return !e.getIsGrouped() && !e.getIsPlaceholder() && !!(null != (t = n.subRows) && t.length)
                        }
                    })
                }, {
                    getInitialState: e => ({
                        expanded: {},
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onExpandedChange: o("expanded", e),
                        paginateExpandedRows: !0
                    }),
                    createTable: e => {
                        let t = !1,
                            n = !1;
                        return {
                            _autoResetExpanded: () => {
                                var l, o;
                                if (!t) {
                                    e._queue(() => {
                                        t = !0
                                    });
                                    return
                                }
                                if (null != (l = null != (o = e.options.autoResetAll) ? o : e.options.autoResetExpanded) ? l : !e.options.manualExpanding) {
                                    if (n) return;
                                    n = !0, e._queue(() => {
                                        e.resetExpanded(), n = !1
                                    })
                                }
                            },
                            setExpanded: t => null == e.options.onExpandedChange ? void 0 : e.options.onExpandedChange(t),
                            toggleAllRowsExpanded: t => {
                                (null != t ? t : !e.getIsAllRowsExpanded()) ? e.setExpanded(!0): e.setExpanded({})
                            },
                            resetExpanded: t => {
                                var n, l;
                                e.setExpanded(t ? {} : null != (n = null == (l = e.initialState) ? void 0 : l.expanded) ? n : {})
                            },
                            getCanSomeRowsExpand: () => e.getPrePaginationRowModel().flatRows.some(e => e.getCanExpand()),
                            getToggleAllRowsExpandedHandler: () => t => {
                                null == t.persist || t.persist(), e.toggleAllRowsExpanded()
                            },
                            getIsSomeRowsExpanded: () => {
                                let t = e.getState().expanded;
                                return !0 === t || Object.values(t).some(Boolean)
                            },
                            getIsAllRowsExpanded: () => {
                                let t = e.getState().expanded;
                                return "boolean" == typeof t ? !0 === t : !(!Object.keys(t).length || e.getRowModel().flatRows.some(e => !e.getIsExpanded()))
                            },
                            getExpandedDepth: () => {
                                let t = 0,
                                    n = !0 === e.getState().expanded ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded);
                                return n.forEach(e => {
                                    let n = e.split(".");
                                    t = Math.max(t, n.length)
                                }), t
                            },
                            getPreExpandedRowModel: () => e.getSortedRowModel(),
                            getExpandedRowModel: () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel) ? e.getPreExpandedRowModel() : e._getExpandedRowModel()
                        }
                    },
                    createRow: (e, t) => ({
                        toggleExpanded: n => {
                            t.setExpanded(l => {
                                let o = !0 === l || !!(null != l && l[e.id]),
                                    r = {};
                                if (!0 === l ? Object.keys(t.getRowModel().rowsById).forEach(e => {
                                        r[e] = !0
                                    }) : r = l, n = null != n ? n : !o, !o && n) return { ...r,
                                    [e.id]: !0
                                };
                                if (o && !n) {
                                    let {
                                        [e.id]: t, ...n
                                    } = r;
                                    return n
                                }
                                return l
                            })
                        },
                        getIsExpanded: () => {
                            var n;
                            let l = t.getState().expanded;
                            return !!(null != (n = null == t.options.getIsRowExpanded ? void 0 : t.options.getIsRowExpanded(e)) ? n : !0 === l || (null == l ? void 0 : l[e.id]))
                        },
                        getCanExpand: () => {
                            var n, l, o;
                            return null != (n = null == t.options.getRowCanExpand ? void 0 : t.options.getRowCanExpand(e)) ? n : (null == (l = t.options.enableExpanding) || l) && !!(null != (o = e.subRows) && o.length)
                        },
                        getToggleExpandedHandler: () => {
                            let t = e.getCanExpand();
                            return () => {
                                t && e.toggleExpanded()
                            }
                        }
                    })
                }, {
                    getInitialState: e => ({ ...e,
                        pagination: { ...M(),
                            ...null == e ? void 0 : e.pagination
                        }
                    }),
                    getDefaultOptions: e => ({
                        onPaginationChange: o("pagination", e)
                    }),
                    createTable: e => {
                        let t = !1,
                            n = !1;
                        return {
                            _autoResetPageIndex: () => {
                                var l, o;
                                if (!t) {
                                    e._queue(() => {
                                        t = !0
                                    });
                                    return
                                }
                                if (null != (l = null != (o = e.options.autoResetAll) ? o : e.options.autoResetPageIndex) ? l : !e.options.manualPagination) {
                                    if (n) return;
                                    n = !0, e._queue(() => {
                                        e.resetPageIndex(), n = !1
                                    })
                                }
                            },
                            setPagination: t => null == e.options.onPaginationChange ? void 0 : e.options.onPaginationChange(e => l(t, e)),
                            resetPagination: t => {
                                var n;
                                e.setPagination(t ? M() : null != (n = e.initialState.pagination) ? n : M())
                            },
                            setPageIndex: t => {
                                e.setPagination(n => {
                                    let o = l(t, n.pageIndex),
                                        r = void 0 === e.options.pageCount || -1 === e.options.pageCount ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
                                    return o = Math.max(0, Math.min(o, r)), { ...n,
                                        pageIndex: o
                                    }
                                })
                            },
                            resetPageIndex: t => {
                                var n, l, o;
                                e.setPageIndex(t ? 0 : null != (n = null == (l = e.initialState) ? void 0 : null == (o = l.pagination) ? void 0 : o.pageIndex) ? n : 0)
                            },
                            resetPageSize: t => {
                                var n, l, o;
                                e.setPageSize(t ? 10 : null != (n = null == (l = e.initialState) ? void 0 : null == (o = l.pagination) ? void 0 : o.pageSize) ? n : 10)
                            },
                            setPageSize: t => {
                                e.setPagination(e => {
                                    let n = Math.max(1, l(t, e.pageSize)),
                                        o = e.pageSize * e.pageIndex;
                                    return { ...e,
                                        pageIndex: Math.floor(o / n),
                                        pageSize: n
                                    }
                                })
                            },
                            setPageCount: t => e.setPagination(n => {
                                var o;
                                let r = l(t, null != (o = e.options.pageCount) ? o : -1);
                                return "number" == typeof r && (r = Math.max(-1, r)), { ...n,
                                    pageCount: r
                                }
                            }),
                            getPageOptions: i(() => [e.getPageCount()], e => {
                                let t = [];
                                return e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t
                            }, {
                                key: !1,
                                debug: () => {
                                    var t;
                                    return null != (t = e.options.debugAll) ? t : e.options.debugTable
                                }
                            }),
                            getCanPreviousPage: () => e.getState().pagination.pageIndex > 0,
                            getCanNextPage: () => {
                                let {
                                    pageIndex: t
                                } = e.getState().pagination, n = e.getPageCount();
                                return -1 === n || 0 !== n && t < n - 1
                            },
                            previousPage: () => e.setPageIndex(e => e - 1),
                            nextPage: () => e.setPageIndex(e => e + 1),
                            getPrePaginationRowModel: () => e.getExpandedRowModel(),
                            getPaginationRowModel: () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel) ? e.getPrePaginationRowModel() : e._getPaginationRowModel(),
                            getPageCount: () => {
                                var t;
                                return null != (t = e.options.pageCount) ? t : Math.ceil(e.getPrePaginationRowModel().rows.length / e.getState().pagination.pageSize)
                            }
                        }
                    }
                }, {
                    getInitialState: e => ({
                        rowSelection: {},
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onRowSelectionChange: o("rowSelection", e),
                        enableRowSelection: !0,
                        enableMultiRowSelection: !0,
                        enableSubRowSelection: !0
                    }),
                    createTable: e => ({
                        setRowSelection: t => null == e.options.onRowSelectionChange ? void 0 : e.options.onRowSelectionChange(t),
                        resetRowSelection: t => {
                            var n;
                            return e.setRowSelection(t ? {} : null != (n = e.initialState.rowSelection) ? n : {})
                        },
                        toggleAllRowsSelected: t => {
                            e.setRowSelection(n => {
                                t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                                let l = { ...n
                                    },
                                    o = e.getPreGroupedRowModel().flatRows;
                                return t ? o.forEach(e => {
                                    e.getCanSelect() && (l[e.id] = !0)
                                }) : o.forEach(e => {
                                    delete l[e.id]
                                }), l
                            })
                        },
                        toggleAllPageRowsSelected: t => e.setRowSelection(n => {
                            let l = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                                o = { ...n
                                };
                            return e.getRowModel().rows.forEach(t => {
                                E(o, t.id, l, e)
                            }), o
                        }),
                        getPreSelectedRowModel: () => e.getCoreRowModel(),
                        getSelectedRowModel: i(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? P(e, n) : {
                            rows: [],
                            flatRows: [],
                            rowsById: {}
                        }, {
                            key: !1,
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugTable
                            }
                        }),
                        getFilteredSelectedRowModel: i(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? P(e, n) : {
                            rows: [],
                            flatRows: [],
                            rowsById: {}
                        }, {
                            key: "getFilteredSelectedRowModel",
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugTable
                            }
                        }),
                        getGroupedSelectedRowModel: i(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? P(e, n) : {
                            rows: [],
                            flatRows: [],
                            rowsById: {}
                        }, {
                            key: "getGroupedSelectedRowModel",
                            debug: () => {
                                var t;
                                return null != (t = e.options.debugAll) ? t : e.options.debugTable
                            }
                        }),
                        getIsAllRowsSelected: () => {
                            let t = e.getFilteredRowModel().flatRows,
                                {
                                    rowSelection: n
                                } = e.getState(),
                                l = !!(t.length && Object.keys(n).length);
                            return l && t.some(e => e.getCanSelect() && !n[e.id]) && (l = !1), l
                        },
                        getIsAllPageRowsSelected: () => {
                            let t = e.getPaginationRowModel().flatRows.filter(e => e.getCanSelect()),
                                {
                                    rowSelection: n
                                } = e.getState(),
                                l = !!t.length;
                            return l && t.some(e => !n[e.id]) && (l = !1), l
                        },
                        getIsSomeRowsSelected: () => {
                            var t;
                            let n = Object.keys(null != (t = e.getState().rowSelection) ? t : {}).length;
                            return n > 0 && n < e.getFilteredRowModel().flatRows.length
                        },
                        getIsSomePageRowsSelected: () => {
                            let t = e.getPaginationRowModel().flatRows;
                            return !e.getIsAllPageRowsSelected() && t.filter(e => e.getCanSelect()).some(e => e.getIsSelected() || e.getIsSomeSelected())
                        },
                        getToggleAllRowsSelectedHandler: () => t => {
                            e.toggleAllRowsSelected(t.target.checked)
                        },
                        getToggleAllPageRowsSelectedHandler: () => t => {
                            e.toggleAllPageRowsSelected(t.target.checked)
                        }
                    }),
                    createRow: (e, t) => ({
                        toggleSelected: n => {
                            let l = e.getIsSelected();
                            t.setRowSelection(o => {
                                if (n = void 0 !== n ? n : !l, l === n) return o;
                                let r = { ...o
                                };
                                return E(r, e.id, n, t), r
                            })
                        },
                        getIsSelected: () => {
                            let {
                                rowSelection: n
                            } = t.getState();
                            return _(e, n)
                        },
                        getIsSomeSelected: () => {
                            let {
                                rowSelection: n
                            } = t.getState();
                            return "some" === I(e, n)
                        },
                        getIsAllSubRowsSelected: () => {
                            let {
                                rowSelection: n
                            } = t.getState();
                            return "all" === I(e, n)
                        },
                        getCanSelect: () => {
                            var n;
                            return "function" == typeof t.options.enableRowSelection ? t.options.enableRowSelection(e) : null == (n = t.options.enableRowSelection) || n
                        },
                        getCanSelectSubRows: () => {
                            var n;
                            return "function" == typeof t.options.enableSubRowSelection ? t.options.enableSubRowSelection(e) : null == (n = t.options.enableSubRowSelection) || n
                        },
                        getCanMultiSelect: () => {
                            var n;
                            return "function" == typeof t.options.enableMultiRowSelection ? t.options.enableMultiRowSelection(e) : null == (n = t.options.enableMultiRowSelection) || n
                        },
                        getToggleSelectedHandler: () => {
                            let t = e.getCanSelect();
                            return n => {
                                var l;
                                t && e.toggleSelected(null == (l = n.target) ? void 0 : l.checked)
                            }
                        }
                    })
                }, {
                    getDefaultColumnDef: () => s,
                    getInitialState: e => ({
                        columnSizing: {},
                        columnSizingInfo: g(),
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        columnResizeMode: "onEnd",
                        onColumnSizingChange: o("columnSizing", e),
                        onColumnSizingInfoChange: o("columnSizingInfo", e)
                    }),
                    createColumn: (e, t) => ({
                        getSize: () => {
                            var n, l, o;
                            let r = t.getState().columnSizing[e.id];
                            return Math.min(Math.max(null != (n = e.columnDef.minSize) ? n : s.minSize, null != (l = null != r ? r : e.columnDef.size) ? l : s.size), null != (o = e.columnDef.maxSize) ? o : s.maxSize)
                        },
                        getStart: n => {
                            let l = n ? "left" === n ? t.getLeftVisibleLeafColumns() : t.getRightVisibleLeafColumns() : t.getVisibleLeafColumns(),
                                o = l.findIndex(t => t.id === e.id);
                            if (o > 0) {
                                let e = l[o - 1];
                                return e.getStart(n) + e.getSize()
                            }
                            return 0
                        },
                        resetSize: () => {
                            t.setColumnSizing(t => {
                                let {
                                    [e.id]: n, ...l
                                } = t;
                                return l
                            })
                        },
                        getCanResize: () => {
                            var n, l;
                            return (null == (n = e.columnDef.enableResizing) || n) && (null == (l = t.options.enableColumnResizing) || l)
                        },
                        getIsResizing: () => t.getState().columnSizingInfo.isResizingColumn === e.id
                    }),
                    createHeader: (e, t) => ({
                        getSize: () => {
                            let t = 0,
                                n = e => {
                                    if (e.subHeaders.length) e.subHeaders.forEach(n);
                                    else {
                                        var l;
                                        t += null != (l = e.column.getSize()) ? l : 0
                                    }
                                };
                            return n(e), t
                        },
                        getStart: () => {
                            if (e.index > 0) {
                                let t = e.headerGroup.headers[e.index - 1];
                                return t.getStart() + t.getSize()
                            }
                            return 0
                        },
                        getResizeHandler: () => {
                            let n = t.getColumn(e.column.id),
                                l = null == n ? void 0 : n.getCanResize();
                            return o => {
                                if (!n || !l || (null == o.persist || o.persist(), c(o) && o.touches && o.touches.length > 1)) return;
                                let r = e.getSize(),
                                    i = e ? e.getLeafHeaders().map(e => [e.column.id, e.column.getSize()]) : [
                                        [n.id, n.getSize()]
                                    ],
                                    a = c(o) ? Math.round(o.touches[0].clientX) : o.clientX,
                                    u = {},
                                    s = (e, n) => {
                                        "number" == typeof n && (t.setColumnSizingInfo(e => {
                                            var t, l;
                                            let o = n - (null != (t = null == e ? void 0 : e.startOffset) ? t : 0),
                                                r = Math.max(o / (null != (l = null == e ? void 0 : e.startSize) ? l : 0), -.999999);
                                            return e.columnSizingStart.forEach(e => {
                                                let [t, n] = e;
                                                u[t] = Math.round(100 * Math.max(n + n * r, 0)) / 100
                                            }), { ...e,
                                                deltaOffset: o,
                                                deltaPercentage: r
                                            }
                                        }), ("onChange" === t.options.columnResizeMode || "end" === e) && t.setColumnSizing(e => ({ ...e,
                                            ...u
                                        })))
                                    },
                                    g = e => s("move", e),
                                    p = e => {
                                        s("end", e), t.setColumnSizingInfo(e => ({ ...e,
                                            isResizingColumn: !1,
                                            startOffset: null,
                                            startSize: null,
                                            deltaOffset: null,
                                            deltaPercentage: null,
                                            columnSizingStart: []
                                        }))
                                    },
                                    f = {
                                        moveHandler: e => g(e.clientX),
                                        upHandler: e => {
                                            document.removeEventListener("mousemove", f.moveHandler), document.removeEventListener("mouseup", f.upHandler), p(e.clientX)
                                        }
                                    },
                                    m = {
                                        moveHandler: e => (e.cancelable && (e.preventDefault(), e.stopPropagation()), g(e.touches[0].clientX), !1),
                                        upHandler: e => {
                                            var t;
                                            document.removeEventListener("touchmove", m.moveHandler), document.removeEventListener("touchend", m.upHandler), e.cancelable && (e.preventDefault(), e.stopPropagation()), p(null == (t = e.touches[0]) ? void 0 : t.clientX)
                                        }
                                    },
                                    b = !! function() {
                                        if ("boolean" == typeof d) return d;
                                        let e = !1;
                                        try {
                                            let t = () => {};
                                            window.addEventListener("test", t, {
                                                get passive() {
                                                    return e = !0, !1
                                                }
                                            }), window.removeEventListener("test", t)
                                        } catch (t) {
                                            e = !1
                                        }
                                        return d = e
                                    }() && {
                                        passive: !1
                                    };
                                c(o) ? (document.addEventListener("touchmove", m.moveHandler, b), document.addEventListener("touchend", m.upHandler, b)) : (document.addEventListener("mousemove", f.moveHandler, b), document.addEventListener("mouseup", f.upHandler, b)), t.setColumnSizingInfo(e => ({ ...e,
                                    startOffset: a,
                                    startSize: r,
                                    deltaOffset: 0,
                                    deltaPercentage: 0,
                                    columnSizingStart: i,
                                    isResizingColumn: n.id
                                }))
                            }
                        }
                    }),
                    createTable: e => ({
                        setColumnSizing: t => null == e.options.onColumnSizingChange ? void 0 : e.options.onColumnSizingChange(t),
                        setColumnSizingInfo: t => null == e.options.onColumnSizingInfoChange ? void 0 : e.options.onColumnSizingInfoChange(t),
                        resetColumnSizing: t => {
                            var n;
                            e.setColumnSizing(t ? {} : null != (n = e.initialState.columnSizing) ? n : {})
                        },
                        resetHeaderSizeInfo: t => {
                            var n;
                            e.setColumnSizingInfo(t ? g() : null != (n = e.initialState.columnSizingInfo) ? n : g())
                        },
                        getTotalSize: () => {
                            var t, n;
                            return null != (t = null == (n = e.getHeaderGroups()[0]) ? void 0 : n.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0
                        },
                        getLeftTotalSize: () => {
                            var t, n;
                            return null != (t = null == (n = e.getLeftHeaderGroups()[0]) ? void 0 : n.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0
                        },
                        getCenterTotalSize: () => {
                            var t, n;
                            return null != (t = null == (n = e.getCenterHeaderGroups()[0]) ? void 0 : n.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0
                        },
                        getRightTotalSize: () => {
                            var t, n;
                            return null != (t = null == (n = e.getRightHeaderGroups()[0]) ? void 0 : n.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0
                        }
                    })
                }];

            function O(e) {
                var t;
                (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
                let n = {
                        _features: k
                    },
                    o = n._features.reduce((e, t) => Object.assign(e, null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(n)), {}),
                    r = e => n.options.mergeOptions ? n.options.mergeOptions(o, e) : { ...o,
                        ...e
                    },
                    a = { ...null != (t = e.initialState) ? t : {}
                    };
                n._features.forEach(e => {
                    var t;
                    a = null != (t = null == e.getInitialState ? void 0 : e.getInitialState(a)) ? t : a
                });
                let u = [],
                    s = !1,
                    g = {
                        _features: k,
                        options: { ...o,
                            ...e
                        },
                        initialState: a,
                        _queue: e => {
                            u.push(e), s || (s = !0, Promise.resolve().then(() => {
                                for (; u.length;) u.shift()();
                                s = !1
                            }).catch(e => setTimeout(() => {
                                throw e
                            })))
                        },
                        reset: () => {
                            n.setState(n.initialState)
                        },
                        setOptions: e => {
                            let t = l(e, n.options);
                            n.options = r(t)
                        },
                        getState: () => n.options.state,
                        setState: e => {
                            null == n.options.onStateChange || n.options.onStateChange(e)
                        },
                        _getRowId: (e, t, l) => {
                            var o;
                            return null != (o = null == n.options.getRowId ? void 0 : n.options.getRowId(e, t, l)) ? o : `${l?[l.id,t].join("."):t}`
                        },
                        getCoreRowModel: () => (n._getCoreRowModel || (n._getCoreRowModel = n.options.getCoreRowModel(n)), n._getCoreRowModel()),
                        getRowModel: () => n.getPaginationRowModel(),
                        getRow: e => {
                            let t = n.getRowModel().rowsById[e];
                            if (!t) throw Error();
                            return t
                        },
                        _getDefaultColumnDef: i(() => [n.options.defaultColumn], e => (e = null != e ? e : {}, {
                            header: e => {
                                let t = e.header.column.columnDef;
                                return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null
                            },
                            cell: e => {
                                var t, n;
                                return null != (t = null == (n = e.renderValue()) ? void 0 : null == n.toString ? void 0 : n.toString()) ? t : null
                            },
                            ...n._features.reduce((e, t) => Object.assign(e, null == t.getDefaultColumnDef ? void 0 : t.getDefaultColumnDef()), {}),
                            ...e
                        }), {
                            debug: () => {
                                var e;
                                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
                            },
                            key: !1
                        }),
                        _getColumnDefs: () => n.options.columns,
                        getAllColumns: i(() => [n._getColumnDefs()], e => {
                            let t = function(e, l, o) {
                                return void 0 === o && (o = 0), e.map(e => {
                                    let r = function(e, t, n, l) {
                                        var o, r;
                                        let a;
                                        let u = e._getDefaultColumnDef(),
                                            s = { ...u,
                                                ...t
                                            },
                                            g = s.accessorKey,
                                            d = null != (o = null != (r = s.id) ? r : g ? g.replace(".", "_") : void 0) ? o : "string" == typeof s.header ? s.header : void 0;
                                        if (s.accessorFn ? a = s.accessorFn : g && (a = g.includes(".") ? e => {
                                                let t = e;
                                                for (let e of g.split(".")) {
                                                    var n;
                                                    t = null == (n = t) ? void 0 : n[e]
                                                }
                                                return t
                                            } : e => e[s.accessorKey]), !d) throw Error();
                                        let c = {
                                            id: `${String(d)}`,
                                            accessorFn: a,
                                            parent: l,
                                            depth: n,
                                            columnDef: s,
                                            columns: [],
                                            getFlatColumns: i(() => [!0], () => {
                                                var e;
                                                return [c, ...null == (e = c.columns) ? void 0 : e.flatMap(e => e.getFlatColumns())]
                                            }, {
                                                key: "column.getFlatColumns",
                                                debug: () => {
                                                    var t;
                                                    return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                                                }
                                            }),
                                            getLeafColumns: i(() => [e._getOrderColumnsFn()], e => {
                                                var t;
                                                return null != (t = c.columns) && t.length ? e(c.columns.flatMap(e => e.getLeafColumns())) : [c]
                                            }, {
                                                key: "column.getLeafColumns",
                                                debug: () => {
                                                    var t;
                                                    return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                                                }
                                            })
                                        };
                                        return c = e._features.reduce((t, n) => Object.assign(t, null == n.createColumn ? void 0 : n.createColumn(c, e)), c)
                                    }(n, e, o, l);
                                    return r.columns = e.columns ? t(e.columns, r, o + 1) : [], r
                                })
                            };
                            return t(e)
                        }, {
                            key: !1,
                            debug: () => {
                                var e;
                                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
                            }
                        }),
                        getAllFlatColumns: i(() => [n.getAllColumns()], e => e.flatMap(e => e.getFlatColumns()), {
                            key: !1,
                            debug: () => {
                                var e;
                                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
                            }
                        }),
                        _getAllFlatColumnsById: i(() => [n.getAllFlatColumns()], e => e.reduce((e, t) => (e[t.id] = t, e), {}), {
                            key: !1,
                            debug: () => {
                                var e;
                                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
                            }
                        }),
                        getAllLeafColumns: i(() => [n.getAllColumns(), n._getOrderColumnsFn()], (e, t) => t(e.flatMap(e => e.getLeafColumns())), {
                            key: !1,
                            debug: () => {
                                var e;
                                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
                            }
                        }),
                        getColumn: e => {
                            let t = n._getAllFlatColumnsById()[e];
                            return t
                        }
                    };
                return Object.assign(n, g), n._features.forEach(e => Object.assign(n, null == e.createTable ? void 0 : e.createTable(n))), n
            }
            let z = (e, t, n, l, o, r, a) => {
                let u = {
                    id: t,
                    index: l,
                    original: n,
                    depth: o,
                    parentId: a,
                    _valuesCache: {},
                    _uniqueValuesCache: {},
                    getValue: t => {
                        if (u._valuesCache.hasOwnProperty(t)) return u._valuesCache[t];
                        let n = e.getColumn(t);
                        if (null != n && n.accessorFn) return u._valuesCache[t] = n.accessorFn(u.original, l), u._valuesCache[t]
                    },
                    getUniqueValues: t => {
                        if (u._uniqueValuesCache.hasOwnProperty(t)) return u._uniqueValuesCache[t];
                        let n = e.getColumn(t);
                        return null != n && n.accessorFn ? (n.columnDef.getUniqueValues ? u._uniqueValuesCache[t] = n.columnDef.getUniqueValues(u.original, l) : u._uniqueValuesCache[t] = [u.getValue(t)], u._uniqueValuesCache[t]) : void 0
                    },
                    renderValue: t => {
                        var n;
                        return null != (n = u.getValue(t)) ? n : e.options.renderFallbackValue
                    },
                    subRows: null != r ? r : [],
                    getLeafRows: () => (function(e, t) {
                        let n = [],
                            l = e => {
                                e.forEach(e => {
                                    n.push(e);
                                    let o = t(e);
                                    null != o && o.length && l(o)
                                })
                            };
                        return l(e), n
                    })(u.subRows, e => e.subRows),
                    getParentRow: () => u.parentId ? e.getRow(u.parentId) : void 0,
                    getParentRows: () => {
                        let e = [],
                            t = u;
                        for (;;) {
                            let n = t.getParentRow();
                            if (!n) break;
                            e.push(n), t = n
                        }
                        return e.reverse()
                    },
                    getAllCells: i(() => [e.getAllLeafColumns()], t => t.map(t => (function(e, t, n, l) {
                        let o = {
                            id: `${t.id}_${n.id}`,
                            row: t,
                            column: n,
                            getValue: () => t.getValue(l),
                            renderValue: () => {
                                var t;
                                return null != (t = o.getValue()) ? t : e.options.renderFallbackValue
                            },
                            getContext: i(() => [e, n, t, o], (e, t, n, l) => ({
                                table: e,
                                column: t,
                                row: n,
                                cell: l,
                                getValue: l.getValue,
                                renderValue: l.renderValue
                            }), {
                                key: !1,
                                debug: () => e.options.debugAll
                            })
                        };
                        return e._features.forEach(l => {
                            Object.assign(o, null == l.createCell ? void 0 : l.createCell(o, n, t, e))
                        }, {}), o
                    })(e, u, t, t.id)), {
                        key: !1,
                        debug: () => {
                            var t;
                            return null != (t = e.options.debugAll) ? t : e.options.debugRows
                        }
                    }),
                    _getAllCellsByColumnId: i(() => [u.getAllCells()], e => e.reduce((e, t) => (e[t.column.id] = t, e), {}), {
                        key: "row.getAllCellsByColumnId",
                        debug: () => {
                            var t;
                            return null != (t = e.options.debugAll) ? t : e.options.debugRows
                        }
                    })
                };
                for (let t = 0; t < e._features.length; t++) {
                    let n = e._features[t];
                    Object.assign(u, null == n ? void 0 : null == n.createRow ? void 0 : n.createRow(u, e))
                }
                return u
            };

            function T() {
                return e => i(() => [e.options.data], t => {
                    let n = {
                            rows: [],
                            flatRows: [],
                            rowsById: {}
                        },
                        l = function(t, o, r) {
                            void 0 === o && (o = 0);
                            let i = [];
                            for (let u = 0; u < t.length; u++) {
                                let s = z(e, e._getRowId(t[u], u, r), t[u], u, o, void 0, null == r ? void 0 : r.id);
                                if (n.flatRows.push(s), n.rowsById[s.id] = s, i.push(s), e.options.getSubRows) {
                                    var a;
                                    s.originalSubRows = e.options.getSubRows(t[u], u), null != (a = s.originalSubRows) && a.length && (s.subRows = l(s.originalSubRows, o + 1, s))
                                }
                            }
                            return i
                        };
                    return n.rows = l(t), n
                }, {
                    key: !1,
                    debug: () => {
                        var t;
                        return null != (t = e.options.debugAll) ? t : e.options.debugTable
                    },
                    onChange: () => {
                        e._autoResetPageIndex()
                    }
                })
            }

            function B() {
                return e => i(() => [e.getState().expanded, e.getPreExpandedRowModel(), e.options.paginateExpandedRows], (e, t, n) => t.rows.length && (!0 === e || Object.keys(null != e ? e : {}).length) && n ? function(e) {
                    let t = [],
                        n = e => {
                            var l;
                            t.push(e), null != (l = e.subRows) && l.length && e.getIsExpanded() && e.subRows.forEach(n)
                        };
                    return e.rows.forEach(n), {
                        rows: t,
                        flatRows: e.flatRows,
                        rowsById: e.rowsById
                    }
                }(t) : t, {
                    key: !1,
                    debug: () => {
                        var t;
                        return null != (t = e.options.debugAll) ? t : e.options.debugTable
                    }
                })
            }
        }
    }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5626], {
        61768: function(e) {
            var t = /[\\\/\-_+.# \t"@\[\(\{&]/,
                r = /[\\\/\-_+.# \t"@\[\(\{&]/g;
            e.exports = function(e, n) {
                return function e(n, o, l, a, i, u) {
                    if (u === o.length) return i === n.length ? 1 : .99;
                    for (var c, s, d, f = a.charAt(u), v = l.indexOf(f, i), p = 0; v >= 0;)(c = e(n, o, l, a, v + 1, u + 1)) > p && (v === i ? c *= 1 : t.test(n.charAt(v - 1)) ? (c *= .9, (d = n.slice(i, v - 1).match(r)) && i > 0 && (c *= Math.pow(.999, d.length))) : (t.test(n.slice(i, v - 1)) ? c *= 0 : c *= .3, i > 0 && (c *= Math.pow(.999, v - i))), n.charAt(v) !== o.charAt(u) && (c *= .9999)), c < .1 && l.charAt(v - 1) === a.charAt(u + 1) && l.charAt(v - 1) !== a.charAt(u) && .1 * (s = e(n, o, l, a, v + 1, u + 2)) > c && (c = .1 * s), c > p && (p = c), v = l.indexOf(f, v + 1);
                    return p
                }(e, n, e.toLowerCase(), n.toLowerCase(), 0, 0)
            }
        },
        62927: function(e, t, r) {
            var n = r(49215);
            e.exports = function(e, t) {
                return n(e, t)
            }
        },
        98768: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ns: function() {
                    return K
                },
                fC: function() {
                    return V
                },
                gb: function() {
                    return y
                },
                q4: function() {
                    return N
                },
                l_: function() {
                    return B
                }
            });
            var n = r(27198),
                o = r(2265),
                l = r(38671),
                a = r(7575),
                i = r(46341),
                u = r(88556),
                c = r(16418);
            let s = (0, o.createContext)(void 0);
            var d = r(41469),
                f = r(21082);
            let v = "ScrollArea",
                [p, m] = (0, i.b)(v),
                [h, E] = p(v),
                g = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        type: a = "hover",
                        dir: i,
                        scrollHideDelay: c = 600,
                        ...d
                    } = e, [f, v] = (0, o.useState)(null), [p, m] = (0, o.useState)(null), [E, g] = (0, o.useState)(null), [w, b] = (0, o.useState)(null), [y, C] = (0, o.useState)(null), [S, R] = (0, o.useState)(0), [P, T] = (0, o.useState)(0), [_, L] = (0, o.useState)(!1), [D, A] = (0, o.useState)(!1), k = (0, u.e)(t, e => v(e)), N = function(e) {
                        let t = (0, o.useContext)(s);
                        return e || t || "ltr"
                    }(i);
                    return (0, o.createElement)(h, {
                        scope: r,
                        type: a,
                        dir: N,
                        scrollHideDelay: c,
                        scrollArea: f,
                        viewport: p,
                        onViewportChange: m,
                        content: E,
                        onContentChange: g,
                        scrollbarX: w,
                        onScrollbarXChange: b,
                        scrollbarXEnabled: _,
                        onScrollbarXEnabledChange: L,
                        scrollbarY: y,
                        onScrollbarYChange: C,
                        scrollbarYEnabled: D,
                        onScrollbarYEnabledChange: A,
                        onCornerWidthChange: R,
                        onCornerHeightChange: T
                    }, (0, o.createElement)(l.WV.div, (0, n.Z)({
                        dir: N
                    }, d, {
                        ref: k,
                        style: {
                            position: "relative",
                            "--radix-scroll-area-corner-width": S + "px",
                            "--radix-scroll-area-corner-height": P + "px",
                            ...e.style
                        }
                    })))
                }),
                w = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        children: a,
                        ...i
                    } = e, c = E("ScrollAreaViewport", r), s = (0, o.useRef)(null), d = (0, u.e)(t, s, c.onViewportChange);
                    return (0, o.createElement)(o.Fragment, null, (0, o.createElement)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                        }
                    }), (0, o.createElement)(l.WV.div, (0, n.Z)({
                        "data-radix-scroll-area-viewport": ""
                    }, i, {
                        ref: d,
                        style: {
                            overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
                            overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
                            ...e.style
                        }
                    }), (0, o.createElement)("div", {
                        ref: c.onContentChange,
                        style: {
                            minWidth: "100%",
                            display: "table"
                        }
                    }, a)))
                }),
                b = "ScrollAreaScrollbar",
                y = (0, o.forwardRef)((e, t) => {
                    let {
                        forceMount: r,
                        ...l
                    } = e, a = E(b, e.__scopeScrollArea), {
                        onScrollbarXEnabledChange: i,
                        onScrollbarYEnabledChange: u
                    } = a, c = "horizontal" === e.orientation;
                    return (0, o.useEffect)(() => (c ? i(!0) : u(!0), () => {
                        c ? i(!1) : u(!1)
                    }), [c, i, u]), "hover" === a.type ? (0, o.createElement)(C, (0, n.Z)({}, l, {
                        ref: t,
                        forceMount: r
                    })) : "scroll" === a.type ? (0, o.createElement)(S, (0, n.Z)({}, l, {
                        ref: t,
                        forceMount: r
                    })) : "auto" === a.type ? (0, o.createElement)(R, (0, n.Z)({}, l, {
                        ref: t,
                        forceMount: r
                    })) : "always" === a.type ? (0, o.createElement)(P, (0, n.Z)({}, l, {
                        ref: t
                    })) : null
                }),
                C = (0, o.forwardRef)((e, t) => {
                    let {
                        forceMount: r,
                        ...l
                    } = e, i = E(b, e.__scopeScrollArea), [u, c] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        let e = i.scrollArea,
                            t = 0;
                        if (e) {
                            let r = () => {
                                    window.clearTimeout(t), c(!0)
                                },
                                n = () => {
                                    t = window.setTimeout(() => c(!1), i.scrollHideDelay)
                                };
                            return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
                            }
                        }
                    }, [i.scrollArea, i.scrollHideDelay]), (0, o.createElement)(a.z, {
                        present: r || u
                    }, (0, o.createElement)(R, (0, n.Z)({
                        "data-state": u ? "visible" : "hidden"
                    }, l, {
                        ref: t
                    })))
                }),
                S = (0, o.forwardRef)((e, t) => {
                    var r;
                    let {
                        forceMount: l,
                        ...i
                    } = e, u = E(b, e.__scopeScrollArea), c = "horizontal" === e.orientation, s = H(() => v("SCROLL_END"), 100), [d, v] = (r = {
                        hidden: {
                            SCROLL: "scrolling"
                        },
                        scrolling: {
                            SCROLL_END: "idle",
                            POINTER_ENTER: "interacting"
                        },
                        interacting: {
                            SCROLL: "interacting",
                            POINTER_LEAVE: "idle"
                        },
                        idle: {
                            HIDE: "hidden",
                            SCROLL: "scrolling",
                            POINTER_ENTER: "interacting"
                        }
                    }, (0, o.useReducer)((e, t) => {
                        let n = r[e][t];
                        return null != n ? n : e
                    }, "hidden"));
                    return (0, o.useEffect)(() => {
                        if ("idle" === d) {
                            let e = window.setTimeout(() => v("HIDE"), u.scrollHideDelay);
                            return () => window.clearTimeout(e)
                        }
                    }, [d, u.scrollHideDelay, v]), (0, o.useEffect)(() => {
                        let e = u.viewport,
                            t = c ? "scrollLeft" : "scrollTop";
                        if (e) {
                            let r = e[t],
                                n = () => {
                                    let n = e[t],
                                        o = r !== n;
                                    o && (v("SCROLL"), s()), r = n
                                };
                            return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
                        }
                    }, [u.viewport, c, v, s]), (0, o.createElement)(a.z, {
                        present: l || "hidden" !== d
                    }, (0, o.createElement)(P, (0, n.Z)({
                        "data-state": "hidden" === d ? "hidden" : "visible"
                    }, i, {
                        ref: t,
                        onPointerEnter: (0, f.M)(e.onPointerEnter, () => v("POINTER_ENTER")),
                        onPointerLeave: (0, f.M)(e.onPointerLeave, () => v("POINTER_LEAVE"))
                    })))
                }),
                R = (0, o.forwardRef)((e, t) => {
                    let r = E(b, e.__scopeScrollArea),
                        {
                            forceMount: l,
                            ...i
                        } = e,
                        [u, c] = (0, o.useState)(!1),
                        s = "horizontal" === e.orientation,
                        d = H(() => {
                            if (r.viewport) {
                                let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                                    t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                                c(s ? e : t)
                            }
                        }, 10);
                    return X(r.viewport, d), X(r.content, d), (0, o.createElement)(a.z, {
                        present: l || u
                    }, (0, o.createElement)(P, (0, n.Z)({
                        "data-state": u ? "visible" : "hidden"
                    }, i, {
                        ref: t
                    })))
                }),
                P = (0, o.forwardRef)((e, t) => {
                    let {
                        orientation: r = "vertical",
                        ...l
                    } = e, a = E(b, e.__scopeScrollArea), i = (0, o.useRef)(null), u = (0, o.useRef)(0), [c, s] = (0, o.useState)({
                        content: 0,
                        viewport: 0,
                        scrollbar: {
                            size: 0,
                            paddingStart: 0,
                            paddingEnd: 0
                        }
                    }), d = W(c.viewport, c.content), f = { ...l,
                        sizes: c,
                        onSizesChange: s,
                        hasThumb: !!(d > 0 && d < 1),
                        onThumbChange: e => i.current = e,
                        onThumbPointerUp: () => u.current = 0,
                        onThumbPointerDown: e => u.current = e
                    };

                    function v(e, t) {
                        return function(e, t, r, n = "ltr") {
                            let o = z(r),
                                l = t || o / 2,
                                a = r.scrollbar.paddingStart + l,
                                i = r.scrollbar.size - r.scrollbar.paddingEnd - (o - l),
                                u = r.content - r.viewport,
                                c = U([a, i], "ltr" === n ? [0, u] : [-1 * u, 0]);
                            return c(e)
                        }(e, u.current, c, t)
                    }
                    return "horizontal" === r ? (0, o.createElement)(T, (0, n.Z)({}, f, {
                        ref: t,
                        onThumbPositionChange: () => {
                            if (a.viewport && i.current) {
                                let e = a.viewport.scrollLeft,
                                    t = Z(e, c, a.dir);
                                i.current.style.transform = `translate3d(${t}px, 0, 0)`
                            }
                        },
                        onWheelScroll: e => {
                            a.viewport && (a.viewport.scrollLeft = e)
                        },
                        onDragScroll: e => {
                            a.viewport && (a.viewport.scrollLeft = v(e, a.dir))
                        }
                    })) : "vertical" === r ? (0, o.createElement)(_, (0, n.Z)({}, f, {
                        ref: t,
                        onThumbPositionChange: () => {
                            if (a.viewport && i.current) {
                                let e = a.viewport.scrollTop,
                                    t = Z(e, c);
                                i.current.style.transform = `translate3d(0, ${t}px, 0)`
                            }
                        },
                        onWheelScroll: e => {
                            a.viewport && (a.viewport.scrollTop = e)
                        },
                        onDragScroll: e => {
                            a.viewport && (a.viewport.scrollTop = v(e))
                        }
                    })) : null
                }),
                T = (0, o.forwardRef)((e, t) => {
                    let {
                        sizes: r,
                        onSizesChange: l,
                        ...a
                    } = e, i = E(b, e.__scopeScrollArea), [c, s] = (0, o.useState)(), d = (0, o.useRef)(null), f = (0, u.e)(t, d, i.onScrollbarXChange);
                    return (0, o.useEffect)(() => {
                        d.current && s(getComputedStyle(d.current))
                    }, [d]), (0, o.createElement)(A, (0, n.Z)({
                        "data-orientation": "horizontal"
                    }, a, {
                        ref: f,
                        sizes: r,
                        style: {
                            bottom: 0,
                            left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            "--radix-scroll-area-thumb-width": z(r) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: t => e.onThumbPointerDown(t.x),
                        onDragScroll: t => e.onDragScroll(t.x),
                        onWheelScroll: (t, r) => {
                            if (i.viewport) {
                                let n = i.viewport.scrollLeft + t.deltaX;
                                e.onWheelScroll(n), n > 0 && n < r && t.preventDefault()
                            }
                        },
                        onResize: () => {
                            d.current && i.viewport && c && l({
                                content: i.viewport.scrollWidth,
                                viewport: i.viewport.offsetWidth,
                                scrollbar: {
                                    size: d.current.clientWidth,
                                    paddingStart: F(c.paddingLeft),
                                    paddingEnd: F(c.paddingRight)
                                }
                            })
                        }
                    }))
                }),
                _ = (0, o.forwardRef)((e, t) => {
                    let {
                        sizes: r,
                        onSizesChange: l,
                        ...a
                    } = e, i = E(b, e.__scopeScrollArea), [c, s] = (0, o.useState)(), d = (0, o.useRef)(null), f = (0, u.e)(t, d, i.onScrollbarYChange);
                    return (0, o.useEffect)(() => {
                        d.current && s(getComputedStyle(d.current))
                    }, [d]), (0, o.createElement)(A, (0, n.Z)({
                        "data-orientation": "vertical"
                    }, a, {
                        ref: f,
                        sizes: r,
                        style: {
                            top: 0,
                            right: "ltr" === i.dir ? 0 : void 0,
                            left: "rtl" === i.dir ? 0 : void 0,
                            bottom: "var(--radix-scroll-area-corner-height)",
                            "--radix-scroll-area-thumb-height": z(r) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: t => e.onThumbPointerDown(t.y),
                        onDragScroll: t => e.onDragScroll(t.y),
                        onWheelScroll: (t, r) => {
                            if (i.viewport) {
                                let n = i.viewport.scrollTop + t.deltaY;
                                e.onWheelScroll(n), n > 0 && n < r && t.preventDefault()
                            }
                        },
                        onResize: () => {
                            d.current && i.viewport && c && l({
                                content: i.viewport.scrollHeight,
                                viewport: i.viewport.offsetHeight,
                                scrollbar: {
                                    size: d.current.clientHeight,
                                    paddingStart: F(c.paddingTop),
                                    paddingEnd: F(c.paddingBottom)
                                }
                            })
                        }
                    }))
                }),
                [L, D] = p(b),
                A = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        sizes: a,
                        hasThumb: i,
                        onThumbChange: s,
                        onThumbPointerUp: d,
                        onThumbPointerDown: v,
                        onThumbPositionChange: p,
                        onDragScroll: m,
                        onWheelScroll: h,
                        onResize: g,
                        ...w
                    } = e, y = E(b, r), [C, S] = (0, o.useState)(null), R = (0, u.e)(t, e => S(e)), P = (0, o.useRef)(null), T = (0, o.useRef)(""), _ = y.viewport, D = a.content - a.viewport, A = (0, c.W)(h), k = (0, c.W)(p), N = H(g, 10);

                    function x(e) {
                        if (P.current) {
                            let t = e.clientX - P.current.left,
                                r = e.clientY - P.current.top;
                            m({
                                x: t,
                                y: r
                            })
                        }
                    }
                    return (0, o.useEffect)(() => {
                        let e = e => {
                            let t = e.target,
                                r = null == C ? void 0 : C.contains(t);
                            r && A(e, D)
                        };
                        return document.addEventListener("wheel", e, {
                            passive: !1
                        }), () => document.removeEventListener("wheel", e, {
                            passive: !1
                        })
                    }, [_, C, D, A]), (0, o.useEffect)(k, [a, k]), X(C, N), X(y.content, N), (0, o.createElement)(L, {
                        scope: r,
                        scrollbar: C,
                        hasThumb: i,
                        onThumbChange: (0, c.W)(s),
                        onThumbPointerUp: (0, c.W)(d),
                        onThumbPositionChange: k,
                        onThumbPointerDown: (0, c.W)(v)
                    }, (0, o.createElement)(l.WV.div, (0, n.Z)({}, w, {
                        ref: R,
                        style: {
                            position: "absolute",
                            ...w.style
                        },
                        onPointerDown: (0, f.M)(e.onPointerDown, e => {
                            if (0 === e.button) {
                                let t = e.target;
                                t.setPointerCapture(e.pointerId), P.current = C.getBoundingClientRect(), T.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), x(e)
                            }
                        }),
                        onPointerMove: (0, f.M)(e.onPointerMove, x),
                        onPointerUp: (0, f.M)(e.onPointerUp, e => {
                            let t = e.target;
                            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = T.current, y.viewport && (y.viewport.style.scrollBehavior = ""), P.current = null
                        })
                    })))
                }),
                k = "ScrollAreaThumb",
                N = (0, o.forwardRef)((e, t) => {
                    let {
                        forceMount: r,
                        ...l
                    } = e, i = D(k, e.__scopeScrollArea);
                    return (0, o.createElement)(a.z, {
                        present: r || i.hasThumb
                    }, (0, o.createElement)(x, (0, n.Z)({
                        ref: t
                    }, l)))
                }),
                x = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        style: a,
                        ...i
                    } = e, c = E(k, r), s = D(k, r), {
                        onThumbPositionChange: d
                    } = s, v = (0, u.e)(t, e => s.onThumbChange(e)), p = (0, o.useRef)(), m = H(() => {
                        p.current && (p.current(), p.current = void 0)
                    }, 100);
                    return (0, o.useEffect)(() => {
                        let e = c.viewport;
                        if (e) {
                            let t = () => {
                                if (m(), !p.current) {
                                    let t = Y(e, d);
                                    p.current = t, d()
                                }
                            };
                            return d(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
                        }
                    }, [c.viewport, m, d]), (0, o.createElement)(l.WV.div, (0, n.Z)({
                        "data-state": s.hasThumb ? "visible" : "hidden"
                    }, i, {
                        ref: v,
                        style: {
                            width: "var(--radix-scroll-area-thumb-width)",
                            height: "var(--radix-scroll-area-thumb-height)",
                            ...a
                        },
                        onPointerDownCapture: (0, f.M)(e.onPointerDownCapture, e => {
                            let t = e.target,
                                r = t.getBoundingClientRect(),
                                n = e.clientX - r.left,
                                o = e.clientY - r.top;
                            s.onThumbPointerDown({
                                x: n,
                                y: o
                            })
                        }),
                        onPointerUp: (0, f.M)(e.onPointerUp, s.onThumbPointerUp)
                    }))
                }),
                O = "ScrollAreaCorner",
                I = (0, o.forwardRef)((e, t) => {
                    let r = E(O, e.__scopeScrollArea),
                        l = !!(r.scrollbarX && r.scrollbarY),
                        a = "scroll" !== r.type && l;
                    return a ? (0, o.createElement)(M, (0, n.Z)({}, e, {
                        ref: t
                    })) : null
                }),
                M = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        ...a
                    } = e, i = E(O, r), [u, c] = (0, o.useState)(0), [s, d] = (0, o.useState)(0);
                    return X(i.scrollbarX, () => {
                        var e;
                        let t = (null === (e = i.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                        i.onCornerHeightChange(t), d(t)
                    }), X(i.scrollbarY, () => {
                        var e;
                        let t = (null === (e = i.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                        i.onCornerWidthChange(t), c(t)
                    }), u && s ? (0, o.createElement)(l.WV.div, (0, n.Z)({}, a, {
                        ref: t,
                        style: {
                            width: u,
                            height: s,
                            position: "absolute",
                            right: "ltr" === i.dir ? 0 : void 0,
                            left: "rtl" === i.dir ? 0 : void 0,
                            bottom: 0,
                            ...e.style
                        }
                    })) : null
                });

            function F(e) {
                return e ? parseInt(e, 10) : 0
            }

            function W(e, t) {
                let r = e / t;
                return isNaN(r) ? 0 : r
            }

            function z(e) {
                let t = W(e.viewport, e.content),
                    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
                    n = (e.scrollbar.size - r) * t;
                return Math.max(n, 18)
            }

            function Z(e, t, r = "ltr") {
                let n = z(t),
                    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
                    l = t.scrollbar.size - o,
                    a = t.content - t.viewport,
                    i = "ltr" === r ? [0, a] : [-1 * a, 0],
                    u = function(e, [t, r]) {
                        return Math.min(r, Math.max(t, e))
                    }(e, i),
                    c = U([0, a], [0, l - n]);
                return c(u)
            }

            function U(e, t) {
                return r => {
                    if (e[0] === e[1] || t[0] === t[1]) return t[0];
                    let n = (t[1] - t[0]) / (e[1] - e[0]);
                    return t[0] + n * (r - e[0])
                }
            }
            let Y = (e, t = () => {}) => {
                let r = {
                        left: e.scrollLeft,
                        top: e.scrollTop
                    },
                    n = 0;
                return ! function o() {
                    let l = {
                            left: e.scrollLeft,
                            top: e.scrollTop
                        },
                        a = r.left !== l.left,
                        i = r.top !== l.top;
                    (a || i) && t(), r = l, n = window.requestAnimationFrame(o)
                }(), () => window.cancelAnimationFrame(n)
            };

            function H(e, t) {
                let r = (0, c.W)(e),
                    n = (0, o.useRef)(0);
                return (0, o.useEffect)(() => () => window.clearTimeout(n.current), []), (0, o.useCallback)(() => {
                    window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
                }, [r, t])
            }

            function X(e, t) {
                let r = (0, c.W)(t);
                (0, d.b)(() => {
                    let t = 0;
                    if (e) {
                        let n = new ResizeObserver(() => {
                            cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
                        });
                        return n.observe(e), () => {
                            window.cancelAnimationFrame(t), n.unobserve(e)
                        }
                    }
                }, [e, r])
            }
            let V = g,
                B = w,
                K = I
        },
        11907: function(e, t, r) {
            "use strict";
            let n, o;
            r.d(t, {
                mY: function() {
                    return e0
                }
            });
            var l = r(27198),
                a = r(2265),
                i = r.t(a, 2);

            function u(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (null == e || e(n), !1 === r || !n.defaultPrevented) return null == t ? void 0 : t(n)
                }
            }

            function c(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function s(...e) {
                return (0, a.useCallback)(c(...e), e)
            }
            let d = (null == globalThis ? void 0 : globalThis.document) ? a.useLayoutEffect : () => {},
                f = i["useId".toString()] || (() => void 0),
                v = 0;

            function p(e) {
                let [t, r] = a.useState(f());
                return d(() => {
                    e || r(e => null != e ? e : String(v++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }

            function m(e) {
                let t = (0, a.useRef)(e);
                return (0, a.useEffect)(() => {
                    t.current = e
                }), (0, a.useMemo)(() => (...e) => {
                    var r;
                    return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e)
                }, [])
            }
            var h = r(54887);
            let E = (0, a.forwardRef)((e, t) => {
                let {
                    children: r,
                    ...n
                } = e, o = a.Children.toArray(r), i = o.find(b);
                if (i) {
                    let e = i.props.children,
                        r = o.map(t => t !== i ? t : a.Children.count(e) > 1 ? a.Children.only(null) : (0, a.isValidElement)(e) ? e.props.children : null);
                    return (0, a.createElement)(g, (0, l.Z)({}, n, {
                        ref: t
                    }), (0, a.isValidElement)(e) ? (0, a.cloneElement)(e, void 0, r) : null)
                }
                return (0, a.createElement)(g, (0, l.Z)({}, n, {
                    ref: t
                }), r)
            });
            E.displayName = "Slot";
            let g = (0, a.forwardRef)((e, t) => {
                let {
                    children: r,
                    ...n
                } = e;
                return (0, a.isValidElement)(r) ? (0, a.cloneElement)(r, { ... function(e, t) {
                        let r = { ...t
                        };
                        for (let n in t) {
                            let o = e[n],
                                l = t[n],
                                a = /^on[A-Z]/.test(n);
                            a ? r[n] = (...e) => {
                                null == l || l(...e), null == o || o(...e)
                            } : "style" === n ? r[n] = { ...o,
                                ...l
                            } : "className" === n && (r[n] = [o, l].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...r
                        }
                    }(n, r.props),
                    ref: c(t, r.ref)
                }) : a.Children.count(r) > 1 ? a.Children.only(null) : null
            });
            g.displayName = "SlotClone";
            let w = ({
                children: e
            }) => (0, a.createElement)(a.Fragment, null, e);

            function b(e) {
                return (0, a.isValidElement)(e) && e.type === w
            }
            let y = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = (0, a.forwardRef)((e, r) => {
                        let {
                            asChild: n,
                            ...o
                        } = e, i = n ? E : t;
                        return (0, a.useEffect)(() => {
                            window[Symbol.for("radix-ui")] = !0
                        }, []), (0, a.createElement)(i, (0, l.Z)({}, o, {
                            ref: r
                        }))
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {}),
                C = "dismissableLayer.update",
                S = (0, a.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                R = (0, a.forwardRef)((e, t) => {
                    let {
                        disableOutsidePointerEvents: r = !1,
                        onEscapeKeyDown: o,
                        onPointerDownOutside: i,
                        onFocusOutside: c,
                        onInteractOutside: d,
                        onDismiss: f,
                        ...v
                    } = e, p = (0, a.useContext)(S), [h, E] = (0, a.useState)(null), [, g] = (0, a.useState)({}), w = s(t, e => E(e)), b = Array.from(p.layers), [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), _ = b.indexOf(R), L = h ? b.indexOf(h) : -1, D = p.layersWithOutsidePointerEventsDisabled.size > 0, A = L >= _, k = function(e) {
                        let t = m(e),
                            r = (0, a.useRef)(!1),
                            n = (0, a.useRef)(() => {});
                        return (0, a.useEffect)(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = {
                                            originalEvent: e
                                        };

                                        function o() {
                                            T("dismissableLayer.pointerDownOutside", t, r, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (document.removeEventListener("click", n.current), n.current = o, document.addEventListener("click", n.current, {
                                            once: !0
                                        })) : o()
                                    }
                                    r.current = !1
                                },
                                o = window.setTimeout(() => {
                                    document.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(o), document.removeEventListener("pointerdown", e), document.removeEventListener("click", n.current)
                            }
                        }, [t]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            r = [...p.branches].some(e => e.contains(t));
                        !A || r || (null == i || i(e), null == d || d(e), e.defaultPrevented || null == f || f())
                    }), N = function(e) {
                        let t = m(e),
                            r = (0, a.useRef)(!1);
                        return (0, a.useEffect)(() => {
                            let e = e => {
                                e.target && !r.current && T("dismissableLayer.focusOutside", t, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return document.addEventListener("focusin", e), () => document.removeEventListener("focusin", e)
                        }, [t]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target,
                            r = [...p.branches].some(e => e.contains(t));
                        r || (null == c || c(e), null == d || d(e), e.defaultPrevented || null == f || f())
                    });
                    return ! function(e) {
                        let t = m(e);
                        (0, a.useEffect)(() => {
                            let e = e => {
                                "Escape" === e.key && t(e)
                            };
                            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                        }, [t])
                    }(e => {
                        let t = L === p.layers.size - 1;
                        t && (null == o || o(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
                    }), (0, a.useEffect)(() => {
                        if (h) return r && (0 === p.layersWithOutsidePointerEventsDisabled.size && (n = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(h)), p.layers.add(h), P(), () => {
                            r && 1 === p.layersWithOutsidePointerEventsDisabled.size && (document.body.style.pointerEvents = n)
                        }
                    }, [h, r, p]), (0, a.useEffect)(() => () => {
                        h && (p.layers.delete(h), p.layersWithOutsidePointerEventsDisabled.delete(h), P())
                    }, [h, p]), (0, a.useEffect)(() => {
                        let e = () => g({});
                        return document.addEventListener(C, e), () => document.removeEventListener(C, e)
                    }, []), (0, a.createElement)(y.div, (0, l.Z)({}, v, {
                        ref: w,
                        style: {
                            pointerEvents: D ? A ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: u(e.onFocusCapture, N.onFocusCapture),
                        onBlurCapture: u(e.onBlurCapture, N.onBlurCapture),
                        onPointerDownCapture: u(e.onPointerDownCapture, k.onPointerDownCapture)
                    }))
                });

            function P() {
                let e = new CustomEvent(C);
                document.dispatchEvent(e)
            }

            function T(e, t, r, {
                discrete: n
            }) {
                let o = r.originalEvent.target,
                    l = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: r
                    });
                (t && o.addEventListener(e, t, {
                    once: !0
                }), n) ? o && (0, h.flushSync)(() => o.dispatchEvent(l)): o.dispatchEvent(l)
            }
            let _ = "focusScope.autoFocusOnMount",
                L = "focusScope.autoFocusOnUnmount",
                D = {
                    bubbles: !1,
                    cancelable: !0
                },
                A = (0, a.forwardRef)((e, t) => {
                    let {
                        loop: r = !1,
                        trapped: n = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        ...u
                    } = e, [c, d] = (0, a.useState)(null), f = m(o), v = m(i), p = (0, a.useRef)(null), h = s(t, e => d(e)), E = (0, a.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, a.useEffect)(() => {
                        if (n) {
                            function e(e) {
                                if (E.paused || !c) return;
                                let t = e.target;
                                c.contains(t) ? p.current = t : x(p.current, {
                                    select: !0
                                })
                            }

                            function t(e) {
                                E.paused || !c || c.contains(e.relatedTarget) || x(p.current, {
                                    select: !0
                                })
                            }
                            return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t)
                            }
                        }
                    }, [n, c, E.paused]), (0, a.useEffect)(() => {
                        if (c) {
                            O.add(E);
                            let e = document.activeElement,
                                t = c.contains(e);
                            if (!t) {
                                let t = new CustomEvent(_, D);
                                c.addEventListener(_, f), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let r = document.activeElement;
                                    for (let n of e)
                                        if (x(n, {
                                                select: t
                                            }), document.activeElement !== r) return
                                }(k(c).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && x(c))
                            }
                            return () => {
                                c.removeEventListener(_, f), setTimeout(() => {
                                    let t = new CustomEvent(L, D);
                                    c.addEventListener(L, v), c.dispatchEvent(t), t.defaultPrevented || x(null != e ? e : document.body, {
                                        select: !0
                                    }), c.removeEventListener(L, v), O.remove(E)
                                }, 0)
                            }
                        }
                    }, [c, f, v, E]);
                    let g = (0, a.useCallback)(e => {
                        if (!r && !n || E.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [n, l] = function(e) {
                                    let t = k(e),
                                        r = N(t, e),
                                        n = N(t.reverse(), e);
                                    return [r, n]
                                }(t),
                                a = n && l;
                            a ? e.shiftKey || o !== l ? e.shiftKey && o === n && (e.preventDefault(), r && x(l, {
                                select: !0
                            })) : (e.preventDefault(), r && x(n, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [r, n, E.paused]);
                    return (0, a.createElement)(y.div, (0, l.Z)({
                        tabIndex: -1
                    }, u, {
                        ref: h,
                        onKeyDown: g
                    }))
                });

            function k(e) {
                let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; r.nextNode();) t.push(r.currentNode);
                return t
            }

            function N(e, t) {
                for (let r of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(r, {
                            upTo: t
                        })) return r
            }

            function x(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var r;
                    let n = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
                }
            }
            let O = (o = [], {
                add(e) {
                    let t = o[0];
                    e !== t && (null == t || t.pause()), (o = I(o, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (o = I(o, e))[0]) || void 0 === t || t.resume()
                }
            });

            function I(e, t) {
                let r = [...e],
                    n = r.indexOf(t);
                return -1 !== n && r.splice(n, 1), r
            }
            let M = (0, a.forwardRef)((e, t) => {
                    var r;
                    let {
                        container: n = null == globalThis ? void 0 : null === (r = globalThis.document) || void 0 === r ? void 0 : r.body,
                        ...o
                    } = e;
                    return n ? h.createPortal((0, a.createElement)(y.div, (0, l.Z)({}, o, {
                        ref: t
                    })), n) : null
                }),
                F = e => {
                    let {
                        present: t,
                        children: r
                    } = e, n = function(e) {
                        var t;
                        let [r, n] = (0, a.useState)(), o = (0, a.useRef)({}), l = (0, a.useRef)(e), i = (0, a.useRef)("none"), u = e ? "mounted" : "unmounted", [c, s] = (t = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, (0, a.useReducer)((e, r) => {
                            let n = t[e][r];
                            return null != n ? n : e
                        }, u));
                        return (0, a.useEffect)(() => {
                            let e = W(o.current);
                            i.current = "mounted" === c ? e : "none"
                        }, [c]), d(() => {
                            let t = o.current,
                                r = l.current,
                                n = r !== e;
                            if (n) {
                                let n = i.current,
                                    o = W(t);
                                e ? s("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? s("UNMOUNT") : r && n !== o ? s("ANIMATION_OUT") : s("UNMOUNT"), l.current = e
                            }
                        }, [e, s]), d(() => {
                            if (r) {
                                let e = e => {
                                        let t = W(o.current),
                                            n = t.includes(e.animationName);
                                        e.target === r && n && (0, h.flushSync)(() => s("ANIMATION_END"))
                                    },
                                    t = e => {
                                        e.target === r && (i.current = W(o.current))
                                    };
                                return r.addEventListener("animationstart", t), r.addEventListener("animationcancel", e), r.addEventListener("animationend", e), () => {
                                    r.removeEventListener("animationstart", t), r.removeEventListener("animationcancel", e), r.removeEventListener("animationend", e)
                                }
                            }
                            s("ANIMATION_END")
                        }, [r, s]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(c),
                            ref: (0, a.useCallback)(e => {
                                e && (o.current = getComputedStyle(e)), n(e)
                            }, [])
                        }
                    }(t), o = "function" == typeof r ? r({
                        present: n.isPresent
                    }) : a.Children.only(r), l = s(n.ref, o.ref), i = "function" == typeof r;
                    return i || n.isPresent ? (0, a.cloneElement)(o, {
                        ref: l
                    }) : null
                };

            function W(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            F.displayName = "Presence";
            let z = 0;

            function Z() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var U = r(44192),
                Y = r(46241),
                H = r(46442),
                X = (0, r(83832)._)(),
                V = function() {},
                B = a.forwardRef(function(e, t) {
                    var r = a.useRef(null),
                        n = a.useState({
                            onScrollCapture: V,
                            onWheelCapture: V,
                            onTouchMoveCapture: V
                        }),
                        o = n[0],
                        l = n[1],
                        i = e.forwardProps,
                        u = e.children,
                        c = e.className,
                        s = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        v = e.sideCar,
                        p = e.noIsolation,
                        m = e.inert,
                        h = e.allowPinchZoom,
                        E = e.as,
                        g = void 0 === E ? "div" : E,
                        w = (0, U.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        b = (0, H.q)([r, t]),
                        y = (0, U.__assign)((0, U.__assign)({}, w), o);
                    return a.createElement(a.Fragment, null, d && a.createElement(v, {
                        sideCar: X,
                        removeScrollBar: s,
                        shards: f,
                        noIsolation: p,
                        inert: m,
                        setCallbacks: l,
                        allowPinchZoom: !!h,
                        lockRef: r
                    }), i ? a.cloneElement(a.Children.only(u), (0, U.__assign)((0, U.__assign)({}, y), {
                        ref: b
                    })) : a.createElement(g, (0, U.__assign)({}, y, {
                        className: c,
                        ref: b
                    }), u))
                });
            B.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, B.classNames = {
                fullWidth: Y.zi,
                zeroRight: Y.pF
            };
            var K = r(9539),
                $ = r(83819),
                q = r(70624),
                j = !1;
            if ("undefined" != typeof window) try {
                var G = Object.defineProperty({}, "passive", {
                    get: function() {
                        return j = !0, !0
                    }
                });
                window.addEventListener("test", G, G), window.removeEventListener("test", G, G)
            } catch (e) {
                j = !1
            }
            var J = !!j && {
                    passive: !1
                },
                Q = function(e) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t.overflowY && !(t.overflowY === t.overflowX && "visible" === t.overflowY)
                },
                ee = function(e) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t.overflowX && !(t.overflowY === t.overflowX && "visible" === t.overflowX)
                },
                et = function(e, t) {
                    var r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), er(e, r)) {
                            var n = en(e, r);
                            if (n[1] > n[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== document.body);
                    return !1
                },
                er = function(e, t) {
                    return "v" === e ? Q(t) : ee(t)
                },
                en = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                eo = function(e, t, r, n, o) {
                    var l, a = (l = window.getComputedStyle(t).direction, "h" === e && "rtl" === l ? -1 : 1),
                        i = a * n,
                        u = r.target,
                        c = t.contains(u),
                        s = !1,
                        d = i > 0,
                        f = 0,
                        v = 0;
                    do {
                        var p = en(e, u),
                            m = p[0],
                            h = p[1] - p[2] - a * m;
                        (m || h) && er(e, u) && (f += h, v += m), u = u.parentNode
                    } while (!c && u !== document.body || c && (t.contains(u) || t === u));
                    return d && (o && 0 === f || !o && i > f) ? s = !0 : !d && (o && 0 === v || !o && -i > v) && (s = !0), s
                },
                el = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                ea = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                ei = function(e) {
                    return e && "current" in e ? e.current : e
                },
                eu = 0,
                ec = [],
                es = (0, K.L)(X, function(e) {
                    var t = a.useRef([]),
                        r = a.useRef([0, 0]),
                        n = a.useRef(),
                        o = a.useState(eu++)[0],
                        l = a.useState(function() {
                            return (0, q.Ws)()
                        })[0],
                        i = a.useRef(e);
                    a.useEffect(function() {
                        i.current = e
                    }, [e]), a.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (0, U.__spreadArray)([e.lockRef.current], (e.shards || []).map(ei), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var u = a.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var o, l = el(e),
                                a = r.current,
                                u = "deltaX" in e ? e.deltaX : a[0] - l[0],
                                c = "deltaY" in e ? e.deltaY : a[1] - l[1],
                                s = e.target,
                                d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === s.type) return !1;
                            var f = et(d, s);
                            if (!f) return !0;
                            if (f ? o = d : (o = "v" === d ? "h" : "v", f = et(d, s)), !f) return !1;
                            if (!n.current && "changedTouches" in e && (u || c) && (n.current = o), !o) return !0;
                            var v = n.current || o;
                            return eo(v, t, e, "h" === v ? u : c, !0)
                        }, []),
                        c = a.useCallback(function(e) {
                            if (ec.length && ec[ec.length - 1] === l) {
                                var r = "deltaY" in e ? ea(e) : el(e),
                                    n = t.current.filter(function(t) {
                                        var n;
                                        return t.name === e.type && t.target === e.target && (n = t.delta)[0] === r[0] && n[1] === r[1]
                                    })[0];
                                if (n && n.should) {
                                    e.preventDefault();
                                    return
                                }
                                if (!n) {
                                    var o = (i.current.shards || []).map(ei).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) && e.preventDefault()
                                }
                            }
                        }, []),
                        s = a.useCallback(function(e, r, n, o) {
                            var l = {
                                name: e,
                                delta: r,
                                target: n,
                                should: o
                            };
                            t.current.push(l), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== l
                                })
                            }, 1)
                        }, []),
                        d = a.useCallback(function(e) {
                            r.current = el(e), n.current = void 0
                        }, []),
                        f = a.useCallback(function(t) {
                            s(t.type, ea(t), t.target, u(t, e.lockRef.current))
                        }, []),
                        v = a.useCallback(function(t) {
                            s(t.type, el(t), t.target, u(t, e.lockRef.current))
                        }, []);
                    a.useEffect(function() {
                        return ec.push(l), e.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: v
                            }), document.addEventListener("wheel", c, J), document.addEventListener("touchmove", c, J), document.addEventListener("touchstart", d, J),
                            function() {
                                ec = ec.filter(function(e) {
                                    return e !== l
                                }), document.removeEventListener("wheel", c, J), document.removeEventListener("touchmove", c, J), document.removeEventListener("touchstart", d, J)
                            }
                    }, []);
                    var p = e.removeScrollBar,
                        m = e.inert;
                    return a.createElement(a.Fragment, null, m ? a.createElement(l, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, p ? a.createElement($.jp, {
                        gapMode: "margin"
                    }) : null)
                }),
                ed = a.forwardRef(function(e, t) {
                    return a.createElement(B, (0, U.__assign)({}, e, {
                        ref: t,
                        sideCar: es
                    }))
                });
            ed.classNames = B.classNames;
            var ef = r(7146);
            let ev = "Dialog",
                [ep, em] = function(e, t = []) {
                    let r = [],
                        n = () => {
                            let t = r.map(e => (0, a.createContext)(e));
                            return function(r) {
                                let n = (null == r ? void 0 : r[e]) || t;
                                return (0, a.useMemo)(() => ({
                                    [`__scope${e}`]: { ...r,
                                        [e]: n
                                    }
                                }), [r, n])
                            }
                        };
                    return n.scopeName = e, [function(t, n) {
                        let o = (0, a.createContext)(n),
                            l = r.length;

                        function i(t) {
                            let {
                                scope: r,
                                children: n,
                                ...i
                            } = t, u = (null == r ? void 0 : r[e][l]) || o, c = (0, a.useMemo)(() => i, Object.values(i));
                            return (0, a.createElement)(u.Provider, {
                                value: c
                            }, n)
                        }
                        return r = [...r, n], i.displayName = t + "Provider", [i, function(r, i) {
                            let u = (null == i ? void 0 : i[e][l]) || o,
                                c = (0, a.useContext)(u);
                            if (c) return c;
                            if (void 0 !== n) return n;
                            throw Error(`\`${r}\` must be used within \`${t}\``)
                        }]
                    }, function(...e) {
                        let t = e[0];
                        if (1 === e.length) return t;
                        let r = () => {
                            let r = e.map(e => ({
                                useScope: e(),
                                scopeName: e.scopeName
                            }));
                            return function(e) {
                                let n = r.reduce((t, {
                                    useScope: r,
                                    scopeName: n
                                }) => {
                                    let o = r(e),
                                        l = o[`__scope${n}`];
                                    return { ...t,
                                        ...l
                                    }
                                }, {});
                                return (0, a.useMemo)(() => ({
                                    [`__scope${t.scopeName}`]: n
                                }), [n])
                            }
                        };
                        return r.scopeName = t.scopeName, r
                    }(n, ...t)]
                }(ev),
                [eh, eE] = ep(ev),
                eg = "DialogPortal",
                [ew, eb] = ep(eg, {
                    forceMount: void 0
                }),
                ey = "DialogOverlay",
                eC = (0, a.forwardRef)((e, t) => {
                    let r = eb(ey, e.__scopeDialog),
                        {
                            forceMount: n = r.forceMount,
                            ...o
                        } = e,
                        i = eE(ey, e.__scopeDialog);
                    return i.modal ? (0, a.createElement)(F, {
                        present: n || i.open
                    }, (0, a.createElement)(eS, (0, l.Z)({}, o, {
                        ref: t
                    }))) : null
                }),
                eS = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: r,
                        ...n
                    } = e, o = eE(ey, r);
                    return (0, a.createElement)(ed, {
                        as: E,
                        allowPinchZoom: !0,
                        shards: [o.contentRef]
                    }, (0, a.createElement)(y.div, (0, l.Z)({
                        "data-state": eD(o.open)
                    }, n, {
                        ref: t,
                        style: {
                            pointerEvents: "auto",
                            ...n.style
                        }
                    })))
                }),
                eR = "DialogContent",
                eP = (0, a.forwardRef)((e, t) => {
                    let r = eb(eR, e.__scopeDialog),
                        {
                            forceMount: n = r.forceMount,
                            ...o
                        } = e,
                        i = eE(eR, e.__scopeDialog);
                    return (0, a.createElement)(F, {
                        present: n || i.open
                    }, i.modal ? (0, a.createElement)(eT, (0, l.Z)({}, o, {
                        ref: t
                    })) : (0, a.createElement)(e_, (0, l.Z)({}, o, {
                        ref: t
                    })))
                }),
                eT = (0, a.forwardRef)((e, t) => {
                    let r = eE(eR, e.__scopeDialog),
                        n = (0, a.useRef)(null),
                        o = s(t, r.contentRef, n);
                    return (0, a.useEffect)(() => {
                        let e = n.current;
                        if (e) return (0, ef.Ry)(e)
                    }, []), (0, a.createElement)(eL, (0, l.Z)({}, e, {
                        ref: o,
                        trapFocus: r.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: u(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = r.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: u(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                r = 0 === t.button && !0 === t.ctrlKey,
                                n = 2 === t.button || r;
                            n && e.preventDefault()
                        }),
                        onFocusOutside: u(e.onFocusOutside, e => e.preventDefault())
                    }))
                }),
                e_ = (0, a.forwardRef)((e, t) => {
                    let r = eE(eR, e.__scopeDialog),
                        n = (0, a.useRef)(!1);
                    return (0, a.createElement)(eL, (0, l.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var o, l;
                            null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t), t.defaultPrevented || (n.current || null === (l = r.triggerRef.current) || void 0 === l || l.focus(), t.preventDefault()), n.current = !1
                        },
                        onInteractOutside: t => {
                            var o, l;
                            null === (o = e.onInteractOutside) || void 0 === o || o.call(e, t), t.defaultPrevented || (n.current = !0);
                            let a = t.target,
                                i = null === (l = r.triggerRef.current) || void 0 === l ? void 0 : l.contains(a);
                            i && t.preventDefault()
                        }
                    }))
                }),
                eL = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: r,
                        trapFocus: n,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: i,
                        ...u
                    } = e, c = eE(eR, r), d = (0, a.useRef)(null), f = s(t, d);
                    return (0, a.useEffect)(() => {
                        var e, t;
                        let r = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : Z()), document.body.insertAdjacentElement("beforeend", null !== (t = r[1]) && void 0 !== t ? t : Z()), z++, () => {
                            1 === z && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), z--
                        }
                    }, []), (0, a.createElement)(a.Fragment, null, (0, a.createElement)(A, {
                        asChild: !0,
                        loop: !0,
                        trapped: n,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i
                    }, (0, a.createElement)(R, (0, l.Z)({
                        role: "dialog",
                        id: c.contentId,
                        "aria-describedby": c.descriptionId,
                        "aria-labelledby": c.titleId,
                        "data-state": eD(c.open)
                    }, u, {
                        ref: f,
                        onDismiss: () => c.onOpenChange(!1)
                    }))), !1)
                });

            function eD(e) {
                return e ? "open" : "closed"
            }
            let [eA, ek] = function(e, t) {
                let r = (0, a.createContext)(t);

                function n(e) {
                    let {
                        children: t,
                        ...n
                    } = e, o = (0, a.useMemo)(() => n, Object.values(n));
                    return (0, a.createElement)(r.Provider, {
                        value: o
                    }, t)
                }
                return n.displayName = e + "Provider", [n, function(n) {
                    let o = (0, a.useContext)(r);
                    if (o) return o;
                    if (void 0 !== t) return t;
                    throw Error(`\`${n}\` must be used within \`${e}\``)
                }]
            }("DialogTitleWarning", {
                contentName: eR,
                titleName: "DialogTitle",
                docsSlug: "dialog"
            }), eN = e => {
                let {
                    __scopeDialog: t,
                    children: r,
                    open: n,
                    defaultOpen: o,
                    onOpenChange: l,
                    modal: i = !0
                } = e, u = (0, a.useRef)(null), c = (0, a.useRef)(null), [s = !1, d] = function({
                    prop: e,
                    defaultProp: t,
                    onChange: r = () => {}
                }) {
                    let [n, o] = function({
                        defaultProp: e,
                        onChange: t
                    }) {
                        let r = (0, a.useState)(e),
                            [n] = r,
                            o = (0, a.useRef)(n),
                            l = m(t);
                        return (0, a.useEffect)(() => {
                            o.current !== n && (l(n), o.current = n)
                        }, [n, o, l]), r
                    }({
                        defaultProp: t,
                        onChange: r
                    }), l = void 0 !== e, i = l ? e : n, u = m(r), c = (0, a.useCallback)(t => {
                        if (l) {
                            let r = "function" == typeof t ? t(e) : t;
                            r !== e && u(r)
                        } else o(t)
                    }, [l, e, o, u]);
                    return [i, c]
                }({
                    prop: n,
                    defaultProp: o,
                    onChange: l
                });
                return (0, a.createElement)(eh, {
                    scope: t,
                    triggerRef: u,
                    contentRef: c,
                    contentId: p(),
                    titleId: p(),
                    descriptionId: p(),
                    open: s,
                    onOpenChange: d,
                    onOpenToggle: (0, a.useCallback)(() => d(e => !e), [d]),
                    modal: i
                }, r)
            }, ex = e => {
                let {
                    __scopeDialog: t,
                    forceMount: r,
                    children: n,
                    container: o
                } = e, l = eE(eg, t);
                return (0, a.createElement)(ew, {
                    scope: t,
                    forceMount: r
                }, a.Children.map(n, e => (0, a.createElement)(F, {
                    present: r || l.open
                }, (0, a.createElement)(M, {
                    asChild: !0,
                    container: o
                }, e))))
            };
            var eO = r(61768),
                eI = '[cmdk-group=""]',
                eM = '[cmdk-group-items=""]',
                eF = '[cmdk-item=""]',
                eW = `${eF}:not([aria-disabled="true"])`,
                ez = "cmdk-item-select",
                eZ = "data-value",
                eU = (e, t) => eO(e, t),
                eY = a.createContext(void 0),
                eH = () => a.useContext(eY),
                eX = a.createContext(void 0),
                eV = () => a.useContext(eX),
                eB = a.createContext(void 0),
                eK = a.forwardRef((e, t) => {
                    let r = a.useRef(null),
                        n = e9(() => ({
                            search: "",
                            value: "",
                            filtered: {
                                count: 0,
                                items: new Map,
                                groups: new Set
                            }
                        })),
                        o = e9(() => new Set),
                        l = e9(() => new Map),
                        i = e9(() => new Map),
                        u = e9(() => new Set),
                        c = e1(e),
                        {
                            label: s,
                            children: d,
                            value: f,
                            onValueChange: v,
                            filter: p,
                            shouldFilter: m,
                            ...h
                        } = e,
                        E = a.useId(),
                        g = a.useId(),
                        w = a.useId(),
                        b = e7();
                    e2(() => {
                        if (void 0 !== f) {
                            let e = f.trim().toLowerCase();
                            n.current.value = e, b(6, _), y.emit()
                        }
                    }, [f]);
                    let y = a.useMemo(() => ({
                            subscribe: e => (u.current.add(e), () => u.current.delete(e)),
                            snapshot: () => n.current,
                            setState: (e, t, r) => {
                                var o, l, a;
                                if (!Object.is(n.current[e], t)) {
                                    if (n.current[e] = t, "search" === e) T(), R(), b(1, P);
                                    else if ("value" === e) {
                                        if ((null == (o = c.current) ? void 0 : o.value) !== void 0) {
                                            null == (a = (l = c.current).onValueChange) || a.call(l, t);
                                            return
                                        }
                                        r || b(5, _)
                                    }
                                    y.emit()
                                }
                            },
                            emit: () => {
                                u.current.forEach(e => e())
                            }
                        }), []),
                        C = a.useMemo(() => ({
                            value: (e, t) => {
                                t !== i.current.get(e) && (i.current.set(e, t), n.current.filtered.items.set(e, S(t)), b(2, () => {
                                    R(), y.emit()
                                }))
                            },
                            item: (e, t) => (o.current.add(e), t && (l.current.has(t) ? l.current.get(t).add(e) : l.current.set(t, new Set([e]))), b(3, () => {
                                T(), R(), n.current.value || P(), y.emit()
                            }), () => {
                                i.current.delete(e), o.current.delete(e), n.current.filtered.items.delete(e), b(4, () => {
                                    T(), P(), y.emit()
                                })
                            }),
                            group: e => (l.current.has(e) || l.current.set(e, new Set), () => {
                                i.current.delete(e), l.current.delete(e)
                            }),
                            filter: () => c.current.shouldFilter,
                            label: s || e["aria-label"],
                            listId: E,
                            inputId: w,
                            labelId: g
                        }), []);

                    function S(e) {
                        var t;
                        let r = (null == (t = c.current) ? void 0 : t.filter) ?? eU;
                        return e ? r(e, n.current.search) : 0
                    }

                    function R() {
                        if (!r.current || !n.current.search || !1 === c.current.shouldFilter) return;
                        let e = n.current.filtered.items,
                            t = [];
                        n.current.filtered.groups.forEach(r => {
                            let n = l.current.get(r),
                                o = 0;
                            n.forEach(t => {
                                o = Math.max(e.get(t), o)
                            }), t.push([r, o])
                        });
                        let o = r.current.querySelector('[cmdk-list-sizer=""]');
                        D().sort((t, r) => {
                            let n = t.getAttribute(eZ),
                                o = r.getAttribute(eZ);
                            return (e.get(o) ?? 0) - (e.get(n) ?? 0)
                        }).forEach(e => {
                            let t = e.closest(eM);
                            t ? t.appendChild(e.parentElement === t ? e : e.closest(`${eM} > *`)) : o.appendChild(e.parentElement === o ? e : e.closest(`${eM} > *`))
                        }), t.sort((e, t) => t[1] - e[1]).forEach(e => {
                            let t = r.current.querySelector(`${eI}[${eZ}="${e[0]}"]`);
                            null == t || t.parentElement.appendChild(t)
                        })
                    }

                    function P() {
                        let e = D().find(e => !e.ariaDisabled),
                            t = null == e ? void 0 : e.getAttribute(eZ);
                        y.setState("value", t || void 0)
                    }

                    function T() {
                        if (!n.current.search || !1 === c.current.shouldFilter) {
                            n.current.filtered.count = o.current.size;
                            return
                        }
                        n.current.filtered.groups = new Set;
                        let e = 0;
                        for (let t of o.current) {
                            let r = S(i.current.get(t));
                            n.current.filtered.items.set(t, r), r > 0 && e++
                        }
                        for (let [e, t] of l.current)
                            for (let r of t)
                                if (n.current.filtered.items.get(r) > 0) {
                                    n.current.filtered.groups.add(e);
                                    break
                                }
                        n.current.filtered.count = e
                    }

                    function _() {
                        var e, t, r;
                        let n = L();
                        n && ((null == (e = n.parentElement) ? void 0 : e.firstChild) === n && (null == (r = null == (t = n.closest(eI)) ? void 0 : t.querySelector('[cmdk-group-heading=""]')) || r.scrollIntoView({
                            block: "nearest"
                        })), n.scrollIntoView({
                            block: "nearest"
                        }))
                    }

                    function L() {
                        return r.current.querySelector(`${eF}[aria-selected="true"]`)
                    }

                    function D() {
                        return Array.from(r.current.querySelectorAll(eW))
                    }

                    function A(e) {
                        let t = D()[e];
                        t && y.setState("value", t.getAttribute(eZ))
                    }

                    function k(e) {
                        var t;
                        let r = L(),
                            n = D(),
                            o = n.findIndex(e => e === r),
                            l = n[o + e];
                        null != (t = c.current) && t.loop && (l = o + e < 0 ? n[n.length - 1] : o + e === n.length ? n[0] : n[o + e]), l && y.setState("value", l.getAttribute(eZ))
                    }

                    function N(e) {
                        let t = L(),
                            r = null == t ? void 0 : t.closest(eI),
                            n;
                        for (; r && !n;) n = null == (r = e > 0 ? function(e, t) {
                            let r = e.nextElementSibling;
                            for (; r;) {
                                if (r.matches(t)) return r;
                                r = r.nextElementSibling
                            }
                        }(r, eI) : function(e, t) {
                            let r = e.previousElementSibling;
                            for (; r;) {
                                if (r.matches(t)) return r;
                                r = r.previousElementSibling
                            }
                        }(r, eI)) ? void 0 : r.querySelector(eW);
                        n ? y.setState("value", n.getAttribute(eZ)) : k(e)
                    }
                    let x = () => A(D().length - 1),
                        O = e => {
                            e.preventDefault(), e.metaKey ? x() : e.altKey ? N(1) : k(1)
                        },
                        I = e => {
                            e.preventDefault(), e.metaKey ? A(0) : e.altKey ? N(-1) : k(-1)
                        };
                    return a.createElement("div", {
                        ref: e6([r, t]),
                        ...h,
                        "cmdk-root": "",
                        onKeyDown: e => {
                            var t;
                            if (null == (t = h.onKeyDown) || t.call(h, e), !e.defaultPrevented) switch (e.key) {
                                case "n":
                                case "j":
                                    e.ctrlKey && O(e);
                                    break;
                                case "ArrowDown":
                                    O(e);
                                    break;
                                case "p":
                                case "k":
                                    e.ctrlKey && I(e);
                                    break;
                                case "ArrowUp":
                                    I(e);
                                    break;
                                case "Home":
                                    e.preventDefault(), A(0);
                                    break;
                                case "End":
                                    e.preventDefault(), x();
                                    break;
                                case "Enter":
                                    {
                                        e.preventDefault();
                                        let t = L();
                                        if (t) {
                                            let e = new Event(ez);
                                            t.dispatchEvent(e)
                                        }
                                    }
                            }
                        }
                    }, a.createElement("label", {
                        "cmdk-label": "",
                        htmlFor: C.inputId,
                        id: C.labelId,
                        style: e3
                    }, s), a.createElement(eX.Provider, {
                        value: y
                    }, a.createElement(eY.Provider, {
                        value: C
                    }, d)))
                }),
                e$ = a.forwardRef((e, t) => {
                    let r = a.useId(),
                        n = a.useRef(null),
                        o = a.useContext(eB),
                        l = eH(),
                        i = e1(e);
                    e2(() => l.item(r, o), []);
                    let u = e8(r, n, [e.value, e.children, n]),
                        c = eV(),
                        s = e4(e => e.value && e.value === u.current),
                        d = e4(e => !1 === l.filter() || !e.search || e.filtered.items.get(r) > 0);

                    function f() {
                        var e, t;
                        null == (t = (e = i.current).onSelect) || t.call(e, u.current)
                    }
                    if (a.useEffect(() => {
                            let t = n.current;
                            if (!(!t || e.disabled)) return t.addEventListener(ez, f), () => t.removeEventListener(ez, f)
                        }, [d, e.onSelect, e.disabled]), !d) return null;
                    let {
                        disabled: v,
                        value: p,
                        onSelect: m,
                        ...h
                    } = e;
                    return a.createElement("div", {
                        ref: e6([n, t]),
                        ...h,
                        "cmdk-item": "",
                        role: "option",
                        "aria-disabled": v || void 0,
                        "aria-selected": s || void 0,
                        "data-selected": s || void 0,
                        onPointerMove: v ? void 0 : function() {
                            c.setState("value", u.current, !0)
                        },
                        onClick: v ? void 0 : f
                    }, e.children)
                }),
                eq = a.forwardRef((e, t) => {
                    let {
                        heading: r,
                        children: n,
                        ...o
                    } = e, l = a.useId(), i = a.useRef(null), u = a.useRef(null), c = a.useId(), s = eH(), d = e4(e => !1 === s.filter() || !e.search || e.filtered.groups.has(l));
                    e2(() => s.group(l), []), e8(l, i, [e.value, e.heading, u]);
                    let f = a.createElement(eB.Provider, {
                        value: l
                    }, n);
                    return a.createElement("div", {
                        ref: e6([i, t]),
                        ...o,
                        "cmdk-group": "",
                        role: "presentation",
                        hidden: !d || void 0
                    }, r && a.createElement("div", {
                        ref: u,
                        "cmdk-group-heading": "",
                        "aria-hidden": !0,
                        id: c
                    }, r), a.createElement("div", {
                        "cmdk-group-items": "",
                        role: "group",
                        "aria-labelledby": r ? c : void 0
                    }, f))
                }),
                ej = a.forwardRef((e, t) => {
                    let {
                        alwaysRender: r,
                        ...n
                    } = e, o = a.useRef(null), l = e4(e => !e.search);
                    return r || l ? a.createElement("div", {
                        ref: e6([o, t]),
                        ...n,
                        "cmdk-separator": "",
                        role: "separator"
                    }) : null
                }),
                eG = a.forwardRef((e, t) => {
                    let {
                        onValueChange: r,
                        ...n
                    } = e, o = null != e.value, l = eV(), i = e4(e => e.search), u = eH();
                    return a.useEffect(() => {
                        null != e.value && l.setState("search", e.value)
                    }, [e.value]), a.createElement("input", {
                        ref: t,
                        ...n,
                        "cmdk-input": "",
                        autoComplete: "off",
                        autoCorrect: "off",
                        spellCheck: !1,
                        "aria-autocomplete": "list",
                        role: "combobox",
                        "aria-expanded": !0,
                        "aria-controls": u.listId,
                        "aria-labelledby": u.labelId,
                        id: u.inputId,
                        type: "text",
                        value: o ? e.value : i,
                        onChange: e => {
                            o || l.setState("search", e.target.value), null == r || r(e.target.value)
                        }
                    })
                }),
                eJ = a.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...n
                    } = e, o = a.useRef(null), l = a.useRef(null), i = eH();
                    return a.useEffect(() => {
                        if (l.current && o.current) {
                            let e = l.current,
                                t = o.current,
                                r, n = new ResizeObserver(() => {
                                    r = requestAnimationFrame(() => {
                                        let r = e.getBoundingClientRect().height;
                                        t.style.setProperty("--cmdk-list-height", r.toFixed(1) + "px")
                                    })
                                });
                            return n.observe(e), () => {
                                cancelAnimationFrame(r), n.unobserve(e)
                            }
                        }
                    }, []), a.createElement("div", {
                        ref: e6([o, t]),
                        ...n,
                        "cmdk-list": "",
                        role: "listbox",
                        "aria-label": "Suggestions",
                        id: i.listId,
                        "aria-labelledby": i.inputId
                    }, a.createElement("div", {
                        ref: l,
                        "cmdk-list-sizer": ""
                    }, r))
                }),
                eQ = a.forwardRef((e, t) => {
                    let {
                        open: r,
                        onOpenChange: n,
                        container: o,
                        ...l
                    } = e;
                    return a.createElement(eN, {
                        open: r,
                        onOpenChange: n
                    }, a.createElement(ex, {
                        container: o
                    }, a.createElement(eC, {
                        "cmdk-overlay": ""
                    }), a.createElement(eP, {
                        "aria-label": e.label,
                        "cmdk-dialog": ""
                    }, a.createElement(eK, {
                        ref: t,
                        ...l
                    }))))
                }),
                e0 = Object.assign(eK, {
                    List: eJ,
                    Item: e$,
                    Input: eG,
                    Group: eq,
                    Separator: ej,
                    Dialog: eQ,
                    Empty: a.forwardRef((e, t) => {
                        let r = a.useRef(!0),
                            n = e4(e => 0 === e.filtered.count);
                        return a.useEffect(() => {
                            r.current = !1
                        }, []), r.current || !n ? null : a.createElement("div", {
                            ref: t,
                            ...e,
                            "cmdk-empty": "",
                            role: "presentation"
                        })
                    }),
                    Loading: a.forwardRef((e, t) => {
                        let {
                            progress: r,
                            children: n,
                            ...o
                        } = e;
                        return a.createElement("div", {
                            ref: t,
                            ...o,
                            "cmdk-loading": "",
                            role: "progressbar",
                            "aria-valuenow": r,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-label": "Loading..."
                        }, a.createElement("div", {
                            "aria-hidden": !0
                        }, n))
                    })
                });

            function e1(e) {
                let t = a.useRef(e);
                return e2(() => {
                    t.current = e
                }), t
            }
            var e2 = typeof window > "u" ? a.useEffect : a.useLayoutEffect;

            function e9(e) {
                let t = a.useRef();
                return void 0 === t.current && (t.current = e()), t
            }

            function e6(e) {
                return t => {
                    e.forEach(e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    })
                }
            }

            function e4(e) {
                let t = eV(),
                    r = () => e(t.snapshot());
                return a.useSyncExternalStore(t.subscribe, r, r)
            }

            function e8(e, t, r) {
                let n = a.useRef(),
                    o = eH();
                return e2(() => {
                    var l;
                    let a = (() => {
                        var e;
                        for (let t of r) {
                            if ("string" == typeof t) return t.trim().toLowerCase();
                            if ("object" == typeof t && "current" in t && t.current) return null == (e = t.current.textContent) ? void 0 : e.trim().toLowerCase()
                        }
                    })();
                    o.value(e, a), null == (l = t.current) || l.setAttribute(eZ, a), n.current = a
                }), n
            }
            var e7 = () => {
                    let [e, t] = a.useState(), r = e9(() => new Map);
                    return e2(() => {
                        r.current.forEach(e => e()), r.current = new Map
                    }, [e]), (e, n) => {
                        r.current.set(e, n), t({})
                    }
                },
                e3 = {
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    padding: "0",
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0"
                }
        }
    }
]);
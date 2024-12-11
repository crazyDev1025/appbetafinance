(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1842], {
        91960: function(e, t, n) {
            "use strict";

            function r() {
                for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                    var n, r, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r);
                        else
                            for (n in t) t[n] && (i && (i += " "), i += n)
                    }
                    return i
                }(e)) && (r && (r += " "), r += t);
                return r
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        50838: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return H
                }
            });
            var r, i, o, u, a, s = n(44192),
                l = n(2265),
                c = "right-scroll-bar-position",
                f = "width-before-scroll-bar",
                d = (void 0 === r && (r = {}), (void 0 === i && (i = function(e) {
                    return e
                }), o = [], u = !1, a = {
                    read: function() {
                        if (u) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return o.length ? o[o.length - 1] : null
                    },
                    useMedium: function(e) {
                        var t = i(e, u);
                        return o.push(t),
                            function() {
                                o = o.filter(function(e) {
                                    return e !== t
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (u = !0; o.length;) {
                            var t = o;
                            o = [], t.forEach(e)
                        }
                        o = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return o
                            }
                        }
                    },
                    assignMedium: function(e) {
                        u = !0;
                        var t = [];
                        if (o.length) {
                            var n = o;
                            o = [], n.forEach(e), t = o
                        }
                        var r = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            i = function() {
                                return Promise.resolve().then(r)
                            };
                        i(), o = {
                            push: function(e) {
                                t.push(e), i()
                            },
                            filter: function(e) {
                                return t = t.filter(e), o
                            }
                        }
                    }
                }).options = (0, s.__assign)({
                    async: !0,
                    ssr: !1
                }, r), a),
                h = function() {},
                p = l.forwardRef(function(e, t) {
                    var n, r, i, o = l.useRef(null),
                        u = l.useState({
                            onScrollCapture: h,
                            onWheelCapture: h,
                            onTouchMoveCapture: h
                        }),
                        a = u[0],
                        c = u[1],
                        f = e.forwardProps,
                        p = e.children,
                        g = e.className,
                        m = e.removeScrollBar,
                        b = e.enabled,
                        w = e.shards,
                        v = e.sideCar,
                        y = e.noIsolation,
                        x = e.inert,
                        S = e.allowPinchZoom,
                        E = e.as,
                        _ = void 0 === E ? "div" : E,
                        N = (0, s.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        O = (n = [o, t], r = function(e) {
                            return n.forEach(function(t) {
                                return "function" == typeof t ? t(e) : t && (t.current = e), t
                            })
                        }, (i = (0, l.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return i.value
                                    },
                                    set current(value) {
                                        var e = i.value;
                                        e !== value && (i.value = value, i.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, i.facade),
                        A = (0, s.__assign)((0, s.__assign)({}, N), a);
                    return l.createElement(l.Fragment, null, b && l.createElement(v, {
                        sideCar: d,
                        removeScrollBar: m,
                        shards: w,
                        noIsolation: y,
                        inert: x,
                        setCallbacks: c,
                        allowPinchZoom: !!S,
                        lockRef: o
                    }), f ? l.cloneElement(l.Children.only(p), (0, s.__assign)((0, s.__assign)({}, A), {
                        ref: O
                    })) : l.createElement(_, (0, s.__assign)({}, A, {
                        className: g,
                        ref: O
                    }), p))
                });
            p.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, p.classNames = {
                fullWidth: f,
                zeroRight: c
            };
            var g = function(e) {
                var t = e.sideCar,
                    n = (0, s.__rest)(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return l.createElement(r, (0, s.__assign)({}, n))
            };
            g.isSideCarExport = !0;
            var m = n(57340),
                b = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(n) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = (0, m.V)();
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var r, i;
                                (r = t).styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(n)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                w = function() {
                    var e = b();
                    return function(t, n) {
                        l.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                v = function() {
                    var e = w();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                y = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                x = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                S = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        i = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [x(n), x(r), x(i)]
                },
                E = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return y;
                    var t = S(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                _ = v(),
                N = function(e, t, n, r) {
                    var i = e.left,
                        o = e.top,
                        u = e.right,
                        a = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(i, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(c, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(f, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(f, " .").concat(f, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
                },
                O = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        i = void 0 === r ? "margin" : r,
                        o = l.useMemo(function() {
                            return E(i)
                        }, [i]);
                    return l.createElement(_, {
                        styles: N(o, !t, i, n ? "" : "!important")
                    })
                },
                A = !1;
            if ("undefined" != typeof window) try {
                var k = Object.defineProperty({}, "passive", {
                    get: function() {
                        return A = !0, !0
                    }
                });
                window.addEventListener("test", k, k), window.removeEventListener("test", k, k)
            } catch (e) {
                A = !1
            }
            var M = !!A && {
                    passive: !1
                },
                C = function(e) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t.overflowY && !(t.overflowY === t.overflowX && "visible" === t.overflowY)
                },
                T = function(e) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t.overflowX && !(t.overflowY === t.overflowX && "visible" === t.overflowX)
                },
                P = function(e, t) {
                    var n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), j(e, n)) {
                            var r = B(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                j = function(e, t) {
                    return "v" === e ? C(t) : T(t)
                },
                B = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                I = function(e, t, n, r, i) {
                    var o, u = (o = window.getComputedStyle(t).direction, "h" === e && "rtl" === o ? -1 : 1),
                        a = u * r,
                        s = n.target,
                        l = t.contains(s),
                        c = !1,
                        f = a > 0,
                        d = 0,
                        h = 0;
                    do {
                        var p = B(e, s),
                            g = p[0],
                            m = p[1] - p[2] - u * g;
                        (g || m) && j(e, s) && (d += m, h += g), s = s.parentNode
                    } while (!l && s !== document.body || l && (t.contains(s) || t === s));
                    return f && (i && 0 === d || !i && a > d) ? c = !0 : !f && (i && 0 === h || !i && -a > h) && (c = !0), c
                },
                L = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                F = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                R = function(e) {
                    return e && "current" in e ? e.current : e
                },
                U = 0,
                D = [],
                z = (d.useMedium(function(e) {
                    var t = l.useRef([]),
                        n = l.useRef([0, 0]),
                        r = l.useRef(),
                        i = l.useState(U++)[0],
                        o = l.useState(function() {
                            return v()
                        })[0],
                        u = l.useRef(e);
                    l.useEffect(function() {
                        u.current = e
                    }, [e]), l.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(i));
                            var t = (0, s.__spreadArray)([e.lockRef.current], (e.shards || []).map(R), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(i))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(i)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(i))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var a = l.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
                            var i, o = L(e),
                                a = n.current,
                                s = "deltaX" in e ? e.deltaX : a[0] - o[0],
                                l = "deltaY" in e ? e.deltaY : a[1] - o[1],
                                c = e.target,
                                f = Math.abs(s) > Math.abs(l) ? "h" : "v";
                            if ("touches" in e && "h" === f && "range" === c.type) return !1;
                            var d = P(f, c);
                            if (!d) return !0;
                            if (d ? i = f : (i = "v" === f ? "h" : "v", d = P(f, c)), !d) return !1;
                            if (!r.current && "changedTouches" in e && (s || l) && (r.current = i), !i) return !0;
                            var h = r.current || i;
                            return I(h, t, e, "h" === h ? s : l, !0)
                        }, []),
                        c = l.useCallback(function(e) {
                            if (D.length && D[D.length - 1] === o) {
                                var n = "deltaY" in e ? F(e) : L(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var i = (u.current.shards || []).map(R).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (i.length > 0 ? a(e, i[0]) : !u.current.noIsolation) && e.preventDefault()
                                }
                            }
                        }, []),
                        f = l.useCallback(function(e, n, r, i) {
                            var o = {
                                name: e,
                                delta: n,
                                target: r,
                                should: i
                            };
                            t.current.push(o), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== o
                                })
                            }, 1)
                        }, []),
                        d = l.useCallback(function(e) {
                            n.current = L(e), r.current = void 0
                        }, []),
                        h = l.useCallback(function(t) {
                            f(t.type, F(t), t.target, a(t, e.lockRef.current))
                        }, []),
                        p = l.useCallback(function(t) {
                            f(t.type, L(t), t.target, a(t, e.lockRef.current))
                        }, []);
                    l.useEffect(function() {
                        return D.push(o), e.setCallbacks({
                                onScrollCapture: h,
                                onWheelCapture: h,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", c, M), document.addEventListener("touchmove", c, M), document.addEventListener("touchstart", d, M),
                            function() {
                                D = D.filter(function(e) {
                                    return e !== o
                                }), document.removeEventListener("wheel", c, M), document.removeEventListener("touchmove", c, M), document.removeEventListener("touchstart", d, M)
                            }
                    }, []);
                    var g = e.removeScrollBar,
                        m = e.inert;
                    return l.createElement(l.Fragment, null, m ? l.createElement(o, {
                        styles: "\n  .block-interactivity-".concat(i, " {pointer-events: none;}\n  .allow-interactivity-").concat(i, " {pointer-events: all;}\n")
                    }) : null, g ? l.createElement(O, {
                        gapMode: "margin"
                    }) : null)
                }), g),
                $ = l.forwardRef(function(e, t) {
                    return l.createElement(p, (0, s.__assign)({}, e, {
                        ref: t,
                        sideCar: z
                    }))
                });
            $.classNames = p.classNames;
            var H = $
        },
        75298: function(e, t, n) {
            let r = n(47363),
                i = n(37621),
                o = n(46028),
                u = n(12330);

            function a(e, t, n, o, u) {
                let a = [].slice.call(arguments, 1),
                    s = a.length,
                    l = "function" == typeof a[s - 1];
                if (!l && !r()) throw Error("Callback required as last argument");
                if (l) {
                    if (s < 2) throw Error("Too few arguments provided");
                    2 === s ? (u = n, n = t, t = o = void 0) : 3 === s && (t.getContext && void 0 === u ? (u = o, o = void 0) : (u = o, o = n, n = t, t = void 0))
                } else {
                    if (s < 1) throw Error("Too few arguments provided");
                    return 1 === s ? (n = t, t = o = void 0) : 2 !== s || t.getContext || (o = n, n = t, t = void 0), new Promise(function(r, u) {
                        try {
                            let u = i.create(n, o);
                            r(e(u, t, o))
                        } catch (e) {
                            u(e)
                        }
                    })
                }
                try {
                    let r = i.create(n, o);
                    u(null, e(r, t, o))
                } catch (e) {
                    u(e)
                }
            }
            t.create = i.create, t.toCanvas = a.bind(null, o.render), t.toDataURL = a.bind(null, o.renderToDataURL), t.toString = a.bind(null, function(e, t, n) {
                return u.render(e, n)
            })
        },
        47363: function(e) {
            e.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        8177: function(e, t, n) {
            let r = n(13400).getSymbolSize;
            t.getRowColCoords = function(e) {
                if (1 === e) return [];
                let t = Math.floor(e / 7) + 2,
                    n = r(e),
                    i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
                    o = [n - 7];
                for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - i;
                return o.push(6), o.reverse()
            }, t.getPositions = function(e) {
                let n = [],
                    r = t.getRowColCoords(e),
                    i = r.length;
                for (let e = 0; e < i; e++)
                    for (let t = 0; t < i; t++)(0 !== e || 0 !== t) && (0 !== e || t !== i - 1) && (e !== i - 1 || 0 !== t) && n.push([r[e], r[t]]);
                return n
            }
        },
        77654: function(e, t, n) {
            let r = n(37662),
                i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function o(e) {
                this.mode = r.ALPHANUMERIC, this.data = e
            }
            o.getBitsLength = function(e) {
                return 11 * Math.floor(e / 2) + 6 * (e % 2)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t;
                for (t = 0; t + 2 <= this.data.length; t += 2) {
                    let n = 45 * i.indexOf(this.data[t]);
                    n += i.indexOf(this.data[t + 1]), e.put(n, 11)
                }
                this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6)
            }, e.exports = o
        },
        41904: function(e) {
            function t() {
                this.buffer = [], this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    return (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    let t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        21091: function(e) {
            function t(e) {
                if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
            }
            t.prototype.set = function(e, t, n, r) {
                let i = e * this.size + t;
                this.data[i] = n, r && (this.reservedBit[i] = !0)
            }, t.prototype.get = function(e, t) {
                return this.data[e * this.size + t]
            }, t.prototype.xor = function(e, t, n) {
                this.data[e * this.size + t] ^= n
            }, t.prototype.isReserved = function(e, t) {
                return this.reservedBit[e * this.size + t]
            }, e.exports = t
        },
        90690: function(e, t, n) {
            let r = n(60808),
                i = n(37662);

            function o(e) {
                this.mode = i.BYTE, this.data = new Uint8Array(r(e))
            }
            o.getBitsLength = function(e) {
                return 8 * e
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
            }, e.exports = o
        },
        37039: function(e, t, n) {
            let r = n(9406),
                i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return i[(e - 1) * 4 + 0];
                    case r.M:
                        return i[(e - 1) * 4 + 1];
                    case r.Q:
                        return i[(e - 1) * 4 + 2];
                    case r.H:
                        return i[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return o[(e - 1) * 4 + 0];
                    case r.M:
                        return o[(e - 1) * 4 + 1];
                    case r.Q:
                        return o[(e - 1) * 4 + 2];
                    case r.H:
                        return o[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        9406: function(e, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(e) {
                return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw Error("Unknown EC Level: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        78241: function(e, t, n) {
            let r = n(13400).getSymbolSize;
            t.getPositions = function(e) {
                let t = r(e);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        50237: function(e, t, n) {
            let r = n(13400),
                i = r.getBCHDigit(1335);
            t.getEncodedBits = function(e, t) {
                let n = e.bit << 3 | t,
                    o = n << 10;
                for (; r.getBCHDigit(o) - i >= 0;) o ^= 1335 << r.getBCHDigit(o) - i;
                return (n << 10 | o) ^ 21522
            }
        },
        51309: function(e, t) {
            let n = new Uint8Array(512),
                r = new Uint8Array(256);
            ! function() {
                let e = 1;
                for (let t = 0; t < 255; t++) n[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
                for (let e = 255; e < 512; e++) n[e] = n[e - 255]
            }(), t.log = function(e) {
                if (e < 1) throw Error("log(" + e + ")");
                return r[e]
            }, t.exp = function(e) {
                return n[e]
            }, t.mul = function(e, t) {
                return 0 === e || 0 === t ? 0 : n[r[e] + r[t]]
            }
        },
        69592: function(e, t, n) {
            let r = n(37662),
                i = n(13400);

            function o(e) {
                this.mode = r.KANJI, this.data = e
            }
            o.getBitsLength = function(e) {
                return 13 * e
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t;
                for (t = 0; t < this.data.length; t++) {
                    let n = i.toSJIS(this.data[t]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), e.put(n, 13)
                }
            }, e.exports = o
        },
        68334: function(e, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            t.isValid = function(e) {
                return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
            }, t.from = function(e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0
            }, t.getPenaltyN1 = function(e) {
                let t = e.size,
                    r = 0,
                    i = 0,
                    o = 0,
                    u = null,
                    a = null;
                for (let s = 0; s < t; s++) {
                    i = o = 0, u = a = null;
                    for (let l = 0; l < t; l++) {
                        let t = e.get(s, l);
                        t === u ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), u = t, i = 1), (t = e.get(l, s)) === a ? o++ : (o >= 5 && (r += n.N1 + (o - 5)), a = t, o = 1)
                    }
                    i >= 5 && (r += n.N1 + (i - 5)), o >= 5 && (r += n.N1 + (o - 5))
                }
                return r
            }, t.getPenaltyN2 = function(e) {
                let t = e.size,
                    r = 0;
                for (let n = 0; n < t - 1; n++)
                    for (let i = 0; i < t - 1; i++) {
                        let t = e.get(n, i) + e.get(n, i + 1) + e.get(n + 1, i) + e.get(n + 1, i + 1);
                        (4 === t || 0 === t) && r++
                    }
                return r * n.N2
            }, t.getPenaltyN3 = function(e) {
                let t = e.size,
                    r = 0,
                    i = 0,
                    o = 0;
                for (let n = 0; n < t; n++) {
                    i = o = 0;
                    for (let u = 0; u < t; u++) i = i << 1 & 2047 | e.get(n, u), u >= 10 && (1488 === i || 93 === i) && r++, o = o << 1 & 2047 | e.get(u, n), u >= 10 && (1488 === o || 93 === o) && r++
                }
                return r * n.N3
            }, t.getPenaltyN4 = function(e) {
                let t = 0,
                    r = e.data.length;
                for (let n = 0; n < r; n++) t += e.data[n];
                let i = Math.abs(Math.ceil(100 * t / r / 5) - 10);
                return i * n.N4
            }, t.applyMask = function(e, n) {
                let r = n.size;
                for (let i = 0; i < r; i++)
                    for (let o = 0; o < r; o++) n.isReserved(o, i) || n.xor(o, i, function(e, n, r) {
                        switch (e) {
                            case t.Patterns.PATTERN000:
                                return (n + r) % 2 == 0;
                            case t.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case t.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case t.Patterns.PATTERN011:
                                return (n + r) % 3 == 0;
                            case t.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                            case t.Patterns.PATTERN101:
                                return n * r % 2 + n * r % 3 == 0;
                            case t.Patterns.PATTERN110:
                                return (n * r % 2 + n * r % 3) % 2 == 0;
                            case t.Patterns.PATTERN111:
                                return (n * r % 3 + (n + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    }(e, o, i))
            }, t.getBestMask = function(e, n) {
                let r = Object.keys(t.Patterns).length,
                    i = 0,
                    o = 1 / 0;
                for (let u = 0; u < r; u++) {
                    n(u), t.applyMask(u, e);
                    let r = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(u, e), r < o && (o = r, i = u)
                }
                return i
            }
        },
        37662: function(e, t, n) {
            let r = n(64956),
                i = n(66579);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(e, t) {
                if (!e.ccBits) throw Error("Invalid mode: " + e);
                if (!r.isValid(t)) throw Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
            }, t.getBestModeForData = function(e) {
                return i.testNumeric(e) ? t.NUMERIC : i.testAlphanumeric(e) ? t.ALPHANUMERIC : i.testKanji(e) ? t.KANJI : t.BYTE
            }, t.toString = function(e) {
                if (e && e.id) return e.id;
                throw Error("Invalid mode")
            }, t.isValid = function(e) {
                return e && e.bit && e.ccBits
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw Error("Unknown mode: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        10894: function(e, t, n) {
            let r = n(37662);

            function i(e) {
                this.mode = r.NUMERIC, this.data = e.toString()
            }
            i.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t, n;
                for (t = 0; t + 3 <= this.data.length; t += 3) n = parseInt(this.data.substr(t, 3), 10), e.put(n, 10);
                let r = this.data.length - t;
                r > 0 && (n = parseInt(this.data.substr(t), 10), e.put(n, 3 * r + 1))
            }, e.exports = i
        },
        25153: function(e, t, n) {
            let r = n(51309);
            t.mul = function(e, t) {
                let n = new Uint8Array(e.length + t.length - 1);
                for (let i = 0; i < e.length; i++)
                    for (let o = 0; o < t.length; o++) n[i + o] ^= r.mul(e[i], t[o]);
                return n
            }, t.mod = function(e, t) {
                let n = new Uint8Array(e);
                for (; n.length - t.length >= 0;) {
                    let e = n[0];
                    for (let i = 0; i < t.length; i++) n[i] ^= r.mul(t[i], e);
                    let i = 0;
                    for (; i < n.length && 0 === n[i];) i++;
                    n = n.slice(i)
                }
                return n
            }, t.generateECPolynomial = function(e) {
                let n = new Uint8Array([1]);
                for (let i = 0; i < e; i++) n = t.mul(n, new Uint8Array([1, r.exp(i)]));
                return n
            }
        },
        37621: function(e, t, n) {
            let r = n(13400),
                i = n(9406),
                o = n(41904),
                u = n(21091),
                a = n(8177),
                s = n(78241),
                l = n(68334),
                c = n(37039),
                f = n(9936),
                d = n(48670),
                h = n(50237),
                p = n(37662),
                g = n(25082);

            function m(e, t, n) {
                let r, i;
                let o = e.size,
                    u = h.getEncodedBits(t, n);
                for (r = 0; r < 15; r++) i = (u >> r & 1) == 1, r < 6 ? e.set(r, 8, i, !0) : r < 8 ? e.set(r + 1, 8, i, !0) : e.set(o - 15 + r, 8, i, !0), r < 8 ? e.set(8, o - r - 1, i, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, i, !0) : e.set(8, 15 - r - 1, i, !0);
                e.set(o - 8, 8, 1, !0)
            }
            t.create = function(e, t) {
                let n, h;
                if (void 0 === e || "" === e) throw Error("No input text");
                let b = i.M;
                return void 0 !== t && (b = i.from(t.errorCorrectionLevel, i.M), n = d.from(t.version), h = l.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
                    function(e, t, n, i) {
                        let h;
                        if (Array.isArray(e)) h = g.fromArray(e);
                        else if ("string" == typeof e) {
                            let r = t;
                            if (!r) {
                                let t = g.rawSplit(e);
                                r = d.getBestVersionForData(t, n)
                            }
                            h = g.fromString(e, r || 40)
                        } else throw Error("Invalid data");
                        let b = d.getBestVersionForData(h, n);
                        if (!b) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (t) {
                            if (t < b) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + b + ".\n")
                        } else t = b;
                        let w = function(e, t, n) {
                                let i = new o;
                                n.forEach(function(t) {
                                    i.put(t.mode.bit, 4), i.put(t.getLength(), p.getCharCountIndicator(t.mode, e)), t.write(i)
                                });
                                let u = r.getSymbolTotalCodewords(e),
                                    a = c.getTotalCodewordsCount(e, t),
                                    s = (u - a) * 8;
                                for (i.getLengthInBits() + 4 <= s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
                                let l = (s - i.getLengthInBits()) / 8;
                                for (let e = 0; e < l; e++) i.put(e % 2 ? 17 : 236, 8);
                                return function(e, t, n) {
                                    let i, o;
                                    let u = r.getSymbolTotalCodewords(t),
                                        a = c.getTotalCodewordsCount(t, n),
                                        s = u - a,
                                        l = c.getBlocksCount(t, n),
                                        d = u % l,
                                        h = l - d,
                                        p = Math.floor(u / l),
                                        g = Math.floor(s / l),
                                        m = g + 1,
                                        b = p - g,
                                        w = new f(b),
                                        v = 0,
                                        y = Array(l),
                                        x = Array(l),
                                        S = 0,
                                        E = new Uint8Array(e.buffer);
                                    for (let e = 0; e < l; e++) {
                                        let t = e < h ? g : m;
                                        y[e] = E.slice(v, v + t), x[e] = w.encode(y[e]), v += t, S = Math.max(S, t)
                                    }
                                    let _ = new Uint8Array(u),
                                        N = 0;
                                    for (i = 0; i < S; i++)
                                        for (o = 0; o < l; o++) i < y[o].length && (_[N++] = y[o][i]);
                                    for (i = 0; i < b; i++)
                                        for (o = 0; o < l; o++) _[N++] = x[o][i];
                                    return _
                                }(i, e, t)
                            }(t, n, h),
                            v = r.getSymbolSize(t),
                            y = new u(v);
                        return function(e, t) {
                                let n = e.size,
                                    r = s.getPositions(t);
                                for (let t = 0; t < r.length; t++) {
                                    let i = r[t][0],
                                        o = r[t][1];
                                    for (let t = -1; t <= 7; t++)
                                        if (!(i + t <= -1) && !(n <= i + t))
                                            for (let r = -1; r <= 7; r++) o + r <= -1 || n <= o + r || (t >= 0 && t <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === t || 6 === t) || t >= 2 && t <= 4 && r >= 2 && r <= 4 ? e.set(i + t, o + r, !0, !0) : e.set(i + t, o + r, !1, !0))
                                }
                            }(y, t),
                            function(e) {
                                let t = e.size;
                                for (let n = 8; n < t - 8; n++) {
                                    let t = n % 2 == 0;
                                    e.set(n, 6, t, !0), e.set(6, n, t, !0)
                                }
                            }(y),
                            function(e, t) {
                                let n = a.getPositions(t);
                                for (let t = 0; t < n.length; t++) {
                                    let r = n[t][0],
                                        i = n[t][1];
                                    for (let t = -2; t <= 2; t++)
                                        for (let n = -2; n <= 2; n++) - 2 === t || 2 === t || -2 === n || 2 === n || 0 === t && 0 === n ? e.set(r + t, i + n, !0, !0) : e.set(r + t, i + n, !1, !0)
                                }
                            }(y, t), m(y, n, 0), t >= 7 && function(e, t) {
                                let n, r, i;
                                let o = e.size,
                                    u = d.getEncodedBits(t);
                                for (let t = 0; t < 18; t++) n = Math.floor(t / 3), r = t % 3 + o - 8 - 3, i = (u >> t & 1) == 1, e.set(n, r, i, !0), e.set(r, n, i, !0)
                            }(y, t),
                            function(e, t) {
                                let n = e.size,
                                    r = -1,
                                    i = n - 1,
                                    o = 7,
                                    u = 0;
                                for (let a = n - 1; a > 0; a -= 2)
                                    for (6 === a && a--;;) {
                                        for (let n = 0; n < 2; n++)
                                            if (!e.isReserved(i, a - n)) {
                                                let r = !1;
                                                u < t.length && (r = (t[u] >>> o & 1) == 1), e.set(i, a - n, r), -1 == --o && (u++, o = 7)
                                            }
                                        if ((i += r) < 0 || n <= i) {
                                            i -= r, r = -r;
                                            break
                                        }
                                    }
                            }(y, w), isNaN(i) && (i = l.getBestMask(y, m.bind(null, y, n))), l.applyMask(i, y), m(y, n, i), {
                                modules: y,
                                version: t,
                                errorCorrectionLevel: n,
                                maskPattern: i,
                                segments: h
                            }
                    }(e, n, b, h)
            }
        },
        9936: function(e, t, n) {
            let r = n(25153);

            function i(e) {
                this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
            }
            i.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
            }, i.prototype.encode = function(e) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let t = new Uint8Array(e.length + this.degree);
                t.set(e);
                let n = r.mod(t, this.genPoly),
                    i = this.degree - n.length;
                if (i > 0) {
                    let e = new Uint8Array(this.degree);
                    return e.set(n, i), e
                }
                return n
            }, e.exports = i
        },
        66579: function(e, t) {
            let n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            let i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            t.KANJI = RegExp(r, "g"), t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = RegExp(i, "g"), t.NUMERIC = RegExp(n, "g"), t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let o = RegExp("^" + r + "$"),
                u = RegExp("^" + n + "$"),
                a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(e) {
                return o.test(e)
            }, t.testNumeric = function(e) {
                return u.test(e)
            }, t.testAlphanumeric = function(e) {
                return a.test(e)
            }
        },
        25082: function(e, t, n) {
            let r = n(37662),
                i = n(10894),
                o = n(77654),
                u = n(90690),
                a = n(69592),
                s = n(66579),
                l = n(13400),
                c = n(41304);

            function f(e) {
                return unescape(encodeURIComponent(e)).length
            }

            function d(e, t, n) {
                let r;
                let i = [];
                for (; null !== (r = e.exec(n));) i.push({
                    data: r[0],
                    index: r.index,
                    mode: t,
                    length: r[0].length
                });
                return i
            }

            function h(e) {
                let t, n;
                let i = d(s.NUMERIC, r.NUMERIC, e),
                    o = d(s.ALPHANUMERIC, r.ALPHANUMERIC, e);
                l.isKanjiModeEnabled() ? (t = d(s.BYTE, r.BYTE, e), n = d(s.KANJI, r.KANJI, e)) : (t = d(s.BYTE_KANJI, r.BYTE, e), n = []);
                let u = i.concat(o, t, n);
                return u.sort(function(e, t) {
                    return e.index - t.index
                }).map(function(e) {
                    return {
                        data: e.data,
                        mode: e.mode,
                        length: e.length
                    }
                })
            }

            function p(e, t) {
                switch (t) {
                    case r.NUMERIC:
                        return i.getBitsLength(e);
                    case r.ALPHANUMERIC:
                        return o.getBitsLength(e);
                    case r.KANJI:
                        return a.getBitsLength(e);
                    case r.BYTE:
                        return u.getBitsLength(e)
                }
            }

            function g(e, t) {
                let n;
                let s = r.getBestModeForData(e);
                if ((n = r.from(t, s)) !== r.BYTE && n.bit < s.bit) throw Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(s));
                switch (n !== r.KANJI || l.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new i(e);
                    case r.ALPHANUMERIC:
                        return new o(e);
                    case r.KANJI:
                        return new a(e);
                    case r.BYTE:
                        return new u(e)
                }
            }
            t.fromArray = function(e) {
                return e.reduce(function(e, t) {
                    return "string" == typeof t ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e
                }, [])
            }, t.fromString = function(e, n) {
                let i = h(e, l.isKanjiModeEnabled()),
                    o = function(e) {
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                            let i = e[n];
                            switch (i.mode) {
                                case r.NUMERIC:
                                    t.push([i, {
                                        data: i.data,
                                        mode: r.ALPHANUMERIC,
                                        length: i.length
                                    }, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    t.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    t.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: f(i.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    t.push([{
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: f(i.data)
                                    }])
                            }
                        }
                        return t
                    }(i),
                    u = function(e, t) {
                        let n = {},
                            i = {
                                start: {}
                            },
                            o = ["start"];
                        for (let u = 0; u < e.length; u++) {
                            let a = e[u],
                                s = [];
                            for (let e = 0; e < a.length; e++) {
                                let l = a[e],
                                    c = "" + u + e;
                                s.push(c), n[c] = {
                                    node: l,
                                    lastCount: 0
                                }, i[c] = {};
                                for (let e = 0; e < o.length; e++) {
                                    let u = o[e];
                                    n[u] && n[u].node.mode === l.mode ? (i[u][c] = p(n[u].lastCount + l.length, l.mode) - p(n[u].lastCount, l.mode), n[u].lastCount += l.length) : (n[u] && (n[u].lastCount = l.length), i[u][c] = p(l.length, l.mode) + 4 + r.getCharCountIndicator(l.mode, t))
                                }
                            }
                            o = s
                        }
                        for (let e = 0; e < o.length; e++) i[o[e]].end = 0;
                        return {
                            map: i,
                            table: n
                        }
                    }(o, n),
                    a = c.find_path(u.map, "start", "end"),
                    s = [];
                for (let e = 1; e < a.length - 1; e++) s.push(u.table[a[e]].node);
                return t.fromArray(s.reduce(function(e, t) {
                    let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return n && n.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
                }, []))
            }, t.rawSplit = function(e) {
                return t.fromArray(h(e, l.isKanjiModeEnabled()))
            }
        },
        13400: function(e, t) {
            let n;
            let r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(e) {
                if (!e) throw Error('"version" cannot be null or undefined');
                if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * e + 17
            }, t.getSymbolTotalCodewords = function(e) {
                return r[e]
            }, t.getBCHDigit = function(e) {
                let t = 0;
                for (; 0 !== e;) t++, e >>>= 1;
                return t
            }, t.setToSJISFunction = function(e) {
                if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
                n = e
            }, t.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, t.toSJIS = function(e) {
                return n(e)
            }
        },
        64956: function(e, t) {
            t.isValid = function(e) {
                return !isNaN(e) && e >= 1 && e <= 40
            }
        },
        48670: function(e, t, n) {
            let r = n(13400),
                i = n(37039),
                o = n(9406),
                u = n(37662),
                a = n(64956),
                s = r.getBCHDigit(7973);

            function l(e, t) {
                return u.getCharCountIndicator(e, t) + 4
            }
            t.from = function(e, t) {
                return a.isValid(e) ? parseInt(e, 10) : t
            }, t.getCapacity = function(e, t, n) {
                if (!a.isValid(e)) throw Error("Invalid QR Code version");
                void 0 === n && (n = u.BYTE);
                let o = r.getSymbolTotalCodewords(e),
                    s = i.getTotalCodewordsCount(e, t),
                    c = (o - s) * 8;
                if (n === u.MIXED) return c;
                let f = c - l(n, e);
                switch (n) {
                    case u.NUMERIC:
                        return Math.floor(f / 10 * 3);
                    case u.ALPHANUMERIC:
                        return Math.floor(f / 11 * 2);
                    case u.KANJI:
                        return Math.floor(f / 13);
                    case u.BYTE:
                    default:
                        return Math.floor(f / 8)
                }
            }, t.getBestVersionForData = function(e, n) {
                let r;
                let i = o.from(n, o.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) return function(e, n) {
                        for (let r = 1; r <= 40; r++) {
                            let i = function(e, t) {
                                let n = 0;
                                return e.forEach(function(e) {
                                    let r = l(e.mode, t);
                                    n += r + e.getBitsLength()
                                }), n
                            }(e, r);
                            if (i <= t.getCapacity(r, n, u.MIXED)) return r
                        }
                    }(e, i);
                    if (0 === e.length) return 1;
                    r = e[0]
                } else r = e;
                return function(e, n, r) {
                    for (let i = 1; i <= 40; i++)
                        if (n <= t.getCapacity(i, r, e)) return i
                }(r.mode, r.getLength(), i)
            }, t.getEncodedBits = function(e) {
                if (!a.isValid(e) || e < 7) throw Error("Invalid QR Code version");
                let t = e << 12;
                for (; r.getBCHDigit(t) - s >= 0;) t ^= 7973 << r.getBCHDigit(t) - s;
                return e << 12 | t
            }
        },
        46028: function(e, t, n) {
            let r = n(10544);
            t.render = function(e, t, n) {
                var i;
                let o = n,
                    u = t;
                void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (u = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (e) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), o = r.getOptions(o);
                let a = r.getImageWidth(e.modules.size, o),
                    s = u.getContext("2d"),
                    l = s.createImageData(a, a);
                return r.qrToImageData(l.data, e, o), i = u, s.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = a, i.width = a, i.style.height = a + "px", i.style.width = a + "px", s.putImageData(l, 0, 0), u
            }, t.renderToDataURL = function(e, n, r) {
                let i = r;
                void 0 !== i || n && n.getContext || (i = n, n = void 0), i || (i = {});
                let o = t.render(e, n, i),
                    u = i.type || "image/png",
                    a = i.rendererOpts || {};
                return o.toDataURL(u, a.quality)
            }
        },
        12330: function(e, t, n) {
            let r = n(10544);

            function i(e, t) {
                let n = e.a / 255,
                    r = t + '="' + e.hex + '"';
                return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function o(e, t, n) {
                let r = e + t;
                return void 0 !== n && (r += " " + n), r
            }
            t.render = function(e, t, n) {
                let u = r.getOptions(t),
                    a = e.modules.size,
                    s = e.modules.data,
                    l = a + 2 * u.margin,
                    c = u.color.light.a ? "<path " + i(u.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
                    f = "<path " + i(u.color.dark, "stroke") + ' d="' + function(e, t, n) {
                        let r = "",
                            i = 0,
                            u = !1,
                            a = 0;
                        for (let s = 0; s < e.length; s++) {
                            let l = Math.floor(s % t),
                                c = Math.floor(s / t);
                            l || u || (u = !0), e[s] ? (a++, s > 0 && l > 0 && e[s - 1] || (r += u ? o("M", l + n, .5 + c + n) : o("m", i, 0), i = 0, u = !1), l + 1 < t && e[s + 1] || (r += o("h", a), a = 0)) : i++
                        }
                        return r
                    }(s, a, u.margin) + '"/>',
                    d = u.width ? 'width="' + u.width + '" height="' + u.width + '" ' : "",
                    h = '<svg xmlns="http://www.w3.org/2000/svg" ' + d + ('viewBox="0 0 ' + l) + " " + l + '" shape-rendering="crispEdges">' + c + f + "</svg>\n";
                return "function" == typeof n && n(null, h), h
            }
        },
        10544: function(e, t) {
            function n(e) {
                if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw Error("Color should be defined as hex string");
                let t = e.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
                (3 === t.length || 4 === t.length) && (t = Array.prototype.concat.apply([], t.map(function(e) {
                    return [e, e]
                }))), 6 === t.length && t.push("F", "F");
                let n = parseInt(t.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(e) {
                e || (e = {}), e.color || (e.color = {});
                let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                    r = e.width && e.width >= 21 ? e.width : void 0,
                    i = e.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : i,
                    margin: t,
                    color: {
                        dark: n(e.color.dark || "#000000ff"),
                        light: n(e.color.light || "#ffffffff")
                    },
                    type: e.type,
                    rendererOpts: e.rendererOpts || {}
                }
            }, t.getScale = function(e, t) {
                return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(e, n) {
                let r = t.getScale(e, n);
                return Math.floor((e + 2 * n.margin) * r)
            }, t.qrToImageData = function(e, n, r) {
                let i = n.modules.size,
                    o = n.modules.data,
                    u = t.getScale(i, r),
                    a = Math.floor((i + 2 * r.margin) * u),
                    s = r.margin * u,
                    l = [r.color.light, r.color.dark];
                for (let t = 0; t < a; t++)
                    for (let n = 0; n < a; n++) {
                        let c = (t * a + n) * 4,
                            f = r.color.light;
                        if (t >= s && n >= s && t < a - s && n < a - s) {
                            let e = Math.floor((t - s) / u),
                                r = Math.floor((n - s) / u);
                            f = l[o[e * i + r] ? 1 : 0]
                        }
                        e[c++] = f.r, e[c++] = f.g, e[c++] = f.b, e[c] = f.a
                    }
            }
        },
        61585: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.match(/^var\((.*)\)$/);
                return t ? t[1] : e
            }

            function i(e, t) {
                var n = {};
                if ("object" == typeof t) ! function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        i = t.constructor();
                    for (var o in t) {
                        var u = t[o],
                            a = [...r, o];
                        "string" == typeof u || "number" == typeof u || null == u ? i[o] = n(u, a) : "object" != typeof u || Array.isArray(u) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(u) ? "Array" : typeof u, '"')) : i[o] = e(u, n, a)
                    }
                    return i
                }(t, (t, i) => {
                    n[r(function(e, t) {
                        var n = e;
                        for (var r of t) {
                            if (!(r in n)) throw Error("Path ".concat(t.join(" -> "), " does not exist in object"));
                            n = n[r]
                        }
                        return n
                    }(e, i))] = String(t)
                });
                else
                    for (var i in e) n[r(i)] = e[i];
                return Object.defineProperty(n, "toString", {
                    value: function() {
                        return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
                    },
                    writable: !1
                }), n
            }
            n.d(t, {
                L: function() {
                    return i
                }
            })
        },
        63137: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            n.d(t, {
                $: function() {
                    return a
                }
            });
            var o = e => function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var o = Object.assign({}, ...n.map(e => e.styles)),
                        u = Object.keys(o),
                        a = u.filter(e => "mappings" in o[e]);
                    return Object.assign(t => {
                        var n = [],
                            r = {},
                            u = i({}, t),
                            s = !1;
                        for (var l of a) {
                            var c = t[l];
                            if (null != c)
                                for (var f of (s = !0, o[l].mappings)) r[f] = c, null == u[f] && delete u[f]
                        }
                        var d = s ? i(i({}, r), u) : t;
                        for (var h in d) {
                            var p = d[h],
                                g = o[h];
                            try {
                                if (g.mappings) continue;
                                if ("string" == typeof p || "number" == typeof p) n.push(g.values[p].defaultClass);
                                else if (Array.isArray(p))
                                    for (var m = 0; m < p.length; m++) {
                                        var b = p[m];
                                        if (null != b) {
                                            var w = g.responsiveArray[m];
                                            n.push(g.values[b].conditions[w])
                                        }
                                    } else
                                        for (var v in p) {
                                            var y = p[v];
                                            null != y && n.push(g.values[y].conditions[v])
                                        }
                            } catch (e) {
                                throw e
                            }
                        }
                        return e(n.join(" "))
                    }, {
                        properties: new Set(u)
                    })
                },
                u = e => e,
                a = function() {
                    return o(u)(...arguments)
                }
        },
        23603: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return o
                },
                M: function() {
                    return i
                }
            });
            var r = function(e, t) {
                return Object.defineProperty(e, "__recipe__", {
                    value: t,
                    writable: !1
                }), e
            };

            function i(e) {
                var {
                    conditions: t
                } = e;
                if (!t) throw Error("Styles have no conditions");
                return r(function(e) {
                    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
                        if (!t.defaultCondition) throw Error("No default condition");
                        return {
                            [t.defaultCondition]: e
                        }
                    }
                    if (Array.isArray(e)) {
                        if (!("responsiveArray" in t)) throw Error("Responsive arrays are not supported");
                        var n = {};
                        for (var r in t.responsiveArray) null != e[r] && (n[t.responsiveArray[r]] = e[r]);
                        return n
                    }
                    return e
                }, {
                    importPath: "@vanilla-extract/sprinkles/createUtils",
                    importName: "createNormalizeValueFn",
                    args: [{
                        conditions: e.conditions
                    }]
                })
            }

            function o(e) {
                var {
                    conditions: t
                } = e;
                if (!t) throw Error("Styles have no conditions");
                var n = i(e);
                return r(function(e, r) {
                    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
                        if (!t.defaultCondition) throw Error("No default condition");
                        return r(e, t.defaultCondition)
                    }
                    var i = Array.isArray(e) ? n(e) : e,
                        o = {};
                    for (var u in i) null != i[u] && (o[u] = r(i[u], u));
                    return o
                }, {
                    importPath: "@vanilla-extract/sprinkles/createUtils",
                    importName: "createMapValueFn",
                    args: [{
                        conditions: e.conditions
                    }]
                })
            }
        },
        15080: function(e, t, n) {
            var r;
            ! function(i) {
                "use strict";
                var o, u = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    a = Math.ceil,
                    s = Math.floor,
                    l = "[BigNumber Error] ",
                    c = l + "Number primitive has more than 15 significant digits: ",
                    f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13];

                function d(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function h(e) {
                    for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i;) {
                        for (n = 14 - (t = e[r++] + "").length; n--; t = "0" + t);
                        o += t
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function p(e, t) {
                    var n, r, i = e.c,
                        o = t.c,
                        u = e.s,
                        a = t.s,
                        s = e.e,
                        l = t.e;
                    if (!u || !a) return null;
                    if (n = i && !i[0], r = o && !o[0], n || r) return n ? r ? 0 : -a : u;
                    if (u != a) return u;
                    if (n = u < 0, r = s == l, !i || !o) return r ? 0 : !i ^ n ? 1 : -1;
                    if (!r) return s > l ^ n ? 1 : -1;
                    for (u = 0, a = (s = i.length) < (l = o.length) ? s : l; u < a; u++)
                        if (i[u] != o[u]) return i[u] > o[u] ^ n ? 1 : -1;
                    return s == l ? 0 : s > l ^ n ? 1 : -1
                }

                function g(e, t, n, r) {
                    if (e < t || e > n || e !== s(e)) throw Error(l + (r || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function m(e) {
                    var t = e.c.length - 1;
                    return d(e.e / 14) == t && e.c[t] % 2 != 0
                }

                function b(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function w(e, t, n) {
                    var r, i;
                    if (t < 0) {
                        for (i = n + "."; ++t; i += n);
                        e = i + e
                    } else if (r = e.length, ++t > r) {
                        for (i = n, t -= r; --t; i += n);
                        e += i
                    } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }(o = function e(t) {
                    var n, r, i, o, v, y, x, S, E, _ = R.prototype = {
                            constructor: R,
                            toString: null,
                            valueOf: null
                        },
                        N = new R(1),
                        O = 20,
                        A = 4,
                        k = -7,
                        M = 21,
                        C = -1e7,
                        T = 1e7,
                        P = !1,
                        j = 1,
                        B = 0,
                        I = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: "\xa0",
                            suffix: ""
                        },
                        L = "0123456789abcdefghijklmnopqrstuvwxyz",
                        F = !0;

                    function R(e, t) {
                        var n, r, i, o, a, l, f, d, h = this;
                        if (!(h instanceof R)) return new R(e, t);
                        if (null == t) {
                            if (e && !0 === e._isBigNumber) {
                                h.s = e.s, !e.c || e.e > T ? h.c = h.e = null : e.e < C ? h.c = [h.e = 0] : (h.e = e.e, h.c = e.c.slice());
                                return
                            }
                            if ((l = "number" == typeof e) && 0 * e == 0) {
                                if (h.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (o = 0, a = e; a >= 10; a /= 10, o++);
                                    o > T ? h.c = h.e = null : (h.e = o, h.c = [e]);
                                    return
                                }
                                d = String(e)
                            } else {
                                if (!u.test(d = String(e))) return E(h, d, l);
                                h.s = 45 == d.charCodeAt(0) ? (d = d.slice(1), -1) : 1
                            }(o = d.indexOf(".")) > -1 && (d = d.replace(".", "")), (a = d.search(/e/i)) > 0 ? (o < 0 && (o = a), o += +d.slice(a + 1), d = d.substring(0, a)) : o < 0 && (o = d.length)
                        } else {
                            if (g(t, 2, L.length, "Base"), 10 == t && F) return $(h = new R(e), O + h.e + 1, A);
                            if (d = String(e), l = "number" == typeof e) {
                                if (0 * e != 0) return E(h, d, l, t);
                                if (h.s = 1 / e < 0 ? (d = d.slice(1), -1) : 1, R.DEBUG && d.replace(/^0\.0*|\./, "").length > 15) throw Error(c + e)
                            } else h.s = 45 === d.charCodeAt(0) ? (d = d.slice(1), -1) : 1;
                            for (n = L.slice(0, t), o = a = 0, f = d.length; a < f; a++)
                                if (0 > n.indexOf(r = d.charAt(a))) {
                                    if ("." == r) {
                                        if (a > o) {
                                            o = f;
                                            continue
                                        }
                                    } else if (!i && (d == d.toUpperCase() && (d = d.toLowerCase()) || d == d.toLowerCase() && (d = d.toUpperCase()))) {
                                        i = !0, a = -1, o = 0;
                                        continue
                                    }
                                    return E(h, String(e), l, t)
                                }
                            l = !1, (o = (d = S(d, t, 10, h.s)).indexOf(".")) > -1 ? d = d.replace(".", "") : o = d.length
                        }
                        for (a = 0; 48 === d.charCodeAt(a); a++);
                        for (f = d.length; 48 === d.charCodeAt(--f););
                        if (d = d.slice(a, ++f)) {
                            if (f -= a, l && R.DEBUG && f > 15 && (e > 9007199254740991 || e !== s(e))) throw Error(c + h.s * e);
                            if ((o = o - a - 1) > T) h.c = h.e = null;
                            else if (o < C) h.c = [h.e = 0];
                            else {
                                if (h.e = o, h.c = [], a = (o + 1) % 14, o < 0 && (a += 14), a < f) {
                                    for (a && h.c.push(+d.slice(0, a)), f -= 14; a < f;) h.c.push(+d.slice(a, a += 14));
                                    a = 14 - (d = d.slice(a)).length
                                } else a -= f;
                                for (; a--; d += "0");
                                h.c.push(+d)
                            }
                        } else h.c = [h.e = 0]
                    }

                    function U(e, t, n, r) {
                        var i, o, u, a, s;
                        if (null == n ? n = A : g(n, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], u = e.e, null == t) s = h(e.c), s = 1 == r || 2 == r && (u <= k || u >= M) ? b(s, u) : w(s, u, "0");
                        else if (o = (e = $(new R(e), t, n)).e, a = (s = h(e.c)).length, 1 == r || 2 == r && (t <= o || o <= k)) {
                            for (; a < t; s += "0", a++);
                            s = b(s, o)
                        } else if (t -= u, s = w(s, o, "0"), o + 1 > a) {
                            if (--t > 0)
                                for (s += "."; t--; s += "0");
                        } else if ((t += o - a) > 0)
                            for (o + 1 == a && (s += "."); t--; s += "0");
                        return e.s < 0 && i ? "-" + s : s
                    }

                    function D(e, t) {
                        for (var n, r, i = 1, o = new R(e[0]); i < e.length; i++)(r = new R(e[i])).s && (n = p(o, r)) !== t && (0 !== n || o.s !== t) || (o = r);
                        return o
                    }

                    function z(e, t, n) {
                        for (var r = 1, i = t.length; !t[--i]; t.pop());
                        for (i = t[0]; i >= 10; i /= 10, r++);
                        return (n = r + 14 * n - 1) > T ? e.c = e.e = null : n < C ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
                    }

                    function $(e, t, n, r) {
                        var i, o, u, l, c, d, h, p = e.c;
                        if (p) {
                            e: {
                                for (i = 1, l = p[0]; l >= 10; l /= 10, i++);
                                if ((o = t - i) < 0) o += 14,
                                u = t,
                                h = s((c = p[d = 0]) / f[i - u - 1] % 10);
                                else if ((d = a((o + 1) / 14)) >= p.length) {
                                    if (r) {
                                        for (; p.length <= d; p.push(0));
                                        c = h = 0, i = 1, o %= 14, u = o - 14 + 1
                                    } else break e
                                } else {
                                    for (i = 1, c = l = p[d]; l >= 10; l /= 10, i++);
                                    o %= 14, h = (u = o - 14 + i) < 0 ? 0 : s(c / f[i - u - 1] % 10)
                                }
                                if (r = r || t < 0 || null != p[d + 1] || (u < 0 ? c : c % f[i - u - 1]), r = n < 4 ? (h || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : h > 5 || 5 == h && (4 == n || r || 6 == n && (o > 0 ? u > 0 ? c / f[i - u] : 0 : p[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !p[0]) return p.length = 0, r ? (t -= e.e + 1, p[0] = f[(14 - t % 14) % 14], e.e = -t || 0) : p[0] = e.e = 0, e;
                                if (0 == o ? (p.length = d, l = 1, d--) : (p.length = d + 1, l = f[14 - o], p[d] = u > 0 ? s(c / f[i - u] % f[u]) * l : 0), r)
                                    for (;;) {
                                        if (0 == d) {
                                            for (o = 1, u = p[0]; u >= 10; u /= 10, o++);
                                            for (u = p[0] += l, l = 1; u >= 10; u /= 10, l++);
                                            o != l && (e.e++, 1e14 == p[0] && (p[0] = 1));
                                            break
                                        }
                                        if (p[d] += l, 1e14 != p[d]) break;
                                        p[d--] = 0, l = 1
                                    }
                                for (o = p.length; 0 === p[--o]; p.pop());
                            }
                            e.e > T ? e.c = e.e = null : e.e < C && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function H(e) {
                        var t, n = e.e;
                        return null === n ? e.toString() : (t = h(e.c), t = n <= k || n >= M ? b(t, n) : w(t, n, "0"), e.s < 0 ? "-" + t : t)
                    }
                    return R.clone = e, R.ROUND_UP = 0, R.ROUND_DOWN = 1, R.ROUND_CEIL = 2, R.ROUND_FLOOR = 3, R.ROUND_HALF_UP = 4, R.ROUND_HALF_DOWN = 5, R.ROUND_HALF_EVEN = 6, R.ROUND_HALF_CEIL = 7, R.ROUND_HALF_FLOOR = 8, R.EUCLID = 9, R.config = R.set = function(e) {
                        var t, n;
                        if (null != e) {
                            if ("object" == typeof e) {
                                if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (g(n = e[t], 0, 1e9, t), O = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (g(n = e[t], 0, 8, t), A = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((n = e[t]) && n.pop ? (g(n[0], -1e9, 0, t), g(n[1], 0, 1e9, t), k = n[0], M = n[1]) : (g(n, -1e9, 1e9, t), k = -(M = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE")) {
                                    if ((n = e[t]) && n.pop) g(n[0], -1e9, -1, t), g(n[1], 1, 1e9, t), C = n[0], T = n[1];
                                    else if (g(n, -1e9, 1e9, t), n) C = -(T = n < 0 ? -n : n);
                                    else throw Error(l + t + " cannot be zero: " + n)
                                }
                                if (e.hasOwnProperty(t = "CRYPTO")) {
                                    if (!!(n = e[t]) === n) {
                                        if (n) {
                                            if ("undefined" != typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) P = n;
                                            else throw P = !n, Error(l + "crypto unavailable")
                                        } else P = n
                                    } else throw Error(l + t + " not true or false: " + n)
                                }
                                if (e.hasOwnProperty(t = "MODULO_MODE") && (g(n = e[t], 0, 9, t), j = n), e.hasOwnProperty(t = "POW_PRECISION") && (g(n = e[t], 0, 1e9, t), B = n), e.hasOwnProperty(t = "FORMAT")) {
                                    if ("object" == typeof(n = e[t])) I = n;
                                    else throw Error(l + t + " not an object: " + n)
                                }
                                if (e.hasOwnProperty(t = "ALPHABET")) {
                                    if ("string" != typeof(n = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(l + t + " invalid: " + n);
                                    F = "0123456789" == n.slice(0, 10), L = n
                                }
                            } else throw Error(l + "Object expected: " + e)
                        }
                        return {
                            DECIMAL_PLACES: O,
                            ROUNDING_MODE: A,
                            EXPONENTIAL_AT: [k, M],
                            RANGE: [C, T],
                            CRYPTO: P,
                            MODULO_MODE: j,
                            POW_PRECISION: B,
                            FORMAT: I,
                            ALPHABET: L
                        }
                    }, R.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!R.DEBUG) return !0;
                        var t, n, r = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == ({}).toString.call(r)) {
                            if ((1 === o || -1 === o) && i >= -1e9 && i <= 1e9 && i === s(i)) {
                                if (0 === r[0]) {
                                    if (0 === i && 1 === r.length) return !0;
                                    break e
                                }
                                if ((t = (i + 1) % 14) < 1 && (t += 14), String(r[0]).length == t) {
                                    for (t = 0; t < r.length; t++)
                                        if ((n = r[t]) < 0 || n >= 1e14 || n !== s(n)) break e;
                                    if (0 !== n) return !0
                                }
                            }
                        } else
                        if (null === r && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(l + "Invalid BigNumber: " + e)
                    }, R.maximum = R.max = function() {
                        return D(arguments, -1)
                    }, R.minimum = R.min = function() {
                        return D(arguments, 1)
                    }, R.random = (n = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return s(9007199254740992 * Math.random())
                    } : function() {
                        return (1073741824 * Math.random() | 0) * 8388608 + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var t, r, i, o, u, c = 0,
                            d = [],
                            h = new R(N);
                        if (null == e ? e = O : g(e, 0, 1e9), o = a(e / 14), P) {
                            if (crypto.getRandomValues) {
                                for (t = crypto.getRandomValues(new Uint32Array(o *= 2)); c < o;)(u = 131072 * t[c] + (t[c + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), t[c] = r[0], t[c + 1] = r[1]) : (d.push(u % 1e14), c += 2);
                                c = o / 2
                            } else if (crypto.randomBytes) {
                                for (t = crypto.randomBytes(o *= 7); c < o;)(u = (31 & t[c]) * 281474976710656 + 1099511627776 * t[c + 1] + 4294967296 * t[c + 2] + 16777216 * t[c + 3] + (t[c + 4] << 16) + (t[c + 5] << 8) + t[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, c) : (d.push(u % 1e14), c += 7);
                                c = o / 7
                            } else throw P = !1, Error(l + "crypto unavailable")
                        }
                        if (!P)
                            for (; c < o;)(u = n()) < 9e15 && (d[c++] = u % 1e14);
                        for (o = d[--c], e %= 14, o && e && (u = f[14 - e], d[c] = s(o / u) * u); 0 === d[c]; d.pop(), c--);
                        if (c < 0) d = [i = 0];
                        else {
                            for (i = -1; 0 === d[0]; d.splice(0, 1), i -= 14);
                            for (c = 1, u = d[0]; u >= 10; u /= 10, c++);
                            c < 14 && (i -= 14 - c)
                        }
                        return h.e = i, h.c = d, h
                    }), R.sum = function() {
                        for (var e = 1, t = arguments, n = new R(t[0]); e < t.length;) n = n.plus(t[e++]);
                        return n
                    }, S = function() {
                        var e = "0123456789";

                        function t(e, t, n, r) {
                            for (var i, o, u = [0], a = 0, s = e.length; a < s;) {
                                for (o = u.length; o--; u[o] *= t);
                                for (u[0] += r.indexOf(e.charAt(a++)), i = 0; i < u.length; i++) u[i] > n - 1 && (null == u[i + 1] && (u[i + 1] = 0), u[i + 1] += u[i] / n | 0, u[i] %= n)
                            }
                            return u.reverse()
                        }
                        return function(n, r, i, o, u) {
                            var a, s, l, c, f, d, p, g, m = n.indexOf("."),
                                b = O,
                                v = A;
                            for (m >= 0 && (c = B, B = 0, n = n.replace(".", ""), d = (g = new R(r)).pow(n.length - m), B = c, g.c = t(w(h(d.c), d.e, "0"), 10, i, e), g.e = g.c.length), l = c = (p = t(n, r, i, u ? (a = L, e) : (a = e, L))).length; 0 == p[--c]; p.pop());
                            if (!p[0]) return a.charAt(0);
                            if (m < 0 ? --l : (d.c = p, d.e = l, d.s = o, p = (d = x(d, g, b, v, i)).c, f = d.r, l = d.e), m = p[s = l + b + 1], c = i / 2, f = f || s < 0 || null != p[s + 1], f = v < 4 ? (null != m || f) && (0 == v || v == (d.s < 0 ? 3 : 2)) : m > c || m == c && (4 == v || f || 6 == v && 1 & p[s - 1] || v == (d.s < 0 ? 8 : 7)), s < 1 || !p[0]) n = f ? w(a.charAt(1), -b, a.charAt(0)) : a.charAt(0);
                            else {
                                if (p.length = s, f)
                                    for (--i; ++p[--s] > i;) p[s] = 0, s || (++l, p = [1].concat(p));
                                for (c = p.length; !p[--c];);
                                for (m = 0, n = ""; m <= c; n += a.charAt(p[m++]));
                                n = w(n, l, a.charAt(0))
                            }
                            return n
                        }
                    }(), x = function() {
                        function e(e, t, n) {
                            var r, i, o, u, a = 0,
                                s = e.length,
                                l = t % 1e7,
                                c = t / 1e7 | 0;
                            for (e = e.slice(); s--;) r = c * (o = e[s] % 1e7) + (u = e[s] / 1e7 | 0) * l, a = ((i = l * o + r % 1e7 * 1e7 + a) / n | 0) + (r / 1e7 | 0) + c * u, e[s] = i % n;
                            return a && (e = [a].concat(e)), e
                        }

                        function t(e, t, n, r) {
                            var i, o;
                            if (n != r) o = n > r ? 1 : -1;
                            else
                                for (i = o = 0; i < n; i++)
                                    if (e[i] != t[i]) {
                                        o = e[i] > t[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function n(e, t, n, r) {
                            for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(r, i, o, u, a) {
                            var l, c, f, h, p, g, m, b, w, v, y, x, S, E, _, N, O, A = r.s == i.s ? 1 : -1,
                                k = r.c,
                                M = i.c;
                            if (!k || !k[0] || !M || !M[0]) return new R(r.s && i.s && (k ? !M || k[0] != M[0] : M) ? k && 0 == k[0] || !M ? 0 * A : A / 0 : NaN);
                            for (w = (b = new R(A)).c = [], A = o + (c = r.e - i.e) + 1, a || (a = 1e14, c = d(r.e / 14) - d(i.e / 14), A = A / 14 | 0), f = 0; M[f] == (k[f] || 0); f++);
                            if (M[f] > (k[f] || 0) && c--, A < 0) w.push(1), h = !0;
                            else {
                                for (E = k.length, N = M.length, f = 0, A += 2, (p = s(a / (M[0] + 1))) > 1 && (M = e(M, p, a), k = e(k, p, a), N = M.length, E = k.length), S = N, y = (v = k.slice(0, N)).length; y < N; v[y++] = 0);
                                O = [0].concat(O = M.slice()), _ = M[0], M[1] >= a / 2 && _++;
                                do {
                                    if (p = 0, (l = t(M, v, N, y)) < 0) {
                                        if (x = v[0], N != y && (x = x * a + (v[1] || 0)), (p = s(x / _)) > 1)
                                            for (p >= a && (p = a - 1), m = (g = e(M, p, a)).length, y = v.length; 1 == t(g, v, m, y);) p--, n(g, N < m ? O : M, m, a), m = g.length, l = 1;
                                        else 0 == p && (l = p = 1), m = (g = M.slice()).length;
                                        if (m < y && (g = [0].concat(g)), n(v, g, y, a), y = v.length, -1 == l)
                                            for (; 1 > t(M, v, N, y);) p++, n(v, N < y ? O : M, y, a), y = v.length
                                    } else 0 === l && (p++, v = [0]);
                                    w[f++] = p, v[0] ? v[y++] = k[S] || 0 : (v = [k[S]], y = 1)
                                } while ((S++ < E || null != v[0]) && A--);
                                h = null != v[0], w[0] || w.splice(0, 1)
                            }
                            if (1e14 == a) {
                                for (f = 1, A = w[0]; A >= 10; A /= 10, f++);
                                $(b, o + (b.e = f + 14 * c - 1) + 1, u, h)
                            } else b.e = c, b.r = +h;
                            return b
                        }
                    }(), r = /^(-?)0([xbo])(?=\w[\w.]*$)/i, i = /^([^.]+)\.$/, o = /^\.([^.]+)$/, v = /^-?(Infinity|NaN)$/, y = /^\s*\+(?=[\w.])|^\s+|\s+$/g, E = function(e, t, n, u) {
                        var a, s = n ? t : t.replace(y, "");
                        if (v.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                        else {
                            if (!n && (s = s.replace(r, function(e, t, n) {
                                    return a = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, u && u != a ? e : t
                                }), u && (a = u, s = s.replace(i, "$1").replace(o, "0.$1")), t != s)) return new R(s, a);
                            if (R.DEBUG) throw Error(l + "Not a" + (u ? " base " + u : "") + " number: " + t);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, _.absoluteValue = _.abs = function() {
                        var e = new R(this);
                        return e.s < 0 && (e.s = 1), e
                    }, _.comparedTo = function(e, t) {
                        return p(this, new R(e, t))
                    }, _.decimalPlaces = _.dp = function(e, t) {
                        var n, r, i;
                        if (null != e) return g(e, 0, 1e9), null == t ? t = A : g(t, 0, 8), $(new R(this), e + this.e + 1, t);
                        if (!(n = this.c)) return null;
                        if (r = ((i = n.length - 1) - d(this.e / 14)) * 14, i = n[i])
                            for (; i % 10 == 0; i /= 10, r--);
                        return r < 0 && (r = 0), r
                    }, _.dividedBy = _.div = function(e, t) {
                        return x(this, new R(e, t), O, A)
                    }, _.dividedToIntegerBy = _.idiv = function(e, t) {
                        return x(this, new R(e, t), 0, 1)
                    }, _.exponentiatedBy = _.pow = function(e, t) {
                        var n, r, i, o, u, c, f, d, h, p = this;
                        if ((e = new R(e)).c && !e.isInteger()) throw Error(l + "Exponent not an integer: " + H(e));
                        if (null != t && (t = new R(t)), c = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return h = new R(Math.pow(+H(p), c ? e.s * (2 - m(e)) : +H(e))), t ? h.mod(t) : h;
                        if (f = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new R(NaN);
                            (r = !f && p.isInteger() && t.isInteger()) && (p = p.mod(t))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || c && p.c[1] >= 24e7 : p.c[0] < 8e13 || c && p.c[0] <= 9999975e7))) return o = p.s < 0 && m(e) ? -0 : 0, p.e > -1 && (o = 1 / o), new R(f ? 1 / o : o);
                            B && (o = a(B / 14 + 2))
                        }
                        for (c ? (n = new R(.5), f && (e.s = 1), d = m(e)) : d = (i = Math.abs(+H(e))) % 2, h = new R(N);;) {
                            if (d) {
                                if (!(h = h.times(p)).c) break;
                                o ? h.c.length > o && (h.c.length = o) : r && (h = h.mod(t))
                            }
                            if (i) {
                                if (0 === (i = s(i / 2))) break;
                                d = i % 2
                            } else if ($(e = e.times(n), e.e + 1, 1), e.e > 14) d = m(e);
                            else {
                                if (0 == (i = +H(e))) break;
                                d = i % 2
                            }
                            p = p.times(p), o ? p.c && p.c.length > o && (p.c.length = o) : r && (p = p.mod(t))
                        }
                        return r ? h : (f && (h = N.div(h)), t ? h.mod(t) : o ? $(h, B, A, u) : h)
                    }, _.integerValue = function(e) {
                        var t = new R(this);
                        return null == e ? e = A : g(e, 0, 8), $(t, t.e + 1, e)
                    }, _.isEqualTo = _.eq = function(e, t) {
                        return 0 === p(this, new R(e, t))
                    }, _.isFinite = function() {
                        return !!this.c
                    }, _.isGreaterThan = _.gt = function(e, t) {
                        return p(this, new R(e, t)) > 0
                    }, _.isGreaterThanOrEqualTo = _.gte = function(e, t) {
                        return 1 === (t = p(this, new R(e, t))) || 0 === t
                    }, _.isInteger = function() {
                        return !!this.c && d(this.e / 14) > this.c.length - 2
                    }, _.isLessThan = _.lt = function(e, t) {
                        return 0 > p(this, new R(e, t))
                    }, _.isLessThanOrEqualTo = _.lte = function(e, t) {
                        return -1 === (t = p(this, new R(e, t))) || 0 === t
                    }, _.isNaN = function() {
                        return !this.s
                    }, _.isNegative = function() {
                        return this.s < 0
                    }, _.isPositive = function() {
                        return this.s > 0
                    }, _.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, _.minus = function(e, t) {
                        var n, r, i, o, u = this.s;
                        if (t = (e = new R(e, t)).s, !u || !t) return new R(NaN);
                        if (u != t) return e.s = -t, this.plus(e);
                        var a = this.e / 14,
                            s = e.e / 14,
                            l = this.c,
                            c = e.c;
                        if (!a || !s) {
                            if (!l || !c) return l ? (e.s = -t, e) : new R(c ? this : NaN);
                            if (!l[0] || !c[0]) return c[0] ? (e.s = -t, e) : new R(l[0] ? this : 3 == A ? -0 : 0)
                        }
                        if (a = d(a), s = d(s), l = l.slice(), u = a - s) {
                            for ((o = u < 0) ? (u = -u, i = l) : (s = a, i = c), i.reverse(), t = u; t--; i.push(0));
                            i.reverse()
                        } else
                            for (r = (o = (u = l.length) < (t = c.length)) ? u : t, u = t = 0; t < r; t++)
                                if (l[t] != c[t]) {
                                    o = l[t] < c[t];
                                    break
                                } if (o && (i = l, l = c, c = i, e.s = -e.s), (t = (r = c.length) - (n = l.length)) > 0)
                            for (; t--; l[n++] = 0);
                        for (t = 1e14 - 1; r > u;) {
                            if (l[--r] < c[r]) {
                                for (n = r; n && !l[--n]; l[n] = t);
                                --l[n], l[r] += 1e14
                            }
                            l[r] -= c[r]
                        }
                        for (; 0 == l[0]; l.splice(0, 1), --s);
                        return l[0] ? z(e, l, s) : (e.s = 3 == A ? -1 : 1, e.c = [e.e = 0], e)
                    }, _.modulo = _.mod = function(e, t) {
                        var n, r;
                        return (e = new R(e, t), this.c && e.s && (!e.c || e.c[0])) ? e.c && (!this.c || this.c[0]) ? (9 == j ? (r = e.s, e.s = 1, n = x(this, e, 0, 3), e.s = r, n.s *= r) : n = x(this, e, 0, j), (e = this.minus(n.times(e))).c[0] || 1 != j || (e.s = this.s), e) : new R(this) : new R(NaN)
                    }, _.multipliedBy = _.times = function(e, t) {
                        var n, r, i, o, u, a, s, l, c, f, h, p, g, m = this.c,
                            b = (e = new R(e, t)).c;
                        if (!m || !b || !m[0] || !b[0]) return this.s && e.s && (!m || m[0] || b) && (!b || b[0] || m) ? (e.s *= this.s, m && b ? (e.c = [0], e.e = 0) : e.c = e.e = null) : e.c = e.e = e.s = null, e;
                        for (r = d(this.e / 14) + d(e.e / 14), e.s *= this.s, (s = m.length) < (f = b.length) && (g = m, m = b, b = g, i = s, s = f, f = i), i = s + f, g = []; i--; g.push(0));
                        for (i = f; --i >= 0;) {
                            for (n = 0, h = b[i] % 1e7, p = b[i] / 1e7 | 0, o = i + (u = s); o > i;) a = p * (l = m[--u] % 1e7) + (c = m[u] / 1e7 | 0) * h, n = ((l = h * l + a % 1e7 * 1e7 + g[o] + n) / 1e14 | 0) + (a / 1e7 | 0) + p * c, g[o--] = l % 1e14;
                            g[o] = n
                        }
                        return n ? ++r : g.splice(0, 1), z(e, g, r)
                    }, _.negated = function() {
                        var e = new R(this);
                        return e.s = -e.s || null, e
                    }, _.plus = function(e, t) {
                        var n, r = this.s;
                        if (t = (e = new R(e, t)).s, !r || !t) return new R(NaN);
                        if (r != t) return e.s = -t, this.minus(e);
                        var i = this.e / 14,
                            o = e.e / 14,
                            u = this.c,
                            a = e.c;
                        if (!i || !o) {
                            if (!u || !a) return new R(r / 0);
                            if (!u[0] || !a[0]) return a[0] ? e : new R(u[0] ? this : 0 * r)
                        }
                        if (i = d(i), o = d(o), u = u.slice(), r = i - o) {
                            for (r > 0 ? (o = i, n = a) : (r = -r, n = u), n.reverse(); r--; n.push(0));
                            n.reverse()
                        }
                        for ((r = u.length) - (t = a.length) < 0 && (n = a, a = u, u = n, t = r), r = 0; t;) r = (u[--t] = u[t] + a[t] + r) / 1e14 | 0, u[t] = 1e14 === u[t] ? 0 : u[t] % 1e14;
                        return r && (u = [r].concat(u), ++o), z(e, u, o)
                    }, _.precision = _.sd = function(e, t) {
                        var n, r, i;
                        if (null != e && !!e !== e) return g(e, 1, 1e9), null == t ? t = A : g(t, 0, 8), $(new R(this), e, t);
                        if (!(n = this.c)) return null;
                        if (r = 14 * (i = n.length - 1) + 1, i = n[i]) {
                            for (; i % 10 == 0; i /= 10, r--);
                            for (i = n[0]; i >= 10; i /= 10, r++);
                        }
                        return e && this.e + 1 > r && (r = this.e + 1), r
                    }, _.shiftedBy = function(e) {
                        return g(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, _.squareRoot = _.sqrt = function() {
                        var e, t, n, r, i, o = this.c,
                            u = this.s,
                            a = this.e,
                            s = O + 4,
                            l = new R("0.5");
                        if (1 !== u || !o || !o[0]) return new R(!u || u < 0 && (!o || o[0]) ? NaN : o ? this : 1 / 0);
                        if (0 == (u = Math.sqrt(+H(this))) || u == 1 / 0 ? (((t = h(o)).length + a) % 2 == 0 && (t += "0"), u = Math.sqrt(+t), a = d((a + 1) / 2) - (a < 0 || a % 2), t = u == 1 / 0 ? "5e" + a : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + a, n = new R(t)) : n = new R(u + ""), n.c[0]) {
                            for ((u = (a = n.e) + s) < 3 && (u = 0);;)
                                if (i = n, n = l.times(i.plus(x(this, i, s, 1))), h(i.c).slice(0, u) === (t = h(n.c)).slice(0, u)) {
                                    if (n.e < a && --u, "9999" != (t = t.slice(u - 3, u + 1)) && (r || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || ($(n, n.e + O + 2, 1), e = !n.times(n).eq(this));
                                        break
                                    }
                                    if (!r && ($(i, i.e + O + 2, 0), i.times(i).eq(this))) {
                                        n = i;
                                        break
                                    }
                                    s += 4, u += 4, r = 1
                                }
                        }
                        return $(n, n.e + O + 1, A, e)
                    }, _.toExponential = function(e, t) {
                        return null != e && (g(e, 0, 1e9), e++), U(this, e, t, 1)
                    }, _.toFixed = function(e, t) {
                        return null != e && (g(e, 0, 1e9), e = e + this.e + 1), U(this, e, t)
                    }, _.toFormat = function(e, t, n) {
                        var r;
                        if (null == n) null != e && t && "object" == typeof t ? (n = t, t = null) : e && "object" == typeof e ? (n = e, e = t = null) : n = I;
                        else if ("object" != typeof n) throw Error(l + "Argument not an object: " + n);
                        if (r = this.toFixed(e, t), this.c) {
                            var i, o = r.split("."),
                                u = +n.groupSize,
                                a = +n.secondaryGroupSize,
                                s = n.groupSeparator || "",
                                c = o[0],
                                f = o[1],
                                d = this.s < 0,
                                h = d ? c.slice(1) : c,
                                p = h.length;
                            if (a && (i = u, u = a, a = i, p -= i), u > 0 && p > 0) {
                                for (i = p % u || u, c = h.substr(0, i); i < p; i += u) c += s + h.substr(i, u);
                                a > 0 && (c += s + h.slice(i)), d && (c = "-" + c)
                            }
                            r = f ? c + (n.decimalSeparator || "") + ((a = +n.fractionGroupSize) ? f.replace(RegExp("\\d{" + a + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : f) : c
                        }
                        return (n.prefix || "") + r + (n.suffix || "")
                    }, _.toFraction = function(e) {
                        var t, n, r, i, o, u, a, s, c, d, p, g, m = this.c;
                        if (null != e && (!(a = new R(e)).isInteger() && (a.c || 1 !== a.s) || a.lt(N))) throw Error(l + "Argument " + (a.isInteger() ? "out of range: " : "not an integer: ") + H(a));
                        if (!m) return new R(this);
                        for (t = new R(N), c = n = new R(N), r = s = new R(N), g = h(m), o = t.e = g.length - this.e - 1, t.c[0] = f[(u = o % 14) < 0 ? 14 + u : u], e = !e || a.comparedTo(t) > 0 ? o > 0 ? t : c : a, u = T, T = 1 / 0, a = new R(g), s.c[0] = 0; d = x(a, t, 0, 1), 1 != (i = n.plus(d.times(r))).comparedTo(e);) n = r, r = i, c = s.plus(d.times(i = c)), s = i, t = a.minus(d.times(i = t)), a = i;
                        return i = x(e.minus(n), r, 0, 1), s = s.plus(i.times(c)), n = n.plus(i.times(r)), s.s = c.s = this.s, o *= 2, p = 1 > x(c, r, o, A).minus(this).abs().comparedTo(x(s, n, o, A).minus(this).abs()) ? [c, r] : [s, n], T = u, p
                    }, _.toNumber = function() {
                        return +H(this)
                    }, _.toPrecision = function(e, t) {
                        return null != e && g(e, 1, 1e9), U(this, e, t, 2)
                    }, _.toString = function(e) {
                        var t, n = this,
                            r = n.s,
                            i = n.e;
                        return null === i ? r ? (t = "Infinity", r < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = i <= k || i >= M ? b(h(n.c), i) : w(h(n.c), i, "0") : 10 === e && F ? t = w(h((n = $(new R(n), O + i + 1, A)).c), n.e, "0") : (g(e, 2, L.length, "Base"), t = S(w(h(n.c), i, "0"), 10, e, r, !0)), r < 0 && n.c[0] && (t = "-" + t)), t
                    }, _.valueOf = _.toJSON = function() {
                        return H(this)
                    }, _._isBigNumber = !0, null != t && R.set(t), R
                }()).default = o.BigNumber = o, void 0 !== (r = (function() {
                    return o
                }).call(t, n, t, e)) && (e.exports = r)
            }(0)
        },
        41304: function(e) {
            "use strict";
            var t = {
                single_source_shortest_paths: function(e, n, r) {
                    var i, o, u, a, s, l, c, f = {},
                        d = {};
                    d[n] = 0;
                    var h = t.PriorityQueue.make();
                    for (h.push(n, 0); !h.empty();)
                        for (u in o = (i = h.pop()).value, a = i.cost, s = e[o] || {}) s.hasOwnProperty(u) && (l = a + s[u], c = d[u], (void 0 === d[u] || c > l) && (d[u] = l, h.push(u, l), f[u] = o));
                    if (void 0 !== r && void 0 === d[r]) throw Error(["Could not find a path from ", n, " to ", r, "."].join(""));
                    return f
                },
                extract_shortest_path_from_predecessor_list: function(e, t) {
                    for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
                    return n.reverse(), n
                },
                find_path: function(e, n, r) {
                    var i = t.single_source_shortest_paths(e, n, r);
                    return t.extract_shortest_path_from_predecessor_list(i, r)
                },
                PriorityQueue: {
                    make: function(e) {
                        var n, r = t.PriorityQueue,
                            i = {};
                        for (n in e = e || {}, r) r.hasOwnProperty(n) && (i[n] = r[n]);
                        return i.queue = [], i.sorter = e.sorter || r.default_sorter, i
                    },
                    default_sorter: function(e, t) {
                        return e.cost - t.cost
                    },
                    push: function(e, t) {
                        this.queue.push({
                            value: e,
                            cost: t
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            e.exports = t
        },
        60808: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = [], n = e.length, r = 0; r < n; r++) {
                    var i = e.charCodeAt(r);
                    if (i >= 55296 && i <= 56319 && n > r + 1) {
                        var o = e.charCodeAt(r + 1);
                        o >= 56320 && o <= 57343 && (i = (i - 55296) * 1024 + o - 56320 + 65536, r += 1)
                    }
                    if (i < 128) {
                        t.push(i);
                        continue
                    }
                    if (i < 2048) {
                        t.push(i >> 6 | 192), t.push(63 & i | 128);
                        continue
                    }
                    if (i < 55296 || i >= 57344 && i < 65536) {
                        t.push(i >> 12 | 224), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128);
                        continue
                    }
                    if (i >= 65536 && i <= 1114111) {
                        t.push(i >> 18 | 240), t.push(i >> 12 & 63 | 128), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128);
                        continue
                    }
                    t.push(239, 191, 189)
                }
                return new Uint8Array(t).buffer
            }
        },
        50601: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))(function(i, o) {
                        function u(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t)
                            })).then(u, a)
                        }
                        s((r = r.apply(e, t || [])).next())
                    })
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.I18n = void 0;
            let o = i(n(1995)),
                u = i(n(12461)),
                a = i(n(60371)),
                s = i(n(65694)),
                l = n(14072),
                c = n(33191),
                f = n(3564),
                d = n(98487),
                h = {
                    defaultLocale: "en",
                    availableLocales: ["en"],
                    locale: "en",
                    defaultSeparator: ".",
                    placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
                    enableFallback: !1,
                    missingBehavior: "message",
                    missingTranslationPrefix: "",
                    missingPlaceholder: (e, t) => `[missing "${t}" value]`,
                    nullPlaceholder: (e, t, n, r) => e.missingPlaceholder(e, t, n, r),
                    transformKey: e => e
                };
            t.I18n = class {
                constructor(e = {}, t = {}) {
                    this._locale = h.locale, this._defaultLocale = h.defaultLocale, this._version = 0, this.onChangeHandlers = [], this.translations = {}, this.availableLocales = [], this.t = this.translate, this.p = this.pluralize, this.l = this.localize, this.distanceOfTimeInWords = this.timeAgoInWords;
                    let {
                        locale: n,
                        enableFallback: r,
                        missingBehavior: i,
                        missingTranslationPrefix: o,
                        missingPlaceholder: u,
                        nullPlaceholder: a,
                        defaultLocale: s,
                        defaultSeparator: p,
                        placeholder: g,
                        transformKey: m
                    } = Object.assign(Object.assign({}, h), t);
                    this.locale = n, this.defaultLocale = s, this.defaultSeparator = p, this.enableFallback = r, this.locale = n, this.missingBehavior = i, this.missingTranslationPrefix = o, this.missingPlaceholder = u, this.nullPlaceholder = a, this.placeholder = g, this.pluralization = new c.Pluralization(this), this.locales = new l.Locales(this), this.missingTranslation = new f.MissingTranslation(this), this.transformKey = m, this.interpolate = d.interpolate, this.store(e)
                }
                store(e) {
                    let t = (0, d.propertyFlatList)(e);
                    t.forEach(t => (0, s.default)(this.translations, t, (0, o.default)(e, t), Object)), this.hasChanged()
                }
                get locale() {
                    return this._locale || this.defaultLocale || "en"
                }
                set locale(e) {
                    if ("string" != typeof e) throw Error(`Expected newLocale to be a string; got ${(0,d.inferType)(e)}`);
                    let t = this._locale !== e;
                    this._locale = e, t && this.hasChanged()
                }
                get defaultLocale() {
                    return this._defaultLocale || "en"
                }
                set defaultLocale(e) {
                    if ("string" != typeof e) throw Error(`Expected newLocale to be a string; got ${(0,d.inferType)(e)}`);
                    let t = this._defaultLocale !== e;
                    this._defaultLocale = e, t && this.hasChanged()
                }
                translate(e, t) {
                    let n;
                    t = Object.assign({}, t);
                    let r = (0, d.createTranslationOptions)(this, e, t),
                        i = r.some(e => ((0, d.isSet)(e.scope) ? n = (0, d.lookup)(this, e.scope, t) : (0, d.isSet)(e.message) && (n = e.message), null != n));
                    return i ? ("string" == typeof n ? n = this.interpolate(this, n, t) : "object" == typeof n && n && (0, d.isSet)(t.count) && (n = (0, d.pluralize)({
                        i18n: this,
                        count: t.count || 0,
                        scope: n,
                        options: t,
                        baseScope: (0, d.getFullScope)(this, e, t)
                    })), t && n instanceof Array && (n = n.map(e => "string" == typeof e ? (0, d.interpolate)(this, e, t) : e)), n) : this.missingTranslation.get(e, t)
                }
                pluralize(e, t, n) {
                    return (0, d.pluralize)({
                        i18n: this,
                        count: e,
                        scope: t,
                        options: Object.assign({}, n),
                        baseScope: (0, d.getFullScope)(this, t, null != n ? n : {})
                    })
                }
                localize(e, t, n) {
                    if (n = Object.assign({}, n), null == t) return "";
                    switch (e) {
                        case "currency":
                            return this.numberToCurrency(t);
                        case "number":
                            return (0, d.formatNumber)(t, Object.assign({
                                delimiter: ",",
                                precision: 3,
                                separator: ".",
                                significant: !1,
                                stripInsignificantZeros: !1
                            }, (0, d.lookup)(this, "number.format")));
                        case "percentage":
                            return this.numberToPercentage(t);
                        default:
                            {
                                let r;
                                return r = e.match(/^(date|time)/) ? this.toTime(e, t) : t.toString(),
                                (0, d.interpolate)(this, r, n)
                            }
                    }
                }
                toTime(e, t) {
                    let n = (0, d.parseDate)(t),
                        r = (0, d.lookup)(this, e);
                    return n.toString().match(/invalid/i) || !r ? n.toString() : this.strftime(n, r)
                }
                numberToCurrency(e, t = {}) {
                    return (0, d.formatNumber)(e, Object.assign(Object.assign(Object.assign({
                        delimiter: ",",
                        format: "%u%n",
                        precision: 2,
                        separator: ".",
                        significant: !1,
                        stripInsignificantZeros: !1,
                        unit: "$"
                    }, (0, d.camelCaseKeys)(this.get("number.format"))), (0, d.camelCaseKeys)(this.get("number.currency.format"))), t))
                }
                numberToPercentage(e, t = {}) {
                    return (0, d.formatNumber)(e, Object.assign(Object.assign(Object.assign({
                        delimiter: "",
                        format: "%n%",
                        precision: 3,
                        stripInsignificantZeros: !1,
                        separator: ".",
                        significant: !1
                    }, (0, d.camelCaseKeys)(this.get("number.format"))), (0, d.camelCaseKeys)(this.get("number.percentage.format"))), t))
                }
                numberToHumanSize(e, t = {}) {
                    return (0, d.numberToHumanSize)(this, e, Object.assign(Object.assign(Object.assign({
                        delimiter: "",
                        precision: 3,
                        significant: !0,
                        stripInsignificantZeros: !0,
                        units: {
                            billion: "Billion",
                            million: "Million",
                            quadrillion: "Quadrillion",
                            thousand: "Thousand",
                            trillion: "Trillion",
                            unit: ""
                        }
                    }, (0, d.camelCaseKeys)(this.get("number.human.format"))), (0, d.camelCaseKeys)(this.get("number.human.storage_units"))), t))
                }
                numberToHuman(e, t = {}) {
                    return (0, d.numberToHuman)(this, e, Object.assign(Object.assign(Object.assign({
                        delimiter: "",
                        separator: ".",
                        precision: 3,
                        significant: !0,
                        stripInsignificantZeros: !0,
                        format: "%n %u",
                        roundMode: "default",
                        units: {
                            billion: "Billion",
                            million: "Million",
                            quadrillion: "Quadrillion",
                            thousand: "Thousand",
                            trillion: "Trillion",
                            unit: ""
                        }
                    }, (0, d.camelCaseKeys)(this.get("number.human.format"))), (0, d.camelCaseKeys)(this.get("number.human.decimal_units"))), t))
                }
                numberToRounded(e, t) {
                    return (0, d.formatNumber)(e, Object.assign({
                        unit: "",
                        precision: 3,
                        significant: !1,
                        separator: ".",
                        delimiter: "",
                        stripInsignificantZeros: !1
                    }, t))
                }
                numberToDelimited(e, t = {}) {
                    return (0, d.numberToDelimited)(e, Object.assign({
                        delimiterPattern: /(\d)(?=(\d\d\d)+(?!\d))/g,
                        delimiter: ",",
                        separator: "."
                    }, t))
                }
                withLocale(e, t) {
                    return r(this, void 0, void 0, function*() {
                        let n = this.locale;
                        try {
                            this.locale = e, yield t()
                        } finally {
                            this.locale = n
                        }
                    })
                }
                strftime(e, t, n = {}) {
                    return (0, d.strftime)(e, t, Object.assign(Object.assign(Object.assign({}, (0, d.camelCaseKeys)((0, d.lookup)(this, "date"))), {
                        meridian: {
                            am: (0, d.lookup)(this, "time.am") || "AM",
                            pm: (0, d.lookup)(this, "time.pm") || "PM"
                        }
                    }), n))
                }
                update(e, t, n = {
                    strict: !1
                }) {
                    let r;
                    if (n.strict && !(0, u.default)(this.translations, e)) throw Error(`The path "${e}" is not currently defined`);
                    let i = (0, o.default)(this.translations, e),
                        s = (0, d.inferType)(i),
                        l = (0, d.inferType)(t);
                    if (n.strict && s !== l) throw Error(`The current type for "${e}" is "${s}", but you're trying to override it with "${l}"`);
                    r = "object" === l ? Object.assign(Object.assign({}, i), t) : t, (0, a.default)(this.translations, e, r), this.hasChanged()
                }
                toSentence(e, t = {}) {
                    let {
                        wordsConnector: n,
                        twoWordsConnector: r,
                        lastWordConnector: i
                    } = Object.assign(Object.assign({
                        wordsConnector: ", ",
                        twoWordsConnector: " and ",
                        lastWordConnector: ", and "
                    }, (0, d.camelCaseKeys)((0, d.lookup)(this, "support.array"))), t), o = e.length;
                    switch (o) {
                        case 0:
                            return "";
                        case 1:
                            return `${e[0]}`;
                        case 2:
                            return e.join(r);
                        default:
                            return [e.slice(0, o - 1).join(n), i, e[o - 1]].join("")
                    }
                }
                timeAgoInWords(e, t, n = {}) {
                    return (0, d.timeAgoInWords)(this, e, t, n)
                }
                onChange(e) {
                    return this.onChangeHandlers.push(e), () => {
                        this.onChangeHandlers.splice(this.onChangeHandlers.indexOf(e), 1)
                    }
                }
                get version() {
                    return this._version
                }
                formatNumber(e, t) {
                    return (0, d.formatNumber)(e, t)
                }
                get(e) {
                    return (0, d.lookup)(this, e)
                }
                runCallbacks() {
                    this.onChangeHandlers.forEach(e => e(this))
                }
                hasChanged() {
                    this._version += 1, this.runCallbacks()
                }
            }
        },
        14072: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Locales = t.defaultLocaleResolver = void 0;
            let i = r(n(67945));
            t.defaultLocaleResolver = (e, t) => {
                let n = [],
                    r = [];
                return n.push(t), t || n.push(e.locale), e.enableFallback && n.push(e.defaultLocale), n.filter(Boolean).map(e => e.toString()).forEach(function(t) {
                    if (r.includes(t) || r.push(t), !e.enableFallback) return;
                    let n = t.split("-");
                    3 === n.length && r.push(`${n[0]}-${n[1]}`), r.push(n[0])
                }), (0, i.default)(r)
            }, t.Locales = class {
                constructor(e) {
                    this.i18n = e, this.registry = {}, this.register("default", t.defaultLocaleResolver)
                }
                register(e, t) {
                    if ("function" != typeof t) {
                        let e = t;
                        t = () => e
                    }
                    this.registry[e] = t
                }
                get(e) {
                    let t = this.registry[e] || this.registry[this.i18n.locale] || this.registry.default;
                    return "function" == typeof t && (t = t(this.i18n, e)), t instanceof Array || (t = [t]), t
                }
            }
        },
        3564: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MissingTranslation = t.errorStrategy = t.messageStrategy = t.guessStrategy = void 0;
            let r = n(98487);
            t.guessStrategy = function(e, t) {
                t instanceof Array && (t = t.join(e.defaultSeparator));
                let n = t.split(e.defaultSeparator).slice(-1)[0];
                return e.missingTranslationPrefix + n.replace("_", " ").replace(/([a-z])([A-Z])/g, (e, t, n) => `${t} ${n.toLowerCase()}`)
            }, t.messageStrategy = (e, t, n) => {
                let i = (0, r.getFullScope)(e, t, n),
                    o = "locale" in n ? n.locale : e.locale,
                    u = (0, r.inferType)(o),
                    a = ["string" == u ? o : u, i].join(e.defaultSeparator);
                return `[missing "${a}" translation]`
            }, t.errorStrategy = (e, t, n) => {
                let i = (0, r.getFullScope)(e, t, n),
                    o = [e.locale, i].join(e.defaultSeparator);
                throw Error(`Missing translation: ${o}`)
            }, t.MissingTranslation = class {
                constructor(e) {
                    this.i18n = e, this.registry = {}, this.register("guess", t.guessStrategy), this.register("message", t.messageStrategy), this.register("error", t.errorStrategy)
                }
                register(e, t) {
                    this.registry[e] = t
                }
                get(e, t) {
                    var n;
                    return this.registry[null !== (n = t.missingBehavior) && void 0 !== n ? n : this.i18n.missingBehavior](this.i18n, e, t)
                }
            }
        },
        33191: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Pluralization = t.defaultPluralizer = t.useMakePlural = void 0;
            let r = n(94108);

            function i({
                pluralizer: e,
                includeZero: t = !0,
                ordinal: n = !1
            }) {
                return function(r, i) {
                    return [t && 0 === i ? "zero" : "", e(i, n)].filter(Boolean)
                }
            }
            t.useMakePlural = i, t.defaultPluralizer = i({
                pluralizer: r.en,
                includeZero: !0
            }), t.Pluralization = class {
                constructor(e) {
                    this.i18n = e, this.registry = {}, this.register("default", t.defaultPluralizer)
                }
                register(e, t) {
                    this.registry[e] = t
                }
                get(e) {
                    return this.registry[e] || this.registry[this.i18n.locale] || this.registry.default
                }
            }
        },
        86773: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.camelCaseKeys = void 0;
            let i = r(n(63431));
            t.camelCaseKeys = function(e) {
                return e ? Object.keys(e).reduce((t, n) => (t[(0, i.default)(n)] = e[n], t), {}) : {}
            }
        },
        81176: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createTranslationOptions = void 0;
            let r = n(3002);
            t.createTranslationOptions = function(e, t, n) {
                let i = [{
                    scope: t
                }];
                if ((0, r.isSet)(n.defaults) && (i = i.concat(n.defaults)), (0, r.isSet)(n.defaultValue)) {
                    let r = "function" == typeof n.defaultValue ? n.defaultValue(e, t, n) : n.defaultValue;
                    i.push({
                        message: r
                    }), delete n.defaultValue
                }
                return i
            }
        },
        96678: function(e, t, n) {
            "use strict";
            var r, i, o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.expandRoundMode = void 0;
            let u = o(n(15080));
            (r = i || (i = {}))[r.up = u.default.ROUND_UP] = "up", r[r.down = u.default.ROUND_DOWN] = "down", r[r.truncate = u.default.ROUND_DOWN] = "truncate", r[r.halfUp = u.default.ROUND_HALF_UP] = "halfUp", r[r.default = u.default.ROUND_HALF_UP] = "default", r[r.halfDown = u.default.ROUND_HALF_DOWN] = "halfDown", r[r.halfEven = u.default.ROUND_HALF_EVEN] = "halfEven", r[r.banker = u.default.ROUND_HALF_EVEN] = "banker", r[r.ceiling = u.default.ROUND_CEIL] = "ceiling", r[r.ceil = u.default.ROUND_CEIL] = "ceil", r[r.floor = u.default.ROUND_FLOOR] = "floor", t.expandRoundMode = function(e) {
                var t;
                return null !== (t = i[e]) && void 0 !== t ? t : i.default
            }
        },
        26086: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatNumber = void 0;
            let i = r(n(15080)),
                o = r(n(56666)),
                u = n(26943);
            t.formatNumber = function(e, t) {
                var n, r, a;
                let s;
                let l = new i.default(e);
                if (t.raise && !l.isFinite()) throw Error(`"${e}" is not a valid numeric value`);
                let c = (0, u.roundNumber)(l, t),
                    f = new i.default(c),
                    d = f.lt(0),
                    h = f.isZero(),
                    [p, g] = c.split("."),
                    m = [],
                    b = null !== (n = t.format) && void 0 !== n ? n : "%n",
                    w = null !== (r = t.negativeFormat) && void 0 !== r ? r : `-${b}`,
                    v = d && !h ? w : b;
                for (p = p.replace("-", ""); p.length > 0;) m.unshift(p.substr(Math.max(0, p.length - 3), 3)), p = p.substr(0, p.length - 3);
                return p = m.join(""), s = m.join(t.delimiter), g = t.significant ? function({
                        significand: e,
                        whole: t,
                        precision: n
                    }) {
                        if ("0" === t || null === n) return e;
                        let r = Math.max(0, n - t.length);
                        return (null != e ? e : "").substr(0, r)
                    }({
                        whole: p,
                        significand: g,
                        precision: t.precision
                    }) : null != g ? g : (0, o.default)("0", null !== (a = t.precision) && void 0 !== a ? a : 0), t.stripInsignificantZeros && g && (g = g.replace(/0+$/, "")), l.isNaN() && (s = e.toString()), g && l.isFinite() && (s += (t.separator || ".") + g),
                    function(e, {
                        formattedNumber: t,
                        unit: n
                    }) {
                        return e.replace("%n", t).replace("%u", n)
                    }(v, {
                        formattedNumber: s,
                        unit: t.unit
                    })
            }
        },
        17974: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getFullScope = void 0, t.getFullScope = function(e, t, n) {
                let r = "";
                return (t instanceof String || "string" == typeof t) && (r = t), t instanceof Array && (r = t.join(e.defaultSeparator)), n.scope && (r = [n.scope, r].join(e.defaultSeparator)), r
            }
        },
        98487: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.timeAgoInWords = t.strftime = t.roundNumber = t.propertyFlatList = t.pluralize = t.parseDate = t.numberToHumanSize = t.numberToHuman = t.numberToDelimited = t.lookup = t.isSet = t.interpolate = t.inferType = t.getFullScope = t.formatNumber = t.expandRoundMode = t.createTranslationOptions = t.camelCaseKeys = void 0;
            var r = n(86773);
            Object.defineProperty(t, "camelCaseKeys", {
                enumerable: !0,
                get: function() {
                    return r.camelCaseKeys
                }
            });
            var i = n(81176);
            Object.defineProperty(t, "createTranslationOptions", {
                enumerable: !0,
                get: function() {
                    return i.createTranslationOptions
                }
            });
            var o = n(96678);
            Object.defineProperty(t, "expandRoundMode", {
                enumerable: !0,
                get: function() {
                    return o.expandRoundMode
                }
            });
            var u = n(26086);
            Object.defineProperty(t, "formatNumber", {
                enumerable: !0,
                get: function() {
                    return u.formatNumber
                }
            });
            var a = n(17974);
            Object.defineProperty(t, "getFullScope", {
                enumerable: !0,
                get: function() {
                    return a.getFullScope
                }
            });
            var s = n(9924);
            Object.defineProperty(t, "inferType", {
                enumerable: !0,
                get: function() {
                    return s.inferType
                }
            });
            var l = n(28748);
            Object.defineProperty(t, "interpolate", {
                enumerable: !0,
                get: function() {
                    return l.interpolate
                }
            });
            var c = n(3002);
            Object.defineProperty(t, "isSet", {
                enumerable: !0,
                get: function() {
                    return c.isSet
                }
            });
            var f = n(54751);
            Object.defineProperty(t, "lookup", {
                enumerable: !0,
                get: function() {
                    return f.lookup
                }
            });
            var d = n(30302);
            Object.defineProperty(t, "numberToDelimited", {
                enumerable: !0,
                get: function() {
                    return d.numberToDelimited
                }
            });
            var h = n(94188);
            Object.defineProperty(t, "numberToHuman", {
                enumerable: !0,
                get: function() {
                    return h.numberToHuman
                }
            });
            var p = n(72358);
            Object.defineProperty(t, "numberToHumanSize", {
                enumerable: !0,
                get: function() {
                    return p.numberToHumanSize
                }
            });
            var g = n(31056);
            Object.defineProperty(t, "parseDate", {
                enumerable: !0,
                get: function() {
                    return g.parseDate
                }
            });
            var m = n(85839);
            Object.defineProperty(t, "pluralize", {
                enumerable: !0,
                get: function() {
                    return m.pluralize
                }
            });
            var b = n(17672);
            Object.defineProperty(t, "propertyFlatList", {
                enumerable: !0,
                get: function() {
                    return b.propertyFlatList
                }
            });
            var w = n(26943);
            Object.defineProperty(t, "roundNumber", {
                enumerable: !0,
                get: function() {
                    return w.roundNumber
                }
            });
            var v = n(23260);
            Object.defineProperty(t, "strftime", {
                enumerable: !0,
                get: function() {
                    return v.strftime
                }
            });
            var y = n(16830);
            Object.defineProperty(t, "timeAgoInWords", {
                enumerable: !0,
                get: function() {
                    return y.timeAgoInWords
                }
            })
        },
        9924: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.inferType = void 0, t.inferType = function(e) {
                var t, n;
                if (null === e) return "null";
                let r = typeof e;
                return "object" !== r ? r : (null === (n = null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name) || void 0 === n ? void 0 : n.toLowerCase()) || "object"
            }
        },
        28748: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.interpolate = void 0;
            let r = n(3002);
            t.interpolate = function(e, t, n) {
                n = Object.keys(n).reduce((t, r) => (t[e.transformKey(r)] = n[r], t), {});
                let i = t.match(e.placeholder);
                if (!i) return t;
                for (; i.length;) {
                    let o;
                    let u = i.shift(),
                        a = u.replace(e.placeholder, "$1");
                    o = (0, r.isSet)(n[a]) ? n[a].toString().replace(/\$/gm, "_#$#_") : a in n ? e.nullPlaceholder(e, u, t, n) : e.missingPlaceholder(e, u, t, n);
                    let s = new RegExp(u.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}"));
                    t = t.replace(s, o)
                }
                return t.replace(/_#\$#_/g, "$")
            }
        },
        3002: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSet = void 0, t.isSet = function(e) {
                return null != e
            }
        },
        54751: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.lookup = void 0;
            let i = r(n(1995)),
                o = n(3002),
                u = n(17974),
                a = n(9924);
            t.lookup = function(e, t, n = {}) {
                n = Object.assign({}, n);
                let r = "locale" in n ? n.locale : e.locale,
                    s = (0, a.inferType)(r),
                    l = e.locales.get("string" === s ? r : typeof r).slice();
                t = (0, u.getFullScope)(e, t, n).split(e.defaultSeparator).map(t => e.transformKey(t)).join(".");
                let c = l.map(n => (0, i.default)(e.translations, [n, t].join(".")));
                return c.push(n.defaultValue), c.find(e => (0, o.isSet)(e))
            }
        },
        30302: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.numberToDelimited = void 0;
            let i = r(n(15080));
            t.numberToDelimited = function(e, t) {
                let n = new i.default(e);
                if (!n.isFinite()) return e.toString();
                if (!t.delimiterPattern.global) throw Error(`options.delimiterPattern must be a global regular expression; received ${t.delimiterPattern}`);
                let [r, o] = n.toString().split(".");
                return [r = r.replace(t.delimiterPattern, e => `${e}${t.delimiter}`), o].filter(Boolean).join(t.separator)
            }
        },
        94188: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.numberToHuman = void 0;
            let i = r(n(15080)),
                o = r(n(64677)),
                u = r(n(8183)),
                a = n(17974),
                s = n(54751),
                l = n(26943),
                c = n(9924),
                f = {
                    0: "unit",
                    1: "ten",
                    2: "hundred",
                    3: "thousand",
                    6: "million",
                    9: "billion",
                    12: "trillion",
                    15: "quadrillion",
                    "-1": "deci",
                    "-2": "centi",
                    "-3": "mili",
                    "-6": "micro",
                    "-9": "nano",
                    "-12": "pico",
                    "-15": "femto"
                },
                d = (0, u.default)(Object.values(f), Object.keys(f).map(e => parseInt(e, 10)));
            t.numberToHuman = function(e, t, n) {
                let r;
                let u = {
                    roundMode: n.roundMode,
                    precision: n.precision,
                    significant: n.significant
                };
                if ("string" === (0, c.inferType)(n.units)) {
                    let t = n.units;
                    if (!(r = (0, s.lookup)(e, t))) throw Error(`The scope "${e.locale}${e.defaultSeparator}${(0,a.getFullScope)(e,t,{})}" couldn't be found`)
                } else r = n.units;
                let h = (0, l.roundNumber)(new i.default(t), u),
                    p = e => (0, o.default)(Object.keys(e).map(e => d[e]), e => -1 * e),
                    g = ((e, t) => {
                        let n = e.isZero() ? 0 : Math.floor(Math.log10(e.abs().toNumber()));
                        return p(t).find(e => n >= e) || 0
                    })(new i.default(h), r),
                    m = ((e, t) => {
                        let n = f[t.toString()];
                        return e[n] || ""
                    })(r, g);
                if (h = (0, l.roundNumber)(new i.default(h).div(Math.pow(10, g)), u), n.stripInsignificantZeros) {
                    let [e, t] = h.split(".");
                    t = (t || "").replace(/0+$/, ""), h = e, t && (h += `${n.separator}${t}`)
                }
                return n.format.replace("%n", h || "0").replace("%u", m).trim()
            }
        },
        72358: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.numberToHumanSize = void 0;
            let i = r(n(15080)),
                o = n(26943),
                u = n(96678),
                a = ["byte", "kb", "mb", "gb", "tb", "pb", "eb"];
            t.numberToHumanSize = function(e, t, n) {
                let r;
                let s = (0, u.expandRoundMode)(n.roundMode),
                    l = new i.default(t).abs(),
                    c = l.lt(1024),
                    f = ((e, t) => {
                        let n = t.length - 1,
                            r = new i.default(Math.log(e.toNumber())).div(Math.log(1024)).integerValue(i.default.ROUND_DOWN).toNumber();
                        return Math.min(n, r)
                    })(l, a);
                r = c ? l.integerValue() : new i.default((0, o.roundNumber)(l.div(Math.pow(1024, f)), {
                    significant: n.significant,
                    precision: n.precision,
                    roundMode: n.roundMode
                }));
                let d = e.translate("number.human.storage_units.format", {
                        defaultValue: "%n %u"
                    }),
                    h = e.translate((e => {
                        let t = c ? "byte" : e[f];
                        return `number.human.storage_units.units.${t}`
                    })(a), {
                        count: l.integerValue().toNumber()
                    }),
                    p = r.toFixed(n.precision, s);
                return n.stripInsignificantZeros && (p = p.replace(/(\..*?)0+$/, "$1").replace(/\.$/, "")), d.replace("%n", p).replace("%u", h)
            }
        },
        31056: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseDate = void 0, t.parseDate = function(e) {
                if (e instanceof Date) return e;
                if ("number" == typeof e) {
                    let t = new Date;
                    return t.setTime(e), t
                }
                let t = new String(e).match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})(?:[.,](\d{1,3}))?)?(Z|\+00:?00)?/);
                if (t) {
                    let e = t.slice(1, 8).map(e => parseInt(e, 10) || 0);
                    e[1] -= 1;
                    let [n, r, i, o, u, a, s] = e, l = t[8];
                    return l ? new Date(Date.UTC(n, r, i, o, u, a, s)) : new Date(n, r, i, o, u, a, s)
                }
                if (e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/)) {
                    let e = new Date;
                    e.setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(" ")))
                }
                let n = new Date;
                return n.setTime(Date.parse(e)), n
            }
        },
        85839: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pluralize = void 0;
            let r = n(3002),
                i = n(54751);
            t.pluralize = function({
                i18n: e,
                count: t,
                scope: n,
                options: o,
                baseScope: u
            }) {
                let a, s;
                if (o = Object.assign({}, o), !(a = "object" == typeof n && n ? n : (0, i.lookup)(e, n, o))) return e.missingTranslation.get(n, o);
                let l = e.pluralization.get(o.locale),
                    c = l(e, t),
                    f = [];
                for (; c.length;) {
                    let e = c.shift();
                    if ((0, r.isSet)(a[e])) {
                        s = a[e];
                        break
                    }
                    f.push(e)
                }
                return (0, r.isSet)(s) ? (o.count = t, e.interpolate(e, s, o)) : e.missingTranslation.get(u.split(e.defaultSeparator).concat([f[0]]), o)
            }
        },
        17672: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.propertyFlatList = void 0;
            let i = r(n(41548)),
                o = r(n(67663));
            class u {
                constructor(e) {
                    this.target = e
                }
                call() {
                    let e = (0, o.default)(Object.keys(this.target).map(e => this.compute(this.target[e], e)));
                    return e.sort(), e
                }
                compute(e, t) {
                    return !Array.isArray(e) && (0, i.default)(e) ? Object.keys(e).map(n => this.compute(e[n], `${t}.${n}`)) : t
                }
            }
            t.propertyFlatList = function(e) {
                return new u(e).call()
            }
        },
        26943: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.roundNumber = void 0;
            let i = r(n(15080)),
                o = n(96678);
            t.roundNumber = function(e, t) {
                let n = function(e, {
                    precision: t,
                    significant: n
                }) {
                    return n && null !== t && t > 0 ? t - (e.isZero() ? 1 : Math.floor(Math.log10(e.abs().toNumber()) + 1)) : t
                }(e, t);
                if (null === n) return e.toString();
                let r = (0, o.expandRoundMode)(t.roundMode);
                if (n >= 0) return e.toFixed(n, r);
                let u = Math.pow(10, Math.abs(n));
                return (e = new i.default(e.div(u).toFixed(0, r)).times(u)).toString()
            }
        },
        23260: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.strftime = void 0;
            let n = {
                meridian: {
                    am: "AM",
                    pm: "PM"
                },
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                monthNames: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                abbrMonthNames: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            };
            t.strftime = function(e, t, r = {}) {
                let {
                    abbrDayNames: i,
                    dayNames: o,
                    abbrMonthNames: u,
                    monthNames: a,
                    meridian: s
                } = Object.assign(Object.assign({}, n), r);
                if (isNaN(e.getTime())) throw Error("strftime() requires a valid date object, but received an invalid date.");
                let l = e.getDay(),
                    c = e.getDate(),
                    f = e.getFullYear(),
                    d = e.getMonth() + 1,
                    h = e.getHours(),
                    p = h,
                    g = h > 11 ? "pm" : "am",
                    m = e.getSeconds(),
                    b = e.getMinutes(),
                    w = e.getTimezoneOffset(),
                    v = Math.floor(Math.abs(w / 60)),
                    y = Math.abs(w) - 60 * v,
                    x = (w > 0 ? "-" : "+") + (v.toString().length < 2 ? "0" + v : v) + (y.toString().length < 2 ? "0" + y : y);
                return p > 12 ? p -= 12 : 0 === p && (p = 12), t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace("%a", i[l])).replace("%A", o[l])).replace("%b", u[d])).replace("%B", a[d])).replace("%d", c.toString().padStart(2, "0"))).replace("%e", c.toString())).replace("%-d", c.toString())).replace("%H", h.toString().padStart(2, "0"))).replace("%-H", h.toString())).replace("%k", h.toString())).replace("%I", p.toString().padStart(2, "0"))).replace("%-I", p.toString())).replace("%l", p.toString())).replace("%m", d.toString().padStart(2, "0"))).replace("%-m", d.toString())).replace("%M", b.toString().padStart(2, "0"))).replace("%-M", b.toString())).replace("%p", s[g])).replace("%P", s[g].toLowerCase())).replace("%S", m.toString().padStart(2, "0"))).replace("%-S", m.toString())).replace("%w", l.toString())).replace("%y", f.toString().padStart(2, "0").substr(-2))).replace("%-y", f.toString().padStart(2, "0").substr(-2).replace(/^0+/, ""))).replace("%Y", f.toString())).replace(/%z/i, x)
            }
        },
        16830: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.timeAgoInWords = void 0;
            let i = r(n(98561)),
                o = n(31056),
                u = (e, t, n) => n >= e && n <= t;
            t.timeAgoInWords = function(e, t, n, r = {}) {
                let a = r.scope || "datetime.distance_in_words",
                    s = (t, n = 0) => e.t(t, {
                        count: n,
                        scope: a
                    });
                t = (0, o.parseDate)(t), n = (0, o.parseDate)(n);
                let l = t.getTime() / 1e3,
                    c = n.getTime() / 1e3;
                l > c && ([t, n, l, c] = [n, t, c, l]);
                let f = Math.round(c - l),
                    d = Math.round((c - l) / 60),
                    h = d / 60,
                    p = Math.round(d / 60),
                    g = Math.round(h / 24),
                    m = Math.round(g / 30);
                if (u(0, 1, d)) return r.includeSeconds ? u(0, 4, f) ? s("less_than_x_seconds", 5) : u(5, 9, f) ? s("less_than_x_seconds", 10) : u(10, 19, f) ? s("less_than_x_seconds", 20) : u(20, 39, f) ? s("half_a_minute") : s(u(40, 59, f) ? "less_than_x_minutes" : "x_minutes", 1) : 0 === d ? s("less_than_x_minutes", 1) : s("x_minutes", d);
                if (u(2, 44, d)) return s("x_minutes", d);
                if (u(45, 89, d)) return s("about_x_hours", 1);
                if (u(90, 1439, d)) return s("about_x_hours", p);
                if (u(1440, 2519, d)) return s("x_days", 1);
                if (u(2520, 43199, d)) return s("x_days", g);
                if (u(43200, 86399, d)) return s("about_x_months", Math.round(d / 43200));
                if (u(86400, 525599, d)) return s("x_months", m);
                let b = t.getFullYear();
                t.getMonth() + 1 >= 3 && (b += 1);
                let w = n.getFullYear();
                n.getMonth() + 1 < 3 && (w -= 1);
                let v = b > w ? 0 : (0, i.default)(b, w).filter(e => 1 == new Date(e, 1, 29).getMonth()).length,
                    y = d - 1440 * v,
                    x = Math.trunc(y / 525600),
                    S = parseFloat((y / 525600 - x).toPrecision(3));
                return S < .25 ? s("about_x_years", x) : S < .75 ? s("over_x_years", x) : s("almost_x_years", x + 1)
            }
        },
        57553: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useMakePlural = t.Pluralization = t.MissingTranslation = t.Locales = t.I18n = void 0;
            var o = n(50601);
            Object.defineProperty(t, "I18n", {
                enumerable: !0,
                get: function() {
                    return o.I18n
                }
            });
            var u = n(14072);
            Object.defineProperty(t, "Locales", {
                enumerable: !0,
                get: function() {
                    return u.Locales
                }
            });
            var a = n(3564);
            Object.defineProperty(t, "MissingTranslation", {
                enumerable: !0,
                get: function() {
                    return a.MissingTranslation
                }
            });
            var s = n(33191);
            Object.defineProperty(t, "Pluralization", {
                enumerable: !0,
                get: function() {
                    return s.Pluralization
                }
            }), Object.defineProperty(t, "useMakePlural", {
                enumerable: !0,
                get: function() {
                    return s.useMakePlural
                }
            }), i(n(19651), t)
        },
        19651: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        10572: function(e) {
            e.exports = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
        },
        81088: function(e, t, n) {
            var r = n(98540);
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
            }
        },
        85295: function(e) {
            e.exports = function(e, t, n) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                    if (n(t, e[r])) return !0;
                return !1
            }
        },
        68821: function(e) {
            e.exports = function(e, t, n, r) {
                var i = -1,
                    o = null == e ? 0 : e.length;
                for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
                return n
            }
        },
        61085: function(e) {
            e.exports = function(e) {
                return e.split("")
            }
        },
        82569: function(e) {
            var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            e.exports = function(e) {
                return e.match(t) || []
            }
        },
        42159: function(e) {
            e.exports = function(e, t, n, r) {
                for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                    if (t(e[o], o, e)) return o;
                return -1
            }
        },
        20231: function(e, t, n) {
            var r = n(62849),
                i = n(81946);
            e.exports = function e(t, n, o, u, a) {
                var s = -1,
                    l = t.length;
                for (o || (o = i), a || (a = []); ++s < l;) {
                    var c = t[s];
                    n > 0 && o(c) ? n > 1 ? e(c, n - 1, o, u, a) : r(a, c) : u || (a[a.length] = c)
                }
                return a
            }
        },
        1945: function(e) {
            var t = Object.prototype.hasOwnProperty;
            e.exports = function(e, n) {
                return null != e && t.call(e, n)
            }
        },
        98540: function(e, t, n) {
            var r = n(42159),
                i = n(19025),
                o = n(86976);
            e.exports = function(e, t, n) {
                return t == t ? o(e, t, n) : r(e, i, n)
            }
        },
        19025: function(e) {
            e.exports = function(e) {
                return e != e
            }
        },
        19045: function(e) {
            e.exports = function(e) {
                return function(t) {
                    return null == e ? void 0 : e[t]
                }
            }
        },
        82223: function(e) {
            var t = Math.ceil,
                n = Math.max;
            e.exports = function(e, r, i, o) {
                for (var u = -1, a = n(t((r - e) / (i || 1)), 0), s = Array(a); a--;) s[o ? a : ++u] = e, e += i;
                return s
            }
        },
        19311: function(e) {
            var t = Math.floor;
            e.exports = function(e, n) {
                var r = "";
                if (!e || n < 1 || n > 9007199254740991) return r;
                do n % 2 && (r += e), (n = t(n / 2)) && (e += e); while (n);
                return r
            }
        },
        19952: function(e, t, n) {
            var r = n(39276),
                i = n(84776),
                o = n(96684);
            e.exports = function(e, t) {
                return o(i(e, t, r), e + "")
            }
        },
        40438: function(e, t, n) {
            var r = n(82961),
                i = n(12808),
                o = n(39276),
                u = i ? function(e, t) {
                    return i(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : o;
            e.exports = u
        },
        80426: function(e) {
            e.exports = function(e, t, n) {
                var r = -1,
                    i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var o = Array(i); ++r < i;) o[r] = e[r + t];
                return o
            }
        },
        35669: function(e, t, n) {
            var r = n(98239),
                i = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, r(e) + 1).replace(i, "") : e
            }
        },
        96222: function(e, t, n) {
            var r = n(33653),
                i = n(81088),
                o = n(85295),
                u = n(8304),
                a = n(30014),
                s = n(55012);
            e.exports = function(e, t, n) {
                var l = -1,
                    c = i,
                    f = e.length,
                    d = !0,
                    h = [],
                    p = h;
                if (n) d = !1, c = o;
                else if (f >= 200) {
                    var g = t ? null : a(e);
                    if (g) return s(g);
                    d = !1, c = u, p = new r
                } else p = t ? [] : h;
                t: for (; ++l < f;) {
                    var m = e[l],
                        b = t ? t(m) : m;
                    if (m = n || 0 !== m ? m : 0, d && b == b) {
                        for (var w = p.length; w--;)
                            if (p[w] === b) continue t;
                        t && p.push(b), h.push(m)
                    } else c(p, b, n) || (p !== h && p.push(b), h.push(m))
                }
                return h
            }
        },
        30680: function(e) {
            e.exports = function(e, t, n) {
                for (var r = -1, i = e.length, o = t.length, u = {}; ++r < i;) {
                    var a = r < o ? t[r] : void 0;
                    n(u, e[r], a)
                }
                return u
            }
        },
        7153: function(e, t, n) {
            var r = n(80426);
            e.exports = function(e, t, n) {
                var i = e.length;
                return n = void 0 === n ? i : n, !t && n >= i ? e : r(e, t, n)
            }
        },
        68424: function(e, t, n) {
            var r = n(7153),
                i = n(78480),
                o = n(50866),
                u = n(56798);
            e.exports = function(e) {
                return function(t) {
                    var n = i(t = u(t)) ? o(t) : void 0,
                        a = n ? n[0] : t.charAt(0),
                        s = n ? r(n, 1).join("") : t.slice(1);
                    return a[e]() + s
                }
            }
        },
        38347: function(e, t, n) {
            var r = n(68821),
                i = n(50033),
                o = n(69785),
                u = RegExp("['’]", "g");
            e.exports = function(e) {
                return function(t) {
                    return r(o(i(t).replace(u, "")), e, "")
                }
            }
        },
        15967: function(e, t, n) {
            var r = n(82223),
                i = n(12841),
                o = n(69569);
            e.exports = function(e) {
                return function(t, n, u) {
                    return u && "number" != typeof u && i(t, n, u) && (n = u = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), u = void 0 === u ? t < n ? 1 : -1 : o(u), r(t, n, u, e)
                }
            }
        },
        30014: function(e, t, n) {
            var r = n(14140),
                i = n(66239),
                o = n(55012),
                u = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(e) {
                    return new r(e)
                } : i;
            e.exports = u
        },
        89857: function(e, t, n) {
            var r = n(19045)({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            });
            e.exports = r
        },
        78480: function(e) {
            var t = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function(e) {
                return t.test(e)
            }
        },
        50943: function(e) {
            var t = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            e.exports = function(e) {
                return t.test(e)
            }
        },
        81946: function(e, t, n) {
            var r = n(37515),
                i = n(84502),
                o = n(54703),
                u = r ? r.isConcatSpreadable : void 0;
            e.exports = function(e) {
                return o(e) || i(e) || !!(u && e && e[u])
            }
        },
        12841: function(e, t, n) {
            var r = n(41233),
                i = n(97703),
                o = n(21497),
                u = n(41548);
            e.exports = function(e, t, n) {
                if (!u(n)) return !1;
                var a = typeof t;
                return ("number" == a ? !!(i(n) && o(t, n.length)) : "string" == a && t in n) && r(n[t], e)
            }
        },
        84776: function(e, t, n) {
            var r = n(10572),
                i = Math.max;
            e.exports = function(e, t, n) {
                return t = i(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var o = arguments, u = -1, a = i(o.length - t, 0), s = Array(a); ++u < a;) s[u] = o[t + u];
                        u = -1;
                        for (var l = Array(t + 1); ++u < t;) l[u] = o[u];
                        return l[t] = n(s), r(e, this, l)
                    }
            }
        },
        96684: function(e, t, n) {
            var r = n(40438),
                i = n(79699)(r);
            e.exports = i
        },
        79699: function(e) {
            var t = Date.now;
            e.exports = function(e) {
                var n = 0,
                    r = 0;
                return function() {
                    var i = t(),
                        o = 16 - (i - r);
                    if (r = i, o > 0) {
                        if (++n >= 800) return arguments[0]
                    } else n = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        86976: function(e) {
            e.exports = function(e, t, n) {
                for (var r = n - 1, i = e.length; ++r < i;)
                    if (e[r] === t) return r;
                return -1
            }
        },
        50866: function(e, t, n) {
            var r = n(61085),
                i = n(78480),
                o = n(64305);
            e.exports = function(e) {
                return i(e) ? o(e) : r(e)
            }
        },
        98239: function(e) {
            var t = /\s/;
            e.exports = function(e) {
                for (var n = e.length; n-- && t.test(e.charAt(n)););
                return n
            }
        },
        64305: function(e) {
            var t = "\ud800-\udfff",
                n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                r = "\ud83c[\udffb-\udfff]",
                i = "[^" + t + "]",
                o = "(?:\ud83c[\udde6-\uddff]){2}",
                u = "[\ud800-\udbff][\udc00-\udfff]",
                a = "(?:" + n + "|" + r + ")?",
                s = "[\\ufe0e\\ufe0f]?",
                l = "(?:\\u200d(?:" + [i, o, u].join("|") + ")" + s + a + ")*",
                c = RegExp(r + "(?=" + r + ")|(?:" + [i + n + "?", n, o, u, "[" + t + "]"].join("|") + ")" + (s + a + l), "g");
            e.exports = function(e) {
                return e.match(c) || []
            }
        },
        21939: function(e) {
            var t = "\ud800-\udfff",
                n = "\\u2700-\\u27bf",
                r = "a-z\\xdf-\\xf6\\xf8-\\xff",
                i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                o = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                u = "['’]",
                a = "[" + o + "]",
                s = "[" + r + "]",
                l = "[^" + t + o + "\\d+" + n + r + i + "]",
                c = "(?:\ud83c[\udde6-\uddff]){2}",
                f = "[\ud800-\udbff][\udc00-\udfff]",
                d = "[" + i + "]",
                h = "(?:" + s + "|" + l + ")",
                p = "(?:" + u + "(?:d|ll|m|re|s|t|ve))?",
                g = "(?:" + u + "(?:D|LL|M|RE|S|T|VE))?",
                m = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
                b = "[\\ufe0e\\ufe0f]?",
                w = "(?:\\u200d(?:" + ["[^" + t + "]", c, f].join("|") + ")" + b + m + ")*",
                v = "(?:" + ["[" + n + "]", c, f].join("|") + ")" + (b + m + w),
                y = RegExp([d + "?" + s + "+" + p + "(?=" + [a, d, "$"].join("|") + ")", "(?:" + d + "|" + l + ")+" + g + "(?=" + [a, d + h, "$"].join("|") + ")", d + "?" + h + "+" + p, d + "+" + g, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", v].join("|"), "g");
            e.exports = function(e) {
                return e.match(y) || []
            }
        },
        63431: function(e, t, n) {
            var r = n(99468),
                i = n(38347)(function(e, t, n) {
                    return t = t.toLowerCase(), e + (n ? r(t) : t)
                });
            e.exports = i
        },
        99468: function(e, t, n) {
            var r = n(56798),
                i = n(21774);
            e.exports = function(e) {
                return i(r(e).toLowerCase())
            }
        },
        82961: function(e) {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        50033: function(e, t, n) {
            var r = n(89857),
                i = n(56798),
                o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                u = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            e.exports = function(e) {
                return (e = i(e)) && e.replace(o, r).replace(u, "")
            }
        },
        67663: function(e, t, n) {
            var r = n(20231),
                i = 1 / 0;
            e.exports = function(e) {
                return (null == e ? 0 : e.length) ? r(e, i) : []
            }
        },
        12461: function(e, t, n) {
            var r = n(1945),
                i = n(4669);
            e.exports = function(e, t) {
                return null != e && i(e, t, r)
            }
        },
        66239: function(e) {
            e.exports = function() {}
        },
        98561: function(e, t, n) {
            var r = n(15967)();
            e.exports = r
        },
        56666: function(e, t, n) {
            var r = n(19311),
                i = n(12841),
                o = n(68969),
                u = n(56798);
            e.exports = function(e, t, n) {
                return t = (n ? i(e, t, n) : void 0 === t) ? 1 : o(t), r(u(e), t)
            }
        },
        60371: function(e, t, n) {
            var r = n(59523);
            e.exports = function(e, t, n) {
                return null == e ? e : r(e, t, n)
            }
        },
        65694: function(e, t, n) {
            var r = n(59523);
            e.exports = function(e, t, n, i) {
                return i = "function" == typeof i ? i : void 0, null == e ? e : r(e, t, n, i)
            }
        },
        64677: function(e, t, n) {
            var r = n(20231),
                i = n(60455),
                o = n(19952),
                u = n(12841),
                a = o(function(e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    return n > 1 && u(e, t[0], t[1]) ? t = [] : n > 2 && u(t[0], t[1], t[2]) && (t = [t[0]]), i(e, r(t, 1), [])
                });
            e.exports = a
        },
        69569: function(e, t, n) {
            var r = n(70531),
                i = 1 / 0;
            e.exports = function(e) {
                return e ? (e = r(e)) === i || e === -i ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
            }
        },
        68969: function(e, t, n) {
            var r = n(69569);
            e.exports = function(e) {
                var t = r(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        70531: function(e, t, n) {
            var r = n(35669),
                i = n(41548),
                o = n(36883),
                u = 0 / 0,
                a = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (o(e)) return u;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = r(e);
                var n = s.test(e);
                return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? u : +e
            }
        },
        67945: function(e, t, n) {
            var r = n(96222);
            e.exports = function(e) {
                return e && e.length ? r(e) : []
            }
        },
        21774: function(e, t, n) {
            var r = n(68424)("toUpperCase");
            e.exports = r
        },
        69785: function(e, t, n) {
            var r = n(82569),
                i = n(50943),
                o = n(56798),
                u = n(21939);
            e.exports = function(e, t, n) {
                return (e = o(e), void 0 === (t = n ? void 0 : t)) ? i(e) ? u(e) : r(e) : e.match(t) || []
            }
        },
        8183: function(e, t, n) {
            var r = n(79902),
                i = n(30680);
            e.exports = function(e, t) {
                return i(e || [], t || [], r)
            }
        },
        52555: function(e, t, n) {
            var r;
            ! function(i, o) {
                "use strict";
                var u = "function",
                    a = "undefined",
                    s = "object",
                    l = "string",
                    c = "major",
                    f = "model",
                    d = "name",
                    h = "type",
                    p = "vendor",
                    g = "version",
                    m = "architecture",
                    b = "console",
                    w = "mobile",
                    v = "tablet",
                    y = "smarttv",
                    x = "wearable",
                    S = "embedded",
                    E = "Amazon",
                    _ = "Apple",
                    N = "ASUS",
                    O = "BlackBerry",
                    A = "Browser",
                    k = "Chrome",
                    M = "Firefox",
                    C = "Google",
                    T = "Huawei",
                    P = "Microsoft",
                    j = "Motorola",
                    B = "Opera",
                    I = "Samsung",
                    L = "Sharp",
                    F = "Sony",
                    R = "Xiaomi",
                    U = "Zebra",
                    D = "Facebook",
                    z = "Chromium OS",
                    $ = "Mac OS",
                    H = function(e, t) {
                        var n = {};
                        for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                        return n
                    },
                    q = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                        return t
                    },
                    V = function(e, t) {
                        return typeof e === l && -1 !== K(t).indexOf(K(e))
                    },
                    K = function(e) {
                        return e.toLowerCase()
                    },
                    Z = function(e, t) {
                        if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === a ? e : e.substring(0, 500)
                    },
                    Y = function(e, t) {
                        for (var n, r, i, a, l, c, f = 0; f < t.length && !l;) {
                            var d = t[f],
                                h = t[f + 1];
                            for (n = r = 0; n < d.length && !l && d[n];)
                                if (l = d[n++].exec(e))
                                    for (i = 0; i < h.length; i++) c = l[++r], typeof(a = h[i]) === s && a.length > 0 ? 2 === a.length ? typeof a[1] == u ? this[a[0]] = a[1].call(this, c) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== u || a[1].exec && a[1].test ? this[a[0]] = c ? c.replace(a[1], a[2]) : o : this[a[0]] = c ? a[1].call(this, c, a[2]) : o : 4 === a.length && (this[a[0]] = c ? a[3].call(this, c.replace(a[1], a[2])) : o) : this[a] = c || o;
                            f += 2
                        }
                    },
                    W = function(e, t) {
                        for (var n in t)
                            if (typeof t[n] === s && t[n].length > 0) {
                                for (var r = 0; r < t[n].length; r++)
                                    if (V(t[n][r], e)) return "?" === n ? o : n
                            } else if (V(t[n], e)) return "?" === n ? o : n;
                        return e
                    },
                    J = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        "8.1": "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    G = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [g, [d, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [g, [d, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [d, g],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [g, [d, B + " Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [g, [d, B]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [g, [d, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [d, g],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [g, [d, "UC" + A]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [g, [d, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [g, [d, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [g, [d, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [g, [d, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [g, [d, "Smart Lenovo " + A]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Secure " + A], g
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [g, [d, M + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [g, [d, B + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [g, [d, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [g, [d, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [g, [d, B + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [g, [d, "MIUI " + A]],
                            [/fxios\/([-\w\.]+)/i],
                            [g, [d, M]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [d, "360 " + A]
                            ],
                            [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 " + A], g
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [g, [d, I + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [d, /_/g, " "], g
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [g, [d, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [d, "Sogou Mobile"], g
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [d, g],
                            [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [d],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [d, D], g
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [d, g],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [g, [d, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [g, [d, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [g, [d, k + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [d, k + " WebView"], g
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [g, [d, "Android " + A]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [d, g],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [g, [d, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [g, d],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [d, [g, W, {
                                "1.0": "/8",
                                "1.2": "/1",
                                "1.3": "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [d, g],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [d, "Netscape"], g
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [g, [d, M + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                            [d, g],
                            [/(cobalt)\/([\w\.]+)/i],
                            [d, [g, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [m, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [m, K]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [m, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [m, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [m, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [m, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [m, /ower/, "", K]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [m, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [m, K]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [f, [p, I],
                                [h, v]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [f, [p, I],
                                [h, w]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [f, [p, _],
                                [h, w]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [f, [p, _],
                                [h, v]
                            ],
                            [/(macintosh);/i],
                            [f, [p, _]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [f, [p, L],
                                [h, w]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [f, [p, T],
                                [h, v]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [f, [p, T],
                                [h, w]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [f, /_/g, " "],
                                [p, R],
                                [h, w]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [f, /_/g, " "],
                                [p, R],
                                [h, v]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [f, [p, "OPPO"],
                                [h, w]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [f, [p, "Vivo"],
                                [h, w]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [f, [p, "Realme"],
                                [h, w]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [f, [p, j],
                                [h, w]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [f, [p, j],
                                [h, v]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [f, [p, "LG"],
                                [h, v]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [f, [p, "LG"],
                                [h, w]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [f, [p, "Lenovo"],
                                [h, v]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [f, /_/g, " "],
                                [p, "Nokia"],
                                [h, w]
                            ],
                            [/(pixel c)\b/i],
                            [f, [p, C],
                                [h, v]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [f, [p, C],
                                [h, w]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [f, [p, F],
                                [h, w]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [f, "Xperia Tablet"],
                                [p, F],
                                [h, v]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [f, [p, "OnePlus"],
                                [h, w]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [f, [p, E],
                                [h, v]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [f, /(.+)/g, "Fire Phone $1"],
                                [p, E],
                                [h, w]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [f, p, [h, v]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [f, [p, O],
                                [h, w]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [f, [p, N],
                                [h, v]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [f, [p, N],
                                [h, w]
                            ],
                            [/(nexus 9)/i],
                            [f, [p, "HTC"],
                                [h, v]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [p, [f, /_/g, " "],
                                [h, w]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [f, [p, "Acer"],
                                [h, v]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [f, [p, "Meizu"],
                                [h, w]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [f, [p, "Ulefone"],
                                [h, w]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [p, f, [h, w]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [p, f, [h, v]],
                            [/(surface duo)/i],
                            [f, [p, P],
                                [h, v]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [f, [p, "Fairphone"],
                                [h, w]
                            ],
                            [/(u304aa)/i],
                            [f, [p, "AT&T"],
                                [h, w]
                            ],
                            [/\bsie-(\w*)/i],
                            [f, [p, "Siemens"],
                                [h, w]
                            ],
                            [/\b(rct\w+) b/i],
                            [f, [p, "RCA"],
                                [h, v]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [f, [p, "Dell"],
                                [h, v]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [f, [p, "Verizon"],
                                [h, v]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [f, [p, "Barnes & Noble"],
                                [h, v]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [f, [p, "NuVision"],
                                [h, v]
                            ],
                            [/\b(k88) b/i],
                            [f, [p, "ZTE"],
                                [h, v]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [f, [p, "ZTE"],
                                [h, w]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [f, [p, "Swiss"],
                                [h, w]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [f, [p, "Swiss"],
                                [h, v]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [f, [p, "Zeki"],
                                [h, v]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [p, "Dragon Touch"], f, [h, v]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [f, [p, "Insignia"],
                                [h, v]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [f, [p, "NextBook"],
                                [h, v]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [p, "Voice"], f, [h, w]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [p, "LvTel"], f, [h, w]
                            ],
                            [/\b(ph-1) /i],
                            [f, [p, "Essential"],
                                [h, w]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [f, [p, "Envizen"],
                                [h, v]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [f, [p, "MachSpeed"],
                                [h, v]
                            ],
                            [/\btu_(1491) b/i],
                            [f, [p, "Rotor"],
                                [h, v]
                            ],
                            [/(shield[\w ]+) b/i],
                            [f, [p, "Nvidia"],
                                [h, v]
                            ],
                            [/(sprint) (\w+)/i],
                            [p, f, [h, w]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [f, /\./g, " "],
                                [p, P],
                                [h, w]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [f, [p, U],
                                [h, v]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [f, [p, U],
                                [h, w]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [p, [h, y]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [f, /^/, "SmartTV"],
                                [p, I],
                                [h, y]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [p, "LG"],
                                [h, y]
                            ],
                            [/(apple) ?tv/i],
                            [p, [f, _ + " TV"],
                                [h, y]
                            ],
                            [/crkey/i],
                            [
                                [f, k + "cast"],
                                [p, C],
                                [h, y]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [f, [p, E],
                                [h, y]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [f, [p, L],
                                [h, y]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [f, [p, F],
                                [h, y]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [f, [p, R],
                                [h, y]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [p, f, [h, y]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [p, Z],
                                [f, Z],
                                [h, y]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [h, y]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [p, f, [h, b]],
                            [/droid.+; (shield) bui/i],
                            [f, [p, "Nvidia"],
                                [h, b]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [f, [p, F],
                                [h, b]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [f, [p, P],
                                [h, b]
                            ],
                            [/((pebble))app/i],
                            [p, f, [h, x]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [f, [p, _],
                                [h, x]
                            ],
                            [/droid.+; (glass) \d/i],
                            [f, [p, C],
                                [h, x]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [f, [p, U],
                                [h, x]
                            ],
                            [/(quest( 2| pro)?)/i],
                            [f, [p, D],
                                [h, x]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [p, [h, S]],
                            [/(aeobc)\b/i],
                            [f, [p, E],
                                [h, S]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [f, [h, w]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [f, [h, v]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [h, v]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [h, w]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [f, [p, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [g, [d, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [g, [d, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [d, g],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [g, d]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [d, g],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [d, [g, W, J]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [g, W, J],
                                [d, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [g, /_/g, "."],
                                [d, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [d, $],
                                [g, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [g, d],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [d, g],
                            [/\(bb(10);/i],
                            [g, [d, O]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [g, [d, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [g, [d, M + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [g, [d, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [g, [d, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [g, [d, k + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [d, z], g
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [d, g],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [d, "Solaris"], g
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [d, g]
                        ]
                    },
                    X = function(e, t) {
                        if (typeof e === s && (t = e, e = o), !(this instanceof X)) return new X(e, t).getResult();
                        var n = typeof i !== a && i.navigator ? i.navigator : o,
                            r = e || (n && n.userAgent ? n.userAgent : ""),
                            b = n && n.userAgentData ? n.userAgentData : o,
                            y = t ? H(G, t) : G,
                            x = n && n.userAgent == r;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t[d] = o, t[g] = o, Y.call(t, r, y.browser), t[c] = typeof(e = t[g]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, x && n && n.brave && typeof n.brave.isBrave == u && (t[d] = "Brave"), t
                        }, this.getCPU = function() {
                            var e = {};
                            return e[m] = o, Y.call(e, r, y.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[p] = o, e[f] = o, e[h] = o, Y.call(e, r, y.device), x && !e[h] && b && b.mobile && (e[h] = w), x && "Macintosh" == e[f] && n && typeof n.standalone !== a && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[f] = "iPad", e[h] = v), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[d] = o, e[g] = o, Y.call(e, r, y.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[d] = o, e[g] = o, Y.call(e, r, y.os), x && !e[d] && b && "Unknown" != b.platform && (e[d] = b.platform.replace(/chrome os/i, z).replace(/macos/i, $)), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return r
                        }, this.setUA = function(e) {
                            return r = typeof e === l && e.length > 500 ? Z(e, 500) : e, this
                        }, this.setUA(r), this
                    };
                X.VERSION = "1.0.37", X.BROWSER = q([d, g, c]), X.CPU = q([m]), X.DEVICE = q([f, p, h, b, w, y, v, x, S]), X.ENGINE = X.OS = q([d, g]), typeof t !== a ? (e.exports && (t = e.exports = X), t.UAParser = X) : n.amdO ? o !== (r = (function() {
                    return X
                }).call(t, n, t, e)) && (e.exports = r) : typeof i !== a && (i.UAParser = X);
                var Q = typeof i !== a && (i.jQuery || i.Zepto);
                if (Q && !Q.ua) {
                    var ee = new X;
                    Q.ua = ee.getResult(), Q.ua.get = function() {
                        return ee.getUA()
                    }, Q.ua.set = function(e) {
                        ee.setUA(e);
                        var t = ee.getResult();
                        for (var n in t) Q.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        32211: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return c
                }
            });
            var r = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                i = {
                    rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${r}`,
                    system: r
                },
                o = {
                    large: {
                        actionButton: "9999px",
                        connectButton: "12px",
                        modal: "24px",
                        modalMobile: "28px"
                    },
                    medium: {
                        actionButton: "10px",
                        connectButton: "8px",
                        modal: "16px",
                        modalMobile: "18px"
                    },
                    none: {
                        actionButton: "0px",
                        connectButton: "0px",
                        modal: "0px",
                        modalMobile: "0px"
                    },
                    small: {
                        actionButton: "4px",
                        connectButton: "4px",
                        modal: "8px",
                        modalMobile: "8px"
                    }
                },
                u = {
                    large: {
                        modalOverlay: "blur(20px)"
                    },
                    none: {
                        modalOverlay: "blur(0px)"
                    },
                    small: {
                        modalOverlay: "blur(4px)"
                    }
                },
                a = ({
                    borderRadius: e = "large",
                    fontStack: t = "rounded",
                    overlayBlur: n = "none"
                }) => ({
                    blurs: {
                        modalOverlay: u[n].modalOverlay
                    },
                    fonts: {
                        body: i[t]
                    },
                    radii: {
                        actionButton: o[e].actionButton,
                        connectButton: o[e].connectButton,
                        menuButton: o[e].connectButton,
                        modal: o[e].modal,
                        modalMobile: o[e].modalMobile
                    }
                }),
                s = {
                    blue: {
                        accentColor: "#0E76FD",
                        accentColorForeground: "#FFF"
                    },
                    green: {
                        accentColor: "#1DB847",
                        accentColorForeground: "#FFF"
                    },
                    orange: {
                        accentColor: "#FF801F",
                        accentColorForeground: "#FFF"
                    },
                    pink: {
                        accentColor: "#FF5CA0",
                        accentColorForeground: "#FFF"
                    },
                    purple: {
                        accentColor: "#5F5AFA",
                        accentColorForeground: "#FFF"
                    },
                    red: {
                        accentColor: "#FA423C",
                        accentColorForeground: "#FFF"
                    }
                },
                l = s.blue,
                c = ({
                    accentColor: e = l.accentColor,
                    accentColorForeground: t = l.accentColorForeground,
                    ...n
                } = {}) => ({ ...a(n),
                    colors: {
                        accentColor: e,
                        accentColorForeground: t,
                        actionButtonBorder: "rgba(0, 0, 0, 0.04)",
                        actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
                        actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
                        closeButton: "rgba(60, 66, 66, 0.8)",
                        closeButtonBackground: "rgba(0, 0, 0, 0.06)",
                        connectButtonBackground: "#FFF",
                        connectButtonBackgroundError: "#FF494A",
                        connectButtonInnerBackground: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
                        connectButtonText: "#25292E",
                        connectButtonTextError: "#FFF",
                        connectionIndicator: "#30E000",
                        downloadBottomCardBackground: "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
                        downloadTopCardBackground: "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
                        error: "#FF494A",
                        generalBorder: "rgba(0, 0, 0, 0.06)",
                        generalBorderDim: "rgba(0, 0, 0, 0.03)",
                        menuItemBackground: "rgba(60, 66, 66, 0.1)",
                        modalBackdrop: "rgba(0, 0, 0, 0.3)",
                        modalBackground: "#FFF",
                        modalBorder: "transparent",
                        modalText: "#25292E",
                        modalTextDim: "rgba(60, 66, 66, 0.3)",
                        modalTextSecondary: "rgba(60, 66, 66, 0.6)",
                        profileAction: "#FFF",
                        profileActionHover: "rgba(255, 255, 255, 0.5)",
                        profileForeground: "rgba(60, 66, 66, 0.06)",
                        selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
                        standby: "#FFD641"
                    },
                    shadows: {
                        connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
                        profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
                        selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                        selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
                        walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
                    }
                });
            c.accentColors = s
        },
        15820: function(e, t, n) {
            "use strict";

            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`)
            }

            function i(e, ...t) {
                if (!(e instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
            }
            n.d(t, {
                K: function() {
                    return q
                }
            });
            var o = {
                number: r,
                bool: function(e) {
                    if ("boolean" != typeof e) throw Error(`Expected boolean, not ${e}`)
                },
                bytes: i,
                hash: function(e) {
                    if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                    r(e.outputLen), r(e.blockLen)
                },
                exists: function(e, t = !0) {
                    if (e.destroyed) throw Error("Hash instance has been destroyed");
                    if (t && e.finished) throw Error("Hash#digest() has already been called")
                },
                output: function(e, t) {
                    i(e);
                    let n = t.outputLen;
                    if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`)
                }
            };
            let u = BigInt(4294967296 - 1),
                a = BigInt(32);

            function s(e, t = !1) {
                return t ? {
                    h: Number(e & u),
                    l: Number(e >> a & u)
                } : {
                    h: 0 | Number(e >> a & u),
                    l: 0 | Number(e & u)
                }
            }
            var l = {
                fromBig: s,
                split: function(e, t = !1) {
                    let n = new Uint32Array(e.length),
                        r = new Uint32Array(e.length);
                    for (let i = 0; i < e.length; i++) {
                        let {
                            h: o,
                            l: u
                        } = s(e[i], t);
                        [n[i], r[i]] = [o, u]
                    }
                    return [n, r]
                },
                toBig: (e, t) => BigInt(e >>> 0) << a | BigInt(t >>> 0),
                shrSH: (e, t, n) => e >>> n,
                shrSL: (e, t, n) => e << 32 - n | t >>> n,
                rotrSH: (e, t, n) => e >>> n | t << 32 - n,
                rotrSL: (e, t, n) => e << 32 - n | t >>> n,
                rotrBH: (e, t, n) => e << 64 - n | t >>> n - 32,
                rotrBL: (e, t, n) => e >>> n - 32 | t << 64 - n,
                rotr32H: (e, t) => t,
                rotr32L: (e, t) => e,
                rotlSH: (e, t, n) => e << n | t >>> 32 - n,
                rotlSL: (e, t, n) => t << n | e >>> 32 - n,
                rotlBH: (e, t, n) => t << n - 32 | e >>> 64 - n,
                rotlBL: (e, t, n) => e << n - 32 | t >>> 64 - n,
                add: function(e, t, n, r) {
                    let i = (t >>> 0) + (r >>> 0);
                    return {
                        h: e + n + (i / 4294967296 | 0) | 0,
                        l: 0 | i
                    }
                },
                add3L: (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
                add3H: (e, t, n, r) => t + n + r + (e / 4294967296 | 0) | 0,
                add4L: (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
                add4H: (e, t, n, r, i) => t + n + r + i + (e / 4294967296 | 0) | 0,
                add5H: (e, t, n, r, i, o) => t + n + r + i + o + (e / 4294967296 | 0) | 0,
                add5L: (e, t, n, r, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0)
            };
            "object" == typeof self && "crypto" in self && self.crypto;
            let c = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
                f = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
            if (!f) throw Error("Non little-endian hardware is not supported");

            function d(e) {
                if ("string" == typeof e && (e = function(e) {
                        if ("string" != typeof e) throw TypeError(`utf8ToBytes expected string, got ${typeof e}`);
                        return new TextEncoder().encode(e)
                    }(e)), !(e instanceof Uint8Array)) throw TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
                return e
            }
            Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));
            class h {
                clone() {
                    return this._cloneInto()
                }
            }
            let [p, g, m] = [
                [],
                [],
                []
            ], b = BigInt(0), w = BigInt(1), v = BigInt(2), y = BigInt(7), x = BigInt(256), S = BigInt(113);
            for (let e = 0, t = w, n = 1, r = 0; e < 24; e++) {
                [n, r] = [r, (2 * n + 3 * r) % 5], p.push(2 * (5 * r + n)), g.push((e + 1) * (e + 2) / 2 % 64);
                let i = b;
                for (let e = 0; e < 7; e++)(t = (t << w ^ (t >> y) * S) % x) & v && (i ^= w << (w << BigInt(e)) - w);
                m.push(i)
            }
            let [E, _] = l.split(m, !0), N = (e, t, n) => n > 32 ? l.rotlBH(e, t, n) : l.rotlSH(e, t, n), O = (e, t, n) => n > 32 ? l.rotlBL(e, t, n) : l.rotlSL(e, t, n);
            class A extends h {
                constructor(e, t, n, r = !1, i = 24) {
                    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = r, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, o.number(n), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = c(this.state)
                }
                keccak() {
                    ! function(e, t = 24) {
                        let n = new Uint32Array(10);
                        for (let r = 24 - t; r < 24; r++) {
                            for (let t = 0; t < 10; t++) n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                            for (let t = 0; t < 10; t += 2) {
                                let r = (t + 8) % 10,
                                    i = (t + 2) % 10,
                                    o = n[i],
                                    u = n[i + 1],
                                    a = N(o, u, 1) ^ n[r],
                                    s = O(o, u, 1) ^ n[r + 1];
                                for (let n = 0; n < 50; n += 10) e[t + n] ^= a, e[t + n + 1] ^= s
                            }
                            let t = e[2],
                                i = e[3];
                            for (let n = 0; n < 24; n++) {
                                let r = g[n],
                                    o = N(t, i, r),
                                    u = O(t, i, r),
                                    a = p[n];
                                t = e[a], i = e[a + 1], e[a] = o, e[a + 1] = u
                            }
                            for (let t = 0; t < 50; t += 10) {
                                for (let r = 0; r < 10; r++) n[r] = e[t + r];
                                for (let r = 0; r < 10; r++) e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10]
                            }
                            e[0] ^= E[r], e[1] ^= _[r]
                        }
                        n.fill(0)
                    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(e) {
                    o.exists(this);
                    let {
                        blockLen: t,
                        state: n
                    } = this;
                    e = d(e);
                    let r = e.length;
                    for (let i = 0; i < r;) {
                        let o = Math.min(t - this.pos, r - i);
                        for (let t = 0; t < o; t++) n[this.pos++] ^= e[i++];
                        this.pos === t && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: e,
                        suffix: t,
                        pos: n,
                        blockLen: r
                    } = this;
                    e[n] ^= t, (128 & t) != 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak()
                }
                writeInto(e) {
                    o.exists(this, !1), o.bytes(e), this.finish();
                    let t = this.state,
                        {
                            blockLen: n
                        } = this;
                    for (let r = 0, i = e.length; r < i;) {
                        this.posOut >= n && this.keccak();
                        let o = Math.min(n - this.posOut, i - r);
                        e.set(t.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o
                    }
                    return e
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e)
                }
                xof(e) {
                    return o.number(e), this.xofInto(new Uint8Array(e))
                }
                digestInto(e) {
                    if (o.output(e, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(e) {
                    let {
                        blockLen: t,
                        suffix: n,
                        outputLen: r,
                        rounds: i,
                        enableXOF: o
                    } = this;
                    return e || (e = new A(t, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e
                }
            }
            let k = (e, t, n) => (function(e) {
                let t = t => e().update(d(t)).digest(),
                    n = e();
                return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
            })(() => new A(t, e, n));
            k(6, 144, 28), k(6, 136, 32), k(6, 104, 48), k(6, 72, 64), k(1, 144, 28);
            let M = k(1, 136, 32);
            k(1, 104, 48), k(1, 72, 64);
            let C = (e, t, n) => (function(e) {
                let t = (t, n) => e(n).update(d(t)).digest(),
                    n = e({});
                return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = t => e(t), t
            })((r = {}) => new A(t, e, void 0 === r.dkLen ? n : r.dkLen, !0));

            function T(e) {
                if (null == e) return "null";
                if (Array.isArray(e)) return "[ " + e.map(T).join(", ") + " ]";
                if (e instanceof Uint8Array) {
                    let t = "0123456789abcdef",
                        n = "0x";
                    for (let r = 0; r < e.length; r++) n += t[e[r] >> 4] + t[15 & e[r]];
                    return n
                }
                if ("object" == typeof e && "function" == typeof e.toJSON) return T(e.toJSON());
                switch (typeof e) {
                    case "boolean":
                    case "symbol":
                    case "number":
                        return e.toString();
                    case "bigint":
                        return BigInt(e).toString();
                    case "string":
                        return JSON.stringify(e);
                    case "object":
                        {
                            let t = Object.keys(e);
                            return t.sort(),
                            "{ " + t.map(t => `${T(t)}: ${T(e[t])}`).join(", ") + " }"
                        }
                }
                return "[ COULD NOT SERIALIZE ]"
            }

            function P(e, t, n, r) {
                ! function(e, t, n, r) {
                    if (!e) throw function(e, t, n) {
                        let r; {
                            let r = [];
                            if (n) {
                                if ("message" in n || "code" in n || "name" in n) throw Error(`value will overwrite populated values: ${T(n)}`);
                                for (let e in n) {
                                    let t = n[e];
                                    r.push(e + "=" + T(t))
                                }
                            }
                            r.push(`code=${t}`), r.push("version=6.7.1"), r.length && (e += " (" + r.join(", ") + ")")
                        }
                        switch (t) {
                            case "INVALID_ARGUMENT":
                                r = TypeError(e);
                                break;
                            case "NUMERIC_FAULT":
                            case "BUFFER_OVERRUN":
                                r = RangeError(e);
                                break;
                            default:
                                r = Error(e)
                        }
                        return ! function(e, t, n) {
                            for (let r in t) {
                                let i = t[r],
                                    o = n ? n[r] : null;
                                o && function(e, t, n) {
                                    let r = t.split("|").map(e => e.trim());
                                    for (let n = 0; n < r.length; n++) switch (t) {
                                        case "any":
                                            return;
                                        case "bigint":
                                        case "boolean":
                                        case "number":
                                        case "string":
                                            if (typeof e === t) return
                                    }
                                    let i = Error(`invalid value for type ${t}`);
                                    throw i.code = "INVALID_ARGUMENT", i.argument = `value.${n}`, i.value = e, i
                                }(i, o, r), Object.defineProperty(e, r, {
                                    enumerable: !0,
                                    value: i,
                                    writable: !1
                                })
                            }
                        }(r, {
                            code: t
                        }), n && Object.assign(r, n), r
                    }(t, n, r)
                }(e, t, "INVALID_ARGUMENT", {
                    argument: n,
                    value: r
                })
            }

            function j(e, t) {
                return function(e, t, n) {
                    if (e instanceof Uint8Array) return n ? new Uint8Array(e) : e;
                    if ("string" == typeof e && e.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
                        let t = new Uint8Array((e.length - 2) / 2),
                            n = 2;
                        for (let r = 0; r < t.length; r++) t[r] = parseInt(e.substring(n, n + 2), 16), n += 2;
                        return t
                    }
                    P(!1, "invalid BytesLike value", t || "value", e)
                }(e, t, !1)
            }
            C(31, 168, 16), C(31, 136, 32), ["NFD", "NFC", "NFKD", "NFKC"].reduce((e, t) => {
                try {
                    if ("test" !== "test".normalize(t)) throw Error("bad");
                    if ("NFD" === t) {
                        let e = String.fromCharCode(233).normalize("NFD"),
                            t = String.fromCharCode(101, 769);
                        if (e !== t) throw Error("broken")
                    }
                    e.push(t)
                } catch (e) {}
                return e
            }, []);
            let B = "0123456789abcdef",
                I = !1,
                L = function(e) {
                    return M(e)
                },
                F = L;

            function R(e) {
                let t = j(e, "data");
                return function(e) {
                    let t = j(e),
                        n = "0x";
                    for (let e = 0; e < t.length; e++) {
                        let r = t[e];
                        n += B[(240 & r) >> 4] + B[15 & r]
                    }
                    return n
                }(F(t))
            }
            R._ = L, R.lock = function() {
                I = !0
            }, R.register = function(e) {
                if (I) throw TypeError("keccak256 is locked");
                F = e
            }, Object.freeze(R);
            let U = BigInt(0),
                D = BigInt(36);

            function z(e) {
                e = e.toLowerCase();
                let t = e.substring(2).split(""),
                    n = new Uint8Array(40);
                for (let e = 0; e < 40; e++) n[e] = t[e].charCodeAt(0);
                let r = j(R(n));
                for (let e = 0; e < 40; e += 2) r[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()), (15 & r[e >> 1]) >= 8 && (t[e + 1] = t[e + 1].toUpperCase());
                return "0x" + t.join("")
            }
            let $ = {};
            for (let e = 0; e < 10; e++) $[String(e)] = String(e);
            for (let e = 0; e < 26; e++) $[String.fromCharCode(65 + e)] = String(10 + e);
            let H = function() {
                let e = {};
                for (let t = 0; t < 36; t++) {
                    let n = "0123456789abcdefghijklmnopqrstuvwxyz" [t];
                    e[n] = BigInt(t)
                }
                return e
            }();

            function q(e) {
                if (P("string" == typeof e, "invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
                    e.startsWith("0x") || (e = "0x" + e);
                    let t = z(e);
                    return P(!e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === e, "bad address checksum", "address", e), t
                }
                if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    P(e.substring(2, 4) === function(e) {
                        let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => $[e]).join("");
                        for (; t.length >= 15;) {
                            let e = t.substring(0, 15);
                            t = parseInt(e, 10) % 97 + t.substring(e.length)
                        }
                        let n = String(98 - parseInt(t, 10) % 97);
                        for (; n.length < 2;) n = "0" + n;
                        return n
                    }(e), "bad icap checksum", "address", e);
                    let t = (function(e) {
                        e = e.toLowerCase();
                        let t = U;
                        for (let n = 0; n < e.length; n++) t = t * D + H[e[n]];
                        return t
                    })(e.substring(4)).toString(16);
                    for (; t.length < 40;) t = "0" + t;
                    return z("0x" + t)
                }
                P(!1, "invalid address", "address", e)
            }
        },
        94108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                af: function() {
                    return l
                },
                ak: function() {
                    return c
                },
                am: function() {
                    return f
                },
                an: function() {
                    return d
                },
                ar: function() {
                    return h
                },
                ars: function() {
                    return p
                },
                as: function() {
                    return g
                },
                asa: function() {
                    return m
                },
                ast: function() {
                    return b
                },
                az: function() {
                    return w
                },
                bal: function() {
                    return v
                },
                be: function() {
                    return y
                },
                bem: function() {
                    return x
                },
                bez: function() {
                    return S
                },
                bg: function() {
                    return E
                },
                bho: function() {
                    return _
                },
                bm: function() {
                    return N
                },
                bn: function() {
                    return O
                },
                bo: function() {
                    return A
                },
                br: function() {
                    return k
                },
                brx: function() {
                    return M
                },
                bs: function() {
                    return C
                },
                ca: function() {
                    return T
                },
                ce: function() {
                    return P
                },
                ceb: function() {
                    return j
                },
                cgg: function() {
                    return B
                },
                chr: function() {
                    return I
                },
                ckb: function() {
                    return L
                },
                cs: function() {
                    return F
                },
                cy: function() {
                    return R
                },
                da: function() {
                    return U
                },
                de: function() {
                    return D
                },
                doi: function() {
                    return z
                },
                dsb: function() {
                    return $
                },
                dv: function() {
                    return H
                },
                dz: function() {
                    return q
                },
                ee: function() {
                    return V
                },
                el: function() {
                    return K
                },
                en: function() {
                    return Z
                },
                eo: function() {
                    return Y
                },
                es: function() {
                    return W
                },
                et: function() {
                    return J
                },
                eu: function() {
                    return G
                },
                fa: function() {
                    return X
                },
                ff: function() {
                    return Q
                },
                fi: function() {
                    return ee
                },
                fil: function() {
                    return et
                },
                fo: function() {
                    return en
                },
                fr: function() {
                    return er
                },
                fur: function() {
                    return ei
                },
                fy: function() {
                    return eo
                },
                ga: function() {
                    return eu
                },
                gd: function() {
                    return ea
                },
                gl: function() {
                    return es
                },
                gsw: function() {
                    return el
                },
                gu: function() {
                    return ec
                },
                guw: function() {
                    return ef
                },
                gv: function() {
                    return ed
                },
                ha: function() {
                    return eh
                },
                haw: function() {
                    return ep
                },
                he: function() {
                    return eg
                },
                hi: function() {
                    return em
                },
                hnj: function() {
                    return eb
                },
                hr: function() {
                    return ew
                },
                hsb: function() {
                    return ev
                },
                hu: function() {
                    return ey
                },
                hy: function() {
                    return ex
                },
                ia: function() {
                    return eS
                },
                id: function() {
                    return eE
                },
                ig: function() {
                    return e_
                },
                ii: function() {
                    return eN
                },
                io: function() {
                    return eO
                },
                is: function() {
                    return eA
                },
                it: function() {
                    return ek
                },
                iu: function() {
                    return eM
                },
                ja: function() {
                    return eC
                },
                jbo: function() {
                    return eT
                },
                jgo: function() {
                    return eP
                },
                jmc: function() {
                    return ej
                },
                jv: function() {
                    return eB
                },
                jw: function() {
                    return eI
                },
                ka: function() {
                    return eL
                },
                kab: function() {
                    return eF
                },
                kaj: function() {
                    return eR
                },
                kcg: function() {
                    return eU
                },
                kde: function() {
                    return eD
                },
                kea: function() {
                    return ez
                },
                kk: function() {
                    return e$
                },
                kkj: function() {
                    return eH
                },
                kl: function() {
                    return eq
                },
                km: function() {
                    return eV
                },
                kn: function() {
                    return eK
                },
                ko: function() {
                    return eZ
                },
                ks: function() {
                    return eY
                },
                ksb: function() {
                    return eW
                },
                ksh: function() {
                    return eJ
                },
                ku: function() {
                    return eG
                },
                kw: function() {
                    return eX
                },
                ky: function() {
                    return eQ
                },
                lag: function() {
                    return e0
                },
                lb: function() {
                    return e1
                },
                lg: function() {
                    return e2
                },
                lij: function() {
                    return e4
                },
                lkt: function() {
                    return e6
                },
                ln: function() {
                    return e3
                },
                lo: function() {
                    return e8
                },
                lt: function() {
                    return e9
                },
                lv: function() {
                    return e5
                },
                mas: function() {
                    return e7
                },
                mg: function() {
                    return te
                },
                mgo: function() {
                    return tt
                },
                mk: function() {
                    return tn
                },
                ml: function() {
                    return tr
                },
                mn: function() {
                    return ti
                },
                mo: function() {
                    return to
                },
                mr: function() {
                    return tu
                },
                ms: function() {
                    return ta
                },
                mt: function() {
                    return ts
                },
                my: function() {
                    return tl
                },
                nah: function() {
                    return tc
                },
                naq: function() {
                    return tf
                },
                nb: function() {
                    return td
                },
                nd: function() {
                    return th
                },
                ne: function() {
                    return tp
                },
                nl: function() {
                    return tg
                },
                nn: function() {
                    return tm
                },
                nnh: function() {
                    return tb
                },
                no: function() {
                    return tw
                },
                nqo: function() {
                    return tv
                },
                nr: function() {
                    return ty
                },
                nso: function() {
                    return tx
                },
                ny: function() {
                    return tS
                },
                nyn: function() {
                    return tE
                },
                om: function() {
                    return t_
                },
                or: function() {
                    return tN
                },
                os: function() {
                    return tO
                },
                osa: function() {
                    return tA
                },
                pa: function() {
                    return tk
                },
                pap: function() {
                    return tM
                },
                pcm: function() {
                    return tC
                },
                pl: function() {
                    return tT
                },
                prg: function() {
                    return tP
                },
                ps: function() {
                    return tj
                },
                pt: function() {
                    return tB
                },
                pt_PT: function() {
                    return tI
                },
                rm: function() {
                    return tL
                },
                ro: function() {
                    return tF
                },
                rof: function() {
                    return tR
                },
                ru: function() {
                    return tU
                },
                rwk: function() {
                    return tD
                },
                sah: function() {
                    return tz
                },
                saq: function() {
                    return t$
                },
                sat: function() {
                    return tH
                },
                sc: function() {
                    return tq
                },
                scn: function() {
                    return tV
                },
                sd: function() {
                    return tK
                },
                sdh: function() {
                    return tZ
                },
                se: function() {
                    return tY
                },
                seh: function() {
                    return tW
                },
                ses: function() {
                    return tJ
                },
                sg: function() {
                    return tG
                },
                sh: function() {
                    return tX
                },
                shi: function() {
                    return tQ
                },
                si: function() {
                    return t0
                },
                sk: function() {
                    return t1
                },
                sl: function() {
                    return t2
                },
                sma: function() {
                    return t4
                },
                smi: function() {
                    return t6
                },
                smj: function() {
                    return t3
                },
                smn: function() {
                    return t8
                },
                sms: function() {
                    return t9
                },
                sn: function() {
                    return t5
                },
                so: function() {
                    return t7
                },
                sq: function() {
                    return ne
                },
                sr: function() {
                    return nt
                },
                ss: function() {
                    return nn
                },
                ssy: function() {
                    return nr
                },
                st: function() {
                    return ni
                },
                su: function() {
                    return no
                },
                sv: function() {
                    return nu
                },
                sw: function() {
                    return na
                },
                syr: function() {
                    return ns
                },
                ta: function() {
                    return nl
                },
                te: function() {
                    return nc
                },
                teo: function() {
                    return nf
                },
                th: function() {
                    return nd
                },
                ti: function() {
                    return nh
                },
                tig: function() {
                    return np
                },
                tk: function() {
                    return ng
                },
                tl: function() {
                    return nm
                },
                tn: function() {
                    return nb
                },
                to: function() {
                    return nw
                },
                tpi: function() {
                    return nv
                },
                tr: function() {
                    return ny
                },
                ts: function() {
                    return nx
                },
                tzm: function() {
                    return nS
                },
                ug: function() {
                    return nE
                },
                uk: function() {
                    return n_
                },
                und: function() {
                    return nN
                },
                ur: function() {
                    return nO
                },
                uz: function() {
                    return nA
                },
                ve: function() {
                    return nk
                },
                vec: function() {
                    return nM
                },
                vi: function() {
                    return nC
                },
                vo: function() {
                    return nT
                },
                vun: function() {
                    return nP
                },
                wa: function() {
                    return nj
                },
                wae: function() {
                    return nB
                },
                wo: function() {
                    return nI
                },
                xh: function() {
                    return nL
                },
                xog: function() {
                    return nF
                },
                yi: function() {
                    return nR
                },
                yo: function() {
                    return nU
                },
                yue: function() {
                    return nD
                },
                zh: function() {
                    return nz
                },
                zu: function() {
                    return n$
                }
            });
            let r = (e, t) => t ? "other" : 1 == e ? "one" : "other",
                i = (e, t) => t ? "other" : 0 == e || 1 == e ? "one" : "other",
                o = (e, t) => t ? "other" : e >= 0 && e <= 1 ? "one" : "other",
                u = (e, t) => {
                    let n = String(e).split("."),
                        r = !n[1];
                    return t ? "other" : 1 == e && r ? "one" : "other"
                },
                a = (e, t) => "other",
                s = (e, t) => t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other",
                l = r,
                c = i,
                f = o,
                d = r,
                h = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-2);
                    return t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : i >= 3 && i <= 10 ? "few" : i >= 11 && i <= 99 ? "many" : "other"
                },
                p = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-2);
                    return t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : i >= 3 && i <= 10 ? "few" : i >= 11 && i <= 99 ? "many" : "other"
                },
                g = (e, t) => t ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other",
                m = r,
                b = u,
                w = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = r.slice(-1),
                        o = r.slice(-2),
                        u = r.slice(-3);
                    return t ? 1 == i || 2 == i || 5 == i || 7 == i || 8 == i || 20 == o || 50 == o || 70 == o || 80 == o ? "one" : 3 == i || 4 == i || 100 == u || 200 == u || 300 == u || 400 == u || 500 == u || 600 == u || 700 == u || 800 == u || 900 == u ? "few" : 0 == r || 6 == i || 40 == o || 60 == o || 90 == o ? "many" : "other" : 1 == e ? "one" : "other"
                },
                v = (e, t) => 1 == e ? "one" : "other",
                y = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-1),
                        o = r && n[0].slice(-2);
                    return t ? (2 == i || 3 == i) && 12 != o && 13 != o ? "few" : "other" : 1 == i && 11 != o ? "one" : i >= 2 && i <= 4 && (o < 12 || o > 14) ? "few" : r && 0 == i || i >= 5 && i <= 9 || o >= 11 && o <= 14 ? "many" : "other"
                },
                x = r,
                S = r,
                E = r,
                _ = i,
                N = a,
                O = (e, t) => t ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other",
                A = a,
                k = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-1),
                        o = r && n[0].slice(-2),
                        u = r && n[0].slice(-6);
                    return t ? "other" : 1 == i && 11 != o && 71 != o && 91 != o ? "one" : 2 == i && 12 != o && 72 != o && 92 != o ? "two" : (3 == i || 4 == i || 9 == i) && (o < 10 || o > 19) && (o < 70 || o > 79) && (o < 90 || o > 99) ? "few" : 0 != e && r && 0 == u ? "many" : "other"
                },
                M = r,
                C = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-1),
                        a = r.slice(-2),
                        s = i.slice(-1),
                        l = i.slice(-2);
                    return t ? "other" : o && 1 == u && 11 != a || 1 == s && 11 != l ? "one" : o && u >= 2 && u <= 4 && (a < 12 || a > 14) || s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : "other"
                },
                T = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-6);
                    return t ? 1 == e || 3 == e ? "one" : 2 == e ? "two" : 4 == e ? "few" : "other" : 1 == e && i ? "one" : 0 != r && 0 == o && i ? "many" : "other"
                },
                P = r,
                j = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-1),
                        a = i.slice(-1);
                    return t ? "other" : o && (1 == r || 2 == r || 3 == r) || o && 4 != u && 6 != u && 9 != u || !o && 4 != a && 6 != a && 9 != a ? "one" : "other"
                },
                B = r,
                I = r,
                L = r,
                F = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1];
                    return t ? "other" : 1 == e && i ? "one" : r >= 2 && r <= 4 && i ? "few" : i ? "other" : "many"
                },
                R = (e, t) => t ? 0 == e || 7 == e || 8 == e || 9 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : 3 == e || 4 == e ? "few" : 5 == e || 6 == e ? "many" : "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : 3 == e ? "few" : 6 == e ? "many" : "other",
                U = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = Number(n[0]) == e;
                    return t ? "other" : 1 != e && (i || 0 != r && 1 != r) ? "other" : "one"
                },
                D = u,
                z = o,
                $ = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-2),
                        a = i.slice(-2);
                    return t ? "other" : o && 1 == u || 1 == a ? "one" : o && 2 == u || 2 == a ? "two" : o && (3 == u || 4 == u) || 3 == a || 4 == a ? "few" : "other"
                },
                H = r,
                q = a,
                V = r,
                K = r,
                Z = (e, t) => {
                    let n = String(e).split("."),
                        r = !n[1],
                        i = Number(n[0]) == e,
                        o = i && n[0].slice(-1),
                        u = i && n[0].slice(-2);
                    return t ? 1 == o && 11 != u ? "one" : 2 == o && 12 != u ? "two" : 3 == o && 13 != u ? "few" : "other" : 1 == e && r ? "one" : "other"
                },
                Y = r,
                W = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-6);
                    return t ? "other" : 1 == e ? "one" : 0 != r && 0 == o && i ? "many" : "other"
                },
                J = u,
                G = r,
                X = o,
                Q = (e, t) => t ? "other" : e >= 0 && e < 2 ? "one" : "other",
                ee = u,
                et = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-1),
                        a = i.slice(-1);
                    return t ? 1 == e ? "one" : "other" : o && (1 == r || 2 == r || 3 == r) || o && 4 != u && 6 != u && 9 != u || !o && 4 != a && 6 != a && 9 != a ? "one" : "other"
                },
                en = r,
                er = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-6);
                    return t ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 != r && 0 == o && i ? "many" : "other"
                },
                ei = r,
                eo = u,
                eu = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e;
                    return t ? 1 == e ? "one" : "other" : 1 == e ? "one" : 2 == e ? "two" : r && e >= 3 && e <= 6 ? "few" : r && e >= 7 && e <= 10 ? "many" : "other"
                },
                ea = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e;
                    return t ? 1 == e || 11 == e ? "one" : 2 == e || 12 == e ? "two" : 3 == e || 13 == e ? "few" : "other" : 1 == e || 11 == e ? "one" : 2 == e || 12 == e ? "two" : r && e >= 3 && e <= 10 || r && e >= 13 && e <= 19 ? "few" : "other"
                },
                es = u,
                el = r,
                ec = (e, t) => t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other",
                ef = i,
                ed = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-1),
                        u = r.slice(-2);
                    return t ? "other" : i && 1 == o ? "one" : i && 2 == o ? "two" : i && (0 == u || 20 == u || 40 == u || 60 == u || 80 == u) ? "few" : i ? "other" : "many"
                },
                eh = r,
                ep = r,
                eg = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1];
                    return t ? "other" : 1 == r && i || 0 == r && !i ? "one" : 2 == r && i ? "two" : "other"
                },
                em = (e, t) => t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other",
                eb = a,
                ew = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-1),
                        a = r.slice(-2),
                        s = i.slice(-1),
                        l = i.slice(-2);
                    return t ? "other" : o && 1 == u && 11 != a || 1 == s && 11 != l ? "one" : o && u >= 2 && u <= 4 && (a < 12 || a > 14) || s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : "other"
                },
                ev = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-2),
                        a = i.slice(-2);
                    return t ? "other" : o && 1 == u || 1 == a ? "one" : o && 2 == u || 2 == a ? "two" : o && (3 == u || 4 == u) || 3 == a || 4 == a ? "few" : "other"
                },
                ey = (e, t) => t ? 1 == e || 5 == e ? "one" : "other" : 1 == e ? "one" : "other",
                ex = (e, t) => t ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : "other",
                eS = u,
                eE = a,
                e_ = a,
                eN = a,
                eO = u,
                eA = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = (n[1] || "").replace(/0+$/, ""),
                        o = Number(n[0]) == e,
                        u = r.slice(-1),
                        a = r.slice(-2);
                    return t ? "other" : o && 1 == u && 11 != a || i % 10 == 1 && i % 100 != 11 ? "one" : "other"
                },
                ek = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-6);
                    return t ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && i ? "one" : 0 != r && 0 == o && i ? "many" : "other"
                },
                eM = s,
                eC = a,
                eT = a,
                eP = r,
                ej = r,
                eB = a,
                eI = a,
                eL = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = r.slice(-2);
                    return t ? 1 == r ? "one" : 0 == r || i >= 2 && i <= 20 || 40 == i || 60 == i || 80 == i ? "many" : "other" : 1 == e ? "one" : "other"
                },
                eF = (e, t) => t ? "other" : e >= 0 && e < 2 ? "one" : "other",
                eR = r,
                eU = r,
                eD = a,
                ez = a,
                e$ = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-1);
                    return t ? 6 == i || 9 == i || r && 0 == i && 0 != e ? "many" : "other" : 1 == e ? "one" : "other"
                },
                eH = r,
                eq = r,
                eV = a,
                eK = o,
                eZ = a,
                eY = r,
                eW = r,
                eJ = (e, t) => t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : "other",
                eG = r,
                eX = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-2),
                        o = r && n[0].slice(-3),
                        u = r && n[0].slice(-5),
                        a = r && n[0].slice(-6);
                    return t ? r && e >= 1 && e <= 4 || i >= 1 && i <= 4 || i >= 21 && i <= 24 || i >= 41 && i <= 44 || i >= 61 && i <= 64 || i >= 81 && i <= 84 ? "one" : 5 == e || 5 == i ? "many" : "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == i || 22 == i || 42 == i || 62 == i || 82 == i || r && 0 == o && (u >= 1e3 && u <= 2e4 || 4e4 == u || 6e4 == u || 8e4 == u) || 0 != e && 1e5 == a ? "two" : 3 == i || 23 == i || 43 == i || 63 == i || 83 == i ? "few" : 1 != e && (1 == i || 21 == i || 41 == i || 61 == i || 81 == i) ? "many" : "other"
                },
                eQ = r,
                e0 = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0];
                    return t ? "other" : 0 == e ? "zero" : (0 == r || 1 == r) && 0 != e ? "one" : "other"
                },
                e1 = r,
                e2 = r,
                e4 = (e, t) => {
                    let n = String(e).split("."),
                        r = !n[1],
                        i = Number(n[0]) == e;
                    return t ? 11 == e || 8 == e || i && e >= 80 && e <= 89 || i && e >= 800 && e <= 899 ? "many" : "other" : 1 == e && r ? "one" : "other"
                },
                e6 = a,
                e3 = i,
                e8 = (e, t) => t && 1 == e ? "one" : "other",
                e9 = (e, t) => {
                    let n = String(e).split("."),
                        r = n[1] || "",
                        i = Number(n[0]) == e,
                        o = i && n[0].slice(-1),
                        u = i && n[0].slice(-2);
                    return t ? "other" : 1 == o && (u < 11 || u > 19) ? "one" : o >= 2 && o <= 9 && (u < 11 || u > 19) ? "few" : 0 != r ? "many" : "other"
                },
                e5 = (e, t) => {
                    let n = String(e).split("."),
                        r = n[1] || "",
                        i = r.length,
                        o = Number(n[0]) == e,
                        u = o && n[0].slice(-1),
                        a = o && n[0].slice(-2),
                        s = r.slice(-2),
                        l = r.slice(-1);
                    return t ? "other" : o && 0 == u || a >= 11 && a <= 19 || 2 == i && s >= 11 && s <= 19 ? "zero" : 1 == u && 11 != a || 2 == i && 1 == l && 11 != s || 2 != i && 1 == l ? "one" : "other"
                },
                e7 = r,
                te = i,
                tt = r,
                tn = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-1),
                        a = r.slice(-2),
                        s = i.slice(-1),
                        l = i.slice(-2);
                    return t ? 1 == u && 11 != a ? "one" : 2 == u && 12 != a ? "two" : (7 == u || 8 == u) && 17 != a && 18 != a ? "many" : "other" : o && 1 == u && 11 != a || 1 == s && 11 != l ? "one" : "other"
                },
                tr = r,
                ti = r,
                to = (e, t) => {
                    let n = String(e).split("."),
                        r = !n[1],
                        i = Number(n[0]) == e,
                        o = i && n[0].slice(-2);
                    return t ? 1 == e ? "one" : "other" : 1 == e && r ? "one" : !r || 0 == e || 1 != e && o >= 1 && o <= 19 ? "few" : "other"
                },
                tu = (e, t) => t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : "other" : 1 == e ? "one" : "other",
                ta = (e, t) => t && 1 == e ? "one" : "other",
                ts = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-2);
                    return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : 0 == e || i >= 3 && i <= 10 ? "few" : i >= 11 && i <= 19 ? "many" : "other"
                },
                tl = a,
                tc = r,
                tf = s,
                td = r,
                th = r,
                tp = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e;
                    return t ? r && e >= 1 && e <= 4 ? "one" : "other" : 1 == e ? "one" : "other"
                },
                tg = u,
                tm = r,
                tb = r,
                tw = r,
                tv = a,
                ty = r,
                tx = i,
                tS = r,
                tE = r,
                t_ = r,
                tN = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e;
                    return t ? 1 == e || 5 == e || r && e >= 7 && e <= 9 ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : 1 == e ? "one" : "other"
                },
                tO = r,
                tA = a,
                tk = i,
                tM = r,
                tC = o,
                tT = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-1),
                        u = r.slice(-2);
                    return t ? "other" : 1 == e && i ? "one" : i && o >= 2 && o <= 4 && (u < 12 || u > 14) ? "few" : i && 1 != r && (0 == o || 1 == o) || i && o >= 5 && o <= 9 || i && u >= 12 && u <= 14 ? "many" : "other"
                },
                tP = (e, t) => {
                    let n = String(e).split("."),
                        r = n[1] || "",
                        i = r.length,
                        o = Number(n[0]) == e,
                        u = o && n[0].slice(-1),
                        a = o && n[0].slice(-2),
                        s = r.slice(-2),
                        l = r.slice(-1);
                    return t ? "other" : o && 0 == u || a >= 11 && a <= 19 || 2 == i && s >= 11 && s <= 19 ? "zero" : 1 == u && 11 != a || 2 == i && 1 == l && 11 != s || 2 != i && 1 == l ? "one" : "other"
                },
                tj = r,
                tB = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-6);
                    return t ? "other" : 0 == r || 1 == r ? "one" : 0 != r && 0 == o && i ? "many" : "other"
                },
                tI = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-6);
                    return t ? "other" : 1 == e && i ? "one" : 0 != r && 0 == o && i ? "many" : "other"
                },
                tL = r,
                tF = (e, t) => {
                    let n = String(e).split("."),
                        r = !n[1],
                        i = Number(n[0]) == e,
                        o = i && n[0].slice(-2);
                    return t ? 1 == e ? "one" : "other" : 1 == e && r ? "one" : !r || 0 == e || 1 != e && o >= 1 && o <= 19 ? "few" : "other"
                },
                tR = r,
                tU = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-1),
                        u = r.slice(-2);
                    return t ? "other" : i && 1 == o && 11 != u ? "one" : i && o >= 2 && o <= 4 && (u < 12 || u > 14) ? "few" : i && 0 == o || i && o >= 5 && o <= 9 || i && u >= 11 && u <= 14 ? "many" : "other"
                },
                tD = r,
                tz = a,
                t$ = r,
                tH = s,
                tq = (e, t) => {
                    let n = String(e).split("."),
                        r = !n[1];
                    return t ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && r ? "one" : "other"
                },
                tV = (e, t) => {
                    let n = String(e).split("."),
                        r = !n[1];
                    return t ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && r ? "one" : "other"
                },
                tK = r,
                tZ = r,
                tY = s,
                tW = r,
                tJ = a,
                tG = a,
                tX = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-1),
                        a = r.slice(-2),
                        s = i.slice(-1),
                        l = i.slice(-2);
                    return t ? "other" : o && 1 == u && 11 != a || 1 == s && 11 != l ? "one" : o && u >= 2 && u <= 4 && (a < 12 || a > 14) || s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : "other"
                },
                tQ = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e;
                    return t ? "other" : e >= 0 && e <= 1 ? "one" : r && e >= 2 && e <= 10 ? "few" : "other"
                },
                t0 = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "";
                    return t ? "other" : 0 == e || 1 == e || 0 == r && 1 == i ? "one" : "other"
                },
                t1 = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1];
                    return t ? "other" : 1 == e && i ? "one" : r >= 2 && r <= 4 && i ? "few" : i ? "other" : "many"
                },
                t2 = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-2);
                    return t ? "other" : i && 1 == o ? "one" : i && 2 == o ? "two" : i && (3 == o || 4 == o) || !i ? "few" : "other"
                },
                t4 = s,
                t6 = s,
                t3 = s,
                t8 = s,
                t9 = s,
                t5 = r,
                t7 = r,
                ne = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-1),
                        o = r && n[0].slice(-2);
                    return t ? 1 == e ? "one" : 4 == i && 14 != o ? "many" : "other" : 1 == e ? "one" : "other"
                },
                nt = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-1),
                        a = r.slice(-2),
                        s = i.slice(-1),
                        l = i.slice(-2);
                    return t ? "other" : o && 1 == u && 11 != a || 1 == s && 11 != l ? "one" : o && u >= 2 && u <= 4 && (a < 12 || a > 14) || s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : "other"
                },
                nn = r,
                nr = r,
                ni = r,
                no = a,
                nu = (e, t) => {
                    let n = String(e).split("."),
                        r = !n[1],
                        i = Number(n[0]) == e,
                        o = i && n[0].slice(-1),
                        u = i && n[0].slice(-2);
                    return t ? (1 == o || 2 == o) && 11 != u && 12 != u ? "one" : "other" : 1 == e && r ? "one" : "other"
                },
                na = u,
                ns = r,
                nl = r,
                nc = r,
                nf = r,
                nd = a,
                nh = i,
                np = r,
                ng = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e,
                        i = r && n[0].slice(-1);
                    return t ? 6 == i || 9 == i || 10 == e ? "few" : "other" : 1 == e ? "one" : "other"
                },
                nm = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = n[1] || "",
                        o = !n[1],
                        u = r.slice(-1),
                        a = i.slice(-1);
                    return t ? 1 == e ? "one" : "other" : o && (1 == r || 2 == r || 3 == r) || o && 4 != u && 6 != u && 9 != u || !o && 4 != a && 6 != a && 9 != a ? "one" : "other"
                },
                nb = r,
                nw = a,
                nv = a,
                ny = r,
                nx = r,
                nS = (e, t) => {
                    let n = String(e).split("."),
                        r = Number(n[0]) == e;
                    return t ? "other" : 0 == e || 1 == e || r && e >= 11 && e <= 99 ? "one" : "other"
                },
                nE = r,
                n_ = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = Number(n[0]) == e,
                        u = o && n[0].slice(-1),
                        a = o && n[0].slice(-2),
                        s = r.slice(-1),
                        l = r.slice(-2);
                    return t ? 3 == u && 13 != a ? "few" : "other" : i && 1 == s && 11 != l ? "one" : i && s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : i && 0 == s || i && s >= 5 && s <= 9 || i && l >= 11 && l <= 14 ? "many" : "other"
                },
                nN = a,
                nO = u,
                nA = r,
                nk = r,
                nM = (e, t) => {
                    let n = String(e).split("."),
                        r = n[0],
                        i = !n[1],
                        o = r.slice(-6);
                    return t ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && i ? "one" : 0 != r && 0 == o && i ? "many" : "other"
                },
                nC = (e, t) => t && 1 == e ? "one" : "other",
                nT = r,
                nP = r,
                nj = i,
                nB = r,
                nI = a,
                nL = r,
                nF = r,
                nR = u,
                nU = a,
                nD = a,
                nz = a,
                n$ = o
        }
    }
]);
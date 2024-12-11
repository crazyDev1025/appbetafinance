(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2021], {
        43443: function(t, e) {
            "use strict";
            let r;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    DOMAttributeNames: function() {
                        return n
                    },
                    isEqualNode: function() {
                        return o
                    },
                    default: function() {
                        return s
                    }
                });
            let n = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function i(t) {
                let {
                    type: e,
                    props: r
                } = t, i = document.createElement(e);
                for (let t in r) {
                    if (!r.hasOwnProperty(t) || "children" === t || "dangerouslySetInnerHTML" === t || void 0 === r[t]) continue;
                    let o = n[t] || t.toLowerCase();
                    "script" === e && ("async" === o || "defer" === o || "noModule" === o) ? i[o] = !!r[t] : i.setAttribute(o, r[t])
                }
                let {
                    children: o,
                    dangerouslySetInnerHTML: s
                } = r;
                return s ? i.innerHTML = s.__html || "" : o && (i.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), i
            }

            function o(t, e) {
                if (t instanceof HTMLElement && e instanceof HTMLElement) {
                    let r = e.getAttribute("nonce");
                    if (r && !t.getAttribute("nonce")) {
                        let n = e.cloneNode(!0);
                        return n.setAttribute("nonce", ""), n.nonce = r, r === t.nonce && t.isEqualNode(n)
                    }
                }
                return t.isEqualNode(e)
            }

            function s() {
                return {
                    mountedInstances: new Set,
                    updateHead: t => {
                        let e = {};
                        t.forEach(t => {
                            if ("link" === t.type && t.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + t.props["data-href"] + '"]')) return;
                                t.props.href = t.props["data-href"], t.props["data-href"] = void 0
                            }
                            let r = e[t.type] || [];
                            r.push(t), e[t.type] = r
                        });
                        let n = e.title ? e.title[0] : null,
                            i = "";
                        if (n) {
                            let {
                                children: t
                            } = n.props;
                            i = "string" == typeof t ? t : Array.isArray(t) ? t.join("") : ""
                        }
                        i !== document.title && (document.title = i), ["meta", "base", "link", "style", "script"].forEach(t => {
                            r(t, e[t] || [])
                        })
                    }
                }
            }
            r = (t, e) => {
                let r = document.getElementsByTagName("head")[0],
                    n = r.querySelector("meta[name=next-head-count]"),
                    s = Number(n.content),
                    a = [];
                for (let e = 0, r = n.previousElementSibling; e < s; e++, r = (null == r ? void 0 : r.previousElementSibling) || null) {
                    var u;
                    (null == r ? void 0 : null == (u = r.tagName) ? void 0 : u.toLowerCase()) === t && a.push(r)
                }
                let c = e.map(i).filter(t => {
                    for (let e = 0, r = a.length; e < r; e++) {
                        let r = a[e];
                        if (o(r, t)) return a.splice(e, 1), !1
                    }
                    return !0
                });
                a.forEach(t => {
                    var e;
                    return null == (e = t.parentNode) ? void 0 : e.removeChild(t)
                }), c.forEach(t => r.insertBefore(t, n)), n.content = (s - a.length + c.length).toString()
            }, ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        64913: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    requestIdleCallback: function() {
                        return r
                    },
                    cancelIdleCallback: function() {
                        return n
                    }
                });
            let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
                    let e = Date.now();
                    return self.setTimeout(function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
                    return clearTimeout(t)
                };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        24244: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    handleClientScriptLoad: function() {
                        return y
                    },
                    initScriptLoader: function() {
                        return b
                    },
                    default: function() {
                        return m
                    }
                });
            let n = r(87675),
                i = r(28169),
                o = n._(r(54887)),
                s = i._(r(2265)),
                a = r(43305),
                u = r(43443),
                c = r(64913),
                l = new Map,
                h = new Set,
                f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                d = t => {
                    if (o.default.preinit) {
                        t.forEach(t => {
                            o.default.preinit(t, {
                                as: "style"
                            })
                        });
                        return
                    } {
                        let e = document.head;
                        t.forEach(t => {
                            let r = document.createElement("link");
                            r.type = "text/css", r.rel = "stylesheet", r.href = t, e.appendChild(r)
                        })
                    }
                },
                p = t => {
                    let {
                        src: e,
                        id: r,
                        onLoad: n = () => {},
                        onReady: i = null,
                        dangerouslySetInnerHTML: o,
                        children: s = "",
                        strategy: a = "afterInteractive",
                        onError: c,
                        stylesheets: p
                    } = t, y = r || e;
                    if (y && h.has(y)) return;
                    if (l.has(e)) {
                        h.add(y), l.get(e).then(n, c);
                        return
                    }
                    let b = () => {
                            i && i(), h.add(y)
                        },
                        D = document.createElement("script"),
                        m = new Promise((t, e) => {
                            D.addEventListener("load", function(e) {
                                t(), n && n.call(this, e), b()
                            }), D.addEventListener("error", function(t) {
                                e(t)
                            })
                        }).catch(function(t) {
                            c && c(t)
                        });
                    for (let [r, n] of (o ? (D.innerHTML = o.__html || "", b()) : s ? (D.textContent = "string" == typeof s ? s : Array.isArray(s) ? s.join("") : "", b()) : e && (D.src = e, l.set(e, m)), Object.entries(t))) {
                        if (void 0 === n || f.includes(r)) continue;
                        let t = u.DOMAttributeNames[r] || r.toLowerCase();
                        D.setAttribute(t, n)
                    }
                    "worker" === a && D.setAttribute("type", "text/partytown"), D.setAttribute("data-nscript", a), p && d(p), document.body.appendChild(D)
                };

            function y(t) {
                let {
                    strategy: e = "afterInteractive"
                } = t;
                "lazyOnload" === e ? window.addEventListener("load", () => {
                    (0, c.requestIdleCallback)(() => p(t))
                }) : p(t)
            }

            function b(t) {
                t.forEach(y),
                    function() {
                        let t = [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')];
                        t.forEach(t => {
                            let e = t.id || t.getAttribute("src");
                            h.add(e)
                        })
                    }()
            }

            function D(t) {
                let {
                    id: e,
                    src: r = "",
                    onLoad: n = () => {},
                    onReady: i = null,
                    strategy: u = "afterInteractive",
                    onError: l,
                    stylesheets: f,
                    ...d
                } = t, {
                    updateScripts: y,
                    scripts: b,
                    getIsSsr: D,
                    appDir: m,
                    nonce: g
                } = (0, s.useContext)(a.HeadManagerContext), w = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let t = e || r;
                    w.current || (i && t && h.has(t) && i(), w.current = !0)
                }, [i, e, r]);
                let v = (0, s.useRef)(!1);
                if ((0, s.useEffect)(() => {
                        !v.current && ("afterInteractive" === u ? p(t) : "lazyOnload" === u && ("complete" === document.readyState ? (0, c.requestIdleCallback)(() => p(t)) : window.addEventListener("load", () => {
                            (0, c.requestIdleCallback)(() => p(t))
                        })), v.current = !0)
                    }, [t, u]), ("beforeInteractive" === u || "worker" === u) && (y ? (b[u] = (b[u] || []).concat([{
                        id: e,
                        src: r,
                        onLoad: n,
                        onReady: i,
                        onError: l,
                        ...d
                    }]), y(b)) : D && D() ? h.add(e || r) : D && !D() && p(t)), m) {
                    if (f && f.forEach(t => {
                            o.default.preinit(t, {
                                as: "style"
                            })
                        }), "beforeInteractive" === u) return r ? (o.default.preload(r, d.integrity ? {
                        as: "script",
                        integrity: d.integrity
                    } : {
                        as: "script"
                    }), s.default.createElement("script", {
                        nonce: g,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r]) + ")"
                        }
                    })) : (d.dangerouslySetInnerHTML && (d.children = d.dangerouslySetInnerHTML.__html, delete d.dangerouslySetInnerHTML), s.default.createElement("script", {
                        nonce: g,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...d
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === u && r && o.default.preload(r, d.integrity ? {
                        as: "script",
                        integrity: d.integrity
                    } : {
                        as: "script"
                    })
                }
                return null
            }
            Object.defineProperty(D, "__nextScript", {
                value: !0
            });
            let m = D;
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        30415: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(87675);
            r(2265);
            let i = n._(r(54));

            function o(t) {
                return {
                    default: (null == t ? void 0 : t.default) || t
                }
            }

            function s(t, e) {
                let r = i.default,
                    n = {
                        loading: t => {
                            let {
                                error: e,
                                isLoading: r,
                                pastDelay: n
                            } = t;
                            return null
                        }
                    };
                "function" == typeof t && (n.loader = t), Object.assign(n, e);
                let s = n.loader;
                return r({ ...n,
                    loader: () => null != s ? s().then(o) : Promise.resolve(o(() => null))
                })
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        63388: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    suspense: function() {
                        return i
                    },
                    NoSSR: function() {
                        return o
                    }
                }), r(87675), r(2265);
            let n = r(54922);

            function i() {
                let t = Error(n.NEXT_DYNAMIC_NO_SSR_CODE);
                throw t.digest = n.NEXT_DYNAMIC_NO_SSR_CODE, t
            }

            function o(t) {
                let {
                    children: e
                } = t;
                return e
            }
        },
        54: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(87675),
                i = n._(r(2265)),
                o = r(63388),
                s = function(t) {
                    let e = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, t);

                    function r(t) {
                        let r = e.loading,
                            n = i.default.createElement(r, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            s = e.ssr ? i.default.Fragment : o.NoSSR,
                            a = e.lazy;
                        return i.default.createElement(i.default.Suspense, {
                            fallback: n
                        }, i.default.createElement(s, null, i.default.createElement(a, t)))
                    }
                    return e.lazy = i.default.lazy(e.loader), r.displayName = "LoadableComponent", r
                }
        },
        58488: function() {},
        24033: function(t, e, r) {
            t.exports = r(20290)
        },
        55521: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(70483);

            function i(t, e, r) {
                return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e
            }

            function o(t, e, r) {
                return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e
            }

            function s(t, e) {
                return void 0 === e && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
            }

            function a(t, e) {
                return void 0 === e && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
            }

            function u(t, e) {
                return void 0 === e && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]
            }

            function c(t, e) {
                return void 0 === e && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0
            }

            function l(t, e, r) {
                return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e
            }

            function h(t, e, r) {
                return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e
            }

            function f(t, e, r) {
                return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), l(t / 4294967296 >>> 0, e, r), l(t >>> 0, e, r + 4), e
            }

            function d(t, e, r) {
                return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), h(t >>> 0, e, r), h(t / 4294967296 >>> 0, e, r + 4), e
            }
            e.readInt16BE = function(t, e) {
                return void 0 === e && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16
            }, e.readUint16BE = function(t, e) {
                return void 0 === e && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0
            }, e.readInt16LE = function(t, e) {
                return void 0 === e && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16
            }, e.readUint16LE = function(t, e) {
                return void 0 === e && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0
            }, e.writeUint16BE = i, e.writeInt16BE = i, e.writeUint16LE = o, e.writeInt16LE = o, e.readInt32BE = s, e.readUint32BE = a, e.readInt32LE = u, e.readUint32LE = c, e.writeUint32BE = l, e.writeInt32BE = l, e.writeUint32LE = h, e.writeInt32LE = h, e.readInt64BE = function(t, e) {
                void 0 === e && (e = 0);
                var r = s(t, e),
                    n = s(t, e + 4);
                return 4294967296 * r + n - (n >> 31) * 4294967296
            }, e.readUint64BE = function(t, e) {
                return void 0 === e && (e = 0), 4294967296 * a(t, e) + a(t, e + 4)
            }, e.readInt64LE = function(t, e) {
                void 0 === e && (e = 0);
                var r = u(t, e);
                return 4294967296 * u(t, e + 4) + r - (r >> 31) * 4294967296
            }, e.readUint64LE = function(t, e) {
                void 0 === e && (e = 0);
                var r = c(t, e);
                return 4294967296 * c(t, e + 4) + r
            }, e.writeUint64BE = f, e.writeInt64BE = f, e.writeUint64LE = d, e.writeInt64LE = d, e.readUintBE = function(t, e, r) {
                if (void 0 === r && (r = 0), t % 8 != 0) throw Error("readUintBE supports only bitLengths divisible by 8");
                if (t / 8 > e.length - r) throw Error("readUintBE: array is too short for the given bitLength");
                for (var n = 0, i = 1, o = t / 8 + r - 1; o >= r; o--) n += e[o] * i, i *= 256;
                return n
            }, e.readUintLE = function(t, e, r) {
                if (void 0 === r && (r = 0), t % 8 != 0) throw Error("readUintLE supports only bitLengths divisible by 8");
                if (t / 8 > e.length - r) throw Error("readUintLE: array is too short for the given bitLength");
                for (var n = 0, i = 1, o = r; o < r + t / 8; o++) n += e[o] * i, i *= 256;
                return n
            }, e.writeUintBE = function(t, e, r, i) {
                if (void 0 === r && (r = new Uint8Array(t / 8)), void 0 === i && (i = 0), t % 8 != 0) throw Error("writeUintBE supports only bitLengths divisible by 8");
                if (!n.isSafeInteger(e)) throw Error("writeUintBE value must be an integer");
                for (var o = 1, s = t / 8 + i - 1; s >= i; s--) r[s] = e / o & 255, o *= 256;
                return r
            }, e.writeUintLE = function(t, e, r, i) {
                if (void 0 === r && (r = new Uint8Array(t / 8)), void 0 === i && (i = 0), t % 8 != 0) throw Error("writeUintLE supports only bitLengths divisible by 8");
                if (!n.isSafeInteger(e)) throw Error("writeUintLE value must be an integer");
                for (var o = 1, s = i; s < i + t / 8; s++) r[s] = e / o & 255, o *= 256;
                return r
            }, e.readFloat32BE = function(t, e) {
                return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e)
            }, e.readFloat32LE = function(t, e) {
                return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e, !0)
            }, e.readFloat64BE = function(t, e) {
                return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e)
            }, e.readFloat64LE = function(t, e) {
                return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e, !0)
            }, e.writeFloat32BE = function(t, e, r) {
                return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t), e
            }, e.writeFloat32LE = function(t, e, r) {
                return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t, !0), e
            }, e.writeFloat64BE = function(t, e, r) {
                return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t), e
            }, e.writeFloat64LE = function(t, e, r) {
                return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t, !0), e
            }
        },
        28131: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(55521),
                i = r(64079);

            function o(t, e, r, o, s) {
                if (void 0 === s && (s = 0), 32 !== t.length) throw Error("ChaCha: key size must be 32 bytes");
                if (o.length < r.length) throw Error("ChaCha: destination is shorter than source");
                if (0 === s) {
                    if (8 !== e.length && 12 !== e.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
                    u = (a = new Uint8Array(16)).length - e.length, a.set(e, u)
                } else {
                    if (16 !== e.length) throw Error("ChaCha nonce with counter must be 16 bytes");
                    a = e, u = s
                }
                for (var a, u, c = new Uint8Array(64), l = 0; l < r.length; l += 64) {
                    ! function(t, e, r) {
                        for (var i = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], o = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], s = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], a = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], u = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], c = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], l = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], h = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], f = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], d = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], p = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], y = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], b = 1634760805, D = 857760878, m = 2036477234, g = 1797285236, w = i, v = o, _ = s, E = a, C = u, S = c, O = l, A = h, U = f, x = d, I = p, k = y, P = 0; P < 20; P += 2) U ^= b = b + w | 0, w ^= C = C + (U = U >>> 16 | U << 16) | 0, w = w >>> 20 | w << 12, x ^= D = D + v | 0, v ^= S = S + (x = x >>> 16 | x << 16) | 0, v = v >>> 20 | v << 12, I ^= m = m + _ | 0, _ ^= O = O + (I = I >>> 16 | I << 16) | 0, _ = _ >>> 20 | _ << 12, k ^= g = g + E | 0, E ^= A = A + (k = k >>> 16 | k << 16) | 0, E = E >>> 20 | E << 12, I ^= m = m + _ | 0, _ ^= O = O + (I = I >>> 24 | I << 8) | 0, _ = _ >>> 25 | _ << 7, k ^= g = g + E | 0, E ^= A = A + (k = k >>> 24 | k << 8) | 0, E = E >>> 25 | E << 7, x ^= D = D + v | 0, v ^= S = S + (x = x >>> 24 | x << 8) | 0, v = v >>> 25 | v << 7, U ^= b = b + w | 0, w ^= C = C + (U = U >>> 24 | U << 8) | 0, w = w >>> 25 | w << 7, k ^= b = b + v | 0, v ^= O = O + (k = k >>> 16 | k << 16) | 0, v = v >>> 20 | v << 12, U ^= D = D + _ | 0, _ ^= A = A + (U = U >>> 16 | U << 16) | 0, _ = _ >>> 20 | _ << 12, x ^= m = m + E | 0, E ^= C = C + (x = x >>> 16 | x << 16) | 0, E = E >>> 20 | E << 12, I ^= g = g + w | 0, w ^= S = S + (I = I >>> 16 | I << 16) | 0, w = w >>> 20 | w << 12, x ^= m = m + E | 0, E ^= C = C + (x = x >>> 24 | x << 8) | 0, E = E >>> 25 | E << 7, I ^= g = g + w | 0, w ^= S = S + (I = I >>> 24 | I << 8) | 0, w = w >>> 25 | w << 7, U ^= D = D + _ | 0, _ ^= A = A + (U = U >>> 24 | U << 8) | 0, _ = _ >>> 25 | _ << 7, k ^= b = b + v | 0, v ^= O = O + (k = k >>> 24 | k << 8) | 0, v = v >>> 25 | v << 7;
                        n.writeUint32LE(b + 1634760805 | 0, t, 0), n.writeUint32LE(D + 857760878 | 0, t, 4), n.writeUint32LE(m + 2036477234 | 0, t, 8), n.writeUint32LE(g + 1797285236 | 0, t, 12), n.writeUint32LE(w + i | 0, t, 16), n.writeUint32LE(v + o | 0, t, 20), n.writeUint32LE(_ + s | 0, t, 24), n.writeUint32LE(E + a | 0, t, 28), n.writeUint32LE(C + u | 0, t, 32), n.writeUint32LE(S + c | 0, t, 36), n.writeUint32LE(O + l | 0, t, 40), n.writeUint32LE(A + h | 0, t, 44), n.writeUint32LE(U + f | 0, t, 48), n.writeUint32LE(x + d | 0, t, 52), n.writeUint32LE(I + p | 0, t, 56), n.writeUint32LE(k + y | 0, t, 60)
                    }(c, a, t);
                    for (var h = l; h < l + 64 && h < r.length; h++) o[h] = r[h] ^ c[h - l];
                    ! function(t, e, r) {
                        for (var n = 1; r--;) n = n + (255 & t[e]) | 0, t[e] = 255 & n, n >>>= 8, e++;
                        if (n > 0) throw Error("ChaCha: counter overflow")
                    }(a, 0, u)
                }
                return i.wipe(c), 0 === s && i.wipe(a), o
            }
            e.streamXOR = o, e.stream = function(t, e, r, n) {
                return void 0 === n && (n = 0), i.wipe(r), o(t, e, r, r, n)
            }
        },
        22100: function(t, e, r) {
            "use strict";
            var n = r(28131),
                i = r(69161),
                o = r(64079),
                s = r(55521),
                a = r(89653);
            e.Cv = 32, e.WH = 12, e.pg = 16;
            var u = new Uint8Array(16),
                c = function() {
                    function t(t) {
                        if (this.nonceLength = e.WH, this.tagLength = e.pg, t.length !== e.Cv) throw Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(t)
                    }
                    return t.prototype.seal = function(t, e, r, i) {
                        if (t.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        var s, a = new Uint8Array(16);
                        a.set(t, a.length - t.length);
                        var u = new Uint8Array(32);
                        n.stream(this._key, a, u, 4);
                        var c = e.length + this.tagLength;
                        if (i) {
                            if (i.length !== c) throw Error("ChaCha20Poly1305: incorrect destination length");
                            s = i
                        } else s = new Uint8Array(c);
                        return n.streamXOR(this._key, a, e, s, 4), this._authenticate(s.subarray(s.length - this.tagLength, s.length), u, s.subarray(0, s.length - this.tagLength), r), o.wipe(a), s
                    }, t.prototype.open = function(t, e, r, i) {
                        if (t.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        if (e.length < this.tagLength) return null;
                        var s, u = new Uint8Array(16);
                        u.set(t, u.length - t.length);
                        var c = new Uint8Array(32);
                        n.stream(this._key, u, c, 4);
                        var l = new Uint8Array(this.tagLength);
                        if (this._authenticate(l, c, e.subarray(0, e.length - this.tagLength), r), !a.equal(l, e.subarray(e.length - this.tagLength, e.length))) return null;
                        var h = e.length - this.tagLength;
                        if (i) {
                            if (i.length !== h) throw Error("ChaCha20Poly1305: incorrect destination length");
                            s = i
                        } else s = new Uint8Array(h);
                        return n.streamXOR(this._key, u, e.subarray(0, e.length - this.tagLength), s, 4), o.wipe(u), s
                    }, t.prototype.clean = function() {
                        return o.wipe(this._key), this
                    }, t.prototype._authenticate = function(t, e, r, n) {
                        var a = new i.Poly1305(e);
                        n && (a.update(n), n.length % 16 > 0 && a.update(u.subarray(n.length % 16))), a.update(r), r.length % 16 > 0 && a.update(u.subarray(r.length % 16));
                        var c = new Uint8Array(8);
                        n && s.writeUint64LE(n.length, c), a.update(c), s.writeUint64LE(r.length, c), a.update(c);
                        for (var l = a.digest(), h = 0; h < l.length; h++) t[h] = l[h];
                        a.clean(), o.wipe(l), o.wipe(c)
                    }, t
                }();
            e.OK = c
        },
        89653: function(t, e) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return 0;
                for (var r = 0, n = 0; n < t.length; n++) r |= t[n] ^ e[n];
                return 1 & r - 1 >>> 8
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.select = function(t, e, r) {
                return ~(t - 1) & e | t - 1 & r
            }, e.lessOrEqual = function(t, e) {
                return (0 | t) - (0 | e) - 1 >>> 31 & 1
            }, e.compare = r, e.equal = function(t, e) {
                return 0 !== t.length && 0 !== e.length && 0 !== r(t, e)
            }
        },
        91857: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isSerializableHash = function(t) {
                return void 0 !== t.saveState && void 0 !== t.restoreState && void 0 !== t.cleanSavedState
            }
        },
        98389: function(t, e, r) {
            "use strict";
            var n = r(60512),
                i = r(64079),
                o = function() {
                    function t(t, e, r, i) {
                        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = i;
                        var o = n.hmac(this._hash, r, e);
                        this._hmac = new n.HMAC(t, o), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return t.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var t = this._counter[0];
                        if (0 === t) throw Error("hkdf: cannot expand more");
                        this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, t.prototype.expand = function(t) {
                        for (var e = new Uint8Array(t), r = 0; r < e.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), e[r] = this._buffer[this._bufpos++];
                        return e
                    }, t.prototype.clean = function() {
                        this._hmac.clean(), i.wipe(this._buffer), i.wipe(this._counter), this._bufpos = 0
                    }, t
                }();
            e.t = o
        },
        60512: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(91857),
                i = r(89653),
                o = r(64079),
                s = function() {
                    function t(t, e) {
                        this._finished = !1, this._inner = new t, this._outer = new t, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var r = new Uint8Array(this.blockSize);
                        e.length > this.blockSize ? this._inner.update(e).finish(r).clean() : r.set(e);
                        for (var i = 0; i < r.length; i++) r[i] ^= 54;
                        this._inner.update(r);
                        for (var i = 0; i < r.length; i++) r[i] ^= 106;
                        this._outer.update(r), n.isSerializableHash(this._inner) && n.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), o.wipe(r)
                    }
                    return t.prototype.reset = function() {
                        if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, t.prototype.clean = function() {
                        n.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), n.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, t.prototype.update = function(t) {
                        return this._inner.update(t), this
                    }, t.prototype.finish = function(t) {
                        return this._finished ? this._outer.finish(t) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0), this
                    }, t.prototype.digest = function() {
                        var t = new Uint8Array(this.digestLength);
                        return this.finish(t), t
                    }, t.prototype.saveState = function() {
                        if (!n.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, t.prototype.restoreState = function(t) {
                        if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, t.prototype.cleanSavedState = function(t) {
                        if (!n.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(t)
                    }, t
                }();
            e.HMAC = s, e.hmac = function(t, e, r) {
                var n = new s(t, e);
                n.update(r);
                var i = n.digest();
                return n.clean(), i
            }, e.equal = i.equal
        },
        70483: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.mul = Math.imul || function(t, e) {
                var r = 65535 & t,
                    n = 65535 & e;
                return r * n + ((t >>> 16 & 65535) * n + r * (e >>> 16 & 65535) << 16 >>> 0) | 0
            }, e.add = function(t, e) {
                return t + e | 0
            }, e.sub = function(t, e) {
                return t - e | 0
            }, e.rotl = function(t, e) {
                return t << e | t >>> 32 - e
            }, e.rotr = function(t, e) {
                return t << 32 - e | t >>> e
            }, e.isInteger = Number.isInteger || function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(t) {
                return e.isInteger(t) && t >= -e.MAX_SAFE_INTEGER && t <= e.MAX_SAFE_INTEGER
            }
        },
        69161: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(89653),
                i = r(64079);
            e.DIGEST_LENGTH = 16;
            var o = function() {
                function t(t) {
                    this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var r = t[0] | t[1] << 8;
                    this._r[0] = 8191 & r;
                    var n = t[2] | t[3] << 8;
                    this._r[1] = (r >>> 13 | n << 3) & 8191;
                    var i = t[4] | t[5] << 8;
                    this._r[2] = (n >>> 10 | i << 6) & 7939;
                    var o = t[6] | t[7] << 8;
                    this._r[3] = (i >>> 7 | o << 9) & 8191;
                    var s = t[8] | t[9] << 8;
                    this._r[4] = (o >>> 4 | s << 12) & 255, this._r[5] = s >>> 1 & 8190;
                    var a = t[10] | t[11] << 8;
                    this._r[6] = (s >>> 14 | a << 2) & 8191;
                    var u = t[12] | t[13] << 8;
                    this._r[7] = (a >>> 11 | u << 5) & 8065;
                    var c = t[14] | t[15] << 8;
                    this._r[8] = (u >>> 8 | c << 8) & 8191, this._r[9] = c >>> 5 & 127, this._pad[0] = t[16] | t[17] << 8, this._pad[1] = t[18] | t[19] << 8, this._pad[2] = t[20] | t[21] << 8, this._pad[3] = t[22] | t[23] << 8, this._pad[4] = t[24] | t[25] << 8, this._pad[5] = t[26] | t[27] << 8, this._pad[6] = t[28] | t[29] << 8, this._pad[7] = t[30] | t[31] << 8
                }
                return t.prototype._blocks = function(t, e, r) {
                    for (var n = this._fin ? 0 : 2048, i = this._h[0], o = this._h[1], s = this._h[2], a = this._h[3], u = this._h[4], c = this._h[5], l = this._h[6], h = this._h[7], f = this._h[8], d = this._h[9], p = this._r[0], y = this._r[1], b = this._r[2], D = this._r[3], m = this._r[4], g = this._r[5], w = this._r[6], v = this._r[7], _ = this._r[8], E = this._r[9]; r >= 16;) {
                        var C, S = t[e + 0] | t[e + 1] << 8;
                        i += 8191 & S;
                        var O = t[e + 2] | t[e + 3] << 8;
                        o += (S >>> 13 | O << 3) & 8191;
                        var A = t[e + 4] | t[e + 5] << 8;
                        s += (O >>> 10 | A << 6) & 8191;
                        var U = t[e + 6] | t[e + 7] << 8;
                        a += (A >>> 7 | U << 9) & 8191;
                        var x = t[e + 8] | t[e + 9] << 8;
                        u += (U >>> 4 | x << 12) & 8191, c += x >>> 1 & 8191;
                        var I = t[e + 10] | t[e + 11] << 8;
                        l += (x >>> 14 | I << 2) & 8191;
                        var k = t[e + 12] | t[e + 13] << 8;
                        h += (I >>> 11 | k << 5) & 8191;
                        var P = t[e + 14] | t[e + 15] << 8;
                        f += (k >>> 8 | P << 8) & 8191, d += P >>> 5 | n;
                        var T = 0;
                        T = (C = 0 + i * p + o * (5 * E) + s * (5 * _) + a * (5 * v) + u * (5 * w)) >>> 13, C &= 8191, C += c * (5 * g) + l * (5 * m) + h * (5 * D) + f * (5 * b) + d * (5 * y), T += C >>> 13, C &= 8191;
                        var M = T;
                        M += i * y + o * p + s * (5 * E) + a * (5 * _) + u * (5 * v), T = M >>> 13, M &= 8191, M += c * (5 * w) + l * (5 * g) + h * (5 * m) + f * (5 * D) + d * (5 * b), T += M >>> 13, M &= 8191;
                        var F = T;
                        F += i * b + o * y + s * p + a * (5 * E) + u * (5 * _), T = F >>> 13, F &= 8191, F += c * (5 * v) + l * (5 * w) + h * (5 * g) + f * (5 * m) + d * (5 * D), T += F >>> 13, F &= 8191;
                        var L = T;
                        L += i * D + o * b + s * y + a * p + u * (5 * E), T = L >>> 13, L &= 8191, L += c * (5 * _) + l * (5 * v) + h * (5 * w) + f * (5 * g) + d * (5 * m), T += L >>> 13, L &= 8191;
                        var N = T;
                        N += i * m + o * D + s * b + a * y + u * p, T = N >>> 13, N &= 8191, N += c * (5 * E) + l * (5 * _) + h * (5 * v) + f * (5 * w) + d * (5 * g), T += N >>> 13, N &= 8191;
                        var j = T;
                        j += i * g + o * m + s * D + a * b + u * y, T = j >>> 13, j &= 8191, j += c * p + l * (5 * E) + h * (5 * _) + f * (5 * v) + d * (5 * w), T += j >>> 13, j &= 8191;
                        var q = T;
                        q += i * w + o * g + s * m + a * D + u * b, T = q >>> 13, q &= 8191, q += c * y + l * p + h * (5 * E) + f * (5 * _) + d * (5 * v), T += q >>> 13, q &= 8191;
                        var B = T;
                        B += i * v + o * w + s * g + a * m + u * D, T = B >>> 13, B &= 8191, B += c * b + l * y + h * p + f * (5 * E) + d * (5 * _), T += B >>> 13, B &= 8191;
                        var R = T;
                        R += i * _ + o * v + s * w + a * g + u * m, T = R >>> 13, R &= 8191, R += c * D + l * b + h * y + f * p + d * (5 * E), T += R >>> 13, R &= 8191;
                        var H = T;
                        H += i * E + o * _ + s * v + a * w + u * g, T = H >>> 13, H &= 8191, H += c * m + l * D + h * b + f * y + d * p, T += H >>> 13, H &= 8191, C = 8191 & (T = (T = (T << 2) + T | 0) + C | 0), T >>>= 13, M += T, i = C, o = M, s = F, a = L, u = N, c = j, l = q, h = B, f = R, d = H, e += 16, r -= 16
                    }
                    this._h[0] = i, this._h[1] = o, this._h[2] = s, this._h[3] = a, this._h[4] = u, this._h[5] = c, this._h[6] = l, this._h[7] = h, this._h[8] = f, this._h[9] = d
                }, t.prototype.finish = function(t, e) {
                    void 0 === e && (e = 0);
                    var r, n, i, o, s = new Uint16Array(10);
                    if (this._leftover) {
                        for (o = this._leftover, this._buffer[o++] = 1; o < 16; o++) this._buffer[o] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (r = this._h[1] >>> 13, this._h[1] &= 8191, o = 2; o < 10; o++) this._h[o] += r, r = this._h[o] >>> 13, this._h[o] &= 8191;
                    for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, s[0] = this._h[0] + 5, r = s[0] >>> 13, s[0] &= 8191, o = 1; o < 10; o++) s[o] = this._h[o] + r, r = s[o] >>> 13, s[o] &= 8191;
                    for (s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= n;
                    for (o = 0, n = ~n; o < 10; o++) this._h[o] = this._h[o] & n | s[o];
                    for (o = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, i = this._h[0] + this._pad[0], this._h[0] = 65535 & i; o < 8; o++) i = (this._h[o] + this._pad[o] | 0) + (i >>> 16) | 0, this._h[o] = 65535 & i;
                    return t[e + 0] = this._h[0] >>> 0, t[e + 1] = this._h[0] >>> 8, t[e + 2] = this._h[1] >>> 0, t[e + 3] = this._h[1] >>> 8, t[e + 4] = this._h[2] >>> 0, t[e + 5] = this._h[2] >>> 8, t[e + 6] = this._h[3] >>> 0, t[e + 7] = this._h[3] >>> 8, t[e + 8] = this._h[4] >>> 0, t[e + 9] = this._h[4] >>> 8, t[e + 10] = this._h[5] >>> 0, t[e + 11] = this._h[5] >>> 8, t[e + 12] = this._h[6] >>> 0, t[e + 13] = this._h[6] >>> 8, t[e + 14] = this._h[7] >>> 0, t[e + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, t.prototype.update = function(t) {
                    var e, r = 0,
                        n = t.length;
                    if (this._leftover) {
                        (e = 16 - this._leftover) > n && (e = n);
                        for (var i = 0; i < e; i++) this._buffer[this._leftover + i] = t[r + i];
                        if (n -= e, r += e, this._leftover += e, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (n >= 16 && (e = n - n % 16, this._blocks(t, r, e), r += e, n -= e), n) {
                        for (var i = 0; i < n; i++) this._buffer[this._leftover + i] = t[r + i];
                        this._leftover += n
                    }
                    return this
                }, t.prototype.digest = function() {
                    if (this._finished) throw Error("Poly1305 was finished");
                    var t = new Uint8Array(16);
                    return this.finish(t), t
                }, t.prototype.clean = function() {
                    return i.wipe(this._buffer), i.wipe(this._r), i.wipe(this._h), i.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, t
            }();
            e.Poly1305 = o, e.oneTimeAuth = function(t, e) {
                var r = new o(t);
                r.update(e);
                var n = r.digest();
                return r.clean(), n
            }, e.equal = function(t, r) {
                return t.length === e.DIGEST_LENGTH && r.length === e.DIGEST_LENGTH && n.equal(t, r)
            }
        },
        3695: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
            let n = r(61239),
                i = r(55521),
                o = r(64079);

            function s(t, r = e.defaultRandomSource) {
                return r.randomBytes(t)
            }
            e.defaultRandomSource = new n.SystemRandomSource, e.randomBytes = s, e.randomUint32 = function(t = e.defaultRandomSource) {
                let r = s(4, t),
                    n = (0, i.readUint32LE)(r);
                return (0, o.wipe)(r), n
            };
            let a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function u(t, r = a, n = e.defaultRandomSource) {
                if (r.length < 2) throw Error("randomString charset is too short");
                if (r.length > 256) throw Error("randomString charset is too long");
                let i = "",
                    u = r.length,
                    c = 256 - 256 % u;
                for (; t > 0;) {
                    let e = s(Math.ceil(256 * t / c), n);
                    for (let n = 0; n < e.length && t > 0; n++) {
                        let o = e[n];
                        o < c && (i += r.charAt(o % u), t--)
                    }(0, o.wipe)(e)
                }
                return i
            }
            e.randomString = u, e.randomStringForEntropy = function(t, r = a, n = e.defaultRandomSource) {
                let i = Math.ceil(t / (Math.log(r.length) / Math.LN2));
                return u(i, r, n)
            }
        },
        70781: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BrowserRandomSource = void 0, e.BrowserRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    let t = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    t && void 0 !== t.getRandomValues && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
                }
                randomBytes(t) {
                    if (!this.isAvailable || !this._crypto) throw Error("Browser random byte generator is not available.");
                    let e = new Uint8Array(t);
                    for (let t = 0; t < e.length; t += 65536) this._crypto.getRandomValues(e.subarray(t, t + Math.min(e.length - t, 65536)));
                    return e
                }
            }
        },
        92846: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.NodeRandomSource = void 0;
            let n = r(64079);
            e.NodeRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        let t = r(75477);
                        t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
                randomBytes(t) {
                    if (!this.isAvailable || !this._crypto) throw Error("Node.js random byte generator is not available.");
                    let e = this._crypto.randomBytes(t);
                    if (e.length !== t) throw Error("NodeRandomSource: got fewer bytes than requested");
                    let r = new Uint8Array(t);
                    for (let t = 0; t < r.length; t++) r[t] = e[t];
                    return (0, n.wipe)(e), r
                }
            }
        },
        61239: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SystemRandomSource = void 0;
            let n = r(70781),
                i = r(92846);
            e.SystemRandomSource = class {
                constructor() {
                    if (this.isAvailable = !1, this.name = "", this._source = new n.BrowserRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Browser";
                        return
                    }
                    if (this._source = new i.NodeRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Node";
                        return
                    }
                }
                randomBytes(t) {
                    if (!this.isAvailable) throw Error("System random byte generator is not available.");
                    return this._source.randomBytes(t)
                }
            }
        },
        63321: function(t, e, r) {
            "use strict";
            var n = r(55521),
                i = r(64079);
            e.k = 32, e.cn = 64;
            var o = function() {
                function t() {
                    this.digestLength = e.k, this.blockSize = e.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return t.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, t.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, t.prototype.clean = function() {
                    i.wipe(this._buffer), i.wipe(this._temp), this.reset()
                }, t.prototype.update = function(t, e) {
                    if (void 0 === e && (e = t.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
                    var r = 0;
                    if (this._bytesHashed += e, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && e > 0;) this._buffer[this._bufferLength++] = t[r++], e--;
                        this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (e >= this.blockSize && (r = a(this._temp, this._state, t, r, e), e %= this.blockSize); e > 0;) this._buffer[this._bufferLength++] = t[r++], e--;
                    return this
                }, t.prototype.finish = function(t) {
                    if (!this._finished) {
                        var e = this._bytesHashed,
                            r = this._bufferLength,
                            i = e % 64 < 56 ? 64 : 128;
                        this._buffer[r] = 128;
                        for (var o = r + 1; o < i - 8; o++) this._buffer[o] = 0;
                        n.writeUint32BE(e / 536870912 | 0, this._buffer, i - 8), n.writeUint32BE(e << 3, this._buffer, i - 4), a(this._temp, this._state, this._buffer, 0, i), this._finished = !0
                    }
                    for (var o = 0; o < this.digestLength / 4; o++) n.writeUint32BE(this._state[o], t, 4 * o);
                    return this
                }, t.prototype.digest = function() {
                    var t = new Uint8Array(this.digestLength);
                    return this.finish(t), t
                }, t.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, t.prototype.restoreState = function(t) {
                    return this._state.set(t.state), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, this._finished = !1, this
                }, t.prototype.cleanSavedState = function(t) {
                    i.wipe(t.state), t.buffer && i.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0
                }, t
            }();
            e.mE = o;
            var s = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a(t, e, r, i, o) {
                for (; o >= 64;) {
                    for (var a = e[0], u = e[1], c = e[2], l = e[3], h = e[4], f = e[5], d = e[6], p = e[7], y = 0; y < 16; y++) {
                        var b = i + 4 * y;
                        t[y] = n.readUint32BE(r, b)
                    }
                    for (var y = 16; y < 64; y++) {
                        var D = t[y - 2],
                            m = (D >>> 17 | D << 15) ^ (D >>> 19 | D << 13) ^ D >>> 10,
                            g = ((D = t[y - 15]) >>> 7 | D << 25) ^ (D >>> 18 | D << 14) ^ D >>> 3;
                        t[y] = (m + t[y - 7] | 0) + (g + t[y - 16] | 0)
                    }
                    for (var y = 0; y < 64; y++) {
                        var m = (((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & f ^ ~h & d) | 0) + (p + (s[y] + t[y] | 0) | 0) | 0,
                            g = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & u ^ a & c ^ u & c) | 0;
                        p = d, d = f, f = h, h = l + m | 0, l = c, c = u, u = a, a = m + g | 0
                    }
                    e[0] += a, e[1] += u, e[2] += c, e[3] += l, e[4] += h, e[5] += f, e[6] += d, e[7] += p, i += 64, o -= 64
                }
                return i
            }
            e.vp = function(t) {
                var e = new o;
                e.update(t);
                var r = e.digest();
                return e.clean(), r
            }
        },
        64079: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.wipe = function(t) {
                for (var e = 0; e < t.length; e++) t[e] = 0;
                return t
            }
        },
        94194: function(t, e, r) {
            "use strict";
            e.gi = e.Au = e.KS = e.kz = void 0;
            let n = r(3695),
                i = r(64079);

            function o(t) {
                let e = new Float64Array(16);
                if (t)
                    for (let r = 0; r < t.length; r++) e[r] = t[r];
                return e
            }
            e.kz = 32, e.KS = 32;
            let s = new Uint8Array(32);
            s[0] = 9;
            let a = o([56129, 1]);

            function u(t) {
                let e = 1;
                for (let r = 0; r < 16; r++) {
                    let n = t[r] + e + 65535;
                    e = Math.floor(n / 65536), t[r] = n - 65536 * e
                }
                t[0] += e - 1 + 37 * (e - 1)
            }

            function c(t, e, r) {
                let n = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let i = n & (t[r] ^ e[r]);
                    t[r] ^= i, e[r] ^= i
                }
            }

            function l(t, e, r) {
                for (let n = 0; n < 16; n++) t[n] = e[n] + r[n]
            }

            function h(t, e, r) {
                for (let n = 0; n < 16; n++) t[n] = e[n] - r[n]
            }

            function f(t, e, r) {
                let n, i, o = 0,
                    s = 0,
                    a = 0,
                    u = 0,
                    c = 0,
                    l = 0,
                    h = 0,
                    f = 0,
                    d = 0,
                    p = 0,
                    y = 0,
                    b = 0,
                    D = 0,
                    m = 0,
                    g = 0,
                    w = 0,
                    v = 0,
                    _ = 0,
                    E = 0,
                    C = 0,
                    S = 0,
                    O = 0,
                    A = 0,
                    U = 0,
                    x = 0,
                    I = 0,
                    k = 0,
                    P = 0,
                    T = 0,
                    M = 0,
                    F = 0,
                    L = r[0],
                    N = r[1],
                    j = r[2],
                    q = r[3],
                    B = r[4],
                    R = r[5],
                    H = r[6],
                    K = r[7],
                    W = r[8],
                    z = r[9],
                    V = r[10],
                    $ = r[11],
                    Q = r[12],
                    Y = r[13],
                    G = r[14],
                    J = r[15];
                o += (n = e[0]) * L, s += n * N, a += n * j, u += n * q, c += n * B, l += n * R, h += n * H, f += n * K, d += n * W, p += n * z, y += n * V, b += n * $, D += n * Q, m += n * Y, g += n * G, w += n * J, s += (n = e[1]) * L, a += n * N, u += n * j, c += n * q, l += n * B, h += n * R, f += n * H, d += n * K, p += n * W, y += n * z, b += n * V, D += n * $, m += n * Q, g += n * Y, w += n * G, v += n * J, a += (n = e[2]) * L, u += n * N, c += n * j, l += n * q, h += n * B, f += n * R, d += n * H, p += n * K, y += n * W, b += n * z, D += n * V, m += n * $, g += n * Q, w += n * Y, v += n * G, _ += n * J, u += (n = e[3]) * L, c += n * N, l += n * j, h += n * q, f += n * B, d += n * R, p += n * H, y += n * K, b += n * W, D += n * z, m += n * V, g += n * $, w += n * Q, v += n * Y, _ += n * G, E += n * J, c += (n = e[4]) * L, l += n * N, h += n * j, f += n * q, d += n * B, p += n * R, y += n * H, b += n * K, D += n * W, m += n * z, g += n * V, w += n * $, v += n * Q, _ += n * Y, E += n * G, C += n * J, l += (n = e[5]) * L, h += n * N, f += n * j, d += n * q, p += n * B, y += n * R, b += n * H, D += n * K, m += n * W, g += n * z, w += n * V, v += n * $, _ += n * Q, E += n * Y, C += n * G, S += n * J, h += (n = e[6]) * L, f += n * N, d += n * j, p += n * q, y += n * B, b += n * R, D += n * H, m += n * K, g += n * W, w += n * z, v += n * V, _ += n * $, E += n * Q, C += n * Y, S += n * G, O += n * J, f += (n = e[7]) * L, d += n * N, p += n * j, y += n * q, b += n * B, D += n * R, m += n * H, g += n * K, w += n * W, v += n * z, _ += n * V, E += n * $, C += n * Q, S += n * Y, O += n * G, A += n * J, d += (n = e[8]) * L, p += n * N, y += n * j, b += n * q, D += n * B, m += n * R, g += n * H, w += n * K, v += n * W, _ += n * z, E += n * V, C += n * $, S += n * Q, O += n * Y, A += n * G, U += n * J, p += (n = e[9]) * L, y += n * N, b += n * j, D += n * q, m += n * B, g += n * R, w += n * H, v += n * K, _ += n * W, E += n * z, C += n * V, S += n * $, O += n * Q, A += n * Y, U += n * G, x += n * J, y += (n = e[10]) * L, b += n * N, D += n * j, m += n * q, g += n * B, w += n * R, v += n * H, _ += n * K, E += n * W, C += n * z, S += n * V, O += n * $, A += n * Q, U += n * Y, x += n * G, I += n * J, b += (n = e[11]) * L, D += n * N, m += n * j, g += n * q, w += n * B, v += n * R, _ += n * H, E += n * K, C += n * W, S += n * z, O += n * V, A += n * $, U += n * Q, x += n * Y, I += n * G, k += n * J, D += (n = e[12]) * L, m += n * N, g += n * j, w += n * q, v += n * B, _ += n * R, E += n * H, C += n * K, S += n * W, O += n * z, A += n * V, U += n * $, x += n * Q, I += n * Y, k += n * G, P += n * J, m += (n = e[13]) * L, g += n * N, w += n * j, v += n * q, _ += n * B, E += n * R, C += n * H, S += n * K, O += n * W, A += n * z, U += n * V, x += n * $, I += n * Q, k += n * Y, P += n * G, T += n * J, g += (n = e[14]) * L, w += n * N, v += n * j, _ += n * q, E += n * B, C += n * R, S += n * H, O += n * K, A += n * W, U += n * z, x += n * V, I += n * $, k += n * Q, P += n * Y, T += n * G, M += n * J, w += (n = e[15]) * L, v += n * N, _ += n * j, E += n * q, C += n * B, S += n * R, O += n * H, A += n * K, U += n * W, x += n * z, I += n * V, k += n * $, P += n * Q, T += n * Y, M += n * G, F += n * J, o += 38 * v, s += 38 * _, a += 38 * E, u += 38 * C, c += 38 * S, l += 38 * O, h += 38 * A, f += 38 * U, d += 38 * x, p += 38 * I, y += 38 * k, b += 38 * P, D += 38 * T, m += 38 * M, g += 38 * F, i = Math.floor((n = o + (i = 1) + 65535) / 65536), o = n - 65536 * i, i = Math.floor((n = s + i + 65535) / 65536), s = n - 65536 * i, i = Math.floor((n = a + i + 65535) / 65536), a = n - 65536 * i, i = Math.floor((n = u + i + 65535) / 65536), u = n - 65536 * i, i = Math.floor((n = c + i + 65535) / 65536), c = n - 65536 * i, i = Math.floor((n = l + i + 65535) / 65536), l = n - 65536 * i, i = Math.floor((n = h + i + 65535) / 65536), h = n - 65536 * i, i = Math.floor((n = f + i + 65535) / 65536), f = n - 65536 * i, i = Math.floor((n = d + i + 65535) / 65536), d = n - 65536 * i, i = Math.floor((n = p + i + 65535) / 65536), p = n - 65536 * i, i = Math.floor((n = y + i + 65535) / 65536), y = n - 65536 * i, i = Math.floor((n = b + i + 65535) / 65536), b = n - 65536 * i, i = Math.floor((n = D + i + 65535) / 65536), D = n - 65536 * i, i = Math.floor((n = m + i + 65535) / 65536), m = n - 65536 * i, i = Math.floor((n = g + i + 65535) / 65536), g = n - 65536 * i, i = Math.floor((n = w + i + 65535) / 65536), w = n - 65536 * i, o += i - 1 + 37 * (i - 1), i = Math.floor((n = o + (i = 1) + 65535) / 65536), o = n - 65536 * i, i = Math.floor((n = s + i + 65535) / 65536), s = n - 65536 * i, i = Math.floor((n = a + i + 65535) / 65536), a = n - 65536 * i, i = Math.floor((n = u + i + 65535) / 65536), u = n - 65536 * i, i = Math.floor((n = c + i + 65535) / 65536), c = n - 65536 * i, i = Math.floor((n = l + i + 65535) / 65536), l = n - 65536 * i, i = Math.floor((n = h + i + 65535) / 65536), h = n - 65536 * i, i = Math.floor((n = f + i + 65535) / 65536), f = n - 65536 * i, i = Math.floor((n = d + i + 65535) / 65536), d = n - 65536 * i, i = Math.floor((n = p + i + 65535) / 65536), p = n - 65536 * i, i = Math.floor((n = y + i + 65535) / 65536), y = n - 65536 * i, i = Math.floor((n = b + i + 65535) / 65536), b = n - 65536 * i, i = Math.floor((n = D + i + 65535) / 65536), D = n - 65536 * i, i = Math.floor((n = m + i + 65535) / 65536), m = n - 65536 * i, i = Math.floor((n = g + i + 65535) / 65536), g = n - 65536 * i, i = Math.floor((n = w + i + 65535) / 65536), w = n - 65536 * i, o += i - 1 + 37 * (i - 1), t[0] = o, t[1] = s, t[2] = a, t[3] = u, t[4] = c, t[5] = l, t[6] = h, t[7] = f, t[8] = d, t[9] = p, t[10] = y, t[11] = b, t[12] = D, t[13] = m, t[14] = g, t[15] = w
            }

            function d(t, e) {
                let r = new Uint8Array(32),
                    n = new Float64Array(80),
                    i = o(),
                    s = o(),
                    d = o(),
                    p = o(),
                    y = o(),
                    b = o();
                for (let e = 0; e < 31; e++) r[e] = t[e];
                r[31] = 127 & t[31] | 64, r[0] &= 248,
                    function(t, e) {
                        for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                        t[15] &= 32767
                    }(n, e);
                for (let t = 0; t < 16; t++) s[t] = n[t];
                i[0] = p[0] = 1;
                for (let t = 254; t >= 0; --t) {
                    let e = r[t >>> 3] >>> (7 & t) & 1;
                    c(i, s, e), c(d, p, e), l(y, i, d), h(i, i, d), l(d, s, p), h(s, s, p), f(p, y, y), f(b, i, i), f(i, d, i), f(d, s, y), l(y, i, d), h(i, i, d), f(s, i, i), h(d, p, b), f(i, d, a), l(i, i, p), f(d, d, i), f(i, p, b), f(p, s, n), f(s, y, y), c(i, s, e), c(d, p, e)
                }
                for (let t = 0; t < 16; t++) n[t + 16] = i[t], n[t + 32] = d[t], n[t + 48] = s[t], n[t + 64] = p[t];
                let D = n.subarray(32),
                    m = n.subarray(16);
                ! function(t, e) {
                    let r = o();
                    for (let t = 0; t < 16; t++) r[t] = e[t];
                    for (let t = 253; t >= 0; t--) f(r, r, r), 2 !== t && 4 !== t && f(r, r, e);
                    for (let e = 0; e < 16; e++) t[e] = r[e]
                }(D, D), f(m, m, D);
                let g = new Uint8Array(32);
                return ! function(t, e) {
                    let r = o(),
                        n = o();
                    for (let t = 0; t < 16; t++) n[t] = e[t];
                    u(n), u(n), u(n);
                    for (let t = 0; t < 2; t++) {
                        r[0] = n[0] - 65517;
                        for (let t = 1; t < 15; t++) r[t] = n[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
                        r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                        let t = r[15] >> 16 & 1;
                        r[14] &= 65535, c(n, r, 1 - t)
                    }
                    for (let e = 0; e < 16; e++) t[2 * e] = 255 & n[e], t[2 * e + 1] = n[e] >> 8
                }(g, m), g
            }
            e.Au = function(t) {
                let r = (0, n.randomBytes)(32, t),
                    o = function(t) {
                        if (t.length !== e.KS) throw Error(`x25519: seed must be ${e.KS} bytes`);
                        let r = new Uint8Array(t),
                            n = d(r, s);
                        return {
                            publicKey: n,
                            secretKey: r
                        }
                    }(r);
                return (0, i.wipe)(r), o
            }, e.gi = function(t, r, n = !1) {
                if (t.length !== e.kz) throw Error("X25519: incorrect secret key length");
                if (r.length !== e.kz) throw Error("X25519: incorrect public key length");
                let i = d(t, r);
                if (n) {
                    let t = 0;
                    for (let e = 0; e < i.length; e++) t |= i[e];
                    if (0 === t) throw Error("X25519: invalid shared key")
                }
                return i
            }
        },
        18808: function(t, e, r) {
            "use strict";
            r.d(e, {
                RELAY_JSONRPC: function() {
                    return n
                }
            }), r(8672);
            let n = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe"
                }
            }
        },
        8672: function() {},
        37713: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            let n = r(19464);
            n.__exportStar(r(22597), e), n.__exportStar(r(93826), e)
        },
        22597: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ONE_THOUSAND = e.ONE_HUNDRED = void 0, e.ONE_HUNDRED = 100, e.ONE_THOUSAND = 1e3
        },
        93826: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = 5 * e.ONE_MINUTE, e.TEN_MINUTES = 10 * e.ONE_MINUTE, e.THIRTY_MINUTES = 30 * e.ONE_MINUTE, e.SIXTY_MINUTES = 60 * e.ONE_MINUTE, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = 3 * e.ONE_HOUR, e.SIX_HOURS = 6 * e.ONE_HOUR, e.TWELVE_HOURS = 12 * e.ONE_HOUR, e.TWENTY_FOUR_HOURS = 24 * e.ONE_HOUR, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = 3 * e.ONE_DAY, e.FIVE_DAYS = 5 * e.ONE_DAY, e.SEVEN_DAYS = 7 * e.ONE_DAY, e.THIRTY_DAYS = 30 * e.ONE_DAY, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = 2 * e.ONE_WEEK, e.THREE_WEEKS = 3 * e.ONE_WEEK, e.FOUR_WEEKS = 4 * e.ONE_WEEK, e.ONE_YEAR = 365 * e.ONE_DAY
        },
        28803: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            let n = r(19464);
            n.__exportStar(r(45344), e), n.__exportStar(r(9242), e), n.__exportStar(r(49424), e), n.__exportStar(r(37713), e)
        },
        49424: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            let n = r(19464);
            n.__exportStar(r(66677), e)
        },
        66677: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.IWatch = void 0, e.IWatch = class {}
        },
        54714: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.fromMiliseconds = e.toMiliseconds = void 0;
            let n = r(37713);
            e.toMiliseconds = function(t) {
                return t * n.ONE_THOUSAND
            }, e.fromMiliseconds = function(t) {
                return Math.floor(t / n.ONE_THOUSAND)
            }
        },
        26003: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.delay = void 0, e.delay = function(t) {
                return new Promise(e => {
                    setTimeout(() => {
                        e(!0)
                    }, t)
                })
            }
        },
        45344: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            let n = r(19464);
            n.__exportStar(r(26003), e), n.__exportStar(r(54714), e)
        },
        9242: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Watch = void 0;
            class r {
                constructor() {
                    this.timestamps = new Map
                }
                start(t) {
                    if (this.timestamps.has(t)) throw Error(`Watch already started for label: ${t}`);
                    this.timestamps.set(t, {
                        started: Date.now()
                    })
                }
                stop(t) {
                    let e = this.get(t);
                    if (void 0 !== e.elapsed) throw Error(`Watch already stopped for label: ${t}`);
                    let r = Date.now() - e.started;
                    this.timestamps.set(t, {
                        started: e.started,
                        elapsed: r
                    })
                }
                get(t) {
                    let e = this.timestamps.get(t);
                    if (void 0 === e) throw Error(`No timestamp found for label: ${t}`);
                    return e
                }
                elapsed(t) {
                    let e = this.get(t),
                        r = e.elapsed || Date.now() - e.started;
                    return r
                }
            }
            e.Watch = r, e.default = r
        },
        19464: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return g
                },
                __asyncValues: function() {
                    return v
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return d
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return C
                },
                __importStar: function() {
                    return E
                },
                __makeTemplateObject: function() {
                    return _
                },
                __metadata: function() {
                    return c
                },
                __param: function() {
                    return u
                },
                __read: function() {
                    return y
                },
                __rest: function() {
                    return s
                },
                __spread: function() {
                    return b
                },
                __spreadArrays: function() {
                    return D
                },
                __values: function() {
                    return p
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
            };

            function i(t, e) {
                function r() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var o = function() {
                return (o = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function s(t, e) {
                var r = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                return r
            }

            function a(t, e, r, n) {
                var i, o = arguments.length,
                    s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, n);
                else
                    for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
                return o > 3 && s && Object.defineProperty(e, r, s), s
            }

            function u(t, e) {
                return function(r, n) {
                    e(r, n, t)
                }
            }

            function c(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function l(t, e, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    u((n = n.apply(t, e || [])).next())
                })
            }

            function h(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }

            function f(t, e, r, n) {
                void 0 === n && (n = r), t[n] = e[r]
            }

            function d(t, e) {
                for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r])
            }

            function p(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
                throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function y(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var n, i, o = r.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value)
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function b() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(y(arguments[e]));
                return t
            }

            function D() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                for (var n = Array(t), i = 0, e = 0; e < r; e++)
                    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
                return n
            }

            function m(t) {
                return this instanceof m ? (this.v = t, this) : new m(t)
            }

            function g(t, e, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(t, e || []),
                    o = [];
                return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function s(t) {
                    i[t] && (n[t] = function(e) {
                        return new Promise(function(r, n) {
                            o.push([t, e, r, n]) > 1 || a(t, e)
                        })
                    })
                }

                function a(t, e) {
                    try {
                        var r;
                        (r = i[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(u, c) : l(o[0][2], r)
                    } catch (t) {
                        l(o[0][3], t)
                    }
                }

                function u(t) {
                    a("next", t)
                }

                function c(t) {
                    a("throw", t)
                }

                function l(t, e) {
                    t(e), o.shift(), o.length && a(o[0][0], o[0][1])
                }
            }

            function w(t) {
                var e, r;
                return e = {}, n("next"), n("throw", function(t) {
                    throw t
                }), n("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function n(n, i) {
                    e[n] = t[n] ? function(e) {
                        return (r = !r) ? {
                            value: m(t[n](e)),
                            done: "return" === n
                        } : i ? i(e) : e
                    } : i
                }
            }

            function v(t) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var e, r = t[Symbol.asyncIterator];
                return r ? r.call(t) : (t = p(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function n(r) {
                    e[r] = t[r] && function(e) {
                        return new Promise(function(n, i) {
                            ! function(t, e, r, n) {
                                Promise.resolve(n).then(function(e) {
                                    t({
                                        value: e,
                                        done: r
                                    })
                                }, e)
                            }(n, i, (e = t[r](e)).done, e.value)
                        })
                    }
                }
            }

            function _(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }

            function E(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }

            function C(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function S(t, e) {
                if (!e.has(t)) throw TypeError("attempted to get private field on non-instance");
                return e.get(t)
            }

            function O(t, e, r) {
                if (!e.has(t)) throw TypeError("attempted to set private field on non-instance");
                return e.set(t, r), r
            }
        },
        31079: function(t, e) {
            "use strict";

            function r(t) {
                let e;
                return "undefined" != typeof window && void 0 !== window[t] && (e = window[t]), e
            }

            function n(t) {
                let e = r(t);
                if (!e) throw Error(`${t} is not defined in Window`);
                return e
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getLocalStorage = e.getLocalStorageOrThrow = e.getCrypto = e.getCryptoOrThrow = e.getLocation = e.getLocationOrThrow = e.getNavigator = e.getNavigatorOrThrow = e.getDocument = e.getDocumentOrThrow = e.getFromWindowOrThrow = e.getFromWindow = void 0, e.getFromWindow = r, e.getFromWindowOrThrow = n, e.getDocumentOrThrow = function() {
                return n("document")
            }, e.getDocument = function() {
                return r("document")
            }, e.getNavigatorOrThrow = function() {
                return n("navigator")
            }, e.getNavigator = function() {
                return r("navigator")
            }, e.getLocationOrThrow = function() {
                return n("location")
            }, e.getLocation = function() {
                return r("location")
            }, e.getCryptoOrThrow = function() {
                return n("crypto")
            }, e.getCrypto = function() {
                return r("crypto")
            }, e.getLocalStorageOrThrow = function() {
                return n("localStorage")
            }, e.getLocalStorage = function() {
                return r("localStorage")
            }
        },
        53385: function(t, e, r) {
            "use strict";
            e.D = void 0;
            let n = r(31079);
            e.D = function() {
                let t, e, r;
                try {
                    t = n.getDocumentOrThrow(), e = n.getLocationOrThrow()
                } catch (t) {
                    return null
                }

                function i(...e) {
                    let r = t.getElementsByTagName("meta");
                    for (let t = 0; t < r.length; t++) {
                        let n = r[t],
                            i = ["itemprop", "property", "name"].map(t => n.getAttribute(t)).filter(t => !!t && e.includes(t));
                        if (i.length && i) {
                            let t = n.getAttribute("content");
                            if (t) return t
                        }
                    }
                    return ""
                }
                let o = ((r = i("name", "og:site_name", "og:title", "twitter:title")) || (r = t.title), r),
                    s = function() {
                        let t = i("description", "og:description", "twitter:description", "keywords");
                        return t
                    }(),
                    a = e.origin,
                    u = function() {
                        let r = t.getElementsByTagName("link"),
                            n = [];
                        for (let t = 0; t < r.length; t++) {
                            let i = r[t],
                                o = i.getAttribute("rel");
                            if (o && o.toLowerCase().indexOf("icon") > -1) {
                                let t = i.getAttribute("href");
                                if (t) {
                                    if (-1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("http:") && 0 !== t.indexOf("//")) {
                                        let r = e.protocol + "//" + e.host;
                                        if (0 === t.indexOf("/")) r += t;
                                        else {
                                            let n = e.pathname.split("/");
                                            n.pop();
                                            let i = n.join("/");
                                            r += i + "/" + t
                                        }
                                        n.push(r)
                                    } else if (0 === t.indexOf("//")) {
                                        let r = e.protocol + t;
                                        n.push(r)
                                    } else n.push(t)
                                }
                            }
                        }
                        return n
                    }();
                return {
                    description: s,
                    url: a,
                    icons: u,
                    name: o
                }
            }
        },
        68505: function(t) {
            "use strict";
            var e = "%[a-f0-9]{2}",
                r = RegExp("(" + e + ")|([^%]+?)", "gi"),
                n = RegExp("(" + e + ")+", "gi");
            t.exports = function(t) {
                if ("string" != typeof t) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
                try {
                    return t = t.replace(/\+/g, " "), decodeURIComponent(t)
                } catch (e) {
                    return function(t) {
                        for (var e = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, i = n.exec(t); i;) {
                            try {
                                e[i[0]] = decodeURIComponent(i[0])
                            } catch (t) {
                                var o = function(t) {
                                    try {
                                        return decodeURIComponent(t)
                                    } catch (i) {
                                        for (var e = t.match(r) || [], n = 1; n < e.length; n++) e = (t = (function t(e, r) {
                                            try {
                                                return [decodeURIComponent(e.join(""))]
                                            } catch (t) {}
                                            if (1 === e.length) return e;
                                            r = r || 1;
                                            var n = e.slice(0, r),
                                                i = e.slice(r);
                                            return Array.prototype.concat.call([], t(n), t(i))
                                        })(e, n).join("")).match(r) || [];
                                        return t
                                    }
                                }(i[0]);
                                o !== i[0] && (e[i[0]] = o)
                            }
                            i = n.exec(t)
                        }
                        e["%C2"] = "�";
                        for (var s = Object.keys(e), a = 0; a < s.length; a++) {
                            var u = s[a];
                            t = t.replace(RegExp(u, "g"), e[u])
                        }
                        return t
                    }(t)
                }
            }
        },
        65838: function(t) {
            "use strict";
            t.exports = function(t, e) {
                for (var r = {}, n = Object.keys(t), i = Array.isArray(e), o = 0; o < n.length; o++) {
                    var s = n[o],
                        a = t[s];
                    (i ? -1 !== e.indexOf(s) : e(s, a, t)) && (r[s] = a)
                }
                return r
            }
        },
        87144: function(t, e, r) {
            var n = r(41548),
                i = r(3598),
                o = r(69996),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!n(t)) return o(t);
                var e = i(t),
                    r = [];
                for (var a in t) "constructor" == a && (e || !s.call(t, a)) || r.push(a);
                return r
            }
        },
        65188: function(t, e, r) {
            var n = r(26402),
                i = r(59523),
                o = r(39053);
            t.exports = function(t, e, r) {
                for (var s = -1, a = e.length, u = {}; ++s < a;) {
                    var c = e[s],
                        l = n(t, c);
                    r(l, c) && i(u, o(c, t), l)
                }
                return u
            }
        },
        18587: function(t, e, r) {
            var n = r(26904),
                i = r(10940),
                o = r(8071);
            t.exports = function(t) {
                return n(t, o, i)
            }
        },
        74106: function(t, e, r) {
            var n = r(49468)(Object.getPrototypeOf, Object);
            t.exports = n
        },
        10940: function(t, e, r) {
            var n = r(62849),
                i = r(74106),
                o = r(62348),
                s = r(43349),
                a = Object.getOwnPropertySymbols ? function(t) {
                    for (var e = []; t;) n(e, o(t)), t = i(t);
                    return e
                } : s;
            t.exports = a
        },
        69996: function(t) {
            t.exports = function(t) {
                var e = [];
                if (null != t)
                    for (var r in Object(t)) e.push(r);
                return e
            }
        },
        18813: function(t) {
            t.exports = function(t) {
                return void 0 === t
            }
        },
        8071: function(t, e, r) {
            var n = r(45897),
                i = r(87144),
                o = r(97703);
            t.exports = function(t) {
                return o(t) ? n(t, !0) : i(t)
            }
        },
        33487: function(t) {
            t.exports = function(t) {
                if ("function" != typeof t) throw TypeError("Expected a function");
                return function() {
                    var e = arguments;
                    switch (e.length) {
                        case 0:
                            return !t.call(this);
                        case 1:
                            return !t.call(this, e[0]);
                        case 2:
                            return !t.call(this, e[0], e[1]);
                        case 3:
                            return !t.call(this, e[0], e[1], e[2])
                    }
                    return !t.apply(this, e)
                }
            }
        },
        95736: function(t, e, r) {
            var n = r(89308),
                i = r(33487),
                o = r(51464);
            t.exports = function(t, e) {
                return o(t, i(n(e)))
            }
        },
        51464: function(t, e, r) {
            var n = r(45667),
                i = r(89308),
                o = r(65188),
                s = r(18587);
            t.exports = function(t, e) {
                if (null == t) return {};
                var r = n(s(t), function(t) {
                    return [t]
                });
                return e = i(e), o(t, r, function(t, r) {
                    return e(t, r[0])
                })
            }
        },
        68571: function(t) {
            var e, r, n, i = t.exports = {};

            function o() {
                throw Error("setTimeout has not been defined")
            }

            function s() {
                throw Error("clearTimeout has not been defined")
            }

            function a(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                try {
                    return e(t, 0)
                } catch (r) {
                    try {
                        return e.call(null, t, 0)
                    } catch (r) {
                        return e.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    e = "function" == typeof setTimeout ? setTimeout : o
                } catch (t) {
                    e = o
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    r = s
                }
            }();
            var u = [],
                c = !1,
                l = -1;

            function h() {
                c && n && (c = !1, n.length ? u = n.concat(u) : l = -1, u.length && f())
            }

            function f() {
                if (!c) {
                    var t = a(h);
                    c = !0;
                    for (var e = u.length; e;) {
                        for (n = u, u = []; ++l < e;) n && n[l].run();
                        l = -1, e = u.length
                    }
                    n = null, c = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function d(t, e) {
                this.fun = t, this.array = e
            }

            function p() {}
            i.nextTick = function(t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                u.push(new d(t, e)), 1 !== u.length || c || a(f)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        72111: function(t, e, r) {
            "use strict";
            let n = r(28257),
                i = r(68505),
                o = r(2695),
                s = r(65838),
                a = t => null == t,
                u = Symbol("encodeFragmentIdentifier");

            function c(t) {
                if ("string" != typeof t || 1 !== t.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function l(t, e) {
                return e.encode ? e.strict ? n(t) : encodeURIComponent(t) : t
            }

            function h(t, e) {
                return e.decode ? i(t) : t
            }

            function f(t) {
                let e = t.indexOf("#");
                return -1 !== e && (t = t.slice(0, e)), t
            }

            function d(t) {
                t = f(t);
                let e = t.indexOf("?");
                return -1 === e ? "" : t.slice(e + 1)
            }

            function p(t, e) {
                return e.parseNumbers && !Number.isNaN(Number(t)) && "string" == typeof t && "" !== t.trim() ? t = Number(t) : e.parseBooleans && null !== t && ("true" === t.toLowerCase() || "false" === t.toLowerCase()) && (t = "true" === t.toLowerCase()), t
            }

            function y(t, e) {
                c((e = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, e)).arrayFormatSeparator);
                let r = function(t) {
                        let e;
                        switch (t.arrayFormat) {
                            case "index":
                                return (t, r, n) => {
                                    if (e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), !e) {
                                        n[t] = r;
                                        return
                                    }
                                    void 0 === n[t] && (n[t] = {}), n[t][e[1]] = r
                                };
                            case "bracket":
                                return (t, r, n) => {
                                    if (e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), !e) {
                                        n[t] = r;
                                        return
                                    }
                                    if (void 0 === n[t]) {
                                        n[t] = [r];
                                        return
                                    }
                                    n[t] = [].concat(n[t], r)
                                };
                            case "colon-list-separator":
                                return (t, r, n) => {
                                    if (e = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), !e) {
                                        n[t] = r;
                                        return
                                    }
                                    if (void 0 === n[t]) {
                                        n[t] = [r];
                                        return
                                    }
                                    n[t] = [].concat(n[t], r)
                                };
                            case "comma":
                            case "separator":
                                return (e, r, n) => {
                                    let i = "string" == typeof r && r.includes(t.arrayFormatSeparator),
                                        o = "string" == typeof r && !i && h(r, t).includes(t.arrayFormatSeparator);
                                    r = o ? h(r, t) : r;
                                    let s = i || o ? r.split(t.arrayFormatSeparator).map(e => h(e, t)) : null === r ? r : h(r, t);
                                    n[e] = s
                                };
                            case "bracket-separator":
                                return (e, r, n) => {
                                    let i = /(\[\])$/.test(e);
                                    if (e = e.replace(/\[\]$/, ""), !i) {
                                        n[e] = r ? h(r, t) : r;
                                        return
                                    }
                                    let o = null === r ? [] : r.split(t.arrayFormatSeparator).map(e => h(e, t));
                                    if (void 0 === n[e]) {
                                        n[e] = o;
                                        return
                                    }
                                    n[e] = [].concat(n[e], o)
                                };
                            default:
                                return (t, e, r) => {
                                    if (void 0 === r[t]) {
                                        r[t] = e;
                                        return
                                    }
                                    r[t] = [].concat(r[t], e)
                                }
                        }
                    }(e),
                    n = Object.create(null);
                if ("string" != typeof t || !(t = t.trim().replace(/^[?#&]/, ""))) return n;
                for (let i of t.split("&")) {
                    if ("" === i) continue;
                    let [t, s] = o(e.decode ? i.replace(/\+/g, " ") : i, "=");
                    s = void 0 === s ? null : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat) ? s : h(s, e), r(h(t, e), s, n)
                }
                for (let t of Object.keys(n)) {
                    let r = n[t];
                    if ("object" == typeof r && null !== r)
                        for (let t of Object.keys(r)) r[t] = p(r[t], e);
                    else n[t] = p(r, e)
                }
                return !1 === e.sort ? n : (!0 === e.sort ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce((t, e) => {
                    let r = n[e];
                    return r && "object" == typeof r && !Array.isArray(r) ? t[e] = function t(e) {
                        return Array.isArray(e) ? e.sort() : "object" == typeof e ? t(Object.keys(e)).sort((t, e) => Number(t) - Number(e)).map(t => e[t]) : e
                    }(r) : t[e] = r, t
                }, Object.create(null))
            }
            e.extract = d, e.parse = y, e.stringify = (t, e) => {
                if (!t) return "";
                c((e = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, e)).arrayFormatSeparator);
                let r = r => e.skipNull && a(t[r]) || e.skipEmptyString && "" === t[r],
                    n = function(t) {
                        switch (t.arrayFormat) {
                            case "index":
                                return e => (r, n) => {
                                    let i = r.length;
                                    return void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [l(e, t), "[", i, "]"].join("")] : [...r, [l(e, t), "[", l(i, t), "]=", l(n, t)].join("")]
                                };
                            case "bracket":
                                return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [l(e, t), "[]"].join("")] : [...r, [l(e, t), "[]=", l(n, t)].join("")];
                            case "colon-list-separator":
                                return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [l(e, t), ":list="].join("")] : [...r, [l(e, t), ":list=", l(n, t)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let e = "bracket-separator" === t.arrayFormat ? "[]=" : "=";
                                    return r => (n, i) => void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length) ? [
                                        [l(r, t), e, l(i, t)].join("")
                                    ] : [
                                        [n, l(i, t)].join(t.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, l(e, t)] : [...r, [l(e, t), "=", l(n, t)].join("")]
                        }
                    }(e),
                    i = {};
                for (let e of Object.keys(t)) r(e) || (i[e] = t[e]);
                let o = Object.keys(i);
                return !1 !== e.sort && o.sort(e.sort), o.map(r => {
                    let i = t[r];
                    return void 0 === i ? "" : null === i ? l(r, e) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === e.arrayFormat ? l(r, e) + "[]" : i.reduce(n(r), []).join("&") : l(r, e) + "=" + l(i, e)
                }).filter(t => t.length > 0).join("&")
            }, e.parseUrl = (t, e) => {
                e = Object.assign({
                    decode: !0
                }, e);
                let [r, n] = o(t, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: y(d(t), e)
                }, e && e.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: h(n, e)
                } : {})
            }, e.stringifyUrl = (t, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [u]: !0
                }, r);
                let n = f(t.url).split("?")[0] || "",
                    i = e.extract(t.url),
                    o = e.parse(i, {
                        sort: !1
                    }),
                    s = Object.assign(o, t.query),
                    a = e.stringify(s, r);
                a && (a = `?${a}`);
                let c = function(t) {
                    let e = "",
                        r = t.indexOf("#");
                    return -1 !== r && (e = t.slice(r)), e
                }(t.url);
                return t.fragmentIdentifier && (c = `#${r[u]?l(t.fragmentIdentifier,r):t.fragmentIdentifier}`), `${n}${a}${c}`
            }, e.pick = (t, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [u]: !1
                }, n);
                let {
                    url: i,
                    query: o,
                    fragmentIdentifier: a
                } = e.parseUrl(t, n);
                return e.stringifyUrl({
                    url: i,
                    query: s(o, r),
                    fragmentIdentifier: a
                }, n)
            }, e.exclude = (t, r, n) => {
                let i = Array.isArray(r) ? t => !r.includes(t) : (t, e) => !r(t, e);
                return e.pick(t, i, n)
            }
        },
        2695: function(t) {
            "use strict";
            t.exports = (t, e) => {
                if (!("string" == typeof t && "string" == typeof e)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === e) return [t];
                let r = t.indexOf(e);
                return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)]
            }
        },
        28257: function(t) {
            "use strict";
            t.exports = t => encodeURIComponent(t).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`)
        },
        14701: function(t, e, r) {
            "use strict";
            r.d(e, {
                a3: function() {
                    return o
                }
            });
            var n = r(82256),
                i = r(36718);

            function o(t) {
                return "groupName" in t[0] ? s(t) : s([{
                    groupName: "",
                    wallets: t
                }])()
            }
            r(2265);
            var s = t => () => {
                let e = -1,
                    r = [],
                    o = [],
                    s = [],
                    a = [];
                t.forEach(({
                    groupName: t,
                    wallets: r
                }, i) => {
                    r.forEach(r => {
                        if (e++, (null == r ? void 0 : r.iconAccent) && !(0, n.A7)(null == r ? void 0 : r.iconAccent)) throw Error(`Property \`iconAccent\` is not a hex value for wallet: ${r.name}`);
                        let a = { ...r,
                            groupIndex: i,
                            groupName: t,
                            index: e
                        };
                        "function" == typeof r.hidden ? s.push(a) : o.push(a)
                    })
                });
                let u = [...o, ...s];
                return u.forEach(({
                    createConnector: t,
                    groupIndex: e,
                    groupName: o,
                    hidden: s,
                    index: u,
                    ...c
                }) => {
                    let l;
                    if ("function" == typeof s) {
                        let t = s({
                            wallets: [...a.map(({
                                connector: t,
                                id: e,
                                installed: r,
                                name: n
                            }) => ({
                                connector: t,
                                id: e,
                                installed: r,
                                name: n
                            }))]
                        });
                        if (t) return
                    }
                    let {
                        connector: h,
                        ...f
                    } = Object.fromEntries(Object.entries(t()).filter(([t, e]) => void 0 !== e));
                    if ("walletConnect" === c.id && f.qrCode && !(0, n.tq)()) {
                        let {
                            chains: t,
                            options: e
                        } = h;
                        l = new i.z({
                            chains: t,
                            options: { ...e,
                                showQrModal: !0
                            }
                        }), r.push(l)
                    }
                    let d = {
                        connector: h,
                        groupIndex: e,
                        groupName: o,
                        index: u,
                        walletConnectModalConnector: l,
                        ...c,
                        ...f
                    };
                    a.push(d), r.includes(h) || (r.push(h), h._wallets = []), h._wallets.push(d)
                }), r
            };
            n.xZ, n.Bg, n.VQ, n.UG
        },
        37121: function(t, e, r) {
            "use strict";
            r.d(e, {
                D: function() {
                    return b
                }
            });
            var n, i, o = r(64471),
                s = r(5165),
                a = r(99167),
                u = r(86694),
                c = r(96240),
                l = r(78123),
                h = r(15741),
                f = r(20492),
                d = r(62484),
                p = r(44856),
                y = class extends c.wR {
                    constructor({
                        chains: t,
                        options: e
                    }) {
                        super({
                            chains: t,
                            options: {
                                reloadOnDisconnect: !1,
                                ...e
                            }
                        }), this.id = "coinbaseWallet", this.name = "Coinbase Wallet", this.ready = !0, (0, c.Ko)(this, n, void 0), (0, c.Ko)(this, i, void 0), this.onAccountsChanged = t => {
                            0 === t.length ? this.emit("disconnect") : this.emit("change", {
                                account: (0, l.K)(t[0])
                            })
                        }, this.onChainChanged = t => {
                            let e = (0, u.J)(t),
                                r = this.isChainUnsupported(e);
                            this.emit("change", {
                                chain: {
                                    id: e,
                                    unsupported: r
                                }
                            })
                        }, this.onDisconnect = () => {
                            this.emit("disconnect")
                        }
                    }
                    async connect({
                        chainId: t
                    } = {}) {
                        try {
                            let e = await this.getProvider();
                            e.on("accountsChanged", this.onAccountsChanged), e.on("chainChanged", this.onChainChanged), e.on("disconnect", this.onDisconnect), this.emit("message", {
                                type: "connecting"
                            });
                            let r = await e.enable(),
                                n = (0, l.K)(r[0]),
                                i = await this.getChainId(),
                                o = this.isChainUnsupported(i);
                            if (t && i !== t) {
                                let e = await this.switchChain(t);
                                i = e.id, o = this.isChainUnsupported(i)
                            }
                            return {
                                account: n,
                                chain: {
                                    id: i,
                                    unsupported: o
                                }
                            }
                        } catch (t) {
                            if (/(user closed modal|accounts received is empty)/i.test(t.message)) throw new h.ab(t);
                            throw t
                        }
                    }
                    async disconnect() {
                        if (!(0, c.ac)(this, i)) return;
                        let t = await this.getProvider();
                        t.removeListener("accountsChanged", this.onAccountsChanged), t.removeListener("chainChanged", this.onChainChanged), t.removeListener("disconnect", this.onDisconnect), t.disconnect(), t.close()
                    }
                    async getAccount() {
                        let t = await this.getProvider(),
                            e = await t.request({
                                method: "eth_accounts"
                            });
                        return (0, l.K)(e[0])
                    }
                    async getChainId() {
                        let t = await this.getProvider(),
                            e = (0, u.J)(t.chainId);
                        return e
                    }
                    async getProvider() {
                        if (!(0, c.ac)(this, i)) {
                            let t = (await Promise.all([r.e(1328), r.e(3639), r.e(7097)]).then(r.t.bind(r, 53639, 19))).default;
                            "function" != typeof t && "function" == typeof t.default && (t = t.default), (0, c.qx)(this, n, new t(this.options));
                            let e = c.ac(this, n).walletExtension ? .getChainId(),
                                o = this.chains.find(t => this.options.chainId ? t.id === this.options.chainId : t.id === e) || this.chains[0],
                                s = this.options.chainId || o ? .id,
                                a = this.options.jsonRpcUrl || o ? .rpcUrls.default.http[0];
                            (0, c.qx)(this, i, (0, c.ac)(this, n).makeWeb3Provider(a, s))
                        }
                        return (0, c.ac)(this, i)
                    }
                    async getWalletClient({
                        chainId: t
                    } = {}) {
                        let [e, r] = await Promise.all([this.getProvider(), this.getAccount()]), n = this.chains.find(e => e.id === t);
                        if (!e) throw Error("provider is required.");
                        return (0, f.K)({
                            account: r,
                            chain: n,
                            transport: (0, d.P)(e)
                        })
                    }
                    async isAuthorized() {
                        try {
                            let t = await this.getAccount();
                            return !!t
                        } catch {
                            return !1
                        }
                    }
                    async switchChain(t) {
                        let e = await this.getProvider(),
                            r = (0, p.eC)(t);
                        try {
                            return await e.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: r
                                }]
                            }), this.chains.find(e => e.id === t) ? ? {
                                id: t,
                                name: `Chain ${r}`,
                                network: `${r}`,
                                nativeCurrency: {
                                    name: "Ether",
                                    decimals: 18,
                                    symbol: "ETH"
                                },
                                rpcUrls: {
                                    default: {
                                        http: [""]
                                    },
                                    public: {
                                        http: [""]
                                    }
                                }
                            }
                        } catch (i) {
                            let n = this.chains.find(e => e.id === t);
                            if (!n) throw new a.B({
                                chainId: t,
                                connectorId: this.id
                            });
                            if (4902 === i.code) try {
                                return await e.request({
                                    method: "wallet_addEthereumChain",
                                    params: [{
                                        chainId: r,
                                        chainName: n.name,
                                        nativeCurrency: n.nativeCurrency,
                                        rpcUrls: [n.rpcUrls.public ? .http[0] ? ? ""],
                                        blockExplorerUrls: this.getBlockExplorerUrls(n)
                                    }]
                                }), n
                            } catch (t) {
                                throw new h.ab(t)
                            }
                            throw new h.x3(i)
                        }
                    }
                    async watchAsset({
                        address: t,
                        decimals: e = 18,
                        image: r,
                        symbol: n
                    }) {
                        let i = await this.getProvider();
                        return i.request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: t,
                                    decimals: e,
                                    image: r,
                                    symbol: n
                                }
                            }
                        })
                    }
                };
            n = new WeakMap, i = new WeakMap;
            var b = ({
                appName: t,
                chains: e,
                ...n
            }) => {
                let i = (0, o.B)("isCoinbaseWallet");
                return {
                    id: "coinbase",
                    name: "Coinbase Wallet",
                    shortName: "Coinbase",
                    iconUrl: async () => (await r.e(4529).then(r.bind(r, 54529))).default,
                    iconAccent: "#2c5ff6",
                    iconBackground: "#2c5ff6",
                    installed: i || void 0,
                    downloadUrls: {
                        android: "https://play.google.com/store/apps/details?id=org.toshi",
                        ios: "https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455",
                        mobile: "https://coinbase.com/wallet/downloads",
                        qrCode: "https://coinbase-wallet.onelink.me/q5Sx/fdb9b250",
                        chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
                        browserExtension: "https://coinbase.com/wallet"
                    },
                    createConnector: () => {
                        let r = (0, s.gn)(),
                            i = new y({
                                chains: e,
                                options: {
                                    appName: t,
                                    headlessMode: !0,
                                    ...n
                                }
                            }),
                            o = async () => (await i.getProvider()).qrUrl;
                        return {
                            connector: i,
                            ...r ? {} : {
                                qrCode: {
                                    getUri: o,
                                    instructions: {
                                        learnMoreUrl: "https://coinbase.com/wallet/articles/getting-started-mobile",
                                        steps: [{
                                            description: "wallet_connectors.coinbase.qr_code.step1.description",
                                            step: "install",
                                            title: "wallet_connectors.coinbase.qr_code.step1.title"
                                        }, {
                                            description: "wallet_connectors.coinbase.qr_code.step2.description",
                                            step: "create",
                                            title: "wallet_connectors.coinbase.qr_code.step2.title"
                                        }, {
                                            description: "wallet_connectors.coinbase.qr_code.step3.description",
                                            step: "scan",
                                            title: "wallet_connectors.coinbase.qr_code.step3.title"
                                        }]
                                    }
                                },
                                extension: {
                                    instructions: {
                                        learnMoreUrl: "https://coinbase.com/wallet/articles/getting-started-extension",
                                        steps: [{
                                            description: "wallet_connectors.coinbase.extension.step1.description",
                                            step: "install",
                                            title: "wallet_connectors.coinbase.extension.step1.title"
                                        }, {
                                            description: "wallet_connectors.coinbase.extension.step2.description",
                                            step: "create",
                                            title: "wallet_connectors.coinbase.extension.step2.title"
                                        }, {
                                            description: "wallet_connectors.coinbase.extension.step3.description",
                                            step: "refresh",
                                            title: "wallet_connectors.coinbase.extension.step3.title"
                                        }]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        64471: function(t, e, r) {
            "use strict";
            r.d(e, {
                B: function() {
                    return o
                },
                K: function() {
                    return s
                }
            });
            var n = r(77845);

            function i(t) {
                if ("undefined" == typeof window || void 0 === window.ethereum) return;
                let e = window.ethereum.providers;
                return e ? e.find(e => e[t]) : window.ethereum[t] ? window.ethereum : void 0
            }

            function o(t) {
                return !!i(t)
            }

            function s({
                chains: t,
                flag: e,
                options: r
            }) {
                return new n._({
                    chains: t,
                    options: {
                        getProvider: () => (function(t) {
                            if ("undefined" == typeof window || void 0 === window.ethereum) return;
                            let e = window.ethereum.providers,
                                r = i(t);
                            return r || (void 0 !== e && e.length > 0 ? e[0] : window.ethereum)
                        })(e),
                        ...r
                    }
                })
            }
        },
        91653: function(t, e, r) {
            "use strict";
            r.d(e, {
                U: function() {
                    return i
                }
            });
            var n = r(77845),
                i = ({
                    chains: t,
                    ...e
                }) => ({
                    id: "injected",
                    name: "Browser Wallet",
                    iconUrl: async () => (await r.e(7648).then(r.bind(r, 47648))).default,
                    iconBackground: "#fff",
                    hidden: ({
                        wallets: t
                    }) => t.some(t => t.installed && t.name === t.connector.name && (t.connector instanceof n._ || "coinbase" === t.id)),
                    createConnector: () => ({
                        connector: new n._({
                            chains: t,
                            options: e
                        })
                    })
                })
        },
        27349: function(t, e, r) {
            "use strict";
            r.d(e, {
                P: function() {
                    return d
                }
            });
            var n, i = r(5165),
                o = r(89864),
                s = r(77845),
                a = r(99167),
                u = r(96240),
                c = r(15741),
                l = r(78123),
                h = class extends s._ {
                    constructor({
                        chains: t,
                        options: e
                    } = {}) {
                        let r = {
                            name: "MetaMask",
                            shimDisconnect: !0,
                            getProvider() {
                                function t(t) {
                                    let e = !!t ? .isMetaMask;
                                    if (e && (!t.isBraveWallet || t._events || t._state) && !t.isApexWallet && !t.isAvalanche && !t.isBitKeep && !t.isBlockWallet && !t.isCoin98 && !t.isFordefi && !t.isMathWallet && !t.isOkxWallet && !t.isOKExWallet && !t.isOneInchIOSWallet && !t.isOneInchAndroidWallet && !t.isOpera && !t.isPortal && !t.isRabby && !t.isDefiant && !t.isTokenPocket && !t.isTokenary && !t.isZeal && !t.isZerion) return t
                                }
                                if ("undefined" == typeof window) return;
                                let e = window.ethereum;
                                return e ? .providers ? e.providers.find(t) : t(e)
                            },
                            ...e
                        };
                        super({
                            chains: t,
                            options: r
                        }), this.id = "metaMask", this.shimDisconnectKey = `${this.id}.shimDisconnect`, (0, u.Ko)(this, n, void 0), (0, u.qx)(this, n, r.UNSTABLE_shimOnConnectSelectAccount)
                    }
                    async connect({
                        chainId: t
                    } = {}) {
                        try {
                            let e = await this.getProvider();
                            if (!e) throw new a.N;
                            e.on && (e.on("accountsChanged", this.onAccountsChanged), e.on("chainChanged", this.onChainChanged), e.on("disconnect", this.onDisconnect)), this.emit("message", {
                                type: "connecting"
                            });
                            let r = null;
                            if ((0, u.ac)(this, n) && this.options ? .shimDisconnect && !this.storage ? .getItem(this.shimDisconnectKey)) {
                                r = await this.getAccount().catch(() => null);
                                let t = !!r;
                                if (t) try {
                                    await e.request({
                                        method: "wallet_requestPermissions",
                                        params: [{
                                            eth_accounts: {}
                                        }]
                                    }), r = await this.getAccount()
                                } catch (t) {
                                    if (this.isUserRejectedRequestError(t)) throw new c.ab(t);
                                    if (t.code === new c.pT(t).code) throw t
                                }
                            }
                            if (!r) {
                                let t = await e.request({
                                    method: "eth_requestAccounts"
                                });
                                r = (0, l.K)(t[0])
                            }
                            let i = await this.getChainId(),
                                o = this.isChainUnsupported(i);
                            if (t && i !== t) {
                                let e = await this.switchChain(t);
                                i = e.id, o = this.isChainUnsupported(i)
                            }
                            return this.options ? .shimDisconnect && this.storage ? .setItem(this.shimDisconnectKey, !0), {
                                account: r,
                                chain: {
                                    id: i,
                                    unsupported: o
                                },
                                provider: e
                            }
                        } catch (t) {
                            if (this.isUserRejectedRequestError(t)) throw new c.ab(t);
                            if (-32002 === t.code) throw new c.pT(t);
                            throw t
                        }
                    }
                };

            function f(t) {
                return !!(null == t ? void 0 : t.isMetaMask) && (!t.isBraveWallet || !!t._events || !!t._state) && !t.isApexWallet && !t.isAvalanche && !t.isBackpack && !t.isBifrost && !t.isBitKeep && !t.isBitski && !t.isBlockWallet && !t.isCoinbaseWallet && !t.isDawn && !t.isEnkrypt && !t.isExodus && !t.isFrame && !t.isFrontier && !t.isGamestop && !t.isHyperPay && !t.isImToken && !t.isKuCoinWallet && !t.isMathWallet && !t.isOkxWallet && !t.isOKExWallet && !t.isOneInchIOSWallet && !t.isOneInchAndroidWallet && !t.isOpera && !t.isPhantom && !t.isPortal && !t.isRabby && !t.isRainbow && !t.isStatus && !t.isTalisman && !t.isTally && !t.isTokenPocket && !t.isTokenary && !t.isTrust && !t.isTrustWallet && !t.isXDEFI && !t.isZeal && !t.isZerion
            }
            n = new WeakMap;
            var d = ({
                chains: t,
                projectId: e,
                walletConnectOptions: n,
                walletConnectVersion: s = "2",
                ...a
            }) => {
                var u, c;
                let l = "undefined" != typeof window && (null == (u = window.ethereum) ? void 0 : u.providers),
                    d = "undefined" != typeof window && void 0 !== window.ethereum && ((null == (c = window.ethereum.providers) ? void 0 : c.some(f)) || window.ethereum.isMetaMask),
                    p = !d;
                return {
                    id: "metaMask",
                    name: "MetaMask",
                    iconUrl: async () => (await r.e(3459).then(r.bind(r, 63459))).default,
                    iconAccent: "#f6851a",
                    iconBackground: "#fff",
                    installed: p ? void 0 : d,
                    downloadUrls: {
                        android: "https://play.google.com/store/apps/details?id=io.metamask",
                        ios: "https://apps.apple.com/us/app/metamask/id1438144202",
                        mobile: "https://metamask.io/download",
                        qrCode: "https://metamask.io/download",
                        chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
                        edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
                        firefox: "https://addons.mozilla.org/firefox/addon/ether-metamask",
                        opera: "https://addons.opera.com/extensions/details/metamask-10",
                        browserExtension: "https://metamask.io/download"
                    },
                    createConnector: () => {
                        let r = p ? (0, o.d)({
                                projectId: e,
                                chains: t,
                                version: s,
                                options: n
                            }) : new h({
                                chains: t,
                                options: {
                                    getProvider: () => l ? l.find(f) : "undefined" != typeof window ? window.ethereum : void 0,
                                    ...a
                                }
                            }),
                            u = async () => {
                                let t = await (0, o.J)(r, s);
                                return (0, i.Dt)() ? t : (0, i.gn)() ? `metamask://wc?uri=${encodeURIComponent(t)}` : `https://metamask.app.link/wc?uri=${encodeURIComponent(t)}`
                            };
                        return {
                            connector: r,
                            mobile: {
                                getUri: p ? u : void 0
                            },
                            qrCode: p ? {
                                getUri: u,
                                instructions: {
                                    learnMoreUrl: "https://metamask.io/faqs/",
                                    steps: [{
                                        description: "wallet_connectors.metamask.qr_code.step1.description",
                                        step: "install",
                                        title: "wallet_connectors.metamask.qr_code.step1.title"
                                    }, {
                                        description: "wallet_connectors.metamask.qr_code.step2.description",
                                        step: "create",
                                        title: "wallet_connectors.metamask.qr_code.step2.title"
                                    }, {
                                        description: "wallet_connectors.metamask.qr_code.step3.description",
                                        step: "refresh",
                                        title: "wallet_connectors.metamask.qr_code.step3.title"
                                    }]
                                }
                            } : void 0,
                            extension: {
                                instructions: {
                                    learnMoreUrl: "https://metamask.io/faqs/",
                                    steps: [{
                                        description: "wallet_connectors.metamask.extension.step1.description",
                                        step: "install",
                                        title: "wallet_connectors.metamask.extension.step1.title"
                                    }, {
                                        description: "wallet_connectors.metamask.extension.step2.description",
                                        step: "create",
                                        title: "wallet_connectors.metamask.extension.step2.title"
                                    }, {
                                        description: "wallet_connectors.metamask.extension.step3.description",
                                        step: "refresh",
                                        title: "wallet_connectors.metamask.extension.step3.title"
                                    }]
                                }
                            }
                        }
                    }
                }
            }
        },
        89864: function(t, e, r) {
            "use strict";
            r.d(e, {
                d: function() {
                    return m
                },
                J: function() {
                    return b
                }
            });
            var n, i, o, s = r(36718),
                a = r(86694),
                u = r(96240),
                c = r(78123),
                l = r(15741),
                h = r(20492),
                f = r(62484),
                d = r(44856),
                p = /(imtoken|metamask|rainbow|trust wallet|uniswap wallet|ledger)/i,
                y = class extends u.wR {
                    constructor() {
                        super(...arguments), (0, u.Ko)(this, i), this.id = "walletConnectLegacy", this.name = "WalletConnectLegacy", this.ready = !0, (0, u.Ko)(this, n, void 0), this.onAccountsChanged = t => {
                            0 === t.length ? this.emit("disconnect") : this.emit("change", {
                                account: (0, c.K)(t[0])
                            })
                        }, this.onChainChanged = t => {
                            let e = (0, a.J)(t),
                                r = this.isChainUnsupported(e);
                            this.emit("change", {
                                chain: {
                                    id: e,
                                    unsupported: r
                                }
                            })
                        }, this.onDisconnect = () => {
                            this.emit("disconnect")
                        }
                    }
                    async connect({
                        chainId: t
                    } = {}) {
                        try {
                            let e = t;
                            if (!e) {
                                let t = this.storage ? .getItem("store"),
                                    r = t ? .state ? .data ? .chain ? .id;
                                r && !this.isChainUnsupported(r) && (e = r)
                            }
                            let r = await this.getProvider({
                                chainId: e,
                                create: !0
                            });
                            r.on("accountsChanged", this.onAccountsChanged), r.on("chainChanged", this.onChainChanged), r.on("disconnect", this.onDisconnect), setTimeout(() => this.emit("message", {
                                type: "connecting"
                            }), 0);
                            let n = await r.enable(),
                                s = (0, c.K)(n[0]),
                                a = await this.getChainId(),
                                l = this.isChainUnsupported(a),
                                h = r.connector ? .peerMeta ? .name ? ? "";
                            return p.test(h) && (this.switchChain = (0, u.U9)(this, i, o)), {
                                account: s,
                                chain: {
                                    id: a,
                                    unsupported: l
                                }
                            }
                        } catch (t) {
                            if (/user closed modal/i.test(t.message)) throw new l.ab(t);
                            throw t
                        }
                    }
                    async disconnect() {
                        let t = await this.getProvider();
                        await t.disconnect(), t.removeListener("accountsChanged", this.onAccountsChanged), t.removeListener("chainChanged", this.onChainChanged), t.removeListener("disconnect", this.onDisconnect), "undefined" != typeof localStorage && localStorage.removeItem("walletconnect")
                    }
                    async getAccount() {
                        let t = await this.getProvider(),
                            e = t.accounts;
                        return (0, c.K)(e[0])
                    }
                    async getChainId() {
                        let t = await this.getProvider(),
                            e = (0, a.J)(t.chainId);
                        return e
                    }
                    async getProvider({
                        chainId: t,
                        create: e
                    } = {}) {
                        if (!(0, u.ac)(this, n) || t || e) {
                            let e = this.options ? .infuraId ? {} : this.chains.reduce((t, e) => ({ ...t,
                                    [e.id]: e.rpcUrls.default.http[0]
                                }), {}),
                                i = (await Promise.all([r.e(1328), r.e(9943), r.e(6637), r.e(3978)]).then(r.bind(r, 83978))).default;
                            (0, u.qx)(this, n, new i({ ...this.options,
                                chainId: t,
                                rpc: { ...e,
                                    ...this.options ? .rpc
                                }
                            })), (0, u.ac)(this, n).http = await (0, u.ac)(this, n).setHttpProvider(t)
                        }
                        return (0, u.ac)(this, n)
                    }
                    async getWalletClient({
                        chainId: t
                    } = {}) {
                        let [e, r] = await Promise.all([this.getProvider({
                            chainId: t
                        }), this.getAccount()]), n = this.chains.find(e => e.id === t);
                        if (!e) throw Error("provider is required.");
                        return (0, h.K)({
                            account: r,
                            chain: n,
                            transport: (0, f.P)(e)
                        })
                    }
                    async isAuthorized() {
                        try {
                            let t = await this.getAccount();
                            return !!t
                        } catch {
                            return !1
                        }
                    }
                };
            async function b(t, e) {
                let r = await t.getProvider();
                return "2" === e ? new Promise(t => r.once("display_uri", t)) : r.connector.uri
            }
            n = new WeakMap, i = new WeakSet, o = async function(t) {
                let e = await this.getProvider(),
                    r = (0, d.eC)(t);
                try {
                    return await Promise.race([e.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: r
                        }]
                    }), new Promise(e => this.on("change", ({
                        chain: r
                    }) => {
                        r ? .id === t && e(t)
                    }))]), this.chains.find(e => e.id === t) ? ? {
                        id: t,
                        name: `Chain ${r}`,
                        network: `${r}`,
                        nativeCurrency: {
                            name: "Ether",
                            decimals: 18,
                            symbol: "ETH"
                        },
                        rpcUrls: {
                            default: {
                                http: [""]
                            },
                            public: {
                                http: [""]
                            }
                        }
                    }
                } catch (e) {
                    let t = "string" == typeof e ? e : e ? .message;
                    if (/user rejected request/i.test(t)) throw new l.ab(e);
                    throw new l.x3(e)
                }
            };
            var D = new Map;

            function m({
                chains: t,
                options: e = {},
                projectId: r,
                version: n = "2"
            }) {
                let i = "21fef48091f12692cad574a6f7753643";
                if ("2" === n) {
                    if (r && "" !== r)("YOUR_PROJECT_ID" === r || r === i) && console.warn("Invalid projectId. Please create a unique WalletConnect Cloud projectId for your dApp https://www.rainbowkit.com/docs/installation#configure");
                    else throw Error("No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure")
                }
                let o = {
                        chains: t,
                        options: "1" === n ? {
                            qrcode: !1,
                            ...e
                        } : {
                            projectId: "YOUR_PROJECT_ID" === r ? i : r,
                            showQrModal: !1,
                            ...e
                        }
                    },
                    a = JSON.stringify(o),
                    u = D.get(a);
                return null != u ? u : function(t, e) {
                    let r = "1" === t ? new y(e) : new s.z(e);
                    return D.set(JSON.stringify(e), r), r
                }(n, o)
            }
        },
        81231: function(t, e, r) {
            "use strict";
            r.d(e, {
                m: function() {
                    return i
                }
            });
            var n = r(77845),
                i = ({
                    chains: t,
                    ...e
                }) => {
                    var i;
                    return {
                        id: "frame",
                        name: "Frame",
                        installed: "undefined" != typeof window && void 0 !== window.ethereum && (!0 === window.ethereum.isFrame || !!(null == (i = window.ethereum.providers) ? void 0 : i.find(t => !0 === t.isFrame))),
                        iconUrl: async () => (await r.e(1763).then(r.bind(r, 21763))).default,
                        iconBackground: "#121C20",
                        downloadUrls: {
                            browserExtension: "https://frame.sh/"
                        },
                        createConnector: () => ({
                            connector: new n._({
                                chains: t,
                                options: e
                            }),
                            extension: {
                                instructions: {
                                    learnMoreUrl: "https://docs.frame.sh/docs/Getting%20Started/Installation/",
                                    steps: [{
                                        description: "wallet_connectors.frame.extension.step1.description",
                                        step: "install",
                                        title: "wallet_connectors.frame.extension.step1.title"
                                    }, {
                                        description: "wallet_connectors.frame.extension.step2.description",
                                        step: "create",
                                        title: "wallet_connectors.frame.extension.step2.title"
                                    }, {
                                        description: "wallet_connectors.frame.extension.step3.description",
                                        step: "refresh",
                                        title: "wallet_connectors.frame.extension.step3.title"
                                    }]
                                }
                            }
                        })
                    }
                }
        },
        86257: function(t, e, r) {
            "use strict";
            r.d(e, {
                p: function() {
                    return s
                }
            });
            var n = r(64471),
                i = r(5165),
                o = r(89864),
                s = ({
                    chains: t,
                    projectId: e,
                    walletConnectOptions: s,
                    walletConnectVersion: a = "2",
                    ...u
                }) => {
                    let c = (0, i.tq)() ? (0, n.B)("isTrust") : (0, n.B)("isTrustWallet"),
                        l = !c;
                    return {
                        id: "trust",
                        name: "Trust Wallet",
                        iconUrl: async () => (await r.e(4029).then(r.bind(r, 94029))).default,
                        installed: c || void 0,
                        iconAccent: "#3375BB",
                        iconBackground: "#fff",
                        downloadUrls: {
                            android: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
                            ios: "https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409",
                            mobile: "https://trustwallet.com/download",
                            qrCode: "https://trustwallet.com/download",
                            chrome: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
                            browserExtension: "https://trustwallet.com/browser-extension"
                        },
                        createConnector: () => {
                            let r;
                            let c = async () => {
                                    let t = await (0, o.J)(f, a);
                                    return `trust://wc?uri=${encodeURIComponent(t)}`
                                },
                                h = async () => {
                                    let t = await (0, o.J)(f, a);
                                    return t
                                },
                                f = l ? (0, o.d)({
                                    projectId: e,
                                    chains: t,
                                    version: a,
                                    options: s
                                }) : (0, i.tq)() ? (0, n.K)({
                                    flag: "isTrust",
                                    chains: t,
                                    options: u
                                }) : (0, n.K)({
                                    flag: "isTrustWallet",
                                    chains: t,
                                    options: u
                                });
                            return l && (r = {
                                getUri: h,
                                instructions: {
                                    learnMoreUrl: "https://trustwallet.com/",
                                    steps: [{
                                        description: "wallet_connectors.trust.qr_code.step1.description",
                                        step: "install",
                                        title: "wallet_connectors.trust.qr_code.step1.title"
                                    }, {
                                        description: "wallet_connectors.trust.qr_code.step2.description",
                                        step: "create",
                                        title: "wallet_connectors.trust.qr_code.step2.title"
                                    }, {
                                        description: "wallet_connectors.trust.qr_code.step3.description",
                                        step: "scan",
                                        title: "wallet_connectors.trust.qr_code.step3.title"
                                    }]
                                }
                            }), {
                                connector: f,
                                mobile: {
                                    getUri: l ? c : void 0
                                },
                                qrCode: r,
                                extension: {
                                    instructions: {
                                        learnMoreUrl: "https://trustwallet.com/browser-extension",
                                        steps: [{
                                            description: "wallet_connectors.trust.extension.step1.description",
                                            step: "install",
                                            title: "wallet_connectors.trust.extension.step1.title"
                                        }, {
                                            description: "wallet_connectors.trust.extension.step2.description",
                                            step: "create",
                                            title: "wallet_connectors.trust.extension.step2.title"
                                        }, {
                                            description: "wallet_connectors.trust.extension.step3.description",
                                            step: "refresh",
                                            title: "wallet_connectors.trust.extension.step3.title"
                                        }]
                                    }
                                }
                            }
                        }
                    }
                }
        },
        5165: function(t, e, r) {
            "use strict";

            function n() {
                return "undefined" != typeof navigator && /android/i.test(navigator.userAgent)
            }

            function i() {
                return "undefined" != typeof navigator && /iPhone|iPod/.test(navigator.userAgent) || "undefined" != typeof navigator && (/iPad/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
            }

            function o() {
                return n() || i()
            }
            r.d(e, {
                Dt: function() {
                    return n
                },
                gn: function() {
                    return i
                },
                tq: function() {
                    return o
                }
            })
        },
        36320: function(t, e, r) {
            "use strict";
            r.d(e, {
                S: function() {
                    return b
                }
            });
            var n = r(34789),
                i = r(80854),
                o = r(24563),
                s = r(57195),
                a = r(95594);
            class u extends a.F {
                constructor(t) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || i._, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || function(t) {
                        let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                            r = void 0 !== e,
                            n = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                        return {
                            data: e,
                            dataUpdateCount: 0,
                            dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: r ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(t) {
                    this.options = { ...this.defaultOptions,
                        ...t
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(t, e) {
                    let r = (0, n.oE)(this.state.data, t, this.options);
                    return this.dispatch({
                        data: r,
                        type: "success",
                        dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                        manual: null == e ? void 0 : e.manual
                    }), r
                }
                setState(t, e) {
                    this.dispatch({
                        type: "setState",
                        state: t,
                        setStateOptions: e
                    })
                }
                cancel(t) {
                    var e;
                    let r = this.promise;
                    return null == (e = this.retryer) || e.cancel(t), r ? r.then(n.ZT).catch(n.ZT) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some(t => !1 !== t.options.enabled)
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(t => t.getCurrentResult().isStale)
                }
                isStaleByTime(t = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, n.Kp)(this.state.dataUpdatedAt, t)
                }
                onFocus() {
                    var t;
                    let e = this.observers.find(t => t.shouldFetchOnWindowFocus());
                    e && e.refetch({
                        cancelRefetch: !1
                    }), null == (t = this.retryer) || t.continue()
                }
                onOnline() {
                    var t;
                    let e = this.observers.find(t => t.shouldFetchOnReconnect());
                    e && e.refetch({
                        cancelRefetch: !1
                    }), null == (t = this.retryer) || t.continue()
                }
                addObserver(t) {
                    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: t
                    }))
                }
                removeObserver(t) {
                    this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: t
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(t, e) {
                    var r, i, o, a;
                    if ("idle" !== this.state.fetchStatus) {
                        if (this.state.dataUpdatedAt && null != e && e.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) return null == (o = this.retryer) || o.continueRetry(), this.promise
                    }
                    if (t && this.setOptions(t), !this.options.queryFn) {
                        let t = this.observers.find(t => t.options.queryFn);
                        t && this.setOptions(t.options)
                    }
                    Array.isArray(this.options.queryKey);
                    let u = (0, n.G9)(),
                        c = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        l = t => {
                            Object.defineProperty(t, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (u) return this.abortSignalConsumed = !0, u.signal
                                }
                            })
                        };
                    l(c);
                    let h = {
                        fetchOptions: e,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(c)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    l(h), null == (r = this.options.behavior) || r.onFetch(h), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (i = h.fetchOptions) ? void 0 : i.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (a = h.fetchOptions) ? void 0 : a.meta
                    });
                    let f = t => {
                        if ((0, s.DV)(t) && t.silent || this.dispatch({
                                type: "error",
                                error: t
                            }), !(0, s.DV)(t)) {
                            var e, r, n, i;
                            null == (e = (r = this.cache.config).onError) || e.call(r, t, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, this.state.data, t, this)
                        }
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, s.Mz)({
                        fn: h.fetchFn,
                        abort: null == u ? void 0 : u.abort.bind(u),
                        onSuccess: t => {
                            var e, r, n, i;
                            if (void 0 === t) {
                                f(Error(this.queryHash + " data is undefined"));
                                return
                            }
                            this.setData(t), null == (e = (r = this.cache.config).onSuccess) || e.call(r, t, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, t, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        },
                        onError: f,
                        onFail: (t, e) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: t,
                                error: e
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: h.options.retry,
                        retryDelay: h.options.retryDelay,
                        networkMode: h.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(t) {
                    this.state = (e => {
                        var r, n;
                        switch (t.type) {
                            case "failed":
                                return { ...e,
                                    fetchFailureCount: t.failureCount,
                                    fetchFailureReason: t.error
                                };
                            case "pause":
                                return { ...e,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...e,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...e,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (r = t.meta) ? r : null,
                                    fetchStatus: (0, s.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!e.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...e,
                                    data: t.data,
                                    dataUpdateCount: e.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (n = t.dataUpdatedAt) ? n : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!t.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                let i = t.error;
                                if ((0, s.DV)(i) && i.revert && this.revertState) return { ...this.revertState
                                };
                                return { ...e,
                                    error: i,
                                    errorUpdateCount: e.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: e.fetchFailureCount + 1,
                                    fetchFailureReason: i,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...e,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...e,
                                    ...t.state
                                }
                        }
                    })(this.state), o.V.batch(() => {
                        this.observers.forEach(e => {
                            e.onQueryUpdate(t)
                        }), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: t
                        })
                    })
                }
            }
            var c = r(9785);
            class l extends c.l {
                constructor(t) {
                    super(), this.config = t || {}, this.queries = [], this.queriesMap = {}
                }
                build(t, e, r) {
                    var i;
                    let o = e.queryKey,
                        s = null != (i = e.queryHash) ? i : (0, n.Rm)(o, e),
                        a = this.get(s);
                    return a || (a = new u({
                        cache: this,
                        logger: t.getLogger(),
                        queryKey: o,
                        queryHash: s,
                        options: t.defaultQueryOptions(e),
                        state: r,
                        defaultOptions: t.getQueryDefaults(o)
                    }), this.add(a)), a
                }
                add(t) {
                    this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
                        type: "added",
                        query: t
                    }))
                }
                remove(t) {
                    let e = this.queriesMap[t.queryHash];
                    e && (t.destroy(), this.queries = this.queries.filter(e => e !== t), e === t && delete this.queriesMap[t.queryHash], this.notify({
                        type: "removed",
                        query: t
                    }))
                }
                clear() {
                    o.V.batch(() => {
                        this.queries.forEach(t => {
                            this.remove(t)
                        })
                    })
                }
                get(t) {
                    return this.queriesMap[t]
                }
                getAll() {
                    return this.queries
                }
                find(t, e) {
                    let [r] = (0, n.I6)(t, e);
                    return void 0 === r.exact && (r.exact = !0), this.queries.find(t => (0, n._x)(r, t))
                }
                findAll(t, e) {
                    let [r] = (0, n.I6)(t, e);
                    return Object.keys(r).length > 0 ? this.queries.filter(t => (0, n._x)(r, t)) : this.queries
                }
                notify(t) {
                    o.V.batch(() => {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(t)
                        })
                    })
                }
                onFocus() {
                    o.V.batch(() => {
                        this.queries.forEach(t => {
                            t.onFocus()
                        })
                    })
                }
                onOnline() {
                    o.V.batch(() => {
                        this.queries.forEach(t => {
                            t.onOnline()
                        })
                    })
                }
            }
            var h = r(40920);
            class f extends c.l {
                constructor(t) {
                    super(), this.config = t || {}, this.mutations = [], this.mutationId = 0
                }
                build(t, e, r) {
                    let n = new h.m({
                        mutationCache: this,
                        logger: t.getLogger(),
                        mutationId: ++this.mutationId,
                        options: t.defaultMutationOptions(e),
                        state: r,
                        defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0
                    });
                    return this.add(n), n
                }
                add(t) {
                    this.mutations.push(t), this.notify({
                        type: "added",
                        mutation: t
                    })
                }
                remove(t) {
                    this.mutations = this.mutations.filter(e => e !== t), this.notify({
                        type: "removed",
                        mutation: t
                    })
                }
                clear() {
                    o.V.batch(() => {
                        this.mutations.forEach(t => {
                            this.remove(t)
                        })
                    })
                }
                getAll() {
                    return this.mutations
                }
                find(t) {
                    return void 0 === t.exact && (t.exact = !0), this.mutations.find(e => (0, n.X7)(t, e))
                }
                findAll(t) {
                    return this.mutations.filter(e => (0, n.X7)(t, e))
                }
                notify(t) {
                    o.V.batch(() => {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(t)
                        })
                    })
                }
                resumePausedMutations() {
                    var t;
                    return this.resuming = (null != (t = this.resuming) ? t : Promise.resolve()).then(() => {
                        let t = this.mutations.filter(t => t.state.isPaused);
                        return o.V.batch(() => t.reduce((t, e) => t.then(() => e.continue().catch(n.ZT)), Promise.resolve()))
                    }).then(() => {
                        this.resuming = void 0
                    }), this.resuming
                }
            }
            var d = r(96834),
                p = r(97490),
                y = r(13210);
            class b {
                constructor(t = {}) {
                    this.queryCache = t.queryCache || new l, this.mutationCache = t.mutationCache || new f, this.logger = t.logger || i._, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = d.j.subscribe(() => {
                        d.j.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    }), this.unsubscribeOnline = p.N.subscribe(() => {
                        p.N.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var t, e;
                    this.mountCount--, 0 === this.mountCount && (null == (t = this.unsubscribeFocus) || t.call(this), this.unsubscribeFocus = void 0, null == (e = this.unsubscribeOnline) || e.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(t, e) {
                    let [r] = (0, n.I6)(t, e);
                    return r.fetchStatus = "fetching", this.queryCache.findAll(r).length
                }
                isMutating(t) {
                    return this.mutationCache.findAll({ ...t,
                        fetching: !0
                    }).length
                }
                getQueryData(t, e) {
                    var r;
                    return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state.data
                }
                ensureQueryData(t, e, r) {
                    let i = (0, n._v)(t, e, r),
                        o = this.getQueryData(i.queryKey);
                    return o ? Promise.resolve(o) : this.fetchQuery(i)
                }
                getQueriesData(t) {
                    return this.getQueryCache().findAll(t).map(({
                        queryKey: t,
                        state: e
                    }) => {
                        let r = e.data;
                        return [t, r]
                    })
                }
                setQueryData(t, e, r) {
                    let i = this.queryCache.find(t),
                        o = null == i ? void 0 : i.state.data,
                        s = (0, n.SE)(e, o);
                    if (void 0 === s) return;
                    let a = (0, n._v)(t),
                        u = this.defaultQueryOptions(a);
                    return this.queryCache.build(this, u).setData(s, { ...r,
                        manual: !0
                    })
                }
                setQueriesData(t, e, r) {
                    return o.V.batch(() => this.getQueryCache().findAll(t).map(({
                        queryKey: t
                    }) => [t, this.setQueryData(t, e, r)]))
                }
                getQueryState(t, e) {
                    var r;
                    return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state
                }
                removeQueries(t, e) {
                    let [r] = (0, n.I6)(t, e), i = this.queryCache;
                    o.V.batch(() => {
                        i.findAll(r).forEach(t => {
                            i.remove(t)
                        })
                    })
                }
                resetQueries(t, e, r) {
                    let [i, s] = (0, n.I6)(t, e, r), a = this.queryCache, u = {
                        type: "active",
                        ...i
                    };
                    return o.V.batch(() => (a.findAll(i).forEach(t => {
                        t.reset()
                    }), this.refetchQueries(u, s)))
                }
                cancelQueries(t, e, r) {
                    let [i, s = {}] = (0, n.I6)(t, e, r);
                    void 0 === s.revert && (s.revert = !0);
                    let a = o.V.batch(() => this.queryCache.findAll(i).map(t => t.cancel(s)));
                    return Promise.all(a).then(n.ZT).catch(n.ZT)
                }
                invalidateQueries(t, e, r) {
                    let [i, s] = (0, n.I6)(t, e, r);
                    return o.V.batch(() => {
                        var t, e;
                        if (this.queryCache.findAll(i).forEach(t => {
                                t.invalidate()
                            }), "none" === i.refetchType) return Promise.resolve();
                        let r = { ...i,
                            type: null != (t = null != (e = i.refetchType) ? e : i.type) ? t : "active"
                        };
                        return this.refetchQueries(r, s)
                    })
                }
                refetchQueries(t, e, r) {
                    let [i, s] = (0, n.I6)(t, e, r), a = o.V.batch(() => this.queryCache.findAll(i).filter(t => !t.isDisabled()).map(t => {
                        var e;
                        return t.fetch(void 0, { ...s,
                            cancelRefetch: null == (e = null == s ? void 0 : s.cancelRefetch) || e,
                            meta: {
                                refetchPage: i.refetchPage
                            }
                        })
                    })), u = Promise.all(a).then(n.ZT);
                    return null != s && s.throwOnError || (u = u.catch(n.ZT)), u
                }
                fetchQuery(t, e, r) {
                    let i = (0, n._v)(t, e, r),
                        o = this.defaultQueryOptions(i);
                    void 0 === o.retry && (o.retry = !1);
                    let s = this.queryCache.build(this, o);
                    return s.isStaleByTime(o.staleTime) ? s.fetch(o) : Promise.resolve(s.state.data)
                }
                prefetchQuery(t, e, r) {
                    return this.fetchQuery(t, e, r).then(n.ZT).catch(n.ZT)
                }
                fetchInfiniteQuery(t, e, r) {
                    let i = (0, n._v)(t, e, r);
                    return i.behavior = (0, y.Gm)(), this.fetchQuery(i)
                }
                prefetchInfiniteQuery(t, e, r) {
                    return this.fetchInfiniteQuery(t, e, r).then(n.ZT).catch(n.ZT)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(t) {
                    this.defaultOptions = t
                }
                setQueryDefaults(t, e) {
                    let r = this.queryDefaults.find(e => (0, n.yF)(t) === (0, n.yF)(e.queryKey));
                    r ? r.defaultOptions = e : this.queryDefaults.push({
                        queryKey: t,
                        defaultOptions: e
                    })
                }
                getQueryDefaults(t) {
                    if (!t) return;
                    let e = this.queryDefaults.find(e => (0, n.to)(t, e.queryKey));
                    return null == e ? void 0 : e.defaultOptions
                }
                setMutationDefaults(t, e) {
                    let r = this.mutationDefaults.find(e => (0, n.yF)(t) === (0, n.yF)(e.mutationKey));
                    r ? r.defaultOptions = e : this.mutationDefaults.push({
                        mutationKey: t,
                        defaultOptions: e
                    })
                }
                getMutationDefaults(t) {
                    if (!t) return;
                    let e = this.mutationDefaults.find(e => (0, n.to)(t, e.mutationKey));
                    return null == e ? void 0 : e.defaultOptions
                }
                defaultQueryOptions(t) {
                    if (null != t && t._defaulted) return t;
                    let e = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == t ? void 0 : t.queryKey),
                        ...t,
                        _defaulted: !0
                    };
                    return !e.queryHash && e.queryKey && (e.queryHash = (0, n.Rm)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.useErrorBoundary && (e.useErrorBoundary = !!e.suspense), e
                }
                defaultMutationOptions(t) {
                    return null != t && t._defaulted ? t : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == t ? void 0 : t.mutationKey),
                        ...t,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }
        },
        36718: function(t, e, r) {
            "use strict";
            r.d(e, {
                z: function() {
                    return W
                }
            });
            var n, i, o, s, a, u, c, l, h, f, d, p, y, b, D, m, g, w, v, _, E = r(96240);

            function C(t = [], e = []) {
                return [...new Set([...t, ...e])]
            }
            r(22100), r(98389), r(3695), r(63321), r(94194), r(59575), r(28803), r(31079), r(53385), r(72111), r(18808), r(68571), Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var S = Object.defineProperty,
                O = Object.defineProperties,
                A = Object.getOwnPropertyDescriptors,
                U = Object.getOwnPropertySymbols,
                x = Object.prototype.hasOwnProperty,
                I = Object.prototype.propertyIsEnumerable,
                k = (t, e, r) => e in t ? S(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                P = (t, e) => {
                    for (var r in e || (e = {})) x.call(e, r) && k(t, r, e[r]);
                    if (U)
                        for (var r of U(e)) I.call(e, r) && k(t, r, e[r]);
                    return t
                },
                T = (t, e) => O(t, A(e));

            function M(t) {
                return t.includes(":")
            }

            function F(t) {
                var e, r, n;
                let i = {};
                if (!(Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length)) return i;
                for (let [o, s] of Object.entries(t)) {
                    let t = M(o) ? [o] : s.chains,
                        a = s.methods || [],
                        u = s.events || [],
                        c = M(o) ? o.split(":")[0] : o;
                    i[c] = T(P({}, i[c]), {
                        chains: C(t, null == (e = i[c]) ? void 0 : e.chains),
                        methods: C(a, null == (r = i[c]) ? void 0 : r.methods),
                        events: C(u, null == (n = i[c]) ? void 0 : n.events)
                    })
                }
                return i
            }
            var L = r(78123),
                N = r(15741),
                j = r(20492),
                q = r(62484),
                B = r(44856),
                R = "eip155",
                H = "requestedChains",
                K = "wallet_addEthereumChain",
                W = class extends E.wR {
                    constructor(t) {
                        super({ ...t,
                            options: {
                                isNewChainsStale: !0,
                                ...t.options
                            }
                        }), (0, E.Ko)(this, o), (0, E.Ko)(this, a), (0, E.Ko)(this, c), (0, E.Ko)(this, h), (0, E.Ko)(this, d), (0, E.Ko)(this, y), (0, E.Ko)(this, D), (0, E.Ko)(this, g), (0, E.Ko)(this, v), this.id = "walletConnect", this.name = "WalletConnect", this.ready = !0, (0, E.Ko)(this, n, void 0), (0, E.Ko)(this, i, void 0), this.onAccountsChanged = t => {
                            0 === t.length ? this.emit("disconnect") : this.emit("change", {
                                account: (0, L.K)(t[0])
                            })
                        }, this.onChainChanged = t => {
                            let e = Number(t),
                                r = this.isChainUnsupported(e);
                            this.emit("change", {
                                chain: {
                                    id: e,
                                    unsupported: r
                                }
                            })
                        }, this.onDisconnect = () => {
                            (0, E.U9)(this, y, b).call(this, []), this.emit("disconnect")
                        }, this.onDisplayUri = t => {
                            this.emit("message", {
                                type: "display_uri",
                                data: t
                            })
                        }, this.onConnect = () => {
                            this.emit("connect", {})
                        }, (0, E.U9)(this, o, s).call(this)
                    }
                    async connect({
                        chainId: t,
                        pairingTopic: e
                    } = {}) {
                        try {
                            let r = t;
                            if (!r) {
                                let t = this.storage ? .getItem("store"),
                                    e = t ? .state ? .data ? .chain ? .id;
                                r = e && !this.isChainUnsupported(e) ? e : this.chains[0] ? .id
                            }
                            if (!r) throw Error("No chains found on connector.");
                            let n = await this.getProvider();
                            (0, E.U9)(this, h, f).call(this);
                            let i = (0, E.U9)(this, c, l).call(this);
                            if (n.session && i && await n.disconnect(), !n.session || i) {
                                let t = this.chains.filter(t => t.id !== r).map(t => t.id);
                                this.emit("message", {
                                    type: "connecting"
                                }), await n.connect({
                                    pairingTopic: e,
                                    optionalChains: [r, ...t]
                                }), (0, E.U9)(this, y, b).call(this, this.chains.map(({
                                    id: t
                                }) => t))
                            }
                            let o = await n.enable(),
                                s = (0, L.K)(o[0]),
                                a = await this.getChainId(),
                                u = this.isChainUnsupported(a);
                            return {
                                account: s,
                                chain: {
                                    id: a,
                                    unsupported: u
                                }
                            }
                        } catch (t) {
                            if (/user rejected/i.test(t ? .message)) throw new N.ab(t);
                            throw t
                        }
                    }
                    async disconnect() {
                        let t = await this.getProvider();
                        try {
                            await t.disconnect()
                        } catch (t) {
                            if (!/No matching key/i.test(t.message)) throw t
                        } finally {
                            (0, E.U9)(this, d, p).call(this), (0, E.U9)(this, y, b).call(this, [])
                        }
                    }
                    async getAccount() {
                        let {
                            accounts: t
                        } = await this.getProvider();
                        return (0, L.K)(t[0])
                    }
                    async getChainId() {
                        let {
                            chainId: t
                        } = await this.getProvider();
                        return t
                    }
                    async getProvider({
                        chainId: t
                    } = {}) {
                        return (0, E.ac)(this, n) || await (0, E.U9)(this, o, s).call(this), t && await this.switchChain(t), (0, E.ac)(this, n)
                    }
                    async getWalletClient({
                        chainId: t
                    } = {}) {
                        let [e, r] = await Promise.all([this.getProvider({
                            chainId: t
                        }), this.getAccount()]), n = this.chains.find(e => e.id === t);
                        if (!e) throw Error("provider is required.");
                        return (0, j.K)({
                            account: r,
                            chain: n,
                            transport: (0, q.P)(e)
                        })
                    }
                    async isAuthorized() {
                        try {
                            let [t, e] = await Promise.all([this.getAccount(), this.getProvider()]), r = (0, E.U9)(this, c, l).call(this);
                            if (!t) return !1;
                            if (r && e.session) {
                                try {
                                    await e.disconnect()
                                } catch {}
                                return !1
                            }
                            return !0
                        } catch {
                            return !1
                        }
                    }
                    async switchChain(t) {
                        let e = this.chains.find(e => e.id === t);
                        if (!e) throw new N.x3(Error("chain not found on connector."));
                        try {
                            let r = await this.getProvider(),
                                n = (0, E.U9)(this, g, w).call(this),
                                i = (0, E.U9)(this, v, _).call(this),
                                o = n.includes(t);
                            if (!o && i.includes(K)) {
                                await r.request({
                                    method: K,
                                    params: [{
                                        chainId: (0, B.eC)(e.id),
                                        blockExplorerUrls: [e.blockExplorers ? .default ? .url],
                                        chainName: e.name,
                                        nativeCurrency: e.nativeCurrency,
                                        rpcUrls: [...e.rpcUrls.default.http]
                                    }]
                                });
                                let n = (0, E.U9)(this, D, m).call(this);
                                n.push(t), (0, E.U9)(this, y, b).call(this, n)
                            }
                            return await r.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, B.eC)(t)
                                }]
                            }), e
                        } catch (e) {
                            let t = "string" == typeof e ? e : e ? .message;
                            if (/user rejected request/i.test(t)) throw new N.ab(e);
                            throw new N.x3(e)
                        }
                    }
                };
            n = new WeakMap, i = new WeakMap, o = new WeakSet, s = async function() {
                return (0, E.ac)(this, i) || "undefined" == typeof window || (0, E.qx)(this, i, (0, E.U9)(this, a, u).call(this)), (0, E.ac)(this, i)
            }, a = new WeakSet, u = async function() {
                let {
                    EthereumProvider: t
                } = await Promise.all([r.e(1328), r.e(6637), r.e(1212)]).then(r.bind(r, 71212)), e = this.chains.map(({
                    id: t
                }) => t);
                if (e.length) {
                    let {
                        projectId: r,
                        showQrModal: i = !0,
                        qrModalOptions: o,
                        metadata: s,
                        relayUrl: a
                    } = this.options;
                    (0, E.qx)(this, n, await t.init({
                        showQrModal: i,
                        qrModalOptions: o,
                        projectId: r,
                        optionalChains: e,
                        rpcMap: Object.fromEntries(this.chains.map(t => [t.id, t.rpcUrls.default.http[0]])),
                        metadata: s,
                        relayUrl: a
                    }))
                }
            }, c = new WeakSet, l = function() {
                let t = (0, E.U9)(this, v, _).call(this);
                if (t.includes(K) || !this.options.isNewChainsStale) return !1;
                let e = (0, E.U9)(this, D, m).call(this),
                    r = this.chains.map(({
                        id: t
                    }) => t),
                    n = (0, E.U9)(this, g, w).call(this);
                return (!n.length || !!n.some(t => r.includes(t))) && !r.every(t => e.includes(t))
            }, h = new WeakSet, f = function() {
                (0, E.ac)(this, n) && ((0, E.U9)(this, d, p).call(this), (0, E.ac)(this, n).on("accountsChanged", this.onAccountsChanged), (0, E.ac)(this, n).on("chainChanged", this.onChainChanged), (0, E.ac)(this, n).on("disconnect", this.onDisconnect), (0, E.ac)(this, n).on("session_delete", this.onDisconnect), (0, E.ac)(this, n).on("display_uri", this.onDisplayUri), (0, E.ac)(this, n).on("connect", this.onConnect))
            }, d = new WeakSet, p = function() {
                (0, E.ac)(this, n) && ((0, E.ac)(this, n).removeListener("accountsChanged", this.onAccountsChanged), (0, E.ac)(this, n).removeListener("chainChanged", this.onChainChanged), (0, E.ac)(this, n).removeListener("disconnect", this.onDisconnect), (0, E.ac)(this, n).removeListener("session_delete", this.onDisconnect), (0, E.ac)(this, n).removeListener("display_uri", this.onDisplayUri), (0, E.ac)(this, n).removeListener("connect", this.onConnect))
            }, y = new WeakSet, b = function(t) {
                this.storage ? .setItem(H, t)
            }, D = new WeakSet, m = function() {
                return this.storage ? .getItem(H) ? ? []
            }, g = new WeakSet, w = function() {
                if (!(0, E.ac)(this, n)) return [];
                let t = E.ac(this, n).session ? .namespaces;
                if (!t) return [];
                let e = F(t),
                    r = e[R] ? .chains ? .map(t => parseInt(t.split(":")[1] || ""));
                return r ? ? []
            }, v = new WeakSet, _ = function() {
                if (!(0, E.ac)(this, n)) return [];
                let t = E.ac(this, n).session ? .namespaces;
                if (!t) return [];
                let e = F(t),
                    r = e[R] ? .methods;
                return r ? ? []
            }
        },
        92799: function(t, e, r) {
            "use strict";

            function n({
                apiKey: t
            }) {
                return function(e) {
                    let r = e.rpcUrls.alchemy ? .http[0],
                        n = e.rpcUrls.alchemy ? .webSocket ? .[0];
                    return r ? {
                        chain: { ...e,
                            rpcUrls: { ...e.rpcUrls,
                                default: {
                                    http: [`${r}/${t}`]
                                }
                            }
                        },
                        rpcUrls: {
                            http: [`${r}/${t}`],
                            webSocket: [`${n}/${t}`]
                        }
                    } : null
                }
            }
            r.d(e, {
                G: function() {
                    return n
                }
            })
        },
        38158: function(t, e, r) {
            "use strict";

            function n({
                rpc: t
            }) {
                return function(e) {
                    let r = t(e);
                    return r && "" !== r.http ? {
                        chain: { ...e,
                            rpcUrls: { ...e.rpcUrls,
                                default: {
                                    http: [r.http]
                                }
                            }
                        },
                        rpcUrls: {
                            http: [r.http],
                            webSocket: r.webSocket ? [r.webSocket] : void 0
                        }
                    } : null
                }
            }
            r.d(e, {
                R: function() {
                    return n
                }
            })
        },
        76920: function(t, e, r) {
            "use strict";

            function n() {
                return function(t) {
                    return t.rpcUrls.public.http[0] ? {
                        chain: t,
                        rpcUrls: t.rpcUrls.public
                    } : null
                }
            }
            r.d(e, {
                I: function() {
                    return n
                }
            })
        },
        70156: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return i
                }
            });
            var n = r(88957);

            function i(t = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? (0, n.P)(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
            }
        },
        31078: function(t, e, r) {
            "use strict";
            r.d(e, {
                z: function() {
                    return o
                }
            });
            var n = r(70156),
                i = r(88957);

            function o(t, e) {
                e || (e = t.reduce((t, e) => t + e.length, 0));
                let r = (0, n.E)(e),
                    o = 0;
                for (let e of t) r.set(e, o), o += e.length;
                return (0, i.P)(r)
            }
        },
        57488: function(t, e, r) {
            "use strict";
            r.d(e, {
                m: function() {
                    return o
                }
            });
            var n = r(98695),
                i = r(88957);

            function o(t, e = "utf8") {
                let r = n.Z[e];
                if (!r) throw Error(`Unsupported encoding "${e}"`);
                return ("utf8" === e || "utf-8" === e) && null != globalThis.Buffer && null != globalThis.Buffer.from ? (0, i.P)(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`)
            }
        },
        59575: function(t, e, r) {
            "use strict";
            r.d(e, {
                BB: function() {
                    return o.B
                },
                mL: function() {
                    return i.m
                },
                zo: function() {
                    return n.z
                }
            });
            var n = r(31078),
                i = r(57488),
                o = r(72623)
        },
        72623: function(t, e, r) {
            "use strict";
            r.d(e, {
                B: function() {
                    return i
                }
            });
            var n = r(98695);

            function i(t, e = "utf8") {
                let r = n.Z[e];
                if (!r) throw Error(`Unsupported encoding "${e}"`);
                return ("utf8" === e || "utf-8" === e) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1)
            }
        },
        88957: function(t, e, r) {
            "use strict";

            function n(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }
            r.d(e, {
                P: function() {
                    return n
                }
            })
        },
        98695: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return tY
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                identity: function() {
                    return P
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                base2: function() {
                    return T
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base8: function() {
                    return M
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base10: function() {
                    return F
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: function() {
                    return L
                },
                base16upper: function() {
                    return N
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base32: function() {
                    return j
                },
                base32hex: function() {
                    return H
                },
                base32hexpad: function() {
                    return W
                },
                base32hexpadupper: function() {
                    return z
                },
                base32hexupper: function() {
                    return K
                },
                base32pad: function() {
                    return B
                },
                base32padupper: function() {
                    return R
                },
                base32upper: function() {
                    return q
                },
                base32z: function() {
                    return V
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base36: function() {
                    return $
                },
                base36upper: function() {
                    return Q
                }
            });
            var l = {};
            r.r(l), r.d(l, {
                base58btc: function() {
                    return Y
                },
                base58flickr: function() {
                    return G
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                base64: function() {
                    return J
                },
                base64pad: function() {
                    return X
                },
                base64url: function() {
                    return Z
                },
                base64urlpad: function() {
                    return tt
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                base256emoji: function() {
                    return ti
                }
            });
            var d = {};
            r.r(d), r.d(d, {
                sha256: function() {
                    return tm
                },
                sha512: function() {
                    return tg
                }
            });
            var p = {};
            r.r(p), r.d(p, {
                identity: function() {
                    return tw
                }
            });
            var y = {};
            r.r(y), r.d(y, {
                code: function() {
                    return t_
                },
                decode: function() {
                    return tC
                },
                encode: function() {
                    return tE
                },
                name: function() {
                    return tv
                }
            });
            var b = {};
            r.r(b), r.d(b, {
                code: function() {
                    return tU
                },
                decode: function() {
                    return tI
                },
                encode: function() {
                    return tx
                },
                name: function() {
                    return tA
                }
            });
            var D = function(t, e) {
                if (t.length >= 255) throw TypeError("Alphabet too long");
                for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
                for (var i = 0; i < t.length; i++) {
                    var o = t.charAt(i),
                        s = o.charCodeAt(0);
                    if (255 !== r[s]) throw TypeError(o + " is ambiguous");
                    r[s] = i
                }
                var a = t.length,
                    u = t.charAt(0),
                    c = Math.log(a) / Math.log(256),
                    l = Math.log(256) / Math.log(a);

                function h(t) {
                    if ("string" != typeof t) throw TypeError("Expected String");
                    if (0 === t.length) return new Uint8Array;
                    var e = 0;
                    if (" " !== t[0]) {
                        for (var n = 0, i = 0; t[e] === u;) n++, e++;
                        for (var o = (t.length - e) * c + 1 >>> 0, s = new Uint8Array(o); t[e];) {
                            var l = r[t.charCodeAt(e)];
                            if (255 === l) return;
                            for (var h = 0, f = o - 1;
                                (0 !== l || h < i) && -1 !== f; f--, h++) l += a * s[f] >>> 0, s[f] = l % 256 >>> 0, l = l / 256 >>> 0;
                            if (0 !== l) throw Error("Non-zero carry");
                            i = h, e++
                        }
                        if (" " !== t[e]) {
                            for (var d = o - i; d !== o && 0 === s[d];) d++;
                            for (var p = new Uint8Array(n + (o - d)), y = n; d !== o;) p[y++] = s[d++];
                            return p
                        }
                    }
                }
                return {
                    encode: function(e) {
                        if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === e.length) return "";
                        for (var r = 0, n = 0, i = 0, o = e.length; i !== o && 0 === e[i];) i++, r++;
                        for (var s = (o - i) * l + 1 >>> 0, c = new Uint8Array(s); i !== o;) {
                            for (var h = e[i], f = 0, d = s - 1;
                                (0 !== h || f < n) && -1 !== d; d--, f++) h += 256 * c[d] >>> 0, c[d] = h % a >>> 0, h = h / a >>> 0;
                            if (0 !== h) throw Error("Non-zero carry");
                            n = f, i++
                        }
                        for (var p = s - n; p !== s && 0 === c[p];) p++;
                        for (var y = u.repeat(r); p < s; ++p) y += t.charAt(c[p]);
                        return y
                    },
                    decodeUnsafe: h,
                    decode: function(t) {
                        var r = h(t);
                        if (r) return r;
                        throw Error(`Non-${e} character`)
                    }
                }
            };
            new Uint8Array(0);
            let m = (t, e) => {
                    if (t === e) return !0;
                    if (t.byteLength !== e.byteLength) return !1;
                    for (let r = 0; r < t.byteLength; r++)
                        if (t[r] !== e[r]) return !1;
                    return !0
                },
                g = t => {
                    if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
                    if (t instanceof ArrayBuffer) return new Uint8Array(t);
                    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                w = t => new TextEncoder().encode(t),
                v = t => new TextDecoder().decode(t);
            class _ {
                constructor(t, e, r) {
                    this.name = t, this.prefix = e, this.baseEncode = r
                }
                encode(t) {
                    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class E {
                constructor(t, e, r) {
                    if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
                }
                decode(t) {
                    if ("string" == typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(t) {
                    return S(this, t)
                }
            }
            class C {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return S(this, t)
                }
                decode(t) {
                    let e = t[0],
                        r = this.decoders[e];
                    if (r) return r.decode(t);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let S = (t, e) => new C({ ...t.decoders || {
                    [t.prefix]: t
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class O {
                constructor(t, e, r, n) {
                    this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = n, this.encoder = new _(t, e, r), this.decoder = new E(t, e, n)
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            let A = ({
                    name: t,
                    prefix: e,
                    encode: r,
                    decode: n
                }) => new O(t, e, r, n),
                U = ({
                    prefix: t,
                    name: e,
                    alphabet: r
                }) => {
                    let {
                        encode: n,
                        decode: i
                    } = D(r, e);
                    return A({
                        prefix: t,
                        name: e,
                        encode: n,
                        decode: t => g(i(t))
                    })
                },
                x = (t, e, r, n) => {
                    let i = {};
                    for (let t = 0; t < e.length; ++t) i[e[t]] = t;
                    let o = t.length;
                    for (;
                        "=" === t[o - 1];) --o;
                    let s = new Uint8Array(o * r / 8 | 0),
                        a = 0,
                        u = 0,
                        c = 0;
                    for (let e = 0; e < o; ++e) {
                        let o = i[t[e]];
                        if (void 0 === o) throw SyntaxError(`Non-${n} character`);
                        u = u << r | o, (a += r) >= 8 && (a -= 8, s[c++] = 255 & u >> a)
                    }
                    if (a >= r || 255 & u << 8 - a) throw SyntaxError("Unexpected end of data");
                    return s
                },
                I = (t, e, r) => {
                    let n = "=" === e[e.length - 1],
                        i = (1 << r) - 1,
                        o = "",
                        s = 0,
                        a = 0;
                    for (let n = 0; n < t.length; ++n)
                        for (a = a << 8 | t[n], s += 8; s > r;) s -= r, o += e[i & a >> s];
                    if (s && (o += e[i & a << r - s]), n)
                        for (; o.length * r & 7;) o += "=";
                    return o
                },
                k = ({
                    name: t,
                    prefix: e,
                    bitsPerChar: r,
                    alphabet: n
                }) => A({
                    prefix: e,
                    name: t,
                    encode: t => I(t, n, r),
                    decode: e => x(e, n, r, t)
                }),
                P = A({
                    prefix: "\x00",
                    name: "identity",
                    encode: t => v(t),
                    decode: t => w(t)
                }),
                T = k({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                M = k({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                F = U({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                L = k({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                N = k({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                j = k({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                q = k({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                B = k({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                R = k({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                H = k({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                K = k({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                W = k({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                z = k({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                V = k({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                $ = U({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                Q = U({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                Y = U({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                G = U({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                J = k({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                X = k({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Z = k({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                tt = k({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                te = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                tr = te.reduce((t, e, r) => (t[r] = e, t), []),
                tn = te.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []),
                ti = A({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(t) {
                        return t.reduce((t, e) => t += tr[e], "")
                    },
                    decode: function(t) {
                        let e = [];
                        for (let r of t) {
                            let t = tn[r.codePointAt(0)];
                            if (void 0 === t) throw Error(`Non-base256emoji character: ${r}`);
                            e.push(t)
                        }
                        return new Uint8Array(e)
                    }
                });

            function to(t, e, r) {
                e = e || [];
                for (var n = r = r || 0; t >= 2147483648;) e[r++] = 255 & t | 128, t /= 128;
                for (; - 128 & t;) e[r++] = 255 & t | 128, t >>>= 7;
                return e[r] = 0 | t, to.bytes = r - n + 1, e
            }

            function ts(t, e) {
                var r, n = 0,
                    e = e || 0,
                    i = 0,
                    o = e,
                    s = t.length;
                do {
                    if (o >= s) throw ts.bytes = 0, RangeError("Could not decode varint");
                    r = t[o++], n += i < 28 ? (127 & r) << i : (127 & r) * Math.pow(2, i), i += 7
                } while (r >= 128);
                return ts.bytes = o - e, n
            }
            var ta = {
                encode: to,
                decode: ts,
                encodingLength: function(t) {
                    return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : t < 34359738368 ? 5 : t < 4398046511104 ? 6 : t < 562949953421312 ? 7 : t < 72057594037927940 ? 8 : t < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let tu = (t, e = 0) => {
                    let r = ta.decode(t, e);
                    return [r, ta.decode.bytes]
                },
                tc = (t, e, r = 0) => (ta.encode(t, e, r), e),
                tl = t => ta.encodingLength(t),
                th = (t, e) => {
                    let r = e.byteLength,
                        n = tl(t),
                        i = n + tl(r),
                        o = new Uint8Array(i + r);
                    return tc(t, o, 0), tc(r, o, n), o.set(e, i), new tp(t, r, e, o)
                },
                tf = t => {
                    let e = g(t),
                        [r, n] = tu(e),
                        [i, o] = tu(e.subarray(n)),
                        s = e.subarray(n + o);
                    if (s.byteLength !== i) throw Error("Incorrect length");
                    return new tp(r, i, s, e)
                },
                td = (t, e) => t === e || t.code === e.code && t.size === e.size && m(t.bytes, e.bytes);
            class tp {
                constructor(t, e, r, n) {
                    this.code = t, this.size = e, this.digest = r, this.bytes = n
                }
            }
            let ty = ({
                name: t,
                code: e,
                encode: r
            }) => new tb(t, e, r);
            class tb {
                constructor(t, e, r) {
                    this.name = t, this.code = e, this.encode = r
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        let e = this.encode(t);
                        return e instanceof Uint8Array ? th(this.code, e) : e.then(t => th(this.code, t))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let tD = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
                tm = ty({
                    name: "sha2-256",
                    code: 18,
                    encode: tD("SHA-256")
                }),
                tg = ty({
                    name: "sha2-512",
                    code: 19,
                    encode: tD("SHA-512")
                }),
                tw = {
                    code: 0,
                    name: "identity",
                    encode: g,
                    digest: t => th(0, g(t))
                },
                tv = "raw",
                t_ = 85,
                tE = t => g(t),
                tC = t => g(t),
                tS = new TextEncoder,
                tO = new TextDecoder,
                tA = "json",
                tU = 512,
                tx = t => tS.encode(JSON.stringify(t)),
                tI = t => JSON.parse(tO.decode(t));
            class tk {
                constructor(t, e, r, n) {
                    this.code = e, this.version = t, this.multihash = r, this.bytes = n, this.byteOffset = n.byteOffset, this.byteLength = n.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: tB,
                        byteLength: tB,
                        code: tq,
                        version: tq,
                        multihash: tq,
                        bytes: tq,
                        _baseCache: tB,
                        asCID: tB
                    })
                }
                toV0() {
                    if (0 === this.version) return this; {
                        let {
                            code: t,
                            multihash: e
                        } = this;
                        if (t !== tF) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (e.code !== tL) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return tk.createV0(e)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                let {
                                    code: t,
                                    digest: e
                                } = this.multihash,
                                r = th(t, e);
                                return tk.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(t) {
                    return t && this.code === t.code && this.version === t.version && td(this.multihash, t.multihash)
                }
                toString(t) {
                    let {
                        bytes: e,
                        version: r,
                        _baseCache: n
                    } = this;
                    return 0 === r ? tT(e, n, t || Y.encoder) : tM(e, n, t || j.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(t) {
                    return tR(/^0\.0/, tH), !!(t && (t[tj] || t.asCID === t))
                }
                get toBaseEncodedString() {
                    throw Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw Error('"prefix" property is deprecated')
                }
                static asCID(t) {
                    if (t instanceof tk) return t;
                    if (null != t && t.asCID === t) {
                        let {
                            version: e,
                            code: r,
                            multihash: n,
                            bytes: i
                        } = t;
                        return new tk(e, r, n, i || tN(e, r, n.bytes))
                    }
                    if (null == t || !0 !== t[tj]) return null; {
                        let {
                            version: e,
                            multihash: r,
                            code: n
                        } = t, i = tf(r);
                        return tk.create(e, n, i)
                    }
                }
                static create(t, e, r) {
                    if ("number" != typeof e) throw Error("String codecs are no longer supported");
                    switch (t) {
                        case 0:
                            if (e === tF) return new tk(t, e, r, r.bytes);
                            throw Error(`Version 0 CID must use dag-pb (code: ${tF}) block encoding`);
                        case 1:
                            {
                                let n = tN(t, e, r.bytes);
                                return new tk(t, e, r, n)
                            }
                        default:
                            throw Error("Invalid version")
                    }
                }
                static createV0(t) {
                    return tk.create(0, tF, t)
                }
                static createV1(t, e) {
                    return tk.create(1, t, e)
                }
                static decode(t) {
                    let [e, r] = tk.decodeFirst(t);
                    if (r.length) throw Error("Incorrect length");
                    return e
                }
                static decodeFirst(t) {
                    let e = tk.inspectBytes(t),
                        r = e.size - e.multihashSize,
                        n = g(t.subarray(r, r + e.multihashSize));
                    if (n.byteLength !== e.multihashSize) throw Error("Incorrect length");
                    let i = n.subarray(e.multihashSize - e.digestSize),
                        o = new tp(e.multihashCode, e.digestSize, i, n),
                        s = 0 === e.version ? tk.createV0(o) : tk.createV1(e.codec, o);
                    return [s, t.subarray(e.size)]
                }
                static inspectBytes(t) {
                    let e = 0,
                        r = () => {
                            let [r, n] = tu(t.subarray(e));
                            return e += n, r
                        },
                        n = r(),
                        i = tF;
                    if (18 === n ? (n = 0, e = 0) : 1 === n && (i = r()), 0 !== n && 1 !== n) throw RangeError(`Invalid CID version ${n}`);
                    let o = e,
                        s = r(),
                        a = r(),
                        u = e + a;
                    return {
                        version: n,
                        codec: i,
                        multihashCode: s,
                        digestSize: a,
                        multihashSize: u - o,
                        size: u
                    }
                }
                static parse(t, e) {
                    let [r, n] = tP(t, e), i = tk.decode(n);
                    return i._baseCache.set(r, t), i
                }
            }
            let tP = (t, e) => {
                    switch (t[0]) {
                        case "Q":
                            return [Y.prefix, (e || Y).decode(`${Y.prefix}${t}`)];
                        case Y.prefix:
                            return [Y.prefix, (e || Y).decode(t)];
                        case j.prefix:
                            return [j.prefix, (e || j).decode(t)];
                        default:
                            if (null == e) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [t[0], e.decode(t)]
                    }
                },
                tT = (t, e, r) => {
                    let {
                        prefix: n
                    } = r;
                    if (n !== Y.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
                    let i = e.get(n);
                    if (null != i) return i; {
                        let i = r.encode(t).slice(1);
                        return e.set(n, i), i
                    }
                },
                tM = (t, e, r) => {
                    let {
                        prefix: n
                    } = r, i = e.get(n);
                    if (null != i) return i; {
                        let i = r.encode(t);
                        return e.set(n, i), i
                    }
                },
                tF = 112,
                tL = 18,
                tN = (t, e, r) => {
                    let n = tl(t),
                        i = n + tl(e),
                        o = new Uint8Array(i + r.byteLength);
                    return tc(t, o, 0), tc(e, o, n), o.set(r, i), o
                },
                tj = Symbol.for("@ipld/js-cid/CID"),
                tq = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                tB = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                tR = (t, e) => {
                    if (t.test("0.0.0-dev")) console.warn(e);
                    else throw Error(e)
                },
                tH = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
                tK = { ...n,
                    ...i,
                    ...o,
                    ...s,
                    ...a,
                    ...u,
                    ...c,
                    ...l,
                    ...h,
                    ...f
                };
            ({ ...d,
                ...p
            });
            var tW = r(70156);

            function tz(t, e, r, n) {
                return {
                    name: t,
                    prefix: e,
                    encoder: {
                        name: t,
                        prefix: e,
                        encode: r
                    },
                    decoder: {
                        decode: n
                    }
                }
            }
            let tV = tz("utf8", "u", t => {
                    let e = new TextDecoder("utf8");
                    return "u" + e.decode(t)
                }, t => {
                    let e = new TextEncoder;
                    return e.encode(t.substring(1))
                }),
                t$ = tz("ascii", "a", t => {
                    let e = "a";
                    for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                    return e
                }, t => {
                    t = t.substring(1);
                    let e = (0, tW.E)(t.length);
                    for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                    return e
                }),
                tQ = {
                    utf8: tV,
                    "utf-8": tV,
                    hex: tK.base16,
                    latin1: t$,
                    ascii: t$,
                    binary: t$,
                    ...tK
                };
            var tY = tQ
        },
        85780: function(t, e, r) {
            "use strict";
            r.d(e, {
                y: function() {
                    return i
                }
            });
            var n = r(46478);
            let i = (0, n.a)({
                id: 42161,
                name: "Arbitrum One",
                network: "arbitrum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://arb-mainnet.g.alchemy.com/v2"],
                        webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://arbitrum-mainnet.infura.io/v3"],
                        webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://arb1.arbitrum.io/rpc"]
                    },
                    public: {
                        http: ["https://arb1.arbitrum.io/rpc"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Arbiscan",
                        url: "https://arbiscan.io"
                    },
                    default: {
                        name: "Arbiscan",
                        url: "https://arbiscan.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 7654707
                    }
                }
            })
        },
        32936: function(t, e, r) {
            "use strict";
            r.d(e, {
                e: function() {
                    return i
                }
            });
            var n = r(46478);
            let i = (0, n.a)({
                id: 56,
                name: "BNB Smart Chain",
                network: "bsc",
                nativeCurrency: {
                    decimals: 18,
                    name: "BNB",
                    symbol: "BNB"
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.ankr.com/bsc"]
                    },
                    public: {
                        http: ["https://rpc.ankr.com/bsc"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "BscScan",
                        url: "https://bscscan.com"
                    },
                    default: {
                        name: "BscScan",
                        url: "https://bscscan.com"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 15921452
                    }
                }
            })
        }
    }
]);
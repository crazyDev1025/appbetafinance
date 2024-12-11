"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6e3, 3507], {
        74810: function(e, t, r) {
            function n(e, t) {
                let r;
                try {
                    r = e()
                } catch (e) {
                    return
                }
                return {
                    getItem: e => {
                        var n;
                        let a = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                            o = null != (n = r.getItem(e)) ? n : null;
                        return o instanceof Promise ? o.then(a) : a(o)
                    },
                    setItem: (e, n) => r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
                    removeItem: e => r.removeItem(e)
                }
            }
            r.d(t, {
                FL: function() {
                    return n
                },
                tJ: function() {
                    return l
                }
            });
            let a = e => t => {
                    try {
                        let r = e(t);
                        if (r instanceof Promise) return r;
                        return {
                            then: e => a(e)(r),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => a(t)(e)
                        }
                    }
                },
                o = (e, t) => (r, n, o) => {
                    let i, l, c = {
                            getStorage: () => localStorage,
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        s = !1,
                        u = new Set,
                        f = new Set;
                    try {
                        i = c.getStorage()
                    } catch (e) {}
                    if (!i) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`), r(...e)
                    }, n, o);
                    let d = a(c.serialize),
                        p = () => {
                            let e;
                            let t = c.partialize({ ...n()
                                }),
                                r = d({
                                    state: t,
                                    version: c.version
                                }).then(e => i.setItem(c.name, e)).catch(t => {
                                    e = t
                                });
                            if (e) throw e;
                            return r
                        },
                        h = o.setState;
                    o.setState = (e, t) => {
                        h(e, t), p()
                    };
                    let m = e((...e) => {
                            r(...e), p()
                        }, n, o),
                        _ = () => {
                            var e;
                            if (!i) return;
                            s = !1, u.forEach(e => e(n()));
                            let t = (null == (e = c.onRehydrateStorage) ? void 0 : e.call(c, n())) || void 0;
                            return a(i.getItem.bind(i))(c.name).then(e => {
                                if (e) return c.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === c.version) return e.state;
                                    if (c.migrate) return c.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return r(l = c.merge(e, null != (t = n()) ? t : m), !0), p()
                            }).then(() => {
                                null == t || t(l, void 0), s = !0, f.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return o.persist = {
                        setOptions: e => {
                            c = { ...c,
                                ...e
                            }, e.getStorage && (i = e.getStorage())
                        },
                        clearStorage: () => {
                            null == i || i.removeItem(c.name)
                        },
                        getOptions: () => c,
                        rehydrate: () => _(),
                        hasHydrated: () => s,
                        onHydrate: e => (u.add(e), () => {
                            u.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, _(), l || m
                },
                i = (e, t) => (r, o, i) => {
                    let l, c = {
                            storage: n(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        s = !1,
                        u = new Set,
                        f = new Set,
                        d = c.storage;
                    if (!d) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`), r(...e)
                    }, o, i);
                    let p = () => {
                            let e = c.partialize({ ...o()
                            });
                            return d.setItem(c.name, {
                                state: e,
                                version: c.version
                            })
                        },
                        h = i.setState;
                    i.setState = (e, t) => {
                        h(e, t), p()
                    };
                    let m = e((...e) => {
                            r(...e), p()
                        }, o, i),
                        _ = () => {
                            var e, t;
                            if (!d) return;
                            s = !1, u.forEach(e => {
                                var t;
                                return e(null != (t = o()) ? t : m)
                            });
                            let n = (null == (t = c.onRehydrateStorage) ? void 0 : t.call(c, null != (e = o()) ? e : m)) || void 0;
                            return a(d.getItem.bind(d))(c.name).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === c.version) return e.state;
                                    if (c.migrate) return c.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return r(l = c.merge(e, null != (t = o()) ? t : m), !0), p()
                            }).then(() => {
                                null == n || n(l, void 0), l = o(), s = !0, f.forEach(e => e(l))
                            }).catch(e => {
                                null == n || n(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            c = { ...c,
                                ...e
                            }, e.storage && (d = e.storage)
                        },
                        clearStorage: () => {
                            null == d || d.removeItem(c.name)
                        },
                        getOptions: () => c,
                        rehydrate: () => _(),
                        hasHydrated: () => s,
                        onHydrate: e => (u.add(e), () => {
                            u.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, c.skipHydration || _(), l || m
                },
                l = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), o(e, t)) : i(e, t)
        },
        63507: function(e, t, r) {
            r.d(t, {
                Dx: function() {
                    return $
                },
                VY: function() {
                    return L
                },
                aV: function() {
                    return K
                },
                dk: function() {
                    return X
                },
                fC: function() {
                    return T
                },
                h_: function() {
                    return J
                },
                x8: function() {
                    return Y
                },
                xz: function() {
                    return V
                }
            });
            var n = r(27198),
                a = r(2265),
                o = r(21082),
                i = r(88556),
                l = r(46341),
                c = r(36303),
                s = r(37840),
                u = r(48646),
                f = r(9555),
                d = r(42268),
                p = r(7575),
                h = r(38671),
                m = r(16010),
                _ = r(132),
                g = r(7146),
                b = r(50432);
            let y = "Dialog",
                [v, w] = (0, l.b)(y),
                [S, E] = v(y),
                C = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: r,
                        ...l
                    } = e, c = E("DialogTrigger", r), s = (0, i.e)(t, c.triggerRef);
                    return (0, a.createElement)(h.WV.button, (0, n.Z)({
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": c.open,
                        "aria-controls": c.contentId,
                        "data-state": Z(c.open)
                    }, l, {
                        ref: s,
                        onClick: (0, o.M)(e.onClick, c.onOpenToggle)
                    }))
                }),
                D = "DialogPortal",
                [O, z] = v(D, {
                    forceMount: void 0
                }),
                P = "DialogOverlay",
                k = (0, a.forwardRef)((e, t) => {
                    let r = z(P, e.__scopeDialog),
                        {
                            forceMount: o = r.forceMount,
                            ...i
                        } = e,
                        l = E(P, e.__scopeDialog);
                    return l.modal ? (0, a.createElement)(p.z, {
                        present: o || l.open
                    }, (0, a.createElement)(F, (0, n.Z)({}, i, {
                        ref: t
                    }))) : null
                }),
                F = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: r,
                        ...o
                    } = e, i = E(P, r);
                    return (0, a.createElement)(_.Z, {
                        as: b.g7,
                        allowPinchZoom: !0,
                        shards: [i.contentRef]
                    }, (0, a.createElement)(h.WV.div, (0, n.Z)({
                        "data-state": Z(i.open)
                    }, o, {
                        ref: t,
                        style: {
                            pointerEvents: "auto",
                            ...o.style
                        }
                    })))
                }),
                R = "DialogContent",
                A = (0, a.forwardRef)((e, t) => {
                    let r = z(R, e.__scopeDialog),
                        {
                            forceMount: o = r.forceMount,
                            ...i
                        } = e,
                        l = E(R, e.__scopeDialog);
                    return (0, a.createElement)(p.z, {
                        present: o || l.open
                    }, l.modal ? (0, a.createElement)(M, (0, n.Z)({}, i, {
                        ref: t
                    })) : (0, a.createElement)(x, (0, n.Z)({}, i, {
                        ref: t
                    })))
                }),
                M = (0, a.forwardRef)((e, t) => {
                    let r = E(R, e.__scopeDialog),
                        l = (0, a.useRef)(null),
                        c = (0, i.e)(t, r.contentRef, l);
                    return (0, a.useEffect)(() => {
                        let e = l.current;
                        if (e) return (0, g.Ry)(e)
                    }, []), (0, a.createElement)(I, (0, n.Z)({}, e, {
                        ref: c,
                        trapFocus: r.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = r.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, o.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                r = 0 === t.button && !0 === t.ctrlKey,
                                n = 2 === t.button || r;
                            n && e.preventDefault()
                        }),
                        onFocusOutside: (0, o.M)(e.onFocusOutside, e => e.preventDefault())
                    }))
                }),
                x = (0, a.forwardRef)((e, t) => {
                    let r = E(R, e.__scopeDialog),
                        o = (0, a.useRef)(!1),
                        i = (0, a.useRef)(!1);
                    return (0, a.createElement)(I, (0, n.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var n, a;
                            null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, t), t.defaultPrevented || (o.current || null === (a = r.triggerRef.current) || void 0 === a || a.focus(), t.preventDefault()), o.current = !1, i.current = !1
                        },
                        onInteractOutside: t => {
                            var n, a;
                            null === (n = e.onInteractOutside) || void 0 === n || n.call(e, t), t.defaultPrevented || (o.current = !0, "pointerdown" !== t.detail.originalEvent.type || (i.current = !0));
                            let l = t.target,
                                c = null === (a = r.triggerRef.current) || void 0 === a ? void 0 : a.contains(l);
                            c && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
                        }
                    }))
                }),
                I = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: r,
                        trapFocus: o,
                        onOpenAutoFocus: l,
                        onCloseAutoFocus: c,
                        ...s
                    } = e, d = E(R, r), p = (0, a.useRef)(null), h = (0, i.e)(t, p);
                    return (0, m.EW)(), (0, a.createElement)(a.Fragment, null, (0, a.createElement)(f.M, {
                        asChild: !0,
                        loop: !0,
                        trapped: o,
                        onMountAutoFocus: l,
                        onUnmountAutoFocus: c
                    }, (0, a.createElement)(u.XB, (0, n.Z)({
                        role: "dialog",
                        id: d.contentId,
                        "aria-describedby": d.descriptionId,
                        "aria-labelledby": d.titleId,
                        "data-state": Z(d.open)
                    }, s, {
                        ref: h,
                        onDismiss: () => d.onOpenChange(!1)
                    }))), !1)
                }),
                B = "DialogTitle",
                N = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: r,
                        ...o
                    } = e, i = E(B, r);
                    return (0, a.createElement)(h.WV.h2, (0, n.Z)({
                        id: i.titleId
                    }, o, {
                        ref: t
                    }))
                }),
                j = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: r,
                        ...o
                    } = e, i = E("DialogDescription", r);
                    return (0, a.createElement)(h.WV.p, (0, n.Z)({
                        id: i.descriptionId
                    }, o, {
                        ref: t
                    }))
                }),
                U = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: r,
                        ...i
                    } = e, l = E("DialogClose", r);
                    return (0, a.createElement)(h.WV.button, (0, n.Z)({
                        type: "button"
                    }, i, {
                        ref: t,
                        onClick: (0, o.M)(e.onClick, () => l.onOpenChange(!1))
                    }))
                });

            function Z(e) {
                return e ? "open" : "closed"
            }
            let [W, H] = (0, l.k)("DialogTitleWarning", {
                contentName: R,
                titleName: B,
                docsSlug: "dialog"
            }), T = e => {
                let {
                    __scopeDialog: t,
                    children: r,
                    open: n,
                    defaultOpen: o,
                    onOpenChange: i,
                    modal: l = !0
                } = e, u = (0, a.useRef)(null), f = (0, a.useRef)(null), [d = !1, p] = (0, s.T)({
                    prop: n,
                    defaultProp: o,
                    onChange: i
                });
                return (0, a.createElement)(S, {
                    scope: t,
                    triggerRef: u,
                    contentRef: f,
                    contentId: (0, c.M)(),
                    titleId: (0, c.M)(),
                    descriptionId: (0, c.M)(),
                    open: d,
                    onOpenChange: p,
                    onOpenToggle: (0, a.useCallback)(() => p(e => !e), [p]),
                    modal: l
                }, r)
            }, V = C, J = e => {
                let {
                    __scopeDialog: t,
                    forceMount: r,
                    children: n,
                    container: o
                } = e, i = E(D, t);
                return (0, a.createElement)(O, {
                    scope: t,
                    forceMount: r
                }, a.Children.map(n, e => (0, a.createElement)(p.z, {
                    present: r || i.open
                }, (0, a.createElement)(d.h, {
                    asChild: !0,
                    container: o
                }, e))))
            }, K = k, L = A, $ = N, X = j, Y = U
        },
        14241: function(e, t, r) {
            r.d(t, {
                Uy: function() {
                    return T
                }
            });
            var n, a = Symbol.for("immer-nothing"),
                o = Symbol.for("immer-draftable"),
                i = Symbol.for("immer-state");

            function l(e, ...t) {
                throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
            }
            var c = Object.getPrototypeOf;

            function s(e) {
                return !!e && !!e[i]
            }

            function u(e) {
                return !!e && (d(e) || Array.isArray(e) || !!e[o] || !!e.constructor ?.[o] || g(e) || b(e))
            }
            var f = Object.prototype.constructor.toString();

            function d(e) {
                if (!e || "object" != typeof e) return !1;
                let t = c(e);
                if (null === t) return !0;
                let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return r === Object || "function" == typeof r && Function.toString.call(r) === f
            }

            function p(e, t) {
                0 === h(e) ? Object.entries(e).forEach(([r, n]) => {
                    t(r, n, e)
                }) : e.forEach((r, n) => t(n, r, e))
            }

            function h(e) {
                let t = e[i];
                return t ? t.type_ : Array.isArray(e) ? 1 : g(e) ? 2 : b(e) ? 3 : 0
            }

            function m(e, t) {
                return 2 === h(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function _(e, t, r) {
                let n = h(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
            }

            function g(e) {
                return e instanceof Map
            }

            function b(e) {
                return e instanceof Set
            }

            function y(e) {
                return e.copy_ || e.base_
            }

            function v(e, t) {
                if (g(e)) return new Map(e);
                if (b(e)) return new Set(e);
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                if (!t && d(e)) {
                    if (!c(e)) {
                        let t = Object.create(null);
                        return Object.assign(t, e)
                    }
                    return { ...e
                    }
                }
                let r = Object.getOwnPropertyDescriptors(e);
                delete r[i];
                let n = Reflect.ownKeys(r);
                for (let t = 0; t < n.length; t++) {
                    let a = n[t],
                        o = r[a];
                    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[a] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: o.enumerable,
                        value: e[a]
                    })
                }
                return Object.create(c(e), r)
            }

            function w(e, t = !1) {
                return E(e) || s(e) || !u(e) || (h(e) > 1 && (e.set = e.add = e.clear = e.delete = S), Object.freeze(e), t && p(e, (e, t) => w(t, !0), !0)), e
            }

            function S() {
                l(2)
            }

            function E(e) {
                return Object.isFrozen(e)
            }
            var C = {};

            function D(e) {
                let t = C[e];
                return t || l(0, e), t
            }

            function O(e, t) {
                t && (D("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
            }

            function z(e) {
                P(e), e.drafts_.forEach(F), e.drafts_ = null
            }

            function P(e) {
                e === n && (n = e.parent_)
            }

            function k(e) {
                return n = {
                    drafts_: [],
                    parent_: n,
                    immer_: e,
                    canAutoFreeze_: !0,
                    unfinalizedDrafts_: 0
                }
            }

            function F(e) {
                let t = e[i];
                0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
            }

            function R(e, t) {
                t.unfinalizedDrafts_ = t.drafts_.length;
                let r = t.drafts_[0],
                    n = void 0 !== e && e !== r;
                return n ? (r[i].modified_ && (z(t), l(4)), u(e) && (e = A(t, e), t.parent_ || x(t, e)), t.patches_ && D("Patches").generateReplacementPatches_(r[i].base_, e, t.patches_, t.inversePatches_)) : e = A(t, r, []), z(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== a ? e : void 0
            }

            function A(e, t, r) {
                if (E(t)) return t;
                let n = t[i];
                if (!n) return p(t, (a, o) => M(e, n, t, a, o, r), !0), t;
                if (n.scope_ !== e) return t;
                if (!n.modified_) return x(e, n.base_, !0), n.base_;
                if (!n.finalized_) {
                    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
                    let t = n.copy_,
                        a = t,
                        o = !1;
                    3 === n.type_ && (a = new Set(t), t.clear(), o = !0), p(a, (a, i) => M(e, n, t, a, i, r, o)), x(e, t, !1), r && e.patches_ && D("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
                }
                return n.copy_
            }

            function M(e, t, r, n, a, o, i) {
                if (s(a)) {
                    let i = o && t && 3 !== t.type_ && !m(t.assigned_, n) ? o.concat(n) : void 0,
                        l = A(e, a, i);
                    if (_(r, n, l), !s(l)) return;
                    e.canAutoFreeze_ = !1
                } else i && r.add(a);
                if (u(a) && !E(a)) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                    A(e, a), t && t.scope_.parent_ || x(e, a)
                }
            }

            function x(e, t, r = !1) {
                !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && w(t, r)
            }
            var I = {
                    get(e, t) {
                        if (t === i) return e;
                        let r = y(e);
                        if (!m(r, t)) return function(e, t, r) {
                            let n = j(t, r);
                            return n ? "value" in n ? n.value : n.get ?.call(e.draft_) : void 0
                        }(e, r, t);
                        let n = r[t];
                        return e.finalized_ || !u(n) ? n : n === N(e.base_, t) ? (Z(e), e.copy_[t] = W(n, e)) : n
                    },
                    has: (e, t) => t in y(e),
                    ownKeys: e => Reflect.ownKeys(y(e)),
                    set(e, t, r) {
                        let n = j(y(e), t);
                        if (n ?.set) return n.set.call(e.draft_, r), !0;
                        if (!e.modified_) {
                            let n = N(y(e), t),
                                a = n ?.[i];
                            if (a && a.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
                            if ((r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) && (void 0 !== r || m(e.base_, t))) return !0;
                            Z(e), U(e)
                        }
                        return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0)
                    },
                    deleteProperty: (e, t) => (void 0 !== N(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, Z(e), U(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                    getOwnPropertyDescriptor(e, t) {
                        let r = y(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return n ? {
                            writable: !0,
                            configurable: 1 !== e.type_ || "length" !== t,
                            enumerable: n.enumerable,
                            value: r[t]
                        } : n
                    },
                    defineProperty() {
                        l(11)
                    },
                    getPrototypeOf: e => c(e.base_),
                    setPrototypeOf() {
                        l(12)
                    }
                },
                B = {};

            function N(e, t) {
                let r = e[i],
                    n = r ? y(r) : e;
                return n[t]
            }

            function j(e, t) {
                if (!(t in e)) return;
                let r = c(e);
                for (; r;) {
                    let e = Object.getOwnPropertyDescriptor(r, t);
                    if (e) return e;
                    r = c(r)
                }
            }

            function U(e) {
                !e.modified_ && (e.modified_ = !0, e.parent_ && U(e.parent_))
            }

            function Z(e) {
                e.copy_ || (e.copy_ = v(e.base_, e.scope_.immer_.useStrictShallowCopy_))
            }

            function W(e, t) {
                let r = g(e) ? D("MapSet").proxyMap_(e, t) : b(e) ? D("MapSet").proxySet_(e, t) : function(e, t) {
                        let r = Array.isArray(e),
                            a = {
                                type_: r ? 1 : 0,
                                scope_: t ? t.scope_ : n,
                                modified_: !1,
                                finalized_: !1,
                                assigned_: {},
                                parent_: t,
                                base_: e,
                                draft_: null,
                                copy_: null,
                                revoke_: null,
                                isManual_: !1
                            },
                            o = a,
                            i = I;
                        r && (o = [a], i = B);
                        let {
                            revoke: l,
                            proxy: c
                        } = Proxy.revocable(o, i);
                        return a.draft_ = c, a.revoke_ = l, c
                    }(e, t),
                    a = t ? t.scope_ : n;
                return a.drafts_.push(r), r
            }
            p(I, (e, t) => {
                B[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), B.deleteProperty = function(e, t) {
                return B.set.call(this, e, t, void 0)
            }, B.set = function(e, t, r) {
                return I.set.call(this, e[0], t, r, e[0])
            };
            var H = new class {
                    constructor(e) {
                        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
                            let n;
                            if ("function" == typeof e && "function" != typeof t) {
                                let r = t;
                                t = e;
                                let n = this;
                                return function(e = r, ...a) {
                                    return n.produce(e, e => t.call(this, e, ...a))
                                }
                            }
                            if ("function" != typeof t && l(6), void 0 !== r && "function" != typeof r && l(7), u(e)) {
                                let a = k(this),
                                    o = W(e, void 0),
                                    i = !0;
                                try {
                                    n = t(o), i = !1
                                } finally {
                                    i ? z(a) : P(a)
                                }
                                return O(a, r), R(n, a)
                            }
                            if (e && "object" == typeof e) l(1, e);
                            else {
                                if (void 0 === (n = t(e)) && (n = e), n === a && (n = void 0), this.autoFreeze_ && w(n, !0), r) {
                                    let t = [],
                                        a = [];
                                    D("Patches").generateReplacementPatches_(e, n, t, a), r(t, a)
                                }
                                return n
                            }
                        }, this.produceWithPatches = (e, t) => {
                            let r, n;
                            if ("function" == typeof e) return (t, ...r) => this.produceWithPatches(t, t => e(t, ...r));
                            let a = this.produce(e, t, (e, t) => {
                                r = e, n = t
                            });
                            return [a, r, n]
                        }, "boolean" == typeof e ?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e ?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
                    }
                    createDraft(e) {
                        var t;
                        u(e) || l(8), s(e) && (s(t = e) || l(10, t), e = function e(t) {
                            let r;
                            if (!u(t) || E(t)) return t;
                            let n = t[i];
                            if (n) {
                                if (!n.modified_) return n.base_;
                                n.finalized_ = !0, r = v(t, n.scope_.immer_.useStrictShallowCopy_)
                            } else r = v(t, !0);
                            return p(r, (t, n) => {
                                _(r, t, e(n))
                            }), n && (n.finalized_ = !1), r
                        }(t));
                        let r = k(this),
                            n = W(e, void 0);
                        return n[i].isManual_ = !0, P(r), n
                    }
                    finishDraft(e, t) {
                        let r = e && e[i];
                        r && r.isManual_ || l(9);
                        let {
                            scope_: n
                        } = r;
                        return O(n, t), R(void 0, n)
                    }
                    setAutoFreeze(e) {
                        this.autoFreeze_ = e
                    }
                    setUseStrictShallowCopy(e) {
                        this.useStrictShallowCopy_ = e
                    }
                    applyPatches(e, t) {
                        let r;
                        for (r = t.length - 1; r >= 0; r--) {
                            let n = t[r];
                            if (0 === n.path.length && "replace" === n.op) {
                                e = n.value;
                                break
                            }
                        }
                        r > -1 && (t = t.slice(r + 1));
                        let n = D("Patches").applyPatches_;
                        return s(e) ? n(e, t) : this.produce(e, e => n(e, t))
                    }
                },
                T = H.produce;
            H.produceWithPatches.bind(H), H.setAutoFreeze.bind(H), H.setUseStrictShallowCopy.bind(H), H.applyPatches.bind(H), H.createDraft.bind(H), H.finishDraft.bind(H)
        },
        77647: function(e, t, r) {
            r.d(t, {
                y: function() {
                    return a
                }
            });
            var n = r(77918);
            let a = (0, n.ax)({
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
        99496: function(e, t, r) {
            r.d(t, {
                e: function() {
                    return a
                }
            });
            var n = r(77918);
            let a = (0, n.ax)({
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
        },
        24994: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return a
                }
            });
            var n = r(77918);
            let a = (0, n.ax)({
                id: 1,
                network: "homestead",
                name: "Ethereum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://eth-mainnet.g.alchemy.com/v2"],
                        webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://mainnet.infura.io/v3"],
                        webSocket: ["wss://mainnet.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://cloudflare-eth.com"]
                    },
                    public: {
                        http: ["https://cloudflare-eth.com"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Etherscan",
                        url: "https://etherscan.io"
                    },
                    default: {
                        name: "Etherscan",
                        url: "https://etherscan.io"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
                        blockCreated: 16966585
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 14353601
                    }
                }
            })
        },
        6490: function(e, t, r) {
            r.d(t, {
                F: function() {
                    return a
                }
            });
            var n = r(77918);
            let a = (0, n.ax)({
                id: 11155111,
                network: "sepolia",
                name: "Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "SEP",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://eth-sepolia.g.alchemy.com/v2"],
                        webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://sepolia.infura.io/v3"],
                        webSocket: ["wss://sepolia.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://rpc.sepolia.org"]
                    },
                    public: {
                        http: ["https://rpc.sepolia.org"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Etherscan",
                        url: "https://sepolia.etherscan.io"
                    },
                    default: {
                        name: "Etherscan",
                        url: "https://sepolia.etherscan.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 751532
                    },
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0x21B000Fd62a880b2125A61e36a284BB757b76025",
                        blockCreated: 3914906
                    }
                },
                testnet: !0
            })
        },
        64639: function(e, t, r) {
            r.d(t, {
                zL: function() {
                    return n
                }
            });
            let n = 2n ** 256n - 1n
        },
        77918: function(e, t, r) {
            r.d(t, {
                ax: function() {
                    return n
                }
            });

            function n(e, t = {}) {
                let {
                    fees: r = e.fees,
                    formatters: n = e.formatters,
                    serializers: a = e.serializers
                } = t;
                return { ...e,
                    fees: r,
                    formatters: n,
                    serializers: a
                }
            }
        }
    }
]);
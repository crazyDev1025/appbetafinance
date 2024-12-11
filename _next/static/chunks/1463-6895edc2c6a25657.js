(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1463], {
        47392: function(t, e, r) {
            var i = r(11496),
                s = r(17166)(i);
            t.exports = s
        },
        4263: function(t, e, r) {
            var i = r(14820)();
            t.exports = i
        },
        11496: function(t, e, r) {
            var i = r(4263),
                s = r(22901);
            t.exports = function(t, e) {
                return t && i(t, e, s)
            }
        },
        31160: function(t, e, r) {
            var i = r(47392),
                s = r(97703);
            t.exports = function(t, e) {
                var r = -1,
                    n = s(t) ? Array(t.length) : [];
                return i(t, function(t, i, s) {
                    n[++r] = e(t, i, s)
                }), n
            }
        },
        60455: function(t, e, r) {
            var i = r(45667),
                s = r(26402),
                n = r(89308),
                u = r(31160),
                o = r(4779),
                a = r(74238),
                l = r(91816),
                c = r(39276),
                h = r(54703);
            t.exports = function(t, e, r) {
                e = e.length ? i(e, function(t) {
                    return h(t) ? function(e) {
                        return s(e, 1 === t.length ? t[0] : t)
                    } : t
                }) : [c];
                var d = -1;
                return e = i(e, a(n)), o(u(t, function(t, r, s) {
                    return {
                        criteria: i(e, function(e) {
                            return e(t)
                        }),
                        index: ++d,
                        value: t
                    }
                }), function(t, e) {
                    return l(t, e, r)
                })
            }
        },
        4779: function(t) {
            t.exports = function(t, e) {
                var r = t.length;
                for (t.sort(e); r--;) t[r] = t[r].value;
                return t
            }
        },
        27125: function(t, e, r) {
            var i = r(36883);
            t.exports = function(t, e) {
                if (t !== e) {
                    var r = void 0 !== t,
                        s = null === t,
                        n = t == t,
                        u = i(t),
                        o = void 0 !== e,
                        a = null === e,
                        l = e == e,
                        c = i(e);
                    if (!a && !c && !u && t > e || u && o && l && !a && !c || s && o && l || !r && l || !n) return 1;
                    if (!s && !u && !c && t < e || c && r && n && !s && !u || a && r && n || !o && n || !l) return -1
                }
                return 0
            }
        },
        91816: function(t, e, r) {
            var i = r(27125);
            t.exports = function(t, e, r) {
                for (var s = -1, n = t.criteria, u = e.criteria, o = n.length, a = r.length; ++s < o;) {
                    var l = i(n[s], u[s]);
                    if (l) {
                        if (s >= a) return l;
                        return l * ("desc" == r[s] ? -1 : 1)
                    }
                }
                return t.index - e.index
            }
        },
        17166: function(t, e, r) {
            var i = r(97703);
            t.exports = function(t, e) {
                return function(r, s) {
                    if (null == r) return r;
                    if (!i(r)) return t(r, s);
                    for (var n = r.length, u = e ? n : -1, o = Object(r);
                        (e ? u-- : ++u < n) && !1 !== s(o[u], u, o););
                    return r
                }
            }
        },
        14820: function(t) {
            t.exports = function(t) {
                return function(e, r, i) {
                    for (var s = -1, n = Object(e), u = i(e), o = u.length; o--;) {
                        var a = u[t ? o : ++s];
                        if (!1 === r(n[a], a, n)) break
                    }
                    return e
                }
            }
        },
        48756: function(t, e, r) {
            "use strict";
            let i;

            function s() {}
            r.d(e, {
                eM: function() {
                    return tO
                },
                _g: function() {
                    return tb
                },
                mA: function() {
                    return tU
                },
                KQ: function() {
                    return tL
                },
                xx: function() {
                    return tx
                },
                $4: function() {
                    return tH
                },
                do: function() {
                    return tX
                },
                GG: function() {
                    return t1
                },
                qL: function() {
                    return tB
                },
                c9: function() {
                    return t4
                },
                F6: function() {
                    return t3
                },
                LN: function() {
                    return tW
                },
                t_: function() {
                    return tQ
                },
                QW: function() {
                    return tV
                },
                g0: function() {
                    return t$
                },
                BX: function() {
                    return t7
                }
            });
            let n = "undefined" == typeof window || "Deno" in window;

            function u() {}

            function o(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function a(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function l(t, e, r) {
                return q(t) ? "function" == typeof e ? { ...r,
                    queryKey: t,
                    queryFn: e
                } : { ...e,
                    queryKey: t
                } : t
            }

            function c(t, e, r) {
                return q(t) ? "function" == typeof e ? { ...r,
                    mutationKey: t,
                    mutationFn: e
                } : { ...e,
                    mutationKey: t
                } : "function" == typeof t ? { ...e,
                    mutationFn: t
                } : { ...t
                }
            }

            function h(t, e, r) {
                return q(t) ? [{ ...e,
                    queryKey: t
                }, r] : [t || {}, e]
            }

            function d(t, e) {
                let {
                    type: r = "all",
                    exact: i,
                    fetchStatus: s,
                    predicate: n,
                    queryKey: u,
                    stale: o
                } = t;
                if (q(u)) {
                    if (i) {
                        if (e.queryHash !== p(u, e.options)) return !1
                    } else {
                        if (!v(e.queryKey, u)) return !1
                    }
                }
                if ("all" !== r) {
                    let t = e.isActive();
                    if ("active" === r && !t || "inactive" === r && t) return !1
                }
                return ("boolean" != typeof o || e.isStale() === o) && (void 0 === s || s === e.state.fetchStatus) && (!n || !!n(e))
            }

            function f(t, e) {
                let {
                    exact: r,
                    fetching: i,
                    predicate: s,
                    mutationKey: n
                } = t;
                if (q(n)) {
                    if (!e.options.mutationKey) return !1;
                    if (r) {
                        if (y(e.options.mutationKey) !== y(n)) return !1
                    } else {
                        if (!v(e.options.mutationKey, n)) return !1
                    }
                }
                return ("boolean" != typeof i || "loading" === e.state.status === i) && (!s || !!s(e))
            }

            function p(t, e) {
                let r = (null == e ? void 0 : e.queryKeyHashFn) || y;
                return r(t)
            }

            function y(t) {
                return JSON.stringify(t, (t, e) => C(e) ? Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}) : e)
            }

            function v(t, e) {
                return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && !Object.keys(e).some(r => !v(t[r], e[r]))
            }

            function m(t, e) {
                if (t === e) return t;
                let r = g(t) && g(e);
                if (r || C(t) && C(e)) {
                    let i = r ? t.length : Object.keys(t).length,
                        s = r ? e : Object.keys(e),
                        n = s.length,
                        u = r ? [] : {},
                        o = 0;
                    for (let i = 0; i < n; i++) {
                        let n = r ? i : s[i];
                        u[n] = m(t[n], e[n]), u[n] === t[n] && o++
                    }
                    return i === n && o === i ? t : u
                }
                return e
            }

            function b(t, e) {
                if (t && !e || e && !t) return !1;
                for (let r in t)
                    if (t[r] !== e[r]) return !1;
                return !0
            }

            function g(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function C(t) {
                if (!O(t)) return !1;
                let e = t.constructor;
                if (void 0 === e) return !0;
                let r = e.prototype;
                return !!(O(r) && r.hasOwnProperty("isPrototypeOf"))
            }

            function O(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function q(t) {
                return Array.isArray(t)
            }

            function R(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function S(t) {
                R(0).then(t)
            }

            function w(t, e, r) {
                return null != r.isDataEqual && r.isDataEqual(t, e) ? t : "function" == typeof r.structuralSharing ? r.structuralSharing(t, e) : !1 !== r.structuralSharing ? m(t, e) : e
            }
            let E = console,
                P = function() {
                    let t = [],
                        e = 0,
                        r = t => {
                            t()
                        },
                        i = t => {
                            t()
                        },
                        s = i => {
                            e ? t.push(i) : S(() => {
                                r(i)
                            })
                        },
                        n = () => {
                            let e = t;
                            t = [], e.length && S(() => {
                                i(() => {
                                    e.forEach(t => {
                                        r(t)
                                    })
                                })
                            })
                        };
                    return {
                        batch: t => {
                            let r;
                            e++;
                            try {
                                r = t()
                            } finally {
                                --e || n()
                            }
                            return r
                        },
                        batchCalls: t => (...e) => {
                            s(() => {
                                t(...e)
                            })
                        },
                        schedule: s,
                        setNotifyFunction: t => {
                            r = t
                        },
                        setBatchNotifyFunction: t => {
                            i = t
                        }
                    }
                }();
            class F {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(t) {
                    let e = {
                        listener: t
                    };
                    return this.listeners.add(e), this.onSubscribe(), () => {
                        this.listeners.delete(e), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
            let Q = new class extends F {
                    constructor() {
                        super(), this.setup = t => {
                            if (!n && window.addEventListener) {
                                let e = () => t();
                                return window.addEventListener("visibilitychange", e, !1), window.addEventListener("focus", e, !1), () => {
                                    window.removeEventListener("visibilitychange", e), window.removeEventListener("focus", e)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.cleanup || this.setEventListener(this.setup)
                    }
                    onUnsubscribe() {
                        if (!this.hasListeners()) {
                            var t;
                            null == (t = this.cleanup) || t.call(this), this.cleanup = void 0
                        }
                    }
                    setEventListener(t) {
                        var e;
                        this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t(t => {
                            "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                        })
                    }
                    setFocused(t) {
                        let e = this.focused !== t;
                        e && (this.focused = t, this.onFocus())
                    }
                    onFocus() {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t()
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                    }
                },
                x = ["online", "offline"],
                M = new class extends F {
                    constructor() {
                        super(), this.setup = t => {
                            if (!n && window.addEventListener) {
                                let e = () => t();
                                return x.forEach(t => {
                                    window.addEventListener(t, e, !1)
                                }), () => {
                                    x.forEach(t => {
                                        window.removeEventListener(t, e)
                                    })
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.cleanup || this.setEventListener(this.setup)
                    }
                    onUnsubscribe() {
                        if (!this.hasListeners()) {
                            var t;
                            null == (t = this.cleanup) || t.call(this), this.cleanup = void 0
                        }
                    }
                    setEventListener(t) {
                        var e;
                        this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t(t => {
                            "boolean" == typeof t ? this.setOnline(t) : this.onOnline()
                        })
                    }
                    setOnline(t) {
                        let e = this.online !== t;
                        e && (this.online = t, this.onOnline())
                    }
                    onOnline() {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t()
                        })
                    }
                    isOnline() {
                        return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                    }
                };

            function I(t) {
                return Math.min(1e3 * 2 ** t, 3e4)
            }

            function A(t) {
                return (null != t ? t : "online") !== "online" || M.isOnline()
            }
            class D {
                constructor(t) {
                    this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
                }
            }

            function K(t) {
                return t instanceof D
            }

            function k(t) {
                let e, r, i, s = !1,
                    n = 0,
                    u = !1,
                    o = new Promise((t, e) => {
                        r = t, i = e
                    }),
                    a = () => !Q.isFocused() || "always" !== t.networkMode && !M.isOnline(),
                    l = i => {
                        u || (u = !0, null == t.onSuccess || t.onSuccess(i), null == e || e(), r(i))
                    },
                    c = r => {
                        u || (u = !0, null == t.onError || t.onError(r), null == e || e(), i(r))
                    },
                    h = () => new Promise(r => {
                        e = t => {
                            let e = u || !a();
                            return e && r(t), e
                        }, null == t.onPause || t.onPause()
                    }).then(() => {
                        e = void 0, u || null == t.onContinue || t.onContinue()
                    }),
                    d = () => {
                        let e;
                        if (!u) {
                            try {
                                e = t.fn()
                            } catch (t) {
                                e = Promise.reject(t)
                            }
                            Promise.resolve(e).then(l).catch(e => {
                                var r, i;
                                if (u) return;
                                let o = null != (r = t.retry) ? r : 3,
                                    l = null != (i = t.retryDelay) ? i : I,
                                    f = "function" == typeof l ? l(n, e) : l,
                                    p = !0 === o || "number" == typeof o && n < o || "function" == typeof o && o(n, e);
                                if (s || !p) {
                                    c(e);
                                    return
                                }
                                n++, null == t.onFail || t.onFail(n, e), R(f).then(() => {
                                    if (a()) return h()
                                }).then(() => {
                                    s ? c(e) : d()
                                })
                            })
                        }
                    };
                return A(t.networkMode) ? d() : h().then(d), {
                    promise: o,
                    cancel: e => {
                        u || (c(new D(e)), null == t.abort || t.abort())
                    },
                    continue: () => {
                        let t = null == e ? void 0 : e();
                        return t ? o : Promise.resolve()
                    },
                    cancelRetry: () => {
                        s = !0
                    },
                    continueRetry: () => {
                        s = !1
                    }
                }
            }
            class U {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), o(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove()
                    }, this.cacheTime))
                }
                updateCacheTime(t) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != t ? t : n ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            }
            class T extends U {
                constructor(t) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || E, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || function(t) {
                        let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                            r = void 0 !== e,
                            i = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                        return {
                            data: e,
                            dataUpdateCount: 0,
                            dataUpdatedAt: r ? null != i ? i : Date.now() : 0,
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
                    let r = w(this.state.data, t, this.options);
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
                    return null == (e = this.retryer) || e.cancel(t), r ? r.then(u).catch(u) : Promise.resolve()
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
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !a(this.state.dataUpdatedAt, t)
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
                    var r, i, s, n;
                    if ("idle" !== this.state.fetchStatus) {
                        if (this.state.dataUpdatedAt && null != e && e.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) return null == (s = this.retryer) || s.continueRetry(), this.promise
                    }
                    if (t && this.setOptions(t), !this.options.queryFn) {
                        let t = this.observers.find(t => t.options.queryFn);
                        t && this.setOptions(t.options)
                    }
                    Array.isArray(this.options.queryKey);
                    let u = function() {
                            if ("function" == typeof AbortController) return new AbortController
                        }(),
                        o = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        a = t => {
                            Object.defineProperty(t, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (u) return this.abortSignalConsumed = !0, u.signal
                                }
                            })
                        };
                    a(o);
                    let l = {
                        fetchOptions: e,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    a(l), null == (r = this.options.behavior) || r.onFetch(l), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (i = l.fetchOptions) ? void 0 : i.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (n = l.fetchOptions) ? void 0 : n.meta
                    });
                    let c = t => {
                        if (K(t) && t.silent || this.dispatch({
                                type: "error",
                                error: t
                            }), !K(t)) {
                            var e, r, i, s;
                            null == (e = (r = this.cache.config).onError) || e.call(r, t, this), null == (i = (s = this.cache.config).onSettled) || i.call(s, this.state.data, t, this)
                        }
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = k({
                        fn: l.fetchFn,
                        abort: null == u ? void 0 : u.abort.bind(u),
                        onSuccess: t => {
                            var e, r, i, s;
                            if (void 0 === t) {
                                c(Error(this.queryHash + " data is undefined"));
                                return
                            }
                            this.setData(t), null == (e = (r = this.cache.config).onSuccess) || e.call(r, t, this), null == (i = (s = this.cache.config).onSettled) || i.call(s, t, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        },
                        onError: c,
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
                        retry: l.options.retry,
                        retryDelay: l.options.retryDelay,
                        networkMode: l.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(t) {
                    this.state = (e => {
                        var r, i;
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
                                    fetchStatus: A(this.options.networkMode) ? "fetching" : "paused",
                                    ...!e.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...e,
                                    data: t.data,
                                    dataUpdateCount: e.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (i = t.dataUpdatedAt) ? i : Date.now(),
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
                                let s = t.error;
                                if (K(s) && s.revert && this.revertState) return { ...this.revertState
                                };
                                return { ...e,
                                    error: s,
                                    errorUpdateCount: e.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: e.fetchFailureCount + 1,
                                    fetchFailureReason: s,
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
                    })(this.state), P.batch(() => {
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
            class L extends F {
                constructor(t) {
                    super(), this.config = t || {}, this.queries = [], this.queriesMap = {}
                }
                build(t, e, r) {
                    var i;
                    let s = e.queryKey,
                        n = null != (i = e.queryHash) ? i : p(s, e),
                        u = this.get(n);
                    return u || (u = new T({
                        cache: this,
                        logger: t.getLogger(),
                        queryKey: s,
                        queryHash: n,
                        options: t.defaultQueryOptions(e),
                        state: r,
                        defaultOptions: t.getQueryDefaults(s)
                    }), this.add(u)), u
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
                    P.batch(() => {
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
                    let [r] = h(t, e);
                    return void 0 === r.exact && (r.exact = !0), this.queries.find(t => d(r, t))
                }
                findAll(t, e) {
                    let [r] = h(t, e);
                    return Object.keys(r).length > 0 ? this.queries.filter(t => d(r, t)) : this.queries
                }
                notify(t) {
                    P.batch(() => {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(t)
                        })
                    })
                }
                onFocus() {
                    P.batch(() => {
                        this.queries.forEach(t => {
                            t.onFocus()
                        })
                    })
                }
                onOnline() {
                    P.batch(() => {
                        this.queries.forEach(t => {
                            t.onOnline()
                        })
                    })
                }
            }
            class j extends U {
                constructor(t) {
                    super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || E, this.observers = [], this.state = t.state || N(), this.setOptions(t.options), this.scheduleGc()
                }
                setOptions(t) {
                    this.options = { ...this.defaultOptions,
                        ...t
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                get meta() {
                    return this.options.meta
                }
                setState(t) {
                    this.dispatch({
                        type: "setState",
                        state: t
                    })
                }
                addObserver(t) {
                    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: t
                    }))
                }
                removeObserver(t) {
                    this.observers = this.observers.filter(e => e !== t), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: t
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    var t, e;
                    return null != (t = null == (e = this.retryer) ? void 0 : e.continue()) ? t : this.execute()
                }
                async execute() {
                    var t, e, r, i, s, n, u, o, a, l, c, h, d, f, p, y, v, m, b, g;
                    let C = "loading" === this.state.status;
                    try {
                        if (!C) {
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (a = (l = this.mutationCache.config).onMutate) ? void 0 : a.call(l, this.state.variables, this));
                            let t = await (null == (c = (h = this.options).onMutate) ? void 0 : c.call(h, this.state.variables));
                            t !== this.state.context && this.dispatch({
                                type: "loading",
                                context: t,
                                variables: this.state.variables
                            })
                        }
                        let d = await (() => {
                            var t;
                            return this.retryer = k({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
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
                                retry: null != (t = this.options.retry) ? t : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        })();
                        return await (null == (t = (e = this.mutationCache.config).onSuccess) ? void 0 : t.call(e, d, this.state.variables, this.state.context, this)), await (null == (r = (i = this.options).onSuccess) ? void 0 : r.call(i, d, this.state.variables, this.state.context)), await (null == (s = (n = this.mutationCache.config).onSettled) ? void 0 : s.call(n, d, null, this.state.variables, this.state.context, this)), await (null == (u = (o = this.options).onSettled) ? void 0 : u.call(o, d, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: d
                        }), d
                    } catch (t) {
                        try {
                            throw await (null == (d = (f = this.mutationCache.config).onError) ? void 0 : d.call(f, t, this.state.variables, this.state.context, this)), await (null == (p = (y = this.options).onError) ? void 0 : p.call(y, t, this.state.variables, this.state.context)), await (null == (v = (m = this.mutationCache.config).onSettled) ? void 0 : v.call(m, void 0, t, this.state.variables, this.state.context, this)), await (null == (b = (g = this.options).onSettled) ? void 0 : b.call(g, void 0, t, this.state.variables, this.state.context)), t
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: t
                            })
                        }
                    }
                }
                dispatch(t) {
                    this.state = (e => {
                        switch (t.type) {
                            case "failed":
                                return { ...e,
                                    failureCount: t.failureCount,
                                    failureReason: t.error
                                };
                            case "pause":
                                return { ...e,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...e,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...e,
                                    context: t.context,
                                    data: void 0,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    isPaused: !A(this.options.networkMode),
                                    status: "loading",
                                    variables: t.variables
                                };
                            case "success":
                                return { ...e,
                                    data: t.data,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...e,
                                    data: void 0,
                                    error: t.error,
                                    failureCount: e.failureCount + 1,
                                    failureReason: t.error,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...e,
                                    ...t.state
                                }
                        }
                    })(this.state), P.batch(() => {
                        this.observers.forEach(e => {
                            e.onMutationUpdate(t)
                        }), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: t
                        })
                    })
                }
            }

            function N() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
            class H extends F {
                constructor(t) {
                    super(), this.config = t || {}, this.mutations = [], this.mutationId = 0
                }
                build(t, e, r) {
                    let i = new j({
                        mutationCache: this,
                        logger: t.getLogger(),
                        mutationId: ++this.mutationId,
                        options: t.defaultMutationOptions(e),
                        state: r,
                        defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0
                    });
                    return this.add(i), i
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
                    P.batch(() => {
                        this.mutations.forEach(t => {
                            this.remove(t)
                        })
                    })
                }
                getAll() {
                    return this.mutations
                }
                find(t) {
                    return void 0 === t.exact && (t.exact = !0), this.mutations.find(e => f(t, e))
                }
                findAll(t) {
                    return this.mutations.filter(e => f(t, e))
                }
                notify(t) {
                    P.batch(() => {
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
                        return P.batch(() => t.reduce((t, e) => t.then(() => e.continue().catch(u)), Promise.resolve()))
                    }).then(() => {
                        this.resuming = void 0
                    }), this.resuming
                }
            }

            function G(t, e) {
                return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
            }
            class _ {
                constructor(t = {}) {
                    this.queryCache = t.queryCache || new L, this.mutationCache = t.mutationCache || new H, this.logger = t.logger || E, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = Q.subscribe(() => {
                        Q.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    }), this.unsubscribeOnline = M.subscribe(() => {
                        M.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var t, e;
                    this.mountCount--, 0 === this.mountCount && (null == (t = this.unsubscribeFocus) || t.call(this), this.unsubscribeFocus = void 0, null == (e = this.unsubscribeOnline) || e.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(t, e) {
                    let [r] = h(t, e);
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
                    let i = l(t, e, r),
                        s = this.getQueryData(i.queryKey);
                    return s ? Promise.resolve(s) : this.fetchQuery(i)
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
                        s = null == i ? void 0 : i.state.data,
                        n = "function" == typeof e ? e(s) : e;
                    if (void 0 === n) return;
                    let u = l(t),
                        o = this.defaultQueryOptions(u);
                    return this.queryCache.build(this, o).setData(n, { ...r,
                        manual: !0
                    })
                }
                setQueriesData(t, e, r) {
                    return P.batch(() => this.getQueryCache().findAll(t).map(({
                        queryKey: t
                    }) => [t, this.setQueryData(t, e, r)]))
                }
                getQueryState(t, e) {
                    var r;
                    return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state
                }
                removeQueries(t, e) {
                    let [r] = h(t, e), i = this.queryCache;
                    P.batch(() => {
                        i.findAll(r).forEach(t => {
                            i.remove(t)
                        })
                    })
                }
                resetQueries(t, e, r) {
                    let [i, s] = h(t, e, r), n = this.queryCache, u = {
                        type: "active",
                        ...i
                    };
                    return P.batch(() => (n.findAll(i).forEach(t => {
                        t.reset()
                    }), this.refetchQueries(u, s)))
                }
                cancelQueries(t, e, r) {
                    let [i, s = {}] = h(t, e, r);
                    void 0 === s.revert && (s.revert = !0);
                    let n = P.batch(() => this.queryCache.findAll(i).map(t => t.cancel(s)));
                    return Promise.all(n).then(u).catch(u)
                }
                invalidateQueries(t, e, r) {
                    let [i, s] = h(t, e, r);
                    return P.batch(() => {
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
                    let [i, s] = h(t, e, r), n = P.batch(() => this.queryCache.findAll(i).filter(t => !t.isDisabled()).map(t => {
                        var e;
                        return t.fetch(void 0, { ...s,
                            cancelRefetch: null == (e = null == s ? void 0 : s.cancelRefetch) || e,
                            meta: {
                                refetchPage: i.refetchPage
                            }
                        })
                    })), o = Promise.all(n).then(u);
                    return null != s && s.throwOnError || (o = o.catch(u)), o
                }
                fetchQuery(t, e, r) {
                    let i = l(t, e, r),
                        s = this.defaultQueryOptions(i);
                    void 0 === s.retry && (s.retry = !1);
                    let n = this.queryCache.build(this, s);
                    return n.isStaleByTime(s.staleTime) ? n.fetch(s) : Promise.resolve(n.state.data)
                }
                prefetchQuery(t, e, r) {
                    return this.fetchQuery(t, e, r).then(u).catch(u)
                }
                fetchInfiniteQuery(t, e, r) {
                    let i = l(t, e, r);
                    return i.behavior = {
                        onFetch: t => {
                            t.fetchFn = () => {
                                var e, r, i, s, n, u, o;
                                let a;
                                let l = null == (e = t.fetchOptions) ? void 0 : null == (r = e.meta) ? void 0 : r.refetchPage,
                                    c = null == (i = t.fetchOptions) ? void 0 : null == (s = i.meta) ? void 0 : s.fetchMore,
                                    h = null == c ? void 0 : c.pageParam,
                                    d = (null == c ? void 0 : c.direction) === "forward",
                                    f = (null == c ? void 0 : c.direction) === "backward",
                                    p = (null == (n = t.state.data) ? void 0 : n.pages) || [],
                                    y = (null == (u = t.state.data) ? void 0 : u.pageParams) || [],
                                    v = y,
                                    m = !1,
                                    b = e => {
                                        Object.defineProperty(e, "signal", {
                                            enumerable: !0,
                                            get: () => {
                                                var e, r;
                                                return null != (e = t.signal) && e.aborted ? m = !0 : null == (r = t.signal) || r.addEventListener("abort", () => {
                                                    m = !0
                                                }), t.signal
                                            }
                                        })
                                    },
                                    g = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")),
                                    C = (t, e, r, i) => (v = i ? [e, ...v] : [...v, e], i ? [r, ...t] : [...t, r]),
                                    O = (e, r, i, s) => {
                                        if (m) return Promise.reject("Cancelled");
                                        if (void 0 === i && !r && e.length) return Promise.resolve(e);
                                        let n = {
                                            queryKey: t.queryKey,
                                            pageParam: i,
                                            meta: t.options.meta
                                        };
                                        b(n);
                                        let u = g(n),
                                            o = Promise.resolve(u).then(t => C(e, i, t, s));
                                        return o
                                    };
                                if (p.length) {
                                    if (d) {
                                        let e = void 0 !== h,
                                            r = e ? h : G(t.options, p);
                                        a = O(p, e, r)
                                    } else if (f) {
                                        let e = void 0 !== h,
                                            r = e ? h : null == (o = t.options).getPreviousPageParam ? void 0 : o.getPreviousPageParam(p[0], p);
                                        a = O(p, e, r, !0)
                                    } else {
                                        v = [];
                                        let e = void 0 === t.options.getNextPageParam,
                                            r = !l || !p[0] || l(p[0], 0, p);
                                        a = r ? O([], e, y[0]) : Promise.resolve(C([], y[0], p[0]));
                                        for (let r = 1; r < p.length; r++) a = a.then(i => {
                                            let s = !l || !p[r] || l(p[r], r, p);
                                            if (s) {
                                                let s = e ? y[r] : G(t.options, i);
                                                return O(i, e, s)
                                            }
                                            return Promise.resolve(C(i, y[r], p[r]))
                                        })
                                    }
                                } else a = O([]);
                                let q = a.then(t => ({
                                    pages: t,
                                    pageParams: v
                                }));
                                return q
                            }
                        }
                    }, this.fetchQuery(i)
                }
                prefetchInfiniteQuery(t, e, r) {
                    return this.fetchInfiniteQuery(t, e, r).then(u).catch(u)
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
                    let r = this.queryDefaults.find(e => y(t) === y(e.queryKey));
                    r ? r.defaultOptions = e : this.queryDefaults.push({
                        queryKey: t,
                        defaultOptions: e
                    })
                }
                getQueryDefaults(t) {
                    if (!t) return;
                    let e = this.queryDefaults.find(e => v(t, e.queryKey));
                    return null == e ? void 0 : e.defaultOptions
                }
                setMutationDefaults(t, e) {
                    let r = this.mutationDefaults.find(e => y(t) === y(e.mutationKey));
                    r ? r.defaultOptions = e : this.mutationDefaults.push({
                        mutationKey: t,
                        defaultOptions: e
                    })
                }
                getMutationDefaults(t) {
                    if (!t) return;
                    let e = this.mutationDefaults.find(e => v(t, e.mutationKey));
                    return null == e ? void 0 : e.defaultOptions
                }
                defaultQueryOptions(t) {
                    if (null != t && t._defaulted) return t;
                    let e = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == t ? void 0 : t.queryKey),
                        ...t,
                        _defaulted: !0
                    };
                    return !e.queryHash && e.queryKey && (e.queryHash = p(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.useErrorBoundary && (e.useErrorBoundary = !!e.suspense), e
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

            function B(t) {
                return t.state.isPaused
            }

            function W(t) {
                return "success" === t.state.status
            }
            let z = ["added", "removed", "updated"];

            function J(t) {
                return z.includes(t)
            }
            async function V({
                queryClient: t,
                persister: e,
                maxAge: r = 864e5,
                buster: i = "",
                hydrateOptions: s
            }) {
                try {
                    let n = await e.restoreClient();
                    if (n) {
                        if (n.timestamp) {
                            let u = Date.now() - n.timestamp > r,
                                o = n.buster !== i;
                            u || o ? e.removeClient() : function(t, e, r) {
                                if ("object" != typeof e || null === e) return;
                                let i = t.getMutationCache(),
                                    s = t.getQueryCache(),
                                    n = e.mutations || [],
                                    u = e.queries || [];
                                n.forEach(e => {
                                    var s;
                                    i.build(t, { ...null == r ? void 0 : null == (s = r.defaultOptions) ? void 0 : s.mutations,
                                        mutationKey: e.mutationKey
                                    }, e.state)
                                }), u.forEach(e => {
                                    var i;
                                    let n = s.get(e.queryHash),
                                        u = { ...e.state,
                                            fetchStatus: "idle"
                                        };
                                    if (n) {
                                        n.state.dataUpdatedAt < u.dataUpdatedAt && n.setState(u);
                                        return
                                    }
                                    s.build(t, { ...null == r ? void 0 : null == (i = r.defaultOptions) ? void 0 : i.queries,
                                        queryKey: e.queryKey,
                                        queryHash: e.queryHash
                                    }, u)
                                })
                            }(t, n.clientState, s)
                        } else e.removeClient()
                    }
                } catch (t) {
                    e.removeClient()
                }
            }
            async function Y({
                queryClient: t,
                persister: e,
                buster: r = "",
                dehydrateOptions: i
            }) {
                let s = {
                    buster: r,
                    timestamp: Date.now(),
                    clientState: function(t, e = {}) {
                        let r = [],
                            i = [];
                        if (!1 !== e.dehydrateMutations) {
                            let i = e.shouldDehydrateMutation || B;
                            t.getMutationCache().getAll().forEach(t => {
                                i(t) && r.push({
                                    mutationKey: t.options.mutationKey,
                                    state: t.state
                                })
                            })
                        }
                        if (!1 !== e.dehydrateQueries) {
                            let r = e.shouldDehydrateQuery || W;
                            t.getQueryCache().getAll().forEach(t => {
                                r(t) && i.push({
                                    state: t.state,
                                    queryKey: t.queryKey,
                                    queryHash: t.queryHash
                                })
                            })
                        }
                        return {
                            mutations: r,
                            queries: i
                        }
                    }(t, i)
                };
                await e.persistClient(s)
            }
            var Z = r(27033),
                $ = r(2265);
            let X = $.createContext(void 0),
                tt = $.createContext(!1);

            function te(t, e) {
                return t || (e && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = X), window.ReactQueryClientContext) : X)
            }
            let tr = ({
                    context: t
                } = {}) => {
                    let e = $.useContext(te(t, $.useContext(tt)));
                    if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                ti = ({
                    client: t,
                    children: e,
                    context: r,
                    contextSharing: i = !1
                }) => {
                    $.useEffect(() => (t.mount(), () => {
                        t.unmount()
                    }), [t]);
                    let s = te(r, i);
                    return $.createElement(tt.Provider, {
                        value: !r && i
                    }, $.createElement(s.Provider, {
                        value: t
                    }, e))
                },
                ts = $.createContext(!1),
                tn = () => $.useContext(ts);
            ts.Provider;
            let tu = $.createContext((i = !1, {
                    clearReset: () => {
                        i = !1
                    },
                    reset: () => {
                        i = !0
                    },
                    isReset: () => i
                })),
                to = () => $.useContext(tu);
            var ta = r(26272);
            class tl extends F {
                constructor(t, e) {
                    super(), this.client = t, this.setOptions(e), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(t) {
                    var e;
                    let r = this.options;
                    this.options = this.client.defaultMutationOptions(t), b(r, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    }), null == (e = this.currentMutation) || e.setOptions(this.options)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var t;
                        null == (t = this.currentMutation) || t.removeObserver(this)
                    }
                }
                onMutationUpdate(t) {
                    this.updateResult();
                    let e = {
                        listeners: !0
                    };
                    "success" === t.type ? e.onSuccess = !0 : "error" === t.type && (e.onError = !0), this.notify(e)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(t, e) {
                    return this.mutateOptions = e, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: void 0 !== t ? t : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    let t = this.currentMutation ? this.currentMutation.state : N(),
                        e = { ...t,
                            isLoading: "loading" === t.status,
                            isSuccess: "success" === t.status,
                            isError: "error" === t.status,
                            isIdle: "idle" === t.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = e
                }
                notify(t) {
                    P.batch(() => {
                        if (this.mutateOptions && this.hasListeners()) {
                            var e, r, i, s, n, u, o, a;
                            t.onSuccess ? (null == (e = (r = this.mutateOptions).onSuccess) || e.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (i = (s = this.mutateOptions).onSettled) || i.call(s, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : t.onError && (null == (n = (u = this.mutateOptions).onError) || n.call(u, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (o = (a = this.mutateOptions).onSettled) || o.call(a, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        t.listeners && this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(this.currentResult)
                        })
                    })
                }
            }
            let tc = ta.useSyncExternalStore;

            function th() {}
            class td extends F {
                constructor(t, e) {
                    super(), this.client = t, this.options = e, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(e)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.currentQuery.addObserver(this), tf(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return tp(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return tp(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(t, e) {
                    let r = this.options,
                        i = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(t), b(r, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
                    let s = this.hasListeners();
                    s && ty(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(e), s && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
                    let n = this.computeRefetchInterval();
                    s && (this.currentQuery !== i || this.options.enabled !== r.enabled || n !== this.currentRefetchInterval) && this.updateRefetchInterval(n)
                }
                getOptimisticResult(t) {
                    let e = this.client.getQueryCache().build(this.client, t),
                        r = this.createResult(e, t);
                    return t.keepPreviousData || (void 0 !== t.placeholderData ? !r.isPlaceholderData : b(this.getCurrentResult(), r)) || (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(t) {
                    let e = {};
                    return Object.keys(t).forEach(r => {
                        Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(r), t[r])
                        })
                    }), e
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: t,
                    ...e
                } = {}) {
                    return this.fetch({ ...e,
                        meta: {
                            refetchPage: t
                        }
                    })
                }
                fetchOptimistic(t) {
                    let e = this.client.defaultQueryOptions(t),
                        r = this.client.getQueryCache().build(this.client, e);
                    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e))
                }
                fetch(t) {
                    var e;
                    return this.executeFetch({ ...t,
                        cancelRefetch: null == (e = t.cancelRefetch) || e
                    }).then(() => (this.updateResult(), this.currentResult))
                }
                executeFetch(t) {
                    this.updateQuery();
                    let e = this.currentQuery.fetch(this.options, t);
                    return null != t && t.throwOnError || (e = e.catch(u)), e
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), n || this.currentResult.isStale || !o(this.options.staleTime)) return;
                    let t = a(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    this.staleTimeoutId = setTimeout(() => {
                        this.currentResult.isStale || this.updateResult()
                    }, t + 1)
                }
                computeRefetchInterval() {
                    var t;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
                }
                updateRefetchInterval(t) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = t, !n && !1 !== this.options.enabled && o(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground || Q.isFocused()) && this.executeFetch()
                    }, this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(t, e) {
                    let r;
                    let i = this.currentQuery,
                        s = this.options,
                        n = this.currentResult,
                        u = this.currentResultState,
                        o = this.currentResultOptions,
                        a = t !== i,
                        l = a ? t.state : this.currentQueryInitialState,
                        c = a ? this.currentResult : this.previousQueryResult,
                        {
                            state: h
                        } = t,
                        {
                            dataUpdatedAt: d,
                            error: f,
                            errorUpdatedAt: p,
                            fetchStatus: y,
                            status: v
                        } = h,
                        m = !1,
                        b = !1;
                    if (e._optimisticResults) {
                        let r = this.hasListeners(),
                            n = !r && tf(t, e),
                            u = r && ty(t, i, e, s);
                        (n || u) && (y = A(t.options.networkMode) ? "fetching" : "paused", d || (v = "loading")), "isRestoring" === e._optimisticResults && (y = "idle")
                    }
                    if (e.keepPreviousData && !h.dataUpdatedAt && null != c && c.isSuccess && "error" !== v) r = c.data, d = c.dataUpdatedAt, v = c.status, m = !0;
                    else if (e.select && void 0 !== h.data) {
                        if (n && h.data === (null == u ? void 0 : u.data) && e.select === this.selectFn) r = this.selectResult;
                        else try {
                            this.selectFn = e.select, r = e.select(h.data), r = w(null == n ? void 0 : n.data, r, e), this.selectResult = r, this.selectError = null
                        } catch (t) {
                            this.selectError = t
                        }
                    } else r = h.data;
                    if (void 0 !== e.placeholderData && void 0 === r && "loading" === v) {
                        let t;
                        if (null != n && n.isPlaceholderData && e.placeholderData === (null == o ? void 0 : o.placeholderData)) t = n.data;
                        else if (t = "function" == typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && void 0 !== t) try {
                            t = e.select(t), this.selectError = null
                        } catch (t) {
                            this.selectError = t
                        }
                        void 0 !== t && (v = "success", r = w(null == n ? void 0 : n.data, t, e), b = !0)
                    }
                    this.selectError && (f = this.selectError, r = this.selectResult, p = Date.now(), v = "error");
                    let g = "fetching" === y,
                        C = "loading" === v,
                        O = "error" === v,
                        q = {
                            status: v,
                            fetchStatus: y,
                            isLoading: C,
                            isSuccess: "success" === v,
                            isError: O,
                            isInitialLoading: C && g,
                            data: r,
                            dataUpdatedAt: d,
                            error: f,
                            errorUpdatedAt: p,
                            failureCount: h.fetchFailureCount,
                            failureReason: h.fetchFailureReason,
                            errorUpdateCount: h.errorUpdateCount,
                            isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
                            isFetchedAfterMount: h.dataUpdateCount > l.dataUpdateCount || h.errorUpdateCount > l.errorUpdateCount,
                            isFetching: g,
                            isRefetching: g && !C,
                            isLoadingError: O && 0 === h.dataUpdatedAt,
                            isPaused: "paused" === y,
                            isPlaceholderData: b,
                            isPreviousData: m,
                            isRefetchError: O && 0 !== h.dataUpdatedAt,
                            isStale: tv(t, e),
                            refetch: this.refetch,
                            remove: this.remove
                        };
                    return q
                }
                updateResult(t) {
                    let e = this.currentResult,
                        r = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, b(r, e)) return;
                    this.currentResult = r;
                    let i = {
                        cache: !0
                    };
                    (null == t ? void 0 : t.listeners) !== !1 && (() => {
                        if (!e) return !0;
                        let {
                            notifyOnChangeProps: t
                        } = this.options, r = "function" == typeof t ? t() : t;
                        if ("all" === r || !r && !this.trackedProps.size) return !0;
                        let i = new Set(null != r ? r : this.trackedProps);
                        return this.options.useErrorBoundary && i.add("error"), Object.keys(this.currentResult).some(t => {
                            let r = this.currentResult[t] !== e[t];
                            return r && i.has(t)
                        })
                    })() && (i.listeners = !0), this.notify({ ...i,
                        ...t
                    })
                }
                updateQuery() {
                    let t = this.client.getQueryCache().build(this.client, this.options);
                    if (t === this.currentQuery) return;
                    let e = this.currentQuery;
                    this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
                }
                onQueryUpdate(t) {
                    let e = {};
                    "success" === t.type ? e.onSuccess = !t.manual : "error" !== t.type || K(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
                }
                notify(t) {
                    P.batch(() => {
                        var e, r, i, s, n, u, o, a;
                        t.onSuccess ? (null == (e = (r = this.options).onSuccess) || e.call(r, this.currentResult.data), null == (i = (s = this.options).onSettled) || i.call(s, this.currentResult.data, null)) : t.onError && (null == (n = (u = this.options).onError) || n.call(u, this.currentResult.error), null == (o = (a = this.options).onSettled) || o.call(a, void 0, this.currentResult.error)), t.listeners && this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(this.currentResult)
                        }), t.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            }

            function tf(t, e) {
                return !1 !== e.enabled && !t.state.dataUpdatedAt && !("error" === t.state.status && !1 === e.retryOnMount) || t.state.dataUpdatedAt > 0 && tp(t, e, e.refetchOnMount)
            }

            function tp(t, e, r) {
                if (!1 !== e.enabled) {
                    let i = "function" == typeof r ? r(t) : r;
                    return "always" === i || !1 !== i && tv(t, e)
                }
                return !1
            }

            function ty(t, e, r, i) {
                return !1 !== r.enabled && (t !== e || !1 === i.enabled) && (!r.suspense || "error" !== t.state.status) && tv(t, r)
            }

            function tv(t, e) {
                return t.isStaleByTime(e.staleTime)
            }
            var tm = r(65401);

            function tb({
                queryClient: t = new _({
                    defaultOptions: {
                        queries: {
                            cacheTime: 864e5,
                            networkMode: "offlineFirst",
                            refetchOnWindowFocus: !1,
                            retry: 0
                        },
                        mutations: {
                            networkMode: "offlineFirst"
                        }
                    }
                }),
                storage: e = (0, Z.o6)({
                    storage: "undefined" != typeof window && window.localStorage ? window.localStorage : Z.wp
                }),
                persister: r = "undefined" != typeof window ? function({
                    storage: t,
                    key: e = "REACT_QUERY_OFFLINE_CACHE",
                    throttleTime: r = 1e3,
                    serialize: i = JSON.stringify,
                    deserialize: n = JSON.parse,
                    retry: u
                }) {
                    if (t) {
                        let s = r => {
                            try {
                                t.setItem(e, i(r));
                                return
                            } catch (t) {
                                return t
                            }
                        };
                        return {
                            persistClient: function(t, e = 100) {
                                let r, i = null;
                                return function(...s) {
                                    r = s, null === i && (i = setTimeout(() => {
                                        t(...r), i = null
                                    }, e))
                                }
                            }(t => {
                                let e = t,
                                    r = s(e),
                                    i = 0;
                                for (; r && e;) i++, (e = null == u ? void 0 : u({
                                    persistedClient: e,
                                    error: r,
                                    errorCount: i
                                })) && (r = s(e))
                            }, r),
                            restoreClient: () => {
                                let r = t.getItem(e);
                                if (r) return n(r)
                            },
                            removeClient: () => {
                                t.removeItem(e)
                            }
                        }
                    }
                    return {
                        persistClient: s,
                        restoreClient: () => void 0,
                        removeClient: s
                    }
                }({
                    key: "cache",
                    storage: e,
                    serialize: t => t,
                    deserialize: t => t
                }) : void 0,
                ...i
            }) {
                let n = (0, Z._g)({ ...i,
                    storage: e
                });
                return r && function(t) {
                    V(t).then(() => {
                        (function(t) {
                            let e = t.queryClient.getQueryCache().subscribe(e => {
                                    J(e.type) && Y(t)
                                }),
                                r = t.queryClient.getMutationCache().subscribe(e => {
                                    J(e.type) && Y(t)
                                })
                        })(t)
                    })
                }({
                    queryClient: t,
                    persister: r,
                    dehydrateOptions: {
                        shouldDehydrateQuery: t => 0 !== t.cacheTime && !1 !== t.queryKey[0].persist
                    }
                }), Object.assign(n, {
                    queryClient: t
                })
            }
            var tg = $.createContext(void 0),
                tC = $.createContext(void 0);

            function tO({
                children: t,
                config: e
            }) {
                return $.createElement(tg.Provider, {
                    children: $.createElement(ti, {
                        children: t,
                        client: e.queryClient,
                        context: tC
                    }),
                    value: e
                })
            }

            function tq() {
                let t = $.useContext(tg);
                if (!t) throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");
                return t
            }
            var tR = ta.useSyncExternalStore;

            function tS(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function tw(t) {
                return JSON.stringify(t, (t, e) => ! function(t) {
                    if (!tS(t)) return !1;
                    let e = t.constructor;
                    if (void 0 === e) return !0;
                    let r = e.prototype;
                    return !!(tS(r) && r.hasOwnProperty("isPrototypeOf"))
                }(e) ? "bigint" == typeof e ? e.toString() : e : Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}))
            }

            function tE(t, e, r) {
                let i = c(t, e, r);
                return function(t, e, r) {
                    var i, s;
                    let n = c(t, void 0, void 0),
                        u = tr({
                            context: n.context
                        }),
                        [o] = $.useState(() => new tl(u, n));
                    $.useEffect(() => {
                        o.setOptions(n)
                    }, [o, n]);
                    let a = tc($.useCallback(t => o.subscribe(P.batchCalls(t)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()),
                        l = $.useCallback((t, e) => {
                            o.mutate(t, e).catch(th)
                        }, [o]);
                    if (a.error && (i = o.options.useErrorBoundary, s = [a.error], "function" == typeof i ? i(...s) : !!i)) throw a.error;
                    return { ...a,
                        mutate: l,
                        mutateAsync: a.mutate
                    }
                }({
                    context: tC,
                    ...i
                })
            }

            function tP(t, e, r) {
                let i = Array.isArray(t) ? "function" == typeof e ? { ...r,
                        queryKey: t,
                        queryFn: e
                    } : { ...e,
                        queryKey: t
                    } : t,
                    s = function(t, e) {
                        var r, i;
                        let s = tr({
                                context: t.context
                            }),
                            n = tn(),
                            u = to(),
                            o = s.defaultQueryOptions({ ...t,
                                queryKeyHashFn: tw
                            });
                        o._optimisticResults = n ? "isRestoring" : "optimistic", o.onError && (o.onError = P.batchCalls(o.onError)), o.onSuccess && (o.onSuccess = P.batchCalls(o.onSuccess)), o.onSettled && (o.onSettled = P.batchCalls(o.onSettled)), o.suspense && "number" != typeof o.staleTime && (o.staleTime = 1e3), (o.suspense || o.useErrorBoundary) && !u.isReset() && (o.retryOnMount = !1);
                        let [a] = $.useState(() => new e(s, o)), l = a.getOptimisticResult(o);
                        if (tR($.useCallback(t => n ? () => void 0 : a.subscribe(P.batchCalls(t)), [a, n]), () => a.getCurrentResult(), () => a.getCurrentResult()), $.useEffect(() => {
                                u.clearReset()
                            }, [u]), $.useEffect(() => {
                                a.setOptions(o, {
                                    listeners: !1
                                })
                            }, [o, a]), o.suspense && l.isLoading && l.isFetching && !n) throw a.fetchOptimistic(o).then(({
                            data: t
                        }) => {
                            o.onSuccess ? .(t), o.onSettled ? .(t, null)
                        }).catch(t => {
                            u.clearReset(), o.onError ? .(t), o.onSettled ? .(void 0, t)
                        });
                        if (l.isError && !u.isReset() && !l.isFetching && (r = o.useErrorBoundary, i = [l.error, a.getCurrentQuery()], "function" == typeof r ? r(...i) : !!r)) throw l.error;
                        let c = "loading" === l.status && "idle" === l.fetchStatus ? "idle" : l.status,
                            h = "loading" === c && "fetching" === l.fetchStatus;
                        return { ...l,
                            defaultedOptions: o,
                            isIdle: "idle" === c,
                            isLoading: h,
                            observer: a,
                            status: c
                        }
                    }({
                        context: tC,
                        ...i
                    }, td),
                    n = {
                        data: s.data,
                        error: s.error,
                        fetchStatus: s.fetchStatus,
                        isError: s.isError,
                        isFetched: s.isFetched,
                        isFetchedAfterMount: s.isFetchedAfterMount,
                        isFetching: s.isFetching,
                        isIdle: s.isIdle,
                        isLoading: s.isLoading,
                        isRefetching: s.isRefetching,
                        isSuccess: s.isSuccess,
                        refetch: s.refetch,
                        status: s.status,
                        internal: {
                            dataUpdatedAt: s.dataUpdatedAt,
                            errorUpdatedAt: s.errorUpdatedAt,
                            failureCount: s.failureCount,
                            isFetchedAfterMount: s.isFetchedAfterMount,
                            isLoadingError: s.isLoadingError,
                            isPaused: s.isPaused,
                            isPlaceholderData: s.isPlaceholderData,
                            isPreviousData: s.isPreviousData,
                            isRefetchError: s.isRefetchError,
                            isStale: s.isStale,
                            remove: s.remove
                        }
                    };
                return s.defaultedOptions.notifyOnChangeProps ? n : function(t, e) {
                    let r = {};
                    return Object.keys(t).forEach(i => {
                        Object.defineProperty(r, i, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (e.trackedProps.add(i), t[i])
                        })
                    }), r
                }(n, s.observer)
            }
            var tF = () => tr({
                context: tC
            });

            function tQ({
                chainId: t
            } = {}) {
                return (0, tm.useSyncExternalStoreWithSelector)(e => (0, Z.pC)({
                    chainId: t
                }, e), () => (0, Z.uV)({
                    chainId: t
                }), () => (0, Z.uV)({
                    chainId: t
                }), t => t, (t, e) => t.uid === e.uid)
            }

            function tx({
                chainId: t
            } = {}) {
                let e = tQ({
                    chainId: t
                });
                return e.chain.id
            }

            function tM({
                chainId: t,
                scopeKey: e
            }) {
                return [{
                    entity: "blockNumber",
                    chainId: t,
                    scopeKey: e
                }]
            }

            function tI({
                queryKey: [{
                    chainId: t
                }]
            }) {
                return (0, Z.RQ)({
                    chainId: t
                })
            }

            function tA({
                cacheTime: t = 0,
                chainId: e,
                enabled: r = !0,
                scopeKey: i,
                staleTime: s,
                suspense: n,
                watch: u = !1,
                onBlock: o,
                onError: a,
                onSettled: l,
                onSuccess: c
            } = {}) {
                let h = tx({
                        chainId: e
                    }),
                    d = tQ({
                        chainId: h
                    }),
                    f = function({
                        chainId: t
                    } = {}) {
                        return (0, tm.useSyncExternalStoreWithSelector)(e => (0, Z.fq)({
                            chainId: t
                        }, e), () => (0, Z.jr)({
                            chainId: t
                        }), () => (0, Z.jr)({
                            chainId: t
                        }), t => t, (t, e) => t ? .uid === e ? .uid)
                    }({
                        chainId: h
                    }),
                    p = tF();
                return $.useEffect(() => {
                    if (!r || !u && !o) return;
                    let t = f ? ? d,
                        e = t.watchBlockNumber({
                            onBlockNumber: t => {
                                u && p.setQueryData(tM({
                                    chainId: h,
                                    scopeKey: i
                                }), t), o && o(t)
                            },
                            emitOnBegin: !0
                        });
                    return e
                }, [h, i, o, d, p, u, f, r]), tP(tM({
                    scopeKey: i,
                    chainId: h
                }), tI, {
                    cacheTime: t,
                    enabled: r,
                    staleTime: s,
                    suspense: n,
                    onError: a,
                    onSettled: l,
                    onSuccess: c
                })
            }

            function tD({
                chainId: t,
                enabled: e,
                queryKey: r
            }) {
                let i = tF(),
                    s = $.useCallback(() => i.invalidateQueries({
                        queryKey: r
                    }, {
                        cancelRefetch: !1
                    }), [i, r]);
                tA({
                    chainId: t,
                    enabled: e,
                    onBlock: e ? s : void 0,
                    scopeKey: e ? void 0 : "idle"
                })
            }
            var tK = t => "object" == typeof t && !Array.isArray(t);

            function tk(t, e, r = e, i = Z.vZ) {
                let s = $.useRef([]),
                    n = (0, tm.useSyncExternalStoreWithSelector)(t, e, r, t => t, (t, e) => {
                        if (tK(t) && tK(e) && s.current.length) {
                            for (let r of s.current) {
                                let s = i(t[r], e[r]);
                                if (!s) return !1
                            }
                            return !0
                        }
                        return i(t, e)
                    });
                if (tK(n)) {
                    let t = { ...n
                    };
                    return Object.defineProperties(t, Object.entries(t).reduce((t, [e, r]) => ({ ...t,
                        [e]: {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (s.current.includes(e) || s.current.push(e), r)
                        }
                    }), {})), t
                }
                return n
            }

            function tU({
                onConnect: t,
                onDisconnect: e
            } = {}) {
                let r = tq(),
                    i = $.useCallback(t => (0, Z.uH)(t), [r]),
                    s = tk(i, Z.D0),
                    n = $.useRef(),
                    u = n.current;
                return $.useEffect(() => {
                    u ? .status !== "connected" && "connected" === s.status && t ? .({
                        address: s.address,
                        connector: s.connector,
                        isReconnected: u ? .status === "reconnecting" || u ? .status === void 0
                    }), u ? .status === "connected" && "disconnected" === s.status && e ? .(), n.current = s
                }, [t, e, u, s]), s
            }

            function tT({
                queryKey: [{
                    address: t,
                    chainId: e,
                    formatUnits: r,
                    token: i
                }]
            }) {
                if (!t) throw Error("address is required");
                return (0, Z.EG)({
                    address: t,
                    chainId: e,
                    formatUnits: r,
                    token: i
                })
            }

            function tL({
                address: t,
                cacheTime: e,
                chainId: r,
                enabled: i = !0,
                formatUnits: s,
                scopeKey: n,
                staleTime: u,
                suspense: o,
                token: a,
                watch: l,
                onError: c,
                onSettled: h,
                onSuccess: d
            } = {}) {
                let f = tx({
                        chainId: r
                    }),
                    p = $.useMemo(() => (function({
                        address: t,
                        chainId: e,
                        formatUnits: r,
                        scopeKey: i,
                        token: s
                    }) {
                        return [{
                            entity: "balance",
                            address: t,
                            chainId: e,
                            formatUnits: r,
                            scopeKey: i,
                            token: s
                        }]
                    })({
                        address: t,
                        chainId: f,
                        formatUnits: s,
                        scopeKey: n,
                        token: a
                    }), [t, f, s, n, a]),
                    y = tP(p, tT, {
                        cacheTime: e,
                        enabled: !!(i && t),
                        staleTime: u,
                        suspense: o,
                        onError: c,
                        onSettled: h,
                        onSuccess: d
                    });
                return tD({
                    chainId: f,
                    enabled: !!(i && l && t),
                    queryKey: p
                }), y
            }
            var tj = t => [{
                    entity: "connect",
                    ...t
                }],
                tN = t => {
                    let {
                        connector: e,
                        chainId: r
                    } = t;
                    if (!e) throw Error("connector is required");
                    return (0, Z.$j)({
                        connector: e,
                        chainId: r
                    })
                };

            function tH({
                chainId: t,
                connector: e,
                onError: r,
                onMutate: i,
                onSettled: s,
                onSuccess: n
            } = {}) {
                let u = tq(),
                    {
                        data: o,
                        error: a,
                        isError: l,
                        isIdle: c,
                        isLoading: h,
                        isSuccess: d,
                        mutate: f,
                        mutateAsync: p,
                        reset: y,
                        status: v,
                        variables: m
                    } = tE(tj({
                        connector: e,
                        chainId: t
                    }), tN, {
                        onError: r,
                        onMutate: i,
                        onSettled: s,
                        onSuccess: n
                    }),
                    b = $.useCallback(r => f({
                        chainId: r ? .chainId ? ? t,
                        connector: r ? .connector ? ? e
                    }), [t, e, f]),
                    g = $.useCallback(r => p({
                        chainId: r ? .chainId ? ? t,
                        connector: r ? .connector ? ? e
                    }), [t, e, p]);
                return {
                    connect: b,
                    connectAsync: g,
                    connectors: u.connectors,
                    data: o,
                    error: a,
                    isError: l,
                    isIdle: c,
                    isLoading: h,
                    isSuccess: d,
                    pendingConnector: m ? .connector,
                    reset: y,
                    status: v,
                    variables: m
                }
            }
            var tG = [{
                    entity: "disconnect"
                }],
                t_ = () => (0, Z.zP)();

            function tB({
                onError: t,
                onMutate: e,
                onSettled: r,
                onSuccess: i
            } = {}) {
                let {
                    error: s,
                    isError: n,
                    isIdle: u,
                    isLoading: o,
                    isSuccess: a,
                    mutate: l,
                    mutateAsync: c,
                    reset: h,
                    status: d
                } = tE(tG, t_, { ...t ? {
                        onError(e, r, i) {
                            t(e, i)
                        }
                    } : {},
                    onMutate: e,
                    ...r ? {
                        onSettled(t, e, i, s) {
                            r(e, s)
                        }
                    } : {},
                    ...i ? {
                        onSuccess(t, e, r) {
                            i(r)
                        }
                    } : {}
                });
                return {
                    disconnect: l,
                    disconnectAsync: c,
                    error: s,
                    isError: n,
                    isIdle: u,
                    isLoading: o,
                    isSuccess: a,
                    reset: h,
                    status: d
                }
            }

            function tW() {
                let t = tq(),
                    e = (0, $.useCallback)(t => (0, Z.QC)(t), [t]);
                return tk(e, Z.Hy)
            }
            var tz = t => [{
                    entity: "signMessage",
                    ...t
                }],
                tJ = t => {
                    let {
                        message: e
                    } = t;
                    if (!e) throw Error("message is required");
                    return (0, Z.l)({
                        message: e
                    })
                };

            function tV({
                message: t,
                onError: e,
                onMutate: r,
                onSettled: i,
                onSuccess: s
            } = {}) {
                let {
                    data: n,
                    error: u,
                    isError: o,
                    isIdle: a,
                    isLoading: l,
                    isSuccess: c,
                    mutate: h,
                    mutateAsync: d,
                    reset: f,
                    status: p,
                    variables: y
                } = tE(tz({
                    message: t
                }), tJ, {
                    onError: e,
                    onMutate: r,
                    onSettled: i,
                    onSuccess: s
                }), v = $.useCallback(e => h(e || {
                    message: t
                }), [t, h]), m = $.useCallback(e => d(e || {
                    message: t
                }), [t, d]);
                return {
                    data: n,
                    error: u,
                    isError: o,
                    isIdle: a,
                    isLoading: l,
                    isSuccess: c,
                    reset: f,
                    signMessage: v,
                    signMessageAsync: m,
                    status: p,
                    variables: y
                }
            }
            var tY = t => [{
                    entity: "switchNetwork",
                    ...t
                }],
                tZ = t => {
                    let {
                        chainId: e
                    } = t;
                    if (!e) throw Error("chainId is required");
                    return (0, Z.If)({
                        chainId: e
                    })
                };

            function t$({
                chainId: t,
                throwForSwitchChainNotSupported: e,
                onError: r,
                onMutate: i,
                onSettled: s,
                onSuccess: n
            } = {}) {
                let u, o;
                let a = tq(),
                    l = function() {
                        let [, t] = $.useReducer(t => t + 1, 0);
                        return t
                    }(),
                    {
                        data: c,
                        error: h,
                        isError: d,
                        isIdle: f,
                        isLoading: p,
                        isSuccess: y,
                        mutate: v,
                        mutateAsync: m,
                        reset: b,
                        status: g,
                        variables: C
                    } = tE(tY({
                        chainId: t
                    }), tZ, {
                        onError: r,
                        onMutate: i,
                        onSettled: s,
                        onSuccess: n
                    }),
                    O = $.useCallback(e => v({
                        chainId: e ? ? t
                    }), [t, v]),
                    q = $.useCallback(e => m({
                        chainId: e ? ? t
                    }), [t, m]);
                $.useEffect(() => {
                    let t = a.subscribe(({
                        chains: t,
                        connector: e
                    }) => ({
                        chains: t,
                        connector: e
                    }), l);
                    return t
                }, [a, l]);
                let R = !!a.connector ? .switchChain;
                return (e || R) && (u = O, o = q), {
                    chains: a.chains ? ? [],
                    data: c,
                    error: h,
                    isError: d,
                    isIdle: f,
                    isLoading: p,
                    isSuccess: y,
                    pendingChainId: C ? .chainId,
                    reset: b,
                    status: g,
                    switchNetwork: u,
                    switchNetworkAsync: o,
                    variables: C
                }
            }

            function tX({
                abi: t,
                address: e,
                account: r,
                args: i,
                blockNumber: s,
                blockTag: n,
                cacheOnBlock: u = !1,
                cacheTime: o,
                chainId: a,
                enabled: l = !0,
                functionName: c,
                isDataEqual: h,
                keepPreviousData: d,
                onError: f,
                onSettled: p,
                onSuccess: y,
                scopeKey: v,
                select: b,
                staleTime: g,
                structuralSharing: C = (t, e) => (0, Z.vZ)(t, e) ? t : m(t, e),
                suspense: O,
                watch: q
            } = {}) {
                let R = tx({
                        chainId: a
                    }),
                    {
                        data: S
                    } = tA({
                        chainId: R,
                        enabled: q || u,
                        scopeKey: q || u ? void 0 : "idle",
                        watch: q
                    }),
                    w = s ? ? S,
                    E = $.useMemo(() => (function({
                        account: t,
                        address: e,
                        args: r,
                        blockNumber: i,
                        blockTag: s,
                        chainId: n,
                        functionName: u,
                        scopeKey: o
                    }) {
                        return [{
                            entity: "readContract",
                            account: t,
                            address: e,
                            args: r,
                            blockNumber: i,
                            blockTag: s,
                            chainId: n,
                            functionName: u,
                            scopeKey: o
                        }]
                    })({
                        account: r,
                        address: e,
                        args: i,
                        blockNumber: u ? w : void 0,
                        blockTag: n,
                        chainId: R,
                        functionName: c,
                        scopeKey: v
                    }), [r, e, i, w, n, u, R, c, v]),
                    P = $.useMemo(() => {
                        let r = !!(l && t && e && c);
                        return u && (r = !!(r && w)), r
                    }, [t, e, w, u, l, c]);
                return tD({
                    chainId: R,
                    enabled: !!(P && q && !u),
                    queryKey: E
                }), tP(E, function({
                    abi: t
                }) {
                    return async ({
                        queryKey: [{
                            account: e,
                            address: r,
                            args: i,
                            blockNumber: s,
                            blockTag: n,
                            chainId: u,
                            functionName: o
                        }]
                    }) => {
                        if (!t) throw Error("abi is required");
                        if (!r) throw Error("address is required");
                        return await (0, Z.a4)({
                            account: e,
                            address: r,
                            args: i,
                            blockNumber: s,
                            blockTag: n,
                            chainId: u,
                            abi: t,
                            functionName: o
                        }) ? ? null
                    }
                }({
                    abi: t
                }), {
                    cacheTime: o,
                    enabled: P,
                    isDataEqual: h,
                    keepPreviousData: d,
                    select: b,
                    staleTime: g,
                    structuralSharing: C,
                    suspense: O,
                    onError: f,
                    onSettled: p,
                    onSuccess: y
                })
            }

            function t0(t) {
                if ("prepared" === t.mode) {
                    if (!t.request) throw Error("request is required");
                    return (0, Z.n9)({
                        mode: "prepared",
                        request: t.request
                    })
                }
                if (!t.address) throw Error("address is required");
                if (!t.abi) throw Error("abi is required");
                if (!t.functionName) throw Error("functionName is required");
                return (0, Z.n9)({
                    address: t.address,
                    args: t.args,
                    chainId: t.chainId,
                    abi: t.abi,
                    functionName: t.functionName,
                    accessList: t.accessList,
                    account: t.account,
                    dataSuffix: t.dataSuffix,
                    gas: t.gas,
                    gasPrice: t.gasPrice,
                    maxFeePerGas: t.maxFeePerGas,
                    maxPriorityFeePerGas: t.maxPriorityFeePerGas,
                    nonce: t.nonce,
                    value: t.value
                })
            }

            function t1(t) {
                let {
                    address: e,
                    abi: r,
                    args: i,
                    chainId: s,
                    functionName: n,
                    mode: u,
                    request: o,
                    dataSuffix: a
                } = t, {
                    accessList: l,
                    account: c,
                    gas: h,
                    gasPrice: d,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: p,
                    nonce: y,
                    value: v
                } = (0, Z.gY)(t), {
                    data: m,
                    error: b,
                    isError: g,
                    isIdle: C,
                    isLoading: O,
                    isSuccess: q,
                    mutate: R,
                    mutateAsync: S,
                    reset: w,
                    status: E,
                    variables: P
                } = tE(function({
                    address: t,
                    abi: e,
                    functionName: r,
                    ...i
                }) {
                    let {
                        args: s,
                        accessList: n,
                        account: u,
                        dataSuffix: o,
                        gas: a,
                        gasPrice: l,
                        maxFeePerGas: c,
                        maxPriorityFeePerGas: h,
                        nonce: d,
                        request: f,
                        value: p
                    } = i;
                    return [{
                        entity: "writeContract",
                        address: t,
                        args: s,
                        abi: e,
                        accessList: n,
                        account: u,
                        dataSuffix: o,
                        functionName: r,
                        gas: a,
                        gasPrice: l,
                        maxFeePerGas: c,
                        maxPriorityFeePerGas: h,
                        nonce: d,
                        request: f,
                        value: p
                    }]
                }({
                    address: e,
                    abi: r,
                    functionName: n,
                    chainId: s,
                    mode: u,
                    args: i,
                    accessList: l,
                    account: c,
                    dataSuffix: a,
                    gas: h,
                    gasPrice: d,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: p,
                    nonce: y,
                    request: o,
                    value: v
                }), t0, {
                    onError: t.onError,
                    onMutate: t.onMutate,
                    onSettled: t.onSettled,
                    onSuccess: t.onSuccess
                }), F = $.useMemo(() => {
                    if ("prepared" === t.mode) {
                        if (!o) return;
                        return () => R({
                            mode: "prepared",
                            request: t.request,
                            chainId: t.chainId
                        })
                    }
                    return t => R({
                        address: e,
                        args: i,
                        abi: r,
                        functionName: n,
                        chainId: s,
                        accessList: l,
                        account: c,
                        dataSuffix: a,
                        gas: h,
                        gasPrice: d,
                        maxFeePerGas: f,
                        maxPriorityFeePerGas: p,
                        nonce: y,
                        value: v,
                        ...t
                    })
                }, [l, c, r, e, i, s, t.chainId, t.mode, t.request, a, n, h, d, f, p, R, y, o, v]), Q = $.useMemo(() => {
                    if ("prepared" === t.mode) {
                        if (!o) return;
                        return () => S({
                            mode: "prepared",
                            request: t.request
                        })
                    }
                    return t => S({
                        address: e,
                        args: i,
                        abi: r,
                        chainId: s,
                        functionName: n,
                        accessList: l,
                        account: c,
                        dataSuffix: a,
                        gas: h,
                        gasPrice: d,
                        maxFeePerGas: f,
                        maxPriorityFeePerGas: p,
                        nonce: y,
                        value: v,
                        ...t
                    })
                }, [l, c, r, e, i, s, t.mode, t.request, a, n, h, d, f, p, S, y, o, v]);
                return {
                    data: m,
                    error: b,
                    isError: g,
                    isIdle: C,
                    isLoading: O,
                    isSuccess: q,
                    reset: w,
                    status: E,
                    variables: P,
                    write: F,
                    writeAsync: Q
                }
            }

            function t6({
                queryKey: [{
                    name: t,
                    chainId: e
                }]
            }) {
                if (!t) throw Error("name is required");
                return (0, Z.w6)({
                    name: t,
                    chainId: e
                })
            }

            function t4({
                cacheTime: t,
                chainId: e,
                enabled: r = !0,
                name: i,
                scopeKey: s,
                staleTime: n = 864e5,
                suspense: u,
                onError: o,
                onSettled: a,
                onSuccess: l
            } = {}) {
                let c = tx({
                    chainId: e
                });
                return tP(function({
                    name: t,
                    chainId: e,
                    scopeKey: r
                }) {
                    return [{
                        entity: "ensAvatar",
                        name: t,
                        chainId: e,
                        scopeKey: r
                    }]
                }({
                    name: i,
                    chainId: c,
                    scopeKey: s
                }), t6, {
                    cacheTime: t,
                    enabled: !!(r && i && c),
                    staleTime: n,
                    suspense: u,
                    onError: o,
                    onSettled: a,
                    onSuccess: l
                })
            }

            function t2({
                queryKey: [{
                    address: t,
                    chainId: e
                }]
            }) {
                if (!t) throw Error("address is required");
                return (0, Z.Lk)({
                    address: t,
                    chainId: e
                })
            }

            function t3({
                address: t,
                cacheTime: e,
                chainId: r,
                enabled: i = !0,
                scopeKey: s,
                staleTime: n = 864e5,
                suspense: u,
                onError: o,
                onSettled: a,
                onSuccess: l
            } = {}) {
                let c = tx({
                    chainId: r
                });
                return tP(function({
                    address: t,
                    chainId: e,
                    scopeKey: r
                }) {
                    return [{
                        entity: "ensName",
                        address: t,
                        chainId: e,
                        scopeKey: r
                    }]
                }({
                    address: t,
                    chainId: c,
                    scopeKey: s
                }), t2, {
                    cacheTime: e,
                    enabled: !!(i && t && c),
                    staleTime: n,
                    suspense: u,
                    onError: o,
                    onSettled: a,
                    onSuccess: l
                })
            }

            function t7({
                chainId: t,
                confirmations: e,
                hash: r,
                timeout: i,
                cacheTime: s,
                enabled: n = !0,
                scopeKey: u,
                staleTime: o,
                suspense: a,
                onError: l,
                onReplaced: c,
                onSettled: h,
                onSuccess: d
            } = {}) {
                let f = tx({
                    chainId: t
                });
                return tP(function({
                    confirmations: t,
                    chainId: e,
                    hash: r,
                    scopeKey: i,
                    timeout: s
                }) {
                    return [{
                        entity: "waitForTransaction",
                        confirmations: t,
                        chainId: e,
                        hash: r,
                        scopeKey: i,
                        timeout: s
                    }]
                }({
                    chainId: f,
                    confirmations: e,
                    hash: r,
                    scopeKey: u,
                    timeout: i
                }), function({
                    onReplaced: t
                }) {
                    return ({
                        queryKey: [{
                            chainId: e,
                            confirmations: r,
                            hash: i,
                            timeout: s
                        }]
                    }) => {
                        if (!i) throw Error("hash is required");
                        return (0, Z.Mn)({
                            chainId: e,
                            confirmations: r,
                            hash: i,
                            onReplaced: t,
                            timeout: s
                        })
                    }
                }({
                    onReplaced: c
                }), {
                    cacheTime: s,
                    enabled: !!(n && r),
                    staleTime: o,
                    suspense: a,
                    onError: l,
                    onSettled: h,
                    onSuccess: d
                })
            }
        }
    }
]);
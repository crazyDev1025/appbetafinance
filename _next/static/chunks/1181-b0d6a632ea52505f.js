"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1181], {
        99325: function(t, e, s) {
            s.r(e), s.d(e, {
                useInfiniteQuery: function() {
                    return u
                }
            });
            var r = s(34789),
                i = s(46886),
                n = s(13210);
            class a extends i.z {
                constructor(t, e) {
                    super(t, e)
                }
                bindMethods() {
                    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                }
                setOptions(t, e) {
                    super.setOptions({ ...t,
                        behavior: (0, n.Gm)()
                    }, e)
                }
                getOptimisticResult(t) {
                    return t.behavior = (0, n.Gm)(), super.getOptimisticResult(t)
                }
                fetchNextPage({
                    pageParam: t,
                    ...e
                } = {}) {
                    return this.fetch({ ...e,
                        meta: {
                            fetchMore: {
                                direction: "forward",
                                pageParam: t
                            }
                        }
                    })
                }
                fetchPreviousPage({
                    pageParam: t,
                    ...e
                } = {}) {
                    return this.fetch({ ...e,
                        meta: {
                            fetchMore: {
                                direction: "backward",
                                pageParam: t
                            }
                        }
                    })
                }
                createResult(t, e) {
                    var s, r, i, a, o, u;
                    let {
                        state: l
                    } = t, h = super.createResult(t, e), {
                        isFetching: c,
                        isRefetching: d
                    } = h, p = c && (null == (s = l.fetchMeta) ? void 0 : null == (r = s.fetchMore) ? void 0 : r.direction) === "forward", f = c && (null == (i = l.fetchMeta) ? void 0 : null == (a = i.fetchMore) ? void 0 : a.direction) === "backward";
                    return { ...h,
                        fetchNextPage: this.fetchNextPage,
                        fetchPreviousPage: this.fetchPreviousPage,
                        hasNextPage: (0, n.Qy)(e, null == (o = l.data) ? void 0 : o.pages),
                        hasPreviousPage: (0, n.ZF)(e, null == (u = l.data) ? void 0 : u.pages),
                        isFetchingNextPage: p,
                        isFetchingPreviousPage: f,
                        isRefetching: d && !p && !f
                    }
                }
            }
            var o = s(64742);

            function u(t, e, s) {
                let i = (0, r._v)(t, e, s);
                return (0, o.r)(i, a)
            }
        },
        85397: function(t, e, s) {
            s.r(e), s.d(e, {
                useMutation: function() {
                    return d
                }
            });
            var r = s(2265),
                i = s(34789),
                n = s(40920),
                a = s(24563),
                o = s(9785);
            class u extends o.l {
                constructor(t, e) {
                    super(), this.client = t, this.setOptions(e), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(t) {
                    var e;
                    let s = this.options;
                    this.options = this.client.defaultMutationOptions(t), (0, i.VS)(s, this.options) || this.client.getMutationCache().notify({
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
                    let t = this.currentMutation ? this.currentMutation.state : (0, n.R)(),
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
                    a.V.batch(() => {
                        if (this.mutateOptions && this.hasListeners()) {
                            var e, s, r, i, n, a, o, u;
                            t.onSuccess ? (null == (e = (s = this.mutateOptions).onSuccess) || e.call(s, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (r = (i = this.mutateOptions).onSettled) || r.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : t.onError && (null == (n = (a = this.mutateOptions).onError) || n.call(a, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (o = (u = this.mutateOptions).onSettled) || o.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        t.listeners && this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(this.currentResult)
                        })
                    })
                }
            }
            var l = s(45321),
                h = s(70165),
                c = s(57798);

            function d(t, e, s) {
                let n = (0, i.lV)(t, e, s),
                    o = (0, h.useQueryClient)({
                        context: n.context
                    }),
                    [d] = r.useState(() => new u(o, n));
                r.useEffect(() => {
                    d.setOptions(n)
                }, [d, n]);
                let f = (0, l.$)(r.useCallback(t => d.subscribe(a.V.batchCalls(t)), [d]), () => d.getCurrentResult(), () => d.getCurrentResult()),
                    v = r.useCallback((t, e) => {
                        d.mutate(t, e).catch(p)
                    }, [d]);
                if (f.error && (0, c.L)(d.options.useErrorBoundary, [f.error])) throw f.error;
                return { ...f,
                    mutate: v,
                    mutateAsync: f.mutate
                }
            }

            function p() {}
        },
        90411: function(t, e, s) {
            s.r(e), s.d(e, {
                useQueries: function() {
                    return v
                }
            });
            var r = s(2265),
                i = s(34789),
                n = s(24563),
                a = s(46886),
                o = s(9785);
            class u extends o.l {
                constructor(t, e) {
                    super(), this.client = t, this.queries = [], this.result = [], this.observers = [], this.observersMap = {}, e && this.setQueries(e)
                }
                onSubscribe() {
                    1 === this.listeners.size && this.observers.forEach(t => {
                        t.subscribe(e => {
                            this.onUpdate(t, e)
                        })
                    })
                }
                onUnsubscribe() {
                    this.listeners.size || this.destroy()
                }
                destroy() {
                    this.listeners = new Set, this.observers.forEach(t => {
                        t.destroy()
                    })
                }
                setQueries(t, e) {
                    this.queries = t, n.V.batch(() => {
                        let t = this.observers,
                            s = this.findMatchingObservers(this.queries);
                        s.forEach(t => t.observer.setOptions(t.defaultedQueryOptions, e));
                        let r = s.map(t => t.observer),
                            n = Object.fromEntries(r.map(t => [t.options.queryHash, t])),
                            a = r.map(t => t.getCurrentResult()),
                            o = r.some((e, s) => e !== t[s]);
                        (t.length !== r.length || o) && (this.observers = r, this.observersMap = n, this.result = a, this.hasListeners() && ((0, i.e5)(t, r).forEach(t => {
                            t.destroy()
                        }), (0, i.e5)(r, t).forEach(t => {
                            t.subscribe(e => {
                                this.onUpdate(t, e)
                            })
                        }), this.notify()))
                    })
                }
                getCurrentResult() {
                    return this.result
                }
                getQueries() {
                    return this.observers.map(t => t.getCurrentQuery())
                }
                getObservers() {
                    return this.observers
                }
                getOptimisticResult(t) {
                    return this.findMatchingObservers(t).map(t => t.observer.getOptimisticResult(t.defaultedQueryOptions))
                }
                findMatchingObservers(t) {
                    let e = this.observers,
                        s = new Map(e.map(t => [t.options.queryHash, t])),
                        r = t.map(t => this.client.defaultQueryOptions(t)),
                        i = r.flatMap(t => {
                            let e = s.get(t.queryHash);
                            return null != e ? [{
                                defaultedQueryOptions: t,
                                observer: e
                            }] : []
                        }),
                        n = new Set(i.map(t => t.defaultedQueryOptions.queryHash)),
                        o = r.filter(t => !n.has(t.queryHash)),
                        u = new Set(i.map(t => t.observer)),
                        l = e.filter(t => !u.has(t)),
                        h = t => {
                            let e = this.client.defaultQueryOptions(t),
                                s = this.observersMap[e.queryHash];
                            return null != s ? s : new a.z(this.client, e)
                        },
                        c = o.map((t, e) => {
                            if (t.keepPreviousData) {
                                let s = l[e];
                                if (void 0 !== s) return {
                                    defaultedQueryOptions: t,
                                    observer: s
                                }
                            }
                            return {
                                defaultedQueryOptions: t,
                                observer: h(t)
                            }
                        });
                    return i.concat(c).sort((t, e) => r.indexOf(t.defaultedQueryOptions) - r.indexOf(e.defaultedQueryOptions))
                }
                onUpdate(t, e) {
                    let s = this.observers.indexOf(t); - 1 !== s && (this.result = (0, i.Rc)(this.result, s, e), this.notify())
                }
                notify() {
                    n.V.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(this.result)
                        })
                    })
                }
            }
            var l = s(45321),
                h = s(70165),
                c = s(61963),
                d = s(29676),
                p = s(47843),
                f = s(98962);

            function v({
                queries: t,
                context: e
            }) {
                let s = (0, h.useQueryClient)({
                        context: e
                    }),
                    i = (0, c.useIsRestoring)(),
                    a = (0, d.useQueryErrorResetBoundary)(),
                    o = r.useMemo(() => t.map(t => {
                        let e = s.defaultQueryOptions(t);
                        return e._optimisticResults = i ? "isRestoring" : "optimistic", e
                    }), [t, s, i]);
                o.forEach(t => {
                    (0, f.Fb)(t), (0, p.pf)(t, a)
                }), (0, p.JN)(a);
                let [v] = r.useState(() => new u(s, o)), m = v.getOptimisticResult(o);
                (0, l.$)(r.useCallback(t => i ? () => void 0 : v.subscribe(n.V.batchCalls(t)), [v, i]), () => v.getCurrentResult(), () => v.getCurrentResult()), r.useEffect(() => {
                    v.setQueries(o, {
                        listeners: !1
                    })
                }, [o, v]);
                let y = m.some((t, e) => (0, f.SB)(o[e], t, i)),
                    b = y ? m.flatMap((t, e) => {
                        let s = o[e],
                            r = v.getObservers()[e];
                        if (s && r) {
                            if ((0, f.SB)(s, t, i)) return (0, f.j8)(s, r, a);
                            (0, f.Z$)(t, i) && (0, f.j8)(s, r, a)
                        }
                        return []
                    }) : [];
                if (b.length > 0) throw Promise.all(b);
                let g = v.getQueries(),
                    O = m.find((t, e) => {
                        var s, r;
                        return (0, p.KJ)({
                            result: t,
                            errorResetBoundary: a,
                            useErrorBoundary: null != (s = null == (r = o[e]) ? void 0 : r.useErrorBoundary) && s,
                            query: g[e]
                        })
                    });
                if (null != O && O.error) throw O.error;
                return m
            }
        },
        13210: function(t, e, s) {
            function r() {
                return {
                    onFetch: t => {
                        t.fetchFn = () => {
                            var e, s, r, a, o, u;
                            let l;
                            let h = null == (e = t.fetchOptions) ? void 0 : null == (s = e.meta) ? void 0 : s.refetchPage,
                                c = null == (r = t.fetchOptions) ? void 0 : null == (a = r.meta) ? void 0 : a.fetchMore,
                                d = null == c ? void 0 : c.pageParam,
                                p = (null == c ? void 0 : c.direction) === "forward",
                                f = (null == c ? void 0 : c.direction) === "backward",
                                v = (null == (o = t.state.data) ? void 0 : o.pages) || [],
                                m = (null == (u = t.state.data) ? void 0 : u.pageParams) || [],
                                y = m,
                                b = !1,
                                g = e => {
                                    Object.defineProperty(e, "signal", {
                                        enumerable: !0,
                                        get: () => {
                                            var e, s;
                                            return null != (e = t.signal) && e.aborted ? b = !0 : null == (s = t.signal) || s.addEventListener("abort", () => {
                                                b = !0
                                            }), t.signal
                                        }
                                    })
                                },
                                O = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")),
                                P = (t, e, s, r) => (y = r ? [e, ...y] : [...y, e], r ? [s, ...t] : [...t, s]),
                                R = (e, s, r, i) => {
                                    if (b) return Promise.reject("Cancelled");
                                    if (void 0 === r && !s && e.length) return Promise.resolve(e);
                                    let n = {
                                        queryKey: t.queryKey,
                                        pageParam: r,
                                        meta: t.options.meta
                                    };
                                    g(n);
                                    let a = O(n),
                                        o = Promise.resolve(a).then(t => P(e, r, t, i));
                                    return o
                                };
                            if (v.length) {
                                if (p) {
                                    let e = void 0 !== d,
                                        s = e ? d : i(t.options, v);
                                    l = R(v, e, s)
                                } else if (f) {
                                    let e = void 0 !== d,
                                        s = e ? d : n(t.options, v);
                                    l = R(v, e, s, !0)
                                } else {
                                    y = [];
                                    let e = void 0 === t.options.getNextPageParam,
                                        s = !h || !v[0] || h(v[0], 0, v);
                                    l = s ? R([], e, m[0]) : Promise.resolve(P([], m[0], v[0]));
                                    for (let s = 1; s < v.length; s++) l = l.then(r => {
                                        let n = !h || !v[s] || h(v[s], s, v);
                                        if (n) {
                                            let n = e ? m[s] : i(t.options, r);
                                            return R(r, e, n)
                                        }
                                        return Promise.resolve(P(r, m[s], v[s]))
                                    })
                                }
                            } else l = R([]);
                            let w = l.then(t => ({
                                pages: t,
                                pageParams: y
                            }));
                            return w
                        }
                    }
                }
            }

            function i(t, e) {
                return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
            }

            function n(t, e) {
                return null == t.getPreviousPageParam ? void 0 : t.getPreviousPageParam(e[0], e)
            }

            function a(t, e) {
                if (t.getNextPageParam && Array.isArray(e)) {
                    let s = i(t, e);
                    return null != s && !1 !== s
                }
            }

            function o(t, e) {
                if (t.getPreviousPageParam && Array.isArray(e)) {
                    let s = n(t, e);
                    return null != s && !1 !== s
                }
            }
            s.d(e, {
                Gm: function() {
                    return r
                },
                Qy: function() {
                    return a
                },
                ZF: function() {
                    return o
                }
            })
        },
        80854: function(t, e, s) {
            s.d(e, {
                _: function() {
                    return r
                }
            });
            let r = console
        },
        40920: function(t, e, s) {
            s.d(e, {
                R: function() {
                    return u
                },
                m: function() {
                    return o
                }
            });
            var r = s(80854),
                i = s(24563),
                n = s(95594),
                a = s(57195);
            class o extends n.F {
                constructor(t) {
                    super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || r._, this.observers = [], this.state = t.state || u(), this.setOptions(t.options), this.scheduleGc()
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
                    var t, e, s, r, i, n, o, u, l, h, c, d, p, f, v, m, y, b, g, O;
                    let P = "loading" === this.state.status;
                    try {
                        if (!P) {
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (l = (h = this.mutationCache.config).onMutate) ? void 0 : l.call(h, this.state.variables, this));
                            let t = await (null == (c = (d = this.options).onMutate) ? void 0 : c.call(d, this.state.variables));
                            t !== this.state.context && this.dispatch({
                                type: "loading",
                                context: t,
                                variables: this.state.variables
                            })
                        }
                        let p = await (() => {
                            var t;
                            return this.retryer = (0, a.Mz)({
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
                        return await (null == (t = (e = this.mutationCache.config).onSuccess) ? void 0 : t.call(e, p, this.state.variables, this.state.context, this)), await (null == (s = (r = this.options).onSuccess) ? void 0 : s.call(r, p, this.state.variables, this.state.context)), await (null == (i = (n = this.mutationCache.config).onSettled) ? void 0 : i.call(n, p, null, this.state.variables, this.state.context, this)), await (null == (o = (u = this.options).onSettled) ? void 0 : o.call(u, p, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: p
                        }), p
                    } catch (t) {
                        try {
                            throw await (null == (p = (f = this.mutationCache.config).onError) ? void 0 : p.call(f, t, this.state.variables, this.state.context, this)), await (null == (v = (m = this.options).onError) ? void 0 : v.call(m, t, this.state.variables, this.state.context)), await (null == (y = (b = this.mutationCache.config).onSettled) ? void 0 : y.call(b, void 0, t, this.state.variables, this.state.context, this)), await (null == (g = (O = this.options).onSettled) ? void 0 : g.call(O, void 0, t, this.state.variables, this.state.context)), t
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
                                    isPaused: !(0, a.Kw)(this.options.networkMode),
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
                    })(this.state), i.V.batch(() => {
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

            function u() {
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
        },
        95594: function(t, e, s) {
            s.d(e, {
                F: function() {
                    return i
                }
            });
            var r = s(34789);
            class i {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), (0, r.PN)(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove()
                    }, this.cacheTime))
                }
                updateCacheTime(t) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != t ? t : r.sk ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            }
        },
        1181: function(t, e, s) {
            s.d(e, {
                R: function() {
                    return f
                }
            });
            var r = s(28285),
                i = s(90411),
                n = s(99325),
                a = s(85397),
                o = s(60328);
            s(2265);
            let u = (t, e, s) => async r => {
                    let {
                        query: i,
                        params: n,
                        body: a,
                        headers: u,
                        extraHeaders: l,
                        ...h
                    } = s || {}, c = (0, o.kr)(i, e.baseUrl, n, t, !!e.jsonQuery), d = await (0, o.a8)({
                        signal: null == r ? void 0 : r.signal,
                        path: c,
                        clientArgs: e,
                        route: t,
                        body: a,
                        query: i,
                        headers: { ...l,
                            ...u
                        },
                        extraInputArgs: h
                    });
                    if (!String(d.status).startsWith("2")) throw d;
                    return d
                },
                l = (t, e) => (s, i, n) => {
                    let a = u(t, e, i);
                    return (0, r.useQuery)(s, a, n)
                },
                h = (t, e) => s => {
                    let r = s.queries.map(s => {
                        let {
                            credentials: r,
                            queryKey: i,
                            retry: n,
                            ...a
                        } = s, o = u(t, e, a);
                        return {
                            queryFn: o,
                            ...s
                        }
                    });
                    return (0, i.useQueries)({
                        queries: r,
                        context: s.context
                    })
                },
                c = (t, e) => (s, r, i) => {
                    let a = async s => {
                        let i = r(s),
                            n = u(t, e, i);
                        return n(void 0)
                    };
                    return (0, n.useInfiniteQuery)(s, a, i)
                },
                d = (t, e) => s => {
                    let r = async s => {
                        let r = u(t, e, s);
                        return r(void 0)
                    };
                    return (0, a.useMutation)(r, s)
                },
                p = Symbol("ClientParameters"),
                f = (t, e) => {
                    let s = t => Object.fromEntries(Object.entries(t).map(([t, r]) => (0, o.kd)(r) ? [t, {
                        query: (0, o.B7)(r, e),
                        mutation: (0, o.B7)(r, e),
                        useQuery: l(r, e),
                        useQueries: h(r, e),
                        useInfiniteQuery: c(r, e),
                        useMutation: d(r, e),
                        fetchQuery: (t, s, i, n) => {
                            let a = u(r, e, i);
                            return t.fetchQuery(s, a, n)
                        },
                        fetchInfiniteQuery: (t, s, i, n) => t.fetchInfiniteQuery(s, async t => {
                            let s = i(t),
                                n = u(r, e, s);
                            return n(void 0)
                        }, n),
                        prefetchQuery: (t, s, i, n) => {
                            let a = u(r, e, i);
                            return t.prefetchQuery(s, a, n)
                        },
                        prefetchInfiniteQuery: (t, s, i, n) => t.prefetchInfiniteQuery(s, async t => {
                            let s = i(t),
                                n = u(r, e, s);
                            return n(void 0)
                        }, n),
                        getQueryData: (t, e, s) => t.getQueryData(e, s),
                        ensureQueryData: (t, s, i, n) => {
                            let a = u(r, e, i);
                            return t.ensureQueryData(s, a, n)
                        },
                        getQueriesData: (t, e) => t.getQueriesData(e),
                        setQueryData: (t, e, s) => t.setQueryData(e, s)
                    }] : [t, s(r)]));
                    return { ...s(t),
                        [p]: {
                            router: t,
                            clientArgs: e
                        }
                    }
                }
        },
        60328: function(t, e, s) {
            s.d(e, {
                B7: function() {
                    return O
                },
                I8: function() {
                    return v
                },
                a8: function() {
                    return b
                },
                kd: function() {
                    return n
                },
                kr: function() {
                    return g
                },
                vR: function() {
                    return u
                }
            });
            let r = t => "function" == typeof(null == t ? void 0 : t.passthrough),
                i = (t, e) => r(t) ? r(e) ? t.merge(e) : t : r(e) ? e : Object.assign({}, t, e),
                n = t => "method" in t && "path" in t,
                a = (t, e) => Object.fromEntries(Object.entries(t).map(([t, s]) => {
                    var r;
                    return n(s) ? [t, { ...s,
                        path: (null == e ? void 0 : e.pathPrefix) ? e.pathPrefix + s.path : s.path,
                        headers: i(null == e ? void 0 : e.baseHeaders, s.headers),
                        strictStatusCodes: null !== (r = s.strictStatusCodes) && void 0 !== r ? r : null == e ? void 0 : e.strictStatusCodes
                    }] : [t, a(s, e)]
                })),
                o = Symbol("ContractPlainType"),
                u = () => ({
                    router: (t, e) => a(t, e),
                    query: t => t,
                    mutation: t => t,
                    response: () => o,
                    body: () => o,
                    type: () => o,
                    otherResponse: ({
                        contentType: t,
                        body: e
                    }) => ({
                        contentType: t,
                        body: e
                    })
                }),
                l = ({
                    path: t,
                    params: e
                }) => t.replace(/:([^/]+)/g, (t, s) => e[s] || "").replace(/\/\//g, "/"),
                h = (t, e = !1) => {
                    let s = e ? c(t) : d(t);
                    return (null == s ? void 0 : s.length) > 0 ? "?" + s : ""
                },
                c = t => t ? Object.entries(t).filter(([, t]) => void 0 !== t).map(([t, e]) => `${encodeURIComponent(t)}=${encodeURIComponent("string"==typeof e&&!["true","false","null"].includes(e.trim())&&isNaN(Number(e))?e:JSON.stringify(e))}`).join("&") : "",
                d = t => t ? Object.keys(t).flatMap(e => p(e, t[e])).map(([t, e]) => `${encodeURIComponent(t)}=${encodeURIComponent(e)}`).join("&") : "",
                p = (t, e) => Array.isArray(e) ? e.flatMap((e, s) => p(`${t}[${s}]`, e)) : e instanceof Date ? [
                    [`${t}`, e.toISOString()]
                ] : null === e ? [
                    [`${t}`, ""]
                ] : void 0 === e ? [] : "object" == typeof e ? Object.keys(e).flatMap(s => p(`${t}[${s}]`, e[s])) : [
                    [`${t}`, `${e}`]
                ];
            class f extends Error {
                constructor(t, e) {
                    let s = e.join(",");
                    super(`Server returned unexpected response. Expected one of: ${s} got: ${t.status}`), this.response = t
                }
            }
            let v = async ({
                    path: t,
                    method: e,
                    headers: s,
                    body: r,
                    credentials: i,
                    signal: n,
                    cache: a,
                    next: o
                }) => {
                    let u = await fetch(t, {
                            method: e,
                            headers: s,
                            body: r,
                            credentials: i,
                            signal: n,
                            cache: a,
                            next: o
                        }),
                        l = u.headers.get("content-type");
                    return (null == l ? void 0 : l.includes("application/")) && (null == l ? void 0 : l.includes("json")) ? {
                        status: u.status,
                        body: await u.json(),
                        headers: u.headers
                    } : (null == l ? void 0 : l.includes("text/plain")) ? {
                        status: u.status,
                        body: await u.text(),
                        headers: u.headers
                    } : {
                        status: u.status,
                        body: await u.blob(),
                        headers: u.headers
                    }
                },
                m = t => {
                    let e = new FormData;
                    return Object.entries(t).forEach(([t, s]) => {
                        s instanceof File ? e.append(t, s) : e.append(t, JSON.stringify(s))
                    }), e
                },
                y = t => Object.fromEntries(Object.entries(t).map(([t, e]) => [t.toLowerCase(), e])),
                b = ({
                    path: t,
                    clientArgs: e,
                    route: s,
                    body: r,
                    query: i,
                    extraInputArgs: n,
                    headers: a,
                    signal: o,
                    next: u
                }) => {
                    let l = e.api || v,
                        h = { ...y(e.baseHeaders),
                            ...y(a)
                        };
                    return l((Object.keys(h).forEach(t => {
                        void 0 === h[t] && delete h[t]
                    }), "GET" !== s.method && "multipart/form-data" === s.contentType) ? {
                        route: s,
                        path: t,
                        method: s.method,
                        credentials: e.credentials,
                        headers: h,
                        body: r instanceof FormData ? r : m(r),
                        rawBody: r,
                        rawQuery: i,
                        contentType: "multipart/form-data",
                        signal: o,
                        next: u,
                        ...n
                    } : {
                        route: s,
                        path: t,
                        method: s.method,
                        credentials: e.credentials,
                        headers: {
                            "content-type": "application/json",
                            ...h
                        },
                        body: null != r ? JSON.stringify(r) : void 0,
                        rawBody: r,
                        rawQuery: i,
                        contentType: "GET" !== s.method ? "application/json" : void 0,
                        signal: o,
                        next: u,
                        ...n
                    })
                },
                g = (t, e, s, r, i) => {
                    let n = l({
                            path: r.path,
                            params: s
                        }),
                        a = h(t, i);
                    return `${e}${n}${a}`
                },
                O = (t, e) => {
                    let s = Object.keys(t.responses);
                    return async r => {
                        let {
                            query: i,
                            params: n,
                            body: a,
                            headers: o,
                            extraHeaders: u,
                            next: l,
                            ...h
                        } = r || {}, c = g(i, e.baseUrl, n, t, !!e.jsonQuery), d = await b({
                            path: c,
                            clientArgs: e,
                            route: t,
                            body: a,
                            query: i,
                            extraInputArgs: h,
                            next: l,
                            headers: { ...u,
                                ...o
                            }
                        });
                        if (!e.throwOnUnknownStatus || s.includes(d.status.toString())) return d;
                        throw new f(d, s)
                    }
                }
        }
    }
]);
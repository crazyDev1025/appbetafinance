(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        75477: function() {},
        73654: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 24244, 23)), Promise.resolve().then(n.bind(n, 38075)), Promise.resolve().then(n.t.bind(n, 13336, 23)), Promise.resolve().then(n.t.bind(n, 53054, 23)), Promise.resolve().then(n.t.bind(n, 58488, 23))
        },
        64362: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var a = n(2265),
                r = n(48756),
                o = n(50646),
                s = n(20426);

            function c() {
                var e;
                let {
                    address: t,
                    connector: n
                } = (0, r.mA)(), {
                    chain: c
                } = (0, r.LN)(), i = (0, a.useMemo)(() => t ? s.Z.uncheckedFrom(t) : null, [t]), u = (0, o.wX)(t => i && null !== (e = t.authTokens[i.value]) && void 0 !== e ? e : null);
                return i && c && n && u ? {
                    addressId: i,
                    walletType: n.name,
                    token: u,
                    chain: c
                } : null
            }
        },
        50646: function(e, t, n) {
            "use strict";
            n.d(t, {
                H6: function() {
                    return i
                },
                Lf: function() {
                    return s
                },
                Tb: function() {
                    return c
                },
                wX: function() {
                    return o
                }
            });
            var a = n(94660);

            function r(e) {
                return "auth-token/".concat(e)
            }
            let o = (0, a.Ue)(() => ({
                authTokens: {}
            }));

            function s(e) {
                let {
                    authTokens: t
                } = o.getState(), n = null, a = t[e.value];
                if (a) n = a;
                else {
                    let t = localStorage.getItem(r(e));
                    t && (o.setState({
                        authTokens: { ...o.getState().authTokens,
                            [e.value]: t
                        }
                    }), n = t)
                }
                return n
            }

            function c(e, t) {
                localStorage.setItem(r(e), t), o.setState({
                    authTokens: { ...o.getState().authTokens,
                        [e.value]: t
                    }
                })
            }

            function i(e) {
                localStorage.removeItem(r(e));
                let {
                    [e.value]: t, ...n
                } = o.getState().authTokens;
                o.setState({
                    authTokens: n
                })
            }
        },
        53401: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(64362);

            function r(e) {
                var t;
                let {
                    chainId: n
                } = e, r = (0, a.Z)(), o = null == r ? void 0 : null === (t = r.chain) || void 0 === t ? void 0 : t.id;
                if (void 0 !== o) return o !== n
            }
        },
        31835: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(90501);

            function r() {
                return (0, a.an)(e => ({
                    lastActiveSubAccId: e.lastActiveSubAccId,
                    onChangeLastActiveSubAccId: e.onChangeLastActiveSubAccId
                }))
            }
        },
        18839: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var a = n(2265),
                r = n(64362),
                o = n(90501),
                s = n(53237);

            function c() {
                let e = (0, r.Z)(),
                    [t, n] = (0, o.bf)(e => [e.subaccountId, e.setSubaccountId]),
                    c = (0, o.an)(e => e.onChangeLastActiveSubAccId),
                    i = (0, a.useCallback)(e => {
                        n(e), e && c(e)
                    }, [c, n]),
                    u = (0, o.bf)(t => {
                        let n = null == e ? void 0 : e.addressId.value,
                            a = void 0 != n && t.subaccountInfos[n];
                        return !!a && 0 === Object.keys(a).length
                    }),
                    l = (0, o.bf)(t => {
                        var n, a, r, o, c;
                        let i = null == e ? void 0 : e.addressId.value;
                        if (!i || !t.subaccountInfos[i] || !t.accounts[i]) return;
                        if (null == t.subaccountId) return null;
                        let u = null !== (o = null === (n = t.subaccountInfos[i]) || void 0 === n ? void 0 : n.find(e => "".concat(e.id) === t.subaccountId)) && void 0 !== o ? o : null,
                            l = null !== (c = null === (r = t.accounts[i]) || void 0 === r ? void 0 : null === (a = r.subaccounts) || void 0 === a ? void 0 : a[t.subaccountId]) && void 0 !== c ? c : null;
                        return u ? (0, s.y)(u, l) : null
                    });
                return {
                    subaccountId: null != t && null === l ? null : t,
                    subaccount: l,
                    setSubaccountId: i,
                    isEmpty: u
                }
            }
        },
        15896: function(e, t, n) {
            "use strict";
            n.d(t, {
                JJ: function() {
                    return c
                },
                $w: function() {
                    return u
                },
                Gi: function() {
                    return l
                },
                yK: function() {
                    return d
                },
                lJ: function() {
                    return i
                }
            });
            var a = n(14241);
            n(4691);
            var r = n(30805),
                o = n(90501);
            async function s(e, t, n, a) {
                let o = await r.Z.account.getAccountMarketData.query({
                    headers: {
                        "cache-control": a ? "no-cache" : void 0
                    },
                    query: {
                        chainId: e,
                        userAddress: t,
                        subaccountIds: n
                    }
                });
                return o.body
            }
            let c = async (e, t, n) => {
                let s = await r.Z.user.createAccount.mutation({
                    query: {
                        chainId: e
                    },
                    body: n
                });
                if (201 === s.status) {
                    let e = s.body;
                    return o.bf.setState((0, a.Uy)(n => {
                        let a = n.subaccountInfos[t.value];
                        a ? a.push(e) : n.subaccountInfos[t.value] = [e], n.subaccountId = e.id.toString()
                    })), e.id
                }
            };
            async function i(e, t, n, s) {
                let c = await r.Z.account.rename.mutation({
                    query: {
                        chainId: e
                    },
                    params: {
                        id: n.toString()
                    },
                    body: {
                        name: s
                    }
                });
                200 === c.status && o.bf.setState((0, a.Uy)(e => {
                    var a;
                    let r = null === (a = e.subaccountInfos[t.value]) || void 0 === a ? void 0 : a.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === n
                    });
                    r && (r.name = s)
                }))
            }
            async function u(e, t, n) {
                let s = await r.Z.account.delete.mutation({
                    query: {
                        chainId: e
                    },
                    params: {
                        id: n.toString()
                    },
                    body: ""
                });
                200 === s.status && o.bf.setState((0, a.Uy)(e => {
                    if (e.subaccountInfos[t.value]) {
                        let a = e.subaccountInfos[t.value].findIndex(e => e.id === n); - 1 !== a && e.subaccountInfos[t.value].splice(a, 1)
                    }
                    e.accounts[t.value] && delete e.accounts[t.value].subaccounts["".concat(n)], e.subaccountId = null
                }))
            }
            async function l(e, t) {
                let n = await r.Z.user.getAccounts.query({
                    query: {
                        chainId: e
                    }
                });
                if (200 === n.status) o.bf.setState(e => ({
                    subaccountInfos: { ...e.subaccountInfos,
                        [t.value]: n.body.data
                    }
                }));
                else if (401 === n.status) o.bf.setState(e => ({
                    subaccountInfos: { ...e.subaccountInfos,
                        [t.value]: []
                    }
                }));
                else throw Error("Cannot get accounts")
            }
            let d = async (e, t, n, r) => {
                let c = await s(e, t.address, n, r);
                o.bf.setState((0, a.Uy)(e => {
                    void 0 == e.accounts[t.value] && (e.accounts[t.value] = {
                        subaccounts: {}
                    }), Object.entries(c.subaccounts).forEach(n => {
                        let [a, r] = n;
                        e.accounts[t.value].subaccounts[a] = r
                    })
                }))
            }
        },
        90501: function(e, t, n) {
            "use strict";
            n.d(t, {
                Wr: function() {
                    return s
                },
                an: function() {
                    return c
                },
                bf: function() {
                    return o
                }
            }), n(25427);
            var a = n(94660),
                r = n(74810);
            let o = (0, a.Ue)(e => ({
                    subaccountId: void 0,
                    setSubaccountId: t => e(e => ({
                        subaccountId: t
                    })),
                    subaccountInfos: {},
                    accounts: {},
                    markets: {},
                    action: {
                        selectedTab: void 0,
                        selectedSubaccountId: "",
                        selectedAssetAddress: void 0,
                        onChangeSelectedSubaccountId: t => e(e => ({
                            action: { ...e.action,
                                selectedSubaccountId: t
                            }
                        })),
                        onChangeSelectedAssetAddress: t => e(e => ({
                            action: { ...e.action,
                                selectedAssetAddress: t
                            }
                        })),
                        onChangeSelectedTab: t => e(e => ({
                            action: { ...e.action,
                                selectedTab: t
                            }
                        }))
                    },
                    oracles: {},
                    oracleFetchInProgress: {}
                })),
                s = (0, a.Ue)(e => ({
                    totalBetaStaked: 0,
                    updateTotalBetaStaked: t => e(() => ({
                        totalBetaStaked: t
                    }))
                })),
                c = (0, a.Ue)((0, r.tJ)(e => ({
                    lastActiveSubAccId: "",
                    onChangeLastActiveSubAccId: t => e({
                        lastActiveSubAccId: t
                    })
                }), {
                    version: .1,
                    name: "last-interacted-storage"
                }))
        },
        53237: function(e, t, n) {
            "use strict";

            function a(e, t) {
                var n;
                if (null == t ? void 0 : t.invalid) return null;
                let a = null !== (n = null == t ? void 0 : t.trancheLevel) && void 0 !== n ? n : e.riskLevel;
                return { ...null != t ? t : {
                        markets: {},
                        name: e.name,
                        mode: null,
                        isolatedCollateral: null,
                        enteredMarkets: []
                    },
                    id: e.id,
                    name: e.name,
                    modeInfo: e.mode,
                    trancheLevel: a,
                    riskLevel: e.riskLevel,
                    assetCategory: e.assetCategory
                }
            }
            n.d(t, {
                y: function() {
                    return a
                }
            })
        },
        20426: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(15820);
            class r {
                static uncheckedFrom(e) {
                    return new r(e.slice(2))
                }
                static from(e) {
                    try {
                        return r.uncheckedFrom(e)
                    } catch (e) {
                        return null
                    }
                }
                get value() {
                    return this._address
                }
                get address() {
                    return "0x".concat(this._address)
                }
                get normalized() {
                    return a.K("0x".concat(this._address))
                }
                toString() {
                    return this.value
                }
                toJSON() {
                    return this.value
                }
                constructor(e) {
                    if (this._address = e.toLowerCase(), this._address.startsWith("0x")) throw Error("Address should not start with 0x: ".concat(e));
                    if (40 !== this._address.length) throw Error("Address should be 40 characters: ".concat(e))
                }
            }
        },
        56069: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return u
                }
            });
            var a = n(5727);
            let r = {
                id: a.R.id,
                label: "Ethereum",
                logoSrc: "/ethereum.png",
                chain: { ...a.R,
                    iconUrl: "/ethereum.png"
                }
            };
            var o = n(85780);
            let s = {
                id: o.y.id,
                label: "Arbitrum",
                logoSrc: "/arb.png",
                chain: { ...o.y,
                    iconUrl: "/arb.png"
                }
            };
            var c = n(32936);
            let i = {
                    id: c.e.id,
                    label: "BNB Chain",
                    logoSrc: "/bsc.png",
                    chain: { ...c.e,
                        iconUrl: "/bsc.png"
                    }
                },
                u = {
                    [r.id]: r,
                    [i.id]: i,
                    [s.id]: s
                }
        },
        38075: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return K
                }
            });
            var a = n(57437),
                r = n(2265),
                o = n(82256),
                s = n(36320),
                c = n(70165),
                i = n(30415),
                u = n.n(i),
                l = n(48756),
                d = n(24033),
                f = n(64362),
                b = n(30805);
            async function m(e) {
                try {
                    let t = await b.Z.user.get.query({
                        headers: {
                            authorization: "Bearer ".concat(e)
                        }
                    });
                    return 200 === t.status
                } catch (e) {
                    return !1
                }
            }
            var v = n(50646);

            function h() {
                let e = (0, d.useRouter)(),
                    t = (0, d.usePathname)(),
                    n = (0, r.useRef)(t);
                (0, r.useEffect)(() => {
                    n.current = t
                }, [t]);
                let {
                    isDisconnected: a
                } = (0, l.mA)(), o = (0, f.Z)();
                return (0, r.useEffect)(() => {
                    !a && ((null == o ? void 0 : o.token) || "/bouncer" === n.current) || (document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;", e.refresh())
                }, [e, null == o ? void 0 : o.token, a]), (0, r.useEffect)(() => {
                    if (!o) return;
                    let {
                        token: t,
                        addressId: a
                    } = o;
                    document.cookie = "token=".concat(t, "; path=/;");
                    let r = n.current,
                        s = async () => {
                            let n = await m(t);
                            n ? "/bouncer" === r && e.refresh() : (0, v.H6)(a)
                        };
                    s()
                }, [e, o]), null
            }
            var g = n(20426);

            function p() {
                let {
                    address: e
                } = (0, l.mA)();
                return (0, r.useEffect)(() => {
                    e && (0, v.Lf)(g.Z.uncheckedFrom(e))
                }, [e]), null
            }
            var y = n(31835),
                x = n(18839),
                A = n(16691),
                z = n.n(A),
                I = n(39098),
                S = n(61692),
                w = n(26347),
                N = n(53401);

            function j() {
                let {
                    openChainModal: e
                } = (0, o.iC)(), [t, n] = (0, r.useState)(!0), s = (0, l.xx)(), c = (0, N.Z)({
                    chainId: s
                });
                return c ? (0, a.jsx)(w.Z, {
                    open: c && t,
                    contentProps: {
                        className: "max-w-[468px] !rounded-2xl"
                    },
                    onClose: () => n(!1),
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-4",
                        children: [(0, a.jsx)(z(), {
                            alt: "chain-unsupport-icon",
                            height: 120,
                            src: I.default,
                            width: 120
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-3",
                            children: [(0, a.jsx)("p", {
                                className: "text-[20px] font-bold text-gray-40",
                                children: "Sorry, We don’t support this Network."
                            }), (0, a.jsx)("p", {
                                className: "text-center text-[14px] font-normal text-gray-400",
                                children: "Please switch networks to proceed."
                            })]
                        }), (0, a.jsx)(S.Z, {
                            className: "w-full",
                            label: "Change Network",
                            onClick: () => {
                                e && e(), n(!1)
                            }
                        })]
                    })
                }) : null
            }
            var k = n(15896),
                C = n(90501),
                T = n(14701),
                E = n(91653),
                R = n(27349),
                Z = n(37121),
                U = n(86257),
                B = n(81231),
                L = n(76920),
                V = n(27033),
                D = n(92799),
                P = n(38158),
                _ = n(56069);
            let {
                chains: M,
                publicClient: F
            } = (0, V.QB)(Object.values(_.G).map(e => e.chain), [(0, D.G)({
                apiKey: "sYwXDWgNVg4s-jUDhMRTdLlNP92MTnxw"
            }), (0, P.R)({
                rpc: e => 56 === e.id ? {
                    http: "https://bsc-mainnet.nodereal.io/v1/0c178889612a402da8f134e04e374dce"
                } : null
            }), (0, L.I)()]), O = "f6b892ffe517c0acd52af9ce44089738", H = (0, T.a3)([{
                groupName: "Recommended",
                wallets: [(0, E.U)({
                    chains: M
                }), (0, R.P)({
                    projectId: O,
                    chains: M
                }), (0, Z.D)({
                    appName: O,
                    chains: M
                }), (0, U.p)({
                    projectId: O,
                    chains: M
                }), (0, B.m)({
                    chains: M
                })]
            }]), G = (0, l._g)({
                autoConnect: !0,
                connectors: H,
                publicClient: F
            });
            var J = n(38283);
            let Y = u()(() => n.e(7954).then(n.bind(n, 17954)), {
                loadableGenerated: {
                    webpack: () => [17954]
                },
                ssr: !1
            });

            function q() {
                var e;
                let t = (0, l.xx)(),
                    n = (0, f.Z)(),
                    a = (0, r.useRef)(null == n ? void 0 : n.addressId),
                    {
                        lastActiveSubAccId: o
                    } = (0, y.Z)(),
                    {
                        subaccountId: s,
                        setSubaccountId: c
                    } = (0, x.Z)();
                (0, r.useEffect)(() => {
                    (null == n ? void 0 : n.addressId) && (0, k.Gi)(t, n.addressId), a.current !== (null == n ? void 0 : n.addressId) && (c(void 0), a.current = null == n ? void 0 : n.addressId)
                }, [null == n ? void 0 : n.addressId, t, c]);
                let i = (0, C.bf)(t => (null == n ? void 0 : n.addressId) && null !== (e = t.subaccountInfos[n.addressId.value]) && void 0 !== e ? e : null);
                return (0, r.useEffect)(() => {
                    (null == n ? void 0 : n.addressId) && i && (0, k.yK)(t, n.addressId, i.map(e => e.id).map(String))
                }, [t, null == n ? void 0 : n.addressId, i]), (0, r.useEffect)(() => {
                    if (i && void 0 === s) {
                        if (o && i.some(e => {
                                let {
                                    id: t
                                } = e;
                                return t.toString() == o
                            })) {
                            c(o);
                            return
                        }
                        i.length > 0 && c(i[0].id.toString())
                    }
                }, [i, s, c, o]), (0, r.useEffect)(() => {
                    s && J.a.setSelectedSubaccount(s)
                }, [s]), (0, r.useEffect)(() => {
                    n && J.a.setAuthContext(n)
                }, [n]), null
            }
            var K = function(e) {
                let {
                    children: t
                } = e, [n] = r.useState(() => new s.S), [i, u] = r.useState(!1);
                return r.useEffect(() => {
                    u(!0)
                }, []), (0, a.jsx)(l.eM, {
                    config: G,
                    children: (0, a.jsxs)(o.pj, {
                        chains: M,
                        children: [(0, a.jsx)(p, {}), (0, a.jsx)(q, {}), i && (0, a.jsx)(h, {}), i && (0, a.jsx)(j, {}), (0, a.jsx)(c.QueryClientProvider, {
                            client: n,
                            children: (0, a.jsx)(Y, {
                                children: t
                            })
                        })]
                    })
                })
            }
        },
        61692: function(e, t, n) {
            "use strict";
            var a = n(57437),
                r = n(2265),
                o = n(69484),
                s = n(75959),
                c = n(65730);
            let i = (0, o.j)(["flex items-center justify-center gap-1", "disabled:cursor-not-allowed", "outline-none"], {
                    variants: {
                        intent: {
                            primary: ["bg-primary-900", "hover:bg-primary-800", "from-[#00C805] via-[#10CF84] to-[#00FF7C] [&:not(:disabled)]:active:bg-gradient-to-r", "text-black", "border", "border-primary-800", "hover:border-primary-700", "disabled:bg-gray-800", "disabled:text-gray-500", "disabled:border-gray-600", "focus-visible:ring-2 focus-visible:ring-ring"],
                            secondary: ["text-primary-900", "hover:bg-primary-500", "active:bg-primary-50", "border", "border-primary-900", "disabled:bg-transparent", "disabled:text-gray-500", "disabled:border-gray-600", "focus-visible:ring-2 focus-visible:ring-ring"]
                        },
                        size: {
                            base: ["h-8 rounded-[20px] px-[12px] text-sm font-bold"]
                        }
                    },
                    defaultVariants: {
                        intent: "primary",
                        size: "base"
                    }
                }),
                u = r.forwardRef((e, t) => {
                    let {
                        label: n,
                        danger: r,
                        icon: o,
                        iconRight: u,
                        intent: l,
                        size: d,
                        className: f,
                        onClick: b
                    } = e;
                    return (0, a.jsxs)("button", {
                        ref: t,
                        disabled: e.disabled,
                        type: "button",
                        className: (0, c.cn)(i({
                            intent: l,
                            size: d,
                            className: [r && (!l || "primary" === l) && "border-secondary-900 bg-secondary-900 hover:border-secondary-800 hover:bg-secondary-800 active:border-secondary-700 active:from-secondary-700 active:via-secondary-700 active:to-secondary-700", r && "secondary" === l && "border-secondary-900 text-secondary-900 hover:border-secondary-900 hover:bg-secondary-500 active:bg-secondary-50", f]
                        })),
                        onClick: b,
                        children: [o && (0, a.jsx)(s.Z, {
                            name: o,
                            size: 16
                        }), (0, a.jsx)("div", {
                            className: "leading-none",
                            children: n
                        }), u && (0, a.jsx)(s.Z, {
                            name: u,
                            size: 16
                        })]
                    })
                });
            u.displayName = "ButtonRounded", t.Z = u
        },
        19249: function(e, t, n) {
            "use strict";
            n.d(t, {
                $N: function() {
                    return g
                },
                Be: function() {
                    return p
                },
                GG: function() {
                    return d
                },
                J5: function() {
                    return b
                },
                PK: function() {
                    return l
                },
                Vq: function() {
                    return i
                },
                cN: function() {
                    return h
                },
                cZ: function() {
                    return m
                },
                fK: function() {
                    return v
                },
                hg: function() {
                    return u
                },
                t9: function() {
                    return f
                }
            });
            var a = n(57437),
                r = n(2265),
                o = n(8804),
                s = n(63507),
                c = n(65730);
            let i = s.fC,
                u = s.xz,
                l = s.h_,
                d = s.x8,
                f = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...r
                    } = e;
                    return (0, a.jsx)(s.aV, {
                        ref: t,
                        className: (0, c.cn)("fixed inset-0 z-50 bg-[#000000]/50", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                        ...r
                    })
                });
            f.displayName = s.aV.displayName;
            let b = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: r,
                    showCloseIcon: i = !0,
                    onClose: u,
                    ...l
                } = e;
                return (0, a.jsxs)(s.VY, {
                    ref: t,
                    className: (0, c.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border border-gray-700 bg-gray-850 p-6 shadow-lg outline-none sm:rounded-2xl md:w-full", "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", n),
                    ...l,
                    children: [r, i && (0, a.jsxs)(s.x8, {
                        className: "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",
                        children: [(0, a.jsx)(o.$iT, {
                            className: "h-4 w-4",
                            onClick: u
                        }), (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })]
                    })]
                })
            });
            b.displayName = s.VY.displayName;
            let m = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: r,
                    showCloseIcon: i = !0,
                    onClose: u,
                    ...d
                } = e;
                return (0, a.jsxs)(l, {
                    children: [(0, a.jsx)(f, {}), (0, a.jsxs)(s.VY, {
                        ref: t,
                        className: (0, c.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border border-gray-700 bg-gray-850 p-6 shadow-lg outline-none sm:rounded-2xl md:w-full", "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", n),
                        ...d,
                        children: [r, i && (0, a.jsxs)(s.x8, {
                            className: "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",
                            children: [(0, a.jsx)(o.$iT, {
                                className: "h-4 w-4",
                                onClick: u
                            }), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            m.displayName = s.VY.displayName;
            let v = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, c.cn)("flex flex-col items-center gap-3 space-y-1.5 text-center sm:text-left", t),
                    ...n
                })
            };
            v.displayName = "DialogHeader";
            let h = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, c.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                    ...n
                })
            };
            h.displayName = "DialogFooter";
            let g = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(s.Dx, {
                    ref: t,
                    className: (0, c.cn)("text-xl font-bold leading-none tracking-tight text-gray-40", n),
                    ...r
                })
            });
            g.displayName = s.Dx.displayName;
            let p = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(s.dk, {
                    ref: t,
                    className: (0, c.cn)("text-sm font-normal leading-none text-gray-400", n),
                    ...r
                })
            });
            p.displayName = s.dk.displayName
        },
        26347: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(57437),
                r = n(19249);

            function o(e) {
                let {
                    open: t,
                    title: n,
                    showCloseIcon: o = !0,
                    contentProps: s,
                    children: c,
                    onClose: i
                } = e;
                return (0, a.jsx)(r.Vq, {
                    open: t,
                    children: (0, a.jsxs)(r.cZ, {
                        showCloseIcon: o,
                        onClose: i,
                        ...s,
                        children: [n && (0, a.jsx)(r.fK, {
                            children: n
                        }), c]
                    })
                })
            }
        },
        25427: function(e, t, n) {
            "use strict";
            n.d(t, {
                NO: function() {
                    return s
                },
                Rn: function() {
                    return g
                },
                UR: function() {
                    return y
                },
                a_: function() {
                    return A
                },
                kL: function() {
                    return i
                },
                mt: function() {
                    return v
                },
                r_: function() {
                    return x
                },
                zi: function() {
                    return o
                }
            });
            var a, r, o, s, c = n(68449);
            let i = c.z.custom(e => "string" == typeof e && /^0x[a-f0-9]{40}$/.test(e));
            c.z.custom(e => "string" == typeof e && /^0x[a-f0-9]{64}$/.test(e));
            let u = c.z.custom(e => "number" == typeof e && e >= 0 && e <= 2);
            (a = o || (o = {})).NONE = "none", a.CROSS = "cross", a.STABLECOIN = "stablecoin", a.ETH_CORRELATED = "eth-correlated", a.ISOLATED = "isolated";
            let l = c.z.nativeEnum(o),
                d = c.z.string();
            c.z.record(d, c.z.object({
                mode: l.nullable(),
                isolatedCollateralMarket: i,
                softThreshold: c.z.bigint()
            })), c.z.object({
                trancheIndex: c.z.number(),
                userDeposit: c.z.bigint(),
                userBorrow: c.z.bigint(),
                userDepositShare: c.z.bigint(),
                userBorrowShare: c.z.bigint()
            });
            let f = c.z.object({
                    depositAmount: c.z.bigint(),
                    borrowAmount: c.z.bigint(),
                    depositShare: c.z.bigint(),
                    borrowShare: c.z.bigint()
                }),
                b = c.z.object({
                    positionForTranche: c.z.record(u, f)
                }),
                m = c.z.object({
                    invalid: c.z.boolean().optional(),
                    invalidReason: c.z.string().optional(),
                    markets: c.z.record(i, b),
                    mode: l.nullable(),
                    trancheLevel: u.nullable(),
                    isolatedCollateral: i.nullable(),
                    enteredMarkets: c.z.array(i),
                    name: c.z.string().nullable()
                }),
                v = c.z.object({
                    subaccounts: c.z.record(d, m)
                }),
                h = c.z.object({
                    trancheIndex: c.z.bigint(),
                    totalDeposit: c.z.bigint(),
                    totalBorrow: c.z.bigint(),
                    totalDepositShare: c.z.bigint(),
                    totalBorrowShare: c.z.bigint(),
                    cumulativeTotalDeposit: c.z.bigint(),
                    cumulativeTotalBorrow: c.z.bigint(),
                    interestRate: c.z.bigint()
                }),
                g = c.z.object({
                    markets: c.z.record(i, c.z.array(h))
                }),
                p = c.z.object({
                    price: c.z.bigint(),
                    lastPrice: c.z.bigint(),
                    updatedAt: c.z.number()
                }),
                y = c.z.object({
                    oracles: c.z.record(i, p)
                }),
                x = "0x0000000000000000000000000000000000000000";
            (r = s || (s = {})).BAND = "Band", r.CHAINLINK = "Chainlink", r.CUSTOM = "Custom", c.z.object({
                stakingApr: c.z.number(),
                totalFundsLocked: c.z.number(),
                userRemainingLockingPeriod: c.z.number(),
                userStakedAmount: c.z.number(),
                userClaimableRewards: c.z.number(),
                userBetaRewardsPerMonth: c.z.number()
            });
            let A = c.z.custom(e => "number" == typeof e && (1 === e || 11155111 === e || 56 === e || 42161 === e))
        },
        53054: function() {},
        13336: function() {},
        39098: function(e, t, n) {
            "use strict";
            n.r(t), t.default = {
                src: "/_next/static/media/chain-unsupport.95f0078a.png",
                height: 131,
                width: 132,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXFQUVJZWlpHSUpMTExbW11RU1NVVVlPT1I7PEBhYWNIR0leXl5iY2SJiYlvcHBVVVdiZGRzdHRzdXUZjw1DAAAAFHRSTlMAVKdeDidCPEtEhDYf4T2euG3ku1x8w3AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVHicJcvHEYAwEASwvRxsY0L/vTIM+gvQUWUAlHrtDCCN+T58Qlx8XRmQIcyVAbd4WnNCic6m+NrfXzy4AaXx9P6XAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        }
    },
    function(e) {
        e.O(0, [8787, 7667, 1346, 177, 2794, 6551, 5958, 8367, 3032, 7830, 3722, 9887, 6964, 957, 1463, 1842, 1574, 4626, 1181, 6e3, 2021, 3816, 35, 2971, 7864, 1744], function() {
            return e(e.s = 73654)
        }), _N_E = e.O()
    }
]);
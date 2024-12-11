(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5570], {
        36815: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 38787))
        },
        38787: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n(57437),
                a = n(2265),
                s = n(82256),
                i = n(64626),
                o = n(16691),
                c = n.n(o),
                l = n(39098),
                u = n(48756),
                d = n(4691),
                h = n(78224),
                f = n(61692),
                m = n(26347),
                p = n(65730),
                x = n(32034),
                v = n.n(x),
                b = n(98622),
                g = n(18187),
                w = n(64362),
                _ = n(6242),
                A = n(50833),
                k = n(35655),
                j = n(26e3),
                y = n(11288);

            function N() {
                let [e, t] = (0, a.useState)(!1), {
                    isConnected: n,
                    isDisconnected: o
                } = (0, u.mA)(), [x, N] = (0, a.useState)(!1), {
                    openChainModal: C
                } = (0, s.iC)(), [B, E] = (0, a.useState)(d.DP), [T, Z] = (0, a.useState)(d.HN), F = (0, u.xx)(), S = 56 !== F;
                (0, a.useEffect)(() => {
                    S && N(!0)
                }, [S]);
                let I = {
                        [d.DP]: "BETA",
                        [d.HN]: "BetaOFT"
                    },
                    {
                        formInputAction: {
                            value: O,
                            valueUsd: D,
                            inputAmount: M
                        },
                        balances: P,
                        allowances: U,
                        handleOnChangeValue: H,
                        onApprove: V,
                        onConvertOFT: L,
                        onConvertNative: R
                    } = function(e) {
                        var t, n, r, s, o, c, l, h, f, m, p;
                        let {
                            tokenAddress: x
                        } = e, [v, N] = (0, a.useState)("0"), C = (0, u.xx)(), B = (0, w.Z)(), E = (0, y.Z)(), T = (0, a.useMemo)(() => {
                            var e;
                            return null !== (f = null == B ? void 0 : null === (e = B.addressId) || void 0 === e ? void 0 : e.address) && void 0 !== f ? f : "0x"
                        }, [null == B ? void 0 : null === (t = B.addressId) || void 0 === t ? void 0 : t.address]), {
                            isLoading: Z,
                            data: F
                        } = (0, _.Z)({
                            chainId: C,
                            tokenAddresses: d.z6[C],
                            refetchInterval: 6e4,
                            enabled: E
                        }), {
                            data: S,
                            isLoading: I
                        } = (0, j.Z)({
                            tokens: [d.DP, d.HN],
                            account: T
                        }), {
                            data: O,
                            isLoading: D
                        } = (0, k.Z)({
                            token: d.DP,
                            owner: T,
                            spender: g.cX[56],
                            refetchInterval: 1e4
                        }), {
                            data: M,
                            isLoading: P
                        } = (0, k.Z)({
                            token: d.HN,
                            owner: T,
                            spender: g.cX[56],
                            refetchInterval: 1e4
                        }), U = (0, a.useMemo)(() => Z || D || P || I, [D, P, I, Z]), H = (0, a.useMemo)(() => {
                            var e, t, n;
                            return null !== (n = null == F ? void 0 : null === (t = F.body) || void 0 === t ? void 0 : null === (e = t.oracles[d.DP]) || void 0 === e ? void 0 : e.price) && void 0 !== n ? n : BigInt(0)
                        }, [null == F ? void 0 : null === (n = F.body) || void 0 === n ? void 0 : n.oracles]), V = (0, a.useMemo)(() => v ? Number(H) * parseFloat(v) / 1e18 : 0, [v, H]), L = (0, a.useMemo)(() => v ? (0, b.v)(v, 18) : BigInt(0), [v]), {
                            writeAsync: R
                        } = (0, A.t)(x, g.cX[56], L), {
                            writeAsync: X
                        } = function(e) {
                            let t = (0, u.GG)({
                                address: g.cX[56],
                                abi: g.v0,
                                functionName: "convertFromOFT",
                                args: [e]
                            });
                            return t
                        }(L), {
                            writeAsync: W
                        } = function(e) {
                            let t = (0, u.GG)({
                                address: g.cX[56],
                                abi: g.v0,
                                functionName: "convertToOFT",
                                args: [e]
                            });
                            return t
                        }(L), z = S && (null === (r = S[0]) || void 0 === r ? void 0 : r.status) === "success" ? (0, i.Z)(null !== (m = null === (o = S[0]) || void 0 === o ? void 0 : null === (s = o.result) || void 0 === s ? void 0 : s.toString()) && void 0 !== m ? m : "0") : (0, i.Z)(0), G = S && (null === (c = S[1]) || void 0 === c ? void 0 : c.status) === "success" ? (0, i.Z)(null !== (p = null === (h = S[1]) || void 0 === h ? void 0 : null === (l = h.result) || void 0 === l ? void 0 : l.toString()) && void 0 !== p ? p : "0") : (0, i.Z)(0);
                        return {
                            formInputAction: {
                                value: v,
                                valueUsd: V,
                                inputAmount: L
                            },
                            balances: {
                                [d.DP]: z.dividedBy(1e18),
                                [d.HN]: G.dividedBy(1e18)
                            },
                            allowances: {
                                [d.DP]: void 0 === O ? (0, i.Z)(0) : (0, i.Z)(O.toString()),
                                [d.HN]: void 0 === M ? (0, i.Z)(0) : (0, i.Z)(M.toString())
                            },
                            isLoading: U,
                            handleOnChangeValue: N,
                            onApprove: R,
                            onConvertOFT: X,
                            onConvertNative: W
                        }
                    }({
                        tokenAddress: B
                    });
                (0, a.useEffect)(() => {
                    n && t(!0)
                }, [n]), (0, a.useEffect)(() => {
                    e && o && t(!1)
                }, [o, e]);
                let X = (0, a.useMemo)(() => !!(0, i.Z)(M.toString()).gt(U[B]), [B, U, M]),
                    W = (0, a.useMemo)(() => X ? "Approve " + I[B] : "Convert to " + I[T], [B, T, X, I]),
                    z = (0, a.useMemo)(() => X ? V : B === d.DP ? R : L, [X, V, L, R]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [S && (0, r.jsx)(m.Z, {
                        open: S && x,
                        contentProps: {
                            className: "max-w-[468px] !rounded-2xl"
                        },
                        onClose: () => N(!1),
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-4",
                            children: [(0, r.jsx)(c(), {
                                alt: "chain-unsupport-icon",
                                height: 120,
                                src: l.default,
                                width: 120
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col items-center justify-center gap-3",
                                children: [(0, r.jsx)("p", {
                                    className: "text-center text-[20px] font-bold text-gray-40",
                                    children: "Token conversion is only for BETA on BNBChain."
                                }), (0, r.jsx)("p", {
                                    className: "text-center text-[14px] font-normal text-gray-400",
                                    children: "Please switch networks to proceed."
                                })]
                            }), (0, r.jsx)(f.Z, {
                                className: "w-full",
                                label: "Change Network",
                                onClick: () => {
                                    C && C(), N(!1)
                                }
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: (0, p.cn)("flex shrink-0 basis-[466px] flex-col", v()["container-wrap"]),
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4 rounded-2xl bg-gray-900 p-6",
                            children: [(0, r.jsx)(h.Z, {
                                asset: I[B],
                                decimals: 18,
                                id: "tokenIn",
                                label: "Amount Available:",
                                max: P[B],
                                price: D,
                                value: O,
                                onChangeValue: H
                            }), (0, r.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, r.jsx)(f.Z, {
                                    label: "↓",
                                    onClick: () => {
                                        B === d.DP ? (E(d.HN), Z(d.DP)) : (E(d.DP), Z(d.HN))
                                    }
                                })
                            }), (0, r.jsx)(h.Z, {
                                asset: I[T],
                                decimals: 18,
                                id: "tokenOut",
                                label: "Amount Receivable:",
                                max: P[B],
                                price: D,
                                value: O,
                                onChangeValue: H
                            }), (0, r.jsx)(f.Z, {
                                className: "mr-4 mt-3 w-full",
                                disabled: M === BigInt(0),
                                label: W,
                                onClick: z
                            })]
                        })
                    })]
                })
            }
            var C = n(75959),
                B = n(89296);
            let E = [{
                icon: (0, r.jsx)("svg", {
                    className: "h-12 w-12",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M3 12h18M3 6h18M3 18h18",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeWidth: "2"
                    })
                }),
                title: "Select BETA or BetaOFT",
                description: (0, r.jsx)("span", {
                    children: "Click the green arrow to choose between BETA and BetaOFT to convert."
                })
            }, {
                icon: (0, r.jsx)("svg", {
                    className: "h-12 w-12",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M12 8v8m-4-4h8",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeWidth: "2"
                    })
                }),
                title: "Enter Amount + Confirm",
                description: (0, r.jsx)("span", {
                    children: "Specify the amount to convert and confirm the transaction."
                })
            }, {
                icon: (0, r.jsx)("svg", {
                    className: "h-12 w-12",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M5 13l4 4L19 7",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeWidth: "2"
                    })
                }),
                title: "Stake or Bridge",
                description: (0, r.jsxs)("span", {
                    children: ["After receiving the OFT token go to", " ", (0, r.jsx)("a", {
                        className: "font-bold text-white underline",
                        href: "https://stargate.finance/bridge?srcChain=bsc&srcToken=0x2A73F85024f101F3FAC9FbCBcE60707B6b3A6203&dstChain=ethereum&dstToken=0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28",
                        target: "_blank",
                        children: "Stargate"
                    }), " ", "to bridge from BNBChain to Ethereum. Or use the native token to stake and receive stkBETA!"]
                })
            }];

            function T() {
                return (0, r.jsxs)("div", {
                    className: "container mx-auto p-4 pt-16",
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, r.jsx)("div", {
                            className: "rounded-xl p-3",
                            children: (0, r.jsx)("svg", {
                                className: "h-8 w-8",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, r.jsx)("path", {
                                    d: "M19 12H5m7-7v14m-7-7l7 7 7-7",
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2"
                                })
                            })
                        }), (0, r.jsx)("h1", {
                            className: "text-2xl font-bold",
                            children: "Convert"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex w-full items-center gap-3 rounded-lg bg-[#1e212499] p-[8px_16px]",
                        children: [(0, r.jsx)(C.Z, {
                            color: B.r$.gray[400],
                            name: "announce",
                            size: 16
                        }), (0, r.jsxs)("p", {
                            className: "text-sm font-normal text-gray-400",
                            children: ["Beta is excited to announce it's integration with\xa0", (0, r.jsx)("a", {
                                className: "font-bold text-white underline",
                                href: "https://stargate.finance/bridge?srcChain=bsc&srcToken=0x2A73F85024f101F3FAC9FbCBcE60707B6b3A6203&dstChain=ethereum&dstToken=0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28",
                                target: "_blank",
                                children: "Stargate Finance"
                            }), " ", "to enable users to seamlessly bridge between Ethereum Mainnet and BNBChain via the OFT token. Use the converter below to switch between the native and OFT tokens in order to bridge your tokens to Ethereum, and convert tokens from Ethereum into the native token on BNBChain for staking."]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "mb-8 mt-8 flex items-center justify-center",
                        children: (0, r.jsx)(N, {})
                    }), (0, r.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, r.jsx)("div", {
                            className: "flex gap-6",
                            children: E.map((e, t) => (0, r.jsxs)("div", {
                                className: "flex w-[288px] flex-col items-center rounded-lg bg-white/5 p-6 text-center",
                                children: [(0, r.jsx)("div", {
                                    className: "mb-4",
                                    children: e.icon
                                }), (0, r.jsx)("h3", {
                                    className: "mb-2 text-lg font-semibold",
                                    children: e.title
                                }), (0, r.jsx)("p", {
                                    className: "text-sm text-gray-400",
                                    children: e.description
                                })]
                            }, t))
                        })
                    })]
                })
            }
        },
        78224: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(57437),
                a = n(2265),
                s = n(64626),
                i = n(81014),
                o = n.n(i),
                c = n(38283),
                l = n(37041),
                u = n(73229),
                d = n(20228),
                h = n(65730);

            function f(e) {
                let {
                    id: t,
                    label: n,
                    value: i,
                    max: f,
                    price: m,
                    asset: p,
                    decimals: x,
                    disabled: v = !1,
                    onChangeValue: b
                } = e, g = (0, a.useCallback)(() => {
                    b((0, l.Z)(f.toFixed(x))), c.a.clickMaxInputButton({
                        maxValue: f.toFixed(x)
                    })
                }, [x, f, b]);
                return (0, r.jsxs)(u.Z, {
                    spacing: 4,
                    column: !0,
                    children: [(0, r.jsxs)(u.Z, {
                        justifyContent: "space-between",
                        row: !0,
                        children: [(0, r.jsx)("label", {
                            className: o().label,
                            htmlFor: t,
                            children: n
                        }), (0, r.jsxs)(d.LY, {
                            className: o()["helper-text"],
                            children: [(0, l.Z)(f.toFormat(3)), " ", p]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: o().container,
                        children: [(0, r.jsx)("input", {
                            className: o().input,
                            disabled: f.eq(0) || v,
                            id: t,
                            placeholder: "0.00",
                            type: "number",
                            value: i,
                            onChange: e => {
                                let t = e.target.value.replace(/^0+(?=\d+(\.\d+)?$)/, ""),
                                    n = t,
                                    r = (0, s.Z)(t);
                                r.lt(0) ? n = "0" : r.gte(f) && (n = (0, l.Z)(f.toFixed(x)));
                                let a = new RegExp("^-?\\d*(\\.\\d{0,".concat(x, "})?")),
                                    i = n.match(a);
                                i && b(i[0])
                            }
                        }), (0, r.jsx)("div", {
                            className: o()["input-adornment"],
                            children: (0, r.jsx)("p", {
                                className: (0, h.cn)((f.eq(0) || v) && o().disabled),
                                onClick: () => {
                                    f.eq(0) || v || g()
                                },
                                children: "MAX"
                            })
                        }), (0, r.jsx)("fieldset", {
                            "aria-hidden": "true",
                            className: o().fieldset,
                            disabled: f.eq(0) || v,
                            children: (0, r.jsx)("legend", {
                                className: o().legend
                            })
                        })]
                    }), (0, r.jsxs)(d.LY, {
                        className: o()["price-text"],
                        children: ["$", m.toLocaleString(void 0, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2
                        })]
                    })]
                })
            }
        },
        6242: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(30805);

            function a(e) {
                let {
                    chainId: t,
                    tokenAddresses: n,
                    refetchInterval: a = 0,
                    ignoreCache: s,
                    enabled: i = !0
                } = e;
                return r.Z.oracle.getOraclePrices.useQuery(["oracle-prices"], {
                    headers: {
                        "cache-control": s ? "no-cache" : void 0
                    },
                    query: {
                        chainId: t,
                        tokenAddresses: n
                    }
                }, {
                    enabled: i && n.length > 0,
                    refetchInterval: a
                })
            }
        },
        50833: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return s
                }
            });
            var r = n(48756),
                a = n(18187);

            function s(e, t, n) {
                let s = (0, r.GG)({
                    address: e,
                    abi: a.em,
                    functionName: "approve",
                    args: [t, BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639")]
                });
                return s
            }
        },
        35655: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(28285),
                a = n(27033),
                s = n(18187);

            function i(e) {
                let {
                    token: t,
                    owner: n,
                    spender: i,
                    refetchInterval: o = 0,
                    enabled: c = !0
                } = e, l = (0, r.useQuery)(["token-allowance", n, t], async () => await (0, a.a4)({
                    args: [n, i],
                    abi: s.em,
                    functionName: "allowance",
                    address: t
                }), {
                    enabled: c && !!t && !!n && !!i,
                    refetchInterval: o
                });
                return l
            }
        },
        26e3: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(28285),
                a = n(27033),
                s = n(18187);

            function i(e) {
                let {
                    tokens: t,
                    account: n,
                    refetchInterval: i = 1e4,
                    enabled: o = !0
                } = e, c = (0, r.useQuery)(["token-balances", n, t], async () => await (0, a.JH)({
                    contracts: t.map(e => ({
                        abi: s.em,
                        address: e,
                        functionName: "balanceOf",
                        args: [n]
                    }))
                }), {
                    enabled: o && !!n && !!t,
                    refetchInterval: i
                });
                return c
            }
        },
        73229: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(57437),
                a = n(2265),
                s = n(63779),
                i = n(65730),
                o = n(8625),
                c = n.n(o);

            function l(e) {
                let {
                    className: t,
                    style: n,
                    row: o,
                    column: l,
                    flex: u,
                    alignItems: d,
                    justifyContent: h,
                    spacing: f,
                    children: m,
                    ...p
                } = e, x = (0, i.cn)(c().container, l && c().column, o && c().row, t), v = (0, s.Z)(u && {
                    flex: !0 === u ? 1 : u
                }, d && {
                    alignItems: d
                }, h && {
                    justifyContent: h
                }, n), b = m;
                if (f) {
                    let e = a.Children.toArray(m).filter(Boolean);
                    b = e.map((t, n) => (0, r.jsxs)(a.Fragment, {
                        children: [t, n !== e.length - 1 && t && (0, r.jsx)("div", {
                            style: {
                                width: o ? f : void 0,
                                height: o ? void 0 : f,
                                flexShrink: 0
                            }
                        })]
                    }, n))
                }
                return (0, r.jsx)("div", {
                    className: x,
                    style: v,
                    ...p,
                    children: b
                })
            }
        },
        20228: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ac: function() {
                    return f
                },
                HB: function() {
                    return p
                },
                LY: function() {
                    return h
                },
                YA: function() {
                    return m
                },
                eN: function() {
                    return l
                },
                ip: function() {
                    return u
                },
                oD: function() {
                    return x
                },
                tt: function() {
                    return d
                }
            });
            var r = n(57437);
            n(2265);
            var a = n(63779),
                s = n(65730),
                i = n(79728),
                o = n.n(i);

            function c(e, t) {
                let {
                    className: n,
                    style: i,
                    centered: c,
                    color: l,
                    children: u,
                    black: d,
                    bold: h,
                    medium: f,
                    secondary: m,
                    ghost: p,
                    ...x
                } = t;
                return (0, r.jsx)("span", {
                    style: (0, a.Z)(l && {
                        color: l
                    }, i),
                    className: (0, s.cn)(e, c && o().alignCenter, d && o().black, h && o().bold, f && o().medium, m && o().secondary, p && o().ghost, n),
                    ...x,
                    children: u
                })
            }

            function l(e) {
                return c(o().headline2, e)
            }

            function u(e) {
                return c(o().title, e)
            }

            function d(e) {
                return c(o().subtitle, e)
            }

            function h(e) {
                return c(o().subtitle2, e)
            }

            function f(e) {
                return c(o().body, e)
            }

            function m(e) {
                return c(o().body2, e)
            }

            function p(e) {
                return c(o().caption, e)
            }

            function x(e) {
                return c(o().button, e)
            }
        },
        63779: function(e, t, n) {
            "use strict";

            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Object.assign({}, ...t.filter(Boolean))
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        32034: function(e) {
            e.exports = {
                "container-wrap": "ConvertForm_container-wrap__3xWFg"
            }
        },
        81014: function(e) {
            e.exports = {
                container: "Input_container__5O0Tt",
                label: "Input_label___wZj3",
                input: "Input_input___0rVa",
                "input-adornment": "Input_input-adornment__0wgBi",
                disabled: "Input_disabled___XRhp",
                fieldset: "Input_fieldset__74wsq",
                legend: "Input_legend__i0lKz",
                "helper-text": "Input_helper-text__GwzXI",
                "price-text": "Input_price-text__olWx3"
            }
        },
        8625: function(e) {
            e.exports = {
                container: "Box_container__csh5r",
                column: "Box_column__rUfUn",
                row: "Box_row__bZwLD"
            }
        },
        79728: function(e) {
            e.exports = {
                headline: "Text_headline__e0GCd",
                headline2: "Text_headline2__J60n5",
                title: "Text_title__z3tPt",
                subtitle: "Text_subtitle__VwNeW",
                subtitle2: "Text_subtitle2__JhLjJ",
                body: "Text_body__rAE1G",
                body2: "Text_body2__neD5u",
                caption: "Text_caption__Oh_X5",
                button: "Text_button__chMzE",
                alignCenter: "Text_alignCenter__n0j3i",
                black: "Text_black__c4nDU",
                bold: "Text_bold__9SITh",
                medium: "Text_medium__s72rK",
                secondary: "Text_secondary__JSvgR",
                ghost: "Text_ghost__E90B8"
            }
        },
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
        },
        87144: function(e, t, n) {
            var r = n(41548),
                a = n(3598),
                s = n(69996),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return s(e);
                var t = a(e),
                    n = [];
                for (var o in e) "constructor" == o && (t || !i.call(e, o)) || n.push(o);
                return n
            }
        },
        65188: function(e, t, n) {
            var r = n(26402),
                a = n(59523),
                s = n(39053);
            e.exports = function(e, t, n) {
                for (var i = -1, o = t.length, c = {}; ++i < o;) {
                    var l = t[i],
                        u = r(e, l);
                    n(u, l) && a(c, s(l, e), u)
                }
                return c
            }
        },
        18587: function(e, t, n) {
            var r = n(26904),
                a = n(10940),
                s = n(8071);
            e.exports = function(e) {
                return r(e, s, a)
            }
        },
        74106: function(e, t, n) {
            var r = n(49468)(Object.getPrototypeOf, Object);
            e.exports = r
        },
        10940: function(e, t, n) {
            var r = n(62849),
                a = n(74106),
                s = n(62348),
                i = n(43349),
                o = Object.getOwnPropertySymbols ? function(e) {
                    for (var t = []; e;) r(t, s(e)), e = a(e);
                    return t
                } : i;
            e.exports = o
        },
        69996: function(e) {
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var n in Object(e)) t.push(n);
                return t
            }
        },
        18813: function(e) {
            e.exports = function(e) {
                return void 0 === e
            }
        },
        8071: function(e, t, n) {
            var r = n(45897),
                a = n(87144),
                s = n(97703);
            e.exports = function(e) {
                return s(e) ? r(e, !0) : a(e)
            }
        },
        33487: function(e) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError("Expected a function");
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                    }
                    return !e.apply(this, t)
                }
            }
        },
        95736: function(e, t, n) {
            var r = n(89308),
                a = n(33487),
                s = n(51464);
            e.exports = function(e, t) {
                return s(e, a(r(t)))
            }
        },
        51464: function(e, t, n) {
            var r = n(45667),
                a = n(89308),
                s = n(65188),
                i = n(18587);
            e.exports = function(e, t) {
                if (null == e) return {};
                var n = r(i(e), function(e) {
                    return [e]
                });
                return t = a(t), s(e, n, function(e, n) {
                    return t(e, n[0])
                })
            }
        },
        77647: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return a
                }
            });
            var r = n(77918);
            let a = (0, r.ax)({
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
        99496: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return a
                }
            });
            var r = n(77918);
            let a = (0, r.ax)({
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
        24994: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var r = n(77918);
            let a = (0, r.ax)({
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
        6490: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return a
                }
            });
            var r = n(77918);
            let a = (0, r.ax)({
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
        64639: function(e, t, n) {
            "use strict";
            n.d(t, {
                zL: function() {
                    return r
                }
            });
            let r = 2 n ** 256 n - 1 n
        },
        77918: function(e, t, n) {
            "use strict";

            function r(e, t = {}) {
                let {
                    fees: n = e.fees,
                    formatters: r = e.formatters,
                    serializers: a = e.serializers
                } = t;
                return { ...e,
                    fees: n,
                    formatters: r,
                    serializers: a
                }
            }
            n.d(t, {
                ax: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [8787, 7667, 1346, 177, 2794, 6551, 5958, 8367, 3032, 7830, 3722, 9887, 6964, 957, 1463, 1842, 1574, 4626, 1181, 3507, 3816, 1316, 35, 2971, 7864, 1744], function() {
            return e(e.s = 36815)
        }), _N_E = e.O()
    }
]);
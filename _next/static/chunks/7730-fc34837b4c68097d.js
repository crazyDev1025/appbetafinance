(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7730], {
        97617: function(e, t, n) {
            "use strict";
            n.d(t, {
                pv: function() {
                    return T
                },
                ZP: function() {
                    return E
                },
                _S: function() {
                    return C
                }
            });
            var r = n(57437),
                a = n(56069),
                s = n(88490),
                l = n.n(s),
                o = n(21774),
                i = n.n(o),
                c = n(16691),
                d = n.n(c),
                u = n(61396),
                m = n.n(u),
                x = {
                    src: "/_next/static/media/deposit-failed.7352976c.png",
                    height: 408,
                    width: 905,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEVMaXFaSEmZenNfR0h0cXJ0VlZxSkpwWFg8LS9CMDEgJSVFNzczKCpBLS730uRUAAAADXRSTlMA+hS+Xt9wIHH6L4t9qzAr1wAAAAlwSFlzAAAhOAAAITgBRZYxYAAAACZJREFUeJwVx7cRACAQBLG9t9j+22VQJiKsygAp0xuYV74Aztj/PAhEAHkWNXlxAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                },
                f = n(48756),
                h = n(82332),
                g = n(23342),
                b = n(61692),
                p = n(75959),
                v = n(26347);
            let y = e => {
                switch (e) {
                    case h.O.DEPOSIT:
                        return "Deposited";
                    case h.O.WITHDRAW:
                        return "Withdrew";
                    case h.O.BORROW:
                        return "Borrowed";
                    case h.O.REPAY:
                        return "Repaid";
                    default:
                        return null
                }
            };

            function j(e) {
                let {
                    isOpen: t,
                    tab: n,
                    amount: a,
                    assetName: s,
                    txHash: o,
                    onClose: c
                } = e, u = (0, f.xx)();
                return (0, r.jsx)(v.Z, {
                    open: t,
                    contentProps: {
                        className: "p-6 sm:min-h-[310px] sm:min-w-[560px] !rounded-2xl",
                        onPointerDownOutside: () => {
                            c()
                        }
                    },
                    onClose: c,
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-4",
                        children: [(0, r.jsx)(d(), {
                            alt: "$arrow-forward-outline-icon",
                            className: "relative left-[65px]",
                            height: 136,
                            src: x,
                            width: 302
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-3",
                            children: [(0, r.jsxs)("p", {
                                className: "text-[20px] font-bold text-gray-40",
                                children: [i()(n), " Failed!"]
                            }), (0, r.jsxs)("p", {
                                className: "text-center text-[14px] font-normal text-gray-400",
                                children: [y(n), " ", (0, r.jsxs)("span", {
                                    className: "font-medium",
                                    children: [(0, g.u)(Number(a)), " ", l()(s)]
                                }), " ", "Failed. Please try again."]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex w-full flex-col items-center justify-center gap-3",
                            children: [(0, r.jsx)(b.Z, {
                                className: "w-full border-secondary-900 text-sm font-bold text-secondary-900 hover:bg-secondary-50",
                                intent: "secondary",
                                label: "Try Again",
                                onClick: c
                            }), (0, r.jsxs)(m(), {
                                className: "flex items-center justify-center gap-1 text-xs font-medium text-gray-400 hover:underline",
                                href: C(u, o),
                                target: "_blank",
                                children: ["View Details ", (0, r.jsx)(p.Z, {
                                    name: "arrow-up-right",
                                    size: 12
                                })]
                            })]
                        })]
                    })
                })
            }
            var w = n(24033),
                N = {
                    src: "/_next/static/media/success.139b89da.png",
                    height: 408,
                    width: 905,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEVMaXE7eDshmSNEWUVQi1BFwEkbmSB7kXtsiW9IaktBADU9p0ElUyUomipOhFA+s0EZth0lxymqqgltAAAAEHRSTlMAzvu3I+FuFmFzK/d6i+r8vUR99gAAAAlwSFlzAAAhOAAAITgBRZYxYAAAAChJREFUeJwVx0kSABAMAMERZLH7/2eVvjXuFmFA33XlAsi5qQEMnf88Dr4AtsbdwSoAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                };
            let A = e => {
                    switch (e) {
                        case h.O.DEPOSIT:
                            return "Deposited";
                        case h.O.WITHDRAW:
                            return "Withdrew";
                        case h.O.BORROW:
                            return "Borrowed";
                        case h.O.REPAY:
                            return "Repaid";
                        default:
                            return null
                    }
                },
                k = (e, t, n, a) => {
                    switch (e) {
                        case h.O.DEPOSIT:
                            if (void 0 === t || a) return null;
                            return (0, r.jsxs)(r.Fragment, {
                                children: ["into\xa0", (0, r.jsx)("span", {
                                    className: "font-medium",
                                    children: T[t]
                                })]
                            });
                        case h.O.WITHDRAW:
                            if (void 0 === t || a) return null;
                            return (0, r.jsxs)(r.Fragment, {
                                children: ["from\xa0", (0, r.jsx)("span", {
                                    className: "font-medium",
                                    children: T[t]
                                })]
                            });
                        case h.O.BORROW:
                            return (0, r.jsxs)(r.Fragment, {
                                children: ["into\xa0", (0, r.jsx)("span", {
                                    className: "font-medium",
                                    children: n
                                })]
                            });
                        default:
                            return null
                    }
                };

            function S(e) {
                let {
                    isOpen: t,
                    tab: n,
                    amount: a,
                    assetName: s,
                    trancheLevel: l,
                    txHash: o,
                    subaccountName: c,
                    isIsolated: u,
                    onClose: x
                } = e, h = (0, w.useRouter)(), y = (0, f.xx)();
                return (0, r.jsx)(v.Z, {
                    open: t,
                    contentProps: {
                        className: "p-6 sm:min-h-[310px] sm:min-w-[560px] !rounded-2xl",
                        onPointerDownOutside: () => {
                            x()
                        }
                    },
                    onClose: x,
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-4",
                        children: [(0, r.jsx)(d(), {
                            alt: "success-image",
                            className: "relative left-[65px]",
                            height: 136,
                            src: N,
                            width: 302
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-3",
                            children: [(0, r.jsxs)("p", {
                                className: "text-[20px] font-bold text-gray-40",
                                children: [i()(n), " Successful!"]
                            }), (0, r.jsxs)("p", {
                                className: "text-center text-[14px] font-normal text-gray-400",
                                children: [A(n), " ", (0, r.jsxs)("span", {
                                    className: "font-medium",
                                    children: [(0, g.u)(Number(a)), " ", s]
                                }), " ", k(n, l, c, u)]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex w-full flex-col items-center justify-center gap-3",
                            children: [(0, r.jsx)(b.Z, {
                                className: "w-full text-sm font-bold",
                                intent: "secondary",
                                label: "Go to Portfolio",
                                onClick: () => h.push("/account")
                            }), (0, r.jsxs)(m(), {
                                className: "flex items-center justify-center gap-1 text-xs font-medium text-gray-400 hover:underline",
                                href: C(y, o),
                                target: "_blank",
                                children: ["View Details ", (0, r.jsx)(p.Z, {
                                    name: "arrow-up-right",
                                    size: 12
                                })]
                            })]
                        })]
                    })
                })
            }

            function C(e, t) {
                var n, r;
                return t ? "".concat(null === (r = a.G[e]) || void 0 === r ? void 0 : null === (n = r.chain.blockExplorers) || void 0 === n ? void 0 : n.default.url, "/tx/").concat(t) : ""
            }
            let T = {
                0: "Low Risk Pool",
                1: "Medium Risk Pool",
                2: "High Risk Pool"
            };

            function E(e) {
                let {
                    tab: t,
                    isOpen: n,
                    isSuccess: a,
                    isIsolated: s,
                    amount: l,
                    assetName: o,
                    trancheLevel: i,
                    subaccountName: c,
                    txHash: d,
                    onClose: u
                } = e;
                return a ? (0, r.jsx)(S, {
                    amount: l,
                    assetName: o,
                    isIsolated: s,
                    isOpen: n,
                    subaccountName: c,
                    tab: t,
                    trancheLevel: i,
                    txHash: d,
                    onClose: u
                }) : (0, r.jsx)(j, {
                    amount: l,
                    assetName: o,
                    isOpen: n,
                    tab: t,
                    txHash: d,
                    onClose: u
                })
            }
        },
        82332: function(e, t, n) {
            "use strict";
            var r, a, s, l;
            n.d(t, {
                O: function() {
                    return r
                }
            }), (s = r || (r = {})).DEPOSIT = "deposit", s.WITHDRAW = "withdraw", s.BORROW = "borrow", s.REPAY = "repay", (l = a || (a = {})).APPROVE = "approve", l.ENTER_MARKET = "enter-market", l.SUBMIT = "submit"
        },
        80929: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return ["/action/".concat(e), t].join("/")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        64485: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return i
                }
            });
            var r = n(57437),
                a = n(82256),
                s = n(48756),
                l = n(61692),
                o = n(5908);

            function i() {
                let {
                    address: e
                } = (0, s.mA)(), t = (0, o.Z)();
                return (0, r.jsx)(a.NL.Custom, {
                    children: n => {
                        let {
                            openConnectModal: a
                        } = n;
                        return (0, r.jsx)(l.Z, {
                            label: "Connect Wallet",
                            onClick: () => {
                                e ? t() : a()
                            }
                        })
                    }
                })
            }
        },
        5908: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(48756),
                a = n(51328).Buffer,
                s = n(50646),
                l = n(20426);

            function o() {
                let {
                    address: e
                } = (0, r.mA)(), {
                    signMessageAsync: t
                } = (0, r.QW)();
                return async () => {
                    if (!e) throw Error("No address");
                    let n = l.Z.uncheckedFrom(e),
                        r = (0, s.Lf)(n);
                    if (r) return r;
                    let o = Date.now(),
                        i = await t({
                            message: "By signing this message and using our website, you agree that you are the authorized account holder or authority of address 0x".concat(n, " and you are authorizing the login request to the website (https://app.betafinance.org). By using our website, you agree to our Terms of Service (https://betafinance.org/terms) and Privacy Policy (https://betafinance.org/privacy) and are affirming you have reviewed the entirety of the contents of these documents. We encourage you to read these documents to understand how we manage your data and your rights as a user.\n\nDate: ").concat(new Date(o).toISOString())
                        }),
                        c = function(e, t, n) {
                            let r = JSON.stringify({
                                address: e.value,
                                timestamp: t,
                                signature: n
                            });
                            return a.from(r, "ascii").toString("base64")
                        }(n, o, i);
                    return (0, s.Tb)(n, c), c
                }
            }
        },
        32349: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(64626),
                a = n(66358),
                s = n(25427),
                l = n(68225);

            function o(e) {
                let {
                    subaccount: t,
                    oracles: n,
                    markets: o,
                    marketConfiguration: i,
                    modeConfiguration: c
                } = e;
                if (!t) return;
                let d = (0, r.Z)(0),
                    u = (0, r.Z)(0),
                    m = (0, r.Z)(0),
                    x = (0, r.Z)(0),
                    f = (0, r.Z)(0),
                    h = (0, r.Z)(0),
                    g = (0, r.Z)(0),
                    b = Object.entries(t.markets),
                    p = null == t ? void 0 : t.mode;
                if (!p) return;
                let v = t.enteredMarkets.map(e => e.toLowerCase());
                for (let [e, I] of b) {
                    var y, j, w, N, A, k, S, C, T, E, Z, R;
                    if (!I) return;
                    let b = i[e];
                    if (!b) {
                        console.warn("Unknown market", e);
                        return
                    }
                    let _ = n ? null === (y = n[b.underlying]) || void 0 === y ? void 0 : y.price : void 0,
                        O = o ? o[e] : void 0;
                    if (!_ || !O) return;
                    let D = (null !== (k = null == t ? void 0 : t.isolatedCollateral) && void 0 !== k ? k : s.r_) !== s.r_,
                        F = !!D || v.includes(e),
                        B = F ? p === s.zi.STABLECOIN || p === s.zi.ETH_CORRELATED ? null !== (S = null === (j = c[p]) || void 0 === j ? void 0 : j.collateralFactor.multipliedBy(l.jF)) && void 0 !== S ? S : (0, r.Z)(0) : b.collateralFactor.multipliedBy(l.jF) : (0, r.Z)(0),
                        M = p === s.zi.STABLECOIN || p === s.zi.ETH_CORRELATED ? null !== (C = null === (w = c[p]) || void 0 === w ? void 0 : w.collateralFactor.multipliedBy(l.jF)) && void 0 !== C ? C : (0, r.Z)(0) : b.collateralFactor.multipliedBy(l.jF),
                        L = F ? p === s.zi.STABLECOIN || p === s.zi.ETH_CORRELATED ? null !== (T = null === (N = c[p]) || void 0 === N ? void 0 : N.borrowFactor.multipliedBy(l.jF)) && void 0 !== T ? T : (0, r.Z)(0) : b.borrowFactor.multipliedBy(l.jF) : (0, r.Z)(0),
                        P = (0, a.Z)(O),
                        z = (1 + Number(null !== (E = null === (A = O[t.trancheLevel]) || void 0 === A ? void 0 : A.interestRate) && void 0 !== E ? E : 0) / 1e9 / 365) ** 365 - 1;
                    for (let [e, t] of Object.entries(I.positionForTranche)) {
                        let n = (0, r.Z)(t.depositAmount ? t.depositAmount.toString() : 0).multipliedBy((0, r.Z)(_.toString())).dividedBy((0, r.Z)(b.underlyingDecimals.toString()));
                        d = d.plus(n);
                        let a = (0, r.Z)(t.borrowAmount.toString()).multipliedBy((0, r.Z)(_.toString())).dividedBy((0, r.Z)(b.underlyingDecimals.toString()));
                        x = x.plus(a), u = u.plus(n.multipliedBy(B).dividedBy(l.jF)), m = m.plus(n.multipliedBy(M).dividedBy(l.jF)), L.gt(0) && (f = f.plus(a.multipliedBy(l.jF).dividedBy(L)));
                        let s = null !== (R = null === (Z = P[+e]) || void 0 === Z ? void 0 : Z.depositAPY) && void 0 !== R ? R : 0;
                        h = h.plus(n.multipliedBy(s)).integerValue(r.Z.ROUND_FLOOR), g = g.plus(a.multipliedBy(z).integerValue(r.Z.ROUND_CEIL))
                    }
                }
                let I = u.dividedBy(f);
                return {
                    totalDeposits: d,
                    totalBorrows: x,
                    totalCollateralValue: u.dividedBy(l.oy),
                    totalBorrowValue: f.dividedBy(l.oy),
                    totalCollateralValueWithoutDiv: u,
                    rawTotalCollateralValueWithoutDiv: m,
                    totalBorrowValueWithoutDiv: f,
                    healthFactor: I,
                    totalDepositInterestAmount: h,
                    totalBorrowInterestAmount: g
                }
            }
        },
        68225: function(e, t, n) {
            "use strict";
            n.d(t, {
                dl: function() {
                    return l
                },
                jF: function() {
                    return a
                },
                oy: function() {
                    return s
                }
            });
            var r = n(64626);
            (0, r.Z)(96e4);
            let a = (0, r.Z)(1e6),
                s = (0, r.Z)(1e18),
                l = (0, r.Z)(1.12)
        },
        59049: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return s
                }
            });
            var r = n(57437),
                a = n(23353);
            let s = e => {
                let {
                    expirationTimestamp: t
                } = e;
                return (0, a.Bw)(t) ? "Token Expired" : (0, r.jsxs)("span", {
                    children: ["Expires in", " ", (0, r.jsxs)("span", {
                        className: "font-medium",
                        children: [function(e) {
                            if (void 0 === e) return null;
                            let t = new Date().getTime();
                            return Math.round((e - t) / 1e3 / 86400)
                        }(t), " days"]
                    })]
                })
            }
        },
        83678: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return o
                }
            });
            var r = n(57437),
                a = n(6498),
                s = n(75959),
                l = n(65730);
            let o = e => {
                let {
                    className: t,
                    value: n
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, l.cn)("font-medium leading-none", !n && "text-white", n && n.gte(a.Ex) && "text-primary-900", n && n.gt(a.AK) && n.lt(a.Ex) && "text-tertiary-900", n && n.lte(a.AK) && "text-secondary-900", t),
                    children: null === n || (null == n ? void 0 : n.isNaN()) ? "-" : (0, r.jsx)(r.Fragment, {
                        children: !(null == n ? void 0 : n.isFinite()) || n && n.gt(100) ? (0, r.jsx)(s.Z, {
                            className: "h-[14px] w-[14px]",
                            name: "infinity",
                            size: 16
                        }) : n.eq(0) ? 0 : n.toFormat(2)
                    })
                })
            }
        },
        46975: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return s
                }
            });
            var r = n(57437),
                a = n(75959);
            let s = e => {
                let {
                    liquidation: t
                } = e;
                switch (t) {
                    case "high":
                        return (0, r.jsxs)("div", {
                            className: "flex gap-1",
                            children: [(0, r.jsx)(a.Z, {
                                name: "warning-triangle",
                                size: 12
                            }), (0, r.jsx)("span", {
                                className: "font-medium",
                                children: "Liquidatable"
                            })]
                        });
                    case "medium":
                        return (0, r.jsxs)("div", {
                            className: "flex gap-1",
                            children: [(0, r.jsx)(a.Z, {
                                name: "warning-triangle",
                                size: 12
                            }), (0, r.jsx)("span", {
                                className: "font-medium",
                                children: "Close to Liquidate"
                            })]
                        });
                    default:
                        return
                }
            }
        },
        52256: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(57437);
            let a = (e, t) => {
                try {
                    if (e < .01) return e.toFixed(t);
                    let n = Number(e.toFixed(t)).toLocaleString(void 0, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                    if ("NaN" === n) return "-";
                    return n
                } catch (e) {
                    return "-"
                }
            };
            var s = n(73229),
                l = n(75959),
                o = n(65730);

            function i(e) {
                let {
                    value: t,
                    positiveIcon: n,
                    negativeIcon: i,
                    prefix: c = "",
                    suffix: d = "",
                    className: u
                } = e, m = parseFloat(t.toFixed(2));
                return (0, r.jsxs)(s.Z, {
                    alignItems: "center",
                    className: (0, o.cn)("relative", 0 == m && "text-gray-400", m > 0 && "text-primary-900", m < 0 && "text-secondary-900", u),
                    flex: !0,
                    row: !0,
                    children: [c, 0 === m ? "" : m > 0 ? null != n ? n : (0, r.jsx)(l.Z, {
                        className: "absolute left-[2px] top-[-3px]",
                        name: "triangle-up",
                        size: 16
                    }) : null != i ? i : (0, r.jsx)(l.Z, {
                        className: "absolute left-[2px] top-[-3px]",
                        name: "triangle-down",
                        size: 16
                    }), (0, r.jsx)("span", {
                        className: (0, o.cn)(m && 0 !== m && (!n || !i) && "ml-3"),
                        children: a(Math.abs(t), 2)
                    }), d]
                })
            }
        },
        63244: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(57437),
                a = n(16691),
                s = n.n(a);

            function l(e) {
                let {
                    status: t
                } = e;
                switch (t) {
                    case "loading":
                        return (0, r.jsx)(s(), {
                            alt: "loading",
                            className: "animate-spin",
                            height: 120,
                            src: "/tx/loading.png",
                            width: 120
                        });
                    case "failed":
                        return (0, r.jsx)(s(), {
                            alt: "failed",
                            height: 129,
                            src: "/tx/failed.png",
                            width: 143
                        });
                    case "success":
                        return (0, r.jsx)(s(), {
                            alt: "sucess",
                            height: 120,
                            src: "/tx/approve-success.png",
                            width: 120
                        });
                    default:
                        return null
                }
            }
        },
        6473: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return r
                }
            });
            let r = e => {
                switch (e) {
                    case "expired":
                        return "border-gray-400";
                    case "high":
                        return "border-error-red";
                    case "medium":
                        return "border-error-orange";
                    case "low":
                        return "border-error-yellow";
                    default:
                        return
                }
            }
        },
        27562: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return r
                }
            });
            let r = e => {
                switch (e) {
                    case "high":
                        return "border-secondary-900 bg-[#1A0000] bg-opacity-50";
                    case "medium":
                        return "border-error-yellow";
                    default:
                        return
                }
            }
        },
        87748: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return i
                },
                Lt: function() {
                    return c
                },
                Sv: function() {
                    return l
                },
                _d: function() {
                    return o
                },
                jv: function() {
                    return s
                },
                kG: function() {
                    return r
                },
                nn: function() {
                    return a
                }
            });
            let r = {
                    NET_DEPOSIT_APY: "The weighted net of APY for all deposited assets across all subaccounts. APRs are dynamic and fluctuate over time.",
                    NET_BORROW_APY: "The weighted net of APY for all borrowed assets across all subaccounts. APRs are dynamic and fluctuate over time."
                },
                a = {
                    COLLATERAL_VALUE: "The total amount of your assets denominated in USD that can be used as collateral for borrowing assets.",
                    APY: "The weighted net of APY for all deposited assets. APRs are dynamic and fluctuate over time.",
                    MODE: '"Mode" specifies the assets that a subaccount can utilize for deposits and borrowing to optimize capital efficiency and risk management. <br/><br/><a href="" target="_blank">Learn more about Mode</a>',
                    TRANCHE: 'Risk Pools indicate the risk level of the collateral tied to your deposit. By selecting a higher Risk Pool, you agree to lend to riskier assets, potentially earning higher interests in return. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/glossary#risk-pool" target="_blank">Learn more about Risk Pool</a>',
                    RISK_GRADE: 'Risk Grade is determined by the risk associated with the collateral deposited in a subaccount. The Risk Grade of the collateral will impact the borrowing APY. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/glossary#risk-grade" target="_blank">Learn more about Risk Grade</a>'
                },
                s = {
                    COLLATERAL_TYPE: 'Assets marked as “Isolated” can only do isolated collateralization and not in subaccounts with other assets for risk management purpose. On the other hand, tokens marked as "Cross" have the flexibility to be used with other "Cross" tokens in a subaccount for cross collateralization.',
                    TRANCHE_LEGEND: "The 3 risk pools indicate the collateral risk that will be associated with each deposit, while the legend provides information about the assets included in each risk level.",
                    SUPPLY_CAP_REACHED: "The supply cap for this asset has been reached. Only borrows are available at the moment.",
                    BORROW_CAP_REACHED: "The borrow cap for this asset has been reached. Only deposits are available at the moment."
                },
                l = {
                    EMODE: 'E-mode (Efficiency Mode) enhances borrowing power for correlated assets. Activating E-mode limits the range of assets that can be used in this subaccount. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/borrow/e-mode" target="_blank">Discover more about E-mode</a>',
                    COLLATERALIZED: "Collateralizing your assets enables you to use your deposits as collateral for borrowing."
                },
                o = {
                    TOTAL_POINTS: "Combine points from both deposit and borrowing activities. Each lending point is equal to one borrowing point.",
                    DEPOSIT_POINTS: "Points garnered from deposits.",
                    BORROW_POINTS: "Points accrued through borrowing activities."
                },
                i = {
                    RISK_POOL_RISK_GRADE: "Borrowing with collateral of varying risk grades or depositing into different risk pools results in distinct borrow and deposit APYs."
                },
                c = {
                    LOCK_PERIOD: "Time of BETA locked since first staked",
                    COOLDOWN_PERIOD: '<b>You’re now in the Cooldown Period.</b> After 5 days of cooldown, you will enter unstake window of 2 days. You will continue receiving rewards during cooldown and unstake window. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/borrow/e-mode" target="_blank">Learn more</a>',
                    UNSTAKE_PERIOD: "<b>You’re now in the Unstake Window.</b> You have 2 days to unstake. If you don’t unstake within 2 days of unstake window, you will need to activate cooldown process again.’"
                }
        },
        12586: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return s
                }
            });
            var r = n(48756),
                a = n(18187);

            function s(e, t) {
                let n = (0, r.xx)();
                return (0, r.GG)({
                    address: a.iX[n],
                    abi: a.Hc,
                    functionName: "enterIsolatedMarket",
                    args: [e, t]
                })
            }
        },
        6536: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return s
                }
            });
            var r = n(48756),
                a = n(18187);

            function s(e, t) {
                let n = (0, r.xx)();
                return (0, r.GG)({
                    address: a.iX[n],
                    abi: a.Hc,
                    functionName: "enterMarkets",
                    args: [e, t]
                })
            }
        },
        6747: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(4691);

            function a(e) {
                return r.wb[e]
            }
        },
        8975: function(e, t, n) {
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
                    marketAddresses: n,
                    marketAddressesNoBorrow: a,
                    ignoreCache: s,
                    refetchInterval: l,
                    enabled: o = !0
                } = e;
                return r.Z.market.getMarketOverview.useQuery(["market-overview"], {
                    headers: {
                        "cache-control": s ? "no-cache" : void 0
                    },
                    query: {
                        chainId: t,
                        marketAddresses: n,
                        marketAddressesNoBorrow: a
                    }
                }, {
                    enabled: o && (n.length > 0 || a.length > 0),
                    refetchInterval: null != l ? l : 0
                })
            }
        },
        72857: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(64626),
                a = n(64639),
                s = n(99496),
                l = n(77647),
                o = n(24994),
                i = n(6490);
            let c = {
                [o.R.id]: {
                    stablecoin: {
                        collateralFactor: (0, r.Z)(.975),
                        borrowFactor: (0, r.Z)(.975),
                        modeMarketCount: (0, r.Z)(3),
                        modeTranche: 0,
                        expirationTimestamp: (0, r.Z)(a.zL.toString()),
                        markets: ["0x2124dc71859fb57687c18651ddbe2b6200f61296", "0x6a1c08df7fc23bda6937c2c586bc857d82005c2c", "0x3562d6e1820401df802ff67d130e7478fba7448f"],
                        logoSrcs: ["/assets/usdc.svg", "/assets/usdt.svg", "/assets/dai.svg"]
                    },
                    "eth-correlated": {
                        collateralFactor: (0, r.Z)(.965),
                        borrowFactor: (0, r.Z)(.965),
                        modeMarketCount: (0, r.Z)(2),
                        modeTranche: 0,
                        expirationTimestamp: (0, r.Z)(a.zL.toString()),
                        markets: ["0x48dd663c0eafb50d7e7da84e465e99ac147784c9", "0x5df32bb456cc2d1e2de64b932fc7b05bd9351555"],
                        logoSrcs: ["/assets/weth.svg", "/assets/wsteth.svg"]
                    }
                },
                [i.F.id]: {
                    stablecoin: {
                        collateralFactor: (0, r.Z)(.97),
                        borrowFactor: (0, r.Z)(.97),
                        modeMarketCount: (0, r.Z)(2),
                        modeTranche: 0,
                        expirationTimestamp: (0, r.Z)(a.zL.toString()),
                        markets: ["0xbf84cc279f25d3e42c16c6a128353e2e9f6b19e4", "0x2a961f65ccd7546a3206b6096f29ed44da04eca0"],
                        logoSrcs: ["/assets/usdc.svg", "/assets/usdt.svg"]
                    },
                    "eth-correlated": {
                        collateralFactor: (0, r.Z)(.95),
                        borrowFactor: (0, r.Z)(.95),
                        modeMarketCount: (0, r.Z)(0),
                        modeTranche: 0,
                        expirationTimestamp: (0, r.Z)(a.zL.toString()),
                        markets: ["0xc18bc8bc03eabc9fcfa2e7e8fd9928d46260afbe", "0xe1d54945ac1a67ac4fcf6c9f4def0966fe91b6f7"],
                        logoSrcs: ["/assets/weth.svg", "/assets/wsteth.svg"]
                    }
                },
                [s.e.id]: {
                    stablecoin: {
                        collateralFactor: (0, r.Z)(.975),
                        borrowFactor: (0, r.Z)(.975),
                        modeMarketCount: (0, r.Z)(2),
                        modeTranche: 0,
                        expirationTimestamp: (0, r.Z)(a.zL.toString()),
                        markets: ["0x122ffc0c5ff637e4f0e804d2e2af90541dad513e", "0x7ceac61ca6c29af40a776d97532a1f6932eb0bc9"],
                        logoSrcs: ["/assets/usdc.svg", "/assets/usdt.svg"]
                    },
                    "eth-correlated": {
                        collateralFactor: (0, r.Z)(.95),
                        borrowFactor: (0, r.Z)(.95),
                        modeMarketCount: (0, r.Z)(0),
                        modeTranche: 0,
                        expirationTimestamp: (0, r.Z)(a.zL.toString()),
                        markets: [],
                        logoSrcs: []
                    }
                },
                [l.y.id]: {
                    stablecoin: {
                        collateralFactor: (0, r.Z)(.975),
                        borrowFactor: (0, r.Z)(.975),
                        modeMarketCount: (0, r.Z)(2),
                        modeTranche: 0,
                        expirationTimestamp: (0, r.Z)(a.zL.toString()),
                        markets: ["0x42a44d1738c41b4bbfe643dd6b0e02e9e105d9f4", "0x8c6ca8b970f5c778445345983ecf9f6ae1a6890e"],
                        logoSrcs: ["/assets/usdc.svg", "/assets/usdt.svg"]
                    },
                    "eth-correlated": {
                        collateralFactor: (0, r.Z)(.95),
                        borrowFactor: (0, r.Z)(.95),
                        modeMarketCount: (0, r.Z)(0),
                        modeTranche: 0,
                        expirationTimestamp: (0, r.Z)(a.zL.toString()),
                        markets: [],
                        logoSrcs: []
                    }
                }
            };

            function d(e) {
                return c[e]
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
                    enabled: l = !0
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
                    enabled: l && n.length > 0,
                    refetchInterval: a
                })
            }
        },
        51681: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(2265),
                a = n(64626),
                s = n(66358),
                l = n(58824);

            function o(e) {
                let {
                    subaccount: t,
                    oracles: n,
                    markets: o,
                    marketConfiguration: i
                } = e, c = (0, r.useMemo)(() => {
                    if (t) return Object.entries(t.markets).map(e => {
                        var t, r, l, c, d, u;
                        let [m, x] = e, f = i[m];
                        if (!f) return console.warn("Unknown market", m), null;
                        let h = n ? null === (t = n[f.underlying]) || void 0 === t ? void 0 : t.price : void 0,
                            g = n ? null === (r = n[f.underlying]) || void 0 === r ? void 0 : r.lastPrice : void 0,
                            b = o ? o[m] : o;
                        if (!b) return null;
                        let p = h ? (0, a.Z)(h.toString()) : null,
                            v = g ? (0, a.Z)(g.toString()) : null,
                            y = p && v ? p.dividedBy(v).minus(1).multipliedBy(100) : null,
                            j = (0, s.Z)(b),
                            w = (0, a.Z)(0),
                            N = [],
                            A = (0, a.Z)(0);
                        if (!x) return null;
                        for (let [e, t] of Object.entries(x.positionForTranche)) {
                            let n = (0, a.Z)((null == t ? void 0 : t.depositAmount) ? t.depositAmount.toString() : 0);
                            w = w.plus(n);
                            let r = o ? (0, a.Z)(((null === (u = o[m]) || void 0 === u ? void 0 : null === (d = u[Number(e)]) || void 0 === d ? void 0 : d.totalDeposit) || 0).toString()) : null,
                                s = j[+e].depositAPY;
                            A = A.plus(n.multipliedBy(s).integerValue(a.Z.ROUND_FLOOR)), N.push({
                                balance: n,
                                balanceUsdValue: p ? n.multipliedBy(p).dividedBy((0, a.Z)(1e18)) : null,
                                balanceUsdValueChange: y ? n.multipliedBy(y).dividedBy(1e18).toNumber() : null,
                                apy: s,
                                collateralFactor: f.collateralFactor.multipliedBy(100),
                                underlyingDecimals: f.underlyingDecimals,
                                price: p || null,
                                priceChange: y ? y.toNumber() : null,
                                totalMarketDeposit: r,
                                totalMarketDepositUsd: r && p ? r.multipliedBy(p).dividedBy((0, a.Z)(1e18)) : null,
                                trancheLevel: Number(e),
                                ...t
                            })
                        }
                        if (w.isZero()) return null;
                        1 == N.length && (N = []);
                        let k = p ? w.multipliedBy(p).dividedBy(1e18) : null,
                            S = y ? w.multipliedBy(y).dividedBy(1e18) : null,
                            C = w.eq(0) ? null : Number(A) / Number(w),
                            T = o ? (0, a.Z)(((null === (c = o[m]) || void 0 === c ? void 0 : null === (l = c[0]) || void 0 === l ? void 0 : l.cumulativeTotalDeposit) || 0).toString()) : null,
                            E = p && T ? T.multipliedBy(p).dividedBy(1e18) : null,
                            Z = {
                                tokenAddress: f.oTokenAddress,
                                tokenSymbol: f.tokenSymbol,
                                tokenName: f.tokenName,
                                tokenImage: f.logoSrc,
                                balance: w,
                                balanceUsdValue: k,
                                balanceUsdValueChange: S ? S.toNumber() : null,
                                apy: C,
                                price: p,
                                priceChange: y ? y.toNumber() : null,
                                totalMarketDeposit: T,
                                totalMarketDepositUsd: E,
                                tranches: x.positionForTranche,
                                subRows: N,
                                collateralFactor: f.collateralFactor.multipliedBy(100),
                                underlyingDecimals: f.underlyingDecimals,
                                isCapReached: !!T && T.gte(f.depositCap)
                            };
                        return Z
                    }).filter(l._)
                }, [t, i, n, o]);
                return c
            }
        },
        10933: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(2265),
                a = n(64626),
                s = n(66358),
                l = n(25427),
                o = n(58824);

            function i(e) {
                let {
                    subaccount: t,
                    oracles: n,
                    markets: i,
                    marketConfiguration: c
                } = e, d = (0, r.useMemo)(() => {
                    if (t) return Object.entries(t.markets).map(e => {
                        var r, o, d, u;
                        let [m, x] = e, f = c[m];
                        if (!f) return console.warn("Unknown market", m), null;
                        if (t.mode == l.zi.ISOLATED && !f.isIsolatedCollateral) return null;
                        let h = n ? null === (r = n[f.underlying]) || void 0 === r ? void 0 : r.price : void 0,
                            g = n ? null === (o = n[f.underlying]) || void 0 === o ? void 0 : o.lastPrice : void 0,
                            b = i ? i[m] : void 0;
                        if (!b) return null;
                        let p = h ? (0, a.Z)(h.toString()) : null,
                            v = g ? (0, a.Z)(g.toString()) : null,
                            y = p && v ? p.dividedBy(v).minus(1).multipliedBy(100) : null,
                            j = (0, s.Z)(b),
                            w = (0, a.Z)(0),
                            N = (0, a.Z)(0);
                        if (x)
                            for (let [e, t] of Object.entries(x.positionForTranche)) {
                                let n = (0, a.Z)(t.depositAmount ? t.depositAmount.toString() : 0);
                                w = w.plus(n);
                                let r = j[+e].depositAPY;
                                N = N.plus(n.multipliedBy(r).integerValue(a.Z.ROUND_FLOOR))
                            }
                        if (w.isZero()) return null;
                        let A = p ? w.multipliedBy(p).dividedBy(1e18) : null,
                            k = y ? w.multipliedBy(y).dividedBy(1e18) : null,
                            S = w.eq(0) ? null : Number(N) / Number(w),
                            C = i ? (0, a.Z)(((null === (u = i[m]) || void 0 === u ? void 0 : null === (d = u[0]) || void 0 === d ? void 0 : d.cumulativeTotalDeposit) || 0).toString()) : null,
                            T = {
                                tokenAddress: f.oTokenAddress,
                                tokenSymbol: f.tokenSymbol,
                                tokenName: f.tokenName,
                                tokenImage: f.logoSrc,
                                priceChange: y ? y.toNumber() : null,
                                balance: w,
                                balanceUsdValue: A,
                                balanceUsdValueChange: k ? k.toNumber() : null,
                                apy: S,
                                underlyingDecimals: f.underlyingDecimals,
                                isCapReached: !!C && C.gte(f.depositCap)
                            };
                        return T
                    }).filter(o._)
                }, [t, c, n, i]);
                return d
            }
        },
        18839: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(2265),
                a = n(64362),
                s = n(90501),
                l = n(53237);

            function o() {
                let e = (0, a.Z)(),
                    [t, n] = (0, s.bf)(e => [e.subaccountId, e.setSubaccountId]),
                    o = (0, s.an)(e => e.onChangeLastActiveSubAccId),
                    i = (0, r.useCallback)(e => {
                        n(e), e && o(e)
                    }, [o, n]),
                    c = (0, s.bf)(t => {
                        let n = null == e ? void 0 : e.addressId.value,
                            r = void 0 != n && t.subaccountInfos[n];
                        return !!r && 0 === Object.keys(r).length
                    }),
                    d = (0, s.bf)(t => {
                        var n, r, a, s, o;
                        let i = null == e ? void 0 : e.addressId.value;
                        if (!i || !t.subaccountInfos[i] || !t.accounts[i]) return;
                        if (null == t.subaccountId) return null;
                        let c = null !== (s = null === (n = t.subaccountInfos[i]) || void 0 === n ? void 0 : n.find(e => "".concat(e.id) === t.subaccountId)) && void 0 !== s ? s : null,
                            d = null !== (o = null === (a = t.accounts[i]) || void 0 === a ? void 0 : null === (r = a.subaccounts) || void 0 === r ? void 0 : r[t.subaccountId]) && void 0 !== o ? o : null;
                        return c ? (0, l.y)(c, d) : null
                    });
                return {
                    subaccountId: null != t && null === d ? null : t,
                    subaccount: d,
                    setSubaccountId: i,
                    isEmpty: c
                }
            }
        },
        99526: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(32349);

            function a(e) {
                let {
                    subaccount: t,
                    oracles: n,
                    markets: a,
                    marketConfiguration: s,
                    modeConfiguration: l
                } = e;
                if (!t) return {
                    totalDeposits: t,
                    totalBorrows: t,
                    totalCollateralValue: t,
                    totalCollateralValueWithoutDiv: t,
                    healthFactor: t,
                    totalDepositInterestAmount: t,
                    totalBorrowInterestAmount: t
                };
                if (0 === Object.keys(t.markets).length) return {
                    totalDeposits: null,
                    totalBorrows: null,
                    totalCollateralValue: null,
                    totalCollateralValueWithoutDiv: null,
                    healthFactor: null,
                    totalDepositInterestAmount: null,
                    totalBorrowInterestAmount: null
                };
                let o = (0, r.Z)({
                    subaccount: t,
                    oracles: n,
                    markets: a,
                    marketConfiguration: s,
                    modeConfiguration: l
                });
                return o || {
                    totalDeposits: null,
                    totalBorrows: null,
                    totalCollateralValue: null,
                    totalCollateralValueWithoutDiv: null,
                    healthFactor: null,
                    totalDepositInterestAmount: null,
                    totalBorrowInterestAmount: null
                }
            }
        },
        93687: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(64362),
                a = n(90501),
                s = n(53237),
                l = n(58824);

            function o() {
                let e = (0, r.Z)();
                return (0, a.bf)(t => {
                    var n, r, a;
                    if (!e || !(null == e ? void 0 : e.addressId) || !t.accounts) return;
                    let o = e.addressId.value,
                        i = null !== (r = t.subaccountInfos[o]) && void 0 !== r ? r : null,
                        c = null !== (a = null === (n = t.accounts[o]) || void 0 === n ? void 0 : n.subaccounts) && void 0 !== a ? a : null;
                    if (c && i) {
                        let e = i.map(e => {
                            var t;
                            let n = (0, s.y)(e, null !== (t = c["".concat(e.id)]) && void 0 !== t ? t : null);
                            return n ? [e.id, n] : null
                        }).filter(l._);
                        return Object.fromEntries(e)
                    }
                })
            }
        },
        15896: function(e, t, n) {
            "use strict";
            n.d(t, {
                JJ: function() {
                    return o
                },
                $w: function() {
                    return c
                },
                Gi: function() {
                    return d
                },
                yK: function() {
                    return u
                },
                lJ: function() {
                    return i
                }
            });
            var r = n(14241);
            n(4691);
            var a = n(30805),
                s = n(90501);
            async function l(e, t, n, r) {
                let s = await a.Z.account.getAccountMarketData.query({
                    headers: {
                        "cache-control": r ? "no-cache" : void 0
                    },
                    query: {
                        chainId: e,
                        userAddress: t,
                        subaccountIds: n
                    }
                });
                return s.body
            }
            let o = async (e, t, n) => {
                let l = await a.Z.user.createAccount.mutation({
                    query: {
                        chainId: e
                    },
                    body: n
                });
                if (201 === l.status) {
                    let e = l.body;
                    return s.bf.setState((0, r.Uy)(n => {
                        let r = n.subaccountInfos[t.value];
                        r ? r.push(e) : n.subaccountInfos[t.value] = [e], n.subaccountId = e.id.toString()
                    })), e.id
                }
            };
            async function i(e, t, n, l) {
                let o = await a.Z.account.rename.mutation({
                    query: {
                        chainId: e
                    },
                    params: {
                        id: n.toString()
                    },
                    body: {
                        name: l
                    }
                });
                200 === o.status && s.bf.setState((0, r.Uy)(e => {
                    var r;
                    let a = null === (r = e.subaccountInfos[t.value]) || void 0 === r ? void 0 : r.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === n
                    });
                    a && (a.name = l)
                }))
            }
            async function c(e, t, n) {
                let l = await a.Z.account.delete.mutation({
                    query: {
                        chainId: e
                    },
                    params: {
                        id: n.toString()
                    },
                    body: ""
                });
                200 === l.status && s.bf.setState((0, r.Uy)(e => {
                    if (e.subaccountInfos[t.value]) {
                        let r = e.subaccountInfos[t.value].findIndex(e => e.id === n); - 1 !== r && e.subaccountInfos[t.value].splice(r, 1)
                    }
                    e.accounts[t.value] && delete e.accounts[t.value].subaccounts["".concat(n)], e.subaccountId = null
                }))
            }
            async function d(e, t) {
                let n = await a.Z.user.getAccounts.query({
                    query: {
                        chainId: e
                    }
                });
                if (200 === n.status) s.bf.setState(e => ({
                    subaccountInfos: { ...e.subaccountInfos,
                        [t.value]: n.body.data
                    }
                }));
                else if (401 === n.status) s.bf.setState(e => ({
                    subaccountInfos: { ...e.subaccountInfos,
                        [t.value]: []
                    }
                }));
                else throw Error("Cannot get accounts")
            }
            let u = async (e, t, n, a) => {
                let o = await l(e, t.address, n, a);
                s.bf.setState((0, r.Uy)(e => {
                    void 0 == e.accounts[t.value] && (e.accounts[t.value] = {
                        subaccounts: {}
                    }), Object.entries(o.subaccounts).forEach(n => {
                        let [r, a] = n;
                        e.accounts[t.value].subaccounts[r] = a
                    })
                }))
            }
        },
        90501: function(e, t, n) {
            "use strict";
            n.d(t, {
                Wr: function() {
                    return l
                },
                an: function() {
                    return o
                },
                bf: function() {
                    return s
                }
            }), n(25427);
            var r = n(94660),
                a = n(74810);
            let s = (0, r.Ue)(e => ({
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
                l = (0, r.Ue)(e => ({
                    totalBetaStaked: 0,
                    updateTotalBetaStaked: t => e(() => ({
                        totalBetaStaked: t
                    }))
                })),
                o = (0, r.Ue)((0, a.tJ)(e => ({
                    lastActiveSubAccId: "",
                    onChangeLastActiveSubAccId: t => e({
                        lastActiveSubAccId: t
                    })
                }), {
                    version: .1,
                    name: "last-interacted-storage"
                }))
        },
        77372: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return eS
                }
            });
            var r = n(57437),
                a = n(2265),
                s = n(64362),
                l = n(18839),
                o = n(31590),
                i = n(75959),
                c = n(83509),
                d = n(89296),
                u = n(48756),
                m = n(25427),
                x = n(6747),
                f = n(15896),
                h = n(19249),
                g = n(27198),
                b = n(21082),
                p = n(88556),
                v = n(46341),
                y = n(37840),
                j = n(42884),
                w = n(29427),
                N = n(38671);
            let A = "Switch",
                [k, S] = (0, v.b)(A),
                [C, T] = k(A),
                E = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: n,
                        name: r,
                        checked: s,
                        defaultChecked: l,
                        required: o,
                        disabled: i,
                        value: c = "on",
                        onCheckedChange: d,
                        ...u
                    } = e, [m, x] = (0, a.useState)(null), f = (0, p.e)(t, e => x(e)), h = (0, a.useRef)(!1), v = !m || !!m.closest("form"), [j = !1, w] = (0, y.T)({
                        prop: s,
                        defaultProp: l,
                        onChange: d
                    });
                    return (0, a.createElement)(C, {
                        scope: n,
                        checked: j,
                        disabled: i
                    }, (0, a.createElement)(N.WV.button, (0, g.Z)({
                        type: "button",
                        role: "switch",
                        "aria-checked": j,
                        "aria-required": o,
                        "data-state": I(j),
                        "data-disabled": i ? "" : void 0,
                        disabled: i,
                        value: c
                    }, u, {
                        ref: f,
                        onClick: (0, b.M)(e.onClick, e => {
                            w(e => !e), v && (h.current = e.isPropagationStopped(), h.current || e.stopPropagation())
                        })
                    })), v && (0, a.createElement)(R, {
                        control: m,
                        bubbles: !h.current,
                        name: r,
                        value: c,
                        checked: j,
                        required: o,
                        disabled: i,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                Z = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: n,
                        ...r
                    } = e, s = T("SwitchThumb", n);
                    return (0, a.createElement)(N.WV.span, (0, g.Z)({
                        "data-state": I(s.checked),
                        "data-disabled": s.disabled ? "" : void 0
                    }, r, {
                        ref: t
                    }))
                }),
                R = e => {
                    let {
                        control: t,
                        checked: n,
                        bubbles: r = !0,
                        ...s
                    } = e, l = (0, a.useRef)(null), o = (0, j.D)(n), i = (0, w.t)(t);
                    return (0, a.useEffect)(() => {
                        let e = l.current,
                            t = window.HTMLInputElement.prototype,
                            a = Object.getOwnPropertyDescriptor(t, "checked"),
                            s = a.set;
                        if (o !== n && s) {
                            let t = new Event("click", {
                                bubbles: r
                            });
                            s.call(e, n), e.dispatchEvent(t)
                        }
                    }, [o, n, r]), (0, a.createElement)("input", (0, g.Z)({
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: n
                    }, s, {
                        tabIndex: -1,
                        ref: l,
                        style: { ...e.style,
                            ...i,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function I(e) {
                return e ? "checked" : "unchecked"
            }
            var _ = n(65730),
                O = n(97634),
                D = n.n(O);
            let F = a.forwardRef((e, t) => {
                let {
                    className: n,
                    ...a
                } = e;
                return delete a["data-state"], (0, r.jsx)(E, {
                    className: (0, _.cn)(D()["switch-root"], a.disabled && D().disabled, n),
                    ...a,
                    ref: t,
                    children: (0, r.jsx)(Z, {
                        className: D()["switch-thumb"]
                    })
                })
            });
            F.displayName = E.displayName;
            var B = n(64626),
                M = n(16691),
                L = n.n(M),
                P = n(4691),
                z = n(52256),
                U = n(18187);

            function H(e) {
                let t = (0, u.xx)();
                return (0, u.GG)({
                    address: U.iX[t],
                    abi: U.Hc,
                    functionName: "clearMarkets",
                    args: [e]
                })
            }
            var V = n(12586),
                G = n(6536),
                W = n(8975),
                K = n(72857),
                Y = n(6242),
                q = n(10933),
                J = n(99526),
                $ = n(38283),
                X = n(23353),
                Q = n(44094),
                ee = n(21247),
                et = n(61692),
                en = n(92224),
                er = n(78670),
                ea = n(20228),
                es = n(61396),
                el = n.n(es),
                eo = n(97617),
                ei = n(63244);

            function ec(e) {
                let {
                    hash: t,
                    initialError: n,
                    loadingContent: s,
                    successContent: l,
                    refetchSubaccountData: o,
                    onClose: i,
                    onSuccess: c,
                    onFailed: d
                } = e, [m, x] = (0, a.useState)("loading"), {
                    isError: f,
                    isLoading: g
                } = (0, u.BX)({
                    hash: t,
                    enabled: !!t
                }), [b, p] = (0, a.useState)(!1), v = (0, u.xx)(), {
                    titleText: y,
                    descText: j,
                    Image: w
                } = (0, a.useMemo)(() => {
                    switch (m) {
                        case "failed":
                            return {
                                titleText: "Sorry, Something Went Wrong :(",
                                descText: "Transaction Failed. Please try again."
                            };
                        case "success":
                            return {
                                titleText: (null == l ? void 0 : l.title) || "Success!",
                                descText: (null == l ? void 0 : l.description) || (0, r.jsxs)("div", {
                                    children: ["Your transaction was successful. ", (0, r.jsx)(el(), {
                                        className: "underline",
                                        href: (0, eo._S)(v, t),
                                        target: "_blank",
                                        children: "View on Etherscan"
                                    })]
                                }),
                                Image: null == l ? void 0 : l.Image
                            };
                        default:
                            return {
                                titleText: (null == s ? void 0 : s.title) || "Transaction Pending...",
                                descText: (null == s ? void 0 : s.description) || "Please wait for the transaction to process."
                            }
                    }
                }, [m, l, v, t, s]);
                return (0, a.useEffect)(() => {
                    b || (f || n ? (x("failed"), d && d(), p(!0)) : g || void 0 === t ? x("loading") : (x("success"), o(), c && c(), p(!0)))
                }, [f, g, t, n, b, o, d, c]), (0, r.jsx)(h.J5, {
                    className: "rounded-2xl p-6 sm:min-h-[310px] sm:min-w-[560px]",
                    showCloseIcon: "loading" !== m,
                    onClose: i,
                    onPointerDownOutside: e => {
                        if ("loading" === m) {
                            e.preventDefault();
                            return
                        }
                        i && i()
                    },
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-6",
                        children: [null != w ? w : (0, r.jsx)(ei.Z, {
                            status: m
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-3",
                            children: [(0, r.jsx)("div", {
                                className: "text-xl font-bold text-gray-40",
                                children: y
                            }), (0, r.jsx)("div", {
                                className: "whitespace-pre-line text-center text-sm font-normal text-gray-400",
                                children: j
                            })]
                        }), "loading" !== m && (0, r.jsxs)(h.GG, {
                            className: "w-full",
                            children: ["failed" === m && (0, r.jsx)(et.Z, {
                                className: "w-full",
                                intent: "secondary",
                                label: "Try Again",
                                danger: !0,
                                onClick: () => {
                                    i && i()
                                }
                            }), "success" === m && (0, r.jsx)(et.Z, {
                                className: "w-full",
                                intent: "secondary",
                                label: "Close",
                                onClick: () => {
                                    i && i()
                                }
                            })]
                        })]
                    })
                })
            }
            let ed = e => {
                    let {
                        marketInfo: t,
                        deposit: n,
                        onConfirm: a
                    } = e, s = (0, X.Xl)(null == t ? void 0 : t.expirationTimestamp), l = (0, Q.E)(s);
                    return (0, r.jsxs)(h.J5, {
                        className: "sm:max-w-[560px]",
                        children: [(0, r.jsxs)(h.fK, {
                            children: [(0, r.jsx)(h.$N, {
                                children: "Turn On Collateral With Expiration Date"
                            }), (0, r.jsx)(h.Be, {
                                children: "This asset has an expiration date. Collateral will be liquidated after the expiration date. Exit all borrow position before collateral expires or risk liquidation."
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, r.jsx)("div", {
                                className: "text-base font-bold text-gray-40",
                                children: "Collateral With Expiration Date."
                            }), (0, r.jsxs)("div", {
                                className: "grid grid-cols-2 rounded-lg border border-gray-600 p-4",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, r.jsx)(L(), {
                                        alt: n.tokenSymbol,
                                        height: 24,
                                        src: n.tokenImage,
                                        width: 24
                                    }), (0, r.jsx)(ea.Ac, {
                                        className: "ml-2",
                                        bold: !0,
                                        children: n.tokenSymbol
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "ml-2.5 flex w-fit flex-col items-end justify-center leading-4",
                                    children: [(0, r.jsx)(ea.tt, {
                                        className: "leading-none",
                                        children: (0, ee.d)(n.balance, {
                                            magnitude: (0, B.Z)(n.underlyingDecimals.toString())
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-0.5",
                                        children: [null != n.balanceUsdValue && null != n.balanceUsdValueChange && (0, r.jsx)(ea.HB, {
                                            className: "leading-snug",
                                            color: n.balanceUsdValueChange > 0 ? d.F1 : n.balanceUsdValueChange < 0 ? d.yg : d.r$.white,
                                            children: (0, ee.d)(n.balanceUsdValue, {
                                                magnitude: (0, B.Z)(n.underlyingDecimals.toString()),
                                                prefix: "$",
                                                isPrice: !0
                                            })
                                        }), null != n.priceChange && (0, r.jsx)(ea.HB, {
                                            className: "leading-snug",
                                            children: (0, r.jsx)(z.Z, {
                                                prefix: "(",
                                                suffix: "%)",
                                                value: n.priceChange
                                            })
                                        })]
                                    })]
                                })]
                            }), s && (0, r.jsx)(en.ZP, {
                                expiration: (0, en.au)(s),
                                intent: "warning",
                                label: (0, r.jsxs)("div", {
                                    children: ["Asset will expire on ", (0, r.jsx)("b", {
                                        children: l
                                    }), ".", " ", (0, r.jsx)("a", {
                                        className: "underline",
                                        href: "https://docs.betafinance.org/docs/getting-started/glossary#expiration-date",
                                        target: "_blank",
                                        children: "Learn More"
                                    })]
                                })
                            })]
                        }), (0, r.jsx)(h.cN, {
                            children: (0, r.jsx)(et.Z, {
                                className: "grow",
                                label: "Confirm",
                                onClick: a
                            })
                        })]
                    })
                },
                eu = e => {
                    var t, n, s, l;
                    let {
                        intent: o,
                        subaccount: c,
                        refetchSubaccountData: f
                    } = e, g = (0, u.xx)(), b = (0, x.Z)(g), p = (0, K.Z)(g), {
                        data: v
                    } = (0, Y.Z)({
                        chainId: g,
                        tokenAddresses: P.z6[g],
                        refetchInterval: 6e4
                    }), {
                        data: y
                    } = (0, W.Z)({
                        chainId: g,
                        marketAddresses: P.ri[g],
                        marketAddressesNoBorrow: P.uT[g],
                        refetchInterval: 6e4
                    }), j = (0, q.Z)({
                        subaccount: c,
                        oracles: null == v ? void 0 : null === (t = v.body) || void 0 === t ? void 0 : t.oracles,
                        markets: null == y ? void 0 : null === (n = y.body) || void 0 === n ? void 0 : n.markets,
                        marketConfiguration: b
                    }), {
                        totalDeposits: w,
                        totalBorrows: N
                    } = (0, J.Z)({
                        subaccount: c,
                        oracles: null == v ? void 0 : null === (s = v.body) || void 0 === s ? void 0 : s.oracles,
                        markets: null == y ? void 0 : null === (l = y.body) || void 0 === l ? void 0 : l.markets,
                        marketConfiguration: b,
                        modeConfiguration: p
                    }), A = (0, a.useMemo)(() => !N || !N.isZero(), [N]), k = (0, a.useMemo)(() => c.enteredMarkets.map(e => e.toLowerCase()), [c.enteredMarkets]), S = (0, a.useMemo)(() => {
                        let e = Object.keys(c.markets);
                        return e.filter(e => !k.includes(e))
                    }, [k, c.markets]), C = (0, a.useMemo)(() => {
                        var e;
                        let t = Object.keys(c.markets);
                        return null !== (e = t.find(e => b[e].isIsolatedCollateral)) && void 0 !== e ? e : m.r_
                    }, [b, c.markets]), T = (0, a.useMemo)(() => C != m.r_ && N && N.isZero(), [C, N]), E = BigInt(c.id), {
                        data: Z,
                        error: R,
                        write: I
                    } = (0, G.H)(E, S), {
                        data: _,
                        error: O,
                        write: D
                    } = (0, V.g)(E, C), {
                        data: F,
                        error: M,
                        write: z
                    } = H(E), [U, X] = (0, a.useState)(!1), [Q, ea] = (0, a.useState)(!1), es = () => {
                        X(!0), "TURN_ON" === o && (T ? D() : I()), "TURN_OFF" === o && z()
                    }, el = () => {
                        X(!1), ea(!1)
                    };
                    if (U && "TURN_ON" === o) return (0, r.jsx)(ec, {
                        refetchSubaccountData: f,
                        hash: T ? null == _ ? void 0 : _.hash : null == Z ? void 0 : Z.hash,
                        initialError: T ? !!(null == O ? void 0 : O.message) : !!(null == R ? void 0 : R.message),
                        loadingContent: {
                            title: "Turning On Collateral...",
                            description: "Please wait for the transaction to process."
                        },
                        successContent: {
                            title: "Turn On Collateral Successful",
                            description: "Turned on collateral for Subaccount “".concat(c.name, "”.\nYou can now proceed to add borrow."),
                            Image: (0, r.jsx)(L(), {
                                alt: "turn-on-collateral-success",
                                height: 132,
                                src: "/tx/turn-on-collateral-success.png",
                                width: 472
                            })
                        },
                        onClose: el,
                        onFailed: () => {
                            $.a.enterMarketFailed()
                        },
                        onSuccess: () => {
                            T ? $.a.enterIsolatedMarket() : $.a.enterMarkets()
                        }
                    });
                    if (U && "TURN_OFF" === o) return (0, r.jsx)(ec, {
                        hash: null == F ? void 0 : F.hash,
                        initialError: !!(null == M ? void 0 : M.message),
                        refetchSubaccountData: f,
                        loadingContent: {
                            title: "Turning Off Collateral...",
                            description: "Please wait for the transaction to process."
                        },
                        successContent: {
                            title: "Turn Off Collateral Successful",
                            description: "Turned off collateral for Subaccount “".concat(c.name, "”"),
                            Image: (0, r.jsx)(L(), {
                                alt: "turn-off-collateral-success",
                                height: 132,
                                src: "/tx/turn-off-collateral-success.png",
                                width: 472
                            })
                        },
                        onClose: el,
                        onFailed: () => {
                            $.a.clearMarketFailed()
                        },
                        onSuccess: () => {
                            $.a.clearMarkets()
                        }
                    });
                    if ("TURN_ON" === o && T && !Q) {
                        let e = b[C],
                            t = null == j ? void 0 : j.find(e => e.tokenAddress === C);
                        if (e && t) return (0, r.jsx)(ed, {
                            deposit: t,
                            marketInfo: e,
                            onConfirm: () => ea(!0)
                        })
                    }
                    return (0, r.jsxs)(h.J5, {
                        className: "sm:max-w-[540px]",
                        onClose: el,
                        onPointerDownOutside: el,
                        children: [(0, r.jsxs)(h.fK, {
                            children: ["TURN_ON" === o && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(h.$N, {
                                    children: "Turn On Collateral"
                                }), (0, r.jsx)(h.Be, {
                                    children: "This allows deposited assets in the account to be used as collateral for borrows."
                                })]
                            }), "TURN_OFF" === o && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(h.$N, {
                                    children: "Turn Off Collateral"
                                }), (0, r.jsx)(h.Be, {
                                    children: "This stops deposited assets in the account from being used as collateral for borrows."
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, r.jsx)("div", {
                                className: "text-base font-bold text-gray-40",
                                children: "Collateral Info."
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col gap-3 rounded-lg border border-gray-700 bg-[#26292D80]/[.5] p-4",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, r.jsxs)(em, {
                                        children: [(0, r.jsx)("span", {
                                            children: "Subaccount"
                                        }), (0, r.jsx)(i.Z, {
                                            color: d.r$.gray[400],
                                            name: "information-circle",
                                            size: 12
                                        }), (0, r.jsx)("span", {
                                            children: ":"
                                        })]
                                    }), (0, r.jsx)(ex, {
                                        children: c.name
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, r.jsxs)(em, {
                                        children: [(0, r.jsx)("span", {
                                            children: "Deposit Balance"
                                        }), (0, r.jsx)(i.Z, {
                                            color: d.r$.gray[400],
                                            name: "information-circle",
                                            size: 12
                                        }), (0, r.jsx)("span", {
                                            children: ":"
                                        })]
                                    }), (0, r.jsx)(ex, {
                                        children: void 0 === w ? (0, r.jsx)(er.Z, {
                                            height: 20
                                        }) : (0, r.jsx)(r.Fragment, {
                                            children: null === w || w.eq(0) ? "-" : (0, ee.d)(w, {
                                                magnitude: (0, B.Z)(1e18),
                                                prefix: "$",
                                                isPrice: !0
                                            })
                                        })
                                    })]
                                }), "TURN_OFF" === o && (0, r.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, r.jsxs)(em, {
                                        children: [(0, r.jsx)("span", {
                                            children: "Borrows Balance"
                                        }), (0, r.jsx)(i.Z, {
                                            color: d.r$.gray[400],
                                            name: "information-circle",
                                            size: 12
                                        }), (0, r.jsx)("span", {
                                            children: ":"
                                        })]
                                    }), (0, r.jsx)(ex, {
                                        children: void 0 === N ? (0, r.jsx)(er.Z, {
                                            height: 20
                                        }) : (0, r.jsx)(r.Fragment, {
                                            children: null === N || N.eq(0) ? "-" : (0, ee.d)(N, {
                                                magnitude: (0, B.Z)(1e18),
                                                prefix: "$",
                                                isPrice: !0
                                            })
                                        })
                                    })]
                                })]
                            }), "TURN_OFF" === o && A && (0, r.jsx)(en.ZP, {
                                intent: "error",
                                label: "You cannot disable the collateral option for this subaccount while it has outstanding debt. Please repay your loans first before proceeding."
                            })]
                        }), (0, r.jsxs)(h.cN, {
                            children: ["TURN_ON" === o && (0, r.jsx)(et.Z, {
                                className: "grow",
                                label: "Confirm",
                                onClick: es
                            }), "TURN_OFF" === o && (0, r.jsx)(et.Z, {
                                className: "grow",
                                disabled: A,
                                label: "Turn Off Collateral",
                                onClick: es
                            })]
                        })]
                    })
                },
                em = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "flex min-w-[145px] items-center gap-1 text-sm font-medium text-gray-400",
                        children: t
                    })
                },
                ex = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "text-sm font-bold text-gray-40",
                        children: t
                    })
                };
            var ef = n(78198);

            function eh(e) {
                var t;
                let {
                    addressId: n,
                    subaccount: s,
                    subaccountId: l,
                    currentMode: o
                } = e, [i, c] = (0, a.useState)(!1), d = (0, a.useRef)(!1), g = (0, u.xx)(), b = (0, x.Z)(g), p = Object.keys(null !== (t = null == s ? void 0 : s.markets) && void 0 !== t ? t : {}).length, v = (0, a.useMemo)(() => {
                    var e, t, n, r;
                    if (i) return null !== (t = d.current) && void 0 !== t && t;
                    if ((0, ef.bD)(o)) return !0;
                    let a = null !== (n = null == s ? void 0 : null === (e = s.enteredMarkets) || void 0 === e ? void 0 : e.map(e => e.toLowerCase())) && void 0 !== n ? n : [],
                        l = (null == s ? void 0 : s.markets) ? Object.keys(s.markets).map(e => e.toLowerCase()) : [],
                        c = (0, ef.C8)(a, l, null !== (r = null == s ? void 0 : s.isolatedCollateral) && void 0 !== r ? r : m.r_, b);
                    return c
                }, [i, null == s ? void 0 : s.enteredMarkets, null == s ? void 0 : s.markets, null == s ? void 0 : s.isolatedCollateral, o, b]);
                d.current = v;
                let y = async () => {
                        n && l && await (0, f.yK)(g, n, [l], !0)
                    },
                    j = 0 === p || (0, ef.bD)(o);
                return (0, r.jsxs)(h.Vq, {
                    open: i,
                    onOpenChange: c,
                    children: [(0, r.jsx)(h.hg, {
                        asChild: !0,
                        children: (0, r.jsx)(F, {
                            checked: v,
                            disabled: j,
                            onCheckedChange: () => {
                                c(!0)
                            }
                        })
                    }), (0, r.jsxs)(h.PK, {
                        children: [(0, r.jsx)(h.t9, {}), s && (v ? (0, r.jsx)(eu, {
                            intent: "TURN_OFF",
                            refetchSubaccountData: y,
                            subaccount: s
                        }) : (0, r.jsx)(eu, {
                            intent: "TURN_ON",
                            refetchSubaccountData: y,
                            subaccount: s
                        }))]
                    })]
                })
            }
            var eg = n(1991),
                eb = n(51681),
                ep = n(33751),
                ev = e => {
                    let {
                        action: t,
                        label: n,
                        disable: a
                    } = e;
                    return (0, r.jsx)(h.cN, {
                        children: (0, r.jsx)(et.Z, {
                            className: "grow",
                            disabled: null != a && a,
                            label: n,
                            onClick: () => {
                                t()
                            }
                        })
                    })
                },
                ey = n(23342),
                ej = e => {
                    let {
                        tokenSymbol: t,
                        tokenImage: n,
                        priceChange: a,
                        balance: s,
                        balanceUsdValue: l,
                        balanceUsdValueChange: o,
                        apy: i,
                        underlyingDecimals: c
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "grid grid-cols-3 rounded-2xl border border-gray-600 p-4",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, r.jsx)(L(), {
                                alt: t,
                                height: 24,
                                src: n,
                                width: 24
                            }), (0, r.jsx)(ea.Ac, {
                                className: "ml-2",
                                bold: !0,
                                children: t
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "ml-2.5 flex w-fit flex-col items-end justify-center leading-4",
                            children: [(0, r.jsx)(ea.LY, {
                                className: " leading-none",
                                children: (0, ee.d)(s, {
                                    magnitude: (0, B.Z)(c.toString())
                                })
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-0.5",
                                children: [null != l && null != o && (0, r.jsx)(ea.HB, {
                                    className: "leading-snug",
                                    color: o > 0 ? d.F1 : o < 0 ? d.yg : d.r$.white,
                                    children: (0, ee.d)(l, {
                                        magnitude: (0, B.Z)(c.toString()),
                                        prefix: "$",
                                        isPrice: !0
                                    })
                                }), null != a && (0, r.jsx)(ea.HB, {
                                    className: "leading-snug",
                                    children: (0, r.jsx)(z.Z, {
                                        prefix: "(",
                                        suffix: "%)",
                                        value: a
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex w-full items-center",
                            children: null != i && (0, r.jsx)("div", {
                                className: "w-full text-right text-xs font-normal text-gray-40",
                                children: (0, ey.u)(100 * i, void 0, {
                                    postfix: "%"
                                })
                            })
                        })]
                    })
                },
                ew = e => {
                    var t, n;
                    let {
                        borrows: s,
                        subaccount: l,
                        subaccountId: o,
                        refetchSubaccountData: c
                    } = e, d = (0, a.useMemo)(() => null == l ? void 0 : l.mode, [l]), [f, g] = (0, a.useState)(d === m.zi.STABLECOIN), [b, p] = (0, a.useState)(d === m.zi.ETH_CORRELATED), [v, y] = (0, a.useState)(""), [j, w] = (0, a.useState)(!1), N = (0, u.xx)(), A = (0, K.Z)(N), k = (0, x.Z)(N), S = (0, a.useMemo)(() => (null == l ? void 0 : l.mode) == m.zi.STABLECOIN || (null == l ? void 0 : l.mode) == m.zi.ETH_CORRELATED, []), {
                        data: C
                    } = (0, Y.Z)({
                        chainId: N,
                        tokenAddresses: P.z6[N],
                        enabled: !S
                    }), {
                        data: T
                    } = (0, W.Z)({
                        chainId: N,
                        marketAddresses: P.ri[N],
                        marketAddressesNoBorrow: P.uT[N],
                        enabled: !S
                    }), E = (0, eb.Z)({
                        subaccount: l,
                        oracles: null == C ? void 0 : null === (t = C.body) || void 0 === t ? void 0 : t.oracles,
                        markets: null == T ? void 0 : null === (n = T.body) || void 0 === n ? void 0 : n.markets,
                        marketConfiguration: k
                    }), Z = (0, a.useMemo)(() => {
                        if (!E || S) return [];
                        let e = f ? A.stablecoin.markets : b ? A["eth-correlated"].markets : [];
                        return e.length ? E.filter(t => t.balanceUsdValue && t.balanceUsdValue.gt(0) && !e.includes(t.tokenAddress)) : []
                    }, [b, A, E, S, f]), [R, I] = (0, a.useMemo)(() => [A[m.zi.STABLECOIN].logoSrcs, A[m.zi.ETH_CORRELATED].logoSrcs], [A]), _ = (0, a.useMemo)(() => BigInt(null != o ? o : 0), [o]), O = (0, a.useMemo)(() => f ? 1 : b ? 2 : 0, [f, b]), {
                        data: D,
                        error: F,
                        write: B
                    } = function(e, t) {
                        let n = (0, u.xx)();
                        return (0, u.GG)({
                            address: U.iX[n],
                            abi: U.Hc,
                            functionName: "enterMode",
                            args: [e, t]
                        })
                    }(_, O), {
                        data: M,
                        error: z,
                        write: H
                    } = function(e) {
                        let t = (0, u.xx)();
                        return (0, u.GG)({
                            address: U.iX[t],
                            abi: U.Hc,
                            functionName: "exitMode",
                            args: [e]
                        })
                    }(_), V = (0, a.useMemo)(() => "enter" === v && !!(null == F ? void 0 : F.message) || "exit" === v && !!(null == z ? void 0 : z.message), [null == F ? void 0 : F.message, null == z ? void 0 : z.message, v]), G = (0, a.useMemo)(() => "enter" === v ? null == D ? void 0 : D.hash : "exit" === v ? null == M ? void 0 : M.hash : "", [null == D ? void 0 : D.hash, null == M ? void 0 : M.hash, v]), q = (0, a.useMemo)(() => S ? f ? "Turn off Stablecoin E-mode" : b ? "Turn off ETH Correlated E-mode" : "Turn off Invalid Mode" : f ? "Turn on Stablecoin E-mode" : b ? "Turn on ETH Correlated E-mode" : "Select an E-mode to turn on", [f, b, S]);
                    return j ? (0, r.jsx)(ec, {
                        hash: G,
                        initialError: V,
                        refetchSubaccountData: c,
                        loadingContent: {
                            title: "Turning ".concat(S ? "Off" : "On", " E-mode..."),
                            description: "Please wait for the transaction to process."
                        },
                        successContent: {
                            title: "E-Mode Turned ".concat(S ? "Off" : "On", " Successfully"),
                            description: "You’ve now powered up your borrowing power!",
                            Image: (0, r.jsx)(L(), {
                                alt: "turn-".concat(S ? "off" : "on", "-emode-success"),
                                height: 128,
                                width: 306,
                                src: "/tx/turn-".concat(S ? "off" : "on", "-emode-success.png")
                            })
                        },
                        onFailed: () => {
                            S ? $.a.exitModeFailed() : $.a.enterModeFailed()
                        },
                        onSuccess: () => {
                            S ? $.a.exitMode({
                                currentMode: d
                            }) : f ? $.a.enterMode({
                                mode: m.zi.STABLECOIN
                            }) : b && $.a.enterMode({
                                mode: m.zi.ETH_CORRELATED
                            })
                        }
                    }) : (0, r.jsxs)(h.J5, {
                        className: "sm:max-w-[460px]",
                        children: [(0, r.jsxs)(h.fK, {
                            children: [(0, r.jsx)(h.$N, {
                                children: (0, r.jsx)(ea.ip, {
                                    bold: !0,
                                    children: (0, ef.Hw)(l.mode)
                                })
                            }), (0, r.jsx)(h.Be, {
                                className: "text-center text-[12px] text-gray-400",
                                children: (0, ef.bm)(l.mode)
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, r.jsx)(ea.Ac, {
                                bold: !0,
                                children: "E-mode Category"
                            }), (0, r.jsxs)("div", {
                                className: I.length > 0 ? "flex gap-2" : "flex items-center justify-center",
                                children: [(0, r.jsx)(ep.Z, {
                                    disabled: S,
                                    state: f ? "selected" : "default",
                                    onClick: function() {
                                        d !== m.zi.STABLECOIN && d !== m.zi.ETH_CORRELATED && (p(!1), g(!f))
                                    },
                                    children: (0, r.jsxs)("div", {
                                        className: "flex flex-col gap-2 p-4",
                                        children: [(0, r.jsx)("p", {
                                            className: "w-[170px] text-[16px] font-bold leading-none",
                                            children: "Stablecoins"
                                        }), (0, r.jsx)("p", {
                                            className: "text-[12px] leading-none text-gray-400",
                                            children: "Available assets:"
                                        }), (0, r.jsx)("div", {
                                            className: "flex gap-0.5",
                                            children: R.map((e, t) => (0, r.jsx)(L(), {
                                                alt: "",
                                                height: 24,
                                                src: e,
                                                width: 24
                                            }, t))
                                        })]
                                    })
                                }), I.length > 0 && (0, r.jsx)(ep.Z, {
                                    disabled: S,
                                    state: b ? "selected" : "default",
                                    onClick: function() {
                                        d !== m.zi.STABLECOIN && d !== m.zi.ETH_CORRELATED && (p(!b), g(!1))
                                    },
                                    children: (0, r.jsxs)("div", {
                                        className: "flex flex-col gap-2 p-4",
                                        children: [(0, r.jsx)("p", {
                                            className: "w-[170px] text-[16px] font-bold leading-none",
                                            children: "ETH Correlated"
                                        }), (0, r.jsx)("p", {
                                            className: "text-[12px] leading-none text-gray-400",
                                            children: "Available assets:"
                                        }), (0, r.jsx)("div", {
                                            className: "flex gap-0.5",
                                            children: I.map((e, t) => (0, r.jsx)(L(), {
                                                alt: "",
                                                height: 24,
                                                src: e,
                                                width: 24
                                            }, t))
                                        })]
                                    })
                                })]
                            }), Z.length && !S ? (0, r.jsxs)("div", {
                                className: "flex flex-col gap-[18px]",
                                children: [(0, r.jsx)("div", {
                                    className: "text-base font-bold text-gray-40",
                                    children: "Asset outside of E-mode Category"
                                }), (0, r.jsx)("div", {
                                    className: "flex flex-col gap-3",
                                    children: Z.map(e => (0, r.jsx)(ej, { ...e
                                    }, e.tokenAddress))
                                }), (0, r.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, r.jsx)("div", {
                                        className: "flex flex-shrink-0 basis-[20px]",
                                        children: (0, r.jsx)(i.Z, {
                                            name: "light-bulb",
                                            size: 16
                                        })
                                    }), (0, r.jsx)("p", {
                                        className: "text-xs font-normal text-gray-300",
                                        children: "You have deposited assets that do not support this E-mode category. These assets will not be included as collateral when E-mode is turned on."
                                    })]
                                })]
                            }) : null, !s.isZero() && (0, r.jsx)(en.ZP, {
                                className: "w-full",
                                intent: "warning",
                                label: (0, r.jsx)("span", {
                                    children: "You must repay all loans before exiting E-mode."
                                })
                            })]
                        }), (0, r.jsx)(ev, {
                            disable: !f && !b || !(null == s ? void 0 : s.isZero()),
                            label: q,
                            action: () => {
                                w(!0), S ? (y("exit"), H()) : (f || b) && (y("enter"), B())
                            }
                        })]
                    })
                },
                eN = e => {
                    let {
                        index: t,
                        image: n,
                        name: a,
                        amount: s,
                        percentage: l
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "grid grid-cols-2 rounded-lg border border-gray-600 p-4",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, r.jsx)(L(), {
                                alt: a,
                                height: 24,
                                src: n,
                                width: 24
                            }, t), (0, r.jsx)(ea.Ac, {
                                className: "ml-2",
                                bold: !0,
                                children: a
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "ml-2.5 flex flex-col justify-center leading-4",
                            children: [(0, r.jsx)(ea.Ac, {
                                children: s
                            }), (0, r.jsx)("div", {
                                className: "text-[10px]",
                                children: (0, r.jsxs)("span", {
                                    className: "".concat(l.startsWith("-") ? "text-red-500" : "text-green-500"),
                                    children: ["$", s.toString(), " (", l, "%)"]
                                })
                            })]
                        })]
                    })
                },
                eA = e => {
                    let {
                        subaccount: t,
                        subaccountId: n,
                        borrows: s,
                        refetchSubaccountData: l,
                        fromEmode: o
                    } = e, i = (0, u.xx)(), c = (0, x.Z)(i), [d, f] = (0, a.useState)(!1), g = [];
                    g = t.isolatedCollateral && t.isolatedCollateral !== m.r_ ? [t.isolatedCollateral.toLowerCase()] : t.enteredMarkets.map(e => e.toLowerCase());
                    let {
                        data: b,
                        error: p,
                        write: v
                    } = H(BigInt(n)), y = (0, a.useMemo)(() => null == b ? void 0 : b.hash, [null == b ? void 0 : b.hash]), j = (0, a.useMemo)(() => !!(null == p ? void 0 : p.message), [null == p ? void 0 : p.message]);
                    return d ? (0, r.jsx)(ec, {
                        hash: y,
                        initialError: j,
                        refetchSubaccountData: l,
                        loadingContent: {
                            title: "Exiting Market...",
                            description: "Please wait for the transaction to process."
                        },
                        successContent: {
                            title: "Exit Market Successful",
                            description: "Successfully exited all entered markets in the Subaccount.\nYou can now proceed to turn on E-mode.",
                            Image: (0, r.jsx)(L(), {
                                alt: "exit-market-success",
                                height: 120,
                                src: "/tx/approve-success.png",
                                width: 120
                            })
                        },
                        onFailed: () => {
                            $.a.clearMarketFailed()
                        },
                        onSuccess: () => {
                            $.a.clearMarkets()
                        }
                    }) : (0, r.jsxs)(h.J5, {
                        children: [(0, r.jsxs)(h.fK, {
                            children: [(0, r.jsx)(h.$N, {
                                children: (0, r.jsx)(ea.ip, {
                                    bold: !0,
                                    children: o ? "Turn On E-Mode" : "Exit Markets"
                                })
                            }), (0, r.jsx)(h.Be, {
                                className: "text-center text-[12px] text-gray-400",
                                children: o ? "Subaccount must not be in any markets to enter an e-mode. First, clear all markets. Additionally, in order to exit all markets please repay all loans first." : "Subaccount must not have any active borrows in order to exit markets. Please repay all loans before exiting market. To enter a mode you must first exit all markets."
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, r.jsx)(ea.Ac, {
                                bold: !0,
                                children: "Entered Markets"
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [g.map((e, n) => {
                                    let a = (0, B.Z)(0);
                                    t.markets[e] && (a = Object.values(t.markets[e].positionForTranche).reduce((e, t) => e.plus((0, B.Z)(t.depositAmount.toString()) || (0, B.Z)(0)), (0, B.Z)(0)));
                                    let s = c[e];
                                    return (0, r.jsx)("div", {
                                        className: "w-full",
                                        children: (0, r.jsx)(eN, {
                                            image: s.logoSrc,
                                            index: n,
                                            name: s.tokenSymbol,
                                            percentage: "0.45",
                                            amount: (0, ee.d)(a, {
                                                magnitude: (0, B.Z)(s.underlyingDecimals.toString())
                                            })
                                        })
                                    }, n)
                                }), !s.isZero() && (0, r.jsx)(en.ZP, {
                                    className: "w-full",
                                    intent: "warning",
                                    label: (0, r.jsx)("span", {
                                        children: "You must repay all loans before exiting markets."
                                    })
                                })]
                            })]
                        }), (0, r.jsx)(ev, {
                            disable: !s.isZero(),
                            label: "Clear Markets",
                            action: () => {
                                f(!0), v()
                            }
                        })]
                    })
                };

            function ek(e) {
                let {
                    addressId: t,
                    subaccount: n,
                    subaccountId: s,
                    currentMode: l
                } = e, [o, i] = (0, a.useState)(!1), c = (0, u.xx)(), d = (0, B.Z)(0);
                n && n.markets && (d = Object.values(n.markets).reduce((e, t) => e.plus(Object.values(t.positionForTranche).reduce((e, t) => e.plus((0, B.Z)(t.borrowAmount.toString()) || 0), (0, B.Z)(0))), (0, B.Z)(0)));
                let x = (0, a.useMemo)(() => (0, ef.bD)(l), [l]),
                    g = (null == n ? void 0 : n.isolatedCollateral) !== m.r_ || (null == n ? void 0 : n.enteredMarkets.length) > 0,
                    b = (null == n ? void 0 : n.assetCategory) ? eg.g[n.assetCategory] : null,
                    p = async () => {
                        t && s && await (0, f.yK)(c, t, [s], !0)
                    };
                return (0, r.jsxs)(h.Vq, {
                    open: o,
                    onOpenChange: i,
                    children: [(0, r.jsx)(h.hg, {
                        asChild: !0,
                        children: (0, r.jsx)(F, {
                            checked: x,
                            disabled: !!(b && !b.isEModeAvailable),
                            onCheckedChange: () => {
                                i(!0)
                            }
                        })
                    }), (0, r.jsxs)(h.PK, {
                        children: [(0, r.jsx)(h.t9, {}), n && s && (g && !(0, ef.bD)(l) ? (0, r.jsx)(eA, {
                            borrows: d,
                            fromEmode: !0,
                            refetchSubaccountData: p,
                            subaccount: n,
                            subaccountId: s
                        }) : (0, r.jsx)(ew, {
                            borrows: d,
                            refetchSubaccountData: p,
                            subaccount: n,
                            subaccountId: s
                        }))]
                    })]
                })
            }

            function eS(e) {
                var t, n;
                let {
                    typeLabel: u,
                    switchLabel: m,
                    tooltip: x,
                    emodePopup: f
                } = e, h = (0, s.Z)(), {
                    subaccount: g,
                    subaccountId: b
                } = (0, l.Z)(), p = (0, a.useMemo)(() => null == g ? void 0 : g.mode, [g]);
                return (0, r.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [(0, r.jsx)("div", {
                        className: "text-title3 font-bold",
                        children: u
                    }), (0, r.jsx)(o.Z, {
                        height: 28,
                        vertical: !0
                    }), (0, r.jsx)("div", {
                        className: "flex items-center gap-3",
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-shrink-0 items-center gap-0.5 text-gray-400",
                            children: [(0, r.jsx)("div", {
                                className: "text-body2 text-gray-400",
                                children: m
                            }), x && (0, r.jsx)(c.Z, {
                                content: (0, r.jsx)("div", {
                                    className: "w-[176px] [&>a]:underline",
                                    dangerouslySetInnerHTML: {
                                        __html: x
                                    }
                                }),
                                trigger: (0, r.jsx)(i.Z, {
                                    color: d.r$.gray[400],
                                    name: "information-circle",
                                    size: 12
                                })
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "flex items-center gap-3",
                        children: f ? (0, r.jsx)(ek, {
                            addressId: null !== (t = null == h ? void 0 : h.addressId) && void 0 !== t ? t : null,
                            currentMode: p,
                            subaccount: g,
                            subaccountId: b
                        }) : (0, r.jsx)(eh, {
                            addressId: null !== (n = null == h ? void 0 : h.addressId) && void 0 !== n ? n : null,
                            currentMode: p,
                            subaccount: g,
                            subaccountId: b
                        })
                    })]
                })
            }
        },
        78198: function(e, t, n) {
            "use strict";
            n.d(t, {
                C8: function() {
                    return l
                },
                Hw: function() {
                    return a
                },
                bD: function() {
                    return o
                },
                bm: function() {
                    return s
                }
            });
            var r = n(25427);

            function a(e) {
                switch (e) {
                    case r.zi.ISOLATED:
                    case r.zi.CROSS:
                        return "Exit Markets";
                    case r.zi.STABLECOIN:
                        return "Exit Stablecoin E-mode";
                    case r.zi.ETH_CORRELATED:
                        return "Exit ETH Correlated E-mode";
                    default:
                        return "Turn On E-Mode"
                }
            }

            function s(e) {
                switch (e) {
                    case r.zi.ISOLATED:
                    case r.zi.CROSS:
                        return "Subaccount must not have any entered market to enter E-mode. Please repay all loans and exit all entered markets in the Subaccount before proceeding to turn on E-mode.";
                    case r.zi.STABLECOIN:
                        return "Subaccount must not have any active borrows in order to exit Stablecoin E-mode. Please repay all loans before exiting market.";
                    case r.zi.ETH_CORRELATED:
                        return "Subaccount must not have any active borrows in order to exit ETH Correlated E-mode. Please repay all loans before exiting market.";
                    default:
                        return "E-mode enhances your borrowing power for a selected category of assets."
                }
            }

            function l(e, t, n, a) {
                if (0 == t.length) return !1;
                let s = n !== r.r_,
                    l = t.filter(e => {
                        var t;
                        return !(null === (t = a[e]) || void 0 === t ? void 0 : t.isIsolatedCollateral)
                    });
                return s ? t.includes(n) : l.length > 0 && l.every(t => e.includes(t))
            }

            function o(e) {
                return e === r.zi.STABLECOIN || e === r.zi.ETH_CORRELATED
            }
        },
        18403: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return l
                }
            });
            var r = n(57437),
                a = n(75959),
                s = n(89296);
            let l = e => {
                let {
                    label: t
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, r.jsx)(a.Z, {
                        color: s.r$.gray[40],
                        name: "light-bulb",
                        size: 16
                    }), (0, r.jsx)("span", {
                        className: "text-xs font-normal text-gray-300",
                        children: null != t ? t : "After confirmed, you cannot modify these settings for this subaccount."
                    })]
                })
            }
        },
        23304: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return O
                }
            });
            var r = n(57437),
                a = n(2265),
                s = n(48756),
                l = n(1991),
                o = n(25427),
                i = n(64362),
                c = n(93687),
                d = n(15896),
                u = n(17872),
                m = n(38283),
                x = n(61692),
                f = n(19249),
                h = n(65730);
            let g = a.forwardRef((e, t) => {
                let {
                    className: n,
                    type: a,
                    ...s
                } = e;
                return (0, r.jsx)("input", {
                    ref: t,
                    type: a,
                    className: (0, h.cn)("flex h-9 w-full rounded-md border border-gray-600 bg-transparent px-3 py-1 text-sm font-medium text-gray-100 shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50", "placeholder:font-normal placeholder:text-gray-500", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-900", "file:border-0 file:bg-transparent file:text-sm file:font-medium", n),
                    ...s
                })
            });
            g.displayName = "Input";
            let b = a.forwardRef((e, t) => {
                let {
                    className: n,
                    type: a,
                    value: s,
                    charLimit: l,
                    isError: o = !1,
                    ...i
                } = e;
                return (0, r.jsxs)("div", {
                    className: "relative flex items-center",
                    children: [(0, r.jsx)(g, {
                        ref: t,
                        type: a,
                        value: s,
                        className: (0, h.cn)("", n, o && "border-secondary-900 focus-visible:ring-secondary-900"),
                        ...i
                    }), s.length > 0 ? (0, r.jsxs)("div", {
                        className: "absolute right-0 pr-3 text-xs font-medium text-gray-500",
                        children: [(0, r.jsx)("span", {
                            className: "text-gray-100",
                            children: s.length
                        }), "/", l]
                    }) : null]
                })
            });
            b.displayName = "Input";
            var p = n(16691),
                v = n.n(p),
                y = n(92132),
                j = n(31590),
                w = n(76858),
                N = n(33751),
                A = n(34636);
            let k = e => {
                    let {
                        type: t,
                        isSelected: n,
                        onSelect: a,
                        disabled: o
                    } = e, i = (0, s.xx)(), c = l.g[t];
                    return c ? (0, r.jsxs)(N.Z, {
                        className: "flex w-[161px] flex-col gap-2 p-3",
                        disabled: o,
                        state: n ? "selected" : "default",
                        onClick: o ? () => null : () => a(c),
                        children: [(0, r.jsx)("div", {
                            className: "text-sm font-bold text-gray-40",
                            children: c.title
                        }), (0, r.jsx)("div", {
                            className: "flex min-h-[48px] flex-wrap [&>*:not(:nth-child(6n))]:-ml-[3px]",
                            children: c.tokens[i].map(e => {
                                let {
                                    logoSrc: t,
                                    tokenAddress: n
                                } = e;
                                return (0, r.jsx)(v(), {
                                    alt: "token-logo",
                                    className: "rounded-full shadow",
                                    height: 24,
                                    src: t,
                                    width: 24
                                }, n)
                            })
                        }), (0, r.jsx)(j.Z, {}), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-3 leading-none",
                            children: [(0, r.jsxs)(S, {
                                children: [(0, r.jsx)(C, {
                                    children: "Risk Grade:"
                                }), (0, r.jsx)(w.Z, {
                                    className: "w-auto px-2 text-[10px]",
                                    level: c.riskTranche,
                                    size: "small",
                                    colored: !0,
                                    rounded: !0
                                })]
                            }), (0, r.jsxs)(S, {
                                children: [(0, r.jsx)(C, {
                                    children: "Collateral Type:"
                                }), (0, r.jsx)(A.ZP, {
                                    className: "h-[15px] px-1 text-[10px]",
                                    label: y.B[c.mode]
                                })]
                            }), (0, r.jsxs)(S, {
                                children: [(0, r.jsx)(C, {
                                    children: "E-mode:"
                                }), (0, r.jsx)("span", {
                                    className: "text-[10px] text-gray-40",
                                    children: c.isEModeAvailable ? "Available" : "Not Available"
                                })]
                            })]
                        })]
                    }) : null
                },
                S = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "flex justify-between",
                        children: t
                    })
                },
                C = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "text-[10px] font-medium text-gray-400",
                        children: t
                    })
                },
                T = e => {
                    let {
                        onClose: t
                    } = e;
                    return (0, r.jsx)(f.cZ, {
                        className: "rounded-2xl p-8 sm:max-w-[467px]",
                        onCloseAutoFocus: t,
                        children: (0, r.jsxs)("div", {
                            className: "relative flex flex-col gap-8",
                            children: [(0, r.jsx)(v(), {
                                alt: "create-subaccount-success",
                                className: "absolute -left-[20px] -z-1 min-w-[511px]",
                                height: 513,
                                src: "/home/create-subaccount-success.png",
                                width: 511
                            }), (0, r.jsxs)("div", {
                                className: "mt-[143px] flex flex-col items-center gap-4",
                                children: [(0, r.jsx)("div", {
                                    className: "text-xl font-bold text-gray-40",
                                    children: "Subaccount Created"
                                }), (0, r.jsx)("div", {
                                    className: "text-center text-base font-normal text-gray-400",
                                    children: "You have successfully created a new subaccount. Deposit assets in the account to start borrowing."
                                })]
                            }), (0, r.jsx)(f.cN, {
                                children: (0, r.jsx)(f.GG, {
                                    asChild: !0,
                                    children: (0, r.jsx)(x.Z, {
                                        className: "grow",
                                        intent: "secondary",
                                        label: "Close",
                                        onClick: t
                                    })
                                })
                            })]
                        })
                    })
                },
                E = e => {
                    let {
                        onClose: t
                    } = e;
                    return (0, r.jsx)(f.cZ, {
                        className: "rounded-2xl p-8 sm:max-w-[467px]",
                        onCloseAutoFocus: t,
                        children: (0, r.jsxs)("div", {
                            className: "relative flex flex-col gap-8 overflow-hidden",
                            children: [(0, r.jsx)(v(), {
                                alt: "create-subaccount-success",
                                className: "absolute -left-[20px] -z-1 min-w-[511px]",
                                height: 513,
                                src: "/home/create-subaccount-success.png",
                                width: 511
                            }), (0, r.jsxs)("div", {
                                className: "mt-[143px] flex flex-col items-center gap-4",
                                children: [(0, r.jsx)("div", {
                                    className: "text-xl font-bold text-gray-40",
                                    children: "Subaccount Renamed"
                                }), (0, r.jsx)("div", {
                                    className: "text-center text-base font-normal text-gray-400",
                                    children: "Your subaccount has successfully been renamed."
                                })]
                            }), (0, r.jsx)(f.cN, {
                                children: (0, r.jsx)(f.GG, {
                                    asChild: !0,
                                    children: (0, r.jsx)(x.Z, {
                                        className: "grow",
                                        label: "Close",
                                        onClick: t
                                    })
                                })
                            })]
                        })
                    })
                };
            var Z = n(18403),
                R = n(75959),
                I = n(89296);
            let _ = () => (0, r.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, r.jsx)(R.Z, {
                        color: I.r$.gray[40],
                        name: "megaphone",
                        size: 16
                    }), (0, r.jsx)("span", {
                        className: "whitespace-nowrap text-xs font-normal text-gray-300",
                        children: "In Isolated Subaccount, you can only deposit one asset to use as collateral."
                    })]
                }),
                O = e => {
                    var t;
                    let {
                        intent: n,
                        subaccount: h
                    } = e, g = (0, i.Z)(), p = (0, c.Z)(), v = (0, a.useMemo)(() => p ? Object.values(p).map(e => null !== (t = e.name) && void 0 !== t ? t : (0, u.w)(e.id.toString())) : [], [p]), y = (0, s.xx)(), [j, w] = (0, a.useState)(""), [N, A] = (0, a.useState)(!1), [S, C] = (0, a.useState)(), [R, I] = (0, a.useState)(!1), O = (0, a.useMemo)(() => "CREATE" === n && ((null == S ? void 0 : S.categoryType) === l.p.MEDIUM_RISK || (null == S ? void 0 : S.categoryType) === l.p.HIGH_RISK) || "RENAME" === n && (null == h ? void 0 : h.assetCategory) === l.p.MEDIUM_RISK || (null == h ? void 0 : h.assetCategory) === l.p.HIGH_RISK, [n, null == S ? void 0 : S.categoryType, null == h ? void 0 : h.assetCategory]), D = (0, a.useCallback)(e => {
                        let t = e.target.value;
                        if (t.length <= 20) {
                            w(e.target.value);
                            let t = null == v ? void 0 : v.includes(e.target.value);
                            t ? A(!0) : A(!1)
                        }
                    }, [v]), F = (0, a.useCallback)(() => {
                        w(""), A(!1), "CREATE" === n && C(void 0)
                    }, [n]), B = (0, a.useCallback)(async () => {
                        if (null == g ? void 0 : g.addressId) {
                            try {
                                if ("CREATE" === n) {
                                    if (!S) return;
                                    let e = S.mode === o.zi.CROSS ? "CROSS" : "ISOLATED",
                                        t = await (0, d.JJ)(y, g.addressId, {
                                            name: j,
                                            mode: e,
                                            riskLevel: S.riskTranche,
                                            assetCategory: S.categoryType
                                        });
                                    m.a.createSubaccount({
                                        subaccountId: t,
                                        subaccountName: j,
                                        categoryType: S.categoryType
                                    })
                                }
                                "RENAME" === n && (null == h ? void 0 : h.id) !== void 0 && (await (0, d.lJ)(y, g.addressId, Number(h.id), j), m.a.renameSubaccount({
                                    subaccountId: h.id,
                                    subaccountName: j
                                })), I(!0)
                            } catch (e) {
                                console.error(e), m.a.subaccountFailed({
                                    type: n.toLowerCase(),
                                    error: e
                                })
                            }
                            F()
                        }
                    }, [null == g ? void 0 : g.addressId, F, n, null == h ? void 0 : h.id, S, y, j]);
                    return R ? (0, r.jsxs)(r.Fragment, {
                        children: ["CREATE" === n && (0, r.jsx)(T, {
                            onClose: () => {
                                I(!1)
                            }
                        }), "RENAME" === n && (0, r.jsx)(E, {
                            onClose: () => {
                                I(!1)
                            }
                        })]
                    }) : (0, r.jsxs)(f.cZ, {
                        className: "rounded-2xl sm:max-w-[548px]",
                        onCloseAutoFocus: F,
                        onOpenAutoFocus: () => {
                            (null == h ? void 0 : h.name) && w(h.name)
                        },
                        children: [(0, r.jsxs)(f.fK, {
                            children: ["CREATE" === n && (0, r.jsx)(f.$N, {
                                children: "Create Subaccount"
                            }), "RENAME" === n && (0, r.jsx)(f.$N, {
                                children: "Rename Subaccount"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0, r.jsx)("div", {
                                className: "text-base font-bold text-gray-40",
                                children: "Subaccount Name"
                            }), (0, r.jsx)(b, {
                                charLimit: 20,
                                isError: N,
                                placeholder: "Enter Subaccount Name",
                                value: j,
                                onChange: D
                            }), N ? (0, r.jsx)("span", {
                                className: "text-xs font-normal text-secondary-800",
                                children: "The subaccount name you have entered already exists. Please enter a different name."
                            }) : null]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, r.jsx)("div", {
                                    className: "text-base font-bold",
                                    children: "Assets to deposit"
                                }), (0, r.jsx)("div", {
                                    className: "text-xs font-normal text-gray-300",
                                    children: "Select the category of assets you want to deposit. This selection will determine the collateral type and borrowing configuration for your subaccount when using the supplied assets as collateral."
                                })]
                            }), (0, r.jsx)("div", {
                                className: "grid w-fit grid-cols-3 gap-2",
                                children: Object.keys(l.p).map(e => (0, r.jsx)(k, {
                                    disabled: "RENAME" === n,
                                    type: e,
                                    isSelected: "CREATE" === n && (null == S ? void 0 : S.categoryType) === e || "RENAME" === n && (null == h ? void 0 : h.assetCategory) === e,
                                    onSelect: e => {
                                        if (e.categoryType === (null == S ? void 0 : S.categoryType)) return C(void 0);
                                        C(e)
                                    }
                                }, e))
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [O && (0, r.jsx)(_, {}), (0, r.jsx)(Z.A, {})]
                        }), (0, r.jsx)(f.cN, {
                            children: (0, r.jsx)(x.Z, {
                                className: "grow",
                                label: "Confirm",
                                disabled: "CREATE" === n && (!S || !j) || "RENAME" === n && !j || N,
                                onClick: B
                            })
                        })]
                    })
                }
        },
        30764: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return I
                }
            });
            var r = n(57437),
                a = n(2265),
                s = n(64626),
                l = n(48756),
                o = n(4691),
                i = n(64362),
                c = n(6747),
                d = n(8975),
                u = n(72857),
                m = n(6242),
                x = n(11288),
                f = n(18839),
                h = n(99526),
                g = n(15896),
                b = n(38283),
                p = n(21247),
                v = n(61692),
                y = n(92224),
                j = n(19249),
                w = n(78670),
                N = n(18403),
                A = n(63244);
            let k = e => {
                let {
                    onClose: t
                } = e;
                return (0, r.jsxs)(j.cZ, {
                    className: "sm:max-w-[560px]",
                    onCloseAutoFocus: t,
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-6",
                        children: [(0, r.jsx)(A.Z, {
                            status: "failed"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [(0, r.jsx)("div", {
                                className: "text-center text-xl font-bold",
                                children: "Sorry, Something Went Wrong :("
                            }), (0, r.jsx)("div", {
                                className: "text-center text-sm font-normal text-gray-400",
                                children: "Failed to delete subaccount. Please try again."
                            })]
                        })]
                    }), (0, r.jsx)(j.cN, {
                        className: "w-full",
                        children: (0, r.jsx)(j.GG, {
                            asChild: !0,
                            children: (0, r.jsx)(v.Z, {
                                className: "grow",
                                intent: "secondary",
                                label: "Close",
                                danger: !0,
                                onClick: t
                            })
                        })
                    })]
                })
            };
            var S = n(16691),
                C = n.n(S);
            let T = e => {
                let {
                    onClose: t
                } = e;
                return (0, r.jsxs)(j.cZ, {
                    className: "gap-8 rounded-2xl p-8 sm:max-w-[560px]",
                    onCloseAutoFocus: t,
                    children: [(0, r.jsxs)("div", {
                        className: "relative flex flex-col items-center gap-4 overflow-hidden",
                        children: [(0, r.jsx)(C(), {
                            alt: "delete-subaccount-success",
                            className: "min-w-[305px]",
                            height: 127,
                            src: "/home/delete-subaccount-success.png",
                            width: 305
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col items-center gap-4",
                            children: [(0, r.jsx)("div", {
                                className: "text-xl font-bold text-gray-40",
                                children: "Delete Subaccount Successful"
                            }), (0, r.jsx)("div", {
                                className: "text-center text-base font-normal leading-snug text-gray-400",
                                children: "Your subaccount has now been deleted."
                            })]
                        })]
                    }), (0, r.jsx)(j.cN, {
                        className: "w-full",
                        children: (0, r.jsx)(j.GG, {
                            asChild: !0,
                            children: (0, r.jsx)(v.Z, {
                                className: "grow",
                                intent: "secondary",
                                label: "Close",
                                onClick: t
                            })
                        })
                    })]
                })
            };
            var E = n(73828),
                Z = n(89296);
            let R = () => (0, r.jsx)(j.cZ, {
                    className: "rounded-2xl p-6 sm:min-h-[310px] sm:min-w-[560px]",
                    showCloseIcon: !1,
                    onPointerDownOutside: e => e.preventDefault(),
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-6",
                        children: [(0, r.jsx)(E.iT, {
                            color: Z.r$.green[900],
                            height: 120,
                            secondaryColor: Z.r$.black,
                            strokeWidth: 4,
                            width: 120
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-6",
                            children: [(0, r.jsx)("p", {
                                className: "text-xl font-bold text-gray-40",
                                children: "Deleting Subaccount..."
                            }), (0, r.jsx)("span", {
                                className: "text-sm font-normal text-gray-400",
                                children: "Please wait for the transaction to process."
                            })]
                        })]
                    })
                }),
                I = () => {
                    var e, t;
                    let n = (0, i.Z)(),
                        {
                            subaccount: A,
                            subaccountId: S
                        } = (0, f.Z)(),
                        C = (0, l.xx)(),
                        E = (0, c.Z)(C),
                        Z = (0, u.Z)(C),
                        I = (0, x.Z)(),
                        [D, F] = (0, a.useState)(!1),
                        [B, M] = (0, a.useState)(!1),
                        [L, P] = (0, a.useState)(!1),
                        {
                            data: z
                        } = (0, m.Z)({
                            chainId: C,
                            tokenAddresses: o.z6[C],
                            refetchInterval: 6e4,
                            enabled: I
                        }),
                        {
                            data: U
                        } = (0, d.Z)({
                            chainId: C,
                            marketAddresses: o.ri[C],
                            marketAddressesNoBorrow: o.uT[C],
                            refetchInterval: 6e4,
                            enabled: I
                        }),
                        {
                            totalDeposits: H,
                            totalBorrows: V
                        } = (0, h.Z)({
                            subaccount: A,
                            oracles: null == z ? void 0 : null === (e = z.body) || void 0 === e ? void 0 : e.oracles,
                            markets: null == U ? void 0 : null === (t = U.body) || void 0 === t ? void 0 : t.markets,
                            marketConfiguration: E,
                            modeConfiguration: Z
                        }),
                        G = A && !Object.entries(A.markets).some(e => {
                            var t;
                            let [n, r] = e;
                            return Object.entries(null !== (t = null == r ? void 0 : r.positionForTranche) && void 0 !== t ? t : []).some(e => {
                                let [t, n] = e;
                                if (n.depositAmount > BigInt(0) || n.borrowAmount > BigInt(0)) return !0
                            })
                        }),
                        W = async () => {
                            try {
                                if (!n || !S) return;
                                F(!0), await (0, g.$w)(C, n.addressId, Number(S)), b.a.deleteSubaccount({
                                    subaccountId: S
                                }), M(!0)
                            } catch (e) {
                                console.error(e), P(!0)
                            } finally {
                                F(!1)
                            }
                        };
                    return D ? (0, r.jsx)(R, {}) : B ? (0, r.jsx)(T, {
                        onClose: () => {
                            M(!1)
                        }
                    }) : L ? (0, r.jsx)(k, {
                        onClose: () => {
                            P(!1)
                        }
                    }) : (0, r.jsxs)(j.cZ, {
                        className: "rounded-2xl sm:max-w-[540px]",
                        children: [(0, r.jsxs)(j.fK, {
                            children: [(0, r.jsx)(j.$N, {
                                children: "Delete Subaccount"
                            }), (0, r.jsx)(j.Be, {
                                children: "Are you sure you want to delete your Subaccount?"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [(0, r.jsx)("div", {
                                    className: "text-base font-bold text-gray-40",
                                    children: "Subaccount Info."
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col gap-3 rounded-lg border border-gray-700 bg-[#26292D80]/[.5] p-4",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, r.jsxs)(_, {
                                            children: [(0, r.jsx)("span", {
                                                children: "Subaccount"
                                            }), (0, r.jsx)("span", {
                                                children: ":"
                                            })]
                                        }), (0, r.jsx)(O, {
                                            children: null == A ? void 0 : A.name
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, r.jsxs)(_, {
                                            children: [(0, r.jsx)("span", {
                                                children: "Deposit Balance"
                                            }), (0, r.jsx)("span", {
                                                children: ":"
                                            })]
                                        }), (0, r.jsx)(O, {
                                            children: void 0 === H ? (0, r.jsx)(w.Z, {
                                                height: 20
                                            }) : (0, r.jsx)(r.Fragment, {
                                                children: null === H || H.eq(0) ? "-" : (0, p.d)(H, {
                                                    magnitude: (0, s.Z)(1e18),
                                                    prefix: "$",
                                                    isPrice: !0
                                                })
                                            })
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, r.jsxs)(_, {
                                            children: [(0, r.jsx)("span", {
                                                children: "Borrow Balance"
                                            }), (0, r.jsx)("span", {
                                                children: ":"
                                            })]
                                        }), (0, r.jsx)(O, {
                                            children: void 0 === V ? (0, r.jsx)(w.Z, {
                                                height: 20
                                            }) : (0, r.jsx)(r.Fragment, {
                                                children: null === V || V.eq(0) ? "-" : (0, p.d)(V, {
                                                    magnitude: (0, s.Z)(1e18),
                                                    prefix: "$",
                                                    isPrice: !0
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), !G && (0, r.jsx)(y.ZP, {
                                intent: "error",
                                label: "Please remove all deposits and borrows inside the subaccount before deleting."
                            }), (0, r.jsx)(N.A, {
                                label: "After confirmed, this action cannot be undone."
                            })]
                        }), (0, r.jsx)(j.cN, {
                            children: (0, r.jsx)(v.Z, {
                                className: "grow",
                                disabled: !!(A && !G),
                                label: "Delete Subaccount",
                                danger: !0,
                                onClick: W
                            })
                        })]
                    })
                },
                _ = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "flex min-w-[145px] items-center gap-1 text-sm font-medium text-gray-400",
                        children: t
                    })
                },
                O = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "text-sm font-bold text-gray-40",
                        children: t
                    })
                }
        },
        53237: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n;
                if (null == t ? void 0 : t.invalid) return null;
                let r = null !== (n = null == t ? void 0 : t.trancheLevel) && void 0 !== n ? n : e.riskLevel;
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
                    trancheLevel: r,
                    riskLevel: e.riskLevel,
                    assetCategory: e.assetCategory
                }
            }
            n.d(t, {
                y: function() {
                    return r
                }
            })
        },
        17872: function(e, t, n) {
            "use strict";

            function r(e) {
                var t;
                return "Subaccount-".concat(null === (t = (parseInt(e) + 1).toString()) || void 0 === t ? void 0 : t.padStart(2, "0"))
            }
            n.d(t, {
                w: function() {
                    return r
                }
            })
        },
        25193: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return s
                }
            });
            var r = n(25427),
                a = n(92132);

            function s(e) {
                if (e.mode && e.mode !== r.zi.NONE) return a.B[e.mode];
                switch (e.modeInfo) {
                    case "CROSS":
                        return a.B.cross;
                    case "ISOLATED":
                        return a.B.isolated;
                    case "STABLECOIN_E":
                        return a.B.stablecoin;
                    case "ETH_E":
                        return a.B["eth-correlated"];
                    default:
                        return function(e) {
                            throw Error("ERROR! Reached forbidden guard function with unexpected value: ".concat(JSON.stringify(e)))
                        }(e.modeInfo)
                }
            }
        },
        58824: function(e, t, n) {
            "use strict";

            function r(e) {
                return null != e
            }
            n.d(t, {
                _: function() {
                    return r
                }
            })
        },
        86053: function(e, t, n) {
            "use strict";

            function r(e) {
                return null !== e.trancheLevel ? e.trancheLevel : 0
            }
            n.d(t, {
                b: function() {
                    return r
                }
            })
        },
        23353: function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 == e) return;
                let t = new Date().getTime();
                if (e - t <= 2592e6) return e
            }

            function a(e) {
                if (void 0 == e) return;
                let t = new Date().getTime();
                if (e - t <= 2592e6) return e
            }

            function s(e) {
                let t = new Date().getTime();
                return e <= t
            }
            n.d(t, {
                Bw: function() {
                    return s
                },
                EQ: function() {
                    return r
                },
                Xl: function() {
                    return a
                }
            })
        },
        6498: function(e, t, n) {
            "use strict";
            n.d(t, {
                AK: function() {
                    return r
                },
                Ex: function() {
                    return a
                },
                MT: function() {
                    return l
                },
                Nv: function() {
                    return s
                }
            });
            let r = 1.02,
                a = 1.12;

            function s(e) {
                if (!(void 0 == e || null == e || e.isNaN()) && !e.gte(a)) return e
            }
            let l = e => null !== e && e.lte(r)
        },
        56069: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return c
                }
            });
            var r = n(5727);
            let a = {
                id: r.R.id,
                label: "Ethereum",
                logoSrc: "/ethereum.png",
                chain: { ...r.R,
                    iconUrl: "/ethereum.png"
                }
            };
            var s = n(85780);
            let l = {
                id: s.y.id,
                label: "Arbitrum",
                logoSrc: "/arb.png",
                chain: { ...s.y,
                    iconUrl: "/arb.png"
                }
            };
            var o = n(32936);
            let i = {
                    id: o.e.id,
                    label: "BNB Chain",
                    logoSrc: "/bsc.png",
                    chain: { ...o.e,
                        iconUrl: "/bsc.png"
                    }
                },
                c = {
                    [a.id]: a,
                    [i.id]: i,
                    [l.id]: l
                }
        },
        92132: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return a
                }
            });
            var r = n(25427);
            let a = {
                [r.zi.NONE]: "None",
                [r.zi.ISOLATED]: "Isolated",
                [r.zi.CROSS]: "Crossed",
                [r.zi.STABLECOIN]: "Stablecoin",
                [r.zi.ETH_CORRELATED]: "ETH"
            }
        },
        44094: function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) return "January 01, 1983";
                let t = new Date(e),
                    n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t.getMonth()],
                    r = t.getDate(),
                    a = t.getFullYear();
                return "".concat(n, " ").concat(r, ", ").concat(a)
            }
            n.d(t, {
                E: function() {
                    return r
                }
            })
        },
        21247: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return s
                }
            });
            var r = n(64626),
                a = n(37041);
            let s = (e, t) => {
                var n, s;
                if (null === e) return "-";
                let l = null !== (n = null == t ? void 0 : t.displayDecimalPlaces) && void 0 !== n ? n : 2;
                e = e.dividedBy(null !== (s = null == t ? void 0 : t.magnitude) && void 0 !== s ? s : (0, r.Z)(1e18));
                let o = "";
                if (e.eq(0)) o = e.toFormat(l);
                else if (e.lt(1e-4) && t && !t.isPrice) o = (0, r.Z)(0).toFormat(l);
                else if (e.lt(.01) && t && ("$" == t.prefix || "%" == t.postfix) && !t.isPrice) o = (0, r.Z)(0).toFormat(l);
                else if (e.lt(.01)) {
                    let [t, n] = e.toExponential(2).split("e");
                    o = (0, a.Z)(null != t ? t : "") + "E" + n
                } else o = e.lt(1e6) ? e.toFormat(l) : e.lt(1e7) ? e.toFormat(0) : e.lt(1e9) ? e.dividedBy(1e6).toFormat(l) + "M" : e.dividedBy(1e9).toFormat(l) + "B";
                return "".concat((null == t ? void 0 : t.prefix) || "").concat(o).concat((null == t ? void 0 : t.postfix) || "")
            }
        },
        23342: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return l
                },
                u: function() {
                    return s
                }
            });
            var r = n(64626),
                a = n(21247);
            let s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return null === e ? "-" : (0, a.d)((0, r.Z)(e), {
                        magnitude: (0, r.Z)(1),
                        displayDecimalPlaces: t,
                        prefix: null == n ? void 0 : n.prefix,
                        postfix: null == n ? void 0 : n.postfix,
                        isPrice: null == n ? void 0 : n.isPrice
                    })
                },
                l = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, a.d)((0, r.Z)(e), {
                        magnitude: (0, r.Z)(1),
                        displayDecimalPlaces: t,
                        prefix: null == n ? void 0 : n.prefix,
                        postfix: null == n ? void 0 : n.postfix,
                        isPrice: null == n ? void 0 : n.isPrice
                    })
                }
        },
        73229: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(57437),
                a = n(2265),
                s = n(63779),
                l = n(65730),
                o = n(8625),
                i = n.n(o);

            function c(e) {
                let {
                    className: t,
                    style: n,
                    row: o,
                    column: c,
                    flex: d,
                    alignItems: u,
                    justifyContent: m,
                    spacing: x,
                    children: f,
                    ...h
                } = e, g = (0, l.cn)(i().container, c && i().column, o && i().row, t), b = (0, s.Z)(d && {
                    flex: !0 === d ? 1 : d
                }, u && {
                    alignItems: u
                }, m && {
                    justifyContent: m
                }, n), p = f;
                if (x) {
                    let e = a.Children.toArray(f).filter(Boolean);
                    p = e.map((t, n) => (0, r.jsxs)(a.Fragment, {
                        children: [t, n !== e.length - 1 && t && (0, r.jsx)("div", {
                            style: {
                                width: o ? x : void 0,
                                height: o ? void 0 : x,
                                flexShrink: 0
                            }
                        })]
                    }, n))
                }
                return (0, r.jsx)("div", {
                    className: g,
                    style: b,
                    ...h,
                    children: p
                })
            }
        },
        92224: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return d
                },
                au: function() {
                    return i
                }
            });
            var r = n(57437);
            n(2265);
            var a = n(69484),
                s = n(75959),
                l = n(65730);
            let o = (0, a.j)(["flex w-full flex-shrink-0 gap-[10px] rounded-lg border px-3 py-2 text-xs font-normal"], {
                variants: {
                    intent: {
                        info: ["text-gray-40", "border-gray-40"],
                        warning: ["text-tertiary-900", "border-tertiary-900"],
                        error: ["text-secondary-900", "border-secondary-900"]
                    },
                    expiration: {
                        high: "rounded-lg border-error-red bg-gradient-to-b from-[#360300] from-[-100%] to-error-red text-gray-40",
                        medium: "rounded-lg border-error-orange bg-gradient-to-b from-[#371A00] from-[-100%] to-error-orange text-gray-40",
                        low: "rounded-lg border-error-yellow bg-gradient-to-b from-[#3F3100] from-[-100%] to-error-yellow text-gray-40",
                        expired: ""
                    }
                },
                defaultVariants: {
                    intent: "info"
                }
            });

            function i(e) {
                if (void 0 == e) return;
                let t = new Date().getTime();
                return e - t <= 0 ? "expired" : e - t < 2592e5 ? "high" : e - t < 864e6 ? "medium" : "low"
            }
            let c = e => {
                let {
                    intent: t
                } = e;
                switch (t) {
                    case "info":
                    default:
                        return (0, r.jsx)(s.Z, {
                            name: "information-circle",
                            size: 16
                        });
                    case "warning":
                        return (0, r.jsx)(s.Z, {
                            name: "warning-bold",
                            size: 16
                        });
                    case "error":
                        return (0, r.jsx)(s.Z, {
                            name: "x-circle-bold",
                            size: 16
                        })
                }
            };

            function d(e) {
                let {
                    label: t,
                    className: n,
                    intent: a,
                    expiration: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: (0, l.cn)(o({
                        intent: a,
                        expiration: s
                    }), n),
                    children: [(0, r.jsx)("div", {
                        className: "flex flex-shrink-0",
                        children: (0, r.jsx)(c, {
                            intent: a
                        })
                    }), (0, r.jsx)("div", {
                        className: "flex items-center leading-4",
                        children: t
                    })]
                })
            }
        },
        31590: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(57437),
                a = n(65730),
                s = n(28626),
                l = n.n(s);

            function o(e) {
                let {
                    horizontal: t = !0,
                    vertical: n,
                    height: s
                } = e;
                return (0, r.jsx)("div", {
                    style: {
                        height: null != s ? s : void 0
                    },
                    className: (0, a.cn)(l().divider, t && l().horizontal, n && l().vertical)
                })
            }
        },
        31049: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(57437),
                a = n(73828);

            function s(e) {
                let {
                    size: t,
                    strokeWidth: n
                } = e;
                return (0, r.jsx)(a.iT, {
                    color: "#999",
                    height: t,
                    secondaryColor: "#888",
                    strokeWidth: n || 4,
                    width: t
                })
            }
        },
        57626: function(e, t, n) {
            "use strict";
            var r = n(57437),
                a = n(2265),
                s = n(69484),
                l = n(75959),
                o = n(65730);
            let i = (0, s.j)(["relative flex cursor-pointer items-center justify-center gap-1 rounded-[20px] border"], {
                    variants: {
                        state: {
                            default: ["border-primary-900", "text-primary-900", "hover:bg-primary-500", "active:border-gray-400", "active:bg-primary-50", "active:text-gray-40"],
                            selected: ["border-primary-900", "bg-primary-900", "text-black"],
                            disabled: ["border-gray-500", "text-gray-500", "cursor-not-allowed"]
                        },
                        size: {
                            base: ["h-8 px-3 py-[6px] text-sm font-bold"],
                            small: ["h-6 px-3 py-0.5 text-sm font-bold"]
                        }
                    },
                    defaultVariants: {
                        state: "default",
                        size: "base"
                    }
                }),
                c = a.forwardRef((e, t) => {
                    let {
                        label: n,
                        className: a,
                        state: s,
                        size: c,
                        icon: d,
                        iconRight: u,
                        isLiquidate: m = !1,
                        onClick: x
                    } = e;
                    return (0, r.jsxs)("div", {
                        ref: t,
                        className: (0, o.cn)(i({
                            state: s,
                            size: c,
                            className: a
                        })),
                        onClick: x,
                        children: [d && (0, r.jsx)(l.Z, {
                            name: d,
                            size: 16
                        }), (0, r.jsx)("div", {
                            className: "leading-none",
                            children: n
                        }), u && (0, r.jsx)(l.Z, {
                            name: u,
                            size: 16
                        }), m && (0, r.jsx)("div", {
                            className: "absolute -right-[2px] -top-[10px] [&>svg>g>path:nth-child(1)]:fill-secondary-900 [&>svg>g>path:nth-child(2)]:fill-gray-40",
                            children: (0, r.jsx)(l.Z, {
                                name: "info",
                                size: 16
                            })
                        })]
                    })
                });
            c.displayName = "Pill", t.Z = c
        },
        76858: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(57437),
                a = n(69484),
                s = n(65730);
            let l = (0, a.j)(["flex items-center justify-center whitespace-nowrap rounded-full border font-medium leading-none"], {
                    variants: {
                        intent: {
                            default: ["border-gray-100", "text-gray-100"],
                            low: ["border-primary-800", "text-primary-800"],
                            medium: ["border-tertiary-800", "text-tertiary-800"],
                            high: ["border-secondary-800", "text-secondary-800"],
                            vhigh: ["border-secondary-900", "text-secondary-900"]
                        },
                        size: {
                            long: ["h-[18px] px-2 text-xs"],
                            base: ["h-[18px] w-[90px] text-xs"],
                            short: ["h-[18px] w-[64px] text-[10px]"],
                            small: ["h-[16px] w-[56px] text-[10px]"],
                            icon: ["h-5 w-5 text-xs"]
                        }
                    },
                    defaultVariants: {
                        intent: "default",
                        size: "base"
                    }
                }),
                o = [
                    ["Low Risk Grade", "Low Risk", "L"],
                    ["Medium Risk Grade", "Medium Risk", "M"],
                    ["High Risk Grade", "High Risk", "H"],
                    ["Not Borrowable", "None", "N"]
                ],
                i = ["low", "medium", "high"];

            function c(e) {
                var t, n, a;
                let {
                    level: c,
                    rounded: d,
                    colored: u,
                    className: m,
                    size: x
                } = e, f = "long" === x ? 0 : "icon" === x ? 2 : 1, h = null !== (n = null === (t = o[c]) || void 0 === t ? void 0 : t[f]) && void 0 !== n ? n : "", g = "short" === x ? null !== (a = null == h ? void 0 : h.split(" ")[0]) && void 0 !== a ? a : "" : h;
                return (0, r.jsx)("div", {
                    className: (0, s.cn)(l({
                        intent: u ? i[c] : "default",
                        size: x,
                        className: [d && "rounded-full", m]
                    })),
                    children: g
                })
            }
        },
        33751: function(e, t, n) {
            "use strict";
            var r = n(57437),
                a = n(2265),
                s = n(69484),
                l = n(65730);
            let o = (0, s.j)(["cursor-pointer rounded-xl border"], {
                    variants: {
                        state: {
                            default: ["border-gray-700", "hover:border-white", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"],
                            selected: ["border border-primary-900", "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-900"]
                        },
                        overlay: {
                            disabled: ["cursor-not-allowed opacity-50", "focus-visible:ring-0"]
                        }
                    },
                    defaultVariants: {
                        state: "default"
                    },
                    compoundVariants: [{
                        state: "default",
                        overlay: "disabled",
                        class: "hover:border-gray-700"
                    }]
                }),
                i = a.forwardRef((e, t) => {
                    let {
                        state: n,
                        children: a,
                        className: s,
                        onClick: i,
                        disabled: c,
                        ...d
                    } = e;
                    return (0, r.jsx)("div", {
                        ref: t,
                        tabIndex: c ? void 0 : 0,
                        className: (0, l.cn)(o({
                            state: n,
                            overlay: c ? "disabled" : void 0,
                            className: s
                        })),
                        onClick: i,
                        onKeyUp: e => {
                            "Enter" === e.code && i && i(e)
                        },
                        ...d,
                        children: a
                    })
                });
            i.displayName = "SelectableBox", t.Z = i
        },
        78670: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(57437),
                a = n(65730);

            function s(e) {
                let {
                    height: t,
                    rounded: n,
                    expand: s,
                    className: l
                } = e;
                return (0, r.jsx)("div", {
                    style: {
                        height: t
                    },
                    className: (0, a.cn)("animate-pulse rounded-[4px] bg-gray-700", s && "flex-1", n && "rounded-lg", l)
                })
            }
        },
        58275: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var r = n(57437);
            n(2265);
            var a = n(51116),
                s = n(8753),
                l = n(74432),
                o = n(73229),
                i = n(67309),
                c = n.n(i),
                d = n(20228),
                u = n(65730);

            function m(e) {
                var t;
                let {
                    columns: n,
                    data: i,
                    state: m,
                    borderless: x,
                    className: f,
                    hasHoverState: h = !1,
                    hasCustomRow: g = !1,
                    onSortingChange: b,
                    onExpandedChange: p
                } = e, v = (0, s.b7)({
                    data: i,
                    columns: n,
                    state: m,
                    defaultColumn: {
                        size: Number.MAX_SAFE_INTEGER,
                        maxSize: Number.MAX_SAFE_INTEGER,
                        enableSorting: !1,
                        cell: e => {
                            let {
                                getValue: t
                            } = e;
                            return (0, r.jsx)(d.Ac, {
                                children: t()
                            })
                        }
                    },
                    getCoreRowModel: (0, l.sC)(),
                    getExpandedRowModel: (0, l.rV)(),
                    getSubRows: e => e.subRows,
                    onSortingChange: b,
                    onExpandedChange: p
                });
                return (0, r.jsxs)("table", {
                    className: (0, u.cn)(c().table, x && c().borderless, "border-collapse", f),
                    children: [(0, r.jsx)("thead", {
                        children: v.getHeaderGroups().map(e => (0, r.jsx)("tr", {
                            children: e.headers.map((e, n) => (0, r.jsx)("th", {
                                style: {
                                    width: e.getSize() === Number.MAX_SAFE_INTEGER ? "auto" : e.getSize()
                                },
                                children: (0, r.jsx)("div", {
                                    className: "text-sm font-normal text-gray-400",
                                    children: e.isPlaceholder ? null : e.column.getCanSort() ? (0, r.jsx)("div", {
                                        className: e.column.getCanSort() ? "cursor-pointer" : "",
                                        onClick: e.column.getToggleSortingHandler(),
                                        children: (0, r.jsxs)(o.Z, {
                                            alignItems: "center",
                                            className: "gap-0.5 leading-tight",
                                            justifyContent: 0 === n ? "start" : "end",
                                            row: !0,
                                            children: [(0, s.ie)(e.column.columnDef.header, e.getContext()), (0, r.jsx)("div", {
                                                children: null !== (t = ({
                                                    asc: (0, r.jsx)(a.qwl, {}),
                                                    desc: (0, r.jsx)(a.dbR, {})
                                                })[e.column.getIsSorted()]) && void 0 !== t ? t : (0, r.jsx)(a.CFC, {})
                                            })]
                                        })
                                    }) : (0, s.ie)(e.column.columnDef.header, e.getContext())
                                })
                            }, e.id))
                        }, e.id))
                    }), (0, r.jsx)("tbody", {
                        children: v.getRowModel().rows.map((e, t) => {
                            var n, a, l, o, i;
                            let d = 1 === e.depth,
                                m = d && null !== (i = null == e ? void 0 : null === (a = e.getParentRow()) || void 0 === a ? void 0 : null === (n = a.subRows) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0,
                                x = d ? null === (o = e.getParentRow()) || void 0 === o ? void 0 : null === (l = o.subRows[m - 1]) || void 0 === l ? void 0 : l.index : 0;
                            return (0, r.jsx)("tr", {
                                className: (0, u.cn)(0 === e.depth && e.getIsExpanded() && c().expand, 1 === e.depth && e.parentId && c()["expand-child"], 1 === e.depth && x === e.index && c()["expand-last-child"], h && "hover:text-primary-900", 0 === t && g && c()["custom-row"]),
                                children: e.getVisibleCells().map(e => (0, r.jsx)("td", {
                                    children: (0, s.ie)(e.column.columnDef.cell, e.getContext())
                                }, e.id))
                            }, e.id)
                        })
                    })]
                })
            }
        },
        34636: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return i
                },
                m4: function() {
                    return o
                }
            });
            var r = n(57437);
            n(2265);
            var a = n(69484),
                s = n(65730);
            let l = (0, a.j)(["flex items-center justify-center gap-1 rounded-[20px] leading-none"], {
                variants: {
                    intent: {
                        fill: ["bg-gray-500", "text-gray-40", "border-[0.5px]", "border-[#68757B]"],
                        outline: ["border", "border-gray-40", "text-gray-40"]
                    },
                    expiration: {
                        high: "rounded-lg border-error-red bg-gradient-to-b from-[#360300] from-[-100%] to-error-red text-gray-40",
                        medium: "rounded-lg border-error-orange bg-gradient-to-b from-[#371A00] from-[-100%] to-error-orange text-gray-40",
                        low: "rounded-lg border-error-yellow bg-gradient-to-b from-[#3F3100] from-[-100%] to-error-yellow text-gray-40",
                        expired: "rounded-lg border-gray-600 bg-gradient-to-b from-[#3C3C3C] from-[-100%] to-[#AAA] text-gray-40"
                    },
                    liquidation: {
                        high: "rounded-lg border-error-red bg-gradient-to-b from-[#360300] from-[-100%] to-error-red text-gray-40",
                        medium: "rounded-lg border-error-yellow bg-gradient-to-b from-[#3F3100] from-[-100%] to-error-yellow text-gray-40"
                    },
                    size: {
                        base: ["h-[18px] px-2 py-1 text-xs"]
                    }
                },
                defaultVariants: {
                    intent: "fill",
                    size: "base"
                }
            });

            function o(e) {
                if (void 0 != e) {
                    if (e.lte(1.02)) return "high";
                    if (e.gt(1.02) && e.lt(1.12)) return "medium"
                }
            }

            function i(e) {
                let {
                    label: t,
                    icon: n,
                    className: a,
                    intent: o,
                    expiration: i,
                    liquidation: c,
                    size: d
                } = e;
                return (0, r.jsxs)("div", {
                    className: (0, s.cn)(l({
                        intent: o,
                        expiration: i,
                        liquidation: c,
                        size: d,
                        className: [n && "px-3", a]
                    })),
                    children: [n, (0, r.jsx)("div", {
                        className: "leading-none",
                        children: t
                    })]
                })
            }
        },
        20228: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ac: function() {
                    return x
                },
                HB: function() {
                    return h
                },
                LY: function() {
                    return m
                },
                YA: function() {
                    return f
                },
                eN: function() {
                    return c
                },
                ip: function() {
                    return d
                },
                oD: function() {
                    return g
                },
                tt: function() {
                    return u
                }
            });
            var r = n(57437);
            n(2265);
            var a = n(63779),
                s = n(65730),
                l = n(79728),
                o = n.n(l);

            function i(e, t) {
                let {
                    className: n,
                    style: l,
                    centered: i,
                    color: c,
                    children: d,
                    black: u,
                    bold: m,
                    medium: x,
                    secondary: f,
                    ghost: h,
                    ...g
                } = t;
                return (0, r.jsx)("span", {
                    style: (0, a.Z)(c && {
                        color: c
                    }, l),
                    className: (0, s.cn)(e, i && o().alignCenter, u && o().black, m && o().bold, x && o().medium, f && o().secondary, h && o().ghost, n),
                    ...g,
                    children: d
                })
            }

            function c(e) {
                return i(o().headline2, e)
            }

            function d(e) {
                return i(o().title, e)
            }

            function u(e) {
                return i(o().subtitle, e)
            }

            function m(e) {
                return i(o().subtitle2, e)
            }

            function x(e) {
                return i(o().body, e)
            }

            function f(e) {
                return i(o().body2, e)
            }

            function h(e) {
                return i(o().caption, e)
            }

            function g(e) {
                return i(o().button, e)
            }
        },
        83509: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(57437),
                a = n(84844),
                s = n(65730);

            function l(e) {
                var t;
                let {
                    trigger: n,
                    content: l,
                    rootProps: o,
                    contentProps: i,
                    arrowProps: c
                } = e;
                return (0, r.jsx)(a.zt, {
                    delayDuration: 150,
                    children: (0, r.jsxs)(a.fC, { ...o,
                        children: [(0, r.jsx)(a.xz, {
                            asChild: !0,
                            children: (0, r.jsx)("div", {
                                className: "cursor-pointer",
                                children: n
                            })
                        }), (0, r.jsx)(a.h_, {
                            children: (0, r.jsxs)(a.VY, { ...i,
                                sideOffset: null !== (t = null == i ? void 0 : i.sideOffset) && void 0 !== t ? t : 5,
                                className: (0, s.cn)("z-[1000] select-none rounded-[10px] bg-gray-600 p-3 text-xs font-medium text-gray-40 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade", null == i ? void 0 : i.className),
                                children: [l, (0, r.jsx)(a.Eh, { ...c,
                                    className: (0, s.cn)("fill-gray-600", null == c ? void 0 : c.className)
                                })]
                            })
                        })]
                    })
                })
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
        1991: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return u
                },
                p: function() {
                    return a
                }
            });
            var r, a, s = n(24994),
                l = n(6490),
                o = n(99496),
                i = n(77647),
                c = n(4691),
                d = n(25427);
            (r = a || (a = {})).LOW_RISK = "LOW_RISK", r.MEDIUM_RISK = "MEDIUM_RISK", r.HIGH_RISK = "HIGH_RISK";
            let u = {
                [a.LOW_RISK]: {
                    categoryType: a.LOW_RISK,
                    title: "Low Risk",
                    tokens: {
                        [s.R.id]: Object.values(c.wb[s.R.id]).filter(e => 0 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [l.F.id]: Object.values(c.wb[l.F.id]).filter(e => 0 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [o.e.id]: Object.values(c.wb[o.e.id]).filter(e => 0 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [i.y.id]: Object.values(c.wb[i.y.id]).filter(e => 0 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        }))
                    },
                    riskTranche: 0,
                    mode: d.zi.CROSS,
                    isEModeAvailable: !0
                },
                [a.MEDIUM_RISK]: {
                    categoryType: a.MEDIUM_RISK,
                    title: "Medium Risk",
                    tokens: {
                        [s.R.id]: Object.values(c.wb[s.R.id]).filter(e => 1 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [l.F.id]: Object.values(c.wb[l.F.id]).filter(e => 1 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [o.e.id]: Object.values(c.wb[o.e.id]).filter(e => 1 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [i.y.id]: Object.values(c.wb[i.y.id]).filter(e => 1 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        }))
                    },
                    riskTranche: 1,
                    mode: d.zi.ISOLATED,
                    isEModeAvailable: !1
                },
                [a.HIGH_RISK]: {
                    categoryType: a.HIGH_RISK,
                    title: "High Risk",
                    tokens: {
                        [s.R.id]: Object.values(c.wb[s.R.id]).filter(e => 2 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [l.F.id]: Object.values(c.wb[l.F.id]).filter(e => 2 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [o.e.id]: Object.values(c.wb[o.e.id]).filter(e => 2 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        })),
                        [i.y.id]: Object.values(c.wb[i.y.id]).filter(e => 2 === e.riskTranche).map(e => ({
                            tokenAddress: e.oTokenAddress,
                            logoSrc: e.logoSrc
                        }))
                    },
                    riskTranche: 2,
                    mode: d.zi.ISOLATED,
                    isEModeAvailable: !1
                }
            }
        },
        66358: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = Array(e.length).fill(0),
                    n = Array(e.length).fill(0),
                    r = Array(e.length).fill(0);
                for (let a = e.length - 1; a >= 0; a--) {
                    let s = e[a];
                    n[a] = Number(s.totalDeposit);
                    let l = Number(s.interestRate) / 1e9 * Number(s.totalBorrow);
                    if (r[a] = l, s.cumulativeTotalDeposit > 0)
                        for (let r = e.length - 1; r >= a; r--) t[r] += Number(l) * Number(n[r]) / Number(s.cumulativeTotalDeposit)
                }
                let a = t.map((e, t) => n[t] > 0 ? e / Number(n[t]) : 0),
                    s = a.map((t, n) => ({
                        depositAPY: (1 + t / 365) ** 365 - 1,
                        borrowAPY: (1 + Number(e[n].interestRate) / 1e9 / 365) ** 365 - 1
                    }));
                return s
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        8625: function(e) {
            e.exports = {
                container: "Box_container__csh5r",
                column: "Box_column__rUfUn",
                row: "Box_row__bZwLD"
            }
        },
        28626: function(e) {
            e.exports = {
                divider: "Divider_divider__amOyo",
                horizontal: "Divider_horizontal__8tGvV",
                vertical: "Divider_vertical__y28yz"
            }
        },
        97634: function(e) {
            e.exports = {
                "switch-root": "Switch_switch-root__b_zh2",
                "switch-thumb": "Switch_switch-thumb__Rt7nm",
                disabled: "Switch_disabled__aKtgF"
            }
        },
        67309: function(e) {
            e.exports = {
                table: "Table_table__54w7U",
                borderless: "Table_borderless__vs2gd",
                expand: "Table_expand__ZGp69",
                "expand-child": "Table_expand-child__IunWt",
                "expand-last-child": "Table_expand-last-child__apEe9",
                "custom-row": "Table_custom-row__rYoxG"
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
        61396: function(e, t, n) {
            e.exports = n(34724)
        },
        96889: function(e, t, n) {
            var r = n(60455),
                a = n(54703);
            e.exports = function(e, t, n, s) {
                return null == e ? [] : (a(t) || (t = null == t ? [] : [t]), a(n = s ? void 0 : n) || (n = null == n ? [] : [n]), r(e, t, n))
            }
        },
        88490: function(e, t, n) {
            var r = n(38347)(function(e, t, n) {
                return e + (n ? " " : "") + t.toUpperCase()
            });
            e.exports = r
        },
        42884: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return a
                }
            });
            var r = n(2265);

            function a(e) {
                let t = (0, r.useRef)({
                    value: e,
                    previous: e
                });
                return (0, r.useMemo)(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
            }
        }
    }
]);
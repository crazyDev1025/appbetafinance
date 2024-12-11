"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [35], {
        30805: function(e, a, t) {
            t.d(a, {
                Z: function() {
                    return X
                }
            });
            var r = t(60328),
                d = t(1181),
                o = t(25427),
                n = t(68449);

            function i(e) {
                let a = Object.entries(e).map(e => {
                    let [a, t] = e;
                    return [a, {
                        code: a,
                        message: t
                    }]
                });
                return Object.fromEntries(a)
            }
            i({}), i({
                SUBACCOUNT_NOT_FOUND: "Subaccount is not found in the system"
            });
            let c = n.z.enum(["CROSS", "ISOLATED"]),
                s = n.z.object({
                    name: n.z.string(),
                    mode: c,
                    riskLevel: n.z.number().int().gte(0).lte(2),
                    assetCategory: n.z.string()
                }),
                l = n.z.object({
                    userAddress: n.z.string(),
                    id: n.z.number(),
                    name: n.z.string().nullable(),
                    mode: n.z.enum(["CROSS", "ISOLATED", "STABLECOIN_E", "ETH_E"]),
                    riskLevel: n.z.number(),
                    assetCategory: n.z.string(),
                    stale: n.z.boolean().optional()
                });
            n.z.object({
                id: n.z.string(),
                token: n.z.string(),
                numTranches: n.z.number(),
                deposits: n.z.array(n.z.number()),
                borrows: n.z.array(n.z.number()),
                healthFactor: n.z.string()
            });
            let b = n.z.object({
                    data: n.z.array(l),
                    stale: n.z.boolean().optional()
                }),
                k = n.z.object({
                    success: n.z.boolean()
                }),
                f = (0, r.vR)(),
                m = n.z.string(),
                u = f.router({
                    rename: {
                        method: "PUT",
                        path: "/account/:id/rename",
                        pathParams: n.z.object({
                            id: m
                        }),
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        body: n.z.object({
                            name: n.z.string()
                        }),
                        responses: {
                            200: l,
                            404: f.type()
                        },
                        summary: "Rename the specified account. The account must belong to the authenticated user."
                    },
                    delete: {
                        method: "DELETE",
                        path: "/account/:id",
                        pathParams: n.z.object({
                            id: m
                        }),
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        body: n.z.literal(""),
                        responses: {
                            200: k,
                            404: f.type(),
                            500: n.z.string()
                        },
                        summary: "Delete the specified account. The account must belong to the authenticated user."
                    },
                    getAccountMarketData: {
                        method: "GET",
                        path: "/accounts",
                        headers: n.z.object({
                            "cache-control": n.z.string().optional()
                        }),
                        query: n.z.object({
                            chainId: o.a_,
                            userAddress: o.kL,
                            subaccountIds: n.z.array(n.z.string())
                        }),
                        responses: {
                            200: o.mt
                        },
                        summary: "Get market data for all accounts"
                    },
                    getUserBalances: {
                        method: "GET",
                        path: "/account/balances",
                        headers: n.z.object({
                            "cache-control": n.z.string().optional()
                        }),
                        query: n.z.object({
                            chainId: o.a_,
                            userAddress: o.kL,
                            subaccountIds: n.z.array(n.z.string())
                        }),
                        responses: {
                            200: o.mt
                        },
                        summary: "Get all deposits only for all user subaccounts."
                    }
                }),
                p = (0, r.vR)();
            n.z.object({
                address: n.z.string(),
                name: n.z.string(),
                assetSymbol: n.z.string(),
                imgURL: n.z.string()
            }), n.z.object({
                collateralFactor: n.z.number(),
                borrowFactor: n.z.number(),
                collateralIsolated: n.z.boolean(),
                numTranches: n.z.number(),
                depositsByTranche: n.z.array(n.z.number()),
                borrowsByTranche: n.z.array(n.z.number()),
                interestRateByTranche: n.z.array(n.z.number()),
                depositRateByTranche: n.z.array(n.z.number()),
                supplyCaps: n.z.array(n.z.number()),
                borrowCaps: n.z.array(n.z.number()),
                expirationTimestamp: n.z.number(),
                reserveFee: n.z.number(),
                collateralRiskTranche: n.z.number()
            }), n.z.object({
                intercept: n.z.number(),
                kink: n.z.number(),
                slope: n.z.number(),
                slopeKink: n.z.number()
            });
            let h = n.z.object({
                    tvl: n.z.string(),
                    deposit: n.z.string(),
                    borrow: n.z.string(),
                    numMarket: n.z.number()
                }),
                g = n.z.object({
                    borrowableMarkets: n.z.array(n.z.string()),
                    noBorrowMarkets: n.z.array(n.z.string()),
                    underlyings: n.z.array(n.z.string())
                }),
                x = p.router({
                    getMarketAddresses: {
                        method: "GET",
                        path: "/market-addresses",
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        responses: {
                            200: g
                        },
                        description: "These addresess are also used in DefiLlama Adapter to get deopsit value and calculate TVL.",
                        summary: "Get markets' oToken and underlying addresses"
                    },
                    getMarketStats: {
                        method: "GET",
                        path: "/market-stats",
                        headers: n.z.object({
                            "cache-control": n.z.string().optional()
                        }),
                        responses: {
                            200: h
                        },
                        summary: "Get market stats for all chains"
                    },
                    getMarketOverview: {
                        method: "GET",
                        path: "/markets",
                        headers: n.z.object({
                            "cache-control": n.z.string().optional()
                        }),
                        query: n.z.object({
                            chainId: o.a_,
                            marketAddresses: n.z.array(o.kL),
                            marketAddressesNoBorrow: n.z.array(o.kL)
                        }),
                        responses: {
                            200: o.Rn
                        },
                        summary: "Get market overview"
                    },
                    updateMarketOverview: {
                        method: "POST",
                        path: "/markets",
                        body: null,
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        responses: {
                            200: n.z.object({
                                message: n.z.string()
                            })
                        },
                        summary: "Update market overview"
                    }
                }),
                T = (0, r.vR)(),
                I = n.z.object({
                    address: n.z.string().nullable(),
                    deposit: n.z.bigint().nullable(),
                    borrow: n.z.bigint().nullable(),
                    oraclePrice: n.z.number().nullable(),
                    borrowUsd: n.z.number().nullable(),
                    depositUsd: n.z.number().nullable()
                }),
                y = n.z.object({
                    userAccount: n.z.string(),
                    healthFactor: n.z.number(),
                    isolatedCollateral: I,
                    markets: n.z.array(I),
                    mode: n.z.number()
                }),
                Z = T.router({
                    getEvaluateAccounts: {
                        method: "GET",
                        path: "/monitor/evaluate-accounts",
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        responses: {
                            200: n.z.array(y)
                        },
                        summary: "Retrieves the health factors and entered markets information for the account"
                    }
                }),
                C = (0, r.vR)(),
                B = C.router({
                    getOraclePrices: {
                        method: "GET",
                        path: "/oracles",
                        headers: n.z.object({
                            "cache-control": n.z.string().optional()
                        }),
                        query: n.z.object({
                            chainId: o.a_,
                            tokenAddresses: n.z.array(o.kL)
                        }),
                        responses: {
                            200: o.UR
                        },
                        summary: "Get oracle prices from MockOracle contract"
                    },
                    updateOraclePrices: {
                        method: "POST",
                        path: "/oracles",
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        body: null,
                        responses: {
                            200: n.z.object({
                                message: n.z.string()
                            })
                        },
                        summary: "Update oracle prices"
                    }
                }),
                N = (0, r.vR)(),
                S = n.z.object({
                    walletAddress: n.z.string(),
                    rank: n.z.number(),
                    loyalty: n.z.number(),
                    boost: n.z.number(),
                    point: n.z.object({
                        total: n.z.string(),
                        deposit: n.z.string(),
                        borrow: n.z.string()
                    })
                }),
                z = N.router({
                    updateUsersPoints: {
                        method: "PUT",
                        path: "/points/update",
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        responses: {
                            201: null,
                            500: null
                        },
                        body: null,
                        summary: "Updates user shares balances and updates points earned for the user"
                    },
                    getUserPoint: {
                        method: "GET",
                        path: "/points/me",
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        responses: {
                            200: S
                        },
                        summary: "Get point and rank for the authenticated user"
                    },
                    getUserClaim: {
                        method: "GET",
                        path: "/points/claim",
                        responses: {
                            200: n.z.object({
                                proofs: n.z.array(n.z.string()),
                                amount: n.z.string()
                            })
                        }
                    },
                    getLeaderboard: {
                        method: "GET",
                        path: "/points/leaderboard",
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        responses: {
                            200: n.z.array(S)
                        },
                        summary: "Rank wallet points for leaderboard"
                    }
                }),
                w = n.z.object({
                    referralCode: n.z.string()
                }),
                A = n.z.object({
                    message: n.z.string()
                }),
                F = n.z.object({
                    referralCode: n.z.string(),
                    pw: n.z.string()
                }),
                v = n.z.object({
                    message: n.z.string()
                }),
                E = n.z.object({
                    codes: n.z.string().array()
                }),
                D = n.z.object({
                    referredUserAddress: n.z.string(),
                    pw: n.z.string()
                }),
                R = n.z.object({
                    numCodes: n.z.number(),
                    referringUserAddress: n.z.string(),
                    pw: n.z.string()
                }),
                L = n.z.object({
                    code: n.z.string()
                }),
                M = n.z.object({
                    valid: n.z.boolean()
                });
            i({
                REFERRAL_CODE_INVALID: "Invalid referral code or referral code already used."
            });
            let O = (0, r.vR)(),
                q = O.router({
                    register: {
                        method: "POST",
                        path: "/referral/register",
                        responses: {
                            201: A,
                            400: O.type()
                        },
                        body: w,
                        summary: "Register referral codes"
                    },
                    invalidate: {
                        method: "POST",
                        path: "/referral/invalidate",
                        responses: {
                            201: v
                        },
                        body: F,
                        summary: "Invalidate referral codes"
                    },
                    generateEarlyBird: {
                        method: "POST",
                        path: "/referral/generate/early-bird",
                        responses: {
                            201: E
                        },
                        body: D,
                        summary: "Generate referral codes for the early-bird"
                    },
                    generateReferred: {
                        method: "POST",
                        path: "/referral/generate/referred",
                        responses: {
                            201: E
                        },
                        body: R,
                        summary: "Generate referral codes for referred users"
                    },
                    validate: {
                        method: "GET",
                        path: "/referral/validate",
                        responses: {
                            200: M
                        },
                        query: L,
                        summary: "Check if a referral code is valid for the authenticated user"
                    }
                }),
                _ = n.z.object({
                    addressId: n.z.string()
                }),
                H = (0, r.vR)(),
                j = H.router({
                    get: {
                        method: "GET",
                        path: "/user",
                        responses: {
                            200: _
                        },
                        summary: "Retrieve the authenticated user"
                    },
                    getAccounts: {
                        method: "GET",
                        path: "/user/accounts",
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        responses: {
                            200: b,
                            401: H.type()
                        },
                        summary: "Retrieve a list of all the accounts associated with the authenticated user"
                    },
                    createAccount: {
                        method: "POST",
                        path: "/user/accounts",
                        body: s,
                        query: n.z.object({
                            chainId: o.a_
                        }),
                        responses: {
                            201: l
                        },
                        summary: "Create an account for the authenticated user",
                        description: "This method is not idempotent. It always creates new subaccount with auto-increment id."
                    }
                }),
                P = (0, r.vR)();
            var K = P.router({
                    account: u,
                    market: x,
                    monitor: Z,
                    oracle: B,
                    referral: q,
                    user: j,
                    points: z
                }, {
                    baseHeaders: n.z.object({
                        authorization: n.z.string().optional()
                    })
                }),
                U = t(27033),
                G = t(50646);
            let W = (0, d.R)(K, {
                baseUrl: "https://omni-api-2sjjqcgcja-ew.a.run.app/",
                baseHeaders: {},
                api: async e => {
                    {
                        let {
                            address: a
                        } = (0, U.D0)(), t = a ? G.wX.getState().authTokens[a.slice(2).toLowerCase()] : void 0;
                        t && (e.headers.authorization = "Bearer ".concat(t))
                    }
                    return (0, r.I8)(e)
                },
                jsonQuery: !0
            });
            var X = W
        },
        38283: function(e, a, t) {
            t.d(a, {
                a: function() {
                    return c
                }
            });
            var r = t(18813),
                d = t.n(r),
                o = t(95736),
                n = t.n(o);
            let i = () => window.amplitude,
                c = new class {
                    setAuthContext(e) {
                        this.authContext = e
                    }
                    setSelectedSubaccount(e) {
                        this.selectedSubaccountId = e
                    }
                    disconnectWallet() {
                        this._trackEvent("Disconnect Wallet")
                    }
                    switchNetwork(e) {
                        let {
                            chainId: a
                        } = e;
                        this._trackEvent("Switch Network", {
                            chainId: a
                        })
                    }
                    selectSubaccount(e) {
                        let {
                            subaccountId: a
                        } = e;
                        this._trackEvent("Select Subaccount", {
                            selectedSubaccountId: a
                        })
                    }
                    createSubaccount(e) {
                        let {
                            subaccountId: a,
                            subaccountName: t,
                            categoryType: r
                        } = e;
                        this._trackEvent("Create Subaccount", {
                            subaccountId: a,
                            subaccountName: t,
                            categoryType: r
                        })
                    }
                    renameSubaccount(e) {
                        let {
                            subaccountId: a,
                            subaccountName: t
                        } = e;
                        this._trackEvent("Rename Subaccount", {
                            subaccountId: a,
                            subaccountName: t
                        })
                    }
                    deleteSubaccount(e) {
                        let {
                            subaccountId: a
                        } = e;
                        this._trackEvent("Delete Subaccount", {
                            subaccountId: a
                        })
                    }
                    clickDepositButton(e) {
                        let {
                            component: a
                        } = e;
                        this._trackEvent("Click Deposit Button", {
                            component: a
                        })
                    }
                    clickWithdrawButton(e) {
                        let {
                            component: a
                        } = e;
                        this._trackEvent("Click Withdraw Button", {
                            component: a
                        })
                    }
                    clickBorrowButton(e) {
                        let {
                            component: a
                        } = e;
                        this._trackEvent("Click Borrow Button", {
                            component: a
                        })
                    }
                    clickRepayButton(e) {
                        let {
                            component: a
                        } = e;
                        this._trackEvent("Click Repay Button", {
                            component: a
                        })
                    }
                    toggleHideZeroBalanceAssetCheckbox(e) {
                        let {
                            isChecked: a
                        } = e;
                        this._trackEvent("Toggle Hide Zero Balance Asset Checkbox", {
                            isChecked: a
                        })
                    }
                    clickActionPageTabButton(e) {
                        let {
                            currentTab: a
                        } = e;
                        this._trackEvent("Click Action Page Tab Button", {
                            currentTab: a
                        })
                    }
                    selectAsset(e) {
                        let {
                            tokenAddress: a
                        } = e;
                        this._trackEvent("Select Asset", {
                            tokenAddress: a
                        })
                    }
                    selectRiskPool(e) {
                        let {
                            trancheLevel: a
                        } = e;
                        this._trackEvent("Select Risk Pool", {
                            trancheLevel: a
                        })
                    }
                    clickMaxInputButton(e) {
                        let {
                            maxValue: a
                        } = e;
                        this._trackEvent("Click Max Input Button", {
                            maxValue: a
                        })
                    }
                    approveToken(e) {
                        let {
                            actionType: a,
                            tokenAddress: t
                        } = e;
                        this._trackEvent("Approve Token", {
                            actionType: a,
                            tokenAddress: t
                        })
                    }
                    enterMarkets() {
                        this._trackEvent("Enter Markets")
                    }
                    enterIsolatedMarket() {
                        this._trackEvent("Enter Isolated Market")
                    }
                    clearMarkets() {
                        this._trackEvent("Clear Markets")
                    }
                    enterMode(e) {
                        let {
                            mode: a
                        } = e;
                        this._trackEvent("Enter Mode", {
                            mode: a
                        })
                    }
                    exitMode(e) {
                        let {
                            currentMode: a
                        } = e;
                        this._trackEvent("Exit Mode", {
                            currentMode: a
                        })
                    }
                    clickDetailButton() {
                        this._trackEvent("Click Detail Button")
                    }
                    toggleExpandTableRow(e) {
                        let {
                            isExpanded: a,
                            component: t
                        } = e;
                        this._trackEvent("Toggle Expand Table Row", {
                            isExpanded: a,
                            component: t
                        })
                    }
                    selectAssetTableNetwork(e) {
                        let {
                            selectedChainId: a
                        } = e;
                        this._trackEvent("Select Asset Table Network", {
                            selectedChainId: a
                        })
                    }
                    toggleShowRiskPoolLegend(e) {
                        let {
                            isOpened: a
                        } = e;
                        this._trackEvent("Toggle Show Risk Pool Legend", {
                            isOpened: a
                        })
                    }
                    clickChainLink(e) {
                        let {
                            url: a
                        } = e;
                        this._trackEvent("Click Chain Link", {
                            url: a
                        })
                    }
                    toggleCurrentUtilizationRate(e) {
                        let {
                            isOpened: a
                        } = e;
                        this._trackEvent("Toggle Current Utilization Rate", {
                            isOpened: a
                        })
                    }
                    clickActionConfirmButton() {
                        this._trackEvent("Click Action Confirm Button")
                    }
                    pendingTransaction(e) {
                        let {
                            actionType: a,
                            tokenAddress: t,
                            trancheLevel: r,
                            amount: d,
                            isIsolated: o,
                            subId: n
                        } = e;
                        this._trackEvent("Pending Transaction", {
                            actionType: a,
                            tokenAddress: t,
                            trancheLevel: r,
                            amount: d,
                            isIsolated: o,
                            subId: n
                        })
                    }
                    confirmPendingTransaction() {
                        this._trackEvent("Confirm Pending Transaction")
                    }
                    switchNetworkSuccess(e) {
                        let {
                            chainId: a
                        } = e;
                        this._trackEvent("Switch Network Success", {
                            chainId: a
                        })
                    }
                    switchNetworkFailed(e) {
                        let {
                            errorMsg: a
                        } = e;
                        this._trackEvent("Switch Network Failed", {
                            errorMsg: a
                        })
                    }
                    transactionSuccess(e) {
                        let {
                            actionType: a,
                            txHash: t
                        } = e;
                        this._trackEvent("Transaction Success", {
                            actionType: a,
                            txHash: t
                        })
                    }
                    transactionFailed(e) {
                        let {
                            actionType: a,
                            errorMsg: t
                        } = e;
                        this._trackEvent("Transaction Failed", {
                            actionType: a,
                            errorMsg: t
                        })
                    }
                    subaccountFailed(e) {
                        let {
                            type: a,
                            error: t
                        } = e;
                        this._trackEvent("Subaccount Failed", {
                            type: a,
                            error: t
                        })
                    }
                    enterMarketFailed() {
                        this._trackEvent("Enter Market Failed")
                    }
                    clearMarketFailed() {
                        this._trackEvent("Clear Market Failed")
                    }
                    enterModeFailed() {
                        this._trackEvent("Enter Mode Failed")
                    }
                    exitModeFailed() {
                        this._trackEvent("Exit Mode Failed")
                    }
                    constructor() {
                        this._trackEvent = (e, a) => {
                            try {
                                var t;
                                let r = n()({
                                    pathname: window.location.pathname,
                                    ...this.authContext,
                                    chain: null === (t = this.authContext) || void 0 === t ? void 0 : t.chain.id,
                                    selectedSubaccountId: this.selectedSubaccountId,
                                    ...a
                                }, d());
                                i().track(e, r)
                            } catch (e) {
                                console.log(e)
                            }
                        }
                    }
                }
        },
        4691: function(e, a, t) {
            t.d(a, {
                DP: function() {
                    return l
                },
                DX: function() {
                    return k
                },
                HN: function() {
                    return b
                },
                Q_: function() {
                    return m
                },
                kb: function() {
                    return h
                },
                ri: function() {
                    return u
                },
                uT: function() {
                    return p
                },
                wb: function() {
                    return f
                },
                z6: function() {
                    return g
                }
            });
            var r = t(64626),
                d = t(64639),
                o = t(24994),
                n = t(6490),
                i = t(99496),
                c = t(77647),
                s = t(25427);
            BigInt(18569809), BigInt(4693726), BigInt(34517424), BigInt(18569809), BigInt(4693726), BigInt(34742728);
            let l = "0xbe1a001fe942f96eea22ba08783140b9dcc09d28",
                b = "0x2a73f85024f101f3fac9fbcbce60707b6b3a6203",
                k = {
                    [o.R.id]: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    [n.F.id]: "0x0b0c1a5e07bec08f301327807e9f227777549ee3",
                    [i.e.id]: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                    [c.y.id]: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1"
                },
                f = {
                    [o.R.id]: {
                        "0x2124dc71859fb57687c18651ddbe2b6200f61296": {
                            oTokenAddress: "0x2124dc71859fb57687c18651ddbe2b6200f61296",
                            underlying: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                            tokenName: "USD Coin",
                            tokenSymbol: "USDC",
                            decimals: 6,
                            collateralFactor: (0, r.Z)(.92),
                            borrowFactor: (0, r.Z)(.93),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e12), (0, r.Z)(2e12), (0, r.Z)(1e12)],
                            logoSrc: "/assets/usdc.svg",
                            underlyingDecimals: BigInt(1e6),
                            trancheIRM: {
                                0: {
                                    kink: .91,
                                    start: .001,
                                    mid: .035,
                                    end: .6
                                },
                                1: {
                                    kink: .85,
                                    start: .01,
                                    mid: .06,
                                    end: .8
                                },
                                2: {
                                    kink: .825,
                                    start: .02,
                                    mid: .1,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .01,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x6a1c08df7fc23bda6937c2c586bc857d82005c2c": {
                            oTokenAddress: "0x6a1c08df7fc23bda6937c2c586bc857d82005c2c",
                            underlying: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                            tokenName: "Tether",
                            tokenSymbol: "USDT",
                            decimals: 6,
                            collateralFactor: (0, r.Z)(.88),
                            borrowFactor: (0, r.Z)(.89),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e12), (0, r.Z)(2e12), (0, r.Z)(1e12)],
                            logoSrc: "/assets/usdt.svg",
                            underlyingDecimals: BigInt(1e6),
                            trancheIRM: {
                                0: {
                                    kink: .8,
                                    start: .001,
                                    mid: .04,
                                    end: .75
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .725,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x3562d6e1820401df802ff67d130e7478fba7448f": {
                            oTokenAddress: "0x3562d6e1820401df802ff67d130e7478fba7448f",
                            underlying: "0x6b175474e89094c44da98b954eedeac495271d0f",
                            tokenName: "Dai Stablecoin",
                            tokenSymbol: "DAI",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.9),
                            borrowFactor: (0, r.Z)(.91),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e24), (0, r.Z)(2e24), (0, r.Z)(1e24)],
                            logoSrc: "/assets/dai.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .85,
                                    start: .001,
                                    mid: .04,
                                    end: .75
                                },
                                1: {
                                    kink: .8,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .775,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x41a040d07a03136316667ae314ecf793a197d242": {
                            oTokenAddress: "0x41a040d07a03136316667ae314ecf793a197d242",
                            underlying: "0x83f20f44975d03b1b09e64809b757c47f942beea",
                            tokenName: "Savings Dai",
                            tokenSymbol: "sDAI",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.9),
                            borrowFactor: (0, r.Z)(.91),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e24), (0, r.Z)(2e24), (0, r.Z)(1e24)],
                            logoSrc: "/assets/sdai.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .85,
                                    start: .001,
                                    mid: .04,
                                    end: .75
                                },
                                1: {
                                    kink: .8,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .775,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x48dd663c0eafb50d7e7da84e465e99ac147784c9": {
                            oTokenAddress: "0x48dd663c0eafb50d7e7da84e465e99ac147784c9",
                            underlying: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                            tokenName: "Wrapped Ether",
                            tokenSymbol: "WETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.89),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(25e20), (0, r.Z)(1e21), (0, r.Z)(5e20)],
                            logoSrc: "/assets/weth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .81,
                                    start: .001,
                                    mid: .04,
                                    end: .8
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .725,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x5df32bb456cc2d1e2de64b932fc7b05bd9351555": {
                            oTokenAddress: "0x5df32bb456cc2d1e2de64b932fc7b05bd9351555",
                            underlying: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                            tokenName: "Wrapped stETH",
                            tokenSymbol: "wstETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.89),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(1e21), (0, r.Z)(5e20), (0, r.Z)(25e19)],
                            logoSrc: "/assets/wsteth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .7,
                                    start: .001,
                                    mid: .045,
                                    end: .85
                                },
                                1: {
                                    kink: .65,
                                    start: .01,
                                    mid: .08,
                                    end: .9
                                },
                                2: {
                                    kink: .625,
                                    start: .02,
                                    mid: .12,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .02,
                                end: .08,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xcfc7acaed9a12e9db812083a77a2e4c5e3b67036": {
                            oTokenAddress: "0xcfc7acaed9a12e9db812083a77a2e4c5e3b67036",
                            underlying: "0xbe1a001fe942f96eea22ba08783140b9dcc09d28",
                            tokenName: "Beta Finance",
                            tokenSymbol: "BETA",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(2e25),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/omni.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.BAND
                        },
                        "0xee713aa17b9de2114587da8aeec64a1d33decef9": {
                            oTokenAddress: "0xee713aa17b9de2114587da8aeec64a1d33decef9",
                            underlying: "0x514910771af9ca656af840dff83e8264ecf986ca",
                            tokenName: "Chainlink",
                            tokenSymbol: "LINK",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(5e23),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/link.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.BAND
                        },
                        "0x28c44a7f76dce91f1fa078d7c8334c01a545001d": {
                            oTokenAddress: "0x28c44a7f76dce91f1fa078d7c8334c01a545001d",
                            underlying: "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
                            tokenName: "Band Protocol",
                            tokenSymbol: "BAND",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e24),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/band.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.BAND
                        },
                        "0xe1c06cb647f1c499775d77487cee588ae7423f57": {
                            oTokenAddress: "0xe1c06cb647f1c499775d77487cee588ae7423f57",
                            underlying: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
                            tokenName: "Pepe",
                            tokenSymbol: "PEPE",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.4),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e30),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/pepe.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .055,
                                end: .15,
                                kink: .075,
                                expiredBonus: .05,
                                softThreshold: 1.4
                            },
                            oracle: s.NO.BAND
                        },
                        "0xe7021fc01ee2a23bdfbabc22d1a1d7ffeafd6f65": {
                            oTokenAddress: "0xe7021fc01ee2a23bdfbabc22d1a1d7ffeafd6f65",
                            underlying: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
                            tokenName: "Shiba Inu",
                            tokenSymbol: "SHIB",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.5),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(5e29),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/shib.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.BAND
                        },
                        "0x80d764d627ac0a53e69b5c4f9c373a24e2275f77": {
                            oTokenAddress: "0x80d764d627ac0a53e69b5c4f9c373a24e2275f77",
                            underlying: "0xb131f4a55907b10d1f0a50d8ab8fa09ec342cd74",
                            tokenName: "Memecoin",
                            tokenSymbol: "MEME",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.3),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(6942e22),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/meme.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .06,
                                end: .15,
                                kink: .075,
                                expiredBonus: .05,
                                softThreshold: 1.4
                            },
                            oracle: s.NO.BAND
                        },
                        "0x500191aa2563563a505c2c1f65b7e5375f9aeaf7": {
                            oTokenAddress: "0x500191aa2563563a505c2c1f65b7e5375f9aeaf7",
                            underlying: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
                            tokenName: "Stella",
                            tokenSymbol: "ALPHA",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(15e24),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/stella.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.BAND
                        },
                        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
                            oTokenAddress: k[o.R.id],
                            underlying: k[o.R.id],
                            tokenName: "Ethereum",
                            tokenSymbol: "ETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.89),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(1e24), (0, r.Z)(1e21), (0, r.Z)(5e20)],
                            logoSrc: "/assets/eth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .81,
                                    start: .001,
                                    mid: .04,
                                    end: .8
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .08,
                                    end: .9
                                },
                                2: {
                                    kink: .7,
                                    start: .02,
                                    mid: .1,
                                    end: .95
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        }
                    },
                    [n.F.id]: {
                        "0xbf84cc279f25d3e42c16c6a128353e2e9f6b19e4": {
                            oTokenAddress: "0xbf84cc279f25d3e42c16c6a128353e2e9f6b19e4",
                            underlying: "0xb8c59767abd52800523f14faa442aa33dd21df61",
                            tokenName: "USD Coin",
                            tokenSymbol: "USDC",
                            decimals: 6,
                            collateralFactor: (0, r.Z)(.9),
                            borrowFactor: (0, r.Z)(.95),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(1e15), (0, r.Z)(1e12), (0, r.Z)(5e11)],
                            logoSrc: "/assets/usdc.svg",
                            underlyingDecimals: BigInt(1e6),
                            trancheIRM: {
                                0: {
                                    kink: .91,
                                    start: .001,
                                    mid: .0345,
                                    end: .63
                                },
                                1: {
                                    kink: .85,
                                    start: .01,
                                    mid: .06,
                                    end: .75
                                },
                                2: {
                                    kink: .8,
                                    start: .02,
                                    mid: .1,
                                    end: .9
                                }
                            },
                            liquidationBonus: {
                                start: .01,
                                end: .1,
                                kink: .9,
                                expiredBonus: .005,
                                softThreshold: 1.12
                            },
                            oracle: s.NO.BAND
                        },
                        "0x2a961f65ccd7546a3206b6096f29ed44da04eca0": {
                            oTokenAddress: "0x2a961f65ccd7546a3206b6096f29ed44da04eca0",
                            underlying: "0x5eed226ac3934903434feaa7f4286754a2ddd00d",
                            tokenName: "Tether",
                            tokenSymbol: "USDT",
                            decimals: 8,
                            collateralFactor: (0, r.Z)(.9),
                            borrowFactor: (0, r.Z)(.95),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(1e17), (0, r.Z)(1e14), (0, r.Z)(5e13)],
                            logoSrc: "/assets/usdt.svg",
                            underlyingDecimals: BigInt(1e8),
                            trancheIRM: {
                                0: {
                                    kink: .91,
                                    start: .001,
                                    mid: .0345,
                                    end: .63
                                },
                                1: {
                                    kink: .85,
                                    start: .01,
                                    mid: .06,
                                    end: .75
                                },
                                2: {
                                    kink: .8,
                                    start: .02,
                                    mid: .1,
                                    end: .9
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .1,
                                kink: .9,
                                expiredBonus: .01,
                                softThreshold: 1.12
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xc18bc8bc03eabc9fcfa2e7e8fd9928d46260afbe": {
                            oTokenAddress: "0xc18bc8bc03eabc9fcfa2e7e8fd9928d46260afbe",
                            underlying: "0x0b0c1a5e07bec08f301327807e9f227777549ee3",
                            tokenName: "Wrapped Ether",
                            tokenSymbol: "WETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.85),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(1e24), (0, r.Z)(1e21), (0, r.Z)(5e20)],
                            logoSrc: "/assets/weth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .81,
                                    start: .001,
                                    mid: .04,
                                    end: .8
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .08,
                                    end: .9
                                },
                                2: {
                                    kink: .7,
                                    start: .02,
                                    mid: .1,
                                    end: .95
                                }
                            },
                            liquidationBonus: {
                                start: .02,
                                end: .1,
                                kink: .9,
                                expiredBonus: .01,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.BAND
                        },
                        "0xe1d54945ac1a67ac4fcf6c9f4def0966fe91b6f7": {
                            oTokenAddress: "0xe1d54945ac1a67ac4fcf6c9f4def0966fe91b6f7",
                            underlying: "0x813db692d73cad8a1da1a272f363bbbb42efa839",
                            tokenName: "Wrapped stETH",
                            tokenSymbol: "wstETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.85),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(1e24), (0, r.Z)(1e21), (0, r.Z)(5e20)],
                            logoSrc: "/assets/wsteth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .81,
                                    start: .001,
                                    mid: .04,
                                    end: .8
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .08,
                                    end: .9
                                },
                                2: {
                                    kink: .7,
                                    start: .02,
                                    mid: .1,
                                    end: .95
                                }
                            },
                            liquidationBonus: {
                                start: .05,
                                end: .1,
                                kink: .9,
                                expiredBonus: .04,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xcc911d98255802c03b4b5524abf95b939851fa7b": {
                            oTokenAddress: "0xcc911d98255802c03b4b5524abf95b939851fa7b",
                            underlying: "0x211a31cc78e6c737626e457b1dce2de1675bb616",
                            tokenName: "Beta Finance",
                            tokenSymbol: "BETA",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 1701295306e3,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e27),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/beta.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .05,
                                end: .2,
                                kink: .9,
                                expiredBonus: .04,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.BAND
                        },
                        "0x1a1a812e68691cddb54932a19706e7a2e9d75992": {
                            oTokenAddress: "0x1a1a812e68691cddb54932a19706e7a2e9d75992",
                            underlying: "0x034d04ee19d49ffe66e5b80d75fb2da84ce7adac",
                            tokenName: "Pepe",
                            tokenSymbol: "PEPE",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.3),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 1701295306e3,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e33),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/pepe.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .08,
                                end: .23,
                                kink: .9,
                                expiredBonus: .05,
                                softThreshold: 1.4
                            },
                            oracle: s.NO.CUSTOM
                        },
                        "0xcd666cf791b52bea5cd44436bc8fd91760263f0e": {
                            oTokenAddress: "0xcd666cf791b52bea5cd44436bc8fd91760263f0e",
                            underlying: "0xcf5f0e2d43805d713cf676d6cf4bafde152e7d9f",
                            tokenName: "Shiba Inu",
                            tokenSymbol: "SHIB",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.3),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 1701295306e3,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e32),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/shib.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .08,
                                end: .23,
                                kink: .9,
                                expiredBonus: .05,
                                softThreshold: 1.4
                            },
                            oracle: s.NO.CUSTOM
                        },
                        "0x0b0c1a5e07bec08f301327807e9f227777549ee3": {
                            oTokenAddress: k[n.F.id],
                            underlying: k[n.F.id],
                            tokenName: "Ethereum",
                            tokenSymbol: "ETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.85),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(1e24), (0, r.Z)(1e21), (0, r.Z)(5e20)],
                            logoSrc: "/assets/eth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .81,
                                    start: .001,
                                    mid: .04,
                                    end: .8
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .08,
                                    end: .9
                                },
                                2: {
                                    kink: .7,
                                    start: .02,
                                    mid: .1,
                                    end: .95
                                }
                            },
                            liquidationBonus: {
                                start: .02,
                                end: .1,
                                kink: .9,
                                expiredBonus: .01,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.BAND
                        }
                    },
                    [i.e.id]: {
                        "0xcd6615ff6083d1a302054574282882afdd04c2b9": {
                            oTokenAddress: "0xcd6615ff6083d1a302054574282882afdd04c2b9",
                            underlying: "0xa2e3356610840701bdf5611a53974510ae27e2e1",
                            tokenName: "Wrapped Beacon ETH",
                            tokenSymbol: "WBETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.89),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(2e21), (0, r.Z)(1e21), (0, r.Z)(5e20)],
                            logoSrc: "/assets/wbeth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .81,
                                    start: .001,
                                    mid: .04,
                                    end: .8
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .725,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .02,
                                end: .8,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x122ffc0c5ff637e4f0e804d2e2af90541dad513e": {
                            oTokenAddress: "0x122ffc0c5ff637e4f0e804d2e2af90541dad513e",
                            underlying: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
                            tokenName: "USD Coin",
                            tokenSymbol: "USDC",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.92),
                            borrowFactor: (0, r.Z)(.93),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e24), (0, r.Z)(2e24), (0, r.Z)(1e24)],
                            logoSrc: "/assets/usdc.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .91,
                                    start: .001,
                                    mid: .035,
                                    end: .6
                                },
                                1: {
                                    kink: .85,
                                    start: .01,
                                    mid: .06,
                                    end: .8
                                },
                                2: {
                                    kink: .825,
                                    start: .02,
                                    mid: .1,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .01,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x7ceac61ca6c29af40a776d97532a1f6932eb0bc9": {
                            oTokenAddress: "0x7ceac61ca6c29af40a776d97532a1f6932eb0bc9",
                            underlying: "0x55d398326f99059ff775485246999027b3197955",
                            tokenName: "Tether",
                            tokenSymbol: "USDT",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.88),
                            borrowFactor: (0, r.Z)(.89),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e24), (0, r.Z)(2e24), (0, r.Z)(1e24)],
                            logoSrc: "/assets/usdt.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .8,
                                    start: .001,
                                    mid: .04,
                                    end: .75
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .725,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xbddd24065f44d62bad321e50ed4912863579c7a8": {
                            oTokenAddress: "0xbddd24065f44d62bad321e50ed4912863579c7a8",
                            underlying: "0xc5f0f7b66764f6ec8c8dff7ba683102295e16409",
                            tokenName: "First Digital USD",
                            tokenSymbol: "FDUSD",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.92),
                            borrowFactor: (0, r.Z)(.93),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e24), (0, r.Z)(2e24), (0, r.Z)(1e24)],
                            logoSrc: "/assets/fdusd.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .91,
                                    start: .001,
                                    mid: .035,
                                    end: .6
                                },
                                1: {
                                    kink: .85,
                                    start: .01,
                                    mid: .06,
                                    end: .8
                                },
                                2: {
                                    kink: .825,
                                    start: .02,
                                    mid: .1,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .01,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x14d3c1ea5ff60a2c799e99707f27e27fe88fac94": {
                            oTokenAddress: "0x14d3c1ea5ff60a2c799e99707f27e27fe88fac94",
                            underlying: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
                            tokenName: "Bitcoin BEP2",
                            tokenSymbol: "BTCB",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.89),
                            borrowFactor: (0, r.Z)(.91),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(15e19), (0, r.Z)(6e19), (0, r.Z)(3e19)],
                            logoSrc: "/assets/btcb.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .79,
                                    start: .001,
                                    mid: .04,
                                    end: .75
                                },
                                1: {
                                    kink: .73,
                                    start: .01,
                                    mid: .07,
                                    end: .85
                                },
                                2: {
                                    kink: .7,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xfc019448f666025945b8c727c3632dc517cfbf33": {
                            oTokenAddress: "0xfc019448f666025945b8c727c3632dc517cfbf33",
                            underlying: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                            tokenName: "Wrapped BNB",
                            tokenSymbol: "WBNB",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.86),
                            borrowFactor: (0, r.Z)(.88),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(2e22), (0, r.Z)(1e22), (0, r.Z)(5e21)],
                            logoSrc: "/assets/wbnb.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .7,
                                    start: .001,
                                    mid: .045,
                                    end: .85
                                },
                                1: {
                                    kink: .65,
                                    start: .01,
                                    mid: .08,
                                    end: .9
                                },
                                2: {
                                    kink: .625,
                                    start: .02,
                                    mid: .12,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x14451624ac2f1e1b15263b859fa7f994866f3041": {
                            oTokenAddress: "0x14451624ac2f1e1b15263b859fa7f994866f3041",
                            underlying: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
                            tokenName: "PancakeSwap",
                            tokenSymbol: "CAKE",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.75),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(6e23),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/cake.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x362152c2a9be347b45551875c7cb6a8a3382fb04": {
                            oTokenAddress: "0x362152c2a9be347b45551875c7cb6a8a3382fb04",
                            underlying: "0xbe1a001fe942f96eea22ba08783140b9dcc09d28",
                            tokenName: "Beta Finance",
                            tokenSymbol: "BETA",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(2e25),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/omni.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xcc9b1ca58dd104c0bc87ed534d6ed1fcda21f022": {
                            oTokenAddress: "0xcc9b1ca58dd104c0bc87ed534d6ed1fcda21f022",
                            underlying: "0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1",
                            tokenName: "STEPN",
                            tokenSymbol: "GMT",
                            decimals: 8,
                            collateralFactor: (0, r.Z)(.5),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(4e14),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/gmt.svg",
                            underlyingDecimals: BigInt(1e8),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xf59b7c2992ec49433bc81b562cf26fcc5d51bd2e": {
                            oTokenAddress: "0xf59b7c2992ec49433bc81b562cf26fcc5d51bd2e",
                            underlying: "0xaec945e04baf28b135fa7c640f624f8d90f1c3a6",
                            tokenName: "Coin98",
                            tokenSymbol: "C98",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.4),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(575e22),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/c98.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .045,
                                end: .125,
                                kink: .075,
                                expiredBonus: .05,
                                softThreshold: 1.4
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": {
                            oTokenAddress: k[i.e.id],
                            underlying: k[i.e.id],
                            tokenName: "Binance Coin",
                            tokenSymbol: "BNB",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.86),
                            borrowFactor: (0, r.Z)(.88),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(2e22), (0, r.Z)(1e22), (0, r.Z)(5e21)],
                            logoSrc: "/assets/wbnb.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .7,
                                    start: .001,
                                    mid: .045,
                                    end: .85
                                },
                                1: {
                                    kink: .65,
                                    start: .01,
                                    mid: .08,
                                    end: .9
                                },
                                2: {
                                    kink: .625,
                                    start: .02,
                                    mid: .12,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xeeb6c927682f3ddf240cb6d184e985383d9cfe8c": {
                            oTokenAddress: "0xeeb6c927682f3ddf240cb6d184e985383d9cfe8c",
                            underlying: "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
                            tokenName: "Band Protocol",
                            tokenSymbol: "BAND",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.75),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(5e23),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/band.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.BAND
                        },
                        "0x6ff46ed50574df1bb03b879165fc7bd1ece47743": {
                            oTokenAddress: "0x6ff46ed50574df1bb03b879165fc7bd1ece47743",
                            underlying: "0xbda011d7f8ec00f66c1923b049b94c67d148d8b2",
                            tokenName: "Sleepless AI",
                            tokenSymbol: "AI",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.3),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(5e23),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/ai.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .045,
                                end: .125,
                                kink: .075,
                                expiredBonus: .05,
                                softThreshold: 1.4
                            },
                            oracle: s.NO.BAND
                        },
                        "0x2e6158b85955c4c04e457f5f8c0241d89615f704": {
                            oTokenAddress: "0x2e6158b85955c4c04e457f5f8c0241d89615f704",
                            underlying: "0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
                            tokenName: "Shiba Inu",
                            tokenSymbol: "SHIB",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.5),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(2e28),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/shib.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x7ce4d36bf7392207b813ed9fbfdece0406f4ff01": {
                            oTokenAddress: "0x7ce4d36bf7392207b813ed9fbfdece0406f4ff01",
                            underlying: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
                            tokenName: "Ripple",
                            tokenSymbol: "XRP",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.4),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e23),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/xrp.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x7464d78c158f74349fda04d327ebec911453c4bd": {
                            oTokenAddress: "0x7464d78c158f74349fda04d327ebec911453c4bd",
                            underlying: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
                            tokenName: "Litecoin",
                            tokenSymbol: "LTC",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.4),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e21),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/ltc.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x28b4285b7f74a62829d7444c37b0dde95b073226": {
                            oTokenAddress: "0x28b4285b7f74a62829d7444c37b0dde95b073226",
                            underlying: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
                            tokenName: "Polkadot",
                            tokenSymbol: "DOT",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.4),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(15e21),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/dot.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xc9614f0e0108907d7bd43c04fc0d230aead0f42d": {
                            oTokenAddress: "0xc9614f0e0108907d7bd43c04fc0d230aead0f42d",
                            underlying: "0xba2ae424d960c26247dd6c32edc70b295c744c43",
                            tokenName: "Dogecoin",
                            tokenSymbol: "DOGE",
                            decimals: 8,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e14),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/doge.svg",
                            underlyingDecimals: BigInt(1e8),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x53c4c8622594f906c078a99642c5caf0cc56f5c4": {
                            oTokenAddress: "0x53c4c8622594f906c078a99642c5caf0cc56f5c4",
                            underlying: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
                            tokenName: "Cardano",
                            tokenSymbol: "ADA",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e23),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/ada.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        }
                    },
                    [c.y.id]: {
                        "0x47b5a5c22a44b21ef2479906c6030d21f17438fc": {
                            oTokenAddress: "0x47b5a5c22a44b21ef2479906c6030d21f17438fc",
                            underlying: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
                            tokenName: "Wrapped Ether",
                            tokenSymbol: "WETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.89),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(2e21), (0, r.Z)(1e21), (0, r.Z)(5e20)],
                            logoSrc: "/assets/weth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .81,
                                    start: .001,
                                    mid: .04,
                                    end: .8
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .725,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x82af49447d8a07e3bd95bd0d56f35241523fbab1": {
                            oTokenAddress: k[c.y.id],
                            underlying: k[c.y.id],
                            tokenName: "Ethereum",
                            tokenSymbol: "ETH",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.89),
                            borrowFactor: (0, r.Z)(.9),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(2e21), (0, r.Z)(1e21), (0, r.Z)(5e20)],
                            logoSrc: "/assets/eth.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: .81,
                                    start: .001,
                                    mid: .04,
                                    end: .8
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .725,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.25
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x42a44d1738c41b4bbfe643dd6b0e02e9e105d9f4": {
                            oTokenAddress: "0x42a44d1738c41b4bbfe643dd6b0e02e9e105d9f4",
                            underlying: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
                            tokenName: "USD Coin",
                            tokenSymbol: "USDC",
                            decimals: 6,
                            collateralFactor: (0, r.Z)(.92),
                            borrowFactor: (0, r.Z)(.93),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e12), (0, r.Z)(2e12), (0, r.Z)(1e12)],
                            logoSrc: "/assets/usdc.svg",
                            underlyingDecimals: BigInt(1e6),
                            trancheIRM: {
                                0: {
                                    kink: .91,
                                    start: .001,
                                    mid: .035,
                                    end: .6
                                },
                                1: {
                                    kink: .85,
                                    start: .01,
                                    mid: .06,
                                    end: .8
                                },
                                2: {
                                    kink: .825,
                                    start: .02,
                                    mid: .1,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .01,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x8c6ca8b970f5c778445345983ecf9f6ae1a6890e": {
                            oTokenAddress: "0x8c6ca8b970f5c778445345983ecf9f6ae1a6890e",
                            underlying: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
                            tokenName: "Tether",
                            tokenSymbol: "USDT",
                            decimals: 6,
                            collateralFactor: (0, r.Z)(.88),
                            borrowFactor: (0, r.Z)(.89),
                            expirationTimestamp: 4294967295e3,
                            riskTranche: 0,
                            isIsolatedCollateral: !1,
                            depositCap: (0, r.Z)(d.zL.toString()),
                            borrowCap: [(0, r.Z)(5e12), (0, r.Z)(2e12), (0, r.Z)(1e12)],
                            logoSrc: "/assets/usdt.svg",
                            underlyingDecimals: BigInt(1e6),
                            trancheIRM: {
                                0: {
                                    kink: .8,
                                    start: .001,
                                    mid: .04,
                                    end: .75
                                },
                                1: {
                                    kink: .75,
                                    start: .01,
                                    mid: .07,
                                    end: .9
                                },
                                2: {
                                    kink: .725,
                                    start: .02,
                                    mid: .11,
                                    end: 1
                                }
                            },
                            liquidationBonus: {
                                start: .015,
                                end: .05,
                                kink: .075,
                                expiredBonus: 0,
                                softThreshold: 1.2
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xa5f6621452705ed22f7d65b794853a8fb9a16dc5": {
                            oTokenAddress: "0xa5f6621452705ed22f7d65b794853a8fb9a16dc5",
                            underlying: "0x912ce59144191c1204e64559fe8253a0e49e6548",
                            tokenName: "Arbitrum",
                            tokenSymbol: "ARB",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.6),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(3e24),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/arb.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0xcb29a2f125fe54b93d306c504807e09460762876": {
                            oTokenAddress: "0xcb29a2f125fe54b93d306c504807e09460762876",
                            underlying: "0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8",
                            tokenName: "Pendle",
                            tokenSymbol: "PENDLE",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.55),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(3e23),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/pendle.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x0059be042c3bf8e54a9bbdb69689a9da897c35c4": {
                            oTokenAddress: "0x0059be042c3bf8e54a9bbdb69689a9da897c35c4",
                            underlying: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
                            tokenName: "GMX",
                            tokenSymbol: "GMX",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.25),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(1e22),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/gmx.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x3dfc3b8810a88a163d007c34b477c47d2d2489b3": {
                            oTokenAddress: "0x3dfc3b8810a88a163d007c34b477c47d2d2489b3",
                            underlying: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
                            tokenName: "Chainlink",
                            tokenSymbol: "LINK",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.3),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(11e21),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/link.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x617a68b6f96fbf135ebc5489d8ee2f36649e3510": {
                            oTokenAddress: "0x617a68b6f96fbf135ebc5489d8ee2f36649e3510",
                            underlying: "0x6985884c4392d348587b19cb9eaaf157f13271cd",
                            tokenName: "LayerZero",
                            tokenSymbol: "ZRO",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.3),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(25e21),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/zro.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x692eaf09c8be6ef738f1a49525b880acf3206783": {
                            oTokenAddress: "0x692eaf09c8be6ef738f1a49525b880acf3206783",
                            underlying: "0x4cb9a7ae498cedcbb5eae9f25736ae7d428c9d66",
                            tokenName: "Xai",
                            tokenSymbol: "XAI",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.25),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(55e21),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/xai.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x98f2d512e7d1edf223b6713ed9f6fe81ca26cb38": {
                            oTokenAddress: "0x98f2d512e7d1edf223b6713ed9f6fe81ca26cb38",
                            underlying: "0x9623063377ad1b27544c965ccd7342f7ea7e88c7",
                            tokenName: "The Graph",
                            tokenSymbol: "GRT",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.3),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 1,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(5e23),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/grt.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x9f802d7da9bda88a51e6401a979f8b553b83ebff": {
                            oTokenAddress: "0x9f802d7da9bda88a51e6401a979f8b553b83ebff",
                            underlying: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
                            tokenName: "Uniswap",
                            tokenSymbol: "UNI",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.25),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17356896e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(15e21),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/uni.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        },
                        "0x69b886d713a5d6d550d0c60c87eaebfaecd5c2ce": {
                            oTokenAddress: "0x69b886d713a5d6d550d0c60c87eaebfaecd5c2ce",
                            underlying: "0x25d887ce7a35172c62febfd67a1856f20faebb00",
                            tokenName: "Pepe",
                            tokenSymbol: "PEPE",
                            decimals: 18,
                            collateralFactor: (0, r.Z)(.3),
                            borrowFactor: (0, r.Z)(0),
                            expirationTimestamp: 17434656e5,
                            riskTranche: 2,
                            isIsolatedCollateral: !0,
                            depositCap: (0, r.Z)(45e26),
                            borrowCap: [(0, r.Z)(0)],
                            logoSrc: "/assets/pepe.svg",
                            underlyingDecimals: BigInt(1e18),
                            trancheIRM: {
                                0: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                1: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                },
                                2: {
                                    kink: 0,
                                    start: 0,
                                    mid: 0,
                                    end: 0
                                }
                            },
                            liquidationBonus: {
                                start: .03,
                                end: .1,
                                kink: .075,
                                expiredBonus: .03,
                                softThreshold: 1.3
                            },
                            oracle: s.NO.CHAINLINK
                        }
                    }
                },
                m = {
                    [o.R.id]: {
                        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "0x2124dc71859fb57687c18651ddbe2b6200f61296",
                        "0xdac17f958d2ee523a2206206994597c13d831ec7": "0x6a1c08df7fc23bda6937c2c586bc857d82005c2c",
                        "0x6b175474e89094c44da98b954eedeac495271d0f": "0x3562d6e1820401df802ff67d130e7478fba7448f",
                        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "0x48dd663c0eafb50d7e7da84e465e99ac147784c9",
                        "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0": "0x5df32bb456cc2d1e2de64b932fc7b05bd9351555",
                        "0x514910771af9ca656af840dff83e8264ecf986ca": "0xee713aa17b9de2114587da8aeec64a1d33decef9",
                        "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55": "0x28c44a7f76dce91f1fa078d7c8334c01a545001d",
                        "0xbe1a001fe942f96eea22ba08783140b9dcc09d28": "0xcfc7acaed9a12e9db812083a77a2e4c5e3b67036",
                        "0x6982508145454ce325ddbe47a25d4ec3d2311933": "0xe1c06cb647f1c499775d77487cee588ae7423f57",
                        "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce": "0xe7021fc01ee2a23bdfbabc22d1a1d7ffeafd6f65",
                        "0xb131f4a55907b10d1f0a50d8ab8fa09ec342cd74": "0x80d764d627ac0a53e69b5c4f9c373a24e2275f77",
                        "0xa1faa113cbe53436df28ff0aee54275c13b40975": "0x500191aa2563563a505c2c1f65b7e5375f9aeaf7",
                        "0x83f20f44975d03b1b09e64809b757c47f942beea": "0x41a040d07a03136316667ae314ecf793a197d242"
                    },
                    [n.F.id]: {
                        "0xb8c59767abd52800523f14faa442aa33dd21df61": "0xbf84cc279f25d3e42c16c6a128353e2e9f6b19e4",
                        "0x5eed226ac3934903434feaa7f4286754a2ddd00d": "0x2a961f65ccd7546a3206b6096f29ed44da04eca0",
                        "0x0b0c1a5e07bec08f301327807e9f227777549ee3": "0xc18bc8bc03eabc9fcfa2e7e8fd9928d46260afbe",
                        "0x813db692d73cad8a1da1a272f363bbbb42efa839": "0xe1d54945ac1a67ac4fcf6c9f4def0966fe91b6f7",
                        "0x211a31cc78e6c737626e457b1dce2de1675bb616": "0xcc911d98255802c03b4b5524abf95b939851fa7b",
                        "0x034d04ee19d49ffe66e5b80d75fb2da84ce7adac": "0x1a1a812e68691cddb54932a19706e7a2e9d75992",
                        "0xcf5f0e2d43805d713cf676d6cf4bafde152e7d9f": "0xcd666cf791b52bea5cd44436bc8fd91760263f0e"
                    },
                    [i.e.id]: {
                        "0xa2e3356610840701bdf5611a53974510ae27e2e1": "0xcd6615ff6083d1a302054574282882afdd04c2b9",
                        "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": "0x122ffc0c5ff637e4f0e804d2e2af90541dad513e",
                        "0x55d398326f99059ff775485246999027b3197955": "0x7ceac61ca6c29af40a776d97532a1f6932eb0bc9",
                        "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c": "0x14d3c1ea5ff60a2c799e99707f27e27fe88fac94",
                        "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": "0xfc019448f666025945b8c727c3632dc517cfbf33",
                        "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": "0x14451624ac2f1e1b15263b859fa7f994866f3041",
                        "0xbe1a001fe942f96eea22ba08783140b9dcc09d28": "0x362152c2a9be347b45551875c7cb6a8a3382fb04",
                        "0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1": "0xcc9b1ca58dd104c0bc87ed534d6ed1fcda21f022",
                        "0xaec945e04baf28b135fa7c640f624f8d90f1c3a6": "0xf59b7c2992ec49433bc81b562cf26fcc5d51bd2e",
                        "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18": "0xeeb6c927682f3ddf240cb6d184e985383d9cfe8c",
                        "0xbda011d7f8ec00f66c1923b049b94c67d148d8b2": "0x6ff46ed50574df1bb03b879165fc7bd1ece47743",
                        "0xc5f0f7b66764f6ec8c8dff7ba683102295e16409": "0xbddd24065f44d62bad321e50ed4912863579c7a8",
                        "0x2859e4544c4bb03966803b044a93563bd2d0dd4d": "0x2e6158b85955c4c04e457f5f8c0241d89615f704",
                        "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe": "0x7ce4d36bf7392207b813ed9fbfdece0406f4ff01",
                        "0x4338665cbb7b2485a8855a139b75d5e34ab0db94": "0x7464d78c158f74349fda04d327ebec911453c4bd",
                        "0x7083609fce4d1d8dc0c979aab8c869ea2c873402": "0x28b4285b7f74a62829d7444c37b0dde95b073226",
                        "0xba2ae424d960c26247dd6c32edc70b295c744c43": "0xc9614f0e0108907d7bd43c04fc0d230aead0f42d",
                        "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47": "0x53c4c8622594f906c078a99642c5caf0cc56f5c4"
                    },
                    [c.y.id]: {
                        "0x82af49447d8a07e3bd95bd0d56f35241523fbab1": "0x47b5a5c22a44b21ef2479906c6030d21f17438fc",
                        "0xaf88d065e77c8cc2239327c5edb3a432268e5831": "0x42a44d1738c41b4bbfe643dd6b0e02e9e105d9f4",
                        "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "0x8c6ca8b970f5c778445345983ecf9f6ae1a6890e",
                        "0x912ce59144191c1204e64559fe8253a0e49e6548": "0xa5f6621452705ed22f7d65b794853a8fb9a16dc5",
                        "0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8": "0xcb29a2f125fe54b93d306c504807e09460762876",
                        "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a": "0x0059be042c3bf8e54a9bbdb69689a9da897c35c4",
                        "0xf97f4df75117a78c1a5a0dbb814af92458539fb4": "0x3dfc3b8810a88a163d007c34b477c47d2d2489b3",
                        "0x6985884c4392d348587b19cb9eaaf157f13271cd": "0x617a68b6f96fbf135ebc5489d8ee2f36649e3510",
                        "0x4cb9a7ae498cedcbb5eae9f25736ae7d428c9d66": "0x692eaf09c8be6ef738f1a49525b880acf3206783",
                        "0x9623063377ad1b27544c965ccd7342f7ea7e88c7": "0x98f2d512e7d1edf223b6713ed9f6fe81ca26cb38",
                        "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0": "0x9f802d7da9bda88a51e6401a979f8b553b83ebff",
                        "0x25d887ce7a35172c62febfd67a1856f20faebb00": "0x69b886d713a5d6d550d0c60c87eaebfaecd5c2ce"
                    }
                },
                u = {
                    [o.R.id]: [],
                    [n.F.id]: [],
                    [i.e.id]: [],
                    [c.y.id]: []
                },
                p = {
                    [o.R.id]: [],
                    [n.F.id]: [],
                    [i.e.id]: [],
                    [c.y.id]: []
                },
                h = {
                    [o.R.id]: [],
                    [n.F.id]: [],
                    [i.e.id]: [],
                    [c.y.id]: []
                },
                g = {
                    [o.R.id]: [],
                    [n.F.id]: [],
                    [i.e.id]: [],
                    [c.y.id]: []
                };
            Object.entries(f).forEach(e => {
                let [a, t] = e, r = Number(a);
                u[r] = Object.entries(t).filter(e => "ETH" != e[1].tokenSymbol && "BNB" != e[1].tokenSymbol && e[1].borrowFactor.gt(0)).map(e => e[1].oTokenAddress), p[r] = Object.entries(t).filter(e => "ETH" != e[1].tokenSymbol && "BNB" != e[1].tokenSymbol && e[1].borrowFactor.eq(0)).map(e => e[1].oTokenAddress), h[r] = Object.entries(t).map(e => e[1].oTokenAddress), g[r] = Object.entries(t).map(e => e[1].underlying)
            })
        }
    }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9831], {
        65054: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 27379))
        },
        27379: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return er
                }
            });
            var s = a(57437),
                n = a(2265),
                i = a(82256),
                l = a(64626),
                r = a(16691),
                o = a.n(r),
                d = a(39098),
                c = a(48756),
                u = a(64362),
                x = a(28285),
                f = a(27033),
                m = a(18187),
                g = a(96373),
                h = a(1144),
                p = a(11288),
                v = a(21247),
                b = a(61692),
                j = a(31590),
                y = a(75959),
                w = a(78670),
                N = a(65730),
                A = a(24033),
                k = a(89660);

            function Z() {
                let e = (0, A.useRouter)();
                return {
                    navigationToStake: (t, a) => {
                        switch (t.toLocaleLowerCase()) {
                            case "staking":
                            default:
                                e.push([(0, k.Z)("staking"), a].join("/"));
                                break;
                            case "unstaking":
                                e.push([(0, k.Z)("unstaking"), a].join("/"));
                                break;
                            case "claiming":
                                e.push([(0, k.Z)("claiming"), a].join("/"));
                                break;
                            case "restaking":
                                e.push([(0, k.Z)("restaking"), a].join("/"))
                        }
                    }
                }
            }
            let P = e => {
                    let {
                        isLoading: t,
                        totalClaimableRewards: a
                    } = e, n = (0, p.Z)(), i = (0, c.xx)(), l = (0, g.Z)(i), {
                        navigationToStake: r
                    } = Z(), {
                        isLoading: d,
                        data: u
                    } = (0, h.Z)({
                        ids: "beta-finance",
                        enabled: n
                    });
                    return (0, s.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-3",
                        children: [(0, s.jsx)("div", {
                            className: "font-bold text-gray-40",
                            children: "My Rewards"
                        }), (0, s.jsxs)(E, {
                            className: "flex flex-col justify-between",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, s.jsx)("div", {
                                    className: "flex justify-between",
                                    children: (0, s.jsx)("span", {
                                        className: "text-sm font-medium text-gray-400",
                                        children: "Total Claimable Rewards:"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-between",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex gap-3",
                                        children: [(0, s.jsx)(y.Z, {
                                            name: "present",
                                            size: 24
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex gap-1",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-2xl font-medium leading-none text-gray-40",
                                                    children: t ? (0, s.jsx)(w.Z, {
                                                        className: "w-[80px]",
                                                        height: 24
                                                    }) : void 0 === l || null === a ? "-" : (0, v.d)(a, {
                                                        magnitude: l.underlyingDecimals
                                                    })
                                                }), (0, s.jsx)(o(), {
                                                    alt: "beta-logo",
                                                    height: 16,
                                                    src: "logo.svg",
                                                    width: 16
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "mt-1 text-sm font-medium text-gray-400",
                                                children: t || d ? (0, s.jsx)(w.Z, {
                                                    className: "w-[100px]",
                                                    height: 20
                                                }) : void 0 === l || null === a || void 0 === u ? "-" : (0, v.d)(a.multipliedBy(Number(u)), {
                                                    magnitude: l.underlyingDecimals,
                                                    prefix: "$",
                                                    isPrice: !0
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, s.jsx)(j.Z, {}), (0, s.jsx)("div", {
                                className: "flex flex-col gap-4",
                                children: (0, s.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0, s.jsx)(b.Z, {
                                        className: "w-full",
                                        intent: "secondary",
                                        label: "Claim",
                                        onClick: () => {
                                            r("claiming")
                                        }
                                    }), (0, s.jsx)(b.Z, {
                                        className: "w-full",
                                        label: "Restake",
                                        onClick: () => {
                                            r("restaking")
                                        }
                                    })]
                                })
                            })]
                        })]
                    })
                },
                E = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, N.cn)("flex h-full gap-6 rounded-[20px] border border-gray-700 bg-gray-900 bg-opacity-30 p-6 backdrop-blur-[5px]", a),
                        children: t
                    })
                };
            var S = a(98910),
                C = a.n(S),
                T = a(88265),
                D = a(34636),
                B = a(49451),
                _ = a.n(B),
                R = a(87748),
                L = a(59253),
                I = a(83509),
                O = a(89296),
                M = a(76690),
                Y = a(11610);
            let z = e => {
                    let {
                        isLoading: t,
                        windowStart: a,
                        windowEnd: i,
                        hasStakedAmount: l,
                        isUnstakePeriod: r,
                        isCoolingDownPeriod: o,
                        exceedUnstakePeriod: d,
                        setIsCountdownFinished: u
                    } = e, x = (0, c.xx)(), f = (0, g.Z)(x), m = (0, n.useMemo)(() => a.toDate().getTime(), [a]), h = (0, n.useMemo)(() => i.toDate().getTime(), [i]), p = (0, n.useMemo)(() => {
                        try {
                            return (0, M.Z)(m, h)
                        } catch (e) {
                            return "100"
                        }
                    }, [h, m]), [v, b] = (0, n.useState)((0, Y.Z)(m, h)), j = "".concat(_()(v.days.toString(), 2, "0"), "d ").concat(_()(v.hours.toString(), 2, "0"), "h ").concat(_()(v.minutes.toString(), 2, "0"), "m ").concat(_()(v.seconds.toString(), 2, "0"), "s Left");
                    return (0, n.useEffect)(() => {
                        if (o || r) {
                            u(!1);
                            let e = setInterval(() => {
                                let t = (0, Y.Z)(m, h);
                                b(t), 0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds && (clearInterval(e), u(!0))
                            }, 1e3);
                            return () => clearInterval(e)
                        }
                    }, [o, r, h, m, u]), (0, s.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0, s.jsx)(L.Z, {
                                percent: 100 - Number(p)
                            }), !t && (o || r || d) && (0, s.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, s.jsxs)("span", {
                                    className: "text-xs font-medium text-gray-400",
                                    children: [a.format("DD/MM/YYYY hh:mm"), "\xa0GMT"]
                                }), (0, s.jsxs)("span", {
                                    className: "text-xs font-medium text-primary-900",
                                    children: [i.format("DD/MM/YYYY hh:mm"), "\xa0GMT"]
                                })]
                            })]
                        }), !l && (0, s.jsxs)("div", {
                            className: "flex items-center gap-2 text-xs",
                            children: [(0, s.jsx)(y.Z, {
                                color: O.r$.white,
                                name: "information-circle",
                                size: 16
                            }), "You have no stkBETA. Stake now to start receiving rewards!"]
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center gap-0.5",
                                children: [(0, s.jsx)("span", {
                                    className: "text-sm text-gray-400",
                                    children: r || d ? "Unstake Period" : "Cooldown Period"
                                }), (0, s.jsx)(I.Z, {
                                    content: (0, s.jsx)("div", {
                                        className: "w-[176px] [&>a]:underline",
                                        dangerouslySetInnerHTML: {
                                            __html: r ? R.Lt.UNSTAKE_PERIOD : R.Lt.COOLDOWN_PERIOD
                                        }
                                    }),
                                    trigger: (0, s.jsx)(y.Z, {
                                        color: O.r$.gray[400],
                                        name: "information-circle",
                                        size: 12
                                    })
                                }), (0, s.jsx)("span", {
                                    className: "text-sm text-gray-400",
                                    children: ":"
                                })]
                            }), (0, s.jsx)("span", {
                                className: "text-sm font-medium tabular-nums text-gray-400",
                                children: t ? (0, s.jsx)(w.Z, {
                                    className: "w-[140px]",
                                    height: 20
                                }) : void 0 === f ? "-" : o || r || d ? j : "".concat(f.cooldownPeriod, "d")
                            })]
                        })]
                    })
                },
                U = e => {
                    let {
                        isLoading: t,
                        hasStakedAmount: a,
                        isCoolingDownPeriod: n,
                        isUnstakePeriod: i,
                        exceedUnstakePeriod: l
                    } = e;
                    if (t) return (0, s.jsx)(w.Z, {
                        className: "w-[100px]",
                        height: 18
                    });
                    if (!a) return (0, s.jsx)(D.ZP, {
                        label: (0, s.jsxs)("div", {
                            className: "flex gap-1",
                            children: [(0, s.jsx)(y.Z, {
                                name: "unlock",
                                size: 12
                            }), " ", (0, s.jsx)("span", {
                                children: "Not Staked"
                            })]
                        })
                    });
                    if (a) {
                        if (i || l) return (0, s.jsx)(D.ZP, {
                            label: (0, s.jsxs)("div", {
                                className: "flex gap-1",
                                children: [(0, s.jsx)(y.Z, {
                                    name: "unlock",
                                    size: 12
                                }), " ", (0, s.jsx)("span", {
                                    children: "Unstaking"
                                })]
                            })
                        });
                        if (!n) return (0, s.jsx)(D.ZP, {
                            label: (0, s.jsxs)("div", {
                                className: "flex gap-1",
                                children: [(0, s.jsx)(y.Z, {
                                    name: "lock",
                                    size: 12
                                }), " ", (0, s.jsx)("span", {
                                    children: "Staked"
                                })]
                            })
                        });
                        if (n) return (0, s.jsx)(D.ZP, {
                            label: (0, s.jsxs)("div", {
                                className: "flex gap-1",
                                children: [(0, s.jsx)(y.Z, {
                                    name: "full-hourglass",
                                    size: 12
                                }), " ", (0, s.jsx)("span", {
                                    children: "Cooling Down"
                                })]
                            })
                        })
                    }
                    return null
                },
                F = e => {
                    let {
                        isCoolingDownPeriod: t,
                        isUnstakePeriod: a
                    } = e;
                    return a ? "Unstake" : t ? (0, s.jsxs)("span", {
                        className: "flex gap-1",
                        children: [(0, s.jsx)(y.Z, {
                            name: "full-hourglass",
                            size: 16
                        }), " Cooling Down"]
                    }) : "Cooldown to Unstake"
                },
                W = e => {
                    let {
                        isLoading: t,
                        coolDownStartTimeStamp: a,
                        userStakedAmount: i
                    } = e, l = (0, p.Z)(), r = (0, c.xx)(), d = (0, g.Z)(r), {
                        navigationToStake: u
                    } = Z(), {
                        write: x
                    } = (0, T.Li)(), {
                        isLoading: f,
                        data: m
                    } = (0, h.Z)({
                        ids: "beta-finance",
                        enabled: l
                    }), [j, A] = (0, n.useState)(!1), k = (0, n.useMemo)(() => 1e3 * (a || 0), [a]), P = (0, n.useMemo)(() => !!(i && i.gt(0)), [i]), E = (0, n.useMemo)(() => !!(d && k > 0 && C()(k).add(d.cooldownPeriod, "day").diff(C()()) >= 0), [k, d, j]), S = (0, n.useMemo)(() => !!(d && k > 0 && 0 > C()(k).add(d.cooldownPeriod, "day").diff(C()()) && C()(k).add(d.cooldownPeriod, "day").add(d.unstakeWindowPeriod, "day").diff(C()()) >= 0), [k, d, j]), D = (0, n.useMemo)(() => !!(d && k > 0 && 0 > C()(k).add(d.cooldownPeriod, "day").add(d.unstakeWindowPeriod, "day").diff(C()())), [k, d, j]), B = (0, n.useMemo)(() => (S || D) && d ? C()(k).add(d.cooldownPeriod, "day") : C()(k), [k, D, S, d]), _ = (0, n.useMemo)(() => d ? E ? C()(k).add(d.cooldownPeriod, "day") : S || D ? C()(k).add(d.cooldownPeriod, "day").add(d.unstakeWindowPeriod, "day") : C()(k) : C()(k), [k, D, E, S, d]);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-3",
                        children: [(0, s.jsx)("div", {
                            className: "font-bold text-gray-40",
                            children: "My stkBETA"
                        }), (0, s.jsxs)(G, {
                            className: "flex flex-col justify-between gap-4",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0, s.jsx)("span", {
                                        className: "text-sm font-medium text-gray-400",
                                        children: "stkBETA Balance:"
                                    }), (0, s.jsx)(U, {
                                        exceedUnstakePeriod: D,
                                        hasStakedAmount: P,
                                        isCoolingDownPeriod: E,
                                        isLoading: t,
                                        isUnstakePeriod: S
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-between",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex gap-3",
                                        children: [(0, s.jsx)(y.Z, {
                                            name: "staking-lock",
                                            size: 24
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)("div", {
                                                className: "flex gap-1",
                                                children: (0, s.jsx)("span", {
                                                    className: "text-2xl font-medium leading-none text-gray-40",
                                                    children: t ? (0, s.jsx)(w.Z, {
                                                        className: "w-[80px]",
                                                        height: 24
                                                    }) : void 0 === d || null === i ? "-" : (0, s.jsxs)("span", {
                                                        className: "flex gap-1",
                                                        children: [(0, v.d)(i, {
                                                            magnitude: d.underlyingDecimals
                                                        }), (0, s.jsx)(o(), {
                                                            alt: "beta-logo",
                                                            height: 16,
                                                            src: "logo.svg",
                                                            width: 16
                                                        })]
                                                    })
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "mt-1 text-sm font-medium text-gray-400",
                                                children: t || f ? (0, s.jsx)(w.Z, {
                                                    className: "w-[100px]",
                                                    height: 20
                                                }) : void 0 === d || null === i || void 0 === m ? "-" : (0, v.d)(i.multipliedBy(Number(m)), {
                                                    magnitude: d.underlyingDecimals,
                                                    prefix: "$",
                                                    isPrice: !0
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, s.jsx)(z, {
                                    exceedUnstakePeriod: D,
                                    hasStakedAmount: P,
                                    isCoolingDownPeriod: E,
                                    isLoading: t,
                                    isUnstakePeriod: S,
                                    setIsCountdownFinished: A,
                                    windowEnd: _,
                                    windowStart: B
                                }), (0, s.jsx)(b.Z, {
                                    disabled: !P,
                                    intent: S ? "primary" : "secondary",
                                    className: (0, N.cn)(E && "cursor-default hover:bg-transparent active:bg-transparent"),
                                    label: (0, s.jsx)(F, {
                                        isCoolingDownPeriod: E,
                                        isUnstakePeriod: S
                                    }),
                                    onClick: () => {
                                        if (!P || E || D) return null;
                                        if (S) {
                                            u("unstaking");
                                            return
                                        }
                                        P && x()
                                    }
                                })]
                            })]
                        })]
                    })
                },
                G = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, N.cn)("flex h-full gap-6 rounded-[20px] border border-gray-700 bg-gray-900 bg-opacity-30 p-6 backdrop-blur-[5px]", a),
                        children: t
                    })
                },
                V = e => {
                    let {
                        isLoading: t,
                        coolDownStartTimeStamp: a,
                        totalClaimableRewards: n,
                        userStakedAmount: i
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: "flex gap-4",
                        children: [(0, s.jsx)(W, {
                            coolDownStartTimeStamp: a,
                            isLoading: t,
                            userStakedAmount: i
                        }), (0, s.jsx)(P, {
                            isLoading: t,
                            totalClaimableRewards: n
                        })]
                    })
                },
                H = e => {
                    let {
                        isLoading: t,
                        totalStakedBetaAmount: a
                    } = e, n = (0, c.xx)(), i = (0, g.Z)(n);
                    return (0, s.jsxs)(Q, {
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-1 flex-col gap-1",
                            children: [(0, s.jsx)(K, {
                                children: t ? (0, s.jsx)(w.Z, {
                                    height: 32
                                }) : void 0 === i || null === a ? "-" : (0, v.d)(a, {
                                    magnitude: i.underlyingDecimals,
                                    postfix: " BETA",
                                    isPrice: !0
                                })
                            }), (0, s.jsx)(X, {
                                children: "BETA in the Safety Module"
                            })]
                        }), (0, s.jsx)(j.Z, {
                            height: 52,
                            vertical: !0
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-1 flex-col gap-1",
                            children: [(0, s.jsx)(K, {
                                children: void 0 === i ? "-" : (0, s.jsxs)("span", {
                                    children: [(0, v.d)(i.emissionsPerDay, {
                                        magnitude: i.underlyingDecimals
                                    }), "\xa0BETA"]
                                })
                            }), (0, s.jsx)(X, {
                                children: "Total emission per day"
                            })]
                        })]
                    })
                },
                Q = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, N.cn)("flex h-full gap-6 rounded-[20px] border border-gray-700 bg-gray-900 bg-opacity-30 p-6 backdrop-blur-[5px]", a),
                        children: t
                    })
                },
                K = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, N.cn)("text-2xl font-medium text-gray-40", a),
                        children: t
                    })
                },
                X = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, N.cn)("text-sm font-medium text-gray-400", a),
                        children: t
                    })
                };
            var J = a(61396),
                $ = a.n(J),
                q = a(23342);
            let ee = e => {
                    let {
                        isLoading: t,
                        userBetaAmount: a
                    } = e, n = (0, c.xx)(), i = (0, g.Z)(n), {
                        navigationToStake: l
                    } = Z();
                    return (0, s.jsxs)(et, {
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-1 flex-col gap-6",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, s.jsx)(ea, {
                                    children: "Wallet Balance"
                                }), (0, s.jsx)(es, {
                                    children: t ? (0, s.jsx)(w.Z, {
                                        height: 20
                                    }) : void 0 === i || null === a ? "-" : (0, s.jsxs)("span", {
                                        className: "flex gap-1",
                                        children: [(0, v.d)(a, {
                                            magnitude: i.underlyingDecimals
                                        }), (0, s.jsx)(o(), {
                                            alt: "beta-logo",
                                            height: 12,
                                            src: "logo.svg",
                                            width: 12
                                        })]
                                    })
                                })]
                            }), (0, s.jsx)($(), {
                                href: "https://pancakeswap.finance/swap?outputCurrency=0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28",
                                target: "_blank",
                                children: (0, s.jsx)(b.Z, {
                                    className: "w-full font-medium",
                                    intent: "secondary",
                                    label: (0, s.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, s.jsx)(y.Z, {
                                            name: "hand-hold-coins",
                                            size: 16
                                        }), (0, s.jsx)("span", {
                                            children: "Buy BETA"
                                        })]
                                    }),
                                    onClick: () => null
                                })
                            })]
                        }), (0, s.jsx)(j.Z, {
                            height: 52,
                            vertical: !0
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-1 flex-col gap-6",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, s.jsx)(ea, {
                                    children: "Max Slashing"
                                }), (0, s.jsx)(es, {
                                    children: void 0 === i ? "-" : "up to " + (0, q.u)(100 * i.maxSlashing, 0, {
                                        postfix: "%"
                                    })
                                })]
                            }), (0, s.jsx)(b.Z, {
                                className: "font-medium",
                                label: (0, s.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0, s.jsx)(y.Z, {
                                        name: "staking-lock",
                                        size: 16
                                    }), (0, s.jsx)("span", {
                                        children: "Stake BETA"
                                    })]
                                }),
                                onClick: () => l("staking")
                            })]
                        })]
                    })
                },
                et = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, N.cn)("flex h-full gap-6 rounded-[20px] border border-gray-700 bg-gray-900 bg-opacity-30 p-6 backdrop-blur-[5px]", a),
                        children: t
                    })
                },
                ea = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, N.cn)("text-sm font-medium text-gray-400", a),
                        children: t
                    })
                },
                es = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, N.cn)("text-sm font-medium text-gray-40", a),
                        children: t
                    })
                },
                en = e => {
                    let {
                        isLoading: t,
                        totalStakedBetaAmount: a,
                        userBetaAmount: n
                    } = e, i = (0, c.xx)(), r = (0, g.Z)(i), d = r && a ? (0, v.d)((0, l.Z)(r.emissionsPerDay.toString()).multipliedBy(365).multipliedBy(100).dividedBy((0, l.Z)(a.toString())), {
                        magnitude: (0, l.Z)(1),
                        postfix: "%"
                    }) : null;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col gap-6",
                        children: [(0, s.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, s.jsx)(y.Z, {
                                name: "staking-lock",
                                size: 24
                            }), (0, s.jsx)("div", {
                                className: "text-2xl font-bold leading-none",
                                children: "Staking BETA"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex w-fit items-center gap-3 rounded-lg bg-[#1E2124]/[.80] px-3 py-2",
                            children: [(0, s.jsx)(y.Z, {
                                className: "flex-shrink-0",
                                color: O.r$.gray[40],
                                name: "megaphone",
                                size: 16
                            }), (0, s.jsxs)("span", {
                                className: "text-xs font-normal text-gray-300",
                                children: ["BETA holders", " ", (0, s.jsx)("span", {
                                    className: "text-[#F1B90A]",
                                    children: "(BNBChain network only)"
                                }), " can stake their BETA in the Safety Module to add more security to the protocol and earn Safety Incentives. In the case of a shortfall event, up to 30% of your stake can be slashed to cover the deficit, providing an additional layer of protection for the protocol."]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex gap-4",
                            children: [(0, s.jsxs)("div", {
                                className: "relative flex-1",
                                children: [(0, s.jsx)("span", {
                                    className: "absolute left-[70px] top-[70px] text-[56px] font-medium text-gray-40",
                                    children: t ? (0, s.jsx)(w.Z, {
                                        className: "w-[200px]",
                                        height: 70
                                    }) : null === d ? "-" : d
                                }), (0, s.jsx)(o(), {
                                    alt: "staking-bg",
                                    className: "h-full w-full",
                                    height: 194,
                                    src: "/staking-bg.png",
                                    width: 528
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-1 flex-col gap-4",
                                children: [(0, s.jsx)(H, {
                                    isLoading: t,
                                    totalStakedBetaAmount: a
                                }), (0, s.jsx)(ee, {
                                    isLoading: t,
                                    userBetaAmount: n
                                })]
                            })]
                        })]
                    })
                };
            var ei = a(90501),
                el = a(26347);

            function er() {
                var e, t, a, r, g, h, p, v, j, y, w;
                let N;
                let A = (0, c.xx)(),
                    k = (0, u.Z)(),
                    Z = null == k ? void 0 : null === (e = k.addressId) || void 0 === e ? void 0 : e.address,
                    {
                        data: P,
                        isLoading: E
                    } = function(e) {
                        let {
                            walletAddress: t,
                            refetchInterval: a = 0,
                            enabled: s = !0
                        } = e, n = (0, x.useQuery)(["staking-data", t], async () => await (0, f.JH)({
                            contracts: [{
                                abi: m.nw,
                                address: m.CY[56],
                                functionName: "balanceOf",
                                args: [t]
                            }, {
                                abi: m.nw,
                                address: "0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28",
                                functionName: "balanceOf",
                                args: [t]
                            }, {
                                abi: m.nw,
                                address: "0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28",
                                functionName: "balanceOf",
                                args: [m.CY[56]]
                            }, {
                                abi: m.nw,
                                address: m.CY[56],
                                functionName: "getTotalRewardsBalance",
                                args: [t]
                            }, {
                                abi: m.nw,
                                address: m.CY[56],
                                functionName: "stakersCooldowns",
                                args: [t]
                            }]
                        }), {
                            enabled: s && !!t && "0x" !== t,
                            refetchInterval: a
                        });
                        return n
                    }({
                        walletAddress: Z
                    }),
                    {
                        openChainModal: S
                    } = (0, i.iC)(),
                    [C, T] = (0, n.useState)(!1),
                    D = 56 !== A,
                    B = (0, ei.Wr)(e => e.updateTotalBetaStaked);
                (0, n.useEffect)(() => {
                    D && T(!0)
                }, [D]);
                let _ = (null == P ? void 0 : null === (t = P[0]) || void 0 === t ? void 0 : t.status) === "success" ? (0, l.Z)(null == P ? void 0 : null === (a = P[0]) || void 0 === a ? void 0 : a.result.toString()) : null,
                    R = (null == P ? void 0 : null === (r = P[1]) || void 0 === r ? void 0 : r.status) === "success" ? (0, l.Z)(null == P ? void 0 : null === (g = P[1]) || void 0 === g ? void 0 : g.result.toString()) : null,
                    L = (null == P ? void 0 : null === (h = P[2]) || void 0 === h ? void 0 : h.status) === "success" ? (0, l.Z)(null == P ? void 0 : null === (p = P[2]) || void 0 === p ? void 0 : p.result.toString()) : null;
                null !== L && B(Number(L));
                let I = (null == P ? void 0 : null === (v = P[3]) || void 0 === v ? void 0 : v.status) === "success" ? (0, l.Z)(null == P ? void 0 : null === (j = P[3]) || void 0 === j ? void 0 : j.result.toString()) : null,
                    O = (null == P ? void 0 : null === (y = P[4]) || void 0 === y ? void 0 : y.status) === "success" ? null == P ? void 0 : null === (w = P[4]) || void 0 === w ? void 0 : w.result[0] : null;
                return N = O ? Date.now() / 1e3 - O > 604800 ? null : O : null, (0, s.jsxs)(s.Fragment, {
                    children: [D && (0, s.jsx)(el.Z, {
                        open: D && C,
                        contentProps: {
                            className: "max-w-[468px] !rounded-2xl"
                        },
                        onClose: () => T(!1),
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-4",
                            children: [(0, s.jsx)(o(), {
                                alt: "chain-unsupport-icon",
                                height: 120,
                                src: d.default,
                                width: 120
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col items-center justify-center gap-3",
                                children: [(0, s.jsx)("p", {
                                    className: "text-center text-[20px] font-bold text-gray-40",
                                    children: "Sorry, staking is only supported on BNB Chain"
                                }), (0, s.jsx)("p", {
                                    className: "text-center text-[14px] font-normal text-gray-400",
                                    children: "Please switch networks to proceed."
                                })]
                            }), (0, s.jsx)(b.Z, {
                                className: "w-full",
                                label: "Change Network",
                                onClick: () => {
                                    S && S(), T(!1)
                                }
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col gap-6",
                        children: [(0, s.jsx)(en, {
                            isLoading: E,
                            totalStakedBetaAmount: L,
                            userBetaAmount: R
                        }), (0, s.jsx)(V, {
                            coolDownStartTimeStamp: N,
                            isLoading: E,
                            totalClaimableRewards: I,
                            userStakedAmount: _
                        })]
                    })]
                })
            }
        },
        87748: function(e, t, a) {
            "use strict";
            a.d(t, {
                B: function() {
                    return o
                },
                Lt: function() {
                    return d
                },
                Sv: function() {
                    return l
                },
                _d: function() {
                    return r
                },
                jv: function() {
                    return i
                },
                kG: function() {
                    return s
                },
                nn: function() {
                    return n
                }
            });
            let s = {
                    NET_DEPOSIT_APY: "The weighted net of APY for all deposited assets across all subaccounts. APRs are dynamic and fluctuate over time.",
                    NET_BORROW_APY: "The weighted net of APY for all borrowed assets across all subaccounts. APRs are dynamic and fluctuate over time."
                },
                n = {
                    COLLATERAL_VALUE: "The total amount of your assets denominated in USD that can be used as collateral for borrowing assets.",
                    APY: "The weighted net of APY for all deposited assets. APRs are dynamic and fluctuate over time.",
                    MODE: '"Mode" specifies the assets that a subaccount can utilize for deposits and borrowing to optimize capital efficiency and risk management. <br/><br/><a href="" target="_blank">Learn more about Mode</a>',
                    TRANCHE: 'Risk Pools indicate the risk level of the collateral tied to your deposit. By selecting a higher Risk Pool, you agree to lend to riskier assets, potentially earning higher interests in return. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/glossary#risk-pool" target="_blank">Learn more about Risk Pool</a>',
                    RISK_GRADE: 'Risk Grade is determined by the risk associated with the collateral deposited in a subaccount. The Risk Grade of the collateral will impact the borrowing APY. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/glossary#risk-grade" target="_blank">Learn more about Risk Grade</a>'
                },
                i = {
                    COLLATERAL_TYPE: 'Assets marked as “Isolated” can only do isolated collateralization and not in subaccounts with other assets for risk management purpose. On the other hand, tokens marked as "Cross" have the flexibility to be used with other "Cross" tokens in a subaccount for cross collateralization.',
                    TRANCHE_LEGEND: "The 3 risk pools indicate the collateral risk that will be associated with each deposit, while the legend provides information about the assets included in each risk level.",
                    SUPPLY_CAP_REACHED: "The supply cap for this asset has been reached. Only borrows are available at the moment.",
                    BORROW_CAP_REACHED: "The borrow cap for this asset has been reached. Only deposits are available at the moment."
                },
                l = {
                    EMODE: 'E-mode (Efficiency Mode) enhances borrowing power for correlated assets. Activating E-mode limits the range of assets that can be used in this subaccount. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/borrow/e-mode" target="_blank">Discover more about E-mode</a>',
                    COLLATERALIZED: "Collateralizing your assets enables you to use your deposits as collateral for borrowing."
                },
                r = {
                    TOTAL_POINTS: "Combine points from both deposit and borrowing activities. Each lending point is equal to one borrowing point.",
                    DEPOSIT_POINTS: "Points garnered from deposits.",
                    BORROW_POINTS: "Points accrued through borrowing activities."
                },
                o = {
                    RISK_POOL_RISK_GRADE: "Borrowing with collateral of varying risk grades or depositing into different risk pools results in distinct borrow and deposit APYs."
                },
                d = {
                    LOCK_PERIOD: "Time of BETA locked since first staked",
                    COOLDOWN_PERIOD: '<b>You’re now in the Cooldown Period.</b> After 5 days of cooldown, you will enter unstake window of 2 days. You will continue receiving rewards during cooldown and unstake window. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/borrow/e-mode" target="_blank">Learn more</a>',
                    UNSTAKE_PERIOD: "<b>You’re now in the Unstake Window.</b> You have 2 days to unstake. If you don’t unstake within 2 days of unstake window, you will need to activate cooldown process again.’"
                }
        },
        88265: function(e, t, a) {
            "use strict";
            a.d(t, {
                Li: function() {
                    return i
                },
                QT: function() {
                    return r
                },
                cj: function() {
                    return l
                }
            });
            var s = a(48756),
                n = a(18187);

            function i() {
                return (0, s.GG)({
                    address: n.CY[56],
                    abi: n.nw,
                    functionName: "cooldown"
                })
            }

            function l(e, t, a) {
                return (0, s.GG)({
                    address: n.CY[56],
                    abi: n.nw,
                    functionName: "claimRewardsAndRedeem",
                    args: [e, t, a]
                })
            }

            function r(e) {
                return (0, s.do)({
                    address: n.CY[56],
                    abi: n.nw,
                    functionName: "getTotalRewardsBalance",
                    args: [e],
                    enabled: "0x" !== e
                })
            }
        },
        96373: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return l
                }
            });
            var s = a(64626),
                n = a(99496);
            let i = {
                [n.e.id]: {
                    stakingToken: "0xbe1a001fe942f96eea22ba08783140b9dcc09d28",
                    emissionsPerDay: (0, s.Z)(3e21),
                    maxSlashing: .3,
                    cooldownPeriod: 5,
                    unstakeWindowPeriod: 2,
                    decimals: 18,
                    underlyingDecimals: (0, s.Z)(1e18),
                    logoSrc: "/assets/beta.svg",
                    tokenSymbol: "BETA"
                }
            };

            function l(e) {
                return i[e]
            }
        },
        1144: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var s = a(28285),
                n = a(92173);

            function i(e) {
                let {
                    ids: t,
                    refetchInterval: a = 3e5,
                    enabled: i = !0
                } = e, l = (0, s.useQuery)(["token-coingecko-price", t], async () => {
                    var e;
                    let {
                        data: a
                    } = await n.Z.get("".concat("https://api.coingecko.com/api/v3", "/simple/price?ids=").concat(t, "&vs_currencies=usd"));
                    return null == a ? void 0 : null === (e = a[t]) || void 0 === e ? void 0 : e.usd
                }, {
                    enabled: i && !!t,
                    refetchInterval: a
                });
                return l
            }
        },
        59253: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return n
                }
            });
            var s = a(57437);

            function n(e) {
                let {
                    percent: t
                } = e;
                return (0, s.jsx)("div", {
                    className: "flex h-[8px] w-full justify-end rounded-[14px] bg-[#414141]",
                    children: (0, s.jsx)("div", {
                        className: "h-full rotate-180 rounded-[14px] bg-[linear-gradient(270deg,_#00C805_0%,_rgba(0,200,5,0.19)_42.71%,_rgba(0,200,5,0.00)_100%)]",
                        style: {
                            width: "".concat(t, "%")
                        }
                    })
                })
            }
            a(2265)
        },
        76690: function(e, t, a) {
            "use strict";

            function s(e, t) {
                let a = new Date(e).getTime(),
                    s = new Date(t).getTime();
                if (isNaN(a) || isNaN(s)) throw Error("Invalid date format");
                let n = new Date().getTime(),
                    i = Math.min(100, (n - a) / (s - a) * 100).toFixed(2);
                return i
            }
            a.d(t, {
                Z: function() {
                    return s
                }
            })
        },
        11610: function(e, t, a) {
            "use strict";

            function s(e, t) {
                let a = new Date(t),
                    s = new Date,
                    n = a.getTime() - s.getTime();
                return n < 0 ? {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                } : {
                    days: Math.floor(n / 864e5),
                    hours: Math.floor(n / 36e5 % 24),
                    minutes: Math.floor(n / 1e3 / 60 % 60),
                    seconds: Math.floor(n / 1e3) % 60
                }
            }
            a.d(t, {
                Z: function() {
                    return s
                }
            })
        },
        89660: function(e, t, a) {
            "use strict";

            function s(e, t) {
                return ["/stake/".concat(e), t].join("/")
            }
            a.d(t, {
                Z: function() {
                    return s
                }
            })
        },
        90501: function(e, t, a) {
            "use strict";
            a.d(t, {
                Wr: function() {
                    return l
                },
                an: function() {
                    return r
                },
                bf: function() {
                    return i
                }
            }), a(25427);
            var s = a(94660),
                n = a(74810);
            let i = (0, s.Ue)(e => ({
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
                l = (0, s.Ue)(e => ({
                    totalBetaStaked: 0,
                    updateTotalBetaStaked: t => e(() => ({
                        totalBetaStaked: t
                    }))
                })),
                r = (0, s.Ue)((0, n.tJ)(e => ({
                    lastActiveSubAccId: "",
                    onChangeLastActiveSubAccId: t => e({
                        lastActiveSubAccId: t
                    })
                }), {
                    version: .1,
                    name: "last-interacted-storage"
                }))
        },
        21247: function(e, t, a) {
            "use strict";
            a.d(t, {
                d: function() {
                    return i
                }
            });
            var s = a(64626),
                n = a(37041);
            let i = (e, t) => {
                var a, i;
                if (null === e) return "-";
                let l = null !== (a = null == t ? void 0 : t.displayDecimalPlaces) && void 0 !== a ? a : 2;
                e = e.dividedBy(null !== (i = null == t ? void 0 : t.magnitude) && void 0 !== i ? i : (0, s.Z)(1e18));
                let r = "";
                if (e.eq(0)) r = e.toFormat(l);
                else if (e.lt(1e-4) && t && !t.isPrice) r = (0, s.Z)(0).toFormat(l);
                else if (e.lt(.01) && t && ("$" == t.prefix || "%" == t.postfix) && !t.isPrice) r = (0, s.Z)(0).toFormat(l);
                else if (e.lt(.01)) {
                    let [t, a] = e.toExponential(2).split("e");
                    r = (0, n.Z)(null != t ? t : "") + "E" + a
                } else r = e.lt(1e6) ? e.toFormat(l) : e.lt(1e7) ? e.toFormat(0) : e.lt(1e9) ? e.dividedBy(1e6).toFormat(l) + "M" : e.dividedBy(1e9).toFormat(l) + "B";
                return "".concat((null == t ? void 0 : t.prefix) || "").concat(r).concat((null == t ? void 0 : t.postfix) || "")
            }
        },
        23342: function(e, t, a) {
            "use strict";
            a.d(t, {
                F: function() {
                    return l
                },
                u: function() {
                    return i
                }
            });
            var s = a(64626),
                n = a(21247);
            let i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return null === e ? "-" : (0, n.d)((0, s.Z)(e), {
                        magnitude: (0, s.Z)(1),
                        displayDecimalPlaces: t,
                        prefix: null == a ? void 0 : a.prefix,
                        postfix: null == a ? void 0 : a.postfix,
                        isPrice: null == a ? void 0 : a.isPrice
                    })
                },
                l = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, n.d)((0, s.Z)(e), {
                        magnitude: (0, s.Z)(1),
                        displayDecimalPlaces: t,
                        prefix: null == a ? void 0 : a.prefix,
                        postfix: null == a ? void 0 : a.postfix,
                        isPrice: null == a ? void 0 : a.isPrice
                    })
                }
        },
        31590: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return r
                }
            });
            var s = a(57437),
                n = a(65730),
                i = a(28626),
                l = a.n(i);

            function r(e) {
                let {
                    horizontal: t = !0,
                    vertical: a,
                    height: i
                } = e;
                return (0, s.jsx)("div", {
                    style: {
                        height: null != i ? i : void 0
                    },
                    className: (0, n.cn)(l().divider, t && l().horizontal, a && l().vertical)
                })
            }
        },
        78670: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var s = a(57437),
                n = a(65730);

            function i(e) {
                let {
                    height: t,
                    rounded: a,
                    expand: i,
                    className: l
                } = e;
                return (0, s.jsx)("div", {
                    style: {
                        height: t
                    },
                    className: (0, n.cn)("animate-pulse rounded-[4px] bg-gray-700", i && "flex-1", a && "rounded-lg", l)
                })
            }
        },
        34636: function(e, t, a) {
            "use strict";
            a.d(t, {
                ZP: function() {
                    return o
                },
                m4: function() {
                    return r
                }
            });
            var s = a(57437);
            a(2265);
            var n = a(69484),
                i = a(65730);
            let l = (0, n.j)(["flex items-center justify-center gap-1 rounded-[20px] leading-none"], {
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

            function r(e) {
                if (void 0 != e) {
                    if (e.lte(1.02)) return "high";
                    if (e.gt(1.02) && e.lt(1.12)) return "medium"
                }
            }

            function o(e) {
                let {
                    label: t,
                    icon: a,
                    className: n,
                    intent: r,
                    expiration: o,
                    liquidation: d,
                    size: c
                } = e;
                return (0, s.jsxs)("div", {
                    className: (0, i.cn)(l({
                        intent: r,
                        expiration: o,
                        liquidation: d,
                        size: c,
                        className: [a && "px-3", n]
                    })),
                    children: [a, (0, s.jsx)("div", {
                        className: "leading-none",
                        children: t
                    })]
                })
            }
        },
        83509: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return l
                }
            });
            var s = a(57437),
                n = a(84844),
                i = a(65730);

            function l(e) {
                var t;
                let {
                    trigger: a,
                    content: l,
                    rootProps: r,
                    contentProps: o,
                    arrowProps: d
                } = e;
                return (0, s.jsx)(n.zt, {
                    delayDuration: 150,
                    children: (0, s.jsxs)(n.fC, { ...r,
                        children: [(0, s.jsx)(n.xz, {
                            asChild: !0,
                            children: (0, s.jsx)("div", {
                                className: "cursor-pointer",
                                children: a
                            })
                        }), (0, s.jsx)(n.h_, {
                            children: (0, s.jsxs)(n.VY, { ...o,
                                sideOffset: null !== (t = null == o ? void 0 : o.sideOffset) && void 0 !== t ? t : 5,
                                className: (0, i.cn)("z-[1000] select-none rounded-[10px] bg-gray-600 p-3 text-xs font-medium text-gray-40 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade", null == o ? void 0 : o.className),
                                children: [l, (0, s.jsx)(n.Eh, { ...d,
                                    className: (0, i.cn)("fill-gray-600", null == d ? void 0 : d.className)
                                })]
                            })
                        })]
                    })
                })
            }
        },
        28626: function(e) {
            e.exports = {
                divider: "Divider_divider__amOyo",
                horizontal: "Divider_horizontal__8tGvV",
                vertical: "Divider_vertical__y28yz"
            }
        },
        39098: function(e, t, a) {
            "use strict";
            a.r(t), t.default = {
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
        e.O(0, [8787, 7667, 1346, 177, 2794, 6551, 5958, 8367, 3032, 7830, 3722, 9887, 6964, 957, 1463, 1328, 1842, 7813, 4724, 1574, 4626, 3507, 7938, 2817, 3816, 1316, 2971, 7864, 1744], function() {
            return e(e.s = 65054)
        }), _N_E = e.O()
    }
]);
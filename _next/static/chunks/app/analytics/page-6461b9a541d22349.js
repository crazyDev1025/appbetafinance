(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4109], {
        31720: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 73869))
        },
        73869: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return X
                }
            });
            var n = r(57437),
                a = r(2265),
                i = r(48756),
                o = r(4691),
                l = r(12),
                s = r.n(l),
                d = r(73229),
                c = r(75959),
                u = r(36468),
                m = r(64626),
                h = r(96889),
                p = r.n(h),
                x = r(16691),
                g = r.n(x),
                f = r(24033),
                b = r(25427),
                v = r(52256),
                y = r(87748),
                w = r(38283),
                j = r(92132),
                N = r(21247),
                _ = r(61692),
                A = r(31049),
                Z = r(76858),
                k = r(58275),
                S = r(83509),
                z = r(89296),
                E = r(65730);

            function T(e) {
                let {
                    assets: t,
                    chainId: r,
                    isLoading: i
                } = e, [o, l] = (0, a.useState)([]), [s, h] = (0, a.useState)({}), x = (0, f.useRouter)(), T = (0, a.useMemo)(() => [{
                    header: "Asset",
                    accessorKey: "tokenSymbol",
                    size: 120,
                    enableSorting: !0,
                    accessorFn: e => e,
                    cell: e => {
                        let t = e.row.parentId;
                        if (t) {
                            let {
                                type: t
                            } = e.row.original;
                            return (0, n.jsx)(d.Z, {
                                spacing: 4,
                                style: {
                                    height: "100%"
                                },
                                flex: !0,
                                children: (0, n.jsx)(Z.Z, {
                                    level: "low" === t ? 0 : "medium" === t ? 1 : 2,
                                    colored: !0
                                })
                            })
                        } {
                            let {
                                tokenSymbol: t,
                                tokenName: r,
                                tokenImageUrl: a,
                                isDepositReached: i,
                                isBorrowReached: o
                            } = e.getValue();
                            return (0, n.jsxs)(d.Z, {
                                alignItems: "center",
                                spacing: 12,
                                style: {
                                    height: "100%"
                                },
                                flex: !0,
                                row: !0,
                                children: [(0, n.jsx)(g(), {
                                    alt: "asset-logo",
                                    height: 24,
                                    src: a,
                                    width: 24
                                }), (0, n.jsxs)("div", {
                                    className: "flex max-w-[100px] flex-col justify-center gap-[4px]",
                                    children: [(0, n.jsxs)("div", {
                                        className: "relative flex w-fit",
                                        children: [(0, n.jsx)(C, {
                                            className: "font-bold",
                                            children: t
                                        }), i || o ? (0, n.jsx)("div", {
                                            className: "absolute right-[-14px] top-[-5px]",
                                            children: (0, n.jsx)(S.Z, {
                                                content: (0, n.jsx)("div", {
                                                    className: "w-[176px]",
                                                    children: i ? y.jv.SUPPLY_CAP_REACHED : y.jv.BORROW_CAP_REACHED
                                                }),
                                                trigger: (0, n.jsx)(c.Z, {
                                                    color: z.r$.green[900],
                                                    name: "lock",
                                                    size: 12
                                                })
                                            })
                                        }) : null]
                                    }), (0, n.jsx)(R, {
                                        className: "inline-block truncate",
                                        children: r
                                    })]
                                })]
                            })
                        }
                    }
                }, {
                    header: "Price",
                    accessorKey: "usdPrice",
                    enableSorting: !0,
                    accessorFn: e => e,
                    cell: e => {
                        let {
                            getValue: t
                        } = e, {
                            usdPrice: r,
                            percentChange: a
                        } = t();
                        return a ? (0, n.jsxs)(d.Z, {
                            alignItems: "end",
                            justifyContent: "center",
                            spacing: 4,
                            style: {
                                height: "100%"
                            },
                            children: [(0, n.jsx)(C, {
                                children: (0, N.d)(r, {
                                    prefix: "$",
                                    magnitude: (0, m.Z)(1e18),
                                    isPrice: !0
                                })
                            }), (0, n.jsx)(R, {
                                children: (0, n.jsx)(v.Z, {
                                    prefix: "(",
                                    suffix: "%)",
                                    value: a.toNumber()
                                })
                            })]
                        }) : (0, n.jsx)(d.Z, {
                            alignItems: "end",
                            children: "-"
                        })
                    }
                }, {
                    header: "Total Deposit",
                    accessorKey: "totalDeposit",
                    enableSorting: !0,
                    accessorFn: e => e,
                    cell: e => {
                        let {
                            getValue: t
                        } = e, {
                            totalDeposit: r,
                            usdPrice: a,
                            isDepositReached: i
                        } = t();
                        return (0, n.jsxs)("div", {
                            className: "flex w-full flex-col items-end justify-end gap-[4px]",
                            children: [(0, n.jsxs)("div", {
                                className: "relative flex w-fit items-center",
                                children: [(0, n.jsx)(C, {
                                    children: (0, N.d)(r, {
                                        magnitude: (0, m.Z)(1)
                                    })
                                }), i ? (0, n.jsx)(S.Z, {
                                    content: (0, n.jsx)("div", {
                                        className: "w-[176px]",
                                        children: y.jv.SUPPLY_CAP_REACHED
                                    }),
                                    trigger: (0, n.jsx)(c.Z, {
                                        className: "absolute right-[-14px] top-[-5px]",
                                        color: z.r$.gray[400],
                                        name: "lock",
                                        size: 12
                                    })
                                }) : null]
                            }), (0, n.jsx)(R, {
                                className: "text-gray-400",
                                children: (0, N.d)(r.multipliedBy(a), {
                                    magnitude: (0, m.Z)(1e18),
                                    isPrice: !0,
                                    prefix: "$"
                                })
                            })]
                        })
                    }
                }, {
                    header: "Deposit APY",
                    accessorKey: "depositAPY",
                    enableSorting: !0,
                    accessorFn: e => e,
                    cell: e => {
                        let {
                            getValue: t
                        } = e, {
                            depositAPY: r,
                            collateralType: a
                        } = t();
                        return a === b.zi.CROSS ? (0, n.jsxs)(C, {
                            children: [(0, N.d)(r.apy1, {
                                magnitude: (0, m.Z)(1),
                                postfix: "%"
                            }), r.apy2 && "-".concat((0, N.d)(r.apy2, {
                                magnitude: (0, m.Z)(1),
                                postfix: "%"
                            }))]
                        }) : (0, n.jsx)(C, {
                            children: "0%"
                        })
                    }
                }, {
                    header: "Total Borrow",
                    accessorKey: "totalBorrow",
                    enableSorting: !0,
                    accessorFn: e => e,
                    cell: e => {
                        let {
                            getValue: t
                        } = e, {
                            totalBorrow: r,
                            usdPrice: a,
                            collateralType: i,
                            isBorrowReached: o
                        } = t();
                        return i === b.zi.CROSS ? (0, n.jsxs)("div", {
                            className: "flex w-full flex-col items-end justify-end gap-[4px]",
                            children: [(0, n.jsxs)("div", {
                                className: "relative flex w-fit items-center",
                                children: [(0, n.jsx)(C, {
                                    children: (0, N.d)(r, {
                                        magnitude: (0, m.Z)(1)
                                    })
                                }), o ? (0, n.jsx)(S.Z, {
                                    content: (0, n.jsx)("div", {
                                        className: "w-[176px]",
                                        children: y.jv.BORROW_CAP_REACHED
                                    }),
                                    trigger: (0, n.jsx)(c.Z, {
                                        className: "absolute right-[-14px] top-[-5px]",
                                        color: z.r$.gray[400],
                                        name: "lock",
                                        size: 12
                                    })
                                }) : null]
                            }), (0, n.jsx)(R, {
                                className: "text-gray-400",
                                children: (0, N.d)(r.multipliedBy(a), {
                                    magnitude: (0, m.Z)(1e18),
                                    isPrice: !0,
                                    prefix: "$"
                                })
                            })]
                        }) : (0, n.jsx)(d.Z, {
                            alignItems: "end",
                            children: "-"
                        })
                    }
                }, {
                    header: "Borrow APY",
                    accessorKey: "borrowAPY",
                    enableSorting: !0,
                    accessorFn: e => e,
                    cell: e => {
                        let {
                            getValue: t
                        } = e, {
                            borrowAPY: r,
                            collateralType: a
                        } = t();
                        return a === b.zi.CROSS ? (0, n.jsxs)(C, {
                            children: [(0, N.d)(r.apy1, {
                                magnitude: (0, m.Z)(1),
                                postfix: "%"
                            }), r.apy2 && "-".concat((0, N.d)(r.apy2, {
                                magnitude: (0, m.Z)(1),
                                postfix: "%"
                            }))]
                        }) : (0, n.jsx)(C, {
                            children: "-"
                        })
                    }
                }, {
                    header: "Available Liquidity",
                    accessorKey: "liquidity",
                    enableSorting: !0,
                    accessorFn: e => e,
                    cell: e => {
                        let {
                            getValue: t
                        } = e, {
                            liquidity: r,
                            usdPrice: a,
                            collateralType: i
                        } = t();
                        return i === b.zi.CROSS ? (0, n.jsxs)(d.Z, {
                            alignItems: "end",
                            justifyContent: "center",
                            spacing: 4,
                            style: {
                                height: "100%"
                            },
                            children: [(0, n.jsx)(C, {
                                children: (0, N.d)(r, {
                                    magnitude: (0, m.Z)(1)
                                })
                            }), (0, n.jsx)(R, {
                                className: "text-gray-400",
                                children: (0, N.d)(r.multipliedBy(a), {
                                    magnitude: (0, m.Z)(1e18),
                                    isPrice: !0,
                                    prefix: "$"
                                })
                            })]
                        }) : (0, n.jsx)(d.Z, {
                            alignItems: "end",
                            children: "-"
                        })
                    }
                }, {
                    header: "Collateral Type",
                    accessorKey: "collateralType",
                    enableSorting: !0,
                    cell: e => e.row.parentId ? (0, n.jsx)(d.Z, {
                        alignItems: "end",
                        children: "-"
                    }) : (0, n.jsx)(C, {
                        children: j.B[e.getValue()]
                    })
                }, {
                    id: "detail-column",
                    header: "",
                    enableSorting: !1,
                    size: 100,
                    accessorKey: "collateralType",
                    cell: e => {
                        let t = e.row.parentId;
                        if (!t) return (0, n.jsx)(_.Z, {
                            className: "float-right w-[84px]",
                            intent: "secondary",
                            label: "Detail",
                            onClick: () => {
                                w.a.clickDetailButton(), x.push("/analytics/".concat(r, "/").concat(e.row.original.tokenAddress))
                            }
                        })
                    }
                }, {
                    header: "",
                    id: "expand",
                    enableSorting: !1,
                    size: 36,
                    accessorFn: e => e,
                    cell: e => {
                        let {
                            row: t,
                            getValue: r
                        } = e, {
                            collateralType: a
                        } = r();
                        return a === b.zi.ISOLATED || t.parentId ? null : (0, n.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, n.jsx)(u._i7, {
                                className: (0, E.cn)("cursor-pointer transition duration-300 ease-in-out", t.getIsExpanded() && "rotate-180 text-primary-900"),
                                onClick: () => {
                                    var e;
                                    (null === (e = t.getParentRow()) || void 0 === e ? void 0 : e.getIsExpanded()) || t.getToggleExpandedHandler()(), w.a.toggleExpandTableRow({
                                        isExpanded: !t.getIsExpanded(),
                                        component: "AssetTable"
                                    })
                                }
                            })
                        })
                    }
                }], [x, r]), P = (null == o ? void 0 : o.length) > 0 ? function(e, t) {
                    var r, n, a, i, o, l, s, d, c, u, m;
                    switch (null === (r = t[0]) || void 0 === r ? void 0 : r.id) {
                        case "tokenSymbol":
                            return p()(e, null === (n = t[0]) || void 0 === n ? void 0 : n.id, (null === (a = t[0]) || void 0 === a ? void 0 : a.desc) ? "desc" : "asc");
                        case "usdPrice":
                            return p()(e, e => e.usdPrice.toNumber(), (null === (i = t[0]) || void 0 === i ? void 0 : i.desc) ? "desc" : "asc");
                        case "totalDeposit":
                            return p()(e, e => e.totalDeposit.toNumber() * e.usdPrice.toNumber(), (null === (o = t[0]) || void 0 === o ? void 0 : o.desc) ? "desc" : "asc");
                        case "totalBorrow":
                            return p()(e, e => 0 !== e.totalBorrow.toNumber() ? e.totalBorrow.toNumber() * e.usdPrice.toNumber() : -1 / 0, (null === (l = t[0]) || void 0 === l ? void 0 : l.desc) ? "desc" : "asc");
                        case "depositAPY":
                            return p()(e, e => e.depositAPY.apy2 ? e.depositAPY.apy2.toNumber() : -1 / 0, (null === (s = t[0]) || void 0 === s ? void 0 : s.desc) ? "desc" : "asc");
                        case "borrowAPY":
                            return p()(e, e => e.borrowAPY.apy2 ? e.borrowAPY.apy2.toNumber() : -1 / 0, (null === (d = t[0]) || void 0 === d ? void 0 : d.desc) ? "desc" : "asc");
                        case "liquidity":
                            return p()(e, e => e.collateralType !== b.zi.ISOLATED ? e.liquidity.toNumber() * e.usdPrice.toNumber() : -1 / 0, (null === (c = t[0]) || void 0 === c ? void 0 : c.desc) ? "desc" : "asc");
                        default:
                            return p()(e, null === (u = t[0]) || void 0 === u ? void 0 : u.id, (null === (m = t[0]) || void 0 === m ? void 0 : m.desc) ? "desc" : "asc")
                    }
                }(t, o) : t;
                return (0, n.jsxs)(d.Z, {
                    className: "h-full w-full",
                    children: [(0, n.jsx)(k.Z, {
                        className: "[&>thead>tr]:border-l-0 [&>thead>tr]:border-r-0 border-separate border-spacing-0 [&>thead>tr>th]:pb-4 [&>thead>tr>th]:pt-0 [&>thead>tr]:border-solid [&>thead>tr]:border-t-gray-700",
                        columns: T,
                        data: i || !P ? [] : P,
                        state: {
                            sorting: o,
                            expanded: s
                        },
                        onExpandedChange: h,
                        onSortingChange: l
                    }), (i || !P) && (0, n.jsx)(d.Z, {
                        className: "pb-4 pt-8",
                        justifyContent: "center",
                        row: !0,
                        children: (0, n.jsx)(A.Z, {
                            size: 24
                        })
                    })]
                })
            }
            let C = e => {
                    let {
                        children: t,
                        className: r
                    } = e;
                    return (0, n.jsx)("div", {
                        className: (0, E.cn)("float-right text-sm font-medium leading-none", r),
                        children: t
                    })
                },
                R = e => {
                    let {
                        children: t,
                        className: r
                    } = e;
                    return (0, n.jsx)("div", {
                        className: (0, E.cn)("float-right text-[11px] font-medium leading-none text-gray-400", r),
                        children: t
                    })
                };
            var P = r(58910),
                I = r(18412),
                D = r(6747);

            function B(e) {
                let {
                    assets: t = [],
                    isLoading: r,
                    chainId: i
                } = e, [o, l] = (0, a.useState)(!1), s = (0, D.Z)(i), {
                    lowTranche: d,
                    mediumTranche: u,
                    highTranche: m
                } = (0, a.useMemo)(() => t.reduce((e, t) => {
                    let r = t.tokenAddress,
                        n = s[r],
                        a = null == n ? void 0 : n.riskTranche;
                    switch (a) {
                        case 0:
                            e.lowTranche.push(t);
                            break;
                        case 1:
                            e.mediumTranche.push(t);
                            break;
                        case 2:
                            e.highTranche.push(t)
                    }
                    return e
                }, {
                    lowTranche: [],
                    mediumTranche: [],
                    highTranche: []
                }), [t, s]);
                return r ? null : (0, n.jsx)(I.fC, {
                    id: "tranche-legend-container",
                    open: o,
                    className: (0, E.cn)('[data-state="closed"]:slideLeft [data-state="open"]:slideRight border-l-0 absolute -z-10 rounded-r-lg border border-gray-700 bg-gray-900 bg-opacity-30 backdrop-blur-[5px] transition-[right] duration-300 ease-in-out', !o && "-right-[42px] top-[calc(50%-83px)] h-[166px] w-[42px]", o && "-right-[140px] top-[calc(50%-200px)] h-[400px] w-[140px]"),
                    onOpenChange: e => {
                        l(e), w.a.toggleShowRiskPoolLegend({
                            isOpened: e
                        })
                    },
                    children: o ? (0, n.jsxs)("div", {
                        className: "flex flex-col gap-y-[18px] p-3 text-[12px]",
                        children: [(0, n.jsx)(I.xz, {
                            className: "w-full",
                            children: (0, n.jsxs)("div", {
                                className: "flex w-full cursor-pointer items-center justify-end gap-x-1 whitespace-nowrap text-gray-300 outline-none",
                                children: [(0, n.jsx)(P.xdf, {
                                    "aria-hidden": !0
                                }), "Hide"]
                            })
                        }), (0, n.jsxs)(I.VY, {
                            className: "flex flex-col gap-y-[18px]",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-center gap-x-1",
                                children: [(0, n.jsx)("div", {
                                    className: "text-subtitle3 text-primary-900",
                                    children: "Risk Pool:"
                                }), (0, n.jsx)(S.Z, {
                                    content: (0, n.jsx)("div", {
                                        className: "w-[176px] [&>a]:underline",
                                        dangerouslySetInnerHTML: {
                                            __html: y.jv.TRANCHE_LEGEND
                                        }
                                    }),
                                    trigger: (0, n.jsx)(c.Z, {
                                        color: z.r$.green[900],
                                        name: "information-circle",
                                        size: 12
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col gap-y-[12px]",
                                children: [(0, n.jsx)(Z.Z, {
                                    className: "h-5 !min-w-[94px] [&>span]:!font-normal",
                                    level: 0,
                                    colored: !0
                                }), (0, n.jsx)("div", {
                                    className: "grid grid-cols-4 gap-1",
                                    children: d.map((e, t) => (0, n.jsx)(g(), {
                                        alt: "asset-logo",
                                        height: 24,
                                        src: e.tokenImageUrl,
                                        width: 24
                                    }, "tranche-legend-asset-logo-".concat(t)))
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col gap-y-[12px]",
                                children: [(0, n.jsx)(Z.Z, {
                                    className: "h-5 !min-w-[94px] [&>span]:!font-normal",
                                    level: 1,
                                    colored: !0
                                }), (0, n.jsx)("div", {
                                    className: "grid grid-cols-4 gap-1",
                                    children: u.map((e, t) => (0, n.jsx)(g(), {
                                        alt: "asset-logo",
                                        height: 24,
                                        src: e.tokenImageUrl,
                                        width: 24
                                    }, "tranche-legend-asset-logo-".concat(t)))
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col gap-y-[12px]",
                                children: [(0, n.jsx)(Z.Z, {
                                    className: "h-5 !min-w-[94px] [&>span]:!font-normal",
                                    level: 2,
                                    colored: !0
                                }), (0, n.jsx)("div", {
                                    className: "grid grid-cols-4 gap-1",
                                    children: m.map((e, t) => (0, n.jsx)(g(), {
                                        alt: "asset-logo",
                                        height: 24,
                                        src: e.tokenImageUrl,
                                        width: 24
                                    }, "tranche-legend-asset-logo-".concat(t)))
                                })]
                            })]
                        })]
                    }) : (0, n.jsx)(I.xz, {
                        children: (0, n.jsxs)("div", {
                            className: "relative left-[42px] top-[14px] inline-flex h-[42px] origin-top-left rotate-90 cursor-pointer items-center justify-center gap-x-1 whitespace-nowrap text-[12px] text-gray-300 outline-none",
                            children: ["Show Risk Pool Legend", (0, n.jsx)(P.sfG, {
                                "aria-hidden": !0
                            })]
                        })
                    })
                })
            }

            function F(e) {
                let {
                    assets: t,
                    chainId: r,
                    isLoading: a
                } = e;
                return (0, n.jsxs)(d.Z, {
                    spacing: 24,
                    children: [(0, n.jsxs)(d.Z, {
                        alignItems: "center",
                        spacing: 8,
                        row: !0,
                        children: [(0, n.jsx)(c.Z, {
                            name: "chart",
                            size: 24
                        }), (0, n.jsxs)("div", {
                            className: "text-2xl font-bold leading-snug",
                            children: ["All Assets (", (null == t ? void 0 : t.length) || 0, ")"]
                        })]
                    }), (0, n.jsxs)(d.Z, {
                        className: "relative z-0",
                        children: [(0, n.jsx)(d.Z, {
                            className: "rounded-[20px] border border-gray-700 bg-gray-900 bg-opacity-30 p-4 backdrop-blur-[5px]",
                            children: (0, n.jsx)(T, {
                                assets: t,
                                chainId: r,
                                isLoading: a
                            })
                        }), t && t.length > 0 && (0, n.jsx)(B, {
                            assets: t,
                            chainId: r,
                            isLoading: a
                        })]
                    })]
                })
            }
            var O = r(78670),
                L = r(56069),
                M = r(31590),
                Y = r(46973);

            function G(e) {
                let {
                    chain: t,
                    onSelect: r
                } = e, i = Object.values(L.G).map(e => ({
                    key: e.id.toString(),
                    label: (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 overflow-hidden",
                        children: [(0, n.jsx)(g(), {
                            alt: "".concat(e.label, "-logo"),
                            height: 24,
                            src: e.logoSrc,
                            width: 24
                        }), (0, n.jsx)("div", {
                            className: "truncate text-sm font-medium text-gray-40",
                            children: e.label
                        })]
                    }),
                    value: e
                })), [o, l] = (0, a.useState)(!1);
                return (0, n.jsx)(Y.Z, {
                    className: "h-[136px] w-[200px] p-2",
                    dropdownItems: i,
                    open: o,
                    searchable: !1,
                    selectedValue: t,
                    trigger: (0, n.jsx)(_.Z, {
                        className: "group h-auto w-[210px] justify-start rounded-full border-transparent px-2 py-[6px] hover:border-transparent hover:bg-transparent active:border-gray-800 active:bg-gray-800/20 [&>svg>path]:fill-gray-300 [&>svg>path]:hover:fill-gray-40 [&>svg>path]:active:fill-primary-900",
                        iconRight: o ? "arrow-up" : "arrow-down",
                        intent: "secondary",
                        label: (0, n.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, n.jsx)(g(), {
                                alt: "chain-logo",
                                height: 36,
                                src: t.logoSrc,
                                width: 36
                            }), (0, n.jsx)("div", {
                                className: "whitespace-nowrap text-lg font-medium text-gray-300 group-hover:text-gray-40 group-active:text-primary-900",
                                children: t.label
                            })]
                        }),
                        onClick: () => null
                    }),
                    onOpenChange: l,
                    onSelect: e => {
                        r(e), l(!1), w.a.selectAssetTableNetwork({
                            selectedChainId: e.id.toString()
                        })
                    }
                })
            }

            function U(e) {
                let {
                    chainId: t,
                    setChainId: r,
                    totalDeposit: i,
                    totalBorrow: o,
                    liquidity: l,
                    totalAsset: s
                } = e, [d, c] = (0, a.useState)(L.G[t]);
                return (0, n.jsxs)("div", {
                    className: "flex items-center gap-4 rounded-[20px] border border-gray-700 bg-gray-900 bg-opacity-30 p-4 backdrop-blur-[5px]",
                    children: [(0, n.jsx)(G, {
                        chain: d,
                        onSelect: e => {
                            r(e.id), c(e)
                        }
                    }), (0, n.jsx)(M.Z, {
                        height: 48,
                        vertical: !0
                    }), (0, n.jsxs)("div", {
                        className: "grid w-full grid-cols-4 gap-6",
                        children: [(0, n.jsx)(H, {
                            label: "Total Deposit",
                            value: i
                        }), (0, n.jsx)(H, {
                            label: "Total Borrow",
                            value: o
                        }), (0, n.jsx)(H, {
                            label: "Available Liquidity",
                            value: l
                        }), (0, n.jsx)(H, {
                            label: "Supported Assets",
                            value: s
                        })]
                    })]
                })
            }
            let H = e => {
                    let {
                        label: t,
                        value: r
                    } = e;
                    return (0, n.jsxs)(d.Z, {
                        spacing: 8,
                        flex: !0,
                        children: [(0, n.jsx)("div", {
                            className: "whitespace-nowrap text-xl font-bold leading-none",
                            children: r
                        }), (0, n.jsx)("div", {
                            className: "whitespace-nowrap text-sm leading-none text-gray-400",
                            children: t
                        })]
                    })
                },
                K = (0, n.jsx)(O.Z, {
                    height: 20
                });

            function $(e) {
                let {
                    chainId: t,
                    setChainId: r,
                    isLoading: a,
                    totalDeposit: i,
                    totalBorrow: o,
                    liquidity: l,
                    totalAsset: s
                } = e;
                return a ? (0, n.jsx)(U, {
                    chainId: t,
                    liquidity: K,
                    setChainId: r,
                    totalAsset: K,
                    totalBorrow: K,
                    totalDeposit: K
                }) : (0, n.jsx)(U, {
                    chainId: t,
                    setChainId: r,
                    totalAsset: s,
                    liquidity: (0, N.d)(l, {
                        magnitude: (0, m.Z)(1e18),
                        prefix: "$"
                    }),
                    totalBorrow: (0, N.d)(o, {
                        magnitude: (0, m.Z)(1e18),
                        prefix: "$",
                        isPrice: !0
                    }),
                    totalDeposit: (0, N.d)(i, {
                        magnitude: (0, m.Z)(1e18),
                        prefix: "$",
                        isPrice: !0
                    })
                })
            }
            var q = r(8975),
                V = r(6242),
                W = r(66358);

            function X() {
                var e, t;
                let [r, l] = (0, a.useState)((0, i.xx)()), c = (0, D.Z)(r), {
                    isLoading: u,
                    data: h
                } = (0, V.Z)({
                    chainId: r,
                    tokenAddresses: o.z6[r],
                    refetchInterval: 6e4
                }), {
                    isLoading: p,
                    data: x
                } = (0, q.Z)({
                    chainId: r,
                    marketAddresses: o.ri[r],
                    marketAddressesNoBorrow: o.uT[r],
                    refetchInterval: 6e4
                }), g = (0, a.useMemo)(() => u || p, [p, u]), {
                    analyticsData: f,
                    totalDepositUsd: v,
                    totalBorrowUsd: y
                } = function(e) {
                    let {
                        markets: t,
                        marketConfiguration: r,
                        oracles: n,
                        chainId: i
                    } = e, l = (0, a.useMemo)(() => {
                        if (!t || !r || !n) return [];
                        let e = [],
                            a = o.kb[i].filter(e => e !== o.DX[i]);
                        for (let i of a) {
                            var l, s, d, c, u, h, p, x, g, f, v, y;
                            let a = r[i];
                            if (!a) return console.warn("Unknown market", i), [];
                            let o = null === (l = n[a.underlying]) || void 0 === l ? void 0 : l.price,
                                w = null === (s = n[a.underlying]) || void 0 === s ? void 0 : s.lastPrice;
                            if (!o || !w) return [];
                            let j = t[i];
                            if (!j) return [];
                            let N = null == a ? void 0 : a.decimals,
                                _ = (0, m.Z)(o.toString()),
                                A = (0, m.Z)(w.toString()),
                                Z = _.dividedBy(A).minus(1).multipliedBy(100),
                                k = (0, W.Z)(j),
                                S = k.reduce((e, t) => ({
                                    depositMin: Math.min(e.depositMin, 100 * t.depositAPY),
                                    depositMax: Math.max(e.depositMax, 100 * t.depositAPY),
                                    borrowMin: Math.min(e.borrowMin, 100 * t.borrowAPY),
                                    borrowMax: Math.max(e.borrowMax, 100 * t.borrowAPY)
                                }), {
                                    depositMin: Number.MAX_SAFE_INTEGER,
                                    depositMax: Number.MIN_SAFE_INTEGER,
                                    borrowMin: Number.MAX_SAFE_INTEGER,
                                    borrowMax: Number.MIN_SAFE_INTEGER
                                }),
                                z = (0, m.Z)(((null == j ? void 0 : null === (d = j[0]) || void 0 === d ? void 0 : d.cumulativeTotalDeposit) || 0).toString()),
                                E = (0, m.Z)(((null == j ? void 0 : null === (c = j[0]) || void 0 === c ? void 0 : c.cumulativeTotalBorrow) || 0).toString()),
                                T = N ? (0, m.Z)((null !== (p = null == j ? void 0 : null === (u = j[0]) || void 0 === u ? void 0 : u.cumulativeTotalDeposit) && void 0 !== p ? p : 0).toString()).dividedBy((0, m.Z)(10 ** N)) : (0, m.Z)(0),
                                C = N ? (0, m.Z)((null !== (x = null == j ? void 0 : null === (h = j[0]) || void 0 === h ? void 0 : h.cumulativeTotalBorrow) && void 0 !== x ? x : 0).toString()).dividedBy((0, m.Z)(10 ** N)) : (0, m.Z)(0),
                                R = (null == a ? void 0 : a.isIsolatedCollateral) ? b.zi.ISOLATED : b.zi.CROSS,
                                P = null !== (g = null == j ? void 0 : j.length) && void 0 !== g ? g : 0,
                                I = ["low", "medium", "high"],
                                D = Array(P).fill(!0).map((e, t) => {
                                    var r, n, i, o, l, s, d, c;
                                    let u = N ? (0, m.Z)((null !== (l = null == j ? void 0 : null === (r = j[t]) || void 0 === r ? void 0 : r.totalBorrow) && void 0 !== l ? l : 0).toString()).dividedBy((0, m.Z)(10 ** N)) : (0, m.Z)(0),
                                        h = N ? (0, m.Z)((null !== (s = null == j ? void 0 : null === (n = j[t]) || void 0 === n ? void 0 : n.cumulativeTotalDeposit) && void 0 !== s ? s : 0).toString()).dividedBy((0, m.Z)(10 ** N)) : (0, m.Z)(0),
                                        p = (0, m.Z)(0),
                                        x = (0, m.Z)(0);
                                    for (let e = 0; e <= t; e++) {
                                        let r = j[e],
                                            n = r ? (0, m.Z)(r.cumulativeTotalDeposit.toString()).minus((0, m.Z)(r.cumulativeTotalBorrow.toString())) : (0, m.Z)(0);
                                        p = 0 === e ? n : m.Z.min(p, n), e === t && (x = r ? (0, m.Z)(r.totalBorrow.toString()) : (0, m.Z)(0))
                                    }
                                    let g = m.Z.max((0, m.Z)(0), p.dividedBy(10 ** N)),
                                        f = a.borrowCap[t],
                                        b = f ? f.minus((0, m.Z)(x)).dividedBy(10 ** N) : (0, m.Z)(0),
                                        v = m.Z.min(g, b),
                                        y = (0, m.Z)(null !== (d = null == k ? void 0 : null === (i = k[t]) || void 0 === i ? void 0 : i.depositAPY) && void 0 !== d ? d : 0).multipliedBy(100),
                                        w = (0, m.Z)(null !== (c = null == k ? void 0 : null === (o = k[t]) || void 0 === o ? void 0 : o.borrowAPY) && void 0 !== c ? c : 0).multipliedBy(100);
                                    return {
                                        type: I[t],
                                        totalDeposit: h,
                                        depositAPY: {
                                            apy1: y,
                                            apy2: void 0
                                        },
                                        totalBorrow: u,
                                        borrowAPY: {
                                            apy1: w,
                                            apy2: void 0
                                        },
                                        liquidity: v,
                                        usdPrice: _,
                                        collateralType: R
                                    }
                                });
                            e.push({
                                tokenAddress: i,
                                tokenSymbol: null !== (f = null == a ? void 0 : a.tokenSymbol) && void 0 !== f ? f : "",
                                tokenName: null !== (v = null == a ? void 0 : a.tokenName) && void 0 !== v ? v : "",
                                tokenImageUrl: null !== (y = null == a ? void 0 : a.logoSrc) && void 0 !== y ? y : "",
                                usdPrice: _,
                                percentChange: Z,
                                totalDeposit: null != T ? T : (0, m.Z)(0),
                                depositAPY: {
                                    apy1: (0, m.Z)(S.depositMin),
                                    apy2: (0, m.Z)(S.depositMax)
                                },
                                totalBorrow: null != C ? C : (0, m.Z)(0),
                                borrowAPY: {
                                    apy1: (0, m.Z)(S.borrowMin),
                                    apy2: (0, m.Z)(S.borrowMax)
                                },
                                liquidity: T && C ? T.minus(C) : (0, m.Z)(0),
                                collateralType: R,
                                subRows: D,
                                isDepositReached: !!z && z.gte(a.depositCap),
                                isBorrowReached: !a.isIsolatedCollateral && !!E && E.gte(a.borrowCap.reduce((e, t) => e.plus(t), (0, m.Z)(0)))
                            })
                        }
                        return e
                    }, [t, r, n, i]), s = (0, a.useMemo)(() => l ? l.reduce((e, t) => {
                        let r = (0, m.Z)(t.totalDeposit).multipliedBy(t.usdPrice);
                        return e.plus(r)
                    }, (0, m.Z)(0)) : (0, m.Z)(0), [l]), d = (0, a.useMemo)(() => l ? l.reduce((e, t) => {
                        let r = (0, m.Z)(t.totalBorrow).multipliedBy(t.usdPrice);
                        return e.plus(r)
                    }, (0, m.Z)(0)) : (0, m.Z)(0), [l]);
                    return {
                        analyticsData: l,
                        totalDepositUsd: s,
                        totalBorrowUsd: d
                    }
                }({
                    markets: null == x ? void 0 : null === (e = x.body) || void 0 === e ? void 0 : e.markets,
                    marketConfiguration: c,
                    oracles: null == h ? void 0 : null === (t = h.body) || void 0 === t ? void 0 : t.oracles,
                    chainId: r
                }), w = (0, a.useMemo)(() => o.kb[r].filter(e => e !== o.DX[r]).length, [r]);
                return (0, n.jsx)(d.Z, {
                    alignItems: "center",
                    children: (0, n.jsxs)(d.Z, {
                        className: s().content,
                        spacing: 24,
                        children: [(0, n.jsx)($, {
                            chainId: r,
                            isLoading: g,
                            liquidity: v.minus(y),
                            setChainId: l,
                            totalAsset: w,
                            totalBorrow: y,
                            totalDeposit: v
                        }), (0, n.jsx)(F, {
                            assets: f,
                            chainId: r,
                            isLoading: g
                        })]
                    })
                })
            }
        },
        50646: function(e, t, r) {
            "use strict";
            r.d(t, {
                H6: function() {
                    return s
                },
                Lf: function() {
                    return o
                },
                Tb: function() {
                    return l
                },
                wX: function() {
                    return i
                }
            });
            var n = r(94660);

            function a(e) {
                return "auth-token/".concat(e)
            }
            let i = (0, n.Ue)(() => ({
                authTokens: {}
            }));

            function o(e) {
                let {
                    authTokens: t
                } = i.getState(), r = null, n = t[e.value];
                if (n) r = n;
                else {
                    let t = localStorage.getItem(a(e));
                    t && (i.setState({
                        authTokens: { ...i.getState().authTokens,
                            [e.value]: t
                        }
                    }), r = t)
                }
                return r
            }

            function l(e, t) {
                localStorage.setItem(a(e), t), i.setState({
                    authTokens: { ...i.getState().authTokens,
                        [e.value]: t
                    }
                })
            }

            function s(e) {
                localStorage.removeItem(a(e));
                let {
                    [e.value]: t, ...r
                } = i.getState().authTokens;
                i.setState({
                    authTokens: r
                })
            }
        },
        52256: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = r(57437);
            let a = (e, t) => {
                try {
                    if (e < .01) return e.toFixed(t);
                    let r = Number(e.toFixed(t)).toLocaleString(void 0, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                    if ("NaN" === r) return "-";
                    return r
                } catch (e) {
                    return "-"
                }
            };
            var i = r(73229),
                o = r(75959),
                l = r(65730);

            function s(e) {
                let {
                    value: t,
                    positiveIcon: r,
                    negativeIcon: s,
                    prefix: d = "",
                    suffix: c = "",
                    className: u
                } = e, m = parseFloat(t.toFixed(2));
                return (0, n.jsxs)(i.Z, {
                    alignItems: "center",
                    className: (0, l.cn)("relative", 0 == m && "text-gray-400", m > 0 && "text-primary-900", m < 0 && "text-secondary-900", u),
                    flex: !0,
                    row: !0,
                    children: [d, 0 === m ? "" : m > 0 ? null != r ? r : (0, n.jsx)(o.Z, {
                        className: "absolute left-[2px] top-[-3px]",
                        name: "triangle-up",
                        size: 16
                    }) : null != s ? s : (0, n.jsx)(o.Z, {
                        className: "absolute left-[2px] top-[-3px]",
                        name: "triangle-down",
                        size: 16
                    }), (0, n.jsx)("span", {
                        className: (0, l.cn)(m && 0 !== m && (!r || !s) && "ml-3"),
                        children: a(Math.abs(t), 2)
                    }), c]
                })
            }
        },
        87748: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return s
                },
                Lt: function() {
                    return d
                },
                Sv: function() {
                    return o
                },
                _d: function() {
                    return l
                },
                jv: function() {
                    return i
                },
                kG: function() {
                    return n
                },
                nn: function() {
                    return a
                }
            });
            let n = {
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
                i = {
                    COLLATERAL_TYPE: 'Assets marked as “Isolated” can only do isolated collateralization and not in subaccounts with other assets for risk management purpose. On the other hand, tokens marked as "Cross" have the flexibility to be used with other "Cross" tokens in a subaccount for cross collateralization.',
                    TRANCHE_LEGEND: "The 3 risk pools indicate the collateral risk that will be associated with each deposit, while the legend provides information about the assets included in each risk level.",
                    SUPPLY_CAP_REACHED: "The supply cap for this asset has been reached. Only borrows are available at the moment.",
                    BORROW_CAP_REACHED: "The borrow cap for this asset has been reached. Only deposits are available at the moment."
                },
                o = {
                    EMODE: 'E-mode (Efficiency Mode) enhances borrowing power for correlated assets. Activating E-mode limits the range of assets that can be used in this subaccount. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/borrow/e-mode" target="_blank">Discover more about E-mode</a>',
                    COLLATERALIZED: "Collateralizing your assets enables you to use your deposits as collateral for borrowing."
                },
                l = {
                    TOTAL_POINTS: "Combine points from both deposit and borrowing activities. Each lending point is equal to one borrowing point.",
                    DEPOSIT_POINTS: "Points garnered from deposits.",
                    BORROW_POINTS: "Points accrued through borrowing activities."
                },
                s = {
                    RISK_POOL_RISK_GRADE: "Borrowing with collateral of varying risk grades or depositing into different risk pools results in distinct borrow and deposit APYs."
                },
                d = {
                    LOCK_PERIOD: "Time of BETA locked since first staked",
                    COOLDOWN_PERIOD: '<b>You’re now in the Cooldown Period.</b> After 5 days of cooldown, you will enter unstake window of 2 days. You will continue receiving rewards during cooldown and unstake window. <br/><br/><a href="https://docs.betafinance.org/docs/getting-started/borrow/e-mode" target="_blank">Learn more</a>',
                    UNSTAKE_PERIOD: "<b>You’re now in the Unstake Window.</b> You have 2 days to unstake. If you don’t unstake within 2 days of unstake window, you will need to activate cooldown process again.’"
                }
        },
        6747: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(4691);

            function a(e) {
                return n.wb[e]
            }
        },
        8975: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(30805);

            function a(e) {
                let {
                    chainId: t,
                    marketAddresses: r,
                    marketAddressesNoBorrow: a,
                    ignoreCache: i,
                    refetchInterval: o,
                    enabled: l = !0
                } = e;
                return n.Z.market.getMarketOverview.useQuery(["market-overview"], {
                    headers: {
                        "cache-control": i ? "no-cache" : void 0
                    },
                    query: {
                        chainId: t,
                        marketAddresses: r,
                        marketAddressesNoBorrow: a
                    }
                }, {
                    enabled: l && (r.length > 0 || a.length > 0),
                    refetchInterval: null != o ? o : 0
                })
            }
        },
        6242: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(30805);

            function a(e) {
                let {
                    chainId: t,
                    tokenAddresses: r,
                    refetchInterval: a = 0,
                    ignoreCache: i,
                    enabled: o = !0
                } = e;
                return n.Z.oracle.getOraclePrices.useQuery(["oracle-prices"], {
                    headers: {
                        "cache-control": i ? "no-cache" : void 0
                    },
                    query: {
                        chainId: t,
                        tokenAddresses: r
                    }
                }, {
                    enabled: o && r.length > 0,
                    refetchInterval: a
                })
            }
        },
        56069: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return d
                }
            });
            var n = r(5727);
            let a = {
                id: n.R.id,
                label: "Ethereum",
                logoSrc: "/ethereum.png",
                chain: { ...n.R,
                    iconUrl: "/ethereum.png"
                }
            };
            var i = r(85780);
            let o = {
                id: i.y.id,
                label: "Arbitrum",
                logoSrc: "/arb.png",
                chain: { ...i.y,
                    iconUrl: "/arb.png"
                }
            };
            var l = r(32936);
            let s = {
                    id: l.e.id,
                    label: "BNB Chain",
                    logoSrc: "/bsc.png",
                    chain: { ...l.e,
                        iconUrl: "/bsc.png"
                    }
                },
                d = {
                    [a.id]: a,
                    [s.id]: s,
                    [o.id]: o
                }
        },
        92132: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return a
                }
            });
            var n = r(25427);
            let a = {
                [n.zi.NONE]: "None",
                [n.zi.ISOLATED]: "Isolated",
                [n.zi.CROSS]: "Crossed",
                [n.zi.STABLECOIN]: "Stablecoin",
                [n.zi.ETH_CORRELATED]: "ETH"
            }
        },
        21247: function(e, t, r) {
            "use strict";
            r.d(t, {
                d: function() {
                    return i
                }
            });
            var n = r(64626),
                a = r(37041);
            let i = (e, t) => {
                var r, i;
                if (null === e) return "-";
                let o = null !== (r = null == t ? void 0 : t.displayDecimalPlaces) && void 0 !== r ? r : 2;
                e = e.dividedBy(null !== (i = null == t ? void 0 : t.magnitude) && void 0 !== i ? i : (0, n.Z)(1e18));
                let l = "";
                if (e.eq(0)) l = e.toFormat(o);
                else if (e.lt(1e-4) && t && !t.isPrice) l = (0, n.Z)(0).toFormat(o);
                else if (e.lt(.01) && t && ("$" == t.prefix || "%" == t.postfix) && !t.isPrice) l = (0, n.Z)(0).toFormat(o);
                else if (e.lt(.01)) {
                    let [t, r] = e.toExponential(2).split("e");
                    l = (0, a.Z)(null != t ? t : "") + "E" + r
                } else l = e.lt(1e6) ? e.toFormat(o) : e.lt(1e7) ? e.toFormat(0) : e.lt(1e9) ? e.dividedBy(1e6).toFormat(o) + "M" : e.dividedBy(1e9).toFormat(o) + "B";
                return "".concat((null == t ? void 0 : t.prefix) || "").concat(l).concat((null == t ? void 0 : t.postfix) || "")
            }
        },
        37041: function(e, t, r) {
            "use strict";

            function n(e) {
                return e.replace(/0+$/, "").replace(/\.$/, "")
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        73229: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = r(57437),
                a = r(2265),
                i = r(63779),
                o = r(65730),
                l = r(8625),
                s = r.n(l);

            function d(e) {
                let {
                    className: t,
                    style: r,
                    row: l,
                    column: d,
                    flex: c,
                    alignItems: u,
                    justifyContent: m,
                    spacing: h,
                    children: p,
                    ...x
                } = e, g = (0, o.cn)(s().container, d && s().column, l && s().row, t), f = (0, i.Z)(c && {
                    flex: !0 === c ? 1 : c
                }, u && {
                    alignItems: u
                }, m && {
                    justifyContent: m
                }, r), b = p;
                if (h) {
                    let e = a.Children.toArray(p).filter(Boolean);
                    b = e.map((t, r) => (0, n.jsxs)(a.Fragment, {
                        children: [t, r !== e.length - 1 && t && (0, n.jsx)("div", {
                            style: {
                                width: l ? h : void 0,
                                height: l ? void 0 : h,
                                flexShrink: 0
                            }
                        })]
                    }, r))
                }
                return (0, n.jsx)("div", {
                    className: g,
                    style: f,
                    ...x,
                    children: b
                })
            }
        },
        61692: function(e, t, r) {
            "use strict";
            var n = r(57437),
                a = r(2265),
                i = r(69484),
                o = r(75959),
                l = r(65730);
            let s = (0, i.j)(["flex items-center justify-center gap-1", "disabled:cursor-not-allowed", "outline-none"], {
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
                d = a.forwardRef((e, t) => {
                    let {
                        label: r,
                        danger: a,
                        icon: i,
                        iconRight: d,
                        intent: c,
                        size: u,
                        className: m,
                        onClick: h
                    } = e;
                    return (0, n.jsxs)("button", {
                        ref: t,
                        disabled: e.disabled,
                        type: "button",
                        className: (0, l.cn)(s({
                            intent: c,
                            size: u,
                            className: [a && (!c || "primary" === c) && "border-secondary-900 bg-secondary-900 hover:border-secondary-800 hover:bg-secondary-800 active:border-secondary-700 active:from-secondary-700 active:via-secondary-700 active:to-secondary-700", a && "secondary" === c && "border-secondary-900 text-secondary-900 hover:border-secondary-900 hover:bg-secondary-500 active:bg-secondary-50", m]
                        })),
                        onClick: h,
                        children: [i && (0, n.jsx)(o.Z, {
                            name: i,
                            size: 16
                        }), (0, n.jsx)("div", {
                            className: "leading-none",
                            children: r
                        }), d && (0, n.jsx)(o.Z, {
                            name: d,
                            size: 16
                        })]
                    })
                });
            d.displayName = "ButtonRounded", t.Z = d
        },
        46973: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return j
                }
            });
            var n = r(57437),
                a = r(2265),
                i = r(62927),
                o = r.n(i),
                l = r(73229),
                s = r(75370),
                d = r(11907),
                c = r(65730);
            let u = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(d.mY, {
                    ref: t,
                    className: (0, c.cn)(r),
                    ...a
                })
            });
            u.displayName = d.mY.displayName;
            let m = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsxs)("div", {
                    className: "flex items-center space-x-2 text-white",
                    "cmdk-input-wrapper": "",
                    children: [(0, n.jsx)(s.eaK, {
                        size: 24
                    }), (0, n.jsx)(d.mY.Input, {
                        ref: t,
                        className: (0, c.cn)(r),
                        ...a
                    })]
                })
            });
            m.displayName = d.mY.Input.displayName;
            let h = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(d.mY.Empty, {
                    ref: t,
                    className: (0, c.cn)("text-center text-sm font-medium text-gray-400", r),
                    ...a
                })
            });
            h.displayName = d.mY.Empty.displayName;
            let p = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(d.mY.Group, {
                    ref: t,
                    className: (0, c.cn)(r),
                    ...a
                })
            });
            p.displayName = d.mY.Group.displayName;
            let x = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(d.mY.Item, {
                    ref: t,
                    className: r,
                    ...a
                })
            });
            x.displayName = d.mY.Item.displayName;
            var g = r(36680),
                f = r(98768);
            let b = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    ...i
                } = e;
                return (0, n.jsxs)(f.fC, {
                    ref: t,
                    className: (0, c.cn)("relative overflow-hidden", r),
                    ...i,
                    children: [(0, n.jsx)(f.l_, {
                        className: "h-full w-full rounded-[inherit]",
                        children: a
                    }), (0, n.jsx)(v, {}), (0, n.jsx)(f.Ns, {})]
                })
            });
            b.displayName = f.fC.displayName;
            let v = a.forwardRef((e, t) => {
                let {
                    className: r,
                    orientation: a = "vertical",
                    ...i
                } = e;
                return (0, n.jsx)(f.gb, {
                    ref: t,
                    orientation: a,
                    style: {
                        backgroundColor: "#0e0e12"
                    },
                    className: (0, c.cn)("flex touch-none select-none transition-colors", "vertical" === a && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === a && "h-2.5 border-t border-t-transparent p-[1px]", r),
                    ...i,
                    children: (0, n.jsx)(f.q4, {
                        style: {
                            backgroundColor: "#32383D"
                        },
                        className: (0, c.cn)("bg-border relative rounded-full", "vertical" === a && "flex-1")
                    })
                })
            });
            v.displayName = f.gb.displayName;
            var y = r(37329),
                w = r.n(y);

            function j(e) {
                let {
                    trigger: t,
                    dropdownItems: r,
                    open: a,
                    className: i,
                    selectedValue: s,
                    dropdownHeader: d,
                    dropdownSearchPlaceholder: f,
                    dropdownFooter: v,
                    searchable: y = !0,
                    showDivider: j = !0,
                    scrollAreaCSS: N,
                    isDisabled: _ = !1,
                    onSelect: A,
                    onOpenChange: Z
                } = e;
                return (0, n.jsxs)(g.J2, {
                    open: a,
                    onOpenChange: () => {
                        _ || Z(!a)
                    },
                    children: [(0, n.jsx)(g.xo, {
                        asChild: !0,
                        children: t
                    }), (0, n.jsxs)(g.yk, {
                        align: "end",
                        className: (0, c.cn)("flex h-[345px] w-[272px] flex-col gap-3 rounded-lg border !border-gray-800 !bg-gray-900 p-4 data-[side=bottom]:animate-slideUpAndFade data-[side=top]:animate-slideDownAndFade", v && "pb-2", i),
                        children: [(0, n.jsx)(u, {
                            children: (0, n.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [d && (0, n.jsx)("div", {
                                    className: "text-sm font-medium leading-none text-gray-400",
                                    children: d
                                }), (0, n.jsxs)(l.Z, {
                                    className: "flex flex-col gap-3",
                                    children: [y && (0, n.jsx)("div", {
                                        className: w().search,
                                        children: (0, n.jsx)(m, {
                                            className: "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50",
                                            placeholder: f
                                        })
                                    }), (0, n.jsxs)(b, {
                                        className: N,
                                        children: [(0, n.jsx)(h, {
                                            className: "flex items-center justify-center",
                                            children: "Sorry, search not found :("
                                        }), (0, n.jsx)(p, {
                                            children: r.map(e => (0, n.jsx)(x, {
                                                disabled: e.disabled,
                                                className: (0, c.cn)("flex min-h-[40px] w-full select-none items-center px-2 text-sm font-medium leading-none text-white outline-none aria-disabled:cursor-not-allowed aria-disabled:opacity-20", {
                                                    "cursor-pointer data-[selected]:bg-gray-850": !o()(s, e.value),
                                                    "border-b-[1px] border-gray-500 last:border-0": !o()(s, e.value) && j,
                                                    "rounded-md bg-primary-50": !o()(s, e.value) && !j,
                                                    "rounded-md border border-primary-900 bg-primary-50 font-bold": o()(s, e.value)
                                                }),
                                                onSelect: () => A(e.value),
                                                children: e.label
                                            }, e.key))
                                        })]
                                    })]
                                })]
                            })
                        }), v]
                    })]
                })
            }
        },
        31590: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = r(57437),
                a = r(65730),
                i = r(28626),
                o = r.n(i);

            function l(e) {
                let {
                    horizontal: t = !0,
                    vertical: r,
                    height: i
                } = e;
                return (0, n.jsx)("div", {
                    style: {
                        height: null != i ? i : void 0
                    },
                    className: (0, a.cn)(o().divider, t && o().horizontal, r && o().vertical)
                })
            }
        },
        31049: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(57437),
                a = r(73828);

            function i(e) {
                let {
                    size: t,
                    strokeWidth: r
                } = e;
                return (0, n.jsx)(a.iT, {
                    color: "#999",
                    height: t,
                    secondaryColor: "#888",
                    strokeWidth: r || 4,
                    width: t
                })
            }
        },
        36680: function(e, t, r) {
            "use strict";
            r.d(t, {
                J2: function() {
                    return l
                },
                xo: function() {
                    return s
                },
                yk: function() {
                    return d
                }
            });
            var n = r(57437),
                a = r(2265),
                i = r(95700),
                o = r(65730);
            let l = i.fC,
                s = i.xz,
                d = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        align: a = "center",
                        sideOffset: l = 4,
                        ...s
                    } = e;
                    return (0, n.jsx)(i.h_, {
                        children: (0, n.jsx)(i.VY, {
                            ref: t,
                            align: a,
                            sideOffset: l,
                            className: (0, o.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", r),
                            ...s
                        })
                    })
                });
            d.displayName = i.VY.displayName
        },
        76858: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = r(57437),
                a = r(69484),
                i = r(65730);
            let o = (0, a.j)(["flex items-center justify-center whitespace-nowrap rounded-full border font-medium leading-none"], {
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
                l = [
                    ["Low Risk Grade", "Low Risk", "L"],
                    ["Medium Risk Grade", "Medium Risk", "M"],
                    ["High Risk Grade", "High Risk", "H"],
                    ["Not Borrowable", "None", "N"]
                ],
                s = ["low", "medium", "high"];

            function d(e) {
                var t, r, a;
                let {
                    level: d,
                    rounded: c,
                    colored: u,
                    className: m,
                    size: h
                } = e, p = "long" === h ? 0 : "icon" === h ? 2 : 1, x = null !== (r = null === (t = l[d]) || void 0 === t ? void 0 : t[p]) && void 0 !== r ? r : "", g = "short" === h ? null !== (a = null == x ? void 0 : x.split(" ")[0]) && void 0 !== a ? a : "" : x;
                return (0, n.jsx)("div", {
                    className: (0, i.cn)(o({
                        intent: u ? s[d] : "default",
                        size: h,
                        className: [c && "rounded-full", m]
                    })),
                    children: g
                })
            }
        },
        78670: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(57437),
                a = r(65730);

            function i(e) {
                let {
                    height: t,
                    rounded: r,
                    expand: i,
                    className: o
                } = e;
                return (0, n.jsx)("div", {
                    style: {
                        height: t
                    },
                    className: (0, a.cn)("animate-pulse rounded-[4px] bg-gray-700", i && "flex-1", r && "rounded-lg", o)
                })
            }
        },
        58275: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return m
                }
            });
            var n = r(57437);
            r(2265);
            var a = r(51116),
                i = r(8753),
                o = r(74432),
                l = r(73229),
                s = r(67309),
                d = r.n(s),
                c = r(20228),
                u = r(65730);

            function m(e) {
                var t;
                let {
                    columns: r,
                    data: s,
                    state: m,
                    borderless: h,
                    className: p,
                    hasHoverState: x = !1,
                    hasCustomRow: g = !1,
                    onSortingChange: f,
                    onExpandedChange: b
                } = e, v = (0, i.b7)({
                    data: s,
                    columns: r,
                    state: m,
                    defaultColumn: {
                        size: Number.MAX_SAFE_INTEGER,
                        maxSize: Number.MAX_SAFE_INTEGER,
                        enableSorting: !1,
                        cell: e => {
                            let {
                                getValue: t
                            } = e;
                            return (0, n.jsx)(c.Ac, {
                                children: t()
                            })
                        }
                    },
                    getCoreRowModel: (0, o.sC)(),
                    getExpandedRowModel: (0, o.rV)(),
                    getSubRows: e => e.subRows,
                    onSortingChange: f,
                    onExpandedChange: b
                });
                return (0, n.jsxs)("table", {
                    className: (0, u.cn)(d().table, h && d().borderless, "border-collapse", p),
                    children: [(0, n.jsx)("thead", {
                        children: v.getHeaderGroups().map(e => (0, n.jsx)("tr", {
                            children: e.headers.map((e, r) => (0, n.jsx)("th", {
                                style: {
                                    width: e.getSize() === Number.MAX_SAFE_INTEGER ? "auto" : e.getSize()
                                },
                                children: (0, n.jsx)("div", {
                                    className: "text-sm font-normal text-gray-400",
                                    children: e.isPlaceholder ? null : e.column.getCanSort() ? (0, n.jsx)("div", {
                                        className: e.column.getCanSort() ? "cursor-pointer" : "",
                                        onClick: e.column.getToggleSortingHandler(),
                                        children: (0, n.jsxs)(l.Z, {
                                            alignItems: "center",
                                            className: "gap-0.5 leading-tight",
                                            justifyContent: 0 === r ? "start" : "end",
                                            row: !0,
                                            children: [(0, i.ie)(e.column.columnDef.header, e.getContext()), (0, n.jsx)("div", {
                                                children: null !== (t = ({
                                                    asc: (0, n.jsx)(a.qwl, {}),
                                                    desc: (0, n.jsx)(a.dbR, {})
                                                })[e.column.getIsSorted()]) && void 0 !== t ? t : (0, n.jsx)(a.CFC, {})
                                            })]
                                        })
                                    }) : (0, i.ie)(e.column.columnDef.header, e.getContext())
                                })
                            }, e.id))
                        }, e.id))
                    }), (0, n.jsx)("tbody", {
                        children: v.getRowModel().rows.map((e, t) => {
                            var r, a, o, l, s;
                            let c = 1 === e.depth,
                                m = c && null !== (s = null == e ? void 0 : null === (a = e.getParentRow()) || void 0 === a ? void 0 : null === (r = a.subRows) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0,
                                h = c ? null === (l = e.getParentRow()) || void 0 === l ? void 0 : null === (o = l.subRows[m - 1]) || void 0 === o ? void 0 : o.index : 0;
                            return (0, n.jsx)("tr", {
                                className: (0, u.cn)(0 === e.depth && e.getIsExpanded() && d().expand, 1 === e.depth && e.parentId && d()["expand-child"], 1 === e.depth && h === e.index && d()["expand-last-child"], x && "hover:text-primary-900", 0 === t && g && d()["custom-row"]),
                                children: e.getVisibleCells().map(e => (0, n.jsx)("td", {
                                    children: (0, i.ie)(e.column.columnDef.cell, e.getContext())
                                }, e.id))
                            }, e.id)
                        })
                    })]
                })
            }
        },
        20228: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ac: function() {
                    return h
                },
                HB: function() {
                    return x
                },
                LY: function() {
                    return m
                },
                YA: function() {
                    return p
                },
                eN: function() {
                    return d
                },
                ip: function() {
                    return c
                },
                oD: function() {
                    return g
                },
                tt: function() {
                    return u
                }
            });
            var n = r(57437);
            r(2265);
            var a = r(63779),
                i = r(65730),
                o = r(79728),
                l = r.n(o);

            function s(e, t) {
                let {
                    className: r,
                    style: o,
                    centered: s,
                    color: d,
                    children: c,
                    black: u,
                    bold: m,
                    medium: h,
                    secondary: p,
                    ghost: x,
                    ...g
                } = t;
                return (0, n.jsx)("span", {
                    style: (0, a.Z)(d && {
                        color: d
                    }, o),
                    className: (0, i.cn)(e, s && l().alignCenter, u && l().black, m && l().bold, h && l().medium, p && l().secondary, x && l().ghost, r),
                    ...g,
                    children: c
                })
            }

            function d(e) {
                return s(l().headline2, e)
            }

            function c(e) {
                return s(l().title, e)
            }

            function u(e) {
                return s(l().subtitle, e)
            }

            function m(e) {
                return s(l().subtitle2, e)
            }

            function h(e) {
                return s(l().body, e)
            }

            function p(e) {
                return s(l().body2, e)
            }

            function x(e) {
                return s(l().caption, e)
            }

            function g(e) {
                return s(l().button, e)
            }
        },
        83509: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(57437),
                a = r(84844),
                i = r(65730);

            function o(e) {
                var t;
                let {
                    trigger: r,
                    content: o,
                    rootProps: l,
                    contentProps: s,
                    arrowProps: d
                } = e;
                return (0, n.jsx)(a.zt, {
                    delayDuration: 150,
                    children: (0, n.jsxs)(a.fC, { ...l,
                        children: [(0, n.jsx)(a.xz, {
                            asChild: !0,
                            children: (0, n.jsx)("div", {
                                className: "cursor-pointer",
                                children: r
                            })
                        }), (0, n.jsx)(a.h_, {
                            children: (0, n.jsxs)(a.VY, { ...s,
                                sideOffset: null !== (t = null == s ? void 0 : s.sideOffset) && void 0 !== t ? t : 5,
                                className: (0, i.cn)("z-[1000] select-none rounded-[10px] bg-gray-600 p-3 text-xs font-medium text-gray-40 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade", null == s ? void 0 : s.className),
                                children: [o, (0, n.jsx)(a.Eh, { ...d,
                                    className: (0, i.cn)("fill-gray-600", null == d ? void 0 : d.className)
                                })]
                            })
                        })]
                    })
                })
            }
        },
        89296: function(e, t, r) {
            "use strict";
            r.d(t, {
                F1: function() {
                    return n
                },
                r$: function() {
                    return i
                },
                yg: function() {
                    return a
                }
            });
            let n = "#00c805",
                a = "#FF5000",
                i = {
                    black: "#090909",
                    white: "#FFFFFF",
                    green: {
                        900: "#00C805",
                        800: "#00B404",
                        700: "#008C03",
                        600: "#006402",
                        500: "#1A2E22",
                        50: "#132319"
                    },
                    red: {
                        900: "#FF5000",
                        800: "#E54800",
                        700: "#B23800",
                        600: "#802800",
                        500: "#4C1800",
                        50: "#331000"
                    },
                    yellow: {
                        900: "#FFB345",
                        800: "#E5A13E",
                        700: "#B27D30",
                        600: "#805922",
                        500: "#4C3615",
                        50: "#33240E"
                    },
                    gray: {
                        900: "#0E0E12",
                        850: "#18191B",
                        800: "#26292D",
                        700: "#30363A",
                        600: "#32383D",
                        500: "#4D565A",
                        450: "#68757B",
                        400: "#919FA6",
                        300: "#B5C1C7",
                        200: "#D0D9DE",
                        100: "#E9F0F3",
                        80: "#F2F9FC",
                        60: "#FAFDFF",
                        40: "#F3F3F3"
                    },
                    error: {
                        red: "#FF1F00",
                        orange: "#FF7A00",
                        yellow: "#D8A800"
                    }
                }
        },
        63779: function(e, t, r) {
            "use strict";

            function n() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return Object.assign({}, ...t.filter(Boolean))
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        66358: function(e, t, r) {
            "use strict";

            function n(e) {
                let t = Array(e.length).fill(0),
                    r = Array(e.length).fill(0),
                    n = Array(e.length).fill(0);
                for (let a = e.length - 1; a >= 0; a--) {
                    let i = e[a];
                    r[a] = Number(i.totalDeposit);
                    let o = Number(i.interestRate) / 1e9 * Number(i.totalBorrow);
                    if (n[a] = o, i.cumulativeTotalDeposit > 0)
                        for (let n = e.length - 1; n >= a; n--) t[n] += Number(o) * Number(r[n]) / Number(i.cumulativeTotalDeposit)
                }
                let a = t.map((e, t) => r[t] > 0 ? e / Number(r[t]) : 0),
                    i = a.map((t, r) => ({
                        depositAPY: (1 + t / 365) ** 365 - 1,
                        borrowAPY: (1 + Number(e[r].interestRate) / 1e9 / 365) ** 365 - 1
                    }));
                return i
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        25427: function(e, t, r) {
            "use strict";
            r.d(t, {
                NO: function() {
                    return o
                },
                Rn: function() {
                    return f
                },
                UR: function() {
                    return v
                },
                a_: function() {
                    return w
                },
                kL: function() {
                    return s
                },
                mt: function() {
                    return x
                },
                r_: function() {
                    return y
                },
                zi: function() {
                    return i
                }
            });
            var n, a, i, o, l = r(68449);
            let s = l.z.custom(e => "string" == typeof e && /^0x[a-f0-9]{40}$/.test(e));
            l.z.custom(e => "string" == typeof e && /^0x[a-f0-9]{64}$/.test(e));
            let d = l.z.custom(e => "number" == typeof e && e >= 0 && e <= 2);
            (n = i || (i = {})).NONE = "none", n.CROSS = "cross", n.STABLECOIN = "stablecoin", n.ETH_CORRELATED = "eth-correlated", n.ISOLATED = "isolated";
            let c = l.z.nativeEnum(i),
                u = l.z.string();
            l.z.record(u, l.z.object({
                mode: c.nullable(),
                isolatedCollateralMarket: s,
                softThreshold: l.z.bigint()
            })), l.z.object({
                trancheIndex: l.z.number(),
                userDeposit: l.z.bigint(),
                userBorrow: l.z.bigint(),
                userDepositShare: l.z.bigint(),
                userBorrowShare: l.z.bigint()
            });
            let m = l.z.object({
                    depositAmount: l.z.bigint(),
                    borrowAmount: l.z.bigint(),
                    depositShare: l.z.bigint(),
                    borrowShare: l.z.bigint()
                }),
                h = l.z.object({
                    positionForTranche: l.z.record(d, m)
                }),
                p = l.z.object({
                    invalid: l.z.boolean().optional(),
                    invalidReason: l.z.string().optional(),
                    markets: l.z.record(s, h),
                    mode: c.nullable(),
                    trancheLevel: d.nullable(),
                    isolatedCollateral: s.nullable(),
                    enteredMarkets: l.z.array(s),
                    name: l.z.string().nullable()
                }),
                x = l.z.object({
                    subaccounts: l.z.record(u, p)
                }),
                g = l.z.object({
                    trancheIndex: l.z.bigint(),
                    totalDeposit: l.z.bigint(),
                    totalBorrow: l.z.bigint(),
                    totalDepositShare: l.z.bigint(),
                    totalBorrowShare: l.z.bigint(),
                    cumulativeTotalDeposit: l.z.bigint(),
                    cumulativeTotalBorrow: l.z.bigint(),
                    interestRate: l.z.bigint()
                }),
                f = l.z.object({
                    markets: l.z.record(s, l.z.array(g))
                }),
                b = l.z.object({
                    price: l.z.bigint(),
                    lastPrice: l.z.bigint(),
                    updatedAt: l.z.number()
                }),
                v = l.z.object({
                    oracles: l.z.record(s, b)
                }),
                y = "0x0000000000000000000000000000000000000000";
            (a = o || (o = {})).BAND = "Band", a.CHAINLINK = "Chainlink", a.CUSTOM = "Custom", l.z.object({
                stakingApr: l.z.number(),
                totalFundsLocked: l.z.number(),
                userRemainingLockingPeriod: l.z.number(),
                userStakedAmount: l.z.number(),
                userClaimableRewards: l.z.number(),
                userBetaRewardsPerMonth: l.z.number()
            });
            let w = l.z.custom(e => "number" == typeof e && (1 === e || 11155111 === e || 56 === e || 42161 === e))
        },
        12: function(e) {
            e.exports = {
                content: "Analytics_content__EM1G_",
                "icon-container": "Analytics_icon-container__4INkf"
            }
        },
        8625: function(e) {
            e.exports = {
                container: "Box_container__csh5r",
                column: "Box_column__rUfUn",
                row: "Box_row__bZwLD"
            }
        },
        37329: function(e) {
            e.exports = {
                search: "Combobox_search__du0N9"
            }
        },
        28626: function(e) {
            e.exports = {
                divider: "Divider_divider__amOyo",
                horizontal: "Divider_horizontal__8tGvV",
                vertical: "Divider_vertical__y28yz"
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
        96889: function(e, t, r) {
            var n = r(60455),
                a = r(54703);
            e.exports = function(e, t, r, i) {
                return null == e ? [] : (a(t) || (t = null == t ? [] : [t]), a(r = i ? void 0 : r) || (r = null == r ? [] : [r]), n(e, t, r))
            }
        }
    },
    function(e) {
        e.O(0, [8787, 7667, 1346, 177, 2794, 6551, 5958, 8367, 3032, 4595, 1582, 3190, 9887, 6964, 957, 1463, 7813, 5543, 1574, 5626, 4626, 1181, 9611, 3828, 1710, 3816, 35, 2971, 7864, 1744], function() {
            return e(e.s = 31720)
        }), _N_E = e.O()
    }
]);
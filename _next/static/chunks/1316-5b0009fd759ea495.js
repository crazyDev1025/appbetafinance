"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1316], {
        64362: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var a = n(2265),
                i = n(48756),
                u = n(50646),
                p = n(20426);

            function s() {
                var e;
                let {
                    address: t,
                    connector: n
                } = (0, i.mA)(), {
                    chain: s
                } = (0, i.LN)(), y = (0, a.useMemo)(() => t ? p.Z.uncheckedFrom(t) : null, [t]), r = (0, u.wX)(t => y && null !== (e = t.authTokens[y.value]) && void 0 !== e ? e : null);
                return y && s && n && r ? {
                    addressId: y,
                    walletType: n.name,
                    token: r,
                    chain: s
                } : null
            }
        },
        50646: function(e, t, n) {
            n.d(t, {
                H6: function() {
                    return y
                },
                Lf: function() {
                    return p
                },
                Tb: function() {
                    return s
                },
                wX: function() {
                    return u
                }
            });
            var a = n(94660);

            function i(e) {
                return "auth-token/".concat(e)
            }
            let u = (0, a.Ue)(() => ({
                authTokens: {}
            }));

            function p(e) {
                let {
                    authTokens: t
                } = u.getState(), n = null, a = t[e.value];
                if (a) n = a;
                else {
                    let t = localStorage.getItem(i(e));
                    t && (u.setState({
                        authTokens: { ...u.getState().authTokens,
                            [e.value]: t
                        }
                    }), n = t)
                }
                return n
            }

            function s(e, t) {
                localStorage.setItem(i(e), t), u.setState({
                    authTokens: { ...u.getState().authTokens,
                        [e.value]: t
                    }
                })
            }

            function y(e) {
                localStorage.removeItem(i(e));
                let {
                    [e.value]: t, ...n
                } = u.getState().authTokens;
                u.setState({
                    authTokens: n
                })
            }
        },
        11288: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = n(2265),
                i = n(64362);

            function u() {
                let e = (0, i.Z)(),
                    t = (0, a.useMemo)(() => !!(null == e ? void 0 : e.addressId), [null == e ? void 0 : e.addressId]);
                return t
            }
        },
        20426: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = n(15820);
            class i {
                static uncheckedFrom(e) {
                    return new i(e.slice(2))
                }
                static from(e) {
                    try {
                        return i.uncheckedFrom(e)
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
        37041: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });

            function a(e) {
                return e.replace(/0+$/, "").replace(/\.$/, "")
            }
        },
        61692: function(e, t, n) {
            var a = n(57437),
                i = n(2265),
                u = n(69484),
                p = n(75959),
                s = n(65730);
            let y = (0, u.j)(["flex items-center justify-center gap-1", "disabled:cursor-not-allowed", "outline-none"], {
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
                r = i.forwardRef((e, t) => {
                    let {
                        label: n,
                        danger: i,
                        icon: u,
                        iconRight: r,
                        intent: o,
                        size: d,
                        className: l,
                        onClick: m
                    } = e;
                    return (0, a.jsxs)("button", {
                        ref: t,
                        disabled: e.disabled,
                        type: "button",
                        className: (0, s.cn)(y({
                            intent: o,
                            size: d,
                            className: [i && (!o || "primary" === o) && "border-secondary-900 bg-secondary-900 hover:border-secondary-800 hover:bg-secondary-800 active:border-secondary-700 active:from-secondary-700 active:via-secondary-700 active:to-secondary-700", i && "secondary" === o && "border-secondary-900 text-secondary-900 hover:border-secondary-900 hover:bg-secondary-500 active:bg-secondary-50", l]
                        })),
                        onClick: m,
                        children: [u && (0, a.jsx)(p.Z, {
                            name: u,
                            size: 16
                        }), (0, a.jsx)("div", {
                            className: "leading-none",
                            children: n
                        }), r && (0, a.jsx)(p.Z, {
                            name: r,
                            size: 16
                        })]
                    })
                });
            r.displayName = "ButtonRounded", t.Z = r
        },
        19249: function(e, t, n) {
            n.d(t, {
                $N: function() {
                    return f
                },
                Be: function() {
                    return v
                },
                GG: function() {
                    return d
                },
                J5: function() {
                    return m
                },
                PK: function() {
                    return o
                },
                Vq: function() {
                    return y
                },
                cN: function() {
                    return b
                },
                cZ: function() {
                    return c
                },
                fK: function() {
                    return T
                },
                hg: function() {
                    return r
                },
                t9: function() {
                    return l
                }
            });
            var a = n(57437),
                i = n(2265),
                u = n(8804),
                p = n(63507),
                s = n(65730);
            let y = p.fC,
                r = p.xz,
                o = p.h_,
                d = p.x8,
                l = i.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...i
                    } = e;
                    return (0, a.jsx)(p.aV, {
                        ref: t,
                        className: (0, s.cn)("fixed inset-0 z-50 bg-[#000000]/50", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                        ...i
                    })
                });
            l.displayName = p.aV.displayName;
            let m = i.forwardRef((e, t) => {
                let {
                    className: n,
                    children: i,
                    showCloseIcon: y = !0,
                    onClose: r,
                    ...o
                } = e;
                return (0, a.jsxs)(p.VY, {
                    ref: t,
                    className: (0, s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border border-gray-700 bg-gray-850 p-6 shadow-lg outline-none sm:rounded-2xl md:w-full", "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", n),
                    ...o,
                    children: [i, y && (0, a.jsxs)(p.x8, {
                        className: "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",
                        children: [(0, a.jsx)(u.$iT, {
                            className: "h-4 w-4",
                            onClick: r
                        }), (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })]
                    })]
                })
            });
            m.displayName = p.VY.displayName;
            let c = i.forwardRef((e, t) => {
                let {
                    className: n,
                    children: i,
                    showCloseIcon: y = !0,
                    onClose: r,
                    ...d
                } = e;
                return (0, a.jsxs)(o, {
                    children: [(0, a.jsx)(l, {}), (0, a.jsxs)(p.VY, {
                        ref: t,
                        className: (0, s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border border-gray-700 bg-gray-850 p-6 shadow-lg outline-none sm:rounded-2xl md:w-full", "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", n),
                        ...d,
                        children: [i, y && (0, a.jsxs)(p.x8, {
                            className: "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",
                            children: [(0, a.jsx)(u.$iT, {
                                className: "h-4 w-4",
                                onClick: r
                            }), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            c.displayName = p.VY.displayName;
            let T = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("flex flex-col items-center gap-3 space-y-1.5 text-center sm:text-left", t),
                    ...n
                })
            };
            T.displayName = "DialogHeader";
            let b = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                    ...n
                })
            };
            b.displayName = "DialogFooter";
            let f = i.forwardRef((e, t) => {
                let {
                    className: n,
                    ...i
                } = e;
                return (0, a.jsx)(p.Dx, {
                    ref: t,
                    className: (0, s.cn)("text-xl font-bold leading-none tracking-tight text-gray-40", n),
                    ...i
                })
            });
            f.displayName = p.Dx.displayName;
            let v = i.forwardRef((e, t) => {
                let {
                    className: n,
                    ...i
                } = e;
                return (0, a.jsx)(p.dk, {
                    ref: t,
                    className: (0, s.cn)("text-sm font-normal leading-none text-gray-400", n),
                    ...i
                })
            });
            v.displayName = p.dk.displayName
        },
        26347: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = n(57437),
                i = n(19249);

            function u(e) {
                let {
                    open: t,
                    title: n,
                    showCloseIcon: u = !0,
                    contentProps: p,
                    children: s,
                    onClose: y
                } = e;
                return (0, a.jsx)(i.Vq, {
                    open: t,
                    children: (0, a.jsxs)(i.cZ, {
                        showCloseIcon: u,
                        onClose: y,
                        ...p,
                        children: [n && (0, a.jsx)(i.fK, {
                            children: n
                        }), s]
                    })
                })
            }
        },
        89296: function(e, t, n) {
            n.d(t, {
                F1: function() {
                    return a
                },
                r$: function() {
                    return u
                },
                yg: function() {
                    return i
                }
            });
            let a = "#00c805",
                i = "#FF5000",
                u = {
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
        18187: function(e, t, n) {
            n.d(t, {
                CY: function() {
                    return m
                },
                Cu: function() {
                    return T
                },
                Dj: function() {
                    return b
                },
                Hc: function() {
                    return y
                },
                IH: function() {
                    return o
                },
                Pl: function() {
                    return a
                },
                Sk: function() {
                    return d
                },
                cX: function() {
                    return p
                },
                em: function() {
                    return s
                },
                fs: function() {
                    return c
                },
                iX: function() {
                    return r
                },
                ml: function() {
                    return f
                },
                nw: function() {
                    return l
                },
                ol: function() {
                    return i
                },
                v0: function() {
                    return u
                }
            });
            let a = [{
                    stateMutability: "nonpayable",
                    type: "constructor",
                    inputs: [{
                        name: "_token",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_root",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_reward",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "_proof",
                        internalType: "bytes32[]",
                        type: "bytes32[]"
                    }],
                    name: "claim",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "claimed",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "deposit",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_token",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "extract",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "root",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "token",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "newOwner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_root",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "updateRoot",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "withdraw",
                    outputs: []
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Claim"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Deposit"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "previousOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "newOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "OwnershipTransferred"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "_root",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !1
                    }],
                    name: "UpdateRoot"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Withdraw"
                }],
                i = {
                    56: "0xE5ad445e1D03A0dfb2057916c29D53cd927686f9"
                },
                u = [{
                    stateMutability: "nonpayable",
                    type: "constructor",
                    inputs: [{
                        name: "_nativeToken",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_oftToken",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "convertFromOFT",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "convertToOFT",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_token",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_receiver",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "emergencyWithdraw",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "nativeToken",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "oftToken",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "newOwner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: []
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "sender",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "ConvertFromOFT"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "sender",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "ConvertToOFT"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "previousOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "newOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "OwnershipTransferred"
                }],
                p = {
                    56: "0x1a6Ab405349ED44274cb47D1297812dD7105306e"
                },
                s = [{
                    stateMutability: "nonpayable",
                    type: "constructor",
                    inputs: [{
                        name: "name_",
                        internalType: "string",
                        type: "string"
                    }, {
                        name: "symbol_",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "owner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "spender",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "value",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Approval"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "value",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Transfer"
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "owner",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "subtractedValue",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "decreaseAllowance",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "addedValue",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "increaseAllowance",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }],
                y = [{
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }],
                    name: "ClearedMarkets"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "market",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }],
                    name: "EnteredIsolatedMarket"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "markets",
                        internalType: "address[]",
                        type: "address[]",
                        indexed: !1
                    }],
                    name: "EnteredMarkets"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "modeId",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "EnteredMode"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "market",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }],
                    name: "ExitedMarket"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }],
                    name: "ExitedMode"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "version",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !1
                    }],
                    name: "Initialized"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "liquidator",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "targetAccount",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "liquidatorAccount",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !1
                    }, {
                        name: "liquidateMarket",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }, {
                        name: "collateralMarket",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Liquidated"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }],
                    name: "Paused"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !1
                    }],
                    name: "PausedTranche"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "market",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "RemovedMarketConfiguration"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "role",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "previousAdminRole",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "newAdminRole",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }],
                    name: "RoleAdminChanged"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "role",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "sender",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "RoleGranted"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "role",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "sender",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "RoleRevoked"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "market",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "marketConfig",
                        internalType: "struct IOmniPool.MarketConfiguration",
                        type: "tuple",
                        components: [{
                            name: "collateralFactor",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "borrowFactor",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "expirationTimestamp",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "riskTranche",
                            internalType: "uint8",
                            type: "uint8"
                        }, {
                            name: "isIsolatedCollateral",
                            internalType: "bool",
                            type: "bool"
                        }],
                        indexed: !1
                    }],
                    name: "SetMarketConfiguration"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "modeId",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !0
                    }, {
                        name: "modeConfig",
                        internalType: "struct IOmniPool.ModeConfiguration",
                        type: "tuple",
                        components: [{
                            name: "collateralFactor",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "borrowFactor",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "modeTranche",
                            internalType: "uint8",
                            type: "uint8"
                        }, {
                            name: "expirationTimestamp",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "markets",
                            internalType: "address[]",
                            type: "address[]"
                        }],
                        indexed: !1
                    }],
                    name: "SetModeConfiguration"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "market",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !1
                    }, {
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !1
                    }],
                    name: "SocializedLoss"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }],
                    name: "Unpaused"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [],
                    name: "UnpausedTranche"
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "DEFAULT_ADMIN_ROLE",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "FACTOR_PRECISION_SCALE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "HEALTH_FACTOR_SCALE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "LIQ_BONUS_PRECISION_SCALE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "MARKET_CONFIGURATOR_ROLE",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "MAX_BASE_SOFT_LIQUIDATION",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "MAX_LIQ_KINK",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "MAX_MARKETS_PER_ACCOUNT",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "PRICE_SCALE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "SELF_COLLATERALIZATION_FACTOR",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "SOFT_LIQUIDATION_ROLE",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "accountInfos",
                    outputs: [{
                        name: "modeId",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "isolatedCollateralMarket",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "softThreshold",
                        internalType: "uint32",
                        type: "uint32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "accountMarkets",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "borrow",
                    outputs: []
                }, {
                    stateMutability: "pure",
                    type: "function",
                    inputs: [{
                        name: "_depositAdjValue",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "_borrowAdjValue",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "_softThreshold",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "_account",
                        internalType: "struct IOmniPool.AccountInfo",
                        type: "tuple",
                        components: [{
                            name: "modeId",
                            internalType: "uint8",
                            type: "uint8"
                        }, {
                            name: "isolatedCollateralMarket",
                            internalType: "address",
                            type: "address"
                        }, {
                            name: "softThreshold",
                            internalType: "uint32",
                            type: "uint32"
                        }]
                    }],
                    name: "checkSoftLiquidation",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }],
                    name: "clearMarkets",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_isolatedMarket",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "enterIsolatedMarket",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_markets",
                        internalType: "address[]",
                        type: "address[]"
                    }],
                    name: "enterMarkets",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_modeId",
                        internalType: "uint8",
                        type: "uint8"
                    }],
                    name: "enterMode",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_accountId",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "evaluateAccount",
                    outputs: [{
                        name: "eval",
                        internalType: "struct IOmniPool.Evaluation",
                        type: "tuple",
                        components: [{
                            name: "depositTrueValue",
                            internalType: "uint256",
                            type: "uint256"
                        }, {
                            name: "borrowTrueValue",
                            internalType: "uint256",
                            type: "uint256"
                        }, {
                            name: "depositAdjValue",
                            internalType: "uint256",
                            type: "uint256"
                        }, {
                            name: "borrowAdjValue",
                            internalType: "uint256",
                            type: "uint256"
                        }, {
                            name: "numDeposit",
                            internalType: "uint64",
                            type: "uint64"
                        }, {
                            name: "numBorrow",
                            internalType: "uint64",
                            type: "uint64"
                        }, {
                            name: "isExpired",
                            internalType: "bool",
                            type: "bool"
                        }]
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "exitMarket",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }],
                    name: "exitMode",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "struct IOmniPool.AccountInfo",
                        type: "tuple",
                        components: [{
                            name: "modeId",
                            internalType: "uint8",
                            type: "uint8"
                        }, {
                            name: "isolatedCollateralMarket",
                            internalType: "address",
                            type: "address"
                        }, {
                            name: "softThreshold",
                            internalType: "uint32",
                            type: "uint32"
                        }]
                    }],
                    name: "getAccountBorrowTier",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_accountId",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_account",
                        internalType: "struct IOmniPool.AccountInfo",
                        type: "tuple",
                        components: [{
                            name: "modeId",
                            internalType: "uint8",
                            type: "uint8"
                        }, {
                            name: "isolatedCollateralMarket",
                            internalType: "address",
                            type: "address"
                        }, {
                            name: "softThreshold",
                            internalType: "uint32",
                            type: "uint32"
                        }]
                    }],
                    name: "getAccountPoolMarkets",
                    outputs: [{
                        name: "",
                        internalType: "address[]",
                        type: "address[]"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_depositAdjValue",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "_borrowAdjValue",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "_collateralMarket",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "getLiquidationBonusAndThreshold",
                    outputs: [{
                        name: "bonus",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "softThreshold",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "getRoleAdmin",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "grantRole",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "hasRole",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_oracle",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_reserveReceiver",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_admin",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "initialize",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_accountId",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "isAccountHealthy",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_params",
                        internalType: "struct IOmniPool.LiquidationParams",
                        type: "tuple",
                        components: [{
                            name: "targetAccountId",
                            internalType: "bytes32",
                            type: "bytes32"
                        }, {
                            name: "liquidatorAccountId",
                            internalType: "bytes32",
                            type: "bytes32"
                        }, {
                            name: "liquidateMarket",
                            internalType: "address",
                            type: "address"
                        }, {
                            name: "collateralMarket",
                            internalType: "address",
                            type: "address"
                        }, {
                            name: "amount",
                            internalType: "uint256",
                            type: "uint256"
                        }]
                    }],
                    name: "liquidate",
                    outputs: [{
                        name: "seizedShares",
                        internalType: "uint256[]",
                        type: "uint256[]"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "liquidationBonusConfigurations",
                    outputs: [{
                        name: "start",
                        internalType: "uint64",
                        type: "uint64"
                    }, {
                        name: "end",
                        internalType: "uint64",
                        type: "uint64"
                    }, {
                        name: "kink",
                        internalType: "uint64",
                        type: "uint64"
                    }, {
                        name: "expiredBonus",
                        internalType: "uint32",
                        type: "uint32"
                    }, {
                        name: "softThreshold",
                        internalType: "uint32",
                        type: "uint32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "marketConfigurations",
                    outputs: [{
                        name: "collateralFactor",
                        internalType: "uint32",
                        type: "uint32"
                    }, {
                        name: "borrowFactor",
                        internalType: "uint32",
                        type: "uint32"
                    }, {
                        name: "expirationTimestamp",
                        internalType: "uint32",
                        type: "uint32"
                    }, {
                        name: "riskTranche",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "isIsolatedCollateral",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "modeConfigurations",
                    outputs: [{
                        name: "collateralFactor",
                        internalType: "uint32",
                        type: "uint32"
                    }, {
                        name: "borrowFactor",
                        internalType: "uint32",
                        type: "uint32"
                    }, {
                        name: "modeTranche",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "expirationTimestamp",
                        internalType: "uint32",
                        type: "uint32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "modeCount",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "oracle",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "pause",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "pauseTranche",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "paused",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "removeMarketConfiguration",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "renounceRole",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "repay",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "reserveReceiver",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "resetPauseTranche",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "revokeRole",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_accountId",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_softThreshold",
                        internalType: "uint32",
                        type: "uint32"
                    }],
                    name: "setAccountSoftLiquidation",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_borrowCaps",
                        internalType: "uint256[]",
                        type: "uint256[]"
                    }],
                    name: "setBorrowCap",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_config",
                        internalType: "struct IOmniPool.LiquidationBonusConfiguration",
                        type: "tuple",
                        components: [{
                            name: "start",
                            internalType: "uint64",
                            type: "uint64"
                        }, {
                            name: "end",
                            internalType: "uint64",
                            type: "uint64"
                        }, {
                            name: "kink",
                            internalType: "uint64",
                            type: "uint64"
                        }, {
                            name: "expiredBonus",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "softThreshold",
                            internalType: "uint32",
                            type: "uint32"
                        }]
                    }],
                    name: "setLiquidationBonusConfiguration",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_marketConfig",
                        internalType: "struct IOmniPool.MarketConfiguration",
                        type: "tuple",
                        components: [{
                            name: "collateralFactor",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "borrowFactor",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "expirationTimestamp",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "riskTranche",
                            internalType: "uint8",
                            type: "uint8"
                        }, {
                            name: "isIsolatedCollateral",
                            internalType: "bool",
                            type: "bool"
                        }]
                    }],
                    name: "setMarketConfiguration",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_modeConfiguration",
                        internalType: "struct IOmniPool.ModeConfiguration",
                        type: "tuple",
                        components: [{
                            name: "collateralFactor",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "borrowFactor",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "modeTranche",
                            internalType: "uint8",
                            type: "uint8"
                        }, {
                            name: "expirationTimestamp",
                            internalType: "uint32",
                            type: "uint32"
                        }, {
                            name: "markets",
                            internalType: "address[]",
                            type: "address[]"
                        }]
                    }],
                    name: "setModeConfiguration",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_modeId",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "_expirationTimestamp",
                        internalType: "uint32",
                        type: "uint32"
                    }],
                    name: "setModeExpiration",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_noBorrowSupplyCap",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "setNoBorrowSupplyCap",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_reserveReceiver",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "setReserveReceiver",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_trancheCount",
                        internalType: "uint8",
                        type: "uint8"
                    }],
                    name: "setTrancheCount",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_market",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "socializeLoss",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "interfaceId",
                        internalType: "bytes4",
                        type: "bytes4"
                    }],
                    name: "supportsInterface",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "unpause",
                    outputs: []
                }],
                r = {
                    1: "0x1150d370C61cdd5d6F81c68783678382b447B07D",
                    56: "0x5F579336b1959a4a51782B61ce8E877fF6171A6C",
                    42161: "0xAcF4dC6043043324b84aFE77e00678607F9e70fF",
                    11155111: "0x676C15be94B36eF1B942CcD1eE7150da8F6e85F0"
                },
                o = [{
                    type: "event",
                    anonymous: !1,
                    inputs: [],
                    name: "Accrue"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "share",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Borrow"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "share",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Deposit"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "version",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !1
                    }],
                    name: "Initialized"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "payer",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "share",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Repay"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "seizedShares",
                        internalType: "uint256[]",
                        type: "uint256[]",
                        indexed: !1
                    }],
                    name: "Seize"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "borrowCaps",
                        internalType: "uint256[]",
                        type: "uint256[]",
                        indexed: !1
                    }],
                    name: "SetTrancheBorrowCaps"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "trancheCount",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !1
                    }],
                    name: "SetTrancheCount"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "share",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "SocializedLoss"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "from",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !0
                    }, {
                        name: "share",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Transfer"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "share",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Withdraw"
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "FEE_SCALE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "IRM_SCALE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "RESERVE_FEE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "accrue",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_owner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "borrow",
                    outputs: [{
                        name: "share",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "deposit",
                    outputs: [{
                        name: "share",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "fetchReserveReceiver",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_borrowTier",
                        internalType: "uint8",
                        type: "uint8"
                    }],
                    name: "getAccountBorrowInUnderlying",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "getAccountDepositInUnderlying",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }],
                    name: "getAccountSharesByTranche",
                    outputs: [{
                        name: "depositShare",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "borrowShare",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }],
                    name: "getBorrowCap",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_omniPool",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_underlying",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_irm",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_borrowCaps",
                        internalType: "uint256[]",
                        type: "uint256[]"
                    }],
                    name: "initialize",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "irm",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "lastAccrualTime",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "omniPool",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_payer",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "repay",
                    outputs: [{
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "reserveReceiver",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_to",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "seize",
                    outputs: [{
                        name: "",
                        internalType: "uint256[]",
                        type: "uint256[]"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_borrowCaps",
                        internalType: "uint256[]",
                        type: "uint256[]"
                    }],
                    name: "setTrancheBorrowCaps",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_trancheCount",
                        internalType: "uint8",
                        type: "uint8"
                    }],
                    name: "setTrancheCount",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }],
                    name: "socializeLoss",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "trancheBorrowCaps",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "trancheCount",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "tranches",
                    outputs: [{
                        name: "totalDepositAmount",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "totalBorrowAmount",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "totalDepositShare",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "totalBorrowShare",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_to",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "_shares",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "underlying",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "_share",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "withdraw",
                    outputs: [{
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }],
                d = [{
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Deposit"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "version",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !1
                    }],
                    name: "Initialized"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "seizeShares",
                        internalType: "uint256[]",
                        type: "uint256[]",
                        indexed: !1
                    }],
                    name: "Seize"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "supplyCap",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "SetSupplyCap"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "from",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Transfer"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Withdraw"
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_owner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "balanceOfAccount",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "deposit",
                    outputs: [{
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "getAccountDepositInUnderlying",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_omniPool",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_underlying",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "_supplyCap",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "initialize",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "omniPool",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_account",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_to",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "seize",
                    outputs: [{
                        name: "",
                        internalType: "uint256[]",
                        type: "uint256[]"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_supplyCap",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "setSupplyCap",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "supplyCap",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_to",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "underlying",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "withdraw",
                    outputs: [{
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }],
                l = [{
                    stateMutability: "nonpayable",
                    type: "constructor",
                    inputs: [{
                        name: "stakedToken",
                        internalType: "contract IERC20",
                        type: "address"
                    }, {
                        name: "rewardToken",
                        internalType: "contract IERC20",
                        type: "address"
                    }, {
                        name: "unstakeWindow",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "rewardsVault",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "emissionManager",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "distributionDuration",
                        internalType: "uint128",
                        type: "uint128"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "CLAIM_HELPER_ROLE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "COOLDOWN_ADMIN_ROLE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "COOLDOWN_SECONDS",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "DISTRIBUTION_END",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "DOMAIN_SEPARATOR",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "EMISSION_MANAGER",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "EXCHANGE_RATE_UNIT",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "INITIAL_EXCHANGE_RATE",
                    outputs: [{
                        name: "",
                        internalType: "uint216",
                        type: "uint216"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "LOWER_BOUND",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "PERMIT_TYPEHASH",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "PRECISION",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "REWARDS_VAULT",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "REWARD_TOKEN",
                    outputs: [{
                        name: "",
                        internalType: "contract IERC20",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "SLASH_ADMIN_ROLE",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "STAKED_TOKEN",
                    outputs: [{
                        name: "",
                        internalType: "contract IERC20",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "UNSTAKE_WINDOW",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "_nonces",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "owner",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "assets",
                    outputs: [{
                        name: "emissionPerSecond",
                        internalType: "uint128",
                        type: "uint128"
                    }, {
                        name: "lastUpdateTimestamp",
                        internalType: "uint128",
                        type: "uint128"
                    }, {
                        name: "index",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "claimRewards",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "claimAmount",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "redeemAmount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "claimRewardsAndRedeem",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "claimAmount",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "redeemAmount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "claimRewardsAndRedeemOnBehalf",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "claimRewardsAndStake",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "claimRewardsAndStakeOnBehalf",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "claimRewardsOnBehalf",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "claimRoleAdmin",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "assetsConfigInput",
                        internalType: "struct DistributionTypes.AssetConfigInput[]",
                        type: "tuple[]",
                        components: [{
                            name: "emissionPerSecond",
                            internalType: "uint128",
                            type: "uint128"
                        }, {
                            name: "totalStaked",
                            internalType: "uint256",
                            type: "uint256"
                        }, {
                            name: "underlyingAsset",
                            internalType: "address",
                            type: "address"
                        }]
                    }],
                    name: "configureAssets",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "cooldown",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "cooldownOnBehalfOf",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "subtractedValue",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "decreaseAllowance",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "getAdmin",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "getCooldownSeconds",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "getExchangeRate",
                    outputs: [{
                        name: "",
                        internalType: "uint216",
                        type: "uint216"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "index",
                        internalType: "uint32",
                        type: "uint32"
                    }],
                    name: "getExchangeRateSnapshot",
                    outputs: [{
                        name: "",
                        internalType: "struct IStakedBeta.ExchangeRateSnapshot",
                        type: "tuple",
                        components: [{
                            name: "blockNumber",
                            internalType: "uint40",
                            type: "uint40"
                        }, {
                            name: "value",
                            internalType: "uint216",
                            type: "uint216"
                        }]
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "getExchangeRateSnapshotsCount",
                    outputs: [{
                        name: "",
                        internalType: "uint32",
                        type: "uint32"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "getMaxSlashablePercentage",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "getPendingAdmin",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "staker",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "getTotalRewardsBalance",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "user",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "asset",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "getUserAssetData",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "inPostSlashingPeriod",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "addedValue",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "increaseAllowance",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "slashingAdmin",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "cooldownPauseAdmin",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "claimHelper",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "maxSlashablePercentage",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "cooldownSeconds",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "initialize",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "owner",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "spender",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "value",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "deadline",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "v",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "r",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "s",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "permit",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "shares",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "previewRedeem",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "assets",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "previewStake",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "redeem",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "redeemOnBehalf",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "returnFunds",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "cooldownSeconds",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "setCooldownSeconds",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "percentage",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "setMaxSlashablePercentage",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "role",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "newPendingAdmin",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "setPendingAdmin",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "settleSlashing",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "destination",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "slash",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "stake",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "deadline",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "v",
                        internalType: "uint8",
                        type: "uint8"
                    }, {
                        name: "r",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "s",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    name: "stakeWithPermit",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "stakerRewardsToClaim",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "stakersCooldowns",
                    outputs: [{
                        name: "timestamp",
                        internalType: "uint40",
                        type: "uint40"
                    }, {
                        name: "amount",
                        internalType: "uint216",
                        type: "uint216"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "owner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "spender",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "value",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Approval"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "asset",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "emission",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "AssetConfigUpdated"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "asset",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "index",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "AssetIndexUpdated"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "user",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Cooldown"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "cooldownSeconds",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "CooldownSecondsChanged"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "exchangeRate",
                        internalType: "uint216",
                        type: "uint216",
                        indexed: !1
                    }],
                    name: "ExchangeRateChanged"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "FundsReturned"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "newDebtToken",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "GHODebtTokenChanged"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "version",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !1
                    }],
                    name: "Initialized"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "newPercentage",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "MaxSlashablePercentageChanged"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "newPendingAdmin",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "role",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "PendingAdminChanged"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "assets",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "shares",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Redeem"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "user",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "RewardsAccrued"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "RewardsClaimed"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "newAdmin",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "role",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "RoleClaimed"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "destination",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Slashed"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "windowSeconds",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "SlashingExitWindowDurationChanged"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [],
                    name: "SlashingSettled"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "assets",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "shares",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Staked"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "value",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Transfer"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "user",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "asset",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "index",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "UserIndexUpdated"
                }],
                m = {
                    56: "0x9489f9ea29a9e832778Fe8c6Cb77723522dc260d"
                },
                c = [{
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "src",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "guy",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "wad",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Approval"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "dst",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "wad",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Deposit"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "src",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "dst",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "wad",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Transfer"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "src",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "wad",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Withdrawal"
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "guy",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "wad",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        internalType: "uint8",
                        type: "uint8"
                    }]
                }, {
                    stateMutability: "payable",
                    type: "function",
                    inputs: [],
                    name: "deposit",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        internalType: "string",
                        type: "string"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "dst",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "wad",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "src",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "dst",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "wad",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "wad",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "withdraw",
                    outputs: []
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }],
                T = {
                    1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    42161: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
                    11155111: "0x0B0c1A5E07beC08f301327807e9f227777549Ee3"
                },
                b = [{
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "account",
                        internalType: "bytes32",
                        type: "bytes32",
                        indexed: !0
                    }, {
                        name: "trancheId",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !0
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "share",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Deposit"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "version",
                        internalType: "uint8",
                        type: "uint8",
                        indexed: !1
                    }],
                    name: "Initialized"
                }, {
                    stateMutability: "payable",
                    type: "function",
                    inputs: [{
                        name: "_subId",
                        internalType: "uint96",
                        type: "uint96"
                    }, {
                        name: "_trancheId",
                        internalType: "uint8",
                        type: "uint8"
                    }],
                    name: "deposit",
                    outputs: [{
                        name: "share",
                        internalType: "uint256",
                        type: "uint256"
                    }]
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "_oweth",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "initialize",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "oweth",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "weth",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }]
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }],
                f = {
                    1: "0x4E5b673EE671f66996855964Ca852eC863a72d91",
                    56: "0x79485BD5a1DaFb23C4de5B56bCC75629a4de8690",
                    42161: "0x0b2E7F1eBe0839708418d0bdD0Ee40c1630d34b0",
                    11155111: "0xe2e111464A7c81919b7EC44132F91d35bea6301C"
                }
        },
        25427: function(e, t, n) {
            n.d(t, {
                NO: function() {
                    return p
                },
                Rn: function() {
                    return f
                },
                UR: function() {
                    return w
                },
                a_: function() {
                    return x
                },
                kL: function() {
                    return y
                },
                mt: function() {
                    return T
                },
                r_: function() {
                    return M
                },
                zi: function() {
                    return u
                }
            });
            var a, i, u, p, s = n(68449);
            let y = s.z.custom(e => "string" == typeof e && /^0x[a-f0-9]{40}$/.test(e));
            s.z.custom(e => "string" == typeof e && /^0x[a-f0-9]{64}$/.test(e));
            let r = s.z.custom(e => "number" == typeof e && e >= 0 && e <= 2);
            (a = u || (u = {})).NONE = "none", a.CROSS = "cross", a.STABLECOIN = "stablecoin", a.ETH_CORRELATED = "eth-correlated", a.ISOLATED = "isolated";
            let o = s.z.nativeEnum(u),
                d = s.z.string();
            s.z.record(d, s.z.object({
                mode: o.nullable(),
                isolatedCollateralMarket: y,
                softThreshold: s.z.bigint()
            })), s.z.object({
                trancheIndex: s.z.number(),
                userDeposit: s.z.bigint(),
                userBorrow: s.z.bigint(),
                userDepositShare: s.z.bigint(),
                userBorrowShare: s.z.bigint()
            });
            let l = s.z.object({
                    depositAmount: s.z.bigint(),
                    borrowAmount: s.z.bigint(),
                    depositShare: s.z.bigint(),
                    borrowShare: s.z.bigint()
                }),
                m = s.z.object({
                    positionForTranche: s.z.record(r, l)
                }),
                c = s.z.object({
                    invalid: s.z.boolean().optional(),
                    invalidReason: s.z.string().optional(),
                    markets: s.z.record(y, m),
                    mode: o.nullable(),
                    trancheLevel: r.nullable(),
                    isolatedCollateral: y.nullable(),
                    enteredMarkets: s.z.array(y),
                    name: s.z.string().nullable()
                }),
                T = s.z.object({
                    subaccounts: s.z.record(d, c)
                }),
                b = s.z.object({
                    trancheIndex: s.z.bigint(),
                    totalDeposit: s.z.bigint(),
                    totalBorrow: s.z.bigint(),
                    totalDepositShare: s.z.bigint(),
                    totalBorrowShare: s.z.bigint(),
                    cumulativeTotalDeposit: s.z.bigint(),
                    cumulativeTotalBorrow: s.z.bigint(),
                    interestRate: s.z.bigint()
                }),
                f = s.z.object({
                    markets: s.z.record(y, s.z.array(b))
                }),
                v = s.z.object({
                    price: s.z.bigint(),
                    lastPrice: s.z.bigint(),
                    updatedAt: s.z.number()
                }),
                w = s.z.object({
                    oracles: s.z.record(y, v)
                }),
                M = "0x0000000000000000000000000000000000000000";
            (i = p || (p = {})).BAND = "Band", i.CHAINLINK = "Chainlink", i.CUSTOM = "Custom", s.z.object({
                stakingApr: s.z.number(),
                totalFundsLocked: s.z.number(),
                userRemainingLockingPeriod: s.z.number(),
                userStakedAmount: s.z.number(),
                userClaimableRewards: s.z.number(),
                userBetaRewardsPerMonth: s.z.number()
            });
            let x = s.z.custom(e => "number" == typeof e && (1 === e || 11155111 === e || 56 === e || 42161 === e))
        }
    }
]);
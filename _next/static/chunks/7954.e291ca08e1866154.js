"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7954], {
        17954: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return f
                }
            });
            var r = t(57437),
                i = t(2265),
                A = function(e) {
                    (0, i.useEffect)(e, [])
                },
                c = function(e) {
                    var n = (0, i.useRef)(e);
                    n.current = e, A(function() {
                        return function() {
                            return n.current()
                        }
                    })
                },
                a = function(e) {
                    var n = (0, i.useRef)(0),
                        t = (0, i.useState)(e),
                        r = t[0],
                        A = t[1],
                        a = (0, i.useCallback)(function(e) {
                            cancelAnimationFrame(n.current), n.current = requestAnimationFrame(function() {
                                A(e)
                            })
                        }, []);
                    return c(function() {
                        cancelAnimationFrame(n.current)
                    }), [r, a]
                },
                o = "undefined" != typeof window,
                s = function(e, n) {
                    void 0 === e && (e = 1 / 0), void 0 === n && (n = 1 / 0);
                    var t = a({
                            width: o ? window.innerWidth : e,
                            height: o ? window.innerHeight : n
                        }),
                        r = t[0],
                        A = t[1];
                    return (0, i.useEffect)(function() {
                        if (o) {
                            var e = function() {
                                A({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                })
                            };
                            return function(e) {
                                    for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                                    e && e.addEventListener && e.addEventListener.apply(e, n)
                                }(window, "resize", e),
                                function() {
                                    ! function(e) {
                                        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                                        e && e.removeEventListener && e.removeEventListener.apply(e, n)
                                    }(window, "resize", e)
                                }
                        }
                    }, []), r
                },
                u = t(16691),
                d = t.n(u),
                l = {
                    src: "/_next/static/media/bibi.38f4164c.png",
                    height: 565,
                    width: 588,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXEDkgcDuAcAvgIAgQMhSygDbggD1wgBjgIA9AQTXBgAoQMEhggRdRYAsQEArAMBrAUCjwQA5AUAfwAAqwQB6QYhLygArQMgDCUCyQcMnxIA3wUC5Agg8hrQAAAAGXRSTlMAvfj2H/0s/kb+soOf/mdTwHXyAtb9/qa+DVSutAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwFwQcCgCAMALEDgVKmW1H//04TCLH3AGDGag3grIhYB9erqiNDVnkOWRLt82eVfSaK93UqDlq6S2T7AU3iAm2uqJvUAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                };

            function f(e) {
                let {
                    children: n
                } = e, {
                    width: t
                } = s();
                return t < 1e3 ? (0, r.jsx)("div", {
                    className: "flex h-screen w-full items-center justify-center bg-[url('/background-leaderboard.png')] bg-cover bg-fixed bg-no-repeat",
                    children: (0, r.jsxs)("div", {
                        className: "flex h-screen max-h-[274px] w-full max-w-[460px] flex-col items-center justify-center gap-6 rounded-[20px] border-[0.5px] border-solid border-gray-700 bg-gray-850 p-6 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]",
                        children: [(0, r.jsx)(d(), {
                            alt: "screen-unsupport-icon",
                            height: 124,
                            src: l,
                            width: 120
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [(0, r.jsx)("div", {
                                className: "text-center text-xl font-bold text-gray-40",
                                children: "Sorry, screen size is not supported"
                            }), (0, r.jsx)("div", {
                                className: "text-center text-sm font-normal text-gray-400",
                                children: "For the best experience, please use your laptop or desktop."
                            })]
                        })]
                    })
                }) : n
            }
        }
    }
]);
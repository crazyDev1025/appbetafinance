(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1212], {
        28673: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(3695);
            let i = r(38790);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(64079), t.jQ = 64, t.KS = 64, t.aP = 32;
            let s = new Uint8Array(32);
            s[0] = 9;
            let o = n(),
                a = n([1]),
                c = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                u = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                l = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function h(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function p(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function f(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function d(e, t) {
                let r = n(),
                    i = n();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                p(i), p(i), p(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, f(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function y(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function v(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    _ = 0,
                    w = 0,
                    b = 0,
                    E = 0,
                    I = 0,
                    S = 0,
                    P = 0,
                    O = 0,
                    R = 0,
                    N = 0,
                    T = 0,
                    C = 0,
                    A = 0,
                    x = 0,
                    D = 0,
                    U = 0,
                    j = 0,
                    L = r[0],
                    q = r[1],
                    M = r[2],
                    z = r[3],
                    k = r[4],
                    $ = r[5],
                    H = r[6],
                    V = r[7],
                    K = r[8],
                    B = r[9],
                    F = r[10],
                    W = r[11],
                    G = r[12],
                    J = r[13],
                    Q = r[14],
                    Y = r[15];
                s += (i = t[0]) * L, o += i * q, a += i * M, c += i * z, u += i * k, l += i * $, h += i * H, p += i * V, f += i * K, d += i * B, g += i * F, y += i * W, v += i * G, m += i * J, _ += i * Q, w += i * Y, o += (i = t[1]) * L, a += i * q, c += i * M, u += i * z, l += i * k, h += i * $, p += i * H, f += i * V, d += i * K, g += i * B, y += i * F, v += i * W, m += i * G, _ += i * J, w += i * Q, b += i * Y, a += (i = t[2]) * L, c += i * q, u += i * M, l += i * z, h += i * k, p += i * $, f += i * H, d += i * V, g += i * K, y += i * B, v += i * F, m += i * W, _ += i * G, w += i * J, b += i * Q, E += i * Y, c += (i = t[3]) * L, u += i * q, l += i * M, h += i * z, p += i * k, f += i * $, d += i * H, g += i * V, y += i * K, v += i * B, m += i * F, _ += i * W, w += i * G, b += i * J, E += i * Q, I += i * Y, u += (i = t[4]) * L, l += i * q, h += i * M, p += i * z, f += i * k, d += i * $, g += i * H, y += i * V, v += i * K, m += i * B, _ += i * F, w += i * W, b += i * G, E += i * J, I += i * Q, S += i * Y, l += (i = t[5]) * L, h += i * q, p += i * M, f += i * z, d += i * k, g += i * $, y += i * H, v += i * V, m += i * K, _ += i * B, w += i * F, b += i * W, E += i * G, I += i * J, S += i * Q, P += i * Y, h += (i = t[6]) * L, p += i * q, f += i * M, d += i * z, g += i * k, y += i * $, v += i * H, m += i * V, _ += i * K, w += i * B, b += i * F, E += i * W, I += i * G, S += i * J, P += i * Q, O += i * Y, p += (i = t[7]) * L, f += i * q, d += i * M, g += i * z, y += i * k, v += i * $, m += i * H, _ += i * V, w += i * K, b += i * B, E += i * F, I += i * W, S += i * G, P += i * J, O += i * Q, R += i * Y, f += (i = t[8]) * L, d += i * q, g += i * M, y += i * z, v += i * k, m += i * $, _ += i * H, w += i * V, b += i * K, E += i * B, I += i * F, S += i * W, P += i * G, O += i * J, R += i * Q, N += i * Y, d += (i = t[9]) * L, g += i * q, y += i * M, v += i * z, m += i * k, _ += i * $, w += i * H, b += i * V, E += i * K, I += i * B, S += i * F, P += i * W, O += i * G, R += i * J, N += i * Q, T += i * Y, g += (i = t[10]) * L, y += i * q, v += i * M, m += i * z, _ += i * k, w += i * $, b += i * H, E += i * V, I += i * K, S += i * B, P += i * F, O += i * W, R += i * G, N += i * J, T += i * Q, C += i * Y, y += (i = t[11]) * L, v += i * q, m += i * M, _ += i * z, w += i * k, b += i * $, E += i * H, I += i * V, S += i * K, P += i * B, O += i * F, R += i * W, N += i * G, T += i * J, C += i * Q, A += i * Y, v += (i = t[12]) * L, m += i * q, _ += i * M, w += i * z, b += i * k, E += i * $, I += i * H, S += i * V, P += i * K, O += i * B, R += i * F, N += i * W, T += i * G, C += i * J, A += i * Q, x += i * Y, m += (i = t[13]) * L, _ += i * q, w += i * M, b += i * z, E += i * k, I += i * $, S += i * H, P += i * V, O += i * K, R += i * B, N += i * F, T += i * W, C += i * G, A += i * J, x += i * Q, D += i * Y, _ += (i = t[14]) * L, w += i * q, b += i * M, E += i * z, I += i * k, S += i * $, P += i * H, O += i * V, R += i * K, N += i * B, T += i * F, C += i * W, A += i * G, x += i * J, D += i * Q, U += i * Y, w += (i = t[15]) * L, b += i * q, E += i * M, I += i * z, S += i * k, P += i * $, O += i * H, R += i * V, N += i * K, T += i * B, C += i * F, A += i * W, x += i * G, D += i * J, U += i * Q, j += i * Y, s += 38 * b, o += 38 * E, a += 38 * I, c += 38 * S, u += 38 * P, l += 38 * O, h += 38 * R, p += 38 * N, f += 38 * T, d += 38 * C, g += 38 * A, y += 38 * x, v += 38 * D, m += 38 * U, _ += 38 * j, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = _, e[15] = w
            }

            function m(e, t) {
                let r = n(),
                    i = n(),
                    s = n(),
                    o = n(),
                    a = n(),
                    u = n(),
                    l = n(),
                    h = n(),
                    p = n();
                y(r, e[1], e[0]), y(p, t[1], t[0]), v(r, r, p), g(i, e[0], e[1]), g(p, t[0], t[1]), v(i, i, p), v(s, e[3], t[3]), v(s, s, c), v(o, e[2], t[2]), g(o, o, o), y(a, i, r), y(u, o, s), g(l, o, s), g(h, i, r), v(e[0], a, u), v(e[1], h, l), v(e[2], l, u), v(e[3], a, h)
            }

            function _(e, t, r) {
                for (let i = 0; i < 4; i++) f(e[i], t[i], r)
            }

            function w(e, t) {
                let r = n(),
                    i = n(),
                    s = n();
                (function(e, t) {
                    let r;
                    let i = n();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) v(i, i, i), 2 !== r && 4 !== r && v(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(s, t[2]), v(r, t[0], s), v(i, t[1], s), d(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return d(t, e), 1 & t[0]
                }(r) << 7
            }

            function b(e, t) {
                let r = [n(), n(), n(), n()];
                h(r[0], u), h(r[1], l), h(r[2], a), v(r[3], u, l),
                    function(e, t, r) {
                        h(e[0], o), h(e[1], a), h(e[2], a), h(e[3], o);
                        for (let i = 255; i >= 0; --i) {
                            let n = r[i / 8 | 0] >> (7 & i) & 1;
                            _(e, t, n), m(t, e), m(e, e), _(e, t, n)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [n(), n(), n(), n()];
                b(o, r), w(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let E = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function I(e, t) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * E[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                    t[n] += r, t[i] = 0
                }
                for (n = 0, r = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * E[n], r = t[n] >> 8, t[n] &= 255;
                for (n = 0; n < 32; n++) t[n] -= r * E[n];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function S(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                I(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [n(), n(), n(), n()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let u = c.digest();
                c.clean(), S(u), b(s, u), w(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let l = c.digest();
                S(l);
                for (let e = 0; e < 32; e++) r[e] = u[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
                return I(a.subarray(32), r), a
            }
        },
        38790: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(55521),
                n = r(64079);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, n, s, a, c) {
                for (var u, l, h, p, f, d, g, y, v = r[0], m = r[1], _ = r[2], w = r[3], b = r[4], E = r[5], I = r[6], S = r[7], P = n[0], O = n[1], R = n[2], N = n[3], T = n[4], C = n[5], A = n[6], x = n[7]; c >= 128;) {
                    for (var D = 0; D < 16; D++) {
                        var U = 8 * D + a;
                        e[D] = i.readUint32BE(s, U), t[D] = i.readUint32BE(s, U + 4)
                    }
                    for (var D = 0; D < 80; D++) {
                        var j = v,
                            L = m,
                            q = _,
                            M = w,
                            z = b,
                            k = E,
                            $ = I,
                            H = S,
                            V = P,
                            K = O,
                            B = R,
                            F = N,
                            W = T,
                            G = C,
                            J = A,
                            Q = x;
                        if (u = S, f = 65535 & (l = x), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (b >>> 14 | T << 18) ^ (b >>> 18 | T << 14) ^ (T >>> 9 | b << 23), f += 65535 & (l = (T >>> 14 | b << 18) ^ (T >>> 18 | b << 14) ^ (b >>> 9 | T << 23)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = b & E ^ ~b & I, f += 65535 & (l = T & C ^ ~T & A), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = o[2 * D], f += 65535 & (l = o[2 * D + 1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = e[D % 16], f += 65535 & (l = t[D % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, h = 65535 & g | y << 16, p = 65535 & f | d << 16, u = h, f = 65535 & (l = p), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (v >>> 28 | P << 4) ^ (P >>> 2 | v << 30) ^ (P >>> 7 | v << 25), f += 65535 & (l = (P >>> 28 | v << 4) ^ (v >>> 2 | P << 30) ^ (v >>> 7 | P << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = v & m ^ v & _ ^ m & _, f += 65535 & (l = P & O ^ P & R ^ O & R), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, H = 65535 & g | y << 16, Q = 65535 & f | d << 16, u = M, f = 65535 & (l = F), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = h, f += 65535 & (l = p), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, M = 65535 & g | y << 16, F = 65535 & f | d << 16, m = j, _ = L, w = q, b = M, E = z, I = k, S = $, v = H, O = V, R = K, N = B, T = F, C = W, A = G, x = J, P = Q, D % 16 == 15)
                            for (var U = 0; U < 16; U++) u = e[U], f = 65535 & (l = t[U]), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = e[(U + 9) % 16], f += 65535 & (l = t[(U + 9) % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(U + 1) % 16]) >>> 1 | (p = t[(U + 1) % 16]) << 31) ^ (h >>> 8 | p << 24) ^ h >>> 7, f += 65535 & (l = (p >>> 1 | h << 31) ^ (p >>> 8 | h << 24) ^ (p >>> 7 | h << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(U + 14) % 16]) >>> 19 | (p = t[(U + 14) % 16]) << 13) ^ (p >>> 29 | h << 3) ^ h >>> 6, f += 65535 & (l = (p >>> 19 | h << 13) ^ (h >>> 29 | p << 3) ^ (p >>> 6 | h << 26)), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, e[U] = 65535 & g | y << 16, t[U] = 65535 & f | d << 16
                    }
                    u = v, f = 65535 & (l = P), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[0], f += 65535 & (l = n[0]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = P = 65535 & f | d << 16, u = m, f = 65535 & (l = O), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[1], f += 65535 & (l = n[1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[1] = m = 65535 & g | y << 16, n[1] = O = 65535 & f | d << 16, u = _, f = 65535 & (l = R), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[2], f += 65535 & (l = n[2]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[2] = _ = 65535 & g | y << 16, n[2] = R = 65535 & f | d << 16, u = w, f = 65535 & (l = N), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[3], f += 65535 & (l = n[3]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[3] = w = 65535 & g | y << 16, n[3] = N = 65535 & f | d << 16, u = b, f = 65535 & (l = T), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[4], f += 65535 & (l = n[4]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[4] = b = 65535 & g | y << 16, n[4] = T = 65535 & f | d << 16, u = E, f = 65535 & (l = C), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[5], f += 65535 & (l = n[5]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[5] = E = 65535 & g | y << 16, n[5] = C = 65535 & f | d << 16, u = I, f = 65535 & (l = A), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[6], f += 65535 & (l = n[6]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[6] = I = 65535 & g | y << 16, n[6] = A = 65535 & f | d << 16, u = S, f = 65535 & (l = x), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[7], f += 65535 & (l = n[7]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[7] = S = 65535 & g | y << 16, n[7] = x = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        71212: function(e, t, r) {
            "use strict";
            let i;
            r.d(t, {
                EthereumProvider: function() {
                    return sh
                }
            });
            var n = r(88292),
                s = r.n(n),
                o = r(22100),
                a = r(98389),
                c = r(3695),
                u = r(63321),
                l = r(94194),
                h = r(59575),
                p = r(28803),
                f = r(31079),
                d = r(53385),
                g = r(72111),
                y = r(18808);
            r(68571), Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let v = {
                INVALID_METHOD: {
                    message: "Invalid method.",
                    code: 1001
                },
                INVALID_EVENT: {
                    message: "Invalid event.",
                    code: 1002
                },
                INVALID_UPDATE_REQUEST: {
                    message: "Invalid update request.",
                    code: 1003
                },
                INVALID_EXTEND_REQUEST: {
                    message: "Invalid extend request.",
                    code: 1004
                },
                INVALID_SESSION_SETTLE_REQUEST: {
                    message: "Invalid session settle request.",
                    code: 1005
                },
                UNAUTHORIZED_METHOD: {
                    message: "Unauthorized method.",
                    code: 3001
                },
                UNAUTHORIZED_EVENT: {
                    message: "Unauthorized event.",
                    code: 3002
                },
                UNAUTHORIZED_UPDATE_REQUEST: {
                    message: "Unauthorized update request.",
                    code: 3003
                },
                UNAUTHORIZED_EXTEND_REQUEST: {
                    message: "Unauthorized extend request.",
                    code: 3004
                },
                USER_REJECTED: {
                    message: "User rejected.",
                    code: 5e3
                },
                USER_REJECTED_CHAINS: {
                    message: "User rejected chains.",
                    code: 5001
                },
                USER_REJECTED_METHODS: {
                    message: "User rejected methods.",
                    code: 5002
                },
                USER_REJECTED_EVENTS: {
                    message: "User rejected events.",
                    code: 5003
                },
                UNSUPPORTED_CHAINS: {
                    message: "Unsupported chains.",
                    code: 5100
                },
                UNSUPPORTED_METHODS: {
                    message: "Unsupported methods.",
                    code: 5101
                },
                UNSUPPORTED_EVENTS: {
                    message: "Unsupported events.",
                    code: 5102
                },
                UNSUPPORTED_ACCOUNTS: {
                    message: "Unsupported accounts.",
                    code: 5103
                },
                UNSUPPORTED_NAMESPACE_KEY: {
                    message: "Unsupported namespace key.",
                    code: 5104
                },
                USER_DISCONNECTED: {
                    message: "User disconnected.",
                    code: 6e3
                },
                SESSION_SETTLEMENT_FAILED: {
                    message: "Session settlement failed.",
                    code: 7e3
                },
                WC_METHOD_UNSUPPORTED: {
                    message: "Unsupported wc_ method.",
                    code: 10001
                }
            };

            function m(e, t) {
                return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
            }
            let _ = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                w = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                b = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function E(e, t) {
                if ("__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t) {
                    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
                    return
                }
                return t
            }

            function I(e, t = {}) {
                if ("string" != typeof e) return e;
                let r = e.trim();
                if ('"' === e[0] && '"' === e.at(-1) && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    let e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!b.test(e)) {
                    if (t.strict) throw SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (_.test(e) || w.test(e)) {
                        if (t.strict) throw Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, E)
                    }
                    return JSON.parse(e)
                } catch (r) {
                    if (t.strict) throw r;
                    return e
                }
            }
            var S = r(51328).Buffer;

            function P(e, ...t) {
                try {
                    var r;
                    return (r = e(...t)) && "function" == typeof r.then ? r : Promise.resolve(r)
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function O(e) {
                if (function(e) {
                        let t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        let t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" == typeof e.toJSON) return O(e.toJSON());
                throw Error("[unstorage] Cannot stringify value!")
            }
            let R = "base64:";

            function N(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function T(e) {
                return (e = N(e)) ? e + ":" : ""
            }
            let C = () => {
                let e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem: t => e.get(t) ? ? null,
                    getItemRaw: t => e.get(t) ? ? null,
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function A(e, t, r) {
                return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {}
            }
            async function x(e) {
                "function" == typeof e.dispose && await P(e.dispose)
            }

            function D(e) {
                return new Promise((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                })
            }

            function U(e, t) {
                let r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                let i = D(r);
                return (e, r) => i.then(i => r(i.transaction(t, e).objectStore(t)))
            }

            function j() {
                return i || (i = U("keyval-store", "keyval")), i
            }

            function L(e, t = j()) {
                return t("readonly", t => D(t.get(e)))
            }
            var q = r(966),
                M = (e = {}) => {
                    let t;
                    let r = e.base && e.base.length > 0 ? `${e.base}:` : "",
                        i = e => r + e;
                    return e.dbName && e.storeName && (t = U(e.dbName, e.storeName)), {
                        name: "idb-keyval",
                        options: e,
                        hasItem: async e => !(typeof await L(i(e), t) > "u"),
                        getItem: async e => await L(i(e), t) ? ? null,
                        setItem: (e, r) => (function(e, t, r = j()) {
                            return r("readwrite", r => (r.put(t, e), D(r.transaction)))
                        })(i(e), r, t),
                        removeItem: e => (function(e, t = j()) {
                            return t("readwrite", t => (t.delete(e), D(t.transaction)))
                        })(i(e), t),
                        getKeys: () => (function(e = j()) {
                            return e("readonly", e => {
                                var t;
                                if (e.getAllKeys) return D(e.getAllKeys());
                                let r = [];
                                return (t = e => r.push(e.key), e.openCursor().onsuccess = function() {
                                    this.result && (t(this.result), this.result.continue())
                                }, D(e.transaction)).then(() => r)
                            })
                        })(t),
                        clear: () => (function(e = j()) {
                            return e("readwrite", e => (e.clear(), D(e.transaction)))
                        })(t)
                    }
                };
            class z {
                constructor() {
                    this.indexedDb = function(e = {}) {
                        let t = {
                                mounts: {
                                    "": e.driver || C()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            r = e => {
                                for (let r of t.mountpoints)
                                    if (e.startsWith(r)) return {
                                        base: r,
                                        relativeKey: e.slice(r.length),
                                        driver: t.mounts[r]
                                    };
                                return {
                                    base: "",
                                    relativeKey: e,
                                    driver: t.mounts[""]
                                }
                            },
                            i = (e, r) => t.mountpoints.filter(t => t.startsWith(e) || r && e.startsWith(t)).map(r => ({
                                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                                mountpoint: r,
                                driver: t.mounts[r]
                            })),
                            n = (e, r) => {
                                if (t.watching)
                                    for (let i of (r = N(r), t.watchListeners)) i(e, r)
                            },
                            s = async () => {
                                if (!t.watching)
                                    for (let e in t.watching = !0, t.mounts) t.unwatch[e] = await A(t.mounts[e], n, e)
                            },
                            o = async () => {
                                if (t.watching) {
                                    for (let e in t.unwatch) await t.unwatch[e]();
                                    t.unwatch = {}, t.watching = !1
                                }
                            },
                            a = (e, t, i) => {
                                let n = new Map,
                                    s = e => {
                                        let t = n.get(e.base);
                                        return t || (t = {
                                            driver: e.driver,
                                            base: e.base,
                                            items: []
                                        }, n.set(e.base, t)), t
                                    };
                                for (let i of e) {
                                    let e = "string" == typeof i,
                                        n = N(e ? i : i.key),
                                        o = e ? void 0 : i.value,
                                        a = e || !i.options ? t : { ...t,
                                            ...i.options
                                        },
                                        c = r(n);
                                    s(c).items.push({
                                        key: n,
                                        value: o,
                                        relativeKey: c.relativeKey,
                                        options: a
                                    })
                                }
                                return Promise.all([...n.values()].map(e => i(e))).then(e => e.flat())
                            },
                            c = {
                                hasItem(e, t = {}) {
                                    e = N(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return P(n.hasItem, i, t)
                                },
                                getItem(e, t = {}) {
                                    e = N(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return P(n.getItem, i, t).then(e => I(e))
                                },
                                getItems: (e, t) => a(e, t, e => e.driver.getItems ? P(e.driver.getItems, e.items.map(e => ({
                                    key: e.relativeKey,
                                    options: e.options
                                })), t).then(t => t.map(t => ({
                                    key: function(...e) {
                                        return N(e.join(":"))
                                    }(e.base, t.key),
                                    value: I(t.value)
                                }))) : Promise.all(e.items.map(t => P(e.driver.getItem, t.relativeKey, t.options).then(e => ({
                                    key: t.key,
                                    value: I(e)
                                }))))),
                                getItemRaw(e, t = {}) {
                                    e = N(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return n.getItemRaw ? P(n.getItemRaw, i, t) : P(n.getItem, i, t).then(e => "string" == typeof e && e.startsWith(R) ? S.from(e.slice(R.length), "base64") : e)
                                },
                                async setItem(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e);
                                    e = N(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e);
                                    o.setItem && (await P(o.setItem, s, O(t), i), o.watch || n("update", e))
                                },
                                async setItems(e, t) {
                                    await a(e, t, async e => {
                                        e.driver.setItems && await P(e.driver.setItems, e.items.map(e => ({
                                            key: e.relativeKey,
                                            value: O(e.value),
                                            options: e.options
                                        })), t), e.driver.setItem && await Promise.all(e.items.map(t => P(e.driver.setItem, t.relativeKey, O(t.value), t.options)))
                                    })
                                },
                                async setItemRaw(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e, i);
                                    e = N(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e);
                                    if (o.setItemRaw) await P(o.setItemRaw, s, t, i);
                                    else {
                                        if (!o.setItem) return;
                                        await P(o.setItem, s, function(e) {
                                            if ("string" == typeof e) return e;
                                            let t = S.from(e).toString("base64");
                                            return R + t
                                        }(t), i)
                                    }
                                    o.watch || n("update", e)
                                },
                                async removeItem(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        removeMeta: t
                                    }), e = N(e);
                                    let {
                                        relativeKey: i,
                                        driver: s
                                    } = r(e);
                                    s.removeItem && (await P(s.removeItem, i, t), (t.removeMeta || t.removeMata) && await P(s.removeItem, i + "$", t), s.watch || n("remove", e))
                                },
                                async getMeta(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        nativeOnly: t
                                    }), e = N(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e), s = Object.create(null);
                                    if (n.getMeta && Object.assign(s, await P(n.getMeta, i, t)), !t.nativeOnly) {
                                        let e = await P(n.getItem, i + "$", t).then(e => I(e));
                                        e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                                    }
                                    return s
                                },
                                setMeta(e, t, r = {}) {
                                    return this.setItem(e + "$", t, r)
                                },
                                removeMeta(e, t = {}) {
                                    return this.removeItem(e + "$", t)
                                },
                                async getKeys(e, t = {}) {
                                    e = T(e);
                                    let r = i(e, !0),
                                        n = [],
                                        s = [];
                                    for (let e of r) {
                                        let r = await P(e.driver.getKeys, e.relativeBase, t),
                                            i = r.map(t => e.mountpoint + N(t)).filter(e => !n.some(t => e.startsWith(t)));
                                        s.push(...i), n = [e.mountpoint, ...n.filter(t => !t.startsWith(e.mountpoint))]
                                    }
                                    return e ? s.filter(t => t.startsWith(e) && !t.endsWith("$")) : s.filter(e => !e.endsWith("$"))
                                },
                                async clear(e, t = {}) {
                                    e = T(e), await Promise.all(i(e, !1).map(async e => {
                                        if (e.driver.clear) return P(e.driver.clear, e.relativeBase, t);
                                        if (e.driver.removeItem) {
                                            let r = await e.driver.getKeys(e.relativeBase || "", t);
                                            return Promise.all(r.map(r => e.driver.removeItem(r, t)))
                                        }
                                    }))
                                },
                                async dispose() {
                                    await Promise.all(Object.values(t.mounts).map(e => x(e)))
                                },
                                watch: async e => (await s(), t.watchListeners.push(e), async () => {
                                    t.watchListeners = t.watchListeners.filter(t => t !== e), 0 === t.watchListeners.length && await o()
                                }),
                                async unwatch() {
                                    t.watchListeners = [], await o()
                                },
                                mount(e, r) {
                                    if ((e = T(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                                    return e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)), t.mounts[e] = r, t.watching && Promise.resolve(A(r, n, e)).then(r => {
                                        t.unwatch[e] = r
                                    }).catch(console.error), c
                                },
                                async unmount(e, r = !0) {
                                    (e = T(e)) && t.mounts[e] && (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]), r && await x(t.mounts[e]), t.mountpoints = t.mountpoints.filter(t => t !== e), delete t.mounts[e])
                                },
                                getMount(e = "") {
                                    e = N(e) + ":";
                                    let t = r(e);
                                    return {
                                        driver: t.driver,
                                        base: t.base
                                    }
                                },
                                getMounts(e = "", t = {}) {
                                    e = N(e);
                                    let r = i(e, t.parents);
                                    return r.map(e => ({
                                        driver: e.driver,
                                        base: e.mountpoint
                                    }))
                                }
                            };
                        return c
                    }({
                        driver: M({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
                }
                async getItem(e) {
                    let t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, (0, q.u)(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
            }
            var k = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                $ = {
                    exports: {}
                };

            function H(e) {
                var t;
                return [e[0], (0, q.D)(null != (t = e[1]) ? t : "")]
            }! function() {
                function e() {}
                e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), "u" > typeof k && k.localStorage ? $.exports = k.localStorage : "u" > typeof window && window.localStorage ? $.exports = window.localStorage : $.exports = new e
            }();
            class V {
                constructor() {
                    this.localStorage = $.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(H)
                }
                async getItem(e) {
                    let t = this.localStorage.getItem(e);
                    if (null !== t) return (0, q.D)(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, (0, q.u)(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
            }
            let K = async (e, t, r) => {
                    let i = "wc_storage_version",
                        n = await t.getItem(i);
                    if (n && n >= 1) {
                        r(t);
                        return
                    }
                    let s = await e.getKeys();
                    if (!s.length) {
                        r(t);
                        return
                    }
                    let o = [];
                    for (; s.length;) {
                        let r = s.shift();
                        if (!r) continue;
                        let i = r.toLowerCase();
                        if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                            let i = await e.getItem(r);
                            await t.setItem(r, i), o.push(r)
                        }
                    }
                    await t.setItem(i, 1), r(t), B(e, o)
                },
                B = async (e, t) => {
                    t.length && t.forEach(async t => {
                        await e.removeItem(t)
                    })
                };
            class F {
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    let e = new V;
                    this.storage = e;
                    try {
                        let t = new z;
                        K(e, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise(e => {
                        let t = setInterval(() => {
                            this.initialized && (clearInterval(t), e())
                        }, 20)
                    })
                }
            }
            var W = r(26419),
                G = r(13855),
                J = r(82050);
            class Q extends J.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class Y extends J.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class Z {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class X extends J.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class ee extends J.q {
                constructor(e) {
                    super()
                }
            }
            class et {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class er extends J.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class ei extends J.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class en {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class es {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class eo {
                constructor(e) {
                    this.client = e
                }
            }
            var ea = r(28673);
            let ec = "base64url",
                eu = "base58btc";
            var el = r(31078),
                eh = r(72623),
                ep = r(57488);

            function ef(e) {
                return (0, eh.B)((0, ep.m)((0, q.u)(e), "utf8"), ec)
            }

            function ed(e) {
                let t = (0, ep.m)("K36", eu),
                    r = "z" + (0, eh.B)((0, el.z)([t, e]), eu);
                return ["did", "key", r].join(":")
            }

            function eg(e = (0, c.randomBytes)(32)) {
                return ea._w(e)
            }
            async function ey(e, t, r, i, n = (0, p.fromMiliseconds)(Date.now())) {
                var s, o, a;
                let c = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    u = ed(i.publicKey),
                    l = {
                        iss: u,
                        sub: e,
                        aud: t,
                        iat: n,
                        exp: n + r
                    },
                    h = (s = {
                        header: c,
                        payload: l
                    }, (0, ep.m)([ef(s.header), ef(s.payload)].join("."), "utf8")),
                    f = ea.Xx(i.secretKey, h);
                return [ef((o = {
                    header: c,
                    payload: l,
                    signature: f
                }).header), ef(o.payload), (a = o.signature, (0, eh.B)(a, ec))].join(".")
            }
            r(43177);
            var ev = r(17790),
                em = r(68571);
            let e_ = "base10",
                ew = "base16",
                eb = "base64pad",
                eE = "utf8";

            function eI() {
                let e = (0, c.randomBytes)(32);
                return (0, h.BB)(e, ew)
            }

            function eS(e) {
                let t = (0, u.vp)((0, h.mL)(e, eE));
                return (0, h.BB)(t, ew)
            }

            function eP(e) {
                return Number((0, h.BB)(e, e_))
            }

            function eO(e) {
                let t = (0, h.mL)(e, eb),
                    r = t.slice(0, 1);
                if (1 === eP(r)) {
                    let e = t.slice(1, 33),
                        i = t.slice(33, 45),
                        n = t.slice(45);
                    return {
                        type: r,
                        sealed: n,
                        iv: i,
                        senderPublicKey: e
                    }
                }
                let i = t.slice(1, 13),
                    n = t.slice(13);
                return {
                    type: r,
                    sealed: n,
                    iv: i
                }
            }

            function eR(e) {
                let t = e ? .type || 0;
                if (1 === t) {
                    if (typeof e ? .senderPublicKey > "u") throw Error("missing sender public key");
                    if (typeof e ? .receiverPublicKey > "u") throw Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: e ? .senderPublicKey,
                    receiverPublicKey: e ? .receiverPublicKey
                }
            }

            function eN(e) {
                return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var eT = Object.defineProperty,
                eC = Object.getOwnPropertySymbols,
                eA = Object.prototype.hasOwnProperty,
                ex = Object.prototype.propertyIsEnumerable,
                eD = (e, t, r) => t in e ? eT(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                eU = (e, t) => {
                    for (var r in t || (t = {})) eA.call(t, r) && eD(e, r, t[r]);
                    if (eC)
                        for (var r of eC(t)) ex.call(t, r) && eD(e, r, t[r]);
                    return e
                };
            let ej = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function eL() {
                return "u" > typeof em && "u" > typeof em.versions && "u" > typeof em.versions.node
            }

            function eq() {
                return !(0, f.getDocument)() && !!(0, f.getNavigator)() && "ReactNative" === navigator.product
            }

            function eM() {
                return !eL() && !!(0, f.getNavigator)()
            }

            function ez() {
                return eq() ? ej.reactNative : eL() ? ej.node : eM() ? ej.browser : ej.unknown
            }

            function ek(e) {
                return Object.fromEntries(e.entries())
            }

            function e$(e) {
                return new Map(Object.entries(e))
            }

            function eH(e, t, r) {
                return new Promise(async (i, n) => {
                    let s = setTimeout(() => n(Error(r)), t);
                    try {
                        let t = await e;
                        i(t)
                    } catch (e) {
                        n(e)
                    }
                    clearTimeout(s)
                })
            }

            function eV(e, t) {
                if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw Error('Value must be "string" for expirer target type: topic');
                    return `topic:${t}`
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw Error('Value must be "number" for expirer target type: id');
                    return `id:${t}`
                }
                throw Error(`Unknown expirer target type: ${e}`)
            }

            function eK(e, t) {
                return (0, p.fromMiliseconds)((t || Date.now()) + (0, p.toMiliseconds)(e))
            }

            function eB(e) {
                return Date.now() >= (0, p.toMiliseconds)(e)
            }

            function eF(e, t) {
                return `${e}${t?`:${t}`:""}`
            }

            function eW(e) {
                return e ? .relay || {
                    protocol: "irn"
                }
            }

            function eG(e) {
                let t = y.RELAY_JSONRPC[e];
                if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
                return t
            }
            var eJ = Object.defineProperty,
                eQ = Object.getOwnPropertySymbols,
                eY = Object.prototype.hasOwnProperty,
                eZ = Object.prototype.propertyIsEnumerable,
                eX = (e, t, r) => t in e ? eJ(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                e0 = (e, t) => {
                    for (var r in t || (t = {})) eY.call(t, r) && eX(e, r, t[r]);
                    if (eQ)
                        for (var r of eQ(t)) eZ.call(t, r) && eX(e, r, t[r]);
                    return e
                };

            function e1(e) {
                var t;
                e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e;
                let r = e.indexOf(":"),
                    i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    n = e.substring(0, r),
                    s = e.substring(r + 1, i).split("@"),
                    o = "u" > typeof i ? e.substring(i) : "",
                    a = g.parse(o);
                return {
                    protocol: n,
                    topic: (t = s[0]).startsWith("//") ? t.substring(2) : t,
                    version: parseInt(s[1], 10),
                    symKey: a.symKey,
                    relay: function(e, t = "-") {
                        let r = {},
                            i = "relay" + t;
                        return Object.keys(e).forEach(t => {
                            if (t.startsWith(i)) {
                                let n = t.replace(i, ""),
                                    s = e[t];
                                r[n] = s
                            }
                        }), r
                    }(a)
                }
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let e5 = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                e6 = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function e3(e, t) {
                let {
                    message: r,
                    code: i
                } = e6[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function e2(e, t) {
                let {
                    message: r,
                    code: i
                } = e5[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function e4(e) {
                return typeof e > "u"
            }

            function e8(e, t) {
                return !!(t && e4(e)) || "string" == typeof e && !!e.trim().length
            }

            function e9(e) {
                return "u" > typeof e
            }

            function e7() {
                let e = ez();
                return new Promise(t => {
                    switch (e) {
                        case ej.browser:
                            t(eM() && navigator ? .onLine);
                            break;
                        case ej.reactNative:
                            t(te());
                            break;
                        case ej.node:
                        default:
                            t(!0)
                    }
                })
            }
            async function te() {
                if (eq() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
                    let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
                    return e ? .isConnected
                }
                return !0
            }
            var tt = r(91338),
                tr = r(52793);
            let ti = () => "u" > typeof WebSocket || "u" > typeof r.g && "u" > typeof r.g.WebSocket || "u" > typeof window && "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket,
                tn = e => e.split("?")[0],
                ts = "u" > typeof WebSocket ? WebSocket : "u" > typeof r.g && "u" > typeof r.g.WebSocket ? r.g.WebSocket : "u" > typeof window && "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : r(51148);
            class to {
                constructor(e) {
                    if (this.url = e, this.events = new n.EventEmitter, this.registering = !1, !(0, tr.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return "u" > typeof this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (typeof this.socket > "u") {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send((0, q.u)(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register(e = this.url) {
                    if (!(0, tr.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = new URLSearchParams(e).get("origin"),
                            n = (0, tr.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !(0, tr.isLocalhostUrl)(e)
                            },
                            s = new ts(e, [], n);
                        ti() ? s.onerror = e => {
                            r(this.emitError(e.error))
                        } : s.on("error", e => {
                            r(this.emitError(e))
                        }), s.onopen = () => {
                            this.onOpen(s), t(s)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? (0, q.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        n = (0, tr.formatJsonRpcError)(e, i);
                    this.events.emit("payload", n)
                }
                parseError(e, t = this.url) {
                    return (0, tr.parseConnectionError)(e, tn(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error(e ? .message || `WebSocket connection failed for host: ${tn(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var ta = r(50279),
                tc = r.n(ta),
                tu = r(68571),
                tl = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < e.length; n++) {
                        var s = e.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function h(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, n = 0; e[t] === c;) i++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var l = r[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var h = 0, p = s - 1;
                                    (0 !== l || h < n) && -1 !== p; p--, h++) l += a * o[p] >>> 0, o[p] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                n = h, t++
                            }
                            if (" " !== e[t]) {
                                for (var f = s - n; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                            for (var o = (s - n) * l + 1 >>> 0, u = new Uint8Array(o); n !== s;) {
                                for (var h = t[n], p = 0, f = o - 1;
                                    (0 !== h || p < i) && -1 !== f; f--, p++) h += 256 * u[f] >>> 0, u[f] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw Error("Non-zero carry");
                                i = p, n++
                            }
                            for (var d = o - i; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: h,
                        decode: function(e) {
                            var r = h(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let th = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                tp = e => new TextEncoder().encode(e),
                tf = e => new TextDecoder().decode(e);
            class td {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class tg {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return tv(this, e)
                }
            }
            class ty {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return tv(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let tv = (e, t) => new ty({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class tm {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new td(e, t, r), this.decoder = new tg(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let t_ = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new tm(e, t, r, i),
                tw = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = tl(r, t);
                    return t_({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => th(n(e))
                    })
                },
                tb = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                tE = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                tI = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => t_({
                    prefix: t,
                    name: e,
                    encode: e => tE(e, i, r),
                    decode: t => tb(t, i, r, e)
                }),
                tS = t_({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => tf(e),
                    decode: e => tp(e)
                });
            var tP = Object.freeze({
                __proto__: null,
                identity: tS
            });
            let tO = tI({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var tR = Object.freeze({
                __proto__: null,
                base2: tO
            });
            let tN = tI({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var tT = Object.freeze({
                __proto__: null,
                base8: tN
            });
            let tC = tw({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var tA = Object.freeze({
                __proto__: null,
                base10: tC
            });
            let tx = tI({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                tD = tI({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var tU = Object.freeze({
                __proto__: null,
                base16: tx,
                base16upper: tD
            });
            let tj = tI({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                tL = tI({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                tq = tI({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                tM = tI({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                tz = tI({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                tk = tI({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                t$ = tI({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                tH = tI({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                tV = tI({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var tK = Object.freeze({
                __proto__: null,
                base32: tj,
                base32upper: tL,
                base32pad: tq,
                base32padupper: tM,
                base32hex: tz,
                base32hexupper: tk,
                base32hexpad: t$,
                base32hexpadupper: tH,
                base32z: tV
            });
            let tB = tw({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                tF = tw({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var tW = Object.freeze({
                __proto__: null,
                base36: tB,
                base36upper: tF
            });
            let tG = tw({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                tJ = tw({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var tQ = Object.freeze({
                __proto__: null,
                base58btc: tG,
                base58flickr: tJ
            });
            let tY = tI({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                tZ = tI({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                tX = tI({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                t0 = tI({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var t1 = Object.freeze({
                __proto__: null,
                base64: tY,
                base64pad: tZ,
                base64url: tX,
                base64urlpad: t0
            });
            let t5 = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                t6 = t5.reduce((e, t, r) => (e[r] = t, e), []),
                t3 = t5.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                t2 = t_({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += t6[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = t3[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var t4 = Object.freeze({
                __proto__: null,
                base256emoji: t2
            });

            function t8(e, t, r) {
                t = t || [], r = r || 0;
                for (var i = r; e >= 2147483648;) t[r++] = 255 & e | 128, e /= 128;
                for (; - 128 & e;) t[r++] = 255 & e | 128, e >>>= 7;
                return t[r] = 0 | e, t8.bytes = r - i + 1, t
            }

            function t9(e, t) {
                var r, i = 0,
                    t = t || 0,
                    n = 0,
                    s = t,
                    o = e.length;
                do {
                    if (s >= o) throw t9.bytes = 0, RangeError("Could not decode varint");
                    r = e[s++], i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n), n += 7
                } while (r >= 128);
                return t9.bytes = s - t, i
            }
            var t7 = {
                encode: t8,
                decode: t9,
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let re = (e, t, r = 0) => (t7.encode(e, t, r), t),
                rt = e => t7.encodingLength(e),
                rr = (e, t) => {
                    let r = t.byteLength,
                        i = rt(e),
                        n = i + rt(r),
                        s = new Uint8Array(n + r);
                    return re(e, s, 0), re(r, s, i), s.set(t, n), new ri(e, r, t, s)
                };
            class ri {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let rn = ({
                name: e,
                code: t,
                encode: r
            }) => new rs(e, t, r);
            class rs {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? rr(this.code, t) : t.then(e => rr(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let ro = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                ra = rn({
                    name: "sha2-256",
                    code: 18,
                    encode: ro("SHA-256")
                }),
                rc = rn({
                    name: "sha2-512",
                    code: 19,
                    encode: ro("SHA-512")
                });
            var ru = Object.freeze({
                    __proto__: null,
                    sha256: ra,
                    sha512: rc
                }),
                rl = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: th,
                        digest: e => rr(0, th(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let rh = { ...tP,
                ...tR,
                ...tT,
                ...tA,
                ...tU,
                ...tK,
                ...tW,
                ...tQ,
                ...t1,
                ...t4
            };

            function rp(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function rf(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...ru,
                ...rl
            });
            let rd = rf("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                rg = rf("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? rp(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                ry = {
                    utf8: rd,
                    "utf-8": rd,
                    hex: rh.base16,
                    latin1: rg,
                    ascii: rg,
                    binary: rg,
                    ...rh
                },
                rv = "core",
                rm = `wc@2:${rv}:`,
                r_ = {
                    logger: "error"
                },
                rw = {
                    database: ":memory:"
                },
                rb = "client_ed25519_seed",
                rE = p.ONE_DAY,
                rI = p.SIX_HOURS,
                rS = "wss://relay.walletconnect.com",
                rP = "wss://relay.walletconnect.org",
                rO = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    publish: "relayer_publish"
                },
                rR = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                rN = p.ONE_SECOND,
                rT = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                rC = 1e3 * p.FIVE_SECONDS,
                rA = {
                    wc_pairingDelete: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                rx = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                rD = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                rU = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                rj = "verify-api",
                rL = "https://verify.walletconnect.com",
                rq = "https://verify.walletconnect.org",
                rM = [rL, rq];
            class rz {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = rm, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = e3("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, G.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, ek(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? e$(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rk {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
                        this.isInitialized();
                        let e = await this.getClientSeed(),
                            t = eg(e);
                        return ed(t.publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = function() {
                            let e = l.Au();
                            return {
                                privateKey: (0, h.BB)(e.secretKey, ew),
                                publicKey: (0, h.BB)(e.publicKey, ew)
                            }
                        }();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = await this.getClientSeed(),
                            r = eg(t),
                            i = eI();
                        return await ey(i, e, rE, r)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = this.getPrivateKey(e),
                            n = function(e, t) {
                                let r = l.gi((0, h.mL)(e, ew), (0, h.mL)(t, ew), !0),
                                    i = new a.t(u.mE, r).expand(32);
                                return (0, h.BB)(i, ew)
                            }(i, t);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || function(e) {
                            let t = (0, u.vp)((0, h.mL)(e, ew));
                            return (0, h.BB)(t, ew)
                        }(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = eR(r),
                            n = (0, q.u)(t);
                        if (eN(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let s = this.getSymKey(e),
                            {
                                type: a,
                                senderPublicKey: u
                            } = i;
                        return function(e) {
                            var t;
                            let r = (t = "u" > typeof e.type ? e.type : 0, (0, h.mL)(`${t}`, e_));
                            if (1 === eP(r) && typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                            let i = "u" > typeof e.senderPublicKey ? (0, h.mL)(e.senderPublicKey, ew) : void 0,
                                n = "u" > typeof e.iv ? (0, h.mL)(e.iv, ew) : (0, c.randomBytes)(12),
                                s = new o.OK((0, h.mL)(e.symKey, ew)).seal(n, (0, h.mL)(e.message, eE));
                            return function(e) {
                                if (1 === eP(e.type)) {
                                    if (typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                                    return (0, h.BB)((0, h.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), eb)
                                }
                                return (0, h.BB)((0, h.zo)([e.type, e.iv, e.sealed]), eb)
                            }({
                                type: r,
                                sealed: s,
                                iv: n,
                                senderPublicKey: i
                            })
                        }({
                            type: a,
                            symKey: s,
                            message: n,
                            senderPublicKey: u
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = function(e, t) {
                            let r = eO(e);
                            return eR({
                                type: eP(r.type),
                                senderPublicKey: "u" > typeof r.senderPublicKey ? (0, h.BB)(r.senderPublicKey, ew) : void 0,
                                receiverPublicKey: t ? .receiverPublicKey
                            })
                        }(t, r);
                        if (eN(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            let r = this.getSymKey(e),
                                i = function(e) {
                                    let t = new o.OK((0, h.mL)(e.symKey, ew)),
                                        {
                                            sealed: r,
                                            iv: i
                                        } = eO(e.encoded),
                                        n = t.open(i, r);
                                    if (null === n) throw Error("Failed to decrypt");
                                    return (0, h.BB)(n, eE)
                                }({
                                    symKey: r,
                                    encoded: t
                                });
                            return (0, q.D)(i)
                        } catch (t) {
                            this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(t)
                        }
                    }, this.getPayloadType = e => {
                        let t = eO(e);
                        return eP(t.type)
                    }, this.getPayloadSenderPublicKey = e => {
                        let t = eO(e);
                        return t.senderPublicKey ? (0, h.BB)(t.senderPublicKey, ew) : void 0
                    }, this.core = e, this.logger = (0, G.generateChildLogger)(t, this.name), this.keychain = r || new rz(this.core, this.logger)
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(rb)
                    } catch {
                        e = eI(), await this.keychain.set(rb, e)
                    }
                    return function(e, t = "utf8") {
                        let r = ry[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? rp(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class r$ extends Z {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = rm, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = eS(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => {
                        this.isInitialized();
                        let r = this.get(e),
                            i = eS(t);
                        return "u" > typeof r[i]
                    }, this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, G.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, ek(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? e$(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rH extends X {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new n.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, p.toMiliseconds)(p.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            let n = r ? .ttl || rI,
                                s = eW(r),
                                o = r ? .prompt || !1,
                                a = r ? .tag || 0,
                                c = r ? .id || (0, tr.getBigIntRpcId)().toString(),
                                u = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: n,
                                        relay: s,
                                        prompt: o,
                                        tag: a,
                                        id: c
                                    }
                                },
                                l = setTimeout(() => this.queue.set(c, u), this.publishTimeout);
                            try {
                                await await eH(this.rpcPublish(e, t, n, s, o, a, c), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(c), this.relayer.events.emit(rO.publish, u)
                            } catch (e) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (i = r ? .internal) && i.throwOnFailedPublish) throw this.removeRequestFromQueue(c), e;
                                return
                            } finally {
                                clearTimeout(l)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(e), e
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, G.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, i, n, s, o) {
                    var a, c, u, l;
                    let h = {
                        method: eG(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: n,
                            tag: s
                        },
                        id: o
                    };
                    return e4(null == (a = h.params) ? void 0 : a.prompt) && (null == (c = h.params) || delete c.prompt), e4(null == (u = h.params) ? void 0 : u.tag) && (null == (l = h.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: h
                    }), this.relayer.request(h)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(W.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(rO.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(rO.message_ack, e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class rV {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var rK = Object.defineProperty,
                rB = Object.defineProperties,
                rF = Object.getOwnPropertyDescriptors,
                rW = Object.getOwnPropertySymbols,
                rG = Object.prototype.hasOwnProperty,
                rJ = Object.prototype.propertyIsEnumerable,
                rQ = (e, t, r) => t in e ? rK(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rY = (e, t) => {
                    for (var r in t || (t = {})) rG.call(t, r) && rQ(e, r, t[r]);
                    if (rW)
                        for (var r of rW(t)) rJ.call(t, r) && rQ(e, r, t[r]);
                    return e
                },
                rZ = (e, t) => rB(e, rF(t));
            class rX extends er {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new rV, this.events = new n.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = rm, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = eW(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let n = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), n
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, r) => {
                        let i = new p.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        let n = setInterval(() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= rC && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, G.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = eW(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let n = e2("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: eG(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await eH(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(rO.connection_stalled)
                    }
                    return eS(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = e[0].relay,
                        r = {
                            method: eG(t.protocol).batchSubscribe,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await eH(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(rO.connection_stalled)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: eG(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, rZ(rY({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, rY({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, rY({}, t)), this.topicMap.set(t.topic, e), this.events.emit(rT.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = e3("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(rT.deleted, rZ(rY({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(rT.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(rT.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = e3("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    var t;
                    if (!e.length) return;
                    let r = await this.rpcBatchSubscribe(e);
                    Array.isArray(r) && (!("u" > typeof t) || !r.length || r.every(t)) && this.onBatchSubscribe(r.map((t, r) => rZ(rY({}, e[r]), {
                        id: t
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(W.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(rO.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(rO.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(rT.created, async e => {
                        let t = rT.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(rT.deleted, async e => {
                        let t = rT.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var r0 = Object.defineProperty,
                r1 = Object.getOwnPropertySymbols,
                r5 = Object.prototype.hasOwnProperty,
                r6 = Object.prototype.propertyIsEnumerable,
                r3 = (e, t, r) => t in e ? r0(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                r2 = (e, t) => {
                    for (var r in t || (t = {})) r5.call(t, r) && r3(e, r, t[r]);
                    if (r1)
                        for (var r of r1(t)) r6.call(t, r) && r3(e, r, t[r]);
                    return e
                };
            class r4 extends ee {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new n.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(e)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e)
                    }, this.onConnectHandler = () => {
                        this.events.emit(rO.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(rO.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(rR.payload, this.onPayloadHandler), this.provider.on(rR.connect, this.onConnectHandler), this.provider.on(rR.disconnect, this.onDisconnectHandler), this.provider.on(rR.error, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, G.generateChildLogger)(e.logger, this.name) : (0, G.pino)((0, G.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new r$(this.logger, e.core), this.subscriber = new rX(this, this.logger), this.publisher = new rH(this, this.logger), this.relayUrl = e ? .relayUrl || rS, this.projectId = e.projectId, this.bundleId = function() {
                        var e;
                        try {
                            return eq() && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Application) ? null == (e = r.g.Application) ? void 0 : e.applicationId : void 0
                        } catch {
                            return
                        }
                    }(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${rP}...`), await this.restartTransport(rP)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    let i;
                    this.isInitialized();
                    let n = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    if (n) return n;
                    let s = t => {
                        t.topic === e && (this.subscriber.off(rT.created, s), i())
                    };
                    return await Promise.all([new Promise(e => {
                        i = e, this.subscriber.on(rT.created, s)
                    }), new Promise(async r => {
                        n = await this.subscriber.subscribe(e, t), r()
                    })]), n
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await eH(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise(e => {
                                if (!this.initialized) return e();
                                this.subscriber.once(rT.resubscribed, () => {
                                    e()
                                })
                            }), new Promise(async (e, t) => {
                                try {
                                    await eH(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (e) {
                                    t(e);
                                    return
                                }
                                e()
                            })])
                        } catch (e) {
                            if (this.logger.error(e), !this.isConnectionStalled(e.message)) throw e;
                            this.provider.events.emit(rR.disconnect)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(e) {
                    await this.confirmOnlineStateOrThrow(), this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await e7()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new tt.r(new to(function({
                        protocol: e,
                        version: t,
                        relayUrl: i,
                        sdkVersion: n,
                        auth: s,
                        projectId: o,
                        useOnCloseEvent: a,
                        bundleId: c
                    }) {
                        var u;
                        let l;
                        let h = i.split("?"),
                            p = function(e, t, i) {
                                let n = function() {
                                        if (ez() === ej.reactNative && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Platform)) {
                                            let {
                                                OS: e,
                                                Version: t
                                            } = r.g.Platform;
                                            return [e, t].join("-")
                                        }
                                        let e = (0, ev.qY)();
                                        if (null === e) return "unknown";
                                        let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                                        return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
                                    }(),
                                    s = function() {
                                        var e;
                                        let t = ez();
                                        return t === ej.browser ? [t, (null == (e = (0, f.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                                    }();
                                return [
                                    [e, t].join("-"), ["js", i].join("-"), n, s
                                ].join("/")
                            }(e, t, n),
                            d = (u = h[1] || "", l = eU(eU({}, l = g.parse(u)), {
                                auth: s,
                                ua: p,
                                projectId: o,
                                useOnCloseEvent: a || void 0,
                                origin: c || void 0
                            }), u = g.stringify(l));
                        return h[0] + "?" + d
                    }({
                        sdkVersion: "2.10.6",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
                    let i = this.messages.has(t, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), (0, tr.isJsonRpcRequest)(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = t.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(r2({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else(0, tr.isJsonRpcResponse)(e) && this.events.emit(rO.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(rO.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = (0, tr.formatJsonRpcResult)(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(rR.payload, this.onPayloadHandler), this.provider.off(rR.connect, this.onConnectHandler), this.provider.off(rR.disconnect, this.onDisconnectHandler), this.provider.off(rR.error, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(rO.connection_stalled, () => {
                        this.restartTransport().catch(e => this.logger.error(e))
                    });
                    let e = await e7();
                    ! function(e) {
                        switch (ez()) {
                            case ej.browser:
                                !eq() && eM() && (window.addEventListener("online", () => e(!0)), window.addEventListener("offline", () => e(!1)));
                                break;
                            case ej.reactNative:
                                eq() && "u" > typeof r.g && null != r.g && r.g.NetInfo && r.g ? .NetInfo.addEventListener(t => e(t ? .isConnected));
                            case ej.node:
                        }
                    }(async t => {
                        this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(e => this.logger.error(e))))
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(rO.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
                        await this.restartTransport().catch(e => this.logger.error(e))
                    }, (0, p.toMiliseconds)(rN)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise(e => {
                            let t = setInterval(() => {
                                this.connected && (clearInterval(t), e())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            }
            var r8 = Object.defineProperty,
                r9 = Object.getOwnPropertySymbols,
                r7 = Object.prototype.hasOwnProperty,
                ie = Object.prototype.propertyIsEnumerable,
                it = (e, t, r) => t in e ? r8(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ir = (e, t) => {
                    for (var r in t || (t = {})) r7.call(t, r) && it(e, r, t[r]);
                    if (r9)
                        for (var r of r9(t)) ie.call(t, r) && it(e, r, t[r]);
                    return e
                };
            class ii extends et {
                constructor(e, t, r, i = rm, n) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rm, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            var t;
                            this.getKey && null !== e && !e4(e) ? this.map.set(this.getKey(e), e) : (null == (t = e ? .proposer) ? void 0 : t.publicKey) ? this.map.set(e.id, e) : e ? .topic && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => tc()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = ir(ir({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, G.generateChildLogger)(t, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = e3("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = e3("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class is {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(s()), this.initialized = !1, this.storagePrefix = rm, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        var e;
                        this.isInitialized();
                        let t = eI(),
                            r = await this.core.crypto.setSymKey(t),
                            i = eK(p.FIVE_MINUTES),
                            n = {
                                protocol: "irn"
                            },
                            s = (e = {
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: r,
                                symKey: t,
                                relay: n
                            }, `${e.protocol}:${e.topic}@${e.version}?` + g.stringify(e0({
                                symKey: e.symKey
                            }, function(e, t = "-") {
                                let r = {};
                                return Object.keys(e).forEach(i => {
                                    e[i] && (r["relay" + t + i] = e[i])
                                }), r
                            }(e.relay))));
                        return await this.pairings.set(r, {
                            topic: r,
                            expiry: i,
                            relay: n,
                            active: !1
                        }), await this.core.relayer.subscribe(r), this.core.expirer.set(r, i), {
                            topic: r,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i
                        } = e1(e.uri);
                        if (this.pairings.keys.includes(t) && this.pairings.get(t).active) throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                        let n = eK(p.FIVE_MINUTES),
                            s = {
                                topic: t,
                                relay: i,
                                expiry: n,
                                active: !1
                            };
                        return await this.pairings.set(t, s), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(rx.create, s), this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        })), s
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = eK(p.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        }), this.core.expirer.set(e, t)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = function(e = p.FIVE_MINUTES, t) {
                                    let r, i, n;
                                    let s = (0, p.toMiliseconds)(e || p.FIVE_MINUTES);
                                    return {
                                        resolve: e => {
                                            n && r && (clearTimeout(n), r(e))
                                        },
                                        reject: e => {
                                            n && i && (clearTimeout(n), i(e))
                                        },
                                        done: () => new Promise((e, t) => {
                                            n = setTimeout(() => {
                                                t(Error(void 0))
                                            }, s), r = e, i = t
                                        })
                                    }
                                }();
                            this.events.once(eF("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", e2("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = (0, tr.formatJsonRpcRequest)(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = rA[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = (0, tr.formatJsonRpcResult)(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = rA[s.request.method].res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = (0, tr.formatJsonRpcError)(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = rA[s.request.method] ? rA[s.request.method].res : rA.unregistered_method.res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, e2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => eB(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(rx.ping, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, tr.isJsonRpcResult)(t) ? this.events.emit(eF("pairing_ping", r), {}): (0, tr.isJsonRpcError)(t) && this.events.emit(eF("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(rx.delete, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = e2("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error(e2("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!e9(e)) {
                            let {
                                message: t
                            } = e3("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (! function(e) {
                                if (e8(e, !1)) try {
                                    return "u" > typeof new URL(e)
                                } catch {}
                                return !1
                            }(e.uri)) {
                            let {
                                message: t
                            } = e3("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                        let r = e1(e.uri);
                        if (!(null != (t = r ? .relay) && t.protocol)) {
                            let {
                                message: e
                            } = e3("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw Error(e)
                        }
                        if (!(null != r && r.symKey)) {
                            let {
                                message: e
                            } = e3("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!e9(e)) {
                            let {
                                message: t
                            } = e3("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!e9(e)) {
                            let {
                                message: t
                            } = e3("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!e8(e, !1)) {
                            let {
                                message: t
                            } = e3("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = e3("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if (eB(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = e3("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = (0, G.generateChildLogger)(t, this.name), this.pairings = new ii(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(rO.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        try {
                            (0, tr.isJsonRpcRequest)(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : (0, tr.isJsonRpcResponse)(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.core.history.delete(t, i.id))
                        } catch (e) {
                            this.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(rU.expired, async e => {
                        let {
                            topic: t
                        } = function(e) {
                            let [t, r] = e.split(":"), i = {
                                id: void 0,
                                topic: void 0
                            };
                            if ("topic" === t && "string" == typeof r) i.topic = r;
                            else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
                            else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
                            return i
                        }(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(rx.expire, {
                            topic: t
                        }))
                    })
                }
            }
            class io extends Y {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new n.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rm, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: eK(p.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(rD.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = (0, tr.isJsonRpcError)(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(rD.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(rD.deleted, r))
                        })
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, G.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: (0, tr.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = e3("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(rD.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = e3("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(rD.created, e => {
                        let t = rD.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(rD.updated, e => {
                        let t = rD.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(rD.deleted, e => {
                        let t = rD.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(W.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, p.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ia extends ei {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new n.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rm, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(rU.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(rU.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, G.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return eV("topic", e);
                    if ("number" == typeof e) return eV("id", e);
                    let {
                        message: t
                    } = e3("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(rU.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = e3("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = e3("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, p.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(rU.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(W.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(rU.created, e => {
                        let t = rU.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(rU.expired, e => {
                        let t = rU.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(rU.deleted, e => {
                        let t = rU.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = e3("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ic extends en {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = rj, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || eq() || !eM()) return;
                        let t = this.getVerifyUrl(e ? .verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = rq;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        let t;
                        if (this.isDevEnv) return "";
                        let r = this.getVerifyUrl(e ? .verifyUrl);
                        try {
                            t = await this.fetchAttestation(e.attestationId, r)
                        } catch (i) {
                            this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${r}`), this.logger.info(i), t = await this.fetchAttestation(e.attestationId, rq)
                        }
                        return t
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                        let r = this.startAbortTimer(2 * p.ONE_SECOND),
                            i = await fetch(`${t}/attestation/${e}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        let t = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise(r => {
                            if (document.getElementById(rj)) return r();
                            window.addEventListener("message", t);
                            let i = document.createElement("iframe");
                            i.id = rj, i.src = `${this.verifyUrl}/${this.projectId}`, i.style.display = "none", document.body.append(i), this.iframe = i, e = r
                        }), new Promise((e, r) => setTimeout(() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }, (0, p.toMiliseconds)(p.FIVE_SECONDS)))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || rL;
                        return rM.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${rL}`), t = rL), t
                    }, this.logger = (0, G.generateChildLogger)(t, this.name), this.verifyUrl = rL, this.abortController = new AbortController, this.isDevEnv = eL() && tu.env.IS_VITEST
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, p.toMiliseconds)(e))
                }
            }
            var iu = Object.defineProperty,
                il = Object.getOwnPropertySymbols,
                ih = Object.prototype.hasOwnProperty,
                ip = Object.prototype.propertyIsEnumerable,
                id = (e, t, r) => t in e ? iu(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ig = (e, t) => {
                    for (var r in t || (t = {})) ih.call(t, r) && id(e, r, t[r]);
                    if (il)
                        for (var r of il(t)) ip.call(t, r) && id(e, r, t[r]);
                    return e
                };
            class iy extends Q {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = rv, this.events = new n.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || rS, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, G.pino)((0, G.getDefaultLoggerOptions)({
                        level: e ? .logger || r_.logger
                    }));
                    this.logger = (0, G.generateChildLogger)(t, this.name), this.heartbeat = new W.HeartBeat, this.crypto = new rk(this, this.logger, e ? .keychain), this.history = new io(this, this.logger), this.expirer = new ia(this, this.logger), this.storage = null != e && e.storage ? e.storage : new F(ig(ig({}, rw), e ? .storageOptions)), this.relayer = new r4({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new is(this, this.logger), this.verify = new ic(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new iy(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            var iv = r(68571);

            function im(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }

            function i_(e) {
                let t = (0, u.vp)((0, h.mL)(e, "utf8"));
                return (0, h.BB)(t, "base16")
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let iw = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function ib() {
                return "u" > typeof iv && "u" > typeof iv.versions && "u" > typeof iv.versions.node
            }

            function iE() {
                return !ib() && !!(0, f.getNavigator)()
            }

            function iI(e, t) {
                return e.filter(e => t.includes(e)).length === e.length
            }

            function iS(e = p.FIVE_MINUTES, t) {
                let r, i, n;
                let s = (0, p.toMiliseconds)(e || p.FIVE_MINUTES);
                return {
                    resolve: e => {
                        n && r && (clearTimeout(n), r(e))
                    },
                    reject: e => {
                        n && i && (clearTimeout(n), i(e))
                    },
                    done: () => new Promise((e, o) => {
                        n = setTimeout(() => {
                            o(Error(t))
                        }, s), r = e, i = o
                    })
                }
            }

            function iP(e, t) {
                return (0, p.fromMiliseconds)((t || Date.now()) + (0, p.toMiliseconds)(e))
            }

            function iO(e) {
                return Date.now() >= (0, p.toMiliseconds)(e)
            }

            function iR(e, t) {
                return `${e}${t?`:${t}`:""}`
            }
            async function iN({
                id: e,
                topic: t,
                wcDeepLink: i
            }) {
                try {
                    if (!i) return;
                    let n = "string" == typeof i ? JSON.parse(i) : i,
                        s = n ? .href;
                    if ("string" != typeof s) return;
                    s.endsWith("/") && (s = s.slice(0, -1));
                    let o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
                        a = !(0, f.getDocument)() && (0, f.getNavigator)() && "ReactNative" === navigator.product ? iw.reactNative : ib() ? iw.node : iE() ? iw.browser : iw.unknown;
                    a === iw.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === iw.reactNative && "u" > typeof(null == r.g ? void 0 : r.g.Linking) && await r.g.Linking.openURL(o)
                } catch (e) {
                    console.error(e)
                }
            }
            async function iT(e, t) {
                try {
                    return await e.getItem(t) || (iE() ? localStorage.getItem(t) : void 0)
                } catch (e) {
                    console.error(e)
                }
            }

            function iC(e) {
                let t = [];
                return e.forEach(e => {
                    let [r, i] = e.split(":");
                    t.push(`${r}:${i}`)
                }), t
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let iA = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                ix = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function iD(e, t) {
                let {
                    message: r,
                    code: i
                } = ix[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function iU(e, t) {
                let {
                    message: r,
                    code: i
                } = iA[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function ij(e, t) {
                return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
            }

            function iL(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function iq(e) {
                return typeof e > "u"
            }

            function iM(e, t) {
                return !!(t && iq(e)) || "string" == typeof e && !!e.trim().length
            }

            function iz(e, t) {
                return !!(t && iq(e)) || "number" == typeof e && !isNaN(e)
            }

            function ik(e) {
                return !!(iM(e, !1) && e.includes(":")) && 2 === e.split(":").length
            }

            function i$(e) {
                let t = !0;
                return ij(e) ? e.length && (t = e.every(e => iM(e, !1))) : t = !1, t
            }

            function iH(e, t) {
                let r = null;
                return Object.values(e).forEach(e => {
                    var i;
                    let n;
                    if (r) return;
                    let s = (i = `${t}, namespace`, n = null, i$(e ? .methods) ? i$(e ? .events) || (n = iU("UNSUPPORTED_EVENTS", `${i}, events should be an array of strings or empty array for no events`)) : n = iU("UNSUPPORTED_METHODS", `${i}, methods should be an array of strings or empty array for no methods`), n);
                    s && (r = s)
                }), r
            }

            function iV(e, t) {
                let r = null;
                if (e && iL(e)) {
                    let i;
                    let n = iH(e, t);
                    n && (r = n);
                    let s = (i = null, Object.values(e).forEach(e => {
                        var r, n;
                        let s;
                        if (i) return;
                        let o = (r = e ? .accounts, n = `${t} namespace`, s = null, ij(r) ? r.forEach(e => {
                            s || function(e) {
                                if (iM(e, !1) && e.includes(":")) {
                                    let t = e.split(":");
                                    if (3 === t.length) {
                                        let e = t[0] + ":" + t[1];
                                        return !!t[2] && ik(e)
                                    }
                                }
                                return !1
                            }(e) || (s = iU("UNSUPPORTED_ACCOUNTS", `${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
                        }) : s = iU("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s);
                        o && (i = o)
                    }), i);
                    s && (r = s)
                } else r = iD("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
                return r
            }

            function iK(e) {
                return iM(e.protocol, !0)
            }

            function iB(e) {
                return "u" > typeof e
            }

            function iF(e, t) {
                return !(!ik(t) || !(function(e) {
                    let t = [];
                    return Object.values(e).forEach(e => {
                        t.push(...iC(e.accounts))
                    }), t
                })(e).includes(t))
            }

            function iW(e, t, r) {
                let i = null,
                    n = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            var i;
                            r.includes(":") ? t[r] = e[r] : null == (i = e[r].chains) || i.forEach(i => {
                                t[i] = {
                                    methods: e[r].methods,
                                    events: e[r].events
                                }
                            })
                        }), t
                    }(e),
                    s = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            if (r.includes(":")) t[r] = e[r];
                            else {
                                let i = iC(e[r].accounts);
                                i ? .forEach(i => {
                                    t[i] = {
                                        accounts: e[r].accounts.filter(e => e.includes(`${i}:`)),
                                        methods: e[r].methods,
                                        events: e[r].events
                                    }
                                })
                            }
                        }), t
                    }(t),
                    o = Object.keys(n),
                    a = Object.keys(s),
                    c = iG(Object.keys(e)),
                    u = iG(Object.keys(t)),
                    l = c.filter(e => !u.includes(e));
                return l.length && (i = iD("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`)), iI(o, a) || (i = iD("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach(e => {
                    if (!e.includes(":") || i) return;
                    let n = iC(t[e].accounts);
                    n.includes(e) || (i = iD("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${n.toString()}`))
                }), o.forEach(e => {
                    i || (iI(n[e].methods, s[e].methods) ? iI(n[e].events, s[e].events) || (i = iD("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${e}`)) : i = iD("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${e}`))
                }), i
            }

            function iG(e) {
                return [...new Set(e.map(e => e.includes(":") ? e.split(":")[0] : e))]
            }
            let iJ = {};
            class iQ {
                static get(e) {
                    return iJ[e]
                }
                static set(e, t) {
                    iJ[e] = t
                }
                static delete(e) {
                    delete iJ[e]
                }
            }
            let iY = "client",
                iZ = `wc@2:${iY}:`,
                iX = {
                    name: iY,
                    logger: "error"
                },
                i0 = "WALLETCONNECT_DEEPLINK_CHOICE",
                i1 = "Proposal expired",
                i5 = p.SEVEN_DAYS,
                i6 = {
                    wc_sessionPropose: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                i3 = {
                    min: p.FIVE_MINUTES,
                    max: p.SEVEN_DAYS
                },
                i2 = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                i4 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var i8 = Object.defineProperty,
                i9 = Object.defineProperties,
                i7 = Object.getOwnPropertyDescriptors,
                ne = Object.getOwnPropertySymbols,
                nt = Object.prototype.hasOwnProperty,
                nr = Object.prototype.propertyIsEnumerable,
                ni = (e, t, r) => t in e ? i8(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nn = (e, t) => {
                    for (var r in t || (t = {})) nt.call(t, r) && ni(e, r, t[r]);
                    if (ne)
                        for (var r of ne(t)) nr.call(t, r) && ni(e, r, t[r]);
                    return e
                },
                ns = (e, t) => i9(e, i7(t));
            class no extends eo {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(s()), this.initialized = !1, this.ignoredPayloadTypes = [1], this.requestQueue = {
                        state: i2.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: i2.idle,
                        queue: []
                    }, this.requestQueueDelay = p.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(i6)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, p.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        let t = ns(nn({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: o
                        } = t, a = r, c, u = !1;
                        if (a && (u = this.client.core.pairing.pairings.get(a).active), !a || !u) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            a = e, c = t
                        }
                        let l = await this.client.core.crypto.generateKeyPair(),
                            h = nn({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: o ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: f,
                                resolve: d,
                                done: g
                            } = iS(p.FIVE_MINUTES, i1);
                        if (this.events.once(iR("session_connect"), async ({
                                error: e,
                                session: t
                            }) => {
                                if (e) f(e);
                                else if (t) {
                                    t.self.publicKey = l;
                                    let e = ns(nn({}, t), {
                                        requiredNamespaces: t.requiredNamespaces,
                                        optionalNamespaces: t.optionalNamespaces
                                    });
                                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), a && await this.client.core.pairing.updateMetadata({
                                        topic: a,
                                        metadata: t.peer.metadata
                                    }), d(e)
                                }
                            }), !a) {
                            let {
                                message: e
                            } = iD("NO_MATCHING_KEY", `connect() pairing topic: ${a}`);
                            throw Error(e)
                        }
                        let y = await this.sendRequest({
                                topic: a,
                                method: "wc_sessionPropose",
                                params: h
                            }),
                            v = iP(p.FIVE_MINUTES);
                        return await this.setProposal(y, nn({
                            id: y,
                            expiry: v
                        }, h)), {
                            uri: c,
                            approval: g
                        }
                    }, this.pair = async e => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        await this.isInitialized(), await this.isValidApprove(e);
                        let {
                            id: t,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = e, s = this.client.proposal.get(t), {
                            pairingTopic: o,
                            proposer: a,
                            requiredNamespaces: c,
                            optionalNamespaces: u
                        } = s;
                        o = o || "", iL(c) || (c = function(e, t) {
                            let r = iV(e, t);
                            if (r) throw Error(r.message);
                            let i = {};
                            for (let [t, r] of Object.entries(e)) i[t] = {
                                methods: r.methods,
                                events: r.events,
                                chains: r.accounts.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
                            };
                            return i
                        }(i, "approve()"));
                        let l = await this.client.core.crypto.generateKeyPair(),
                            h = a.publicKey,
                            p = await this.client.core.crypto.generateSharedKey(l, h);
                        o && t && (await this.client.core.pairing.updateMetadata({
                            topic: o,
                            metadata: a.metadata
                        }), await this.sendResult({
                            id: t,
                            topic: o,
                            result: {
                                relay: {
                                    protocol: r ? ? "irn"
                                },
                                responderPublicKey: l
                            }
                        }), await this.client.proposal.delete(t, iU("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: o
                        }));
                        let f = nn({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: c,
                            optionalNamespaces: u,
                            pairingTopic: o,
                            controller: {
                                publicKey: l,
                                metadata: this.client.metadata
                            },
                            expiry: iP(i5)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(p), await this.sendRequest({
                            topic: p,
                            method: "wc_sessionSettle",
                            params: f,
                            throwOnFailedPublish: !0
                        });
                        let d = ns(nn({}, f), {
                            topic: p,
                            pairingTopic: o,
                            acknowledged: !1,
                            self: f.controller,
                            peer: {
                                publicKey: a.publicKey,
                                metadata: a.metadata
                            },
                            controller: l
                        });
                        return await this.client.session.set(p, d), await this.setExpiry(p, iP(i5)), {
                            topic: p,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(p)), 500))
                        }
                    }, this.reject = async e => {
                        await this.isInitialized(), await this.isValidReject(e);
                        let {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: i
                        } = this.client.proposal.get(t);
                        i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, iU("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized(), await this.isValidUpdate(e);
                        let {
                            topic: t,
                            namespaces: r
                        } = e, i = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: n,
                            resolve: s,
                            reject: o
                        } = iS();
                        return this.events.once(iR("session_update", i), ({
                            error: e
                        }) => {
                            e ? o(e) : s()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async e => {
                        await this.isInitialized(), await this.isValidExtend(e);
                        let {
                            topic: t
                        } = e, r = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: i,
                            resolve: n,
                            reject: s
                        } = iS();
                        return this.events.once(iR("session_extend", r), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.setExpiry(t, iP(i5)), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        await this.isInitialized(), await this.isValidRequest(e);
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: n
                        } = e, s = (0, tr.payloadId)(), {
                            done: o,
                            resolve: a,
                            reject: c
                        } = iS(n, "Request expired. Please try again.");
                        return this.events.once(iR("session_request", s), ({
                            error: e,
                            result: t
                        }) => {
                            e ? c(e) : a(t)
                        }), await Promise.all([new Promise(async e => {
                            await this.sendRequest({
                                clientRpcId: s,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r,
                                    chainId: t
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch(e => c(e)), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: t,
                                id: s
                            }), e()
                        }), new Promise(async e => {
                            let t = await iT(this.client.core.storage, i0);
                            iN({
                                id: s,
                                topic: i,
                                wcDeepLink: t
                            }), e()
                        }), o()]).then(e => e[2])
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        (0, tr.isJsonRpcResult)(r) ? await this.sendResult({
                            id: i,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }): (0, tr.isJsonRpcError)(r) && await this.sendError(i, t, r.error), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = await this.sendRequest({
                                    topic: t,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = iS();
                            this.events.once(iR("session_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            }
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.client.session.keys.includes(t) ? (await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: iU("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (function(e, t) {
                        let {
                            requiredNamespaces: r
                        } = t, i = Object.keys(e.namespaces), n = Object.keys(r), s = !0;
                        return !!iI(n, i) && (i.forEach(t => {
                            let {
                                accounts: i,
                                methods: n,
                                events: o
                            } = e.namespaces[t], a = iC(i), c = r[t];
                            iI(im(t, c), a) && iI(c.methods, n) && iI(c.events, o) || (s = !1)
                        }), s)
                    })(t, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (e, t) => {
                        let {
                            self: r
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, iU("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e), this.client.core.storage.removeItem(i0).catch(e => this.client.logger.warn(e))
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, iU("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e), r && (this.sessionRequestQueue.state = i2.idle)
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        let t = i6.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n,
                                verifyContext: s
                            } = e;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n,
                            verifyContext: s
                        }), t && this.client.core.expirer.set(r, iP(t))
                    }, this.sendRequest = async e => {
                        let {
                            topic: t,
                            method: r,
                            params: i,
                            expiry: n,
                            relayRpcId: s,
                            clientRpcId: o,
                            throwOnFailedPublish: a
                        } = e, c = (0, tr.formatJsonRpcRequest)(r, i, o);
                        if (iE() && i4.includes(r)) {
                            let e = i_(JSON.stringify(c));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        let u = await this.client.core.crypto.encode(t, c),
                            l = i6[r].req;
                        return n && (l.ttl = n), s && (l.id = s), this.client.core.history.set(t, c), a ? (l.internal = ns(nn({}, l.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(t, u, l)) : this.client.core.relayer.publish(t, u, l).catch(e => this.client.logger.error(e)), c.id
                    }, this.sendResult = async e => {
                        let {
                            id: t,
                            topic: r,
                            result: i,
                            throwOnFailedPublish: n
                        } = e, s = (0, tr.formatJsonRpcResult)(t, i), o = await this.client.core.crypto.encode(r, s), a = await this.client.core.history.get(r, t), c = i6[a.request.method].res;
                        n ? (c.internal = ns(nn({}, c.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch(e => this.client.logger.error(e)), await this.client.core.history.resolve(s)
                    }, this.sendError = async (e, t, r) => {
                        let i = (0, tr.formatJsonRpcError)(e, r),
                            n = await this.client.core.crypto.encode(t, i),
                            s = await this.client.core.history.get(t, e),
                            o = i6[s.request.method].res;
                        this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            iO(t.expiry) && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            iO(e.expiry) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === i2.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = i2.active;
                            let e = this.requestQueue.queue.shift();
                            if (e) try {
                                this.processRequest(e), await new Promise(e => setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                        }
                        this.requestQueue.state = i2.idle
                    }, this.processRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = iD("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(nn({}, t.params));
                            let n = iP(p.FIVE_MINUTES),
                                s = nn({
                                    id: i,
                                    pairingTopic: e,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, s);
                            let o = i_(JSON.stringify(t)),
                                a = await this.getVerifyContext(o, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: s,
                                verifyContext: a
                            })
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if ((0, tr.isJsonRpcResult)(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            let s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else(0, tr.isJsonRpcError)(t) && (await this.client.proposal.delete(r, iU("USER_DISCONNECTED")), this.events.emit(iR("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: n,
                                expiry: s,
                                namespaces: o,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                sessionProperties: u,
                                pairingTopic: l
                            } = t.params, h = nn({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: o,
                                acknowledged: !0,
                                pairingTopic: l,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, u && {
                                sessionProperties: u
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0
                            }), this.events.emit(iR("session_connect"), {
                                session: h
                            }), this.cleanupDuplicatePairings(h)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, tr.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit(iR("session_approve", r), {})) : (0, tr.isJsonRpcError)(t) && (await this.client.session.delete(e, iU("USER_DISCONNECTED")), this.events.emit(iR("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            let t = `${e}_session_update`,
                                n = iQ.get(t);
                            if (n && this.isRequestOutOfSync(n, i)) {
                                this.client.logger.info(`Discarding out of sync request - ${i}`);
                                return
                            }
                            this.isValidUpdate(nn({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: i,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            }), iQ.set(t, i)
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, tr.isJsonRpcResult)(t) ? this.events.emit(iR("session_update", r), {}): (0, tr.isJsonRpcError)(t) && this.events.emit(iR("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, iP(i5)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, tr.isJsonRpcResult)(t) ? this.events.emit(iR("session_extend", r), {}): (0, tr.isJsonRpcError)(t) && this.events.emit(iR("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, tr.isJsonRpcResult)(t) ? this.events.emit(iR("session_ping", r), {}): (0, tr.isJsonRpcError)(t) && this.events.emit(iR("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(rO.publish, async () => {
                                    t(await this.deleteSession(e))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidRequest(nn({
                                topic: e
                            }, i));
                            let t = i_(JSON.stringify((0, tr.formatJsonRpcRequest)("wc_sessionRequest", i, r))),
                                n = this.client.session.get(e),
                                s = await this.getVerifyContext(t, n.peer.metadata),
                                o = {
                                    id: r,
                                    topic: e,
                                    params: i,
                                    verifyContext: s
                                };
                            await this.setPendingSessionRequest(o), this.addSessionRequestToSessionRequestQueue(o), this.processSessionRequestQueue()
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, tr.isJsonRpcResult)(t) ? this.events.emit(iR("session_request", r), {
                            result: t.result
                        }): (0, tr.isJsonRpcError)(t) && this.events.emit(iR("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            let t = `${e}_session_event_${i.event.name}`,
                                n = iQ.get(t);
                            if (n && this.isRequestOutOfSync(n, r)) {
                                this.client.logger.info(`Discarding out of sync request - ${r}`);
                                return
                            }
                            this.isValidEmit(nn({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            }), iQ.set(t, r)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = i2.idle, this.processSessionRequestQueue()
                        }, (0, p.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === i2.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let e = this.sessionRequestQueue.queue[0];
                        if (!e) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = i2.active, this.client.events.emit("session_request", e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onPairingCreated = e => {
                        if (e.active) return;
                        let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                        t && this.onSessionProposeRequest(e.topic, (0, tr.formatJsonRpcRequest)("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        let t;
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: o
                        } = e;
                        if (iq(r) || await this.isValidPairingTopic(r), t = !1, o ? o && ij(o) && o.length && o.forEach(e => {
                                t = iK(e)
                            }) : t = !0, !t) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `connect() relays: ${o}`);
                            throw Error(e)
                        }
                        iq(i) || 0 === iL(i) || this.validateNamespaces(i, "requiredNamespaces"), iq(n) || 0 === iL(n) || this.validateNamespaces(n, "optionalNamespaces"), iq(s) || this.validateSessionProps(s, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = function(e, t, r) {
                            let i = null;
                            if (e && iL(e)) {
                                let n;
                                let s = iH(e, t);
                                s && (i = s);
                                let o = (n = null, Object.entries(e).forEach(([e, i]) => {
                                    var s, o;
                                    let a;
                                    if (n) return;
                                    let c = (s = im(e, i), o = `${t} ${r}`, a = null, ij(s) && s.length ? s.forEach(e => {
                                        a || ik(e) || (a = iU("UNSUPPORTED_CHAINS", `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`))
                                    }) : ik(e) || (a = iU("UNSUPPORTED_CHAINS", `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), a);
                                    c && (n = c)
                                }), n);
                                o && (i = o)
                            } else i = iD("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
                            return i
                        }(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!iB(e)) throw Error(iD("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = e;
                        await this.isValidProposalId(t);
                        let s = this.client.proposal.get(t),
                            o = iV(r, "approve()");
                        if (o) throw Error(o.message);
                        let a = iW(s.requiredNamespaces, r, "approve()");
                        if (a) throw Error(a.message);
                        if (!iM(i, !0)) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw Error(e)
                        }
                        iq(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), !r || "object" != typeof r || !r.code || !iz(r.code, !1) || !r.message || !iM(r.message, !1)) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        let t;
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: r,
                            controller: i,
                            namespaces: n,
                            expiry: s
                        } = e;
                        if (!iK(r)) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let o = (t = null, iM(i ? .publicKey, !1) || (t = iD("MISSING_OR_INVALID", "onSessionSettleRequest() controller public key should be a string")), t);
                        if (o) throw Error(o.message);
                        let a = iV(n, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if (iO(s)) {
                            let {
                                message: e
                            } = iD("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            n = iV(r, "update()");
                        if (n) throw Error(n.message);
                        let s = iW(i.requiredNamespaces, r, "update()");
                        if (s) throw Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        var t;
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            request: i,
                            chainId: n,
                            expiry: s
                        } = e;
                        await this.isValidSessionTopic(r);
                        let {
                            namespaces: o
                        } = this.client.session.get(r);
                        if (!iF(o, n)) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `request() chainId: ${n}`);
                            throw Error(e)
                        }
                        if (iq(i) || !iM(i.method, !1)) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                        if (!(iM(t = i.method, !1) && (function(e, t) {
                                let r = [];
                                return Object.values(e).forEach(e => {
                                    iC(e.accounts).includes(t) && r.push(...e.methods)
                                }), r
                            })(o, n).includes(t))) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `request() method: ${i.method}`);
                            throw Error(e)
                        }
                        if (s && (!iz(s, !1) || !(s <= i3.max) || !(s >= i3.min))) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `request() expiry: ${s}. Expiry must be a number (in seconds) between ${i3.min} and ${i3.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            response: r
                        } = e;
                        if (await this.isValidSessionTopic(t), iq(r) || iq(r.result) && iq(r.error) || !iz(r.id, !1) || !iM(r.jsonrpc, !1)) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        var t;
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            event: i,
                            chainId: n
                        } = e;
                        await this.isValidSessionTopic(r);
                        let {
                            namespaces: s
                        } = this.client.session.get(r);
                        if (!iF(s, n)) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                            throw Error(e)
                        }
                        if (iq(i) || !iM(i.name, !1)) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                        if (!(iM(t = i.name, !1) && (function(e, t) {
                                let r = [];
                                return Object.values(e).forEach(e => {
                                    iC(e.accounts).includes(t) && r.push(...e.events)
                                }), r
                            })(s, n).includes(t))) {
                            let {
                                message: e
                            } = iD("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!iB(e)) {
                            let {
                                message: t
                            } = iD("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || rL,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.info(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!iM(e, !1)) {
                                let {
                                    message: r
                                } = iD("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = iD("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(rO.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let i = await this.client.core.crypto.decode(t, r);
                        try {
                            (0, tr.isJsonRpcRequest)(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : (0, tr.isJsonRpcResponse)(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: i
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(rU.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = function(e) {
                            let [t, r] = e.split(":"), i = {
                                id: void 0,
                                topic: void 0
                            };
                            if ("topic" === t && "string" == typeof r) i.topic = r;
                            else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
                            else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
                            return i
                        }(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, iD("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(rx.create, e => this.onPairingCreated(e))
                }
                isValidPairingTopic(e) {
                    if (!iM(e, !1)) {
                        let {
                            message: t
                        } = iD("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = iD("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (iO(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = iD("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!iM(e, !1)) {
                        let {
                            message: t
                        } = iD("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = iD("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (iO(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        let {
                            message: t
                        } = iD("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if (iM(e, !1)) {
                        let {
                            message: t
                        } = iD("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = iD("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if ("number" != typeof e) {
                        let {
                            message: t
                        } = iD("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = iD("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (iO(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = iD("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class na extends ii {
                constructor(e, t) {
                    super(e, t, "proposal", iZ), this.core = e, this.logger = t
                }
            }
            class nc extends ii {
                constructor(e, t) {
                    super(e, t, "session", iZ), this.core = e, this.logger = t
                }
            }
            class nu extends ii {
                constructor(e, t) {
                    super(e, t, "request", iZ, e => e.id), this.core = e, this.logger = t
                }
            }
            class nl extends es {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = iX.name, this.events = new n.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || iX.name, this.metadata = e ? .metadata || (0, d.D)() || {
                        name: "",
                        description: "",
                        url: "",
                        icons: [""]
                    };
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, G.pino)((0, G.getDefaultLoggerOptions)({
                        level: e ? .logger || iX.logger
                    }));
                    this.core = e ? .core || new iy(e), this.logger = (0, G.generateChildLogger)(t, this.name), this.session = new nc(this.core, this.logger), this.proposal = new na(this.core, this.logger), this.pendingRequest = new nu(this.core, this.logger), this.engine = new no(this)
                }
                static async init(e) {
                    let t = new nl(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, G.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }

            function nh(e = [], t = []) {
                return [...new Set([...e, ...t])]
            }

            function np(e) {
                return e.includes(":")
            }

            function nf(e) {
                return np(e) ? e.split(":")[0] : e
            }
            r(68571), Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let nd = {
                INVALID_METHOD: {
                    message: "Invalid method.",
                    code: 1001
                },
                INVALID_EVENT: {
                    message: "Invalid event.",
                    code: 1002
                },
                INVALID_UPDATE_REQUEST: {
                    message: "Invalid update request.",
                    code: 1003
                },
                INVALID_EXTEND_REQUEST: {
                    message: "Invalid extend request.",
                    code: 1004
                },
                INVALID_SESSION_SETTLE_REQUEST: {
                    message: "Invalid session settle request.",
                    code: 1005
                },
                UNAUTHORIZED_METHOD: {
                    message: "Unauthorized method.",
                    code: 3001
                },
                UNAUTHORIZED_EVENT: {
                    message: "Unauthorized event.",
                    code: 3002
                },
                UNAUTHORIZED_UPDATE_REQUEST: {
                    message: "Unauthorized update request.",
                    code: 3003
                },
                UNAUTHORIZED_EXTEND_REQUEST: {
                    message: "Unauthorized extend request.",
                    code: 3004
                },
                USER_REJECTED: {
                    message: "User rejected.",
                    code: 5e3
                },
                USER_REJECTED_CHAINS: {
                    message: "User rejected chains.",
                    code: 5001
                },
                USER_REJECTED_METHODS: {
                    message: "User rejected methods.",
                    code: 5002
                },
                USER_REJECTED_EVENTS: {
                    message: "User rejected events.",
                    code: 5003
                },
                UNSUPPORTED_CHAINS: {
                    message: "Unsupported chains.",
                    code: 5100
                },
                UNSUPPORTED_METHODS: {
                    message: "Unsupported methods.",
                    code: 5101
                },
                UNSUPPORTED_EVENTS: {
                    message: "Unsupported events.",
                    code: 5102
                },
                UNSUPPORTED_ACCOUNTS: {
                    message: "Unsupported accounts.",
                    code: 5103
                },
                UNSUPPORTED_NAMESPACE_KEY: {
                    message: "Unsupported namespace key.",
                    code: 5104
                },
                USER_DISCONNECTED: {
                    message: "User disconnected.",
                    code: 6e3
                },
                SESSION_SETTLEMENT_FAILED: {
                    message: "Session settlement failed.",
                    code: 7e3
                },
                WC_METHOD_UNSUPPORTED: {
                    message: "Unsupported wc_ method.",
                    code: 10001
                }
            };

            function ng(e, t) {
                let {
                    message: r,
                    code: i
                } = nd[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function ny(e, t) {
                return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
            }
            var nv = r(11236);
            let nm = "error",
                n_ = "wc@2:universal_provider:",
                nw = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var nb = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                nE = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(e, t) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        u = "[object Arguments]",
                        l = "[object Array]",
                        h = "[object Boolean]",
                        p = "[object Date]",
                        f = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        m = "[object Object]",
                        _ = "[object Promise]",
                        w = "[object RegExp]",
                        b = "[object Set]",
                        E = "[object String]",
                        I = "[object Symbol]",
                        S = "[object WeakMap]",
                        P = "[object ArrayBuffer]",
                        O = "[object DataView]",
                        R = "[object Float32Array]",
                        N = "[object Float64Array]",
                        T = "[object Int8Array]",
                        C = "[object Int16Array]",
                        A = "[object Int32Array]",
                        x = "[object Uint8Array]",
                        D = "[object Uint8ClampedArray]",
                        U = "[object Uint16Array]",
                        j = "[object Uint32Array]",
                        L = /\b__p \+= '';/g,
                        q = /\b(__p \+=) '' \+/g,
                        M = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        z = /&(?:amp|lt|gt|quot|#39);/g,
                        k = /[&<>"']/g,
                        $ = RegExp(z.source),
                        H = RegExp(k.source),
                        V = /<%-([\s\S]+?)%>/g,
                        K = /<%([\s\S]+?)%>/g,
                        B = /<%=([\s\S]+?)%>/g,
                        F = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        W = /^\w*$/,
                        G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        J = /[\\^$.*+?()[\]{}|]/g,
                        Q = RegExp(J.source),
                        Y = /^\s+/,
                        Z = /\s/,
                        X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ei = /[()=,{}\[\]\/\s]/,
                        en = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        eu = /^\[object .+?Constructor\]$/,
                        el = /^0o[0-7]+$/i,
                        eh = /^(?:0|[1-9]\d*)$/,
                        ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ef = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        em = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        e_ = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        ew = "\\ufe0e\\ufe0f",
                        eb = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eE = "['’]",
                        eI = "[" + eb + "]",
                        eS = "[" + ey + "]",
                        eP = "[" + em + "]",
                        eO = "[^" + eg + eb + "\\d+" + ev + em + e_ + "]",
                        eR = "\ud83c[\udffb-\udfff]",
                        eN = "[^" + eg + "]",
                        eT = "(?:\ud83c[\udde6-\uddff]){2}",
                        eC = "[\ud800-\udbff][\udc00-\udfff]",
                        eA = "[" + e_ + "]",
                        ex = "\\u200d",
                        eD = "(?:" + eP + "|" + eO + ")",
                        eU = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
                        ej = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
                        eL = "(?:" + eS + "|" + eR + ")?",
                        eq = "[" + ew + "]?",
                        eM = "(?:" + ex + "(?:" + [eN, eT, eC].join("|") + ")" + eq + eL + ")*",
                        ez = eq + eL + eM,
                        ek = "(?:" + ["[" + ev + "]", eT, eC].join("|") + ")" + ez,
                        e$ = "(?:" + [eN + eS + "?", eS, eT, eC, "[" + eg + "]"].join("|") + ")",
                        eH = RegExp(eE, "g"),
                        eV = RegExp(eS, "g"),
                        eK = RegExp(eR + "(?=" + eR + ")|" + e$ + ez, "g"),
                        eB = RegExp([eA + "?" + eP + "+" + eU + "(?=" + [eI, eA, "$"].join("|") + ")", "(?:" + eA + "|" + eO + ")+" + ej + "(?=" + [eI, eA + eD, "$"].join("|") + ")", eA + "?" + eD + "+" + eU, eA + "+" + ej, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", ek].join("|"), "g"),
                        eF = RegExp("[" + ex + eg + ey + ew + "]"),
                        eW = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eG = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eJ = -1,
                        eQ = {};
                    eQ[R] = eQ[N] = eQ[T] = eQ[C] = eQ[A] = eQ[x] = eQ[D] = eQ[U] = eQ[j] = !0, eQ[u] = eQ[l] = eQ[P] = eQ[h] = eQ[O] = eQ[p] = eQ[f] = eQ[d] = eQ[y] = eQ[v] = eQ[m] = eQ[w] = eQ[b] = eQ[E] = eQ[S] = !1;
                    var eY = {};
                    eY[u] = eY[l] = eY[P] = eY[O] = eY[h] = eY[p] = eY[R] = eY[N] = eY[T] = eY[C] = eY[A] = eY[y] = eY[v] = eY[m] = eY[w] = eY[b] = eY[E] = eY[I] = eY[x] = eY[D] = eY[U] = eY[j] = !0, eY[f] = eY[d] = eY[S] = !1;
                    var eZ = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eX = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof nb && nb && nb.Object === Object && nb,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e6 = e1 || e5 || Function("return this")(),
                        e3 = t && !t.nodeType && t,
                        e2 = e3 && e && !e.nodeType && e,
                        e4 = e2 && e2.exports === e3,
                        e8 = e4 && e1.process,
                        e9 = function() {
                            try {
                                return e2 && e2.require && e2.require("util").types || e8 && e8.binding && e8.binding("util")
                            } catch {}
                        }(),
                        e7 = e9 && e9.isArrayBuffer,
                        te = e9 && e9.isDate,
                        tt = e9 && e9.isMap,
                        tr = e9 && e9.isRegExp,
                        ti = e9 && e9.isSet,
                        tn = e9 && e9.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, i) {
                        for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
                            var o = e[n];
                            t(i, o, r(o), e)
                        }
                        return i
                    }

                    function ta(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function tu(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }

                    function tl(e, t) {
                        return !!(null == e ? 0 : e.length) && tw(e, t, 0) > -1
                    }

                    function th(e, t, r) {
                        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
                            if (r(t, e[i])) return !0;
                        return !1
                    }

                    function tp(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                        return n
                    }

                    function tf(e, t) {
                        for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                        return e
                    }

                    function td(e, t, r, i) {
                        var n = -1,
                            s = null == e ? 0 : e.length;
                        for (i && s && (r = e[++n]); ++n < s;) r = t(r, e[n], n, e);
                        return r
                    }

                    function tg(e, t, r, i) {
                        var n = null == e ? 0 : e.length;
                        for (i && n && (r = e[--n]); n--;) r = t(r, e[n], n, e);
                        return r
                    }

                    function ty(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tv = tS("length");

                    function tm(e, t, r) {
                        var i;
                        return r(e, function(e, r, n) {
                            if (t(e, r, n)) return i = r, !1
                        }), i
                    }

                    function t_(e, t, r, i) {
                        for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function tw(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var i = r - 1, n = e.length; ++i < n;)
                                if (e[i] === t) return i;
                            return -1
                        }(e, t, r) : t_(e, tE, r)
                    }

                    function tb(e, t, r, i) {
                        for (var n = r - 1, s = e.length; ++n < s;)
                            if (i(e[n], t)) return n;
                        return -1
                    }

                    function tE(e) {
                        return e != e
                    }

                    function tI(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tR(e, t) / r : a
                    }

                    function tS(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tP(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tO(e, t, r, i, n) {
                        return n(e, function(e, n, s) {
                            r = i ? (i = !1, e) : t(r, e, n, s)
                        }), r
                    }

                    function tR(e, t) {
                        for (var i, n = -1, s = e.length; ++n < s;) {
                            var o = t(e[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function tN(e, t) {
                        for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                        return i
                    }

                    function tT(e) {
                        return e && e.slice(0, tB(e) + 1).replace(Y, "")
                    }

                    function tC(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tA(e, t) {
                        return tp(t, function(t) {
                            return e[t]
                        })
                    }

                    function tx(e, t) {
                        return e.has(t)
                    }

                    function tD(e, t) {
                        for (var r = -1, i = e.length; ++r < i && tw(t, e[r], 0) > -1;);
                        return r
                    }

                    function tU(e, t) {
                        for (var r = e.length; r-- && tw(t, e[r], 0) > -1;);
                        return r
                    }
                    var tj = tP({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tL = tP({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tq(e) {
                        return "\\" + eZ[e]
                    }

                    function tM(e) {
                        return eF.test(e)
                    }

                    function tz(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, i) {
                            r[++t] = [i, e]
                        }), r
                    }

                    function tk(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function t$(e, t) {
                        for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function tH(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tV(e) {
                        return tM(e) ? function(e) {
                            for (var t = eK.lastIndex = 0; eK.test(e);) ++t;
                            return t
                        }(e) : tv(e)
                    }

                    function tK(e) {
                        return tM(e) ? e.match(eK) || [] : e.split("")
                    }

                    function tB(e) {
                        for (var t = e.length; t-- && Z.test(e.charAt(t)););
                        return t
                    }
                    var tF = tP({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tW = function e(t) {
                            var Z, eg, ey, ev, em = (t = null == t ? e6 : tW.defaults(e6.Object(), t, tW.pick(e6, eG))).Array,
                                e_ = t.Date,
                                ew = t.Error,
                                eb = t.Function,
                                eE = t.Math,
                                eI = t.Object,
                                eS = t.RegExp,
                                eP = t.String,
                                eO = t.TypeError,
                                eR = em.prototype,
                                eN = eb.prototype,
                                eT = eI.prototype,
                                eC = t["__core-js_shared__"],
                                eA = eN.toString,
                                ex = eT.hasOwnProperty,
                                eD = 0,
                                eU = (Z = /[^.]+$/.exec(eC && eC.keys && eC.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Z : "",
                                ej = eT.toString,
                                eL = eA.call(eI),
                                eq = e6._,
                                eM = eS("^" + eA.call(ex).replace(J, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                ez = e4 ? t.Buffer : r,
                                ek = t.Symbol,
                                e$ = t.Uint8Array,
                                eK = ez ? ez.allocUnsafe : r,
                                eF = tk(eI.getPrototypeOf, eI),
                                eZ = eI.create,
                                e1 = eT.propertyIsEnumerable,
                                e5 = eR.splice,
                                e3 = ek ? ek.isConcatSpreadable : r,
                                e2 = ek ? ek.iterator : r,
                                e8 = ek ? ek.toStringTag : r,
                                e9 = function() {
                                    try {
                                        var e = nd(eI, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tv = t.clearTimeout !== e6.clearTimeout && t.clearTimeout,
                                tP = e_ && e_.now !== e6.Date.now && e_.now,
                                tG = t.setTimeout !== e6.setTimeout && t.setTimeout,
                                tJ = eE.ceil,
                                tQ = eE.floor,
                                tY = eI.getOwnPropertySymbols,
                                tZ = ez ? ez.isBuffer : r,
                                tX = t.isFinite,
                                t0 = eR.join,
                                t1 = tk(eI.keys, eI),
                                t5 = eE.max,
                                t6 = eE.min,
                                t3 = e_.now,
                                t2 = t.parseInt,
                                t4 = eE.random,
                                t8 = eR.reverse,
                                t9 = nd(t, "DataView"),
                                t7 = nd(t, "Map"),
                                re = nd(t, "Promise"),
                                rt = nd(t, "Set"),
                                rr = nd(t, "WeakMap"),
                                ri = nd(eI, "create"),
                                rn = rr && new rr,
                                rs = {},
                                ro = nz(t9),
                                ra = nz(t7),
                                rc = nz(re),
                                ru = nz(rt),
                                rl = nz(rr),
                                rh = ek ? ek.prototype : r,
                                rp = rh ? rh.valueOf : r,
                                rf = rh ? rh.toString : r;

                            function rd(e) {
                                if (sF(e) && !sj(e) && !(e instanceof rm)) {
                                    if (e instanceof rv) return e;
                                    if (ex.call(e, "__wrapped__")) return nk(e)
                                }
                                return new rv(e)
                            }
                            var rg = function() {
                                function e() {}
                                return function(t) {
                                    if (!sB(t)) return {};
                                    if (eZ) return eZ(t);
                                    e.prototype = t;
                                    var i = new e;
                                    return e.prototype = r, i
                                }
                            }();

                            function ry() {}

                            function rv(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function rm(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function r_(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rE(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new rb; ++t < r;) this.add(e[t])
                            }

                            function rI(e) {
                                var t = this.__data__ = new rw(e);
                                this.size = t.size
                            }

                            function rS(e, t) {
                                var r = sj(e),
                                    i = !r && sU(e),
                                    n = !r && !i && sz(e),
                                    s = !r && !i && !n && s0(e),
                                    o = r || i || n || s,
                                    a = o ? tN(e.length, eP) : [],
                                    c = a.length;
                                for (var u in e)(t || ex.call(e, u)) && !(o && ("length" == u || n && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || nb(u, c))) && a.push(u);
                                return a
                            }

                            function rP(e) {
                                var t = e.length;
                                return t ? e[il(0, t - 1)] : r
                            }

                            function rO(e, t, i) {
                                (i === r || sA(e[t], i)) && (i !== r || t in e) || rA(e, t, i)
                            }

                            function rR(e, t, i) {
                                var n = e[t];
                                ex.call(e, t) && sA(n, i) && (i !== r || t in e) || rA(e, t, i)
                            }

                            function rN(e, t) {
                                for (var r = e.length; r--;)
                                    if (sA(e[r][0], t)) return r;
                                return -1
                            }

                            function rT(e, t, r, i) {
                                return rM(e, function(e, n, s) {
                                    t(i, e, r(e), s)
                                }), i
                            }

                            function rC(e, t) {
                                return e && iV(t, op(t), e)
                            }

                            function rA(e, t, r) {
                                "__proto__" == t && e9 ? e9(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rx(e, t) {
                                for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n;) s[i] = o ? r : oa(e, t[i]);
                                return s
                            }

                            function rD(e, t, i) {
                                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rU(e, t, i, n, s, o) {
                                var a, c = 1 & t,
                                    l = 2 & t,
                                    f = 4 & t;
                                if (i && (a = s ? i(e, n, s, o) : i(e)), a !== r) return a;
                                if (!sB(e)) return e;
                                var _ = sj(e);
                                if (_) {
                                    if (S = e.length, L = new e.constructor(S), S && "string" == typeof e[0] && ex.call(e, "index") && (L.index = e.index, L.input = e.input), a = L, !c) return iH(e, a)
                                } else {
                                    var S, L, q, M, z, k = nv(e),
                                        $ = k == d || k == g;
                                    if (sz(e)) return iL(e, c);
                                    if (k == m || k == u || $ && !s) {
                                        if (a = l || $ ? {} : n_(e), !c) return l ? (q = (z = a) && iV(e, of (e), z), iV(e, ny(e), q)) : (M = rC(a, e), iV(e, ng(e), M))
                                    } else {
                                        if (!eY[k]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var i, n, s = e.constructor;
                                            switch (t) {
                                                case P:
                                                    return iq(e);
                                                case h:
                                                case p:
                                                    return new s(+e);
                                                case O:
                                                    return i = r ? iq(e.buffer) : e.buffer, new e.constructor(i, e.byteOffset, e.byteLength);
                                                case R:
                                                case N:
                                                case T:
                                                case C:
                                                case A:
                                                case x:
                                                case D:
                                                case U:
                                                case j:
                                                    return iM(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case E:
                                                    return new s(e);
                                                case w:
                                                    return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, n;
                                                case b:
                                                    return new s;
                                                case I:
                                                    return rp ? eI(rp.call(e)) : {}
                                            }
                                        }(e, k, c)
                                    }
                                }
                                o || (o = new rI);
                                var H = o.get(e);
                                if (H) return H;
                                o.set(e, a), sY(e) ? e.forEach(function(r) {
                                    a.add(rU(r, t, i, r, e, o))
                                }) : sW(e) && e.forEach(function(r, n) {
                                    a.set(n, rU(r, t, i, n, e, o))
                                });
                                var V = f ? l ? na : no : l ? of : op,
                                    K = _ ? r : V(e);
                                return ta(K || e, function(r, n) {
                                    K && (r = e[n = r]), rR(a, n, rU(r, t, i, n, e, o))
                                }), a
                            }

                            function rj(e, t, i) {
                                var n = i.length;
                                if (null == e) return !n;
                                for (e = eI(e); n--;) {
                                    var s = i[n],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rL(e, t, n) {
                                if ("function" != typeof e) throw new eO(i);
                                return nx(function() {
                                    e.apply(r, n)
                                }, t)
                            }

                            function rq(e, t, r, i) {
                                var n = -1,
                                    s = tl,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    u = t.length;
                                if (!a) return c;
                                r && (t = tp(t, tC(r))), i ? (s = th, o = !1) : t.length >= 200 && (s = tx, o = !1, t = new rE(t));
                                e: for (; ++n < a;) {
                                    var l = e[n],
                                        h = null == r ? l : r(l);
                                    if (l = i || 0 !== l ? l : 0, o && h == h) {
                                        for (var p = u; p--;)
                                            if (t[p] === h) continue e;
                                        c.push(l)
                                    } else s(t, h, i) || c.push(l)
                                }
                                return c
                            }
                            rd.templateSettings = {
                                escape: V,
                                evaluate: K,
                                interpolate: B,
                                variable: "",
                                imports: {
                                    _: rd
                                }
                            }, rd.prototype = ry.prototype, rd.prototype.constructor = rd, rv.prototype = rg(ry.prototype), rv.prototype.constructor = rv, rm.prototype = rg(ry.prototype), rm.prototype.constructor = rm, r_.prototype.clear = function() {
                                this.__data__ = ri ? ri(null) : {}, this.size = 0
                            }, r_.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, r_.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ri) {
                                    var i = t[e];
                                    return i === n ? r : i
                                }
                                return ex.call(t, e) ? t[e] : r
                            }, r_.prototype.has = function(e) {
                                var t = this.__data__;
                                return ri ? t[e] !== r : ex.call(t, e)
                            }, r_.prototype.set = function(e, t) {
                                var i = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, i[e] = ri && t === r ? n : t, this
                            }, rw.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, rw.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rN(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, rw.prototype.get = function(e) {
                                var t = this.__data__,
                                    i = rN(t, e);
                                return i < 0 ? r : t[i][1]
                            }, rw.prototype.has = function(e) {
                                return rN(this.__data__, e) > -1
                            }, rw.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    i = rN(r, e);
                                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
                            }, rb.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new r_,
                                    map: new(t7 || rw),
                                    string: new r_
                                }
                            }, rb.prototype.delete = function(e) {
                                var t = np(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, rb.prototype.get = function(e) {
                                return np(this, e).get(e)
                            }, rb.prototype.has = function(e) {
                                return np(this, e).has(e)
                            }, rb.prototype.set = function(e, t) {
                                var r = np(this, e),
                                    i = r.size;
                                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
                            }, rE.prototype.add = rE.prototype.push = function(e) {
                                return this.__data__.set(e, n), this
                            }, rE.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rI.prototype.clear = function() {
                                this.__data__ = new rw, this.size = 0
                            }, rI.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rI.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rI.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rI.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof rw) {
                                    var i = r.__data__;
                                    if (!t7 || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new rb(i)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rM = iF(rF),
                                rz = iF(rW, !0);

                            function rk(e, t) {
                                var r = !0;
                                return rM(e, function(e, i, n) {
                                    return r = !!t(e, i, n)
                                }), r
                            }

                            function r$(e, t, i) {
                                for (var n = -1, s = e.length; ++n < s;) {
                                    var o = e[n],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !sX(a) : i(a, c))) var c = a,
                                        u = o
                                }
                                return u
                            }

                            function rH(e, t) {
                                var r = [];
                                return rM(e, function(e, i, n) {
                                    t(e, i, n) && r.push(e)
                                }), r
                            }

                            function rV(e, t, r, i, n) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = nw), n || (n = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rV(a, t - 1, r, i, n) : tf(n, a) : i || (n[n.length] = a)
                                }
                                return n
                            }
                            var rK = iW(),
                                rB = iW(!0);

                            function rF(e, t) {
                                return e && rK(e, t, op)
                            }

                            function rW(e, t) {
                                return e && rB(e, t, op)
                            }

                            function rG(e, t) {
                                return tu(t, function(t) {
                                    return sH(e[t])
                                })
                            }

                            function rJ(e, t) {
                                t = iD(t, e);
                                for (var i = 0, n = t.length; null != e && i < n;) e = e[nM(t[i++])];
                                return i && i == n ? e : r
                            }

                            function rQ(e, t, r) {
                                var i = t(e);
                                return sj(e) ? i : tf(i, r(e))
                            }

                            function rY(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e8 && e8 in eI(e) ? function(e) {
                                    var t = ex.call(e, e8),
                                        i = e[e8];
                                    try {
                                        e[e8] = r;
                                        var n = !0
                                    } catch {}
                                    var s = ej.call(e);
                                    return n && (t ? e[e8] = i : delete e[e8]), s
                                }(e) : ej.call(e)
                            }

                            function rZ(e, t) {
                                return e > t
                            }

                            function rX(e, t) {
                                return null != e && ex.call(e, t)
                            }

                            function r0(e, t) {
                                return null != e && t in eI(e)
                            }

                            function r1(e, t, i) {
                                for (var n = i ? th : tl, s = e[0].length, o = e.length, a = o, c = em(o), u = 1 / 0, l = []; a--;) {
                                    var h = e[a];
                                    a && t && (h = tp(h, tC(t))), u = t6(h.length, u), c[a] = !i && (t || s >= 120 && h.length >= 120) ? new rE(a && h) : r
                                }
                                h = e[0];
                                var p = -1,
                                    f = c[0];
                                e: for (; ++p < s && l.length < u;) {
                                    var d = h[p],
                                        g = t ? t(d) : d;
                                    if (d = i || 0 !== d ? d : 0, !(f ? tx(f, g) : n(l, g, i))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tx(y, g) : n(e[a], g, i))) continue e
                                        }
                                        f && f.push(g), l.push(d)
                                    }
                                }
                                return l
                            }

                            function r5(e, t, i) {
                                t = iD(t, e);
                                var n = null == (e = nT(e, t)) ? e : e[nM(nY(t))];
                                return null == n ? r : ts(n, e, i)
                            }

                            function r6(e) {
                                return sF(e) && rY(e) == u
                            }

                            function r3(e, t, i, n, s) {
                                return e === t || (null != e && null != t && (sF(e) || sF(t)) ? function(e, t, i, n, s, o) {
                                    var a = sj(e),
                                        c = sj(t),
                                        d = a ? l : nv(e),
                                        g = c ? l : nv(t);
                                    d = d == u ? m : d, g = g == u ? m : g;
                                    var _ = d == m,
                                        S = g == m,
                                        R = d == g;
                                    if (R && sz(e)) {
                                        if (!sz(t)) return !1;
                                        a = !0, _ = !1
                                    }
                                    if (R && !_) return o || (o = new rI), a || s0(e) ? nn(e, t, i, n, s, o) : function(e, t, r, i, n, s, o) {
                                        switch (r) {
                                            case O:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case P:
                                                return !(e.byteLength != t.byteLength || !s(new e$(e), new e$(t)));
                                            case h:
                                            case p:
                                            case v:
                                                return sA(+e, +t);
                                            case f:
                                                return e.name == t.name && e.message == t.message;
                                            case w:
                                            case E:
                                                return e == t + "";
                                            case y:
                                                var a = tz;
                                            case b:
                                                var c = 1 & i;
                                                if (a || (a = tH), e.size != t.size && !c) break;
                                                var u = o.get(e);
                                                if (u) return u == t;
                                                i |= 2, o.set(e, t);
                                                var l = nn(a(e), a(t), i, n, s, o);
                                                return o.delete(e), l;
                                            case I:
                                                if (rp) return rp.call(e) == rp.call(t)
                                        }
                                        return !1
                                    }(e, t, d, i, n, s, o);
                                    if (!(1 & i)) {
                                        var N = _ && ex.call(e, "__wrapped__"),
                                            T = S && ex.call(t, "__wrapped__");
                                        if (N || T) {
                                            var C = N ? e.value() : e,
                                                A = T ? t.value() : t;
                                            return o || (o = new rI), s(C, A, i, n, o)
                                        }
                                    }
                                    return !!R && (o || (o = new rI), function(e, t, i, n, s, o) {
                                        var a = 1 & i,
                                            c = no(e),
                                            u = c.length;
                                        if (u != no(t).length && !a) return !1;
                                        for (var l = u; l--;) {
                                            var h = c[l];
                                            if (!(a ? h in t : ex.call(t, h))) return !1
                                        }
                                        var p = o.get(e),
                                            f = o.get(t);
                                        if (p && f) return p == t && f == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++l < u;) {
                                            var y = e[h = c[l]],
                                                v = t[h];
                                            if (n) var m = a ? n(v, y, h, t, e, o) : n(y, v, h, e, t, o);
                                            if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == h)
                                        }
                                        if (d && !g) {
                                            var _ = e.constructor,
                                                w = t.constructor;
                                            _ != w && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, i, n, s, o))
                                }(e, t, i, n, r3, s) : e != e && t != t)
                            }

                            function r2(e, t, i, n) {
                                var s = i.length,
                                    o = s,
                                    a = !n;
                                if (null == e) return !o;
                                for (e = eI(e); s--;) {
                                    var c = i[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var u = (c = i[s])[0],
                                        l = e[u],
                                        h = c[1];
                                    if (a && c[2]) {
                                        if (l === r && !(u in e)) return !1
                                    } else {
                                        var p = new rI;
                                        if (n) var f = n(l, h, u, e, t, p);
                                        if (!(f === r ? r3(h, l, 3, n, p) : f)) return !1
                                    }
                                }
                                return !0
                            }

                            function r4(e) {
                                return !(!sB(e) || eU && eU in e) && (sH(e) ? eM : eu).test(nz(e))
                            }

                            function r8(e) {
                                return "function" == typeof e ? e : null == e ? oM : "object" == typeof e ? sj(e) ? ir(e[0], e[1]) : it(e) : oW(e)
                            }

                            function r9(e) {
                                if (!nO(e)) return t1(e);
                                var t = [];
                                for (var r in eI(e)) ex.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function r7(e, t) {
                                return e < t
                            }

                            function ie(e, t) {
                                var r = -1,
                                    i = sq(e) ? em(e.length) : [];
                                return rM(e, function(e, n, s) {
                                    i[++r] = t(e, n, s)
                                }), i
                            }

                            function it(e) {
                                var t = nf(e);
                                return 1 == t.length && t[0][2] ? nR(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r2(r, e, t)
                                }
                            }

                            function ir(e, t) {
                                var i;
                                return nI(e) && (i = t) == i && !sB(i) ? nR(nM(e), t) : function(i) {
                                    var n = oa(i, e);
                                    return n === r && n === t ? oc(i, e) : r3(t, n, 3)
                                }
                            }

                            function ii(e, t, i, n, s) {
                                e !== t && rK(t, function(o, a) {
                                    if (s || (s = new rI), sB(o)) ! function(e, t, i, n, s, o, a) {
                                        var c = nC(e, i),
                                            u = nC(t, i),
                                            l = a.get(u);
                                        if (l) {
                                            rO(e, i, l);
                                            return
                                        }
                                        var h = o ? o(c, u, i + "", e, t, a) : r,
                                            p = h === r;
                                        if (p) {
                                            var f = sj(u),
                                                d = !f && sz(u),
                                                g = !f && !d && s0(u);
                                            h = u, f || d || g ? sj(c) ? h = c : sM(c) ? h = iH(c) : d ? (p = !1, h = iL(u, !0)) : g ? (p = !1, h = iM(u, !0)) : h = [] : sJ(u) || sU(u) ? (h = c, sU(c) ? h = s9(c) : (!sB(c) || sH(c)) && (h = n_(u))) : p = !1
                                        }
                                        p && (a.set(u, h), s(h, u, n, o, a), a.delete(u)), rO(e, i, h)
                                    }(e, t, a, i, ii, n, s);
                                    else {
                                        var c = n ? n(nC(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rO(e, a, c)
                                    }
                                }, of )
                            }

                            function is(e, t) {
                                var i = e.length;
                                if (i) return nb(t += t < 0 ? i : 0, i) ? e[t] : r
                            }

                            function io(e, t, r) {
                                t = t.length ? tp(t, function(e) {
                                    return sj(e) ? function(t) {
                                        return rJ(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [oM];
                                var i = -1;
                                return t = tp(t, tC(nh())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(ie(e, function(e, r, n) {
                                        return {
                                            criteria: tp(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++i,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                                                var c = iz(n[i], s[i]);
                                                if (c) {
                                                    if (i >= a) return c;
                                                    return c * ("desc" == r[i] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function ia(e, t, r) {
                                for (var i = -1, n = t.length, s = {}; ++i < n;) {
                                    var o = t[i],
                                        a = rJ(e, o);
                                    r(a, o) && id(s, iD(o, e), a)
                                }
                                return s
                            }

                            function ic(e, t, r, i) {
                                var n = i ? tb : tw,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = iH(t)), r && (a = tp(e, tC(r))); ++s < o;)
                                    for (var c = 0, u = t[s], l = r ? r(u) : u;
                                        (c = n(a, l, c, i)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function iu(e, t) {
                                for (var r = e ? t.length : 0, i = r - 1; r--;) {
                                    var n = t[r];
                                    if (r == i || n !== s) {
                                        var s = n;
                                        nb(n) ? e5.call(e, n, 1) : iP(e, n)
                                    }
                                }
                                return e
                            }

                            function il(e, t) {
                                return e + tQ(t4() * (t - e + 1))
                            }

                            function ih(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tQ(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function ip(e, t) {
                                return nD(nN(e, t, oM), e + "")
                            }

                            function id(e, t, i, n) {
                                if (!sB(e)) return e;
                                t = iD(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var u = nM(t[s]),
                                        l = i;
                                    if ("__proto__" === u || "constructor" === u || "prototype" === u) break;
                                    if (s != a) {
                                        var h = c[u];
                                        (l = n ? n(h, u, c) : r) === r && (l = sB(h) ? h : nb(t[s + 1]) ? [] : {})
                                    }
                                    rR(c, u, l), c = c[u]
                                }
                                return e
                            }
                            var ig = rn ? function(e, t) {
                                    return rn.set(e, t), e
                                } : oM,
                                iy = e9 ? function(e, t) {
                                    return e9(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: oj(t),
                                        writable: !0
                                    })
                                } : oM;

                            function iv(e, t, r) {
                                var i = -1,
                                    n = e.length;
                                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = em(n); ++i < n;) s[i] = e[i + t];
                                return s
                            }

                            function im(e, t) {
                                var r;
                                return rM(e, function(e, i, n) {
                                    return !(r = t(e, i, n))
                                }), !!r
                            }

                            function i_(e, t, r) {
                                var i = 0,
                                    n = null == e ? i : e.length;
                                if ("number" == typeof t && t == t && n <= 2147483647) {
                                    for (; i < n;) {
                                        var s = i + n >>> 1,
                                            o = e[s];
                                        null !== o && !sX(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                                    }
                                    return n
                                }
                                return iw(e, t, oM, r)
                            }

                            function iw(e, t, i, n) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = i(t);
                                for (var a = t != t, c = null === t, u = sX(t), l = t === r; s < o;) {
                                    var h = tQ((s + o) / 2),
                                        p = i(e[h]),
                                        f = p !== r,
                                        d = null === p,
                                        g = p == p,
                                        y = sX(p);
                                    if (a) var v = n || g;
                                    else v = l ? g && (n || f) : c ? g && f && (n || !d) : u ? g && f && !d && (n || !y) : !d && !y && (n ? p <= t : p < t);
                                    v ? s = h + 1 : o = h
                                }
                                return t6(o, 4294967294)
                            }

                            function ib(e, t) {
                                for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sA(a, c)) {
                                        var c = a;
                                        s[n++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function iE(e) {
                                return "number" == typeof e ? e : sX(e) ? a : +e
                            }

                            function iI(e) {
                                if ("string" == typeof e) return e;
                                if (sj(e)) return tp(e, iI) + "";
                                if (sX(e)) return rf ? rf.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iS(e, t, r) {
                                var i = -1,
                                    n = tl,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, n = th;
                                else if (s >= 200) {
                                    var u = t ? null : i9(e);
                                    if (u) return tH(u);
                                    o = !1, n = tx, c = new rE
                                } else c = t ? [] : a;
                                e: for (; ++i < s;) {
                                    var l = e[i],
                                        h = t ? t(l) : l;
                                    if (l = r || 0 !== l ? l : 0, o && h == h) {
                                        for (var p = c.length; p--;)
                                            if (c[p] === h) continue e;
                                        t && c.push(h), a.push(l)
                                    } else n(c, h, r) || (c !== a && c.push(h), a.push(l))
                                }
                                return a
                            }

                            function iP(e, t) {
                                return t = iD(t, e), null == (e = nT(e, t)) || delete e[nM(nY(t))]
                            }

                            function iO(e, t, r, i) {
                                return id(e, t, r(rJ(e, t)), i)
                            }

                            function iR(e, t, r, i) {
                                for (var n = e.length, s = i ? n : -1;
                                    (i ? s-- : ++s < n) && t(e[s], s, e););
                                return r ? iv(e, i ? 0 : s, i ? s + 1 : n) : iv(e, i ? s + 1 : 0, i ? n : s)
                            }

                            function iN(e, t) {
                                var r = e;
                                return r instanceof rm && (r = r.value()), td(t, function(e, t) {
                                    return t.func.apply(t.thisArg, tf([e], t.args))
                                }, r)
                            }

                            function iT(e, t, r) {
                                var i = e.length;
                                if (i < 2) return i ? iS(e[0]) : [];
                                for (var n = -1, s = em(i); ++n < i;)
                                    for (var o = e[n], a = -1; ++a < i;) a != n && (s[n] = rq(s[n] || o, e[a], t, r));
                                return iS(rV(s, 1), t, r)
                            }

                            function iC(e, t, i) {
                                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                                    var c = n < o ? t[n] : r;
                                    i(a, e[n], c)
                                }
                                return a
                            }

                            function iA(e) {
                                return sM(e) ? e : []
                            }

                            function ix(e) {
                                return "function" == typeof e ? e : oM
                            }

                            function iD(e, t) {
                                return sj(e) ? e : nI(e, t) ? [e] : nq(s7(e))
                            }

                            function iU(e, t, i) {
                                var n = e.length;
                                return i = i === r ? n : i, !t && i >= n ? e : iv(e, t, i)
                            }
                            var ij = tv || function(e) {
                                return e6.clearTimeout(e)
                            };

                            function iL(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    i = eK ? eK(r) : new e.constructor(r);
                                return e.copy(i), i
                            }

                            function iq(e) {
                                var t = new e.constructor(e.byteLength);
                                return new e$(t).set(new e$(e)), t
                            }

                            function iM(e, t) {
                                var r = t ? iq(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function iz(e, t) {
                                if (e !== t) {
                                    var i = e !== r,
                                        n = null === e,
                                        s = e == e,
                                        o = sX(e),
                                        a = t !== r,
                                        c = null === t,
                                        u = t == t,
                                        l = sX(t);
                                    if (!c && !l && !o && e > t || o && a && u && !c && !l || n && a && u || !i && u || !s) return 1;
                                    if (!n && !o && !l && e < t || l && i && s && !n && !o || c && i && s || !a && s || !u) return -1
                                }
                                return 0
                            }

                            function ik(e, t, r, i) {
                                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, u = t5(s - o, 0), l = em(c + u), h = !i; ++a < c;) l[a] = t[a];
                                for (; ++n < o;)(h || n < s) && (l[r[n]] = e[n]);
                                for (; u--;) l[a++] = e[n++];
                                return l
                            }

                            function i$(e, t, r, i) {
                                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, l = t5(s - a, 0), h = em(l + u), p = !i; ++n < l;) h[n] = e[n];
                                for (var f = n; ++c < u;) h[f + c] = t[c];
                                for (; ++o < a;)(p || n < s) && (h[f + r[o]] = e[n++]);
                                return h
                            }

                            function iH(e, t) {
                                var r = -1,
                                    i = e.length;
                                for (t || (t = em(i)); ++r < i;) t[r] = e[r];
                                return t
                            }

                            function iV(e, t, i, n) {
                                var s = !i;
                                i || (i = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        u = n ? n(i[c], e[c], c, i, e) : r;
                                    u === r && (u = e[c]), s ? rA(i, c, u) : rR(i, c, u)
                                }
                                return i
                            }

                            function iK(e, t) {
                                return function(r, i) {
                                    var n = sj(r) ? to : rT,
                                        s = t ? t() : {};
                                    return n(r, e, nh(i, 2), s)
                                }
                            }

                            function iB(e) {
                                return ip(function(t, i) {
                                    var n = -1,
                                        s = i.length,
                                        o = s > 1 ? i[s - 1] : r,
                                        a = s > 2 ? i[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && nE(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), t = eI(t); ++n < s;) {
                                        var c = i[n];
                                        c && e(t, c, n, o)
                                    }
                                    return t
                                })
                            }

                            function iF(e, t) {
                                return function(r, i) {
                                    if (null == r) return r;
                                    if (!sq(r)) return e(r, i);
                                    for (var n = r.length, s = t ? n : -1, o = eI(r);
                                        (t ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                    return r
                                }
                            }

                            function iW(e) {
                                return function(t, r, i) {
                                    for (var n = -1, s = eI(t), o = i(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++n];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function iG(e) {
                                return function(t) {
                                    var i = tM(t = s7(t)) ? tK(t) : r,
                                        n = i ? i[0] : t.charAt(0),
                                        s = i ? iU(i, 1).join("") : t.slice(1);
                                    return n[e]() + s
                                }
                            }

                            function iJ(e) {
                                return function(t) {
                                    return td(ox(oS(t).replace(eH, "")), e, "")
                                }
                            }

                            function iQ(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = rg(e.prototype),
                                        i = e.apply(r, t);
                                    return sB(i) ? i : r
                                }
                            }

                            function iY(e) {
                                return function(t, i, n) {
                                    var s = eI(t);
                                    if (!sq(t)) {
                                        var o = nh(i, 3);
                                        t = op(t), i = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, i, n);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function iZ(e) {
                                return ns(function(t) {
                                    var n = t.length,
                                        s = n,
                                        o = rv.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eO(i);
                                        if (o && !c && "wrapper" == nu(a)) var c = new rv([], !0)
                                    }
                                    for (s = c ? s : n; ++s < n;) {
                                        var u = nu(a = t[s]),
                                            l = "wrapper" == u ? nc(a) : r;
                                        c = l && nS(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[nu(l[0])].apply(c, l[3]) : 1 == a.length && nS(a) ? c[u]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && sj(r)) return c.plant(r).value();
                                        for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;) s = t[i].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function iX(e, t, i, n, s, o, a, c, u, l) {
                                var h = 128 & t,
                                    p = 1 & t,
                                    f = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = f ? r : iQ(e);
                                return function v() {
                                    for (var m = arguments.length, _ = em(m), w = m; w--;) _[w] = arguments[w];
                                    if (d) var b = nl(v),
                                        E = function(e, t) {
                                            for (var r = e.length, i = 0; r--;) e[r] === t && ++i;
                                            return i
                                        }(_, b);
                                    if (n && (_ = ik(_, n, s, d)), o && (_ = i$(_, o, a, d)), m -= E, d && m < l) {
                                        var I = t$(_, b);
                                        return i4(e, t, iX, v.placeholder, i, _, I, c, u, l - m)
                                    }
                                    var S = p ? i : this,
                                        P = f ? S[e] : e;
                                    return m = _.length, c ? _ = function(e, t) {
                                        for (var i = e.length, n = t6(t.length, i), s = iH(e); n--;) {
                                            var o = t[n];
                                            e[n] = nb(o, i) ? s[o] : r
                                        }
                                        return e
                                    }(_, c) : g && m > 1 && _.reverse(), h && u < m && (_.length = u), this && this !== e6 && this instanceof v && (P = y || iQ(P)), P.apply(S, _)
                                }
                            }

                            function i0(e, t) {
                                return function(r, i) {
                                    var n, s;
                                    return n = t(i), s = {}, rF(r, function(t, r, i) {
                                        e(s, n(t), r, i)
                                    }), s
                                }
                            }

                            function i1(e, t) {
                                return function(i, n) {
                                    var s;
                                    if (i === r && n === r) return t;
                                    if (i !== r && (s = i), n !== r) {
                                        if (s === r) return n;
                                        "string" == typeof i || "string" == typeof n ? (i = iI(i), n = iI(n)) : (i = iE(i), n = iE(n)), s = e(i, n)
                                    }
                                    return s
                                }
                            }

                            function i5(e) {
                                return ns(function(t) {
                                    return t = tp(t, tC(nh())), ip(function(r) {
                                        var i = this;
                                        return e(t, function(e) {
                                            return ts(e, i, r)
                                        })
                                    })
                                })
                            }

                            function i6(e, t) {
                                var i = (t = t === r ? " " : iI(t)).length;
                                if (i < 2) return i ? ih(t, e) : t;
                                var n = ih(t, tJ(e / tV(t)));
                                return tM(t) ? iU(tK(n), 0, e).join("") : n.slice(0, e)
                            }

                            function i3(e) {
                                return function(t, i, n) {
                                    return n && "number" != typeof n && nE(t, i, n) && (i = n = r), t = s3(t), i === r ? (i = t, t = 0) : i = s3(i), n = n === r ? t < i ? 1 : -1 : s3(n),
                                        function(e, t, r, i) {
                                            for (var n = -1, s = t5(tJ((t - e) / (r || 1)), 0), o = em(s); s--;) o[i ? s : ++n] = e, e += r;
                                            return o
                                        }(t, i, n, e)
                                }
                            }

                            function i2(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = s8(t), r = s8(r)), e(t, r)
                                }
                            }

                            function i4(e, t, i, n, s, o, a, c, u, l) {
                                var h = 8 & t,
                                    p = h ? a : r,
                                    f = h ? r : a,
                                    d = h ? o : r,
                                    g = h ? r : o;
                                t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
                                var y = [e, t, s, d, p, g, f, c, u, l],
                                    v = i.apply(r, y);
                                return nS(e) && nA(v, y), v.placeholder = n, nU(v, e, t)
                            }

                            function i8(e) {
                                var t = eE[e];
                                return function(e, r) {
                                    if (e = s8(e), (r = null == r ? 0 : t6(s2(r), 292)) && tX(e)) {
                                        var i = (s7(e) + "e").split("e");
                                        return +((i = (s7(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var i9 = rt && 1 / tH(new rt([, -0]))[1] == o ? function(e) {
                                return new rt(e)
                            } : oV;

                            function i7(e) {
                                return function(t) {
                                    var r, i, n = nv(t);
                                    return n == y ? tz(t) : n == b ? (r = -1, i = Array(t.size), t.forEach(function(e) {
                                        i[++r] = [e, e]
                                    }), i) : tp(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function ne(e, t, n, o, a, c, u, l) {
                                var h = 2 & t;
                                if (!h && "function" != typeof e) throw new eO(i);
                                var p = o ? o.length : 0;
                                if (p || (t &= -97, o = a = r), u = u === r ? u : t5(s2(u), 0), l = l === r ? l : s2(l), p -= a ? a.length : 0, 64 & t) {
                                    var f = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = h ? r : nc(e),
                                    y = [e, t, n, o, a, f, d, c, u, l];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            i = t[1],
                                            n = r | i,
                                            o = n < 131,
                                            a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & i && (e[2] = t[2], n |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var u = e[3];
                                                e[3] = u ? ik(u, c, t[4]) : c, e[4] = u ? t$(e[3], s) : t[4]
                                            }(c = t[5]) && (u = e[5], e[5] = u ? i$(u, c, t[6]) : c, e[6] = u ? t$(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & i && (e[8] = null == e[8] ? t[8] : t6(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = n
                                        }
                                    }(y, g), e = y[0], t = y[1], n = y[2], o = y[3], a = y[4], (l = y[9] = y[9] === r ? h ? 0 : e.length : t5(y[9] - p, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, m = t, _ = l, w = iQ(v), x = function e() {
                                    for (var t = arguments.length, i = em(t), n = t, s = nl(e); n--;) i[n] = arguments[n];
                                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : t$(i, s);
                                    return (t -= o.length) < _ ? i4(v, m, iX, e.placeholder, r, i, o, r, r, _ - t) : ts(this && this !== e6 && this instanceof e ? w : v, this, i)
                                }) : 32 != t && 33 != t || a.length ? x = iX.apply(r, y) : (b = e, E = t, I = n, S = o, P = 1 & E, O = iQ(b), x = function e() {
                                    for (var t = -1, r = arguments.length, i = -1, n = S.length, s = em(n + r), o = this && this !== e6 && this instanceof e ? O : b; ++i < n;) s[i] = S[i];
                                    for (; r--;) s[i++] = arguments[++t];
                                    return ts(o, P ? I : this, s)
                                });
                                else var v, m, _, w, b, E, I, S, P, O, R, N, T, C, A, x = (R = e, N = t, T = n, C = 1 & N, A = iQ(R), function e() {
                                    return (this && this !== e6 && this instanceof e ? A : R).apply(C ? T : this, arguments)
                                });
                                return nU((g ? ig : nA)(x, y), e, t)
                            }

                            function nt(e, t, i, n) {
                                return e === r || sA(e, eT[i]) && !ex.call(n, i) ? t : e
                            }

                            function nr(e, t, i, n, s, o) {
                                return sB(e) && sB(t) && (o.set(t, e), ii(e, t, r, nr, o), o.delete(t)), e
                            }

                            function ni(e) {
                                return sJ(e) ? r : e
                            }

                            function nn(e, t, i, n, s, o) {
                                var a = 1 & i,
                                    c = e.length,
                                    u = t.length;
                                if (c != u && !(a && u > c)) return !1;
                                var l = o.get(e),
                                    h = o.get(t);
                                if (l && h) return l == t && h == e;
                                var p = -1,
                                    f = !0,
                                    d = 2 & i ? new rE : r;
                                for (o.set(e, t), o.set(t, e); ++p < c;) {
                                    var g = e[p],
                                        y = t[p];
                                    if (n) var v = a ? n(y, g, p, t, e, o) : n(g, y, p, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        f = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!ty(t, function(e, t) {
                                                if (!tx(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t)
                                            })) {
                                            f = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, i, n, o))) {
                                        f = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), f
                            }

                            function ns(e) {
                                return nD(nN(e, r, nF), e + "")
                            }

                            function no(e) {
                                return rQ(e, op, ng)
                            }

                            function na(e) {
                                return rQ(e, of , ny)
                            }
                            var nc = rn ? function(e) {
                                return rn.get(e)
                            } : oV;

                            function nu(e) {
                                for (var t = e.name + "", r = rs[t], i = ex.call(rs, t) ? r.length : 0; i--;) {
                                    var n = r[i],
                                        s = n.func;
                                    if (null == s || s == e) return n.name
                                }
                                return t
                            }

                            function nl(e) {
                                return (ex.call(rd, "placeholder") ? rd : e).placeholder
                            }

                            function nh() {
                                var e = rd.iteratee || oz;
                                return e = e === oz ? r8 : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function np(e, t) {
                                var r, i = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                            }

                            function nf(e) {
                                for (var t = op(e), r = t.length; r--;) {
                                    var i = t[r],
                                        n = e[i];
                                    t[r] = [i, n, n == n && !sB(n)]
                                }
                                return t
                            }

                            function nd(e, t) {
                                var i = null == e ? r : e[t];
                                return r4(i) ? i : r
                            }
                            var ng = tY ? function(e) {
                                    return null == e ? [] : tu(tY(e = eI(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : oQ,
                                ny = tY ? function(e) {
                                    for (var t = []; e;) tf(t, ng(e)), e = eF(e);
                                    return t
                                } : oQ,
                                nv = rY;

                            function nm(e, t, r) {
                                t = iD(t, e);
                                for (var i = -1, n = t.length, s = !1; ++i < n;) {
                                    var o = nM(t[i]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sK(n) && nb(o, n) && (sj(e) || sU(e))
                            }

                            function n_(e) {
                                return "function" != typeof e.constructor || nO(e) ? {} : rg(eF(e))
                            }

                            function nw(e) {
                                return sj(e) || sU(e) || !!(e3 && e && e[e3])
                            }

                            function nb(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && eh.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function nE(e, t, r) {
                                if (!sB(r)) return !1;
                                var i = typeof t;
                                return ("number" == i ? !!(sq(r) && nb(t, r.length)) : "string" == i && t in r) && sA(r[t], e)
                            }

                            function nI(e, t) {
                                if (sj(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || sX(e)) || W.test(e) || !F.test(e) || null != t && e in eI(t)
                            }

                            function nS(e) {
                                var t = nu(e),
                                    r = rd[t];
                                if ("function" != typeof r || !(t in rm.prototype)) return !1;
                                if (e === r) return !0;
                                var i = nc(r);
                                return !!i && e === i[0]
                            }(t9 && nv(new t9(new ArrayBuffer(1))) != O || t7 && nv(new t7) != y || re && nv(re.resolve()) != _ || rt && nv(new rt) != b || rr && nv(new rr) != S) && (nv = function(e) {
                                var t = rY(e),
                                    i = t == m ? e.constructor : r,
                                    n = i ? nz(i) : "";
                                if (n) switch (n) {
                                    case ro:
                                        return O;
                                    case ra:
                                        return y;
                                    case rc:
                                        return _;
                                    case ru:
                                        return b;
                                    case rl:
                                        return S
                                }
                                return t
                            });
                            var nP = eC ? sH : oY;

                            function nO(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || eT)
                            }

                            function nR(e, t) {
                                return function(i) {
                                    return null != i && i[e] === t && (t !== r || e in eI(i))
                                }
                            }

                            function nN(e, t, i) {
                                return t = t5(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, n = -1, s = t5(r.length - t, 0), o = em(s); ++n < s;) o[n] = r[t + n];
                                        n = -1;
                                        for (var a = em(t + 1); ++n < t;) a[n] = r[n];
                                        return a[t] = i(o), ts(e, this, a)
                                    }
                            }

                            function nT(e, t) {
                                return t.length < 2 ? e : rJ(e, iv(t, 0, -1))
                            }

                            function nC(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var nA = nj(ig),
                                nx = tG || function(e, t) {
                                    return e6.setTimeout(e, t)
                                },
                                nD = nj(iy);

                            function nU(e, t, r) {
                                var i, n, s = t + "";
                                return nD(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var i = r - 1;
                                    return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(X, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !tl(i, t) && i.push(t)
                                }), i.sort())))
                            }

                            function nj(e) {
                                var t = 0,
                                    i = 0;
                                return function() {
                                    var n = t3(),
                                        s = 16 - (n - i);
                                    if (i = n, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function nL(e, t) {
                                var i = -1,
                                    n = e.length,
                                    s = n - 1;
                                for (t = t === r ? n : t; ++i < t;) {
                                    var o = il(i, s),
                                        a = e[o];
                                    e[o] = e[i], e[i] = a
                                }
                                return e.length = t, e
                            }
                            var nq = (ey = (eg = sP(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(G, function(e, r, i, n) {
                                    t.push(i ? n.replace(en, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function nM(e) {
                                if ("string" == typeof e || sX(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function nz(e) {
                                if (null != e) {
                                    try {
                                        return eA.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function nk(e) {
                                if (e instanceof rm) return e.clone();
                                var t = new rv(e.__wrapped__, e.__chain__);
                                return t.__actions__ = iH(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var n$ = ip(function(e, t) {
                                    return sM(e) ? rq(e, rV(t, 1, sM, !0)) : []
                                }),
                                nH = ip(function(e, t) {
                                    var i = nY(t);
                                    return sM(i) && (i = r), sM(e) ? rq(e, rV(t, 1, sM, !0), nh(i, 2)) : []
                                }),
                                nV = ip(function(e, t) {
                                    var i = nY(t);
                                    return sM(i) && (i = r), sM(e) ? rq(e, rV(t, 1, sM, !0), r, i) : []
                                });

                            function nK(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), t_(e, nh(t, 3), n)
                            }

                            function nB(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n - 1;
                                return i !== r && (s = s2(i), s = i < 0 ? t5(n + s, 0) : t6(s, n - 1)), t_(e, nh(t, 3), s, !0)
                            }

                            function nF(e) {
                                return (null == e ? 0 : e.length) ? rV(e, 1) : []
                            }

                            function nW(e) {
                                return e && e.length ? e[0] : r
                            }
                            var nG = ip(function(e) {
                                    var t = tp(e, iA);
                                    return t.length && t[0] === e[0] ? r1(t) : []
                                }),
                                nJ = ip(function(e) {
                                    var t = nY(e),
                                        i = tp(e, iA);
                                    return t === nY(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? r1(i, nh(t, 2)) : []
                                }),
                                nQ = ip(function(e) {
                                    var t = nY(e),
                                        i = tp(e, iA);
                                    return (t = "function" == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r1(i, r, t) : []
                                });

                            function nY(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var nZ = ip(nX);

                            function nX(e, t) {
                                return e && e.length && t && t.length ? ic(e, t) : e
                            }
                            var n0 = ns(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    i = rx(e, t);
                                return iu(e, tp(t, function(e) {
                                    return nb(e, r) ? +e : e
                                }).sort(iz)), i
                            });

                            function n1(e) {
                                return null == e ? e : t8.call(e)
                            }
                            var n5 = ip(function(e) {
                                    return iS(rV(e, 1, sM, !0))
                                }),
                                n6 = ip(function(e) {
                                    var t = nY(e);
                                    return sM(t) && (t = r), iS(rV(e, 1, sM, !0), nh(t, 2))
                                }),
                                n3 = ip(function(e) {
                                    var t = nY(e);
                                    return t = "function" == typeof t ? t : r, iS(rV(e, 1, sM, !0), r, t)
                                });

                            function n2(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = tu(e, function(e) {
                                    if (sM(e)) return t = t5(e.length, t), !0
                                }), tN(t, function(t) {
                                    return tp(e, tS(t))
                                })
                            }

                            function n4(e, t) {
                                if (!(e && e.length)) return [];
                                var i = n2(e);
                                return null == t ? i : tp(i, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var n8 = ip(function(e, t) {
                                    return sM(e) ? rq(e, t) : []
                                }),
                                n9 = ip(function(e) {
                                    return iT(tu(e, sM))
                                }),
                                n7 = ip(function(e) {
                                    var t = nY(e);
                                    return sM(t) && (t = r), iT(tu(e, sM), nh(t, 2))
                                }),
                                se = ip(function(e) {
                                    var t = nY(e);
                                    return t = "function" == typeof t ? t : r, iT(tu(e, sM), r, t)
                                }),
                                st = ip(n2),
                                sr = ip(function(e) {
                                    var t = e.length,
                                        i = t > 1 ? e[t - 1] : r;
                                    return i = "function" == typeof i ? (e.pop(), i) : r, n4(e, i)
                                });

                            function si(e) {
                                var t = rd(e);
                                return t.__chain__ = !0, t
                            }

                            function sn(e, t) {
                                return t(e)
                            }
                            var ss = ns(function(e) {
                                    var t = e.length,
                                        i = t ? e[0] : 0,
                                        n = this.__wrapped__,
                                        s = function(t) {
                                            return rx(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && n instanceof rm && nb(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                                        func: sn,
                                        args: [s],
                                        thisArg: r
                                    }), new rv(n, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                so = iK(function(e, t, r) {
                                    ex.call(e, r) ? ++e[r] : rA(e, r, 1)
                                }),
                                sa = iY(nK),
                                sc = iY(nB);

                            function su(e, t) {
                                return (sj(e) ? ta : rM)(e, nh(t, 3))
                            }

                            function sl(e, t) {
                                return (sj(e) ? function(e, t) {
                                    for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                                    return e
                                } : rz)(e, nh(t, 3))
                            }
                            var sh = iK(function(e, t, r) {
                                    ex.call(e, r) ? e[r].push(t) : rA(e, r, [t])
                                }),
                                sp = ip(function(e, t, r) {
                                    var i = -1,
                                        n = "function" == typeof t,
                                        s = sq(e) ? em(e.length) : [];
                                    return rM(e, function(e) {
                                        s[++i] = n ? ts(t, e, r) : r5(e, t, r)
                                    }), s
                                }),
                                sf = iK(function(e, t, r) {
                                    rA(e, r, t)
                                });

                            function sd(e, t) {
                                return (sj(e) ? tp : ie)(e, nh(t, 3))
                            }
                            var sg = iK(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sy = ip(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && nE(e, t[0], t[1]) ? t = [] : r > 2 && nE(t[0], t[1], t[2]) && (t = [t[0]]), io(e, rV(t, 1), [])
                                }),
                                sv = tP || function() {
                                    return e6.Date.now()
                                };

                            function sm(e, t, i) {
                                return t = i ? r : t, t = e && null == t ? e.length : t, ne(e, 128, r, r, r, r, t)
                            }

                            function s_(e, t) {
                                var n;
                                if ("function" != typeof t) throw new eO(i);
                                return e = s2(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n
                                    }
                            }
                            var sw = ip(function(e, t, r) {
                                    var i = 1;
                                    if (r.length) {
                                        var n = t$(r, nl(sw));
                                        i |= 32
                                    }
                                    return ne(e, i, t, r, n)
                                }),
                                sb = ip(function(e, t, r) {
                                    var i = 3;
                                    if (r.length) {
                                        var n = t$(r, nl(sb));
                                        i |= 32
                                    }
                                    return ne(t, i, e, r, n)
                                });

                            function sE(e, t, n) {
                                var s, o, a, c, u, l, h = 0,
                                    p = !1,
                                    f = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eO(i);

                                function g(t) {
                                    var i = s,
                                        n = o;
                                    return s = o = r, h = t, c = e.apply(n, i)
                                }

                                function y(e) {
                                    var i = e - l,
                                        n = e - h;
                                    return l === r || i >= t || i < 0 || f && n >= a
                                }

                                function v() {
                                    var e, r, i, n = sv();
                                    if (y(n)) return m(n);
                                    u = nx(v, (e = n - l, r = n - h, i = t - e, f ? t6(i, a - r) : i))
                                }

                                function m(e) {
                                    return u = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function _() {
                                    var e, i = sv(),
                                        n = y(i);
                                    if (s = arguments, o = this, l = i, n) {
                                        if (u === r) return h = e = l, u = nx(v, t), p ? g(e) : c;
                                        if (f) return ij(u), u = nx(v, t), g(l)
                                    }
                                    return u === r && (u = nx(v, t)), c
                                }
                                return t = s8(t) || 0, sB(n) && (p = !!n.leading, a = (f = "maxWait" in n) ? t5(s8(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), _.cancel = function() {
                                    u !== r && ij(u), h = 0, s = l = o = u = r
                                }, _.flush = function() {
                                    return u === r ? c : m(sv())
                                }, _
                            }
                            var sI = ip(function(e, t) {
                                    return rL(e, 1, t)
                                }),
                                sS = ip(function(e, t, r) {
                                    return rL(e, s8(t) || 0, r)
                                });

                            function sP(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eO(i);
                                var r = function() {
                                    var i = arguments,
                                        n = t ? t.apply(this, i) : i[0],
                                        s = r.cache;
                                    if (s.has(n)) return s.get(n);
                                    var o = e.apply(this, i);
                                    return r.cache = s.set(n, o) || s, o
                                };
                                return r.cache = new(sP.Cache || rb), r
                            }

                            function sO(e) {
                                if ("function" != typeof e) throw new eO(i);
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
                            sP.Cache = rb;
                            var sR = ip(function(e, t) {
                                    var r = (t = 1 == t.length && sj(t[0]) ? tp(t[0], tC(nh())) : tp(rV(t, 1), tC(nh()))).length;
                                    return ip(function(i) {
                                        for (var n = -1, s = t6(i.length, r); ++n < s;) i[n] = t[n].call(this, i[n]);
                                        return ts(e, this, i)
                                    })
                                }),
                                sN = ip(function(e, t) {
                                    var i = t$(t, nl(sN));
                                    return ne(e, 32, r, t, i)
                                }),
                                sT = ip(function(e, t) {
                                    var i = t$(t, nl(sT));
                                    return ne(e, 64, r, t, i)
                                }),
                                sC = ns(function(e, t) {
                                    return ne(e, 256, r, r, r, t)
                                });

                            function sA(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sx = i2(rZ),
                                sD = i2(function(e, t) {
                                    return e >= t
                                }),
                                sU = r6(function() {
                                    return arguments
                                }()) ? r6 : function(e) {
                                    return sF(e) && ex.call(e, "callee") && !e1.call(e, "callee")
                                },
                                sj = em.isArray,
                                sL = e7 ? tC(e7) : function(e) {
                                    return sF(e) && rY(e) == P
                                };

                            function sq(e) {
                                return null != e && sK(e.length) && !sH(e)
                            }

                            function sM(e) {
                                return sF(e) && sq(e)
                            }
                            var sz = tZ || oY,
                                sk = te ? tC(te) : function(e) {
                                    return sF(e) && rY(e) == p
                                };

                            function s$(e) {
                                if (!sF(e)) return !1;
                                var t = rY(e);
                                return t == f || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !sJ(e)
                            }

                            function sH(e) {
                                if (!sB(e)) return !1;
                                var t = rY(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sV(e) {
                                return "number" == typeof e && e == s2(e)
                            }

                            function sK(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sB(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sF(e) {
                                return null != e && "object" == typeof e
                            }
                            var sW = tt ? tC(tt) : function(e) {
                                return sF(e) && nv(e) == y
                            };

                            function sG(e) {
                                return "number" == typeof e || sF(e) && rY(e) == v
                            }

                            function sJ(e) {
                                if (!sF(e) || rY(e) != m) return !1;
                                var t = eF(e);
                                if (null === t) return !0;
                                var r = ex.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && eA.call(r) == eL
                            }
                            var sQ = tr ? tC(tr) : function(e) {
                                    return sF(e) && rY(e) == w
                                },
                                sY = ti ? tC(ti) : function(e) {
                                    return sF(e) && nv(e) == b
                                };

                            function sZ(e) {
                                return "string" == typeof e || !sj(e) && sF(e) && rY(e) == E
                            }

                            function sX(e) {
                                return "symbol" == typeof e || sF(e) && rY(e) == I
                            }
                            var s0 = tn ? tC(tn) : function(e) {
                                    return sF(e) && sK(e.length) && !!eQ[rY(e)]
                                },
                                s1 = i2(r7),
                                s5 = i2(function(e, t) {
                                    return e <= t
                                });

                            function s6(e) {
                                if (!e) return [];
                                if (sq(e)) return sZ(e) ? tK(e) : iH(e);
                                if (e2 && e[e2]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e2]());
                                var t = nv(e);
                                return (t == y ? tz : t == b ? tH : ob)(e)
                            }

                            function s3(e) {
                                return e ? (e = s8(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function s2(e) {
                                var t = s3(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function s4(e) {
                                return e ? rD(s2(e), 0, 4294967295) : 0
                            }

                            function s8(e) {
                                if ("number" == typeof e) return e;
                                if (sX(e)) return a;
                                if (sB(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sB(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tT(e);
                                var r = ec.test(e);
                                return r || el.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function s9(e) {
                                return iV(e, of (e))
                            }

                            function s7(e) {
                                return null == e ? "" : iI(e)
                            }
                            var oe = iB(function(e, t) {
                                    if (nO(t) || sq(t)) {
                                        iV(t, op(t), e);
                                        return
                                    }
                                    for (var r in t) ex.call(t, r) && rR(e, r, t[r])
                                }),
                                ot = iB(function(e, t) {
                                    iV(t, of (t), e)
                                }),
                                or = iB(function(e, t, r, i) {
                                    iV(t, of (t), e, i)
                                }),
                                oi = iB(function(e, t, r, i) {
                                    iV(t, op(t), e, i)
                                }),
                                on = ns(rx),
                                os = ip(function(e, t) {
                                    e = eI(e);
                                    var i = -1,
                                        n = t.length,
                                        s = n > 2 ? t[2] : r;
                                    for (s && nE(t[0], t[1], s) && (n = 1); ++i < n;)
                                        for (var o = t[i], a = of (o), c = -1, u = a.length; ++c < u;) {
                                            var l = a[c],
                                                h = e[l];
                                            (h === r || sA(h, eT[l]) && !ex.call(e, l)) && (e[l] = o[l])
                                        }
                                    return e
                                }),
                                oo = ip(function(e) {
                                    return e.push(r, nr), ts(og, r, e)
                                });

                            function oa(e, t, i) {
                                var n = null == e ? r : rJ(e, t);
                                return n === r ? i : n
                            }

                            function oc(e, t) {
                                return null != e && nm(e, t, r0)
                            }
                            var ou = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = ej.call(t)), e[t] = r
                                }, oj(oM)),
                                ol = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = ej.call(t)), ex.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, nh),
                                oh = ip(r5);

                            function op(e) {
                                return sq(e) ? rS(e) : r9(e)
                            }

                            function of (e) {
                                return sq(e) ? rS(e, !0) : function(e) {
                                    if (!sB(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eI(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = nO(e),
                                        r = [];
                                    for (var i in e) "constructor" == i && (t || !ex.call(e, i)) || r.push(i);
                                    return r
                                }(e)
                            }
                            var od = iB(function(e, t, r) {
                                    ii(e, t, r)
                                }),
                                og = iB(function(e, t, r, i) {
                                    ii(e, t, r, i)
                                }),
                                oy = ns(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var i = !1;
                                    t = tp(t, function(t) {
                                        return t = iD(t, e), i || (i = t.length > 1), t
                                    }), iV(e, na(e), r), i && (r = rU(r, 7, ni));
                                    for (var n = t.length; n--;) iP(r, t[n]);
                                    return r
                                }),
                                ov = ns(function(e, t) {
                                    return null == e ? {} : ia(e, t, function(t, r) {
                                        return oc(e, r)
                                    })
                                });

                            function om(e, t) {
                                if (null == e) return {};
                                var r = tp(na(e), function(e) {
                                    return [e]
                                });
                                return t = nh(t), ia(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var o_ = i7(op),
                                ow = i7( of );

                            function ob(e) {
                                return null == e ? [] : tA(e, op(e))
                            }
                            var oE = iJ(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oI(t) : t)
                            });

                            function oI(e) {
                                return oA(s7(e).toLowerCase())
                            }

                            function oS(e) {
                                return (e = s7(e)) && e.replace(ep, tj).replace(eV, "")
                            }
                            var oP = iJ(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                oO = iJ(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                oR = iG("toLowerCase"),
                                oN = iJ(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                oT = iJ(function(e, t, r) {
                                    return e + (r ? " " : "") + oA(t)
                                }),
                                oC = iJ(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oA = iG("toUpperCase");

                            function ox(e, t, i) {
                                var n;
                                return e = s7(e), (t = i ? r : t) === r ? (n = e, eW.test(n)) ? e.match(eB) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oD = ip(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return s$(e) ? e : new ew(e)
                                    }
                                }),
                                oU = ns(function(e, t) {
                                    return ta(t, function(t) {
                                        rA(e, t = nM(t), sw(e[t], e))
                                    }), e
                                });

                            function oj(e) {
                                return function() {
                                    return e
                                }
                            }
                            var oL = iZ(),
                                oq = iZ(!0);

                            function oM(e) {
                                return e
                            }

                            function oz(e) {
                                return r8("function" == typeof e ? e : rU(e, 1))
                            }
                            var ok = ip(function(e, t) {
                                    return function(r) {
                                        return r5(r, e, t)
                                    }
                                }),
                                o$ = ip(function(e, t) {
                                    return function(r) {
                                        return r5(e, r, t)
                                    }
                                });

                            function oH(e, t, r) {
                                var i = op(t),
                                    n = rG(t, i);
                                null != r || sB(t) && (n.length || !i.length) || (r = t, t = e, e = this, n = rG(t, op(t)));
                                var s = !(sB(r) && "chain" in r) || !!r.chain,
                                    o = sH(e);
                                return ta(n, function(r) {
                                    var i = t[r];
                                    e[r] = i, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = iH(this.__actions__)).push({
                                                func: i,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return i.apply(e, tf([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oV() {}
                            var oK = i5(tp),
                                oB = i5(tc),
                                oF = i5(ty);

                            function oW(e) {
                                return nI(e) ? tS(nM(e)) : function(t) {
                                    return rJ(t, e)
                                }
                            }
                            var oG = i3(),
                                oJ = i3(!0);

                            function oQ() {
                                return []
                            }

                            function oY() {
                                return !1
                            }
                            var oZ = i1(function(e, t) {
                                    return e + t
                                }, 0),
                                oX = i8("ceil"),
                                o0 = i1(function(e, t) {
                                    return e / t
                                }, 1),
                                o1 = i8("floor"),
                                o5 = i1(function(e, t) {
                                    return e * t
                                }, 1),
                                o6 = i8("round"),
                                o3 = i1(function(e, t) {
                                    return e - t
                                }, 0);
                            return rd.after = function(e, t) {
                                if ("function" != typeof t) throw new eO(i);
                                return e = s2(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rd.ary = sm, rd.assign = oe, rd.assignIn = ot, rd.assignInWith = or, rd.assignWith = oi, rd.at = on, rd.before = s_, rd.bind = sw, rd.bindAll = oU, rd.bindKey = sb, rd.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return sj(e) ? e : [e]
                            }, rd.chain = si, rd.chunk = function(e, t, i) {
                                t = (i ? nE(e, t, i) : t === r) ? 1 : t5(s2(t), 0);
                                var n = null == e ? 0 : e.length;
                                if (!n || t < 1) return [];
                                for (var s = 0, o = 0, a = em(tJ(n / t)); s < n;) a[o++] = iv(e, s, s += t);
                                return a
                            }, rd.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                                    var s = e[t];
                                    s && (n[i++] = s)
                                }
                                return n
                            }, rd.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = em(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                                return tf(sj(r) ? iH(r) : [r], rV(t, 1))
                            }, rd.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = nh();
                                return e = t ? tp(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eO(i);
                                    return [r(e[0]), e[1]]
                                }) : [], ip(function(r) {
                                    for (var i = -1; ++i < t;) {
                                        var n = e[i];
                                        if (ts(n[0], this, r)) return ts(n[1], this, r)
                                    }
                                })
                            }, rd.conforms = function(e) {
                                var t, r;
                                return r = op(t = rU(e, 1)),
                                    function(e) {
                                        return rj(e, t, r)
                                    }
                            }, rd.constant = oj, rd.countBy = so, rd.create = function(e, t) {
                                var r = rg(e);
                                return null == t ? r : rC(r, t)
                            }, rd.curry = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 8, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.curryRight = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 16, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.debounce = sE, rd.defaults = os, rd.defaultsDeep = oo, rd.defer = sI, rd.delay = sS, rd.difference = n$, rd.differenceBy = nH, rd.differenceWith = nV, rd.drop = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t, n) : []
                            }, rd.dropRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, 0, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t) : []
                            }, rd.dropRightWhile = function(e, t) {
                                return e && e.length ? iR(e, nh(t, 3), !0, !0) : []
                            }, rd.dropWhile = function(e, t) {
                                return e && e.length ? iR(e, nh(t, 3), !0) : []
                            }, rd.fill = function(e, t, i, n) {
                                var s = null == e ? 0 : e.length;
                                return s ? (i && "number" != typeof i && nE(e, t, i) && (i = 0, n = s), function(e, t, i, n) {
                                    var s = e.length;
                                    for ((i = s2(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : s2(n)) < 0 && (n += s), n = i > n ? 0 : s4(n); i < n;) e[i++] = t;
                                    return e
                                }(e, t, i, n)) : []
                            }, rd.filter = function(e, t) {
                                return (sj(e) ? tu : rH)(e, nh(t, 3))
                            }, rd.flatMap = function(e, t) {
                                return rV(sd(e, t), 1)
                            }, rd.flatMapDeep = function(e, t) {
                                return rV(sd(e, t), o)
                            }, rd.flatMapDepth = function(e, t, i) {
                                return i = i === r ? 1 : s2(i), rV(sd(e, t), i)
                            }, rd.flatten = nF, rd.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rV(e, o) : []
                            }, rd.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rV(e, t = t === r ? 1 : s2(t)) : []
                            }, rd.flip = function(e) {
                                return ne(e, 512)
                            }, rd.flow = oL, rd.flowRight = oq, rd.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                                    var n = e[t];
                                    i[n[0]] = n[1]
                                }
                                return i
                            }, rd.functions = function(e) {
                                return null == e ? [] : rG(e, op(e))
                            }, rd.functionsIn = function(e) {
                                return null == e ? [] : rG(e, of (e))
                            }, rd.groupBy = sh, rd.initial = function(e) {
                                return (null == e ? 0 : e.length) ? iv(e, 0, -1) : []
                            }, rd.intersection = nG, rd.intersectionBy = nJ, rd.intersectionWith = nQ, rd.invert = ou, rd.invertBy = ol, rd.invokeMap = sp, rd.iteratee = oz, rd.keyBy = sf, rd.keys = op, rd.keysIn = of , rd.map = sd, rd.mapKeys = function(e, t) {
                                var r = {};
                                return t = nh(t, 3), rF(e, function(e, i, n) {
                                    rA(r, t(e, i, n), e)
                                }), r
                            }, rd.mapValues = function(e, t) {
                                var r = {};
                                return t = nh(t, 3), rF(e, function(e, i, n) {
                                    rA(r, i, t(e, i, n))
                                }), r
                            }, rd.matches = function(e) {
                                return it(rU(e, 1))
                            }, rd.matchesProperty = function(e, t) {
                                return ir(e, rU(t, 1))
                            }, rd.memoize = sP, rd.merge = od, rd.mergeWith = og, rd.method = ok, rd.methodOf = o$, rd.mixin = oH, rd.negate = sO, rd.nthArg = function(e) {
                                return e = s2(e), ip(function(t) {
                                    return is(t, e)
                                })
                            }, rd.omit = oy, rd.omitBy = function(e, t) {
                                return om(e, sO(nh(t)))
                            }, rd.once = function(e) {
                                return s_(2, e)
                            }, rd.orderBy = function(e, t, i, n) {
                                return null == e ? [] : (sj(t) || (t = null == t ? [] : [t]), sj(i = n ? r : i) || (i = null == i ? [] : [i]), io(e, t, i))
                            }, rd.over = oK, rd.overArgs = sR, rd.overEvery = oB, rd.overSome = oF, rd.partial = sN, rd.partialRight = sT, rd.partition = sg, rd.pick = ov, rd.pickBy = om, rd.property = oW, rd.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rJ(e, t)
                                }
                            }, rd.pull = nZ, rd.pullAll = nX, rd.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? ic(e, t, nh(r, 2)) : e
                            }, rd.pullAllWith = function(e, t, i) {
                                return e && e.length && t && t.length ? ic(e, t, r, i) : e
                            }, rd.pullAt = n0, rd.range = oG, rd.rangeRight = oJ, rd.rearg = sC, rd.reject = function(e, t) {
                                return (sj(e) ? tu : rH)(e, sO(nh(t, 3)))
                            }, rd.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var i = -1,
                                    n = [],
                                    s = e.length;
                                for (t = nh(t, 3); ++i < s;) {
                                    var o = e[i];
                                    t(o, i, e) && (r.push(o), n.push(i))
                                }
                                return iu(e, n), r
                            }, rd.rest = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return ip(e, t = t === r ? t : s2(t))
                            }, rd.reverse = n1, rd.sampleSize = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), (sj(e) ? function(e, t) {
                                    return nL(iH(e), rD(t, 0, e.length))
                                } : function(e, t) {
                                    var r = ob(e);
                                    return nL(r, rD(t, 0, r.length))
                                })(e, t)
                            }, rd.set = function(e, t, r) {
                                return null == e ? e : id(e, t, r)
                            }, rd.setWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : id(e, t, i, n)
                            }, rd.shuffle = function(e) {
                                return (sj(e) ? function(e) {
                                    return nL(iH(e))
                                } : function(e) {
                                    return nL(ob(e))
                                })(e)
                            }, rd.slice = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? (i && "number" != typeof i && nE(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : s2(t), i = i === r ? n : s2(i)), iv(e, t, i)) : []
                            }, rd.sortBy = sy, rd.sortedUniq = function(e) {
                                return e && e.length ? ib(e) : []
                            }, rd.sortedUniqBy = function(e, t) {
                                return e && e.length ? ib(e, nh(t, 2)) : []
                            }, rd.split = function(e, t, i) {
                                return i && "number" != typeof i && nE(e, t, i) && (t = i = r), (i = i === r ? 4294967295 : i >>> 0) ? (e = s7(e)) && ("string" == typeof t || null != t && !sQ(t)) && !(t = iI(t)) && tM(e) ? iU(tK(e), 0, i) : e.split(t, i) : []
                            }, rd.spread = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return t = null == t ? 0 : t5(s2(t), 0), ip(function(r) {
                                    var i = r[t],
                                        n = iU(r, 0, t);
                                    return i && tf(n, i), ts(e, this, n)
                                })
                            }, rd.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? iv(e, 1, t) : []
                            }, rd.take = function(e, t, i) {
                                return e && e.length ? iv(e, 0, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t) : []
                            }, rd.takeRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t, n) : []
                            }, rd.takeRightWhile = function(e, t) {
                                return e && e.length ? iR(e, nh(t, 3), !1, !0) : []
                            }, rd.takeWhile = function(e, t) {
                                return e && e.length ? iR(e, nh(t, 3)) : []
                            }, rd.tap = function(e, t) {
                                return t(e), e
                            }, rd.throttle = function(e, t, r) {
                                var n = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eO(i);
                                return sB(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), sE(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rd.thru = sn, rd.toArray = s6, rd.toPairs = o_, rd.toPairsIn = ow, rd.toPath = function(e) {
                                return sj(e) ? tp(e, nM) : sX(e) ? [e] : iH(nq(s7(e)))
                            }, rd.toPlainObject = s9, rd.transform = function(e, t, r) {
                                var i = sj(e),
                                    n = i || sz(e) || s0(e);
                                if (t = nh(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = n ? i ? new s : [] : sB(e) && sH(s) ? rg(eF(e)) : {}
                                }
                                return (n ? ta : rF)(e, function(e, i, n) {
                                    return t(r, e, i, n)
                                }), r
                            }, rd.unary = function(e) {
                                return sm(e, 1)
                            }, rd.union = n5, rd.unionBy = n6, rd.unionWith = n3, rd.uniq = function(e) {
                                return e && e.length ? iS(e) : []
                            }, rd.uniqBy = function(e, t) {
                                return e && e.length ? iS(e, nh(t, 2)) : []
                            }, rd.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? iS(e, r, t) : []
                            }, rd.unset = function(e, t) {
                                return null == e || iP(e, t)
                            }, rd.unzip = n2, rd.unzipWith = n4, rd.update = function(e, t, r) {
                                return null == e ? e : iO(e, t, ix(r))
                            }, rd.updateWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : iO(e, t, ix(i), n)
                            }, rd.values = ob, rd.valuesIn = function(e) {
                                return null == e ? [] : tA(e, of (e))
                            }, rd.without = n8, rd.words = ox, rd.wrap = function(e, t) {
                                return sN(ix(t), e)
                            }, rd.xor = n9, rd.xorBy = n7, rd.xorWith = se, rd.zip = st, rd.zipObject = function(e, t) {
                                return iC(e || [], t || [], rR)
                            }, rd.zipObjectDeep = function(e, t) {
                                return iC(e || [], t || [], id)
                            }, rd.zipWith = sr, rd.entries = o_, rd.entriesIn = ow, rd.extend = ot, rd.extendWith = or, oH(rd, rd), rd.add = oZ, rd.attempt = oD, rd.camelCase = oE, rd.capitalize = oI, rd.ceil = oX, rd.clamp = function(e, t, i) {
                                return i === r && (i = t, t = r), i !== r && (i = (i = s8(i)) == i ? i : 0), t !== r && (t = (t = s8(t)) == t ? t : 0), rD(s8(e), t, i)
                            }, rd.clone = function(e) {
                                return rU(e, 4)
                            }, rd.cloneDeep = function(e) {
                                return rU(e, 5)
                            }, rd.cloneDeepWith = function(e, t) {
                                return rU(e, 5, t = "function" == typeof t ? t : r)
                            }, rd.cloneWith = function(e, t) {
                                return rU(e, 4, t = "function" == typeof t ? t : r)
                            }, rd.conformsTo = function(e, t) {
                                return null == t || rj(e, t, op(t))
                            }, rd.deburr = oS, rd.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rd.divide = o0, rd.endsWith = function(e, t, i) {
                                e = s7(e), t = iI(t);
                                var n = e.length,
                                    s = i = i === r ? n : rD(s2(i), 0, n);
                                return (i -= t.length) >= 0 && e.slice(i, s) == t
                            }, rd.eq = sA, rd.escape = function(e) {
                                return (e = s7(e)) && H.test(e) ? e.replace(k, tL) : e
                            }, rd.escapeRegExp = function(e) {
                                return (e = s7(e)) && Q.test(e) ? e.replace(J, "\\$&") : e
                            }, rd.every = function(e, t, i) {
                                var n = sj(e) ? tc : rk;
                                return i && nE(e, t, i) && (t = r), n(e, nh(t, 3))
                            }, rd.find = sa, rd.findIndex = nK, rd.findKey = function(e, t) {
                                return tm(e, nh(t, 3), rF)
                            }, rd.findLast = sc, rd.findLastIndex = nB, rd.findLastKey = function(e, t) {
                                return tm(e, nh(t, 3), rW)
                            }, rd.floor = o1, rd.forEach = su, rd.forEachRight = sl, rd.forIn = function(e, t) {
                                return null == e ? e : rK(e, nh(t, 3), of )
                            }, rd.forInRight = function(e, t) {
                                return null == e ? e : rB(e, nh(t, 3), of )
                            }, rd.forOwn = function(e, t) {
                                return e && rF(e, nh(t, 3))
                            }, rd.forOwnRight = function(e, t) {
                                return e && rW(e, nh(t, 3))
                            }, rd.get = oa, rd.gt = sx, rd.gte = sD, rd.has = function(e, t) {
                                return null != e && nm(e, t, rX)
                            }, rd.hasIn = oc, rd.head = nW, rd.identity = oM, rd.includes = function(e, t, r, i) {
                                e = sq(e) ? e : ob(e), r = r && !i ? s2(r) : 0;
                                var n = e.length;
                                return r < 0 && (r = t5(n + r, 0)), sZ(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tw(e, t, r) > -1
                            }, rd.indexOf = function(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), tw(e, t, n)
                            }, rd.inRange = function(e, t, i) {
                                var n, s, o;
                                return t = s3(t), i === r ? (i = t, t = 0) : i = s3(i), (n = e = s8(e)) >= t6(s = t, o = i) && n < t5(s, o)
                            }, rd.invoke = oh, rd.isArguments = sU, rd.isArray = sj, rd.isArrayBuffer = sL, rd.isArrayLike = sq, rd.isArrayLikeObject = sM, rd.isBoolean = function(e) {
                                return !0 === e || !1 === e || sF(e) && rY(e) == h
                            }, rd.isBuffer = sz, rd.isDate = sk, rd.isElement = function(e) {
                                return sF(e) && 1 === e.nodeType && !sJ(e)
                            }, rd.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sq(e) && (sj(e) || "string" == typeof e || "function" == typeof e.splice || sz(e) || s0(e) || sU(e))) return !e.length;
                                var t = nv(e);
                                if (t == y || t == b) return !e.size;
                                if (nO(e)) return !r9(e).length;
                                for (var r in e)
                                    if (ex.call(e, r)) return !1;
                                return !0
                            }, rd.isEqual = function(e, t) {
                                return r3(e, t)
                            }, rd.isEqualWith = function(e, t, i) {
                                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                                return n === r ? r3(e, t, r, i) : !!n
                            }, rd.isError = s$, rd.isFinite = function(e) {
                                return "number" == typeof e && tX(e)
                            }, rd.isFunction = sH, rd.isInteger = sV, rd.isLength = sK, rd.isMap = sW, rd.isMatch = function(e, t) {
                                return e === t || r2(e, t, nf(t))
                            }, rd.isMatchWith = function(e, t, i) {
                                return i = "function" == typeof i ? i : r, r2(e, t, nf(t), i)
                            }, rd.isNaN = function(e) {
                                return sG(e) && e != +e
                            }, rd.isNative = function(e) {
                                if (nP(e)) throw new ew("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r4(e)
                            }, rd.isNil = function(e) {
                                return null == e
                            }, rd.isNull = function(e) {
                                return null === e
                            }, rd.isNumber = sG, rd.isObject = sB, rd.isObjectLike = sF, rd.isPlainObject = sJ, rd.isRegExp = sQ, rd.isSafeInteger = function(e) {
                                return sV(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rd.isSet = sY, rd.isString = sZ, rd.isSymbol = sX, rd.isTypedArray = s0, rd.isUndefined = function(e) {
                                return e === r
                            }, rd.isWeakMap = function(e) {
                                return sF(e) && nv(e) == S
                            }, rd.isWeakSet = function(e) {
                                return sF(e) && "[object WeakSet]" == rY(e)
                            }, rd.join = function(e, t) {
                                return null == e ? "" : t0.call(e, t)
                            }, rd.kebabCase = oP, rd.last = nY, rd.lastIndexOf = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n;
                                return i !== r && (s = (s = s2(i)) < 0 ? t5(n + s, 0) : t6(s, n - 1)), t == t ? function(e, t, r) {
                                    for (var i = r + 1; i-- && e[i] !== t;);
                                    return i
                                }(e, t, s) : t_(e, tE, s, !0)
                            }, rd.lowerCase = oO, rd.lowerFirst = oR, rd.lt = s1, rd.lte = s5, rd.max = function(e) {
                                return e && e.length ? r$(e, oM, rZ) : r
                            }, rd.maxBy = function(e, t) {
                                return e && e.length ? r$(e, nh(t, 2), rZ) : r
                            }, rd.mean = function(e) {
                                return tI(e, oM)
                            }, rd.meanBy = function(e, t) {
                                return tI(e, nh(t, 2))
                            }, rd.min = function(e) {
                                return e && e.length ? r$(e, oM, r7) : r
                            }, rd.minBy = function(e, t) {
                                return e && e.length ? r$(e, nh(t, 2), r7) : r
                            }, rd.stubArray = oQ, rd.stubFalse = oY, rd.stubObject = function() {
                                return {}
                            }, rd.stubString = function() {
                                return ""
                            }, rd.stubTrue = function() {
                                return !0
                            }, rd.multiply = o5, rd.nth = function(e, t) {
                                return e && e.length ? is(e, s2(t)) : r
                            }, rd.noConflict = function() {
                                return e6._ === this && (e6._ = eq), this
                            }, rd.noop = oV, rd.now = sv, rd.pad = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tV(e) : 0;
                                if (!t || i >= t) return e;
                                var n = (t - i) / 2;
                                return i6(tQ(n), r) + e + i6(tJ(n), r)
                            }, rd.padEnd = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tV(e) : 0;
                                return t && i < t ? e + i6(t - i, r) : e
                            }, rd.padStart = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tV(e) : 0;
                                return t && i < t ? i6(t - i, r) + e : e
                            }, rd.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t2(s7(e).replace(Y, ""), t || 0)
                            }, rd.random = function(e, t, i) {
                                if (i && "boolean" != typeof i && nE(e, t, i) && (t = i = r), i === r && ("boolean" == typeof t ? (i = t, t = r) : "boolean" == typeof e && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = s3(e), t === r ? (t = e, e = 0) : t = s3(t)), e > t) {
                                    var n = e;
                                    e = t, t = n
                                }
                                if (i || e % 1 || t % 1) {
                                    var s = t4();
                                    return t6(e + s * (t - e + eX("1e-" + ((s + "").length - 1))), t)
                                }
                                return il(e, t)
                            }, rd.reduce = function(e, t, r) {
                                var i = sj(e) ? td : tO,
                                    n = arguments.length < 3;
                                return i(e, nh(t, 4), r, n, rM)
                            }, rd.reduceRight = function(e, t, r) {
                                var i = sj(e) ? tg : tO,
                                    n = arguments.length < 3;
                                return i(e, nh(t, 4), r, n, rz)
                            }, rd.repeat = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), ih(s7(e), t)
                            }, rd.replace = function() {
                                var e = arguments,
                                    t = s7(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rd.result = function(e, t, i) {
                                t = iD(t, e);
                                var n = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++n < s;) {
                                    var o = null == e ? r : e[nM(t[n])];
                                    o === r && (n = s, o = i), e = sH(o) ? o.call(e) : o
                                }
                                return e
                            }, rd.round = o6, rd.runInContext = e, rd.sample = function(e) {
                                return (sj(e) ? rP : function(e) {
                                    return rP(ob(e))
                                })(e)
                            }, rd.size = function(e) {
                                if (null == e) return 0;
                                if (sq(e)) return sZ(e) ? tV(e) : e.length;
                                var t = nv(e);
                                return t == y || t == b ? e.size : r9(e).length
                            }, rd.snakeCase = oN, rd.some = function(e, t, i) {
                                var n = sj(e) ? ty : im;
                                return i && nE(e, t, i) && (t = r), n(e, nh(t, 3))
                            }, rd.sortedIndex = function(e, t) {
                                return i_(e, t)
                            }, rd.sortedIndexBy = function(e, t, r) {
                                return iw(e, t, nh(r, 2))
                            }, rd.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var i = i_(e, t);
                                    if (i < r && sA(e[i], t)) return i
                                }
                                return -1
                            }, rd.sortedLastIndex = function(e, t) {
                                return i_(e, t, !0)
                            }, rd.sortedLastIndexBy = function(e, t, r) {
                                return iw(e, t, nh(r, 2), !0)
                            }, rd.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = i_(e, t, !0) - 1;
                                    if (sA(e[r], t)) return r
                                }
                                return -1
                            }, rd.startCase = oT, rd.startsWith = function(e, t, r) {
                                return e = s7(e), r = null == r ? 0 : rD(s2(r), 0, e.length), t = iI(t), e.slice(r, r + t.length) == t
                            }, rd.subtract = o3, rd.sum = function(e) {
                                return e && e.length ? tR(e, oM) : 0
                            }, rd.sumBy = function(e, t) {
                                return e && e.length ? tR(e, nh(t, 2)) : 0
                            }, rd.template = function(e, t, i) {
                                var n = rd.templateSettings;
                                i && nE(e, t, i) && (t = r), e = s7(e), t = or({}, t, n, nt);
                                var s, o, a = or({}, t.imports, n.imports, nt),
                                    c = op(a),
                                    u = tA(a, c),
                                    l = 0,
                                    h = t.interpolate || ef,
                                    p = "__p += '",
                                    f = eS((t.escape || ef).source + "|" + h.source + "|" + (h === B ? es : ef).source + "|" + (t.evaluate || ef).source + "|$", "g"),
                                    d = "//# sourceURL=" + (ex.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eJ + "]") + `
`;
                                e.replace(f, function(t, r, i, n, a, c) {
                                    return i || (i = n), p += e.slice(l, c).replace(ed, tq), r && (s = !0, p += `' +
__e(` + r + `) +
'`), a && (o = !0, p += `';
` + a + `;
__p += '`), i && (p += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), l = c + t.length, t
                                }), p += `';
`;
                                var g = ex.call(t, "variable") && t.variable;
                                if (g) {
                                    if (ei.test(g)) throw new ew("Invalid `variable` option passed into `_.template`")
                                } else p = `with (obj) {
` + p + `
}
`;
                                p = (o ? p.replace(L, "") : p).replace(q, "$1").replace(M, "$1;"), p = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
                                var y = oD(function() {
                                    return eb(c, d + "return " + p).apply(r, u)
                                });
                                if (y.source = p, s$(y)) throw y;
                                return y
                            }, rd.times = function(e, t) {
                                if ((e = s2(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    i = t6(e, 4294967295);
                                t = nh(t), e -= 4294967295;
                                for (var n = tN(i, t); ++r < e;) t(r);
                                return n
                            }, rd.toFinite = s3, rd.toInteger = s2, rd.toLength = s4, rd.toLower = function(e) {
                                return s7(e).toLowerCase()
                            }, rd.toNumber = s8, rd.toSafeInteger = function(e) {
                                return e ? rD(s2(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rd.toString = s7, rd.toUpper = function(e) {
                                return s7(e).toUpperCase()
                            }, rd.trim = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return tT(e);
                                if (!e || !(t = iI(t))) return e;
                                var n = tK(e),
                                    s = tK(t),
                                    o = tD(n, s),
                                    a = tU(n, s) + 1;
                                return iU(n, o, a).join("")
                            }, rd.trimEnd = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.slice(0, tB(e) + 1);
                                if (!e || !(t = iI(t))) return e;
                                var n = tK(e),
                                    s = tU(n, tK(t)) + 1;
                                return iU(n, 0, s).join("")
                            }, rd.trimStart = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.replace(Y, "");
                                if (!e || !(t = iI(t))) return e;
                                var n = tK(e),
                                    s = tD(n, tK(t));
                                return iU(n, s).join("")
                            }, rd.truncate = function(e, t) {
                                var i = 30,
                                    n = "...";
                                if (sB(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    i = "length" in t ? s2(t.length) : i, n = "omission" in t ? iI(t.omission) : n
                                }
                                var o = (e = s7(e)).length;
                                if (tM(e)) {
                                    var a = tK(e);
                                    o = a.length
                                }
                                if (i >= o) return e;
                                var c = i - tV(n);
                                if (c < 1) return n;
                                var u = a ? iU(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return u + n;
                                if (a && (c += u.length - c), sQ(s)) {
                                    if (e.slice(c).search(s)) {
                                        var l, h = u;
                                        for (s.global || (s = eS(s.source, s7(eo.exec(s)) + "g")), s.lastIndex = 0; l = s.exec(h);) var p = l.index;
                                        u = u.slice(0, p === r ? c : p)
                                    }
                                } else if (e.indexOf(iI(s), c) != c) {
                                    var f = u.lastIndexOf(s);
                                    f > -1 && (u = u.slice(0, f))
                                }
                                return u + n
                            }, rd.unescape = function(e) {
                                return (e = s7(e)) && $.test(e) ? e.replace(z, tF) : e
                            }, rd.uniqueId = function(e) {
                                var t = ++eD;
                                return s7(e) + t
                            }, rd.upperCase = oC, rd.upperFirst = oA, rd.each = su, rd.eachRight = sl, rd.first = nW, oH(rd, (ev = {}, rF(rd, function(e, t) {
                                ex.call(rd.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rd.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rd[e].placeholder = rd
                            }), ta(["drop", "take"], function(e, t) {
                                rm.prototype[e] = function(i) {
                                    i = i === r ? 1 : t5(s2(i), 0);
                                    var n = this.__filtered__ && !t ? new rm(this) : this.clone();
                                    return n.__filtered__ ? n.__takeCount__ = t6(i, n.__takeCount__) : n.__views__.push({
                                        size: t6(i, 4294967295),
                                        type: e + (n.__dir__ < 0 ? "Right" : "")
                                    }), n
                                }, rm.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    i = 1 == r || 3 == r;
                                rm.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: nh(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || i, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                rm.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                rm.prototype[e] = function() {
                                    return this.__filtered__ ? new rm(this) : this[r](1)
                                }
                            }), rm.prototype.compact = function() {
                                return this.filter(oM)
                            }, rm.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, rm.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, rm.prototype.invokeMap = ip(function(e, t) {
                                return "function" == typeof e ? new rm(this) : this.map(function(r) {
                                    return r5(r, e, t)
                                })
                            }), rm.prototype.reject = function(e) {
                                return this.filter(sO(nh(e)))
                            }, rm.prototype.slice = function(e, t) {
                                e = s2(e);
                                var i = this;
                                return i.__filtered__ && (e > 0 || t < 0) ? new rm(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (i = (t = s2(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                            }, rm.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, rm.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rF(rm.prototype, function(e, t) {
                                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                    n = /^(?:head|last)$/.test(t),
                                    s = rd[n ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = n || /^find/.test(t);
                                s && (rd.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = n ? [1] : arguments,
                                        c = t instanceof rm,
                                        u = a[0],
                                        l = c || sj(t),
                                        h = function(e) {
                                            var t = s.apply(rd, tf([e], a));
                                            return n && p ? t[0] : t
                                        };
                                    l && i && "function" == typeof u && 1 != u.length && (c = l = !1);
                                    var p = this.__chain__,
                                        f = !!this.__actions__.length,
                                        d = o && !p,
                                        g = c && !f;
                                    if (!o && l) {
                                        t = g ? t : new rm(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: sn,
                                            args: [h],
                                            thisArg: r
                                        }), new rv(y, p)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(h), d ? n ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = eR[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    i = /^(?:pop|shift)$/.test(e);
                                rd.prototype[e] = function() {
                                    var e = arguments;
                                    if (i && !this.__chain__) {
                                        var n = this.value();
                                        return t.apply(sj(n) ? n : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(sj(r) ? r : [], e)
                                    })
                                }
                            }), rF(rm.prototype, function(e, t) {
                                var r = rd[t];
                                if (r) {
                                    var i = r.name + "";
                                    ex.call(rs, i) || (rs[i] = []), rs[i].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), rs[iX(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], rm.prototype.clone = function() {
                                var e = new rm(this.__wrapped__);
                                return e.__actions__ = iH(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = iH(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = iH(this.__views__), e
                            }, rm.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new rm(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, rm.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = sj(e),
                                    i = t < 0,
                                    n = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var i = -1, n = r.length; ++i < n;) {
                                            var s = r[i],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t6(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t5(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, n, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    u = i ? a : o - 1,
                                    l = this.__iteratees__,
                                    h = l.length,
                                    p = 0,
                                    f = t6(c, this.__takeCount__);
                                if (!r || !i && n == c && f == c) return iN(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && p < f;) {
                                    u += t;
                                    for (var g = -1, y = e[u]; ++g < h;) {
                                        var v = l[g],
                                            m = v.iteratee,
                                            _ = v.type,
                                            w = m(y);
                                        if (2 == _) y = w;
                                        else if (!w) {
                                            if (1 == _) continue e;
                                            break e
                                        }
                                    }
                                    d[p++] = y
                                }
                                return d
                            }, rd.prototype.at = ss, rd.prototype.chain = function() {
                                return si(this)
                            }, rd.prototype.commit = function() {
                                return new rv(this.value(), this.__chain__)
                            }, rd.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s6(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rd.prototype.plant = function(e) {
                                for (var t, i = this; i instanceof ry;) {
                                    var n = nk(i);
                                    n.__index__ = 0, n.__values__ = r, t ? s.__wrapped__ = n : t = n;
                                    var s = n;
                                    i = i.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rd.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof rm) {
                                    var t = e;
                                    return this.__actions__.length && (t = new rm(this)), (t = t.reverse()).__actions__.push({
                                        func: sn,
                                        args: [n1],
                                        thisArg: r
                                    }), new rv(t, this.__chain__)
                                }
                                return this.thru(n1)
                            }, rd.prototype.toJSON = rd.prototype.valueOf = rd.prototype.value = function() {
                                return iN(this.__wrapped__, this.__actions__)
                            }, rd.prototype.first = rd.prototype.head, e2 && (rd.prototype[e2] = function() {
                                return this
                            }), rd
                        }();
                    e2 ? ((e2.exports = tW)._ = tW, e3._ = tW) : e6._ = tW
                }).call(nb)
            }(nE, nE.exports);
            var nI = Object.defineProperty,
                nS = Object.defineProperties,
                nP = Object.getOwnPropertyDescriptors,
                nO = Object.getOwnPropertySymbols,
                nR = Object.prototype.hasOwnProperty,
                nN = Object.prototype.propertyIsEnumerable,
                nT = (e, t, r) => t in e ? nI(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nC = (e, t) => {
                    for (var r in t || (t = {})) nR.call(t, r) && nT(e, r, t[r]);
                    if (nO)
                        for (var r of nO(t)) nN.call(t, r) && nT(e, r, t[r]);
                    return e
                },
                nA = (e, t) => nS(e, nP(t));

            function nx(e, t, r) {
                var i;
                let n = function(e) {
                    let [t, r] = e.split(":");
                    return {
                        namespace: t,
                        reference: r
                    }
                }(e);
                return (null == (i = t.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function nD(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function nU(e) {
                return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function nj(e) {
                var t, r, i, n;
                let s = {};
                if (!(Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length)) return s;
                for (let [o, a] of Object.entries(e)) {
                    let e = np(o) ? [o] : a.chains,
                        c = a.methods || [],
                        u = a.events || [],
                        l = a.rpcMap || {},
                        h = nf(o);
                    s[h] = nA(nC(nC({}, s[h]), a), {
                        chains: nh(e, null == (t = s[h]) ? void 0 : t.chains),
                        methods: nh(c, null == (r = s[h]) ? void 0 : r.methods),
                        events: nh(u, null == (i = s[h]) ? void 0 : i.events),
                        rpcMap: nC(nC({}, l), null == (n = s[h]) ? void 0 : n.rpcMap)
                    })
                }
                return s
            }

            function nL(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function nq(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
            }
            let nM = {},
                nz = e => nM[e],
                nk = (e, t) => {
                    nM[e] = t
                };
            class n$ {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = nz("events"), this.client = nz("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nw.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nD(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nx(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new tt.r(new nv.Z(r, nz("disableProviderPing")))
                }
            }
            class nH {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = nz("events"), this.client = nz("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(nw.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || nx(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new tt.r(new nv.k(r, nz("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = parseInt(nD(t));
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                    i = i.startsWith("0x") ? i : `0x${i}`;
                    let n = parseInt(i, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: i
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${n}`);
                    else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class nV {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = nz("events"), this.client = nz("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nw.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nD(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nx(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new tt.r(new nv.Z(r, nz("disableProviderPing")))
                }
            }
            class nK {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = nz("events"), this.client = nz("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nw.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nD(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nx(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new tt.r(new nv.Z(r, nz("disableProviderPing")))
                }
            }
            class nB {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = nz("events"), this.client = nz("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nw.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t),
                            i = nD(t);
                        e[i] = this.createHttpProvider(i, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new tt.r(new nv.Z(r, nz("disableProviderPing")))
                }
            }
            class nF {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = nz("events"), this.client = nz("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nw.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nD(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nx(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new tt.r(new nv.Z(r, nz("disableProviderPing")))
                }
            }
            class nW {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = nz("events"), this.client = nz("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nw.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nD(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nx(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new tt.r(new nv.Z(r, nz("disableProviderPing")))
                }
            }
            class nG {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = nz("events"), this.client = nz("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || nx(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(nw.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nx(e, this.namespace);
                    return typeof r > "u" ? void 0 : new tt.r(new nv.Z(r, nz("disableProviderPing")))
                }
            }
            var nJ = Object.defineProperty,
                nQ = Object.defineProperties,
                nY = Object.getOwnPropertyDescriptors,
                nZ = Object.getOwnPropertySymbols,
                nX = Object.prototype.hasOwnProperty,
                n0 = Object.prototype.propertyIsEnumerable,
                n1 = (e, t, r) => t in e ? nJ(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                n5 = (e, t) => {
                    for (var r in t || (t = {})) nX.call(t, r) && n1(e, r, t[r]);
                    if (nZ)
                        for (var r of nZ(t)) n0.call(t, r) && n1(e, r, t[r]);
                    return e
                },
                n6 = (e, t) => nQ(e, nY(t));
            class n3 {
                constructor(e) {
                    this.events = new(s()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, G.pino)((0, G.getDefaultLoggerOptions)({
                        level: e ? .logger || nm
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new n3(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    let [r, i] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: n5({}, e),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, r) {
                    this.request(e, r).then(e => t(null, e)).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: ng("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(e => {
                            this.session = e, this.namespaces || (this.namespaces = function(e) {
                                let t = {};
                                for (let [r, i] of Object.entries(e)) {
                                    let e = i.methods || [],
                                        n = i.events || [],
                                        s = i.accounts || [],
                                        o = np(r) ? [r] : i.chains ? i.chains : nU(i.accounts);
                                    t[r] = {
                                        chains: o,
                                        methods: e,
                                        events: n,
                                        accounts: s
                                    }
                                }
                                return t
                            }(e.namespaces), this.persist("namespaces", this.namespaces))
                        }).catch(e => {
                            if (e.message !== i1) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        let [r, i] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(i, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let t = this.client.pairing.getAll();
                    if (ny(t)) {
                        for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await nl.init({
                        logger: this.providerOpts.logger || nm,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => nf(e)))];
                    nk("client", this.client), nk("events", this.events), nk("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let i = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    i.push(...r)
                                }), i
                            }(e, this.session),
                            r = nU(t),
                            i = function(e = {}, t = {}) {
                                let r = nj(e),
                                    i = nj(t);
                                return nE.exports.merge(r, i)
                            }(this.namespaces, this.optionalNamespaces),
                            n = n6(n5({}, i[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new nH({
                                    namespace: n
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new nV({
                                    namespace: n
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new nK({
                                    namespace: n
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new n$({
                                    namespace: n
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new nB({
                                    namespace: n
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new nF({
                                    namespace: n
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new nW({
                                    namespace: n
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new nG({
                                    namespace: n
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            let e = r.data;
                            e && ny(e) && this.events.emit("accountsChanged", e.map(nL))
                        } else if ("chainChanged" === r.name) {
                            let e = t.chainId,
                                r = t.event.data,
                                i = nf(e),
                                n = nq(e) !== nq(r) ? `${i}:${nq(r)}` : e;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: i
                        } = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = n6(n5({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", n6(n5({}, ng("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(nw.DEFAULT_CHAIN_CHANGED, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map(e => nf(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let i = nf(Object.keys(this.namespaces)[0]),
                        n = this.rpcProviders[i].getDefaultChain();
                    return [i, n]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    var r;
                    if (!this.namespaces) return;
                    let [i, n] = this.validateChain(e);
                    t || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${n_}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${n_}/${e}`)
                }
            }
            let n2 = ["eth_sendTransaction", "personal_sign"],
                n4 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                n8 = ["chainChanged", "accountsChanged"],
                n9 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var n7 = Object.defineProperty,
                se = Object.defineProperties,
                st = Object.getOwnPropertyDescriptors,
                sr = Object.getOwnPropertySymbols,
                si = Object.prototype.hasOwnProperty,
                sn = Object.prototype.propertyIsEnumerable,
                ss = (e, t, r) => t in e ? n7(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                so = (e, t) => {
                    for (var r in t || (t = {})) si.call(t, r) && ss(e, r, t[r]);
                    if (sr)
                        for (var r of sr(t)) sn.call(t, r) && ss(e, r, t[r]);
                    return e
                },
                sa = (e, t) => se(e, st(t));

            function sc(e) {
                return Number(e[0].split(":")[1])
            }

            function su(e) {
                return `0x${e.toString(16)}`
            }
            class sl {
                constructor() {
                    this.events = new n.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new sl;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: s,
                            optionalEvents: o,
                            rpcMap: a
                        } = e;
                        if (!m(t)) throw Error("Invalid chains");
                        let c = {
                                chains: t,
                                methods: i || n2,
                                events: s || n8,
                                rpcMap: so({}, t.length ? {
                                    [sc(t)]: a[sc(t)]
                                } : {})
                            },
                            u = s ? .filter(e => !n8.includes(e)),
                            l = i ? .filter(e => !n2.includes(e));
                        if (!r && !o && !n && !(null != u && u.length) && !(null != l && l.length)) return {
                            required: t.length ? c : void 0
                        };
                        let h = u ? .length && l ? .length || !r,
                            p = {
                                chains: [...new Set(h ? c.chains.concat(r || []) : r)],
                                methods: [...new Set(c.methods.concat(null != n && n.length ? n : n4))],
                                events: [...new Set(c.events.concat(null != o && o.length ? o : n9))],
                                rpcMap: a
                            };
                        return {
                            required: t.length ? c : void 0,
                            optional: r.length ? p : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(sa(so({
                                namespaces: so({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                n(Error(e.message))
                            })
                        });
                        if (!i) return;
                        let n = function(e, t = []) {
                            let r = [];
                            return Object.keys(e).forEach(i => {
                                if (t.length && !t.includes(i)) return;
                                let n = e[i];
                                r.push(...n.accounts)
                            }), r
                        }(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: su(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", su(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", sa(so({}, function(e, t) {
                            let {
                                message: r,
                                code: i
                            } = v[e];
                            return {
                                message: t ? `${r} ${t}` : r,
                                code: i
                            }
                        }("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", su(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = e ? .chains) ? t : [],
                        n = null != (r = e ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? e ? .methods || n2 : [],
                        a = i.length ? e ? .events || n8 : [],
                        c = e ? .optionalMethods || [],
                        u = e ? .optionalEvents || [],
                        l = e ? .rpcMap || this.buildRpcMap(s, e.projectId),
                        h = e ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map(e => this.formatChainId(e)),
                        optionalChains: n.map(e => this.formatChainId(e)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: l,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: h,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? sc(this.rpc.chains) : sc(this.rpc.optionalChains), this.signer = await n3.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(2835).then(r.bind(r, 82835));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(so({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && m(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    })), r && m(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : t ? .accounts), this.setAccounts(t ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
            let sh = sl
        },
        51148: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        82050: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        12884: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(82050)
        },
        84367: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            let i = r(28803);
            t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        56605: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(654);
            i.__exportStar(r(84367), t)
        },
        78155: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            let i = r(654),
                n = r(88292),
                s = r(28803),
                o = r(8061),
                a = r(56605);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = new c(e);
                        return yield t.init(), t
                    })
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        26419: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(654);
            i.__exportStar(r(78155), t), i.__exportStar(r(8061), t), i.__exportStar(r(56605), t)
        },
        19466: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            let i = r(12884);
            class n extends i.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = n
        },
        8061: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(654);
            i.__exportStar(r(19466), t)
        },
        654: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return b
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return P
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function f(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function w(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function P(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        14674: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        13855: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            let i = r(11452),
                n = i.__importDefault(r(71149));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), i.__exportStar(r(14674), t), i.__exportStar(r(67734), t)
        },
        67734: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            let i = r(14674);

            function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[t] || ""
            }

            function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[r] = t, e
            }

            function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return void 0 === e.bindings ? n(e, t) : e.bindings().context || ""
            }

            function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = o(e, r),
                    s = n.trim() ? `${n}/${t}` : t;
                return s
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = n, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = a(e, t, r),
                    o = e.child({
                        context: n
                    });
                return s(o, n, r)
            }
        },
        11452: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return b
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return P
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function f(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function w(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function P(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        43177: function() {},
        50279: function(e, t, r) {
            e = r.nmd(e);
            var i, n, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object Boolean]",
                l = "[object Date]",
                h = "[object Error]",
                p = "[object Function]",
                f = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                _ = "[object String]",
                w = "[object WeakMap]",
                b = "[object ArrayBuffer]",
                E = "[object DataView]",
                I = /^\[object .+?Constructor\]$/,
                S = /^(?:0|[1-9]\d*)$/,
                P = {};
            P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0, P[a] = P[c] = P[b] = P[u] = P[E] = P[l] = P[h] = P[p] = P[f] = P[d] = P[g] = P[v] = P[m] = P[_] = P[w] = !1;
            var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                R = "object" == typeof self && self && self.Object === Object && self,
                N = O || R || Function("return this")(),
                T = t && !t.nodeType && t,
                C = T && e && !e.nodeType && e,
                A = C && C.exports === T,
                x = A && O.process,
                D = function() {
                    try {
                        return x && x.binding && x.binding("util")
                    } catch (e) {}
                }(),
                U = D && D.isTypedArray;

            function j(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function L(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var q = Array.prototype,
                M = Function.prototype,
                z = Object.prototype,
                k = N["__core-js_shared__"],
                $ = M.toString,
                H = z.hasOwnProperty,
                V = (i = /[^.]+$/.exec(k && k.keys && k.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                K = z.toString,
                B = RegExp("^" + $.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                F = A ? N.Buffer : void 0,
                W = N.Symbol,
                G = N.Uint8Array,
                J = z.propertyIsEnumerable,
                Q = q.splice,
                Y = W ? W.toStringTag : void 0,
                Z = Object.getOwnPropertySymbols,
                X = F ? F.isBuffer : void 0,
                ee = (n = Object.keys, s = Object, function(e) {
                    return n(s(e))
                }),
                et = eP(N, "DataView"),
                er = eP(N, "Map"),
                ei = eP(N, "Promise"),
                en = eP(N, "Set"),
                es = eP(N, "WeakMap"),
                eo = eP(Object, "create"),
                ea = eN(et),
                ec = eN(er),
                eu = eN(ei),
                el = eN(en),
                eh = eN(es),
                ep = W ? W.prototype : void 0,
                ef = ep ? ep.valueOf : void 0;

            function ed(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eg(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ey(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ev(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new ey; ++t < r;) this.add(e[t])
            }

            function em(e) {
                var t = this.__data__ = new eg(e);
                this.size = t.size
            }

            function e_(e, t) {
                for (var r = e.length; r--;)
                    if (eT(e[r][0], t)) return r;
                return -1
            }

            function ew(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Y && Y in Object(e) ? function(e) {
                    var t = H.call(e, Y),
                        r = e[Y];
                    try {
                        e[Y] = void 0;
                        var i = !0
                    } catch (e) {}
                    var n = K.call(e);
                    return i && (t ? e[Y] = r : delete e[Y]), n
                }(e) : K.call(e)
            }

            function eb(e) {
                return eL(e) && ew(e) == a
            }

            function eE(e, t, r, i, n, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var u = s.get(e);
                if (u && s.get(t)) return u == t;
                var l = -1,
                    h = !0,
                    p = 2 & r ? new ev : void 0;
                for (s.set(e, t), s.set(t, e); ++l < a;) {
                    var f = e[l],
                        d = t[l];
                    if (i) var g = o ? i(d, f, l, t, e, s) : i(f, d, l, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break
                    }
                    if (p) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!p.has(t) && (f === e || n(f, e, r, i, s))) return p.push(t)
                            })) {
                            h = !1;
                            break
                        }
                    } else if (!(f === d || n(f, d, r, i, s))) {
                        h = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), h
            }

            function eI(e) {
                var t;
                return t = function(e) {
                    return null != e && eU(e.length) && !eD(e) ? function(e, t) {
                        var r, i = eA(e),
                            n = !i && eC(e),
                            s = !i && !n && ex(e),
                            o = !i && !n && !s && eq(e),
                            a = i || n || s || o,
                            c = a ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            u = c.length;
                        for (var l in e) H.call(e, l) && !(a && ("length" == l || s && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || (r = null == (r = u) ? 9007199254740991 : r) && ("number" == typeof l || S.test(l)) && l > -1 && l % 1 == 0 && l < r)) && c.push(l);
                        return c
                    }(e) : function(e) {
                        if (t = e && e.constructor, e !== ("function" == typeof t && t.prototype || z)) return ee(e);
                        var t, r = [];
                        for (var i in Object(e)) H.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e), eA(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                    return e
                }(t, eO(e))
            }

            function eS(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function eP(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!ej(r) || V && V in r) && (eD(r) ? B : I).test(eN(r)) ? r : void 0
            }
            ed.prototype.clear = function() {
                this.__data__ = eo ? eo(null) : {}, this.size = 0
            }, ed.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ed.prototype.get = function(e) {
                var t = this.__data__;
                if (eo) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return H.call(t, e) ? t[e] : void 0
            }, ed.prototype.has = function(e) {
                var t = this.__data__;
                return eo ? void 0 !== t[e] : H.call(t, e)
            }, ed.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = eo && void 0 === t ? o : t, this
            }, eg.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, eg.prototype.delete = function(e) {
                var t = this.__data__,
                    r = e_(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : Q.call(t, r, 1), --this.size, !0)
            }, eg.prototype.get = function(e) {
                var t = this.__data__,
                    r = e_(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, eg.prototype.has = function(e) {
                return e_(this.__data__, e) > -1
            }, eg.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = e_(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, ey.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ed,
                    map: new(er || eg),
                    string: new ed
                }
            }, ey.prototype.delete = function(e) {
                var t = eS(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, ey.prototype.get = function(e) {
                return eS(this, e).get(e)
            }, ey.prototype.has = function(e) {
                return eS(this, e).has(e)
            }, ey.prototype.set = function(e, t) {
                var r = eS(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, ev.prototype.add = ev.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, ev.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.clear = function() {
                this.__data__ = new eg, this.size = 0
            }, em.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, em.prototype.get = function(e) {
                return this.__data__.get(e)
            }, em.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof eg) {
                    var i = r.__data__;
                    if (!er || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new ey(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eO = Z ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }(Z(e = Object(e)), function(t) {
                        return J.call(e, t)
                    })
                } : function() {
                    return []
                },
                eR = ew;

            function eN(e) {
                if (null != e) {
                    try {
                        return $.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eT(e, t) {
                return e === t || e != e && t != t
            }(et && eR(new et(new ArrayBuffer(1))) != E || er && eR(new er) != f || ei && eR(ei.resolve()) != y || en && eR(new en) != m || es && eR(new es) != w) && (eR = function(e) {
                var t = ew(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? eN(r) : "";
                if (i) switch (i) {
                    case ea:
                        return E;
                    case ec:
                        return f;
                    case eu:
                        return y;
                    case el:
                        return m;
                    case eh:
                        return w
                }
                return t
            });
            var eC = eb(function() {
                    return arguments
                }()) ? eb : function(e) {
                    return eL(e) && H.call(e, "callee") && !J.call(e, "callee")
                },
                eA = Array.isArray,
                ex = X || function() {
                    return !1
                };

            function eD(e) {
                if (!ej(e)) return !1;
                var t = ew(e);
                return t == p || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function eU(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function ej(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function eL(e) {
                return null != e && "object" == typeof e
            }
            var eq = U ? function(e) {
                return U(e)
            } : function(e) {
                return eL(e) && eU(e.length) && !!P[ew(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, n, s) {
                    return t === r || (null != t && null != r && (eL(t) || eL(r)) ? function(e, t, r, i, n, s) {
                        var o = eA(e),
                            p = eA(t),
                            y = o ? c : eR(e),
                            w = p ? c : eR(t);
                        y = y == a ? g : y, w = w == a ? g : w;
                        var I = y == g,
                            S = w == g,
                            P = y == w;
                        if (P && ex(e)) {
                            if (!ex(t)) return !1;
                            o = !0, I = !1
                        }
                        if (P && !I) return s || (s = new em), o || eq(e) ? eE(e, t, r, i, n, s) : function(e, t, r, i, n, s, o) {
                            switch (r) {
                                case E:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case b:
                                    if (e.byteLength != t.byteLength || !s(new G(e), new G(t))) break;
                                    return !0;
                                case u:
                                case l:
                                case d:
                                    return eT(+e, +t);
                                case h:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case _:
                                    return e == t + "";
                                case f:
                                    var a = j;
                                case m:
                                    var c = 1 & i;
                                    if (a || (a = L), e.size != t.size && !c) break;
                                    var p = o.get(e);
                                    if (p) return p == t;
                                    i |= 2, o.set(e, t);
                                    var g = eE(a(e), a(t), i, n, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (ef) return ef.call(e) == ef.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, n, s);
                        if (!(1 & r)) {
                            var O = I && H.call(e, "__wrapped__"),
                                R = S && H.call(t, "__wrapped__");
                            if (O || R) {
                                var N = O ? e.value() : e,
                                    T = R ? t.value() : t;
                                return s || (s = new em), n(N, T, r, i, s)
                            }
                        }
                        return !!P && (s || (s = new em), function(e, t, r, i, n, s) {
                            var o = 1 & r,
                                a = eI(e),
                                c = a.length;
                            if (c != eI(t).length && !o) return !1;
                            for (var u = c; u--;) {
                                var l = a[u];
                                if (!(o ? l in t : H.call(t, l))) return !1
                            }
                            var h = s.get(e);
                            if (h && s.get(t)) return h == t;
                            var p = !0;
                            s.set(e, t), s.set(t, e);
                            for (var f = o; ++u < c;) {
                                var d = e[l = a[u]],
                                    g = t[l];
                                if (i) var y = o ? i(g, d, l, t, e, s) : i(d, g, l, e, t, s);
                                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                                    p = !1;
                                    break
                                }
                                f || (f = "constructor" == l)
                            }
                            if (p && !f) {
                                var v = e.constructor,
                                    m = t.constructor;
                                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (p = !1)
                            }
                            return s.delete(e), s.delete(t), p
                        }(e, t, r, i, n, s))
                    }(t, r, i, n, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        96848: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var n = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = n(e);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", l = 0, h = -1, p = e && e.length || 0, f = 0; f < p;) {
                    if (37 === e.charCodeAt(f) && f + 1 < p) {
                        switch (h = h > -1 ? h : 0, e.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (l >= c || null == r[l]) break;
                                h < f && (u += e.slice(h, f)), u += Number(r[l]), h = f + 2, f++;
                                break;
                            case 105:
                                if (l >= c || null == r[l]) break;
                                h < f && (u += e.slice(h, f)), u += Math.floor(Number(r[l])), h = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c || void 0 === r[l]) break;
                                h < f && (u += e.slice(h, f));
                                var d = typeof r[l];
                                if ("string" === d) {
                                    u += "'" + r[l] + "'", h = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[l].name || "<anonymous>", h = f + 2, f++;
                                    break
                                }
                                u += n(r[l]), h = f + 2, f++;
                                break;
                            case 115:
                                if (l >= c) break;
                                h < f && (u += e.slice(h, f)), u += String(r[l]), h = f + 2, f++;
                                break;
                            case 37:
                                h < f && (u += e.slice(h, f)), u += "%", h = f + 2, f++, l--
                        }++l
                    }++f
                }
                return -1 === h ? e : (h < p && (u += e.slice(h)), u)
            }
        },
        71149: function(e, t, r) {
            "use strict";
            let i = r(96848);
            e.exports = s;
            let n = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t;
                (e = e || {}).browser = e.browser || {};
                let r = e.browser.transmit;
                if (r && "function" != typeof r.send) throw Error("pino: transmit option must have a send function");
                let i = e.browser.write || n;
                e.browser.write && (e.browser.asObject = !0);
                let l = e.serializers || {},
                    h = function(e, t) {
                        if (Array.isArray(e)) {
                            let t = e.filter(function(e) {
                                return "!stdSerializers.err" !== e
                            });
                            return t
                        }
                        return !0 === e && Object.keys(t)
                    }(e.browser.serialize, l),
                    g = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (g = !1), "function" == typeof i && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i), !1 === e.enabled && (e.level = "silent");
                let y = e.level || "info",
                    v = Object.create(i);
                v.log || (v.log = p), Object.defineProperty(v, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(v, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(m, v, "error", "log"), o(m, v, "fatal", "error"), o(m, v, "warn", "error"), o(m, v, "info", "log"), o(m, v, "debug", "log"), o(m, v, "trace", "log")
                    }
                });
                let m = {
                    transmit: r,
                    serialize: h,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(t = e).timestamp ? t.timestamp : !1 === t.timestamp ? f : d
                };
                return v.levels = s.levels, v.level = y, v.setMaxListeners = v.getMaxListeners = v.emit = v.addListener = v.on = v.prependListener = v.once = v.prependOnceListener = v.removeListener = v.removeAllListeners = v.listeners = v.listenerCount = v.eventNames = v.write = v.flush = p, v.serializers = l, v._serialize = h, v._stdErrSerialize = g, v.child = function(t, i) {
                    if (!t) throw Error("missing bindings for child Pino");
                    i = i || {}, h && t.serializers && (i.serializers = t.serializers);
                    let n = i.serializers;
                    if (h && n) {
                        var s = Object.assign({}, l, n),
                            o = !0 === e.browser.serialize ? Object.keys(s) : h;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function p(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), r && (this._logEvent = u([].concat(e._logEvent.bindings, t)))
                    }
                    return p.prototype = this, new p(this)
                }, r && (v._logEvent = u()), v
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? p : c[r] ? c[r] : n[r] || n[o] || p,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== p) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    l = Array(arguments.length),
                                    h = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                for (var p = 0; p < l.length; p++) l[p] = arguments[p];
                                if (e.serialize && !e.asObject && a(l, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(h, function(e, t, r, n) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            u = {};
                                        n && (u.time = n), u.level = s.levels.values[t];
                                        let l = (0 | e._childLevel) + 1;
                                        if (l < 1 && (l = 1), null !== c && "object" == typeof c) {
                                            for (; l-- && "object" == typeof o[0];) Object.assign(u, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (u.msg = c), u
                                    }(this, r, l, c)) : o.apply(h, l), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        n = s.levels.values[i],
                                        o = s.levels.values[r];
                                    if (o < n) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            n = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            l = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === l.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, c), e._logEvent = u(l)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, l)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let n in e)
                    if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
                    else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return e[r].apply(this, i)
                }
            }

            function u(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l() {
                return {}
            }

            function h(e) {
                return e
            }

            function p() {}

            function f() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: l,
                mapHttpResponse: l,
                wrapRequestSerializer: h,
                wrapResponseSerializer: h,
                wrapErrorSerializer: h,
                req: l,
                res: l,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: f,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);
import {
  S as s,
  i as a,
  s as e,
  x as t,
  y as r,
  e as c,
  c as o,
  b as l,
  d as i,
  h as n,
  z as v,
  k as f,
  A as p,
  B as u,
  C as h,
  D as d,
  E as g,
  u as m,
  v as $,
  F as I,
  o as b,
  p as E,
  r as D,
  w as y,
  a as V,
  t as w,
  f as G,
  g as T,
  j as x,
  l as M,
  m as A,
  n as S,
} from './client.17c49226.js'
const C = (s, a) => console.warn('[svelte-headroom]:', s, a)
function j(s) {
  let a,
    e,
    I,
    b,
    E,
    D,
    y = !1,
    V = () => {
      y = !1
    }
  t(s[13])
  const w = s[12].default,
    G = r(w, s, s[11], null)
  return {
    c() {
      ;(e = c('div')), G && G.c(), this.h()
    },
    l(s) {
      e = o(s, 'DIV', { class: !0 })
      var a = l(e)
      G && G.l(a), a.forEach(i), this.h()
    },
    h() {
      n(e, 'class', (I = v(s[0]) + ' svelte-1ti945t'))
    },
    m(t, r, c) {
      f(t, e, r),
        G && G.m(e, null),
        (E = !0),
        c && p(D),
        (D = [
          u(window, 'scroll', () => {
            ;(y = !0), clearTimeout(a), (a = setTimeout(V, 100)), s[13]()
          }),
          h((b = s[2].call(null, e))),
        ])
    },
    p(s, [t]) {
      2 & t &&
        !y &&
        ((y = !0),
        clearTimeout(a),
        scrollTo(window.pageXOffset, s[1]),
        (a = setTimeout(V, 100))),
        G && G.p && 2048 & t && G.p(d(w, s, s[11], null), g(w, s[11], t, null)),
        (!E || (1 & t && I !== (I = v(s[0]) + ' svelte-1ti945t'))) &&
          n(e, 'class', I)
    },
    i(s) {
      E || (m(G, s), (E = !0))
    },
    o(s) {
      $(G, s), (E = !1)
    },
    d(s) {
      s && i(e), G && G.d(s), p(D)
    },
  }
}
function O(s, a, e) {
  let { duration: t = '300ms' } = a,
    { offset: r = 0 } = a,
    { tolerance: c = 0 } = a,
    o = '',
    l = '',
    i = 0,
    n = 0
  const v = I()
  function f(s = 0, a = 0) {
    return s < r
      ? ''
      : Math.abs(a) < c
      ? o
      : a > 0
      ? ''
      : a < 0
      ? 'svelte-headroom--unpin'
      : o
  }
  function p(s = 0) {
    const a = f(s, n - s)
    return (n = s), a
  }
  let { $$slots: u = {}, $$scope: h } = a
  return (
    (s.$set = (s) => {
      'duration' in s && e(3, (t = s.duration)),
        'offset' in s && e(4, (r = s.offset)),
        'tolerance' in s && e(5, (c = s.tolerance)),
        '$$scope' in s && e(11, (h = s.$$scope))
    }),
    (s.$$.update = () => {
      123 & s.$$.dirty &&
        (!(function ({ duration: s, offset: a, tolerance: e }) {
          'number' != typeof a && C('The `offset` prop is not a number: ', a),
            'number' != typeof e &&
              C('The `tolerance` prop is not a number: ', e),
            'string' != typeof s &&
              C("The `duration` prop is not a string such as '200ms': ", s)
        })({ duration: t, offset: r, tolerance: c }),
        e(0, (o = p(i))),
        o !== l && v(o ? 'unpin' : 'pin'),
        e(6, (l = o)))
    }),
    [
      o,
      i,
      function (s) {
        s.style.transitionDuration = t
      },
      t,
      r,
      c,
      l,
      n,
      v,
      f,
      p,
      h,
      u,
      function () {
        e(1, (i = window.pageYOffset))
      },
    ]
  )
}
class P extends s {
  constructor(s) {
    super(), a(this, s, O, j, e, { duration: 3, offset: 4, tolerance: 5 })
  }
}
function k(s) {
  let a, e, t, r, v, p, u, h, d, g
  return {
    c() {
      ;(a = c('div')),
        (e = c('img')),
        (r = V()),
        (v = c('div')),
        (p = c('div')),
        (u = w(s[0])),
        (h = V()),
        (d = c('img')),
        this.h()
    },
    l(t) {
      a = o(t, 'DIV', { id: !0, class: !0 })
      var c = l(a)
      ;(e = o(c, 'IMG', { src: !0, height: !0, style: !0 })),
        (r = G(c)),
        (v = o(c, 'DIV', { id: !0, class: !0 }))
      var n = l(v)
      p = o(n, 'DIV', { style: !0, class: !0 })
      var f = l(p)
      ;(u = T(f, s[0])),
        f.forEach(i),
        (h = G(n)),
        (d = o(n, 'IMG', { src: !0 })),
        n.forEach(i),
        c.forEach(i),
        this.h()
    },
    h() {
      e.src !== (t = 'steambrand.svg') && n(e, 'src', 'steambrand.svg'),
        n(e, 'height', '28px'),
        x(e, 'opacity', '1'),
        x(p, 'opacity', '0.6'),
        n(p, 'class', 'svelte-13oo9il'),
        d.src !== (g = 'search.svg') && n(d, 'src', 'search.svg'),
        n(v, 'id', 'navbar--right'),
        n(v, 'class', 'svelte-13oo9il'),
        n(a, 'id', 'navbar'),
        n(a, 'class', 'svelte-13oo9il')
    },
    m(s, t) {
      f(s, a, t), M(a, e), M(a, r), M(a, v), M(v, p), M(p, u), M(v, h), M(v, d)
    },
    p(s, a) {
      1 & a && A(u, s[0])
    },
    d(s) {
      s && i(a)
    },
  }
}
function z(s) {
  let a
  const e = new P({
    props: {
      offset: 50,
      tolerance: 5,
      $$slots: { default: [k] },
      $$scope: { ctx: s },
    },
  })
  return {
    c() {
      b(e.$$.fragment)
    },
    l(s) {
      E(e.$$.fragment, s)
    },
    m(s, t) {
      D(e, s, t), (a = !0)
    },
    p(s, [a]) {
      const t = {}
      3 & a && (t.$$scope = { dirty: a, ctx: s }), e.$set(t)
    },
    i(s) {
      a || (m(e.$$.fragment, s), (a = !0))
    },
    o(s) {
      $(e.$$.fragment, s), (a = !1)
    },
    d(s) {
      y(e, s)
    },
  }
}
function B(s, a, e) {
  let { title: t } = a
  return (
    (s.$set = (s) => {
      'title' in s && e(0, (t = s.title))
    }),
    [t]
  )
}
class F extends s {
  constructor(s) {
    super(), a(this, s, B, z, e, { title: 0 })
  }
}
function N(s) {
  let a,
    e,
    t,
    r,
    v,
    p,
    u,
    h,
    d,
    g,
    m,
    $,
    I,
    b,
    E,
    D,
    y,
    x,
    A,
    C,
    j,
    O,
    P,
    k,
    z,
    B,
    F,
    N,
    X,
    Y,
    q,
    H,
    J,
    K,
    L
  return {
    c() {
      ;(a = c('div')),
        (e = c('a')),
        (t = c('div')),
        (r = c('img')),
        (p = w('\n      Store')),
        (h = V()),
        (d = c('a')),
        (g = c('div')),
        (m = c('img')),
        (I = w('\n      Profile')),
        (E = V()),
        (D = c('a')),
        (y = c('div')),
        (x = c('img')),
        (C = w('\n      Guard')),
        (O = V()),
        (P = c('a')),
        (k = c('div')),
        (z = c('img')),
        (F = w('\n      Chat')),
        (X = V()),
        (Y = c('a')),
        (q = c('div')),
        (H = c('img')),
        (K = w('\n      Support')),
        this.h()
    },
    l(s) {
      a = o(s, 'DIV', { id: !0, class: !0 })
      var c = l(a)
      e = o(c, 'A', { href: !0 })
      var n = l(e)
      t = o(n, 'DIV', { class: !0 })
      var v = l(t)
      ;(r = o(v, 'IMG', { src: !0, class: !0 })),
        (p = T(v, '\n      Store')),
        v.forEach(i),
        n.forEach(i),
        (h = G(c)),
        (d = o(c, 'A', { href: !0 }))
      var f = l(d)
      g = o(f, 'DIV', { class: !0 })
      var u = l(g)
      ;(m = o(u, 'IMG', { src: !0, class: !0 })),
        (I = T(u, '\n      Profile')),
        u.forEach(i),
        f.forEach(i),
        (E = G(c)),
        (D = o(c, 'A', { href: !0 }))
      var $ = l(D)
      y = o($, 'DIV', { class: !0 })
      var b = l(y)
      ;(x = o(b, 'IMG', { src: !0, class: !0 })),
        (C = T(b, '\n      Guard')),
        b.forEach(i),
        $.forEach(i),
        (O = G(c)),
        (P = o(c, 'A', { href: !0 }))
      var V = l(P)
      k = o(V, 'DIV', { class: !0 })
      var w = l(k)
      ;(z = o(w, 'IMG', { src: !0, class: !0 })),
        (F = T(w, '\n      Chat')),
        w.forEach(i),
        V.forEach(i),
        (X = G(c)),
        (Y = o(c, 'A', { href: !0 }))
      var M = l(Y)
      q = o(M, 'DIV', { class: !0 })
      var A = l(q)
      ;(H = o(A, 'IMG', { src: !0, class: !0 })),
        (K = T(A, '\n      Support')),
        A.forEach(i),
        M.forEach(i),
        c.forEach(i),
        this.h()
    },
    h() {
      r.src !== (v = 1 == s[0] ? 'store-active.svg' : 'store.svg') &&
        n(r, 'src', v),
        n(r, 'class', 'svelte-1paas4'),
        n(
          t,
          'class',
          (u = 'tabItem ' + (1 === s[0] ? 'selected' : '') + ' svelte-1paas4')
        ),
        n(e, 'href', 'store'),
        m.src !== ($ = 2 == s[0] ? 'profile-active.svg' : 'profile.svg') &&
          n(m, 'src', $),
        n(m, 'class', 'svelte-1paas4'),
        n(
          g,
          'class',
          (b = 'tabItem ' + (2 === s[0] ? 'selected' : '') + ' svelte-1paas4')
        ),
        n(d, 'href', 'profile'),
        x.src !== (A = 3 == s[0] ? 'guard-active.svg' : 'guard.svg') &&
          n(x, 'src', A),
        n(x, 'class', 'svelte-1paas4'),
        n(
          y,
          'class',
          (j = 'tabItem ' + (3 === s[0] ? 'selected' : '') + ' svelte-1paas4')
        ),
        n(D, 'href', './'),
        z.src !== (B = 4 == s[0] ? 'chat-active.svg' : 'chat.svg') &&
          n(z, 'src', B),
        n(z, 'class', 'svelte-1paas4'),
        n(
          k,
          'class',
          (N = 'tabItem ' + (4 === s[0] ? 'selected' : '') + ' svelte-1paas4')
        ),
        n(P, 'href', 'chat'),
        H.src !== (J = 5 == s[0] ? 'support-active.svg' : 'support.svg') &&
          n(H, 'src', J),
        n(H, 'class', 'svelte-1paas4'),
        n(
          q,
          'class',
          (L = 'tabItem ' + (5 === s[0] ? 'selected' : '') + ' svelte-1paas4')
        ),
        n(Y, 'href', 'support'),
        n(a, 'id', 'tabbar'),
        n(a, 'class', 'svelte-1paas4')
    },
    m(s, c) {
      f(s, a, c),
        M(a, e),
        M(e, t),
        M(t, r),
        M(t, p),
        M(a, h),
        M(a, d),
        M(d, g),
        M(g, m),
        M(g, I),
        M(a, E),
        M(a, D),
        M(D, y),
        M(y, x),
        M(y, C),
        M(a, O),
        M(a, P),
        M(P, k),
        M(k, z),
        M(k, F),
        M(a, X),
        M(a, Y),
        M(Y, q),
        M(q, H),
        M(q, K)
    },
    p(s, [a]) {
      1 & a &&
        r.src !== (v = 1 == s[0] ? 'store-active.svg' : 'store.svg') &&
        n(r, 'src', v),
        1 & a &&
          u !==
            (u =
              'tabItem ' + (1 === s[0] ? 'selected' : '') + ' svelte-1paas4') &&
          n(t, 'class', u),
        1 & a &&
          m.src !== ($ = 2 == s[0] ? 'profile-active.svg' : 'profile.svg') &&
          n(m, 'src', $),
        1 & a &&
          b !==
            (b =
              'tabItem ' + (2 === s[0] ? 'selected' : '') + ' svelte-1paas4') &&
          n(g, 'class', b),
        1 & a &&
          x.src !== (A = 3 == s[0] ? 'guard-active.svg' : 'guard.svg') &&
          n(x, 'src', A),
        1 & a &&
          j !==
            (j =
              'tabItem ' + (3 === s[0] ? 'selected' : '') + ' svelte-1paas4') &&
          n(y, 'class', j),
        1 & a &&
          z.src !== (B = 4 == s[0] ? 'chat-active.svg' : 'chat.svg') &&
          n(z, 'src', B),
        1 & a &&
          N !==
            (N =
              'tabItem ' + (4 === s[0] ? 'selected' : '') + ' svelte-1paas4') &&
          n(k, 'class', N),
        1 & a &&
          H.src !== (J = 5 == s[0] ? 'support-active.svg' : 'support.svg') &&
          n(H, 'src', J),
        1 & a &&
          L !==
            (L =
              'tabItem ' + (5 === s[0] ? 'selected' : '') + ' svelte-1paas4') &&
          n(q, 'class', L)
    },
    i: S,
    o: S,
    d(s) {
      s && i(a)
    },
  }
}
function X(s, a, e) {
  let { location: t } = a
  return (
    (s.$set = (s) => {
      'location' in s && e(0, (t = s.location))
    }),
    [t]
  )
}
class Y extends s {
  constructor(s) {
    super(), a(this, s, X, N, e, { location: 0 })
  }
}
export { F as N, Y as T }

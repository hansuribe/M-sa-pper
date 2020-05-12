import {
  S as e,
  i as a,
  s as n,
  e as s,
  a as t,
  t as l,
  c as r,
  f as m,
  g as o,
  h as c,
  j as $,
  k as i,
  m as g,
  n as f,
  d as h,
  b as u,
  l as p,
  o as v,
  p as d,
  r as w,
  u as x,
  v as E,
  w as j,
  H as I,
  I as q,
  q as L,
} from './client.17c49226.js'
import { N as y, T as b } from './Tabbar.2448f4e0.js'
function S(e) {
  let a, n, u, p
  return {
    c() {
      ;(a = s('img')), (u = t()), (p = l(e[0])), this.h()
    },
    l(n) {
      ;(a = r(n, 'IMG', { src: !0, style: !0, class: !0 })),
        (u = m(n)),
        (p = o(n, e[0])),
        this.h()
    },
    h() {
      a.src !== (n = e[1]) && c(a, 'src', n),
        $(a, 'height', e[2]),
        c(a, 'class', 'svelte-1tuxmip')
    },
    m(e, n) {
      i(e, a, n), i(e, u, n), i(e, p, n)
    },
    p(e, [s]) {
      2 & s && a.src !== (n = e[1]) && c(a, 'src', n),
        4 & s && $(a, 'height', e[2]),
        1 & s && g(p, e[0])
    },
    i: f,
    o: f,
    d(e) {
      e && h(a), e && h(u), e && h(p)
    },
  }
}
function k(e, a, n) {
  let { name: s } = a,
    { logo: t } = a,
    { height: l } = a
  return (
    (e.$set = (e) => {
      'name' in e && n(0, (s = e.name)),
        'logo' in e && n(1, (t = e.logo)),
        'height' in e && n(2, (l = e.height))
    }),
    [s, t, l]
  )
}
class C extends e {
  constructor(e) {
    super(), a(this, e, k, S, n, { name: 0, logo: 1, height: 2 })
  }
}
function H(e) {
  let a, n
  return {
    c() {
      ;(a = s('h3')), (n = l(e[0])), this.h()
    },
    l(s) {
      a = r(s, 'H3', { class: !0 })
      var t = u(a)
      ;(n = o(t, e[0])), t.forEach(h), this.h()
    },
    h() {
      c(a, 'class', 'svelte-mx8qlj')
    },
    m(e, s) {
      i(e, a, s), p(a, n)
    },
    p(e, a) {
      1 & a && g(n, e[0])
    },
    d(e) {
      e && h(a)
    },
  }
}
function M(e) {
  let a, n, l, o, $, g
  const f = new C({ props: { name: 'Dota 2', logo: 'dota2.svg' } }),
    p = new C({ props: { name: 'Stardew Valley', logo: 'stardewvalley.svg' } }),
    I = new C({ props: { name: 'Half-Life: Alyx', logo: 'halflifealyx.svg' } })
  return {
    c() {
      ;(a = s('li')),
        v(f.$$.fragment),
        (n = t()),
        (l = s('li')),
        v(p.$$.fragment),
        (o = t()),
        ($ = s('li')),
        v(I.$$.fragment),
        this.h()
    },
    l(e) {
      a = r(e, 'LI', { class: !0 })
      var s = u(a)
      d(f.$$.fragment, s),
        s.forEach(h),
        (n = m(e)),
        (l = r(e, 'LI', { class: !0 }))
      var t = u(l)
      d(p.$$.fragment, t),
        t.forEach(h),
        (o = m(e)),
        ($ = r(e, 'LI', { class: !0 }))
      var c = u($)
      d(I.$$.fragment, c), c.forEach(h), this.h()
    },
    h() {
      c(a, 'class', 'svelte-mx8qlj'),
        c(l, 'class', 'svelte-mx8qlj'),
        c($, 'class', 'svelte-mx8qlj')
    },
    m(e, s) {
      i(e, a, s),
        w(f, a, null),
        i(e, n, s),
        i(e, l, s),
        w(p, l, null),
        i(e, o, s),
        i(e, $, s),
        w(I, $, null),
        (g = !0)
    },
    i(e) {
      g ||
        (x(f.$$.fragment, e),
        x(p.$$.fragment, e),
        x(I.$$.fragment, e),
        (g = !0))
    },
    o(e) {
      E(f.$$.fragment, e), E(p.$$.fragment, e), E(I.$$.fragment, e), (g = !1)
    },
    d(e) {
      e && h(a), j(f), e && h(n), e && h(l), j(p), e && h(o), e && h($), j(I)
    },
  }
}
function D(e) {
  let a, n
  const t = new C({ props: { name: e[2], logo: 'configure.svg' } })
  return {
    c() {
      ;(a = s('li')), v(t.$$.fragment), this.h()
    },
    l(e) {
      a = r(e, 'LI', { class: !0 })
      var n = u(a)
      d(t.$$.fragment, n), n.forEach(h), this.h()
    },
    h() {
      c(a, 'class', 'svelte-mx8qlj')
    },
    m(e, s) {
      i(e, a, s), w(t, a, null), (n = !0)
    },
    p(e, a) {
      const n = {}
      4 & a && (n.name = e[2]), t.$set(n)
    },
    i(e) {
      n || (x(t.$$.fragment, e), (n = !0))
    },
    o(e) {
      E(t.$$.fragment, e), (n = !1)
    },
    d(e) {
      e && h(a), j(t)
    },
  }
}
function G(e) {
  let a, n, l, o, $, g, f, p, I, q
  const L = new C({
      props: { name: 'Games, Software, etc.', logo: 'games.svg' },
    }),
    y = new C({ props: { name: 'Puchases', logo: 'purchases.svg' } }),
    b = new C({ props: { name: 'My Account', logo: 'myaccount.svg' } }),
    S = new C({
      props: {
        name: 'Trading, Gifting, Items, Community Market',
        logo: 'trading.svg',
      },
    }),
    k = new C({ props: { name: 'Steam Community', logo: 'community.svg' } })
  return {
    c() {
      ;(a = s('li')),
        v(L.$$.fragment),
        (n = t()),
        (l = s('li')),
        v(y.$$.fragment),
        (o = t()),
        ($ = s('li')),
        v(b.$$.fragment),
        (g = t()),
        (f = s('li')),
        v(S.$$.fragment),
        (p = t()),
        (I = s('li')),
        v(k.$$.fragment),
        this.h()
    },
    l(e) {
      a = r(e, 'LI', { class: !0 })
      var s = u(a)
      d(L.$$.fragment, s),
        s.forEach(h),
        (n = m(e)),
        (l = r(e, 'LI', { class: !0 }))
      var t = u(l)
      d(y.$$.fragment, t),
        t.forEach(h),
        (o = m(e)),
        ($ = r(e, 'LI', { class: !0 }))
      var c = u($)
      d(b.$$.fragment, c),
        c.forEach(h),
        (g = m(e)),
        (f = r(e, 'LI', { class: !0 }))
      var i = u(f)
      d(S.$$.fragment, i),
        i.forEach(h),
        (p = m(e)),
        (I = r(e, 'LI', { class: !0 }))
      var v = u(I)
      d(k.$$.fragment, v), v.forEach(h), this.h()
    },
    h() {
      c(a, 'class', 'svelte-mx8qlj'),
        c(l, 'class', 'svelte-mx8qlj'),
        c($, 'class', 'svelte-mx8qlj'),
        c(f, 'class', 'svelte-mx8qlj'),
        c(I, 'class', 'svelte-mx8qlj')
    },
    m(e, s) {
      i(e, a, s),
        w(L, a, null),
        i(e, n, s),
        i(e, l, s),
        w(y, l, null),
        i(e, o, s),
        i(e, $, s),
        w(b, $, null),
        i(e, g, s),
        i(e, f, s),
        w(S, f, null),
        i(e, p, s),
        i(e, I, s),
        w(k, I, null),
        (q = !0)
    },
    i(e) {
      q ||
        (x(L.$$.fragment, e),
        x(y.$$.fragment, e),
        x(b.$$.fragment, e),
        x(S.$$.fragment, e),
        x(k.$$.fragment, e),
        (q = !0))
    },
    o(e) {
      E(L.$$.fragment, e),
        E(y.$$.fragment, e),
        E(b.$$.fragment, e),
        E(S.$$.fragment, e),
        E(k.$$.fragment, e),
        (q = !1)
    },
    d(e) {
      e && h(a),
        j(L),
        e && h(n),
        e && h(l),
        j(y),
        e && h(o),
        e && h($),
        j(b),
        e && h(g),
        e && h(f),
        j(S),
        e && h(p),
        e && h(I),
        j(k)
    },
  }
}
function T(e) {
  let a,
    n,
    l,
    o,
    $,
    g,
    f = !e[1] && !e[3] && H(e),
    v = !e[1] && !e[3] && M(),
    d = e[1] && D(e),
    w = e[3] && G()
  return {
    c() {
      ;(a = s('div')),
        f && f.c(),
        (n = t()),
        (l = s('ul')),
        v && v.c(),
        (o = t()),
        d && d.c(),
        ($ = t()),
        w && w.c(),
        this.h()
    },
    l(e) {
      a = r(e, 'DIV', { id: !0 })
      var s = u(a)
      f && f.l(s), (n = m(s)), (l = r(s, 'UL', { class: !0 }))
      var t = u(l)
      v && v.l(t),
        (o = m(t)),
        d && d.l(t),
        ($ = m(t)),
        w && w.l(t),
        t.forEach(h),
        s.forEach(h),
        this.h()
    },
    h() {
      c(l, 'class', 'svelte-mx8qlj'), c(a, 'id', 'card')
    },
    m(e, s) {
      i(e, a, s),
        f && f.m(a, null),
        p(a, n),
        p(a, l),
        v && v.m(l, null),
        p(l, o),
        d && d.m(l, null),
        p(l, $),
        w && w.m(l, null),
        (g = !0)
    },
    p(e, [s]) {
      e[1] || e[3]
        ? f && (f.d(1), (f = null))
        : f
        ? f.p(e, s)
        : ((f = H(e)), f.c(), f.m(a, n)),
        e[1] || e[3]
          ? v &&
            (I(),
            E(v, 1, 1, () => {
              v = null
            }),
            q())
          : v
          ? 10 & s && x(v, 1)
          : ((v = M()), v.c(), x(v, 1), v.m(l, o)),
        e[1]
          ? d
            ? (d.p(e, s), 2 & s && x(d, 1))
            : ((d = D(e)), d.c(), x(d, 1), d.m(l, $))
          : d &&
            (I(),
            E(d, 1, 1, () => {
              d = null
            }),
            q()),
        e[3]
          ? w
            ? 8 & s && x(w, 1)
            : ((w = G()), w.c(), x(w, 1), w.m(l, null))
          : w &&
            (I(),
            E(w, 1, 1, () => {
              w = null
            }),
            q())
    },
    i(e) {
      g || (x(v), x(d), x(w), (g = !0))
    },
    o(e) {
      E(v), E(d), E(w), (g = !1)
    },
    d(e) {
      e && h(a), f && f.d(), v && v.d(), d && d.d(), w && w.d()
    },
  }
}
function V(e, a, n) {
  let { title: s } = a,
    { single: t } = a,
    { name: l } = a,
    { icon: r } = a,
    { combined: m } = a
  return (
    (e.$set = (e) => {
      'title' in e && n(0, (s = e.title)),
        'single' in e && n(1, (t = e.single)),
        'name' in e && n(2, (l = e.name)),
        'icon' in e && n(4, (r = e.icon)),
        'combined' in e && n(3, (m = e.combined))
    }),
    [s, t, l, m, r]
  )
}
class A extends e {
  constructor(e) {
    super(),
      a(this, e, V, T, n, {
        title: 0,
        single: 1,
        name: 2,
        icon: 4,
        combined: 3,
      })
  }
}
function P(e) {
  let a, n, $, g, I, q, S, k, C, H
  const M = new y({ props: { title: 'Support' } }),
    D = new A({ props: { title: 'Recent Products' } }),
    G = new A({ props: { single: 'true', name: 'Configure app' } }),
    T = new A({ props: { combined: 'true', name: 'Configure app' } }),
    V = new b({ props: { location: 5 } })
  return {
    c() {
      ;(a = t()),
        v(M.$$.fragment),
        (n = t()),
        ($ = s('div')),
        v(D.$$.fragment),
        (g = t()),
        v(G.$$.fragment),
        (I = t()),
        v(T.$$.fragment),
        (q = t()),
        (S = s('h5')),
        (k = l('rohanharikr/commit vesion')),
        (C = t()),
        v(V.$$.fragment),
        this.h()
    },
    l(e) {
      L('[data-svelte="svelte-51c9qg"]', document.head).forEach(h),
        (a = m(e)),
        d(M.$$.fragment, e),
        (n = m(e)),
        ($ = r(e, 'DIV', { id: !0, class: !0 }))
      var s = u($)
      d(D.$$.fragment, s),
        (g = m(s)),
        d(G.$$.fragment, s),
        (I = m(s)),
        d(T.$$.fragment, s),
        (q = m(s)),
        (S = r(s, 'H5', { class: !0 }))
      var t = u(S)
      ;(k = o(t, 'rohanharikr/commit vesion')),
        t.forEach(h),
        s.forEach(h),
        (C = m(e)),
        d(V.$$.fragment, e),
        this.h()
    },
    h() {
      ;(document.title = 'Support :: Steam Mobile'),
        c(S, 'class', 'svelte-1pwsucv'),
        c($, 'id', 'support'),
        c($, 'class', 'svelte-1pwsucv')
    },
    m(e, s) {
      i(e, a, s),
        w(M, e, s),
        i(e, n, s),
        i(e, $, s),
        w(D, $, null),
        p($, g),
        w(G, $, null),
        p($, I),
        w(T, $, null),
        p($, q),
        p($, S),
        p(S, k),
        i(e, C, s),
        w(V, e, s),
        (H = !0)
    },
    p: f,
    i(e) {
      H ||
        (x(M.$$.fragment, e),
        x(D.$$.fragment, e),
        x(G.$$.fragment, e),
        x(T.$$.fragment, e),
        x(V.$$.fragment, e),
        (H = !0))
    },
    o(e) {
      E(M.$$.fragment, e),
        E(D.$$.fragment, e),
        E(G.$$.fragment, e),
        E(T.$$.fragment, e),
        E(V.$$.fragment, e),
        (H = !1)
    },
    d(e) {
      e && h(a),
        j(M, e),
        e && h(n),
        e && h($),
        j(D),
        j(G),
        j(T),
        e && h(C),
        j(V, e)
    },
  }
}
export default class extends e {
  constructor(e) {
    super(), a(this, e, null, P, n, {})
  }
}

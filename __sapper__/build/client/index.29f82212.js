import {
  S as a,
  i as e,
  s,
  e as r,
  a as t,
  t as l,
  c as n,
  b as i,
  d as c,
  f as o,
  g as d,
  h as g,
  j as f,
  k as m,
  l as h,
  m as $,
  n as u,
  o as v,
  q as b,
  p,
  r as w,
  u as D,
  v as E,
  w as I,
} from './client.17c49226.js'
import { N as x, T as V } from './Tabbar.2448f4e0.js'
import { u as j } from './stores.e90cc3d3.js'
function k(a) {
  let e,
    s,
    v,
    b,
    p,
    w,
    D,
    E,
    I,
    x,
    V = (a[1] || a[3]()) + ''
  return {
    c() {
      ;(e = r('div')),
        (s = r('div')),
        (v = t()),
        (b = r('div')),
        (p = t()),
        (w = r('div')),
        (D = l(V)),
        (E = t()),
        (I = r('div')),
        (x = l(a[2])),
        this.h()
    },
    l(r) {
      e = n(r, 'DIV', { id: !0, class: !0 })
      var t = i(e)
      ;(s = n(t, 'DIV', { class: !0, style: !0 })),
        i(s).forEach(c),
        (v = o(t)),
        (b = n(t, 'DIV', { class: !0 })),
        i(b).forEach(c),
        (p = o(t)),
        (w = n(t, 'DIV', { id: !0, style: !0, class: !0 }))
      var l = i(w)
      ;(D = d(l, V)),
        l.forEach(c),
        (E = o(t)),
        (I = n(t, 'DIV', { id: !0, class: !0 }))
      var g = i(I)
      ;(x = d(g, a[2])), g.forEach(c), t.forEach(c), this.h()
    },
    h() {
      g(s, 'class', 'timerbar svelte-e6vlhl'),
        f(s, 'width', 100 - 10 * a[0] + '%'),
        f(
          s,
          'background-image',
          a[0] >= 7
            ? 'linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)'
            : 'linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)'
        ),
        f(s, 'z-index', '9999'),
        g(b, 'class', 'timerbar trail svelte-e6vlhl'),
        g(w, 'id', 'code'),
        f(w, 'color', a[0] >= 7 ? '#AD2821' : 'white'),
        g(w, 'class', 'svelte-e6vlhl'),
        g(I, 'id', 'username'),
        g(I, 'class', 'svelte-e6vlhl'),
        g(e, 'id', 'wrapper'),
        g(e, 'class', 'svelte-e6vlhl')
    },
    m(a, r) {
      m(a, e, r),
        h(e, s),
        h(e, v),
        h(e, b),
        h(e, p),
        h(e, w),
        h(w, D),
        h(e, E),
        h(e, I),
        h(I, x)
    },
    p(a, [e]) {
      1 & e && f(s, 'width', 100 - 10 * a[0] + '%'),
        1 & e &&
          f(
            s,
            'background-image',
            a[0] >= 7
              ? 'linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)'
              : 'linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)'
          ),
        2 & e && V !== (V = (a[1] || a[3]()) + '') && $(D, V),
        1 & e && f(w, 'color', a[0] >= 7 ? '#AD2821' : 'white'),
        4 & e && $(x, a[2])
    },
    i: u,
    o: u,
    d(a) {
      a && c(e)
    },
  }
}
function S(a, e, s) {
  let r,
    t = 0
  function l() {
    s(1, (r = Math.random().toString(36).slice(-5).toUpperCase()))
  }
  let n
  setInterval(function () {
    t < 9 ? s(0, ++t) : (s(0, (t = 0)), l())
  }, 1e3)
  j.subscribe((a) => {
    s(2, (n = a))
  })
  return [t, r, n, l]
}
class q extends a {
  constructor(a) {
    super(), e(this, a, S, k, s, {})
  }
}
class y extends a {
  constructor(a) {
    super(), e(this, a, null, null, s, {})
  }
}
function z(a) {
  let e, s, l, d, f, $
  const j = new x({ props: { title: 'Guard' } }),
    k = new q({}),
    S = new y({}),
    z = new V({ props: { location: 3 } })
  return {
    c() {
      ;(e = t()),
        v(j.$$.fragment),
        (s = t()),
        (l = r('div')),
        v(k.$$.fragment),
        (d = t()),
        v(S.$$.fragment),
        (f = t()),
        v(z.$$.fragment),
        this.h()
    },
    l(a) {
      b('[data-svelte="svelte-xql9z2"]', document.head).forEach(c),
        (e = o(a)),
        p(j.$$.fragment, a),
        (s = o(a)),
        (l = n(a, 'DIV', { id: !0, class: !0 }))
      var r = i(l)
      p(k.$$.fragment, r),
        (d = o(r)),
        p(S.$$.fragment, r),
        r.forEach(c),
        (f = o(a)),
        p(z.$$.fragment, a),
        this.h()
    },
    h() {
      ;(document.title = 'Guard :: Steam Mobile'),
        g(l, 'id', 'guard'),
        g(l, 'class', 'svelte-1w0j7dt')
    },
    m(a, r) {
      m(a, e, r),
        w(j, a, r),
        m(a, s, r),
        m(a, l, r),
        w(k, l, null),
        h(l, d),
        w(S, l, null),
        m(a, f, r),
        w(z, a, r),
        ($ = !0)
    },
    p: u,
    i(a) {
      $ ||
        (D(j.$$.fragment, a),
        D(k.$$.fragment, a),
        D(S.$$.fragment, a),
        D(z.$$.fragment, a),
        ($ = !0))
    },
    o(a) {
      E(j.$$.fragment, a),
        E(k.$$.fragment, a),
        E(S.$$.fragment, a),
        E(z.$$.fragment, a),
        ($ = !1)
    },
    d(a) {
      a && c(e), I(j, a), a && c(s), a && c(l), I(k), I(S), a && c(f), I(z, a)
    },
  }
}
export default class extends a {
  constructor(a) {
    super(), e(this, a, null, z, s, {})
  }
}

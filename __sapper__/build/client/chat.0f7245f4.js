import {
  S as e,
  i as s,
  s as a,
  e as t,
  a as n,
  t as l,
  c as r,
  b as i,
  d as m,
  f,
  g as c,
  h as o,
  j as u,
  z as g,
  k as $,
  l as h,
  m as d,
  n as p,
  o as v,
  p as b,
  r as I,
  u as w,
  v as E,
  w as N,
  A as D,
  B as V,
  H as y,
  I as z,
  q as k,
} from './client.17c49226.js'
import { N as x, T as O } from './Tabbar.2448f4e0.js'
function A(e) {
  let s, a, n, f
  return {
    c() {
      ;(s = t('div')),
        (a = l('Last online ')),
        (n = l(e[4])),
        (f = l(' days ago')),
        this.h()
    },
    l(t) {
      s = r(t, 'DIV', { id: !0, class: !0 })
      var l = i(s)
      ;(a = c(l, 'Last online ')),
        (n = c(l, e[4])),
        (f = c(l, ' days ago')),
        l.forEach(m),
        this.h()
    },
    h() {
      o(s, 'id', 'lastonline'), o(s, 'class', 'svelte-zt7sbu')
    },
    m(e, t) {
      $(e, s, t), h(s, a), h(s, n), h(s, f)
    },
    p(e, s) {
      16 & s && d(n, e[4])
    },
    d(e) {
      e && m(s)
    },
  }
}
function C(e) {
  let s,
    a,
    n,
    f = (e[1] ? e[1] : 'Online') + ''
  return {
    c() {
      ;(s = t('div')), (a = l(f)), this.h()
    },
    l(e) {
      s = r(e, 'DIV', { id: !0, class: !0 })
      var t = i(s)
      ;(a = c(t, f)), t.forEach(m), this.h()
    },
    h() {
      o(s, 'id', 'usergame'),
        o(s, 'class', (n = g(e[1] ? '' : 'onlinegamename') + ' svelte-zt7sbu'))
    },
    m(e, t) {
      $(e, s, t), h(s, a)
    },
    p(e, t) {
      2 & t && f !== (f = (e[1] ? e[1] : 'Online') + '') && d(a, f),
        2 & t &&
          n !== (n = g(e[1] ? '' : 'onlinegamename') + ' svelte-zt7sbu') &&
          o(s, 'class', n)
    },
    d(e) {
      e && m(s)
    },
  }
}
function L(e) {
  let s, a, v, b, I, w, E, N, D
  function V(e, s) {
    return e[5] ? (e[5] ? A : void 0) : C
  }
  let y = V(e),
    z = y && y(e)
  return {
    c() {
      ;(s = t('li')),
        (a = t('div')),
        (v = n()),
        (b = t('div')),
        (I = t('div')),
        (w = l(e[0])),
        (N = n()),
        z && z.c(),
        this.h()
    },
    l(t) {
      s = r(t, 'LI', { class: !0 })
      var n = i(s)
      ;(a = r(n, 'DIV', { id: !0, style: !0, class: !0 })),
        i(a).forEach(m),
        (v = f(n)),
        (b = r(n, 'DIV', { id: !0, class: !0 }))
      var l = i(b)
      I = r(l, 'DIV', { id: !0, class: !0 })
      var o = i(I)
      ;(w = c(o, e[0])),
        o.forEach(m),
        (N = f(l)),
        z && z.l(l),
        l.forEach(m),
        n.forEach(m),
        this.h()
    },
    h() {
      o(a, 'id', 'userimage'),
        u(a, 'background-image', 'url(' + e[2] + ')'),
        o(a, 'class', 'svelte-zt7sbu'),
        o(I, 'id', 'username'),
        o(I, 'class', (E = g(e[1] ? '' : 'onlineusername') + ' svelte-zt7sbu')),
        o(b, 'id', 'info'),
        o(b, 'class', 'svelte-zt7sbu'),
        o(
          s,
          'class',
          (D =
            (1 === e[3] ? 'status ingame' : '') +
            (2 === e[3] ? 'status online' : '') +
            (3 === e[3] ? 'status offline statusoffline' : '') +
            ' svelte-zt7sbu')
        )
    },
    m(e, t) {
      $(e, s, t),
        h(s, a),
        h(s, v),
        h(s, b),
        h(b, I),
        h(I, w),
        h(b, N),
        z && z.m(b, null)
    },
    p(e, [t]) {
      4 & t && u(a, 'background-image', 'url(' + e[2] + ')'),
        1 & t && d(w, e[0]),
        2 & t &&
          E !== (E = g(e[1] ? '' : 'onlineusername') + ' svelte-zt7sbu') &&
          o(I, 'class', E),
        y === (y = V(e)) && z
          ? z.p(e, t)
          : (z && z.d(1), (z = y && y(e)), z && (z.c(), z.m(b, null))),
        8 & t &&
          D !==
            (D =
              (1 === e[3] ? 'status ingame' : '') +
              (2 === e[3] ? 'status online' : '') +
              (3 === e[3] ? 'status offline statusoffline' : '') +
              ' svelte-zt7sbu') &&
          o(s, 'class', D)
    },
    i: p,
    o: p,
    d(e) {
      e && m(s), z && z.d()
    },
  }
}
function S(e, s, a) {
  let { userName: t } = s,
    { gameName: n = '' } = s,
    { userImage: l } = s,
    { status: r } = s,
    { timestamp: i = '' } = s,
    { offline: m } = s
  return (
    (e.$set = (e) => {
      'userName' in e && a(0, (t = e.userName)),
        'gameName' in e && a(1, (n = e.gameName)),
        'userImage' in e && a(2, (l = e.userImage)),
        'status' in e && a(3, (r = e.status)),
        'timestamp' in e && a(4, (i = e.timestamp)),
        'offline' in e && a(5, (m = e.offline))
    }),
    [t, n, l, r, i, m]
  )
}
class j extends e {
  constructor(e) {
    super(),
      s(this, e, S, L, a, {
        userName: 0,
        gameName: 1,
        userImage: 2,
        status: 3,
        timestamp: 4,
        offline: 5,
      })
  }
}
function H(e) {
  let s, a, l, c
  const u = new j({
      props: {
        userName: 'bingotheslayer',
        gameName: 'Dank Souls 3',
        userImage: 'friendone.png',
        status: 1,
        offline: e[0],
      },
    }),
    g = new j({
      props: {
        userName: 'fatherdeath',
        userImage: 'friendtwo.png',
        status: 2,
        offline: e[0],
      },
    }),
    d = new j({
      props: {
        userName: 'pyschotherapist',
        userImage: 'friendthree.png',
        status: 2,
        offline: e[0],
      },
    })
  return {
    c() {
      ;(s = t('ul')),
        v(u.$$.fragment),
        (a = n()),
        v(g.$$.fragment),
        (l = n()),
        v(d.$$.fragment),
        this.h()
    },
    l(e) {
      s = r(e, 'UL', { class: !0 })
      var t = i(s)
      b(u.$$.fragment, t),
        (a = f(t)),
        b(g.$$.fragment, t),
        (l = f(t)),
        b(d.$$.fragment, t),
        t.forEach(m),
        this.h()
    },
    h() {
      o(s, 'class', 'svelte-146ai4i')
    },
    m(e, t) {
      $(e, s, t),
        I(u, s, null),
        h(s, a),
        I(g, s, null),
        h(s, l),
        I(d, s, null),
        (c = !0)
    },
    p(e, s) {
      const a = {}
      1 & s && (a.offline = e[0]), u.$set(a)
      const t = {}
      1 & s && (t.offline = e[0]), g.$set(t)
      const n = {}
      1 & s && (n.offline = e[0]), d.$set(n)
    },
    i(e) {
      c ||
        (w(u.$$.fragment, e),
        w(g.$$.fragment, e),
        w(d.$$.fragment, e),
        (c = !0))
    },
    o(e) {
      E(u.$$.fragment, e), E(g.$$.fragment, e), E(d.$$.fragment, e), (c = !1)
    },
    d(e) {
      e && m(s), N(u), N(g), N(d)
    },
  }
}
function T(e) {
  let s, a, l
  const c = new j({
      props: {
        userName: 'fatfather64',
        gameName: 'Grand Theft Auto: San Andreas',
        userImage: 'friendfour.png',
        status: 3,
        offline: e[0],
        timestamp: '6',
      },
    }),
    u = new j({
      props: {
        userName: 'dingdongding',
        gameName: 'Grand Theft Auto: San Andreas',
        userImage: 'profilepicture.jpg',
        status: 3,
        offline: e[0],
        timestamp: '12',
      },
    })
  return {
    c() {
      ;(s = t('ul')), v(c.$$.fragment), (a = n()), v(u.$$.fragment), this.h()
    },
    l(e) {
      s = r(e, 'UL', { class: !0 })
      var t = i(s)
      b(c.$$.fragment, t),
        (a = f(t)),
        b(u.$$.fragment, t),
        t.forEach(m),
        this.h()
    },
    h() {
      o(s, 'class', 'svelte-146ai4i')
    },
    m(e, t) {
      $(e, s, t), I(c, s, null), h(s, a), I(u, s, null), (l = !0)
    },
    p(e, s) {
      const a = {}
      1 & s && (a.offline = e[0]), c.$set(a)
      const t = {}
      1 & s && (t.offline = e[0]), u.$set(t)
    },
    i(e) {
      l || (w(c.$$.fragment, e), w(u.$$.fragment, e), (l = !0))
    },
    o(e) {
      E(c.$$.fragment, e), E(u.$$.fragment, e), (l = !1)
    },
    d(e) {
      e && m(s), N(c), N(u)
    },
  }
}
function R(e) {
  let s,
    a,
    u,
    d,
    p,
    v,
    b,
    I,
    N,
    k,
    x,
    O,
    A,
    C,
    L,
    S,
    j,
    R,
    G = !e[0] && H(e),
    U = e[0] && T(e)
  return {
    c() {
      ;(s = t('div')),
        (a = t('div')),
        (u = t('div')),
        (d = t('h3')),
        (p = l('Online (')),
        (v = l(e[1])),
        (b = l(')')),
        (N = n()),
        (k = t('h3')),
        (x = l('Offline (')),
        (O = l(e[2])),
        (A = l(')')),
        (L = n()),
        G && G.c(),
        (S = n()),
        U && U.c(),
        this.h()
    },
    l(t) {
      s = r(t, 'DIV', { id: !0, class: !0 })
      var n = i(s)
      a = r(n, 'DIV', { id: !0, class: !0 })
      var l = i(a)
      u = r(l, 'DIV', { id: !0, class: !0 })
      var o = i(u)
      d = r(o, 'H3', { class: !0 })
      var g = i(d)
      ;(p = c(g, 'Online (')),
        (v = c(g, e[1])),
        (b = c(g, ')')),
        g.forEach(m),
        (N = f(o)),
        (k = r(o, 'H3', { class: !0 }))
      var $ = i(k)
      ;(x = c($, 'Offline (')),
        (O = c($, e[2])),
        (A = c($, ')')),
        $.forEach(m),
        o.forEach(m),
        l.forEach(m),
        (L = f(n)),
        G && G.l(n),
        (S = f(n)),
        U && U.l(n),
        n.forEach(m),
        this.h()
    },
    h() {
      o(d, 'class', (I = g(e[0] ? '' : 'selectedtab') + ' svelte-146ai4i')),
        o(k, 'class', (C = g(e[0] ? 'selectedtab' : '') + ' svelte-146ai4i')),
        o(u, 'id', 'tabs'),
        o(u, 'class', 'svelte-146ai4i'),
        o(a, 'id', 'tabscontainer'),
        o(a, 'class', 'svelte-146ai4i'),
        o(s, 'id', 'card'),
        o(s, 'class', 'svelte-146ai4i')
    },
    m(t, n, l) {
      $(t, s, n),
        h(s, a),
        h(a, u),
        h(u, d),
        h(d, p),
        h(d, v),
        h(d, b),
        h(u, N),
        h(u, k),
        h(k, x),
        h(k, O),
        h(k, A),
        h(s, L),
        G && G.m(s, null),
        h(s, S),
        U && U.m(s, null),
        (j = !0),
        l && D(R),
        (R = [V(d, 'click', e[3]), V(k, 'click', e[4])])
    },
    p(e, [a]) {
      ;(!j ||
        (1 & a &&
          I !== (I = g(e[0] ? '' : 'selectedtab') + ' svelte-146ai4i'))) &&
        o(d, 'class', I),
        (!j ||
          (1 & a &&
            C !== (C = g(e[0] ? 'selectedtab' : '') + ' svelte-146ai4i'))) &&
          o(k, 'class', C),
        e[0]
          ? G &&
            (y(),
            E(G, 1, 1, () => {
              G = null
            }),
            z())
          : G
          ? (G.p(e, a), 1 & a && w(G, 1))
          : ((G = H(e)), G.c(), w(G, 1), G.m(s, S)),
        e[0]
          ? U
            ? (U.p(e, a), 1 & a && w(U, 1))
            : ((U = T(e)), U.c(), w(U, 1), U.m(s, null))
          : U &&
            (y(),
            E(U, 1, 1, () => {
              U = null
            }),
            z())
    },
    i(e) {
      j || (w(G), w(U), (j = !0))
    },
    o(e) {
      E(G), E(U), (j = !1)
    },
    d(e) {
      e && m(s), G && G.d(), U && U.d(), D(R)
    },
  }
}
function G(e, s, a) {
  let t = !1
  return [
    t,
    3,
    2,
    () => {
      a(0, (t = !1))
    },
    () => {
      a(0, (t = !0))
    },
  ]
}
class U extends e {
  constructor(e) {
    super(), s(this, e, G, R, a, {})
  }
}
function q(e) {
  let s, a, n, f, g
  return {
    c() {
      ;(s = t('div')), (a = t('div')), (n = l(e[2])), this.h()
    },
    l(t) {
      s = r(t, 'DIV', { id: !0, class: !0, style: !0 })
      var l = i(s)
      a = r(l, 'DIV', { id: !0, class: !0 })
      var f = i(a)
      ;(n = c(f, e[2])), f.forEach(m), l.forEach(m), this.h()
    },
    h() {
      o(a, 'id', 'name'),
        o(
          a,
          'class',
          (f =
            (1 === e[1] ? 'name--ingame' : '') +
            (2 === e[1] ? 'name--online' : '') +
            (3 === e[1] ? 'status offline' : '') +
            ' svelte-gwm1hn')
        ),
        o(s, 'id', 'imageholder'),
        o(
          s,
          'class',
          (g =
            (1 === e[1] ? 'status ingame' : '') +
            (2 === e[1] ? 'status online' : '') +
            (3 === e[1] ? 'status offline' : '') +
            ' svelte-gwm1hn')
        ),
        u(s, 'background-image', 'url(' + e[0] + ')')
    },
    m(e, t) {
      $(e, s, t), h(s, a), h(a, n)
    },
    p(e, [t]) {
      4 & t && d(n, e[2]),
        2 & t &&
          f !==
            (f =
              (1 === e[1] ? 'name--ingame' : '') +
              (2 === e[1] ? 'name--online' : '') +
              (3 === e[1] ? 'status offline' : '') +
              ' svelte-gwm1hn') &&
          o(a, 'class', f),
        2 & t &&
          g !==
            (g =
              (1 === e[1] ? 'status ingame' : '') +
              (2 === e[1] ? 'status online' : '') +
              (3 === e[1] ? 'status offline' : '') +
              ' svelte-gwm1hn') &&
          o(s, 'class', g),
        1 & t && u(s, 'background-image', 'url(' + e[0] + ')')
    },
    i: p,
    o: p,
    d(e) {
      e && m(s)
    },
  }
}
function B(e, s, a) {
  let { image: t } = s,
    { status: n } = s,
    { name: l } = s
  return (
    (e.$set = (e) => {
      'image' in e && a(0, (t = e.image)),
        'status' in e && a(1, (n = e.status)),
        'name' in e && a(2, (l = e.name))
    }),
    [t, n, l]
  )
}
class M extends e {
  constructor(e) {
    super(), s(this, e, B, q, a, { image: 0, status: 1, name: 2 })
  }
}
function F(e) {
  let s, a, u, g, d, D, V, y, z
  const k = new M({
      props: { image: 'friendone.png', status: 1, name: 'bingotheslayeer' },
    }),
    x = new M({
      props: { image: 'friendtwo.png', status: 2, name: 'fatherdeath' },
    }),
    O = new M({
      props: { image: 'friendthree.png', status: 2, name: 'pyschotherapist' },
    }),
    A = new M({
      props: { image: 'friendfour.png', status: 3, name: 'fatfather64' },
    })
  return {
    c() {
      ;(s = t('div')),
        (a = t('h3')),
        (u = l('Recent Chats')),
        (g = n()),
        (d = t('div')),
        v(k.$$.fragment),
        (D = n()),
        v(x.$$.fragment),
        (V = n()),
        v(O.$$.fragment),
        (y = n()),
        v(A.$$.fragment),
        this.h()
    },
    l(e) {
      s = r(e, 'DIV', { id: !0, class: !0 })
      var t = i(s)
      a = r(t, 'H3', { class: !0 })
      var n = i(a)
      ;(u = c(n, 'Recent Chats')),
        n.forEach(m),
        (g = f(t)),
        (d = r(t, 'DIV', { id: !0, class: !0 }))
      var l = i(d)
      b(k.$$.fragment, l),
        (D = f(l)),
        b(x.$$.fragment, l),
        (V = f(l)),
        b(O.$$.fragment, l),
        (y = f(l)),
        b(A.$$.fragment, l),
        l.forEach(m),
        t.forEach(m),
        this.h()
    },
    h() {
      o(a, 'class', 'svelte-1l3lyrr'),
        o(d, 'id', 'list'),
        o(d, 'class', 'svelte-1l3lyrr'),
        o(s, 'id', 'card'),
        o(s, 'class', 'svelte-1l3lyrr')
    },
    m(e, t) {
      $(e, s, t),
        h(s, a),
        h(a, u),
        h(s, g),
        h(s, d),
        I(k, d, null),
        h(d, D),
        I(x, d, null),
        h(d, V),
        I(O, d, null),
        h(d, y),
        I(A, d, null),
        (z = !0)
    },
    p: p,
    i(e) {
      z ||
        (w(k.$$.fragment, e),
        w(x.$$.fragment, e),
        w(O.$$.fragment, e),
        w(A.$$.fragment, e),
        (z = !0))
    },
    o(e) {
      E(k.$$.fragment, e),
        E(x.$$.fragment, e),
        E(O.$$.fragment, e),
        E(A.$$.fragment, e),
        (z = !1)
    },
    d(e) {
      e && m(s), N(k), N(x), N(O), N(A)
    },
  }
}
function J(e, s, a) {
  let { title: t } = s
  return (
    (e.$set = (e) => {
      'title' in e && a(0, (t = e.title))
    }),
    [t]
  )
}
class K extends e {
  constructor(e) {
    super(), s(this, e, J, F, a, { title: 0 })
  }
}
function P(e) {
  let s, a, l, c, u, g
  const d = new x({ props: { title: 'Chat' } }),
    D = new K({ props: { title: 'Recent Chats' } }),
    V = new U({}),
    y = new O({ props: { location: 4 } })
  return {
    c() {
      ;(s = n()),
        v(d.$$.fragment),
        (a = n()),
        (l = t('div')),
        v(D.$$.fragment),
        (c = n()),
        v(V.$$.fragment),
        (u = n()),
        v(y.$$.fragment),
        this.h()
    },
    l(e) {
      k('[data-svelte="svelte-1800but"]', document.head).forEach(m),
        (s = f(e)),
        b(d.$$.fragment, e),
        (a = f(e)),
        (l = r(e, 'DIV', { id: !0, class: !0 }))
      var t = i(l)
      b(D.$$.fragment, t),
        (c = f(t)),
        b(V.$$.fragment, t),
        t.forEach(m),
        (u = f(e)),
        b(y.$$.fragment, e),
        this.h()
    },
    h() {
      ;(document.title = 'Chat :: Steam Mobile'),
        o(l, 'id', 'chat'),
        o(l, 'class', 'svelte-1dg3h8b')
    },
    m(e, t) {
      $(e, s, t),
        I(d, e, t),
        $(e, a, t),
        $(e, l, t),
        I(D, l, null),
        h(l, c),
        I(V, l, null),
        $(e, u, t),
        I(y, e, t),
        (g = !0)
    },
    p: p,
    i(e) {
      g ||
        (w(d.$$.fragment, e),
        w(D.$$.fragment, e),
        w(V.$$.fragment, e),
        w(y.$$.fragment, e),
        (g = !0))
    },
    o(e) {
      E(d.$$.fragment, e),
        E(D.$$.fragment, e),
        E(V.$$.fragment, e),
        E(y.$$.fragment, e),
        (g = !1)
    },
    d(e) {
      e && m(s), N(d, e), e && m(a), e && m(l), N(D), N(V), e && m(u), N(y, e)
    },
  }
}
export default class extends e {
  constructor(e) {
    super(), s(this, e, null, P, a, {})
  }
}

var J = Object.defineProperty;
var R = (e, t, n) => t in e ? J(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var u = (e, t, n) => (R(e, typeof t != "symbol" ? t + "" : t, n), n);
function b() {
}
function v(e) {
  return e();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function g(e) {
  e.forEach(v);
}
function B(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function L(e, t) {
  e.appendChild(t);
}
function M(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function T(e) {
  return document.createElement(e);
}
function N(e) {
  return document.createTextNode(e);
}
function q(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function z(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function D(e) {
  return Array.from(e.childNodes);
}
function F(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function G(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let k;
function m(e) {
  k = e;
}
const a = [], S = [];
let _ = [];
const P = [], K = /* @__PURE__ */ Promise.resolve();
let w = !1;
function Q() {
  w || (w = !0, K.then(H));
}
function x(e) {
  _.push(e);
}
const y = /* @__PURE__ */ new Set();
let h = 0;
function H() {
  if (h !== 0)
    return;
  const e = k;
  do {
    try {
      for (; h < a.length; ) {
        const t = a[h];
        h++, m(t), W(t.$$);
      }
    } catch (t) {
      throw a.length = 0, h = 0, t;
    }
    for (m(null), a.length = 0, h = 0; S.length; )
      S.pop()();
    for (let t = 0; t < _.length; t += 1) {
      const n = _[t];
      y.has(n) || (y.add(n), n());
    }
    _.length = 0;
  } while (a.length);
  for (; P.length; )
    P.pop()();
  w = !1, y.clear(), m(e);
}
function W(e) {
  if (e.fragment !== null) {
    e.update(), g(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(x);
  }
}
function X(e) {
  const t = [], n = [];
  _.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), _ = t;
}
const Y = /* @__PURE__ */ new Set();
function Z(e, t) {
  e && e.i && (Y.delete(e), e.i(t));
}
function tt(e, t, n) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), x(() => {
    const $ = e.$$.on_mount.map(v).filter(B);
    e.$$.on_destroy ? e.$$.on_destroy.push(...$) : g($), e.$$.on_mount = [];
  }), i.forEach(x);
}
function et(e, t) {
  const n = e.$$;
  n.fragment !== null && (X(n.after_update), g(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nt(e, t) {
  e.$$.dirty[0] === -1 && (a.push(e), Q(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function st(e, t, n, r, i, $, s, c = [-1]) {
  const f = k;
  m(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: $,
    update: b,
    not_equal: i,
    bound: C(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: C(),
    dirty: c,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  s && s(o.root);
  let d = !1;
  if (o.ctx = n ? n(e, t.props || {}, (l, O, ...j) => {
    const A = j.length ? j[0] : O;
    return o.ctx && i(o.ctx[l], o.ctx[l] = A) && (!o.skip_bound && o.bound[l] && o.bound[l](A), d && nt(e, l)), O;
  }) : [], o.update(), d = !0, g(o.before_update), o.fragment = r ? r(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = D(t.target);
      o.fragment && o.fragment.l(l), l.forEach(E);
    } else
      o.fragment && o.fragment.c();
    t.intro && Z(e.$$.fragment), tt(e, t.target, t.anchor), H();
  }
  m(f);
}
let I;
typeof HTMLElement == "function" && (I = class extends HTMLElement {
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    u(this, "$$ctor");
    /** Slots */
    u(this, "$$s");
    /** The Svelte component instance */
    u(this, "$$c");
    /** Whether or not the custom element is connected */
    u(this, "$$cn", !1);
    /** Component props data */
    u(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    u(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    u(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    u(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    u(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return () => {
          let c;
          return {
            c: function() {
              c = T("slot"), s !== "default" && z(c, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(d, l) {
              M(d, c, l);
            },
            d: function(d) {
              d && E(c);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const r = {}, i = G(this);
      for (const s of this.$$s)
        s in i && (r[s] = [n(s)]);
      for (const s of this.attributes) {
        const c = this.$$g_p(s.name);
        c in this.$$d || (this.$$d[c] = p(c, s.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$scope: {
            ctx: []
          }
        }
      });
      const $ = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const c = p(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(s) : this.setAttribute(this.$$p_d[s].attribute || s, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push($), $();
      for (const s in this.$$l)
        for (const c of this.$$l[s]) {
          const f = this.$$c.$on(s, c);
          this.$$l_u.set(c, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = p(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function p(e, t, n, r) {
  var $;
  const i = ($ = n[e]) == null ? void 0 : $.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function rt(e, t, n, r, i) {
  const $ = class extends I {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((s) => {
    Object.defineProperty($.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var f;
        c = p(s, c, t), this.$$d[s] = c, (f = this.$$c) == null || f.$set({ [s]: c });
      }
    });
  }), r.forEach((s) => {
    Object.defineProperty($.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  $, $;
}
class it {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    u(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    u(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    et(this, 1), this.$destroy = b;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!B(n))
      return b;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !U(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ct = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ct);
function ot(e) {
  let t, n, r, i, $;
  return {
    c() {
      t = T("button"), n = N(
        /*count*/
        e[0]
      ), r = N(" 🍊");
    },
    m(s, c) {
      M(s, t, c), L(t, n), L(t, r), i || ($ = q(
        t,
        "click",
        /*increment*/
        e[1]
      ), i = !0);
    },
    p(s, [c]) {
      c & /*count*/
      1 && F(
        n,
        /*count*/
        s[0]
      );
    },
    i: b,
    o: b,
    d(s) {
      s && E(t), i = !1, $();
    }
  };
}
function $t(e, t, n) {
  let r = 0;
  return [r, () => {
    n(0, r += 1);
  }];
}
class ut extends it {
  constructor(t) {
    super(), st(this, t, $t, ot, V, {});
  }
}
customElements.define("sbelte-counter", rt(ut, {}, [], [], !0));

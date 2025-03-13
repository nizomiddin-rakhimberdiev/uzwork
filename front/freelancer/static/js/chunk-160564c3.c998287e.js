(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-160564c3"],
  {
    "18fa": function (a, i, t) {
      (function (i, t) {
        a.exports = t();
      })(0, () =>
        (() => {
          "use strict";
          var a = {};
          (() => {
            a.d = (i, t) => {
              for (var r in t)
                a.o(t, r) &&
                  !a.o(i, r) &&
                  Object.defineProperty(i, r, { enumerable: !0, get: t[r] });
            };
          })(),
            (() => {
              a.o = (a, i) => Object.prototype.hasOwnProperty.call(a, i);
            })();
          var i = {};
          a.d(i, { default: () => F });
          var t = function () {
              var a = this,
                i = a._self._c;
              return i("transition", { attrs: { name: a.transition } }, [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: a.isActive,
                        expression: "isActive",
                      },
                    ],
                    staticClass: "vld-overlay is-active",
                    class: { "is-full-page": a.isFullPage },
                    style: { zIndex: a.zIndex },
                    attrs: {
                      tabindex: "0",
                      "aria-busy": a.isActive,
                      "aria-label": "Loading",
                    },
                  },
                  [
                    i("div", {
                      staticClass: "vld-background",
                      style: a.bgStyle,
                      on: {
                        click: function (i) {
                          return (
                            i.preventDefault(), a.cancel.apply(null, arguments)
                          );
                        },
                      },
                    }),
                    i(
                      "div",
                      { staticClass: "vld-icon" },
                      [
                        a._t("before"),
                        a._t("default", function () {
                          return [
                            i(a.loader, {
                              tag: "component",
                              attrs: {
                                color: a.color,
                                width: a.width,
                                height: a.height,
                              },
                            }),
                          ];
                        }),
                        a._t("after"),
                      ],
                      2
                    ),
                  ]
                ),
              ]);
            },
            r = [];
          const n = (a) => {
              "undefined" !== typeof a.remove
                ? a.remove()
                : a.parentNode.removeChild(a);
            },
            e = () => "undefined" !== typeof window,
            o = e() ? window.HTMLElement : Object,
            l = {
              mounted() {
                this.enforceFocus &&
                  document.addEventListener("focusin", this.focusIn);
              },
              methods: {
                focusIn(a) {
                  if (!this.isActive) return;
                  if (a.target === this.$el || this.$el.contains(a.target))
                    return;
                  let i = this.container
                    ? this.container
                    : this.isFullPage
                    ? null
                    : this.$el.parentElement;
                  (this.isFullPage || (i && i.contains(a.target))) &&
                    (a.preventDefault(), this.$el.focus());
                },
              },
              beforeDestroy() {
                document.removeEventListener("focusin", this.focusIn);
              },
            };
          var s = function () {
              var a = this,
                i = a._self._c;
              return i(
                "svg",
                {
                  attrs: {
                    viewBox: "0 0 38 38",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: a.width,
                    height: a.height,
                    stroke: a.color,
                  },
                },
                [
                  i("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                    i(
                      "g",
                      {
                        attrs: {
                          transform: "translate(1 1)",
                          "stroke-width": "2",
                        },
                      },
                      [
                        i("circle", {
                          attrs: {
                            "stroke-opacity": ".25",
                            cx: "18",
                            cy: "18",
                            r: "18",
                          },
                        }),
                        i(
                          "path",
                          { attrs: { d: "M36 18c0-9.94-8.06-18-18-18" } },
                          [
                            i("animateTransform", {
                              attrs: {
                                attributeName: "transform",
                                type: "rotate",
                                from: "0 18 18",
                                to: "360 18 18",
                                dur: "0.8s",
                                repeatCount: "indefinite",
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]),
                ]
              );
            },
            u = [];
          const h = {
              name: "spinner",
              props: {
                color: { type: String, default: "#000" },
                height: { type: Number, default: 64 },
                width: { type: Number, default: 64 },
              },
            },
            d = h;
          function v(a, i, t, r, n, e, o, l) {
            var s,
              u = "function" === typeof a ? a.options : a;
            if (
              (i &&
                ((u.render = i), (u.staticRenderFns = t), (u._compiled = !0)),
              r && (u.functional = !0),
              e && (u._scopeId = "data-v-" + e),
              o
                ? ((s = function (a) {
                    (a =
                      a ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent &&
                        this.parent.$vnode &&
                        this.parent.$vnode.ssrContext)),
                      a ||
                        "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                        (a = __VUE_SSR_CONTEXT__),
                      n && n.call(this, a),
                      a &&
                        a._registeredComponents &&
                        a._registeredComponents.add(o);
                  }),
                  (u._ssrRegister = s))
                : n &&
                  (s = l
                    ? function () {
                        n.call(
                          this,
                          (u.functional ? this.parent : this).$root.$options
                            .shadowRoot
                        );
                      }
                    : n),
              s)
            )
              if (u.functional) {
                u._injectStyles = s;
                var h = u.render;
                u.render = function (a, i) {
                  return s.call(i), h(a, i);
                };
              } else {
                var d = u.beforeCreate;
                u.beforeCreate = d ? [].concat(d, s) : [s];
              }
            return { exports: a, options: u };
          }
          var m = v(d, s, u, !1, null, null, null);
          const c = m.exports;
          var b = function () {
              var a = this,
                i = a._self._c;
              return i(
                "svg",
                {
                  attrs: {
                    viewBox: "0 0 120 30",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: a.color,
                    width: a.width,
                    height: a.height,
                  },
                },
                [
                  i("circle", { attrs: { cx: "15", cy: "15", r: "15" } }, [
                    i("animate", {
                      attrs: {
                        attributeName: "r",
                        from: "15",
                        to: "15",
                        begin: "0s",
                        dur: "0.8s",
                        values: "15;9;15",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      },
                    }),
                    i("animate", {
                      attrs: {
                        attributeName: "fill-opacity",
                        from: "1",
                        to: "1",
                        begin: "0s",
                        dur: "0.8s",
                        values: "1;.5;1",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      },
                    }),
                  ]),
                  i(
                    "circle",
                    {
                      attrs: {
                        cx: "60",
                        cy: "15",
                        r: "9",
                        "fill-opacity": "0.3",
                      },
                    },
                    [
                      i("animate", {
                        attrs: {
                          attributeName: "r",
                          from: "9",
                          to: "9",
                          begin: "0s",
                          dur: "0.8s",
                          values: "9;15;9",
                          calcMode: "linear",
                          repeatCount: "indefinite",
                        },
                      }),
                      i("animate", {
                        attrs: {
                          attributeName: "fill-opacity",
                          from: "0.5",
                          to: "0.5",
                          begin: "0s",
                          dur: "0.8s",
                          values: ".5;1;.5",
                          calcMode: "linear",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                  i("circle", { attrs: { cx: "105", cy: "15", r: "15" } }, [
                    i("animate", {
                      attrs: {
                        attributeName: "r",
                        from: "15",
                        to: "15",
                        begin: "0s",
                        dur: "0.8s",
                        values: "15;9;15",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      },
                    }),
                    i("animate", {
                      attrs: {
                        attributeName: "fill-opacity",
                        from: "1",
                        to: "1",
                        begin: "0s",
                        dur: "0.8s",
                        values: "1;.5;1",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      },
                    }),
                  ]),
                ]
              );
            },
            g = [];
          const p = {
              name: "dots",
              props: {
                color: { type: String, default: "#000" },
                height: { type: Number, default: 240 },
                width: { type: Number, default: 60 },
              },
            },
            _ = p;
          var y = v(_, b, g, !1, null, null, null);
          const f = y.exports;
          var k = function () {
              var a = this,
                i = a._self._c;
              return i(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 30 30",
                    height: a.height,
                    width: a.width,
                    fill: a.color,
                  },
                },
                [
                  i(
                    "rect",
                    { attrs: { x: "0", y: "13", width: "4", height: "5" } },
                    [
                      i("animate", {
                        attrs: {
                          attributeName: "height",
                          attributeType: "XML",
                          values: "5;21;5",
                          begin: "0s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                      i("animate", {
                        attrs: {
                          attributeName: "y",
                          attributeType: "XML",
                          values: "13; 5; 13",
                          begin: "0s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                  i(
                    "rect",
                    { attrs: { x: "10", y: "13", width: "4", height: "5" } },
                    [
                      i("animate", {
                        attrs: {
                          attributeName: "height",
                          attributeType: "XML",
                          values: "5;21;5",
                          begin: "0.15s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                      i("animate", {
                        attrs: {
                          attributeName: "y",
                          attributeType: "XML",
                          values: "13; 5; 13",
                          begin: "0.15s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                  i(
                    "rect",
                    { attrs: { x: "20", y: "13", width: "4", height: "5" } },
                    [
                      i("animate", {
                        attrs: {
                          attributeName: "height",
                          attributeType: "XML",
                          values: "5;21;5",
                          begin: "0.3s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                      i("animate", {
                        attrs: {
                          attributeName: "y",
                          attributeType: "XML",
                          values: "13; 5; 13",
                          begin: "0.3s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                ]
              );
            },
            q = [];
          const j = {
              name: "bars",
              props: {
                color: { type: String, default: "#000" },
                height: { type: Number, default: 40 },
                width: { type: Number, default: 40 },
              },
            },
            z = j;
          var x = v(z, k, q, !1, null, null, null);
          const P = x.exports,
            w = { Spinner: c, Dots: f, Bars: P },
            O = {
              name: "vue-loading",
              mixins: [l],
              props: {
                active: Boolean,
                programmatic: Boolean,
                container: [Object, Function, o],
                isFullPage: { type: Boolean, default: !0 },
                enforceFocus: { type: Boolean, default: !0 },
                lockScroll: { type: Boolean, default: !1 },
                transition: { type: String, default: "fade" },
                canCancel: Boolean,
                onCancel: { type: Function, default: () => {} },
                color: String,
                backgroundColor: String,
                blur: { type: String, default: "2px" },
                opacity: Number,
                width: Number,
                height: Number,
                zIndex: Number,
                loader: { type: String, default: "spinner" },
              },
              data() {
                return { isActive: this.active };
              },
              components: w,
              beforeMount() {
                this.programmatic &&
                  (this.container
                    ? ((this.isFullPage = !1),
                      this.container.appendChild(this.$el))
                    : document.body.appendChild(this.$el));
              },
              mounted() {
                this.programmatic && (this.isActive = !0),
                  document.addEventListener("keyup", this.keyPress);
              },
              methods: {
                cancel() {
                  this.canCancel &&
                    this.isActive &&
                    (this.hide(), this.onCancel.apply(null, arguments));
                },
                hide() {
                  this.$emit("hide"),
                    this.$emit("update:active", !1),
                    this.programmatic &&
                      ((this.isActive = !1),
                      setTimeout(() => {
                        this.$destroy(), n(this.$el);
                      }, 150));
                },
                disableScroll() {
                  this.isFullPage &&
                    this.lockScroll &&
                    document.body.classList.add("vld-shown");
                },
                enableScroll() {
                  this.isFullPage &&
                    this.lockScroll &&
                    document.body.classList.remove("vld-shown");
                },
                keyPress(a) {
                  27 === a.keyCode && this.cancel();
                },
              },
              watch: {
                active(a) {
                  this.isActive = a;
                },
                isActive(a) {
                  a ? this.disableScroll() : this.enableScroll();
                },
              },
              computed: {
                bgStyle() {
                  return {
                    background: this.backgroundColor,
                    opacity: this.opacity,
                    backdropFilter: `blur(${this.blur})`,
                  };
                },
              },
              beforeDestroy() {
                document.removeEventListener("keyup", this.keyPress);
              },
            },
            C = O;
          var $ = v(C, t, r, !1, null, null, null);
          const M = $.exports,
            B = function (a) {
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              return {
                show() {
                  let r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : i,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : t;
                  const e = { programmatic: !0 },
                    o = Object.assign({}, i, r, e),
                    l = new (a.extend(M))({
                      el: document.createElement("div"),
                      propsData: o,
                    }),
                    s = Object.assign({}, t, n);
                  return (
                    Object.keys(s).map((a) => {
                      l.$slots[a] = s[a];
                    }),
                    l
                  );
                },
              };
            },
            T = B,
            S = function (a) {
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = T(a, i, t);
              (a.$loading = r), (a.prototype.$loading = r);
            };
          M.install = S;
          const F = M;
          return (i = i["default"]), i;
        })()
      );
    },
    "433e": function (a, i, t) {
      a.exports = t.p + "static/img/login-dialog-photo.49ae74ea.png";
    },
    4481: function (a, i, t) {
      "use strict";
      t("5c69");
    },
    "5c69": function (a, i, t) {},
    "5f42": function (a, i, t) {},
    "67a5": function (a, i, t) {
      "use strict";
      t("5f42");
    },
    "900a": function (a, i, t) {},
    a4bb: function (a, i, t) {
      "use strict";
      t("900a");
    },
    c335: function (a, i, t) {
      "use strict";
      t.r(i);
      var r = function () {
          var a = this,
            i = a._self._c;
          return i(
            "div",
            { staticClass: "bg-white" },
            [
              i("loading", {
                attrs: {
                  "can-cancel": !0,
                  "is-full-page": a.fullPage,
                  color: "rgb(49, 134, 251)",
                  loader: "bars",
                  opacity: a.loading.opacity,
                  height: a.loading.height,
                  width: a.loading.width,
                },
                model: {
                  value: a.isLoading,
                  callback: function (i) {
                    a.isLoading = i;
                  },
                  expression: "isLoading",
                },
              }),
              a._v(" "),
              a.dialogVisible
                ? i(
                    "div",
                    {
                      staticClass:
                        "container loginDialog welcome-section select-role-dialog",
                    },
                    [
                      i("div", { staticClass: "dialogeLoginUserText" }, [
                        i("p", [
                          a._v(
                            "\n          " +
                              a._s(a.$t("Хуш келибсиз")) +
                              "\n        "
                          ),
                        ]),
                      ]),
                      a._v(" "),
                      i(
                        "div",
                        { staticClass: "d-flex justify-content-between" },
                        [
                          i(
                            "div",
                            { staticClass: "login-radio" },
                            [
                              i(
                                "el-radio-group",
                                {
                                  model: {
                                    value: a.isFreelancer,
                                    callback: function (i) {
                                      a.isFreelancer = i;
                                    },
                                    expression: "isFreelancer",
                                  },
                                },
                                [
                                  i("el-radio", { attrs: { label: !0 } }, [
                                    a._v(a._s(a.$t("Фрилансерман"))),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("el-radio", { attrs: { label: !1 } }, [
                                    a._v(a._s(a.$t("Буюртмачиман"))),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a._v(" "),
                          i(
                            "div",
                            { staticClass: "login-dialog-img no-mobile" },
                            [i("img", { attrs: { src: t("433e") } })]
                          ),
                        ]
                      ),
                      a._v(" "),
                      i("div", { staticClass: "auth-login-gradient" }, [
                        i("div", { staticClass: "row" }, [
                          i(
                            "div",
                            {
                              staticClass: "col",
                              staticStyle: { "text-align": "center" },
                            },
                            [
                              i(
                                "el-button",
                                {
                                  staticClass: "login-dialog-button",
                                  on: { click: a.ofertaDialog },
                                },
                                [a._v(" " + a._s(a.$t("Давом эттириш")) + " ")]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]
                  )
                : a._e(),
              a._v(" "),
              i(
                "el-dialog",
                {
                  staticClass: "oferta-dialog-main-page dialog-main-page",
                  attrs: { visible: a.dialogVisibleOferta },
                  on: {
                    "update:visible": function (i) {
                      a.dialogVisibleOferta = i;
                    },
                  },
                },
                [
                  i("div", { staticClass: "container ofertaDialog" }, [
                    i(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        "uz" === a.$i18n.locale
                          ? [
                              i(
                                "div",
                                {
                                  staticClass: "oferta-info",
                                  staticStyle: {
                                    "overflow-y": "scroll",
                                    height: "500px",
                                  },
                                },
                                [
                                  i("h4", [
                                    i("b", [a._v("Foydalanish shartlari")]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Axborot xizmatlarini taqdim etish va Platforma xizmatlaridan foydalanish uchun ushbu Taklifda belgilangan mezonlarga javob beradigan har qanday manfaatdor shaxs bilan ushbu Foydalanuvchi shartnomasi (keyingi o'rinlarda “Taklif” deb yuritiladi)."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Ushbu Shartnoma shartlarini so'zsiz va to'liq qabul qilish (qabul qilish) Foydalanuvchi tomonidan quyidagi nazarda tutilgan harakatlarni (keyingi o'rinlarda “Ofertani qabul qilish” deb yuritiladi) bajarishi hisoblanadi:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Platformadagi Tizimdagi akkauntni avtorizatsiya qilish;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Platformada tizimdagi shaxsiy ma'lumotlarni joylashtirish;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Platformada Tizimdagi buyurtma haqidagi ma'lumotlarni joylashtirish;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Ushbu Bitim Tomonlar Shartnoma shartlariga muvofiq yuqoridagi harakatlardan birini amalga oshirgan paytdan boshlab tuzilgan hisoblanadi va yozma shaklda tuzilgan hujjatga tengdir. Shartnomaning tuzilishi Tomonlar o'zlari uchun zarur bo'lgan darajada ushbu Shartnoma shartlari bilan tanishganligini anglatadi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Ushbu Ofertani qabul qilish orqali tuzilgan ushbu Shartnoma ikki tomonlama imzolashni talab qilmaydi va elektron shaklda amal qiladi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [a._v("1. Atamalar va ta’riflar")]),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Ushbu Shartnoma maqsadlari uchun quyidagi atamalar quyidagi ma'nolarda qo'llaniladi:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.1. Platforma - Platforma mijozlar va ijrochilarga (keyingi o'rinlarda “Foydalanuvchilar” deb yuritiladi) xizmatlar ko'rsatish bo'yicha buyurtmalarni erkin joylashtirish va bajarish imkonini beruvchi onlayn xizmatdir;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.2. Foydalanuvchi shaxsan harakat qiladigan va Taklifni qabul qiladigan hamda shaxsiy va professional maʼlumotlar va buyurtmalar haqidagi maʼlumotlarni Tizimga joylashtiradigan toʻliq qobiliyatli shaxsdir;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.3. Buyurtmachi - Pudratchini qidirish uchun buyurtmani e'lon qiladigan platformaning ro'yxatdan o'tgan foydalanuvchisi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.4. Pudratchi o'zining shaxsiy va professional ma'lumotlarini Tizimga joylashtirgan, shuningdek Buyurtmani bajarishga rozilik bergan ro'yxatdan o'tgan Platforma foydalanuvchisi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.5. Hisob qaydnomasi - Platformadagi Foydalanuvchi to'g'risidagi ma'lumotlar to'plami, tizim identifikatori \"login\", yaratilgan sana, materiallarning mavjudligi va boshqalar kabi identifikatsiyalash xususiyatlariga ega. Hisob Platformaning bir qismidir va uni alohida xizmat (mahsulot, mahsulot) sifatida ko'rib chiqish mumkin emas;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.6. Ish maydoni - Buyurtmachi va Pudratchi o'rtasida matnli xabarlar, fayllar va boshqa ma'lumotlar almashinuvi uchun Platformada axborot maydoni;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.7. Shaxsiy kabinet - Foydalanuvchiga o'z akkauntini boshqarish, shu jumladan avtorizatsiya paytida ko'rsatilgan shaxsiy ma'lumotlarni va boshqa ma'lumotlarni joylashtirish, o'zgartirish yoki o'chirish imkonini beruvchi Saytning bir qismi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.8. Xavfsiz bitim - Buyurtmachi va Pudratchi (keyingi o'rinlarda Bitim ishtirokchilari deb yuritiladi) o'rtasida Pudratchi tomonidan bajarilgan ish natijalarini topshirish, buyurtma natijalarini Buyurtmachi tomonidan qabul qilish va to'lash to'g'risidagi bitim;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.9. Tranzaksiyani qabul qilish - seyf tranzaksiya shartlarini so'zsiz va to'liq qabul qilish (qabul qilish) Foydalanuvchilar tomonidan quyidagi nazarda tutilgan harakatlarni bajarish hisoblanadi:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Buyurtmachi tomonidan Platformadagi Ish maydonida e'lon qilinishi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Pudratchi tomonidan Platformadagi Ish maydonida buyurtma shartlarini (hajmi, sifati, bajarish vaqti, buyurtma narxi) qabul qilish;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Buyurtmachi va Pudratchi tomonidan Bitim shartlariga roziligini tasdiqlashi (nashr etilgan buyurtma);"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.10. Moderator - Freelancerlar va mijozlar o'rtasidagi tranzaktsiyalarni nazorat qilish va xavfsizligini ta'minlash uchun platforma ma'muriyati tomonidan tayinlangan shaxs;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.11. Taklif - bu bir yoki bir nechta aniq shaxslarga qaratilgan taklif bo'lib, u juda aniq va taklifni kiritgan shaxsning o'zini taklifni qabul qiladigan adresat bilan shartnoma tuzgan deb hisoblash niyatini ifodalaydi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.12. Elektron hamyon - bajarilgan buyurtmalar uchun ijrochilarga to'lovning elektron usuli;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.13. Balans - Buyurtmachi va Pudratchining elektron hamyonidagi mablag'lar miqdori haqida ma'lumot."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v(
                                        "2. Platformadan foydalanish shartlari"
                                      ),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.1. Frilanserlar o'z xizmatlari va o'zlari haqida faqat ishonchli ma'lumotlarni joylashtirish majburiyatini oladilar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.2. Mijozlar Buyurtma shartlarida o'zlari va ehtiyojlari haqida to'liq va aniq ma'lumotlarni taqdim etish majburiyatini oladilar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.3. Mijozlar va frilanserlar o'z majburiyatlarini kelishilgan shartlarda bajarish majburiyatini oladilar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.4. Mijozlar va frilanserlar hamkorlik jarayonida o'zini to'g'ri va hurmatli tutish majburiyatini oladi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.5. Moderator, agar tomonlardan birining xavfsizligiga tahdid soladigan bo'lsa, Frilanser va Mijoz o'rtasidagi Bitimni to'xtatib turish yoki bekor qilish huquqiga ega."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [a._v("3. Taklif mavzusi")]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "3.1. Ushbu Ommaviy oferta Platformadan foydalanish va frilanserlar tomonidan Mijozlarga xizmatlar ko'rsatish shartlarini belgilaydi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "3.2. Platforma Mijozlarga o'z buyurtmalarini Platformada joylashtirish, Pudratchilarga esa o'z buyurtmalarini bajarish imkoniyatini beradi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "3.3. Moderator frilanserlar va mijozlar o'rtasidagi operatsiyalar xavfsizligini ta'minlaydi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v(
                                        "4. Tomonlarning huquq va majburiyatlari"
                                      ),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.1. Buyurtmachi aniq tavsif bilan buyurtma beradi va o'z elektron hamyonining balansini buyurtmada ko'rsatilgan byudjetdan kam bo'lmagan miqdorda to'ldiradi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.2. Tomonlar buyurtmani, uning narxini, shartlarini, uni amalga oshirishning boshqa muhim shartlari va nuanslarini, shuningdek buyurtma natijalarini etkazib berish va qabul qilish tartibini kelishib oladilar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.2. Tomonlar buyurtmani, uning narxini, shartlarini, uni amalga oshirishning boshqa muhim shartlari va nuanslarini, shuningdek buyurtma natijalarini etkazib berish va qabul qilish tartibini kelishib oladilar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.4. Tomonlar buyurtma shartlariga rioya qilish va bajarilgan buyurtma uchun o'z vaqtida to'lash;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.5. Pudratchi tugallangan buyurtmani Buyurtmachiga yuboradi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.6. Buyurtmachi o'z fikr-mulohazalarini bildirish va buyurtmani 7 (etti) kun ichida bajarish imkoniyatiga ega. Pul uning balansidan Platforma tomonidan avtomatik ravishda yechib olinadi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.7. Agar 7 (etti) kun ichida Pudratchi Buyurtmachidan to'ldirilgan buyurtma uchun to'lovni olmasa, Pudratchi Buyurtmachi ustidan Platforma Moderatoriga shikoyat qilishi mumkin;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.8. Platforma qo'shimcha ogohlantirishsiz o'z faoliyatini to'liq yoki qisman to'xtatib turish, profilaktika ishlarini bajarish huquqiga ega;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.9. Platformadan foydalanishning qonuniyligiga shubha tug‘ilsa, shuningdek, ushbu Shartnoma shartlari sezilarli darajada buzilgan taqdirda, Platforma tegishli shaxsning akkauntini va u to‘g‘risida e’lon qilingan barcha ma’lumotlarni darhol bloklash yoki o‘chirish huquqiga ega;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.10. Agar hisobdan hech bir Tomon tomonidan 6 (olti) oydan ortiq foydalanilmasa, Platforma qo'shimcha ogohlantirishsiz bunday hisobni o'chirish huquqiga ega;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.11. Tomonlar Tomonlarning ma'lumotlarini, shu jumladan avtorizatsiya paytida olingan ma'lumotlarni, shaxsiy ma'lumotlarni, shaxsiy ma'lumotlarni, tijorat ma'lumotlarini oshkor qiluvchi Tomonning ochiq roziligisiz uchinchi shaxslarga topshirishga haqli emas."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v(
                                        "5. Buyurtmachi va Pudratchi o'rtasida operatsiyalarni amalga oshirish."
                                      ),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "5.1. Bitim ishtirokchilari Bitim shartlarini muhokama qilishlari va uni tasdiqlashdan oldin tuzatishlar kiritishlari mumkin;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "5.2. Tranzaktsiya ishtirokchilari to'ldirilgan Buyurtma natijalarini Platformaning ish maydoniga uzatadilar va qabul qiladilar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "5.3. Mijoz buyurtmaning to'g'ri bajarilishini, bitim shartlariga muvofiq tekshiradi va uni yakunlaydi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "5.4. Bitim taraflari o'rtasida kelishmovchiliklar yuzaga kelsa, Ishtirokchilardan biri tomonidan ushbu Bitimning bir yoki bir nechta bandlari yoki Bitim shartlarini bajarmaslik yoki buzish va uni o'z-o'zidan hal qilishning iloji bo'lmasa, ish sohasida muzokaralar yo'li bilan. Platforma, Platforma Moderatori ziddiyatga kirishadi va Buyurtmachi va Pudratchi o'rtasidagi kelishmovchiliklarni hal qiladi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v("6. Tomonlarning javobgarligi"),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "6.1. Buyurtmachi o‘zi joylashtirgan axborot va materiallarning Qonun hujjatlari talablariga muvofiqligi, shu jumladan ularning mazmuni va qonuniyligi uchun mustaqil va to‘liq javobgar bo‘ladi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "6.2. Pudratchi Buyurtmani shartnomada ko'rsatilgan muddatlarga muvofiq bajaradi yoki Buyurtmachining roziligi bilan buyurtmani to'ldirish muddatlarini uzaytiradi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v(
                                        "7. Moderator tomonidan tranzaksiyani qo'llab-quvvatlash"
                                      ),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.1. Moderator Buyurtmachi va Pudratchi o'rtasidagi Bitimning Ishtirokchisi (Tomoni) emas va Buyurtmachi tomonida ham, Pudratchi tomonida ham harakat qilmaydi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.2. Ushbu shartnoma shartlarini qabul qilib, Bitim ishtirokchilari Moderatorning kelishmovchiliklarni hal qilish va Bitim shartlarining bajarilishini baholash bo'yicha mumkin bo'lgan qarori ikkala Tomonning kelishilgan irodasining ifodasi ekanligiga va ular tomonidan so'zsiz amalga oshirilishiga rozi bo'ladilar. har bir Tomonning huquqlariga muvofiq qabul qilinadi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.3. Moderator kelib tushgan shikoyatlarni ko'rib chiqmaydi:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Pudratchining to'ldirilgan Buyurtmasi Buyurtmachi tomonidan qabul qilingandan keyin;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Pudratchi tomonidan buyurtmani bajarish muddati tugagunga qadar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• O‘zbekiston Respublikasi qonun hujjatlariga zid bo‘lgan buyruq (Ruz);"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.4. Shikoyat Moderator hisobiga tushgan paytdan boshlab 3 (uch) kun ichida Moderator ish hududidagi Buyurtmachi va Pudratchi bilan bog‘lanadi va nizo sabablarini aniqlash va uni hal qilish choralarini ko‘radi. Buyurtmachi va Pudratchi mojaro sabablarini mustaqil baholash uchun Moderator tomonidan so'ralishi mumkin bo'lgan barcha ma'lumotlarni taqdim etishga majburdir;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.5. Moderator tomonidan o'tkazilgan mustaqil baholash natijalariga ko'ra qaror qabul qilinishi mumkin:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Pudratchiga pul mablag'larini to'lash va buyurtma bo'yicha ish natijasining muvofiqligi to'g'risida;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• buyurtma bo'yicha ish natijalari va Buyurtmachiga pul mablag'larini qaytarish o'rtasidagi nomuvofiqlik haqida."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Moderatorning qarori to'g'risida har ikki Tomonga xabarnoma ularning shaxsiy kabinetida yuboriladi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.6. Mustaqil baholash natijasida qabul qilingan qaror qayta ko'rib chiqilishi mumkin emas va Bitim tomonlari tomonidan har bir Tomonning huquqlarini hisobga olgan holda so'zsiz bajariladi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.7. Platforma Moderatoriga shikoyat Bitimning har qanday Tomonining Platformaning ishtirokisiz va ishtirokisiz sudga murojaat qilish va Bitim bilan bog'liq har qanday muammolarni hal qilish uchun Moderator imkoniyatini istisno etmaydi. Shu bilan birga, Moderatorning Bitim to'g'risidagi qarori faqat Pudratchi va Platformada vakolatli Buyurtmachi o'rtasidagi ushbu shartnoma doirasida amal qiladi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v(
                                        "8. Shartnomaning amal qilish muddati"
                                      ),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "8.1. Ushbu Shartnoma Tomonlar o'z majburiyatlarini to'liq bajarmaguncha amal qiladi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [a._v("9. Umumiy qoidalar")]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1. Ushbu oferta shartnomasi (keyingi o‘rinlarda “Oferta” deb yuritiladi) shartlar asosida Freelance Platforma (keyingi o‘rinlarda “Platforma” deb yuritiladi) funksiyasidan foydalanish bo‘yicha xizmatlar ko‘rsatish shartnomasini tuzish bo‘yicha ommaviy ofertadir. quyida keltirilgan:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1.1. Taklifni qabul qilish (qabul qilish) Platformada avtorizatsiya va uning funksional imkoniyatlaridan foydalanish hisoblanadi;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1.2. Ushbu Shartnoma bilan tartibga solinmagan barcha masalalarda Tomonlar har qanday Tomonning haqiqiy joylashgan joyidan qat’i nazar, O‘zbekiston Respublikasi qonunchiligiga amal qiladilar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1.3. Tomonlar barcha yuzaga keladigan kelishmovchiliklarni muzokaralar yo'li bilan tinch yo'l bilan hal qilish majburiyatini oladilar;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1.4. Ushbu Ofertani qabul qilish orqali tuzilgan ushbu Shartnoma ikki tomonlama imzolashni talab qilmaydi va elektron shaklda amal qiladi."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i(
                                    "div",
                                    { staticClass: "login-radio" },
                                    [
                                      i(
                                        "el-checkbox",
                                        {
                                          staticStyle: {
                                            "white-space": "break-spaces",
                                          },
                                          attrs: {
                                            "true-label": 1,
                                            "false-label": 0,
                                          },
                                          model: {
                                            value: a.is_oferta,
                                            callback: function (i) {
                                              a.is_oferta = i;
                                            },
                                            expression: "is_oferta",
                                          },
                                        },
                                        [
                                          a._v(
                                            "Ommaviy Oferta bilan tanishib chiqdim va u yerda ko’rsatilgan shartlarga roziligimni bildiraman"
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ]
                          : a._e(),
                        a._v(" "),
                        "ru" === a.$i18n.locale
                          ? [
                              i(
                                "div",
                                {
                                  staticClass: "oferta-info",
                                  staticStyle: {
                                    "overflow-y": "scroll",
                                    height: "500px",
                                  },
                                },
                                [
                                  i("h4", [
                                    i("b", [
                                      a._v("Пользовательское соглашение"),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Настоящее Пользовательское соглашение (далее – «Оферта») с любым заинтересованным лицом, отвечающим критериям, установленным Настоящей Офертой на оказание информационных услуг и использования сервисов Платформы."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Безусловным и полным принятием (акцептом) условий настоящего Договора считается выполнение Пользователем следующих конклюдентных действий (далее – «Акцепт Оферты»):"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Самостоятельная авторизация учетной записи в Системе на Платформе;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Размещение личных сведений в Системе на Платформе;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Размещение сведений о заказе в Системе на Платформе;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Настоящий Договор считается заключенным с момента совершения Сторонами одного из вышеперечисленных действий в соответствии с условиями Договора и приравнен к документу, составленному в письменной форме. Заключение Договора означает, что Стороны, в необходимой для них степени, ознакомились с условиями настоящего Договора. "
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "Настоящий Договор, заключаемый путем акцепта настоящей Оферты, не требует двустороннего подписания и действителен в электронном виде."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [a._v("1. Термины и определения")]),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "В целях настоящего Договора нижеприведенные термины используются в следующих значениях:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      '1.1. Платформа - Платформа представляет собой онлайн-сервис, позволяющий заказчикам и исполнителям (далее - "Пользователи") свободно оформлять и выполнять заказы на оказание услуг;'
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.2. Пользователь - полностью дееспособное физическое лицо, действующее лично и Акцептовавшее Оферту, и размещающее в Системе личные и профессиональных данные, информацию о заказах;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.3. Заказчик - зарегистрированный Пользователь Платформы, публикующий заказ для поиска Исполнителя;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("br"),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.4. Исполнитель - зарегистрированный Пользователь Платформы, разместивший в Системе свои личные и профессиональные данные, а также, давший согласие на выполнение Заказа;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      '1.5. Учетная запись - совокупность данных о Пользователе на Платформе, которые имеют идентифицирующие признаки, такие как системный идентификатор "логин", дата создания, наличие материалов и прочее. Учетная запись является частью Платформы и не может рассматриваться как отдельный сервис (товар, продукт);'
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.6. Рабочая область - информационное пространство на Платформе, для обмена текстовыми сообщениями, файлами и другой информацией между Заказчиком и Исполнителем;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.7. Личный кабинет - часть Сайта, позволяющая Пользователю управлять своей учетной записью, в том числе, размещать, изменять или удалять личные данные и иную информацию, указанную при авторизации;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.8. Безопасная сделка - соглашение между Заказчиком и Исполнителем (далее Участники Сделки) по передаче результатов выполненных работ Исполнителем, приемке и оплате результатов заказа Заказчиком;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.9. Акцепт сделки - Безусловным и полным принятием (акцептом) условий Безопасной сделки считается выполнение Пользователями следующих конклюдентных действий:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Публикация заказа Заказчиком в Рабочей области на Платформе;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Принятие условий заказа (объем, качество, сроки исполнения, стоимость заказа) в Рабочей области на Платформе Исполнителем;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• Подтверждение Заказчиком и Исполнителем своего согласия с условиями Сделки (опубликованного заказа);"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.10. Модератор – лицо, назначенное Администрацией Платформы для контроля и обеспечения безопасности сделок между Фрилансерами и Заказчиками;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.11. Оферта – это адресованное одному или нескольким конкретным лицам предложение, которое достаточно определенно и выражает намерение лица, сделавшего предложение, считать себя заключившим договор с адресатом, которым будет принято предложение;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.12. Электронный кошелек – это электронный способ оплаты исполнителям за выполненный заказ;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "1.13. Баланс – информация о количестве денежных средств в электронном кошельке Заказчика и Исполнителя."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v(
                                        "2. Условия Использования Платформы"
                                      ),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.1. Фрилансеры обязуются размещать только достоверную информацию о своих услугах и о себе самом;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.2. Заказчики обязуются предоставлять полную и достоверную информацию о себе и своих потребностях в Условиях Заказов;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.3. Заказчики и Фрилансеры обязуются выполнять свои обязательства в рамках согласованных условий;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.4. Заказчики и Фрилансеры обязуются вести себя корректно и уважительно в процессе сотрудничества;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "2.5. Модератор имеет право приостановить или отменить Сделку между Фрилансером и Заказчиком, если она представляет угрозу безопасности одной из сторон."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [a._v("3. Предмет Оферты")]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "3.1. Настоящая Публичная Оферта определяет условия использования Платформы и предоставления услуг Фрилансерами Заказчикам;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "3.2. Платформа предоставляет возможность Заказчикам размещать свои заказы на Платформе, а Исполнителям – выполнять их заказы;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "3.3. Модератор обеспечивает Безопасность Сделок между Фрилансерами и Заказчиками."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v("4. Права и обязанности Сторон"),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.1. Заказчик размещает заказ с точным описанием и пополняет баланс своего электронного кошелька на сумму, не меньше бюджета, указанного в заказе;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.2. Стороны согласовывают заказ, его стоимость, сроки, иные существенные условия и нюансы его выполнения, а также порядок сдачи и приемки результатов заказа;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.3. Исполнитель запрашивает у заказчика всю недостающую информацию для выполнения заказа;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.4. Стороны соблюдают сроки проведения заказа и своевременную оплату за выполненный заказ;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.5. Исполнитель отправляет Заказчику выполненный заказ;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.6. У Заказчика есть возможность дать обратную связь и завершить заказ, в течение 7 (семи) дней. Деньги с его баланса спишутся автоматически Платформой;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.7. Если в течение 7 (семи) дней Исполнитель не получит оплату за выполненный заказ от Заказчика, Исполнитель может подать на Заказчика жалобу Модератору Платформы;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.8. Платформа вправе без дополнительного уведомления приостанавливать свою работу, в целом или частично, для проведения профилактических работ;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.9. В случае наличия сомнений в правомерности использования Платформы, а также, в случае существенных нарушений условий настоящего Договора, Платформа вправе незамедлительно заблокировать или удалить учетную запись соответствующего лица и все опубликованные сведения о нем;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.10. В случае неиспользования учетной записью любой из Сторон в течение более 6 (шести) месяцев, Платформа вправе без дополнительного уведомления удалить такую учетную запись;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "4.11. Стороны не вправе передавать данные Сторон, включая данные, полученные при авторизации, личные сведения, персональные данные, коммерческую информацию любым третьим лицам, без явно выраженного согласия раскрывающей Стороны."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v(
                                        "5. Проведение Сделок между Заказчиком и Исполнителем."
                                      ),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "5.1. Участники Сделки могут обсуждать Условия Сделки и вносить коррективы до ее утверждения;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "5.2. Участники Сделки осуществляют передачу и приемку результатов выполненного Заказа в Рабочей области Платформы;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "5.3. Заказчик проверяет правильное выполнение заказа, согласно условиям сделки и завершает ее;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "5.4. При возникновении разногласий между Участниками Сделки, невыполнением или нарушением одним из Участников одного или нескольких пунктов настоящего Договора или Условий сделки и невозможности разрешить ее собственными силами, путем переговоров в Рабочей области Платформы, в конфликт вступает Модератор Платформы и решает разногласия между Заказчиком и Исполнителем."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [a._v("6. Ответственность Сторон")]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "6.1. Заказчик самостоятельно и в полном объеме несет ответственность за соответствие размещаемой им информации и материалов требованиям Законодательства, в том числе, за их содержание и правомерность;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "6.2. Исполнитель выполняет Заказ, согласно срокам, указанных в договоре или продлевает сроки выполнения заказа с согласия Заказчика."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [
                                      a._v(
                                        "7. Сопровождение Сделки Модератором"
                                      ),
                                    ]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.1. Модератор не является Участником (Стороной) Сделки между Заказчиком и Исполнителем и не выступает ни на стороне Заказчика, ни на стороне Исполнителя;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.2. Принимая условия настоящего договора, Участники Сделки соглашаются, что возможное решение Модератора по урегулированию разногласий и оценка выполнения условий Сделки является согласованным волеизъявлением обеих Сторон и исполняется ими безоговорочно, как принятое с соблюдением прав каждой Стороны;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.3. Модератор не рассматривает Жалобы, которые поступили:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• после того, как выполненный Заказ Исполнителя принят Заказчиком;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• до того, как истек срок выполнения Заказа Исполнителем;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• заказ, который противоречит Законодательству Республики Узбекистан (Руз);"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.4. В течение 3 (трех) дней, с момента поступления Жалобы в Кабинет Модератора, Модератор связывается с Заказчиком и Исполнителем в Рабочей области и принимает меры для выяснения причин спорной ситуации и ее урегулированию. Заказчик и Исполнитель обязуются предоставить всю информацию, которая может быть запрошена Модератором, для целей проведения независимой оценки причины конфликта;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.5. По результату проведенной Модератором независимой оценки может быть принято решение:"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• о соответствии результата работы над заказом и выплате средств Исполнителю;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "• о несоответствии результата работы над заказом и возврате средств Заказчику."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "О решении Модератора приходит Уведомление для обоих Сторон в их Личный кабинет."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.6. Принятое по результату проведенной независимой оценки решение не может быть пересмотрено и исполняется Сторонами Сделки безоговорочно, как принятое с соблюдением прав каждой Стороны;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "7.7. Жалоба Модератору Платформы не исключает возможности любой из Сторон Сделки обратиться в суд без участия и привлечения Платформы и Модератора для решения любых вопросов, связанных со Сделкой. При этом, решение Модератора по Сделке действует только в рамках настоящего договора между Исполнителем и Заказчиком, авторизованных на Платформе."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [a._v("8. Действие Договора")]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "8.1. Настоящий Договор действует до полного исполнения Сторонами своих обязательств."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("h4", [
                                    i("b", [a._v("9. Общие положения")]),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      '9.1. Настоящий договор оферты (далее - "Оферта") является публичным предложением заключить договор на оказание услуг по использованию функционала Фрилансовой платформы (далее - "Платформа") на условиях, изложенных ниже:'
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1.1. Акцептом (принятием) Оферты считается прохождение авторизации на Платформе и использование ее функционала;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1.2. Во всем, что не урегулировано настоящим Договором, Стороны руководствуются законодательством Республики Узбекистан, вне зависимости от фактического местоположения любой из Сторон;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1.3. Стороны обязуются урегулировать все возникающие разногласия мирным путем посредством переговоров;"
                                    ),
                                  ]),
                                  a._v(" "),
                                  i("p", [
                                    a._v(
                                      "9.1.4. Настоящее Соглашение, заключаемое путем акцепта настоящей Оферты, не требует двустороннего подписания и действительно в электронном виде."
                                    ),
                                  ]),
                                  a._v(" "),
                                  i(
                                    "div",
                                    { staticClass: "login-radio" },
                                    [
                                      i(
                                        "el-checkbox",
                                        {
                                          attrs: {
                                            "true-label": 1,
                                            "false-label": 0,
                                          },
                                          model: {
                                            value: a.is_oferta,
                                            callback: function (i) {
                                              a.is_oferta = i;
                                            },
                                            expression: "is_oferta",
                                          },
                                        },
                                        [
                                          a._v(
                                            a._s(
                                              a.$t(
                                                "Я ознакомлен и соглашаюсь с Публичной Офертой"
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ]
                          : a._e(),
                      ],
                      2
                    ),
                    a._v(" "),
                    i(
                      "div",
                      { staticClass: "auth-login-gradient my-modal-btns" },
                      [
                        i("div", { staticClass: "row" }, [
                          i(
                            "div",
                            {
                              staticClass: "col",
                              staticStyle: { "text-align": "center" },
                            },
                            [
                              i(
                                "el-button",
                                {
                                  staticClass: "login-dialog-button",
                                  on: {
                                    click: function (i) {
                                      return a.closeDialogOferta();
                                    },
                                  },
                                },
                                [a._v(" " + a._s(a.$t("Давом эттириш")) + " ")]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        n = [],
        e = (t("8e6e"), t("ac6a"), t("456d"), t("ade3")),
        o = t("2f62"),
        l = t("18fa"),
        s = t.n(l),
        u = t("5d2d"),
        h = t("5f87");
      function d(a, i) {
        var t = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(a);
          i &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(a, i).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function v(a) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? d(Object(t), !0).forEach(function (i) {
                Object(e["a"])(a, i, t[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (i) {
                Object.defineProperty(
                  a,
                  i,
                  Object.getOwnPropertyDescriptor(t, i)
                );
              });
        }
        return a;
      }
      var m = {
          components: { Loading: s.a },
          data: function () {
            return {
              loading: { opacity: 1, width: 70, height: 70 },
              isFreelancer: !0,
              dialogVisible: !1,
              isLoading: !0,
              fullPage: !0,
              dialogVisibleOferta: !1,
              is_oferta: !1,
            };
          },
          computed: v(
            {},
            Object(o["c"])({ app_module: "app/APP_MODULE", user: "auth/USER" })
          ),
          created: function () {
            var a = this;
            this.authLogout().then(function (i) {
              var t = a.$route.query;
              t.token
                ? (Object(h["c"])(t.token),
                  a.setUserToken(t.token),
                  a
                    .getInfo()
                    .then(function (i) {
                      if (i.success) {
                        if (
                          (a.user.avatar ||
                            a
                              .getPhoto({
                                passport: i.data.passport,
                                pin: i.data.pin,
                              })
                              .then(function (a) {
                                Object(u["c"])(
                                  "avatar_photo",
                                  JSON.stringify(a.data.image)
                                ),
                                  Object(u["c"])("is_auto_avatar", !0);
                              }),
                          Object(u["a"])("go_route") &&
                            Object(u["a"])("go_route").length)
                        ) {
                          var t = Object(u["a"])("go_route");
                          if ((Object(u["b"])("go_route"), "NewOrder" === t))
                            return (
                              a.$store.dispatch("app/appModuleCustomer"),
                              null !== i.data.customer
                                ? (a.$router.push({ name: "NewOrder" }), !1)
                                : (a.$router.push({ name: "CustomerAboutMe" }),
                                  !1)
                            );
                          if ("ChatMessages" === t) {
                            if (
                              (a.$store.dispatch("app/appModuleCustomer"),
                              i.data.customer)
                            ) {
                              var r = Object(u["a"])("route_id")
                                ? parseInt(Object(u["a"])("route_id"))
                                : null;
                              return (
                                Object(u["b"])("route_id"),
                                a.$router.push({
                                  name: "ChatMessages",
                                  params: { id: r },
                                }),
                                !1
                              );
                            }
                            return (
                              a.$router.push({ name: "CustomerAboutMe" }), !1
                            );
                          }
                          if ("freelancerEmployer" === t)
                            return (
                              a.$store.dispatch("app/appModuleFreelancer"),
                              null !== i.data.freelancer
                                ? (a.$router.push({
                                    name: "freelancerEmployer",
                                  }),
                                  !1)
                                : (a.$router.push({
                                    name: "FreelancerAboutMe",
                                  }),
                                  !1)
                            );
                          if ("OrderShow" === t) {
                            var n = parseInt(Object(u["a"])("route_id"));
                            return (
                              Object(u["b"])("route_id"),
                              a.$store.dispatch("app/appModuleFreelancer"),
                              i.data.freelancer
                                ? (a.$router.push({
                                    name: "OrderShow",
                                    params: { id: n },
                                  }),
                                  !1)
                                : (a.$router.push({
                                    name: "FreelancerAboutMe",
                                  }),
                                  !1)
                            );
                          }
                          if ("FreelancerShow" === t) {
                            var e = parseInt(Object(u["a"])("route_id"));
                            return (
                              Object(u["b"])("route_id"),
                              a.$store.dispatch("app/appModuleCustomer"),
                              i.data.freelancer
                                ? (a.$router.push({
                                    name: "FreelancerShow",
                                    params: { id: e },
                                  }),
                                  !1)
                                : (a.$router.push({ name: "CustomerAboutMe" }),
                                  !1)
                            );
                          }
                          if ("HomeOrders" === t)
                            return (
                              a.$store.dispatch("app/appModuleFreelancer"),
                              null !== i.data.freelancer
                                ? (a.$router.push({ name: "HomeOrders" }), !1)
                                : (a.$router.push({
                                    name: "FreelancerAboutMe",
                                  }),
                                  !1)
                            );
                          null !== i.data.freelancer
                            ? a.$store.dispatch("app/appModuleFreelancer")
                            : a.$store.dispatch("app/appModuleCustomer");
                        }
                        if (
                          !(
                            (null !== i.data.freelancer &&
                              null !== i.data.customer) ||
                            (null == i.data.freelancer &&
                              null == i.data.customer)
                          )
                        )
                          return null !== i.data.freelancer
                            ? (a.$store.dispatch("app/appModuleFreelancer"),
                              a.$router.push({ name: "freelancerEmployer" }),
                              !1)
                            : (a.$store.dispatch("app/appModuleCustomer"),
                              a.$router.push({ name: "Employer" }),
                              !1);
                        a.dialogVisible = !0;
                      }
                    })
                    .catch(function () {
                      a.redirectToLogin();
                    }))
                : (a.$message.error(a.$t("Рўйхатдан ўтиш якунланмади")),
                  a.redirectToLogin());
            });
          },
          methods: v(
            v(
              {},
              Object(o["b"])({
                getInfo: "auth/getInfo",
                getPhoto: "auth/getPhoto",
                setUserToken: "auth/setUserToken",
                saveOfertaUserData: "auth/saveOfertaUserData",
                authLogout: "auth/resetToken",
              })
            ),
            {},
            {
              ofertaDialog: function () {
                this.user && this.user.has_seen_offer
                  ? ((this.is_oferta = !0), this.returnLogin())
                  : ((this.is_oferta = !1), (this.dialogVisibleOferta = !0));
              },
              redirectToLogin: function () {
                this.$router.push({ name: "Home" });
              },
              returnLogin: function () {
                this.is_oferta
                  ? this.isFreelancer
                    ? (this.$store.dispatch("app/appModuleFreelancer"),
                      this.$router.push({ name: "freelancerEmployer" }))
                    : (this.$store.dispatch("app/appModuleCustomer"),
                      this.$router.push({ name: "Employer" }))
                  : this.$message.error(this.$t("Оферта билан танишиб чиқинг"));
              },
              closeDialogOferta: function () {
                this.is_oferta
                  ? (this.saveOfertaUser(), this.returnLogin())
                  : this.$message.error(this.$t("Оферта билан танишиб чиқинг"));
              },
              saveOfertaUser: function () {
                this.saveOfertaUserData();
              },
            }
          ),
        },
        c = m,
        b = (t("a4bb"), t("4481"), t("67a5"), t("2877")),
        g = Object(b["a"])(c, r, n, !1, null, "740889a8", null);
      i["default"] = g.exports;
    },
  },
]);

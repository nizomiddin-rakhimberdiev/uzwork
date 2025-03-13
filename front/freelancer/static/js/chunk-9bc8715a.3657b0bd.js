(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-9bc8715a"],
  {
    "0743": function (t, a, s) {
      t.exports = s.p + "static/img/my-order-banner.734c1931.png";
    },
    "0a57": function (t, a, s) {
      t.exports = s.p + "static/img/replies-received.d85d01b7.svg";
    },
    "1cd4": function (t, a, s) {},
    "254c": function (t, a, s) {
      t.exports = s.p + "static/img/cards-icon.eec0def9.svg";
    },
    2714: function (t, a, s) {
      t.exports = s.p + "static/img/calendar.5791eaf9.svg";
    },
    "2fa1": function (t, a, s) {
      t.exports = s.p + "static/img/coins.c66aa261.svg";
    },
    "319c": function (t, a, s) {
      t.exports = s.p + "static/img/filter.adfee4e4.svg";
    },
    "3a0d": function (t, a, s) {
      t.exports = s.p + "static/img/check-icon.81233601.svg";
    },
    "40ca": function (t, a, s) {
      t.exports = s.p + "static/img/saved-icon.2704fec8.svg";
    },
    4333: function (t, a, s) {},
    "48f7": function (t, a, s) {
      t.exports = s.p + "static/img/my-suggestion.e08e2c81.svg";
    },
    "5dbc": function (t, a, s) {
      var r = s("d3f4"),
        e = s("8b97").set;
      t.exports = function (t, a, s) {
        var i,
          c = a.constructor;
        return (
          c !== s &&
            "function" == typeof c &&
            (i = c.prototype) !== s.prototype &&
            r(i) &&
            e &&
            e(t, i),
          t
        );
      };
    },
    6820: function (t, a, s) {
      t.exports = s.p + "static/img/performed.739f75a5.svg";
    },
    7426: function (t, a, s) {
      t.exports =
        s.p + "static/img/freelancer-home-page-done-icon.41aacf64.svg";
    },
    "795b": function (t, a, s) {
      "use strict";
      var r = function () {
          var t = this,
            a = t._self._c;
          return a(
            "el-card",
            { attrs: { shadow: "always" } },
            [
              a("div", { staticClass: "my-card-wrapper left-card" }, [
                a("div", { staticClass: "card-main" }, [
                  a("div", { staticClass: "row" }, [
                    a("div", { staticClass: "col-4" }, [
                      a(
                        "div",
                        {
                          staticClass: "card-img",
                          style: "background-color: ".concat(t.bg),
                        },
                        [a("img", { attrs: { src: t.img } })]
                      ),
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "col-6" }, [
                      a("div", { staticClass: "card-title" }, [
                        t._v(t._s(t.title)),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("div", { staticClass: "card-count" }, [
                    t._v(t._s(t.count)),
                  ]),
                ]),
              ]),
              t._v(" "),
              t._t("button-bottom"),
            ],
            2
          );
        },
        e = [],
        i =
          (s("c5f6"),
          { props: { img: String, title: String, bg: String, count: Number } }),
        c = i,
        o = (s("d281"), s("2877")),
        n = Object(o["a"])(c, r, e, !1, null, "16e66bc5", null);
      a["a"] = n.exports;
    },
    "81c3": function (t, a, s) {
      "use strict";
      s("ab98");
    },
    8241: function (t, a, s) {
      t.exports = s.p + "static/img/calendar-mobile.060d6b7b.svg";
    },
    "8afd": function (t, a, s) {},
    "8b97": function (t, a, s) {
      var r = s("d3f4"),
        e = s("cb7c"),
        i = function (t, a) {
          if ((e(t), !r(a) && null !== a))
            throw TypeError(a + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function (t, a, r) {
                try {
                  (r = s("9b43")(
                    Function.call,
                    s("11e9").f(Object.prototype, "__proto__").set,
                    2
                  )),
                    r(t, []),
                    (a = !(t instanceof Array));
                } catch (e) {
                  a = !0;
                }
                return function (t, s) {
                  return i(t, s), a ? (t.__proto__ = s) : r(t, s), t;
                };
              })({}, !1)
            : void 0),
        check: i,
      };
    },
    "8bcb": function (t, a, s) {
      "use strict";
      s("bb9d");
    },
    "8c93": function (t, a, s) {
      t.exports = s.p + "static/img/wallet-icon.31efe91b.svg";
    },
    "8f16": function (t, a, s) {
      "use strict";
      s.r(a);
      var r = function () {
          var t = this,
            a = t._self._c;
          return a(
            "div",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: t.isLoading,
                  expression: "isLoading",
                },
              ],
              staticClass: "freelancer-dashboard",
            },
            [
              a(
                "div",
                { staticClass: "no-mobile" },
                [
                  a(
                    "el-row",
                    { attrs: { gutter: 56 } },
                    [
                      a(
                        "el-col",
                        { attrs: { span: 18 } },
                        [
                          a(
                            "el-row",
                            { staticClass: "mbottom-2", attrs: { gutter: 56 } },
                            [
                              a(
                                "el-col",
                                { attrs: { span: 8 } },
                                [
                                  a("Card", {
                                    attrs: {
                                      img: t.WalletIcon,
                                      title: t.$t("Ҳамён"),
                                      bg: "#F1F2FF",
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "button-bottom",
                                        fn: function () {
                                          return [
                                            a(
                                              "div",
                                              {
                                                staticClass:
                                                  "card-price-wrapper",
                                              },
                                              [
                                                a(
                                                  "span",
                                                  { staticClass: "card-price" },
                                                  [t._v("50 000")]
                                                ),
                                                t._v(
                                                  "  " +
                                                    t._s(t.$t("сўм")) +
                                                    "\n                "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            a(
                                              "div",
                                              {
                                                staticClass: "card-price-text",
                                              },
                                              [
                                                a("span", [
                                                  t._v(
                                                    t._s(t.$t("Ҳамён рақами:"))
                                                  ),
                                                ]),
                                                t._v(" "),
                                                a(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "card-price-text-number",
                                                  },
                                                  [t._v("12110 01254")]
                                                ),
                                              ]
                                            ),
                                          ];
                                        },
                                        proxy: !0,
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              a(
                                "el-col",
                                { attrs: { span: 8 } },
                                [
                                  a("Card", {
                                    attrs: {
                                      img: t.CardIcon,
                                      title: "",
                                      bg: "#F1F2FF",
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "button-bottom",
                                        fn: function () {
                                          return [
                                            a(
                                              "div",
                                              {
                                                staticClass:
                                                  "card-price-wrapper card-freelancer-home",
                                              },
                                              [
                                                a(
                                                  "span",
                                                  { staticClass: "card-title" },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.$t(
                                                          "Картага маблағни ечиб олиш"
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ];
                                        },
                                        proxy: !0,
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              a("el-col", { attrs: { span: 8 } }, [
                                a(
                                  "div",
                                  {
                                    staticClass: "cur-point",
                                    on: {
                                      click: function (a) {
                                        return t.goSelectedOrders();
                                      },
                                    },
                                  },
                                  [
                                    a("Card", {
                                      attrs: {
                                        img: t.SavedIcon,
                                        title: "",
                                        bg: "#F1F2FF",
                                      },
                                      scopedSlots: t._u([
                                        {
                                          key: "button-bottom",
                                          fn: function () {
                                            return [
                                              a(
                                                "div",
                                                {
                                                  staticClass:
                                                    "card-price-wrapper card-freelancer-home",
                                                },
                                                [
                                                  a(
                                                    "span",
                                                    {
                                                      staticClass: "card-title",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.$t(
                                                            "Танланган буюртмалар"
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ]),
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ],
                            1
                          ),
                          t._v(" "),
                          a(
                            "el-row",
                            { staticClass: "mbottom-2 ml-1 grafic-row" },
                            [a("Grafic")],
                            1
                          ),
                          t._v(" "),
                          a(
                            "el-row",
                            { staticClass: "mbottom-2", attrs: { gutter: 56 } },
                            [
                              a(
                                "el-col",
                                {
                                  staticClass: "cabinet-most-wrap",
                                  attrs: { span: 8 },
                                },
                                [
                                  a(
                                    "div",
                                    {
                                      staticClass: "cabinet-most-wrap",
                                      on: {
                                        click: function (a) {
                                          return t.goFreelancerOffers();
                                        },
                                      },
                                    },
                                    [
                                      a("LeftCard", {
                                        staticClass: "mbottom-1",
                                        attrs: {
                                          img: t.MySuggestion,
                                          title: t.$t("Менинг таклифим"),
                                          count:
                                            t.dashboardData &&
                                            t.dashboardData.order_offers &&
                                            t.dashboardData.order_offers.all
                                              ? parseInt(
                                                  t.dashboardData.order_offers
                                                    .all
                                                )
                                              : 0,
                                          bg: "#FFF3E5",
                                          "border-top": "0",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              t._v(" "),
                              a(
                                "el-col",
                                {
                                  staticClass: "cabinet-most-wrap",
                                  attrs: { span: 8 },
                                },
                                [
                                  a(
                                    "div",
                                    {
                                      staticClass: "cabinet-most-wrap",
                                      on: {
                                        click: function (a) {
                                          return t.goOrder(3);
                                        },
                                      },
                                    },
                                    [
                                      a("LeftCard", {
                                        staticClass: "mbottom-1",
                                        attrs: {
                                          img: t.RepliesReceived,
                                          title: t.$t("Жавоб олинганлар"),
                                          count:
                                            t.dashboardData &&
                                            t.dashboardData.order_offers &&
                                            t.dashboardData.order_offers
                                              .status_closed
                                              ? parseInt(
                                                  t.dashboardData.order_offers
                                                    .status_closed
                                                )
                                              : 0,
                                          bg: "#FFF3E5",
                                          "border-top": "0",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              t._v(" "),
                              a("el-col", { attrs: { span: 8 } }, [
                                a(
                                  "div",
                                  {
                                    staticClass: "cabinet-most-wrap",
                                    on: {
                                      click: function (a) {
                                        return t.goOrder(4);
                                      },
                                    },
                                  },
                                  [
                                    a("LeftCard", {
                                      staticClass: "mbottom-1",
                                      attrs: {
                                        img: t.UnderConsideration,
                                        title: t.$t("Кўриб чиқилмоқда"),
                                        count:
                                          t.dashboardData &&
                                          t.dashboardData.order_offers &&
                                          t.dashboardData.order_offers
                                            .status_pending_confirmation
                                            ? parseInt(
                                                t.dashboardData.order_offers
                                                  .status_pending_confirmation
                                              )
                                            : 0,
                                        bg: "#FFF3E5",
                                        "border-top": "0",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      a(
                        "el-col",
                        { attrs: { span: 6 } },
                        [
                          a("OrderCreateBanner"),
                          t._v(" "),
                          a(
                            "div",
                            {
                              staticClass: "cabinet-most-wrap most-wrap-margin",
                              on: {
                                click: function (a) {
                                  return t.goOrder(3);
                                },
                              },
                            },
                            [
                              a("LeftCard", {
                                staticClass: "mbottom-1",
                                attrs: {
                                  img: t.PerformedIcon,
                                  title: t.$t("Бажарилмоқда"),
                                  count:
                                    t.dashboardData &&
                                    t.dashboardData.orders &&
                                    t.dashboardData.orders.status_in_progress
                                      ? parseInt(
                                          t.dashboardData.orders
                                            .status_in_progress
                                        )
                                      : 0,
                                  bg: "#FFF3E5",
                                  "border-top": "0",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          a(
                            "div",
                            {
                              staticClass: "cabinet-most-wrap most-wrap-margin",
                              staticStyle: { "margin-top": "47px" },
                              on: {
                                click: function (a) {
                                  return t.goOrder(5);
                                },
                              },
                            },
                            [
                              a("LeftCard", {
                                staticClass: "mbottom-1",
                                attrs: {
                                  img: t.DoneIcon,
                                  title: t.$t("Бажарилди"),
                                  count:
                                    t.dashboardData &&
                                    t.dashboardData.orders &&
                                    t.dashboardData.orders.status_done
                                      ? parseInt(
                                          t.dashboardData.orders.status_done
                                        )
                                      : 0,
                                  bg: "#FFF3E5",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              t._v(" "),
              a("div", { staticClass: "on-mobile" }, [
                a("div", { staticClass: "on-mobile" }, [
                  a(
                    "div",
                    {
                      staticClass: "d-flex justify-content-between",
                      staticStyle: { gap: "10px" },
                    },
                    [
                      a(
                        "div",
                        { staticClass: "dashboard-card" },
                        [
                          a(
                            "el-card",
                            {
                              staticClass: "my-card-box",
                              attrs: { shadow: "always" },
                            },
                            [
                              a("div", { staticClass: "my-card-wrapper" }, [
                                a(
                                  "div",
                                  {
                                    staticClass: "card-img",
                                    style: "background-color: ".concat(
                                      "#F1F2FF"
                                    ),
                                  },
                                  [a("img", { attrs: { src: t.SavedIcon } })]
                                ),
                              ]),
                              t._v(" "),
                              a(
                                "div",
                                {
                                  staticClass:
                                    "card-price-wrapper card-freelancer-home",
                                },
                                [
                                  a("span", { staticClass: "card-title" }, [
                                    t._v(t._s(t.$t("Танланган буюртмалар"))),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "dashboard-card" },
                        [
                          a(
                            "el-card",
                            {
                              staticClass: "my-card-box create-order-card",
                              attrs: { shadow: "always" },
                            },
                            [
                              a("div", { staticClass: "banner" }, [
                                a("div", { staticClass: "banner-img" }, [
                                  a("img", {
                                    attrs: {
                                      src: s("0743"),
                                      alt: "orderCreateBanner",
                                    },
                                  }),
                                ]),
                                t._v(" "),
                                a("div", { staticClass: "banner-main" }, [
                                  a(
                                    "button",
                                    { staticClass: "banner-my-orders" },
                                    [
                                      a("span", [
                                        t._v(
                                          t._s(t.$t("Mening buyurtmalarim"))
                                        ),
                                      ]),
                                      a(
                                        "div",
                                        { staticClass: "orders-count__count" },
                                        [
                                          t._v(
                                            t._s(
                                              t.dashboardData &&
                                                t.dashboardData.orders &&
                                                t.dashboardData.orders.all
                                                ? parseInt(
                                                    t.dashboardData.orders.all
                                                  )
                                                : 0
                                            )
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      staticClass: "d-flex justify-content-between",
                      staticStyle: { gap: "10px" },
                    },
                    [
                      a(
                        "div",
                        {
                          staticClass: "dashboard-card",
                          staticStyle: { "margin-top": "12px" },
                          on: {
                            click: function (a) {
                              return t.goOrder(3);
                            },
                          },
                        },
                        [
                          a("LeftCard", {
                            staticClass: "mbottom-1",
                            attrs: {
                              img: t.PerformedIcon,
                              title: t.$t("Бажарилмоқда"),
                              count:
                                t.dashboardData &&
                                t.dashboardData.orders &&
                                t.dashboardData.orders.status_in_progress
                                  ? parseInt(
                                      t.dashboardData.orders.status_in_progress
                                    )
                                  : 0,
                              bg: "#FFF3E5",
                              "border-top": "0",
                            },
                          }),
                        ],
                        1
                      ),
                      t._v(" "),
                      a(
                        "div",
                        {
                          staticClass: "dashboard-card",
                          staticStyle: { "margin-top": "12px" },
                          on: {
                            click: function (a) {
                              return t.goOrder(5);
                            },
                          },
                        },
                        [
                          a("LeftCard", {
                            staticClass: "mbottom-1",
                            attrs: {
                              img: t.DoneIcon,
                              title: t.$t("Бажарилди"),
                              count:
                                t.dashboardData &&
                                t.dashboardData.orders &&
                                t.dashboardData.orders.status_done
                                  ? parseInt(t.dashboardData.orders.status_done)
                                  : 0,
                              bg: "#FFF3E5",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                  t._v(" "),
                  a(
                    "div",
                    { staticClass: "mt-3" },
                    [
                      a(
                        "el-row",
                        { staticClass: "mb-3 ml-1" },
                        [a("Grafic")],
                        1
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "div",
                    [
                      a(
                        "VueSlickCarousel",
                        t._b(
                          {
                            attrs: { dots: !1, arrows: !0 },
                            scopedSlots: t._u([
                              {
                                key: "prevArrow",
                                fn: function (s) {
                                  return [
                                    a("div", { staticClass: "custom-arrow" }, [
                                      t._v(
                                        "\n              " +
                                          t._s(s.currentSlide) +
                                          "/" +
                                          t._s(s.slideCount) +
                                          "\n            "
                                      ),
                                    ]),
                                  ];
                                },
                              },
                              {
                                key: "nextArrow",
                                fn: function (s) {
                                  return [
                                    a("div", { staticClass: "custom-arrow" }, [
                                      t._v(
                                        "\n              " +
                                          t._s(s.currentSlide) +
                                          "/" +
                                          t._s(s.slideCount) +
                                          "\n            "
                                      ),
                                    ]),
                                  ];
                                },
                              },
                            ]),
                          },
                          "VueSlickCarousel",
                          t.settings,
                          !1
                        ),
                        [
                          t._v(" "),
                          a(
                            "el-col",
                            {
                              staticClass: "cabinet-most-wrap wallet-card",
                              attrs: { span: 8 },
                            },
                            [
                              a(
                                "el-card",
                                {
                                  staticClass: "my-card-box",
                                  attrs: { shadow: "always" },
                                },
                                [
                                  a("div", { staticClass: "my-card-wrapper" }, [
                                    a(
                                      "div",
                                      {
                                        staticClass: "card-img",
                                        style: "background-color: ".concat(
                                          "#F1F2FF"
                                        ),
                                      },
                                      [
                                        a("img", {
                                          attrs: { src: t.WalletIconMobile },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    a("div", { staticClass: "card-main" }, [
                                      a("div", { staticClass: "card-title" }, [
                                        t._v(t._s(t.$t("Ҳамён"))),
                                      ]),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  a(
                                    "div",
                                    {
                                      staticClass:
                                        "card-price-wrapper wallet-card-wrapper",
                                    },
                                    [
                                      a("span", { staticClass: "card-price" }, [
                                        t._v(t._s(t._f("formatPrice")(5e7))),
                                      ]),
                                      t._v(
                                        "  " +
                                          t._s(t.$t("сўм")) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          a(
                            "el-col",
                            {
                              staticClass: "cabinet-most-wrap wallet-card",
                              attrs: { span: 8 },
                            },
                            [
                              a(
                                "el-card",
                                {
                                  staticClass: "my-card-box",
                                  attrs: { shadow: "always" },
                                },
                                [
                                  a("div", { staticClass: "my-card-wrapper" }, [
                                    a(
                                      "div",
                                      {
                                        staticClass: "card-img",
                                        style: "background-color: ".concat(
                                          "#F1F2FF"
                                        ),
                                      },
                                      [a("img", { attrs: { src: t.CardIcon } })]
                                    ),
                                    t._v(" "),
                                    a("div", { staticClass: "card-main" }, [
                                      a("div", { staticClass: "card-title" }, [
                                        t._v(t._s("")),
                                      ]),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  a(
                                    "div",
                                    {
                                      staticClass:
                                        "card-price-wrapper card-freelancer-home",
                                    },
                                    [
                                      a("span", { staticClass: "card-title" }, [
                                        t._v(
                                          t._s(
                                            t.$t("Картага маблағни ечиб олиш")
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          a(
                            "el-col",
                            {
                              staticClass: "cabinet-most-wrap",
                              attrs: { span: 8 },
                            },
                            [
                              a(
                                "div",
                                [
                                  a("LeftCard", {
                                    staticClass: "mbottom-1",
                                    attrs: {
                                      img: t.MySuggestion,
                                      title: t.$t("Менинг таклифим"),
                                      count:
                                        t.dashboardData &&
                                        t.dashboardData.order_offers &&
                                        t.dashboardData.order_offers.all
                                          ? parseInt(
                                              t.dashboardData.order_offers.all
                                            )
                                          : 0,
                                      bg: "#FFF3E5",
                                      "border-top": "0",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          a(
                            "el-col",
                            {
                              staticClass: "cabinet-most-wrap",
                              attrs: { span: 8 },
                            },
                            [
                              a(
                                "div",
                                {
                                  on: {
                                    click: function (a) {
                                      return t.goOrder(3);
                                    },
                                  },
                                },
                                [
                                  a("LeftCard", {
                                    staticClass: "mbottom-1",
                                    attrs: {
                                      img: t.RepliesReceived,
                                      title: t.$t("Жавоб олинганлар"),
                                      count:
                                        t.dashboardData &&
                                        t.dashboardData.order_offers &&
                                        t.dashboardData.order_offers
                                          .status_closed
                                          ? parseInt(
                                              t.dashboardData.order_offers
                                                .status_closed
                                            )
                                          : 0,
                                      bg: "#FFF3E5",
                                      "border-top": "0",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          a(
                            "el-col",
                            {
                              staticClass: "cabinet-most-wrap",
                              attrs: { span: 8 },
                            },
                            [
                              a(
                                "div",
                                {
                                  on: {
                                    click: function (a) {
                                      return t.goOrder(4);
                                    },
                                  },
                                },
                                [
                                  a("LeftCard", {
                                    staticClass: "mbottom-1",
                                    attrs: {
                                      img: t.UnderConsideration,
                                      title: t.$t("Кўриб чиқилмоқда"),
                                      count:
                                        t.dashboardData &&
                                        t.dashboardData.order_offers &&
                                        t.dashboardData.order_offers
                                          .status_pending_confirmation
                                          ? parseInt(
                                              t.dashboardData.order_offers
                                                .status_pending_confirmation
                                            )
                                          : 0,
                                      bg: "#FFF3E5",
                                      "border-top": "0",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]
          );
        },
        e = [],
        i = (s("8e6e"), s("ac6a"), s("456d"), s("ade3")),
        c = function () {
          var t = this,
            a = t._self._c;
          return a(
            "el-card",
            { staticClass: "my-card-box", attrs: { shadow: "always" } },
            [
              a("div", { staticClass: "my-card-wrapper" }, [
                a(
                  "div",
                  {
                    staticClass: "card-img",
                    style: "background-color: ".concat(t.bg),
                  },
                  [a("img", { attrs: { src: t.img } })]
                ),
                t._v(" "),
                a("div", { staticClass: "card-main" }, [
                  a("div", { staticClass: "card-title" }, [
                    t._v(t._s(t.title)),
                  ]),
                  t._v(" "),
                  a("div", { staticClass: "card-count" }, [
                    t._v(t._s(t.count)),
                  ]),
                ]),
              ]),
              t._v(" "),
              t._t("button-bottom"),
            ],
            2
          );
        },
        o = [],
        n =
          (s("c5f6"),
          { props: { img: String, title: String, bg: String, count: Number } }),
        d = n,
        l = (s("f133"), s("2877")),
        f = Object(l["a"])(d, c, o, !1, null, "2c91127a", null),
        u = f.exports,
        v = s("795b"),
        p = function () {
          var t = this,
            a = t._self._c;
          return a("div", { staticClass: "banner" }, [
            t._m(0),
            t._v(" "),
            a("div", { staticClass: "banner-main" }, [
              a(
                "button",
                { staticClass: "banner-my-orders", on: { click: t.myOrder } },
                [a("span", [t._v(t._s(t.$t("Mening buyurtmalarim")) + " ")])]
              ),
            ]),
          ]);
        },
        m = [
          function () {
            var t = this,
              a = t._self._c;
            return a("div", { staticClass: "banner-img" }, [
              a("img", { attrs: { src: s("0743"), alt: "orderCreateBanner" } }),
            ]);
          },
        ],
        b = {
          props: {},
          methods: {
            myOrder: function () {
              this.$router.push({ name: "FreelancerOrders" });
            },
          },
        },
        _ = b,
        g = (s("81c3"), Object(l["a"])(_, p, m, !1, null, "623fce26", null)),
        C = g.exports,
        h = function () {
          var t = this,
            a = t._self._c;
          return a(
            "div",
            { staticClass: "grafic" },
            [
              a(
                "el-row",
                { staticClass: "h-100", attrs: { gutter: 30 } },
                [
                  a(
                    "div",
                    { staticClass: "no-mobile" },
                    [
                      a(
                        "el-col",
                        {
                          staticClass: "h-100",
                          attrs: { span: 8, xs: 24, sm: 24, lg: 8, xl: 8 },
                        },
                        [
                          a("div", { staticClass: "grafic-filter" }, [
                            a("div", { staticClass: "grafic-filter-header" }, [
                              a("div", { staticClass: "image-box" }, [
                                a("img", {
                                  attrs: { src: s("2714"), alt: "" },
                                }),
                              ]),
                              t._v(" "),
                              a(
                                "div",
                                { staticClass: "grafic-filter-header-title" },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(t.$t("Охирги даромад")) +
                                      ":\n            "
                                  ),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "grafic-filter-footer" }, [
                              a("div", {}, [
                                a("img", {
                                  attrs: { src: s("319c"), alt: "" },
                                }),
                              ]),
                              t._v(" "),
                              a(
                                "div",
                                {
                                  staticClass: "grafic-filter-footer-item",
                                  class: { active: "day" === t.filter },
                                  on: {
                                    click: function (a) {
                                      t.filter = "day";
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(t.$t("Кун")) +
                                      "\n            "
                                  ),
                                ]
                              ),
                              t._v(" "),
                              a(
                                "div",
                                {
                                  staticClass: "grafic-filter-footer-item",
                                  class: { active: "month" === t.filter },
                                  on: {
                                    click: function (a) {
                                      t.filter = "month";
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(t.$t("Ой")) +
                                      "\n            "
                                  ),
                                ]
                              ),
                              t._v(" "),
                              a(
                                "div",
                                {
                                  staticClass: "grafic-filter-footer-item",
                                  class: { active: "year" === t.filter },
                                  on: {
                                    click: function (a) {
                                      t.filter = "year";
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(t.$t("Йил")) +
                                      "\n            "
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "el-col",
                    { attrs: { span: 16, xs: 24, sm: 24, lg: 16, xl: 16 } },
                    [
                      a(
                        "div",
                        { staticClass: "grafic-body" },
                        [
                          a(
                            "el-row",
                            { staticClass: "h-100" },
                            [
                              a(
                                "div",
                                { staticClass: "on-mobile" },
                                [
                                  a(
                                    "div",
                                    { staticClass: "grafic-filter-header" },
                                    [
                                      a("div", { staticClass: "image-box" }, [
                                        a("img", {
                                          staticClass: "no-mobile",
                                          attrs: { src: s("2714"), alt: "" },
                                        }),
                                        t._v(" "),
                                        a("img", {
                                          staticClass: "on-mobile",
                                          attrs: { src: s("8241"), alt: "" },
                                        }),
                                      ]),
                                      t._v(" "),
                                      a(
                                        "div",
                                        {
                                          staticClass:
                                            "grafic-filter-header-title",
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.$t("Охирги даромад")) +
                                              ":\n              "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  a(
                                    "el-col",
                                    {
                                      staticClass: "mobile-filter",
                                      attrs: { xs: 6, sm: 4, lg: 4, xl: 4 },
                                    },
                                    [
                                      a(
                                        "div",
                                        { staticClass: "grafic-filter-footer" },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticClass: "grafic-filter-icon",
                                            },
                                            [
                                              a("img", {
                                                attrs: {
                                                  src: s("319c"),
                                                  alt: "",
                                                },
                                              }),
                                            ]
                                          ),
                                          t._v(" "),
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "grafic-filter-footer-item",
                                              class: {
                                                active: "day" === t.filter,
                                              },
                                              on: {
                                                click: function (a) {
                                                  t.filter = "day";
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(t.$t("Кун")) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "grafic-filter-footer-item",
                                              class: {
                                                active: "month" === t.filter,
                                              },
                                              on: {
                                                click: function (a) {
                                                  t.filter = "month";
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(t.$t("Ой")) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "grafic-filter-footer-item",
                                              class: {
                                                active: "year" === t.filter,
                                              },
                                              on: {
                                                click: function (a) {
                                                  t.filter = "year";
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(t.$t("Йил")) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              a(
                                "el-col",
                                {
                                  staticClass: "h-100 no-mobile",
                                  attrs: {
                                    span: 4,
                                    xs: 4,
                                    sm: 4,
                                    lg: 4,
                                    xl: 4,
                                  },
                                },
                                [
                                  a(
                                    "div",
                                    { staticClass: "grafic-shkala h-100" },
                                    [
                                      a(
                                        "div",
                                        { staticClass: "grafic-shkala-item" },
                                        [t._v("350 000")]
                                      ),
                                      t._v(" "),
                                      a(
                                        "div",
                                        { staticClass: "grafic-shkala-item" },
                                        [t._v("200 000")]
                                      ),
                                      t._v(" "),
                                      a(
                                        "div",
                                        { staticClass: "grafic-shkala-item" },
                                        [t._v("50 000")]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              a(
                                "el-col",
                                {
                                  staticClass: "h-100 h-mobile-100",
                                  attrs: {
                                    span: 10,
                                    xs: 18,
                                    sm: 10,
                                    lg: 10,
                                    xl: 10,
                                  },
                                },
                                [
                                  a(
                                    "div",
                                    { staticClass: "grafic-bars" },
                                    t._l(t.items, function (s, r) {
                                      return a(
                                        "div",
                                        {
                                          key: r,
                                          staticClass: "grafic-bar",
                                          style: "height: calc(".concat(
                                            t.getPercent(s.amount),
                                            "% - 25px);"
                                          ),
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticClass: "grafic-bar-amount",
                                            },
                                            [
                                              t._v(
                                                t._s(t.formatPrice(s.amount))
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-center h-100",
                                            },
                                            [
                                              a("div", {
                                                staticClass: "grafic-bar-body",
                                              }),
                                            ]
                                          ),
                                          t._v(" "),
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "grafic-bar-time text-center",
                                            },
                                            [t._v(t._s(s.time))]
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              ),
                              t._v(" "),
                              a(
                                "div",
                                { staticClass: "no-mobile" },
                                [
                                  a("div", { staticClass: "grafic-line" }),
                                  t._v(" "),
                                  a("el-col", { attrs: { span: 10 } }, [
                                    a(
                                      "div",
                                      { staticClass: "total-amount-box" },
                                      [
                                        a(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex justify-content-center",
                                          },
                                          [
                                            a(
                                              "div",
                                              {
                                                staticClass:
                                                  "total-amount-icon-box",
                                              },
                                              [
                                                a("img", {
                                                  attrs: {
                                                    src: s("2fa1"),
                                                    alt: "",
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        a(
                                          "div",
                                          { staticClass: "total-amount-value" },
                                          [
                                            t._v(
                                              "\n                  " +
                                                t._s(
                                                  t.formatPrice(t.totalAmount)
                                                ) +
                                                "\n                "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        a(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex justify-content-center",
                                          },
                                          [
                                            a(
                                              "span",
                                              {
                                                staticClass:
                                                  "total-amount-sum-affix",
                                              },
                                              [t._v(t._s(t.$t("сўм")))]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        y = [],
        w = {
          props: {},
          data: function () {
            return {
              items: [
                { amount: 150556, time: "10:00" },
                { amount: 300845, time: "16:10" },
                { amount: 278126, time: "23:18" },
              ],
              filter: "day",
            };
          },
          computed: {
            totalAmount: function () {
              return this.items.reduce(function (t, a) {
                return t + a.amount;
              }, 0);
            },
          },
          methods: {
            getPercent: function (t) {
              var a =
                (100 * t) / ((this.totalAmount / this.items.length) * 1.5);
              return a > 100 ? 100 : a;
            },
          },
        },
        x = w,
        F =
          (s("d974"),
          s("9f6d"),
          Object(l["a"])(x, h, y, !1, null, "cf8930f8", null)),
        D = F.exports,
        O = s("254c"),
        I = s.n(O),
        S = s("bc28"),
        k = s.n(S),
        $ = s("8c93"),
        E = s.n($),
        j = s("9d22"),
        N = s.n(j),
        P = s("40ca"),
        L = s.n(P),
        A = s("3a0d"),
        R = s.n(A),
        M = s("a246"),
        T = s.n(M),
        B = s("6820"),
        V = s.n(B),
        G = s("48f7"),
        U = s.n(G),
        W = s("0a57"),
        J = s.n(W),
        X = s("d63f"),
        Y = s.n(X),
        q = s("7426"),
        z = s.n(q),
        H = s("a7ab"),
        K = s.n(H),
        Q = (s("7b8d"), s("6a2c"), s("2f62"));
      function Z(t, a) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          a &&
            (r = r.filter(function (a) {
              return Object.getOwnPropertyDescriptor(t, a).enumerable;
            })),
            s.push.apply(s, r);
        }
        return s;
      }
      function tt(t) {
        for (var a = 1; a < arguments.length; a++) {
          var s = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? Z(Object(s), !0).forEach(function (a) {
                Object(i["a"])(t, a, s[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Z(Object(s)).forEach(function (a) {
                Object.defineProperty(
                  t,
                  a,
                  Object.getOwnPropertyDescriptor(s, a)
                );
              });
        }
        return t;
      }
      var at = {
          components: {
            Card: u,
            LeftCard: v["a"],
            OrderCreateBanner: C,
            Grafic: D,
            VueSlickCarousel: K.a,
          },
          data: function () {
            return {
              isLoading: !1,
              dashboardData: null,
              CardIcon: I.a,
              ReadyIcon: k.a,
              WalletIcon: E.a,
              WalletIconMobile: N.a,
              SavedIcon: L.a,
              CheckIcon: R.a,
              CloudIcon: T.a,
              PerformedIcon: V.a,
              MySuggestion: U.a,
              RepliesReceived: J.a,
              UnderConsideration: Y.a,
              DoneIcon: z.a,
              settings: {
                focusOnSelect: !1,
                infinite: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 500,
                useCSS: !0,
                dots: !1,
                swipeToSlide: !0,
              },
            };
          },
          computed: tt({}, Object(Q["c"])({ user: "auth/USER" })),
          mounted: function () {
            var t = this;
            this.fetchDashboardBagde({ app_module: "freelancer" }).then(
              function (a) {
                t.dashboardData = a.data;
              }
            ),
              setTimeout(function () {
                t.isLoading = !1;
              }, 1e3);
          },
          methods: tt(
            tt(
              {},
              Object(Q["b"])({ fetchDashboardBagde: "resource/dashboardBagde" })
            ),
            {},
            {
              goOrder: function (t) {
                this.$router.push({
                  name: "FreelancerOrders",
                  query: { status_id: t },
                });
              },
              goSelectedOrders: function () {
                this.$router.push({ name: "SelectedOrders" });
              },
              goFreelancerOffers: function () {
                this.$router.push({ name: "FreelancerOffers" });
              },
            }
          ),
        },
        st = at,
        rt = (s("8bcb"), Object(l["a"])(st, r, e, !1, null, "3fe44f9c", null));
      a["default"] = rt.exports;
    },
    "9d22": function (t, a, s) {
      t.exports = s.p + "static/img/wallet-icon-mobile.6da14085.svg";
    },
    "9f6d": function (t, a, s) {
      "use strict";
      s("4333");
    },
    a246: function (t, a, s) {
      t.exports = s.p + "static/img/cloud-icon.bb344d57.svg";
    },
    aa77: function (t, a, s) {
      var r = s("5ca1"),
        e = s("be13"),
        i = s("79e5"),
        c = s("fdef"),
        o = "[" + c + "]",
        n = "​",
        d = RegExp("^" + o + o + "*"),
        l = RegExp(o + o + "*$"),
        f = function (t, a, s) {
          var e = {},
            o = i(function () {
              return !!c[t]() || n[t]() != n;
            }),
            d = (e[t] = o ? a(u) : c[t]);
          s && (e[s] = d), r(r.P + r.F * o, "String", e);
        },
        u = (f.trim = function (t, a) {
          return (
            (t = String(e(t))),
            1 & a && (t = t.replace(d, "")),
            2 & a && (t = t.replace(l, "")),
            t
          );
        });
      t.exports = f;
    },
    ab98: function (t, a, s) {},
    bb9d: function (t, a, s) {},
    bc28: function (t, a, s) {
      t.exports = s.p + "static/img/ready-icon.4d26d880.svg";
    },
    c5f6: function (t, a, s) {
      "use strict";
      var r = s("7726"),
        e = s("69a8"),
        i = s("2d95"),
        c = s("5dbc"),
        o = s("6a99"),
        n = s("79e5"),
        d = s("9093").f,
        l = s("11e9").f,
        f = s("86cc").f,
        u = s("aa77").trim,
        v = "Number",
        p = r[v],
        m = p,
        b = p.prototype,
        _ = i(s("2aeb")(b)) == v,
        g = "trim" in String.prototype,
        C = function (t) {
          var a = o(t, !1);
          if ("string" == typeof a && a.length > 2) {
            a = g ? a.trim() : u(a, 3);
            var s,
              r,
              e,
              i = a.charCodeAt(0);
            if (43 === i || 45 === i) {
              if (((s = a.charCodeAt(2)), 88 === s || 120 === s)) return NaN;
            } else if (48 === i) {
              switch (a.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (e = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (e = 55);
                  break;
                default:
                  return +a;
              }
              for (var c, n = a.slice(2), d = 0, l = n.length; d < l; d++)
                if (((c = n.charCodeAt(d)), c < 48 || c > e)) return NaN;
              return parseInt(n, r);
            }
          }
          return +a;
        };
      if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function (t) {
          var a = arguments.length < 1 ? 0 : t,
            s = this;
          return s instanceof p &&
            (_
              ? n(function () {
                  b.valueOf.call(s);
                })
              : i(s) != v)
            ? c(new m(C(a)), s, p)
            : C(a);
        };
        for (
          var h,
            y = s("9e1e")
              ? d(m)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            w = 0;
          y.length > w;
          w++
        )
          e(m, (h = y[w])) && !e(p, h) && f(p, h, l(m, h));
        (p.prototype = b), (b.constructor = p), s("2aba")(r, v, p);
      }
    },
    d281: function (t, a, s) {
      "use strict";
      s("8afd");
    },
    d63f: function (t, a, s) {
      t.exports = s.p + "static/img/under-consideration.e013bafc.svg";
    },
    d974: function (t, a, s) {
      "use strict";
      s("1cd4");
    },
    f133: function (t, a, s) {
      "use strict";
      s("f4f4");
    },
    f4f4: function (t, a, s) {},
    fdef: function (t, a) {
      t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    },
  },
]);

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-0ceb509a"],
  {
    "0a49": function (t, s, a) {
      var e = a("9b43"),
        i = a("626a"),
        n = a("4bf8"),
        r = a("9def"),
        c = a("cd1c");
      t.exports = function (t, s) {
        var a = 1 == t,
          o = 2 == t,
          l = 3 == t,
          d = 4 == t,
          u = 6 == t,
          f = 5 == t || u,
          h = s || c;
        return function (s, c, v) {
          for (
            var g,
              m,
              p = n(s),
              _ = i(p),
              b = e(c, v, 3),
              C = r(_.length),
              y = 0,
              w = a ? h(s, C) : o ? h(s, 0) : void 0;
            C > y;
            y++
          )
            if ((f || y in _) && ((g = _[y]), (m = b(g, y, p)), t))
              if (a) w[y] = m;
              else if (m)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return g;
                  case 6:
                    return y;
                  case 2:
                    w.push(g);
                }
              else if (d) return !1;
          return u ? -1 : l || d ? d : w;
        };
      };
    },
    1169: function (t, s, a) {
      var e = a("2d95");
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == e(t);
        };
    },
    "386d": function (t, s, a) {
      "use strict";
      var e = a("cb7c"),
        i = a("83a1"),
        n = a("5f1b");
      a("214f")("search", 1, function (t, s, a, r) {
        return [
          function (a) {
            var e = t(this),
              i = void 0 == a ? void 0 : a[s];
            return void 0 !== i ? i.call(a, e) : new RegExp(a)[s](String(e));
          },
          function (t) {
            var s = r(a, t, this);
            if (s.done) return s.value;
            var c = e(t),
              o = String(this),
              l = c.lastIndex;
            i(l, 0) || (c.lastIndex = 0);
            var d = n(c, o);
            return (
              i(c.lastIndex, l) || (c.lastIndex = l), null === d ? -1 : d.index
            );
          },
        ];
      });
    },
    4827: function (t, s, a) {
      "use strict";
      a.r(s);
      var e = function () {
          var t = this,
            s = t._self._c;
          return s(
            "el-row",
            { staticClass: "messanger-section" },
            [
              s(
                "el-col",
                { attrs: { xs: 24, sm: 24, lg: 6, xl: 6 } },
                [
                  s("contacts-section", {
                    attrs: {
                      contacts: t.contacts,
                      favorites_contacts: t.favorites_contacts,
                      "client-id": t.clientId,
                      "client-typing": t.clientTyping,
                      "typing-now": t.typingNow,
                    },
                    on: { showUserMessages: t.showUserMessages },
                  }),
                ],
                1
              ),
              t._v(" "),
              s("el-col", { attrs: { xs: 24, sm: 24, lg: 12, xl: 12 } }, [
                s(
                  "div",
                  { staticClass: "no-mobile" },
                  [
                    s("messages-section", {
                      ref: "messagesSection",
                      attrs: {
                        contacts: t.contacts,
                        user_id: t.user_id,
                        "client-id": t.clientId,
                        "client-typing": t.clientTyping,
                        client_listen_channel: t.client_listen_channel,
                        "typing-now": t.typingNow,
                      },
                      on: {
                        makeSeen: t.makeSeen,
                        showSideInfo: t.showSideInfo,
                      },
                    }),
                  ],
                  1
                ),
              ]),
              t._v(" "),
              s("el-col", { attrs: { xs: 24, sm: 24, lg: 6, xl: 6 } }, [
                s("div", { staticClass: "no-mobile" }, [s("user-details")], 1),
              ]),
              t._v(" "),
              t.showInfo
                ? s("div", { staticClass: "on-mobile" }, [s("user-details")], 1)
                : t._e(),
            ],
            1
          );
        },
        i = [],
        n = (a("8e6e"), a("456d"), a("7514"), a("ac6a"), a("ade3")),
        r =
          (a("7f7f"),
          a("6762"),
          a("2fdb"),
          function () {
            var t = this,
              s = t._self._c;
            return s("div", [
              s(
                "div",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: t.contactsLoading,
                      expression: "contactsLoading",
                    },
                  ],
                  staticClass: "messenger-listView",
                },
                [
                  s("div", { staticClass: "m-header" }, [
                    s(
                      "nav",
                      {
                        staticClass:
                          "d-flex justify-content-between align-items-center",
                      },
                      [
                        s("a", { attrs: { href: "#" } }, [
                          s(
                            "svg",
                            {
                              staticClass: "svg-inline--fa fa-inbox fa-w-18",
                              attrs: {
                                "aria-hidden": "true",
                                focusable: "false",
                                "data-prefix": "fas",
                                "data-icon": "inbox",
                                role: "img",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 576 512",
                                "data-fa-i2svg": "",
                              },
                            },
                            [
                              s("path", {
                                attrs: {
                                  fill: "currentColor",
                                  d: "M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z",
                                },
                              }),
                            ]
                          ),
                          t._v(" "),
                          s("span", { staticClass: "messenger-headTitle" }, [
                            t._v(t._s(t.$t("Хабарлар"))),
                          ]),
                        ]),
                        t._v(" "),
                        s("nav", { staticClass: "m-header-right" }, [
                          s("a", { attrs: { href: "#" } }, [
                            s(
                              "svg",
                              {
                                staticClass:
                                  "svg-inline--fa fa-cog fa-w-16 settings-btn",
                                attrs: {
                                  "aria-hidden": "true",
                                  focusable: "false",
                                  "data-prefix": "fas",
                                  "data-icon": "cog",
                                  role: "img",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 512 512",
                                  "data-fa-i2svg": "",
                                },
                              },
                              [
                                s("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",
                                  },
                                }),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s(
                            "a",
                            {
                              staticClass: "listView-x",
                              staticStyle: { display: "none" },
                              attrs: { href: "#" },
                            },
                            [
                              s(
                                "svg",
                                {
                                  staticClass:
                                    "svg-inline--fa fa-times fa-w-11",
                                  attrs: {
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fas",
                                    "data-icon": "times",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 352 512",
                                    "data-fa-i2svg": "",
                                  },
                                },
                                [
                                  s("path", {
                                    attrs: {
                                      fill: "currentColor",
                                      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    s("form", { attrs: { id: "form" } }, [
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.search_user,
                            expression: "search_user",
                          },
                        ],
                        ref: "search",
                        staticClass: "messenger-search",
                        attrs: {
                          id: "search-user",
                          autocomplete: "off",
                          type: "text",
                          placeholder: t.$t("Қидириш"),
                        },
                        domProps: { value: t.search_user },
                        on: {
                          focus: function (s) {
                            return t.focusMethod();
                          },
                          blur: function (s) {
                            return t.blurMethod();
                          },
                          input: function (s) {
                            s.target.composing ||
                              (t.search_user = s.target.value);
                          },
                        },
                      }),
                    ]),
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "m-body contacts-container" }, [
                    s(
                      "div",
                      {
                        staticClass: "show messenger-tab users-tab app-scroll",
                        style: t.searchInputClick
                          ? "display: none!important"
                          : "display: block!important",
                        attrs: { "data-view": "users" },
                      },
                      [
                        s("p", { staticClass: "messenger-title" }, [
                          s("span", [t._v(t._s(t.$t("Шахсий хабарлар")))]),
                        ]),
                        t._v(" "),
                        s("div", { staticClass: "on-mobile" }, [
                          s(
                            "table",
                            {
                              staticClass: "messenger-list-item m-list-active",
                              class: {
                                hovered:
                                  ["ChatMessages"].includes(t.$route.name) &&
                                  t.user.id == t.$route.params.id,
                              },
                              attrs: { "data-contact": t.user.id },
                              on: {
                                click: function (s) {
                                  return t.showMessagesMobile(t.user.id);
                                },
                              },
                            },
                            [
                              s("tbody", [
                                s("tr", { attrs: { "data-action": "0" } }, [
                                  s("td", [
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "saved-messages avatar av-m",
                                      },
                                      [
                                        s(
                                          "svg",
                                          {
                                            staticClass:
                                              "svg-inline--fa fa-bookmark fa-w-12",
                                            attrs: {
                                              "aria-hidden": "true",
                                              focusable: "false",
                                              "data-prefix": "far",
                                              "data-icon": "bookmark",
                                              role: "img",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 384 512",
                                              "data-fa-i2svg": "",
                                            },
                                          },
                                          [
                                            s("path", {
                                              attrs: {
                                                fill: "currentColor",
                                                d: "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  s("td", [
                                    s(
                                      "p",
                                      {
                                        attrs: {
                                          "data-id": "3",
                                          "data-type": "user",
                                        },
                                      },
                                      [
                                        t._v(
                                          t._s(t.$t("Сақланган хабарлар")) + " "
                                        ),
                                        s("span", [t._v(t._s(t.$t("Сиз")))]),
                                      ]
                                    ),
                                    t._v(" "),
                                    s("span", [
                                      t._v(
                                        t._s(t.$t("Шахсий хабарларни сақланг"))
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        s("div", { staticClass: "no-mobile" }, [
                          s(
                            "table",
                            {
                              staticClass: "messenger-list-item m-list-active",
                              class: {
                                hovered:
                                  ["ChatMessages"].includes(t.$route.name) &&
                                  t.user.id == t.$route.params.id,
                              },
                              attrs: { "data-contact": t.user.id },
                              on: {
                                click: function (s) {
                                  return t.showMessages(t.user.id);
                                },
                              },
                            },
                            [
                              s("tbody", [
                                s("tr", { attrs: { "data-action": "0" } }, [
                                  s("td", [
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "saved-messages avatar av-m",
                                      },
                                      [
                                        s(
                                          "svg",
                                          {
                                            staticClass:
                                              "svg-inline--fa fa-bookmark fa-w-12",
                                            attrs: {
                                              "aria-hidden": "true",
                                              focusable: "false",
                                              "data-prefix": "far",
                                              "data-icon": "bookmark",
                                              role: "img",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 384 512",
                                              "data-fa-i2svg": "",
                                            },
                                          },
                                          [
                                            s("path", {
                                              attrs: {
                                                fill: "currentColor",
                                                d: "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  s("td", [
                                    s(
                                      "p",
                                      {
                                        attrs: {
                                          "data-id": "3",
                                          "data-type": "user",
                                        },
                                      },
                                      [
                                        t._v(
                                          t._s(t.$t("Сақланган хабарлар")) + " "
                                        ),
                                        s("span", [t._v(t._s(t.$t("Сиз")))]),
                                      ]
                                    ),
                                    t._v(" "),
                                    s("span", [
                                      t._v(
                                        t._s(t.$t("Шахсий хабарларни сақланг"))
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        s("p", { staticClass: "messenger-title" }, [
                          s("span", [t._v(t._s(t.$t("Барча Хабарлар")))]),
                        ]),
                        t._v(" "),
                        t.contacts
                          ? s(
                              "div",
                              {
                                staticClass: "listOfContacts",
                                staticStyle: {
                                  width: "100%",
                                  height: "calc(100vh)",
                                  position: "relative",
                                },
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "on-mobile" },
                                  t._l(
                                    t.contacts.filter(function (s) {
                                      return s.id !== t.user.id;
                                    }),
                                    function (a) {
                                      return s(
                                        "table",
                                        {
                                          key: a.id,
                                          staticClass:
                                            "messenger-list-item m-list-active",
                                          class: {
                                            hovered:
                                              ["ChatMessages"].includes(
                                                t.$route.name
                                              ) && a.id == t.$route.params.id,
                                          },
                                          on: {
                                            click: function (s) {
                                              return t.showMessagesMobile(a.id);
                                            },
                                          },
                                        },
                                        [
                                          s("tbody", [
                                            s(
                                              "tr",
                                              { attrs: { "data-action": "0" } },
                                              [
                                                s(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      position: "relative",
                                                    },
                                                  },
                                                  [
                                                    a.active_status
                                                      ? s("span", {
                                                          staticClass:
                                                            "activeStatus",
                                                        })
                                                      : t._e(),
                                                    t._v(" "),
                                                    a.avatar
                                                      ? s("div", {
                                                          staticClass:
                                                            "avatar av-m",
                                                          style: {
                                                            "background-image":
                                                              "url(" +
                                                              t.storageUrl +
                                                              a.avatar +
                                                              ")",
                                                          },
                                                        })
                                                      : s("div", {
                                                          staticClass:
                                                            "avatar av-m",
                                                          style: {
                                                            "background-image":
                                                              "url(" +
                                                              t.storageUrl +
                                                              "storage/image/businessman.svg)",
                                                          },
                                                        }),
                                                  ]
                                                ),
                                                t._v(" "),
                                                s("td", [
                                                  s(
                                                    "p",
                                                    {
                                                      attrs: {
                                                        "data-id": a.id,
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t._f("truncate")(
                                                            a.firstname +
                                                              " " +
                                                              a.lastname,
                                                            15,
                                                            ".."
                                                          )
                                                        ) + " "
                                                      ),
                                                      s("span", [
                                                        t._v(
                                                          t._s(
                                                            t.dateStringToTimeAgo(
                                                              a.last_message
                                                                .created_at
                                                            )
                                                          ) +
                                                            " " +
                                                            t._s(
                                                              t.dateStringToTimeAgo(
                                                                a.last_message
                                                                  .created_at
                                                              ) != t.$t("ҳозир")
                                                                ? t.$t("аввал")
                                                                : ""
                                                            )
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  t.clientTyping &&
                                                  t.clientId == a.id
                                                    ? s("span", [
                                                        t._v(
                                                          t._s(" typing...")
                                                        ),
                                                      ])
                                                    : a.last_message.from_id !==
                                                      t.user.id
                                                    ? s("span", [
                                                        t._v(
                                                          t._s(
                                                            t._f("truncate")(
                                                              a.last_message
                                                                .body
                                                                ? a.last_message
                                                                    .body
                                                                : a.last_message
                                                                    .attachment
                                                                ? "file"
                                                                : "",
                                                              22,
                                                              ".."
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : a.last_message.from_id ===
                                                      t.user.id
                                                    ? s("span", [
                                                        s(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "lastMessageIndicator",
                                                          },
                                                          [t._v("You: ")]
                                                        ),
                                                        t._v(
                                                          t._s(
                                                            t._f("truncate")(
                                                              a.last_message
                                                                .body
                                                                ? a.last_message
                                                                    .body
                                                                : a.last_message
                                                                    .attachment
                                                                ? "file"
                                                                : "",
                                                              22,
                                                              ".."
                                                            )
                                                          ) +
                                                            "\n                      "
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  t._v(" "),
                                                  a.unseen_counter
                                                    ? s("b", [
                                                        t._v(
                                                          t._s(a.unseen_counter)
                                                        ),
                                                      ])
                                                    : t._e(),
                                                ]),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      );
                                    }
                                  ),
                                  0
                                ),
                                t._v(" "),
                                s(
                                  "div",
                                  { staticClass: "no-mobile" },
                                  t._l(
                                    t.contacts.filter(function (s) {
                                      return s.id !== t.user.id;
                                    }),
                                    function (a) {
                                      return s(
                                        "table",
                                        {
                                          staticClass:
                                            "messenger-list-item m-list-active",
                                          class: {
                                            hovered:
                                              ["ChatMessages"].includes(
                                                t.$route.name
                                              ) && a.id == t.$route.params.id,
                                          },
                                          attrs: { "data-contact": a.id },
                                          on: {
                                            click: function (s) {
                                              return t.showMessages(a.id);
                                            },
                                          },
                                        },
                                        [
                                          s("tbody", [
                                            s(
                                              "tr",
                                              { attrs: { "data-action": "0" } },
                                              [
                                                s(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      position: "relative",
                                                    },
                                                  },
                                                  [
                                                    a.active_status
                                                      ? s("span", {
                                                          staticClass:
                                                            "activeStatus",
                                                        })
                                                      : t._e(),
                                                    t._v(" "),
                                                    a.avatar
                                                      ? s("div", {
                                                          staticClass:
                                                            "avatar av-m",
                                                          style: {
                                                            "background-image":
                                                              "url(" +
                                                              t.storageUrl +
                                                              a.avatar +
                                                              ")",
                                                          },
                                                        })
                                                      : s("div", {
                                                          staticClass:
                                                            "avatar av-m",
                                                          style: {
                                                            "background-image":
                                                              "url(" +
                                                              t.storageUrl +
                                                              "storage/image/businessman.svg)",
                                                          },
                                                        }),
                                                  ]
                                                ),
                                                t._v(" "),
                                                s("td", [
                                                  s(
                                                    "p",
                                                    {
                                                      attrs: {
                                                        "data-id": a.id,
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t._f("truncate")(
                                                            a.firstname +
                                                              " " +
                                                              a.lastname,
                                                            15,
                                                            ".."
                                                          )
                                                        ) + " "
                                                      ),
                                                      s("span", [
                                                        t._v(
                                                          t._s(
                                                            t.dateStringToTimeAgo(
                                                              a.last_message
                                                                .created_at
                                                            )
                                                          ) +
                                                            " " +
                                                            t._s(
                                                              t.dateStringToTimeAgo(
                                                                a.last_message
                                                                  .created_at
                                                              ) != t.$t("ҳозир")
                                                                ? t.$t("аввал")
                                                                : ""
                                                            )
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  t.clientTyping &&
                                                  t.clientId == a.id
                                                    ? s("span", [
                                                        t._v(
                                                          t._s("ёзмоқда...")
                                                        ),
                                                      ])
                                                    : a.last_message.from_id !==
                                                      t.user.id
                                                    ? s("span", [
                                                        t._v(
                                                          t._s(
                                                            t._f("truncate")(
                                                              a.last_message
                                                                .body
                                                                ? a.last_message
                                                                    .body
                                                                : a.last_message
                                                                    .attachment
                                                                ? "file"
                                                                : "",
                                                              22,
                                                              ".."
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : a.last_message.from_id ===
                                                      t.user.id
                                                    ? s("span", [
                                                        s(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "lastMessageIndicator",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t.$t("Сиз")
                                                              ) + ": "
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(
                                                          t._s(
                                                            t._f("truncate")(
                                                              a.last_message
                                                                .body
                                                                ? a.last_message
                                                                    .body
                                                                : a.last_message
                                                                    .attachment
                                                                ? "file"
                                                                : "",
                                                              22,
                                                              ".."
                                                            )
                                                          ) +
                                                            "\n                      "
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  t._v(" "),
                                                  a.unseen_counter
                                                    ? s("b", [
                                                        t._v(
                                                          t._s(a.unseen_counter)
                                                        ),
                                                      ])
                                                    : t._e(),
                                                ]),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      );
                                    }
                                  ),
                                  0
                                ),
                              ]
                            )
                          : t._e(),
                      ]
                    ),
                    t._v(" "),
                    s(
                      "div",
                      {
                        staticClass: "messenger-tab search-tab app-scroll",
                        style: t.searchInputClick
                          ? "display: block!important"
                          : "display: none!important",
                        attrs: { "data-view": "search" },
                      },
                      [
                        s("p", { staticClass: "messenger-title" }, [
                          s("span", [t._v(t._s("Қидириш"))]),
                        ]),
                        t._v(" "),
                        t.users
                          ? s("div", { staticClass: "search-records" }, [
                              s(
                                "div",
                                { staticClass: "on-mobile" },
                                t._l(t.users, function (a) {
                                  return s(
                                    "table",
                                    {
                                      staticClass: "messenger-list-item",
                                      attrs: { "data-contact": "15" },
                                      on: {
                                        click: function (s) {
                                          return t.showMessagesMobile(a.id);
                                        },
                                      },
                                    },
                                    [
                                      s("tbody", [
                                        s(
                                          "tr",
                                          { attrs: { "data-action": "0" } },
                                          [
                                            s("td", [
                                              a.avatar
                                                ? s("div", {
                                                    staticClass: "avatar av-m",
                                                    style: {
                                                      "background-image":
                                                        "url(" +
                                                        t.storageUrl +
                                                        a.avatar +
                                                        ")",
                                                    },
                                                  })
                                                : s("div", {
                                                    staticClass: "avatar av-m",
                                                    style: {
                                                      "background-image":
                                                        "url(" +
                                                        t.storageUrl +
                                                        "storage/image/businessman.svg)",
                                                    },
                                                  }),
                                            ]),
                                            t._v(" "),
                                            s("td", [
                                              s(
                                                "p",
                                                {
                                                  attrs: {
                                                    "data-id": "15",
                                                    "data-type": "user",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                        " +
                                                      t._s(
                                                        t._f("truncate")(
                                                          a.firstname +
                                                            " " +
                                                            a.lastname,
                                                          22,
                                                          ".."
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  );
                                }),
                                0
                              ),
                              t._v(" "),
                              s(
                                "div",
                                { staticClass: "no-mobile" },
                                t._l(t.users, function (a) {
                                  return s(
                                    "table",
                                    {
                                      staticClass: "messenger-list-item",
                                      attrs: { "data-contact": "15" },
                                      on: {
                                        click: function (s) {
                                          return t.showMessages(a.id);
                                        },
                                      },
                                    },
                                    [
                                      s("tbody", [
                                        s(
                                          "tr",
                                          { attrs: { "data-action": "0" } },
                                          [
                                            s("td", [
                                              a.avatar
                                                ? s("div", {
                                                    staticClass: "avatar av-m",
                                                    style: {
                                                      "background-image":
                                                        "url(" +
                                                        t.storageUrl +
                                                        a.avatar +
                                                        ")",
                                                    },
                                                  })
                                                : s("div", {
                                                    staticClass: "avatar av-m",
                                                    style: {
                                                      "background-image":
                                                        "url(" +
                                                        t.storageUrl +
                                                        "storage/image/businessman.svg)",
                                                    },
                                                  }),
                                            ]),
                                            t._v(" "),
                                            s("td", [
                                              s(
                                                "p",
                                                {
                                                  attrs: {
                                                    "data-id": "15",
                                                    "data-type": "user",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                        " +
                                                      t._s(
                                                        t._f("truncate")(
                                                          a.firstname +
                                                            " " +
                                                            a.lastname,
                                                          22,
                                                          ".."
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ])
                          : s("div", { staticClass: "search-records" }, [
                              s(
                                "p",
                                { staticClass: "message-hint center-el" },
                                [
                                  s("span", [
                                    t._v(
                                      t._s(t.$t("Қидириш учун ёзинг")) + ".."
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                      ]
                    ),
                  ]),
                ]
              ),
            ]);
          }),
        c = [],
        o = (a("386d"), a("c5f6"), a("2f62"));
      function l(t, s) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          s &&
            (e = e.filter(function (s) {
              return Object.getOwnPropertyDescriptor(t, s).enumerable;
            })),
            a.push.apply(a, e);
        }
        return a;
      }
      function d(t) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? l(Object(a), !0).forEach(function (s) {
                Object(n["a"])(t, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  t,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return t;
      }
      var u = {
          name: "ChatContacts",
          props: {
            clientId: Number,
            clientTyping: Boolean,
            contacts: Array,
            favoritesContacts: Array,
          },
          data: function () {
            return {
              contactsLoading: !1,
              searchInputClick: !1,
              noMoreContacts: !1,
              listOfContacts: [],
              search_user: "",
              users: [],
            };
          },
          computed: d(
            d({}, Object(o["c"])({ user: "auth/USER" })),
            {},
            {
              storageUrl: function () {
                return "https://freelancer.mehnat.uz/api/";
              },
            }
          ),
          watch: {
            search_user: function (t, s) {
              t && "" !== t && t !== s
                ? ((this.searchInputClick = !0), this.searchUsers(t))
                : (this.searchInputClick = !1);
            },
          },
          mounted: function () {
            var t = this;
            this.$root.$on("showMessages", function (s) {
              t.showMessages(s);
            }),
              this.$root.$on("memberAdded", function (s) {
                var a = t.contacts.find(function (t) {
                  return t.id == s.id;
                });
                a && (a.active_status = !0);
              }),
              this.$root.$on("memberRemoved", function (s) {
                var a = t.contacts.find(function (t) {
                  return t.id == s.id;
                });
                a && (a.active_status = !1);
              });
          },
          methods: d(
            d({}, Object(o["b"])({ searchUsersAction: "chat/searchUsers" })),
            {},
            {
              blurMethod: function () {
                var t = this;
                setTimeout(function () {
                  t.searchInputClick = !1;
                }, 100);
              },
              focusMethod: function () {
                var t = this;
                setTimeout(function () {
                  t.searchInputClick = !0;
                }, 100);
              },
              focusInput: function () {
                this.$refs.search.focus();
              },
              searchInputClickFunction: function () {
                this.searchInputClick = !this.searchInputClick;
              },
              searchUsers: function () {
                var t = this,
                  s = { input: this.search_user, page: this.contactsPage };
                (this.contactsLoading = !0),
                  this.searchUsersAction(s)
                    .then(function (s) {
                      t.users = s.records;
                    })
                    .finally(function () {
                      t.contactsLoading = !1;
                    });
              },
              dateStringToTimeAgo: function (t) {
                var s = new Date(),
                  a = new Date(t),
                  e = Math.floor((s - a) / 1e3),
                  i = Math.floor(e / 60),
                  n = Math.floor(i / 60),
                  r = Math.floor(n / 24),
                  c = Math.floor(r / 7),
                  o = Math.floor(r / 365);
                return e < 60
                  ? this.$t("ҳозир")
                  : i < 60
                  ? "".concat(i, " ") + this.$t("м")
                  : n < 24
                  ? "".concat(n, " ") + this.$t("с")
                  : r < 7
                  ? "".concat(r, " ") + this.$t("к")
                  : r < 365
                  ? "".concat(c, " ") + this.$t("ҳ")
                  : "".concat(o, " ") + this.$t("й");
              },
              showMessages: function (t) {
                var s = "/cabinet/chatify/".concat(t);
                this.$route.path !== s &&
                  this.$router.push({
                    name: "ChatMessages",
                    params: { id: t },
                  }),
                  this.$emit("showUserMessages", t);
              },
              showMessagesMobile: function (t) {
                console.log("mobile-mess");
                var s = "/cabinet/chatify/".concat(t);
                this.$route.path !== s &&
                  this.$router.push({
                    name: "ChatMessagesMobile",
                    params: { id: t },
                  }),
                  this.$emit("showUserMessages", t);
              },
            }
          ),
        },
        f = u,
        h = (a("5432"), a("2877")),
        v = Object(h["a"])(f, r, c, !1, null, "eb00f6e4", null),
        g = v.exports,
        m = a("d2d3"),
        p = function () {
          var t = this,
            s = t._self._c;
          return s("div", { staticClass: "user-detail" }, [
            s("div", { staticClass: "messenger-infoView app-scroll" }, [
              s("nav", [
                s("p", [t._v(t._s(t.$t("Фойдаланувчи маълумотлари")))]),
                t._v(" "),
                s("a", { attrs: { href: "#" } }, [
                  s(
                    "svg",
                    {
                      staticClass: "svg-inline--fa fa-times fa-w-11",
                      attrs: {
                        "aria-hidden": "true",
                        focusable: "false",
                        "data-prefix": "fas",
                        "data-icon": "times",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 352 512",
                        "data-fa-i2svg": "",
                      },
                    },
                    [
                      s("path", {
                        attrs: {
                          fill: "currentColor",
                          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
                        },
                      }),
                    ]
                  ),
                ]),
              ]),
              t._v(" "),
              t.userDetail && t.userDetail.fetch && t.userDetail.fetch.avatar
                ? s("div", {
                    staticClass: "avatar av-l chatify-d-flex",
                    style: {
                      "background-image":
                        "url(" + t.storageUrl + t.userDetail.fetch.avatar + ")",
                    },
                  })
                : s("div", {
                    staticClass: "avatar av-l chatify-d-flex",
                    style: {
                      "background-image":
                        "url(" +
                        t.storageUrl +
                        "storage/image/businessman.svg)",
                    },
                  }),
              t._v(" "),
              t.userDetail && t.userDetail.fetch
                ? s("p", { staticClass: "info-name" }, [
                    t._v(
                      t._s(
                        t.userDetail.fetch.firstname +
                          " " +
                          t.userDetail.fetch.lastname
                      )
                    ),
                  ])
                : s("p", { staticClass: "info-name" }, [
                    t._v(t._s(t.$t("Хабарлар алмашиш"))),
                  ]),
              t._v(" "),
              s("div", { staticClass: "messenger-infoView-btns" }),
              t._v(" "),
              s(
                "div",
                {
                  staticClass: "messenger-infoView-shared",
                  staticStyle: { display: "block" },
                },
                [
                  s("p", { staticClass: "messenger-title" }, [
                    s("span", [t._v(t._s(t.$t("Умумий расмлар")))]),
                  ]),
                  t._v(" "),
                  t.shared_files.length
                    ? s(
                        "div",
                        { staticClass: "shared-photos-list" },
                        t._l(t.shared_files, function (a) {
                          return s("div", {
                            staticClass: "shared-photo chat-image",
                            style: {
                              "background-image":
                                "url(" +
                                t.storageUrl +
                                "storage/attachments/" +
                                a +
                                ")",
                            },
                            on: {
                              click: function (s) {
                                return t.showImage(a);
                              },
                            },
                          });
                        }),
                        0
                      )
                    : s("div", { staticClass: "shared-photos-list" }, [
                        s("p", { staticClass: "message-hint" }, [
                          s("span", [
                            t._v(t._s(t.$t("Ҳали ҳеч нарса улашилмади"))),
                          ]),
                        ]),
                      ]),
                ]
              ),
            ]),
            t._v(" "),
            t.deleteDialog
              ? s(
                  "div",
                  {
                    staticClass: "app-modal",
                    style: t.deleteDialog
                      ? "display: block!important;"
                      : "display: none!important;",
                    attrs: { "data-name": "delete" },
                  },
                  [
                    s("div", { staticClass: "app-modal-container" }, [
                      s(
                        "div",
                        {
                          staticClass: "app-modal-card",
                          class: t.deleteDialog ? "app-show-modal" : "",
                          attrs: { "data-name": "delete", "data-modal": "0" },
                        },
                        [
                          s("div", { staticClass: "app-modal-header" }, [
                            t._v("Are you sure you want to delete this?"),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "app-modal-body" }, [
                            t._v("You can not undo this action"),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "app-modal-footer" }, [
                            s(
                              "a",
                              {
                                staticClass: "app-btn cancel",
                                on: {
                                  click: function (s) {
                                    t.deleteDialog = !1;
                                  },
                                },
                              },
                              [t._v("Cancel")]
                            ),
                            t._v(" "),
                            s(
                              "a",
                              { staticClass: "app-btn a-btn-danger delete" },
                              [t._v("Delete")]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]
                )
              : t._e(),
            t._v(" "),
            t.showImageDialog
              ? s(
                  "div",
                  {
                    staticClass: "imageModal",
                    staticStyle: { display: "block" },
                    attrs: { id: "imageModalBox" },
                  },
                  [
                    s(
                      "span",
                      {
                        staticClass: "imageModal-close",
                        on: {
                          click: function (s) {
                            t.showImageDialog = !1;
                          },
                        },
                      },
                      [t._v("×")]
                    ),
                    t._v(" "),
                    s("img", {
                      staticClass: "imageModal-content",
                      attrs: { id: "imageModalBoxSrc", src: t.dialogImageUrl },
                    }),
                  ]
                )
              : t._e(),
          ]);
        },
        _ = [];
      function b(t, s) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          s &&
            (e = e.filter(function (s) {
              return Object.getOwnPropertyDescriptor(t, s).enumerable;
            })),
            a.push.apply(a, e);
        }
        return a;
      }
      function C(t) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? b(Object(a), !0).forEach(function (s) {
                Object(n["a"])(t, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : b(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  t,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return t;
      }
      var y = {
          name: "Chat",
          data: function () {
            return {
              shared_files: [],
              userDetail: null,
              deleteDialog: !1,
              showImageDialog: !1,
            };
          },
          computed: {
            storageUrl: function () {
              return "https://freelancer.mehnat.uz/api/";
            },
          },
          watch: {
            "$route.params.id": function (t, s) {
              t && "" !== t && t !== s && (this.shared(), this.idInfo());
            },
            showImageDialog: function (t) {
              !1 === t && (this.dialogImageUrl = null);
            },
          },
          created: function () {
            this.shared(), this.idInfo();
          },
          methods: C(
            C(
              {},
              Object(o["b"])({
                sharedPhotosAction: "chat/shared",
                idInfoAction: "chat/idInfo",
              })
            ),
            {},
            {
              shared: function () {
                var t = this,
                  s = { user_id: this.$route.params.id };
                this.sharedPhotosAction(s)
                  .then(function (s) {
                    t.shared_files = s.shared;
                  })
                  .finally(function () {
                    t.messageLoading = !1;
                  });
              },
              idInfo: function () {
                var t = this,
                  s = { id: this.$route.params.id, type: "user" };
                this.idInfoAction(s).then(function (s) {
                  t.userDetail = s;
                });
              },
              showImage: function (t) {
                console.log("attachment: ", t),
                  (this.dialogImageUrl =
                    this.storageUrl + "storage/attachments/" + t),
                  (this.showImageDialog = !0);
              },
            }
          ),
        },
        w = y,
        O = (a("f112"), Object(h["a"])(w, p, _, !1, null, "0c678899", null)),
        $ = O.exports;
      function k(t, s) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          s &&
            (e = e.filter(function (s) {
              return Object.getOwnPropertyDescriptor(t, s).enumerable;
            })),
            a.push.apply(a, e);
        }
        return a;
      }
      function M(t) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? k(Object(a), !0).forEach(function (s) {
                Object(n["a"])(t, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : k(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  t,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return t;
      }
      var I = {
          name: "Chat",
          components: {
            ContactsSection: g,
            MessagesSection: m["default"],
            UserDetails: $,
          },
          data: function () {
            return {
              PUSHER_APP_ID: 1630615,
              PUSHER_APP_KEY: "0401bfa1b96ab46860e9",
              PUSHER_APP_SECRET: "9cc4292db074f60ec416",
              PUSHER_APP_CLUSTER: "ap2",
              channel_name: "private-chatify",
              client_send_channel: null,
              client_listen_channel: null,
              pusher: null,
              user_id: null,
              message: "",
              showMessagesWithId: !1,
              messages: [],
              clientId: null,
              clientTyping: !1,
              typingNow: 0,
              typingTimeout: 0,
              contacts: [],
              contactsPage: 1,
              favorites_contacts: [],
              showInfo: !1,
            };
          },
          watch: {
            "$route.params.id": function (t, s) {
              t && "" !== t && t !== s && (this.messages = []);
            },
          },
          mounted: function () {
            var t = this;
            document.addEventListener(
              "visibilitychange",
              this.handleVisibilityChange,
              !1
            ),
              this.getContacts(),
              this.$root.$on("updateContactItem", function (s) {
                t.updateContactItem(s);
              }),
              this.$root.$on("makeSeen", function () {
                t.makeSeen();
              });
          },
          methods: M(
            M(
              {},
              Object(o["b"])({
                fetchContacts: "chat/getContacts",
                updateContactsAction: "chat/updateContacts",
                favoritesUsersAction: "chat/favoritesUsers",
                makeSeenAction: "chat/makeSeen",
              })
            ),
            {},
            {
              showSideInfo: function () {
                console.log("get"), (this.showInfo = !this.showInfo);
              },
              updateContactItem: function (t) {
                var s = this;
                this.contactsLoading ||
                  ((this.contactsLoading = !0),
                  this.updateContactsAction({ user_id: t })
                    .then(function (a) {
                      var e = -1;
                      s.contacts.forEach(function (s, a) {
                        s.id == t && (e = a);
                      }),
                        -1 != e && s.contacts.splice(e, 1),
                        s.contacts.unshift(a),
                        s.$root.$emit("updateContactsList", s.contacts);
                    })
                    .finally(function () {
                      s.contactsLoading = !1;
                    }));
              },
              getContacts: function () {
                var t = this;
                if (!this.contactsLoading) {
                  var s = { page: this.contactsPage };
                  (this.contactsLoading = !0),
                    this.fetchContacts(s).then(function (s) {
                      t.contacts = s.contacts;
                    }),
                    this.favoritesUsersAction(s)
                      .then(function (s) {
                        t.favorites_contacts = s.favorites;
                      })
                      .finally(function () {
                        t.contactsLoading = !1;
                      });
                }
              },
              showUserMessages: function (t) {
                (this.showMessagesWithId = !0), (this.user_id = t);
              },
              makeSeen: function () {
                var t = this;
                this.$root.$emit("clientSeen", !0);
                var s = { id: this.$route.params.id };
                (this.contactsLoading = !0),
                  this.makeSeenAction(s)
                    .then(function (a) {
                      var e = t.contacts.find(function (t) {
                        return t.id == s.id;
                      });
                      e && (e.unseen_counter = 0),
                        t.$root.$emit("updateContactsList", t.contacts);
                    })
                    .finally(function () {
                      t.contactsLoading = !1;
                    }),
                  this.$refs.messagesSection &&
                    this.$refs.messagesSection.makeSeenMessages();
              },
              handleVisibilityChange: function () {
                document.hidden || this.makeSeen(!0);
              },
            }
          ),
        },
        x = I,
        S = (a("98b5"), Object(h["a"])(x, e, i, !1, null, "3cb0faaa", null));
      s["default"] = S.exports;
    },
    "4d2a": function (t, s, a) {},
    5432: function (t, s, a) {
      "use strict";
      a("b643");
    },
    "717e": function (t, s, a) {},
    7514: function (t, s, a) {
      "use strict";
      var e = a("5ca1"),
        i = a("0a49")(5),
        n = "find",
        r = !0;
      n in [] &&
        Array(1)[n](function () {
          r = !1;
        }),
        e(e.P + e.F * r, "Array", {
          find: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        a("9c6c")(n);
    },
    "83a1": function (t, s) {
      t.exports =
        Object.is ||
        function (t, s) {
          return t === s ? 0 !== t || 1 / t === 1 / s : t != t && s != s;
        };
    },
    "98b5": function (t, s, a) {
      "use strict";
      a("717e");
    },
    b643: function (t, s, a) {},
    cd1c: function (t, s, a) {
      var e = a("e853");
      t.exports = function (t, s) {
        return new (e(t))(s);
      };
    },
    e853: function (t, s, a) {
      var e = a("d3f4"),
        i = a("1169"),
        n = a("2b4c")("species");
      t.exports = function (t) {
        var s;
        return (
          i(t) &&
            ((s = t.constructor),
            "function" != typeof s ||
              (s !== Array && !i(s.prototype)) ||
              (s = void 0),
            e(s) && ((s = s[n]), null === s && (s = void 0))),
          void 0 === s ? Array : s
        );
      };
    },
    f112: function (t, s, a) {
      "use strict";
      a("4d2a");
    },
  },
]);

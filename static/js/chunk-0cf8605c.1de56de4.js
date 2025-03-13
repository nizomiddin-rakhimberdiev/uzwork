(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-0cf8605c"],
  {
    "1c51": function (t, e, n) {
      "use strict";
      n("3fbc");
    },
    "3fbc": function (t, e, n) {},
    9923: function (t, e, n) {},
    c626: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "common-layout" },
            [
              e(
                "el-container",
                { staticClass: "container" },
                [
                  e(
                    "el-aside",
                    {
                      staticClass: "aside",
                      attrs: { id: "aside_mobile", width: "400px" },
                    },
                    [e("Aside", { on: { sidebarActions: t.sidebarActions } })],
                    1
                  ),
                  t._v(" "),
                  e(
                    "el-container",
                    { staticClass: "content-wrapper" },
                    [
                      e("el-header", [e("Header")], 1),
                      t._v(" "),
                      e(
                        "el-main",
                        { attrs: { id: "main" } },
                        [e("router-view")],
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
          );
        },
        s = [],
        c = n("5ac9"),
        o = n("f8d0"),
        a = {
          name: "Main",
          components: { Header: c["a"], Aside: o["a"] },
          mounted: function () {
            var t = document.getElementById("main");
            t.addEventListener("scroll", function () {
              t.onscroll = function () {
                var e = document.getElementById("return-to-home");
                t.scrollTop
                  ? e.setAttribute("style", "display: none !important;")
                  : e.setAttribute("style", "display: flex !important;");
              };
            });
          },
          methods: {
            sidebarActions: function () {
              console.log("value");
            },
          },
        },
        r = a,
        l = (n("e25d"), n("1c51"), n("2877")),
        d = Object(l["a"])(r, i, s, !1, null, "e8722c3c", null);
      e["default"] = d.exports;
    },
    e25d: function (t, e, n) {
      "use strict";
      n("9923");
    },
  },
]);

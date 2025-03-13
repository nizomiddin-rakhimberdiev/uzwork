(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-334c0bec"],
  {
    "3f4a": function (t, e, n) {},
    "809f": function (t, e, n) {},
    8304: function (t, e, n) {
      "use strict";
      n("809f");
    },
    cb87: function (t, e, n) {
      "use strict";
      n("3f4a");
    },
    fd5e: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = function () {
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
                    [e("Aside")],
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
        i = [],
        s = n("5ac9"),
        o = n("f8d0"),
        c = {
          name: "Main",
          components: { Header: s["a"], Aside: o["a"] },
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
        },
        r = c,
        l = (n("cb87"), n("8304"), n("2877")),
        d = Object(l["a"])(r, a, i, !1, null, "2f8e0d56", null);
      e["default"] = d.exports;
    },
  },
]);

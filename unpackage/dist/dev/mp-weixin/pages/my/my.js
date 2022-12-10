"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  mounted() {
    this.onReady();
  },
  methods: {
    onReady() {
      var context = common_vendor.index.createCanvasContext("firstCanvas");
      context.setStrokeStyle("#00ff00");
      context.setLineWidth(5);
      context.rect(0, 0, 200, 200);
      context.stroke();
      context.setStrokeStyle("#ff0000");
      context.setLineWidth(2);
      context.moveTo(160, 100);
      context.arc(100, 100, 60, 0, 2 * Math.PI, true);
      context.moveTo(140, 100);
      context.arc(100, 100, 40, 0, Math.PI, false);
      context.moveTo(85, 80);
      context.arc(80, 80, 5, 0, 2 * Math.PI, true);
      context.moveTo(125, 80);
      context.arc(120, 80, 5, 0, 2 * Math.PI, true);
      context.stroke();
      context.draw();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/cate/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);

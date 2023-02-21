"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "\u62BD\u5956",
      list: ["\u80A0\u7C89", "\u9762\u98DF", "\u7C73\u996D", "\u9C7C", "\u98DF\u72692", "\u98DF\u72693", "\u98DF\u72694", "\u98DF\u72695", "\u98DF\u72696", "\u98DF\u72697", "\u98DF\u72698"],
      id: 0,
      stop: false
    };
  },
  onLoad() {
  },
  methods: {
    stopTimer() {
      this.stop = false;
      clearTimeout(this.timer);
    },
    prepare() {
      if (this.stop)
        return;
      this.start();
    },
    start(time = 800, state = true) {
      this.stop = true;
      Math.floor(Math.random() * (this.list.length - min + 1)) + min;
      let max = this.list.length - 1;
      let min = 0;
      let lucky = Math.floor(Math.random() * (max - min + 1)) + min;
      this.timer = setTimeout(() => {
        this.id = lucky;
        if (state) {
          time -= 50;
          if (time < 100) {
            state = !state;
          }
        } else {
          time += 10;
          if (time > 300) {
            this.stopTimer();
            return;
          }
        }
        this.start(time, state);
      }, time);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.id === index ? 1 : "",
        c: index
      };
    }),
    c: common_vendor.o((...args) => $options.prepare && $options.prepare(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/my/xiaohe/cate/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

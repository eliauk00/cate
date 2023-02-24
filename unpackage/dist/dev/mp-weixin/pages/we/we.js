"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "we",
  setup(__props) {
    let time = "2022/12/01 20:25:00";
    time = time.replace(/-/g, "/");
    let timer = common_vendor.ref();
    let timerFun = () => {
      let dateEnd = new Date();
      let dateBegin = new Date(time);
      let dateDiff = dateEnd.getTime() - dateBegin.getTime();
      let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1e3));
      let leave1 = dateDiff % (24 * 3600 * 1e3);
      let hours = Math.floor(leave1 / (3600 * 1e3));
      let leave2 = leave1 % (3600 * 1e3);
      let minute = Math.floor(leave2 / (60 * 1e3));
      let leave3 = leave2 % (60 * 1e3);
      let seconds = Math.round(leave3 / 1e3);
      timer.value = dayDiff + "\u5929" + hours + "\u65F6" + minute + "\u5206" + seconds + "\u79D2";
    };
    setInterval(() => {
      timerFun();
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(timer))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0e766ef7"], ["__file", "D:/my/xiaohe/cate/pages/we/we.vue"]]);
wx.createPage(MiniProgramPage);

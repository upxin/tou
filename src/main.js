
/* eslint-disable */

import Vue from 'vue';
import App from './App';
import router from './router';
// import '@/common/js/dpr.js';
import "@/common/js/rem";
import "@/common/scss/index.scss";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});

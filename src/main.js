import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import moment from "moment-timezone";
import 'vuetify/src/stylus/app.styl'

import "fonts.css/dist/fonts.css";

Vue.config.productionTip = false;

Vue.prototype.$time = moment;

new Vue({
  render: h => h(App)
}).$mount("#app");

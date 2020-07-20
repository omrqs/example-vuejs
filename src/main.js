import Vue from "vue";
import App from "./App.vue";
import i18n from "@/i18n";
import router from "./router";
import store from "./store";
import VueMask from "v-mask";
import LocalStorage from "@/LocalStorage";
import Filters from "@/Filters";
import { sync } from "vuex-router-sync";

// Components and plugins.
import vuetify from "./plugins/vuetify";
import "./components";
import "./plugins";

// Sync store with router
sync(store, router);

Vue.use(VueMask);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

Filters();
LocalStorage();

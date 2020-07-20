import Vue from "vue";
import VueCookies from "vue-cookies";

VueCookies.config("1m", "/");
Vue.prototype.$cookies = VueCookies;

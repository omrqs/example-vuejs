import Vue from "vue";
import axiosLib from "axios";
import router from "@/router";
import store from "@/store";

// Global http with axios
var axios = axiosLib.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    if (typeof response.data !== "undefined") {
      if (
        typeof response.data.messages !== "undefined" &&
        router.currentRoute.name !== "welcome"
      ) {
        store.dispatch("notificate", response.data.messages);
      }
    }

    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      store.dispatch("signout");
    }
    return Promise.reject(error);
  }
);

Vue.prototype.$http = axios;
// end global http

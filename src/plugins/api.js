import Vue from "vue";
import axiosLib from "axios";
import store from "@/store";

// Global http with axios
var axios = axiosLib.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "X-API-KEY": "token1"
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
      if (typeof response.data.message !== "undefined") {
        store.dispatch("snackbar/notificate", {
          info: [response.data.message]
        });
      }
    }

    return response;
  },
  function(error) {
    if (typeof error.response.data !== "undefined") {
      if (typeof error.response.data.message !== "undefined") {
        store.dispatch("snackbar/notificate", {
          error: [error.response.data.message]
        });
      }
    }

    if (error.response.status === 401) {
      store.dispatch("signout");
    }
    return Promise.reject(error);
  }
);

Vue.prototype.$api = axios;
// end global http

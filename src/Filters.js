import Vue from "vue";

const moment = require("moment");

export default function() {
  // General filters.
  Vue.filter("date", function(val) {
    return moment(val).format("DD/MM/YYYY");
  });
  Vue.filter("dateHour", function(val) {
    return moment(val).format("HH:mm DD/MM/YYYY");
  });
}

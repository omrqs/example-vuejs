import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import minifyTheme from "minify-css-string";
import "@mdi/font/css/materialdesignicons.css";

// loading themes stylesheet.
require("@/styles/default.scss");

var LRU = require("lru-cache");
const themeCache = new LRU({
  maxAge: 1000 * 60 * 60, // 1 hour
  max: 10
});

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    // dark: localStorage.getItem("dark-mode"),
    themes: {
      options: {
        themeCache,
        minifyTheme,
        cspNonce: "loremipsumlorem",
        customProperties: true
      },
      light: {
        primary: colors.blueGrey.darken1,
        secondary: colors.blueGrey.darken3,
        accent: colors.orange.darken3,
        error: colors.red.accent3,
        anchor: "#8c9eff"
      },
      dark: {
        primary: colors.blueGrey.darken5
      }
    }
  }
});

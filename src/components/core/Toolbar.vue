<template>
  <v-app-bar
    id="core-toolbar"
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="primary"
    dark
    class="mt-md-3 mt-lg-0"
  >
    <v-app-bar-nav-icon @click.stop="onClickBtn" />
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <span class="link hidden-sm-and-down font-weight-black" @click="goToDash">
        {{ appTitle }}
      </span>
    </v-toolbar-title>

    <v-progress-linear
      :active="loader"
      indeterminate
      absolute
      top
      color="secondary lighten-3"
      height="2"
    />
    <v-spacer />
    <v-btn icon href="https://github.com/omrqs/example-vuejs" target="_blank">
      <v-icon>mdi-help-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CoreToolbar",
  data: () => ({
    title: "",
    alerts: 0,
    appTitle: process.env.VUE_APP_TITLE
  }),
  watch: {
    $route(val) {
      this.title = val.name;
    }
  },
  computed: {
    ...mapState("app", ["loader"]),
    loader: {
      get() {
        return this.$store.state.app.loader;
      }
    }
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClickBtn: function() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    goToDash: function() {
      this.$router.push("/");
    },
    signout: function() {
      return this.$store.dispatch("signout");
    }
  }
};
</script>

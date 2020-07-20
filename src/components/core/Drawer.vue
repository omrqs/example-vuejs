<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="drawer"
    :width="widthSize"
    :clipped="$vuetify.breakpoint.lgAndUp"
    touchless
    app
    floating
    persistent
    mobile-breakpoint="991"
  >
    <v-list dense>
      <template v-for="entry in entries">
        <v-list-item
          v-if="entry.divider"
          :key="entry.text"
          class="ma-0 px-2 py-0"
        >
          <v-divider />
        </v-list-item>
        <v-list-item
          v-else
          :key="entry.text"
          link
          :to="entry.path"
          class="mr-2"
        >
          <v-list-item-action>
            <v-icon color="secondary">{{ entry.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ entry.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "CoreDrawer",
  data: () => ({
    variableWidth: 80,
    widthSize: "",
    entries: [
      {
        icon: "mdi-apps",
        text: "Dashboard",
        path: "/"
      },
      { divider: true },
      {
        icon: "mdi-map",
        text: "Estados",
        path: "/state"
      },
      {
        icon: "mdi-city",
        text: "Cidades",
        path: "/city"
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState("app", ["image", "color"]),
    drawer: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    },
    items() {
      return this.$t("Layout.View.items");
    }
  },
  mounted() {
    this.onResponsiveInverted();
    this.widthCalculator();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    widthCalculator() {
      if (window.innerWidth < 991) {
        this.widthSize = 300;
      } else {
        this.widthSize = 320;
      }
    },
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  }
};
</script>

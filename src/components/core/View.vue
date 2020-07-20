<template>
  <v-content>
    <div id="core-view">
      <core-alerts />
      <v-fade-transition
        mode="out-in"
        @before-enter="loadIn"
        @after-enter="loadOut"
      >
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CoreView",
  data: () => ({}),
  methods: {
    ...mapMutations("app", ["setLoader"]),
    loadIn() {
      this.setLoader(true);
    },
    loadOut() {
      this.setLoader(false);
    }
  }
};
</script>

<template>
  <v-main>
    <div id="core-view">
      <v-fade-transition
        mode="out-in"
        @before-enter="loadIn"
        @after-enter="loadOut"
      >
        <router-view />
      </v-fade-transition>
    </div>
  </v-main>
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

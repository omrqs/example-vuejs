<template>
  <v-snackbar
    id="snack-message"
    v-model="show"
    :color="color"
    :timeout="timeout"
    multi-line="multi-line"
    vertical="vertical"
    @click.native="show = false"
  >
    <span class="text-capitalize">{{ message }}</span>
    <v-btn fab text>
      <v-icon color="white">mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CoreSnackbar",
  data: () => ({
    show: false,
    message: "",
    color: "info",
    timeout: 6000
  }),
  created: function() {
    this.$store.watch(
      state => state.snackbar.messages,
      () => {
        let msg = this.$store.state.snackbar.messages;
        this.color = this.$store.state.snackbar.color;

        let messages = "";
        if (msg !== "") {
          msg.map(item => {
            messages += item;
          });

          this.message = messages;
          this.show = true;
        }
      }
    );
  },
  methods: {
    ...mapMutations({
      "snackbar/setMessages": "setMessages",
      "snackbar/setColor": "setColor"
    })
  }
};
</script>

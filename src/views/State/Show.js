import Model from "@/models/state";

export default {
  name: "stateDetail",
  components: {
    ShowCrud: () => import("@/components/crud/Show.vue")
  },
  data: () => ({
    model: null
  }),
  created() {
    this.model = new Model();
  }
};

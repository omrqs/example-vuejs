import Model from "@/models/city";

export default {
  name: "cityDetail",
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

export default {
  name: "ShowCollection",
  data: () => ({
    tab: null,
    entries: []
  }),
  components: {
    ShowCrud: () => import("@/components/crud/Show.vue")
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: true
    },
    ignoreFields: {
      type: Array,
      required: false
    }
  },
  created() {
    let id = this.id ?? this.$route.params.id;
    this.model.endpoints.getListByUnit(id).then(res => {
      if (typeof res.length != "undefined") {
        this.entries = res;
      }
    });

    console.log("ignoreFields", this.ignoreFields);
  }
};

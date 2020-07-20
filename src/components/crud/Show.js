export default {
  name: "CrudShow",
  data: () => ({
    title: "",
    entry: {},
    dialog: false,
    loading: true,
    notFound: false,
    defaultIgnoreFields: ["id"]
  }),
  props: {
    model: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: false
    },
    ignoreFields: {
      type: Array,
      required: false
    }
  },
  async created() {
    this.defaultIgnoreFields = this.defaultIgnoreFields.concat(
      this.ignoreFields
    );

    this.title = `${this.model.modelName} detail`;
    let id = this.id ?? this.$route.params.id;

    this.entry = await this.get(id);
  },
  methods: {
    get(id) {
      return this.model.endpoints
        .getById(id)
        .then(entry => {
          this.loading = false;

          return entry;
        })
        .catch(() => {
          this.notFound = true;
        });
    },
    show() {
      this.dialog = true;
    },
    discard() {
      this.dialog = false;
    }
  }
};

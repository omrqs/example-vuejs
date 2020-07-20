import CrudFormEventBus from "@/components/EventBus";

export default {
  name: "CrudForm",
  data: () => ({
    dialog: false,
    model: {},
    title: "",
    editedIndex: -1,
    items: {},
    defaultItem: {},
    fields: {},
    form: {
      valid: true,
      loading: false
    },
    rules: {},
    masks: {}
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? `New ${this.title.toLowerCase()}`
        : `Editing "${this.title}"`;
    }
  },
  mounted() {
    this.masks = this.model.masks();
    this.items = this.model.enums();

    this.defaultItem = this.model.parserFrom({}).attrs;
    let object = this.model.parserFrom({});
    this.fields = object.attrs;
    this.title = object.modelName;

    // Emitters.
    CrudFormEventBus.$on(
      `${object.modelName.toLowerCase()}-edit-form`,
      item => {
        this.editedIndex = item.id;
        this.editItem(item);
      }
    );
    CrudFormEventBus.$on(`${object.modelName.toLowerCase()}-save-form`, () => {
      this.save();
    });
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex = item.id;
      this.fields = this.model.parserFrom(item).attrs;
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.fields = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    saveObject() {
      if (this.$refs.form.validate()) {
        let object = this.model.parserFrom(this.fields);

        if (this.editedIndex !== -1) {
          object.save();
        } else {
          object.create();
        }

        // Refresh entries.
        CrudFormEventBus.$emit(
          `${object.modelName.toLowerCase()}-refresh-entries`
        );

        return true;
      }

      return false;
    },
    save() {
      this.form.loading = true;
      if (this.saveObject()) {
        this.$store.dispatch("snackbar/notificate", {
          success: ["Item saved!"]
        });

        this.close();
        this.fields = this.defaultItem;
      }

      this.form.loading = false;
    }
  }
};

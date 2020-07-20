import CrudFormEventBus from "@/components/EventBus";

export default {
  name: "CrudIndex",
  data: () => ({
    entries: [],
    deleteDialog: false,
    deleteLoading: false,
    currentItem: {},
    loading: true,
    loadingText: "Carregando...",
    emptyText: "Sem dados para exibir"
  }),
  props: {
    model: {
      type: Object,
      required: true
    },
    showRoute: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    headers: {
      type: Array,
      required: true
    }
  },
  mounted() {
    // Emitters.
    CrudFormEventBus.$on(
      `${this.model.modelName.toLowerCase()}-refresh-entries`,
      () => {
        this.loadEntries();
      }
    );
  },
  computed: {
    hasEdit: function() {
      return true;
      // return typeof this.formTitle !== "undefined";
    },
    hasDelete: function() {
      return true;
      // return typeof this.formTitle !== "undefined";
    }
  },
  created() {
    this.loadEntries();
  },
  methods: {
    async loadEntries() {
      this.loading = true;
      this.entries = [];

      await this.model.endpoints
        .getList()
        .then(entries => {
          let items = entries.data[this.model.collectionName];
          items.map(entry => {
            this.entries.push(
              this.model.constructor.parserFrom(entry).attrsList
            );
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteItem(item) {
      this.deleteDialog = true;
      this.currentItem = item;
    },
    discardDelete() {
      this.deleteDialog = false;
      this.currentItem = {};
    },
    removeItem() {
      this.deleteLoading = true;

      this.model.delete(this.currentItem.id).then(() => {
        this.loadEntries();

        this.deleteDialog = false;
        this.deleteLoading = false;

        this.$store.dispatch("snackbar/notificate", {
          success: ["Item removed!"]
        });
      });
    },

    showItem(item) {
      this.$router.push({
        name: this.showRoute,
        params: { id: item.id }
      });
    },
    editItem(item) {
      CrudFormEventBus.$emit(
        `${this.model.modelName.toLowerCase()}-edit-form`,
        item
      );
    },
    saveItem(item) {
      CrudFormEventBus.$emit(
        `${this.model.modelName.toLowerCase()}-save-form`,
        item
      );
    }
  }
};

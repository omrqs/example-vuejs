import Model from "@/models/state";

export default {
  name: "Categories",
  components: {
    CoreCrud: () => import("@/components/crud/Index.vue"),
    FormCrud: () => import("./Form.vue")
  },
  data: () => ({
    routes: {
      show: "stateDetails"
    },
    model: null,
    title: "Estados",
    description: "Você pode adicionar ou editar os registros.",
    headers: [
      {
        text: "Nome",
        align: "start",
        value: "name"
      },
      {
        text: "Sigla",
        align: "start",
        value: "abrev"
      },
      { text: "Ações", value: "actions", sortable: false }
    ]
  }),
  created() {
    this.model = new Model();
  }
};

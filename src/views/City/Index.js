import Model from "@/models/city";

export default {
  name: "Categories",
  components: {
    CoreCrud: () => import("@/components/crud/Index.vue"),
    FormCrud: () => import("./Form.vue")
  },
  data: () => ({
    routes: {
      show: "cityDetails"
    },
    model: null,
    title: "Cidades",
    description: "Você pode adicionar ou editar os registros.",
    headers: [
      {
        text: "Sigla",
        align: "start",
        value: "abrev"
      },
      {
        text: "Nome",
        align: "start",
        value: "name"
      },
      { text: "Ações", value: "actions", sortable: false }
    ]
  }),
  created() {
    this.model = new Model();
  }
};

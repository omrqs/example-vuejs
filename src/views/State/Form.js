import state from "@/models/state";
import CoreCrudForm from "@/components/crud/Form";

export default {
  name: "CrudForm",
  extends: CoreCrudForm,
  beforeMount() {
    this.model = state;
  },
  async created() {
    this.rules = state.validators();
  }
};

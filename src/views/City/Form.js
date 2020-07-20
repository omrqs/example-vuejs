import city from "@/models/city";
import CoreCrudForm from "@/components/crud/Form";

export default {
  name: "CrudForm",
  extends: CoreCrudForm,
  beforeMount() {
    this.model = city;
  },
  async created() {
    this.rules = city.validators();
  }
};

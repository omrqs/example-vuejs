import city from "@/models/city";
import CoreCrudForm from "@/components/crud/Form";
import StateModel from "@/models/state";
import State from "@/endpoints/State";

export default {
  name: "CrudForm",
  data: () => ({
    states: []
  }),
  extends: CoreCrudForm,
  beforeMount() {
    this.model = city;
  },
  async created() {
    this.rules = city.validators();

    this.states = await State.getList().then(entries => {
      let items = entries.data.states;
      return items.map(entry => StateModel.parserFrom(entry).attrsList);
    });
  },
  watch: {
    states: function(val) {
      this.items.states = val;
    }
  }
};

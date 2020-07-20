import Persist from "@/components/crud/Persist";
import Endpoints from "@/endpoints/City";

class City extends Persist {
  constructor() {
    super();

    this.endpoints = Endpoints;
    this.modelName = "City";
    this.collectionName = "cities";
    this.api = {
      endpoint: "/city"
    };
  }

  toString() {
    return this.attrs.name;
  }

  static enums() {
    return {};
  }

  static validators() {
    return {
      state: [v => !!v || "Estado é obrigatório"],
      name: [v => !!v || "Nome da cidade é obrigatório"]
    };
  }

  static masks() {
    return {};
  }

  static parserFrom(data) {
    let object = new City();
    let attrs = {};

    if (typeof data.id !== "undefined") {
      attrs.id = data.id;
    }
    attrs.state = typeof data.state !== "undefined" ? data.state : null;
    attrs.name = typeof data.name !== "undefined" ? data.name : null;

    object.attrs = attrs;

    object.attrsList.name = attrs.name;
    object.attrsList.state_name = attrs.state.name;
    object.attrsList.state_abrev = attrs.state.abrev.toUpperCase();

    return object;
  }
}

export default City;

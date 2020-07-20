import Persist from "@/components/crud/Persist";
import Endpoints from "@/endpoints/City";

class City extends Persist {
  constructor() {
    super();

    this.endpoints = Endpoints;
    this.modelName = "City";
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
    attrs.name = typeof data.name !== "undefined" ? data.name : null;
    attrs.abrev = typeof data.abrev !== "undefined" ? data.abrev : null;

    object.attrs = attrs;

    return object;
  }
}

export default City;

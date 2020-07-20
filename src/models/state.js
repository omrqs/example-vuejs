import Persist from "@/components/crud/Persist";
import Endpoints from "@/endpoints/State";

class State extends Persist {
  constructor() {
    super();

    this.endpoints = Endpoints;
    this.modelName = "State";
    this.api = {
      endpoint: "/state"
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
      name: [v => !!v || "Nome da cidade é obrigatório"],
      abrev: [v => !!v || "Sigla do estado é obrigatório"]
    };
  }

  static masks() {
    return {};
  }

  static parserFrom(data) {
    let object = new State();
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

export default State;

import Vue from "vue";
import Listeners from "./Listeners";

class Persist extends Listeners {
  constructor() {
    super();

    this.attrs = {};
    this.attrsList = {};
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async create() {
    delete this.attrs.id;

    await this.prePersist();
    await this.preCreate();

    let endpoint = `${process.env.VUE_APP_API}${this.api.endpoint}`;
    return Vue.prototype.$api.post(endpoint, this.attrs).then(async resp => {
      await this.postPersist();
      await this.postCreate();

      return resp.data;
    });
  }

  async save() {
    this.setId(this.attrs.id);

    delete this.attrs.id;

    await this.prePersist();
    await this.preUpdate();

    let endpoint = `${process.env.VUE_APP_API}${
      this.api.endpoint
    }/${this.getId()}`;
    return Vue.prototype.$api.patch(endpoint, this.attrs).then(async resp => {
      await this.postPersist();
      await this.postUpdate();

      return resp.data;
    });
  }

  async delete(id) {
    await this.preRemove();

    let endpoint = `${process.env.VUE_APP_API}${this.api.endpoint}/${id}`;
    return Vue.prototype.$api.delete(endpoint).then(async resp => {
      await this.postRemove();

      return resp.data;
    });
  }
}

export default Persist;

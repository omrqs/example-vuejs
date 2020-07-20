import Vue from "vue";

class AbstractController {
  static async getList() {
    let endpoint = `${process.env.VUE_APP_API}/${this.collectionName()}`;
    return Vue.prototype.$api.get(endpoint).then(resp => {
      return resp.data;
    });
  }
  static async getById(id) {
    let endpoint = `${process.env.VUE_APP_API}/${this.collectionName()}/${id}`;
    return Vue.prototype.$api.get(endpoint).then(resp => {
      return resp.data;
    });
  }
}

export default AbstractController;

class Listeners {
  constructor() {
    this.keywords = [];
  }

  async prePersist() {
    delete this.attrs.id;

    return this;
  }

  async postPersist() {
    return this;
  }

  async preCreate() {
    return this;
  }

  async postCreate() {
    return this;
  }

  async preUpdate() {
    return this;
  }

  async postUpdate() {
    return this;
  }

  async preRemove() {
    return this;
  }

  async postRemove() {
    return this;
  }
}

export default Listeners;

import store from "@/store/index";
import Listeners from "./Listeners";
// import { db } from "@/plugins/firebase";

class Persist extends Listeners {
  constructor() {
    super();

    this.attrs = {};
    this.attrsList = {};
  }

  conn() {
    // return db.collection(this.modelName.toLowerCase());
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

    // return this.conn()
    //   .add({
    //     createdOn: new Date(),
    //     content: this.attrs,
    //     userId: this.getUid()
    //   })
    //   .then(async ref => {
    //     this.setId(ref.id);

    //     await this.postPersist();
    //     await this.postCreate();

    //     return ref;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  async save() {
    this.setId(this.attrs.id);

    delete this.attrs.id;

    await this.prePersist();
    await this.preUpdate();

    // return this.conn()
    //   .doc(this.getId())
    //   .update({
    //     updatedOn: new Date(),
    //     content: this.attrs
    //   })
    //   .then(async ref => {
    //     await this.postPersist();
    //     await this.postUpdate();

    //     return ref;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  async delete(id) {
    await this.preRemove();

    // return this.conn()
    //   .doc(id)
    //   .delete()
    //   .then(async ref => {
    //     await this.postRemove();
    //     return ref;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}

export default Persist;

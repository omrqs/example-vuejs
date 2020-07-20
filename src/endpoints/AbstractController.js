// import store from "@/store";

class AbstractController {
  static async getList() {
    // let business = store.state.business;
    // let ref = db.collection(this.collectionName().toLowerCase());
    // return ref
    //   .where("content.bid", "==", business.id)
    //   .orderBy("createdOn", "desc")
    //   .get()
    //   .then(snapshot => {
    //     let entries = [];
    //     if (snapshot.empty) {
    //       return entries;
    //     }
    //     snapshot.forEach(doc => {
    //       let entry = doc.data().content;
    //       entry.id = doc.id;
    //       entries.push(entry);
    //     });
    //     return entries;
    //   });
  }
  static async getById() {
    // let ref = db.collection(this.collectionName().toLowerCase());
    // return ref
    //   .doc(id)
    //   .get()
    //   .then(doc => {
    //     if (!doc.exists) {
    //       return {};
    //     }
    //     let entry = doc.data().content;
    //     entry.id = doc.id;
    //     return entry;
    //   });
  }
}

export default AbstractController;

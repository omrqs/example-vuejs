import LocalStorage from "@/LocalStorage";

class LocalStorageHelper {
  static arrayToObjects(arr) {
    let data = {};

    arr.map(item => {
      data[item.id] = {
        text: item.title
      };
    });

    return data;
  }
  static set(entry, data) {
    localStorage.setItem(entry, btoa(JSON.stringify(data)));
  }
  static get(entry) {
    if (localStorage.getItem(entry) !== null) {
      let data = localStorage.getItem(entry);

      return JSON.parse(atob(data));
    }

    return null;
  }
  static remove(entry) {
    if (localStorage.getItem(entry) !== null) {
      localStorage.removeItem(entry);
    }
  }
  static clearAll() {
    localStorage.clear();
  }
  static redefine(entry) {
    this.remove(entry);
    LocalStorage();
  }
}

export default LocalStorageHelper;

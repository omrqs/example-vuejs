import store from "@/store";
import LocalStorageHelper from "@/helpers/LocalStorageHelper";
import State from "@/endpoints/State";

export default function() {
  store.dispatch("getSession").then(() => {
    if (LocalStorageHelper.get("states") === null) {
      State.getList().then(res => {
        let objs = LocalStorageHelper.arrayToObjects(res);

        LocalStorageHelper.set("states", objs);
      });
    }
  });
}

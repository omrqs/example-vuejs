export default {
  notificate({ commit }, messages) {
    return new Promise(resolve => {
      commit("notificate", messages);

      resolve();
    });
  }
};

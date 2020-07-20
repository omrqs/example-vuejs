export default {
  setColor(state, color) {
    state.color = color;
  },
  setMessages(state, messages) {
    state.messages = messages;
  },
  notificate(state, messages) {
    if (messages !== null) {
      for (let [type, message] of Object.entries(messages)) {
        if (message === null || message === "") continue;

        state.messages = message;
        state.color = type;
      }
    }
  }
};

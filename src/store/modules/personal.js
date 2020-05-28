export default (api) => {
  return {
    namespaced: true,
    state: {
      roomInfo: [],
    },
    getters: {
      roomInfo: state => state.roomInfo,
    },
    mutations: {
      roomInfo(state, e) {
        state.roomInfo = e;
      },
    },
    actions: {
      roomInfo: ({
        commit
      }, e) => {
        commit("roomInfo", e);
      },
    }
  }
}

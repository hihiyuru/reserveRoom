export default (api) => {
  return {
    namespaced: true,
    state: {
      roomInfo: [], //銀行卡是否綁定
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

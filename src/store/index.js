import Vue from "vue";
import Vuex from "vuex";
import CHAR_DATA from "@/data/charcters";

Vue.use(Vuex);

const DEFAULT_DATA = Object.entries(CHAR_DATA).reduce((accu, [rare, list]) => {
  return accu.concat(
    list.map((name, id) => {
      return { id, rare, name, completed: false };
    })
  );
}, []);

let data = DEFAULT_DATA;
const logData = JSON.parse(localStorage.getItem("data") || "[]");

if (logData.length) {
  data = DEFAULT_DATA.map(dat => {
    dat.completed = logData[dat.id].completed;
    return dat;
  });
}

export default new Vuex.Store({
  state: {
    data
  },
  getters: {
    rares() {
      return Object.keys(CHAR_DATA);
    }
  },
  actions: {
    reset({ commit, state }) {
      commit("resetData");
      localStorage.setItem("data", JSON.stringify(state.data));
    }
  },
  mutations: {
    resetData(state) {
      state.data.forEach(dat => {
        dat.completed = false;
      });
    }
  }
});

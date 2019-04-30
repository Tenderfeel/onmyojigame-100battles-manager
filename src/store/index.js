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
const log = localStorage.getItem("data");

if (log) {
  data = JSON.parse(log);
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
  actions: {},
  mutations: {
    resetData(state) {
      state.data.forEach(dat => {
        dat.completed = false;
      });
    }
  }
});

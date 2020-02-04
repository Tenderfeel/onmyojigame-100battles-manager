import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import InstantSearch from "vue-instantsearch";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});
Vue.use(InstantSearch);
Vue.component("vue-fontawesome", FontAwesomeIcon);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

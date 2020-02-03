import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Table from "buefy/dist/components/table";
import Field from "buefy/dist/components/field";
import Switch from "buefy/dist/components/switch";
import Button from "buefy/dist/components/button";
import Toast from "buefy/dist/components/toast";
import Navbar from "buefy/dist/components/navbar";
import "buefy/dist/buefy.css";
import InstantSearch from "vue-instantsearch";

Vue.config.productionTip = false;
Vue.use(Navbar);
Vue.use(Table);
Vue.use(Field);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Toast);
Vue.use(InstantSearch);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

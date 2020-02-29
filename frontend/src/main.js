import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bulma/css/bulma.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEdit, faTrashAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

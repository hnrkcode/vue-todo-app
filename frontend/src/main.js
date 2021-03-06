import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bulma/css/bulma.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faExclamationTriangle,
  faEllipsisH,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faEdit,
  faTrashAlt,
  faExclamationTriangle,
  faEllipsisH,
  faCalendarAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

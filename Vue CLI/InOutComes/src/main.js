import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/dateFilter"
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false;
Vue.filter("date_filter", dateFilter)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

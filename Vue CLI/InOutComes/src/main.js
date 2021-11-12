import Vue from "vue";
import Vuelidate from "vuelidate"

import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/dateFilter"
import messagePlugin from "@/utils/message.plugin";

import "./registerServiceWorker";
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter("date_filter", dateFilter)

// firebase config
firebase.initializeApp({
  apiKey: "AIzaSyAEo0lc4CzHEYHOgdMQphVGONgu_3jBY-s",
  authDomain: "in-out-comes.firebaseapp.com",
  projectId: "in-out-comes",
  storageBucket: "in-out-comes.appspot.com",
  messagingSenderId: "559923546810",
  appId: "1:559923546810:web:d7c5868abdea02156b9083",
  measurementId: "G-8D0YXK0641"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})


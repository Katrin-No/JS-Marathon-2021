import Vue from "vue";
import VueRouter from "vue-router";
import Weather from "../views/Weather.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/at-home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

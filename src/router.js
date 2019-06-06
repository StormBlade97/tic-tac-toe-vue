import Vue from "vue";
import Router from "vue-router";
import Arena from "./components/Main.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Arena
    }
  ]
});

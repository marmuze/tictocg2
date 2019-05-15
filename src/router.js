import Vue from "vue";
import Router from "vue-router";
import Welcom from "./views/Welcom.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Welcom
    },
    {
      path: "/game",
      name: "game",
      // route level code-splitting
      // this generates a separate chunk (game.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "game" */ "./views/TicTocGame.vue")
    },
    {
      path: "/reload",
      name: "reload",
      // route level code-splitting
      // this generates a separate chunk (reload.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "reload" */ "./views/ReloadGame.vue")
    }
  ]
});

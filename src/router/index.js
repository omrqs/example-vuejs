import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
});

function hasQueryParams(route) {
  return !!Object.keys(route.query).length;
}

router.beforeEach(async (to, from, next) => {
  // trigger global loader and checking (public and private) routes and check by firebase auth listener.
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch("app/setLoader");

    if (!hasQueryParams(to) && hasQueryParams(from)) {
      next({ name: to.name, query: from.query });
    } else {
      next();
    }
  } else {
    if (!hasQueryParams(to) && hasQueryParams(from)) {
      next({ name: to.name, query: from.query });
    } else {
      next();
    }
  }
});

export default router;

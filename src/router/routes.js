export default [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/Dashboard/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/state",
    name: "state",
    component: () => import("@/views/State/Index.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/state/:id",
    name: "stateDetails",
    component: () => import("@/views/State/Show.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/city",
    name: "city",
    component: () => import("@/views/City/Index.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/city/:id",
    name: "cityDetails",
    component: () => import("@/views/City/Show.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/Error.vue")
  },
  {
    path: "*",
    redirect: "/error"
  }
];

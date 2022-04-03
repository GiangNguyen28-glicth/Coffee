import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home-router",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/profile",
    name: "profile-router",
    component: () => import(/* webpackChunkName: "home" */ "../views/Profile.vue"),
  },
  {
    path: "/profile/edit",
    name: "edit-router",
    component: () => import(/* webpackChunkName: "home" */ "../views/Edit.vue"),
  },
  {
    path: "/place",
    name: "place-router",
    component: () => import(/* webpackChunkName: "home" */ "../views/Place.vue"),
  },
  {
    path: "/search",
    name: "search-router",
    component: () => import(/* webpackChunkName: "home" */ "../views/Search.vue"),
  },
  {
    path: "/review",
    name: "newreview-router",
    component: () => import(/* webpackChunkName: "home" */ "../views/NewReview.vue"),
  },
  {
    path: "/discount",
    name: "discount-router",
    component: () => import(/* webpackChunkName: "home" */ "../views/Discount.vue"),
  },
  {
    path: "/explore",
    name: "explore-router",
    component: () => import(/* webpackChunkName: "home" */ "../views/Explore.vue"),
  },
  {
    path: "/:pathMath(.*)*",
    component: () => import(/* webpackChunkName: "home" */ "../views/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

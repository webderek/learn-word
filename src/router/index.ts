import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ROUTES } from "@/constants/routes.constants";

declare module "vue-router" {
  interface RouteMeta {
    isAuth?: boolean;
    layout?: string;
    bgRightHeader?: boolean;
    bgAllHeader?: boolean;
    mobHeader?: boolean;
    headerIndex?: boolean;
    title?: string;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    ...ROUTES.HOME,
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    meta: {
      layout: "base",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: HomePage
    // },
    // {
    //   path: "/helloworld",
    //   name: 'Home',
    //   meta: { title: 'Home' } ,
    //   component: () => import("../views/HelloWorld.vue"),
    // },
    // {
    //   path: "/voting",
    //   name: 'Home',
    //   meta: { title: 'Home' } ,
    //   component: () => import("../views/voting.vue"),
    // },
    {
      path: "/login",
      name: 'Login',
      meta: { title: 'Home' } ,
      component: () => import("../views/login.vue"),
    },
  
  ];
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });

  
export default router;
  
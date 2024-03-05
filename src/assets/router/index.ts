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
    {
      path: "/voting",
      name: 'Home',
      meta: { title: 'Home' } ,
      component: () => import("../views/voting.vue"),
    },
    {
      path: "/login",
      name: 'Login',
      meta: { title: 'Home' } ,
      component: () => import("../views/login.vue"),
    },
    {
      path: "/userselect",
      name: 'User Selection',
      meta: { title: 'Home' } ,
      component: () => import("../views/userselect.vue"),
    },
    {
      path: "/ballotcode",
      name: 'Ballot Code',
      meta: { title: 'Home' } ,
      component: () => import("../views/ballotcode.vue"),
    },
  
  ];
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });

  
export default router;
  
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
      component: () => import("../views/voting.vue"  as any),
    },
    {
    path: "/print",
      name: 'print result',
      meta: { title: 'Print' } ,
      component: () => import("../views/printResult.vue"  as any),
    },
    // {
    //   path: "/",
    //   name: 'Login',
    //   meta: { title: 'Home' } ,
    //   component: () => import("../views/login.vue"  as any),
    // },
    {
      path: "/userselect",
      name: 'User Selection',
      meta: { title: 'Home' } ,
      component: () => import("../views/userselect.vue" as any) ,
    },
    {
      path: "/",
      name: 'Ballot Code',
      meta: { title: 'Home' } ,
      component: () => import("../views/ballotcode.vue"  as any),
    },
    {
      path: "/submit",
      name: 'Vote submit',
      meta: { title: 'Home' } ,
      component: () => import("../views/submit.vue"  as any),
    },
  ];
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });

  
export default router;
  
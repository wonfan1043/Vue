import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", //連結
      name: "Home", //網頁名稱
      component: HomeView, //要顯示的檔案，類似宣告變數一樣，以component宣告一個空間用來放Homeview檔案，最上放會有import
    },
    {
      path: "/VtextAndVmodel",
      name: "VtextAndVmodel",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/VtextAndVmodel.vue"), //另一個匯入方式，用箭頭函式接檔案位置
    },
    {
      path: "/guessNum",
      name: "GuessNum",
      component: () => import("../views/GuessNum.vue"),
    },
    {
      path: "/von",
      name: "Von",
      component: () => import("../views/Von.vue"),
    },
    {
      path: "/vfor",
      name: "Vfor",
      component: () => import("../views/Vfor.vue"),
    },
    {
      path: "/VshowAndVif",
      name: "VshowAndVif",
      component: () => import("../views/VshowAndVif.vue"),
    },
    {
      path: "/Vbind",
      name: "Vbind",
      component: () => import("../views/Vbind.vue"),
    },
    {
      path: "/Props",
      name: "Props",
      component: () => import("../views/Props.vue"),
    },
    {
      path: "/Emits",
      name: "Emits",
      component: () => import("../views/Emits.vue"),
    },
    {
      path: "/DataFlow",
      name: "DataFlow",
      component: () => import("../views/DataFlow.vue"),
    }
  ],
});

export default router;

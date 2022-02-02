import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./views/pages/Home.vue");
const AboutPage = () => import("./views/pages/About.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
  ],
});

import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./views/pages/Home.vue");
const CheckoutPage = () => import("./views/pages/Checkout.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/checkout", component: CheckoutPage },
  ],
});

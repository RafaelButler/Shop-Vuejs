import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { mask } from "@ionited/mask-vue";

createApp(App).use(router).directive("mask", mask).mount("#app");

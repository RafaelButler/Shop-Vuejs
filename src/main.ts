import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

//Plugin mask inputs
import { mask } from "@ionited/mask-vue";

// Plugin to make Toast
import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";
import "../src/styles/toast.scss";

createApp(App).use(router).use(Toast).directive("mask", mask).mount("#app");

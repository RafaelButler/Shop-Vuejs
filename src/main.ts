import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

//Plugin mask inputs
import { mask } from "@ionited/mask-vue";

// Plugin to make Toast
import Toast from "vue-toastification";
import "../src/styles/toast.scss";

//State management with Pinia https://pinia.vuejs.org/
import { createPinia } from "pinia";

createApp(App)
  .use(router)
  .use(Toast)
  .use(createPinia())
  .directive("mask", mask)
  .mount("#app");

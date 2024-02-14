import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createPinia } from "pinia";
import { resetStorePlugin } from "@/store/plugins/reset";

const pinia = createPinia();
pinia.use(resetStorePlugin);
createApp(App).use(pinia).use(router).mount("#app");

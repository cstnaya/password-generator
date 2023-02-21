import { createApp } from "vue";
import { createPinia } from "pinia";
import FontAwesomeIcon from "./fontawesome.js";
import App from "./App.vue";

import "@/assets/main.scss";

const app = createApp(App);

app.use(createPinia());

app.component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");

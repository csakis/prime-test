import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";
import Tooltip from 'primevue/tooltip';

const app = createApp(App);
app.use(PrimeVue);
app.directive('tooltip', Tooltip);
app.mount("#app");

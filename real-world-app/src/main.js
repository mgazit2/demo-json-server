import {createApp, reactive} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const GStore = reactive({flashMessage: ''}) // for flash message provisioning

createApp(App).use(store).use(router).provide('GStore', GStore).mount("#app");

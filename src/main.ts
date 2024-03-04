import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "./assets/router/index";
import axios from "axios";
import VueAxios from "vue-axios";
import '../node_modules/flowbite-vue/dist/index.css'
import './style.css'


const app = createApp(App)
.use(router)
.use(VueAxios, axios);


app.provide("axios", app.config.globalProperties.axios); // provider 'axios'

router.isReady().then(() => {
  app.mount("#app");
});

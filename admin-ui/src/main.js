import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "sweetalert2/dist/sweetalert2.min.css";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import VueSweetalert2 from "vue-sweetalert2";
import VueToastify from "vue-toastify";
import router from "./router";
import store from "./store";
import axios from "axios";
import service from "./services";

axios.defaults.baseURL = "http://localhost:5001/api/v1/";
Vue.use(VueSweetalert2);
Vue.use(Vuelidate);
Vue.use(VueToastify);

Vue.prototype.$service = service;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

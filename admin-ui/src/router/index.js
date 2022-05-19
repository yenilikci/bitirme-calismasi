import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Homepage,
        },
        {
            path: "/login",
            component: Login,
        }
    ],
});

export default router;

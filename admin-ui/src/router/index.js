import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../pages/Homepage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Homepage,
        }
    ],
});

export default router;

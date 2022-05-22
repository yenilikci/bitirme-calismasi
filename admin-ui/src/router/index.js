import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../pages/Homepage/Homepage")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../pages/Login/Login"),
        },
        {
            path: "/courses",
            name: "courses",
            component: () => import("../pages/Courses/Courses"),
        }
    ],
});

export default router;

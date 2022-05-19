import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    modules: {
        auth
    },
});

export default store;

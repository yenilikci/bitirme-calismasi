export default {
    namespaced: true,
    state: {
        user: {},
        token: null,
    },
    getters: {
        getUser: state => state.user,
        getToken: state => state.token,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {}
}

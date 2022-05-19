import axios from "axios";
import store from "../store";

export default {
    postJson(api, data) {
        const configuration = {
            headers: {
                'content-type': 'application/json',
            },
            timeout: 580000,
        }
        if (store.getters['auth/getToken'] !== undefined) configuration.headers.Authorization = `Bearer ${store.getters['auth/token']}`
        axios.post(api, data, configuration)
    }
}

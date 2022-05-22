import axios from "axios";

export default {
    getJson(api, data) {
        const configuration = {
            headers: {
                'content-type': 'application/json',
            },
            timeout: 580000,
        }
        return axios.get(api, data, configuration)
    },

    getJsonHeader(api, data) {
        const configuration = {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            timeout: 580000,
        }
        return axios.get(api, data, configuration)
    }
}

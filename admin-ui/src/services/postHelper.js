import axios from "axios";

export default {
    postJson(api, data) {
        const configuration = {
            headers: {
                'content-type': 'application/json',
            },
            timeout: 580000,
        }
        return axios.post(api, data, configuration)
    }
}

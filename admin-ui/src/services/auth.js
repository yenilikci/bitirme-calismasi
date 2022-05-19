import postHelper from "./postHelper";

export default {
    Login(email, password) {
        const data = {email, password};
        return postHelper.postJson("users/login", data);
    }
}

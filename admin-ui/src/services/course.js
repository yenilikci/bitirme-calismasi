import getHelper from "./getHelper";

export default {
    GetCourseList() {
        const data = {};
        return getHelper.getJsonHeader("courses", data);
    }
}

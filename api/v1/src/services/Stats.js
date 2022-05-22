const Stat = require("../models/Stats");
const Course = require("../models/Course");

const list = () => {
    return Stat.find({});
};

const incrementView = () => {
    return Stat.findOneAndUpdate({}, {$inc: {viewCount: 1}});
};

const getViewCount = () => {
    return Stat.findOne({}).then(stat => {
        return stat.viewCount;
    });
};

const getCourseCount = () => {
    return Course.count({});
};

const getAllCount = () => {
    const viewCount = getViewCount();
    const courseCount = getCourseCount();
    return Promise.all([viewCount, courseCount]).then(values => {
        return {
            viewCount: values[0],
            courseCount: values[1]
        };
    });
};

module.exports = {
    list,
    incrementView,
    getViewCount,
    getCourseCount,
    getAllCount
};

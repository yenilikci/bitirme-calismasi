const Stat = require("../models/Stats");
const Course = require("../models/Course");

const list = () => {
    return Stat.find({});
};

const incrementView = () => {
    return Stat.findOneAndUpdate({}, {$inc: {viewCount: 1}});
};

const viewCount = () => {
    return Stat.findOne({}).then(stat => {
        return stat.viewCount;
    });
};

const courseCount = () => {
    return Course.count({});
};

const allCount = () => {
    const _viewCount = viewCount();
    const _courseCount = courseCount();
    return Promise.all([_viewCount, _courseCount]).then(values => {
        return {
            viewCount: values[0],
            courseCount: values[1]
        };
    });
};

module.exports = {
    list,
    incrementView,
    viewCount,
    courseCount,
    allCount
};

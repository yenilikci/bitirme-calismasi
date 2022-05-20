const Course = require("../models/Courses");

const insert = (data) => {
    const course = new Course(data);
    return course.save();
};

const list = () => {
    return Course.find({});
};

const modify = (where, data) => {
    return Course.findOneAndUpdate(where, data, {new: true});
};

const remove = (id) => {
    return Course.findByIdAndDelete(id);
};

module.exports = {
    insert,
    list,
    modify,
    remove,
};

const Blog = require("../models/Blogs");

const insert = (data) => {
    const blog = new Blog(data);
    return blog.save();
};

const list = () => {
    return Blog.find({});
};

const modify = (where, data) => {
    return Blog.findOneAndUpdate(where, data, {new: true});
};

const remove = (id) => {
    return Blog.findByIdAndDelete(id);
};

module.exports = {
    insert,
    list,
    modify,
    remove,
};

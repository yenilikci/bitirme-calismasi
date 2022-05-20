const Mongoose = require("mongoose");

const CourseSchema = new Mongoose.Schema(
    {
        type: String,
        title: String,
        description: String,
        coverImage: String,
        author: String,
        slug: String,
        wsl: Array
    },
    {timestamps: true, versionKey: false}
);

module.exports = Mongoose.model("course", CourseSchema);

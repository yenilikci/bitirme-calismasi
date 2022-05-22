const Mongoose = require("mongoose");

const BlogSchema = new Mongoose.Schema(
    {
        type: String,
        title: String,
        description: String,
        coverImage: String,
        author: String,
        slug: String,
    },
    {timestamps: true, versionKey: false}
);

module.exports = Mongoose.model("blog", BlogSchema);

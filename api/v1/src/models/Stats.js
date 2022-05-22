const Mongoose = require("mongoose");

const StatSchema = new Mongoose.Schema(
    {
        viewCount: {
            type: Number,
            default: 0
        },
    },
    {timestamps: true, versionKey: false}
);

module.exports = Mongoose.model("stat", StatSchema);

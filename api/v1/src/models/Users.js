const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema(
    {
        full_name: String,
        password: String,
        email: String,
    },
    {timestamps: true, versionKey: false}
);

module.exports = Mongoose.model("user", UserSchema);

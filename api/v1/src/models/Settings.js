const Mongoose = require("mongoose");

const SettingSchema = new Mongoose.Schema(
    {
        headerText: {
            type: String,
            required: true
        },
        footerText: {
            type: String,
            required: true
        },
        footerExplanation: {
            type: String,
            required: true
        },
        footerGithub: {
            type: String,
        },
    },
    {timestamps: true, versionKey: false}
);

module.exports = Mongoose.model("setting", SettingSchema);

const Setting = require("../models/Settings");

const list = () => {
    return Setting.find({});
};

const modify = (where, data) => {
    return Setting.findOneAndUpdate(where, data, {new: true});
};

module.exports = {
    list,
    modify,
};

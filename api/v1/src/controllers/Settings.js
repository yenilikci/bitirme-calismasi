const {
    list,
    modify,
} = require("../services/Settings");
const httpStatus = require("http-status");
const uuid = require("uuid");
const eventEmitter = require("../scripts/events/eventEmitter");

const index = (req, res) => {
    list()
        .then((response) => {
            res.status(httpStatus.OK).send(response);
        })
        .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
};

const update = (req, res) => {
    modify({_id: req.body?._id}, req.body)
        .then((updatedSetting) => {
            res.status(httpStatus.OK).send(updatedSetting);
        })
        .catch(() => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Failed setting update"});
        });
};

module.exports = {
    index,
    update
};

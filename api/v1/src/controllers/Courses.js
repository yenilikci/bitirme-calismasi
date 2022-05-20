const {
    insert,
    list,
    modify,
    remove,
} = require("../services/Courses");
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

const create = (req, res) => {
    insert(req.body)
        .then((response) => {
            res.status(httpStatus.CREATED).send(response);
        })
        .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
};

const update = (req, res) => {
    modify({_id: req.course?._id}, req.body)
        .then((updatedCourse) => {
            res.status(httpStatus.OK).send(updatedCourse);
        })
        .catch(() => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Failed course update"});
        });
};

const deleteCourse = (req, res) => {
    if (!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({message: "Invalid id"});
    }

    remove(req.params?.id)
        .then((deletedCourse) => {
            if (!deletedCourse) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message: "Course not found",
                });
            }
            res.status(httpStatus.OK).send({
                message: "Course deleted successfully",
            });
        })
        .catch((e) => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Problem deleting Course"});
        });
};

module.exports = {
    create,
    index,
    update,
    deleteCourse,
};

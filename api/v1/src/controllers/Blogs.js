const {
    insert,
    list,
    modify,
    remove,
} = require("../services/Blogs");
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
    modify({_id: req.body?._id}, req.body)
        .then((updatedBlog) => {
            res.status(httpStatus.OK).send(updatedBlog);
        })
        .catch(() => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Failed blog update"});
        });
};

const deleteBlog = (req, res) => {
    if (!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({message: "Invalid id"});
    }

    remove(req.params?.id)
        .then((deletedBlog) => {
            if (!deletedBlog) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message: "Blog not found",
                });
            }
            res.status(httpStatus.OK).send({
                message: "Blog deleted successfully",
            });
        })
        .catch((e) => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Problem deleting Blog"});
        });
};

module.exports = {
    create,
    index,
    update,
    deleteBlog,
};

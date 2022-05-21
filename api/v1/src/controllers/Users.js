const {
    insert,
    list,
    loginUser,
    modify,
    remove,
} = require("../services/Users");
const httpStatus = require("http-status");
const {
    passwordToHash,
    generateAccessToken,
    generateRefreshToken,
} = require("../scripts/utils/helper");
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
    req.body.password = passwordToHash(req.body.password);
    insert(req.body)
        .then((response) => {
            res.status(httpStatus.CREATED).send(response);
        })
        .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
};

const login = (req, res) => {
    req.body.password = passwordToHash(req.body.password);
    loginUser(req.body)
        .then((user) => {
            if (!user) {
                res.status(httpStatus.NOT_FOUND_ERR).send({message: "User not found"});
            }

            user = {
                ...user.toObject(),
                tokens: {
                    access_token: generateAccessToken(user),
                    refresh_token: generateRefreshToken(user),
                },
            };
            delete user.password;
            res.status(httpStatus.OK).send(user);
        })
        .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
};

const resetPassword = (req, res) => {
    const newPassword = uuid.v4()?.split("-")[0] || `usr-${new Date().getTime()}`;
    modify({email: req.body.email}, {password: passwordToHash(newPassword)})
        .then((updatedUser) => {
            if (!updatedUser) {
                res.status(httpStatus.NOT_FOUND).send({message: "User not found"});
            }

            eventEmitter.emit("send_email", {
                to: updatedUser.email,
                subject: "Şifre Sıfırlama",
                html:
                    "Talebiniz üzerine şifre sıfırlama işleminiz gerçekleşti. Yeni şifreniz: " +
                    newPassword,
            });

            res.status(httpStatus.OK).send({
                message:
                    "Şifre sıfırlama işlemi için kayıtlı mail adresinize gerekli bilgileri gönderdik.",
            });
        })
        .catch(() => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Failed password reset"});
        });
};

const update = (req, res) => {
    modify({_id: req.user?._id}, req.body)
        .then((updatedUser) => {
            res.status(httpStatus.OK).send(updatedUser);
        })
        .catch(() => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Failed password reset"});
        });
};

const changePassword = (req, res) => {
    req.body.password = passwordToHash(req.body.password);
    // ... password compare
    modify({_id: req.user?._id}, req.body)
        .then((updatedUser) => {
            res.status(httpStatus.OK).send(updatedUser);
        })
        .catch(() => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Failed password reset"});
        });
};

const deleteUser = (req, res) => {
    if (!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({message: "Invalid id"});
    }

    remove(req.params?.id)
        .then((deletedUser) => {
            if (!deletedUser) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message: "User not found",
                });
            }
            res.status(httpStatus.OK).send({
                message: "User deleted successfully",
            });
        })
        .catch((e) => {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({error: "Problem deleting User"});
        });
};

module.exports = {
    create,
    index,
    login,
    resetPassword,
    update,
    deleteUser,
    changePassword,
};

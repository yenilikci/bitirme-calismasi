// validations
// validata middleware
const express = require("express");
const {
    create,
    index,
    login,
    resetPassword,
    update,
    deleteUser,
    changePassword,
} = require("../controllers/Users");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const schemas = require("../validations/Users");
const router = express.Router();

router.route("/").get(index).post(validate(schemas.createValidation), create);

router.route("/login").post(validate(schemas.loginValidation), login);

router
    .route("/reset-password")
    .post(validate(schemas.resetPasswordValidation), resetPassword);

router
    .route("/")
    .patch(authenticate, validate(schemas.updateValidation), update);

router.route("/:id").delete(authenticate, deleteUser);

router
    .route("/change-password")
    .post(
        authenticate,
        validate(schemas.changePasswordValidation),
        changePassword
    );

module.exports = router;

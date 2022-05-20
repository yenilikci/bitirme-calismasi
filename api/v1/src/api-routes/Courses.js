const express = require("express");
const {
    create,
    index,
    update,
    deleteCourse
} = require("../controllers/Courses");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const schemas = require("../validations/Courses");
const router = express.Router();

router.route("/").get(index).post(authenticate, validate(schemas.createValidation), create);

router
    .route("/")
    .patch(authenticate, validate(schemas.updateValidation), update);

router.route("/:id").delete(authenticate, deleteCourse);

module.exports = router;

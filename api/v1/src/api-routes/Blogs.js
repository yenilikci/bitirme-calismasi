const express = require("express");
const {
    create,
    index,
    update,
    deleteBlog
} = require("../controllers/Blogs");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.route("/").get(index).post(authenticate, create);

router
    .route("/")
    .patch(authenticate, update);

router.route("/:id").delete(authenticate, deleteBlog);

module.exports = router;

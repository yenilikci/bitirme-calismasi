const express = require("express");
const {
    index,
    update,
} = require("../controllers/Settings");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.route("/").get(authenticate, index);
router
    .route("/")
    .patch(authenticate, update);

module.exports = router;

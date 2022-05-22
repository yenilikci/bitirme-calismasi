const express = require("express");
const {
    index,
    setIncrementView,
    getViewCount,
    getCourseCount,
    getAllCount
} = require("../controllers/Stats");
const router = express.Router();

router.route("/").get(index);
router.route("/setIncrementView").get(setIncrementView);
router.route("/getViewCount").get(getViewCount);
router.route("/getCourseCount").get(getCourseCount);
router.route("/getAllCount").get(getAllCount);

module.exports = router;

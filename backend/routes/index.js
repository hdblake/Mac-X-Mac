const router = require("express").Router();

router.use("/user", require("./users"));
router.use("/orders", require("./orders"));

module.exports = router;

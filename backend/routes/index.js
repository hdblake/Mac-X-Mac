const routes = require("express").Router();

routes.use("/user", require("./users"));
routes.use("/orders", require("./orders"));

module.exports = routes;

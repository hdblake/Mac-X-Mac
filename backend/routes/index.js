const routes = require("express").Router();
const controller = require("../controllers");

routes.get("/", controller.routesController);
routes.use("/user", require("./users"));
routes.use("/orders", require("./orders"));

module.exports = routes;

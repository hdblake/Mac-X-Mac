const routes = require("express").Router();
const controller = require("../controllers");
const usersController = require("../controllers/users");

routes.get("/", controller.routesController);
routes.use("/user", require("./users"));

module.exports = routes;

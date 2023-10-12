const routes = require("express").Router();

const controller = require("../controllers");

routes.get("/", controller.routesController);

module.exports = routes;

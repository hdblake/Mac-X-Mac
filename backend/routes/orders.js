const router = require("express").Router();
const userController = require("../controllers/users");
const orderController = require("../controllers/orders");

router.post(
	"/checkout",
	userController.verifyToken,
	orderController.createOrder
);

module.exports = router;

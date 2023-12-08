const router = require("express").Router();
const userController = require("../controllers/users");
const orderController = require("../controllers/orders");

router.post(
	"/checkout",
	userController.verifyToken,
	orderController.createOrder
);
router.get("/history", userController.verifyToken, orderController.getOrders);
router.post("/process-payment", orderController.makePayment);

module.exports = router;

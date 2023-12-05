const router = require("express").Router();
const orderController = require("../controllers/orders");

router.post("/checkout", orderController.createOrder);

module.exports = router;

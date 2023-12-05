const router = require("express").Router();
const userController = require("../controllers/users");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/account", userController.verifyToken, (req, res) => {
	res.json({
		message: "This is a protected route",
		user: req.decoded,
	});
});
router.get("/history/:userId", userController.getOrders);

module.exports = router;

const router = require("express").Router();
const userController = require("../controllers/users");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/auth", userController.verifyToken, (req, res) => {
	res.json({
		message: "You have access to this protected route",
		user: req.user,
	});
});

module.exports = router;

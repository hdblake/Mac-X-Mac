const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const registerUser = async (req, res) => {
	try {
		const {firstName, lastName, email, password} = req.body;
		const existingEmail = await User.findOne({email});
		if (existingEmail) {
			return res.status(400).json({message: "Email already in use"});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		});
		await user.save();
		res.status(201).json({message: "User created successfully"});
	} catch (error) {
		res.status(500).json({error: "Couldn't register user at this time"});
	}
};

const loginUser = async (req, res) => {
	try {
		const {email, password} = req.body;
		const user = await User.findOne({email});
		const userId = user._id;

		if (!user) {
			return res
				.status(404)
				.json({error: "Email not registered with an account"});
		}

		const validPassword = await bcrypt.compare(password, user.password);

		if (!validPassword) {
			return res.status(401).json({error: "Invalid password"});
		}

		const token = jwt.sign({user: userId}, process.env.JWT_SECRET);
		res.json({token, userId: userId, firstName: user.firstName});
	} catch (error) {
		res.status(500).send({error: "Couldn't login with account at this time"});
	}
};

const verifyToken = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1]; // Extract token from header
	if (!token) {
		return res.status(401).json({message: "Auth failed, no token"});
	}

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		req.user = {userId: decodedToken.userId};
		next();
	} catch (error) {
		res.status(401).json({message: "Auth failed"});
	}
};

module.exports = {registerUser, loginUser, verifyToken};

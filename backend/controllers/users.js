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
			return res.status(400).json({msg: "Email already in use"});
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
	} catch (err) {
		res.status(500).json({error: "Something went wrong"});
	}
};

const loginUser = async (req, res) => {
	try {
		const {email, password} = req.body;
		const user = await User.findOne({email});

		if (!user) {
			return res.status(404).send({error: "User not found"});
		}

		const validPassword = await bcrypt.compare(password, user.password);

		if (!validPassword) {
			return res.status(401).send({error: "Invalid password"});
		}

		const token = jwt.sign({user: user._id}, process.env.JWT_SECRET);
		res.json({token, firstName: user.firstName});
	} catch (err) {
		res.status(500).send({error: "Something went wrong"});
	}
};

const verifyToken = (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(403).json({message: "Token not provided"});
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded, name) => {
		if (err) {
			return res.status(401).json({message: "Failed to authenticate token"});
		}

		req.decoded = decoded;
		name = User.firstName;
		next();
	});
};

module.exports = {registerUser, loginUser, verifyToken};

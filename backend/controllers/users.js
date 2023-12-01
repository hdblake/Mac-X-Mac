const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
	try {
		const {firstName, lastName, email, password} = req.body;
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

		const token = jwt.sign({userId: user._id}, "your_secret_key");
		res.send({token});
	} catch (err) {
		res.status(500).send({error: "Something went wrong"});
	}
};

module.exports = {registerUser, loginUser};

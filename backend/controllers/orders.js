const Order = require("../models/orderModel");

const createOrder = async (req, res, next) => {
	try {
		const {userId, items, totalPrice, date} = req.body;

		const newOrder = new Order({
			user: userId,
			items,
			totalPrice,
			date,
		});

		const saveOrder = await newOrder.save();
		res.json(saveOrder);
	} catch (err) {
		res.status(500).json({message: err.message});
	}
};

module.exports = {createOrder};

const Order = require("../models/orderModel");
const ObjectId = require("mongodb").ObjectId;

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
	} catch (error) {
		res.status(500).json({message: "Failed to submit order"});
	}
};

const getOrders = async (req, res, next) => {
	try {
		const userId = new ObjectId(req.params.id);
		const orders = await Order.find({_id: userId});
		res.json(orders);
	} catch (error) {
		res
			.status(500)
			.json({message: "Could not fetch order history at this time"});
	}
};

module.exports = {createOrder, getOrders};

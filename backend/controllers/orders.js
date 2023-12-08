const Order = require("../models/orderModel");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET_KEY);

const createOrder = async (req, res, next) => {
	try {
		const {userId, items, totalPrice, date, customerInfo} = req.body;

		const newOrder = new Order({
			user: userId,
			items,
			totalPrice,
			date,
			customerInfo,
		});

		await newOrder.save();

		const paymentIntent = await stripe.paymentIntents.create({
			amount: totalPrice * 100,
			currency: "usd",
			description: "Order payment",
		});
		res.status(200).json({clientSecret: paymentIntent});
	} catch (error) {
		res.status(500).json({message: "Failed to submit order"});
	}
};

const getOrders = async (req, res, next) => {
	try {
		const userId = req.headers.userid;
		const orders = await Order.find({user: userId});

		if (!orders || orders.length === 0) {
			return res
				.status(404)
				.json({message: `No orders found ${req.headers.userid}`});
		}

		res.json(orders);
	} catch (error) {
		res.status(500).json({message: `Test user ${req.user.userId}`});
	}
};

const makePayment = async (req, res, next) => {
	try {
		const {paymentMethod, clientSecret, returnURL} = req.body;

		const paymentIntent = await stripe.paymentIntents.confirm(clientSecret, {
			payment_method: paymentMethod,
			return_url: returnURL,
		});

		if (paymentIntent) {
			res.status(200).json({message: "Payment succeeded"});
		} else {
			res.status(500).json({error: "Payment failed"});
		}
	} catch (error) {
		res.status(500).json({error: error.message});
	}
};

module.exports = {createOrder, getOrders, makePayment};

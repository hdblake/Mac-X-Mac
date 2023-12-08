const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	items: {type: Array},
	totalPrice: {type: Number},
	date: {type: Date},
	customerInfo: {type: Object},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

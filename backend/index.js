const express = require("express");
const app = express();
const port = process.env.PORT || 3080;
const mongoDb = require("./db/connect");
// const bodyParser = require("body-parser");
const cors = require("cors");

app
	.use(express.json())
	.use((req, res, next) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Z-Key"
		);
		res.setHeader("Content-Type", "application/json");
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, PUT, POST, DELETE, OPTIONS"
		);
		next();
	})
	.use("/", require("./routes"));

mongoDb.initDb((err, mongoDb) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(port, () => {
			console.log(`Connected to Db. Listening on port: ${port}`);
		});
	}
});

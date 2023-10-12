const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing req body
app.use(express.json());

// Middleware for handling cors policy
app.use(cors());

app.use("/", require("./routes"));

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});

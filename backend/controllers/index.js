const routesController = (req, res, next) => {
	return res.status(234).send("Welcome!");
};

module.exports = {routesController};

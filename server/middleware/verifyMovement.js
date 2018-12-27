const Game = require("../models/game");

const verifyMovement = (req, res, next) => {
	const { id } = req.params;
	Game.findById(id).exec((err, gameDB) => {
		if (
			gameDB.playerMovement1.includes(Number(req.body.move)) ||
			gameDB.playerMovement2.includes(Number(req.body.move))
		) {
			return res.status(400).json({
				ok: false,
				message: "movimiento no permitido"
			});
		}

		return next();
	});
};

module.exports = {
	verifyMovement
};

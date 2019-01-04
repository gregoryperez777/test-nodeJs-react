const Game = require('../models/game');

const verifyMovement = (req, res, next) => {
	const { id } = req.params;
	Game.findById(id).exec((err, gameDB) => {
		if (!gameDB.finish) {
			if (
				gameDB.playerMovement1.includes(Number(req.body.move)) ||
				gameDB.playerMovement2.includes(Number(req.body.move))
			) {
				return res.status(400).json({
					ok: false,
					message: 'movimiento no permitido',
				});
			}

			return next();
		}

		return res.status(500).json({
			ok: false,
			message: 'Partida Finalizada',
		});
	});
};

module.exports = {
	verifyMovement,
};

const express = require("express");
const _ = require("underscore");
const Game = require("../models/game");
const verifyWinner = require("../commonFunction/move");
const { verifyMovement } = require("../middleware/verifyMovement");

const app = express();

app.post("/game", (req, res) => {
	const game = new Game();
	game.save((err, gameDB) => {
		if (err) {
			return res.status(500).json({
				ok: false,
				err
			});
		}

		return res.status(200).json({
			ok: true,
			gameDB
		});
	});
});

app.get("/game/:id", (req, res) => {
	const { id } = req.params;

	Game.findById(id).exec((err, gameDB) => {
		if (err) {
			return res.status(500).json({
				ok: false,
				err
			});
		}

		return res.status(200).json({
			ok: true,
			gameDB
		});
	});
});

app.put("/game/:id", verifyMovement, (req, res) => {
	const { id } = req.params;
	const body = _.pick(req.body, ["turn", "move"]);
	let winner = false;

	const objectUpdate =
		Number(body.turn) === 1
			? { $addToSet: { playerMovement1: body.move }, turn: 2 }
			: { $addToSet: { playerMovement2: body.move }, turn: 1 };

	Game.findByIdAndUpdate(
		id,
		objectUpdate,
		{ safe: true, upsert: true, new: true },
		(err, gameDB) => {
			if (err) {
				return res.status(500).json({
					ok: false,
					err
				});
			}

			const movement =
				Number(body.turn) === 1 ? gameDB.playerMovement1 : gameDB.playerMovement2;

			const countMovement = gameDB.playerMovement1.length + gameDB.playerMovement2.length;

			if (movement.length > 2) {
				winner = verifyWinner(body.turn, movement, countMovement);
			}

			return res.status(200).json({
				ok: true,
				gameDB,
				winner
			});
		}
	);
});

module.exports = app;

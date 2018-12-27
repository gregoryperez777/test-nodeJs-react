const express = require('express');
const _ = require('underscore');
const Game = require('../models/game');

const app = express();

app.post('/game', (req, res) => {
	const game = new Game();
	game.save((err, gameDB) => {
		if (err) {
			return res.status(500).json({
				ok: false,
				err,
			});
		}

		return res.status(200).json({
			ok: true,
			gameDB,
		});
	});
});

app.get('/game/:id', (req, res) => {
	const { id } = req.params;

	Game.findById(id).exec((err, gameDB) => {
		if (err) {
			return res.status(500).json({
				ok: false,
				err,
			});
		}

		return res.status(200).json({
			ok: true,
			gameDB,
		});
	});
});

app.put('/game/:id', (req, res) => {
	const { id } = req.params;
	const body = _.pick(req.body, ['turn', 'move']);

	const objectUpdate =		Number(body.turn) === 1
		? { $addToSet: { playerMovement1: body.move }, turn: 2 }
		: { $addToSet: { playerMovement2: body.move }, turn: 1 };

	Game.findById(id).exec((err, gameDB) => {
		if (
			gameDB.playerMovement1.includes(Number(body.move))
			|| gameDB.playerMovement2.includes(Number(body.move))
		) {
			res.status(400).json({
				ok: false,
				message: 'movimiento no permitido',
			});
		}

		Game.findByIdAndUpdate(
			id,
			objectUpdate,
			{ safe: true, upsert: true, new: true },
			(error, gameDataBase) => {
				if (err) {
					res.status(500).json({
						ok: false,
						error,
					});
				}

				res.status(200).json({
					ok: true,
					gameDataBase,
				});
			},
		);
	});
});

module.exports = app;

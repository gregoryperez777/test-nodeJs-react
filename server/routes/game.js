const express = require('express');
const _ = require('underscore');
const Game = require('../models/game');
const Record = require('../models/record');
const verifyWinner = require('../commonFunction/move');
const { verifyMovement } = require('../middleware/verifyMovement');
const verifyToken = require('../middleware/authentication');

const app = express();

app.post('/game', verifyToken, (req, res) => {
	const game = new Game({
		user: req.user,
	});

	game.save((err, gameDB) => {
		if (err) {
			return res.status(500).json({
				ok: false,
				err,
			});
		}

		Record.findOne({ user: req.user._id }).exec((error, recordUserDB) => {
			if (error) {
				res.status(500).json({
					ok: false,
					error,
				});
			}

			const newRecordUser = recordUserDB;
			newRecordUser.gameInit += 1;
			newRecordUser.save();
		});

		return res.status(200).json({
			ok: true,
			gameDB,
		});
	});
});

app.get('/game/:id', verifyToken, (req, res) => {
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

app.get('/games', verifyToken, (req, res) => {
	Game.find({ user: req.user._id }).exec((err, gameDB) => {
		res.status(200).json({
			ok: true,
			gameDB,
		});
	});
});

app.put('/game/:id', [verifyToken, verifyMovement], (req, res) => {
	const { id } = req.params;
	const body = _.pick(req.body, ['turn', 'move']);
	let result = {
		isWinner: false,
		winner: -1,
		winningRoute: [],
	};

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
					err,
				});
			}

			const newGame = gameDB;

			const movement =
				Number(body.turn) === 1 ? newGame.playerMovement1 : newGame.playerMovement2;

			const countMovement = newGame.playerMovement1.length + newGame.playerMovement2.length;

			if (movement.length > 2) {
				result = verifyWinner(body.turn, movement, countMovement);
				console.log('result', result);
			}

			if (result.isWinner || result.isWinner === 'DRAW') {
				newGame.finish = true;
				newGame.winner = result.winner;
				newGame.save();

				Record.findOne({ user: req.user._id }).exec((error, recordUserDB) => {
					if (error) {
						res.status(400).json({
							ok: false,
							error,
						});
					}

					const newRecordUser = recordUserDB;

					if (newGame.winner === 0) {
						newRecordUser.gameDraw += 1;
					}

					if (newGame.winner === 1) {
						newRecordUser.gameWin += 1;
					}

					if (newGame.winner === 2) {
						newRecordUser.gameLoser += 1;
					}

					newRecordUser.save();
				});
			}

			return res.status(200).json({
				ok: true,
				newGame,
				winningRoute: result.winningRoute,
			});
		}
	);
});

module.exports = app;

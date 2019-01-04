const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = Schema({
	finish: {
		type: Boolean,
		default: false,
	},
	creationDate: {
		type: Date,
		default: Date.now,
	},
	turn: {
		type: Number,
		default: 1,
	},
	playerMovement1: {
		type: [Number],
		default: [],
	},
	playerMovement2: {
		type: [Number],
		default: [],
	},
	winner: {
		type: Number,
		default: -1,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Game', gameSchema);

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const gameSchema = Schema({
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
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

gameSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('Game', gameSchema);

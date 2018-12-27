const mongoose = require('mongoose');

const { Schema } = mongoose;

const recordSchema = new Schema({
	gameInit: {
		type: Number,
		default: 0,
	},
	gameWin: {
		type: Number,
		default: 0,
	},
	gameDraw: {
		type: Number,
		default: 0,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Record', recordSchema);

const mongoose = require('mongoose');

const { Schema } = mongoose;

const recordSchema = new Schema({
	gameInit: {
		type: Number,
	},
	gameWin: {
		type: Number,
	},
	gameDraw: {
		type: Number,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Record', recordSchema);

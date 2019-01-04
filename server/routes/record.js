const express = require('express');
const Record = require('../models/record');
const verifyToken = require('../middleware/authentication');

const app = express();

app.get('/record/:id', verifyToken, (req, res) => {
	const { id } = req.params;

	Record.findOne({ user: id }).exec((err, recordDB) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err,
			});
		}

		return res.status(200).json({
			ok: false,
			recordDB,
		});
	});
});

module.exports = app;

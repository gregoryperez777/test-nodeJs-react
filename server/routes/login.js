const express = require('express');

const app = express();

app.post('/login', (req, res) => {
	const { body } = req;
	res.status(200).json({
		ok: 200,
		body,
	});
});

module.exports = app;

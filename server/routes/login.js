const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');

const app = express();

app.post('/login', (req, res) => {
	const { body } = req;

	User.findOne({ email: body.email }, (err, userDB) => {
		if (err) {
			return res.status(500).json({
				ok: false,
				err,
			});
		}

		if (!userDB) {
			return res.status(400).json({
				ok: false,
				message: 'Usuario o constraseña incorrecto',
			});
		}

		if (!bcrypt.compareSync(body.password, userDB.password)) {
			return res.status(400).json({
				ok: false,
				err: {
					message: 'Usuario o contraseña incorrecto',
				},
			});
		}

		const token = jwt.sign(
			{
				user: userDB,
			},
			process.env.SEED,
			{ expiresIn: process.env.CADUCIDAD_TOKEN },
		);

		return res.status(200).json({
			ok: true,
			userDB,
			token,
		});
	});
});

module.exports = app;

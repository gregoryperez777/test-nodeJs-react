const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');

const app = express();

app.post('/user', (req, res) => {
	const data = req.body;
	const user = new User({
		name: data.name,
		lastname: data.lastname,
		email: data.email,
		password: bcrypt.hashSync(data.password, 10),
	});

	user.save((err, userBD) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err,
			});
		}

		return res.status(200).json({
			ok: true,
			userBD,
		});
	});
});

app.get('/user/:id', (req, res) => {
	const { id } = req.params;

	User.findOne({ email: id }, 'name email').exec((err, usuarioBD) => {
		if (err) {
			res.status(400).json({
				ok: false,
				err,
			});
		}

		res.status(200).json({
			ok: true,
			usuarioBD,
		});
	});
});

module.exports = app;

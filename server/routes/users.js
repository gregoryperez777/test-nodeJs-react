const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const User = require('../models/users');
const Record = require('../models/record');

const app = express();

app.post('/user', (req, res) => {
	const data = req.body;
	const user = new User({
		name: data.name,
		lastname: data.lastname,
		email: data.email,
		password: bcrypt.hashSync(data.password, 10),
	});

	user.save((err, userDB) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err,
			});
		}

		const record = new Record({
			user: userDB,
		});

		record.save();

		return res.status(200).json({
			ok: true,
			userDB,
		});
	});
});

app.get('/user/:id', (req, res) => {
	const { id } = req.params;

	User.findById(id).exec((err, userDB) => {
		if (err) {
			res.status(400).json({
				ok: false,
				err,
			});
		}

		res.status(200).json({
			ok: true,
			userDB,
		});
	});
});

app.put('/user/:id', (req, res) => {
	const { id } = req.params;
	const body = _.pick(req.body, ['name', 'lastname', 'email', 'img']);

	User.findByIdAndUpdate(id, body, { new: true }, (err, userDB) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err,
			});
		}

		return res.status(200).json({
			ok: true,
			userDB,
		});
	});
});

app.delete('/user/:id', (req, res) => {
	const { id } = req.params;

	User.findByIdAndRemove(id, (err, userDB) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err,
			});
		}

		if (!userDB) {
			return res.status(400).json({
				ok: false,
				message: 'usuario no encontrado',
			});
		}

		return res.json({
			ok: true,
			msj: 'Usuario eliminado con exito',
		});
	});
});

module.exports = app;

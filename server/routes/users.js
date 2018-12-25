const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
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

	User.findById(id).exec((err, usuarioBD) => {
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

app.put('/user/:id', (req, res) => {
	const { id } = req.params;
	const body = _.pick(req.body, ['name', 'lastname', 'email', 'img']);

	User.findByIdAndUpdate(id, body, { new: true }, (err, userBD) => {
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

app.delete('/user/:id', (req, res) => {
	const { id } = req.params;

	User.findByIdAndRemove(id, (err, userBD) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err,
			});
		}

		if (!userBD) {
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

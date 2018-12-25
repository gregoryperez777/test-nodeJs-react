const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: [true, 'El nombre es necesario'],
	},
	lastname: {
		type: String,
		required: [true, 'El apellido es necesario'],
	},
	email: {
		type: String,
		unique: true,
		required: [true, 'El correo es necesario'],
	},
	password: {
		type: String,
		required: [true, 'La contraseña es obligatoria'],
	},
	img: {
		type: String,
		required: false,
	},
	google: {
		type: Boolean,
		default: false,
	},
});

userSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();
	delete userObject.password;
	return userObject;
};

userSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('User', userSchema);

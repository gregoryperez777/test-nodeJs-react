require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// parse application/json
// Este middleware convierte la data enviada con stringify a un json
// y es usado si la data es enviada con application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// EndPoint
app.use(require('./routes/index'));

// habilitar carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

mongoose.connect(
	process.env.UrlBD,
	{ useNewUrlParser: true },
	(err, res) => {
		if (err) throw err;
		// console.log('BD online', res.db.s.databaseName);
		return res;
	}
);

app.listen(process.env.PORT, () => {
	// console.log(`Escuchando por el puerto ${process.env.PORT}`);
});

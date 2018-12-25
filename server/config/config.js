// ============================
// Puerto
// ============================

process.env.PORT = process.env.PORT || 3001;

// ============================
// Ambiente
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
// Time expedition
// ============================

process.env.CADUCIDAD_TOKEN = '48h'; // asi -> tambien se puede 60 * 60 * 24 * 30;

// ============================
// Question secret
// ============================

process.env.SEED = process.env.SEED || 'secret';

// ============================
// Base de Datos
// ============================

let urlBD;

if (process.env.NODE_ENV === 'dev') {
	urlBD = 'mongodb://localhost:27017/tic-tac-toe';
} else {
	urlBD = process.env.MONGO_URI;
}

process.env.UrlBD = urlBD;

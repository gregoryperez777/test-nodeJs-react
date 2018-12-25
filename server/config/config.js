// ============================
// Puerto
// ============================

process.env.PORT = process.env.PORT || 3001;

// ============================
// Ambiente
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

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

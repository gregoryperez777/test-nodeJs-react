const express = require('express');

const app = express();

/** *************
    EndPoint
*************** */

app.use(require('./users'));
app.use(require('./login'));
app.use(require('./record'));
app.use(require('./game'));

// comentario

module.exports = app;

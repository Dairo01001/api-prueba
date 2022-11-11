const express = require('express');
const { port } = require('./config');

const app = express();
app.set('port', port);

app.use('/', require('./router'));

module.exports = app;

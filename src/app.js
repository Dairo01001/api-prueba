const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('express-async-errors');
const { PORT } = require('./config');
const { unknownEndpoint, errorHandler } = require('./utils/middlewares');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.set('port', PORT);

app.use('/', require('./router'));

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;

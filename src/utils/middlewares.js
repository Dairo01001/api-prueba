const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config');

const unknownEndpoint = (req, res) => {
  res.status(404).json({ msg: 'Unknow end point' });
};

const errorHandler = (error, req, res, next) => {
  if (error.name === 'CastError') {
    res.status(400).send({ msg: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    res.status(400).json({ msg: error.message });
  } else if (error.name === 'JsonWebTokenError') {
    res.status(401).json({ msg: 'Tokken missing or invalid' });
  } else if (error.name === 'Created Error') {
    res.status(404).json({ msg: 'Already exists' });
  }
  next(error);
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    res.status(403).json({ msg: 'Auth Error' });
  } else {
    jwt.verify(token, JWT_KEY, (err, id) => {
      if (err) {
        res.status(404).json({ msg: 'Token Error' });
      } else {
        req.id = id;
        next();
      }
    });
  }
};

module.exports = {
  unknownEndpoint,
  errorHandler,
  verifyToken,
};

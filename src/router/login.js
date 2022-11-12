const loginRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config');
const { findByEmail, createUser } = require('../controllers/user');
const { decrypt } = require('../utils/encrypt');

loginRouter.post('/singup', async (req, res) => {
  const { email, password } = req.body;

  const user = await findByEmail(email);

  if (!user) {
    const newUser = await createUser({ email, password });
    jwt.sign(newUser.id, JWT_KEY, (err, token) => {
      if (err) {
        res.status(400).json({ msg: 'Error' });
      } else {
        res.json({ ...newUser.dataValues, token });
      }
    });
  } else {
    res.status(400).json({ msg: 'The account already exists' });
  }
});

loginRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await findByEmail(email);

  if (!user) {
    if (password === decrypt(user.password)) {
      jwt.sign(user.id, JWT_KEY, (err, token) => {
        if (err) {
          res.status(400).json({ msg: 'Error' });
        } else {
          res.json({ ...user, token });
        }
      });
    } else {
      res.status(400).json({ msg: 'password incorrect' });
    }
  } else {
    res.status(400).json({ msg: 'user does not exist' });
  }
});

loginRouter.put('/logout', async (req, res) => {
  const authHeader = req.headers.authorization;
  jwt.sign(authHeader, '', { expiresIn: 1 }, (logout) => {
    if (logout) {
      res.send({ msg: 'Has sido desconectado' });
    } else {
      res.send({ msg: 'Error' });
    }
  });
});

module.exports = loginRouter;

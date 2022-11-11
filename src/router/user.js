const userRouter = require('express').Router();

const { getUser } = require('../controllers/user');

userRouter.get('/', getUser);

module.exports = userRouter;

const userRouter = require('express').Router();

const { getUser } = require('../controllers/user');
const { verifyToken } = require('../utils/middlewares');

userRouter.get('/', verifyToken, async (req, res) => {
  const { id } = req;
  const user = await getUser(id);
  if (!user) {
    res.status(404).json({ msg: 'User does not exist' });
  } else {
    res.json(user);
  }
});

module.exports = userRouter;

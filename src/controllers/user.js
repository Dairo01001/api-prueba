const { User } = require('../database').models;

module.exports = {
  getUser: async (req, res) => {
    res.json(await User.findAll());
  },
};

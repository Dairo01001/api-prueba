const { User } = require('../database').models;

module.exports = {
  getUsers: async () => User.findAll(),
  getUser: async (id) => User.findByPk(id),
  createUser: async (user) => User.create(user),
  findByEmail: async (email) => User.findOne({ where: { email } }),
};

const product = require('./product');
const user = require('./user');

module.exports = (sequelize) => {
  user(sequelize);
  product(sequelize);
};

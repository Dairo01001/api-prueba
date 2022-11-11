const { Sequelize } = require('sequelize');
const models = require('./models');
const {
  DATABASE, USER, PASSWORD, HOST,
} = require('./config');

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
});

models(sequelize);

console.log(sequelize.models);

module.exports = sequelize;

const { Sequelize } = require('sequelize');
const models = require('./models');
const {
  DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST,
} = require('./config');

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: 'mysql',
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully');
}).catch((error) => {
  console.error('Unable to connect to the data base: ', error);
});

models(sequelize);

module.exports = sequelize;

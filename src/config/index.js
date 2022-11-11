require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3001,
  DATABASE: process.env.DATABASE || 'prueba',
  USER: process.env.USER_NAME || 'root',
  PASSWORD: process.env.PASSWORD || '1234',
  HOST: process.env.HOST || 'localhost',
};

require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  DATABASE_NAME: process.env.DATABASE_NAME || 'prueba',
  DATABASE_USER: process.env.DATABASE_USER || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '1234',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  JWT_KEY: process.env.JWT_KEY || 'asdfg',
  PASSWORD_KEY: process.env.PASSWORD_KEY || 'qwer',
};

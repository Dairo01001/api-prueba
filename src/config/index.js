require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  DATABASE_NAME: process.env.DATABASE_NAME || 'prueba',
  DATABASE_USER: process.env.DATABASE_USER || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '1234',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  SECRET_KEY: process.env.SECRET_KEY || 'asdfg',
};

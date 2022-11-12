const cryptoJs = require('crypto-js');
const { PASSWORD_KEY } = require('../config');

const encrypt = (data) => cryptoJs.AES.encrypt(data, PASSWORD_KEY).toString();
const decrypt = (data) => cryptoJs.AES.decrypt(data, PASSWORD_KEY).toString(cryptoJs.enc.Utf8);

module.exports = {
  encrypt,
  decrypt,
};

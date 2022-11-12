const { Model, DataTypes } = require('sequelize');
const { encrypt } = require('../utils/encrypt');

module.exports = (sequelize) => {
  class User extends Model {}
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('password', encrypt(value));
      },
    },
  }, { sequelize, modelName: 'User', timestamps: false });
};

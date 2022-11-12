const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Product extends Model {}
  Product.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discountPercentage: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { sequelize, modelName: 'Product', timestamps: false });
};

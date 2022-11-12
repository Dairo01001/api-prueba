const { Product } = require('../database').models;

module.exports = {
  getProducts: async () => Product.findAll(),
  getProduct: async (id) => Product.findByPk(id),
  updateProduct: async ({ id, ...product }) => Product.update(product, { where: { id } }),
  createProduct: async (product) => Product.create(product),
  findByTitle: async (title) => Product.findOne({ where: { title } }),
  deleteById: async (id) => Product.destroy({ where: { id }, force: true }),
};

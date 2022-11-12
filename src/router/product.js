const productRouter = require('express').Router();

const {
  getProducts, getProduct, updateProduct, createProduct, findByTitle, deleteById,
} = require('../controllers/product');
const { verifyToken } = require('../utils/middlewares');

productRouter.get('/', async (req, res) => {
  res.send(await getProducts());
});

productRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await getProduct(id);

  if (!product) {
    res.status(404).json({ msg: 'Product not found' });
  } else {
    res.json(product);
  }
});

productRouter.put('/', verifyToken, async (req, res) => {
  await updateProduct(req.body);
  res.json(await getProduct(req.body.id));
});

productRouter.post('/', async (req, res) => {
  const product = findByTitle(req.body.title);
  if (!product) {
    res.json(await createProduct(req.body));
  } else {
    res.status(404).json({ msg: 'The product already exists' });
  }
});

productRouter.delete('/:id', verifyToken, async (req, res) => {
  res.json(await deleteById(req.params.id));
});

module.exports = productRouter;

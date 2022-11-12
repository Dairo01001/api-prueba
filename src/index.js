const app = require('./app');
const products = require('./data/products');
const db = require('./database');

const { Product } = db.models;

db.sync({ force: true }).then(async () => {
  await Product.bulkCreate(products, { validate: true })
    .then(() => {
      console.log('Loaded products');
    })
    .catch((error) => console.error(error));
  app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
  });
});

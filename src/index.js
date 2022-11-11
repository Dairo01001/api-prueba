const app = require('./app');
const db = require('./database');

db.sync({ force: true }).then(() => {
  app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
  });
});

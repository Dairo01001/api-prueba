const router = require('express').Router();

router.use('/', require('./login'));
router.use('/user', require('./user'));
router.use('/product', require('./product'));

module.exports = router;

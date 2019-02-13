const express = require('express');
const router = express.Router();
const controller = require('./controller.js')


router.get('/search/:product_type', controller.product.get);


module.exports = router;
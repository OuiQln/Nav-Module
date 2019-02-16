const express = require('express');

const controller = require('./controller.js');

const router = express.Router();
router.get('/search', controller.product.get);
module.exports = router;

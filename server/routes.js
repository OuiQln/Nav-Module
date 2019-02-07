const express = require('express');
const router = express.Router();
const controller = require('./controller.js')


router.get('/search/product/:id', controller.product.get);
// router.post('/todos', controller.todos.post);
// router.put('/todos/:id', controller.todos.update);
// router.delete('/todos/:id', controller.todos.delete);


module.exports = router;
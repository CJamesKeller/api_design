const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);

module.exports = router;

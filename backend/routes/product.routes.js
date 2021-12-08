const express = require('express');
const { getAllProducts, getProductById } = require( '../controller/product.controller'); 

const router = express.Router();

//@desc GET all products from data
//@route GET /api/products
//@access Public
router.get('/', getAllProducts);

//@desc GET a product by id from data
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById);

module.exports = router;
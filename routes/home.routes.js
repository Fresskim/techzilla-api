const express = require('express')
const router = express.Router()

const Product = require('../models/product.model');


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products }); 
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

router.get('/home', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('home', { products }); 
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});




module.exports = router
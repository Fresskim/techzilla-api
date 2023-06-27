const express = require('express');

const router = express.Router();
const Product = require('../models/product.model')
const upload = require('../services/multer.service');




router.post('/products', upload.single('image'), async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    const newProduct = new Product({
      title,
      description,
      price,
      category,
      image: "http://localhost:3000/"+req.file.path.slice(7)
    });

    const savedProduct = await newProduct.save();

    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});


router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});


router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});


router.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});


router.delete('/products/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

router.get('/categories', (req, res) => {
  const categories = ['Computers', 'Phones-Tablets' ,'TV-Audio-Photo', 'Gaming', 'Accessories', 'Smart-Home', 'Networking','Deals']; 
  res.json(categories);
});




// search through input
router.get('/search', (req, res) => {
  const { query } = req.query;
  
  Product.find({ $text: { $search: query } })
    .then(products => {
      res.render('searchResults', { query, products });
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to perform search' });
    });
});



module.exports = router;

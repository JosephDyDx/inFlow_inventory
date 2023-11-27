const express = require('express')
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/productController')

//import requireAuth middleware
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all Product routes
router.use(requireAuth)

// GET all Products
router.get('/', getProducts)

//GET a single Product
router.get('/:id', getProduct)

// POST a new Product
router.post('/', createProduct)

// DELETE a Product
router.delete('/:id', deleteProduct)

// UPDATE a Product
router.patch('/:id', updateProduct)


module.exports = router
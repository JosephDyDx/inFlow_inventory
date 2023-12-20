const Product = require('../models/productModel')
const mongoose = require('mongoose')

/*

Name
Category
Quantity
SerialNumber
Version
ShelfLife
Suppliers
ArrivalDate
Description

*/

// get all products
const getProducts = async (req, res) => {
  const user_id = req.user._id

  const products = await Product.find({user_id}).sort({createdAt: -1})

  res.status(200).json(products)
}

// get a single product
const getProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'})
  }

  const product = await Product.findById(id)

  if (!product) {
    return res.status(404).json({error: 'No such product'})
  }
  
  res.status(200).json(product)
}


// create new product
const createProduct = async (req, res) => {
  const {Name,
    Category,
    Quantity,
    SerialNumber,
    Version,
    ShelfLife,
    Suppliers,
    ArrivalDate,
    Description} = req.body

  let emptyFields = []

  if(!Name) {
    emptyFields.push('Name')
  }
  if(!Category) {
    emptyFields.push('category')
  }
  if(!Quantity) {
    emptyFields.push('quantity')
  }
  if(!SerialNumber) {
    emptyFields.push('SerialNumber')
  }
  if(!Version) {
    emptyFields.push('Version')
  }
  if(!ShelfLife) {
    emptyFields.push('ShelfLife')
  }
  if(!Suppliers) {
    emptyFields.push('Suppliers')
  }
  if(!ArrivalDate) {
    emptyFields.push('ArrivalDate')
  }
  
  if(!Description) {
    emptyFields.push('description')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const product = await Product.create({Name,
      Category,
      Quantity,
      SerialNumber,
      Version,
      ShelfLife,
      Suppliers,
      ArrivalDate,
      Description, 
      user_id})
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'})
  }

  const product = await Product.findOneAndDelete({_id: id})

  if (!product) {
    return res.status(400).json({error: 'No such product'})
  }

  res.status(200).json(product)
}

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'})
  }

  const product = await Product.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!product) {
    return res.status(400).json({error: 'No such product'})
  }

  res.status(200).json(product)
}


module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
}
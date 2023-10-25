const ProductRecord = require('../models/productModel')
const mongoose = require('mongoose')

// GLOBAL VARIABLES


// GET all Product records
const getAllProductRecords = async (req, res) => {
    const products = await ProductRecord.find({}).sort({createdAt: -1/*descending order*/})
    res.status(200).json(products)
}

// GET a single product record
const getOneProductRecord = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such product'})
    }
  
    const product = await productRecord.findById(id)
  
    if (!product) {
      return res.status(404).json({error: 'No such product'})
    }
  
    res.status(200).json(product)
  }
  
// POST a new product record
const createProductRecord = async (req, res) =>{

    const {title, units, category} = req.body
    try {
      const product = await productRecord.create({title, units, category})
      res.status(200).json(product)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

// DELETE a product record
const deleteProductRecord = (req, res) =>{
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such product'})
    }
  
    const product = productRecord.findOneAndDelete({_id: id})
  
    if (!product) {
      return res.status(404).json({error: 'No such product'})
    }
    res.status(200).json(product) 
}

// UPDATE a product record
const updateProductRecord = (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such product'})
    }

    const product = productRecord.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!product) {
        return res.status(404).json({error: 'No such product'})
      }
      res.status(200).json(product) 
}

//use the controller as reference in the route file to avoid bloating the routes file with db logic


module.exports ={
    getAllProductRecords,
    getOneProductRecord,
    createProductRecord,
    deleteProductRecord, 
    updateProductRecord
};
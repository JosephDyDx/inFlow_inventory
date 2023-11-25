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

const Schema = mongoose.Schema

const productSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  
  Category: {
    type: String,
    required: true
  },
  
  Quantity: {
    type: Number,
    required: true
  },

  SerialNumber: {
    type: String,
    required: true
  },

  Version: {
    type: Number,
    required: true
  },

  ShelfLife: {
    type: String,
    required: true
  },

  Suppliers: {
    type: String,
    required: true    
  },

  // undecided 
  // Picture: {

  // }

  ArrivalDate: {
  type: String,
  required: true
  },

  Description: {
  type: String,
  required: true
  },

  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)
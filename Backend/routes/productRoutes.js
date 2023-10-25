// IMPORT MODULES
const express = require('express')
const router  = express.Router()

// GLOBAL VARIABLES
const {getAllProductRecords,
    getOneProductRecord,
    createProductRecord,
   deleteProductRecord, 
    updateProductRecord } = require('../controllers/routeController')

// ROUTES

// GET all product records
router.get('/', getAllProductRecords)

// GET a single product record
router.get('/:id', getOneProductRecord)

// POST a new product record
router.post('/', createProductRecord)

// DELETE a product record
router.delete('/:id', deleteProductRecord)

// UPDATE a product record
router.patch('/:id', updateProductRecord)

module.exports = router


//Import modules
require('dotenv').config({path: `${__dirname}/.env` });

const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/user')
//const createMetric = require('./middleware/createMetric')

// express app
const express = require('express')
const app = express()

//Global variables
const PORT = process.env.PORT || 4000; 

//custom middlewares
let myLogger = (req, res, next)=> {
    //console.log('@@Test', req.path, req.method, 'time:', new Date())
    const metricList = {
        "path" : req.path,
        "method" : req.method,
        "ip address" : req.ip,
        "request date_and_time" : new Date(),
    }
    console.log(metricList)
    next();
} 
 
// middlewares to use
app.use(myLogger)
//app.use(createMetric)
app.use(express.json())


// routes
app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        console.log('\n+++---- Database connected successfully::\n')
    })
    .catch((error) =>{
        console.log('\nxxxx----  Database connection failed : ---------xxxxxxxxx\n \n', error)
    })  

 
//server listen
app.listen(PORT, ()=>{
    console.log(`\n Server active. Running on http://localhost:${PORT}/api/products`);
    console.log('SERVER LOGS :: \n\n')
});
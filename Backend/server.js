require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

//Global variables
const PORT = process.env.PORT; 


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
console.log(`\nServer active. Running on http://localhost:${PORT}/api/products`);
console.log('SERVER LOGS :: \n---------------------------------------\n')
});
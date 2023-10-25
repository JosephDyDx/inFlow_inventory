// IMPORT MODULES
require('dotenv').config({path: `${__dirname}/.env` });
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes')


// GLOBAL VARIABLES
const PORT = process.env.PORT;
const db_url = process.env.DB_URL

// CUSTOM MIDDLEWARES

// SERVER LOGS
const serverLogs = (req, res, next) =>{
    console.log(req.path, req.method, 'time: ', new Date())
    next();
}

// API CALL COUNTER
let apiCalls = 0;
const apiCallCounter = (req, res, next) =>{
    
    if(req.method){
        apiCalls += 1; }

    console.log(`${apiCalls} api calls`);
    next();
}

// MIDDLEWARES TO USE
app.use(serverLogs)
app.use(apiCallCounter)
app.use(express.json())


// ROUTES
app.use('/api/products', productRoutes)

app.use('/api/logs', (req, res) =>{
    res.status(200).send(`The api call count is ${apiCalls}`)
})

app.get('/', (req, res) => {
    res.send('You requested for Home///');
})

// CONNECT TO DB

// PORT LISTEN
app.listen(PORT, () =>{
    console.log(`Server active on http://localhost:${PORT}/api/products`);
    console.log('SERVER LOGS :: \n\n')
})
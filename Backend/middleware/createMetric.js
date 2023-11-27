const metric = require('../models/metricsModel')
const mongoose = require('mongoose')

// create & log new metric
let createMetric = async (req, res, next)=> {

    //console.log(req.path, req.method, req.ip, 'time:', new Date())
    const metricList = {
        "path" : req.path,
        "method" : req.method,
        "ip address" : req.ip,
        "request date_and_time" : new Date(),
    }
    console.log(metricList)

    //add metric to the db

    const metricJson = {"log: ": req.method +" "+ req.path +" @  time:" + new Date() +" - "+ req.ip}

    try {
        const addMetric = await metric.create({metricJson})
        res.status(200).json(addMetric)
        console.log(addMetric + "\n\n")
    
      } catch (error) {
        //catch error if any are thrown
        res.status(400).json({error: error.message})
        console.log(error)
      }
    
    next();
    } 
  
  module.exports = createMetric
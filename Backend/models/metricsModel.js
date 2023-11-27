const mongoose = require('mongoose')

const Schema = mongoose.Schema

const metricSchema = new Schema({
  log: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('MetricsDB', metricSchema)
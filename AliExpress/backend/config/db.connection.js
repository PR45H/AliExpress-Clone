const mongoose = require('mongoose')
require('dotenv').config()
const databaseURL = process.env.MONGO_URL
const connection = mongoose.connect(databaseURL)

module.exports = connection
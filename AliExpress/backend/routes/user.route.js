const express = require('express')
const userRoute = express.Router()
const {register, login} = require('../controllers/user.controller')

userRoute
    .post('/register', register)
    .post('/login', login)

module.exports = userRoute
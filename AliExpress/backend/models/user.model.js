const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true},
    address: { type: String, required: true },
    tel:{type:Number, required:true, unique:true}
}, {
    versionKey:false
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel
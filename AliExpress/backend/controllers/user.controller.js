

const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()



// creating user registeration with hasing password
const register = (req, res) => {
    const { name, gender, email, password, address, tel } = req.body
    
    try {
        // hash password before sending to db
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                console.log(err);
            }
            const user = new UserModel({ name, gender, email, password: hash, address, tel })
            await user.save()
            res.status(200).send("user created successfully")
        })
    } catch (error) {
        res.status(500).send("error in registering user")
    }
}

// implementing user login with JWT token
const login =  async (req,res) => {
    const { email, password } = req.body
    
    try {
        // try to find email
        const user = await UserModel.findOne({ email })
        
        // if email found then check password else the given email is wrong
        if (user) {
            // check password with db, this process will give err and result
            bcrypt.compare(password, user.password, (err, result) => {
                // if err then password comparison is wrong
                if (err) {
                    res.status(500).send("internal error occured")
                }
                // if result is correct - then give token and login successful, else password wrong
                if (result) {
                    const token = jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET,)
                    res.status(200).json({"msg":"login successful", "token":token})
                } else {
                    res.status(404).send("Incorrect password")
                }
            })
        } else {
            // wrong email
            res.status(404).send("user with given email not found")
        }
    } catch (error) {
        // error in internal method to find email
        res.send(404).send(error)
    }
}

module.exports = {register, login}
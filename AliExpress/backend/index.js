const express = require('express');
const app = express();

const port = process.env.PORT || 8080
const connection = require('./config/db.connection');

const path = require('path')
const cors = require('cors');
const userRoute = require('./routes/user.route');


app.use(express.json())
app.use(cors())


app.use('/user',userRoute)

app.get('/', (req,res) => {
    res.send("Health Check is running fine")
})



app.listen(port, async() => {
    try {
        await connection
        console.log(`port is running on ${port} and db connected`);
    } catch (error) {
        console.log(error);
    }
})
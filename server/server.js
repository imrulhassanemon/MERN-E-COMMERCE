const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

require('dotenv').config();


// create a database connection -> 
// it can be use different file and import 

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('mongodb connected'))
.catch((error)=>{console.log('Mongodb Connectin error',error);})





const app  = express()
const PORT = process.env.PORT || 5000



app.use(
    cors({
        origin:'http://localhost:5174/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)

app.use(cookieParser())
app.use(express.json())



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
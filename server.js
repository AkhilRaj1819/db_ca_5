const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')

const PORT = process.env.PORT||3050
app.use(express.json())

const router = require('./routes/UserRouter');
app.use(router);
const router1 = require('./routes/ContactRouter');
app.use(router1);
const mongoConnect = require('./config/Mongoose')
mongoConnect()
app.listen(PORT,async()=>{
   
    console.log(`running on port ${PORT}`)
})
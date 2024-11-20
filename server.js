//1- require express
const express = require ("express");

//2- create insatnce
const app = express ();
//5-require dotenv e configure

require('dotenv').config();

//6 - connectDB
const connectDB = require("./config/connectDB");
connectDB();
//7- routers
//7.1 middleware body-parser
app.use(express.json())
//7.2 routers
app.use('/api/contact', require('./routes/Contact'))

//3- create port
const PORT = process.env.PORT ;

//4- create server

app.listen(PORT, err=> {
    err ? console.error(err) : console.log (`server running on port ${PORT}..`)});



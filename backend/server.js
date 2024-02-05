const express = require("express");
const cors = require("cors");
const app =express(); 
const path =require('path')

require('dotenv').config();

app.use(express.json())

const dbconfig= require('./db')

const port =process.env.PORT || 5000;

app.listen(port,()=>console.log(`Node server started using nodemon`));
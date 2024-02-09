const express = require("express");
const cors = require("cors");
const app =express(); 
const path =require('path')

require('dotenv').config();


const dbconfig= require('./db')
const usersRoutes= require('./Route/userRoutes')

app.use(express.json())

app.use('/api/users',usersRoutes)

const port =process.env.PORT || 5000;

app.listen(port,()=>console.log(`Node server started using nodemon`));
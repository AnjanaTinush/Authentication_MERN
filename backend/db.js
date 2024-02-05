const mongoose=require("mongoose");
 
const mongoURL="mongodb+srv://anjana2:anjana@cluster0.rg6ebmf.mongodb.net/Authentication";

mongoose.connect(mongoURL,{useUnifiedTopology : true,useNewUrlParser:true});

const connection=mongoose.connection;

connection.on('error',()=>{
    console.log('Mongo DB connection faild')
})

connection.on('connected',()=>{
    console.log('Mongo DB connection successful')
})

module.exports=mongoose;
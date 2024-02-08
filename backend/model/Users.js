const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require :true
    },

    phone : {
        type : String,
        require : true
    },
    passwoard : {
        type : String,
        require : true
    },
    type : {
        type : String,
        default:user
    }
} , {
    timestamps : true,
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel
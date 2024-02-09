const express = require("express");
const router = express.Router();
const User = require('../model/Users')

router.post("/register",async(req,res)=>{

    const newuser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
    })
    try {
        
        const user = await newuser.save()
        res.send('User Registered Successfully!')
    } catch (error) {

        return res.status(400).json({error})
        
    }
})

module.exports=router
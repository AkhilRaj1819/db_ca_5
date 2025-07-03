const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
router.post('/users',async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!username||!email||!password){
            return res.status(400).send({msg:"enter all fields username,email and password"})
        }
        const newUser = new User({username,email,password});
        await newUser.save();
        return res.status(200).send({msg:"user registered sucessfully",data:newUser})
    } catch (error) {
        return res.status(300).send({msg:"something went wrong",error:error.message})
    }
})

module.exports = router;
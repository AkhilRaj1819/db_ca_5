const express = require('express')
const router1 = express.Router()
const Contact = require('../models/ContactSchema')
const User = require('../models/UserSchema')

router1.post('/contacts',async(req,res)=>{
    try {
        const {name,phone,email,userId} =req.body;
        if(!name||!phone||!email||!userId){
            return res.status(400).send({msg:"enter all fields name,phone,email and userId"})
        }
        const exists  = User.findById(userId)
        if(!exists){
            return res.status(400).send({msg:"userId not exists"})
        }
        const newContact = new Contact({name,phone,email,userId});
        await newContact.save();
        return res.status(200).send({msg:"contact added  sucessfully",data:newContact})
    } catch (error) {
        return res.status(300).send({msg:"something went wrong",error:error.message})
    }
})

module.exports = router1;
const express=require("express")
const userRouter=express.Router()
const {Usermodel}=require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    try {
        bcrypt.hash(password, 5, async(err, hash)=>{
            if(err){
                res.status(400).send({msg:"Something went wrong"})
            }
            if(hash){
                const user=new Usermodel({name,email,password:hash})
                await user.save()
                res.status(200).send({msg:"Registration successfull"})
            }
        });
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await Usermodel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, async(err, result)=>{
                // result == true
                if(result){
                    res.status(200).send({msg:"Login successfull" , "token" : jwt.sign({ userID: user._id }, 'masai')})
                }else{
                    res.status(400).send({msg:"Something went wrong"})
                }
            });
        }else{
            res.status(400).send({msg:"User not found"})
        }
       
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})



module.exports={userRouter}
const express=require("express")
const buyerRouter=express.Router()
const {BuyerModel}=require("../models/buyer.model")
const {auth}=require("../middleware/auth.middleware")

buyerRouter.post("/add",auth,async(req,res)=>{
    try {
        const mobile=new BuyerModel(req.body)
    await mobile.save()
    res.status(200).send({msg:"Product added to the cart"})
    } catch (error) {
        res.status(400).send(error)
    }
})

buyerRouter.get("/",async(req,res)=>{
    try {
        const data=await BuyerModel.find()
        res.status(200).send({"msg":"All the Data",data})
    } catch (error) {
        res.status(400).send(error)
    }
})

buyerRouter.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params
    try {
        await BuyerModel.findByIdAndDelete({_id:id})
        res.status(200).send({msg:"Product has been deleted"})
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports={buyerRouter}
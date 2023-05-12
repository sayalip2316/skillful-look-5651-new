const express=require("express")
const soldRouter=express.Router()
const {SoldModel}=require("../models/sold.model")

soldRouter.get("/:id",async(req,res)=>{
    const{id}=req.params
    try {
        const data=await SoldModel.findById({_id:id})
        res.status(200).send({"msg":"All the Data",data})
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports={soldRouter}
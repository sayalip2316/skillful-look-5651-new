const mongoose=require("mongoose")

const buyerSchema=mongoose.Schema({
   image:{type:String,required:true},
   description:{type:String,required:true},
   rating:{type:Number,required:true},
   price:{type:Number,required:true}
},{
    versionKey:false
})

const BuyerModel=mongoose.model("cart",buyerSchema)

module.exports={BuyerModel}
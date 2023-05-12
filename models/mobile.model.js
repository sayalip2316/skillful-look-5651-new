const mongoose=require("mongoose")

const mobileSchema=mongoose.Schema({
   image:{type:String,required:true},
   description:{type:String,required:true},
   rating:{type:Number,required:true},
   price:{type:Number,required:true},
   userID:{type:String,required:true}
},{
    versionKey:false
})

const Mobilemodel=mongoose.model("mobile",mobileSchema)

module.exports={Mobilemodel}
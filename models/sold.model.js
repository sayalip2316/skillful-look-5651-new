const mongoose=require("mongoose")

const soldSchema=mongoose.Schema({
   image:{type:String,required:true},
   description:{type:String,required:true},
   rating:{type:Number,required:true},
   price:{type:Number,required:true}
},{
    versionKey:false
})

const SoldModel=mongoose.model("sold",soldSchema)

module.exports={SoldModel}
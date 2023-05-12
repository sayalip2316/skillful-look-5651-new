const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://sayali:sayalijadhav@cluster0.vgf4quo.mongodb.net/Amazon?retryWrites=true&w=majority")

module.exports={connection}
const mongoose=require('mongoose')
const Schema=mongoose.Schema


const bookschema=new Schema({
    name:String,
    description:String,
    price:Number
})



module.exports=mongoose.model("Books",bookschema)
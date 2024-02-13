const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const Schema=mongoose.Schema


const userschema=new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    phome:{type:String,unique:true},
    role:{type:String,default:"User"}

})

userschema.methods.comparepassword= async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports=mongoose.model("Users",userschema)
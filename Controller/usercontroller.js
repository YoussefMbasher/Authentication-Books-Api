const usermodel=require('../Models/userschema')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

exports.register= async function(req,res){
    try{
       let newuser= new usermodel(req.body)
       const hashedpassword= await bcrypt.hash(req.body.password,10)
       newuser.password=hashedpassword
       let user=await newuser.save()
       return res.json({message:"User added succsefully",user:{name:user.name,email:user.email,_id:user.id}})
    }catch(err){
        return res.status(400).send({message:err})

    }
}

exports.login= async function(req,res){
    try{
       let user=await usermodel.findOne({email:req.body.email})
       if(!user|| !user.comparepassword(req.body.password)){
        return res.status(401).json({message:"Authntication Failed, invaled user name or password"})
       }
       const token =jwt.sign({name:user.name,email:user.email,id:user.id,role:user.role},"security key")
     
       return res.json({message:"User loggedin succsefully",user:{name:user.name,email:user.email,_id:user.id,token:token}})
    }catch(err){
        return res.status(400).send({message:err})

    }
}
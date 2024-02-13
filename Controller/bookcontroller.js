const bookmodel=require('../Models/bookschema')


exports.getallbooks= async function(req,res){
    try{
      let book= await bookmodel.find()
      return res.json({message:"Done",data:book})
    }catch(err){
        return res.status(400).send({message:err})

    }
}


exports.getonebook= async function(req,res){
    try{
      let book= await bookmodel.findOne({_id:req.params.id})
      if (book.length=== 0){
        return res.json({"message":"Book not found",data:[]})
      }else{
        return res.json({"message":"Done",data:book})
      }
     
    }catch(err){
        return res.status(400).send({message:err})

    }
}

exports.Addbook= async function(req,res){
    try{
        if(req.user.role==="Admin"){
            let book=await bookmodel.create(req.body)
            return res.json({message:"User Added succesfuly",data:book})
        }else{
            return res.status(403).send({message:"You do not have the right permession"})
        }

     
    }catch(err){
        return res.status(400).send({message:err})

    }
}

exports.updatebook= async function(req,res){
    try{
        if(req.user.role==="Admin"){
            let book=await bookmodel.findByIdAndUpdate(req.params.id,req.body)
        return res.json({message:"User updated",data:[]})
        }else{
            return res.status(403).send({message:"You do not have the right permession"})
        }
        let book=await bookmodel.findByIdAndUpdate(req.params.id,req.body)
        return res.json({message:"User updated",data:[]})
    }catch(err){
        return res.status(400).send({message:err})

    }
}

exports.deletebook= async function(req,res){
    try{
        if(req.user.role==="Admin"){
            let book=await bookmodel.findOneAndDelete(req.params.id)
      return res.json({message:"User deleted",data:[]})

        }else{
            return res.status(403).send({message:"You do not have the right permession"})
        }
      
    }catch(err){
        return res.status(400).send({message:err})

    }
}
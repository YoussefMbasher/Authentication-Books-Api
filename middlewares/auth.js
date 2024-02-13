const jwt=require('jsonwebtoken')

module.exports= (req,res,next)=>{
  try{
     const fulltoken= req.headers.authorization
     const token = fulltoken?.split(' ')[1]
     if (!token)return res.status(403).send("ACCESS Denied")        
     let user=   jwt.verify(token,'security key')
     req.user=user 
        next()

  }catch(err){
res.status(400).send('invalid jwt')
  }
}
const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const userrouter=require('./Routes/user')
const bookrouter=require('./Routes/book')

const app=express()

app.use(bodyparser.json())


const url="mongodb+srv://product:pro555@product.sqdltxd.mongodb.net/product"


const ConnectDB=async ()=>{
    try{
        mongoose.connect(url)
        console.log("Coneccted to mongo DB")
       
    }catch(err){
        console.log("Coneccting with mongodb failed"+err)
        process.exit()
    }
}

ConnectDB()
app.use('/',userrouter)
app.use('/',bookrouter)

app.listen(7000)
console.log("server is running on port 7000")
const express=require("express")
const { userModel } = require("../model/user.model")
const jwt=require("jsonwebtoken")
const userRoute=express.Router()

userRoute.post("/register",async(req,res)=>{
    const {email,image,country,name,coin}=req.body
    try{
        let token =jwt.sign({username:name},'masai')
        const user=new userModel({email,image,country,name,coin})
        await user.save()
        res.status(200).json({msg:'Welcome to the World of Rising King',token:token,email:email})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }

})

userRoute.get("/",async(req,res)=>{
   
    try{
        const data=await userModel.find()
        res.status(200).json({msg:data})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
})

userRoute.patch("/update/:id",async(req,res)=>{
    const id=req.params.id
    
    try{
        const data=await userModel.findByIdAndUpdate({_id:id},req.body)
       
        res.status(200).json({msg:"Coin data has been updated",data})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }

})

module.exports={
    userRoute
}
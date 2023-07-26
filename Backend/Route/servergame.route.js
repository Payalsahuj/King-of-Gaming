const express=require("express")
const servergameRoute=express.Router()



servergameRoute.post("/servergame",async(req,res)=>{
   
    try{
        const user=new userModel(req.body)
        await user.save()
        res.status(200).json({msg:'Data is added'})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }

})




module.exports={
    servergameRoute
}
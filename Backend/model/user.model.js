const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    country:String,
    email:String,
    image:String,
    coin:Number
},{
    versionKey:false
})

const userModel=mongoose.model("ludoauth",userSchema)

module.exports={
    userModel
}
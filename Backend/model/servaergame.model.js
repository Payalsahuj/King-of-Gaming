const mongoose=require("mongoose")

const servergameSchema=mongoose.Schema({
    servergame:Array
},{
    versionKey:false
})

const servergameModel=mongoose.model("ludoauth",servergameSchema)

module.exports={
    servergameModel
}
const express=require("express")
const { connection } = require("./db")
const { userRoute } = require("./Route/user.route")
const cors=require("cors")
const { servergameRoute } = require("./Route/servergame.route")
require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())


app.use("/user",userRoute)
app.use("/servergamesection",servergameRoute)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`port is running at ${process.env.port}`)
        console.log("connected to DB")
    }
    catch(err){
        console.log(err.message)
    }
})


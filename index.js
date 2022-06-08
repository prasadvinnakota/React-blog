const express = require("express");
const mongoose = require("mongoose");

const app = express()

const MONGO_URL ="mongodb+srv://prasadvinnakota:Nanaji3011@blog.w35sx.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL,{ useNewUrlParser: false})
.then(()=>console.log("DB connect"))
.catch((error)=>console.log(error))

app.get("/",(req, res)=>
{
    res.send("Hello Nanaji");
})

app.listen(5000, ()=>
{
    console.log(`Listening at Port 5000`)
})

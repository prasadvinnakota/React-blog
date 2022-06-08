const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        maxlength:50
    },

    email:
    {
        type: String,
        unique:true
    },

    password:
    {
        type: String,
        required:true
    },

    lastname:
    {
       type:String,
       maxlength:50

    },

    token:
    {
       type:String
    },

    tokenExp:
    {
        type:Number
    },

    role:
    {
        type:Number,
        default:0 //Normal user
    }


})


//User is the collection name 

module.exports = mogoose.model("User", userSchema)
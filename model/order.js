const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const Order = new mongoose.Schema({
    name:{
        type:String,
        index:true,
        trim:true,
        max:32,
        required: true,
    },
    
    

    ProductId:{
        type:ObjectId,
        ref:"Product",
    },
    BuyerId:
        {
            type:String,
            required:true,
            ref:"User"
        },
    
    description:{
        type:String,
        max:1100,
    },
    price:{
        type:Number,
    },

    color:{
        type:String
    },
    brand:{
        type:String
    },
    qty:{
        type:Number,
    },
    
    location:{
        type:String,
    },
    
    expiry:{
        type:Date,
        default:Date.now()
    },
    timeOfOrder:{
        type:Date,
        default:Date.now()
    }

}, {timestamp:true})


module.exports = mongoose.model("Order", Order)

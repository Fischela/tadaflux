const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const Product = new mongoose.Schema({
    name:{
        type:String,
        index:true,
        trim:true,
        max:32,
        required: true,
    },
    slug:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,

    },
    category:{
        type:ObjectId,
        ref:"Category",
    },
    sub:[
        {
            type:ObjectId,
            ref:"Sub"
        }
    ],
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
    images:{
        type:Array,
    },
    shipping:{
        type:String,
        enum:["yes", "no"]
    },
    location:{
        type:String,
    },
    ratings:{
        type:Array
    }

}, {timestamp:true})


    module.exports = mongoose.model("Product", Product)

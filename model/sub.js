const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const SubModel = new mongoose.Schema ({
    name:{
        type: String,
        trim: true,
        required: "Name is required",
        minlength: [3, "Too short" ],
        maxlength: [32, "Too long"],
    },
    slug:{
        type:String,
        index:true,
        unique:true,
        lowercase:true,
    },
    parent:{type:ObjectId, ref:"Category", required:true}
},
{timestamps:true}

)
module.exports = mongoose.model("Sub", SubModel)
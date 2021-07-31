const mongoose = require('mongoose');


const categoryModel = new mongoose.Schema ({
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
    }
},
{timestamps:true}

)
module.exports = mongoose.model("Category", categoryModel)
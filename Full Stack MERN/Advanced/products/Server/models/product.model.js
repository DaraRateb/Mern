const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type:String,
        required: [true,"Title is required"],
        minlength: [3,"Title must be at least 3 characters"]
    },
    price: {type:Number,
    },
    description: {type:String,
    }
}, {timestamps:true});

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
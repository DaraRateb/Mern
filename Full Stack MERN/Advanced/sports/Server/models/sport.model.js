const mongoose = require('mongoose');

const SportSchema = new mongoose.Schema({
    firstname: {type:String,
        required: [true,"First name is required"],
        minlength: [3,"First name must be at least 3 characters"]
    } ,
    lastname: {type:String,
        required: [true,"Last name is required"],
        minlength: [3,"Last name must be at least 3 characters"]
    } ,
    sport: {type:String,
        required: [true,"Sport is required"],
        minlength: [3,"Sport must be at least 3 characters"]
    } ,
    team: {type:String,
        required: [true,"Team is required"],
        minlength: [3,"Team must be at least 3 characters"]
    } ,

}, {timestamps:true});

const Sport = mongoose.model('Sport', SportSchema)

module.exports = Sport
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    mobileNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    uin:{
        type:String,
        required:true
    },
    

},{timestamps:true});

module.exports  = mongoose.model('college', studentSchema);
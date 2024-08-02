const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            required:true,
            enum:['male','female']
        },
        email:{
            type:String,
            required:true
        },
        address:{
            type:String
        },
        qualification:{
            type:String
        },
        mobileNumber:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
},{timestamps:true});

module.exports = mongoose.model('teacher',teacherSchema);


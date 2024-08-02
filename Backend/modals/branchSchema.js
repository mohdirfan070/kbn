const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    branchName :{
        type:String,
        required:true
    },
    branchLink:{
        type:String,
        required:true
    },
    classes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'class'
    }
},{timestamps:true});

module.exports = mongoose.model('branch',branchSchema);
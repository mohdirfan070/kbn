const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
    students:{
        
    },
    className: {
        type: String,
    },
},{timestamps:true});
module.exports = mongoose.model('class',classSchema);
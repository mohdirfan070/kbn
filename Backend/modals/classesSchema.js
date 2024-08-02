const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema({
    classList: {
        type:[],
    }
}, { timestamps: true });
module.exports = mongoose.model('classes', classesSchema);
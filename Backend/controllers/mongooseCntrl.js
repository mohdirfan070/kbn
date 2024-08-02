require('dotenv').config();
const mongoose = require('mongoose');

const connectDB =async  () =>{

    async function main() {
        await mongoose.connect(process.env.MONGODB_URI);
   }
    main().then(()=>{
        console.log("Connected to database Succesfully!");
    }).catch(err => console.log(err));



}

module.exports = connectDB;
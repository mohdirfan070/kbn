
const mongoose = require('mongoose');

const connectDB =async  () =>{

    async function main() {
        await mongoose.connect(process.env.MONGODB_URL);
       //    await mongoose.connect('mongodb://localhost:27017/cakeWorld');
   }
    main().then(()=>{
        console.log("Connected to database Succesfully!");
    }).catch(err => console.log(err));



}

module.exports = connectDB;
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


// Connecting DB
const connectDB = require('./controllers/mongooseCntrl.js');
connectDB();

//parsing all data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Require Here
const signupRoute = require('./routes/signupRoute.js');
const loginRoute = require('./routes/loginRoute.js');
const getUserRoute = require('./routes/getUserRoute.js');
// const addBranchRoute = require('./routes/addBranchRoute.js');
const getBranchRoute =  require('./routes/addBranchRoute.js');
const updateUserRoute = require('./routes/getUserRoute.js');
// All Middlewears
app.use('/signup',signupRoute);
app.use('/',loginRoute);
app.use('/username',getUserRoute);
// app.use('/addbranch',addBranchRoute);
app.use('/',getBranchRoute);
app.use('/',updateUserRoute);

app.get('/',(req,res)=>{
    res.json({'msg':'Hello Developer'});
})

app.listen(process.env.PORT,()=>{
    console.log("Server Running on PORT "+ process.env.PORT);
})
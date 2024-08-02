const teacher = require('../modals/teacherSchema');

const getUser = async (req, res) => {
    let  email  = req.body;
    // console.log(email);
    let result = await teacher.findOne(email);
    res.json({"msg":email,"user":result});
}

const updateUser = async(req,res)=>{
    let user = req.body;
    let result = await teacher.findOneAndUpdate({email:user.email},{name:user.name,mobileNumber:user.mobileNumber,address:user.address,gender:user.gender,qualification:user.qualification});
    setTimeout(()=>{
        res.json({"msg":"Updated Successfully"});
    },1000);
}


module.exports = { getUser , updateUser };
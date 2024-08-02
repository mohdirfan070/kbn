const teacher = require('../modals/teacherSchema.js');
const bcrypt = require('bcrypt');

const storeInDb = async ({ name, gender, email, address, qualification, mobileNumber, password }) => {
    let result = await teacher.create({ name, gender, email, address, qualification, mobileNumber, password });
    // console.log(result)
    return result;
}

const signupController = async (req, res) => {
    let { name, gender, email, address, qualification, mobileNumber, password } = req.body;
    const checkUser = await teacher.findOne({email});
    if (!checkUser) {
        const salt = process.env.SALT;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
               storeInDb({ name, gender, email, address, qualification, mobileNumber, password: hash }).then((newUser)=>{
                //    console.log(newUser);
                let userData = newUser;
                   res.json({userData,user: false });
               })
            });
        });
    } else {
        res.json({ user: true, msg: 'Email Already Exists!' });
    }
}
module.exports = signupController;
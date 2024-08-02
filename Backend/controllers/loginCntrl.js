const teacher = require('../modals/teacherSchema.js');
const bcrypt = require('bcrypt');
async function checkUser(loginEmail, loginPassword) {
    //... fetch user from a db etc.
    let res_from_db = await teacher.findOne({ email: loginEmail });
    if(res_from_db){
        // console.log(res_from_db.password);
        const match = await bcrypt.compare(loginPassword, res_from_db.password);
        if (match) {
            return { userData:res_from_db, status: true, msg: "Login Successfull!" };
        } else {
                if(loginEmail==res_from_db.email){
                  
                        return { status: false, msg: "Incorrect password!" };
                }
            }
        }else{
                return { status: false, msg: "Invalid Credentials!" };
            }
    //...
}
const loginController = async (req, res) => {
    let { loginEmail, loginPassword } = req.body;
    let result = await checkUser(loginEmail, loginPassword);
    // console.log(result)
    res.json({ user: result });
}

module.exports = loginController;
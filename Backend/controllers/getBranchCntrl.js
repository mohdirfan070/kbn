const branchSchema = require('../modals/branchSchema.js');
const branch = require('../modals/branchSchema.js');
const classes = require('../modals/classesSchema.js');
const addBranch = async (req,res)=>{
    let {branchName , branchLink } = req.body;
    let result1 = await classes.create({});
    let result =await branch.create({branchLink,branchName,classes:result1.id});

    // console.log(result);
    // console.log(branchName , branchLink);
    res.json({result});
}


const getAllBranch = async (req,res)=>{
    let result = await branch.find({});
    // console.log(result)
    res.json({result});
  }


const getBranch = async (req,res)=>{
    let { branchname } = req.params;
    let result = await branch.findOne({branchLink:`/${branchname}`});
    res.json({result});
   }

module.exports = {getBranch , getAllBranch ,  addBranch } ;
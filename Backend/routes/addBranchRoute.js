const express  = require("express");
const router = express();
// const { addBranch } = require('../controllers/addBranchCntrl.js');
// router.route('/').post(addBranch);

const{getBranch , getAllBranch , addBranch } = require('../controllers/getBranchCntrl.js');
router.route('/addbranch').post(addBranch);
router.route('/attendance/branches').get(getAllBranch);
router.route('/attendance/:branchname').get(getBranch);
module.exports  = router;
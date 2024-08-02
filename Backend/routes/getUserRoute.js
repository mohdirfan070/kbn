const router  = require('express')();
const {getUser , updateUser} = require('../controllers/getUserCntrl.js');
// const {  } = require('../controllers/getUserCntrl.js')
router.route('/').post(getUser);
router.route('/updateuser').post(updateUser);

module.exports = router;
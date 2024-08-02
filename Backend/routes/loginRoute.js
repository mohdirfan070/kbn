const router = require('express')();
 const loginController = require('../controllers/loginCntrl.js');

router.route('/login').post(loginController);
module.exports = router;
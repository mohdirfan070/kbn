const  router  = require('express')();
const signupController = require('../controllers/signupController.js');

router.route('/').post(signupController);

module.exports= router;
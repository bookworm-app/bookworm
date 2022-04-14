const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

// router.get('/', userController.checkCredentials, userController.setAuth, (req, res) => {
//   res.redirect('/charsheet');
// });

router.post('/signup', userController.createUser, sessionController.createToken);
router.post('/login', sessionController.createToken);

module.exports = router;
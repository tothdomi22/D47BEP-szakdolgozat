const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path')
require('../config/passport')
const User = require('../models/user')
const authController = require('../controllers/authController')



router.get('/login', authController.login)

router.get('/register', authController.register); 

router.post('/register/store', authController.storeRegistration);

router.post('/login/password', authController.loginPassword);

router.get('/logout', authController.logout);

router.get('/current_user', authController.currentUser);


module.exports = router;
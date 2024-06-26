const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const path = require('path')


router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..' ,'/views/auth/login.html'));
})

module.exports = router;
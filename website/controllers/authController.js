const passport = require('passport');
const sequelize = require('../config/config');
const { DataTypes} = require("sequelize");
const User = require('../models/user')(sequelize, DataTypes);
const path = require('path');
const crypto = require('crypto');


const login = (req, res) => {
    res.sendFile(path.join(__dirname, '..', './views/auth/login.html'))
}

const register = (req, res) => {
    res.sendFile(path.join(__dirname, '..', './views/auth/register.html'))
}

const storeRegistration = (req, res) => {
    const salt = crypto.randomBytes(16); //seed
    try {
        crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', async function(err, hashed_password) {
            const user = await User.create({
                username: req.body.username,
                hashed_password: hashed_password,
                email: req.body.email,
                name: req.body.name,
                salt: salt
        })
        //log in after registration
        req.login(user, function(err) {
            if (err) { return next(err); }
            res.redirect('/');
          });
        });
    } catch (error) {
        res.status(500).send(`${error}, not success`)
    }
}

const loginPassword = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })

const logout = (req, res) => {
    req.logout(() => {
        res.redirect('/');
      });
}


const currentUser = (req, res) => {
    if (req.user && req.user.username) {
        res.json({ username: req.user.username });
    } else {
        res.status(401).send('User not authenticated');
    }
}



module.exports = {
    register,
    login,
    logout,
    storeRegistration,
    loginPassword,
    currentUser
}
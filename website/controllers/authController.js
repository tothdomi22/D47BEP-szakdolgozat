const passport = require('passport');
const sequelize = require('../config/config');
const { DataTypes} = require("sequelize");
const User = require('../models/user')(sequelize, DataTypes);
const path = require('path');

const login = (req, res) => {
    res.sendFile(path.join(__dirname, '..', './views/auth/login.html'))
}

const register = (req, res) => {
    res.sendFile(path.join(__dirname, '..', './views/auth/register.html'))
}

const storeRegistration = async (req, res) => {
    try {
        const data = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        res.redirect('/');
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

module.exports = {
    register,
    login,
    logout,
    storeRegistration,
    loginPassword
}
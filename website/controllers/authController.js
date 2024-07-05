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
                salt: salt,
                isAdmin: false
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
        res.json({id: req.user.id, username: req.user.username, isAdmin: req.user.isAdmin, email: req.user.email, name: req.user.name });
    } else {
        res.status(401).send('User not authenticated');
    }
}   

const changePasswordPage = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/views/auth/change-password.html"))
}

const changePasswordStore = async (req, res) => {
    console.log(req.user.id)
    console.log(req.body.name)
    const salt = crypto.randomBytes(16); //seed
    try {
        crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', async function(err, hashed_password) {
            const user = await User.update({
                hashed_password: hashed_password,
                name: req.body.name,
                salt: salt,
            },
            {
                where: {
                    id: req.user.id //this is where it stores the cookied auth data
                }
            })
        res.redirect('/')
        }); 
    } catch (error) {
        res.json({error: error})
    }

}



module.exports = {
    register,
    login,
    logout,
    storeRegistration,
    loginPassword,
    currentUser,
    changePasswordPage,
    changePasswordStore
}
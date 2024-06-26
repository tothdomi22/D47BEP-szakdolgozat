const bcrypt = require(bryptjs);
const passport = require('passport');
const user = require('../models/user');

const register = async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await user.create({username, password: hashedPassword});
        res.status(201);
    } catch (error) {
        res.status(500);
    }
};


const login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: false
})

const logout = (req, res) => {
    req.logout();
    res.redirect('/')
}

const isAuthenticated = (req, res) => {
    if (res.isAuthenticated()) {
        res.send('hello')
    } else {
        res.send('not authenticated')
    }
}

modeule.exports = {
    register,
    login,
    logout,
    isAuthenticated
}
const sequelize = require('../config/config');
const crypto = require('crypto')
const { DataTypes } = require("sequelize")
const User = require('../models/user')(sequelize, DataTypes)
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy


passport.use(new LocalStrategy(async function(username, password, done) {
      try{
        const user = await User.findOne({where: { username: username }})
        if (!user){
            return done(null, false, { message: 'Incorrect username.' }) 
        }
        crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', async function(err, hashed_password) {
          if (!crypto.timingSafeEqual(user.hashed_password, hashed_password)) {
            return done(null, false, { message: 'Incorrect username or password.' });
          }
          return done(null, user)

        })
      }catch(err){
          return done(err)
      }
  }
  ))
    
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findByPk(id).then(function(user) { done(null, user); });
});
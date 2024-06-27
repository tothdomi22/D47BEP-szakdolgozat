const sequelize = require('../config/config');
const { DataTypes } = require("sequelize")
const User = require('../models/user')(sequelize, DataTypes)
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy


passport.use(new LocalStrategy(
  async function(username, password, done) {
      try{
        const user = await User.findOne({where: { username: username }})
        if (!user){
            return done(null, false, { message: 'Incorrect username.' }) 
        }
        const passVal = user.validPassword(password)
        if(!passVal){
            return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user);
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
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// A mock user database
const users = [
  { id: 1, username: 'test', password: 'password' }
];

// Configure the local strategy for use by Passport.
passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = users.find(user => user.username === username);
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

// Serialize user instances to and from the session.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(user => user.id === id);
  done(null, user);
});

module.exports = passport;

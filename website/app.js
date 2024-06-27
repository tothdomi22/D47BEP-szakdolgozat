const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const sequelize = require('./config/config');
const { DataTypes} = require("sequelize");
const User = require('./models/user')(sequelize, DataTypes);
const passport = require('passport')
require('./config/passport')
const session = require('express-session')

const app = express();


//Route imports
const sensorRouter = require('./routes/sensorRoutes');
const controlPanelRouter = require('./routes/controlPanelRoutes');
const authRouter = require('./routes/authRoutes')

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views')));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true}));
app.use(passport.initialize())
app.use(passport.session())

//Routes

app.get('/insert', async (req, res) => {
    const data = {username: "testun", password: "testpw", createdAt: new Date(), updatedAt: new Date()};
    try {
        const file = await User.create(data);
        console.log(file)
        res.status(200).send("success")
    } catch (error) {
        res.status(500).send(`${error}, not success`)
        
    }
})

//Login Route
app.get('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).send({message: 'Logged In Successful'})
});


//Logout Route
app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
      });
})

const isAuthenticated = (req,res,next) => {
    if(req.user) //itt a req.user az az adatbázisből lekért rekord
       return next();
    else
       return res.status(401).json({
         error: 'User not authenticated'
       })
}

app.use(isAuthenticated)
//Route
app.get('/hello', (req, res) => {
    res.send({message: 'Hello World'})
    console.log(req.user.username)
})

app.use('/', authRouter);
app.use('/', sensorRouter);
app.use('/control-panel', controlPanelRouter);

module.exports = app;
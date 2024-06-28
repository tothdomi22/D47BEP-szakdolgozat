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
app.use('/', authRouter);
app.use('/', sensorRouter);
app.use('/control-panel', controlPanelRouter);

module.exports = app;
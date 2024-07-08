const express = require('express');
const path = require('path');
const passport = require('passport')
const session = require('express-session')
const app = express();
const cors = require("cors");
require('./config/passport')


//Route imports
const sensorRouter = require('./routes/sensorRoutes');
const controlPanelRouter = require('./routes/controlPanelRoutes');
const authRouter = require('./routes/authRoutes')
const adminRouter = require('./routes/adminRoutes')

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views')));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true}));
app.use(passport.initialize())
app.use(passport.session())
app.use(cors());

//Routes
app.use('/', sensorRouter);
app.use('/', authRouter);
app.use('/control-panel', controlPanelRouter);
app.use('/admin', adminRouter);

module.exports = app;

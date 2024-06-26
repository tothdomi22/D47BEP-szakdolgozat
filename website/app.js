const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Route imports
const sensorRouter = require('./routes/sensorRoutes');
const controlPanelRouter = require('./routes/controlPanelRoutes');
const authRouter = require('./routes/authRoutes')

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views')));

//Routes
app.use('/', authRouter);
app.use('/', sensorRouter);
app.use('/control-panel', controlPanelRouter);

module.exports = app;
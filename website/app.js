const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Route imports
const sensorRoutes = require('./routes/sensorRoutes');
const controlPanelRoutes = require('./routes/controlPanelRoutes');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views')));

//Routes
app.use('/', sensorRoutes);
app.use('/control-panel', controlPanelRoutes);

module.exports = app;
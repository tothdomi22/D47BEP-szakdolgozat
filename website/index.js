const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const sequelize = require('./config/config');
const Sensor = require('./models/sensor');
const Controlpanel = require('./models/controlpanel');
const controlPanelController = require('./controllers/controlPanelController');
const sensorController = require('./controllers/sensorController');


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.get('/api/data', sensorController.getTopSensor);

app.get('/api/data/insert', sensorController.storeSensor);

app.get('/api/control-panel/data', controlPanelController.getControlPanel);

app.post('/api/control-panel/update', controlPanelController.updateControlPanel);
    
app.get('/', sensorController.indexSensor);

app.get('/control-panel', controlPanelController.indexControlPanel)



//database sync
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error syncing the database:', error);
  });
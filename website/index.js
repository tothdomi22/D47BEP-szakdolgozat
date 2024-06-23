const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const sequelize = require('./config/config');
const Sensor = require('./models/sensor');


app.get('/api/data', async (req, res) => {
    const data = await Sensor.findAll({
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json(data);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error syncing the database:', error);
  }); 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const sequelize = require('./config/config');
const Sensor = require('./models/sensor');
const Controlpanel = require('./models/controlpanel');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/data', async (req, res) => {
    const data = await Sensor.findOne({
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json(data);
});

app.get('/api/data/insert', async (req, res) => {
    try {
        const data = await Sensor.create(
            {
                temperature: 22.3,
                humidity: 54.3,
                moisture: 25,
                waterLevel: 93,
                light: 239, 
            },
        );
        res.status(200).json({message: "data created successfully"})
    } catch (error) {
        res.status(500).json({message: "error uploading data"})
    }
});


app.get('/api/control-panel/data', async (req, res) => {
    try {
        const data = await Controlpanel.findAll()
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: "error getting the data"});
    };
});


app.post('/api/control-panel/insert', async (req, res) => {
    try {
        const data = await Controlpanel.update({
            wateringDuration: req.body.wateringDuration,
            wateringPercent: req.body.wateringPercent,
            tankDepth: req.body.tankDepth,
        }, {
                where: {
                    id: 1,
                }
        });
        res.status(200).json({message: "data updated successully"})
    } catch (error) {
        res.status(500).json({message: "error updating data", data: req.body})
    }
})
    

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


app.get('/control-panel', (req, res) => {
    res.sendFile(__dirname + "/views/control-panel.html");
})



sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error syncing the database:', error);
  }); 
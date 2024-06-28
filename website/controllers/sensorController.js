const { isAuthenticated } = require('../middleware/authMiddleware');
const Sensor = require('../models/sensor');
const path = require('path')
const crypto = require('crypto');

const storeSensor = async (req, res) => {
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
};

const getTopSensor = async (req, res) => {
    const data = await Sensor.findOne({
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json(data);
};

const indexSensor = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'sensor.html'))
}

module.exports = {
    storeSensor,
    getTopSensor,
    indexSensor,
}
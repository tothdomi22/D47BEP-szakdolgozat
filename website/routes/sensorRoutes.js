const express = require('express');
const sensorController = require('../controllers/sensorController');

const router = express.Router();

router.get('/data', sensorController.getTopSensor);

router.get('/data/insert', sensorController.storeSensor);

router.get('/', sensorController.indexSensor);

module.exports = router;
const express = require('express');
const sensorController = require('../controllers/sensorController');

const router = express.Router();
const { isAuthenticated} = require('../middleware/authMiddleware')

router.get('/data', isAuthenticated, sensorController.getTopSensor);

router.get('/data/insert', isAuthenticated, sensorController.storeSensor);

router.get('/', isAuthenticated, sensorController.indexSensor);

module.exports = router;
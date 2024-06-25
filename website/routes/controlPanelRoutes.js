const express = require('express');
const controlPanelController = require('../controllers/controlPanelController');

const router = express.Router();


router.get('/', controlPanelController.indexControlPanel);

router.get('/data', controlPanelController.getLatestData);

router.post('/update', controlPanelController.updateControlPanel);

module.exports = router
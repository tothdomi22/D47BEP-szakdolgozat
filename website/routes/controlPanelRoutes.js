const express = require('express');
const controlPanelController = require('../controllers/controlPanelController');
const { isAuthenticated } = require('../middleware/authMiddleware');

const router = express.Router();


router.get('/', isAuthenticated, controlPanelController.indexControlPanel);

router.get('/data', isAuthenticated, controlPanelController.getLatestData);

router.post('/update', isAuthenticated, controlPanelController.updateControlPanel);

module.exports = router
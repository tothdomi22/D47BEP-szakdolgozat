const express = require('express')
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAuthenticated } = require('../middleware/authMiddleware');

router.get('/users_list', isAuthenticated, adminController.getUsers);
router.get('/users', isAuthenticated, adminController.index);
router.delete('/users/delete/:id', isAuthenticated, adminController.deleteUser);

module.exports = router;
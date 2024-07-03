const express = require('express')
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

router.get('/users_list', isAuthenticated, adminController.getUsers);
router.get('/users', isAdmin, adminController.index);
router.delete('/users/delete/:id', isAdmin, adminController.deleteUser);
router.put('/update/:id', isAdmin, adminController.addAdmin);

module.exports = router;
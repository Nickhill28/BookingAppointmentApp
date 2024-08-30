const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getUsers);
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;
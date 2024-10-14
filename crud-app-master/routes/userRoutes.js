const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/users', userController.createUser);      // Create a new user
router.get('/users', userController.getUsers);         // Get all users
router.get('/users/:id', userController.getUserById);  // Get a single user by ID
router.put('/users/:id', userController.updateUser);   // Update a user by ID
router.delete('/users/:id', userController.deleteUser); // Delete a user by ID

module.exports = router;

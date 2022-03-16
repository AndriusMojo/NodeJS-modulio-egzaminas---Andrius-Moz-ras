const express = require('express');
const authController = require('../controllers/authController');

const userRoutes = express.Router();

userRoutes.get('/register', authController.userRegister);
userRoutes.get('/login', authController.userLogin);

module.exports = userRoutes;

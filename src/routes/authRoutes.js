const express = require('express');
const authController = require('../controllers/authController');
const { registerUserValidate, loginUserValidate } = require('../utilities/middleware');

const authRoutes = express.Router();

authRoutes.get('/register', registerUserValidate, authController.userRegister);
authRoutes.get('/login', loginUserValidate, authController.userLogin);

module.exports = authRoutes;

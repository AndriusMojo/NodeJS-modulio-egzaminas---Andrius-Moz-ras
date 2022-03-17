const express = require('express');
const { createAccount, getAccount } = require('../controllers/accountsController');
const { isLoggedIn } = require('../utilities/middleware');

const router = express.Router();

router.get('/accounts', isLoggedIn, getAccount);
router.post('/accounts', isLoggedIn, createAccount);

module.exports = router;

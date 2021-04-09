const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/userController.js');

router.route('/').post(registerUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const getResources = require('../controllers/resourceController.js');

router.route('/').get(getResources); 

module.exports = router;
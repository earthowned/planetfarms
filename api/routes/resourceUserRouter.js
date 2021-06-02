const express = require('express')
const router = express.Router()

const { addResourceUser } = require('../controllers/resourceUserController')

router.route('/add').post(addResourceUser)

module.exports = router

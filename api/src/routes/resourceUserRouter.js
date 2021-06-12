const express = require('express')
const router = express.Router()

const { addResourceUser, getResourceUser } = require('../controllers/resourceUserController')

router.route('/').get(getResourceUser)
router.route('/add').post(addResourceUser)

module.exports = router

const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { addCollectionUser, getControllerUser } = require('../controllers/collectionUserController')

router.route('/add').post(addCollectionUser)
router.route('/').get(getControllerUser)

module.exports = router

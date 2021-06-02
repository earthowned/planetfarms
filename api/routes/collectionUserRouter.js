const express = require('express')
const router = express.Router()
const {addCollectionUser} = require('../controllers/collectionUserController')

router.route('/add').post(addCollectionUser)

module.exports = router
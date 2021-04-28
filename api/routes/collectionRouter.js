const express = require('express')
const router = express.Router()


const { addcollection } = require('../controllers/collectionController')



router.route('/add').post( addcollection)

module.exports = router

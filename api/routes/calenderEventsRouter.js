const express = require('express')
const router = express.Router()

const { addCalenderEvent, getCalenderEvents, updateCalenderEvents, searchCalenderEvents, getCalenderEventsById } = require('../controllers/calenderController')

router.route('/').get(getCalenderEvents)

router.route('/add').post(addCalenderEvent)

router
  .route('/:id')
  .put(updateCalenderEvents)
  .get(getCalenderEventsById)
router.route('/search').get(searchCalenderEvents)

module.exports = router

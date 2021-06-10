const express = require('express')
const router = express.Router()

const { addCalendarEvent, getCalendarEvents, updateCalendarEvents, searchCalendarEvents, getCalendarEventsById } = require('../controllers/calendarController')

router.route('/').get(getCalendarEvents)

router.route('/add').post(addCalendarEvent)

router
  .route('/:id')
  .put(updateCalendarEvents)
  .get(getCalendarEventsById)
router.route('/search').get(searchCalendarEvents)

module.exports = router

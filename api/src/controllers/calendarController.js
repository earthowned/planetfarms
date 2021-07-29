const Calendar = require('../models/calendarModel')
const Sequelize = process.env.DB === 'cockroach' ? require('sequelize-cockroachdb') : require('sequelize')
const Op = Sequelize.Op

// @desc Fetch all calendars events
// @route Get /api/calendar
// @access Public

const getCalendarEvents = (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['title', order]]
  Calendar.findAll({ offset: page, limit: pageSize, order: ordervalue })
    .then(calendar => res.json({ calendar, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc Add individual calendar events
// @route POST /api/calendar/add
//

const addCalendarEvent = (req, res) => {
  const { title, description, startDate, startTime, endDate, endTime } = req.body

  if (startDate >= endDate) {
    throw new Error('Start date must be before End date')
  } else {
    Calendar.create({
      title,
      description,
      startDate,
      startTime,
      endDate,
      endTime
    })
      .then(() => res.json({ message: 'Calendar Events Creted !!!' }).status(200))
      .catch((err) => res.json({ error: err.message }).status(400))
  }
}

// @desc Fetch single events
// @route Get/api/calendar/:id
// @access Public

const getCalendarEventsById = (req, res) => {
  const id = req.params.id

  Calendar.findByPk(id)
    .then(calendar => {
      if (calendar) {
        res.json(calendar)
      } else {
        res.status(404)
        throw new Error('Calendar not found')
      }
    })
    .catch((err) => res.json({ error: err.message }.status(400)))
}

// @desc Update Calendar Events
// @route PUT/api/calendar/:id

const updateCalendarEvents = (req, res) => {
  const {
    title, description, startDate, startTime, endDate, endTime
  } = req.body
  const id = req.params.id
  Calendar.findByPk(id).then(calendar => {
    if (calendar) {
      const { id } = calendar
      Calendar.update({
        title,
        description,
        startDate,
        startTime,
        endDate,
        endTime
      },
      { where: { id } })
        .then(() => res.json({ message: 'Calendar Events Updated !!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('News not found')
  })
}

// desc Search Events
// @route Post /api/calendar/search
// @access Private

const searchCalendarEvents = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  Calendar.findAll({ where: { title: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(title => res.json({ title }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addCalendarEvent, getCalendarEvents, updateCalendarEvents, searchCalendarEvents, getCalendarEventsById }

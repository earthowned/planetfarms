const Calender = require('../models/calenderModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc Fetch all calenders events
// @route Get /api/calender
// @access Public

const getCalenderEvents = (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['title', order]]
  Calender.findAll({ offset: page, limit: pageSize, order: ordervalue })
    .then(calender => res.json({ calender, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc Add individual calender events
// @route POST /api/calender/add
//

const addCalenderEvent = (req, res) => {
  const { title, description, startDate, startTime, endDate, endTime } = req.body

  if (startDate >= endDate) {
    throw new Error('Start date must be before End date')
  } else {
    Calender.create({
      title,
      description,
      startDate,
      startTime,
      endDate,
      endTime
    })
      .then(() => res.json({ message: 'Calender Events Creted !!!' }).status(200))
      .catch((err) => res.json({ error: err.message }).status(400))
  }
}

// @desc Fetch single events
// @route Get/api/calender/:id
// @access Public

const getCalenderEventsById = (req, res) => {
  const id = req.params.id

  Calender.findByPk(id)
    .then(calender => {
      if (calender) {
        res.json(calender)
      } else {
        res.status(404)
        throw new Error('Calender not found')
      }
    })
    .catch((err) => res.json({ error: err.message }.status(400)))
}

// @desc Update Calender Events
// @route PUT/api/calender/:id

const updateCalenderEvents = (req, res) => {
  const {
    title, description, startDate, startTime, endDate, endTime
  } = req.body
  const id = req.params.id
  Calender.findByPk(id).then(calender => {
    if (calender) {
      const { id } = calender
      Calender.update({
        title,
        description,
        startDate,
        startTime,
        endDate,
        endTime
      },
      { where: { id } })
        .then(() => res.json({ message: 'Calender Events Updated !!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('News not found')
  })
}

// desc Search Events
// @route Post /api/calender/search
// @access Private

const searchCalenderEvents = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  Calender.findAll({ where: { title: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(title => res.json({ title }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addCalenderEvent, getCalenderEvents, updateCalenderEvents, searchCalenderEvents, getCalenderEventsById }

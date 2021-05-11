const News = require('../models/newsModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc    Fetch all News
// @route   GET /api/News
// @access  Public
const getNews = (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['title', order]]
  News.findAll({ offset: page, limit: pageSize, order: ordervalue })
    .then(news => res.json({ news, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual News
// @route   POST /api/News/add
// @access  Public
const addNews = (req, res) => {
  const {
    title, message, docType, readTime, language, creator, textDetail, imageDetail, videoDetail, category
  } = req.body
  News.create({
    // _attachments: 'uploads/' + req.file.filename,
    title,
    message,
    docType,
    readTime,
    language,
    creator,
    textDetail,
    imageDetail,
    videoDetail,
    category
  })
    .then(() => res.json({ message: 'News Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update a News
// @route   PUT /api/News/:id
// @access  Public
const updateNews = (req, res) => {
  const {
    title, message, docType, readTime, language, creator, textDetail, imageDetail, videoDetail
  } = req.body
  const id = req.params.id
  News.findByPk(id).then(product => {
    if (product) {
      const { id } = product
      News.update({
        _attachments: 'uploads/' + req.file.filename,
        title,
        message,
        docType,
        readTime,
        language,
        creator,
        textDetail,
        imageDetail,
        videoDetail
      },
      { where: { id } })
        .then(() => res.json({ message: 'News Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('News not found')
  })
}

// @desc    Fetch single News
// @route   GET /api/News/:id
// @access  Public
const getNewsById = (req, res) => {
  const id = req.params.id

  News.findByPk(id)
    .then(news => {
      if (news) {
        res.json(news)
      } else {
        res.status(404)
        throw new Error('News not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Delete a News
// @route   delete /api/News/:id
// @access  Public
const deleteNews = (req, res) => {
  const id = req.params.id
  News.findByPk(id).then(news => {
    if (news) {
      const { id } = news
      News.destroy({ where: { id } })
        .then(() => res.json({ message: 'News Deleted !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('News not found')
    }
  })
}

// @desc    Search title
// @route   POST /api/News/search
// @access  Private
const searchNewsTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  News.findAll({ where: { title: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(title => res.json({ title }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addNews, getNews, updateNews, getNewsById, deleteNews, searchNewsTitle }

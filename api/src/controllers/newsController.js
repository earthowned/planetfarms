const Sequelize = require('sequelize')
const db = require('../models')
const Op = Sequelize.Op
const { changeFormat } = require('../helpers/filehelpers')

// @desc    Fetch all News
// @route   GET/api/news/community/:id
// @access  Public
const getNews = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const order = req.query.order || 'DESC'
  const ordervalue = order && [['createdAt', order]]
  db.News.findAndCountAll({
    offset: (page - 1) * pageSize,
    limit: pageSize,
    order: ordervalue,
    where: { deleted: false },
    attributes: { exclude: ['deleted'] },
    include: [{
      model: db.Community,
      attributes: ['id'],
      where: { id: req.params.id }
    }]
  })
    .then(news => {
      const totalPages = Math.ceil(news.count / pageSize)
      res.json({
        news: news.rows.map(rec => ({ ...rec.dataValues, _attachments: changeFormat(rec._attachments) })),
        totalItems: news.count,
        totalPages,
        page,
        pageSize
      }).status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual News
// @route POST /api/news/add/community/:id
// @access  Public
const addNews = (req, res) => {
  let filename = ''
  if (req.file) {
    filename = req.file.filename
  }

  const {
    title, message, docType, readTime, language, creator, textDetail, imageDetail, videoDetail, category, richtextId
  } = req.body
  db.News.create({
    _attachments: 'news/' + filename,
    title,
    message,
    docType,
    readTime,
    language,
    creator,
    textDetail,
    imageDetail,
    videoDetail,
    category,
    richtextId,
    communityId: req.params.id
  })
    .then((data) => res.json({ data }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update a News
// @route   PUT /api/news/:newsId/community/:id
// @access  Public
const updateNews = (req, res) => {
  let filename = ''
  if (req.file) {
    filename = req.file.filename
  }
  const {
    title, message, docType, readTime, language, creator, textDetail, imageDetail, videoDetail, category
  } = req.body
  const id = req.params.newsId

  db.News.findByPk(id,
    {
      include: [{
        model: db.Community,
        attributes: [],
        where: { id: req.params.id }
      }]
    }
  ).then(news => {
    if (news) {
      const { id } = news

      if (filename) {
        db.News.update({
          _attachments: 'news/' + filename,
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
        },
        { where: { id } })
          .then(() => res.json({ message: 'News Updated !!!' }).status(200))
          .catch((err) => res.json({ error: err.message }).status(400))
      } else {
        db.News.update({
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
        },
        { where: { id } })
          .then(() => res.json({ message: 'News Updated !!!' }).status(200))
          .catch((err) => res.json({ error: err.message }).status(400))
      }
    } else {
      return res.status(404).json({ message: 'News not found' })
    }
  })
}

// @desc    Fetch single News
// @route   GET /api/news/:newsId/community/:id
// @access  Public
const getNewsById = (req, res) => {
  db.News.findByPk(req.params.newsId, {
    include: [{
      model: db.Community,
      attributes: [],
      where: { id: req.params.id }
    },
    {
      model: db.RichText,
      include: [db.Photo, db.Text, db.Video]
    }
    ]
  })
    .then(news => {
      if (news) {
        res.json({ ...news.dataValues, _attachments: changeFormat(news.dataValues._attachments) })
      } else {
        res.status(404)
        throw new Error('News not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Delete a News
// @route   DELETE /api/news/:newsId/community/:id
// @access  Public
const deleteNews = (req, res) => {
  const id = req.params.newsId
  db.News.findByPk(id, {
    include: [{
      model: db.Community,
      attributes: [],
      where: { id: req.params.id }
    }]
  }).then(news => {
    if (news) {
      const { id } = news
      db.News.update({ deleted: true }, { where: { id } })
        .then(() => res.json({ message: 'News Deleted !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      return res.status(404).json({ message: 'News not found' })
    }
  })
}

// @desc    Search title
// @route   POST /api/news/community/:id/search
// @access  Private
const searchNewsTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  db.News.findAll({
    where: { title: { [Op.iLike]: '%' + title + '%' } },
    order: [['title', order]],
    include: [{
      model: db.Community,
      attributes: [],
      where: { id: req.params.id }
    }]
  })
    .then(news => res.json({ news: news.map(rec => ({ ...rec.dataValues, _attachments: changeFormat(rec._attachments) })) }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addNews, getNews, updateNews, getNewsById, deleteNews, searchNewsTitle }

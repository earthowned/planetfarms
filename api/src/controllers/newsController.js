const Sequelize = require('sequelize')
const db = require('../models')
const Op = Sequelize.Op
const { changeFormat } = require('../helpers/filehelpers')

// @desc    Fetch all News
// @route   GET/api/news
// @route   GET/api/news/community/:id
// @access  Public
const getNews = async (req, res) => {
  try {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1
    const order = req.query.order || 'DESC'
    const ordervalue = order && [['createdAt', order]]
    const { title = '', filter = '' } = req.query
    const userId = req?.user?.id || 0
    whereQuery = { [Op.and]: [
      { deleted: false },
      { title: { [Op.iLike]: '%' + title + '%' } },
      filter ? { category: { [Op.iLike] : {[Op.any]: filter.split(',')}} } : {}
    ] }
    const followIdArrays = await db.CommunityUser.findAll({
      attributes: ['communityId'],
      where: { userId: userId }
    }).then(communities => {
      return (communities || []).reduce((acc, community) => {
        acc.push(community.communityId)
        return acc
      }, [0])
    })
    whereCommunity = { where: {[Op.and]: [ { id: {[Op.or]: followIdArrays} }, req.params.id ? {id: req.params.id}: {}] } }
    db.News.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      order: ordervalue,
      where: whereQuery,
      attributes: { include: [
        'news.*',
        [
          db.sequelize.literal(`(
            SELECT "texts"."textDescription" FROM "rich_texts" LEFT JOIN "texts" ON "texts"."richtextId" = "rich_texts"."id" WHERE "rich_texts"."id" = "news"."richtextId" ORDER BY "texts"."order" LIMIT 1
          )`),
          'smallText'
        ]
      ], exclude: ['deleted'] },
      include: [{
        model: db.Community,
        attributes: ['id'],
        ...whereCommunity
      },
      {
        model: db.User
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
  } catch (err) {
    res.json({ error: err.message }).status(400)
  }
}

// @desc    Add individual News
// @route POST /api/news/add
// @access  Public
const addNews = (req, res) => {
  let filename = ''
  if (req.file) {
    filename = req.file.filename
  }

  const {
    title, message, docType, readTime, language, creator, textDetail, imageDetail, videoDetail, category, richtextId, communityId
  } = req.body
  if (communityId == null) {
    res.json({ error: 'communityId must be provided' }).status(400)
  }
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
    communityId
  })
    .then((data) => res.json({ data }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update a News
// @route   PUT /api/news/:newsId
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

  db.News.findByPk(id).then(news => {
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
// @route   GET /api/news/:newsId
// @access  Public
const getNewsById = async (req, res) => {
  const userId = req?.user?.id || 0
  const followIdArrays = await db.CommunityUser.findAll({
    attributes: ['communityId'],
    where: { userId: userId }
  }).then(communities => {
    return (communities || []).reduce((acc, community) => {
      acc.push(community.communityId)
      return acc
    }, [0])
  })
  whereCommunity = { where: {[Op.and]: [ { id: {[Op.or]: followIdArrays} }] } }

  db.News.findByPk(req.params.newsId, {
    include: [{
      model: db.Community,
      attributes: [],
      ...whereCommunity
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
// @route   DELETE /api/news/:newsId
// @access  Public
const deleteNews = (req, res) => {
  const id = req.params.newsId
  db.News.findByPk(id).then(news => {
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

module.exports = { addNews, getNews, updateNews, getNewsById, deleteNews }

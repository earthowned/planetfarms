const { Op } = require('sequelize')
const db = require('../models')
const { changeFormat } = require('../helpers/filehelpers')

// @desc Get the community-users
// @route GET /api/community-users
// @access Public

const getCommunityUsers = async (req, res) => {
  try {
    const data = await db.CommunityUser.findAll()
    res.json({
      data
    })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// @desc follow community
// @route POST /api/community-users/follow
// @access Public

const followCommunity = async (req, res) => {
  try {
    const { communityId, active } = req.body

    // checking the relationship between userid and communityid
    const communityUser = await db.CommunityUser.findOne({
      where: {
        userId: req.user.id,
        communityId
      }
    })

    if (communityUser) {
      // checking the followed user
      const followedUser = await db.CommunityUser.findOne({
        where: {
          userId: req.user.id,
          communityId,
          active: true
        }
      })

      if (followedUser) {
        // unfollow the user
        await db.CommunityUser.update({ active: false }, {
          where: {
            userId: req.user.id,
            communityId
          }
        })
        return res.json({
          message: 'You have unfollowed the community.'
        })
      }

      // follow the community
      await db.CommunityUser.update({ active: true }, {
        where: {
          userId: req.user.id,
          communityId
        }
      })
      return res.json({
        message: 'Congratulation for following the community.'
      })
    }

    await db.CommunityUser.create({ userId: req.user.id, communityId, active })
    res.json({
      message: 'Congratulation for following the community.'
    })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// @desc Get the community-users
// @route GET /api/community-users/community/:id
// @access Public

const getAllMembers = async (req, res) => {
  try {
    const pageSize = 8
    const page = Number(req.query.pageNumber) || 1
    const order = req.query.order || 'ASC'
    const ordervalue = order && [['createdAt', order]]

    const data = await db.CommunityUser.findAndCountAll(
      {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: ordervalue,
        where: { communityId: req.params.id, active: true },
        attributes: ['id'],
        include: [{
          model: db.User,
          attributes: ['email', 'firstName']
        }],
        required: true
      }
    )
    const totalPages = Math.ceil(data.count / pageSize)
    res.json({
      communities_users: data.rows.map((rec) => ({
        ...rec.dataValues,
        filename: changeFormat(rec.filename)
      })),
      totalItems: data.count,
      totalPages,
      page,
      pageSize
    }).status(200)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// @desc    Search Name
// @route   POST /api/news/community/:id/search
// @access  Private
const searchMemberName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.CommunityUser.findAll(
    {
      where: { communityId: req.params.id, active: true },
      attributes: ['id'],
      include: [{
        model: db.User,
        attributes: ['email', 'firstName'],
        where: {
          [Op.or]: [
            { firstName: { [Op.iLike]: '%' + name + '%' } },
            { email: { [Op.iLike]: '%' + name + '%' } }
          ]
        }
      }],
      required: true
    }
  )
    .then(member => res.json({ member }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getCommunityUsers, followCommunity, getAllMembers, searchMemberName }

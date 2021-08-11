const { Op } = require('sequelize')
const db = require('../models')
const { changeFormat } = require('../helpers/filehelpers')
const { paginatedResponse } = require('../utils/query')

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
    const { search, pageNumber = 1, pageSize = 8 } = req.query
    const ordervalue = [['createdAt', req.query.order || 'ASC']]
    const data = await db.CommunityUser.findAndCountAll({
      offset: (pageNumber - 1) * pageSize,
      limit: pageSize,
      order: ordervalue,
      where: { communityId: req.params.id, active: true },
      attributes: ['id', 'createdAt'],
      include: [{
        model: db.User,
        attributes: ['email', 'firstName', 'userID'],
        where: search ? {
          [Op.or]: [
            { firstName: { [Op.iLike]: '%' + search + '%' } },
            { email: { [Op.iLike]: '%' + search + '%' } }
          ]
        } : {}
      }],
      required: true,
      distinct: true
    })
    res.status(200)
      .json({
        status: true,
        message: 'Fetched successfully',
        ...paginatedResponse({
          data: {
            ...data,
            rows: data.rows.map((rec) => ({
              ...rec.dataValues,
              filename: changeFormat(rec.filename)
            }))
          },
          pageSize,
          pageNumber
        })
      })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getCommunityUsers, followCommunity, getAllMembers }

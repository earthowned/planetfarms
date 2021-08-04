const { Op } = require('sequelize')
const db = require('../models')

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
      const data = await db.CommunityUser.findAll(
        {
          where: { communityId: req.params.id, active: true },
          attributes: ['id', 'userId', 'role'],
          include: [{
            model: db.User,
            attributes: ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth']
          }],
          required: true
        }
      )
        
      // flattening the array to show only one object
      const newArray = data.map(item => {
        const { userId, role, id } = item.dataValues
        const { ...rest } = item.user
        return { id, userId, role, ...rest.dataValues }
      }
      )
  
      res.json({
        results : newArray
      })
      return;
  } catch (error) {
    res.status(400).json({ error })
  }
}

// @desc Update the community users
// @route PUT /api/community-users/:memberId/community/:id/
// @access Public

const updateMemberRole = async (req, res) => {
  try {
    const { role } = req.body
    await db.CommunityUser.update({ role }, { where: { id: parseInt(req.params.memberId) } })
    res.json({ message: 'Successfully role updated' })
  } catch (error) {
    res.status(400).json({ error })
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

module.exports = { followCommunity, getAllMembers, searchMemberName, updateMemberRole}

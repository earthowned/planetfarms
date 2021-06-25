const { Op } = require('sequelize')
const db = require('../models')

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
    res.status(400).json({error})
  }
}

// @desc follow community
// @route POST /api/community-users/follow
// @access Public

const followCommunity = async (req, res) => {
   try {
    const { userId, communityId, active } = req.body

    // checking the relationship between userid and communityid
    const communityUser = await db.CommunityUser.findOne({where: {
        userId, 
        communityId
    }})

    if(communityUser) {
        // checking the followed user
        const followedUser = await db.CommunityUser.findOne({where: {
        userId, 
        communityId,
        active: true
        }})

        if(followedUser) {
            //unfollow the user
            await db.CommunityUser.update({active: false}, {where: {
            userId, 
            communityId
            }})
            return  res.json({
                message: 'You have unfollowed the community.'
            })
        }

        //follow the community
            await db.CommunityUser.update({active: true}, {where: {
            userId, 
            communityId
            }})
            return  res.json({
                message: 'Congratulation for following the community.'
            })
        
    }
    
    await db.CommunityUser.create({ userId, communityId, active })
    res.json({
        message: 'Congratulation for following the community.'
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

// @desc Get the community-users
// @route GET /api/community-users/community/:id
// @access Public

const getAllMembers = async (req, res) => {
  try {
    const data = await db.CommunityUser.findAll(
    {
      where: {communityId: req.params.id, active: true},
      attributes: ['id'],
      include: [{
        model: db.User,
        attributes: ["email", "name"]
      }],
      required: true
    },
    )
    res.json({
      data
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

// @desc    Search Name
// @route   POST /api/news/community/:id/search
// @access  Private
const searchMemberName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.CommunityUser.findAll({ 
    where: { communityId: req.params.id, active: true}, 
    attributes: ['id'],
      include: [{
        model: db.User,
        attributes: ["email", "name"],
        where: {
            [Op.or]: [
                {name: { [Op.iLike]: '%' + name + '%' }},
                {email: { [Op.iLike]: '%' + name + '%' }},
            ]
        }
      }],
      required: true
   })
    .then(member => res.json({ member }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getCommunityUsers, followCommunity, getAllMembers, searchMemberName};
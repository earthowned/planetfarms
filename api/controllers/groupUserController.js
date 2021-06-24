const { Op } = require('sequelize')
const db = require('../models')

// @desc Get the group-users
// @route GET /api/group-users
// @access Public

const getGroupUsers = async (req, res) => {
  try {
    const data = await db.GroupUser.findAll();
    res.json({
      data
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

// @desc follow group
// @route POST /api/group-users/follow
// @access Public

const followGroup = async (req, res) => {
   try {
    const { userId, groupId, active } = req.body

    // checking the relationship between userid and groupid
    const groupUser = await db.GroupUser.findOne({where: {
        userId, 
        groupId
    }})

    if(groupUser) {
        // checking the followed user
        const followedUser = await db.GroupUser.findOne({where: {
        userId, 
        groupId,
        active: true
        }})

        if(followedUser) {
            //unfollow the user
            await db.GroupUser.update({active: false}, {where: {
            userId, 
            groupId
            }})
            return  res.json({
                message: 'You have unfollowed the group.'
            })
        }

        //follow the group
            await db.GroupUser.update({active: true}, {where: {
            userId, 
            groupId
            }})
            return  res.json({
                message: 'Congratulation for following the group.'
            })
        
    }
    
    await db.GroupUser.create({ userId, groupId, active })
    res.json({
        message: 'Congratulation for following the group.'
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

// @desc Get the group-users
// @route GET /api/group-users/group/:id
// @access Public

const getAllGroupMembers = async (req, res) => {
  try {

    const group = await db.Group.findByPk(req.params.id);
    if(!group) return res.json({message: 'group doesn\'t exists.'});

    const data = await db.GroupUser.findAll(
    {
      where: {groupId: req.params.id},
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
// @route   POST /api/news/group/:id/search
// @access  Private
const searchGroupMemberName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.Group.findByPk(req.params.id)
    .then(community => {
        if(!community) return res.json({message: 'group doesn\'t exists.'});
    }
    )
    .catch(error => (res.json(error)))
    ;
    

  db.GroupUser.findAll({ 
    where: { groupId: req.params.id}, 
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

module.exports = { getGroupUsers, followGroup, getAllGroupMembers, searchGroupMemberName};
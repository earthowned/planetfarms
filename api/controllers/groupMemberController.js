const { Op } = require('sequelize')
const db = require('../models')

// @desc Get the group-members
// @route GET /api/group-members
// @access Public

const getGroupMembers = async (req, res) => {
  try {
    const data = await db.GroupMember.findAll();
    res.json({
      data
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

// @desc follow group
// @route POST /api/group-members/community/:id/follow
// @access Public

const followGroup = async (req, res) => {
  try {
    const {communityId, userId, groupId} = req.body;

    // checking member of community
    const member = await db.CommunityUser.findOne({
      where: {userId, communityId, active: true}
    });
    if(!member) return res.json({message: 'You are not member'});

    //checking group
    const group = await db.Group.findOne({where: {id: groupId, communityId, deleted: false}});
    if(!group) return res.json({message: 'Group doesn\'t exits.'});

      // checking the relationship between userid and groupid
    const groupMember = await db.GroupMember.findOne({where: {
        memberId: member.id, 
        groupId
    }})

       if(groupMember) {
        // checking the followed user
        const followedMember = await db.GroupMember.findOne({where: {
        memberId: member.id, 
        groupId,
        active: true
        }});

        if(followedMember) {
            //unfollow the user
            await db.GroupMember.update({active: false}, {where: {
            memberId: member.id, 
            groupId
            }})
            return  res.json({
                message: 'You have unfollowed the group.'
            })
        }

               //follow the group
            await db.GroupMember.update({active: true}, {where: {
            memberId: member.id, 
            groupId
            }})
            return  res.json({
                message: 'Congratulation for following the group.'
            })
      
          }

    // creating the link
    await db.GroupMember.create({ memberId: member.id, groupId})
    res.json({
        message: 'Congratulation for following the group.'
    })
    
  } catch (error) {
    res.json(error);
  }
}

// @desc Get the group-members
// @route GET /api/group-members/group/:id
// @access Public

const getAllGroupMembers = async (req, res) => {
  try {
      const group = await db.Group.findByPk(req.params.id);

      if(!group) return res.json({message: 'Group doesn\'t exists.'})

    const data = await db.GroupMember.findAll(
    {
      where: {groupId: req.params.id},
      attributes: ['id'],
      include: [{
        model: db.CommunityUser,
        attributes: ['id'],
        include: [{
          model: db.User,
          attributes: ['email', "name"],
        }],
      }],
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
    .then(group => {
         if(!group) return res.json({message: 'Group doesn\'t exists.'})
    }).catch(error => {
        return res.json({error})});

  db.GroupMember.findAll({ 
    where: { groupId: req.params.id}, 
    attributes: ['id'],
      include: [{
        model: db.CommunityUser,
        attributes: {exclude: ['id','communityId', 'active', 'createdAt', 'updatedAt']},
        include: [
          {
            model: db.User,
            attributes: ['email', 'name'],
             where: {
            [Op.or]: [
                {name: { [Op.iLike]: '%' + name + '%' }},
                {email: { [Op.iLike]: '%' + name + '%' }},
            ]
        }
          }
        ]
      }],
      required: false
   })
    .then(member => res.json({ member }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getGroupMembers, followGroup, getAllGroupMembers, searchGroupMemberName};
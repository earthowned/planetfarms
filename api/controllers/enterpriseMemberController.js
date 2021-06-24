const { Op } = require('sequelize')
const db = require('../models')

// @desc Get the enterprise-members
// @route GET /api/enterprise-members
// @access Public

const getEnterpriseMembers = async (req, res) => {
  try {
    const data = await db.EnterpriseMember.findAll();
    res.json({
      data
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

// @desc follow enterprise
// @route POST /api/enterprise-members/community/:id/follow
// @access Public

const followEnterprise = async (req, res) => {
  try {
    const {communityId, userId, enterpriseId} = req.body;

    // checking member of community
    const member = await db.CommunityUser.findOne({
      where: {userId, communityId, active: true}
    });
    if(!member) return res.json({message: 'You are not member'});

    //checking enterprise
    const enterprise = await db.Enterprise.findOne({where: {id: enterpriseId, communityId, deleted: false}});
    if(!enterprise) return res.json({message: 'Enterprise doesn\'t exits.'});

      // checking the relationship between userid and enterpriseid
    const enterpriseMember = await db.EnterpriseMember.findOne({where: {
        memberId: member.id, 
        enterpriseId
    }})

       if(enterpriseMember) {
        // checking the followed user
        const followedMember = await db.EnterpriseMember.findOne({where: {
        memberId: member.id, 
        enterpriseId,
        active: true
        }});

        if(followedMember) {
            //unfollow the user
            await db.EnterpriseMember.update({active: false}, {where: {
            memberId: member.id, 
            enterpriseId
            }})
            return  res.json({
                message: 'You have unfollowed the enterprise.'
            })
        }

               //follow the enterprise
            await db.EnterpriseMember.update({active: true}, {where: {
            memberId: member.id, 
            enterpriseId
            }})
            return  res.json({
                message: 'Congratulation for following the enterprise.'
            })
      
          }

    // creating the link
    await db.EnterpriseMember.create({ memberId: member.id, enterpriseId})
    res.json({
        message: 'Congratulation for following the enterprise.'
    })
    
  } catch (error) {
    res.json(error);
  }
}

// @desc Get the enterprise-members
// @route GET /api/enterprise-members/enterprise/:id
// @access Public

const getAllEnterpriseMembers = async (req, res) => {
  try {
      const enterprise = await db.Enterprise.findByPk(req.params.id);

      if(!enterprise) return res.json({message: 'Enterprise doesn\'t exists.'})

    const data = await db.EnterpriseMember.findAll(
    {
      where: {enterpriseId: req.params.id},
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
// @route   POST /api/news/enterprise/:id/search
// @access  Private
const searchEnterpriseMemberName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'
    
  db.Enterprise.findByPk(req.params.id)
    .then(enterprise => {
         if(!enterprise) return res.json({message: 'Enterprise doesn\'t exists.'})
    }).catch(error => {
        return res.json({error})});

  db.EnterpriseMember.findAll({ 
    where: { enterpriseId: req.params.id}, 
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

module.exports = { getEnterpriseMembers, followEnterprise, getAllEnterpriseMembers, searchEnterpriseMemberName};
const db = require('../models')
const Sequelize = require('sequelize')
const { sequelize } = require('../models')
const Op = Sequelize.Op

// @desc Fetch all communities
// @route GET/api/communities
// @access Public
const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize
  return { offset, limit }
}

const getCommunities = async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  // const order = req.query.order || 'DESC'
  // const ordervalue = order && [['name', order]]
  try {
    const communities = await db.Community.findAndCountAll({
                offset: (page - 1),
                limit: pageSize,
                // ordervalue,
                order: [['createdAt', 'DESC']],
                where: {deleted: false},
                attributes: {exclude: ['deleted']},
                include: [{
                  model: db.User,
                  as: 'followers',
                  attributes: ['id'],
                  through: {
                    attributes: ['active'],
                    as: 'followStatus',
                    raw: true,
                  }
                }],
              })

  const totalPages = Math.ceil(communities.count / pageSize)
  res.json({
        communities: communities.rows,
        totalItems: communities.count,
        totalPages,
        page, 
        pageSize 
   }).status(200);

  } catch (error) {
    res.json(error);
  }
}

// @desc Fetch all communities by users
// @route GET/api/communities/user/:id
// @access Public

const getUserCommunities = async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  // const order = req.query.order || 'DESC'
  // const ordervalue = order && [['name', order]]
  
  db.Community.findAll({
    offset: page,
    limit: pageSize,
    // ordervalue,
    attributes: {exclude: ['deleted']},
    order: [['createdAt', 'DESC']],
     where: {
      creatorId: req.params.id,
      deleted: false
    },
    include: [{
      model: db.User,
      as: 'followers',
      attributes: ['id'],
      through: {
        attributes: ['active'],
        as: 'followStatus'
      }
    }
  ]
  })
    .then(communities => {
      paginate({ page, pageSize })
      res.json({ communities, page, pageSize }).status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}


// @desc Add individual communities
// @route POST /api/communities/add
// @access Private
const createCommunity = async (req, res) => {
  try {
      let filename = ''
    if (req.file) {
      filename = req.file.filename
    }

    if (!req.body.creatorId) {
      return res.json({ message: 'Not authorized to create.' })
    }

    // auto follow through transactions
    if(req.body.auto_follow) {
       const result = await sequelize.transaction(async (t) => {
         const community = await db.Community.create({ ...req.body, slug: "", attachment: 'uploads/' + filename }, {transaction: t});
           const idArrays = await db.User.findAll({attributes: ['id']}, {transaction: t});
           const allFollow = [];

          for (let i = 0; i < idArrays.length; i++) {
            const followObj = {
              userId: parseInt(idArrays[i].id),
              communityId: community.id
            };
            allFollow.push(followObj);
          }

           await db.CommunityUser.bulkCreate(allFollow, {transaction: t});
          return 'Community is created with autoFollow'
        })

        return res.json({message: result});
    }

    await db.Community.create({ ...req.body, slug: "", attachment: 'uploads/' + filename });
    res.json({ message: 'Community is Created !!!' }).status(200);

  } catch (error) {
    res.json({ error: error.message }).status(400)
  }
}

// @desc Fetch single communities
// @route GET /api/communities/:id
// @access Public
const getCommunityById = async (req, res) => {
  const id = req.params.id

  db.Community.findByPk(id, {
    include: [{
      model: db.User,
      as: 'creator'
    },
    {
      model: db.User,
      as: 'followers'
    }
    ]
  })
    .then(communities => {
      if (communities) {
        res.json(communities)
      } else {
        res.status(404)
        throw new Error('Community not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc Delete single groups
// @route GET /api/communities/:id
// @access Private
const deleteCommunity = async (req, res) => {
  try {
          const id = req.params.id

        if (!req.body.creatorId) {
          return res.json({ message: 'Not authorized to delete.' })
        }
        const community = await db.Community.findByPk(id);

   if (community) {
      const { id } = community
      if (community.creatorId !== req.body.creatorId) {
        return res.json({ message: 'Not authorized to delete.' })
      }

      const result = await sequelize.transaction(async (t) => {
        const communityUserIds = await db.CommunityUser.findAll({where: {communityId: id}}, {transaction: t});

        communityUserIds.forEach(async function (communityId) { 
          const {id} = communityId
          await db.CommunityUser.update({active: false}, {where: {id}}, {transaction: t});
        })

        await db.Community.update({deleted: true}, { where: { id } }, {transaction: t});

        return 'Community Deleted with links.'
      })
      
      return res.json({ message: result }).status(200);
    } else {
      res.status(404)
      throw new Error('Community not found')
    }
  } catch (error) {
    res.json(error);
  }
}

// @desc Update a communities
// @route PUT /api/communities/:id
// @access Private
const updateCommunity = async (req, res) => {
  try {
          const {
          name, description, creatorId
        } = req.body

        let filename = ''
        if (req.file) {
          filename = req.file.filename
        }

        if (!creatorId) {
          return res.json({ message: 'Not authorized to update.' })
        }
        const id = req.params.id

  const community = await db.Community.findByPk(id);
  if (community) {
      const { id } = community
      if (community.creatorId !== creatorId) {
        return res.json({ message: 'Not authorized to update.' })
      }

       // auto follow through transactions
          if(req.body.auto_follow) {
            const result = await sequelize.transaction(async (t) => {
              
                const userIdArrays = await db.User.findAll({attributes: ['id']});
             
                const followIdArrays = await db.CommunityUser.findAll({attributes: ['userId'], 
                where: {communityId: community.id}});
                const newFollowIds = followIdArrays.map(item => item.userId);
                const newUserIds = userIdArrays.map(item => item.id);
                const idArrays = newUserIds.filter(item => {
                  return newFollowIds.indexOf(item) === -1;
                });

                const allFollow = [];

                for (let i = 0; i < idArrays.length; i++) {
                  const followObj = {
                    userId: parseInt(idArrays[i]),
                    communityId: community.id
                  };
                  allFollow.push(followObj);
                }

                await db.CommunityUser.bulkCreate(allFollow, {transaction: t});
                await db.Community.update({ ...req.body, slug: "", attachment: 'uploads/' + filename }, 
                { where: { id }}, 
                {transaction: t});

                return 'Community is updated with autoFollow'
              })

              return res.json({message: result});
          }
          else {
              await db.Community.update({
                  name,
                  description,
                  creatorId: creatorId,
                  attachment: 'uploads/' + filename
                },
                { where: { id }, returning: true, attributes: ['id'] })
                return res.json({ message: 'Community Updated !!!'}).status(200);
          }
     
    } else {
      res.status(404)
      throw new Error('Community not found')
    }

  } catch (error) {
    res.json(error);
  }
}

// @desc Search name
// @route POST /api/communities/search
// @access Private
const searchCommunityName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.Community.findAll({ where: { name: { [Op.iLike]: '%' + name + '%' } }, order: [['name', order]] })
    .then(communities => res.json({ communities }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

// @desc Search usercommunity name
// @route POST /api/communities/user/:id/search
// @access Private
const searchUserCommunityName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.Community.findAll({include: [{
      model: db.User,
      as: 'creator' && 'followers',
      attributes: ['id'],
      where: {id: req.params.id },
      through: {
         attributes: ['active'],
         as: 'followStatus',
         where: {
           active: true
         }
        }
    }],
     where: { name: { [Op.iLike]: '%' + name + '%' } }, order: [['name', order]] })
    .then(communities => res.json({ communities }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getCommunities, getUserCommunities, searchUserCommunityName, createCommunity, getCommunityById, deleteCommunity, updateCommunity, searchCommunityName }

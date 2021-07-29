const db = require('../models')
const Sequelize = process.env.DB === 'cockroach' ? require('sequelize-cockroachdb') : require('sequelize')
const { sequelize } = require('../models')
const Op = Sequelize.Op
const { changeFormat } = require('../helpers/filehelpers')

// @desc Fetch all communities
// @route GET/api/communities
// @access Public
const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize
  return { offset, limit }
}

const getCommunities = async (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 1
  // const order = req.query.order || 'DESC'
  // const ordervalue = order && [['name', order]]
  try {
    const communities = await db.Community.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      // ordervalue,
      order: [['createdAt', 'DESC']],
      where: { deleted: false },
      attributes: {
        include: [
          [
            sequelize.literal(`(
              SELECT COUNT("userId")
              FROM communities_users
              WHERE "communityId" = communities.id AND active = true
            )`),
            'followersCount'
          ],
          [
            sequelize.literal(`
              CASE WHEN "creatorId"=${req.user.id} THEN 'true'
                ELSE 'false'
              END
            `), 'isCreator'
          ],
          [
            sequelize.literal(`(
              SELECT COUNT("userId") 
              FROM communities_users
              WHERE "communityId" = communities.id AND active = true AND "userId" = ${req.user.id}
            )`),
            'isFollowed'
          ]
        ],
        exclude: ['deleted']
      }
    })
    const totalPages = Math.ceil(communities.count / pageSize)
    res.json({
      communities: communities.rows.map(rec => ({ ...rec.dataValues })),
      totalItems: communities.count,
      totalPages,
      page,
      pageSize
    }).status(200)
  } catch (error) {
    res.json(error)
  }
}

// @desc Fetch all communities by users
// @route GET/api/communities/user/
// @access Public

const getUserCommunities = async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  // const order = req.query.order || 'DESC'
  // const ordervalue = order && [['name', order]]

  db.Community.findAndCountAll({
    offset: (page - 1) * pageSize,
    limit: pageSize,
    // ordervalue,
    attributes: {
      include: [
        [
          sequelize.literal(`(
            SELECT COUNT("userId")
            FROM communities_users
            WHERE "communityId" = communities.id AND active = true
          )`),
          'followersCount'
        ],
        [
          sequelize.literal(`
            CASE WHEN "creatorId"=${req.user.id} THEN 'true'
              ELSE 'false'
            END
          `), 'isCreator'
        ],
        [
          sequelize.literal(`(
            SELECT COUNT("userId") 
            FROM communities_users
            WHERE "communityId" = communities.id AND active = true AND "userId" = ${req.user.id}
          )`),
          'isFollowed'
        ]
      ],
      exclude: ['deleted']
    },
    order: [['createdAt', 'DESC']],
    where: { deleted: false },
    include: [{
      model: db.User,
      as: 'followers',
      attributes: [],
      where: { id: req.user.id },
      through: { attributes: [] }
    }]
  })
    .then(communities => {
      const totalPages = Math.ceil(communities.count / pageSize)
      res.json({
        communities: communities.rows.map(rec => ({ ...rec.dataValues, attachment: changeFormat(rec.attachment) })),
        totalItems: communities.count,
        totalPages,
        page,
        pageSize
      }).status(200)
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
    if (!req.user.id) {
      return res.json({ message: 'Not authorized to create.' })
    }
    // auto follow through transactions
    if (req.body.auto_follow === 'true') {
      const result = await sequelize.transaction(async (t) => {
        const community = await db.Community.create({ ...req.body, creatorId: req.user.id, slug: '', attachment: 'community/' + filename }, { transaction: t })
        const idArrays = await db.User.findAll({ attributes: ['id'] }, { transaction: t })
        const allFollow = []

        for (let i = 0; i < idArrays.length; i++) {
          const followObj = {
            userId: parseInt(idArrays[i].id),
            communityId: community.id
          }
          allFollow.push(followObj)
        }

        await db.CommunityUser.bulkCreate(allFollow, { transaction: t })
        return 'Community is created with autoFollow'
      })

      return res.json({ message: result })
    } else {
      const followCommunity = await sequelize.transaction(async (t) => {
        const community = await db.Community.create({ ...req.body, creatorId: req.user.id, slug: '', attachment: 'community/' + filename }, { transaction: t })
        await db.CommunityUser.create({ userId: req.user.id, communityId: community.id }, { transaction: t })
        return true
      })
      if (followCommunity) return res.json({ message: 'Community is Created !!!' }).status(200)
    }
  } catch (error) {
    return res.json({ error: error.message }).status(400)
  }
}

// @desc Fetch single communities
// @route GET /api/communities/:id
// @access Public
const getCommunityById = async (req, res) => {
  const id = req.params.id

  db.Community.findByPk(id)
    .then(communities => {
      if (communities) {
        res.json({ ...communities.dataValues, attachment: changeFormat(communities.dataValues.attachment) })
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

    if (!req.user.id) {
      return res.json({ message: 'Not authorized to delete.' })
    }
    const community = await db.Community.findByPk(id)

    if (community) {
      const { id } = community
      if (community.creatorId !== req.user.id) {
        return res.json({ message: 'Not authorized to delete.' })
      }

      const result = await sequelize.transaction(async (t) => {
        const communityUserIds = await db.CommunityUser.findAll({ where: { communityId: id } }, { transaction: t })

        communityUserIds.forEach(async function (communityId) {
          const { id } = communityId
          await db.CommunityUser.update({ active: false }, { where: { id } }, { transaction: t })
        })

        await db.Community.update({ deleted: true }, { where: { id } }, { transaction: t })

        return 'Community Deleted with links.'
      })

      return res.json({ message: result }).status(200)
    } else {
      res.status(404)
      throw new Error('Community not found')
    }
  } catch (error) {
    res.json(error)
  }
}

// @desc Update a communities
// @route PUT /api/communities/:id
// @access Private
const updateCommunity = async (req, res) => {
  try {
    const {
      name, description, file, toggleActive
    } = req.body

    let filename = ''
    if (req.file) {
      filename = req.file.filename
    }

    if (!req.user.id) {
      return res.json({ message: 'Not authorized to update.' })
    }
    const id = req.params.id

    const community = await db.Community.findByPk(id)
    if (community) {
      const { id } = community
      if (community.creatorId !== req.user.id) {
        return res.json({ message: 'Not authorized to update.' })
      }

      // auto follow through transactions
      if (req.body.auto_follow === 'true') {
        const result = await sequelize.transaction(async (t) => {
          const userIdArrays = await db.User.findAll({ attributes: ['id'] })

          const followIdArrays = await db.CommunityUser.findAll({
            attributes: ['userId'],
            where: { communityId: community.id }
          })

          // converting them to the array of ids not(object with ids)
          // to check console.log(followIdArrays) and newFollowIds
          const newFollowIds = followIdArrays.map(item => item.userId)
          const newUserIds = userIdArrays.map(item => item.id)

          // this is removing any duplicate items between newFollowIds and newUserIds
          const idArrays = newUserIds.filter(item => {
            return newFollowIds.indexOf(item) === -1
          })

          const allFollow = []

          for (let i = 0; i < idArrays.length; i++) {
            const followObj = {
              userId: parseInt(idArrays[i]),
              communityId: community.id
            }
            allFollow.push(followObj)
          }

          await db.CommunityUser.bulkCreate(allFollow, { transaction: t })

          if (!req.file) {
            await db.Community.update({ ...req.body, slug: '' },
              { where: { id } })
            return 'Community is updated with autoFollow'
          }

          await db.Community.update({ ...req.body, slug: '', attachment: 'community/' + filename },
            { where: { id } })
          return 'Community is updated with autoFollow'
        })

        return res.json({ message: result })
      } else {
        if (!req.file) {
          await db.Community.update({
            name,
            description
          },
          { where: { id }, returning: true, attributes: ['id'] })
          return res.json({ message: 'Community Updated !!!' }).status(200)
        }

        await db.Community.update({
          name,
          description,
          attachment: 'community/' + filename
        },
        { where: { id }, returning: true, attributes: ['id'] })
        return res.json({ message: 'Community Updated !!!' }).status(200)
      }
    } else {
      res.status(404)
      throw new Error('Community not found')
    }
  } catch (error) {
    res.json(error)
  }
}

// @desc Search name
// @route POST /api/communities/search
// @access Private
const searchCommunityName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.Community.findAll({ where: { name: { [Op.iLike]: '%' + name + '%' } }, order: [['name', order]] })
    .then(communities => res.json({
      communities: communities.map(rec => ({ ...rec.dataValues, attachment: changeFormat(rec.attachment) }))
    }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

// @desc Search usercommunity name
// @route POST /api/communities/user/search
// @access Private
const searchUserCommunityName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.Community.findAll({
    include: [{
      model: db.User,
      as: 'creator' && 'followers',
      attributes: ['id'],
      where: { id: req.user.id },
      through: {
        attributes: ['active'],
        as: 'followStatus',
        where: {
          active: true
        }
      }
    }],
    where: { name: { [Op.iLike]: '%' + name + '%' } },
    order: [['name', order]]
  })
    .then(communities => res.json({
      communities: communities.map(rec => ({ ...rec.dataValues, attachment: changeFormat(rec.attachment) }))
    }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getCommunities, getUserCommunities, searchUserCommunityName, createCommunity, getCommunityById, deleteCommunity, updateCommunity, searchCommunityName }

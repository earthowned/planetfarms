const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../models')
const { changeFormat } = require('../helpers/filehelpers');
// @desc    Fetch all enterprises
// @route   GET /api/enterprises
// @access  Public
const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize
  return { offset, limit }
}

// @desc Fetch all enterprises by a community
// @route GET/api/enterprises/community/:id
// @access Pirvate

const getEnterprises = async (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 1
  // const order = req.query.order || 'DESC'
  // const ordervalue = order && [['name', order]]
  try {
    const enterprises = await db.Enterprise.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      // ordervalue,
      order: [['createdAt', 'DESC']],
      where: { deleted: false, communityId: req.params.id },
      attributes: {
        include: [
          [
            db.sequelize.literal(`(
                          SELECT COUNT("userId")
                          FROM enterprises_users
                          WHERE "enterpriseId" = enterprises.id AND active = true
                    )`),
            'enterpriseFollowersCount'
          ],
          [
            db.sequelize.literal(`
                      CASE WHEN "creatorId"=${req.user.id} THEN 'true'
                        ELSE 'false'
                      END
                    `), 'isCreator'
          ],
          [
            db.sequelize.literal(`(
                          SELECT COUNT("userId") 
                          FROM enterprises_users
                          WHERE "enterpriseId" = enterprises.id AND active = true AND "userId" = ${req.user.id}
                    )`),
            'isFollowed'
          ]
        ],
        exclude: ['deleted']
      }
    })

    const totalPages = Math.ceil(enterprises.count / pageSize)
    res.json({
      enterprises: enterprises.rows.map(rec => ({ ...rec.dataValues, filename: changeFormat(rec.dataValues.filename) })),
      totalItems: enterprises.count,
      totalPages,
      page,
      pageSize
    }).status(200)
  } catch (error) {
    res.json(error)
  }
}

// @desc Fetch all enterprises by a community
// @route GET/api/enterprises/community/:id/user
// @access Pirvate

const getUserEnterprises = async (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 1
  // const order = req.query.order || 'DESC'
  // const ordervalue = order && [['name', order]]
  try {
    const enterprises = await db.Enterprise.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      // ordervalue,
      order: [['createdAt', 'DESC']],
      where: { deleted: false, communityId: req.params.id },
      attributes: {
        include: [
          [
            db.sequelize.literal(`(
                          SELECT COUNT("userId")
                          FROM enterprises_users
                          WHERE "enterpriseId" = enterprises.id AND active = true
                    )`),
            'enterpriseFollowersCount'
          ],
          [
            db.sequelize.literal(`
                      CASE WHEN "creatorId"=${req.user.id} THEN 'true'
                        ELSE 'false'
                      END
                    `), 'isCreator'
          ],
          [
            db.sequelize.literal(`(
                          SELECT COUNT("userId") 
                          FROM enterprises_users
                          WHERE "enterpriseId" = enterprises.id AND active = true AND "userId" = ${req.user.id}
                    )`),
            'isFollowed'
          ]
        ],
        exclude: ['deleted']
      },
      include: [{
        model: db.User,
        as: 'enterprise_followers',
        attributes: [],
        where: { id: req.user.id },
        through: {
          attributes: [],
          where: { active: true }
        }
      }]
    })

    const totalPages = Math.ceil(enterprises.count / pageSize)
    res.json({
      enterprises: enterprises.rows.map(rec => ({ ...rec.dataValues, filename: changeFormat(rec.dataValues.filename) })),
      totalItems: enterprises.count,
      totalPages,
      page,
      pageSize
    }).status(200)
  } catch (error) {
    res.json(error)
  }
}

// @desc    Add individual enterprises
// @route   POST /api/enterprises/add/community/:id
// @access  Public
const addEnterprises = async (req, res) => {
  try {
    let filename = ''
    if (req.file) {
      filename = req.file.filename
    }

    const followEnterprise = await db.sequelize.transaction(async (t) => {
      const enterprise = await db.Enterprise.create({ ...req.body, communityId: req.params.id, creatorId: req.user.id, slug: '', filename: 'uploads/' + filename }, { transaction: t })
      await db.EnterpriseUser.create({ userId: req.user.id, enterpriseId: enterprise.id }, { transaction: t })
      return true
    })
    if (followEnterprise) return res.json({ message: 'Enterprise is Created !!!' }).status(200)
  } catch (error) {
    res.json(error)
  }
}

// @desc    Fetch single enterprises
// @route   GET /api/enterprises/:enterpriseId/community/:id
// @access  Public
const getEnterprisesById = (req, res) => {
  const id = req.params.enterpriseId

  db.Enterprise.findByPk(id,
    {
      include: [{
        model: db.Community,
        attributes: ['id'],
        where: { id: req.params.id }
      }]
    }
  )
    .then(enterprises => {
      if (enterprises) {
        res.json({...enterprises.dataValues, filename: changeFormat(enterprises.dataValues.filename)})
      } else {
        res.status(404)
        throw new Error('Enterprises not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Delete single enterprises
// @route   DELETE /api/enterprises/:enterpriseId/community/:id
// @access  Private
const deleteEnterprises = async (req, res) => {
  try {
    // const id = req.params.id

    if (!req.user.id) {
      return res.json({ message: 'Not authorized to delete.' })
    }
    const enterprise = await db.Enterprise.findByPk(req.params.enterpriseId, { where: { communityId: req.params.id } })

    if (enterprise) {
      const { id } = enterprise
      if (enterprise.creatorId !== req.user.id) {
        return res.json({ message: 'Not authorized to delete.' })
      }

      const result = await db.sequelize.transaction(async (t) => {
        const enterpriseUserIds = await db.EnterpriseUser.findAll({ where: { enterpriseId: id } }, { transaction: t })

        enterpriseUserIds.forEach(async function (enterpriseId) {
          const { id } = enterpriseId
          await db.EnterpriseUser.update({ active: false }, { where: { id } }, { transaction: t })
        })

        await db.Enterprise.update({ deleted: true }, { where: { id } }, { transaction: t })

        return 'Enterprise Deleted with links.'
      })

      return res.json({ message: result }).status(200)
    } else {
      res.status(404)
      throw new Error('Enterprise not found')
    }
  } catch (error) {
    res.json(error)
  }
}

// @desc    Update a enterprises
// @route   UPDATE /api/enterprises/:enterpriseId/community/:id
// @access  Private
const updateEnterprises = (req, res) => {
  const {
    title, description, roles, filename
  } = req.body
  const id = req.params.enterpriseId
  db.Enterprise.findByPk(id,
    {
      where: { creatorId: req.user.id },
      include: [{
        model: db.Community,
        attributes: ['id'],
        where: { id: req.params.id }
      }]
    }
  ).then(enterprises => {
    if (enterprises) {
      if (enterprises.creatorId !== req.user.id) return res.json({ message: 'Not authorized to update' })
      const { id } = enterprises
      db.Enterprise.update({
        title, description, roles, filename
      },
      { where: { id } })
        .then(() => res.json({ message: 'Enterprises Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Enterprises not found')
    }
  }).catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Search title
// @route   GET /api/enterprises/:enterpriseId/community/:id/search
// @access  Private
const searchEnterprisesTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  db.Enterprise.findAll({
    where: { title: { [Op.iLike]: '%' + title + '%' } },
    order: [['title', order]],
    include: [{
      model: db.Community,
      attributes: ['id'],
      where: { id: req.params.id }
    }]
  })
    .then(enterprises => res.json({
   enterprises: enterprises.map(rec => ({ ...rec.dataValues, filename: changeFormat(rec.dataValues.filename) }))
    }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = {
  getEnterprises,
  addEnterprises,
  getEnterprisesById,
  deleteEnterprises,
  updateEnterprises,
  searchEnterprisesTitle,
  getUserEnterprises
}

const { Op } = require('sequelize')
const db = require('../models')

// @desc Get the enterprises-users
// @route GET /api/enterprises-users
// @access Public

const getEnterpriseUsers = async (req, res) => {
  try {
    const data = await db.EnterpriseUser.findAll()
    res.json({
      data
    })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// @desc follow enterprise
// @route POST /api/enterprises-users/follow
// @access Private

const followEnterprise = async (req, res) => {
  try {
    const { enterpriseId, active } = req.body

    // checking the relationship between userid and enterpriseid
    const enterpriseUser = await db.EnterpriseUser.findOne({
      where: {
        userId: req.user.id,
        enterpriseId
      }
    })

    if (enterpriseUser) {
      // checking the followed user
      const followedUser = await db.EnterpriseUser.findOne({
        where: {
          userId: req.user.id,
          enterpriseId,
          active: true
        }
      })

      if (followedUser) {
        // unfollow the user
        await db.EnterpriseUser.update({ active: false }, {
          where: {
            userId: req.user.id,
            enterpriseId
          }
        })
        return res.json({
          message: 'You have unfollowed the enterprise.'
        })
      }

      // follow the enterprise
      await db.EnterpriseUser.update({ active: true }, {
        where: {
          userId: req.user.id,
          enterpriseId
        }
      })
      return res.json({
        message: 'Congratulation for following the enterprise.'
      })
    }

    await db.EnterpriseUser.create({ userId: req.user.id, enterpriseId, active })
    res.json({
      message: 'Congratulation for following the enterprise.'
    })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// @desc Get the enterprise-users
// @route GET /api/enterprises-users/enterprise/:id
// @access Public

const getAllEnterpriseUsers = async (req, res) => {
  try {
    const data = await db.EnterpriseUser.findAll(
      {
        where: { enterpriseId: req.params.id, active: true },
        attributes: ['id'],
        include: [{
          model: db.User,
          attributes: ['email', 'name']
        }],
        required: true
      }
    )
    res.json({
      data
    })
  } catch (error) {
    res.status(400).json({ error })
  }
}

// @desc    Search Name
// @route   POST /api/news/enterprises/:id/search
// @access  Private
const searchEnterpriseUserName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.EnterpriseUser.findAll({
    where: { enterpriseId: req.params.id, active: true },
    attributes: ['id'],
    include: [{
      model: db.User,
      attributes: ['email', 'name'],
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: '%' + name + '%' } },
          { email: { [Op.iLike]: '%' + name + '%' } }
        ]
      }
    }],
    required: true
  })
    .then(member => res.json({ member }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getEnterpriseUsers, followEnterprise, getAllEnterpriseUsers, searchEnterpriseUserName }

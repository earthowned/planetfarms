const Sequelize = require('sequelize')
const db = require('../config/database')

const CommunityUser = db.define('communities_users',
  {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      communityId: {
        type: Sequelize.INTEGER,
      },
      active: {
        type: Sequelize.INTEGER,
        defaultValue: true,
      }
  },
  { timestamps: true }
)

module.exports = CommunityUser

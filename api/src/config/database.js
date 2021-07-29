const { Sequelize } = process.env.DB === 'cockroach' ? require('sequelize-cockroachdb') : require('sequelize')

module.exports = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5432,
  dialect: 'postgres'
})

const express = require('express')
const app = express()
const userRoutes = require('./routes/userRouter.js')
const resourceRoutes = require('./routes/resourceRouter.js')
const courseRoutes = require('./routes/courseRouter.js')
const sequelize = require('./config/database.js')
const cors = require('cors')
const dotenv = require('dotenv')

const PORT = process.env.port || 5000

// middleware
app.use(express.json())
app.use(cors())
dotenv.config()

// routes
app.use('/api/users', userRoutes)
app.use('/api/resources', resourceRoutes)
app.use('/api/courses', courseRoutes)

// home page response
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API on planetfarms' })
})

// port connection
app.listen(PORT, () => {
  console.log(`PlanetFarms is running on PORT ${PORT}.`)
})

// database connection
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log(`Error: ${err}`))

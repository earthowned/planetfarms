require('dotenv').config()
const express = require('express')
const app = express()
const userRoutes = require('./routes/userRouter.js')
const resourceRoutes = require('./routes/resourceRouter.js')
const collectionRoutes = require('./routes/collectionRouter')
const courseRoutes = require('./routes/courseRouter.js')
const newsRoutes = require('./routes/newsRouter')
const enterprisesRoutes = require('./routes/enterprisesRouter')
const communityGroupsRoutes = require('./routes/communityGroupRouter')
const calendarRoutes = require('./routes/calendarEventsRouter')
const resizerRoutes = require('./routes/resizerRouter')
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
app.use('/api/collection', collectionRoutes)
app.use('/api/enterprises', enterprisesRoutes)
app.use('/api/groups', communityGroupsRoutes)
app.use('/api/calendar', calendarRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/resizer', resizerRoutes)

// home page response
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API on planetfarms' })
})

// port connection
app.listen(PORT, () => {
  console.log(`PlanetFarms is running on PORT ${PORT}.`)
  console.log(`${process.env.DATABASE_HOST}`)
})

// database connection
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log(`Error: ${err}`))

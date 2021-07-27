require('dotenv').config()
const path = require('path')
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
const categoriesRoutes = require('./routes/categoriesRouter')
const lessonsRoutes = require('./routes/lessonsRouter')
const videoRouter = require('./routes/videoRouter')
const photoRouter = require('./routes/photoRouter')
const textRouter = require('./routes/textRouter')
const communityRoutes = require('./routes/communityRouter')
const communityUsersRoutes = require('./routes/communityUserRouter')
const groupUsersRoutes = require('./routes/groupUserRouter')
const enterpriseUsersRoutes = require('./routes/enterpriseUserRouter')
const enrollRouter = require('./routes/enrollRouter')
const resizerRoutes = require('./routes/resizerRouter')
const sequelize = require('./config/database.js')
const cors = require('cors')
const dotenv = require('dotenv')
const errorHandler = require('./middleware/errorHandler')
const NotFoundError = require('./errors/notFoundError')
const materialRouter = require('./routes/materialRouter')
const testRouter = require('./routes/testRouter')
const questionRouter = require('./routes/questionRouter')
const userTestRouter = require('./routes/userTestRouter')

const PORT = process.env.port || 5000

// middleware
app.use(express.json())
const whiteListDomain = [
  'http://localhost:3000',
  'https://dev.planetfarms.io',
  'http://github.planetfarms.io:3000'
]
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://dev.planetfarms.io',
      'http://github.planetfarms.io:3000'
    ],
    credentials: true
  })
)
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
app.use('/api/categories', categoriesRoutes)
app.use('/api/lessons', lessonsRoutes)
app.use('/api/communities', communityRoutes)
app.use('/api/communities-users', communityUsersRoutes)
app.use('/api/groups-users', groupUsersRoutes)
app.use('/api/enterprises-users', enterpriseUsersRoutes)
app.use('/api/resizer', resizerRoutes)
app.use('/api/videos', videoRouter)
app.use('/api/lesson-photos', photoRouter)
app.use('/api/lesson-text', textRouter)
app.use('/api/materials', materialRouter)
app.use('/api/tests', testRouter)
app.use('/api/questions', questionRouter)
app.use('/api/user_tests', userTestRouter)
app.use('/api/enrolls', enrollRouter)

// home page response
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API on planetfarms' })
})

// Set static folder
app.use(express.static(path.join(__dirname, '../files')))

// error handeling
app.all('*', async (_req, _res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

// port connection
app.listen(PORT, () => {
  console.log(`PlanetFarms is running on PORT ${PORT}.`)
  console.log(`${process.env.DATABASE_HOST}`)
})

// database connection
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.log(`Error: ${err}`))

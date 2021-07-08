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
const resizerRoutes = require('./routes/resizerRouter')
const sequelize = require('./config/database.js')
const cors = require('cors')
const dotenv = require('dotenv')
const errorHandler = require('./middleware/errorHandler')
const NotFoundError = require('./errors/notFoundError')
const Lessons = require('./models/lessonModal')
const Video = require('./models/videoModel')
const Photo = require('./models/photoModel')
const Text = require('./models/textModel')
const Material = require('./models/materialModel')
const Courses = require('./models/courseModel')
const materialRouter = require('./routes/materialRouter')
const testRouter = require('./routes/testRouter')
const Test = require('./models/testModel')
const questionRouter = require('./routes/questionRouter')
const Question = require('./models/questionModel')
const userTestRouter = require('./routes/userTestRouter')
const UserTest = require('./models/userTestModel')
const User = require('./models/userModel')

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
app.use('/api/categories', categoriesRoutes)
app.use('/api/lessons', lessonsRoutes)
app.use('/api/resizer', resizerRoutes)
app.use('/api/videos', videoRouter)
app.use('/api/lesson-photos', photoRouter)
app.use('/api/lesson-text', textRouter)
app.use('/api/materials', materialRouter)
app.use('/api/tests', testRouter)
app.use('/api/questions', questionRouter)
app.use('/api/user_tests', userTestRouter)

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

// linking course table with lesson table(association)
Lessons.hasMany(Video)
Lessons.hasMany(Photo)
Lessons.hasMany(Text)
Lessons.hasMany(Material)
Video.belongsTo(Lessons, { constraints: true, foreignKey: 'lessonId' })
Photo.belongsTo(Lessons, { constraints: true, foreignKey: 'lessonId' })
Text.belongsTo(Lessons, { constraints: true, foreignKey: 'lessonId' })
Material.belongsTo(Lessons, { constraints: true, foreignKey: 'lessonId' })
Lessons.belongsTo(Courses, { constraints: true, foreignKey: 'courseId' })
Courses.hasMany(Lessons)

// 1:1 association between lesson and test
Lessons.hasOne(Test, { foreignKey: 'lessonId' })
Test.belongsTo(Lessons, { foreignKey: 'lessonId' })

// 1:m association between test and question
Test.hasMany(Question, { foreignKey: 'testId' })
Question.belongsTo(Test, { foreignKey: 'testId' })

//m:n association between user and test through user_test
User.belongsToMany(Test, {
  foreignKey: 'userId',
  through: 'users_tests'
})

Test.belongsToMany(User, {
  foreignKey: 'testId',
  through: 'users_tests'
})

UserTest.belongsTo(User, {
  foreignKey: 'userId'
})

UserTest.belongsTo(Test, {
  foreignKey: 'testId'
})

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

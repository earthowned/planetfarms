const db = require('../models')

// @desc    Add individual course
// @route   POST /api/course-views/add
// @access  Public
const addCourseView = async (req, res) => {
  const { courseId } = req.body
  // const creator = await db.Courses.findOne({where: {courseId, creator: req.user.userId}})
  // console.log(creator)
  const courseView = await db.CourseView.create({ courseId, userId: req.user.id })
  res.status(201).json({
    status: true,
    message: ' new course view added successfully',
    data: courseView
  })
}

module.exports = { addCourseView }

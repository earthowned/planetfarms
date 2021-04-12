const Courses = require("../models/courseModel.js");

// @desc    Add individual course
// @route   POST /api/courses/add
// @access  Public
const addCourse = (req, res) => {
  const {
    title, description, languageOfInstruction, memberLimit, method, gradeLevel, subjectLevel, creator, steps
  } = req.body;

  let _attachments = [];
 
  if (req.files && req.files.length > 0) {
    _attachments = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  Courses.create({
    _attachments, title, description, languageOfInstruction, memberLimit, method, gradeLevel, subjectLevel, creator, steps
  })
  .then(() => res.json({ message:'Resource Created !!!' }).status(200))
  .catch((err) => res.json( { error: err.message }).status(400));
};

module.exports = addCourse;

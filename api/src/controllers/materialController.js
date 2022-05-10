const path = require('path')
const NotFoundError = require('../errors/notFoundError')
const ForbiddenRequestError = require('../errors/forbiddenRequestError')
const BadRequestError = require('../errors/badRequestError')

const db = require('../models')

const getCourseIdAndLessonIdFromUrl = (baseUrl) => {
  const splitted = baseUrl.split('/')
  const courseId = splitted[3]
  const lessonId = splitted[5]

  return { courseId, lessonId }
}

const checkMaterialAndOwnership = async ({
  userId,
  courseId,
  materialId,
  lessonId,
  enrollCheck,
}) => {
  const include = [
    {
      model: db.Lesson,
      where: { id: lessonId },
      include: materialId ? [
        {
          model: db.Material,
          where: { id: materialId }
        }
      ] : []
    }
  ]

  if (enrollCheck) {
    include.push({
      model: db.Enroll,
      where: { userId },
      required: false
    })
  }

  const course = await db.Courses.findByPk(courseId, {
    include
  })

  if (!course) {
    throw new NotFoundError()
  }

  if (
    course.creatorId !== userId &&
    (enrollCheck ? course.enrolls.length === 0 : true)
  ) {
    throw new ForbiddenRequestError()
  }
}

const getMaterials = async (req, res) => {
  const { courseId, lessonId } = getCourseIdAndLessonIdFromUrl(req.baseUrl)
  const { id: materialId } = req.params
  const { id: userId } = req.user

  await checkMaterialAndOwnership({
    courseId,
    lessonId,
    materialId,
    userId,
    enrollCheck: true
  })

  const data = await db.Material.findAll({
    where: { lessonId }
  })

  if (!data) {
    throw new NotFoundError()
  }

  res.status(200).json({
    message: 'Fetched materials successfully',
    data
  })
}

const getMaterialById = async (req, res) => {
  const { courseId, lessonId } = getCourseIdAndLessonIdFromUrl(req.baseUrl)
  const { id: materialId } = req.params
  const { id: userId } = req.user

  await checkMaterialAndOwnership({
    courseId,
    lessonId,
    materialId,
    userId,
    enrollCheck: true
  })

  const data = await db.Material.findByPk(materialId)

  if (!data) {
    throw new NotFoundError()
  }

  res.status(200).json({
    message: 'Material fetched successfully',
    data
  })
}

const addMaterial = async (req, res) => {
  const { courseId, lessonId } = getCourseIdAndLessonIdFromUrl(req.baseUrl)
  const { id: userId } = req.user

  await checkMaterialAndOwnership({
    courseId,
    lessonId,
    userId
  })

  if (!req?.files?.materials?.length) {
    throw new BadRequestError("Missing materials to upload")
  }

  const materials = req.files.materials.map(item => ({
    material: `materials/${item.filename}`,
    name: item.originalname,
    lessonId
  }))
  const data = await db.Material.bulkCreate(materials)

  res.status(201).json({
    message: 'New material added successfully',
    data
  })
}

const deleteMaterial = async (req, res) => {
  const { courseId, lessonId } = getCourseIdAndLessonIdFromUrl(req.baseUrl)
  const { id: materialId } = req.params
  const { id: userId } = req.user

  await checkMaterialAndOwnership({
    courseId,
    lessonId,
    materialId,
    userId
  })

  await db.Material.destroy({ where: { id: materialId } })

  res.status(200).json({
    message: 'Material deleted successfully',
  })
}

const downloadMaterial = async (req, res) => {
  const { courseId, lessonId } = getCourseIdAndLessonIdFromUrl(req.baseUrl)
  const { id: materialId } = req.params
  const { id: userId } = req.user

  await checkMaterialAndOwnership({
    courseId,
    lessonId,
    materialId,
    userId,
    enrollCheck: true
  })

  const data = await db.Material.findByPk(materialId)

  if (!data) {
    throw new NotFoundError()
  }

  const materialPath = path.join(__dirname, '..', '..', 'files', 'test', 'DPIDo6VzBO.jpg')
  res.attachment(materialPath).send()
}

// no way to update a material
// const updateMaterial = async (req, res) => {
//   const { id } = req.params
//   const data = await db.Material.update(req.body, {
//     where: { id }
//   })
//   res.status(202).json({
//     message: 'Material updated successfully',
//     data
//   })
// }

module.exports = {
  getMaterials,
  getMaterialById,
  addMaterial,
  deleteMaterial,
  downloadMaterial
}

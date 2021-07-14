module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define('courses', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    languageOfInstruction: {
      type: DataTypes.STRING
    },
    memberLimit: {
      type: DataTypes.STRING
    },
    method: {
      type: DataTypes.STRING
    },
    gradeLevel: {
      type: DataTypes.STRING
    },
    subjectLevel: {
      type: DataTypes.STRING
    },
    creator: {
      type: DataTypes.STRING
    },
    thumbnail: {
      type: DataTypes.STRING
    },
    steps: {
      type: DataTypes.JSON
    },
    _attachments: {
      type: DataTypes.BLOB('long')
    },
    price: {
      type: DataTypes.DOUBLE
    },
    category: {
      type: DataTypes.STRING
    },
    isFree: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  },
  { timestamps: true })
  Courses.associate = (models) => {
    Courses.hasMany(models.Lesson)
  }
  return Courses
}

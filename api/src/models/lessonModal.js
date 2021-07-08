const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Lessons = db.define(
  'lessons',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    coverImg: {
      type: Sequelize.STRING,
    },
    courseId: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  },
  { timestamps: true }
)

module.exports = Lessons

// module.exports = (sequelize, DataTypes) => {
//   const Lesson = sequelize.define('tests', {
//     id: {
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//       },
//       title: {
//       type: DataTypes.STRING,
//     },
//     coverImg: {
//       type: DataTypes.STRING,
//     },
//     createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       },
//     updatedAt: {
//             allowNull: false,
//             type: DataTypes.DATE
//         }
//   });

//   Lesson.associate = (models) => {
//     Lesson.hssMany(models.Test, {
//       foreignKey: 'lessonId'
//     })
//   };

//   return Lesson;
// };

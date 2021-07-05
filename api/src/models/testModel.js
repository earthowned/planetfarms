const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Test = db.define(
  'tests',
  {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      test_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
    lessonId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
        }
  },
  { timestamps: true }
)

module.exports = Test


// module.exports = (sequelize, DataTypes) => {
//   const Test = sequelize.define('tests', {
//     id: {
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//       },
//       test_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     lessonId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
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

//   Test.associate = (models) => {
//     Test.belongsTo(models.Lesson, {
//       foreignKey: 'lessonId'
//     })
//   };

//   return Test;
// };
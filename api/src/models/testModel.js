module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('tests', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    lessonId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  { timestamps: true })
  Test.associate = (models) => {
    Test.belongsTo(models.Lesson, { foreignKey: 'lessonId' })
    Test.hasMany(models.Question, { foreignKey: 'testId' })
    Test.belongsToMany(models.User, {
      foreignKey: 'testId',
      through: 'users_tests'
    })
  }
  return Test
}

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

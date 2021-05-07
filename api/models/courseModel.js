const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Courses = db.define("courses",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    languageOfInstruction: {
      type: Sequelize.STRING
    },
    memberLimit: {
      type: Sequelize.STRING
    },
    method: {
      type: Sequelize.STRING
    },
    gradeLevel: {
      type: Sequelize.STRING
    },
    subjectLevel: {
      type: Sequelize.STRING
    },
    creator: {
      type: Sequelize.STRING
    },
    steps: {
      type: Sequelize.JSON
    },
    _attachments: {
      type: Sequelize.BLOB("long")
    }
  },
  { timestamps: true }
);

module.exports = Courses;
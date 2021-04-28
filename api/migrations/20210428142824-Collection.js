'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('collections',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      name:{
        type:Sequelize.TEXT
      },
      docType:{
        type:Sequelize.TEXT
      },
      resourceType:{
        type:TEXT
      },
      linkId:{
        type:Sequelize.INTEGER
      }
      
    })
    /**
     * Add altering commands here.
     *id, name, docType. db, linkId

     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('courses',{})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

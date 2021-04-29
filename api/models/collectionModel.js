const Sequelize=require('sequelize')
const db=require('../config/database.js')

const Collection=db.define("collections",
{
    name:{
        type:Sequelize.TEXT,
    },
    docType:{
        type:Sequelize.TEXT,
    },
    resourceType:{
        type:Sequelize.TEXT,
    },
    linkId:{
        type:Sequelize.INTEGER
    }
},{timestamps:true})

module.exports=Collection;
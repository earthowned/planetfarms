const Collection = require('../models/collectionModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


// @desc    Fetch all collection
// @route   GET /api/collection
// @access  Public

  
  const getCollection = (req, res) => {
   
    Collection.findAll( )
      .then(collection => {
        
        res.json({ collection}).status(200)
      })
      
      .catch((err) => res.json({ err }).status(400))
  }
  

// @desc    Add individual collection
// @route   POST /api/collection/add
// @access  Public

//@todo relation mapping betweenn collection and resources
const addcollection = (req, res) => {
    const {
      name, docType, resourceType, linkId, 
    } = req.body
  
    
    
    Collection.create({
        name, docType, resourceType, linkId, 
    })
      .then(() => res.json({ message: 'Collection Created !!!' }).status(200))
      .catch((err) => res.json({ error: err.message }).status(400))
  }
    
    module.exports={addcollection,getCollection}

const express = require('express');
const router = express.Router();
const { getResources, addResource, getResourcesById, deleteResources, updateResources } = require('../controllers/resourceController.js');

router.route('/').get(getResources); 
router.route('/add').post(addResource); 
router
  .route('/:id')
  .get(getResourcesById)
  .delete(deleteResources)
  .put(updateResources)

module.exports = router;


const Resource = require('../models/resourceModel.js');

// @desc    Fetch all resources
// @route   GET /api/resources
// @access  Public
const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize;
  const limit = offset + pageSize;

  return {
      offset,
      limit
  };
};

const getResources = (req, res) =>{
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  Resource.findAll({ offset: page, limit: pageSize }).then(resources => {
    paginate({page, pageSize});
    res.json({ resources, page, pageSize }).status(200);
  })
  .catch(err => res.json({err}).status(400));
};

module.exports = getResources; 
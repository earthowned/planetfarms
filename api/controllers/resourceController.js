const Resource = require("../models/resourceModel.js");

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

const getResources = (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  Resource.findAll({ offset: page, limit: pageSize })
    .then(resources => {
      paginate({ page, pageSize });
      res.json({ resources, page, pageSize }).status(200);
    })
    .catch((err) => res.json({ err }).status(400));
};

// @desc    Add individual resource
// @route   POST /api/resources/add
// @access  Public
const addResource = (req, res) => {
  const {
    title, author, year, description, tag, language, publisher, linkToLicense, subject, level, mediaType, resourceFor, openWith, resourceType, isDownloadable, attachments,
  } = req.body;

  Resource.create({
    title, author, year, description, tag, language, publisher, linkToLicense, subject, level, mediaType, resourceFor, openWith, resourceType, isDownloadable, attachments,
  })
  .then(() => res.json({ message:'Resource Created !!!' }).status(200))
  .catch((err) => res.json( { error: err.message }).status(400));
};

// @desc    Fetch single resource
// @route   GET /api/resource/:id
// @access  Public
const getResourcesById = (req, res) => {
  const id = req.params.id;

  Resource.findByPk(id)
  .then((product) => {
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Resource not found');
    }
  })
.catch((err) => res.json( { error: err.message }).status(400));
};

const deleteResources = (req, res) => {

};

const updateResources = (req, res) => {

};

module.exports = { getResources, addResource, getResourcesById, deleteResources, updateResources };

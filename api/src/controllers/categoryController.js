const Category = require('../models/categoryModel')

const getCategories = async (_req, res) => {
  const categories = await Category.findAll()
  res.status(200).json({
    status: true,
    message: 'fetched all categories successfully',
    results: categories
  })
}

const getSingleCategory = async (req, res) => {
  const category = await Category.findOne({ where: { id: req.params.id } })

  if (!category) {
    return res.status(201).json({
      status: true,
      message: 'Category doesn\'t exists.',
      results: category
    })
  }

  res.status(200).json({
    status: true,
    message: 'fetched single category successfully',
    results: category
  })
}

const addCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.status(201).json({
      status: true,
      message: 'add new category successfully',
      results: category
    })
  } catch (error) {
    res.json({ error: error.message })
  }
}

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.destroy({ where: { id } })
    res.status(202).json({
      status: true,
      message: 'deleted category successfully',
      results: category
    })
  } catch (error) {
    res.json({ error: error.message })
  }
}

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.update(req.body, { where: { id } })
    res.status(202).json({
      status: true,
      message: 'category updated successfully',
      results: category
    })
  } catch (error) {
    res.json({ error: error.message })
  }
}

module.exports = { getCategories, addCategory, deleteCategory, updateCategory, getSingleCategory }

const Category = require('../models/categoryModel')

const getCategories = async (_req, res) => {
  const categories = await Category.findAll()
  res.status(200).json({
    status: true,
    message: 'fetched all categories successfully',
    results: categories
  })
}

const addCategory = async (req, res) => {
  const category = await Category.create(req.body)
  res.status(201).json({
    status: true,
    message: 'add new category successfully',
    results: category
  })
}

const deleteCategory = async (req, res) => {
  const { id } = req.params
  const category = await Category.destroy({ where: { id } })
  res.status(202).json({
    status: true,
    message: 'deleted category successfully',
    results: category
  })
}

const updateCategory = async (req, res) => {
  const { id } = req.params
  const category = await Category.update(req.body, { where: { id } })
  res.status(202).json({
    status: true,
    message: 'category updated successfully',
    results: category
  })
}

module.exports = { getCategories, addCategory, deleteCategory, updateCategory }

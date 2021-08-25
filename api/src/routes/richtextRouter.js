const express = require('express')
const db = require('../models')
const router = express.Router()

router.route('/').post(async (req, res) => {
  try {
    const richtext = await db.RichText.create()
    res.json({ message: 'Rich text successfully created', richtext })
  } catch (error) {
    res.json(error)
  }
})

module.exports = router

const CommunityUser = require('../models/communityUserModal')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const data = await CommunityUser.findAll()
  res.json({
    data
  })
})

router.post('/', async (req, res) => {
  const { userId, communityId } = req.body
  await CommunityUser.create({ userId, communityId })
  res.json({
    message: 'Association is created.'
  })
})

// router.delete('/:id', async (req, res) => {
//     const {userId, communityId} = req.body;
//     await CommunityUser.destroy({userId, communityId});
//     res.json({
//         message: 'Association is created.'
//     })
// })

module.exports = router

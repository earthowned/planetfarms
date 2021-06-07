const { User, Community } = require('../models');
const CommunityUser = require('../models/communityUserModal');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const data = await CommunityUser.findAll();
    res.json({
        data
    })
})

router.post('/', async (req, res) => {
    const {userId, communityId} = req.body;
    await CommunityUser.create({userId, communityId});
    res.json({
        message: 'User is followed.'
    })
})


module.exports = router;
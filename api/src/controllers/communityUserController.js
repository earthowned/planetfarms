const CommunityUser = require('../models/communityUserModal');

// @desc Get the community-users
// @route GET /api/community-users
// @access Public

const getCommunityUsers = async (req, res) => {
  try {
    const data = await CommunityUser.findAll()
    res.json({
      data
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

// @desc follow community
// @route POST /api/community-users/follow
// @access Public

const followCommunity = async (req, res) => {
   try {
    const { userId, communityId, active } = req.body

    // checking the relationship between userid and communityid
    const communityUser = await CommunityUser.findOne({where: {
        userId, 
        communityId
    }})

    if(communityUser) {
        // checking the followed user
        const followedUser = await  await CommunityUser.findOne({where: {
        userId, 
        communityId,
        active: true
        }})

        if(followedUser) {
            //unfollow the user
            await CommunityUser.update({active: false}, {where: {
            userId, 
            communityId
            }})
            return  res.json({
                message: 'You have unfollowed the community.'
            })
        }

        //follow the community
            await CommunityUser.update({active: true}, {where: {
            userId, 
            communityId
            }})
            return  res.json({
                message: 'Congratulation for following the community.'
            })
        
    }
    
    await CommunityUser.create({ userId, communityId, active })
    res.json({
        message: 'Congratulation for following the community.'
    })
  } catch (error) {
    res.status(400).json({error})
  }
}


module.exports = { getCommunityUsers, followCommunity};
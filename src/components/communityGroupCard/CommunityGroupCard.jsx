import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { followGroup } from '../../actions/communityGroupActions'
import { followEnterprise } from '../../actions/enterpriseAction'
import CardLayout from '../../layout/cardLayout/CardLayout'
import Button from '../button/Button'
import Secondarybtn from '../secondaryBtn/Secondarybtn'
import './CommunityGroupCard.scss'

const CommunityGroupCard = ({ data = [], location, type = 'group', editCard, deleteCard }) => {
  return (
    <>
      <CardLayout data={data}>
        {data.length > 0 && data.map(item => {
          return (
            <CommunityGroupSingleCard item={item} type={type} editCard={editCard} deleteCard={deleteCard} />
          )
        })}
      </CardLayout>
    </>
  )
}

const CommunityGroupSingleCard = ({ item, type, editCard, deleteCard }) => {
  const [follower, setFollower] = useState(true)
  const [creator, setCreator] = useState(false)
  const history = useHistory()
  const [follow, setFollow] = useState(false)
  const followClick = () => {
    setFollow(!follow)
  }

  const currentUserId = 5
  const dispatch = useDispatch();

  useEffect(() => {
    if(item.hasOwnProperty("group_followers")) {
        if (item.group_followers && item.group_followers.length > 0) {
        if (checkFollow(item.group_followers, currentUserId)) setFollower(false)
    }
    } else {

        if (item.enterprise_followers && item.enterprise_followers.length > 0) {
          if (checkFollow(item.enterprise_followers, currentUserId)) setFollower(false)
        }
    }


    if (checkCreator(currentUserId)) setCreator(true)
  }, [])

  function checkFollow (arr, userId) {
    const found = arr.some(el => (el.id === userId && el.followStatus.active === true))
    if (found) return true
  }

  function checkCreator (id) {
    if (id === item.creatorId) return true
  }

  const followHandle = () => {
    if(item.hasOwnProperty("group_followers")) {
      dispatch(followGroup(currentUserId, item.id))
    } else {
      dispatch(followEnterprise(currentUserId, item.id))
    }
    setFollower(!follower)
  }
  
  return (
    <div key={item.id} className='card-1 border-1px-onyx'>
      <div className="card-edit">
        <button className="edit-btn" onClick={() => editCard(item.id)}>
          <img src="/img/more-horizontal.svg" alt="burger icon" />
        </button>
        <button className="edit-btn" onClick={() => deleteCard(item.id)}>
          <img src="/img/trash-icon.svg" alt="burger icon" />
        </button>
      </div>
      <div className='card-container' style={{ backgroundImage: `url(${process.env.REACT_APP_CDN_BASE_URL + '/' + type + '/' + item.filename})` }} />
      <div className='community-group-card-inner-content'>
        <div onClick={() => history.push(`/community-group-view-page/${item.id}`)} className='card-text-container'>
          <div className='farmers ibmplexsans-semi-bold-caribbean-green-14px'>
            {item.category}
          </div>
          <div className='think-like-a-farmer ibmplexsans-semi-bold-quarter-spanish-white-24px'>
            {item.title}
          </div>
        </div>
        <div className='follower-container'>
          <div className='follower-number-container'>
            <div className='follower-number-item ibmplexsans-regular-normal-monsoon-16px'>
              2,564 followers
            </div>
            <p className='follower-number-item ibmplexsans-regular-normal-monsoon-16px'>
              {new Date(item.createdAt).toDateString()}
            </p>
          </div>
          {follow ? (
            <div className='card-btn-container'>
              <div className='card-secondary-btn-wrapper'>
                <Secondarybtn clickHandler={followClick} name='Unfollow' />
              </div>
            </div>
          ) : (
            <div className='card-btn-container'>
              <div className='card-secondary-btn-wrapper'>
                <Secondarybtn name="Don't recommend" />
              </div>
              <div className='card-secondary-btn-wrapper'>
                { creator 
                      ? <Button name="UnFollow" onClick={followHandle} disabled={true}/>
                      : follower
                      ? <Button name="Follow" onClick={followHandle} />
                      :<Button name="UnFollow" onClick={followHandle} />
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommunityGroupCard

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { joinCommunity, visitCommunity } from '../../actions/communityActions'
import './CommunitiesCard.scss'
import Background from '../background/Background'
import CardLayout from '../../layout/cardLayout/CardLayout'

const CommunitiesCard = ({ data = [], editCard, deleteCard }) => {
  return (
    <>
      <div className='communities-card-container'>
        <CardLayout>
          {data.length > 0 && data.map(community => {
            return (
              <CommunityCard community={community} editCard={editCard} deleteCard={deleteCard} />
            )
          })}
        </CardLayout>
      </div>
    </>
  )
}

export default CommunitiesCard

const CommunityCard = ({ community, editCard, deleteCard }) => {
  const [follower, setFollower] = useState(true)
  const [creator, setCreator] = useState(false)
  const [followCount, setFollowCount] = useState(0)

  const { success } = useSelector(state => state.joinCommunity)
  const { currentCommunity } = useSelector(state => state.activeCommunity)
  const dispatch = useDispatch()
  const history = useHistory()
  // choose userid according to the user data in your database

  useEffect(() => {
    if (community.isFollowed === '1') setFollower(false)
    if (community.isCreator === 'true') setCreator(true)
    setFollowCount(parseInt(community.followersCount))
  }, [])

  const followCommunity = () => {
    dispatch(joinCommunity(community.id))
    setFollower(!follower)
    if (!follower) {
      setFollowCount(existing => existing - 1)
    } else {
      setFollowCount(existing => existing + 1)
    }
  }

  const visitCurrentCommunity = () => {
    dispatch(visitCommunity(community.id))
  }
  return (
    <div ckey={community.id} className='community-card'>
      <Background image={community.attachment}>
        {
        creator && <div className='card-edit'>
          <button className='edit-btn' onClick={() => editCard(community.id)}>
            <img src='/img/more-horizontal.svg' alt='burger icon' />
          </button>
          <button className='edit-btn' onClick={() => deleteCard(community.id)}>
            <img src='/img/trash-icon.svg' alt='burger icon' />
          </button>
        </div>
        }
        <div className='card-1-text'>
          <div className='card-1-title'>
            <h3 className='text-1-card valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-32px'>
              {community.name}
            </h3>
            <p className='text-1-description'>{community.description}</p>
            <div className='address-1 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px'>
              {followCount} followers
            </div>
          </div>
          {creator
            ? <button className='secondary-btn join-community-btn' onClick={visitCurrentCommunity}>Visit</button>
            : (follower
                ? <button className='secondary-btn join-community-btn' onClick={followCommunity}>Join community</button>
                : <div className='community-switch-btn-group'>
                  <button className='secondary-btn unfollow-community-btn' onClick={followCommunity}>Unfollow</button>
                  <button className='secondary-btn join-community-btn' onClick={visitCurrentCommunity}>Visit</button>
                  </div>)}
        </div>
      </Background>
    </div>
  )
}

function Button (props) {
  const { children } = props
  return (
    <div className='button-card border-0-5px-quarter-spanish-white'>
      <div className='default-i905516988 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
        {children}
      </div>
    </div>
  )
}

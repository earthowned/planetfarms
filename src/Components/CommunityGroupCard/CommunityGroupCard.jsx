import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CardLayout from '../../Layout/cardLayout/CardLayout'
import Button from '../Button/Button'
import Secondarybtn from '../SecondaryBtn/Secondarybtn'
import './community-group-card.css'

const CommunityGroupCard = ({ data = [], location, type = 'group' }) => {
  return (
    <>
      <CardLayout data={data}>
        {data.length > 0 && data.map(item => {
          return (
            <CommunityGroupSingleCard item={item} type={type} />
          )
        })}
      </CardLayout>
    </>
  )
}

const CommunityGroupSingleCard = ({ item, type }) => {
  const history = useHistory()
  const [follow, setFollow] = useState(false)
  const followClick = () => {
    setFollow(!follow)
  }
  return (
    <div key={item.id} className='card-1 border-1px-onyx'>
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
                <Button name='Follow' clickHandler={followClick} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommunityGroupCard
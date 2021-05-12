import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Secondarybtn from '../SecondaryBtn/Secondarybtn'
import './community-group-card.css'

const CommunityGroupCard = ({ location, data }) => {
  const [follow, setFollow] = useState(false)
  const followClick = () => {
    setFollow(!follow)
  }

  return (
    <>
      {data && data.map(item => {
        return (

          <div key={item.id} className='card-1 border-1px-onyx'>
            <div className='card-container' style={{ backgroundImage: 'url(/img/farmer.svg)' }} />

            <div className='community-group-card-inner-content'>
              <div className='card-text-container'>
                <Link to={location} style={{ textDecoration: 'none' }}>
                  <div className='farmers ibmplexsans-semi-bold-caribbean-green-14px'>
                    {item.title}
                  </div>
                </Link>
                <Link to={location} style={{ textDecoration: 'none' }}>
                  <div className='think-like-a-farmer ibmplexsans-semi-bold-quarter-spanish-white-24px'>
                    {item.description}
                  </div>
                </Link>
              </div>

              <div className='follower-container'>
                <div className='follower-number-container'>
                  <div className='follower-number-item ibmplexsans-regular-normal-monsoon-16px'>
                    2,564 followers
                  </div>
                  <p className='follower-number-item ibmplexsans-regular-normal-monsoon-16px'>
                    Last publication: 2 days ago
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
      })}
    </>
  )
}

export default CommunityGroupCard

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './CardImage.scss'

const Follow = () => {
  const [follow, setFollow] = useState(false)

  const handleOnClick = () => {
    setFollow(!follow)
  }
  return (
    <div className='follow-container'>
      <div className='person-add-outline-2-1'>
        <div className='flex-row-7'>
          <img
            style={{ height: '20px', width: '20px', cursor: 'pointer' }}
            src={follow ? 'img/follow-icon.svg' : '/img/followed-icon.svg'}
            alt='follow'
          />
        </div>
      </div>
      <div
        className={
          follow ? 'follow ibmplexsans-semi-bold-caribbean-green-16px' : 'follow ibmplexsans-semi-bold-monsoon-16px'
        }
        style={{ cursor: 'pointer' }}
        onClick={handleOnClick}
      >
        {follow ? 'Follow' : 'Followed'}
      </div>
    </div>
  )
}

function CardImage ({ data = [], className }) {
  const history = useHistory()
  return (
    <>
      {data.length > 0 && data.map((profile) => {
        return (
          <div onClick={() => history.push(`/community-members-profile/${profile.userId}`)} key={profile.userId} className='card-image-1'>
            <div className='profile-card-image'>
              <img src={profile?.attachments || '/img/profile-image.svg'} alt='group-profile' />
            </div>
            <div className='profile-card-name'>
              <div className='card-name ibmplexsans-semi-bold-quarter-spanish-white-16px'>{profile.user !== undefined ? (profile.user.firstName || 'anonymous') : (profile.firstName || 'anonymous')} </div>
            </div>
            {Follow()}
          </div>
        )
      })}
    </>
  )
}

export default CardImage

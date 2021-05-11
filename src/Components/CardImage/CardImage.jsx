import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './card-image.css'

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
            src={follow ? 'img/follow-icon.svg' : 'img/followed-icon.svg'}
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

function CardImage({ users }) {
  const history = useHistory()
  return (
    <>
      {users.map((profile) => {
        return (
          <div
            onClick={() => history.push(`/community-members-profile/${profile.id}`)}
            key={profile.id}
            className='card-image-1'
          >
            <div className='profile-card-image'>
              <img src={profile?.Image} alt='group-profile' />
            </div>
            <div className='profile-card-name'>
              <div className='card-name ibmplexsans-semi-bold-quarter-spanish-white-16px'>{profile?.name} </div>
              <div className='card-text ibmplexsans-normal-monsoon-14px '>{profile?.text2}</div>
            </div>
            {Follow()}
          </div>
        )
      })}
    </>
  )
}

export default CardImage

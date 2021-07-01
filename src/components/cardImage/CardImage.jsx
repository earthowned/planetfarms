import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './CardImage.scss'

const profileData = [
  {
    _id: 1,
    name: 'Dianne Russel',
    text2: 'Follow 28 communities',
    Image: '/img/profile-mage-1.svg'
  },
  {
    _id: 2,
    name: 'Kriston Watson',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-2.svg'
  },
  {
    _id: 3,
    name: 'Leslie Alexander',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-3.svg'
  },
  {
    _id: 4,
    name: 'Ralph Edwards',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-4.svg'
  },
  {
    _id: 5,
    name: 'Guy Hawkins',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-5.svg'
  },
  {
    _id: 6,
    name: 'Jacob Jones',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-6.svg'
  },
  {
    _id: 7,
    name: 'Esther Howard',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-7.svg'
  },
  {
    _id: 8,
    name: 'Darrell Steward',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-8.svg'
  },
  {
    _id: 9,
    name: 'Cody Fisher',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-9.svg'
  },
  {
    _id: 10,
    name: 'Marvin McKinney',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-5.svg'
  },
  {
    _id: 11,
    name: 'Joe Jordinson',
    text2: 'Follow 28 communities',
    Image: '/img/profile-mage-1.svg'
  },
  {
    _id: 12,
    name: 'Joe Jordinson',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-5.svg'
  },
  {
    _id: 13,
    name: 'Dianne Russel',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-3.svg'
  },
  {
    _id: 14,
    name: 'Marvin McKinney',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-2.svg'
  },
  {
    _id: 15,
    name: 'Darrell Steward',
    text2: 'Follow 28 communities',
    Image: '/img/profile-image-8.svg'
  }
]

const Follow = () => {
  const [follow, setFollow] = useState(false)

  const handleOnClick = () => {
    setFollow(!follow)
  }
  return (
    <div className='follow-container'>
      <div className='person-add-outline-2-1'>
        <div className='flex-row-7'>
          <img style={{ height: '20px', width: '20px', cursor: 'pointer' }} src={follow ? 'img/follow-icon.svg' : 'img/followed-icon.svg'} />
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

function CardImage ({data = [], className}) {
  const history = useHistory()
  return (
    <>
      {data.length > 0 && data.map((profile) => {
        return (
          <div onClick={() => history.push(`/community-members-profile/${profile.id}`)} key={profile.id} className='card-image-1'>
            <div className='profile-card-image'>
              <img src="/img/farmer.svg" alt='group-profile' />
            </div>
            <div className='profile-card-name'>
              <div className='card-name ibmplexsans-semi-bold-quarter-spanish-white-16px'>{profile.user.name || 'anonymous'} </div>
              <div className='card-text ibmplexsans-normal-monsoon-14px '>{profile.user.email}</div>
            </div>
            {Follow()}
          </div>
        )
      })}
    </>
  )
}
export default CardImage

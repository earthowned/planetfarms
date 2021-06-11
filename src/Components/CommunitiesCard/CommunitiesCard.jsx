import React from 'react'
import './communities-card.css'

const communityData = [
  {
    _id: 1,
    title: 'Australian farmers community',
    followers: ' 10 376 followers',
    bgImage: '/img/Card-1.svg'
  },

  {
    _id: 2,

    title: 'Europe and Australian framers community',
    followers: ' 10 476 followers',
    bgImage: '/img/Card-2.svg'
  },
  {
    _id: 3,
    title: 'Asian and African framers community',
    followers: ' 11 476 followers',
    bgImage: '/img/Card-1.svg'
  },
  {
    _id: 4,
    title: 'Indian and Nepali framers community',
    followers: ' 15 476 followers',
    bgImage: '/img/Card-2.svg'
  },
  {
    _id: 5,
    title: 'Australian farmers community',
    followers: ' 10 376 followers',
    bgImage: '/img/Card-1.svg'
  },
  {
    _id: 6,
    title: 'Europe and Australian framers community',
    followers: ' 10 476 followers',
    bgImage: '/img/Card-1.svg'
  }
]

const CommunitiesCard = () => {
  return (
    <>
      <div className='communities-card-container'>
        {communityData.map((community) => {
          return (
            <div key={community._id} className='card-row-1'>
              <div
                className='card-1-allCommunities border-1px-onyx'
                style={{ backgroundImage: `url(${community.bgImage})` }}
              >
                <div className='card-1-text'>
                  <div className='card-1-title'>
                    <h3 className='text-1-card valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-32px'>
                      {community.title}
                    </h3>
                    <div className='address-1 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px'>
                      {community.followers}
                    </div>
                  </div>
                  <button className='secondary-btn join-community-btn'>Join community</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CommunitiesCard

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

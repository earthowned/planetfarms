import React from 'react'
import './CommunitiesCard.scss'
import CardLayout from '../../layout/cardLayout/CardLayout'

const CommunitiesCard = ({data=[]}) => {
  return (
    <>
      <div className='communities-card-container'>
        <CardLayout>
          {data.length > 0 && data.map(community => {
            return (
              <div key={community.id} className='card-row-1'>
                <div
                  className='card-1-allCommunities border-1px-onyx'
                  style={{ backgroundImage: `url(${community.attachment})` }}
                >
                  <div className='card-1-text'>
                    <div className='card-1-title'>
                      <h3 className='text-1-card valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-32px'>
                        {community.name}
                      </h3>
                      <p className="text-1-description">{community.description}</p>
                      <div className='address-1 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px'>
                      {community.followers && community.followers.length} followers
                      </div>
                    </div>
                    <button className='secondary-btn join-community-btn'>Join community</button>
                  </div>
                </div>
              </div>
            )
          })}
        </CardLayout>
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

import React from 'react'
import CardLayout from '../../layout/cardLayout/CardLayout'
import './LibraryCard.css'

const LibraryCard = ({ data }) => {
  return (
    <>
      <div className='libraryCard-main-container'>
        {
            data && data.filter(data => data.status === true).map(item => {
              return (
                <div
                  key={item.title} className='libraryCard-inner-container' style={{
                    backgroundImage: 'url(/img/man-cap.svg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                >

                  <button className='trasnsparent-btn positioning'><img src='/img/trash-outline.svg' alt='trash-icon' /> <span>Remove from library</span></button>
                  <div className='libraryCard-content'>
                    <h6>{item.category}</h6>
                    <h4>{item.name}</h4>
                  </div>
                </div>
              )
            })
         }
      </div>
    </>
  )
}

export default LibraryCard

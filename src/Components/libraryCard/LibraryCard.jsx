import React, { useEffect } from 'react'
import './library-card.css'
import { listResourceUser } from '../../actions/resourceUserAction'
import { useSelector, useDispatch } from 'react-redux'

const LibraryCard = ({ data }) => {
  return (
    <>
      <div className='libraryCard-main-container'>
        {
            data && data.map((item) => {
              return (
                <div
                  key={item.id} className='libraryCard-inner-container' style={{
                    backgroundImage: 'url(/img/man-cap.svg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                >

                  <button className='trasnsparent-btn positioning'><img src='/img/trash-outline.svg' alt='trash-icon' /> <span>Remove from library</span></button>
                  <div className='libraryCard-content'>
                    <h6>{item.category}</h6>
                    <h4>{item.title}</h4>
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

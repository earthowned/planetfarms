import React from 'react'
import CardLayout from '../../Layout/cardLayout/CardLayout'
import './library-card.css'

const LibraryCard = ({ data }) => {
  return (
    <>
      <CardLayout data={data}>
        {
             data.map(item => {
               return (
                 <div>
                   <LibraryBackgroundCard item={item} />
                 </div>
               )
             })
         }
      </CardLayout>
    </>
  )
}

const LibraryBackgroundCard = ({ item }) => {
  return (
    <div
      key={item.title} className='libraryCard-inner-container' style={{
        backgroundImage: `url(${item.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div>
        <div className='my-library-btn-container'>
          <button className='trasnsparent-btn'><img src='/img/trash-outline.svg' alt='trash-icon' /> <span>Remove from library</span></button>
        </div>
        <div className='libraryCard-content'>
          <h6>{item.category}</h6>
          <h5>{item.title}</h5>
        </div>
      </div>
    </div>
  )
}

export default LibraryCard

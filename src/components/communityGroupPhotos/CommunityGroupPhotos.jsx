import React, { useRef } from 'react'
import useScroll from '../../utils/scrollFunc'
import Filter from '../filter/Filter'

const groupPhoto = [
  {
    img: '/img/group-photo-1.svg'
  },
  {
    img: '/img/group-photo-2.svg'
  },
  {
    img: '/img/group-photo-3.svg'
  },
  {
    img: '/img/group-photo-1.svg'
  }
]

const CommunityGroupPhotos = () => {
  return (
    <div className='group-photo'>
      <div className='group-photo-filter'>
        <h4>Group photos</h4>
        <img src='/img/chevron-right-outline.svg' alt='/img/chevron-right-outline.svg' />
      </div>
      <div className='scroll-container'>
        <ScrollItems photo={groupPhoto} />
      </div>
    </div>
  )
}

function ScrollItems ({ photo }) {
  const scrollRef = useRef()
  const { scrollLeftActive, scrollActive, scrollRight, scrollLeft } = useScroll(scrollRef)
  return (
    <>
      <div className='scroll-container--tiles' ref={scrollRef}>
        <Tiles data={photo} />
      </div>
      {scrollActive && <img className='scroll-icon' onClick={() => scrollRight(scrollRef)} src='/img/scroll-icon.svg' alt='scroll-icon' />}
      {
        scrollLeftActive &&
          <img
            className='scroll-left-icon' src='/img/scroll-icon.svg'
            onClick={() => scrollLeft(scrollRef)} alt='scroll-icon'
          />
      }
    </>
  )
}

function Tiles ({ data }) {
  return (
    <>
      {
        data.map(item => {
          return (
            <div className='tiles-container' key={item.img}>
              <div className='tiles-container-img-wrapper'>
                <img src={item.img} alt={item.img} />
              </div>
            </div>
          )
        })
      }
    </>
  )
}
export default CommunityGroupPhotos

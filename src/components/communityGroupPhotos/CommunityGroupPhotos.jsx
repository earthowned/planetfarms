<<<<<<< HEAD:src/components/communityGroupPhotos/CommunityGroupPhotos.jsx
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
=======
import React from 'react'

const CommunityGroupPhotos = () => {
    return (
        <div className="group-photo">
        <div className="group-photo-title">
          <div className="enterprise-photos-i5 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
            Group Photos
          </div>
        </div>
        <div className="flex-row-4">
          <div
            className="photo"
            style={{ backgroundImage: `url(${"/img/group-photo-2.svg"})` }}
          ></div>
          <div
            className="frame-296"
            style={{ backgroundImage: `url(${"/img/group-photo-1.svg"})` }}
          ></div>
          <div
            className="frame-296"
            style={{ backgroundImage: `url(${"/img/group-photo-3.svg"})` }}
          ></div>
          <div
            className="frame-296"
            style={{ backgroundImage: `url(${"/img/group-photo-2.svg"})` }}
          ></div>
          <div className="overlap-group1-2">
            <div
              className="frame-2969"
              style={{ backgroundImage: `url(${"/img/group-photo-1.svg"})` }}
            ></div>
            <div className="arrow">
              <div className="arrow-forward-outline-1">
                <div className="overlap-group-6">
                  <img className="group-arrow-icon" src="img/arrow-icon.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
>>>>>>> bcf7f8e... rename:src/Components/communityGroupPhotos/CommunityGroupPhotos.jsx
      </div>
    </div>
  )
}

<<<<<<< HEAD:src/components/communityGroupPhotos/CommunityGroupPhotos.jsx
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
=======
>>>>>>> bcf7f8e... rename:src/Components/communityGroupPhotos/CommunityGroupPhotos.jsx
export default CommunityGroupPhotos


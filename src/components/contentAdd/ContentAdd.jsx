import React from 'react'
import Text from '../../screens/courseManager/addLesson/Text'
import Image from '../lessonImage/Image'
import Video from '../videoPlayer/Video'

const ContentAdd = ({data, setVideoModal, setImageModal, setTextModal}) => {
  return (
    <>
      {
        data.length > 0 &&
          data.map((vid, index) => (
            <div key={index}>
              <Video
              title={vid.videoTitle}
              description={vid.videoDescription}
              url={vid.videoLink || vid.videoResource?.preview}
              thumbnail={vid.videoCover?.preview}
              />
              <Image src={vid.lessonImg?.preview} desc={vid.photoDescription} />
              <Text heading={vid.textHeading} desc={vid.textDescription} />
          </div>
        ))
      }
      <div className='admin-lesson-create-btn-wrapper'>
        <button className='secondary-btn' onClick={() => setVideoModal(true)}>
          <img src='/img/video-outline.svg' alt='video icon' />{' '}
          <span>Add video</span>
        </button>
        <button className='secondary-btn' onClick={() => setImageModal(true)}>
          <img src='/img/image-outline.svg' alt='image_icon' />
          <span>Add image</span>
        </button>
        <button className='secondary-btn' onClick={() => setTextModal(true)}>
          <img src='/img/text-outline.svg' alt='text icon' />{' '}
          <span>Add text</span>
        </button>
      </div>
    </>
    )
}

export default ContentAdd

import React, { useState, useEffect } from 'react'

import {
  GET_COVERIMG,
  GET_VIDEO,
  VIDEO_COVER,
  LESSON_IMG
} from '../../../utils/urlConstants'

import Video from '../../../components/videoPlayer/Video'
import Text from '../../courseManager/addLesson/Text'
import Image from '../../../components/lessonImage/Image'
import LessonTest from './LessonTest'

const LessonDetail = ({ data, id }) => {
  const [lessonData, setLessonData] = useState([])
  const textData = data?.data?.texts.map((text) => {
    return text
  })
  const videoData = data?.data?.videos.map((video) => {
    return video
  })
  const photoData = data?.data?.photos.map((photo) => {
    return photo
  })

  useEffect(() => {
    setLessonData([textData, videoData, photoData])
  }, [])
  const newData = lessonData.flat()

  return (
    <div className='lesson-description-wrapper'>
      <h1>{data?.data?.title}</h1>
      <div className='lesson-description-img-wrapper'>
        <img
          src={`${GET_COVERIMG}${data?.data?.coverImg}`}
          alt={`${data?.data?.title}_img`}
        />
      </div>
      {newData
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .map((data, index) => (
          <div key={index}>
            <Text heading={data?.textHeading} desc={data?.textDescription} />
            <Video
              title={data?.videoTitle}
              description={data?.videoDescription}
              url={
                data?.videoLink === 'undefined'
                  ? `${GET_VIDEO}${data?.videoResource}`
                  : data?.videoLink
              }
              thumbnail={`${VIDEO_COVER}${data?.videoCover}`}
            />

            {data?.lessonImg === undefined ? (
              ''
            ) : (
              <Image
                src={`${LESSON_IMG}${data?.lessonImg}`}
                desc={data?.isImgDesc === true && data?.photoDescription}
              />
            )}
          </div>
        ))}
      <LessonTest id={id} />
    </div>
  )
}

export default React.memo(LessonDetail)

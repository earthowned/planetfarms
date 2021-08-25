import React, { useState, useEffect } from 'react'

import Text from '../../screens/courseManager/addLesson/Text'
import { GET_VIDEO, LESSON_IMG, VIDEO_COVER } from '../../utils/urlConstants'
import Image from '../lessonImage/Image'
import Video from '../videoPlayer/Video'

const RichText = ({ data }) => {
  const [newData, setNewData] = useState([])
  const textData = data?.rich_text?.texts?.map((text) => {
    return text
  })
  const videoData = data?.rich_text?.videos?.map((video) => {
    return video
  })
  const photoData = data?.rich_text?.photos?.map((photo) => {
    return photo
  })

  useEffect(() => {
    setNewData([textData, videoData, photoData])
  }, [data])
  const flattenData = newData.flat()
  return (
    <>
      {flattenData
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
            {data?.lessonImg && (
              <Image
                src={`${LESSON_IMG}${data?.lessonImg}`}
                desc={data?.isImgDesc === true && data?.photoDescription}
              />
            )}
          </div>
        ))}
    </>
  )
}

export default RichText

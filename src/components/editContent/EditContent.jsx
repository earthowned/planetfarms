import { useState, useEffect } from 'react'
import { GET_VIDEO, VIDEO_COVER, LESSON_IMG } from '../../utils/urlConstants'
import Text from '../../screens/courseManager/addLesson/Text'
import Image from '../lessonImage/Image'
import Video from '../videoPlayer/Video'

const EditContent = ({
  data,
  newLessonData,
  setEditTextModel,
  setEditPhotoModel,
  setEditVideoModel,
  removeTextItem,
  removePhoto,
  removeVideo,
  removeLocalData,
  editImageFunc,
  editVideoFunc,
  editTextFunc
}) => {
  const [allLessonData, setAllLessonData] = useState([])

  useEffect(() => {
    setAllLessonData(data, newLessonData)
  }, [data, newLessonData])

  function video (data) {
    if (typeof data?.videoResource === 'string') {
      return `${GET_VIDEO}${data?.videoResource}`
    } else {
      return data?.videoResource?.preview
    }
  }

  return (
    <>{
      data && <>
       {
        data?.rich_text?.photos && data?.rich_text?.photos.map(item => {
          return  <Image
                src={
                  typeof item?.lessonImg === 'string'
                    ? `${LESSON_IMG}${item?.lessonImg}`
                    : item?.lessonImg.preview
                }
                id={item?.id || item?.itemId}
                modelPopUp={editImageFunc}
                setEditPhotoModel={setEditPhotoModel}
                isEditable
                desc={item?.isImgDesc === true && item?.photoDescription}
                onRemove={item?.id ? removePhoto : removeLocalData}
              />
        })
      }

      {
        data?.rich_text?.texts && data?.rich_text?.texts.map(item => {
          return  <Text
              heading={item?.textHeading}
              desc={item?.textDescription}
              isEditable
              setEditTextModel={setEditTextModel}
              modelPopUp={editTextFunc}
              id={item?.id || item?.itemId}
              onRemove={item?.id ? removeTextItem : removeLocalData}
            />
        })
      }

      {
        data?.rich_text?.videos && data?.rich_text?.videos.map(item => {
          return  <Video
              title={item?.videoTitle}
              description={item?.videoDescription}
              url={
                item?.videoLink === '' || item?.videoLink === undefined
                  ? video(item)
                  : item?.videoLink
              }
              thumbnail={
                typeof item?.videoCover === 'string'
                  ? `${VIDEO_COVER}${item?.videoCover}`
                  : item?.videoCover?.preview
              }
              setEditVideoModel={setEditVideoModel}
              isEditable
              id={item?.id || item?.itemId}
              modelPopUp={editVideoFunc}
              onRemove={item?.id ? removeVideo : removeLocalData}
            />
        })
      }
      </>
    }
    </>
  )
}

export default EditContent

import { useState, useEffect } from 'react'
import { GET_VIDEO, VIDEO_COVER, LESSON_IMG } from '../../../utils/urlConstants'
import Image from '../../../components/lessonImage/Image'
import Video from '../../../components/videoPlayer/Video'
import Text from '../addLesson/Text'

const EditContent = ({
  data,
  newLessonData,
  setEditTextModel,
  setEditPhotoModel,
  setEditVideoModel,
  modelPopUp,
  removeTextItem,
  removePhoto,
  removeVideo,
  removeLocalData
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
    <>
      {data
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .map((data, index) => (
          <div key={index}>
            <Text
              heading={data?.textHeading}
              desc={data?.textDescription}
              isEditable
              setEditTextModel={setEditTextModel}
              modelPopUp={modelPopUp}
              id={data?.id || data?.itemId}
              onRemove={data?.id ? removeTextItem : removeLocalData}
            />
            <Video
              title={data?.videoTitle}
              description={data?.videoDescription}
              url={
                data?.videoLink === '' || data?.videoLink === undefined
                  ? video(data)
                  : data?.videoLink
              }
              thumbnail={
                typeof data?.videoCover === 'string'
                  ? `${VIDEO_COVER}${data?.videoCover}`
                  : data?.videoCover?.preview
              }
              setEditVideoModel={setEditVideoModel}
              isEditable
              id={data?.id || data?.itemId}
              modelPopUp={modelPopUp}
              onRemove={data?.id ? removeVideo : removeLocalData}
            />

            {data?.lessonImg === undefined ? (
              ''
            ) : (
              <Image
                src={
                  typeof data?.lessonImg === 'string'
                    ? `${LESSON_IMG}${data?.lessonImg}`
                    : data?.lessonImg.preview
                }
                id={data?.id || data?.itemId}
                modelPopUp={modelPopUp}
                setEditPhotoModel={setEditPhotoModel}
                isEditable
                desc={data?.isImgDesc === true && data?.photoDescription}
                onRemove={data?.id ? removePhoto : removeLocalData}
              />
            )}
          </div>
        ))}
    </>
  )
}

export default EditContent

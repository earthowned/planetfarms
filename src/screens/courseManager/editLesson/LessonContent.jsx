import { useState, useEffect } from 'react'
import { GET_VIDEO, VIDEO_COVER, LESSON_IMG } from '../../../utils/urlConstants'
import Image from '../../../components/lessonImage/Image'
import Video from '../../../components/videoPlayer/Video'
import Text from '../addLesson/Text'

const LessonContent = ({
  lessonData,
  newLessonData,
  setEditTextModel,
  setEditPhotoModel,
  setEditVideoModel,
  modelPopUp,
  removeTextItem,
  removePhoto,
  removeVideo
}) => {
  const [allLessonData, setAllLessonData] = useState([])

  useEffect(() => {
    setAllLessonData(lessonData, newLessonData)
  }, [lessonData, newLessonData])
  console.log(allLessonData)

  function video (data) {
    if (typeof data?.videoResource === 'string') {
      return `${GET_VIDEO}${data?.videoResource}`
    } else {
      return data?.videoResource?.preview
    }
  }
  return (
    <>
      {lessonData
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .map((data, index) => (
          <div key={index}>
            <Text
              heading={data?.textHeading}
              desc={data?.textDescription}
              isEditable
              setEditTextModel={setEditTextModel}
              modelPopUp={modelPopUp}
              id={data?.id}
              onRemove={removeTextItem}
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
              id={data?.id}
              modelPopUp={modelPopUp}
              onRemove={removeVideo}
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
                id={data?.id}
                modelPopUp={modelPopUp}
                setEditPhotoModel={setEditPhotoModel}
                isEditable
                desc={data?.isImgDesc === true && data?.photoDescription}
                onRemove={removePhoto}
              />
            )}
          </div>
        ))}
    </>
  )
}

export default LessonContent

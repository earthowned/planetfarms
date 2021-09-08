import { useState, useEffect } from 'react'
import { GET_VIDEO, VIDEO_COVER, LESSON_IMG } from '../../utils/urlConstants'
import Text from '../../screens/courseManager/lesson/Text'
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
  editTextFunc,
  setOldData,
  formData
}) => {
  const [allLessonData, setAllLessonData] = useState([])
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
    setNewData([textData, videoData, photoData, formData])
    setOldData(
      [textData, videoData, photoData].flat().sort((a, b) => a.order - b.order)
    )
  }, [data])

  const flattenData = newData.flat()

  useEffect(() => {
    setAllLessonData(data, newLessonData)
  }, [data, newLessonData])

  return (
    <>
      {flattenData
        .sort((a, b) => a.order - b.order)
        .map((data, index) => (
          <div key={index}>
            <Text
              heading={data?.textHeading}
              desc={data?.textDescription}
              heading={data?.textHeading}
              desc={data?.textDescription}
              isEditable
              setEditTextModel={setEditTextModel}
              modelPopUp={editTextFunc}
              id={data?.id || data?.itemId}
              onRemove={data?.id ? removeTextItem : removeLocalData}
            />
            <Video
              title={data?.videoTitle}
              description={data?.videoDescription}
              url={
                data?.videoLink === '' || data?.videoLink === 'undefined'
                  ? typeof data?.videoResource === 'string'
                      ? `${GET_VIDEO}${data?.videoResource}`
                      : data?.videoResource?.preview
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
              modelPopUp={editVideoFunc}
              onRemove={data?.id ? removeVideo : removeLocalData}
            />
            {data?.lessonImg && (
              <Image
                src={
                  typeof data?.lessonImg === 'string'
                    ? `${LESSON_IMG}${data?.lessonImg}`
                    : data?.lessonImg.preview
                }
                desc={data?.isImgDesc === true && data?.photoDescription}
                id={data?.id || data?.itemId}
                modelPopUp={editImageFunc}
                setEditPhotoModel={setEditPhotoModel}
                isEditable
                desc={data?.isImgDesc === true && data?.photoDescription}
                onRemove={data?.id ? removePhoto : removeLocalData}
              />
            )}
          </div>
        ))}
      {/* {
      data && <>
        {
        data?.rich_text?.photos && data?.rich_text?.photos.map(item => {
          return (
            <Image
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
          )
        })
      }

        {
        data?.rich_text?.texts && data?.rich_text?.texts.map(item => {
          return (
            <Text
              heading={item?.textHeading}
              desc={item?.textDescription}
              isEditable
              setEditTextModel={setEditTextModel}
              modelPopUp={editTextFunc}
              id={item?.id || item?.itemId}
              onRemove={item?.id ? removeTextItem : removeLocalData}
            />
          )
        })
      }

        {
        data?.rich_text?.videos && data?.rich_text?.videos.map(item => {
          return (
            <Video
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
          )
        })
      }
      </>
    } */}
    </>
  )
}

export default EditContent

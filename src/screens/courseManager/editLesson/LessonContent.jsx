import { GET_VIDEO, VIDEO_COVER, LESSON_IMG } from '../../../utils/urlConstants'
import Image from '../../../components/lessonImage/Image'
import Video from '../../../components/videoPlayer/Video'
import Text from '../addLesson/Text'

const LessonContent = ({
  lessonData,
  setEditTextModel,
  setEditPhotoModel,
  setEditVideoModel,
  modelPopUp,
  removeTextItem,
  removePhoto,
  removeVideo
}) => {
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
                data?.videoLink === ''
                  ? `${GET_VIDEO}${data?.videoResource}`
                  : data?.videoLink
              }
              thumbnail={`${VIDEO_COVER}${data?.videoCover}`}
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
                src={`${LESSON_IMG}${data?.lessonImg}`}
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
